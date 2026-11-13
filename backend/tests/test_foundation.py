"""Meaningful integration checks on source data and the independent API."""
import base64
import gzip
import json
import sys
from pathlib import Path
import numpy as np
import pytest
from fastapi.testclient import TestClient

ROOT=Path(__file__).resolve().parents[2]
sys.path.insert(0,str(ROOT))
from marsflex.api import app, terrain
from marsflex.catalog_ingest import normalize

client=TestClient(app)


def test_catalog_pagination_and_planetary_filter():
    result=client.get('/v1/catalog?limit=20').json()
    assert result['total']==145
    ids=[]
    offset=0
    while offset is not None:
        page=client.get('/v1/catalog',params={'limit':20,'offset':offset}).json()
        ids.extend((r['collection'],r['id']) for r in page['items'])
        offset=page['next_offset']
    assert len(ids)==len(set(ids))==145
    assert client.get('/v1/catalog?bbox=0,0,1,1').json()['total']==0
    assert client.get('/v1/catalog?bbox=nan,0,1,1').status_code==422


def test_source_metadata_defects_are_not_silently_accepted():
    themis=client.get('/v1/catalog?collection=mo_themis_controlled_mosaics').json()['items']
    assert len(themis)==2
    for item in themis:
        assert 'source_time_interval_reversed' in item['quality_flags']
        assert 'source_bbox_disagrees_with_geometry_use_geometry_bounds' in item['quality_flags']
        assert item['bounds_lonlat'][1]>=-90
        assert item['approved_for_routing'] is False


def test_places_label_counts_and_no_site_frames_or_fake_track():
    result=client.get('/v1/places?bbox=77.32,18.4,77.49,18.53&limit=1000').json()
    assert result['total']==339
    assert min(r['sol'] for r in result['records'])==13
    assert all(r['kind']=='localized_rover_position' for r in result['records'])
    assert 'HiRISE' in result['scope']
    assert client.get('/v1/places?sol_from=30&sol_to=20').status_code==422


def test_evidence_lookup_uses_native_spectral_pixel_and_rover_provenance():
    result=client.get('/v1/evidence/at?lon=77.4&lat=18.47')
    assert result.status_code==200
    d=result.json()
    assert d['crism']['sample_spacing_m']==36
    cr,cc=d['crism']['native_row'],d['crism']['native_col']
    native=np.fromfile(ROOT/'data/source/crism_BD2500_2.f32',dtype='<f4').reshape(751,455)
    assert d['crism']['summary_parameters']['BD2500_2']==float(native[cr,cc])
    assert d['rover_context']['record']['lidvid'].startswith('urn:nasa:pds:')
    assert d['terrain']['elevation_m'] < 0
    assert client.get('/v1/evidence/at?lon=0&lat=0').status_code==422


def test_real_terrain_api_matches_solver_and_budget_monotonicity():
    request={'position':{'lon':77.4,'lat':18.47},'habitat':{'lon':77.4,'lat':18.47},
             'remaining_min':300,'reserve_min':72,
             'activities':[{'id':'review-delta','lon':77.385,'lat':18.501,'dwell_min':15}],
             'detour':{'lon':77.401,'lat':18.471},'include_field':True}
    result=client.post('/v1/mission/evaluate',json=request)
    assert result.status_code==200,result.text
    body=result.json()
    assert body['time_model_calibrated'] is False
    t=terrain()
    p=t.node(77.4,18.47);a=t.node(77.385,18.501)
    expected=t.field(p,p,[(a,15)],300,72,10)
    actual=np.frombuffer(gzip.decompress(base64.b64decode(body['field']['data'])),dtype='uint8').reshape(t.z.shape)
    assert np.array_equal(actual,expected['labels'])
    request['remaining_min']=240
    lower=client.post('/v1/mission/evaluate',json=request).json()
    assert lower['field_counts']['green']<=body['field_counts']['green']
    assert body['return']['travel_min']==0
    assert body['mission']['route_lon_lat_areoid_height']


