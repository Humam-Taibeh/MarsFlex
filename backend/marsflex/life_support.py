"""Life support along a planned Marswalk: oxygen use and suit endurance.

Chain of published relations, each with its source (see SOURCES):
  1. Metabolic power while walking: Pandolf et al. (1977) load-carriage equation
         M [W] = 1.5 W + 2.0 (W + L) (L / W)^2 + eta (W + L) (1.5 V^2 + 0.35 V G)
     W body mass [kg], L carried load [kg], V speed [m/s], G grade [%] (uphill only here), eta terrain factor.
     Plus a declared suit offset [W] (the project's documented suited-vs-unsuited contrast; uncalibrated).
  2. Oxygen from metabolic energy: energy equivalent of O2 at STP, 19.6 kJ/L (RER 0.70) to 21.1 kJ/L (RER 1.00);
     O2 density at STP 1.429 g/L.  The LOW energy equivalent (more O2 per kJ) is used for go/no-go decisions.
  3. Suit capacity: NASA ISS/Shuttle EMU as a REFERENCE suit (not a Mars suit): 0.54 kg primary O2,
     "enough for a normal seven-hour EVA"; a secondary pack (~30 min, emergency purge) is reported, never planned on.

Not modelled (stated in every response): Mars gravity, suit mobility beyond the offset, leakage and purge,
CO2 scrubbing, thermal load and cooling water, battery, fatigue.
"""
from __future__ import annotations
from dataclasses import dataclass, asdict
from functools import lru_cache
import math
import numpy as np
from scipy.sparse import csr_matrix
from scipy.sparse.csgraph import dijkstra

from marsflex.terrain import ground_distance

KCAL_TO_KJ = 4.184
O2_DENSITY_STP_KG_PER_L = 1.429e-3
O2_ENERGY_KJ_PER_L = {'low_rer_0_70': 4.69 * KCAL_TO_KJ, 'mixed_diet': 4.8 * KCAL_TO_KJ, 'high_rer_1_00': 5.05 * KCAL_TO_KJ}
PANDOLF_TERRAIN_FACTORS = {'treadmill_or_blacktop': 1.0, 'dirt_road': 1.1, 'light_brush': 1.2, 'heavy_brush': 1.5}

SOURCES = {
    'pandolf': {'citation': 'Pandolf, K. B., Givoni, B. & Goldman, R. F. (1977). Predicting energy expenditure with loads while standing '
                            'or walking very slowly. Journal of Applied Physiology 43(4), 577-581.',
                'url': 'https://doi.org/10.1152/jappl.1977.43.4.577',
                'limits': 'Earth gravity, unsuited subjects; known to under-predict at high loads and speeds.'},
    'o2_equivalent': {'citation': 'Energy equivalent of oxygen (Lusk/Weir respiratory-quotient tables): 4.69 kcal/L at RER 0.70, '
                                  '5.05 kcal/L at RER 1.00, about 4.8 kcal/L for a mixed diet; litres at STP.',
                      'url': 'https://doi.org/10.1113/jphysiol.1949.sp004363'},
    'emu': {'citation': 'NASA (1992). Suited for Spacewalking: A Teacher\'s Guide with Activities, EP-279. EMU primary oxygen: '
                        '0.54 kg, enough for a normal seven-hour EVA; secondary oxygen pack for about 30 minutes of emergency use.',
            'url': 'https://ntrs.nasa.gov/citations/19930004504',
            'scope': 'ISS/Shuttle EMU (Earth orbit). Used only as a REFERENCE suit; no Mars suit capacities are published.'},
}
NOT_MODELLED = ['Mars gravity (the walking equation is an Earth-gravity measurement)',
                'Suit mobility costs beyond the declared suit offset',
                'Suit leakage and purge flow (real O2 use is higher)',
                'CO2 scrubbing, cooling water, battery, thermal environment and fatigue',
                'The secondary oxygen pack is an emergency reserve and is never counted for planning']


@dataclass(frozen=True)
class Suit:
    id: str
    name: str
    primary_o2_kg: float
    nominal_eva_min: float
    secondary_o2_kg: float | None
    secondary_emergency_min: float | None
    cooling_water_kg: float | None = None
    battery_Wh: float | None = None


EMU_REFERENCE = Suit('emu_reference', 'NASA EMU (ISS/Shuttle) - reference suit', 0.54, 7 * 60, 1.2, 30, None, None)
SUITS = {EMU_REFERENCE.id: EMU_REFERENCE}


