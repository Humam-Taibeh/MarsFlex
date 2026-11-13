"""MarsFlex deterministic terrain model. Minutes are scenario estimates, not EVA certification."""
from dataclasses import dataclass
from pathlib import Path
import json
import hashlib
import math
import numpy as np
import rasterio
from rasterio.windows import Window
from scipy.sparse import csr_matrix
from scipy.sparse.csgraph import dijkstra

RADIUS = 3396190.0
DIRECTIONS = [(-1,0),(-1,1),(0,1),(1,1),(1,0),(1,-1),(0,-1),(-1,-1)]

@dataclass(frozen=True)
class Model:
    speed_m_s: float = 0.5
    uphill_weight: float = 4.0
    downhill_weight: float = 2.0
    max_grade_deg: float = 20.0
    max_surface_slope_deg: float = 20.0

    def validate(self):
        vals = list(self.__dict__.values())
        if not all(math.isfinite(v) for v in vals) or self.speed_m_s <= 0:
            raise ValueError('Model requires finite parameters and positive speed')
        if min(self.uphill_weight, self.downhill_weight) < 0:
            raise ValueError('Terrain penalties cannot be negative')
        if not (0 < self.max_grade_deg < 90 and 0 < self.max_surface_slope_deg < 90):
            raise ValueError('Invalid slope thresholds')

def ground_distance(lon1, lat1, lon2, lat2):
    p1, p2 = np.deg2rad(lat1), np.deg2rad(lat2)
    a = np.sin((p2-p1)/2)**2 + np.cos(p1)*np.cos(p2)*np.sin(np.deg2rad(lon2-lon1)/2)**2
    return 2*RADIUS*np.arcsin(np.sqrt(np.clip(a,0,1)))

def prepare(source, outdir, aoi=(77.32,18.40,77.49,18.53), buffer_m=2000):
    """Keep native 20 m posts. Correct map distances on the source Mars sphere."""
    outdir = Path(outdir)
    outdir.mkdir(parents=True, exist_ok=True)
    with rasterio.open(source) as src:
        from pyproj import CRS
        crs = CRS(src.crs)
        params = {p.name: p.value for p in crs.coordinate_operation.params}
        if not (src.count == 1 and src.dtypes[0] == 'float32' and
                abs(crs.ellipsoid.semi_major_metre-RADIUS) < 0.01 and
                abs(crs.ellipsoid.semi_minor_metre-RADIUS) < 0.01 and
                crs.coordinate_operation.method_name.startswith('Equidistant Cylindrical') and
                params.get('Latitude of 1st standard parallel') == 0 and
                params.get('Longitude of natural origin') == 0 and
                params.get('False easting') == 0 and params.get('False northing') == 0 and
                src.transform.a == 20 and src.transform.e == -20 and
                src.transform.b == 0 and src.transform.d == 0):
            raise ValueError('Unexpected product CRS/grid. Do not silently apply Earth or assumed coordinates.')
        west,south,east,north=aoi
        if not (west<east and south<north):
            raise ValueError('Invalid AOI')
        x0,y0,x1,y1=np.deg2rad(aoi)*RADIUS
        c0=math.floor((x0-buffer_m-src.transform.c)/20)
        c1=math.ceil((x1+buffer_m-src.transform.c)/20)
        r0=math.floor((src.transform.f-y1-buffer_m)/20)
        r1=math.ceil((src.transform.f-y0+buffer_m)/20)
        if c0<0 or r0<0 or c1>src.width or r1>src.height:
            raise ValueError('Requested AOI+buffer exceeds source extent')
        window=Window(c0,r0,c1-c0,r1-r0)
        z=src.read(1,window=window,masked=True).astype(np.float32).filled(np.nan)
        transform=src.window_transform(window)
        meta={'source_shape':[src.height,src.width], 'source_crs_wkt':src.crs.to_wkt(),
              'source_bounds_m':list(src.bounds), 'source_nodata':src.nodata,
              'source_sha256':hashlib.sha256(Path(source).read_bytes()).hexdigest(),
              'aoi_lonlat':list(aoi),'buffer_map_m':buffer_m,'shape':list(z.shape),
              'transform':list(transform)[:6],'grid_spacing_map_m':20,
              'radius_m':RADIUS,'latitude_type':'planetocentric','longitude':'positive east',
              'vertical_reference':'MOLA topography / DeltaGeoid, as named by source product; not radius above sphere',
              'valid_cells':int(np.isfinite(z).sum()),'nodata_cells':int((~np.isfinite(z)).sum()),
              'elevation_range_m':[float(np.nanmin(z)),float(np.nanmax(z))],
              'method':'native-grid crop; no elevation resampling; geodesic edge lengths'}
        profile=src.profile.copy()
        profile.update(width=z.shape[1],height=z.shape[0],transform=transform,nodata=-9999,
                       compress='deflate')
        with rasterio.open(outdir/'ctx_aoi_buffer_20m.tif','w',**profile) as dst:
            dst.write(np.nan_to_num(z,nan=-9999),1)
    np.save(outdir/'elevation.npy',z)
    (outdir/'grid.json').write_text(json.dumps(meta,indent=2))
    return z,meta

