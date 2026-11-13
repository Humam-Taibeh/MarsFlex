# MarsFlex v0.10.0 audit results

Audit performed on the saved v0.10.0 full distribution. No routing, metabolic calculation, science data, MEDA processing, API logic or mission colors changed. Only requested visible text and provenance labels changed.

## 1. Regression

Delta transect / Delta review, reconstructed v0.9.0 vs v0.10.0: **4019.7137875635854 m** in both; **143.4349420073279 min** in both. Rounded display:4.02km /143.4min.

All pre-existing response fields compare exactly equal, including route coordinates, profiles, times and classification field. The new `evidence_brief` field is additional; whole response objects are therefore not identical. The prior route inputs, including300min available,72min reserve,15min station dwell and10min hypothetical detour dwell, are preserved in delta_request.json.

Python/JavaScript classifications:413,130 cells,0 differences, rerun for both the legacy verification scenario and the Delta scenario. JavaScript uses the actual frontend/legacy/engine.js with fresh Python-generated edge costs; this validates classification parity, not an independently implemented terrain-cost model.

**Test harness issue found:** packaged tests/browser/verify_engine.js exits with an error because its payload regex cannot find the embedded JSON in MarsFlex_Terrain_v2.html. The original harness was not edited. The audit used a separate Node adapter for the successful parity runs.

### Distribution differences

15 modified, 4115 added, 3 removed paths. This is an archive-content comparison, not a Git commit diff. The v0.9.0 distribution was reconstructed from the full v0.7.0 base and successive v0.7.1,v0.8.0,v0.9.0 updates, replacing generated dist at each step. A separately frozen full v0.9.0 archive/commit was not found.

| Requested file | v0.9.0 to v0.10.0 |
|---|---|
| `terrain.py` | unchanged |
| `api.py` | changed |
| `geo_models.py` | changed |
| `frontend/src/main.tsx` | changed |
| `frontend/src/geoscene.ts` | unchanged |

Full path-by-path hashes:version_file_diff.csv. The large added count includes4,016 HiRISE source-range/receipt files and83 imagery cache files; those counts do not mean4,099 new algorithm modules. Archive comparison cannot establish when a previously unbundled cache was downloaded.

All modified pre-existing paths:

- `ATTRIBUTIONS.md`
- `CHANGELOG.md`
- `MODEL_ASSUMPTIONS.md`
- `MarsFlex_Terrain_v2.html`
- `api.py`
- `data/derived/hirise_validation.json`
- `frontend/dist/index.html`
- `frontend/src/GeoStudio.tsx`
- `frontend/src/main.tsx`
- `frontend/src/scene.ts`
- `frontend/src/style.css`
- `frontend/src/workspace.tsx`
- `geo_models.py`
- `tests/test_foundation.py`
- `validate_hirise.py`

## 2. CRISM and rover evidence

