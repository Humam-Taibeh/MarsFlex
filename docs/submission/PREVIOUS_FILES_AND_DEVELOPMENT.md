# Previous files and project development

This is an evidence-backed milestone inventory, not a claim that a complete independent ZIP for every prior version was recovered. Exact dates are omitted when not established in a retained changelog. Current files can contain later updates; dated documents and screenshots preserve earlier states.

| Stage | Retained evidence files | Development | Scope / caveat |
|---|---|---|---|
| Original prototype | frontend/legacy/prototype_original.html | Mission Freedom Map visual prototype | Prototype reference, not terrain-validation evidence |
| v2 / v2.1 | build_demo.py; frontend/legacy/engine.js; docs/audits/MarsFlex_Audit_AR.md | CTX 20 m directed terrain graph, reserve and irregular freedom field; native CRISM bands and geology | Historical standalone retained and repaired in final package |
| v3 | docs/audits/FOUNDATION_v3_AR.md; foundation.py | Data catalog, provenance, PLACES and local HiRISE reference checks | Catalog entries are not all ingested rasters |
| v4 | docs/history/REBUILD_v4_AR.md; MarsFlex_Expedition_v4.png | Cesium regional viewer and registered CTX/HiRISE imagery | Image resampling adds no measured resolution |
| v5 | docs/history/SURFACE_3D_v5_AR.md; geo_models.py | Three.js source-elevation surface, sections, picking and native sample export | Side walls are display geometry, not underground geology |
| v6 | docs/history/PERSPECTIVE_v6_AR.md; data/derived/MarsFlex_Perspective_v6.png | Perspective terrain presentation and regional/local views | CTX remains routing grid |
| v0.7.0 | CHANGELOG.md; MODEL_ASSUMPTIONS.md; INTEGRATION_LEVEL1_AR.md | Separate uncalibrated physiology/resource accounting | Missing resources stay unassessed; hidden from judge opening screen |
| v0.7.1 | MODEL_ASSUMPTIONS.md; frontend/src/main.tsx | Declared defaults, load/clear and exported assumption provenance | Basal150 and walking200 are team scenario numbers, not Kluis coefficients |
| v0.8.0 | meda_archive.py; data/derived/meda/catalog.json | PDS archived pressure, temperature, wind and RDS context | No live weather, dust conversion or route effect |
| v0.9.0 / v0.9.1 | CHANGELOG.md; api.py:suggest_negotiable_drops; MODEL_ASSUMPTIONS.md | Required/negotiable activities and non-applied subset suggestions | Minimize dropped count then duration; exact ties follow enumeration; no science-value rank |
| v0.10.0 | CHANGELOG.md; docs/audits/MarsFlex_v0.10.0_Audit.md; data/derived/science_targets.json | Swift Run/Hazeltop plan, Shuyak detour, PDS evidence and extra HiRISE patches | Different instrument footprints do not validate CRISM |
| Decision presentation | frontend/src/DecisionView.tsx; docs/audits/decision_regression.json | One mission, one decision, evidence and local trust strip; Advanced hides other controls | Previous package MarsFlex_Decision_Update.zip |
| Sensitivity and audit | analysis/results_2026_10_05/verification.json; docs/science/PIXL_EVIDENCE_NINE.md | 162 computed cases, conditional core, count monotonicity, nine PIXL audit values | 81 stricter cases excluded; separate graphic, not live map |
| Final review | docs/history/review/final/; HANDOFF.md; docs/audits/UI_TEXT_FINAL_AUDIT.json | Six text-only corrections, fresh setup/tests, complete package and judge documents | Protected engine hashes and exact Delta preserved; Windows remains untested |

## Input archives used for the final package

- MarsFlex_v0.10.0_Full.zip: full base, 4,999 entries.
- MarsFlex_Decision_Update.zip: 429 entries, applied over the base with replacement of frontend/dist.
- Revised MarsFlex_Sensitivity_Results.zip: 43 entries; analysis/ and docs/ merged.

The archive counts are ZIP-entry counts, not scientific datasets. `docs/history/review/final/before_hashes.json` inventories the assembled starting point. `FILE_MANIFEST.csv` inventories final files and hashes; `CHANGED_FILES.csv` identifies additions/modifications/deletions relative to that starting point. Earlier handoffs or ZIPs not embedded in these inputs are NOT FOUND in this complete-package lineage. Historical reports may describe earlier scope; HANDOFF.md and docs/submission/ are authoritative for this final delivery.
