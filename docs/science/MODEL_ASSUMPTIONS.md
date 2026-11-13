# MarsFlex — Level 1 model assumptions / افتراضات النموذج

Version: v6 + Level 1 (API/package 0.7.0). Review date: 2026-09-28.

**الحالة العامة: تقريبي، غير معاير، قابل للمعايرة. لا توجد شهادة سلامة تشغيلية.**
No physiological coefficient in this release is calibrated for a suited human
walking on Mars. Software verification is not physiological validation.

## 1. What is measured, and what is assumed?

| Item | Value or implementation | Source | Status |
|---|---|---|---|
| Terrain elevations | Original CTX TRN 20 m grid | Existing NASA MRO / USGS source and SHA in API | Measured terrain product; not an astronaut obstacle survey |
| HiRISE local relief | Existing 1 m patches | Existing NASA MRO / USGS attribution | Display/reference only; unchanged |
| Distance | Great-circle distance on source Mars sphere, radius 3,396,190 m | Source grid metadata / geometry | Geometric calculation; numerical tests |
| Directional grade | atan2(height change, horizontal ground distance), degrees | Adjacent CTX cells | Derived from real elevations; subcell hazards unresolved |
| Admissible edges | Existing 8-neighbor graph, 20° grade/surface gates, no corner cutting | v6 scenario model | Gates **uncalibrated**, preserved rather than presented as EVA limits |
| Basal power | 150 W | User-proposed coefficient | **غير معاير**; not measured basal metabolism of a specific crewmember |
| Walking coefficient | 200 W per (m/s) | User-proposed coefficient | **غير معاير** |
| Uphill coefficient | 300 W per degree of positive grade | User-proposed coefficient | **غير معاير، لم أجد مصدرًا يثبت هذا المعامل** |
| Moving suit offset | 85 W | User-proposed coefficient | **غير معاير**; NOT 85 percent and NOT derived from SmartSuit results |
| Nominal flat speed | 0.5 m/s | Existing scenario | **غير معاير**; actual edge speed varies |
| Speed penalties | uphill 4; downhill 2, applied to rise/run | Existing scenario cost convention | **غير معاير**; not a fitted human speed law |
| Uniform soil slowdown | 1.0 by default; user may set >=1 | User scenario | **غير معاير**; 1 means no assumed extra slowdown, not confirmed firm soil |
| Torque mode | User supplies aggregate Nm, mean absolute rad/s and efficiency | Simplified mechanical-power identity + assumed efficiency | **غير معاير**; no default torque, no pressure/gait/cadence simulation |
| Stationary/task power | 150 W, editable | Explicit scenario assumption | **غير معاير**; does not establish cost of drilling, sampling, kneeling, etc. |
| O2 usable balance & reserve | No default | User must provide kg | Scenario input, not telemetry |
| O2 energy equivalent | No default, positive kJ/kg | User must provide and justify | **غير معاير**; no assumed respiratory quotient or automatic NASA calibration |
| Cooling-water conversion | No default, positive kg/MJ metabolic | User must provide and justify | **غير معاير**; not a heat-balance/sublimator model |
| Battery electrical load | No default, positive W | User must provide and justify | **غير معاير**; equipment power distinct from metabolism |
| Extra time contingency | 0 min default, explicitly visible | User policy | No automatically inferred reserve; 0 means none specified |

Missing inventories/conversions are **unknown**, not zero consumption and not safe.
Resources are usable remaining quantities, not total tank nameplate capacity.
Preserve required unusable/residual allowances when supplying usable balances.

## 2. Exact equations and units

For an edge of horizontal ground length d metres and signed grade angle theta:

```
g = tan(theta * pi / 180)
v = nominal_speed / [soil_factor * (1 + uphill_weight*max(g,0)
                                     + downhill_weight*max(-g,0))]
P = basal_W + walking_W_per_m_s*v + slope_W_per_degree*max(theta,0)
    + moving_suit_W
t_seconds = d / v
E_kJ = P * t_seconds / 1000
```

