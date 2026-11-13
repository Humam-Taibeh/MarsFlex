"""Independent re-derivations of the core calculations.

Each test re-implements a formula or algorithm from first principles (plain Python / closed form) and compares it with the
production code. A failure here means the production maths disagrees with the documented model. These tests do NOT claim the
scenario parameters (speed, penalties, power coefficients) are physiologically calibrated; they check the arithmetic.
"""
import math
import numpy as np
import pytest
from marsflex.terrain import (Terrain, Model, MetabolicModel, MetabolicRouting, metabolic_cost, ground_distance, RADIUS, DIRECTIONS)

LAT0, LON0 = 18.45, 77.40


def make_meta(h, w, lat=LAT0, lon=LON0):
    c = math.radians(lon) * RADIUS
    f = math.radians(lat) * RADIUS + h * 10.0
    return {'transform': [20.0, 0.0, c, 0.0, -20.0, f]}


def haversine(lon1, lat1, lon2, lat2):
    """Independent great-circle distance: spherical Vincenty (atan2) form, numerically stable at 20 m scale.

    (The spherical law of cosines loses ~6 digits at 20 m on a 3396 km sphere, so it is not used as the reference.)
    """
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dl = math.radians(lon2 - lon1)
    y = math.hypot(math.cos(p2) * math.sin(dl), math.cos(p1) * math.sin(p2) - math.sin(p1) * math.cos(p2) * math.cos(dl))
    x = math.sin(p1) * math.sin(p2) + math.cos(p1) * math.cos(p2) * math.cos(dl)
    return RADIUS * math.atan2(y, x)


# ------------------------------------------------------------------ geometry
def test_ground_distance_known_values():
    one_degree = math.pi * RADIUS / 180
    assert float(ground_distance(77, 0, 77, 1)) == pytest.approx(one_degree, rel=1e-9)
    assert float(ground_distance(0, 0, 1, 0)) == pytest.approx(one_degree, rel=1e-9)
    assert float(ground_distance(10, 60, 11, 60)) == pytest.approx(one_degree * math.cos(math.radians(60)), rel=2e-4)
    assert float(ground_distance(0, 0, 180, 0)) == pytest.approx(math.pi * RADIUS, rel=1e-12)
    assert float(ground_distance(33, 12, 33, 12)) == 0.0
    # 1 degree of latitude on Mars is about 59.27 km (radius 3396.19 km)
    assert 59.27e3 < one_degree < 59.28e3


def test_ground_distance_matches_independent_formula_on_random_pairs():
    rng = np.random.default_rng(7)
    for _ in range(200):
        lon1, lon2 = rng.uniform(0, 360, 2)
        lat1, lat2 = rng.uniform(-80, 80, 2)
        got = float(ground_distance(lon1, lat1, lon2, lat2))
        assert got == pytest.approx(haversine(lon1, lat1, lon2, lat2), rel=1e-7, abs=1e-3)
        assert got == pytest.approx(float(ground_distance(lon2, lat2, lon1, lat1)))  # symmetric


# ------------------------------------------------------------------ slope
@pytest.mark.parametrize('theta', [3.0, 7.0, 12.5])
def test_slope_of_tilted_planes_includes_latitude_correction(theta):
    h = w = 15
    meta = make_meta(h, w)
    lat = np.rad2deg((meta['transform'][5] + (np.arange(h) + .5) * -20.0) / RADIUS)
    t = math.tan(math.radians(theta))
    # plane rising to the EAST: ground distance per column at latitude phi is 20*cos(phi)
    z_east = np.array([[t * 20 * math.cos(math.radians(lat[r])) * c for c in range(w)] for r in range(h)], dtype=float)
    s = Terrain(z_east, meta).slope
    assert np.allclose(s[1:-1, 1:-1], theta, atol=1e-6)
    # plane rising to the NORTH: ground distance per row is exactly 20 m
    z_north = np.array([[t * 20 * (h - 1 - r) for _ in range(w)] for r in range(h)], dtype=float)
    assert np.allclose(Terrain(z_north, meta).slope[1:-1, 1:-1], theta, atol=1e-6)
    # combined plane: slope = atan(hypot(tan east, tan north))
    z_both = z_east + z_north
    want = math.degrees(math.atan(math.hypot(t, t)))
    # tolerance 1e-3 deg: the synthetic east plane varies with latitude (cos phi), which adds a ~3e-5 deg north-south component
    assert np.allclose(Terrain(z_both, meta).slope[1:-1, 1:-1], want, atol=1e-3)