class Terrain:
    def __init__(self,z,meta,model=Model()):
        model.validate()
        self.z=np.asarray(z,dtype=float)
        self.meta,self.model=meta,model
        self.h,self.w=z.shape
        a,b,c,d,e,f=meta['transform']
        self.lon=np.rad2deg((c+(np.arange(self.w)+.5)*a)/RADIUS)
        self.lat=np.rad2deg((f+(np.arange(self.h)+.5)*e)/RADIUS)
        dy,dx=np.gradient(self.z)
        dx/=20*np.cos(np.deg2rad(self.lat[:,None]))
        dy/=20
        self.slope=np.rad2deg(np.arctan(np.hypot(dx,dy)))
        self.valid=np.isfinite(z)&np.isfinite(self.slope)
        self.walkable=self.valid&(self.slope<=model.max_surface_slope_deg)
        self.costs=np.full((8,self.h,self.w),np.inf,dtype=np.float32)
        ids=np.arange(self.h*self.w).reshape(self.h,self.w)
        rows,cols,weights=[],[],[]
        for k,(dr,dc) in enumerate(DIRECTIONS):
            rr,cc=np.mgrid[max(0,-dr):min(self.h,self.h-dr),max(0,-dc):min(self.w,self.w-dc)]
            nr,nc=rr+dr,cc+dc
            ok=self.walkable[rr,cc]&self.walkable[nr,nc]
            if dr and dc:
                ok &= self.walkable[rr,nc]&self.walkable[nr,cc]
            distance=ground_distance(self.lon[cc],self.lat[rr],self.lon[nc],self.lat[nr])
            grade=(self.z[nr,nc]-self.z[rr,cc])/distance
            ok &= np.abs(np.rad2deg(np.arctan(grade)))<=model.max_grade_deg
            # Explicit, uncalibrated monotone scenario penalty. Not Tobler or a NASA physiological law.
            cost=distance/(60*model.speed_m_s)*(1+model.uphill_weight*np.maximum(grade,0)+model.downhill_weight*np.maximum(-grade,0))
            self.costs[k,rr[ok],cc[ok]]=cost[ok]
            rows.append(ids[rr[ok],cc[ok]])
            cols.append(ids[nr[ok],nc[ok]])
            weights.append(cost[ok])
        self.graph=csr_matrix((np.concatenate(weights),(np.concatenate(rows),np.concatenate(cols))),
                              shape=(self.h*self.w,)*2)

    def node(self,lon,lat):
        a,b,c,d,e,f=self.meta['transform']
        col=math.floor((math.radians(lon)*RADIUS-c)/a)
        row=math.floor((math.radians(lat)*RADIUS-f)/e)
        if not (0<=col<self.w and 0<=row<self.h and self.walkable[row,col]):
            raise ValueError('Position outside traversable known grid; no silent snapping')
        return row*self.w+col

    def solve(self,node,reverse=False):
        graph=self.graph.T.tocsr() if reverse else self.graph
        return dijkstra(graph,directed=True,indices=node,return_predecessors=True)

    def field(self,p,habitat,targets,budget_min,reserve_min=30,detour_dwell_min=10):
        """Fixed target order AFTER detour. targets=[(node, dwell minutes)]."""
        if not all(math.isfinite(x) and x>=0 for x in (budget_min,reserve_min,detour_dwell_min)):
            raise ValueError('Budgets and dwell must be finite nonnegative minutes')
        if any(not math.isfinite(d) or d<0 for _,d in targets):
            raise ValueError('Invalid station dwell')
        outbound,prev=self.solve(p)
        home,next_home=self.solve(habitat,reverse=True)
        return_cost=outbound+detour_dwell_min+home
        tail=home
        for target,dwell in reversed(targets):
            to_target,_=self.solve(target,reverse=True)
            tail=to_target+dwell+tail[target]
        mission_cost=outbound+detour_dwell_min+tail
        labels=np.zeros(self.h*self.w,dtype=np.uint8) # 0 unknown/blocked/unreachable
        known=self.walkable.ravel()&np.isfinite(outbound)&np.isfinite(home)
        labels[known]=1 # model budget violation (red)
        labels[known&(return_cost+reserve_min<=budget_min)]=2
        labels[known&(mission_cost+reserve_min<=budget_min)]=3
        return {'labels':labels.reshape(self.h,self.w),'return_cost':return_cost,'mission_cost':mission_cost,
                'from_p':outbound,'to_home':home,'prev':prev,'next_home':next_home,
                'boundary_reachable':bool(np.any((outbound.reshape(self.h,self.w)[[0,-1],:]<=budget_min-reserve_min)) or
                                           np.any(outbound.reshape(self.h,self.w)[:,[0,-1]]<=budget_min-reserve_min))}

    def route(self,source,target):
        costs,prev=self.solve(source)
        if not np.isfinite(costs[target]):
            return [],math.inf
        nodes=[target]
        while nodes[-1]!=source:
            nodes.append(int(prev[nodes[-1]]))
            if nodes[-1]<0 or len(nodes)>self.w*self.h:
                raise RuntimeError('Invalid predecessor chain')
        return nodes[::-1],float(costs[target])

    def route_distance(self,nodes):
        rows,cols=np.divmod(nodes,self.w)
        return float(ground_distance(self.lon[cols[:-1]],self.lat[rows[:-1]],
                                     self.lon[cols[1:]],self.lat[rows[1:]]).sum())