Downhill is not assigned negative metabolic energy. This is not a complete model
of downhill eccentric work, fatigue, body/suit mass or Martian gravity. There is
no subject-specific metabolic maximum; a computed route can have physiologically
implausible power. No feasibility output represents physiological clearance.
For example, at speed 0.5 m/s and grade 5°, the supplied **power law alone** gives
1835 W (before applying the separate grade-dependent speed rule). This illustrates
why 300 W/degree must not be described as an established physiological coefficient.
Flat ground at the default 0.5 m/s gives 335 W: 60 seconds consumes 20.1 kJ.
These are arithmetic consequences of assumptions, not observations of astronauts.

Two alternative suit modes:

- Offset: `moving_suit_W = suit_penalty_W` (85 W default).
- Torque: `moving_suit_W = aggregate_resisting_torque_Nm * mean_absolute_angular_speed_rad_s / efficiency`.
  All three inputs are required. Torque mode **replaces** the offset. It is a
  one-term approximation to joint work; it does not use a single hip torque as
  though that represented the complete suit. No motor assistance/battery model.

Dwell adds `dwell_power_W * dwell_seconds / 1000` kJ. Dwell does not use a walking
joint offset or uphill term. All ordered activities currently use this one entered
power; activity-specific physiology is deferred.

## 3. Resource accounting

```
oxygen_kg = E_kJ / oxygen_energy_kJ_per_kg
cooling_water_kg = (E_kJ / 1000) * cooling_water_kg_per_MJ
battery_Wh = equipment_power_W * duration_seconds / 3600
resource_margin = remaining - held_reserve - required
```

O2 accounting is metabolic only: no leaks, purge, pressure-control losses or CO2
scrubber capacity. Feedwater accounting is an explicitly supplied proportional
conversion: no solar load, conductive/radiative exchange, sublimator operating
limits, Mars atmospheric effects, or drinking-water/hydration prediction.
Battery accounting assumes constant electrical power, including during dwell;
there is no motor, state-of-charge, temperature or battery degradation model.

A resource budget without its coefficient is rejected with HTTP 422. A coefficient
without a balance can estimate demand, but feasibility for that resource stays
unassessed. Negative/nonfinite values and reserve > balance are rejected.

## 4. Dynamic return and its actual scope

`walk_back_limit` constructs a directed metabolic-energy graph and a directed time
graph from existing admissible CTX edges. It evaluates two return candidates:
minimum modeled energy and minimum modeled time. Among candidates satisfying all
**entered** constraints it selects minimum energy. If neither fits, it reports
candidate failure; this is **not proof** that no other multi-resource route fits.
An exhaustive constrained/Pareto route solver is not implemented.

At the current location, the additional stationary allowance before taking the
selected return is the minimum of:

- remaining time minus route time and extra time contingency;
- each entered resource margin divided by that resource's stationary consumption
  per minute at the entered dwell power.

A negative allowance is displayed as zero and budget violation remains explicit.
Missing resources produce `all_resources_fit: null` and
`status: incomplete_resource_inputs`, even when all entered constraints fit.
A zero-length return at the habitat has zero movement cost. An unreachable return
is reported as no route in the known grid; no invented distance/time is returned.

This is a **conditional stationary-time bound**, not a circular radius, not time
available for an arbitrary moving detour, and not the full V-SUIT walk-back model.
There is no time-dependent fatigue, adaptive telemetry or uncertainty guarantee.
All routes are confined to the raster; global reachability is not claimed.

## 5. Relationship to v6

The v6 72-minute value is a configured reserve, not a measured walk-back limit.
The new endpoint has its own explicitly entered extra time contingency, default 0.
It computes the current return requirement rather than substituting another fixed
number for 72. Existing `/v1/mission/evaluate`, the old blue/white routes, and
Green/Yellow/Red map remain **time-only** for backward compatibility. Their labels
are not relabeled as resource safety. The new panel displays separate metabolic
results and exports the new route coordinates and per-edge power/speed/energy.

The new endpoint also evaluates the existing **ordered** activity list and dwell
before returning. It does not distinguish optional/mandatory stops, recognize
completion while passing, use `(cell, completed_mask)`, or change mission state.
Those requested Level 3 changes are deferred. Level 2 is not implemented.

## 6. Audit of the submitted research claims

### SmartSuit: verified primary paper, but not calibration for this equation

