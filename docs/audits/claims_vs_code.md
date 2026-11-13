# Claims versus code and saved evidence

Scope: final release. Six UI text-only revisions, regenerated production assets and repaired historical standalone HTML; protected engine files unchanged. The previous analysis-only scope is preserved in docs/history/. Source keys resolve in SOURCES_EN.md.

| Claim | Code / evidence | Status and wording allowed |
|---|---|---|
| Routes account for terrain | `terrain.py:Terrain.__init__, solve, route`; directed slope-dependent costs, gates, no diagonal corner cutting | Implemented. Scenario time model; not calibrated EVA performance. |
| Green completes every required activity and returns with reserve | `Terrain.field`; ordered target tail after the queried detour | Implemented. Does not recognize goals completed during passage. |
| Habitat must always be green | `Terrain.field` evaluates a detour there before all ordered stations and return | False. At habitat cell this is still a complete itinerary query, not a claim that shelter is unsafe. |
| Core survives every computed scenario | `green_count == 162` in original NPZ; revised verification | True for 162 cases at 15°/20° only. 81 rejected 10° cases are explicitly excluded. |
| Core survives the full proposed range | Original all-243 mask is empty; Hazeltop slope exceeds 10° | False. No safety claim from the conditional core. |
| 513 monotonicity comparisons have zero violations | `monotonicity_comparisons.json` / revised verifier | True for saved green-cell COUNTS. Individual per-case masks not saved; empirical cellwise containment NOT CHECKED. |
| Intersection/union equal smallest/largest cases | Aggregate masks and extreme case cardinalities, 6352 and 66438 | Proven finite-set identities, not inferred from cardinalities alone without subset/superset relations. |
| Core is integrated into the live map | Only separate PNG/PDF/NPY artifacts produced | False. No UI or engine change. |
| Mars 2020 is part of the presentation evidence | `DecisionView.tsx`, `rover_measurements.json`, `science_targets.json` | Yes: local PIXL context alongside orbital evidence. These values do not enter route cost. |
| PIXL validates the CRISM pixel | Separate footprints and source measurements; source tables 31/75/118 | False. No mineral-confirmation or registration-accuracy claim. |
| Nine PIXL values came from PDS | `PIXL_evidence_nine.json`; source PDF hash and rendered tables | Verified MgO / FeO-T / SO3 triplets; supplementary SiO2 included. Exact older requested list NOT FOUND. |
| HiRISE validates the complete path | `route_trust.py`, saved route audit | False. Loaded and matched coverage differ; only local comparison is supported. Related products, not independent truth. |
| CTX always underestimates slope | Default-route local maxima differ, but other locations may differ in either direction | Not established. State specific local comparisons only. |
| route_trust is fully validated by 13 tests | New test script and full outputs | Too strong. 13 scoped checks passed; empty, partial, repeated and API cases tested. Zero-length top-level status caveat remains. |
| MEDA is current route-wide weather | Existing MEDA archive endpoint/UI | False. Historical, rover-local context only, no route/color effect. |
| RDS measures dust concentration or ionizing dose here | Existing MEDA UI and source processing | False. No such conversion implemented. |
| The routing model avoids every obstacle | CTX elevation grid and scalar slopes only | False. No complete sub-grid boulder/crack/sinkage model. |
| Physiology is calibrated | Existing scenario defaults and hidden separate panel | False; unchanged. No physical calibration or life-support certification. |
| Delta was rerun under pinned versions in the final release | `docs/history/review/final/regression.json` and raw log | True: 4019.7137875635854 m, 143.4349420073279 min; exact full current response equals original v0.10 API response. This does not recover an absent full v0.9 JSON response. |
| Parameter/environment recheck changed results | All 31 pins matched; saved counts/core/union checks passed | No stored-value/reduction difference found. Cross-version rerouting NOT TESTED. |
| Engine and UI were both unchanged | `docs/history/review/final/before_hashes.json`, final changed-file manifest | False for UI: six text revisions plus rebuilt assets. True for protected terrain.py and geoscene.ts. No color or physiology logic changed. |

## Known diagnostic issue left unchanged

For two identical coordinates, `analyse_route` returns top-level `status="assessed"` while coverage correctly returns `status="no_route_length"`, `covered_percent=null`, and zero sampled cells. The test records this exact output; it is not hidden or described as operational validation.

## Labels corrected in the final UI

No literal `label only` status existed in the supplied table. Every overbroad equivalent was checked. `Exploration system` now reads `Scenario planner`; the headline states mission/return time limits; the trust heading names HiRISE coverage and slope comparison. The generic RDS radiation-index wording now names archived TOP7 radiance. Small-obstacle uncertainty is explicit, and the station comparison is labelled as a team hypothesis. Exact before/after strings: `UI_TEXT_FINAL_AUDIT.json`. None adds a new calculation.

The initial legacy verifier failed because the distributed v2 HTML ended inside its JSON payload. It was regenerated using the existing builder, stopping before optional route statistics. The original truncated artifact is preserved in `docs/history/review/final/Original_Truncated_v2.zip`. The actual unchanged JS worker then matched Python on 413,130 cells with zero differences.
