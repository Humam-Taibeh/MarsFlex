# MarsFlex final review handoff

## Release identity and starting point

This is the final review package built from `MarsFlex_v0.10.0_Full.zip`, then
`MarsFlex_Decision_Update.zip`, then the revised `MarsFlex_Sensitivity_Results.zip`.
It is not a new engine release and does not imply NASA approval. Do not restart the
project. Current application: Python API, React/TypeScript, Cesium regional map,
Three.js native terrain/sections, real CTX routing data, local HiRISE checks,
three CRISM summary bands, USGS geology, Mars 2020 PLACES/PIXL/MEDA context.

The three user-facing questions remain: where can the crew go and return; why
visit a station; what is known and unknown. The first screen has one mission and
one optional Shuyak decision. Physiology, catalog and detailed controls stay in
Advanced. Source keys for judge texts: `docs/science/SOURCES_EN.md`.

## Fixed constraints

- No LLM route choice, classification or safety decision. Deterministic graph
  calculations and declared scenario inputs only.
- `terrain.py` and `frontend/src/geoscene.ts` MUST remain byte-identical to the
  protected files below unless the user explicitly releases the constraint.
- No route/color/physiology logic change. No new features in this final pass.
- No further sensitivity reruns were authorized for this revision; none occurred.
- Real observations are not replaced by invented data. Missing evidence is
  `NOT FOUND` / “لم أجد”. No operational human-safety or CRISM-validation claim.
- Original code Apache-2.0. External assets keep their own terms. Preserve
  source hashes, labels, URLs and attributions. See external-resource register.
- Back up UI before edits. Final original UI backup: `docs/history/review/PreFinal_UI_Backup.zip`.

## Protected SHA-256

```text
e157d283da63b59638175eca24a8c8c4224d09d6a2c8c8c27d007f0e02b60436  terrain.py
ed66474ce73cd2aa53a6c43d1a18a85f23afadbde3f8e09b06d9ad99957afbc4  frontend/src/geoscene.ts
```

## Routing semantics and reference mission

Blue is the supplied ordered mission, white the current return. Green means a
queried detour, its dwell, every supplied required stop and return fit the time
budget with reserve. Yellow means return fits but the entire itinerary does not.
Red exceeds the modeled return reserve; gray includes blocked/unreachable/unknown.
Visiting a coordinate during passage does not complete an activity. No automatic
dropping. Advisory negotiable suggestions minimize dropped count, then candidate
duration, then preserve enumeration/list order for exact ties. No scientific-value
ranking. Required activities are never automatically removed.

Exact Delta regression request: `analysis/results_2026_10_05/delta_request.json`.
Reference: **4019.7137875635854 m**, **143.4349420073279 min**.
Final current response exactly equals the original v0.10 API response on the same
data. The supplied v0.9 numeric reference also matches exactly; a separate complete
v0.9 response was NOT FOUND for this comparison.

## Sensitivity, stored results only

- Baseline green: **29,068 cells**.
- Conditional core: **6,352 cells**, `green_count == 162`.
- Optimistic maximum/union: **66,438 cells**.
- 162 computed cases, only 15° and 20° gates.
- **10° gate rejects required stop Hazeltop (CTX slope 10.43°); 81 cases not computed.**
- Never call this green in all 243. The original all-243 intersection is empty.
- 513 adjacent comparisons of saved GREEN CELL COUNTS, zero violations. Individual
  per-case masks were not saved, so empirical pixelwise monotonicity is NOT CHECKED.
- Intersection equals smallest case; union equals largest case, using containment
  of aggregate sets and equality of extreme cardinalities.
- Depot cell (row 290, col 382) is green in 161/162 computed cases. The only failure
  has speed 0.4 m/s, slope-penalty multiplier 1.25, gate 15°, station dwell 20 min,
  reserve 90 min. Its exact red/yellow class is NOT FOUND in the retained masks.
- Assumed axes: speed 0.4/0.5/0.6 m/s; penalty multiplier 0.75/1/1.25 on uphill4/
  downhill2; gate 10/15/20°; each required dwell 10/15/20 min; reserve60/72/90 min.
  Fixed budget300 min, extra visit10 min, required Swift Run then Hazeltop.
- 138 computed cases flagged possible domain truncation via boundary reachability;
  this flag alone does not establish feasible return from the boundary.
- Two-panel presentation and three-panel technical figures are separate analysis
  outputs, not a live UI layer. `analysis/verify_and_plot.py` rechecks stored arrays.
  Its historical all-files-unchanged assertion is scoped to the earlier analysis
  delivery, before this authorized UI wording pass; do not mistake that old
  manifest for the final release manifest.

## HiRISE evidence scope: default two-stop blue route

Default mission length2473.13728323718 m, travel95.61940358186433 min.
Loaded comparison coverage **23.6039013298335%**. Native-analysis coverage
**23.582108267878517%**. Matched 20 m slope coverage **21.374665089590362%**.

| Comparison | Cells | Maximum ° | Mean ° | Cells >20° |
|---|---:|---:|---:|---:|
| CTX native, within native comparison scope | 21 | 18.656204354833203 | 11.433920606134862 | 0 |
| HiRISE 1 m, within native comparison scope | 778 | 39.42162827955598 | 12.134792110914441 | 75 |
| CTX at matched 20 m cells | 19 | 18.656204354833203 | 11.962989898485773 | 0 |
| HiRISE averaged to matched 20 m cells | 19 | 25.44197874431341 | 12.190750764544394 | 1 |

