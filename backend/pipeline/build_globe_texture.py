"""Down-sample the USGS Viking MDIM 2.1 colorized global mosaic (232 m/pixel, ~12 GB) to a web-sized
equirectangular texture used by the 3D globe view.

Input : Mars_Viking_MDIM21_ClrMosaic_global_232m.tif in the project root (not stored in git; download from
        https://astrogeology.usgs.gov/search/map/mars_viking_colorized_global_mosaic_232m).
Output: data/derived/mars_globe_viking_6k.jpg (6144 x 3072, area-averaged) and a small JSON receipt.
Run   : python backend/pipeline/build_globe_texture.py
"""
from pathlib import Path
import hashlib, json
import numpy as np
import rasterio
from rasterio.enums import Resampling
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / 'Mars_Viking_MDIM21_ClrMosaic_global_232m.tif'
OUT = ROOT / 'data/derived'
W, H = 6144, 3072


def main():
    with rasterio.open(SRC) as s:
        assert s.count == 3 and s.dtypes[0] == 'uint8'
        left, bottom, right, top = s.bounds
        pix = s.read(out_shape=(3, H, W), resampling=Resampling.average)
        meta = {'source_file': SRC.name, 'source_size': [s.width, s.height], 'source_res_m': list(s.res),
                'bounds_m': [left, bottom, right, top], 'sphere_radius_m': right / np.pi}
    img = Image.fromarray(np.moveaxis(pix, 0, -1), 'RGB')
    out = OUT / 'mars_globe_viking_6k.jpg'
    img.save(out, quality=84, optimize=True, progressive=True)
    meta.update({'output': out.name, 'output_size': [W, H], 'output_bytes': out.stat().st_size,
                 'output_sha256': hashlib.sha256(out.read_bytes()).hexdigest(),
                 'resampling': 'area average of source pixels; no sharpening',
                 'credit': 'USGS Astrogeology Science Center / NASA, Viking MDIM 2.1 colorized global mosaic'})
    (OUT / 'mars_globe_viking_6k.json').write_text(json.dumps(meta, indent=2))
    print(json.dumps(meta, indent=2))


if __name__ == '__main__':
    main()