Kluis and Diaz-Artiles, *Revisiting decompression sickness risk and mobility in the
context of the SmartSuit, a hybrid planetary spacesuit*, npj Microgravity (2021),
DOI: https://doi.org/10.1038/s41526-021-00175-3
Author-hosted copy:
https://bhp.engr.tamu.edu/wp-content/uploads/sites/212/2022/01/Kluis-2021-Revisiting-decompression-sickness-risk-and-mobility-in-the-context-of-the-SmartSuit-a-hybrid-planetary-spacesuit.pdf

Table 1 reports simulated 510 kcal/h unsuited and 942 kcal/h at 4.3 psia, with
799 kcal/h in its assisted case. The described assistance is up to **10 Nm** at
lower-body joints. The supplied update's assignment of 799 to 5 Nm does not match
this table. These are biomechanical simulation conditions, not generic metabolic
constants. The ratio 942/510 is about 1.847; this does not justify a fixed 85 W
term. **لم أجد في هذا المصدر إثباتًا لزوج 15 Nm / 700 kcal/h أو اعتماد 30 Nm
كمعامل شامل للبدلة.** A different primary source may exist; none is invented here.

### CSRM: architecture verified, not implemented or inherited

NASA NTRS 20250002103:
https://ntrs.nasa.gov/citations/20250002103
The paper abstract describes seven core EVA physiology domains and individualized
models built using training analog data. It reports <3% error for its thermal
regulation model. This accuracy belongs to that research and its validation
conditions, **not MarsFlex**. This release is not CSRM and does not reproduce it.

### V-SUIT and the quoted oxygen numbers: not accepted as calibration

The ICES 2018 official paper list identifies *EVA Walk-Back Limit Calculation Using
the Virtual Spacesuit*, paper 259:
https://ices.space/wp-content/uploads/2024/09/Paper-Reference-List-by-Session-FINAL-PDF.pdf
The institutional PDF retrieval did not succeed during this review. Secondary
index text describes 0.423 kg remaining after simulated return versus 0.394 kg
from planning. That is different from comparing oxygen consumed to oxygen
available. **لم أتحقق من النص الأصلي ومن نسبة المثال إلى Apollo 15**؛ لا تعتمد
هذه الأرقام في الكود، ولا يسمى النموذج هنا V-SUIT.

### 51 EVA / speed / fatigue claims

A publisher record was found for *Adaptive, empirical models from analog EVA
telemetry for traverse pacing and physiological response prediction in astronauts*:
https://www.sciencedirect.com/science/article/abs/pii/S0094576525007532
Its indexed abstract mentions 51 analog EVAs and says slope alone is insufficient.
Full text was inaccessible in this review. **لم أجد ما يكفي لاعتماد رقم «دقة 60%»
أو عتبة تعب عامة 120–180 دقيقة**. Neither is coded as a physiological law.

### Out of scope pending user approval

Terramechanics ranges, Lunokhod, Zhurong, MEDA, RIMFAX, MOXIE, radiation and LOS
claims are not validated or implemented in this Level 1 delivery. No geology
polygon is converted into measured soil strength. No subsurface/weather layer is
fabricated. These topics cannot silently affect current routing decisions.

## 7. Verification and attribution

`tests/test_metabolic.py` uses explicitly synthetic numerical fixtures to test
arithmetic, directionality, missing resources, exact margins, NoData and API
validation. Those fixtures never replace NASA map data. Real-grid API tests use
the retained source hash. Automated tests verify code; they do not calibrate a
human/suit model or certify a mission.

Code remains Apache-2.0. Existing `ATTRIBUTIONS.md` and `THIRD_PARTY_NOTICES.md`
remain authoritative for imagery, terrain and dependencies. The literature is
cited for research context; no paper, image or proprietary model is redistributed
or copied into the implementation.

## 8. v0.8.0 — MEDA archived environmental context (2026-09-29)

This section supersedes the earlier statement that MEDA is entirely out of scope.
Only archived MEDA context is implemented. RIMFAX, MOXIE, environmental routing,
weather prediction and spatial interpolation remain outside this release. The
routing graph, costs, colors and physiological resource calculations are unchanged.

### Attribution and authoritative source

J. A. Rodriguez-Manfredi et al. (2021), *The Mars Environmental Dynamics Analyzer,
MEDA*, NASA Planetary Data System, DOI: https://doi.org/10.17189/1522849

- Instrument and collection guide:
  https://pds-atmospheres.nmsu.edu/data_and_services/atmospheres_data/PERSEVERANCE/meda.html
