# Sources and status — 25 September 2026

## Ingested

- USGS Astrogeology Science Center, Fergason et al. (2020), Mars 2020 Terrain
  Relative Navigation CTX DTM Mosaic. Product page:
  https://astrogeology.usgs.gov/search/map/mars_2020_terrain_relative_navigation_ctx_dtm_mosaic
- Official public archive directory (contains TIFF and labels):
  https://asc-pds-services.s3.us-west-2.amazonaws.com/mosaic/mars2020_trn/CTX/index.html
- Exact file:
  https://asc-pds-services.s3.us-west-2.amazonaws.com/mosaic/mars2020_trn/CTX/JEZ_ctx_B_soc_008_DTM_MOLAtopography_DeltaGeoid_20m_Eqc_latTs0_lon0.tif
- Generation paper: Fergason et al., LPSC 2020 abstract 2020:
  https://www.hou.usra.edu/meetings/lpsc2020/pdf/2020.pdf

The planetarymaps.usgs.gov file request returned HTTP 403 in this environment.
The documented official archive copy downloaded successfully, 9662387 bytes.
SHA-256: `16a1aa66c3f48c1bca252795827db7b417876217aff0f5e1aff18027fab2327b`.
Actual TIFF metadata and PDS label were read. The metadata page requests author
citation and lists no access constraints. Preserve this attribution; Apache-2.0
applies to original MarsFlex code, not a relicensing of external data.

### Ingested regional geological context

Sun & Stack (2020), USGS SIM 3464, scale 1:75000:
https://pubs.usgs.gov/publication/sim3464

Official-owner feature service (item owner `mahunter@usgs.gov_USGS`):
https://services.arcgis.com/v01gqwM5QqNysAAi/arcgis/rest/services/Jezero_FeatureServiceFromPro/FeatureServer

Item b602bd9a573d447eb07388e5fb9ca884; layer 5 contacts (90 intersecting features),
layer 8 units (61 features). Service/item/layer metadata and original queried
features are retained. Native Mars Transverse Mercator projection is inspected.
Nine unit labels intersect the crop; no overlapping display-grid cells detected.
The item says **viewing purposes only** and points to official GIS products;
this milestone uses the service for contextual display/map-label lookup only.
Authoritative GIS comparison, quantitative contact analysis and geological
movement penalties are not implemented.

### Ingested CRISM native summary parameters

Exact source directory:
https://pds-geosciences.wustl.edu/mro/mro-m-crism-5-rdr-mptargeted-v1/mrocr_4001/mtrdr/2007/2007_029/hrl000040ff/

Exact cube filename: `hrl000040ff_07_su183j_mtr3.img`.
Product HRL000040FF_07_SU183J_MTR3, observed 2007-01-29, native projected
grid **36 m**, 455 columns x 751 rows, 60 BSQ float32 bands, NoData 65535.
Retained header, PDS3 label and PDS4 XML. Downloaded **three entire native bands**,
not the whole cube: BD1900_2, D2300, BD2500_2. Their byte ranges, full hashes,
valid counts and source URL are in `data/source/crism_manifest.json`.
There are 56,824 native pixels with valid values for these parameters within
the AOI. Display/lookup does not interpolate this into 20 m spectral detail.
PDS parameter definitions:
https://pds-geosciences.wustl.edu/missions/mro/crism_summary_parameter_reference.pdf

CRISM CRS radius 3394839.813316312 m, standard parallel 15 degrees, differs
from CTX. Angular coordinates are preserved when placing it on the CTX grid;
landmark-based registration remains pending. Spectral review candidates are
explicit exploratory selections, not mineral confirmations or NASA targets.

## Supporting references and remaining layers

1. HiRISE TRN DTM: nominal 1 m posts. Controlled imagery: 0.25 m pixels.
   https://astrogeology.usgs.gov/search/map/mars_2020_terrain_relative_navigation_hirise_dtm_mosaic
   https://astrogeology.usgs.gov/search/map/mars_2020_terrain_relative_navigation_hirise_orthorectified_image_mosaic
   Descriptions also mention an orthographic operational product, while published
   raster metadata lists equirectangular exports; inspect the actual chosen file.
