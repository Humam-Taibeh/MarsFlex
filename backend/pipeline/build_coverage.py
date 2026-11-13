"""Spatial evidence availability on the existing grid, not a science score."""
from pathlib import Path
import json
import math
import numpy as np
import rasterio
from rasterio.features import rasterize, shapes
from shapely.geometry import shape, mapping
from shapely.ops import transform
from scipy.ndimage import label
from scipy.spatial import cKDTree
from marsflex.terrain import RADIUS

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'data/derived'


def main():
    grid = json.loads((OUT/'grid.json').read_text())
    catalog = json.loads((OUT/'catalog.json').read_text())
    places = json.loads((OUT/'places.json').read_text())
    science = json.loads((OUT/'science_validation.json').read_text())
    h,w = grid['shape']
    affine = rasterio.Affine(*grid['transform'])
    lon = np.rad2deg((affine.c+(np.arange(w)+.5)*affine.a)/RADIUS)
    lat = np.rad2deg((affine.f+(np.arange(h)+.5)*affine.e)/RADIUS)
    xx, yy = np.meshgrid(lon,lat)
    aoi = grid['aoi_lonlat']
    inside = (xx>=aoi[0])&(xx<=aoi[2])&(yy>=aoi[1])&(yy<=aoi[3])
    ctx_valid = np.isfinite(np.load(OUT/'elevation.npy'))
    footprints = [transform(lambda x,y,z=None:(np.deg2rad(x)*RADIUS,np.deg2rad(y)*RADIUS),shape(i['geometry']))
                  for i in catalog['items'] if i['collection']=='mro_hirise_socet_dtms' and i['geometry_usable_for_discovery']]
    hi_footprint = rasterize([(g,1) for g in footprints],out_shape=(h,w),transform=affine,fill=0,dtype='uint8')>0
    west,south,east,north = science['crism_bounds_lonlat']
    ch,cw = science['crism_native_grid']
    rr = np.floor((north-yy)/(north-south)*ch).astype(int)
    cc = np.floor((xx-west)/(east-west)*cw).astype(int)
    in_crism = (rr>=0)&(rr<ch)&(cc>=0)&(cc<cw)
    valid_native = np.ones((ch,cw),dtype=bool)
    for name in ['BD1900_2','D2300','BD2500_2']:
        values=np.fromfile(ROOT/f'data/source/crism_{name}.f32',dtype='<f4').reshape(ch,cw)
        valid_native &= np.isfinite(values)&(values!=65535)
    crism_valid=np.zeros((h,w),bool)
    crism_valid[in_crism]=valid_native[rr[in_crism],cc[in_crism]]
    # Unit-sphere chord distances converted to spherical geodesic distances.
    def xyz(lon,lat):
        lon,lat=np.deg2rad(lon),np.deg2rad(lat)
        return np.column_stack((np.cos(lat)*np.cos(lon),np.cos(lat)*np.sin(lon),np.sin(lat)))
    rover=places['records']
    tree=cKDTree(xyz([p['lon'] for p in rover],[p['lat'] for p in rover]))
    chord,_=tree.query(xyz(xx.ravel(),yy.ravel()))
    rover_distance=(2*RADIUS*np.arcsin(np.clip(chord/2,0,1))).reshape(h,w)
    mask=(ctx_valid.astype('uint8') + 2*crism_valid.astype('uint8') + 4*hi_footprint.astype('uint8')
          + 8*(rover_distance<=500).astype('uint8'))
    np.save(OUT/'evidence_coverage_bits.npy',mask)
    np.save(OUT/'nearest_places_distance_m.npy',rover_distance.astype('float32'))
    joint=ctx_valid&crism_valid&hi_footprint&inside
    labels,n=label(joint)  # 4-connected availability components, not travel corridors.
    areas=[]
    # Exact spherical area of each equirectangular cell bounded by raster edges.
    row_top=(affine.f+np.arange(h)*affine.e)/RADIUS
    row_bottom=(affine.f+(np.arange(h)+1)*affine.e)/RADIUS
    area_by_row=RADIUS*affine.a*(np.sin(row_top)-np.sin(row_bottom))
    weights=np.broadcast_to(area_by_row[:,None],(h,w))
    for component in range(1,n+1):
        chosen=labels==component
        areas.append({'component':component,'cells':int(chosen.sum()),
                      'area_km2':float(weights[chosen].sum()/1e6)})
    areas.sort(key=lambda a:a['area_km2'],reverse=True)
    features=[]
    for geometry,value in shapes(joint.astype('uint8'),mask=joint,transform=affine):
        geo=transform(lambda x,y,z=None:(np.rad2deg(np.asarray(x)/RADIUS),np.rad2deg(np.asarray(y)/RADIUS)),shape(geometry))
        features.append({'type':'Feature','geometry':mapping(geo),'properties':{'kind':'evidence_availability','body':'Mars'}})
    (OUT/'evidence_coverage_mars.json').write_text(json.dumps({'type':'FeatureCollection','body':'Mars',
        'coordinate_system':'Mars planetocentric / east degrees; not RFC7946 Earth WGS84','features':features},separators=(',',':')))
    report={'aoi_cells':int(inside.sum()),'aoi_area_km2':float(weights[inside].sum()/1e6),
            'ctx_valid_aoi_cells':int((ctx_valid&inside).sum()),
            'crism_valid_aoi_cells_on_ctx_grid':int((crism_valid&inside).sum()),
            'hirise_catalog_footprint_aoi_cells':int((hi_footprint&inside).sum()),
            'joint_available_cells':int(joint.sum()),'joint_area_km2':float(weights[joint].sum()/1e6),
            'joint_cells_within_500m_of_localized_rover_record':int((joint&(rover_distance<=500)).sum()),
            'largest_components':areas[:10],
            'bits':{'1':'valid CTX elevation','2':'valid containing native CRISM summary pixel',
                    '4':'HiRISE DTM catalog footprint ONLY, not valid-pixel proof',
                    '8':'within 500m of sparse tactical rover localization (design context distance)'},
            'limits':['Availability does not prove science value or traversability.',
                      'CRISM lookup preserves native 36m information; a 20m coverage grid adds no spectral detail.',
                      'HiRISE footprint coverage is not the TRN mosaic valid-data mask.',
                      '500m proximity is context, not observation footprint or independent validation.',
                      'Scientific corridor selection remains pending spectra and target evidence review.']}
    (OUT/'evidence_coverage_report.json').write_text(json.dumps(report,indent=2))
    print(json.dumps(report,indent=2))


if __name__=='__main__':main()