- Versioning, gaps and reliability guidance:
  https://atmos.nmsu.edu/PDS/data/PDS4/Mars2020/mars2020_meda/readme.txt
- Derived collection and inventory:
  https://atmos.nmsu.edu/PDS/data/PDS4/Mars2020/mars2020_meda/data_derived_env/
  https://atmos.nmsu.edu/PDS/data/PDS4/Mars2020/mars2020_meda/data_derived_env/collection_meda_data_derived_env_inventory.csv
- Calibrated collection and inventory:
  https://atmos.nmsu.edu/PDS/data/PDS4/Mars2020/mars2020_meda/data_calibrated_env/
  https://atmos.nmsu.edu/PDS/data/PDS4/Mars2020/mars2020_meda/data_calibrated_env/collection_meda_data_calibrated_env_inventory.csv

Instrument calibration is the PDS product's processing status; it does not
calibrate MarsFlex physiology or certify a Marswalk. Code remains Apache-2.0.
The cached numeric extracts are attributed to MEDA/PDS and are not original
MarsFlex measurements. No instrument image or paper is redistributed.

### Implemented quantities and limits

| Channel | Collection / source column | Display | Limitation |
|---|---|---|---|
| Pressure | Derived PS / `PRESSURE` | Pa | Product-derived pressure, no weather extrapolation. The uncertainty column is not used; the inspected label inconsistently calls its unit kelvin. |
| Local air temperature | Calibrated ATS / `ATS_LOCAL_TEMP1` | K | One mast detector, not a fused ambient-temperature estimate; rover thermal bias is not corrected here. |
| Horizontal wind | Derived WS / `HORIZONTAL_WIND_SPEED` | m/s | Exclude pre-sol-36 data and moving-rover rows; do not substitute calibrated data for missing derived wind. Wind direction is not interpreted. |
| RDS context | Calibrated RDS / `RDS_TOP_7` | W/m² | Radiance integrated over detector field of view, regular-gain channel only. Not dust mass, concentration or optical depth. |
| Dust concentration / optical depth | None imported | Missing | **لم أجد قيمة غبار كمية جاهزة في المنتجات المستوردة.** No radiation-to-dust conversion is invented. This is not a claim that no dust retrieval exists elsewhere. |

For RDS, known rover motion or known antenna motion is excluded. Blank antenna
flags are retained and explicitly labeled **unknown**, with per-product counts;
they are not treated as good conditions. Therefore antenna contamination cannot
be ruled out. The latest reading includes original available flag values. Wind
also retains the source boom-use flag without interpreting an empty flag as
one or two booms. No residual observation is declared safe for navigation.

### Coverage, latest readings and time

Inventory checked 2026-09-29: latest listed pressure, ATS and RDS products are
sol 1859; the latest listed derived wind product is sol 315. Inspection found
no valid wind-speed values in sols 314–315 (invalid sentinels); sol 313 contains
retained wind observations. Do not present these different epochs as concurrent
weather. Each channel returns its own latest retained sample **within the
selected sol range**, including LMST and SCLK. A missing channel stays missing.
The wind shortcut selects the latest cached sol containing retained wind.

Bundled cached coverage is **sols 313, 314, 315, 1858 and 1859**, not a continuous
mission archive. Source UTC boundaries, exact product identifiers/versions,
source URLs, SHA-256 hashes and retention counts are included in each cached
product and the API response. For example the sol-1859 pressure product spans
2026-05-13T06:57:14.732Z to 2026-05-14T07:36:49.438Z. These are product boundaries,
not invented UTC timestamps for every row. No SCLK-to-UTC conversion is attempted
without the appropriate SPICE processing. Selection is by Martian mission sol;
plots are binned by local mean solar hour (LMST), not Earth UTC hour.

The observations were made at Perseverance's site at their respective times.
MarsFlex does not assign them to the user-selected map point or infer a regional
weather field. Current rover coordinates are not substituted for historical
coordinates. No spatial weather overlay is drawn; the layer is a context drawer
with a map badge reading `Weather context: archived`.

### Processing and API behavior

