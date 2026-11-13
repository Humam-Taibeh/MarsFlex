"""Local-only launcher: create an isolated environment, install pinned dependencies, open app."""
from pathlib import Path
import sys,subprocess,venv,threading,time,urllib.request,webbrowser,os
ROOT=Path(__file__).resolve().parent

def main():
    if sys.version_info < (3,12):
        raise SystemExit('Python 3.12 or newer is required. Install Python, then launch again.')
    env=ROOT/'.marsflex-venv';python=env/('Scripts/python.exe' if os.name=='nt' else 'bin/python')
    if not python.exists():
        print('Preparing the local MarsFlex environment (first launch only)...',flush=True)
        venv.EnvBuilder(with_pip=True).create(env)
    check=subprocess.run([str(python),'-c','import fastapi,uvicorn,rasterio,numpy,scipy,shapely,pyproj,PIL'],capture_output=True)
    if check.returncode:
        print('Installing the recorded project dependencies. Internet is needed for this first setup.',flush=True)
        subprocess.run([str(python),'-m','pip','install','-r',str(ROOT/'backend/requirements-tested.txt')],check=True)
    def open_when_ready():
        for _ in range(120):
            try:
                with urllib.request.urlopen('http://127.0.0.1:8000/v1/health',timeout=1) as r:
                    if r.status==200:webbrowser.open('http://127.0.0.1:8000');return
            except Exception:time.sleep(.5)
    threading.Thread(target=open_when_ready,daemon=True).start()
    print('MarsFlex is opening at http://127.0.0.1:8000 . Keep this window open. Ctrl+C stops it.',flush=True)
    try:subprocess.run([str(python),'-m','uvicorn','marsflex.api:app','--app-dir',str(ROOT/'backend'),'--host','127.0.0.1','--port','8000'],cwd=ROOT,check=True)
    except KeyboardInterrupt:pass
if __name__=='__main__':main()
