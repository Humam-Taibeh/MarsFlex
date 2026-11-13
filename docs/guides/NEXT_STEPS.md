# After v5

Native Three.js surface rendering, metric HiRISE details, sections/contours,
CSV sampling and regional CTX mission overlays are implemented. The image-based
mission planner is retained and shares calculated scenarios with the 3D view.
See SURFACE_3D_v5_AR.md and the v5 QA results.

Priorities remain science interpretation/registration, defensible mobility and
uncertainty, richer mission states, command-to-constraint parsing, then public
source publication and hosting. Native 1 m display is not native 1 m routing.

---

# After the v4 rebuild

Read REBUILD_v4_AR.md and the browser/backend QA records. Orbital imagery,
interactive spectral/slope/geology layers, native HiRISE image inspection,
distance-linked route profiles and actual detour routes are now implemented.

Next: official geology GIS verification, registered full spectral analysis,
surface-instrument target linkage and a defensible uncertainty/mobility model.
Add mission activity states and controlled language-to-constraint parsing.
Public hosting, repository publication and Windows launcher testing remain open.

The local terrain frame is explicit; global vertical datum conversion is not solved.
No subpixel clearance, current weather or operational safety certification is claimed.

---

# Current v3 continuation priorities

Read `FOUNDATION_v3_AR.md`, `API.md`, the source manifests and the recorded
test results first. Data discovery, sparse PLACES ingestion, coverage analysis,
reference patches, an independent API, and a browser-tested React/Cesium local
relief workbench are implemented. See `data/derived/browser_qa.json`.

1. Validate Cesium Mars horizontal and vertical conventions before drawing the
   source elevation as globe height. Areoid elevation must not be passed off as
   ellipsoid height. The current workbench deliberately uses local relative relief.
2. Select the final science corridor using documented science evidence, not
   footprint overlap alone. Current AOI is retained provisionally.
3. Ingest controlled orthoimagery for the selected corridor and check landmark
   registration; additional uncontrolled catalog images need alignment.
4. Verify newer 2025 MSR HiRISE products if extending west; they are not yet
   included in the four-collection STAC snapshot.
5. Add reflectance spectra and official GIS verification, then surface science
   observations with actual target linkage. PLACES alone is not mineral evidence.
6. Add hard/negotiable/completed activity state, then validated natural-language
   constraints. Do not let an LLM determine route feasibility.
7. Expand browser/device QA, complete deployment and a public source repository after the
   integrated application is actually ready.

---

## Retained earlier milestone checklist

# Continuation brief for a coding/research partner

Preserve the Mission Freedom Map concept. The user has now authorized replacing
the old UI with an advanced 3D GIS application. Read the Arabic audit,
methodology, source manifests and tests first. The delivered demo contains real
terrain routes and source-native scientific context, with explicit limitations.

1. Run the existing HTML in a real desktop browser. Check initial load, moving
   the astronaut, inspecting a detour, slider changes, two-target mode, evidence
   overlays, candidate clicks and exported decision JSON. Engine tests do not
   establish browser interaction correctness. Preserve Apache-2.0 and attribution.
2. Validate representative CTX slopes/obstacles against the actual HiRISE files,
   honoring their own CRS and vertical reference. Compare like slope baselines
   and aggregated scales; do not mistake post spacing for terrain accuracy.
   Test sensitivity to speed, thresholds, dwell and grid/domain limits. Do not
   invent a physiological calibration, uncertainty distribution or confidence score.
3. Download the authoritative SIM 3464 GIS archive and check the contextual
   service geometries/unit assignments. Keep historical map interpretations
   distinct from later rover observations. Only then consider quantitative
   contact analysis with stated positional uncertainty and scientific rationale.
4. Retrieve source reflectance spectra and required quality/context products for
   the existing CRISM observation. Check local background and artifacts, paired
   absorptions and registration before mineral identification. Review candidates
   against a concrete science objective. Current BD2500_2 patch ranking is only
   a review aid; it must not become an unvalidated science-value score.
5. Add an actual Mars 2020 PLACES/context layer with date and source identity.
   CTX, HiRISE and CRISM are instruments on MRO, not three different missions.
6. Extend mission state only as needed: distinguish hard required tasks from
   negotiable goals and already-completed tasks; allow task completion before
   a detour through a state/target-mask solver if the demo requires it. Existing
   fixed-order-after-detour semantics are explicit and must not silently change.
7. Only after these gates, add an AI command parser that emits a strict validated
   constraints schema. The deterministic engine alone computes routes and labels;
   AI explanations cite its returned numbers and evidence. Never accept free-text
   AI output as a route, resource measurement or safety judgment.

Release requirements still open: public source repository, final official brief/
event-rule verification, a rehearsed demo, and accurate human-team contribution
records. No public deployment or repository was created in this milestone.
