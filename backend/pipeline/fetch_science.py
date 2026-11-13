"""Fetch native USGS geology features and selected native CRISM summary bands."""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed
import urllib.request,urllib.parse,json,re,hashlib,time
import numpy as np
from pyproj import CRS,Transformer

ROOT=Path(__file__).resolve().parents[2]
SRC=ROOT/'data/source'
SERVICE='https://services.arcgis.com/v01gqwM5QqNysAAi/arcgis/rest/services/Jezero_FeatureServiceFromPro/FeatureServer'
CRISM='https://pds-geosciences.wustl.edu/mro/mro-m-crism-5-rdr-mptargeted-v1/mrocr_4001/mtrdr/2007/2007_029/hrl000040ff/hrl000040ff_07_su183j_mtr3.img'

def request_json(url,params):
    with urllib.request.urlopen(url+'?'+urllib.parse.urlencode(params),timeout=40) as r:d=json.load(r)
    if 'error' in d:raise ValueError(d['error'])
    return d

def geology():
    service=json.loads((SRC/'geology_service.json').read_text())
    sr=service['spatialReference'];crs=CRS.from_wkt(sr['wkt'])
    project=Transformer.from_crs(crs.geodetic_crs,crs,always_xy=True)
    grid=json.loads((ROOT/'data/derived/grid.json').read_text())
    a,b,c,d,e,f=grid['transform'];h,w=grid['shape'];R=grid['radius_m']
    lons=np.rad2deg(np.linspace(c,c+w*a,30)/R);lats=np.rad2deg(np.linspace(f+h*e,f,30)/R)
    xx,yy=np.meshgrid(lons,lats);xs,ys=project.transform(xx.ravel(),yy.ravel())
    envelope={'xmin':float(min(xs)),'ymin':float(min(ys)),'xmax':float(max(xs)),'ymax':float(max(ys)), 'spatialReference':sr}
    for layer in [5,8]:
        params={'f':'json','where':'1=1','geometry':json.dumps(envelope),'geometryType':'esriGeometryEnvelope',
                'spatialRel':'esriSpatialRelIntersects','returnIdsOnly':'true'}
        ids=request_json(f'{SERVICE}/{layer}/query',params)['objectIds'] or []
        features=[]
        for start in range(0,len(ids),100):
            d=request_json(f'{SERVICE}/{layer}/query',{'f':'json','objectIds':','.join(map(str,ids[start:start+100])),
                     'outFields':'*','returnGeometry':'true'})
            if d.get('exceededTransferLimit'):raise ValueError('Feature response truncated')
            features+=d['features']
        if len(features)!=len(ids):raise ValueError('Incomplete feature collection')
        out={'source_url':f'{SERVICE}/{layer}','retrieved_utc':time.strftime('%Y-%m-%dT%H:%M:%SZ',time.gmtime()),
             'spatialReference':sr,'query_envelope':envelope,'features':features}
        (SRC/f'geology_features_{layer}.json').write_text(json.dumps(out,separators=(',',':')))
        print('Geology layer',layer,'features',len(features),flush=True)

def crism():
    hdr=(SRC/'hrl000040ff_07_su183j_mtr3.hdr').read_text()
    names=[s.strip() for s in re.search(r'band names = \{(.*?)\}',hdr,re.S).group(1).split(',')]
    shape=[751,455];band_bytes=shape[0]*shape[1]*4;total=band_bytes*60
    assert 'interleave = bsq' in hdr and 'byte order = 0' in hdr and 'header offset = 0' in hdr
    selected=['BD1900_2','D2300','BD2500_2'];manifest=[]
    jobs=[]
    for name in selected:
        index=names.index(name);start=index*band_bytes;end=start+band_bytes
        for p in range(start,end,65536):jobs.append((name,p,min(p+65535,end-1)))
    chunks=SRC/'.crism_download';chunks.mkdir(exist_ok=True)
    def fetch(job):
        name,start,end=job;dest=chunks/f'{start}.bin'
        if dest.exists() and dest.stat().st_size==end-start+1:return job
        for attempt in range(3):
            try:
                req=urllib.request.Request(CRISM,headers={'Range':f'bytes={start}-{end}'})
                with urllib.request.urlopen(req,timeout=40) as r:
                    if r.status!=206 or r.headers.get('Content-Range','').lower()!=f'bytes {start}-{end}/{total}':raise ValueError('Unexpected range response')
                    data=r.read()
                if len(data)!=end-start+1:raise ValueError('Truncated band range')
                dest.write_bytes(data);return job
            except Exception:
                if attempt==2:raise
    with ThreadPoolExecutor(max_workers=8) as pool:
        for i,future in enumerate(as_completed([pool.submit(fetch,j) for j in jobs]),1):
            future.result()
            if i%20==0 or i==len(jobs):print('CRISM ranges',i,'/',len(jobs),flush=True)
    for name in selected:
        index=names.index(name);start=index*band_bytes
        data=b''.join((chunks/f'{p}.bin').read_bytes() for p in range(start,start+band_bytes,65536))
        assert len(data)==band_bytes
        (SRC/f'crism_{name}.f32').write_bytes(data)
        values=np.frombuffer(data,dtype='<f4');valid=np.isfinite(values)&(values!=65535)
        manifest.append({'name':name,'band_index_zero_based':index,'byte_range':[start,start+band_bytes-1],
                         'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'valid_pixels':int(valid.sum()),
                         'range':[float(values[valid].min()),float(values[valid].max())]})
    out={'source_url':CRISM,'product_id':'HRL000040FF_07_SU183J_MTR3','source_total_bytes':total,
         'shape':shape,'map_spacing_m':36,'no_data':65535,'bands':manifest,
         'note':'Only listed complete native bands downloaded using verified byte ranges; not the full 60-band cube.',
         'retrieved_utc':time.strftime('%Y-%m-%dT%H:%M:%SZ',time.gmtime())}
    (SRC/'crism_manifest.json').write_text(json.dumps(out,indent=2));print(json.dumps(out,indent=2),flush=True)

if __name__=='__main__':
    geology()
    crism()