@dataclass(frozen=True)
class WalkerModel:
    body_mass_kg: float = 75.0          # declared scenario input (no single astronaut mass is implied)
    carried_load_kg: float = 0.0        # tools/samples carried (Earth-gravity kg as in the equation)
    terrain_factor: float = 1.0         # Pandolf eta; Martian regolith has no published eta
    suit_offset_W: float = round((799 - 510) * 4184 / 3600, 6)  # same declared offset as the metabolic preset

    def validate(self):
        if not (30 <= self.body_mass_kg <= 200):
            raise ValueError('Body mass must be between 30 and 200 kg')
        if not (0 <= self.carried_load_kg <= 100):
            raise ValueError('Carried load must be between 0 and 100 kg')
        if not (1.0 <= self.terrain_factor <= 2.5):
            raise ValueError('Terrain factor must be between 1.0 and 2.5')
        if not (0 <= self.suit_offset_W <= 2000):
            raise ValueError('Suit offset must be between 0 and 2000 W')


def pandolf_W(speed_m_s, grade_percent, model: WalkerModel = WalkerModel()):
    """Pandolf (1977) metabolic rate in watts. Downhill grades are clipped to 0 (no downhill credit, no Santee correction)."""
    W, L, eta = model.body_mass_kg, model.carried_load_kg, model.terrain_factor
    V = np.asarray(speed_m_s, dtype=float)
    G = np.maximum(np.asarray(grade_percent, dtype=float), 0.0)
    if np.any(~np.isfinite(V)) or np.any(V < 0):
        raise ValueError('Speed must be finite and non-negative')
    return 1.5 * W + 2.0 * (W + L) * (L / W) ** 2 + eta * (W + L) * (1.5 * V ** 2 + 0.35 * V * G)


def standing_W(model: WalkerModel = WalkerModel()):
    return float(pandolf_W(0.0, 0.0, model)) + model.suit_offset_W


def o2_kg(energy_kJ, equivalent='low_rer_0_70'):
    """kg of O2 needed to release `energy_kJ` of metabolic energy."""
    return np.asarray(energy_kJ, dtype=float) / O2_ENERGY_KJ_PER_L[equivalent] * O2_DENSITY_STP_KG_PER_L


# ----------------------------------------------------------------------------------------------- route profile
def segment_power(distance_m, minutes, rise_m, model: WalkerModel):
    """Power on each route segment, using the same segment times as the route time model."""
    d = np.asarray(distance_m, float); t = np.asarray(minutes, float) * 60; dz = np.asarray(rise_m, float)
    speed = np.divide(d, t, out=np.zeros_like(d), where=t > 0)
    grade = np.divide(dz, d, out=np.zeros_like(d), where=d > 0) * 100
    return pandolf_W(speed, grade, model) + model.suit_offset_W


@lru_cache(maxsize=2)
def _edge_base(terrain_id: int, terrain):
    g = terrain.graph.tocoo()
    r, c = np.divmod(g.row, terrain.w); nr, nc = np.divmod(g.col, terrain.w)
    d = ground_distance(terrain.lon[c], terrain.lat[r], terrain.lon[nc], terrain.lat[nr])
    dz = terrain.z[nr, nc] - terrain.z[r, c]
    return g.row, g.col, d, g.data, dz, g.shape


def o2_to_home(terrain, habitat_node: int, model: WalkerModel, equivalent='low_rer_0_70'):
    """kg O2 to walk from every node to the habitat along the minimum-O2 path on the same admissible edges."""
    row, col, d, minutes, dz, shape = _edge_base(id(terrain), terrain)
    power = segment_power(d, minutes, dz, model)
    kg = o2_kg(power * minutes * 60 / 1000, equivalent)
    graph = csr_matrix((kg, (row, col)), shape=shape)
    return dijkstra(graph.T.tocsr(), directed=True, indices=habitat_node)


