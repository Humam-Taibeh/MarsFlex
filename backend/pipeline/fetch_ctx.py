"""Download the documented USGS public archive object; verify HTTP ranges."""
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
import urllib.request
import hashlib
import json
import time

URL = 'https://asc-pds-services.s3.us-west-2.amazonaws.com/mosaic/mars2020_trn/CTX/JEZ_ctx_B_soc_008_DTM_MOLAtopography_DeltaGeoid_20m_Eqc_latTs0_lon0.tif'
SIZE = 9662387
ROOT = Path(__file__).resolve().parents[2]

def main():
    dest = ROOT / 'data/source/ctx_trn_20m.tif'
    chunks = ROOT / 'data/source/.download'
    chunks.mkdir(parents=True, exist_ok=True)
    def fetch(start):
        end = min(start + 65535, SIZE-1)
        part = chunks / str(start)
        if part.exists() and part.stat().st_size == end-start+1:
            return start
        for attempt in range(4):
            try:
                req = urllib.request.Request(URL, headers={'Range': f'bytes={start}-{end}'})
                with urllib.request.urlopen(req, timeout=35) as response:
                    if response.status != 206 or response.headers.get('Content-Range') != f'bytes {start}-{end}/{SIZE}':
                        raise ValueError('Archive did not honor requested range')
                    data = response.read()
                if len(data) != end-start+1:
                    raise ValueError('Incomplete range')
                part.write_bytes(data)
                return start
            except Exception:
                if attempt == 3:
                    raise
                time.sleep(1)
    offsets = list(range(0, SIZE, 65536))
    with ThreadPoolExecutor(max_workers=12) as pool:
        for i, result in enumerate(as_completed([pool.submit(fetch, n) for n in offsets]), 1):
            result.result()
            if i % 20 == 0 or i == len(offsets):
                print(f'Downloaded {i}/{len(offsets)} verified ranges', flush=True)
    temporary = dest.with_suffix('.part')
    with temporary.open('wb') as output:
        for start in offsets:
            output.write((chunks / str(start)).read_bytes())
    if temporary.stat().st_size != SIZE or temporary.read_bytes()[:4] not in (b'II*\x00', b'MM\x00*'):
        raise ValueError('Invalid TIFF')
    temporary.replace(dest)
    manifest = {'url': URL, 'bytes': SIZE, 'sha256': hashlib.sha256(dest.read_bytes()).hexdigest(),
                'retrieved_utc': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime()),
                'publisher': 'USGS Astrogeology Science Center',
                'product': 'JEZ_ctx_B_soc_008_DTM_MOLAtopography_DeltaGeoid_20m_Eqc_latTs0_lon0.tif'}
    (dest.parent / 'source_manifest.json').write_text(json.dumps(manifest, indent=2))
    print(json.dumps(manifest), flush=True)

if __name__ == '__main__':
    main()
