import json,math
from pathlib import Path
import numpy as np
import pytest
from shapely.geometry import box
from shapely.ops import unary_union
from marsflex.mission_evidence import coverage_for_route, reference_geometry
from marsflex.api import science_targets, Mission, evaluate, mission_evidence
R=3396190.
def point(x,y):return [math.degrees(x/R),math.degrees(y/R),0]

def test_partial_reference_and_repeated_traversal_count_by_length():
    ref=unary_union([box(25,-10,60,10),box(40,-10,75,10)])
    v=coverage_for_route([point(0,0),point(100,0),point(0,0)],ref,R)
    assert v['covered_percent']==pytest.approx(50)
    assert v['route_length_m']==pytest.approx(200)
    assert v['covered_length_m']==pytest.approx(100)

def test_empty_or_stationary_route_does_not_claim_full_coverage():
    for route in [[],[point(0,0)],[point(0,0),point(0,0)]]:
        assert coverage_for_route(route,box(-10,-10,10,10),R)['covered_percent'] is None

def test_source_targets_keep_real_coordinates_and_native_evidence():
    data=science_targets();targets=data['targets']
    assert [(t['name'],t['sol'],t['pdf_page']) for t in targets]==[('Swift Run',490,14),('Hazeltop',509,58),('Shuyak',575,100)]
    assert targets[0]['lon']==77.40617078 and targets[0]['lat']==18.458931
    assert data['source']['bytes']==104818942
    assert len(data['source']['sha256'])==64
    for t in targets:
        assert t['routing']['status']=='represented_on_CTX_grid'
        assert t['evidence']['crism']['sample_spacing_m']==36
        assert t['evidence']['rover_context']['distance_m']<6

def test_reference_area_only_uses_downloaded_valid_cells():
    root=Path(__file__).resolve().parents[1]/'data/derived'
    report=json.loads((root/'hirise_validation.json').read_text());count=0
    assert len(report['patches'])==5
    for p in report['patches']:
        with np.load(root/f"reference_{p['name']}.npz") as a:
            count+=np.sum(np.isfinite(a['ctx'])&np.isfinite(a['hirise_20m'])&(a['full_coverage']>=.99999))
    assert reference_geometry().area==pytest.approx(count*20*20)

def test_mission_links_only_exact_historical_locations():
    req=Mission(position={'lon':77.397,'lat':18.485},habitat={'lon':77.415,'lat':18.466},remaining_min=300,reserve_min=72,
        activities=[{'id':'Swift Run','lon':77.40617078,'lat':18.458931,'dwell_min':15},
                    {'id':'Hazeltop','lon':77.40588851,'lat':18.45863707,'dwell_min':15}])
    result=evaluate(req);brief=result['evidence_brief']
    assert result['mission']['feasible']
    assert [x['historical_target']['id'] for x in brief['stations']]==['swift-run','hazeltop']
    assert brief['mission_reference_coverage']['route_length_m']==pytest.approx(result['mission']['profile']['distance_m'])
    assert 0<brief['mission_reference_coverage']['covered_percent']<100
    req.activities[0].lon+=.0001
    altered=mission_evidence(req,result)
    assert altered['stations'][0]['historical_target'] is None # name alone cannot claim provenance
    assert altered['stations'][1]['historical_target']['id']=='hazeltop'