def life_support(terrain, samples, sample_nodes, stop_sample_index, dwell_min, habitat_node, suit: Suit, model: WalkerModel):
    """Oxygen and suit-time ledger along the mission route (crew -> stops -> habitat).

    samples: route_profile samples (cumulative distance_m, travel_min, elevation_m per node).
    stop_sample_index: sample index where each activity happens; dwell_min: matching dwell minutes.
    """
    model.validate()
    if len(samples) < 2:
        return {'status': 'no_route'}
    dist = np.array([s['distance_m'] for s in samples]); tmin = np.array([s['travel_min'] for s in samples])
    elev = np.array([s['elevation_m'] for s in samples])
    seg_power = segment_power(np.diff(dist), np.diff(tmin), np.diff(elev), model)
    seg_kJ = seg_power * np.diff(tmin) * 60 / 1000
    dwell_at = np.zeros(len(samples))
    for i, m in zip(stop_sample_index, dwell_min):
        dwell_at[i] += m
    stand = standing_W(model)
    # cumulative values at each sample, dwell counted on arrival at its stop
    kJ = np.r_[0, np.cumsum(seg_kJ)] + np.cumsum(dwell_at) * stand * 60 / 1000
    elapsed = tmin + np.cumsum(dwell_at)
    used = {k: o2_kg(kJ, k) for k in O2_ENERGY_KJ_PER_L}
    plan = used['low_rer_0_70']
    home_kg = o2_to_home(terrain, habitat_node, model)[np.asarray(sample_nodes)]
    home_min = terrain.solve(habitat_node, reverse=True)[0][np.asarray(sample_nodes)]
    o2_ok = plan + home_kg <= suit.primary_o2_kg + 1e-12
    time_ok = elapsed + home_min <= suit.nominal_eva_min + 1e-9
    ok = o2_ok & time_ok & np.isfinite(home_kg) & np.isfinite(home_min)
    pnr = int(np.flatnonzero(ok).max()) if ok.any() else None
    total_kg, total_min = float(plan[-1]), float(elapsed[-1])
    limits = {'oxygen': suit.primary_o2_kg - total_kg, 'suit_time_min': suit.nominal_eva_min - total_min}
    o2_margin_min = (suit.primary_o2_kg - total_kg) / float(o2_kg(stand * 60 / 1000)) if stand > 0 else None
    fits = limits['oxygen'] >= -1e-12 and limits['suit_time_min'] >= -1e-9
    limiting = 'oxygen' if (o2_margin_min is not None and o2_margin_min < limits['suit_time_min']) else 'suit_time'
    return {
        'status': 'fits_reference_suit' if fits else 'exceeds_reference_suit',
        'suit': asdict(suit),
        'walker_model': asdict(model),
        'mission': {'elapsed_min': total_min, 'o2_used_kg': total_kg,
                    'o2_used_kg_band': [float(used['high_rer_1_00'][-1]), float(used['low_rer_0_70'][-1])],
                    'o2_remaining_kg': suit.primary_o2_kg - total_kg,
                    'o2_remaining_fraction': max(0.0, (suit.primary_o2_kg - total_kg) / suit.primary_o2_kg),
                    'suit_time_remaining_min': suit.nominal_eva_min - total_min,
                    'extra_standing_min_on_o2': o2_margin_min,
                    'mean_power_W': float(kJ[-1] * 1000 / (total_min * 60)) if total_min > 0 else None,
                    'limiting': limiting, 'fits': fits},
        'point_of_no_return': None if pnr is None else {
            'sample_index': pnr, 'lon': samples[pnr]['lon'], 'lat': samples[pnr]['lat'],
            'elapsed_min': float(elapsed[pnr]), 'distance_m': float(dist[pnr]),
            'is_route_end': pnr == len(samples) - 1,
            'meaning': 'Last point on the planned route from which the habitat is still reachable within the reference suit O2 and time.'},
        'samples': [{'elapsed_min': float(e), 'o2_used_kg': float(u), 'o2_remaining_kg': float(suit.primary_o2_kg - u),
                     'suit_time_remaining_min': float(suit.nominal_eva_min - e), 'return_possible': bool(k)}
                    for e, u, k in zip(elapsed, plan, ok)],
        'reference_average_power_W': suit.primary_o2_kg / O2_DENSITY_STP_KG_PER_L * O2_ENERGY_KJ_PER_L['mixed_diet'] * 1000 / (suit.nominal_eva_min * 60),
        'equations': {'walking': 'Pandolf (1977) + declared suit offset', 'oxygen': 'energy / O2 energy equivalent x O2 density (STP); low equivalent used for decisions'},
        'sources': SOURCES, 'not_modelled': NOT_MODELLED,
        'operational_safety_certified': False,
    }
