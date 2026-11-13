"""Inspectable scientific display layers on the CTX grid, with native-scale legends."""
from pathlib import Path
import json,numpy as np
from PIL import Image
from marsflex.terrain import Terrain
ROOT=Path(__file__).resolve().parents[2];O=ROOT/'data/derived';S=ROOT/'data/source'
grid=json.loads((O/'grid.json').read_text());t=Terrain(np.load(O/'elevation.npy'),grid)
science=json.loads((O/'science_payload.json').read_text());validation=json.loads((O/'science_validation.json').read_text())
# Fixed slope ramp, independent of the user's time budget.
def color(values,stops,colors,alpha=170):
 out=np.zeros((*values.shape,4),dtype='uint8')
 for k in range(3):out[:,:,k]=np.interp(values,stops,[c[k] for c in colors]).astype('uint8')
 out[:,:,3]=alpha;return out
slope=color(t.slope,[0,5,10,15,20,35],[[15,53,70],[39,130,119],[192,198,103],[245,170,77],[220,79,58],[121,27,58]],180)
Image.fromarray(slope).save(O/'slope_overlay.png')
west,south,east,north=validation['crism_bounds_lonlat'];ch,cw=validation['crism_native_grid']
rr=np.floor((north-t.lat)/(north-south)*ch).astype(int);cc=np.floor((t.lon-west)/(east-west)*cw).astype(int)
inside=(rr[:,None]>=0)&(rr[:,None]<ch)&(cc[None,:]>=0)&(cc[None,:]<cw)
legends={}
for name in ['BD1900_2','D2300','BD2500_2']:
 native=np.fromfile(S/f'crism_{name}.f32',dtype='<f4').reshape(ch,cw)
 a=native[np.clip(rr,0,ch-1)[:,None],np.clip(cc,0,cw-1)[None,:]]
 valid=inside&np.isfinite(a)&(a!=65535)
 # Display-only quantiles. Raw signed values remain available in evidence lookup.
 lo,hi=np.percentile(a[valid],[5,95]);img=color(a,[lo,(lo+hi)/2,hi],[[57,30,106],[76,135,170],[245,223,109]],165);img[~valid]=0
 Image.fromarray(img).save(O/f'{name}_overlay.png')
 legends[name]={'low':float(lo),'high':float(hi),'percentiles':[5,95],'unit':'dimensionless summary parameter','native_spacing_m':36,'resampling':'nearest native pixel; no added spectral resolution'}
contacts=[]
a,b,c,d,e,f=grid['transform'];R=grid['radius_m']
for line in science['geology']['contacts']:
 contacts.append({'type':line['type'],'coordinates':[[float(np.degrees((c+x*a)/R)),float(np.degrees((f+y*e)/R))] for x,y in line['points']]})
(O/'map_layers.json').write_text(json.dumps({'crism':legends,'geology':{'legend':science['geology']['legend'],'contacts':contacts,'scope':science['geology']['scope']},'slope':{'stops_deg':[0,5,10,15,20,35],'scope':'CTX surface slope; not a subpixel rock or sand hazard map'},'candidates':validation['candidates']},indent=2))
print('Derived image, slope, spectral layers and geologic contacts prepared.')
