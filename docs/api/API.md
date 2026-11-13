# MarsFlex API v0.3.0

Run from the project root with `python -m uvicorn marsflex.api:app --host 127.0.0.1`.
All coordinates refer to **Mars**, planetocentric latitude and positive-east
longitude in degrees. Earth WGS84 is not an interchangeable CRS. Areas in
`build_coverage.py` use the CTX source sphere. Height values are elevations above
the source areoid, not Cesium ellipsoid heights.

| Endpoint | Purpose |
|---|---|
| `GET /v1/health` | Readiness, archive counts and model status |
| `GET /v1/catalog` | Paginated catalog; optional collection and bbox filters |
| `GET /v1/coverage` | Catalog QA and evidence-availability results |
| `GET /v1/places` | Paginated sparse rover records, with sol and bbox filters |
| `GET /v1/evidence/at?lon=77.4&lat=18.47` | CTX height, native CRISM parameters, contextual geology and nearest rover record |
| `GET /v1/terrain/metadata` | Grid reference, data hash and explicit movement assumptions |
| `GET /v1/terrain/reference` | Scale-matched HiRISE comparison with scope and dependence warnings |
| `POST /v1/mission/evaluate` | Deterministic mission, return route, detour classification and optional raster field |

Example request:

```json
{
  "position": {"lon": 77.4, "lat": 18.47},
  "habitat": {"lon": 77.4, "lat": 18.47},
  "remaining_min": 300,
  "reserve_min": 72,
  "activities": [
    {"id": "delta-review", "lon": 77.385, "lat": 18.501, "dwell_min": 15}
  ],
  "detour": {"lon": 77.401, "lat": 18.471},
  "detour_dwell_min": 10,
  "include_field": true
}
```

The example habitat and activity are scenario choices, not approved mission
sites. Motion remains the inherited uncalibrated 0.5 m/s scenario with slope
penalties and configurable-in-source 20-degree gates. The API reports these
assumptions and the terrain hash. It does not report oxygen, battery use or an
astronaut safety certificate.

Activities are performed in the provided order **after** a queried detour.
The current kernel does not recognize completion while passing through a target
on another leg. There is no automatic target dropping: yellow means the full
provided list no longer fits, but return-only fits. A future mission-state
solver must distinguish negotiable activities from hard required tasks.

Return and mission totals for a queried detour include its dwell time but not
the separately reported reserve. Baseline mission totals exclude the optional
detour. A detour at the current position still incurs the selected dwell time.

If requested, the field is row-major uint8, gzip-compressed and base64 encoded.
Classes: 0 unknown/blocked/unreachable, 1 red, 2 yellow, 3 green. Transform and
Mars CRS accompany the array. The API returns a domain-boundary warning when
the budget can reach the raster boundary; no paths outside the raster are known.

Inputs outside the known walkable grid are rejected, not silently snapped.
Nonfinite values, negative budgets and duplicate activity IDs are rejected.
Concurrent compute jobs return 503 to limit peak memory; the client can retry.
Data endpoints remain available during calculation.

Catalog statuses must remain visible to any future UI: `catalogued_not_ingested`
and `approved_for_routing: false` do not mean unavailable, but prevent confusing
discovery with numerical validation. API arrays and source tables are immutable
for a running server; restart after rebuilding its snapshot.

## Workbench rendering endpoints

- `GET /v1/terrain/surface`: the exact CTX float32 LE elevations encoded as base64,
  grid metadata, and explicit local-relief frame limitations.
- `GET /v1/layers/geology.png`: contextual geology already rasterized onto that grid.
- `/`: built React/Cesium interface when `frontend/dist` exists at server startup.

The renderer uses a Mars sphere and local tangent frame; areoid elevations are
relative relief, not a claimed global ellipsoidal vertical transformation.

## v4 map and route inspection

- `GET /v1/map/layers`: imagery provenance, spectral stretch legends, and geologic contacts.
- `GET /v1/map/image/{name}`: allowlisted orbital, HiRISE, slope, geology and CRISM display assets.
- Mission and return responses now include `profile`: cumulative ground distance,
  source elevation, incoming directional grade, local surface slope and travel time.
- Detour responses include the route via the inspected point and all supplied activities.
- Evidence responses include source-grid surface slope. No imagery-derived hazard
  classification is silently added to the movement model.

## v5 native surface models

- `GET /v1/geomodel/models`: model inventory, native grid metadata and source hashes.
- `GET /v1/geomodel/models/{margin|delta|crater_floor|regional}`: native float32
  elevations encoded as base64 little endian plus source projection metadata.
- Base elevations are artificial renderer references. Surface values are never
  altered by vertical exaggeration, clipping or contour display.

## Level 1 metabolic scenario (0.7.0)

`POST /v1/mission/metabolic` accepts position, habitat, remaining_min,
optional time_contingency_min, ordered activities, parameters and resources.
Strict schema and units are in `/docs` and `openapi.json`.
`GET /v1/mission/metabolic/assumptions` returns docs/science/MODEL_ASSUMPTIONS.md.

The result includes return and ordered mission routes, edge power/speed/energy,
resource balances, and explicit calibration/search limits. Empty resources produce
an incomplete assessment, not a positive safety decision. The original evaluate
endpoint and freedom field remain time-only. See INTEGRATION_LEVEL1_AR.md.

## Radiation context

`GET /v1/environment/radiation?minutes=300` (0–1440) returns the published Mars-surface GCR dose rate (RAD, Hassler et al. 2014)
scaled to the walk duration, the fraction of NASA's 600 mSv career limit, a 500-day reference stay, the sources and the limitations.
Status is always `scenario_context_not_a_dose_prediction`. Never used by routing.

`GET /v1/map/image/globe` returns the 6144 × 3072 equirectangular Viking MDIM 2.1 texture used by the Globe view (see docs/legal/DATA_SOURCES.md).
