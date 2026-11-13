"""Read-only mission evidence. Never changes costs, routes or mission colors."""
from functools import lru_cache
from pathlib import Path
import json, math
import numpy as np
from shapely.geometry import box, LineString, GeometryCollection
from shapely.ops import unary_union
from marsflex.terrain import ground_distance
OUT=Path(__file__).resolve().parents[2]/'data/derived'

@lru_cache(maxsize=1)
def reference_geometry():
    grid=json.loads((OUT/'grid.json').read_text())
    report=json.loads((OUT/'hirise_validation.json').read_text())
    a,_,c,_,e,f=grid['transform'];cells=[]
    for patch in report['patches']:
        col,row,w,h=patch['ctx_window']
        with np.load(OUT/f"reference_{patch['name']}.npz") as data:
            valid=np.isfinite(data['hirise_20m'])&np.isfinite(data['ctx'])&(data['full_coverage']>=.99999)
        for dr,dc in zip(*np.where(valid)):
            x=c+(col+int(dc))*a;y=f+(row+int(dr))*e
            cells.append(box(x,y+e,x+a,y))
    return unary_union(cells) if cells else GeometryCollection()

def coverage_for_route(coordinates,reference,radius):
    """Clip each map edge, scaling its ground length by the intersection fraction.
    Repeated traversal counts each time. Undefined for absent/zero-length routes.
    This local 20 m edge approximation is not a global geodesic intersection.
    """
    total=covered=0.
    for start,end in zip(coordinates[:-1],coordinates[1:]):
        p=(math.radians(start[0])*radius,math.radians(start[1])*radius)
        q=(math.radians(end[0])*radius,math.radians(end[1])*radius)
        line=LineString([p,q])
        if line.length==0:continue
        distance=float(ground_distance(start[0],start[1],end[0],end[1]))
        fraction=min(1.,max(0.,line.intersection(reference).length/line.length))
        total+=distance;covered+=distance*fraction
    return {'route_length_m':total,'covered_length_m':covered,'uncovered_length_m':max(0.,total-covered),
            'covered_percent':100*covered/total if total>0 else None,
            'status':'assessed' if total>0 else 'no_route_length',
            'meaning':'Length inside downloaded, fully valid HiRISE-to-CTX comparison cells; not independently validated safe terrain.'}

def reference_outlines():
    radius=json.loads((OUT/'grid.json').read_text())['radius_m'];g=reference_geometry()
    parts=list(g.geoms) if hasattr(g,'geoms') else [g]
    return [[[math.degrees(x/radius),math.degrees(y/radius)] for x,y in p.exterior.coords]
            for p in parts if p.geom_type=='Polygon']
