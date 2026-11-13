"""Checks against preserved source metadata, not inferred screen alignment."""
from pathlib import Path
import hashlib,json,re
import numpy as np
from pyproj import CRS,Transformer

ROOT=Path(__file__).resolve().parents[2]
SRC=ROOT/'data/source'

def test_native_crism_bands_match_source_manifest_and_header():
    manifest=json.loads((SRC/'crism_manifest.json').read_text())
    hdr=(SRC/'hrl000040ff_07_su183j_mtr3.hdr').read_text()
    names=[s.strip() for s in re.search(r'band names = \{(.*?)\}',hdr,re.S).group(1).split(',')]
    for band in manifest['bands']:
        raw=(SRC/f"crism_{band['name']}.f32").read_bytes()
        assert hashlib.sha256(raw).hexdigest()==band['sha256']
        assert names[band['band_index_zero_based']]==band['name']
        assert len(raw)==751*455*4==band['bytes']
        a=np.frombuffer(raw,dtype='<f4')
        assert np.sum(np.isfinite(a)&(a!=65535))==band['valid_pixels']

def test_crism_angular_bounds_use_own_projection():
    hdr=(SRC/'hrl000040ff_07_su183j_mtr3.hdr').read_text()
    crs=CRS.from_wkt(re.search(r'coordinate system string = \{(.*?)\}',hdr,re.S).group(1))
    info=[s.strip() for s in re.search(r'map info = \{(.*?)\}',hdr,re.S).group(1).split(',')]
    x0,y0,dx,dy=map(float,info[3:7])
    assert dx==dy==36
    inverse=Transformer.from_crs(crs,crs.geodetic_crs,always_xy=True)
    west,north=inverse.transform(x0,y0);east,south=inverse.transform(x0+455*dx,y0-751*dy)
    report=json.loads((ROOT/'data/derived/science_validation.json').read_text())
    assert np.allclose(report['crism_bounds_lonlat'],[west,south,east,north],rtol=0,atol=1e-8)
    assert abs(crs.ellipsoid.semi_major_metre-3396190)>1000 # not the CTX reference sphere

def test_geology_display_has_known_units_and_candidates_have_native_evidence():
    S=json.loads((ROOT/'data/derived/science_payload.json').read_text())
    grid=np.load(ROOT/'data/derived/geology_units_display.npy')
    assert set(np.unique(grid))<=({0,255}|{int(k) for k in S['geology']['legend']})
    arr=np.fromfile(SRC/'crism_BD2500_2.f32',dtype='<f4').reshape(751,455)
    for c in S['crism']['candidates']:
        r,col=c['native_row'],c['native_col'];patch=arr[r-1:r+2,col-1:col+2]
        assert patch.shape==(3,3) and np.all(np.isfinite(patch)&(patch!=65535))
        assert float(np.median(patch))==c['patch_median_BD2500_2']
