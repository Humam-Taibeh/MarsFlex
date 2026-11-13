from typing import Literal
"""Independent MarsFlex data/terrain API. Run: uvicorn marsflex.api:app --host 127.0.0.1.

This is a local research backend, not a life-critical navigation service.
No network downloads or LLM calls occur while evaluating a mission.
"""
from functools import lru_cache
from pathlib import Path
import base64
import gzip
import json
import math
import threading

import numpy as np
from fastapi import FastAPI, HTTPException, Query, Request
from fastapi.middleware.gzip import GZipMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, ConfigDict, Field
from shapely.geometry import shape, box

from marsflex.terrain import Terrain, Model, ground_distance

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'data/derived'
app = FastAPI(title='MarsFlex scientific data and mission API', version='0.10.0',
              description='Mars planetocentric coordinates. Research planning only; time model uncalibrated.')
COMPUTE_LOCK = threading.Lock()
# Compress JSON/JS/CSS (the terrain payload and Cesium bundle are several MB uncompressed).
app.add_middleware(GZipMiddleware, minimum_size=1024, compresslevel=5)

_CACHEABLE = ('/v1/map/image/', '/v1/terrain/surface', '/v1/layers/', '/assets/', '/cesium/')


@app.middleware('http')
async def cache_static_products(request: Request, call_next):
    """Derived layers are build products that only change when the data pipeline is re-run."""
    response = await call_next(request)
    if request.method == 'GET' and response.status_code == 200 and request.url.path.startswith(_CACHEABLE)             and 'cache-control' not in response.headers:
        response.headers['Cache-Control'] = 'public, max-age=3600'
    return response


@lru_cache(maxsize=8)
def document(name):
    return json.loads((OUT / name).read_text())


@lru_cache(maxsize=1)
def terrain():
    return Terrain(np.load(OUT / 'elevation.npy'), document('grid.json'))


def parse_bbox(value):
    try:
        west, south, east, north = map(float, value.split(','))
        if not all(math.isfinite(x) for x in [west, south, east, north]):
            raise ValueError()
        if not (0 <= west < east <= 360 and -90 <= south < north <= 90):
            raise ValueError()
        return box(west, south, east, north)
    except (ValueError, TypeError):
        raise HTTPException(422, 'bbox must be west,south,east,north; Mars east longitude, no antimeridian crossing')


class Position(BaseModel):
    model_config = ConfigDict(extra='forbid', allow_inf_nan=False)
    lon: float = Field(ge=0, lt=360)
    lat: float = Field(ge=-90, le=90)


class Activity(Position):
    type: Literal["required", "negotiable"] = "required"
    id: str = Field(min_length=1, max_length=80)
    dwell_min: float = Field(ge=0, le=1440)


class Mission(BaseModel):
    model_config = ConfigDict(extra='forbid', allow_inf_nan=False)
    position: Position
    habitat: Position
    remaining_min: float = Field(gt=0, le=1440)
    reserve_min: float = Field(ge=0, le=1440)
    activities: list[Activity] = Field(default_factory=list, max_length=6)
    detour: Position | None = None
    detour_dwell_min: float = Field(default=10, ge=0, le=1440)
    include_field: bool = False


@app.get('/v1/health')
def health():
    required = ['catalog.json','places.json','grid.json','elevation.npy',
                'evidence_coverage_report.json','evidence_coverage_bits.npy',
                'science_validation.json','science_payload.json','geology_units_display.npy',
                'science_targets.json','hirise_validation.json','reference_skinner_ridge.npz','reference_amalik.npz']
    missing = [name for name in required if not (OUT/name).is_file()]
    if missing:
        raise HTTPException(503, {'message':'Data snapshot incomplete','missing':missing})
    return {'status': 'ready', 'body': 'Mars', 'model': 'research_scenario_uncalibrated',
            'catalog_products': len(document('catalog.json')['items']),
            'places_records': document('places.json')['rover_records']}


@app.get('/v1/catalog')
def catalog(bbox: str | None = None, collection: str | None = None,
            offset: int = Query(0, ge=0), limit: int = Query(50, ge=1, le=200)):
    area = parse_bbox(bbox) if bbox else None
    records = document('catalog.json')['items']
    selected = [r for r in records if (collection is None or r['collection'] == collection)
                and (area is None or (r['geometry_usable_for_discovery'] and shape(r['geometry']).intersects(area)))]
    return {'body': 'Mars', 'total': len(selected), 'offset': offset,
            'next_offset': offset+limit if offset+limit < len(selected) else None,
            'items': selected[offset:offset+limit]}


