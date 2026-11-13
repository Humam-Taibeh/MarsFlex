"""Native DTM surface models. Artificial display bases are never interpreted strata."""
from pathlib import Path
from functools import lru_cache
import json,base64,hashlib,math
import numpy as np
import rasterio
from fastapi import APIRouter,HTTPException
ROOT=Path(__file__).resolve().parents[2]
router=APIRouter(prefix='/v1/geomodel')
DEFS={'skinner_ridge':('Skinner Ridge / Swift Run & Hazeltop','HiRISE',1,'data/source/hirise/skinner_ridge_1m.tif'),
      'amalik':('Amalik / Shuyak','HiRISE',1,'data/source/hirise/amalik_1m.tif'),
      'margin':('Margin terrain','HiRISE',1,'data/source/hirise/margin_1m.tif'),
      'delta':('Delta terrain','HiRISE',1,'data/source/hirise/delta_1m.tif'),
      'crater_floor':('Crater floor','HiRISE',1,'data/source/hirise/crater_floor_1m.tif'),
      'regional':('Jezero regional context','CTX',20,'data/derived/ctx_aoi_buffer_20m.tif')}
@lru_cache(maxsize=6)
def model(name):
    if name not in DEFS:raise HTTPException(404,'Unknown terrain model')
    title,instrument,spacing,filename=DEFS[name]
    with rasterio.open(ROOT/filename) as src:
        z=src.read(1,masked=True).filled(np.nan).astype('<f4')
        if not np.isfinite(z).all():raise HTTPException(422,'Model contains missing elevation; not filled silently')
        affine=src.transform;bounds=list(src.bounds);crs=src.crs.to_wkt()
    radius=3396190.;h,w=z.shape
    center=[math.degrees((bounds[0]+bounds[2])/2/radius),math.degrees((bounds[1]+bounds[3])/2/radius)]
    base=math.floor((float(z.min())-max(35,spacing*4))/10)*10
    source=json.loads((ROOT/'data/derived/hirise_validation.json').read_text())['source']['url'] if instrument=='HiRISE' else 'https://asc-pds-services.s3.us-west-2.amazonaws.com/mosaic/mars2020_trn/CTX/JEZ_ctx_B_soc_008_DTM_MOLAtopography_DeltaGeoid_20m_Eqc_latTs0_lon0.tif'
    return {'id':name,'title':title,'instrument':instrument,'spacing_map_m':spacing,'shape':[h,w],
            'transform':list(affine)[:6],'radius_m':radius,'center_lonlat':center,'bounds_lonlat':[math.degrees(v/radius) for v in bounds],
            'elevation_range_m':[float(z.min()),float(z.max())],'base_elevation_m':base,
            'base_scope':'Artificial display base only. No subsurface interfaces, lithology or depth-to-bedrock inferred.',
            'vertical_reference':'Source MOLA topography / DeltaGeoid areoid elevations; local relief rendering.',
            'horizontal_frame':'Local east/north metres with east distances corrected at patch center latitude.',
            'source_url':source,'source_patch_sha256':hashlib.sha256((ROOT/filename).read_bytes()).hexdigest(),
            'source_crs_wkt':crs,'data':base64.b64encode(z.tobytes()).decode(),'encoding':'base64-float32-little-endian'}
@router.get('/models')
def models():
    return {'models':[{k:v for k,v in model(name).items() if k not in ['data','source_crs_wkt']} for name in DEFS],
            'scope':'Surface-derived block models, not tomographic subsurface reconstructions.'}
@router.get('/models/{name}')
def detail(name:str):return model(name)
