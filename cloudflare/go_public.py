"""Make MarsFlex public on Cloudflare in one command.

What it does (about 2 minutes):
  1. starts the Python API on this PC in production mode, locked to our Worker with a fresh secret key
  2. opens a Cloudflare quick tunnel to the API (the address changes every time)
  3. tells the Pages project (https://marsflex.pages.dev) where the API is, and sets the secret key
  4. redeploys the site (static files in build/ + the Worker that forwards /v1 to the API)
  5. checks the public address

Needs:  CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID in the environment (never in files), a built `build/`
        folder (cd frontend && npm run build:cf) and cloudflared (CLOUDFLARED=path, or on PATH).
The PC has to stay on: the maths runs here. Stop with:  python cloudflare/go_public.py --stop
"""
import json, os, re, secrets, shutil, subprocess, sys, time, urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RUN = ROOT / 'cloudflare' / '.run'
PROJECT = 'marsflex'
PORT = 8791
TOKEN = os.environ.get('CLOUDFLARE_API_TOKEN', '')
ACCOUNT = os.environ.get('CLOUDFLARE_ACCOUNT_ID', '')
# DETACHED_PROCESS | CREATE_NEW_PROCESS_GROUP | CREATE_BREAKAWAY_FROM_JOB: keep running after this script (and its terminal) ends
DETACHED = 0x00000008 | 0x00000200 | 0x01000000 if os.name == 'nt' else 0


def api(method, path, body=None):
    req = urllib.request.Request('https://api.cloudflare.com/client/v4' + path, method=method,
                                 data=json.dumps(body).encode() if body is not None else None,
                                 headers={'Authorization': 'Bearer ' + TOKEN, 'Content-Type': 'application/json'})
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.load(r)


def stop():
    pids = RUN / 'pids.json'
    if pids.exists():
        for name, pid in json.loads(pids.read_text()).items():
            subprocess.run(['taskkill', '/PID', str(pid), '/T', '/F'], capture_output=True)
            print('stopped', name, pid)
        pids.unlink()
    else:
        print('nothing recorded as running')


def main():
    if '--stop' in sys.argv:
        return stop()
    if not TOKEN or not ACCOUNT:
        sys.exit('Set CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID first (environment variables).')
    if not (ROOT / 'build' / 'index.html').exists():
        sys.exit('build/ is missing. Run:  cd frontend && npm run build:cf')
    cloudflared = os.environ.get('CLOUDFLARED') or shutil.which('cloudflared')
    if not cloudflared and '--no-start' not in sys.argv:
        sys.exit('cloudflared not found. Set CLOUDFLARED=path\\to\\cloudflared.exe')
    python = ROOT / '.marsflex-venv' / ('Scripts/python.exe' if os.name == 'nt' else 'bin/python')
    RUN.mkdir(parents=True, exist_ok=True)
    attach = '--no-start' in sys.argv
    if attach:
        key, url = os.environ['MF_KEY'], os.environ['MF_TUNNEL']
    else:
        stop()
        key = secrets.token_urlsafe(32)

    if not attach:
        print('1/5 starting the API (production mode, locked to the Worker)...')
        env = dict(os.environ, MARSFLEX_PROD='1', MARSFLEX_PROXY_KEY=key)
        env.pop('CLOUDFLARE_API_TOKEN', None)
        api_proc = subprocess.Popen([str(python), '-m', 'uvicorn', 'marsflex.api:app', '--app-dir', str(ROOT / 'backend'),
                                     '--host', '127.0.0.1', '--port', str(PORT)], cwd=ROOT, env=env, creationflags=DETACHED,
                                    stdout=open(RUN / 'api.log', 'w'), stderr=subprocess.STDOUT)
        for _ in range(60):
            try:
                urllib.request.urlopen(urllib.request.Request(f'http://127.0.0.1:{PORT}/v1/health', headers={'x-mf-key': key}), timeout=2)
                break
            except Exception:
                time.sleep(1)
        else:
            sys.exit('API did not start. See cloudflare/.run/api.log')

        print('2/5 opening the tunnel...')
        tlog = RUN / 'tunnel.log'
        tun = subprocess.Popen([cloudflared, 'tunnel', '--no-autoupdate', '--url', f'http://127.0.0.1:{PORT}'],
                               creationflags=DETACHED, stdout=open(tlog, 'w'), stderr=subprocess.STDOUT,
                               env={k: v for k, v in os.environ.items() if k != 'CLOUDFLARE_API_TOKEN'})
        url = None
        for _ in range(60):
            m = re.search(r'https://[a-z0-9-]+\.trycloudflare\.com', tlog.read_text(errors='ignore'))
            if m:
                url = m.group(0); break
            time.sleep(1)
        if not url:
            sys.exit('No tunnel address. See cloudflare/.run/tunnel.log')
        (RUN / 'pids.json').write_text(json.dumps({'api': api_proc.pid, 'tunnel': tun.pid}))
        print('   tunnel:', url)

    print('3/5 telling the Pages project where the API is...')
    res = api('PATCH', f'/accounts/{ACCOUNT}/pages/projects/{PROJECT}', {'deployment_configs': {'production': {'env_vars': {
        'API_ORIGIN': {'type': 'plain_text', 'value': url},
        'PROXY_KEY': {'type': 'secret_text', 'value': key}}}}})
    if not res.get('success'):
        sys.exit('Could not set the variables: ' + json.dumps(res.get('errors')))

    print('4/5 deploying the site...')
    shutil.copy2(ROOT / 'cloudflare' / 'worker.js', ROOT / 'build' / '_worker.js')
    run = subprocess.run(['npx', '--yes', 'wrangler@latest', 'pages', 'deploy', str(ROOT / 'build'), '--project-name', PROJECT,
                          '--branch', 'main', '--commit-dirty=true'], cwd=RUN, capture_output=True, text=True, encoding='utf-8', errors='replace', shell=(os.name == 'nt'))
    if run.returncode:
        sys.exit('Deploy failed:\n' + run.stdout[-800:] + run.stderr[-800:])

    print('5/5 checking https://%s.pages.dev ...' % PROJECT)
    time.sleep(8)
    for path in ('/', '/v1/health'):
        try:
            code = urllib.request.urlopen(urllib.request.Request('https://%s.pages.dev%s' % (PROJECT, path), headers={'User-Agent': 'Mozilla/5.0'}), timeout=40).status
        except Exception as e:
            code = getattr(e, 'code', str(e))
        print('  ', path, '->', code)
    print('\nPublic address: https://%s.pages.dev' % PROJECT)
    print('Keep this PC on. Stop everything with:  python cloudflare/go_public.py --stop')


if __name__ == '__main__':
    main()