# ------------------------------------------------------------------ time model on a slope
def test_uphill_and_downhill_route_cost_follow_the_documented_formula():
    h, w = 5, 20
    meta = make_meta(h, w)
    lat = np.rad2deg((meta['transform'][5] + (np.arange(h) + .5) * -20.0) / RADIUS)
    t = math.tan(math.radians(8.0))
    z = np.array([[t * 20 * math.cos(math.radians(lat[r])) * c for c in range(w)] for r in range(h)], dtype=float)
    model = Model()
    terrain = Terrain(z, meta, model)
    row = 2
    a, b = row * w + 2, row * w + 15
    cost_up = terrain.route(a, b)[1]
    cost_down = terrain.route(b, a)[1]
    d = sum(haversine(terrain.lon[c], terrain.lat[row], terrain.lon[c + 1], terrain.lat[row]) for c in range(2, 15))
    rise = z[row, 15] - z[row, 2]
    v = model.speed_m_s
    assert cost_up == pytest.approx((d + model.uphill_weight * rise) / (60 * v), rel=1e-9)
    assert cost_down == pytest.approx((d + model.downhill_weight * rise) / (60 * v), rel=1e-9)
    assert cost_up > cost_down  # climbing is slower than descending the same line
    assert terrain.route(a, a) == ([a], 0.0)


# ------------------------------------------------------------------ graph + dynamic programme vs brute force
def reference_edges(z, meta, model):
    """Pure-Python re-implementation of the edge rules, written from the documented specification."""
    h, w = z.shape
    a, _, c0, _, e, f0 = meta['transform']
    lon = [math.degrees((c0 + (c + .5) * a) / RADIUS) for c in range(w)]
    lat = [math.degrees((f0 + (r + .5) * e) / RADIUS) for r in range(h)]
    fin = np.isfinite(z)

    def slope(r, c):
        def d(arr_idx, n, get):
            if n < 2:
                return float('nan')
            if arr_idx == 0:
                return get(1) - get(0)
            if arr_idx == n - 1:
                return get(n - 1) - get(n - 2)
            return (get(arr_idx + 1) - get(arr_idx - 1)) / 2
        dzc = d(c, w, lambda k: z[r, k])
        dzr = d(r, h, lambda k: z[k, c])
        dx = dzc / (20 * math.cos(math.radians(lat[r])))
        dy = dzr / 20
        return math.degrees(math.atan(math.hypot(dx, dy)))

    walk = np.zeros((h, w), dtype=bool)
    for r in range(h):
        for c in range(w):
            if fin[r, c]:
                s = slope(r, c)
                walk[r, c] = math.isfinite(s) and s <= model.max_surface_slope_deg
    n = h * w
    inf = float('inf')
    D = [[inf] * n for _ in range(n)]
    for i in range(n):
        D[i][i] = 0.0
    for r in range(h):
        for c in range(w):
            if not walk[r, c]:
                continue
            for dr, dc in DIRECTIONS:
                nr, nc = r + dr, c + dc
                if not (0 <= nr < h and 0 <= nc < w) or not walk[nr, nc]:
                    continue
                if dr and dc and not (walk[r, nc] and walk[nr, c]):
                    continue
                dist = haversine(lon[c], lat[r], lon[nc], lat[nr])
                grade = (z[nr, nc] - z[r, c]) / dist
                if abs(math.degrees(math.atan(grade))) > model.max_grade_deg:
                    continue
                cost = dist / (60 * model.speed_m_s) * (1 + model.uphill_weight * max(grade, 0) + model.downhill_weight * max(-grade, 0))
                D[r * w + c][nr * w + nc] = min(D[r * w + c][nr * w + nc], cost)
    for k in range(n):  # Floyd-Warshall
        Dk = D[k]
        for i in range(n):
            dik = D[i][k]
            if dik == inf:
                continue
            Di = D[i]
            for j in range(n):
                v = dik + Dk[j]
                if v < Di[j]:
                    Di[j] = v
    return np.array(D), walk


@pytest.fixture(scope='module')
def rough_terrain():
    rng = np.random.default_rng(2026)
    h = w = 9
    base = np.cumsum(np.cumsum(rng.normal(0, 1.0, (h, w)), axis=0), axis=1) * 2.5
    base[3, 4] = np.nan  # NoData hole
    base[6, 2] = np.nan
    model = Model(max_grade_deg=12.0, max_surface_slope_deg=14.0)
    terrain = Terrain(base, make_meta(h, w), model)
    D, walk = reference_edges(base, make_meta(h, w), model)
    return terrain, D, walk, base, model