@app.get('/v1/coverage')
def coverage():
    return {'catalog': document('catalog_report.json'),
            'evidence': document('evidence_coverage_report.json')}


@app.get('/v1/terrain/reference')
def terrain_reference():
    if not (OUT/'hirise_validation.json').is_file():
        raise HTTPException(503, 'Reference extraction has not completed')
    data = document('hirise_validation.json')
    return {**data, 'patches': [{k:v for k,v in p.items() if k != 'source_ranges'} for p in data['patches']]}


@lru_cache(maxsize=6)
def array(name):
    return np.load(OUT/name, mmap_mode='r')


@app.get('/v1/evidence/at')
def evidence_at(lon: float = Query(ge=0, lt=360), lat: float = Query(ge=-90, le=90)):
    if not math.isfinite(lon) or not math.isfinite(lat):
        raise HTTPException(422, 'Coordinates must be finite')
    meta = document('grid.json')
    a,b,c,d,e,f = meta['transform']
    col = math.floor((math.radians(lon)*meta['radius_m']-c)/a)
    row = math.floor((math.radians(lat)*meta['radius_m']-f)/e)
    if not (0 <= row < meta['shape'][0] and 0 <= col < meta['shape'][1]):
        raise HTTPException(422, 'Point outside current buffered analysis grid')
    science = document('science_validation.json')
    west,south,east,north = science['crism_bounds_lonlat']
    ch,cw = science['crism_native_grid']
    cr = math.floor((north-lat)/(north-south)*ch)
    cc = math.floor((lon-west)/(east-west)*cw)
    bands = {}
    if 0 <= cr < ch and 0 <= cc < cw:
        for name in ['BD1900_2','D2300','BD2500_2']:
            native = np.memmap(ROOT/f'data/source/crism_{name}.f32',dtype='<f4',mode='r',shape=(ch,cw))
            v = float(native[cr,cc])
            bands[name] = v if math.isfinite(v) and v != 65535 else None
    key = str(int(array('geology_units_display.npy')[row,col]))
    unit = document('science_payload.json')['geology']['legend'].get(key)
    from marsflex.terrain import ground_distance
    rover = document('places.json')['records']
    distances = ground_distance(lon,lat,np.array([r['lon'] for r in rover]),np.array([r['lat'] for r in rover]))
    nearest = int(np.argmin(distances))
    return {'body':'Mars','position':{'lon':lon,'lat':lat},
            'terrain':{'row':row,'col':col,'elevation_m':value_or_none(array('elevation.npy')[row,col]),
                       'surface_slope_deg':value_or_none(terrain().slope[row,col]),
                       'sample_spacing_m':20,'vertical_reference':meta['vertical_reference'],
                       'source_sha256':meta['source_sha256']},
            'crism':{'product_id':'HRL000040FF_07_SU183J_MTR3','native_row':cr,'native_col':cc,
                     'source_url':json.loads((ROOT/'data/source/crism_manifest.json').read_text())['source_url'],
                     'sample_spacing_m':36,'summary_parameters':bands,
                     'scope':'Spectral evidence only; mineral interpretation and landmark registration pending.'},
            'geology':{'unit':unit,'source':'USGS SIM 3464 contextual feature service',
                       'scope':'Regional 1:75000 interpretation; authoritative GIS cross-check pending.'},
            'rover_context':{'distance_m':float(distances[nearest]),'record':rover[nearest],
                             'scope':'Nearest archived localization; not evidence that the queried point was observed.'},
            'availability_bits':int(array('evidence_coverage_bits.npy')[row,col])}


@app.get('/v1/science/targets')
def science_targets():
    from marsflex.mission_evidence import reference_outlines
    data=document('science_targets.json');targets=[]
    for item in data['targets']:
        evidence=evidence_at(item['lon'],item['lat'])
        try:
            node=terrain().node(item['lon'],item['lat']);r,c=divmod(node,terrain().w)
            routing={'status':'represented_on_CTX_grid','node':node,
                     'snapped_lon':float(terrain().lon[c]),'snapped_lat':float(terrain().lat[r]),
                     'offset_m':float(ground_distance(item['lon'],item['lat'],terrain().lon[c],terrain().lat[r]))}
        except ValueError as exc:
            routing={'status':'not_routable_in_model','reason':str(exc)}
        targets.append({**item,'evidence':evidence,'routing':routing})
    return {**data,'targets':targets,'reference_outlines_lonlat':reference_outlines(),
            'integration':'Mars 2020 report coordinates select destinations; MRO supplies terrain routing and orbital context; USGS supplies regional mapped interpretation. No cross-instrument calibration claimed.'}


