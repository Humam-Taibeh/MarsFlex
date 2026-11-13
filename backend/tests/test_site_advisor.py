"""Mission Site Advisor: component definitions, budget gates, separation and determinism."""
import gzip, base64
import numpy as np
import pytest
from fastapi.testclient import TestClient
from marsflex.api import app, terrain
from marsflex.site_advisor import traversability
from marsflex.terrain import ground_distance

client = TestClient(app)
HAB = {'lon': 77.4508, 'lat': 18.4446}


@pytest.fixture(scope='module')
def result():
    r = client.post('/v1/sites/score', json={'habitat': HAB})
    assert r.status_code == 200
    return r.json()


def decode(field):
    return np.frombuffer(gzip.decompress(base64.b64decode(field['data'])), dtype=np.uint8).reshape(field['shape'])


def test_traversability_is_monotonic_and_zero_when_blocked():
    s = np.array([0, 5, 10, 19.9, 25])
    v = traversability(s, np.array([True, True, True, True, False]), 20)
    assert v[0] == 1 and all(np.diff(v[:4]) < 0) and v[4] == 0


def test_weights_are_normalised_and_invalid_rejected(result):
    assert sum(result['weights'].values()) == pytest.approx(1)
    zero = {'traversability': 0, 'reachability': 0, 'science': 0}
    assert client.post('/v1/sites/score', json={'habitat': HAB, 'weights': zero}).status_code == 422
    assert client.post('/v1/sites/score', json={'habitat': HAB, 'reserve_min': 500, 'budget_min': 300}).status_code == 422


def test_site_score_equals_weighted_components(result):
    w = result['weights']
    for s in result['top_sites']:
        want = sum(w[k] * s['components'][k] for k in w)
        assert s['score'] == pytest.approx(want, rel=1e-9)


def test_top_sites_fit_every_budget_and_are_separated(result):
    sites = result['top_sites']
    assert 1 <= len(sites) <= 3
    for s in sites:
        assert s['round_trip_min'] + 72 <= 300 + 1e-6            # default budget and reserve
        assert s['round_trip_o2_kg'] <= 0.54 + 1e-9               # reference suit O2
        assert s['round_trip_min'] <= 7 * 60 + 1e-6               # reference suit EVA time
        assert s['slope_deg'] <= 20
        assert s['reasons']
    for i in range(len(sites)):
        for j in range(i + 1, len(sites)):
            assert float(ground_distance(sites[i]['lon'], sites[i]['lat'], sites[j]['lon'], sites[j]['lat'])) >= 300
    scores = [s['score'] for s in sites]
    assert scores == sorted(scores, reverse=True)


def test_field_marks_unwalkable_cells_as_zero_and_is_deterministic(result):
    f = decode(result['field'])
    t = terrain()
    assert f.shape == t.z.shape
    assert not np.any(f[~t.walkable])
    again = client.post('/v1/sites/score', json={'habitat': HAB}).json()
    assert again['field']['data'] == result['field']['data'] and again['top_sites'] == result['top_sites']


def test_tiny_budget_leaves_no_candidates():
    r = client.post('/v1/sites/score', json={'habitat': HAB, 'budget_min': 5, 'reserve_min': 0, 'dwell_min': 30}).json()
    assert r['candidate_cells'] == 0 and r['top_sites'] == []
    assert r['operational_safety_certified'] is False