2. USGS SIM 3464, Sun & Stack (2020), regional geology, **1:75000**:
   https://pubs.usgs.gov/publication/sim3464
   https://pubs.usgs.gov/sim/3464/sim3464_pamphlet.pdf
   Distinct from the Mars 2020 science-team **1:5000** mapping. Feature-service
   context is ingested as detailed above; official GIS validation is pending.
3. CRISM product documentation, current PDS4 TER/MTRDR organization:
   https://pds-geosciences.wustl.edu/missions/mro/crism.htm
   Band and missing-value definitions were taken from the actual downloaded
   metadata. Observation ID alone is not a full product identifier.
4. Tarnas et al. (2021), carbonate-bearing rocks inside/outside Jezero:
   https://doi.org/10.1029/2021JE006898
   Reports HRL000040FF at 32 m/pixel, alongside other images. The selected
   projected MTRDR grid is actually 36 m. The paper supports observation choice,
   not every selected point's mineralogy.
5. Goudge et al. (2015), watershed and fan mineralogy:
   https://doi.org/10.1002/2014JE004782
6. Mars 2020 PLACES archive and DOI:
   https://pds-geosciences.wustl.edu/missions/mars2020/places.htm
   https://doi.org/10.17189/btz6-5a82
   Localization and mechanism-position records, not a standalone mineral
   validation layer or a human traversal benchmark.
7. MEDA instrument scope:
   https://science.nasa.gov/mission/mars-2020-perseverance/science-instruments/
8. THEMIS brightness-temperature algorithm:
   https://pds.nasa.gov/data/ody-m-THEMIS/document/BrightnessTempRecord.pdf
   No live AOI weather/temperature is inferred here.
9. Terrain-quality study, Kirk et al. (2021):
   https://doi.org/10.3390/rs13173511
   https://www.mdpi.com/2072-4292/13/17/3511
   Effective resolution, accuracy, and sample spacing are distinct.

## Prior art and competition

- Mars Trek analysis capabilities:
  https://trek.nasa.gov/mars/jpl/config/textAbout.html
- Deans et al., Traverse Planning with Temporal-Spatial Constraints (2017),
  reachability and xGDS:
  https://ntrs.nasa.gov/citations/20170010241
- Broddrick et al. (2024), science decision-making optimization and mid-EVA
  replanning; read full two-page abstract:
  https://ntrs.nasa.gov/api/citations/20240000165/downloads/Broddrick_LPSC_24_abstract.pdf
- Marquez et al. (2019), Minerva / xGDS / Playbook / SEXTANT:
  https://doi.org/10.1089/ast.2018.1838
- NASA Perseverance AI-planned drive announcement, January 30, 2026:
  https://www.nasa.gov/centers-and-facilities/jpl/nasas-perseverance-rover-completes-first-ai-planned-drive-on-mars/
- Space Apps 2026 challenge list:
  https://www.spaceappschallenge.org/2026/challenges/
  User-supplied 12-page PDF was read in full; challenge appears on pp. 9–10.
  Direct live fetch failed, so the supplied PDF is the basis for exact brief
  wording. Full challenge-specific resource page was not independently retrieved.
- Official legal page:
  https://www.spaceappschallenge.org/legal/
  Indexed official text confirms OSI open-source requirement and Apache 2.0
  fallback. Prefer an explicit license regardless.
- Submission guidance:
  https://www.spaceappschallenge.org/resources/project-submission-guide/
  Records code, text and image resources and permits AI assistance. Date-specific
  submission instructions still need a final event-time check.

Search results also surfaced NASA AEGIS as a potentially close comparator;
direct repository access failed. This is a follow-up lead, not a fully reviewed
prior-art claim. No exhaustive novelty search or "first-ever" claim is made.

Local Jordan scoring headings come from the user/handoff, not from independently
retrieved local rules. No points, win probabilities, or verified team eligibility
are invented.


## v3 data-foundation additions