# Level 1: explicit, uncalibrated scenario model. See docs/science/MODEL_ASSUMPTIONS.md.
@dataclass(frozen=True)
class MetabolicModel:
    basal_rate_W: float = 150.0
    walk_rate_W_per_m_s: float = 200.0
    slope_rate_W_per_deg: float = 300.0
    suit_penalty_W: float = 85.0
    nominal_speed_m_s: float = 0.5
    uphill_speed_weight: float = 4.0
    downhill_speed_weight: float = 2.0
    soil_speed_factor: float = 1.0
    # Torque mode REPLACES the offset; aggregate resisting torque, not one hip.
    joint_torque_Nm: float | None = None
    joint_angular_speed_rad_s: float | None = None
    joint_efficiency: float | None = None
    dwell_power_W: float = 150.0

    def validate(self):
        values = [v for v in self.__dict__.values() if v is not None]
        if not all(math.isfinite(v) and v >= 0 for v in values):
            raise ValueError('Metabolic parameters must be finite and nonnegative')
        if self.basal_rate_W <= 0 or self.nominal_speed_m_s <= 0 or self.dwell_power_W <= 0:
            raise ValueError('Basal power, nominal speed and dwell power must be positive')
        if self.soil_speed_factor < 1:
            raise ValueError('Soil factor must be >=1; it is an assumed slowdown, not a soil measurement')
        torque = [self.joint_torque_Nm, self.joint_angular_speed_rad_s, self.joint_efficiency]
        if any(v is not None for v in torque):
            if any(v is None for v in torque) or not 0 < self.joint_efficiency <= 1:
                raise ValueError('Torque mode needs torque, mean absolute angular speed, and efficiency in (0,1]')

    @property
    def moving_suit_power_W(self):
        self.validate()
        if self.joint_torque_Nm is None:
            return self.suit_penalty_W
        return self.joint_torque_Nm * self.joint_angular_speed_rad_s / self.joint_efficiency