Matched difference of maxima: **6.785774389480207°**. Means are arithmetic means
of unique cells, not length-weighted. Native sample counts have different cell
sizes and must not be compared as equal-area counts. CTX/HiRISE are related
products, not independent truth. **Not validated outside coverage.** Do not claim
CTX always underestimates slopes: the Delta comparison does not show the same
direction. Full methods and other routes: `docs/audits/route_audit_results.json`.

## Mars 2020 evidence

Nine PIXL primary values (MgO, FeO-T, SO3 for each of Swift Run/Hazeltop/Shuyak),
three supplementary SiO2 values, uncertainties, sol484/505/570 and exact source
pages are in `docs/science/PIXL_EVIDENCE_NINE.md` and its JSON evidence. Different footprints
from CRISM; no inference of agreement or disagreement. Earlier exact nine-item
request wording was NOT FOUND; the chosen triplets are explicit.

MEDA is archived and rover-local. PDS inventory snapshot checked2026-09-29; cached
sols313/314/315/1858/1859. Latest listed pressure/temperature/RDS sol1859 and derived
wind sol315 are snapshot values, not a live-weather promise. RDS TOP7 is radiance
integrated over field of view, not dust concentration or ionizing dose. No weather
effect on routing or colors. Exact products/URLs: `MEDA_PRODUCT_SOURCES.json`.

## What changed in the final pass

Six text-only corrections in DecisionView.tsx, main.tsx and ScienceBrief.tsx;
production frontend rebuilt. UI now describes scenario planning and the actual
HiRISE comparison, labels station questions, names RDS radiance and states the
small-obstacle limitation. No CSS or calculation change. Before/after strings:
`docs/audits/UI_TEXT_FINAL_AUDIT.json`.

The historical `MarsFlex_Terrain_v2.html` in the input ZIP was truncated mid-JSON.
The unchanged existing builder regenerated it in an isolated directory, stopped
immediately after HTML output and did not run its optional route statistics.
The original is retained in `docs/history/review/final/Original_Truncated_v2.zip`. This repaired
the old parity harness; it did not modify current engine code or source rasters.

## Actual verification and limits

- Fresh `.marsflex-venv` created by unmodified `launch.py`; 31 pinned requirements
  installed; `/v1/health`200. CPython3.12.14, Linux x86_64. Actual first-install
  stdout: `docs/history/review/final/clean_launch.log`.
- `pytest`: 37 passed, one Starlette/httpx deprecation warning. No dependency
  changes made to suppress the warning. `docs/history/review/final/pytest.log`.
- 13 read-only route_trust checks passed, zero routing calls.
- Original worker vs Python:413,130 cells,0 differences after HTML reconstruction.
- Delta exact result and protected hashes passed. All31 pins matched.
- Browser decision test passed including Shuyak, first-screen controls and stale
  evidence invalidation. Full response/scope: `docs/history/review/final/ui_verification.json`.
- MEDA disclaimer and archived sol1859 displayed. Native Skinner Ridge section CSV:401 samples, maximum difference from source elevations0 m; no page errors. `docs/history/review/final/environment_surface.json`.
- Browser tests use software-rendered Chromium in this environment; they do not
  establish all-device performance. Windows clean-machine launch, Replit/cloud,
  live human operations, calibration and public publication were NOT tested.
- Known route_trust caveat retained: a zero-length two-point line has top-level
  assessed but coverage no_route_length/null. The test records it rather than
  hiding it. No behavior fix in this restricted final pass.

## Run and test

For nonprogrammers: `START_FINAL_AR.md`. Windows: Python3.12 64-bit, extract full
ZIP, double-click `Start_MarsFlex.cmd`. Linux: `python3 launch.py`. First setup
needs internet. Open http://127.0.0.1:8000 and keep launcher open. Runtime packages
and node_modules are not portable deliverables and are installed locally; all
app code, used source/derived data and prebuilt frontend are included.

```bash
python3 launch.py
.marsflex-venv/bin/python -m pytest -q
.marsflex-venv/bin/python analysis/test_route_trust.py --project . --output route_trust_tests_local.json
.marsflex-venv/bin/python -m pipeline.verify_release
```

Windows equivalent: replace `.marsflex-venv/bin/python` with
`.marsflex-venv\Scripts\python.exe`; the JS parity check additionally needs Node.
Build frontend only if editing source: in `frontend/`, `npm ci` then `npm run build`.
Exact old-API comparison additionally requires the original v0.10 full ZIP:

```bash
.marsflex-venv/bin/python docs/history/review/final/final_regression.py --original-zip /path/to/MarsFlex_v0.10.0_Full.zip
```

Do not run `analysis/run_sensitivity.py` during handoff; it reruns the ensemble.
Historical browser scripts contain old navigation assumptions. Final adapted
browser scripts require Playwright/Chromium and local path configuration; the
application itself does not require those test tools.

## Delivery documents

README:10 English lines; `docs/submission/ONE_PAGE_EN.md` and PDF;
`VIDEO_30_SECONDS_EN.md` (script only, timing editorial);
`MarsFlex_Seven_Slides.pptx` (7 total, editable factual tables);
`MarsFlex_Development_History.pdf`; `PREVIOUS_FILES_AND_DEVELOPMENT.md`;
`EXTERNAL_RESOURCES.md`, source/dependency CSVs, `AI_ASSISTANCE.md`;
`DELIVERY_GAPS.md`; raw final logs, screenshots and complete file manifests.

No RIMFAX/MOXIE addition, activity completion on passage, new dynamic replanning,
operational obstacle model, physiology change, new weather interpolation or live
sensitivity UI was implemented. These would exceed the authorized final scope.
