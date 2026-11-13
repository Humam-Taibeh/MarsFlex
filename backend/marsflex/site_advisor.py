"""Mission Site Advisor: a transparent suitability map for a Marswalk destination inside the Jezero analysis grid.

Every 20 m CTX cell gets three components in [0, 1] and a weighted total:
  traversability  1 - surface slope / slope gate   (0 where blocked or NoData)
  reachability    margin left after a round trip habitat -> cell -> habitat plus the dwell, using the most limiting of
                  time budget (with reserve), reference-suit O2 and reference-suit EVA time   (0 if it does not fit)
  science         0.45 PIXL-sampled-target proximity + 0.35 CRISM summary-parameter strength + 0.20 rover-visited context
Cells that are not walkable or not reachable score 0. Weights are user inputs and are always returned.
This ranks *planning candidates*; it does not identify minerals or certify safety.
"""
from __future__ import annotations
from functools import lru_cache
import json
import math
import numpy as np
from scipy.sparse import csr_matrix
from scipy.sparse.csgraph import dijkstra

from marsflex.terrain import ground_distance
from marsflex.life_support import WalkerModel, Suit, _edge_base, segment_power, o2_kg, standing_W

SCIENCE_MIX = {'pixl_target_proximity': 0.45, 'crism_strength': 0.35, 'rover_visited_context': 0.20}
TARGET_DECAY_M = 300.0     # e-folding distance for proximity to a PIXL-sampled target (declared)
MIN_SEPARATION_M = 300.0   # top sites are at least this far apart
CRISM_BANDS = ('BD1900_2', 'D2300', 'BD2500_2')


def traversability(slope_deg, walkable, gate_deg):
    s = np.asarray(slope_deg, float)
    return np.where(walkable & np.isfinite(s), np.clip(1 - s / gate_deg, 0, 1), 0.0)


@lru_cache(maxsize=1)
def static_layers(root: str):
    """Habitat-independent components on the CTX grid (cached)."""
    from pathlib import Path
    R = Path(root); out = R / 'data/derived'
    grid = json.loads((out / 'grid.json').read_text())
    h, w = grid['shape']; a, _, c, _, e, f = grid['transform']; radius = grid['radius_m']
    lon = np.rad2deg((c + (np.arange(w) + .5) * a) / radius)
    lat = np.rad2deg((f + (np.arange(h) + .5) * e) / radius)
    LON, LAT = np.meshgrid(lon, lat)
    # CRISM: same native-pixel lookup as /v1/evidence/at, stretched with the published display P5-P95 per band
    sci = json.loads((out / 'science_validation.json').read_text())
    west, south, east, north = sci['crism_bounds_lonlat']; ch, cw = sci['crism_native_grid']
    cr = np.floor((north - LAT) / (north - south) * ch).astype(int); cc = np.floor((LON - west) / (east - west) * cw).astype(int)
    inside = (cr >= 0) & (cr < ch) & (cc >= 0) & (cc < cw)
    layers = json.loads((out / 'map_layers.json').read_text())['crism']
    crism = np.zeros((h, w)); band_values = {}
    for name in CRISM_BANDS:
        native = np.fromfile(R / f'data/source/crism_{name}.f32', dtype='<f4').reshape(ch, cw)
        v = np.full((h, w), np.nan); v[inside] = native[cr[inside], cc[inside]]
        v[(v == 65535) | ~np.isfinite(v)] = np.nan
        lo, hi = layers[name]['low'], layers[name]['high']
        band_values[name] = v
        crism = np.fmax(crism, np.nan_to_num(np.clip((v - lo) / (hi - lo), 0, 1), nan=0.0))
    # PIXL-sampled targets (Mars 2020 report coordinates)
    targets = json.loads((out / 'science_targets.json').read_text())['targets']
    prox = np.zeros((h, w)); nearest_name = np.full((h, w), -1); nearest_d = np.full((h, w), np.inf)
    for i, t in enumerate(targets):
        d = ground_distance(LON, LAT, t['lon'], t['lat'])
        closer = d < nearest_d; nearest_d[closer] = d[closer]; nearest_name[closer] = i
        prox = np.maximum(prox, np.exp(-d / TARGET_DECAY_M))
    bits = np.load(out / 'evidence_coverage_bits.npy')
    rover = ((bits & 8) > 0).astype(float)
    science = SCIENCE_MIX['pixl_target_proximity'] * prox + SCIENCE_MIX['crism_strength'] * crism + SCIENCE_MIX['rover_visited_context'] * rover
    return {'lon': lon, 'lat': lat, 'science': science, 'prox': prox, 'crism': crism, 'rover': rover, 'bands': band_values,
            'nearest_target': nearest_name, 'nearest_target_m': nearest_d, 'targets': [t['name'] for t in targets],
            'hirise_footprint': (bits & 4) > 0}


def o2_graphs(terrain, model: WalkerModel):
    row, col, d, minutes, dz, shape = _edge_base(id(terrain), terrain)
    kg = o2_kg(segment_power(d, minutes, dz, model) * minutes * 60 / 1000)
    return csr_matrix((kg, (row, col)), shape=shape)


