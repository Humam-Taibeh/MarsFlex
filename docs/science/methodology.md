# MarsFlex terrain milestone methodology

Version 2.1, 25 September 2026. This continues the supplied Ops v1 concept and UI.

## Data and spatial reference

The original USGS CTX TRN GeoTIFF is retained in `data/source/ctx_trn_20m.tif`.
Its identity, URL, byte size and SHA-256 are in `source_manifest.json`. The PDS3
label is retained. Rasterio reads actual TIFF metadata; no georeferencing is
inferred from the browse JPEG. Source: 1596 columns x 1512 rows, float32, one
band, 20 m map spacing, spherical Mars radius 3396190 m, equirectangular with
standard parallel and central longitude 0. Latitude is planetocentric,
longitude positive east. The source NoData is about -3.402822655e38.

The AOI remains 77.32–77.49 E, 18.40–18.53 N. Its computational domain includes
2000 projected meters of buffer on each side, rounded outward to native cells:
705 columns x 586 rows. Cropping does not resample elevations. All 413130
elevations in this crop are valid. This does not prove absence of source errors.
Pixel positions and clicked locations refer to cell centers; selecting a point
uses its containing cell, not an undisclosed search for a convenient nearby cell.

`x = radius * longitude_radians`, `y = radius * latitude_radians` only apply
after the program verifies this specific source projection. Never substitute
Earth EPSG:4326 or EPSG:3857 for the Mars computational CRS. At this latitude,
20 projected meters east/west span about 18.97 ground meters. Edge lengths are
great-circle lengths on the source Mars sphere, rather than assumed 20 m in
every direction. Elevations remain source topography values, not radial heights.

## Terrain and graph

Eight neighbors per cell. Directional grade is `(z_neighbor-z_current)/distance`;
directional angle is `atan(grade)`. Surface slope is the magnitude of the two
local finite-difference derivatives with latitude-corrected x spacing. Interior
central derivatives span 40 projected meters, not a 20 m slope baseline; edge
derivatives are one-sided. Therefore this surface-slope raster is not directly
equivalent to every published USGS 20 m adirectional slope product.

Both endpoint surface slopes and directional angle must pass the declared
thresholds. A diagonal also requires both neighboring cardinal cells to be
walkable; it cannot cut a NoData/blocked corner. Missing elevations and their
invalid finite-difference neighborhoods are excluded, never replaced by zero.

For each directed edge:

`cost_minutes = distance_m / (60 * speed_m_s) * (1 + 4*max(grade,0) + 2*max(-grade,0))`

Speed 0.5 m/s, uphill weight 4, downhill weight 2, maximum directional grade
20 degrees, and maximum surface slope 20 degrees are **MarsFlex scenario
assumptions**, not calibrated Mars EVA standards, suit limits or NASA safety
requirements. Slopes and distances are data-derived; the penalty function is a
declared design choice. The simple monotone penalty does not give downhill
speed bonuses or negative costs. Surface-material, oxygen, battery, physiological,
communication and illumination constraints are not modeled here.

The linear up/down penalty gives asymmetric costs but can yield the same optimal
path reversed: its antisymmetric component is proportional to endpoint height
difference. This is expected, not evidence that the graph was made undirected.
More realistic asymmetric path choices require a justified nonlinear movement
model or additional directional constraints. Do not invent these for drama.

## Routing and mission freedom

Python uses SciPy directed Dijkstra as a reference. The browser worker implements
directed Dijkstra over the same precomputed edge-cost arrays. Reverse searches
use the transposed graph: search from habitat in the original graph is not a
valid substitute for cost **to** habitat. Distances from current position are
recalculated when it moves; reverse target/habitat tables are cached.

With P current position, X candidate detour, H habitat, ordered targets T_i,
remaining time B, fixed reserve R, detour dwell s_X, and target dwell s_i:

`return_cost(X) = d(P,X) + s_X + d(X,H)`

`mission_cost(X) = d(P,X) + s_X + d(X,T1) + s_1 + ... + d(Tk,H)`

- Green: `mission_cost + R <= B`.
- Yellow: `return_cost + R <= B` but the full mission does not fit.
- Red: known connected candidate whose return cost violates B minus R.
- Gray: missing/invalid/slope-blocked or not connected in the modeled graph.

The blue baseline covers all selected targets in the displayed order **and
returns home**. Its time includes each target activity. The white route is the
current direct return. The selected detour summary includes the additional
detour activity, additional cost over baseline, both margins, and feasible
target subsets. Subsets preserve target order. Yellow is a proposal to drop
planned science goals, never automatic permission to drop a hard requirement.

The demo uses a fixed original allocation of 480 min. The reserve slider is a
percentage of that fixed number, not of the shrinking remaining budget. The
remaining slider ranges 40–480 min. Default remaining time is 300 min, reserve
72 min, detour dwell 10 min, planned station dwell 15 min each. These are
scenario controls, not actual life-support data. Marker motion is scenario
editing and does not automatically decrement the budget.

Target task completion is explicit in the route sequence after X. Walking past
a target does not complete its task. This fixed-order simplification can exclude
alternatives that perform tasks before X. It is deliberately disclosed. A future
mission-state solver can use `(cell, completed_target_mask)` states or subset DP;
larger missions require careful combinatorial/temporal optimization.

