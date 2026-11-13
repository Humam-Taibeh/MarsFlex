# MarsFlex — Jezero Marswalk Planner

NASA Space Apps Challenge 2026 · *Interplanetary Survival Guide: Martian Map*

MarsFlex layers NASA Mars data for a hyper-local view of Jezero Crater (Perseverance landing region) and
plans scenario walks for a human explorer: terrain-aware routes, optional science stops, a time and
metabolic budget, and traceable orbital/rover evidence for every number shown.

Data layers: CTX and HiRISE terrain (MRO/USGS), CRISM spectral parameters, USGS geologic units,
PIXL rover measurements, archived Perseverance MEDA weather, a published Mars-surface radiation rate (MSL RAD), and the Viking MDIM 2.1 global mosaic for the planet view.
Green/Yellow/Red denotes feasibility under declared scenario assumptions; it is **not** an operational
safety certification. Details: [docs/science/MODEL_ASSUMPTIONS.md](docs/science/MODEL_ASSUMPTIONS.md).

![Workbench](docs/images/workbench.png)

Start from the whole planet (**Globe**, Viking MDIM 2.1), descend to Jezero (**3D** relief, drawn 2.2× for display only, or a top-down **2D** map), plan a walk, and read the evidence and radiation context for it.

| Globe | 2D map |
|---|---|
| ![Globe](docs/images/globe.png) | ![2D map](docs/images/map-2d.png) |

## Challenge requirements at a glance

| Challenge requirement | Where it is met |
|---|---|
| Choose where to go | **Mission Site Advisor**: a transparent suitability map (terrain, safety margin including oxygen, science value) with the three best candidates and their reasons |
| Layered, integrated view of a Martian location and route, from several NASA missions | Jezero Crater: CTX imagery + terrain, HiRISE terrain, CRISM spectral parameters, USGS geologic units, PIXL chemistry, MEDA weather, MSL RAD radiation context, Viking global mosaic |
| At least three kinds of data | Optical, topographic, spectral, chemical, atmospheric, geologic, radiation (see [DATA_SOURCES](docs/legal/DATA_SOURCES.md)) |
| Safety first | Time reserve and return-feasibility colouring, slope gates, **oxygen and suit-time ledger with a turn-back point** (NASA EMU as reference suit), radiation context, explicit limits on every number |
| Route that avoids obstacles | Terrain-aware routing with slope and NoData gates; unresolved boulder-scale hazards are disclosed |
| Helps plan and carry out a Marswalk | Scenario planner: stops, detour test, time and oxygen budget, **Walk the route** replay with a suit HUD, evidence for each stop, profile, export |
| Use NASA data and credit it | Every source is cited in the app and in `docs/`; no data without a stated origin |

Equations are checked by independent re-derivation tests; see [docs/science/VERIFICATION.md](docs/science/VERIFICATION.md) for what is and is not claimed.

## Run it

Requires Python 3.12+ and internet access on first launch (installs pinned dependencies into `.marsflex-venv`).

- Windows: double-click `Start_MarsFlex.cmd`
- Any OS: `python launch.py`

Then open http://127.0.0.1:8000. The prebuilt web app (`frontend/dist`) is served by the same process as the API.

## Repository layout

```
backend/    Python API and data pipeline
  marsflex/   FastAPI service, terrain engine, evidence and MEDA modules
  pipeline/   Scripts that fetch and rebuild data/derived from NASA/USGS sources
  tests/      pytest suite (+ tests/browser: Playwright end-to-end checks)
  analysis/   Parameter-sensitivity study and its saved results
frontend/   React + Cesium + Three.js web app (src/, built into dist/)
data/       source/ (NASA/USGS inputs) and derived/ (computed layers used at runtime)
docs/       api/, science/ (methods, sources), legal/ (attributions, licenses), submission/
launch.py, Start_MarsFlex.cmd   one-step local launcher
```

## Develop and test

```
python -m pip install -r backend/requirements-tested.txt
python -m pytest                       # backend tests
python -m uvicorn marsflex.api:app --app-dir backend --port 8000
cd frontend && npm install && npm run dev      # Vite dev server, proxies /v1 to :8000
cd frontend && npm run build                   # rebuilds frontend/dist
```

API reference: [docs/api/API.md](docs/api/API.md).

## Sources, attribution and AI use

- Data sources and terms: [docs/legal/DATA_SOURCES.md](docs/legal/DATA_SOURCES.md), [docs/legal/ATTRIBUTIONS.md](docs/legal/ATTRIBUTIONS.md), [docs/science/SOURCES_EN.md](docs/science/SOURCES_EN.md)
- Third-party software licenses: [npm](docs/legal/THIRD_PARTY_NOTICES_NPM.md), [Python](docs/legal/THIRD_PARTY_NOTICES_PYTHON.md)
- AI assistance disclosure: [docs/submission/AI_ASSISTANCE.md](docs/submission/AI_ASSISTANCE.md)
- Known gaps: [docs/submission/DELIVERY_GAPS.md](docs/submission/DELIVERY_GAPS.md)

NASA does not endorse this project. Original code: Apache-2.0 (see [LICENSE](LICENSE)); external data and assets keep their own terms.
