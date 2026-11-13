"""Verified USGS orbital imagery for visual interpretation; not obstacle certification."""
from pathlib import Path
import json,urllib.request,hashlib,io,math,time
from concurrent.futures import ThreadPoolExecutor
import numpy as np
import rasterio,tifffile
from rasterio.io import MemoryFile
from rasterio.warp import reproject,Resampling
from rasterio.transform import Affine
from PIL import Image
ROOT=Path(__file__).resolve().parents[1];SRC=ROOT/'data/source/imagery';OUT=ROOT/'data/derived';SRC.mkdir(exist_ok=True)
BASE='https://asc-pds-services.s3.us-west-2.amazonaws.com/mosaic/mars2020_trn/'
CTX=BASE+'CTX/JEZ_ctx_B_soc_008_orthoMosaic_6m_Eqc_latTs0_lon0.tif'
HIRISE=BASE+'HiRISE/JEZ_hirise_soc_006_orthoMosaic_25cm_Eqc_latTs0_lon0_first.tif'
def sha(b):return hashlib.sha256(b).hexdigest()
def fetch(url,start,end,total):
 key=sha(f'{url}:{start}:{end}'.encode());p=SRC/(key+'.bin');receipt=SRC/(key+'.json')
 if p.exists() and receipt.exists() and sha(p.read_bytes())==json.loads(receipt.read_text())['sha256']:return p.read_bytes()
 for attempt in range(4):
  try:
   with urllib.request.urlopen(urllib.request.Request(url,headers={'Range':f'bytes={start}-{end}'}),timeout=60) as r:
    b=r.read()
    if r.status!=206 or r.headers.get('Content-Range')!=f'bytes {start}-{end}/{total}' or len(b)!=end-start+1:raise ValueError('Invalid source range')
   p.write_bytes(b);receipt.write_text(json.dumps({'url':url,'start':start,'end':end,'total':total,'sha256':sha(b)}));return b
  except Exception:
   if attempt==3:raise
   time.sleep(.5)
def stretch(a,valid):
 lo,hi=np.percentile(a[valid],[1,99]);v=np.clip((a.astype(float)-lo)/(hi-lo),0,1);return (v*255).astype('uint8'),[float(lo),float(hi)]
def main():
 grid=json.loads((OUT/'grid.json').read_text());h,w=grid['shape'];aff=Affine(*grid['transform']);report={}
 p=SRC/'ctx_ortho_6m.tif'
 if not p.exists():
  chunks=list(ThreadPoolExecutor(6).map(lambda ab:fetch(CTX,*ab,36269402),[(i,min(i+2097151,36269401)) for i in range(0,36269402,2097152)]));p.write_bytes(b''.join(chunks))
 with rasterio.open(p) as src:
  assert src.transform.a==6 and src.count==1 and src.crs==rasterio.crs.CRS.from_wkt(grid['source_crs_wkt'])
  dest=np.zeros((h*4,w*4),dtype='uint8');target=aff*Affine.scale(.25)
  reproject(rasterio.band(src,1),dest,src_transform=src.transform,src_crs=src.crs,src_nodata=src.nodata,dst_transform=target,dst_crs=src.crs,dst_nodata=0,resampling=Resampling.bilinear)
  gray,limits=stretch(dest,dest>0);Image.fromarray(gray).save(OUT/'ctx_orbital.jpg',quality=94)
  report['ctx']={'url':CTX,'source_sha256':sha(p.read_bytes()),'source_spacing_m':6,'display_spacing_map_m':5,'display_shape':list(dest.shape),'display_transform':list(target)[:6],'source_nodata':src.nodata,'source_crs':src.crs.to_wkt(),'contrast_percentiles':[1,99],'contrast_dn':limits,'interpolation':'bilinear; resampling to 5 m does not add source detail','valid_fraction':float((dest>0).mean())}
 print('CTX imagery ready',flush=True)
 header_path=SRC/'hirise_header.bin'
 if not header_path.exists():header_path.write_bytes(fetch(HIRISE,0,1048575,7358523457))
 header=header_path.read_bytes()
 with tifffile.TiffFile(io.BytesIO(header)) as tif:
  page=tif.pages[0];assert page.shape==(85952,85600) and page.dtype==np.dtype('uint8') and page.compression==1
  offsets=list(page.dataoffsets)
 with MemoryFile(header) as mem:
  with mem.open() as src:profile=src.profile;source_aff=src.transform;crs=src.crs;assert crs==rasterio.crs.CRS.from_wkt(grid['source_crs_wkt'])
 lon,lat=77.385,18.501;R=grid['radius_m'];cx=math.radians(lon)*R;cy=math.radians(lat)*R
 col=int((cx-source_aff.c)/.25)-512;row=int((source_aff.f-cy)/.25)-512
 patchpath=SRC/'hirise_delta_25cm.tif';receipts=[]
 if not patchpath.exists():
  jobs=[(offsets[r],offsets[r+15]+85600-1) for r in range(row,row+1024,16)]
  def load(ab):return np.frombuffer(fetch(HIRISE,*ab,7358523457),dtype='uint8').reshape(16,85600)[:,col:col+1024]
  arr=np.concatenate(list(ThreadPoolExecutor(8).map(load,jobs)))
  profile.update(height=1024,width=1024,transform=source_aff*Affine.translation(col,row),compress='deflate')
  with rasterio.open(patchpath,'w',**profile) as out:out.write(arr,1)
 with rasterio.open(patchpath) as src:
  arr=src.read(1);gray,limits=stretch(arr,arr>0);Image.fromarray(gray).save(OUT/'hirise_delta.jpg',quality=95)
  report['hirise']={'url':HIRISE,'header_sha256':sha(header),'source_full_bytes':7358523457,'patch_sha256':sha(patchpath.read_bytes()),'native_spacing_m':.25,'shape':[1024,1024],'transform':list(src.transform)[:6],'bounds_lonlat':[math.degrees(v/R) for v in src.bounds],'center':{'lon':lon,'lat':lat},'contrast_percentiles':[1,99],'contrast_dn':limits,'valid_fraction':float((arr>0).mean()),'scope':'One 256 x 256 map-metre patch; visual evidence only; not full AOI coverage or measured obstacle clearance.'}
 (OUT/'imagery_manifest.json').write_text(json.dumps(report,indent=2));print('HiRISE patch ready',flush=True)
if __name__=='__main__':main()
