import pytest
from fastapi.testclient import TestClient
from marsflex.api import app
from marsflex.radiation import walk_dose

client = TestClient(app)


def test_walk_dose_scales_linearly_with_published_rate():
    d = walk_dose(720)
    assert d['walk_dose_mSv'] == pytest.approx(0.64 * 0.5)
    assert d['reference_stay_dose_mSv'] == pytest.approx(0.64 * 500)
    assert d['walk_fraction_of_career_limit'] == pytest.approx(0.32 / 600)
    assert walk_dose(0)['walk_dose_mSv'] == 0


@pytest.mark.parametrize('bad', [-1, 1441])
def test_walk_dose_rejects_out_of_range(bad):
    with pytest.raises(ValueError):
        walk_dose(bad)


def test_radiation_endpoint_reports_sources_and_limits_and_validates():
    r = client.get('/v1/environment/radiation?minutes=300')
    assert r.status_code == 200
    d = r.json()
    assert d['status'] == 'scenario_context_not_a_dose_prediction'
    assert d['sources'] and d['limitations']
    assert any('solar particle' in x.lower() for x in d['limitations'])
    assert client.get('/v1/environment/radiation?minutes=-5').status_code == 422
    assert client.get('/v1/environment/radiation?minutes=99999').status_code == 422


def test_large_payloads_are_compressed_and_cacheable():
    r = client.get('/v1/terrain/surface', headers={'Accept-Encoding': 'gzip'})
    assert r.headers.get('content-encoding') == 'gzip'
    assert 'max-age' in r.headers.get('cache-control', '')


def test_globe_texture_is_served_with_cache_header():
    r = client.get('/v1/map/image/globe')
    assert r.status_code == 200 and r.headers['content-type'] == 'image/jpeg'
    assert 'max-age' in r.headers.get('cache-control', '')
    assert r.content[:2] == b'\xff\xd8'