`meda_archive.py` retrieves PDS XML labels and CSVs. It selects the highest
filename version in each source directory, reads fields and byte offsets from
the label, checks table record/field counts, checks the label's MD5 where present,
and records SHA-256 hashes of both source files. Empty, nonfinite, large invalid
sentinels and physically invalid nonpositive pressure/temperature or negative
horizontal speed are omitted. No gaps are interpolated and no missing value
is changed into zero. Hourly sample means, observed minima/maxima and sample
counts are arithmetic summaries, not continuous hourly coverage or forecasts.
The latest card uses a retained source sample, not the mean.

`GET /v1/environment/meda` defaults to the latest pressure sol in the saved
inventory. `?start_sol=313&end_sol=315` selects an inclusive range of at most seven
sols. Cached selections work offline; other selections download their available
PDS products and cache verified extracts. `refresh=true` rechecks both inventories
and the requested products. Network failures are reported as failures/partial
downloads, never fabricated weather. The inventory-check timestamp is always
returned; “latest” refers to that checked archive, not to live conditions.
All responses carry `archived observation, not live weather`. This endpoint has
no access to the routing compute lock or terrain cost model.

### Level 1 wording clarification

The UI now explicitly labels basal 150 W and walking 200 W/(m/s):
**سيناريو معلن، غير مشتق من مصدر منشور** / **Declared scenario, not derived from a
published source**. Neither is attributed to Kluis & Diaz-Artiles. The v0.7.1
paper-derived offset remains a separately disclosed, uncalibrated transfer
assumption. No Level 1 numerical parameter changed in this release.

## 9. v0.9.0 — required and negotiable activities (2026-10-01)

Each activity has `type: "required" | "negotiable"`. Omission defaults to
`required`, including legacy v6 API requests. New UI activities also start as
required. Unknown type values are rejected; a missing type never grants permission
to drop a task. The operator sets this classification; no LLM assigns it.

Both mission endpoints return normalized `activities` and `activity_suggestion`.
If the submitted mission fits its assessed constraints, no reduction is proposed.
Otherwise, only subsets of negotiable activities may be removed in advisory
calculations. Every required activity and the relative order of retained activities
are preserved. With the existing limit of six activities, at most 63 nonempty drop
subsets are examined. Search stops at the smallest drop count yielding a fitting
candidate. Among those candidates the shortest duration is chosen; exact ties use
original activity order. This is an explicit software policy, **not** a calibrated
science-value ranking or NASA operational rule.

For the time-only endpoint, subset costs use the unchanged directed terrain graph,
activity dwell times and held reserve. A queried detour is not part of this
suggestion: the suggestion concerns the original itinerary from crew to habitat.
For the metabolic endpoint, each subset uses the existing minimum-energy and
minimum-time route candidates and the same entered resource constraints. As in
Level 1, the fitting energy-minimum candidate is selected within each subset;
subset tie-breaking uses that candidate's duration. Missing resources stay
unassessed, so a proposal is not a complete consumable clearance. Failure of the
candidate search is not proof that every multi-resource route is impossible.

A proposal always has `applied: false`. The UI displays candidate numbers and task
IDs, but does not remove any task, replace any route, recolor the field, or update
the active mission from a proposal. The user may manually remove the suggested
negotiable stops and recalculate. Required stops remain manually editable/removable
by the operator; they are never dropped by the suggestion algorithm. Existing
input-change invalidation hides stale results until recalculation.

The displayed route and Green/Yellow/Red field continue to evaluate **all submitted
activities**, irrespective of type. Therefore yellow remains the existing time-only
classification; it does not certify that a negotiable-only reduction exists.
Required/negotiable tags alone do not change the graph, costs, route geometry,
field bytes, or MEDA data. Auto-completion while passing, completion masks, activity
reordering, autonomous replanning and environmental route effects are not added.

Context reference, not an adopted operational standard: NASA's description of EVA
planning discusses task priorities, task duration and other planning constraints:
https://www.nasa.gov/blogs/spacestation/2018/05/15/what-does-it-take-to-prepare-for-a-spacewalk/
MarsFlex's two labels and reduction policy are project design choices.

MEDA's only UI change is the requested sentence:
“Dust concentration not derived from RDS. Radiation index shown as-is.”
The displayed RDS quantity remains the existing radiance integrated over detector
field of view in W/m²; no new radiation index or dust conversion is computed.


### Suggestion policy clarification — UI/documentation update (2026-10-01)