def score(terrain, root, habitat_node, budget_min, reserve_min, dwell_min, weights, suit: Suit, model: WalkerModel):
    if not all(math.isfinite(x) and x >= 0 for x in (budget_min, reserve_min, dwell_min)):
        raise ValueError('Budget, reserve and dwell must be finite and non-negative')
    if reserve_min > budget_min:
        raise ValueError('Reserve exceeds the time budget')
    wt = {k: float(weights.get(k, 0)) for k in ('traversability', 'reachability', 'science')}
    if any(v < 0 or not math.isfinite(v) for v in wt.values()) or sum(wt.values()) <= 0:
        raise ValueError('Weights must be non-negative with a positive sum')
    total_w = sum(wt.values()); wt = {k: v / total_w for k, v in wt.items()}
    s = static_layers(str(root)); h, w = terrain.h, terrain.w
    out_t = dijkstra(terrain.graph, directed=True, indices=habitat_node)
    back_t = dijkstra(terrain.graph.T.tocsr(), directed=True, indices=habitat_node)
    g = o2_graphs(terrain, model)
    out_o2 = dijkstra(g, directed=True, indices=habitat_node)
    back_o2 = dijkstra(g.T.tocsr(), directed=True, indices=habitat_node)
    round_t = (out_t + back_t).reshape(h, w) + dwell_min
    round_o2 = (out_o2 + back_o2).reshape(h, w) + float(o2_kg(standing_W(model) * dwell_min * 60 / 1000))
    usage = np.fmax(np.fmax((round_t + reserve_min) / budget_min if budget_min > 0 else np.inf, round_o2 / suit.primary_o2_kg),
                    round_t / suit.nominal_eva_min)
    usage = np.where(np.isfinite(usage), usage, np.inf)
    reach = np.where(usage <= 1, 1 - usage, 0.0)
    trav = traversability(terrain.slope, terrain.walkable, terrain.model.max_surface_slope_deg)
    ok = terrain.walkable & (usage <= 1)
    total = np.where(ok, wt['traversability'] * trav + wt['reachability'] * reach + wt['science'] * s['science'], 0.0)
    return {'total': total, 'traversability': trav, 'reachability': reach, 'science': s['science'], 'round_min': round_t,
            'round_o2_kg': round_o2, 'usage': usage, 'weights': wt, 'static': s}


def top_sites(result, terrain, k=3, min_sep_m=MIN_SEPARATION_M):
    total = result['total']; s = result['static']
    flat = total.ravel(); order = np.argsort(-flat, kind='stable')
    order = order[flat[order] > 0][:50000]
    chosen = []
    for idx in order:
        r, c = divmod(int(idx), terrain.w)
        lon, lat = float(terrain.lon[c]), float(terrain.lat[r])
        if all(float(ground_distance(lon, lat, x['lon'], x['lat'])) >= min_sep_m for x in chosen):
            ti = int(s['nearest_target'][r, c])
            bands = {b: (None if not np.isfinite(s['bands'][b][r, c]) else float(s['bands'][b][r, c])) for b in CRISM_BANDS}
            site = {'rank': len(chosen) + 1, 'lon': lon, 'lat': lat, 'row': r, 'col': c, 'score': float(total[r, c]),
                    'components': {'traversability': float(result['traversability'][r, c]), 'reachability': float(result['reachability'][r, c]),
                                   'science': float(result['science'][r, c])},
                    'science_parts': {'pixl_target_proximity': float(s['prox'][r, c]), 'crism_strength': float(s['crism'][r, c]),
                                      'rover_visited_context': float(s['rover'][r, c])},
                    'slope_deg': float(terrain.slope[r, c]), 'round_trip_min': float(result['round_min'][r, c]),
                    'round_trip_o2_kg': float(result['round_o2_kg'][r, c]), 'budget_used_fraction': float(result['usage'][r, c]),
                    'nearest_target': s['targets'][ti] if ti >= 0 else None, 'nearest_target_m': float(s['nearest_target_m'][r, c]),
                    'crism': bands, 'hirise_footprint': bool(s['hirise_footprint'][r, c])}
            site['reasons'] = reasons(site)
            chosen.append(site)
            if len(chosen) == k:
                break
    return chosen


def reasons(site):
    out = []
    if site['nearest_target'] and site['nearest_target_m'] < 600:
        out.append(f"{site['nearest_target_m']:.0f} m from {site['nearest_target']} (sampled and analysed by Perseverance PIXL)")
    if site['science_parts']['crism_strength'] > 0.5:
        best = max((k for k, v in site['crism'].items() if v is not None), key=lambda k: site['crism'][k] or -1, default=None)
        out.append(f"Strong CRISM summary parameter{' (' + best + ')' if best else ''}: candidate alteration signal, not a mineral identification")
    if site['science_parts']['rover_visited_context'] > 0:
        out.append('Within 500 m of a recorded Perseverance position, so rover imagery and context exist')
    out.append(f"Surface slope {site['slope_deg']:.1f}°; round trip {site['round_trip_min']:.0f} min with {site['round_trip_o2_kg']:.2f} kg O₂ "
               f"({site['budget_used_fraction'] * 100:.0f}% of the most limiting budget)")
    return out