def metabolic_cost(distance_m, grade_deg, model=MetabolicModel()):
    """Directed edges -> speed, watts, seconds, kJ. grade_deg is ANGLE, not rise/run.

    Exact requested linear power law, explicitly uncalibrated. No negative
    downhill energy credit. The uniform soil factor is a user scenario input.
    Accepts scalars or equal/broadcast-compatible NumPy arrays.
    """
    model.validate()
    distance, angle = np.broadcast_arrays(np.asarray(distance_m, dtype=float), np.asarray(grade_deg, dtype=float))
    if not np.all(np.isfinite(distance) & (distance >= 0) & np.isfinite(angle) & (np.abs(angle) < 90)):
        raise ValueError('Distance must be finite/nonnegative and grade angle strictly between -90 and 90 degrees')
    rise_run = np.tan(np.deg2rad(angle))
    speed = model.nominal_speed_m_s / (model.soil_speed_factor * (
        1 + model.uphill_speed_weight*np.maximum(rise_run,0) + model.downhill_speed_weight*np.maximum(-rise_run,0)))
    seconds = distance / speed
    watts = model.basal_rate_W + model.walk_rate_W_per_m_s*speed + model.slope_rate_W_per_deg*np.maximum(angle,0) + model.moving_suit_power_W
    return {'speed_m_s':speed, 'duration_s':seconds, 'metabolic_rate_W':watts, 'energy_kJ':watts*seconds/1000}


@dataclass(frozen=True)
class ResourceBudget:
    remaining: float
    reserve: float = 0.0

    def validate(self):
        if not all(math.isfinite(v) and v >= 0 for v in (self.remaining,self.reserve)):
            raise ValueError('Resource balance and held reserve must be finite and nonnegative')
        if self.reserve > self.remaining:
            raise ValueError('Resource reserve exceeds remaining balance')


@dataclass(frozen=True)
class ResourceModel:
    oxygen: ResourceBudget | None = None  # kg of usable O2
    water: ResourceBudget | None = None   # kg of cooling feedwater, NOT drinking water
    battery: ResourceBudget | None = None # Wh
    oxygen_energy_kJ_per_kg: float | None = None
    cooling_water_kg_per_MJ: float | None = None
    equipment_power_W: float | None = None

    def validate(self):
        for budget in (self.oxygen,self.water,self.battery):
            if budget is not None: budget.validate()
        for v in (self.oxygen_energy_kJ_per_kg,self.cooling_water_kg_per_MJ,self.equipment_power_W):
            if v is not None and (not math.isfinite(v) or v <= 0):
                raise ValueError('Resource conversion coefficients must be finite and positive')
        for budget,coef in [(self.oxygen,self.oxygen_energy_kJ_per_kg),(self.water,self.cooling_water_kg_per_MJ),(self.battery,self.equipment_power_W)]:
            if budget is not None and coef is None:
                raise ValueError('Every supplied resource budget requires its explicit consumption coefficient')

    def consumption(self, energy_kJ, duration_s):
        self.validate()
        return {'oxygen':energy_kJ/self.oxygen_energy_kJ_per_kg if self.oxygen_energy_kJ_per_kg else None,
                'water':energy_kJ/1000*self.cooling_water_kg_per_MJ if self.cooling_water_kg_per_MJ else None,
                'battery':duration_s/3600*self.equipment_power_W if self.equipment_power_W else None}


