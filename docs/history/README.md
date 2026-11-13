# MarsFlex / Mission Freedom Map — 3D surface workbench v6

## Level 1 addition / 0.7.0

Existing v6 application plus an explicit, uncalibrated metabolic/resource module.
Open Expedition planning → Metabolism & return. See `MODEL_ASSUMPTIONS.md`,
`CHANGELOG.md` and `INTEGRATION_LEVEL1_AR.md`. Missing resource inputs remain unknown.
The existing mission freedom field remains time-only. No Level 2 implementation.

## Current v6: close perspective terrain exploration

The default scene uses a perspective camera, elevation colors and terrain-cast
shadows. Native HiRISE geometry fills the main viewport. Default vertical
exaggeration is explicitly labeled 3×; select 1× for true proportions. The
Sections & measurements button opens the existing section tools. No routing
or source elevation values were changed. See `docs/PERSPECTIVE_v6_AR.md`.

## Previous v5: native 3D surface and sections

The first workspace now renders native terrain as a rotatable surface model in
Three.js. Three 401×401 HiRISE 1 m patches and the regional CTX routing surface
are available, with source-derived contours, live N–S/E–W sections, slope color,
mesh inspection, native sample picking and CSV export. Vertical exaggeration is
explicit and never changes measurements. Reference walls only close the mesh.

Mission routes and feasibility fields can be drawn directly on the regional
3D terrain. The Expedition tab retains the image-based planner and can send
its latest scenario to the 3D workspace. Read `docs/SURFACE_3D_v5_AR.md`.

New entry points: `geo_models.py`, `frontend/src/GeoStudio.tsx`,
`frontend/src/geoscene.ts`, and `frontend/src/workspace.tsx`.
Browser checks: `data/derived/browser_v5_qa.json`; backend checks:
`data/derived/v5_test_results.txt`.

## Retained v4 map functionality

## Current milestone: image-based 3D surface workbench v5

The v4 rebuild replaces the small relief overview with a full-screen,
georeferenced orbital map. Real CTX 6 m imagery is draped on the existing CTX
20 m terrain. A native HiRISE 25 cm, 256×256 map-metre image patch supports close
inspection. Interactive CRISM, slope, geology and contact layers are available.
The distance-based route profile is linked to the map, and detour calculations
include the actual route geometry. Rover points are optional and off by default.

Start with `START_HERE_AR.md`. Windows users with Python 3.12 can launch
`Start_MarsFlex.cmd`; it creates a local environment and opens the browser.
This Windows wrapper has not been executed on Windows in the build environment.
The application itself is browser-tested on Linux/Chromium. It is not publicly hosted.

- `ingest_imagery.py`: verified USGS imagery acquisition and georeferenced display.
- `build_map_layers.py`: registered slope and native-pixel spectral display layers.
- `docs/REBUILD_v4_AR.md`: rebuilding rationale, measured results and remaining work.
- `data/derived/browser_v4_qa.json`: actual integrated browser checks.
- `data/derived/v4_test_results.txt`: current backend and source integration tests.

- `catalog_ingest.py`: paginated USGS STAC discovery and PDS PLACES ingestion.
- `build_coverage.py`: actual evidence availability on the existing CTX grid.
- `validate_hirise.py`: source-native HiRISE reference patches and scale-matched comparison.
- `api.py`: independently callable catalog, rover, evidence and terrain services.
- `docs/FOUNDATION_v3_AR.md`: measured results, limitations and next steps.
- `data/derived/api_smoke_results.json`: one real HTTP mission calculation.
- `data/derived/foundation_test_results.txt`: test result for this release.

The 145 catalog entries are discovery metadata and asset links, not 145
downloaded or routing-approved rasters. The archived rover data contain sparse
localized positions, not a continuous track. Sampled HiRISE reference data do
not provide full-area obstacle clearance. Dataset timestamps and incomplete
metadata are retained and flagged rather than silently treated as observations.

### Run the application (for the technical partner)

```bash
python -m pip install -r requirements-tested.txt
python -m uvicorn marsflex.api:app --host 127.0.0.1 --port 8000
```

Open http://127.0.0.1:8000 after starting the server. Node is not needed to
run the included compiled interface. To edit and rebuild it: `cd frontend`,
`npm ci`, then `npm run build`.

API documentation is available at `/docs` on that local server. Endpoint details
are in `docs/API.md`. No NASA download, API key, or LLM call is required to use
the included data snapshot. The service binds locally; public hosting and
production access controls are not configured in this milestone.

Rebuild discovery and availability from the verified cache:

```bash
python -m marsflex.catalog_ingest
python -m pipeline.build_coverage
python -m pytest -q tests
```

Use `python -m marsflex.catalog_ingest --refresh` to deliberately retrieve a newer
archive snapshot. Rebuild coverage afterward. The source-archive snapshot
assertions in the tests must be reviewed if the upstream counts change.
Run `python -m marsflex.validate_hirise` to reproduce the reference comparison from the
included verified patches. Missing or modified patches require network retrieval
of their original ranges. Large full HiRISE rasters are not bundled.
`plot_foundation.py` additionally uses Matplotlib.

## Workbench controls and validation

Click Calculate mission, inspect terrain or the habitat, and evaluate a detour.
Changing mission inputs invalidates old routes and fields until recalculated.
The catalog distinguishes metadata discovery from ingested analytical data.
Rendering uses a local relief frame with no vertical exaggeration; it does not
claim a solved global areoid/ellipsoid datum. Lighting is synthetic.
Browser checks and a real screenshot are included under `data/derived/browser_v4_qa.json`
and `MarsFlex_Expedition_v4.png`. The browser was Chromium with software rendering
at 1600×1000; this is not a cross-device certification.