This documents the existing `suggest_negotiable_drops` implementation in
`api.py`; it does not change the algorithm. Its criterion is a software design
choice, not a paper-derived scientific value, NASA priority, or physiological
calibration. No scientific-value scores exist in this selection.

**Selection sequence:**

1. If the full submitted itinerary fits the assessed constraints, suggest no
   removals (`not_needed`). If it does not fit and there are no negotiable
   activities, return `no_negotiable_activities`.
2. Enumerate groups containing one negotiable activity, then two, and so on.
   Evaluate every group at the current size before choosing. Required activities
   always remain, and retained activities keep their original relative order.
3. Stop at the first group size with any fitting candidate. Thus the result is
   one group with the **minimum sufficient number of removals within the existing
   candidate evaluation**, not all negotiable activities by default and not the
   first fitting combination encountered.
4. Among fitting groups of that size, choose the smallest `duration_min` for the
   remaining candidate itinerary: travel plus retained activity dwell time.
   Held reserve/time contingency affects feasibility; it is not included in this
   duration ranking. No mineralogical, geological, activity-name or activity-ID
   weighting is used.
5. For exactly equal numeric durations, compare the tuples of **dropped original
   activity indices** lexicographically, smallest first. For example, for
   `[Required, A, B]`, where A and B are negotiable and either single removal
   gives the same fitting duration, suggest dropping A. For pairs, `(1, 4)`
   precedes `(2, 3)`. Earlier list position therefore favors **removal** on an
   exact tie; it does not confer higher priority or protection. There is no
   tolerance-based tie rule: displayed rounded durations can look equal while
   the underlying numbers differ.

**Limits and user control:** If there are `k` negotiable activities, the maximum
number that may be suggested for removal is `k`, potentially all of them. There
is no additional configurable drop-count cap. The API accepts at most six
activities in total, so `k <= 6`; at most `2^k - 1` nonempty removal groups are
evaluated (63 when all six are negotiable). **63 is a search-count bound, not a
number of activities to drop.** If no group fits, return
`no_feasible_negotiable_drop`; never remove a required activity to force a fit.
The returned group is listed in original activity order, not an ordered procedure
of successive removals. Only one proposal is returned. `applied: false` means
that the user decides whether to accept it through manual edits and recalculation.

**Scope of “minimum”:** For the time-only endpoint, each retained itinerary uses
the existing directed terrain routing and time-budget checks. A separately
queried detour is excluded. For the metabolic endpoint, each retained itinerary
has the existing energy-objective and time-objective candidates. Among fitting
candidates for that subset, the implementation selects lowest energy first;
the outer removal-group ranking then uses that selected candidate's duration.
This is not a search of every possible multi-resource route or a guarantee of
physiological feasibility. Unentered resources remain unassessed. All claims
about minimum removals are limited to those implemented candidate checks.

The visible suggestion panel states:
“Suggestion based on minimum negotiable drop count, then candidate duration,
then original list order for exact ties. Not a scientific value ranking.
User decides.”
It also explicitly states that exact ties favor dropping earlier-listed
negotiable activities. This update changes only UI wording, styling and this
explanation. MEDA, route calculation, color logic, activity completion and
replanning behavior are unchanged.

## 10. v0.10.0 — evidence-led science mission (2026-10-03)

### What the new scientific integration means

Three curated historical sampling locations now come from Mars 2020 Initial
Reports, Volume 2, Delta Front Campaign, release 3.1. Source citation:
K. A. Farley and K. M. Stack, Mars 2020 Science Team (2023), NASA PDS,
https://doi.org/10.17189/49zd-2k55 . Archive description:
https://pds-geosciences.wustl.edu/missions/mars2020/returned_sample_science.htm .
The archive calls these preliminary, near-real-time records whose interpretations
may be revised. They are not treated as final mineralogical ground truth.

`data/derived/science_targets.json` retains the original PDF URL, SHA-256, byte
count, retrieval date, page references, curated coordinates and paraphrases.
The coordinates were transcribed and checked against the original PDF pages:

| Site / sample | Longitude E | Latitude N | Sol | Printed / PDF page |
| --- | --- | --- | --- | --- |
| Swift Run / M2020-490-11 | 77.40617078 | 18.458931 | 490 | 11-1 / 14 |
| Hazeltop / M2020-509-14 | 77.40588851 | 18.45863707 | 509 | 14-1 / 58 |
| Shuyak / M2020-575-16 | 77.40143171 | 18.45068954 | 575 | 16-1 / 100 |