def mission_evidence(request,result):
    from marsflex.mission_evidence import coverage_for_route, reference_geometry
    data=document('science_targets.json');stations=[]
    for activity in request.activities:
        match=next((x for x in data['targets'] if abs(x['lon']-activity.lon)<1e-9 and abs(x['lat']-activity.lat)<1e-9),None)
        stations.append({'activity_id':activity.id,'type':activity.type,'dwell_min':activity.dwell_min,
                         'dwell_source':'user/scenario, not measured sampling time',
                         'historical_target':match,'evidence':evidence_at(activity.lon,activity.lat)})
    g=reference_geometry();radius=document('grid.json')['radius_m']
    return {'stations':stations,'sample_report_source':data['source'],
            'mission_reference_coverage':coverage_for_route(result['mission']['route_lon_lat_areoid_height'],g,radius),
            'return_reference_coverage':coverage_for_route(result['return']['route_lon_lat_areoid_height'],g,radius),
            'reference_scope':document('hirise_validation.json')['independence'],
            'planning_scope':'Time-budget scenario, not physiological or obstacle-clearance approval. No LLM scores or science-value weights.'}


@app.get('/v1/places')
def places(bbox: str | None = None, sol_from: int = Query(0, ge=0),
           sol_to: int = Query(100000, ge=0), offset: int = Query(0, ge=0),
           limit: int = Query(100, ge=1, le=1000)):
    if sol_to < sol_from:
        raise HTTPException(422, 'sol_to must be >= sol_from')
    area = parse_bbox(bbox) if bbox else None
    data = document('places.json')
    records = [r for r in data['records'] if sol_from <= r['sol'] <= sol_to
               and (area is None or (area.bounds[0] <= r['lon'] <= area.bounds[2]
                                    and area.bounds[1] <= r['lat'] <= area.bounds[3]))]
    return {'body': 'Mars', 'scope': data['scope'], 'lidvid': data['lidvid'],
            'total': len(records), 'next_offset': offset+limit if offset+limit < len(records) else None,
            'records': records[offset:offset+limit]}


@app.get('/v1/terrain/metadata')
def terrain_metadata():
    return {'grid': document('grid.json'), 'model': Model().__dict__,
            'time_model_calibrated': False,
            'coverage_note': '20 m posts do not resolve all obstacles at astronaut scale.'}


@app.get('/v1/terrain/surface')
def terrain_surface():
    z=np.asarray(array('elevation.npy'),dtype='<f4')
    return {'grid':document('grid.json'),'encoding':'base64-float32-little-endian',
            'data':base64.b64encode(z.tobytes()).decode(),
            'rendering_frame':'Local equirectangular relief with east distances scaled at the AOI center; '
                              'height relative to an arbitrary local areoid elevation. Not a resolved global areoid-to-ellipsoid transformation.'}


@app.get('/v1/layers/geology.png')
def geology_image():
    return FileResponse(OUT/'geology_units_display.png',media_type='image/png')


def route_coordinates(t, nodes):
    rows, cols = np.divmod(nodes, t.w)
    return [[float(t.lon[c]), float(t.lat[r]), float(t.z[r, c])] for r, c in zip(rows, cols)]


def value_or_none(value):
    return float(value) if math.isfinite(value) else None


def route_profile(t,nodes):
    if not nodes:return {'samples':[],'distance_m':0,'ascent_m':0,'descent_m':0}
    coordinates=route_coordinates(t,nodes)
    points=np.array(coordinates)
    distance=ground_distance(points[:-1,0],points[:-1,1],points[1:,0],points[1:,1])
    dz=np.diff(points[:,2]);grade=np.divide(dz,distance,out=np.zeros_like(dz),where=distance>0)
    minutes=distance/(60*t.model.speed_m_s)*(1+t.model.uphill_weight*np.maximum(grade,0)+t.model.downhill_weight*np.maximum(-grade,0))
    samples=[{'lon':p[0],'lat':p[1],'elevation_m':p[2],'distance_m':float(d),'travel_min':float(m),
              'incoming_grade_deg':float(g),'surface_slope_deg':float(t.slope.ravel()[node])}
             for p,d,m,g,node in zip(coordinates,np.r_[0,np.cumsum(distance)],np.r_[0,np.cumsum(minutes)],np.r_[0,np.rad2deg(np.arctan(grade))],nodes)]
    return {'samples':samples,'distance_m':float(distance.sum()),'ascent_m':float(np.maximum(dz,0).sum()),'descent_m':float(-np.minimum(dz,0).sum())}