- USGS Astrogeology STAC API: https://stac.astrogeology.usgs.gov/api
  Query scope: current AOI, four explicitly listed collections. The complete
  paginated snapshot has 145 items (103 uncontrolled HiRISE images, 4 HiRISE
  SOCET DTMs, 36 CTX DTM products and 2 THEMIS IR mosaics). Metadata and asset
  links are retained, not all raster bytes. Per-item source licenses are retained.
  Several WKT strings are malformed; two THEMIS items have inconsistent bounding
  boxes and reversed date intervals. Footprint geometry is separately checked.
  No retrieved STAC item is automatically approved for routing.
- PDS Mars 2020 PLACES: `best_tactical.csv` plus its PDS4 label, view metadata
  and SIS. https://pds-geosciences.wustl.edu/missions/mars2020/places.htm
  Exact bytes, row count, LIDVID, hashes and retrieval dates are retained.
  666 source rows; 577 ROVER records with nonnegative sols; 339 inside the AOI.
  SITE frames and records without a known sol are not displayed as rover visits.
  Drive-zero convenience entries remain identified. Elevations originate from
  the HiRISE base DEM and cannot independently validate that DEM.
- Official HiRISE TRN source: original header and three native-resolution patches
  from the public USGS archive. The complete file is 1,839,545,409 bytes and is
  not bundled. `hirise_validation.json` records exact verified ranges and hashes.
  USGS metadata describes alignment to CTX; comparisons are consistency checks.
- Newer western extension release (identified, not ingested): USGS 2025,
  https://doi.org/10.5066/P13CPYYU . This is not implicitly covered by the STAC
  snapshot or by the older TRN patch comparison.

`catalog.json`, `places.json`, `catalog_report.json` and
`evidence_coverage_report.json` document availability and processing boundaries.
The 500m rover-context proximity flag is a design choice, not sensor coverage.

## v4 imagery used directly in the map

USGS Mars 2020 TRN archive:
- CTX `JEZ_ctx_B_soc_008_orthoMosaic_6m_Eqc_latTs0_lon0.tif`: native 6 m
  grayscale pixels, 36,269,402 source bytes, original CRS matches the routing DTM.
  Full source retained; display resampled bilinearly to aligned 5 m posts and
  stretched at P1/P99. This does not create 5 m source resolution.
- HiRISE `JEZ_hirise_soc_006_orthoMosaic_25cm_Eqc_latTs0_lon0_first.tif`:
  1024×1024 native 25 cm pixels around 77.385°E, 18.501°N. Verified source byte
  ranges, retained patch GeoTIFF, original TIFF header and range receipts.
  P1/P99 display stretch. One 256×256 map-metre patch, not full-AOI imagery.

Exact URLs, CRS, bounds, transforms, hashes and stretches are recorded in
`data/derived/imagery_manifest.json`. The native HiRISE imagery is not passed to
terrain routing as a measured obstacle or roughness classifier.

`map_layers.json` specifies display legends. CRISM visualization uses nearest
native pixels and P5/P95 color stretching; raw signed values remain in the API.
Geologic contacts remain contextual source-service interpretation.

## Radiation context (added in the pre-submission improvement pass)

The radiation card uses **one published measurement**, scaled linearly by walk duration (`backend/marsflex/radiation.py`,
`GET /v1/environment/radiation`):

- Galactic-cosmic-ray dose equivalent on the Martian surface, about **0.64 mSv/day** (cruise value 1.84 mSv/day), measured by the
  Radiation Assessment Detector (RAD) on the Curiosity rover at Gale crater. Hassler, D. M. et al. (2014), *Mars' surface radiation
  environment measured with the Mars Science Laboratory's Curiosity rover*, Science 343, 1244797. https://doi.org/10.1126/science.1244797
- NASA career effective-dose limit of **600 mSv** (NASA-STD-3001). NASA Office of the Chief Health and Medical Officer,
  radiation protection technical brief: https://www.nasa.gov/wp-content/uploads/2023/03/radiation-protection-technical-brief-ochmo.pdf

Limits (also shown in the app): measured at Gale, not Jezero (Jezero is higher, so a somewhat higher dose is expected; not modelled);
galactic cosmic rays only, solar particle events are not modelled; measured inside the rover, so spacesuit shielding is not modelled.
This is scenario context, not a dose prediction or operational guidance. Radiation is not used by routing or the green/yellow/red field.

