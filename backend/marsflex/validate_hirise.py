"""Read verified byte ranges from uncompressed official HiRISE TRN TIFF.

Retain five small native-resolution patches; compare at CTX's 20 m grid and
same 40 m central-difference slope baseline. This is a consistency test, not
independent absolute validation: USGS aligned this HiRISE product to CTX.
"""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import hashlib
import json
import math
import urllib.request
import time

import numpy as np
import rasterio
from rasterio.io import MemoryFile
from rasterio.windows import Window
from rasterio.warp import reproject, Resampling
import tifffile

from marsflex.catalog_ingest import fetch, now, digest

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / 'data/source/hirise'
OUT = ROOT / 'data/derived'
URL = 'https://asc-pds-services.s3.us-west-2.amazonaws.com/mosaic/mars2020_trn/HiRISE/JEZ_hirise_soc_006_DTM_MOLAtopography_DeltaGeoid_1m_Eqc_latTs0_lon0_blend40.tif'
SIZE = 1839545409
HEADER_BYTES = 172609
SAMPLES = [('crater_floor', 77.4509, 18.4446), ('delta', 77.385, 18.501), ('margin', 77.335, 18.476), ('skinner_ridge', 77.40617078, 18.458931), ('amalik', 77.40143171, 18.45068954)]


def read_range(start, end):
    cache = SRC / 'ranges'
    cache.mkdir(parents=True, exist_ok=True)
    path = cache / f'{start}-{end}.bin'
    checksum = path.with_suffix('.sha256')
    if path.exists() and checksum.exists() and path.stat().st_size == end-start+1 and digest(path) == checksum.read_text():
        return path.read_bytes()
    for attempt in range(3):
        try:
            req = urllib.request.Request(URL, headers={'Range': f'bytes={start}-{end}'})
            with urllib.request.urlopen(req, timeout=25) as response:
                if response.status != 206 or response.headers.get('Content-Range') != f'bytes {start}-{end}/{SIZE}':
                    raise ValueError('Invalid range response')
                value = response.read()
                if len(value) != end-start+1:
                    raise ValueError('Truncated range')
            path.write_bytes(value)
            checksum.write_text(hashlib.sha256(value).hexdigest())
            return value
        except Exception:
            if attempt == 2:
                raise
    raise RuntimeError('No range downloaded')


def metrics(values):
    values = np.asarray(values)
    values = values[np.isfinite(values)]
    return None if not len(values) else {'n': int(len(values)), 'median': float(np.median(values)),
             'p05': float(np.percentile(values, 5)), 'p95': float(np.percentile(values, 95)),
             'rmse': float(np.sqrt(np.mean(values**2)))}


def slope(z, affine):
    lat = np.rad2deg((affine.f + (np.arange(z.shape[0])+.5)*affine.e) / 3396190)
    dy, dx = np.gradient(z)
    return np.rad2deg(np.arctan(np.hypot(dx/(affine.a*np.cos(np.deg2rad(lat[:,None]))), dy/abs(affine.e))))