def suggest_negotiable_drops(activities, full_fits, evaluate_subset, scope):
    """Pure advisory decision: preserves every required activity and itinerary order."""
    from itertools import combinations
    optional=[i for i,a in enumerate(activities) if a.type=='negotiable']
    result={'scope':scope,'applied':False,'required_activity_ids':[a.id for a in activities if a.type=='required'],
            'evaluated_subsets':0,'recommendation':None,
            'policy':'Keep all required activities and original order. Minimize negotiable drop count, then candidate duration; ties use original activity order. No science-value ranking.'}
    if full_fits:return {**result,'status':'not_needed'}
    if not optional:return {**result,'status':'no_negotiable_activities'}
    for count in range(1,len(optional)+1):
        feasible=[]
        for dropped in combinations(optional,count):
            retained=[i for i in range(len(activities)) if i not in dropped]
            metrics=evaluate_subset(retained);result['evaluated_subsets']+=1
            if metrics['fits']:feasible.append((metrics['duration_min'],dropped,retained,metrics))
        if feasible:
            _,dropped,retained,metrics=min(feasible,key=lambda v:(v[0],v[1]))
            return {**result,'status':'proposal_available','recommendation':{
                'drop_activity_ids':[activities[i].id for i in dropped],
                'retained_activity_ids':[activities[i].id for i in retained],
                'retained_activities':[activities[i].model_dump() for i in retained],'candidate':metrics}}
    return {**result,'status':'no_feasible_negotiable_drop'}


@app.post('/v1/mission/evaluate')
def evaluate(request: Mission):
    if request.reserve_min > request.remaining_min:
        raise HTTPException(422, 'reserve exceeds remaining budget')
    if len({a.id for a in request.activities}) != len(request.activities):
        raise HTTPException(422, 'Activity ids must be unique')
    # One compute job at a time limits peak memory on a small hosting instance.
    if not COMPUTE_LOCK.acquire(timeout=45):  # queue briefly instead of failing when two requests overlap
        raise HTTPException(503, 'A terrain calculation is in progress; retry shortly')
    try:
        t = terrain()
        try:
            p = t.node(request.position.lon, request.position.lat)
            h = t.node(request.habitat.lon, request.habitat.lat)
            targets = [(t.node(a.lon, a.lat), a.dwell_min) for a in request.activities]
            x = t.node(request.detour.lon, request.detour.lat) if request.detour else None
        except ValueError as e:
            raise HTTPException(422, str(e))
        field = t.field(p, h, targets, request.remaining_min, request.reserve_min, request.detour_dwell_min)
        stops = [p] + [v[0] for v in targets] + [h]
        route, route_minutes = [], 0.0
        for begin, end in zip(stops[:-1], stops[1:]):
            leg, minutes = t.route(begin, end)
            if not leg:
                route, route_minutes = [], math.inf
                break
            route += leg if not route else leg[1:]
            route_minutes += minutes
        home_nodes, home_minutes = t.route(p, h)
        dwell = sum(a.dwell_min for a in request.activities)
        result = {'body': 'Mars', 'model': Model().__dict__, 'time_model_calibrated': False,
                  'source_sha256': t.meta['source_sha256'],
                  'semantics': 'Activities must be completed in supplied order AFTER a queried detour. '
                               'No automatic target dropping or recognition of activities passed en route.',
                  'mission': {'profile':route_profile(t,route),'feasible': route_minutes+dwell+request.reserve_min <= request.remaining_min,
                              'travel_min': value_or_none(route_minutes), 'activity_min': dwell,
                              'reserve_min': request.reserve_min,
                              'margin_min': value_or_none(request.remaining_min-request.reserve_min-route_minutes-dwell),
                              'route_lon_lat_areoid_height': route_coordinates(t, route)},
                  'return': {'profile':route_profile(t,home_nodes),'travel_min': value_or_none(home_minutes),
                             'feasible': home_minutes+request.reserve_min <= request.remaining_min,
                             'route_lon_lat_areoid_height': route_coordinates(t, home_nodes)},
                  'domain_boundary_reachable': field['boundary_reachable'],
                  'domain_note': 'Paths cannot leave the buffered raster. Boundary reachability flags possible truncation.',
                  'field_counts': {name: int(np.sum(field['labels'] == n)) for n, name in enumerate(
                      ['unknown_blocked_or_unreachable', 'red', 'yellow', 'green'])}}
        if x is not None:
            label = int(field['labels'].ravel()[x])
            result['detour'] = {'class': ['unknown', 'red', 'yellow', 'green'][label],
                                'return_total_min': value_or_none(field['return_cost'][x]),
                                'mission_total_min': value_or_none(field['mission_cost'][x]),
                                'reserve_min': request.reserve_min,
                                'return_margin_min': value_or_none(request.remaining_min-request.reserve_min-field['return_cost'][x]),
                                'mission_margin_min': value_or_none(request.remaining_min-request.reserve_min-field['mission_cost'][x]),
                                'task_drop_decision': 'none; yellow means the supplied full mission does not fit'}
        if x is not None:
            detour_nodes=[]
            for begin,end in zip([p,x]+[v[0] for v in targets],[x]+[v[0] for v in targets]+[h]):
                leg,_=t.route(begin,end)
                if not leg:detour_nodes=[];break
                detour_nodes+=leg if not detour_nodes else leg[1:]
            result['detour']['route_lon_lat_areoid_height']=route_coordinates(t,detour_nodes)
            result['detour']['profile']=route_profile(t,detour_nodes)
        if request.include_field:
            result['field'] = {'encoding': 'gzip+base64', 'dtype': 'uint8', 'order': 'row-major',
                               'shape': list(t.z.shape), 'transform': t.meta['transform'],
                               'crs_wkt': t.meta['source_crs_wkt'],
                               'data': base64.b64encode(gzip.compress(field['labels'].tobytes(), mtime=0)).decode()}
        # Advisory subset evaluation only; submitted routes and color field are untouched.
        pair_minutes={}
        def leg_minutes(begin,end):
            if begin not in pair_minutes:
                costs,_=t.solve(begin)
                pair_minutes[begin]={n:float(costs[n]) for n in {p,h,*[v[0] for v in targets]}}
            return pair_minutes[begin][end]
        def assess_subset(indices):
            ordered=[p]+[targets[i][0] for i in indices]+[h]
            travel=sum(leg_minutes(a,b) for a,b in zip(ordered[:-1],ordered[1:]))
            dwell=sum(request.activities[i].dwell_min for i in indices)
            return {'fits':math.isfinite(travel) and travel+dwell+request.reserve_min<=request.remaining_min,
                    'duration_min':travel+dwell,'travel_min':travel,'activity_min':dwell,'reserve_min':request.reserve_min,
                    'margin_min':request.remaining_min-request.reserve_min-travel-dwell}
        result['activities']=[a.model_dump() for a in request.activities]
        result['activity_suggestion']=suggest_negotiable_drops(request.activities,result['mission']['feasible'],assess_subset,
            'Original ordered mission, current crew to habitat; time and held reserve only. Excludes queried detours and consumable clearance.')
        result['evidence_brief']=mission_evidence(request,result)
        return result
    finally:
        COMPUTE_LOCK.release()