def test_walkable_mask_matches_independent_slope(rough_terrain):
    terrain, _, walk, _, _ = rough_terrain
    assert np.array_equal(terrain.walkable, walk)
    assert 0.3 < walk.mean() < 0.99  # the fixture exercises both blocked and open cells


def test_dijkstra_costs_equal_brute_force_all_pairs(rough_terrain):
    terrain, D, walk, *_ = rough_terrain
    n = terrain.h * terrain.w
    for src in range(0, n, 7):
        if not walk.ravel()[src]:
            continue
        costs, _ = terrain.solve(src)
        assert np.allclose(np.where(np.isfinite(costs), costs, -1), np.where(np.isfinite(D[src]), D[src], -1), rtol=1e-9, atol=1e-9)


def test_mission_field_equals_explicit_sum_of_legs(rough_terrain):
    terrain, D, walk, *_ = rough_terrain
    flat = walk.ravel()
    nodes = [i for i in range(terrain.h * terrain.w) if flat[i]]
    p, home, t1, t2 = nodes[0], nodes[-1], nodes[len(nodes) // 3], nodes[2 * len(nodes) // 3]
    detour, d1, d2, budget, reserve = 10.0, 15.0, 20.0, 1e9, 30.0
    out = terrain.field(p, home, [(t1, d1), (t2, d2)], budget, reserve, detour)
    for x in nodes:
        want = D[p][x] + detour + D[x][t1] + d1 + D[t1][t2] + d2 + D[t2][home]
        got = out['mission_cost'][x]
        if math.isfinite(want):
            assert got == pytest.approx(want, rel=1e-9, abs=1e-9)
        else:
            assert not math.isfinite(got)
        want_return = D[p][x] + detour + D[x][home]
        if math.isfinite(want_return):
            assert out['return_cost'][x] == pytest.approx(want_return, rel=1e-9, abs=1e-9)


def test_colour_classes_follow_the_budget_inequalities(rough_terrain):
    terrain, D, walk, *_ = rough_terrain
    flat = walk.ravel()
    nodes = [i for i in range(terrain.h * terrain.w) if flat[i]]
    p, home, t1 = nodes[0], nodes[-1], nodes[len(nodes) // 2]
    budget, reserve, detour = 100.0, 20.0, 10.0
    out = terrain.field(p, home, [(t1, 15.0)], budget, reserve, detour)
    labels = out['labels'].ravel()
    for x in nodes:
        known = math.isfinite(D[p][x]) and math.isfinite(D[x][home])
        if not known:
            assert labels[x] == 0
            continue
        ret = D[p][x] + detour + D[x][home]
        mis = D[p][x] + detour + D[x][t1] + 15.0 + D[t1][home]
        want = 3 if mis + reserve <= budget else 2 if ret + reserve <= budget else 1
        assert labels[x] == want


# ------------------------------------------------------------------ metabolic arithmetic
def test_metabolic_flat_walk_by_hand():
    m = MetabolicModel()  # basal 150, 200 W per m/s, 300 W/deg, 85 W suit, 0.5 m/s
    r = metabolic_cost(100.0, 0.0, m)
    assert float(r['speed_m_s']) == pytest.approx(0.5)
    assert float(r['duration_s']) == pytest.approx(200.0)
    assert float(r['metabolic_rate_W']) == pytest.approx(150 + 200 * 0.5 + 85)
    assert float(r['energy_kJ']) == pytest.approx(335 * 200 / 1000)


def test_metabolic_uphill_and_downhill_by_hand():
    m = MetabolicModel()
    up = metabolic_cost(100.0, 10.0, m)
    g = math.tan(math.radians(10.0))
    v = 0.5 / (1 + 4 * g)
    assert float(up['speed_m_s']) == pytest.approx(v)
    assert float(up['duration_s']) == pytest.approx(100 / v)
    assert float(up['metabolic_rate_W']) == pytest.approx(150 + 200 * v + 300 * 10 + 85)
    dn = metabolic_cost(100.0, -10.0, m)
    vd = 0.5 / (1 + 2 * g)
    assert float(dn['speed_m_s']) == pytest.approx(vd)
    assert float(dn['metabolic_rate_W']) == pytest.approx(150 + 200 * vd + 0 + 85)  # no downhill energy credit
    assert float(dn['energy_kJ']) > 0


def test_torque_mode_replaces_suit_offset_exactly():
    m = MetabolicModel(joint_torque_Nm=10.0, joint_angular_speed_rad_s=2.0, joint_efficiency=0.25)
    assert m.moving_suit_power_W == pytest.approx(10 * 2 / 0.25)
    assert float(metabolic_cost(100, 0, m)['metabolic_rate_W']) == pytest.approx(150 + 200 * .5 + 80.0)


def test_time_and_metabolic_models_agree_edge_by_edge(rough_terrain):
    """Metabolic duration (soil factor 1) must equal the terrain edge time on every admissible edge."""
    terrain, *_ = rough_terrain
    routing = MetabolicRouting(terrain, MetabolicModel())
    g = terrain.graph.tocoo()
    seconds = routing.time_graph.tocoo()
    assert np.array_equal(g.row, seconds.row) and np.array_equal(g.col, seconds.col)
    assert np.allclose(g.data * 60, seconds.data, rtol=1e-9)


def test_default_suit_offset_derivation_arithmetic():
    from marsflex.terrain import metabolic_scenario_defaults
    p = metabolic_scenario_defaults()['parameters']['suit_penalty_W']['value']
    assert p == pytest.approx((799 - 510) * 4184 / 3600, abs=1e-5)  # 289 kcal/h = 335.87 W


# ------------------------------------------------------------------ API consistency on real data
@pytest.fixture(scope='module')
def mission():
    from fastapi.testclient import TestClient
    from marsflex.api import app
    body = {'position': {'lon': 77.40, 'lat': 18.47}, 'habitat': {'lon': 77.4508, 'lat': 18.4446}, 'remaining_min': 300, 'reserve_min': 72,
            'activities': [{'id': 'Swift Run', 'lon': 77.40617078, 'lat': 18.458931, 'dwell_min': 15, 'type': 'required'}], 'detour_dwell_min': 10}
    r = TestClient(app).post('/v1/mission/evaluate', json=body)
    assert r.status_code == 200
    return r.json()


def recompute(route, model):
    pts = np.asarray(route, dtype=float)
    d = ground_distance(pts[:-1, 0], pts[:-1, 1], pts[1:, 0], pts[1:, 1])
    dz = np.diff(pts[:, 2])
    grade = np.divide(dz, d, out=np.zeros_like(dz), where=d > 0)
    minutes = d / (60 * model.speed_m_s) * (1 + model.uphill_weight * np.maximum(grade, 0) + model.downhill_weight * np.maximum(-grade, 0))
    return float(d.sum()), float(np.maximum(dz, 0).sum()), float(-np.minimum(dz, 0).sum()), float(minutes.sum())


def test_api_route_statistics_match_recomputation_from_route_coordinates(mission):
    model = Model()
    for leg in (mission['mission'], mission['return']):
        dist, ascent, descent, minutes = recompute(leg['route_lon_lat_areoid_height'], model)
        assert leg['profile']['distance_m'] == pytest.approx(dist, rel=1e-9)
        assert leg['profile']['ascent_m'] == pytest.approx(ascent, rel=1e-6, abs=1e-6)
        assert leg['profile']['descent_m'] == pytest.approx(descent, rel=1e-6, abs=1e-6)
        assert leg['travel_min'] == pytest.approx(minutes, rel=1e-6)
    m = mission['mission']
    assert m['margin_min'] == pytest.approx(300 - m['reserve_min'] - m['travel_min'] - m['activity_min'], rel=1e-9)
    assert m['feasible'] == (m['margin_min'] >= 0)
    # elevation along the route minus start equals ascent minus descent
    prof = m['profile']
    z = [s['elevation_m'] for s in prof['samples']]
    assert z[-1] - z[0] == pytest.approx(prof['ascent_m'] - prof['descent_m'], abs=1e-3)


def test_routes_start_and_end_where_requested(mission):
    first = mission['mission']['route_lon_lat_areoid_height'][0]
    last = mission['mission']['route_lon_lat_areoid_height'][-1]
    assert abs(first[0] - 77.40) < 0.0005 and abs(first[1] - 18.47) < 0.0005        # one 20 m cell is about 0.0003 degrees
    assert abs(last[0] - 77.4508) < 0.0005 and abs(last[1] - 18.4446) < 0.0005