## Domain, uncertainty, and display

Every route stays inside the buffered grid. If any boundary is reachable within
the one-way usable budget, a conservative domain warning appears. Green is a
constructive feasible route in this graph; red must not be advertised as proof
that no route exists outside the domain. Buffer sensitivity tests and expansion
are needed for boundary-affected scenarios.

The eight-direction grid introduces direction quantization. A curved-looking or
irregular freedom boundary is not by itself validation. No smoothing creates
unverified paths across barriers. Validation compares against shortest-path
costs and graph connectivity, not attractiveness of the rendered line.

The background is a hillshade **derived from the actual DTM**, replacing the
ungrounded browse-JPEG alignment. It is not a CTX photograph or a physical
sunlight model. Display lighting is only for readability. The preserved
original prototype and its external image references are under `web/` for
lineage; the new demo does not fetch or display those external images.

CTX post spacing does not establish effective terrain resolution or vertical
accuracy. Subcell rocks, sand strength, foot placement and suit hazards are
unresolved. HiRISE spot checks remain necessary; they also cannot certify human
walking. Perturbation/sensitivity scenarios are not probability/confidence
estimates without justified error distributions.

## Geology and source-native spectral evidence

USGS SIM 3464's official-owner ArcGIS feature service supplied 61 unit polygon
features and 90 contact features intersecting the buffered area. Original native
coordinates and descriptions are retained. Source projection is Mars-sphere
Transverse Mercator, central longitude 77.5; it is transformed to the CTX
projection for display. Unit labels are rasterized only for context lookup;
this does not create a 20 m geological map. The regional publication scale is
1:75000. Genuine overlapping units would be marked ambiguous (255); none were
found in this crop. Contact types 'certain' and 'approximate' are retained and
rendered solid/dashed. A 5 projected-meter simplification affects display lines
only, not the saved source geometry.

The USGS map service item says it is for viewing purposes and refers users to
the official GIS publication. Accordingly this release uses it for context
display/map-label lookup only, not geological movement penalties, contact
distance scores or validated geological analysis. Cross-checking the official
GIS archive remains a gate. A historical unit interpretation is not a current
surface observation, particularly where rover results may refine it.

The exact CRISM product is HRL000040FF_07_SU183J_MTR3, observed 2007-01-29.
Its native projected grid is 455 columns x 751 rows at 36 m map spacing, not
the nominal 32 m observation sampling cited in the literature. The 60-band
BSQ summary-parameter cube is 82009200 bytes. Only three complete float32
little-endian bands were obtained through verified HTTP byte ranges:
BD1900_2 (index 25), D2300 (39), BD2500_2 (45), indices zero-based.
NoData is 65535. Headers, PDS3/PDS4 labels, ranges, hashes and valid counts
are retained; full reflectance spectra were not ingested.

CRISM's equirectangular CRS uses sphere radius 3394839.813316312 m and standard
parallel 15 degrees, different from CTX. Each source is inverse-projected to
planetocentric latitude/east longitude before display on CTX. No Earth CRS or
direct copying of projected coordinates is used. Angular alignment is checked
against source metadata, not independently against common landmarks.

Lookup returns the containing original CRISM pixel, its zero-based row/column,
and the unmodified band values. No interpolation creates 20 m spectral detail.
Negative finite values are retained rather than clipped into false detections.
The overlay uses AOI percentiles 5 and 95 solely as a contrast stretch;
the pixel values remain unchanged. Geological and spectral overlays temporarily
hide the freedom fill, while calculated feasibility and routes remain available.

Three **review candidates**, not detections, are selected from high positive
3x3-native-pixel median BD2500_2 patches within the AOI, requiring valid values
in all three parameters, model-traversable CTX cells, and at least 500 m spacing.
This is a transparent exploratory heuristic, not a calibrated science utility.
BD1900_2 reflects a hydration-related spectral feature, not surface water;
D2300 and BD2500_2 are not unique mineral classifiers. Paired absorption shape,
full spectra, local background, artifacts, geology and registration need review
before claiming carbonate or choosing scientifically required stations. All
science evidence is independent of terrain costs and color classification.

## Validation and next gates

Seven terrain unit tests cover analytical flat costs, directed return, NoData barriers,
corner cuts, budget/reserve/dwell monotonicity, cross-slope blocking, and invalid
inputs. Artificial terrain appears only in explicitly labeled tests, never in
the Mars demo. On the real 413130-cell grid, Python and browser-engine JS produce
identical classification labels for the reference 300/72 min scenario. Route
edge sums and endpoint connectivity are checked independently.

Three additional source tests cover CRISM hashes/band identities, independent
projection bounds, geology labels and real candidate patch values: ten tests
total. The actual embedded JS additionally checks source-native lookup, missing
coverage and NoData. Static HTML checks verify controls and absence of external
loads. This is not a substitute for a real browser interaction test; that gate
was blocked by local-file navigation policy in the available browser.

Next gates: compare terrain against HiRISE/reference slope products using matched
baselines; confirm contextual geology against authoritative GIS; validate full
CRISM spectra and registration for candidate stations; add real Mars 2020 context;
test the complete interface in a browser. No validated life-support model,
mineral classifier or autonomous EVA decision authority is claimed.