class MetabolicParameters(BaseModel):
    model_config = ConfigDict(extra='forbid', allow_inf_nan=False)
    basal_rate_W: float = Field(default=150,gt=0,le=5000)
    walk_rate_W_per_m_s: float = Field(default=200,ge=0,le=10000)
    slope_rate_W_per_deg: float = Field(default=300,ge=0,le=10000)
    suit_penalty_W: float = Field(default=85,ge=0,le=5000)
    nominal_speed_m_s: float = Field(default=0.5,gt=0,le=5)
    uphill_speed_weight: float = Field(default=4,ge=0,le=100)
    downhill_speed_weight: float = Field(default=2,ge=0,le=100)
    soil_speed_factor: float = Field(default=1,ge=1,le=20)
    joint_torque_Nm: float | None = Field(default=None,ge=0,le=1000)
    joint_angular_speed_rad_s: float | None = Field(default=None,ge=0,le=20)
    joint_efficiency: float | None = Field(default=None,gt=0,le=1)
    dwell_power_W: float = Field(default=150,gt=0,le=5000)


class ResourceBalance(BaseModel):
    model_config = ConfigDict(extra='forbid', allow_inf_nan=False)
    remaining: float = Field(ge=0,le=1e7)
    reserve: float = Field(default=0,ge=0,le=1e7)


class MetabolicResources(BaseModel):
    model_config = ConfigDict(extra='forbid', allow_inf_nan=False)
    oxygen: ResourceBalance | None = None
    water: ResourceBalance | None = None
    battery: ResourceBalance | None = None
    oxygen_energy_kJ_per_kg: float | None = Field(default=None,gt=0,le=1e9)
    cooling_water_kg_per_MJ: float | None = Field(default=None,gt=0,le=1000)
    equipment_power_W: float | None = Field(default=None,gt=0,le=100000)


@app.get('/v1/mission/metabolic/defaults')
def metabolic_defaults():
    from marsflex.terrain import metabolic_scenario_defaults
    return metabolic_scenario_defaults()


