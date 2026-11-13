# Attributions

Original project concept, scenario and supplied prototype: MarsFlex team / user.
Terrain preprocessing, directed routing worker, checks and v2 integration:
MarsFlex development with OpenAI ChatGPT/Codex assistance, 24–25 September 2026.
No Claude coding work was performed in this session. Do not list an AI system
as a human teammate or imply NASA reviewed/approved the software.

External terrain: USGS Astrogeology Science Center / NASA Mars Reconnaissance
Orbiter / CTX, Fergason and collaborators (2020). See DATA_SOURCES.md.
Derived elevation crop, slope, hillshade and route fields: computed by MarsFlex
from that terrain. The hillshade is a visualization, not new observed imagery.

Geology: Sun, V.Z., and Stack, K.M. (2020), Geologic map of Jezero crater and
the Nili Planum region, Mars, USGS SIM 3464, scale 1:75000,
https://doi.org/10.3133/sim3464. Display data: USGS-owned Jezero feature service,
item b602bd9a573d447eb07388e5fb9ca884. Original unit text and source contact
certainty are retained. The service's viewing-purpose scope is disclosed.

CRISM: NASA / MRO / CRISM instrument team and PDS Geosciences Node, Washington
University in St. Louis. HRL000040FF_07_SU183J_MTR3, observation 2007-01-29.
Three complete native summary-parameter bands are distributed as byte-exact
subsets with labels and SHA-256, not as the complete spectral product.
Summary-parameter definitions are attributed to the CRISM/PDS documentation;
see DATA_SOURCES.md. Display contrast and candidate review selection are
MarsFlex-derived and must not be attributed to NASA as mineral detections.

The new self-contained demo loads no external photograph, logo, font or JS
library. It uses browser built-ins and original worker/app code. It preserves
the layout of the user-supplied prototype. `frontend/legacy/prototype_original.html` is the
unaltered reference; its Wikimedia basemap and NASA PIA23239 inset URLs remain
in that reference only. Their geographic registration and redistribution rights
have not been independently completed for reuse in the new demo. Do not treat
all Wikimedia or NASA third-party materials as automatically Apache-licensed.

Build/reference dependencies (not bundled): NumPy, SciPy, Rasterio, PyProj,
Pillow, Shapely, pytest, optional Matplotlib. They retain their upstream licenses. Follow each package's
distribution license if bundling dependencies. Python stdlib and browser APIs
are used. The distributed code has an explicit Apache License 2.0 in LICENSE.

Original code licensing does not transfer ownership of NASA/USGS/PDS datasets,
third-party publications or user-provided competition documents. No NASA logo
or statement of endorsement is added.


## v3 foundation

USGS Astrogeology Analysis Ready Data/STAC metadata and assets retain their
per-item source attribution and licenses. PDS Mars 2020 PLACES localization
records and documentation are credited to NASA/JPL-Caltech and the PDS
Geosciences Node; see the retained PDS labels for authorship and identifiers.
HiRISE TRN reference patches derive from USGS Mars 2020 TRN products credited
to Fergason et al. and NASA/MRO. Apache-2.0 applies to original MarsFlex code,
not as a replacement for source-data terms. Dependencies retain their own
licenses. No third-party UI or planning implementation was copied.

## v4 orbital imagery and renderer

CTX and HiRISE orthorectified mosaics: NASA Mars Reconnaissance Orbiter / USGS
Astrogeology Mars 2020 Terrain Relative Navigation products. The exact image
filenames and source URLs are retained in `imagery_manifest.json` and
`DATA_SOURCES.md`. Display contrast and resampling are MarsFlex processing,
not additional sensor measurements. No generated landscape imagery is used.

React/Cesium and bundled dependencies retain their licenses; see
`THIRD_PARTY_NOTICES.md`. This project is not endorsed by NASA or USGS.

## v5 surface renderer

Native HiRISE DTM patches and CTX DTM: NASA MRO / USGS Mars 2020 TRN products,
retained unchanged from the verified source acquisition. Source hashes,
transforms and original URLs are exposed by `/v1/geomodel/models`.
Three.js and OrbitControls: MIT license; see THIRD_PARTY_NOTICES.md.
Surface contouring, clipping, profile inspection and local rendering are
original MarsFlex processing. Screenshots and animation are actual app captures.

## Mars 2020 sample dossier context — v0.10.0

Farley, K. A., and Stack, K. M., Mars 2020 Science Team (2023), *Mars 2020 Initial
Reports — Volume 2, Delta Front Campaign*, release 3.1. NASA Planetary Data System.
DOI: https://doi.org/10.17189/49zd-2k55 . NASA/JPL-Caltech; © 2023 California
Institute of Technology. Government sponsorship acknowledged. MarsFlex includes
curated factual coordinates and short paraphrases with original page links;
the complete PDF is not redistributed or relicensed under Apache 2.0. This final audit retains three source-table page extracts in docs/science/PIXL_source_pages solely as credited verification evidence. Permission for blanket public redistribution of those images was NOT FOUND; they are not Apache assets and are not used as application artwork.
The report provides preliminary interpretations, not final mineralogical truth.

Additional HiRISE DTM crops at Skinner Ridge and Amalik use the existing cited
USGS/NASA MRO TRN product. Their provenance and byte-range hashes appear in
`data/derived/hirise_validation.json`; generated crop GeoTIFFs retain source
projection and elevations. These data retain their original attribution.

## Final review delivery

Six UI descriptions were corrected, the historical standalone HTML was regenerated, and verification/documentation artifacts were added. Full AI disclosure and dataset/dependency terms: docs/submission/AI_ASSISTANCE.md and EXTERNAL_RESOURCES.md. The earlier no-external-library statement above applies only to the v2 standalone demo; the current React/Three.js/Cesium frontend bundles dependencies.