The Swift Run page header says 495, while the designation and sealing-sol fields
both say 490; MarsFlex preserves the latter and records the discrepancy.
Sample locations are not cache/depot retrieval instructions or authorized sampling
areas. Coordinates alone do not identify a safe astronaut workspace.

The evidence chain is: Mars 2020 historical sampling site selects a destination;
MRO CTX supplies the routing terrain; MRO CRISM supplies source-native spectral
summary parameters at that coordinate; USGS supplies a regional mapped unit;
PDS PLACES supplies the nearest archived rover localization and its actual sol.
Proximity is not proof that the queried spot was observed. The PLACES record
need not be on the sample acquisition sol. CRISM's source pixel may mix materials,
and its values are not calibrated against these sample interpretations.

The questions and proposed field observations are **MarsFlex author proposals**,
not NASA EVA tasks, measured scientific benefit or automatically inferred facts.
No numerical science-value ranking is introduced. The two default activities
(Swift Run and Hazeltop) remain `required`, with 15 minutes each as a declared
scenario duration. Shuyak is available for an explicitly chosen additional visit;
added activities default to required and use the user's declared stop duration.
Crew position, habitat, available time and reserve are scenario choices.
Actual costs and paths continue to come from the existing CTX graph.

### HiRISE source coverage along the mission

Two more source-native 1 m DTM patches were downloaded at Skinner Ridge and
Amalik using verified byte ranges from the same official USGS TRN HiRISE product.
The existing three reference patches are retained. Each new patch has 401 x 401
native posts, its TIFF SHA-256 and per-range receipts; no elevation is fabricated.
`validate_hirise.py` reproduces all five patch comparisons. The additional patches
are available as genuine surfaces in the Three.js terrain/section viewer.

For route coverage, each 20 m comparison cell is included only when both CTX and
averaged HiRISE elevations are finite and its reference valid fraction is at
least 0.99999, following the existing comparison procedure. The union of those
cells is intersected with each route segment. The intersection's map-length
fraction scales that edge's spherical ground length. This is a local 20 m-edge
approximation, not a global geodesic clipping method. Repeated traversal counts
again, overlapping patches are unioned, and missing or zero-length routes return
an undefined percentage. Mission and current-return routes are reported separately.
A queried detour has no new HiRISE coverage metric in this release.

Coverage means **a loaded comparison exists**, not validated traversability.
HiRISE TRN was aligned to CTX and is not independent absolute validation.
Only the five loaded patches count, not the entire source raster footprint.
Dashed outlines show their valid comparison-cell boundaries. At regional scale,
marker labels within 60 m are grouped for legibility; calculation coordinates
remain distinct. The pre-existing 25 cm image is shown only when the selected
point is inside its loaded footprint; the new 1 m DTM patches do not imply new
25 cm image coverage.

### API, interface and remaining limitations

`GET /v1/science/targets` returns curated targets, native source evidence,
routing-cell displacement and loaded reference outlines. `POST /v1/mission/evaluate`
adds `evidence_brief`, which is included in JSON export. Historical target names
are attached only to exact curated coordinates (1e-9 degree comparison tolerance);
a matching activity name alone cannot claim that provenance. Editing inputs hides
stale results. Switching workspaces preserves the mission draft for this session.

The map, required/negotiable policy, graph costs and MEDA calculations are unchanged.
The physiology tool remains an explicitly experimental legacy scenario. Its
300 W/degree coefficient has no verified physiological basis and is **not fixed
or validated by this release**; the UI says so prominently. No new physiological
law, terrain safety certification, live weather, pass-by completion or autonomous
replanning is claimed. Sensitivity analysis is still pending; this version does
not label any area robust or assign probabilities to it.

## Final review scope — 2026-10-05

No physiology coefficients, terrain cost, color rule or thresholds changed. UI wording now calls the calculation a scenario and names archived RDS TOP7 radiance. It explicitly does not derive dust concentration or certify small-obstacle clearance. The conditional sensitivity core covers only162 computed cases at15°/20° gates; 81 cases at10° reject required Hazeltop. All assumed ranges and local HiRISE scope are consolidated in HANDOFF.md. The fresh installation/test records prove software behavior only, not human mission safety.
