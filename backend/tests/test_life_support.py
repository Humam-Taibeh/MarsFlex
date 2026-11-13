"""Life support: hand arithmetic for each published relation, and ledger invariants on real terrain."""
import math
import numpy as np
import pytest
from fastapi.testclient import TestClient
from marsflex.api import app
from marsflex.life_support import (pandolf_W, o2_kg, standing_W, WalkerModel, Suit, EMU_REFERENCE, O2_ENERGY_KJ_PER_L,
                                   O2_DENSITY_STP_KG_PER_L, life_support)

client = TestClient(app)
BODY = {'position': {'lon': 77.40, 'lat': 18.47}, 'habitat': {'lon': 77.4508, 'lat': 18.4446},
        'activities': [{'id': 'Swift Run', 'lon': 77.40617078, 'lat': 18.458931, 'dwell_min': 15},
                       {'id': 'Hazeltop', 'lon': 77.4093, 'lat': 18.4537, 'dwell_min': 15}]}


def test_pandolf_by_hand():
    m = WalkerModel(body_mass_kg=75, carried_load_kg=0, terrain_factor=1.0, suit_offset_W=0)
    assert float(pandolf_W(0.5, 0, m)) == pytest.approx(1.5 * 75 + 75 * 1.5 * 0.25)              # 140.625 W
    assert float(pandolf_W(0.5, 10, m)) == pytest.approx(140.625 + 75 * 0.35 * 0.5 * 10)          # +131.25 W at 10 %
    assert float(pandolf_W(0.5, -10, m)) == pytest.approx(140.625)                               # no downhill credit
    loaded = WalkerModel(body_mass_kg=75, carried_load_kg=20, terrain_factor=1.2, suit_offset_W=0)
    want = 1.5 * 75 + 2.0 * 95 * (20 / 75) ** 2 + 1.2 * 95 * (1.5 * 0.25 + 0.35 * 0.5 * 4)
    assert float(pandolf_W(0.5, 4, loaded)) == pytest.approx(want)
    assert standing_W(WalkerModel(suit_offset_W=100)) == pytest.approx(1.5 * 75 + 100)


def test_oxygen_from_energy_by_hand():
    one_litre = O2_ENERGY_KJ_PER_L['low_rer_0_70']
    assert one_litre == pytest.approx(4.69 * 4.184)
    assert float(o2_kg(one_litre)) == pytest.approx(1.429e-3)
    assert float(o2_kg(1000, 'low_rer_0_70')) > float(o2_kg(1000, 'high_rer_1_00'))  # low equivalent is the conservative one


def test_emu_reference_is_consistent_with_its_own_rating():
    """0.54 kg for a normal seven-hour EVA implies an average near 300 W: a plausible EVA metabolic rate."""
    avg_W = EMU_REFERENCE.primary_o2_kg / O2_DENSITY_STP_KG_PER_L * O2_ENERGY_KJ_PER_L['mixed_diet'] * 1000 / (7 * 3600)
    assert 250 < avg_W < 350


@pytest.mark.parametrize('field,value', [('body_mass_kg', 10), ('carried_load_kg', -1), ('terrain_factor', 0.5), ('suit_offset_W', -5)])
def test_invalid_walker_inputs_rejected(field, value):
    with pytest.raises(ValueError):
        WalkerModel(**{field: value}).validate()


@pytest.fixture(scope='module')
def ledger():
    r = client.post('/v1/mission/life-support', json=BODY)
    assert r.status_code == 200
    return r.json()


def test_ledger_matches_power_times_time(ledger):
    m = ledger['mission']
    kJ = m['mean_power_W'] * m['elapsed_min'] * 60 / 1000
    assert m['o2_used_kg'] == pytest.approx(kJ / O2_ENERGY_KJ_PER_L['low_rer_0_70'] * O2_DENSITY_STP_KG_PER_L, rel=1e-9)
    assert m['o2_remaining_kg'] == pytest.approx(0.54 - m['o2_used_kg'])
    lo, hi = m['o2_used_kg_band']
    assert lo < hi and hi == pytest.approx(m['o2_used_kg'])
    assert ledger['operational_safety_certified'] is False
    assert ledger['sources']['emu']['url'].startswith('https://ntrs.nasa.gov')
    assert ledger['not_modelled']


def test_ledger_is_monotonic_and_return_feasibility_is_a_prefix(ledger):
    s = ledger['samples']
    used = [x['o2_used_kg'] for x in s]; t = [x['elapsed_min'] for x in s]
    assert all(b >= a - 1e-12 for a, b in zip(used, used[1:]))
    assert all(b >= a - 1e-12 for a, b in zip(t, t[1:]))
    ok = [x['return_possible'] for x in s]
    first_bad = ok.index(False) if False in ok else len(ok)
    assert all(ok[:first_bad]) and not any(ok[first_bad:])
    pnr = ledger['point_of_no_return']
    assert pnr is not None and pnr['sample_index'] == first_bad - 1


def test_dwell_is_counted_at_standing_power(ledger):
    no_dwell = client.post('/v1/mission/life-support', json={**BODY, 'activities': [{**a, 'dwell_min': 0} for a in BODY['activities']]}).json()
    extra_kg = ledger['mission']['o2_used_kg'] - no_dwell['mission']['o2_used_kg']
    want = o2_kg(standing_W(WalkerModel()) * 30 * 60 / 1000)
    assert extra_kg == pytest.approx(float(want), rel=1e-9)
    assert ledger['mission']['elapsed_min'] - no_dwell['mission']['elapsed_min'] == pytest.approx(30)


def test_small_suit_moves_point_of_no_return_earlier():
    from marsflex.api import terrain, route_profile
    t = terrain()
    p, h = t.node(77.40, 18.47), t.node(77.4508, 18.4446)
    nodes, _ = t.route(p, h)
    prof = route_profile(t, nodes)
    big = life_support(t, prof['samples'], nodes, [], [], h, EMU_REFERENCE, WalkerModel())
    tiny = life_support(t, prof['samples'], nodes, [], [], h, Suit('tiny', 'test', 0.05, 30, None, None), WalkerModel())
    assert big['mission']['fits'] and not tiny['mission']['fits']
    assert tiny['status'] == 'exceeds_reference_suit'
    assert tiny['point_of_no_return'] is None or tiny['point_of_no_return']['sample_index'] < big['point_of_no_return']['sample_index']


def test_api_validation():
    assert client.post('/v1/mission/life-support', json={**BODY, 'suit_id': 'mars_suit'}).status_code == 422
    assert client.post('/v1/mission/life-support', json={**BODY, 'body_mass_kg': 5}).status_code == 422
    assert client.get('/v1/life-support/suits').json()['suits'][0]['primary_o2_kg'] == 0.54