class MetabolicMission(BaseModel):
    input_origins: dict[str, Literal["scenario", "paper", "user"]] = Field(default_factory=dict,max_length=40)
    model_config = ConfigDict(extra='forbid', allow_inf_nan=False)
    position: Position
    habitat: Position
    remaining_min: float = Field(gt=0,le=1440)
    time_contingency_min: float = Field(default=0,ge=0,le=1440)
    activities: list[Activity] = Field(default_factory=list,max_length=6)
    parameters: MetabolicParameters = Field(default_factory=MetabolicParameters)
    resources: MetabolicResources = Field(default_factory=MetabolicResources)


@app.post('/v1/mission/metabolic')
def evaluate_metabolic(request: MetabolicMission):
    """Experimental level-1 scenario. No live measurements or safety approval."""
    from marsflex.terrain import MetabolicModel, ResourceBudget, ResourceModel, MetabolicRouting, walk_back_limit, assess_resources
    if not COMPUTE_LOCK.acquire(timeout=45):  # queue briefly instead of failing when two requests overlap
        raise HTTPException(503,'A terrain calculation is in progress; retry shortly')
    try:
        model=MetabolicModel(**request.parameters.model_dump())
        values=request.resources.model_dump()
        for k in ('oxygen','water','battery'):
            if values[k] is not None: values[k]=ResourceBudget(**values[k])
        resources=ResourceModel(**values)
        model.validate(); resources.validate()
        if request.time_contingency_min > request.remaining_min:raise ValueError('Time contingency exceeds remaining time')
        if len({a.id for a in request.activities}) != len(request.activities):raise ValueError('Activity ids must be unique')
        t=terrain();p=t.node(request.position.lon,request.position.lat);h=t.node(request.habitat.lon,request.habitat.lat)
        targets=[t.node(a.lon,a.lat) for a in request.activities]
        routing=MetabolicRouting(t,model)
        back=walk_back_limit(t,p,h,request.remaining_min,model,resources,request.time_contingency_min,routing)
        def public_route(data):
            result={k:v for k,v in data.items() if k!='nodes'}
            result['route_lon_lat_areoid_height']=route_coordinates(t,data['nodes'])
            return result
        selected=public_route(back['selected'])
        candidates=[{k:v for k,v in c.items() if k not in ('nodes','segments')} for c in back['candidates']]
        mission_candidates=[];stops=[p]+targets+[h]
        for objective in ('energy','time'):
            nodes=[]
            for begin,end in zip(stops[:-1],stops[1:]):
                leg=routing.route(begin,end,objective)
                if not leg:nodes=[];break
                nodes+=leg if not nodes else leg[1:]
            summary=routing.summary(nodes,sum(a.dwell_min for a in request.activities))
            assessment=assess_resources(summary,resources,request.remaining_min,request.time_contingency_min,model.dwell_power_W)
            mission_candidates.append({'objective':objective,**summary,'assessment':assessment})
        eligible=[c for c in mission_candidates if c['assessment']['configured_constraints_fit']]
        chosen=min(eligible,key=lambda c:c['energy_kJ']) if eligible else mission_candidates[0]
        # Same existing metabolic candidate solvers, applied to advisory subsets only.
        leg_summaries={}
        def assess_metabolic_subset(indices):
            ordered=[p]+[targets[i] for i in indices]+[h]
            dwell=sum(request.activities[i].dwell_min for i in indices);fits=[]
            for objective in ('energy','time'):
                energy=0.;seconds=0.;reachable=True
                for begin,end in zip(ordered[:-1],ordered[1:]):
                    key=(begin,end,objective)
                    if key not in leg_summaries:
                        leg=routing.summary(routing.route(begin,end,objective))
                        leg_summaries[key]={k:leg[k] for k in ('reachable','energy_kJ','duration_s')}
                    leg=leg_summaries[key]
                    if not leg['reachable']:reachable=False;break
                    energy+=leg['energy_kJ'];seconds+=leg['duration_s']
                summary={'reachable':reachable,'energy_kJ':energy+model.dwell_power_W*dwell*60/1000 if reachable else None,
                         'duration_s':seconds+dwell*60 if reachable else None}
                assessment=assess_resources(summary,resources,request.remaining_min,request.time_contingency_min,model.dwell_power_W)
                if assessment['configured_constraints_fit']:
                    fits.append({'fits':True,'duration_min':summary['duration_s']/60,'energy_kJ':summary['energy_kJ'],
                                 'objective':objective,'assessment':assessment})
            return min(fits,key=lambda v:v['energy_kJ']) if fits else {'fits':False}
        activity_suggestion=suggest_negotiable_drops(request.activities,bool(eligible),assess_metabolic_subset,
            'Metabolic ordered mission; entered constraints only, missing resources remain unassessed. Existing energy/time candidates, not an exhaustive multi-resource route search.')
        from marsflex.terrain import metabolic_scenario_defaults
        preset=metabolic_scenario_defaults()
        provenance={}
        for key,value in model.__dict__.items():
            entry=dict(preset['parameters'][key])
            if value is None:
                entry.update(source=None)
            elif value!=entry['value'] or request.input_origins.get(key)=='user':
                entry.update(source='user' if key in request.parameters.model_fields_set else 'scenario',note='Declared input; no calibration claimed.',url=None)
            entry['value']=value
            provenance[key]=entry
        for key,value in request.resources.model_dump().items():
            provenance[key]={'value':value,'source':'user' if value is not None else None,'status':'uncalibrated'}
        provenance['time_contingency_min']={'value':request.time_contingency_min,'source':'user' if request.input_origins.get('time_contingency_min')=='user' or request.time_contingency_min else 'scenario','status':'uncalibrated'}
        return {'activities':[a.model_dump() for a in request.activities],'activity_suggestion':activity_suggestion,'version':'level1-v1.1','input_provenance':provenance,'default_catalog':preset,'calibration_status':'uncalibrated','operational_safety_certified':False,
                'source_sha256':t.meta['source_sha256'],'grid_spacing_map_m':20,
                'parameters':model.__dict__,'effective_moving_suit_power_W':model.moving_suit_power_W,
                'resource_inputs':request.resources.model_dump(),
                'return':selected,'return_candidates':candidates,'mission':public_route(chosen),
                'route_search_scope':back['route_search_scope'],
                'legacy_freedom_field_scope':'The v6 Green/Yellow/Red layer remains TIME-ONLY and is not a metabolic resource envelope.',
                'warnings':[
                    'Linear scenario power law; no scientific calibration for Mars EVA. Actual coefficients and sources are in input_provenance.',
                    'The paper-derived preset offset transfers a net simulation contrast, not isolated joint resistance. Legacy offsets are also uncalibrated.',
                    'Torque mode replaces the moving suit offset using aggregate torque * mean absolute angular speed / efficiency; no pressure or gait dynamics.',
                    'Soil slowdown is uniform scenario input. No bearing strength, sinkage or inferred geologic traversability.',
                    'Missing O2, cooling-water or battery inputs remain unassessed. Metabolic O2 excludes leakage and purge.',
                    'Cooling-water coefficient is user supplied; not a sublimator, Martian thermal environment or hydration simulation.',
                    'No physiological power ceiling, fatigue, CO2 scrubber limit, LOS or environmental hazard model.',
                    'Stationary time allowance applies only at the entered dwell power followed by the selected return route.',
                    'Activities use the supplied fixed order and dwell power; no automatic completion en route or objective dropping.',
                    'All paths are confined to the known grid. Neither candidate failure nor success certifies astronaut safety.'
                ]}
    except ValueError as e:
        raise HTTPException(422,str(e))
    finally:
        COMPUTE_LOCK.release()