## Global Mars globe texture (Viking MDIM 2.1)

The Globe view uses the **Viking MDIM 2.1 Colorized Global Mosaic, 232 m/pixel** (USGS Astrogeology Science Center, NASA Ames originator;
public domain): https://astrogeology.usgs.gov/search/map/mars_viking_colorized_global_mosaic_232m
The 12.7 GB source GeoTIFF (92160 × 46080, simple cylindrical, Mars 2000 sphere) is not stored in git. `backend/pipeline/build_globe_texture.py`
area-averages it to `data/derived/mars_globe_viking_6k.jpg` (6144 × 3072) with a JSON receipt (`mars_globe_viking_6k.json`, SHA-256 included).
The globe is context only: it is a coarse colour image on a sphere, without relief. Routing, slopes and all measurements use the CTX/HiRISE products above.
The credit "Globe: USGS / NASA Viking MDIM 2.1" is shown in the viewer.

## Life support: oxygen and reference-suit endurance

`backend/marsflex/life_support.py`, `POST /v1/mission/life-support`. Each relation is published; the combination is a planning scenario.

- **Walking power:** Pandolf, K. B., Givoni, B. & Goldman, R. F. (1977), *Predicting energy expenditure with loads while standing or walking
  very slowly*, Journal of Applied Physiology 43(4), 577–581. M = 1.5W + 2.0(W+L)(L/W)² + η(W+L)(1.5V² + 0.35VG). Terrain factors 1.0 / 1.1 / 1.2 / 1.5.
  Measured at Earth gravity on unsuited subjects; known to under-predict at high loads and speeds. Downhill grades get no credit.
  A declared suit offset (the project's existing (799 − 510) kcal/h contrast, 335.87 W) is added; it is not a measured Mars-suit cost.
- **Oxygen from energy:** energy equivalent of O₂ at STP, 4.69 kcal/L (RER 0.70) to 5.05 kcal/L (RER 1.00), about 4.8 kcal/L for a mixed diet
  (standard respiratory-quotient tables; Weir 1949, https://doi.org/10.1113/jphysiol.1949.sp004363); O₂ density 1.429 g/L at STP.
  Go/no-go decisions use the low equivalent (more O₂ per kJ).
- **Reference suit:** NASA (1992), *Suited for Spacewalking: A Teacher's Guide with Activities*, EP-279 (https://ntrs.nasa.gov/citations/19930004504):
  ISS/Shuttle EMU primary oxygen 0.54 kg, "enough for a normal seven-hour EVA"; a secondary pack for about 30 minutes of emergency use
  (reported, never counted for planning). No Mars-suit capacities are published, so the EMU is a reference only.
  Cooling water and battery capacities: no source found, so they are left empty.
- **Consistency check:** 0.54 kg O₂ over 7 h corresponds to an average of about 300 W, a plausible EVA metabolic rate.
- **Not modelled:** Mars gravity, suit mobility beyond the offset, leakage and purge, CO₂ scrubbing, cooling water, battery, thermal load, fatigue.

## Mission Site Advisor (suitability map)

`backend/marsflex/site_advisor.py`, `POST /v1/sites/score`. No new data: it combines the layers already listed above on the 20 m CTX grid.
Traversability = 1 − slope / 20° gate. Safety margin = 1 − the most limiting of (round trip + 30 min stop + reserve) / time budget,
round-trip O₂ / reference-suit O₂, and round trip / reference-suit EVA time (0 if any exceeds 1). Science = 45% proximity to a PIXL-sampled
target (Mars 2020 Initial Reports, e-folding 300 m), 35% CRISM summary-parameter strength (max of BD1900_2, D2300, BD2500_2 after the
published P5–P95 display stretch), 20% within 500 m of a recorded Perseverance position (Mars 2020 PDS places). Default weights 25/25/50 are a
declared team choice, shown in the app and adjustable. The advisor ranks planning candidates; it does not identify minerals or certify safety.