def main():
    SRC.mkdir(parents=True, exist_ok=True)
    meta_receipts = [fetch(URL[:-4]+suffix, SRC/name) for suffix, name in
                     [('.xml', 'trn.xml'), ('_pds3.lbl', 'trn_pds3.lbl')]]
    previous_path = OUT / 'hirise_validation.json'
    previous = json.loads(previous_path.read_text()) if previous_path.exists() else None
    header_file = SRC / 'verified_header.bin'
    if (previous and previous['source']['url'] == URL and header_file.exists()
            and digest(header_file) == previous['source']['header_sha256']):
        header = header_file.read_bytes()
    else:
        header = b''.join(read_range(start, min(start+65535, HEADER_BYTES-1)) for start in range(0, HEADER_BYTES, 65536))
    (SRC / 'verified_header.bin').write_bytes(header)
    with tifffile.TiffFile(SRC / 'verified_header.bin') as tif:
        page = tif.pages[0]
        if page.compression != 1 or page.rowsperstrip != 1 or page.bitspersample != 32 or page.samplesperpixel != 1:
            raise ValueError('This extractor requires the documented uncompressed 32-bit one-row strip TIFF')
        offsets, counts = page.dataoffsets, page.databytecounts
        width, height = page.imagewidth, page.imagelength
        dtype = np.dtype(tif.byteorder+'f4')
        if len(offsets) != height or any(n != width*4 for n in counts):
            raise ValueError('Unexpected source strip layout')
        if min(offsets) != HEADER_BYTES or max(o+n for o,n in zip(offsets, counts)) != SIZE:
            raise ValueError('Source extent does not match known object')
    with MemoryFile(header) as memory:
        with memory.open() as ds:
            profile = ds.profile.copy()
            affine = ds.transform
            metadata = {'url': URL, 'source_bytes': SIZE, 'width': width, 'height': height,
                        'crs_wkt': ds.crs.to_wkt(), 'transform': list(affine)[:6], 'bounds': list(ds.bounds),
                        'nodata': ds.nodata, 'header_sha256': hashlib.sha256(header).hexdigest(),
                        'scope': 'Source metadata and patches only; complete 1.84 GB file not downloaded.'}
    (SRC / 'raster_metadata.json').write_text(json.dumps(metadata, indent=2))
    grid = json.loads((OUT / 'grid.json').read_text())
    ctx_affine = rasterio.Affine(*grid['transform'])
    ctx = np.load(OUT / 'elevation.npy')
    records = []
    for name, lon, lat in SAMPLES:
        dest = SRC / (name+'_1m.tif')
        # 20x20 CTX posts; fetch additional 1 m boundary pixels for exact averaging.
        cc, rr = (~ctx_affine) * (math.radians(lon)*3396190, math.radians(lat)*3396190)
        c0, r0 = int(cc)-10, int(rr)-10
        target_affine = ctx_affine * rasterio.Affine.translation(c0, r0)
        target = ctx[r0:r0+20, c0:c0+20]
        left, top = target_affine*(0, 0)
        right, bottom = target_affine*(20, 20)
        sc0, sr0 = (~affine)*(left, top)
        sc1, sr1 = (~affine)*(right, bottom)
        sc0, sr0, sc1, sr1 = math.floor(sc0), math.floor(sr0), math.ceil(sc1), math.ceil(sr1)
        if sc0 < 0 or sr0 < 0 or sc1 > width or sr1 > height:
            raise ValueError('Validation patch outside reference extent')
        jobs = [(offsets[r]+sc0*4, offsets[r]+sc1*4-1) for r in range(sr0,sr1)]
        previous_patch = next((p for p in previous['patches'] if p['name'] == name), None) if previous else None
        if (previous_patch and previous['source']['url'] == URL and dest.exists()
                and digest(dest) == previous_patch['patch_sha256']
                and previous_patch['ctx_window'] == [c0,r0,20,20]
                and [(r['start'],r['end']) for r in previous_patch['source_ranges']] == jobs):
            with rasterio.open(dest) as ds:
                z = ds.read(1)
            range_receipts = previous_patch['source_ranges']
        else:
            with ThreadPoolExecutor(max_workers=16) as pool:
                rows = list(pool.map(lambda pair: read_range(*pair), jobs))
            z = np.frombuffer(b''.join(rows), dtype=dtype).reshape(sr1-sr0, sc1-sc0).astype('float32')
            range_receipts = [{'start':a, 'end':b, 'sha256':hashlib.sha256(v).hexdigest()} for (a,b),v in zip(jobs,rows)]
        native_affine = affine * rasterio.Affine.translation(sc0, sr0)
        p = profile.copy()
        p.update(width=z.shape[1], height=z.shape[0], transform=native_affine, compress='deflate', tiled=True, blockxsize=128, blockysize=128)
        with rasterio.open(dest, 'w', **p) as ds:
            ds.write(z, 1)
        valid = np.isfinite(z) & (z != metadata['nodata'])
        fraction = np.zeros((20,20), dtype='float32')
        averaged = np.full((20,20), np.nan, dtype='float32')
        kwargs = dict(src_transform=native_affine, src_crs=p['crs'], dst_transform=target_affine,
                      dst_crs=grid['source_crs_wkt'], resampling=Resampling.average)
        reproject(valid.astype('float32'), fraction, **kwargs)
        reproject(np.where(valid,z,np.nan), averaged, src_nodata=np.nan, dst_nodata=np.nan, **kwargs)
        averaged[fraction < .99999] = np.nan
        dz = target - averaged
        dslope = slope(target, target_affine) - slope(averaged, target_affine)
        # Exclude gradient boundaries: slope baseline is identical inside both grids.
        dslope = dslope[1:-1,1:-1]
        record = {'name': name, 'center_lonlat': [lon,lat], 'native_shape': list(z.shape),
                  'native_transform': list(native_affine)[:6], 'ctx_window': [c0,r0,20,20],
                  'source_ranges': range_receipts,
                  'native_valid_fraction': float(valid.mean()), 'ctx_cells_with_full_reference': int(np.isfinite(averaged).sum()),
                  'ctx_minus_averaged_hirise_elevation_m': metrics(dz),
                  'ctx_minus_hirise_slope_deg_at_same_baseline': metrics(dslope),
                  'patch_sha256': digest(dest), 'patch_path': str(dest.relative_to(ROOT))}
        records.append(record)
        np.savez_compressed(OUT / f'reference_{name}.npz', ctx=target, hirise_20m=averaged, full_coverage=fraction)
        print(name, 'valid reference cells',record['ctx_cells_with_full_reference'], 'dz',record['ctx_minus_averaged_hirise_elevation_m'], flush=True)
    report = {'generated_utc': now(), 'source': metadata, 'metadata_receipts': meta_receipts,
              'method': 'Area-average native HiRISE patches onto identical CTX 20 m cells; require complete valid coverage; compare central-difference slopes at 40 m map baseline.',
              'independence': 'NOT independent absolute accuracy validation: HiRISE TRN was aligned to CTX. PLACES heights also derive from HiRISE.',
              'scope': 'Five deliberately selected 400x400 m samples; not representative statistics for all Jezero and not astronaut-scale obstacle clearance.',
              'patches': records}
    (OUT / 'hirise_validation.json').write_text(json.dumps(report, indent=2))


if __name__ == '__main__':
    main()