class LifeSupportMission(BaseModel):
    model_config = ConfigDict(extra='forbid', allow_inf_nan=False)
    position: Position
    habitat: Position
    activities: list[Activity] = Field(default_factory=list, max_length=6)
    suit_id: Literal['emu_reference'] = 'emu_reference'
    body_mass_kg: float = Field(default=75, ge=30, le=200)
    carried_load_kg: float = Field(default=0, ge=0, le=100)
    terrain_factor: float = Field(default=1.0, ge=1.0, le=2.5)
    suit_offset_W: float | None = Field(default=None, ge=0, le=2000)


@app.get('/v1/life-support/suits')
def life_support_suits():
    from dataclasses import asdict
    from marsflex.life_support import SUITS, SOURCES, PANDOLF_TERRAIN_FACTORS, WalkerModel
    return {'suits': [asdict(s) for s in SUITS.values()], 'default_walker': asdict(WalkerModel()),
            'terrain_factors': PANDOLF_TERRAIN_FACTORS, 'sources': SOURCES}


@app.post('/v1/mission/life-support')
def mission_life_support(request: LifeSupportMission):
    """Oxygen and reference-suit endurance along the same time-optimal route as /v1/mission/evaluate."""
    from marsflex.life_support import SUITS, WalkerModel, life_support
    if len({a.id for a in request.activities}) != len(request.activities):
        raise HTTPException(422, 'Activity ids must be unique')
    if not COMPUTE_LOCK.acquire(timeout=45):  # queue briefly instead of failing when two requests overlap
        raise HTTPException(503, 'A terrain calculation is in progress; retry shortly')
    try:
        t = terrain()
        try:
            p = t.node(request.position.lon, request.position.lat)
            h = t.node(request.habitat.lon, request.habitat.lat)
            targets = [t.node(a.lon, a.lat) for a in request.activities]
        except ValueError as e:
            raise HTTPException(422, str(e))
        kwargs = dict(body_mass_kg=request.body_mass_kg, carried_load_kg=request.carried_load_kg, terrain_factor=request.terrain_factor)
        if request.suit_offset_W is not None:
            kwargs['suit_offset_W'] = request.suit_offset_W
        model = WalkerModel(**kwargs)
        route, stop_index = [], []
        for begin, end in zip([p] + targets, targets + [h]):
            leg, _ = t.route(begin, end)
            if not leg:
                return {'status': 'no_route', 'operational_safety_certified': False}
            route += leg if not route else leg[1:]
            stop_index.append(len(route) - 1)
        profile = route_profile(t, route)
        try:
            result = life_support(t, profile['samples'], route, stop_index[:-1], [a.dwell_min for a in request.activities],
                                  h, SUITS[request.suit_id], model)
        except ValueError as e:
            raise HTTPException(422, str(e))
        result['route_samples'] = len(profile['samples'])
        return result
    finally:
        COMPUTE_LOCK.release()