class MetabolicRouting:
    """Reweight only existing admissible CTX edges; retain NoData/slope gates.

    Two deterministic candidates, minimum modeled energy and minimum time.
    Not an exhaustive multi-resource constrained/Pareto path search.
    """
    def __init__(self, terrain, model=MetabolicModel()):
        self.terrain,self.model = terrain,model
        model.validate()
        g=terrain.graph.tocoo()
        r,c=np.divmod(g.row,terrain.w); nr,nc=np.divmod(g.col,terrain.w)
        distance=ground_distance(terrain.lon[c],terrain.lat[r],terrain.lon[nc],terrain.lat[nr])
        angles=np.rad2deg(np.arctan2(terrain.z[nr,nc]-terrain.z[r,c],distance))
        cost=metabolic_cost(distance,angles,model)
        self.energy_graph=csr_matrix((cost['energy_kJ'],(g.row,g.col)),shape=g.shape)
        self.time_graph=csr_matrix((cost['duration_s'],(g.row,g.col)),shape=g.shape)

    def route(self,source,target,objective='energy'):
        t=self.terrain
        if not all(0 <= n < t.h*t.w and t.walkable.ravel()[n] for n in (source,target)):
            raise ValueError('Route endpoint is not a traversable grid node')
        graph=self.energy_graph if objective=='energy' else self.time_graph
        costs,prev=dijkstra(graph,directed=True,indices=source,return_predecessors=True)
        if not math.isfinite(costs[target]):return []
        nodes=[target]
        while nodes[-1]!=source:
            node=int(prev[nodes[-1]])
            if node<0 or len(nodes)>t.h*t.w:raise RuntimeError('Invalid metabolic predecessor chain')
            nodes.append(node)
        return nodes[::-1]

    def summary(self,nodes,dwell_min=0):
        if not math.isfinite(dwell_min) or dwell_min < 0:raise ValueError('Invalid dwell duration')
        t=self.terrain
        if not nodes:return {'reachable':False,'nodes':[], 'energy_kJ':None,'duration_s':None,'segments':[]}
        r,c=np.divmod(nodes,t.w)
        distance=ground_distance(t.lon[c[:-1]],t.lat[r[:-1]],t.lon[c[1:]],t.lat[r[1:]])
        angle=np.rad2deg(np.arctan2(np.diff(t.z[r,c]),distance))
        cost=metabolic_cost(distance,angle,self.model)
        seconds=float(cost['duration_s'].sum()); energy=float(cost['energy_kJ'].sum())
        return {'reachable':True,'nodes':list(map(int,nodes)), 'distance_m':float(distance.sum()),
                'travel_min':seconds/60,'dwell_min':dwell_min,'duration_s':seconds+dwell_min*60,
                'travel_energy_kJ':energy,'energy_kJ':energy+self.model.dwell_power_W*dwell_min*60/1000,
                'mean_moving_power_W':energy*1000/seconds if seconds>0 else 0.0,
                'peak_moving_power_W':float(cost['metabolic_rate_W'].max()) if len(distance) else 0.0,
                'touches_grid_boundary':bool(np.any((r==0)|(r==t.h-1)|(c==0)|(c==t.w-1))),
                'segments':[{'from_node':int(a),'to_node':int(b),'distance_m':float(d),'grade_deg':float(g),
                             **{k:float(v[i]) for k,v in cost.items()}}
                            for i,(a,b,d,g) in enumerate(zip(nodes[:-1],nodes[1:],distance,angle))]}


def assess_resources(summary,resources,remaining_min,time_contingency_min,dwell_power_W):
    resources.validate()
    if not all(math.isfinite(v) and v>=0 for v in (remaining_min,time_contingency_min)) or dwell_power_W<=0 or not math.isfinite(dwell_power_W):
        raise ValueError('Invalid time or stationary power')
    if time_contingency_min>remaining_min:raise ValueError('Time contingency exceeds remaining time')
    if not summary['reachable']:
        return {'status':'no_route_in_known_grid','configured_constraints_fit':False,'all_resources_fit':False,
                'max_additional_stationary_min':None,'limiting_resource':None,'resources':{}}
    usage=resources.consumption(summary['energy_kJ'],summary['duration_s'])
    rates=resources.consumption(dwell_power_W*60/1000,60)
    ledger={};limits={'time':remaining_min-time_contingency_min-summary['duration_s']/60}
    ledger['time']={'unit':'min','remaining':remaining_min,'reserve':time_contingency_min,
                    'required':summary['duration_s']/60,'margin':limits['time'],'assessed':True}
    for name,unit in [('oxygen','kg'),('water','kg'),('battery','Wh')]:
        budget=getattr(resources,name)
        margin=budget.remaining-budget.reserve-usage[name] if budget is not None else None
        ledger[name]={'unit':unit,'required':usage[name],'remaining':budget.remaining if budget else None,
                      'reserve':budget.reserve if budget else None,'margin':margin,'assessed':budget is not None}
        if budget is not None:limits[name]=margin/rates[name]
    fits=all(v>=-1e-9 for v in limits.values());complete=all(getattr(resources,k) is not None for k in ('oxygen','water','battery'))
    limiting=min(limits,key=limits.get)
    return {'status':('selected_route_exceeds_budget' if not fits else 'fits_configured_model' if complete else 'incomplete_resource_inputs'),
            'configured_constraints_fit':fits,'all_resources_fit':fits if complete else None,
            'max_additional_stationary_min':max(0.0,limits[limiting]),'limiting_resource':limiting,
            'limit_scope':'Stationary dwell at supplied dwell power, then THIS return; not detour radius, fatigue tolerance or safety certification.',
            'resources':ledger}


