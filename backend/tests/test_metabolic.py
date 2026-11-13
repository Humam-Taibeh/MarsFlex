import math
import numpy as np
import pytest
from fastapi.testclient import TestClient
from marsflex.terrain import (Terrain, MetabolicModel, metabolic_cost, ResourceBudget,
                     ResourceModel, MetabolicRouting, walk_back_limit, assess_resources)
from marsflex.api import app


def flat():
    return Terrain(np.zeros((5,5)),{'transform':[20,0,0,0,-20,100]})


def test_flat_units_and_directional_speed():
    c=metabolic_cost(30,0)
    assert c['duration_s']==60
    assert c['metabolic_rate_W']==335
    assert c['energy_kJ']==20.1
    up=metabolic_cost(30,5);down=metabolic_cost(30,-5)
    assert up['metabolic_rate_W'] == pytest.approx(150+200*up['speed_m_s']+300*5+85)
    assert down['metabolic_rate_W'] == pytest.approx(150+200*down['speed_m_s']+85)
    assert up['speed_m_s']<down['speed_m_s']<c['speed_m_s']
    slow=metabolic_cost(30,0,MetabolicModel(soil_speed_factor=2))
    assert slow['duration_s']==120 and slow['energy_kJ']>c['energy_kJ']


def test_joint_torque_replaces_not_adds_offset():
    m=MetabolicModel(joint_torque_Nm=30,joint_angular_speed_rad_s=0.5,joint_efficiency=0.25)
    assert m.moving_suit_power_W==60
    assert metabolic_cost(30,0,m)['metabolic_rate_W']==310
    with pytest.raises(ValueError):MetabolicModel(joint_torque_Nm=30).validate()


@pytest.mark.parametrize('distance,grade',[(float('nan'),0),(-1,0),(1,90),(1,float('inf'))])
def test_invalid_physical_inputs(distance,grade):
    with pytest.raises(ValueError):metabolic_cost(distance,grade)


def test_resource_units_and_exact_boundary():
    resources=ResourceModel(oxygen=ResourceBudget(.0301,.01),water=ResourceBudget(1,.1),battery=ResourceBudget(20,1),
                            oxygen_energy_kJ_per_kg=1000,cooling_water_kg_per_MJ=.5,equipment_power_W=100)
    use=resources.consumption(20.1,60)
    assert use['oxygen']==pytest.approx(.0201)
    assert use['water']==pytest.approx(.01005)
    assert use['battery']==pytest.approx(100/60)
    a=assess_resources({'reachable':True,'energy_kJ':20.1,'duration_s':60},resources,10,0,150)
    assert a['all_resources_fit'] is True
    assert a['limiting_resource']=='oxygen'
    assert a['max_additional_stationary_min']==pytest.approx(0,abs=1e-10)


def test_unknown_is_not_safe_and_time_reserve_is_separate():
    s={'reachable':True,'energy_kJ':20.1,'duration_s':60}
    a=assess_resources(s,ResourceModel(),10,2,150)
    assert a['all_resources_fit'] is None and a['status']=='incomplete_resource_inputs'
    assert a['max_additional_stationary_min']==7
    assert a['resources']['oxygen']['required'] is None
    with pytest.raises(ValueError):ResourceModel(oxygen=ResourceBudget(1)).validate()
    with pytest.raises(ValueError):ResourceBudget(.1,.2).validate()


def test_native_graph_dynamic_return_and_legacy_unchanged():
    t=flat();before=t.graph.data.copy()
    r=walk_back_limit(t,10,14,30)
    path=r['selected']
    assert path['distance_m']==pytest.approx(80,abs=1e-5)
    assert path['travel_min']==pytest.approx(80/.5/60,abs=1e-5)
    assert path['energy_kJ']==pytest.approx(335*160/1000,abs=1e-5)
    assert path['assessment']['max_additional_stationary_min']==pytest.approx(30-160/60,abs=1e-5)
    assert np.array_equal(before,t.graph.data)
    same=walk_back_limit(t,12,12,30)['selected']
    assert same['distance_m']==0 and same['energy_kJ']==0
    assert same['assessment']['max_additional_stationary_min']==30


def test_directed_return_and_no_nodata_shortcut():
    t=Terrain(np.tile(np.arange(5)*2.,(5,1)),{'transform':[20,0,0,0,-20,100]})
    router=MetabolicRouting(t)
    up=router.summary(router.route(10,14));down=router.summary(router.route(14,10))
    assert up['energy_kJ']>down['energy_kJ']
    for s in up['segments']:
        assert t.graph[s['from_node'],s['to_node']]>0
    z=np.zeros((9,9));z[:,4]=np.nan
    blocked=Terrain(z,{'transform':[20,0,0,0,-20,180]})
    result=walk_back_limit(blocked,37,43,300)['selected']
    assert not result['reachable'] and result['assessment']['status']=='no_route_in_known_grid'


def test_dwell_energy_and_remaining_resource_monotonicity():
    router=MetabolicRouting(flat());s=router.summary([12],10)
    assert s['energy_kJ']==90 and s['duration_s']==600
    values=[]
    for oxygen in (.05,.1,.2):
        res=ResourceModel(oxygen=ResourceBudget(oxygen),oxygen_energy_kJ_per_kg=1000)
        values.append(assess_resources(s,res,300,0,150)['max_additional_stationary_min'])
    assert values==sorted(values)


def test_api_native_data_invalid_inputs_and_lock_release():
    request={'position':{'lon':77.397,'lat':18.485},'habitat':{'lon':77.415,'lat':18.466},'remaining_min':300}
    with TestClient(app) as c:
        invalid=c.post('/v1/mission/metabolic',json={**request,'resources':{'oxygen':{'remaining':1}}})
        assert invalid.status_code==422
        assert c.post('/v1/mission/metabolic',json={**request,'parameters':{'soil_speed_factor':0}}).status_code==422
        r=c.post('/v1/mission/metabolic',json=request)
        assert r.status_code==200,r.text
        data=r.json();path=data['return']
        assert path['reachable'] and data['grid_spacing_map_m']==20
        assert path['assessment']['all_resources_fit'] is None
        assert path['energy_kJ']==pytest.approx(sum(s['energy_kJ'] for s in path['segments']))
        assert len(path['route_lon_lat_areoid_height'])==len(path['segments'])+1
        assert data['operational_safety_certified'] is False
        assert 'TIME-ONLY' in data['legacy_freedom_field_scope']


def test_time_candidate_can_fit_when_minimum_energy_candidate_cannot():
    class TwoCandidates:
        def route(self,source,target,objective):return [0] if objective=='energy' else [1]
        def summary(self,nodes):
            return {'reachable':True,'nodes':nodes,'duration_s':120 if nodes==[0] else 60,
                    'energy_kJ':10 if nodes==[0] else 12}
    result=walk_back_limit(flat(),10,14,remaining_min=1.5,routing=TwoCandidates())
    assert result['selected']['objective']=='time'
    assert result['selected']['assessment']['configured_constraints_fit'] is True
    assert result['candidates'][0]['assessment']['configured_constraints_fit'] is False
