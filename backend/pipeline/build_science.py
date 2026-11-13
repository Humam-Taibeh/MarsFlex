"""Source-scale science/context overlay; never modifies terrain routing costs."""
from pathlib import Path
import json,base64,gzip,math,re
import numpy as np
from PIL import Image
from pyproj import CRS,Transformer
from shapely.geometry import Polygon,GeometryCollection,MultiLineString,box
from shapely.ops import transform
from shapely import make_valid
from rasterio.features import rasterize
from rasterio.transform import Affine

ROOT=Path(__file__).resolve().parents[2]
SRC=ROOT/'data/source';OUT=ROOT/'data/derived'
def enc(data):return base64.b64encode(gzip.compress(data,mtime=0)).decode()

def build():
 grid=json.loads((OUT/'grid.json').read_text());h,w=grid['shape'];a,b,c,d,e,f=grid['transform'];R=grid['radius_m']
 affine=Affine(a,b,c,d,e,f);clip=box(c,f+h*e,c+w*a,f)
 service=json.loads((SRC/'geology_service.json').read_text());crs=CRS.from_wkt(service['spatialReference']['wkt'])
 tx=Transformer.from_crs(crs,CRS.from_wkt(grid['source_crs_wkt']),always_xy=True)
 units=json.loads((SRC/'geology_features_8.json').read_text())['features']
 contacts=json.loads((SRC/'geology_features_5.json').read_text())['features']
 legend={};shapes=[];overlap=np.zeros((h,w),dtype=np.uint16)
 for feat in units:
  shape=GeometryCollection()
  for ring in feat['geometry']['rings']:shape=shape.symmetric_difference(make_valid(Polygon(ring)))
  shape=transform(tx.transform,shape).intersection(clip)
  if shape.is_empty:continue
  attr=feat['attributes'];key=int(attr['unit'])+1
  legend[str(key)]={k:attr[k] for k in ['name','symbol','Unit_Description','Unit_Interpretation']}
  shapes.append((shape,key))
  overlap+=rasterize([(shape,1)],out_shape=(h,w),transform=affine,dtype='uint8')
 unit_grid=rasterize(shapes,out_shape=(h,w),transform=affine,dtype='uint8',fill=0)
 # Do not resolve genuine polygon overlaps by draw order.
 unit_grid[overlap>1]=255
 np.save(OUT/'geology_units_display.npy',unit_grid)
 renderer=json.loads((SRC/'geology_layer_8.json').read_text())['drawingInfo']['renderer']['uniqueValueInfos']
 colors={int(x['value'])+1:x['symbol']['color'][:3] for x in renderer}
 rgba=np.zeros((h,w,4),dtype='uint8')
 for key,color in colors.items():rgba[unit_grid==key]=color+[100]
 Image.fromarray(rgba).save(OUT/'geology_units_display.png')
 geo_image='data:image/png;base64,'+base64.b64encode((OUT/'geology_units_display.png').read_bytes()).decode()
 lines=[]
 for feat in contacts:
  shape=transform(tx.transform,MultiLineString(feat['geometry']['paths'])).intersection(clip)
  if shape.is_empty:continue
  parts=list(shape.geoms) if hasattr(shape,'geoms') else [shape]
  for part in parts:
   if part.geom_type!='LineString':continue
   # Simplification is for rendered context only; preserve untouched source vertices.
   pts=[[(x-c)/a,(y-f)/e] for x,y in part.simplify(5,preserve_topology=True).coords]
   lines.append({'type':feat['attributes']['TYPE'],'points':np.round(pts,3).tolist()})
 science={'geology':{'unit_grid':enc(unit_grid.tobytes()),'legend':legend,'image':geo_image,'contacts':lines,
  'scale':'1:75000','source':'USGS Sun & Stack 2020, SIM 3464 feature service',
  'scope':'Published service says viewing purposes only. Context display and map-label lookup only; no movement or science-score penalties. Authoritative GIS confirmation pending.',
  'source_service': 'https://services.arcgis.com/v01gqwM5QqNysAAi/arcgis/rest/services/Jezero_FeatureServiceFromPro/FeatureServer',
  'overlap_cells':int((overlap>1).sum())}}
 manifest=json.loads((SRC/'crism_manifest.json').read_text());ch,cw=manifest['shape']
 hdr=(SRC/'hrl000040ff_07_su183j_mtr3.hdr').read_text()
 cr=3394839.813316312;lat_ts=15.;x0,y0,px=4422632.2,1109935.5,36.
 # Parse WKT with an independent library and verify the angular transform.
 cwkt=re.search(r'coordinate system string = \{(.*?)\}',hdr,re.S).group(1)
 ccrs=CRS.from_wkt(cwkt);inverse=Transformer.from_crs(ccrs,ccrs.geodetic_crs,always_xy=True)
 bounds=[math.degrees(x0/(cr*math.cos(math.radians(lat_ts)))),math.degrees((y0-ch*px)/cr),
         math.degrees((x0+cw*px)/(cr*math.cos(math.radians(lat_ts)))),math.degrees(y0/cr)]
 check=inverse.transform(x0,y0)
 assert np.allclose(check,[bounds[0],bounds[3]],atol=1e-8)
 bands={};raw={}
 for band in manifest['bands']:
  name=band['name'];arr=np.fromfile(SRC/f'crism_{name}.f32',dtype='<f4').reshape(ch,cw)
  raw[name]=arr;bands[name]=enc(arr.tobytes())
 lon=bounds[0]+(np.arange(cw)+.5)/cw*(bounds[2]-bounds[0]);lat=bounds[3]-(np.arange(ch)+.5)/ch*(bounds[3]-bounds[1])
 west,south,east,north=grid['aoi_lonlat'];inside=(lon[None,:]>=west)&(lon[None,:]<=east)&(lat[:,None]>=south)&(lat[:,None]<=north)
 valid=np.ones((ch,cw),dtype=bool)
 for arr in raw.values():valid&=np.isfinite(arr)&(arr!=65535)
 vals=raw['BD2500_2'][valid&inside];lo,hi=np.percentile(vals,[5,95])
 stretch=np.clip((raw['BD2500_2']-lo)/(hi-lo),0,1)
 img=np.zeros((ch,cw,4),dtype='uint8');img[:,:,0]=125;img[:,:,1]=(80+160*stretch).astype('uint8');img[:,:,2]=255;img[:,:,3]=np.where(valid,stretch*170,0).astype('uint8')
 Image.fromarray(img).save(OUT/'crism_BD2500_native.png')
 crism_image='data:image/png;base64,'+base64.b64encode((OUT/'crism_BD2500_native.png').read_bytes()).decode()
 # Candidate preview uses complete 3x3 native-pixel patches to reduce single-pixel spikes.
 from scipy.ndimage import median_filter,minimum_filter
 med=median_filter(np.where(valid,raw['BD2500_2'],-np.inf),size=3)
 patch_valid=minimum_filter(valid.astype('uint8'),size=3).astype(bool)
 candidates=[];used=[]
 from marsflex.terrain import Terrain,ground_distance
 t=Terrain(np.load(OUT/'elevation.npy'),grid)
 indices=np.argsort(np.where(inside&patch_valid,med,-np.inf).ravel())[::-1]
 for index in indices:
  r,cl=divmod(int(index),cw)
  if not (inside[r,cl] and patch_valid[r,cl]) or not np.isfinite(med[r,cl]) or med[r,cl]<=0:break
  point=(float(lon[cl]),float(lat[r]))
  if any(ground_distance(*point,*other)<500 for other in used):continue
  try:node=t.node(*point)
  except ValueError:continue
  candidates.append({'node':node,'native_row':r,'native_col':cl,'lon':point[0],'lat':point[1],
                     'label':f'Spectral candidate {len(candidates)+1}',
                     'patch_median_BD2500_2':float(med[r,cl]),
                     'note':'Selected by upper 3x3-patch BD2500_2 within AOI. Not mineral confirmation or global science utility.'})
  used.append(point)
  if len(candidates)==3:break
 science['crism']={'manifest':manifest,'shape':[ch,cw],'bounds':bounds,'bands':bands,'image':crism_image,
                  'display_stretch':{'p5':float(lo),'p95':float(hi),'note':'relative display contrast, not probability'},
                  'candidates':candidates,'native_valid_aoi_cells':int((valid&inside).sum()),
                  'scope':'Source-native 36 m map grid. Containing native-pixel lookup; no interpolation or spectral super-resolution. Registration checked by metadata, not independent landmarks.'}
 (OUT/'science_payload.json').write_text(json.dumps(science,separators=(',',':')))
 report={'geology_features':len(units),'contact_features':len(contacts),'unit_labels':{k:v['name'] for k,v in legend.items()},
         'geology_overlap_cells':science['geology']['overlap_cells'],'crism_native_grid':[ch,cw],'crism_map_spacing_m':36,
         'crism_bounds_lonlat':bounds,'crism_native_valid_aoi_cells':int((valid&inside).sum()),'candidates':candidates}
 (OUT/'science_validation.json').write_text(json.dumps(report,indent=2));print(json.dumps(report,indent=2))

if __name__=='__main__':build()