def test_invalid_positions_constraints_and_duplicate_tasks_fail_closed():
    request={'position':{'lon':0,'lat':0},'habitat':{'lon':77.4,'lat':18.47},
             'remaining_min':100,'reserve_min':10}
    assert client.post('/v1/mission/evaluate',json=request).status_code==422
    request['reserve_min']=200
    assert client.post('/v1/mission/evaluate',json=request).status_code==422
    request['reserve_min']=10
    request['position']={'lon':77.4,'lat':18.47}
    request['activities']=[{'id':'same','lon':77.385,'lat':18.501,'dwell_min':10}]*2
    assert client.post('/v1/mission/evaluate',json=request).status_code==422


def test_render_surface_is_identical_to_routing_grid_and_assets_are_served():
    surface=client.get('/v1/terrain/surface').json()
    actual=np.frombuffer(base64.b64decode(surface['data']),dtype='<f4').reshape(surface['grid']['shape'])
    assert np.array_equal(actual,terrain().z)
    assert 'Not a resolved global' in surface['rendering_frame']
    assert client.get('/v1/layers/geology.png').headers['content-type']=='image/png'
    if (ROOT/'frontend/dist').is_dir():
        response=client.get('/')
        assert response.status_code==200
        assert '<div id="root"></div>' in response.text


def test_v4_imagery_georeferencing_and_route_profile():
    import rasterio
    from hashlib import sha256
    layers=client.get('/v1/map/layers').json()
    ctx=layers['imagery']['ctx']
    with rasterio.open(ROOT/'data/source/imagery/ctx_ortho_6m.tif') as src:
        assert src.crs.to_wkt()==ctx['source_crs']
        assert src.transform.a==6
        assert sha256((ROOT/'data/source/imagery/ctx_ortho_6m.tif').read_bytes()).hexdigest()==ctx['source_sha256']
    assert ctx['valid_fraction']==1
    assert layers['imagery']['hirise']['valid_fraction']>.99
    assert client.get('/v1/map/image/orbital').headers['content-type']=='image/jpeg'
    assert client.get('/v1/map/image/unknown').status_code==404
    request={'position':{'lon':77.397,'lat':18.485},'habitat':{'lon':77.415,'lat':18.466},'remaining_min':300,'reserve_min':72,
             'activities':[{'id':'delta','lon':77.385,'lat':18.501,'dwell_min':15}],
             'detour':{'lon':77.385,'lat':18.501},'include_field':False}
    body=client.post('/v1/mission/evaluate',json=request).json()
    profile=body['mission']['profile'];samples=profile['samples']
    assert len(samples)==len(body['mission']['route_lon_lat_areoid_height'])
    assert 3900<profile['distance_m']<4200
    assert samples[-1]['travel_min']==pytest.approx(body['mission']['travel_min'],rel=1e-5)
    assert all(b['distance_m']>a['distance_m'] for a,b in zip(samples[:-1],samples[1:]))
    assert body['detour']['route_lon_lat_areoid_height']
    assert body['detour']['mission_margin_min']==pytest.approx(body['mission']['margin_min']-10,abs=1e-3)


def test_native_geomodels_match_source_and_do_not_invent_strata():
    import rasterio
    catalog=client.get('/v1/geomodel/models').json()
    assert {m['id'] for m in catalog['models']}=={'regional','delta','margin','crater_floor','skinner_ridge','amalik'}
    assert 'not tomographic' in catalog['scope']
    for name in ['margin','delta','crater_floor']:
        body=client.get('/v1/geomodel/models/'+name).json()
        with rasterio.open(ROOT/f'data/source/hirise/{name}_1m.tif') as src:
            native=src.read(1)
            assert body['transform']==list(src.transform)[:6]
            assert body['spacing_map_m']==1
        actual=np.frombuffer(base64.b64decode(body['data']),dtype='<f4').reshape(body['shape'])
        assert np.array_equal(actual,native)
        assert body['base_elevation_m']<native.min()
        assert 'No subsurface' in body['base_scope']
        assert 'layers' not in body
    assert client.get('/v1/geomodel/models/unknown').status_code==404
