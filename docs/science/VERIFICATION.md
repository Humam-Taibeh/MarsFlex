# What is verified, and what is not

MarsFlex is a **scenario planner**. This page separates what the test-suite proves from what only the declared assumptions define.

## Verified by automated tests (`python -m pytest`)

`backend/tests/test_independent_audit.py` re-derives each calculation from first principles and compares it with the production code:

| Calculation | How it is checked |
|---|---|
| Ground distance on the Mars sphere (R = 3 396 190 m) | Closed-form values (1° of latitude = 59.27 km, half-circumference) and 200 random pairs against an independent spherical (atan2) formula. |
| Slope from the 20 m grid, including the cos(latitude) east-west correction | Tilted planes with known slope (east, north, combined) must be recovered to 10⁻⁶ degrees. |
| Time cost of an edge / route | A straight uphill and downhill route must equal `(distance + weight × rise) / (60 × speed)` computed by hand; climbing must cost more than descending the same line. |
| Which cells and edges are allowed (slope gates, NoData, no corner cutting) | A pure-Python re-implementation of the rules on a rough 9 × 9 terrain with NoData holes; walkable mask must be identical. |
| Shortest paths | Dijkstra costs must equal brute-force Floyd–Warshall costs for many sources. |
| Mission field (green / yellow / red) and detour cost | Cost at every cell must equal the explicit sum of legs `start→x, detour dwell, x→stop 1, dwell, … → habitat`; colour classes must follow the budget inequalities. |
| Metabolic power, speed, time, energy | Hand arithmetic for flat, uphill and downhill walks; torque mode replaces (does not add to) the suit offset; the metabolic time model equals the terrain time model on every edge. |
| Default suit offset | (799 − 510) kcal/h × 4184 J/kcal ÷ 3600 s/h = 335.87 W. |
| Life support (oxygen and suit time) | `test_life_support.py`: Pandolf (1977) by hand (level, uphill, loaded, downhill clipped); kJ to kg O₂ via 4.69 kcal/L and 1.429 g/L; the EMU rating implies about 300 W; ledger O₂ = mean power × time; dwell at standing power; return feasibility is a prefix of the route and the point of no return is its last sample; a smaller suit moves it earlier. |
| Mission Site Advisor | `test_site_advisor.py`: traversability is monotonic and zero when blocked; weights normalised, invalid weights and budgets rejected; each site score equals the weighted sum of its reported components; top sites fit time, O₂ and suit-time budgets, have slope ≤ 20° and are ≥ 300 m apart; unwalkable cells score 0; results are deterministic; a tiny budget leaves no candidates. |
| Radiation context | Linear scaling of the published rate by duration; input validation; sources and limitations always returned. |
| API consistency on real data | Route length, ascent, descent and travel time recomputed from the returned coordinates; margin = available − reserve − travel − activities. |

## Not claimed

* **The parameters are not calibrated.** Walking speed 0.5 m/s, the uphill/downhill penalties, the 20° gates, and the metabolic power coefficients
  (150 W basal, 200 W per m/s, 300 W per degree, suit offset) are declared scenario inputs. The tests check that the arithmetic follows them, not that they
  describe a real astronaut. The 300 W/degree term gives non-physiological power on steep slopes; the application says so wherever it is used.
* **Green does not certify obstacle clearance.** The routing grid is 20 m; boulders and small hazards are unresolved.
* **Oxygen and suit time are a planning scenario.** Pandolf is an Earth-gravity, unsuited equation; the EMU is an Earth-orbit suit used as a reference; leakage, CO₂, cooling and battery are not modelled.
* **Radiation is context, not a dose prediction.** One published Gale-crater measurement scaled by time; no suit shielding, no solar particle events.
* **Vertical exaggeration (2.2×) is display only.** Reported elevations, slopes and distances are never scaled.
* **Sources are not independently validated.** HiRISE and CTX terrain are related products; the comparison is a consistency check, not absolute validation.