def walk_back_limit(terrain,position,habitat,remaining_min,model=MetabolicModel(),resources=ResourceModel(),time_contingency_min=0,routing=None):
    """Dynamic resource/time margin for two candidate return routes, no fixed 72-min allowance.

    Unmeasured resources stay unknown. Failure of these candidates is NOT proof
    that every possible multi-resource route fails. No LOS/weather calculation.
    """
    routing=routing or MetabolicRouting(terrain,model)
    candidates=[]
    for objective in ('energy','time'):
        summary=routing.summary(routing.route(position,habitat,objective))
        assessment=assess_resources(summary,resources,remaining_min,time_contingency_min,model.dwell_power_W)
        candidates.append({'objective':objective,**summary,'assessment':assessment})
    eligible=[c for c in candidates if c['assessment']['configured_constraints_fit']]
    chosen=min(eligible,key=lambda c:c['energy_kJ']) if eligible else candidates[0]
    return {'selected':chosen,'candidates':candidates,
            'route_search_scope':'Minimum-energy and minimum-time candidates only; no exhaustive multi-resource feasibility proof.',
            'calibration_status':'uncalibrated','model':model.__dict__}


def metabolic_scenario_defaults():
    """Declared demonstration assumptions, not physiological calibration."""
    paper = 'https://doi.org/10.1038/s41526-021-00175-3'
    values = dict(MetabolicModel().__dict__)
    values['suit_penalty_W'] = round((799 - 510) * 4184 / 3600, 6)
    notes = {
        'basal_rate_W': 'Existing user-proposed scenario; not a measured basal rate.',
        'walk_rate_W_per_m_s': 'Existing user-proposed scenario; no fitted walking law.',
        'slope_rate_W_per_deg': 'Existing user-proposed 300 W/degree can be nonphysical. No physiological power ceiling.',
        'dwell_power_W': 'Existing stationary-task scenario, not measured rest or sampling power.',
        'soil_speed_factor': 'No additional assumed slowdown; does NOT mean firm soil.',
        'suit_penalty_W': '(799 - 510) kcal/h × 4184 J/kcal ÷ 3600 s/h. Suited assisted simulation at 4.3 psia, with assistance up to 10 Nm, versus unsuited unassisted. This net contrast is NOT isolated joint resistance. Transferring it as a constant offset is an uncalibrated scenario assumption; it does not reproduce the paper gait or total power.'
    }
    parameters = {k: {'value': v, 'source': ('paper' if k == 'suit_penalty_W' else 'scenario') if v is not None else None,
                     'status': 'uncalibrated', 'label': 'scenario default / uncalibrated',
                     'note': notes.get(k, 'Existing project scenario parameter.') if v is not None else 'no source found — left empty by design',
                     'url': paper if k == 'suit_penalty_W' else None} for k,v in values.items()}
    resources = {k: {'value': None, 'source': None, 'status': 'uncalibrated', 'note': 'no source found — left empty by design'} for k in
                 ['oxygen','oxygen_reserve','oxygen_coef','water','water_reserve','water_coef','battery','battery_reserve','battery_coef']}
    for k in ['oxygen','oxygen_reserve','water','water_reserve','battery','battery_reserve']:
        resources[k]['note'] = 'No suit inventory or reserve supplied — left empty by design.'
    resources['oxygen_coef']['note'] += '; no single conversion adopted without respiratory and substrate assumptions.'
    resources['water_coef']['note'] += '; no constant metabolic-to-feedwater factor adopted without suit and thermal assumptions.'
    return {'preset_id': 'level1-declared-v0.7.1', 'parameters': parameters, 'resources': resources,
            'banner': 'Scenario model — not physiological calibration. Results are arithmetic consequences of declared assumptions.',
            'paper_reference': {'url':paper,'source':'paper','status':'partially constrained','unsuited_unassisted_kcal_h':510,'assisted_suited_kcal_h':799,'maximum_assistance_Nm':10,'pressure_psia':4.3},
            'time_contingency_min': {'value':0,'source':'scenario','status':'uncalibrated','note':'No extra contingency specified; not a recommended reserve.'},
            'compatibility_note':'This preset is explicitly submitted by the UI. Legacy API requests omitting parameters retain the original 85 W scenario offset documented in docs/science/MODEL_ASSUMPTIONS.md. The current offset derivation is disclosed here.'}

if __name__=='__main__':
    root=Path(__file__).resolve().parents[2]
    z,meta=prepare(root/'data/source/ctx_trn_20m.tif',root/'data/derived')
    print(json.dumps(meta,indent=2))