PDS source: K. A. Farley and K. M. Stack (editors), Mars 2020 Science Team (2023), *Mars 2020 Initial Reports — Volume 2, Delta Front Campaign*, release3.1. [Dataset DOI](https://doi.org/10.17189/49zd-2k55). Original PDF SHA-256:`914a4baacdbd4dd6f86688b9d4e15dc353a506f9b24874e6f0bf04a799b9f123`.

CRISM values are nearest pixel-center samples on the product coordinate grid at the published sample coordinates, before routing-cell snapping, from HRL000040FF_07_SU183J_MTR3. No interpolation, smoothing, negative-value clipping or mineral inference. Raster rows/columns are zero-based. Orbital-to-rover landmark registration remains unverified.

| Station | Row,col | BD1900_2 | D2300 | BD2500_2 |
|---|---:|---:|---:|---:|
| Swift Run | 450,208 | 0.013535857 | 0.012532711 | -0.004892111 |
| Hazeltop | 451,207 | 0.021803796 | 0.014923453 | -0.003746629 |
| Shuyak | 464,200 | 0.018569231 | 0.017265975 | -0.010886073 |

[Original CRISM product](https://pds-geosciences.wustl.edu/mro/mro-m-crism-5-rdr-mptargeted-v1/mrocr_4001/mtrdr/2007/2007_029/hrl000040ff/hrl000040ff_07_su183j_mtr3.img). Parameters are dimensionless and are not mineral concentrations.

PIXL bulk XRF results, oxide-equivalent wt%, with the table’s1σ calibration/counting uncertainty:

| Site / abrasion | Instrument / sol | SiO₂ | MgO | FeO-T | SO₃ | Original PDS table |
|---|---|---:|---:|---:|---:|---|
| Swift Run / Thornton Gap abrasion, Skinner Ridge | PIXL /484 | 22.6 ± 1.2 | 22.7 ± 1.3 | 24.5 ± 1.2 | 2.6 ± 0.4 | [p.11-18](https://pds-geosciences.wustl.edu/m2020/urn-nasa-pds-mars2020_sample_dossier/initial_reports/initial_reports_volume2.pdf#page=31) |
| Hazeltop / Berry Hollow abrasion, Wildcat Ridge | PIXL /505 | 32.5 ± 4.5 | 13.1 ± 1.3 | 17.5 ± 1.8 | 20.0 ± 4.4 | [p.14-18](https://pds-geosciences.wustl.edu/m2020/urn-nasa-pds-mars2020_sample_dossier/initial_reports/initial_reports_volume2.pdf#page=75) |
| Shuyak / Novarupta2 abrasion, Amalik | PIXL /570 | 30.8 ± 1.6 | 19.1 ± 1.1 | 28.0 ± 1.5 | 3.8 ± 0.5 | [p.16-19](https://pds-geosciences.wustl.edu/m2020/urn-nasa-pds-mars2020_sample_dossier/initial_reports/initial_reports_volume2.pdf#page=118) |

These are measurements of nearby named abrasion surfaces described in the sample dossier. Sampling/coring sols490,509,575 are not the PIXL measurement sols484,505,570. Neither dataset samples the same spatial footprint.

| Station | Instrument / sols | What the report assigns to the measured spectra |
|---|---|---|
| Swift Run | SHERLOC / 489 | Raman peaks assigned to Fe/Mg carbonate; the report says no other mineral peaks could confidently be identified. [PDS](https://pds-geosciences.wustl.edu/m2020/urn-nasa-pds-mars2020_sample_dossier/initial_reports/initial_reports_volume2.pdf#page=36) |
| Hazeltop | SHERLOC / 505, 513 | Raman peaks assigned to Mg/Ca sulfates (some weakly hydrated); the report also assigns peaks in sol505 scans to carbonates. [PDS](https://pds-geosciences.wustl.edu/m2020/urn-nasa-pds-mars2020_sample_dossier/initial_reports/initial_reports_volume2.pdf#page=79) |
| Shuyak | SHERLOC / 570, 573 | Raman peaks assigned to carbonate and sulfate; phosphate is possible, not confirmed. [PDS](https://pds-geosciences.wustl.edu/m2020/urn-nasa-pds-mars2020_sample_dossier/initial_reports/initial_reports_volume2.pdf#page=131) |

No statement of CRISM/rover agreement or disagreement is made. No ground-truth conversion or new mineral identification is made.

## 3. Route-limited surface-slope comparison

Central differences, float64, Mars sphere radius3396190m, longitude spacing corrected by cos(latitude). Native slopes use 2-cell baseline (40m CTX /2m HiRISE); matched slopes use HiRISE area-averaged20m and40m baseline. Only finite complete stencils. Select unique raster cells with positive-length intersection with route clipped to valid loaded reference footprint; point-only contacts excluded. Arithmetic mean of unique cells, not length-weighted. Coverage weights repeated traversal by geodesic edge length. No extrapolation.

Coverage excludes unloaded terrain. Native comparisons exclude boundary pixels that cannot support a full central-difference stencil. Comparison at20m excludes one20m rim of the reference grids for the same reason. Counts and means use unique intersected cells, not repeated traversals; coverage length counts repeated traversal. Surface slope is the gradient magnitude, not slope along the direction of walking.

| Route | Total m | Loaded comparison % | Native-slope usable m / % | Matched20m usable m / % |
|---|---:|---:|---:|---:|
| delta_transect | 4019.714 | 12.3867 | 496.379 / 12.3486 | 442.784 / 11.0153 |
| v010_default_two_stops | 2473.137 | 23.6039 | 583.218 / 23.5821 | 528.625 / 21.3747 |
| v010_three_stops | 3544.252 | 39.4993 | 1396.660 / 39.4063 | 1234.557 / 34.8327 |

### Native spacing:CTX20m and HiRISE1m

| Route | Dataset | Unique cells | Maximum ° | Mean ° | Cells >20° |
|---|---|---:|---:|---:|---:|
| delta_transect | CTX_20m | 17 | 3.359317 | 2.245742 | 0 |
| delta_transect | HiRISE_1m | 618 | 11.564135 | 3.165412 | 0 |
| v010_default_two_stops | CTX_20m | 21 | 18.656204 | 11.433921 | 0 |
| v010_default_two_stops | HiRISE_1m | 778 | 39.421628 | 12.134792 | 75 |
| v010_three_stops | CTX_20m | 50 | 19.202680 | 8.359651 | 0 |
| v010_three_stops | HiRISE_1m | 1734 | 48.654711 | 8.463970 | 104 |

### Matched spacing:both20m

| Route | Dataset | Unique cells | Maximum ° | Mean ° | Cells >20° |
|---|---|---:|---:|---:|---:|
| delta_transect | CTX_20m | 15 | 3.359317 | 2.186355 | 0 |
| delta_transect | HiRISE_averaged_to_20m | 15 | 2.970932 | 1.916243 | 0 |
| v010_default_two_stops | CTX_20m | 19 | 18.656204 | 11.962990 | 0 |
| v010_default_two_stops | HiRISE_averaged_to_20m | 19 | 25.441979 | 12.190751 | 1 |
| v010_three_stops | CTX_20m | 44 | 19.202680 | 8.608444 | 0 |
| v010_three_stops | HiRISE_averaged_to_20m | 44 | 25.694990 | 7.703640 | 1 |

The default v0.10.0 route contains Swift Run + Hazeltop. The three-stop scenario appends Shuyak using10min dwell; it is not the default. Delta is the original regression scenario. Inputs other than activities remain the same.

**Finding confined to the analyzed portions:** on the current two-stop route,75 of778 intersected native HiRISE cells exceed20°, while the21 intersected CTX cells do not. At matched20m spacing,1 of19 reference cells exceeds20°, versus0 of19 CTX cells. No routing costs, passability mask or colors were changed. These observations do not certify safety or establish an independently calibrated ground truth. CTX and HiRISE TRN are related products.

## 4. Text-only corrections and verification

- Removed Arabic from activity type choices and the basal/walking scenario notice; kept the English scenario disclaimer.
- Rendered the MEDA dust-unavailable explanation in English; original MEDA data/processing/API unchanged.
- Added Team hypothesis to every station question and Team hypothesis / proposed observation to each proposed observation.
- Added directly visible PDS author/year/page links below each archived station interpretation.
- Added Sun & Stack (2020), USGS SIM3464 citation links to regional geological interpretations in both workspaces.
- Corrected the stale3D default-itinerary text to Swift Run + Hazeltop.
- Production build passed. Chromium checks passed for all3 dossiers (4 origin badges each), their PDS links and the English physiology notice; no browser page errors.
- Protected backend files and geoscene.ts remain byte-identical to the audited v0.10.0 archive.

## 5. Not found / not established

- A standalone immutable v0.9.0 full archive or Git commit: not found; reconstruction method above.
- A measured rover composition representing the entire corresponding36m CRISM pixel: not found. The dossier measurements are local abrasion observations.
- Verified subpixel co-registration between each sample point and CRISM: not found.
- Loaded HiRISE validation for the remainder of these routes: not found in the supplied patches. No extrapolation.
- A successful run of the existing HTML-based parity harness: not obtained; its precise error is retained in legacy_harness.txt. The separate actual-engine parity check passed.

## Audit deliverables

The text patch contains only main.tsx,ScienceBrief.tsx,GeoStudio.tsx,style.css and rebuilt frontend/dist. Audit scripts/results are separate under audit_evidence and do not execute in the application. Existing terrain.py,api.py,geo_models.py and physiology code are not included in the patch.