## Retained browser prototype: historical v2.1 instructions

Real USGS CTX elevation, directed terrain routes and mission feasibility fields.
This is a continuation of the supplied MarsFlex Ops v1, not a new project.

## للمستخدم: التشغيل دون برمجة

1. نزّل `MarsFlex_Terrain_v2.html` وافتحه بمتصفح Chrome أو Edge على الكمبيوتر.
2. انتظر ظهور `Real CTX terrain · ready` أعلى الصفحة.
3. الافتراضي هو الهدف A. خفّض Remaining EVA time من 300 إلى 240 دقيقة:
   ستختفي المساحة الخضراء لأن المهمة الكاملة مع الاحتياطي لم تعد تتسع.
4. اضغط زر `Map click: move astronaut` لتحويله إلى `Map click: inspect detour`.
5. اضغط نقطة على الخريطة أو اسم أحد الهدفين. اقرأ تكلفة الانحراف وما يلزم
   إسقاطه من أهداف في اللوحة اليمنى. ارفع الزمن إلى 480 واختر الهدفين لتجربة
   مهمة أطول. ليس مضمونًا أن تتسع كل نقطة أو كل مهمة.
6. يمكن سحب الخريطة والتكبير. `Export decision JSON` يحفظ تفاصيل القرار.
7. فعّل `Geology context` أو `CRISM BD2500_2` لعرض الأدلة. طبقة العلم تخفي
   ألوان الحرية مؤقتًا حتى لا تختلط الألوان؛ أطفئها لاستعادة الحقل.
   فعّل `Spectral review candidates` ثم اضغط اسم مرشح لقراءة تكلفة زيارته
   وقيم المصدر في اللوحة اليمنى. هذه المرشحات لا تثبت وجود معدن.

الملف يحتوي بياناته، فلا يحتاج Replit أو مفتاح AI أو إنترنت بعد تنزيله.
التشغيل يتطلب متصفحًا حديثًا يدعم Web Workers وDecompressionStream.
إن لم يعمل من معاينة المرفق، نزّله وافتح النسخة المحلية. عرض 1300 بكسل أو
أكثر مناسب لإظهار لوحة نتائج القرار. في الشاشات الأصغر يخفي التصميم الموروث
بعض اللوحات؛ هذه النسخة مخصصة لعرض الكمبيوتر.

**الارتفاعات حقيقية. الأزمنة وحدود الميل نموذج افتراضي معلن، وليست ضمان سلامة
أو مواصفات بدلة فضاء. نقاط الهدفين مرشحات من النسخة السابقة؛ اسم الوحدة
المعروض مأخوذ من خريطة إقليمية، ولا يمثل تحققًا ميدانيًا أو إثبات معدن.**

اجتازت الحسابات والملفات الاختبارات الموضحة في التقرير. تعذر فحص الواجهة
داخل المتصفح المتاح بسبب حظر الملفات المحلية؛ لم يُستكمل اختبار النقر والعرض
داخل متصفح فعلي، رغم اجتياز محرك JavaScript نفسه التحقق باستخدام Node.

## Package contents

- `MarsFlex_Terrain_v2.html`: offline interactive demo.
- `terrain.py`: source validation, native crop, terrain graph and Python solver.
- `fetch_ctx.py`: reproducible verified-range download of documented public DTM.
- `fetch_science.py`, `build_science.py`: native CRISM subsets and contextual geology.
- `build_demo.py`: embeds real derived data in the continued prototype.
- `web/engine.js`, `web/app.js`: browser deterministic engine and integration.
- `data/source/`: original TIFF, labels, source hashes, geology features and CRISM bands.
- `data/derived/`: cropped GeoTIFF, arrays, validation and route evidence.
- `docs/methodology.md`, `DATA_SOURCES.md`, `ATTRIBUTIONS.md`, `LICENSE`.
- `docs/MarsFlex_Audit_AR.md`: critical audit and remaining work.
- `MarsFlex_Validation.png`: calculated field comparison, not a browser screenshot.
- `verify_release.py`: real-data JS/Python comparison and native evidence checks.

## Rebuild (for a coding partner, not required from the user)

```bash
python -m pip install -r requirements.txt
python -m pipeline.fetch_ctx
python -m marsflex.terrain
python -m pipeline.build_science
python -m pytest -q tests
python -m pipeline.build_demo
python -m pipeline.verify_release
```

All required source files are already included, so downloading again is unnecessary.
`fetch_science.py` can refresh the features/bands using the included source metadata.
Optional figure rebuild: `python -m reports.plot_validation` (requires Matplotlib).
Model parameters live in the explicit `Model` dataclass; rebuild to change them.
Only mission timing/target choice is adjustable live in this milestone.
Changing a target coordinate requires a rebuild and source-evidence review.

## Historical v2.1 status (see v3 report for new backend work)

Implemented: CTX acquisition, projection/NoData/bounds checks, native grid crop,
directional grades, surface-slope gates, directed movement costs, true grid
routes, irregular mission field, station times, fixed reserve basis, proposed
target dropping, provenance and decision export. Geology units/contacts are
ingested as regional display context. Three native CRISM summary parameters
and conservative spectral-review candidate previews are ingested. No LLM chooses a route.

Not implemented: HiRISE/reference-slope validation, authoritative geology GIS
cross-check, full reflectance-spectrum validation, justified science utility,
Mars 2020 PLACES layer, multi-resource EVA model, LLM
constraint parser, public Git repository or hosted deployment. The package is
source-available with Apache-2.0; the competition submission still needs a public
repository and final resource/eligibility check.
