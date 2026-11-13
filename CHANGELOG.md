# Changelog

## v0.9.0 — 2026-10-01

- Added activity `type` (`required` / `negotiable`), defaulting to `required` for legacy requests and new UI stops.
- Added operator type selectors and non-applied reduction suggestions to the time-only and metabolic mission responses/panels.
- Suggestions preserve all required tasks and retained order; minimize optional drop count, then candidate duration. They do not mutate the active itinerary.
- JSON exports include activity types and suggestion evidence. Missing consumables remain unassessed.
- Added the requested RDS/dust disclaimer immediately beneath the MEDA archive label.
- Documented policies, scope and limitations in MODEL_ASSUMPTIONS.md.
- Terrain routing code, full-itinerary routes/color logic, MEDA loader and weather observations are unchanged.

## v6 + Level 1 / 0.7.0 — 2026-09-28

### Added
- `terrain.py`: `MetabolicModel`, `metabolic_cost`, explicit `ResourceBudget` and
  `ResourceModel`, `MetabolicRouting`, `assess_resources`, `walk_back_limit`.
- Directed CTX edge speeds, metabolic watts, seconds and kJ; selectable suit offset
  or aggregate torque approximation; explicit uniform soil slowdown assumption.
- Minimum-energy and minimum-time return candidates, consumable margins and
  conditional additional stationary time. Unknown resources remain unassessed.
- `POST /v1/mission/metabolic` with strict units/ranges, real source hash, returned
  coordinates/edge ledger, fixed-order mission comparison and model limitations.
- `GET /v1/mission/metabolic/assumptions` serves this delivery's assumptions.
- `main.tsx`: Metabolism & return panel, editable assumptions, optional resource
  inputs, stale-result invalidation, resource ledger and JSON export.
- `MODEL_ASSUMPTIONS.md`, Arabic integration instructions, numerical/API tests and
  browser workflow verification. Production frontend is prebuilt for end users.

### Scientific corrections
- 72 min is the legacy scenario reserve, not a physiological walk-back limit.
- 85% and 85 W are not interchangeable. Requested power coefficients remain user
  assumptions; no NASA calibration or CSRM/V-SUIT accuracy is inherited.
- The verified SmartSuit table's 799 kcal/h case uses up to 10 Nm assistance.
- Missing resources never produce an all-resources feasibility assertion.
- Minimum-time/energy candidate failure is not a proof of global infeasibility.

### Preserved / deferred
- Existing data bytes, terrain gates, license, source attribution and v6 API.
- Time-only freedom colors; no covert conversion to physiological safety colors.
- No Level 2 environment or Level 3 task-state changes. Await user test/approval.

### Dependency compatibility
- NumPy 2.3.5 + SciPy 1.16.3 recorded as the tested compatibility pair following
  the reported Windows import failure. Python tests run on Linux; this does not
  establish that the user's Windows DLL problem is resolved.

## 0.10.0 — 2026-10-03

- Start expedition planning with Swift Run and Hazeltop, historical Perseverance
  sample locations from PDS, and offer Shuyak as an additional destination.
- Add source-linked target dossiers: archived interpretation, explicit field
  question and author-proposed observations, with original page/DOI provenance.
- Join target coordinates to native CRISM, CTX, USGS geology and nearest PLACES
  evidence; do not infer science values or observation coverage from proximity.
- Add source-native 1 m HiRISE crops at Skinner Ridge and Amalik to the 3D
  surface/section viewer and the reference comparison.
- Calculate mission/return length inside fully valid downloaded HiRISE comparison
  cells; draw reference outlines and export the evidence brief with the mission.
- Show the existing 25 cm image only within its actual loaded footprint.
- Clarify time-budget success and the unresolved physiology model; preserve
  terrain routing, color semantics, MEDA and required/negotiable suggestion policy.
- Preserve mission drafts when switching between the map and 3D terrain viewer.

## Final review delivery — 2026-10-05

- Six UI wording corrections only; production frontend rebuilt. No protected engine, color or physiology logic changes.
- Repaired the truncated historical v2 standalone HTML from the existing builder; original retained in docs/history/review/final/Original_Truncated_v2.zip.
- Fresh Linux installation via launch.py, 37 pytest tests, 13 diagnostic tests, exact Delta regression and 413,130-cell Python/JavaScript parity verified with raw outputs.
- Verified decision workflow, archived MEDA wording and 401 native section samples in Chromium.
- Added unified judge documents, seven editable slides, Arabic development PDF, complete source/dependency registers, AI disclosure, HANDOFF and full-file manifests.
- Sensitivity cases were not rerun; the 6,352-cell core is conditional on the 162 computed cases.
- Windows clean-machine verification remains unavailable. See docs/submission/DELIVERY_GAPS.md.
