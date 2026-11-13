"""Read-only route evidence diagnostics. Does not construct or alter routing costs."""
from pathlib import Path
from functools import lru_cache
import math,json
import numpy as np
import rasterio,shapely
from affine import Affine
from shapely.geometry import box,LineString,GeometryCollection
from shapely.ops import unary_union
from marsflex.mission_evidence import reference_geometry,coverage_for_route
from marsflex.validate_hirise import slope
ROOT=Path(__file__).resolve().parents[2]
@lru_cache(maxsize=1)
def reference_data():
    meta=json.loads((ROOT/'data/derived/grid.json').read_text());A=Affine(*meta['transform'])
    ctx=slope(np.load(ROOT/'data/derived/elevation.npy').astype(float),A)
    patches=[];matched=[];regions=[]
    for p in json.loads((ROOT/'data/derived/hirise_validation.json').read_text())['patches']:
        col,row,w,h=p['ctx_window'];pa=A*Affine.translation(col,row)
        with np.load(ROOT/f"data/derived/reference_{p['name']}.npz") as d:
            z=np.array(d['hirise_20m'],dtype=float);v=np.isfinite(z)&np.isfinite(d['ctx'])&(d['full_coverage']>=.99999)
        valid=np.zeros_like(v);valid[1:-1,1:-1]=v[1:-1,1:-1]&v[:-2,1:-1]&v[2:,1:-1]&v[1:-1,:-2]&v[1:-1,2:]
        hs=slope(z,pa)
        for dr,dc in zip(*np.where(valid)):
            r,c=row+int(dr),col+int(dc);x,y=A*(c,r)
            matched.append((box(x,y+A.e,x+A.a,y),float(ctx[r,c]),float(hs[dr,dc])))
        with rasterio.open(ROOT/f"data/source/hirise/{p['name']}_1m.tif") as src:
            z=src.read(1,masked=True).astype(float).filled(np.nan);na=src.transform;ns=slope(z,na)
        v=np.isfinite(z);valid=np.zeros_like(v);valid[1:-1,1:-1]=v[1:-1,1:-1]&v[:-2,1:-1]&v[2:,1:-1]&v[1:-1,:-2]&v[1:-1,2:]
        height,width=z.shape;x0,y0=na*(1,height-1);x1,y1=na*(width-1,1);region=box(x0,y0,x1,y1)
        rr,cc=np.where(~valid[1:-1,1:-1]);rr+=1;cc+=1
        if len(rr):
            x=na.c+cc*na.a;y=na.f+rr*na.e;region=region.difference(unary_union(shapely.box(x,y+na.e,x+na.a,y)))
        regions.append(region);patches.append((na,ns,valid,region))
    full=reference_geometry()
    return meta,A,ctx,patches,matched,full,full.intersection(unary_union(regions)),unary_union([m[0] for m in matched])
def stats(values):
    v=np.asarray(values,dtype=float)
    return {'unique_cells':len(v),'max_deg':float(v.max()) if len(v) else None,'mean_deg':float(v.mean()) if len(v) else None,'cells_over_20_deg':int((v>20).sum())}
def sampled_cells(line,A,values,valid=None):
    if line.is_empty or line.length==0:return []
    minx,miny,maxx,maxy=line.bounds;c0,r1=~A*(minx,miny);c1,r0=~A*(maxx,maxy);h,w=values.shape
    rr,cc=np.mgrid[max(0,math.floor(r0)):min(h,math.floor(r1)+1),max(0,math.floor(c0)):min(w,math.floor(c1)+1)];rr=rr.ravel();cc=cc.ravel()
    if valid is not None:
        ok=valid[rr,cc];rr=rr[ok];cc=cc[ok]
    x=A.c+cc*A.a;y=A.f+rr*A.e;cells=shapely.box(x,y+A.e,x+A.a,y);idx=np.flatnonzero(shapely.intersects(cells,line));idx=idx[shapely.length(shapely.intersection(cells[idx],line))>1e-7]
    return values[rr[idx],cc[idx]].tolist()
def analyse_route(coordinates):
    meta,A,ctx,patches,matched,full,native_region,common_region=reference_data();R=meta['radius_m']
    if len(coordinates)<2:return {'status':'no_route','scope':'Planned blue route only; no safety certification.'}
    line=unary_union(LineString([(math.radians(p[0])*R,math.radians(p[1])*R) for p in coordinates]));clipped=line.intersection(native_region)
    native=[]
    for na,ns,valid,region in patches:native.extend(sampled_cells(clipped.intersection(region),na,ns,valid))
    common=[m for m in matched if line.intersection(m[0]).length>1e-7]
    return {'status':'assessed','scope':'Planned blue route only; no safety certification. No extrapolation outside loaded coverage.',
      'loaded_comparison_coverage':coverage_for_route(coordinates,full,R),
      'native_analysis_coverage':coverage_for_route(coordinates,native_region,R),
      'native_scale_comparison':{'CTX_20m':stats(sampled_cells(clipped,A,ctx)),'HiRISE_1m':stats(native)},
      'matched_20m_coverage':coverage_for_route(coordinates,common_region,R),
      'matched_20m_comparison':{'CTX_20m':stats([m[1] for m in common]),'HiRISE_averaged_to_20m':stats([m[2] for m in common])},
      'method':'Unique cells with positive-length route intersection; finite central-difference stencils; arithmetic cell means. HiRISE area-averaged to CTX20m for matched comparison;40m map baseline, east-west ground distance corrected by latitude. Native1m comparison uses2m baseline. Repeated traversals count in coverage length, not cell counts.',
      'source':'NASA MRO / USGS TRN CTX and HiRISE DTM; data/derived/hirise_validation.json. Related products, not independent absolute validation.'}
