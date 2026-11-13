# Sensitivity presentation revision — 5 October 2026

The current presentation compares Baseline (29,068 cells) with the conditional robust core (6,352 cells), with the most optimistic boundary (66,438 cells) drawn faintly. The technical version retains three panels. The core is `green_count == 162` from the original saved NPZ. The original all-243 result remains zero and is preserved as historical data, not used as a plot title. [S7]

**10° gate rejects required stop Hazeltop (CTX slope 10.43°); 81 cases not computed.** The core is conditional on 162 computed cases at 15° and 20°, not robustness across the entire proposed range. [S7]

The unique computed case in which habitat cell (row 290, column 382; zero-based) is not green has speed 0.4 m/s, slope-penalty multiplier 1.25 (uphill 5, downhill 2.5), gate 15°, station dwell 20 min, reserve 90 min. The cell is green in 161 cases. Its exact non-green class is NOT FOUND because individual case labels were not retained. A habitat detour still precedes the required stops in this model; this is not a statement about shelter safety. [S1,S7]

513 adjacent parameter comparisons of SAVED GREEN-CELL COUNTS show 0 violations (108 speed, 108 penalty, 81 gate, 108 dwell, 108 reserve). This is not an empirical pixelwise nesting test. The intersection equals the smallest case and the union equals the largest: each is already a subset/superset and has identical cardinality. No per-case mask reconstruction is required. [S7]

The revised verifier only loads saved arrays, checks hashes/reductions and plots. It does not import the routing engine or recompute any of the 243 cases. All 31 versions in requirements-tested.txt match; Matplotlib 3.10.8 is an additional plotting dependency. No stored-value or reduction differences were found. Cross-version route computations were intentionally not tested. The original generation environment remains separately recorded in runtime.json. [S7,S11]

13 route_trust tests passed, with full actual outputs in route_trust_tests.json and stdout. They use loaded reference cells, archived route coordinates, API validation, and explicitly synthetic geometry unit tests; no route solver is called. They do not rerun the original default/Delta/three-stop missions. The zero-length top-level status issue remains documented. [S6]

PIXL: nine main values and three supplementary SiO2 values checked against the hashed original PDS PDF, pages 31/75/118. Exact older nine-item list NOT FOUND; the chosen triplets are named explicitly. [S4]

Remaining limitations: 138 boundary-reachable cases, unknown sub-grid obstacles, local HiRISE coverage, archived MEDA, and uncalibrated scenario ranges. No UI, routing, original colors, physiology or application build changed. Delta values are retained from the earlier exact regression, not presented as newly rerun. [S1,S5-S7,S9-S12]