@app.get('/v1/mission/metabolic/assumptions')
def metabolic_assumptions():
    return FileResponse(ROOT/'docs/science/MODEL_ASSUMPTIONS.md',media_type='text/markdown')


@app.get('/v1/map/layers')
def map_layers():
    return {**document('map_layers.json'),'imagery':document('imagery_manifest.json')}


@app.get('/v1/map/image/{name}')
def map_image(name: str):
    files={'orbital':'ctx_orbital.jpg','hirise':'hirise_delta.jpg','slope':'slope_overlay.png',
           'geology':'geology_units_display.png','globe':'mars_globe_viking_6k.jpg',**{v:f'{v}_overlay.png' for v in ['BD1900_2','D2300','BD2500_2']}}
    if name not in files:raise HTTPException(404,'Unknown layer')
    return FileResponse(OUT/files[name])


from marsflex.geo_models import router as geomodel_router
app.include_router(geomodel_router)


@app.get('/v1/environment/radiation')
def radiation_context(minutes: float = Query(default=300, ge=0, le=1440)):
    """Published Mars-surface GCR dose rate scaled to the walk duration. Context only; see limitations."""
    from marsflex.radiation import walk_dose
    return walk_dose(minutes)


@app.get('/v1/environment/meda')
def meda_environment(start_sol: int | None = Query(default=None,ge=1,le=9999),
                     end_sol: int | None = Query(default=None,ge=1,le=9999),
                     refresh: bool = False):
    """Archived Perseverance point observations; never used by routing."""
    if start_sol is not None and end_sol is not None and (end_sol < start_sol or end_sol-start_sol > 6):
        raise HTTPException(422,'Select an ordered range of one to seven sols.')
    from marsflex.meda_archive import environment
    try:
        return environment(start_sol,end_sol,refresh)
    except ValueError as e:
        raise HTTPException(422,str(e))
    except (OSError,TimeoutError) as e:
        raise HTTPException(503,'MEDA archive unavailable. Cached ranges can be used offline; retry the requested range later.') from e


# Read-only confidence diagnostic; no edits to mission evaluation or terrain costs.
class TrustRoute(BaseModel):
    model_config = ConfigDict(extra='forbid', allow_inf_nan=False)
    coordinates: list[tuple[float,float,float]] = Field(min_length=2,max_length=5000)

@app.post('/v1/evidence/route-trust')
def route_trust(request: TrustRoute):
    from marsflex.route_trust import analyse_route
    g=document('grid.json');a,_,c,_,e,f=g['transform'];h,w=g['shape'];R=g['radius_m']
    for lon,lat,z in request.coordinates:
        x,y=math.radians(lon)*R,math.radians(lat)*R
        if not (c<=x<=c+w*a and f+h*e<=y<=f):
            raise HTTPException(422,'Route coordinates outside the loaded CTX grid')
    return analyse_route(request.coordinates)


# Built React/Cesium assets, served from the same origin as the API.
# This mount is last so it cannot shadow the data endpoints.
FRONTEND=ROOT/'frontend/dist'
if FRONTEND.is_dir():
    app.mount('/',StaticFiles(directory=FRONTEND,html=True),name='workbench')

