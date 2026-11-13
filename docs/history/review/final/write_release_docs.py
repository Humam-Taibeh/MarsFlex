"""Assemble the final evidence register from local files; no model calculation."""
from pathlib import Path
import csv, hashlib, importlib.metadata as md, json, re, shutil, sys

R=Path(__file__).resolve().parents[2]; D=R/'docs'; O=D/'submission'; O.mkdir(exist_ok=True)
def j(p): return json.loads((R/p).read_text())
def write(p,s): (R/p).write_text(s.rstrip()+'\n',encoding='utf-8')
def dump(p,x): write(p,json.dumps(x,ensure_ascii=False,indent=2))
def csvout(p,rows):
    with (R/p).open('w',newline='',encoding='utf-8') as f:
        w=csv.DictWriter(f,fieldnames=list(rows[0]));w.writeheader();w.writerows(rows)

# Preserve historical wording; the final register explicitly supersedes its scope.
for name in ['README.md','docs/SOURCES_EN.md','docs/claims_vs_code.md','docs/UI_TEXT_ADDITIONS_EN.md']:
    target=D/'history'/Path(name).name;target.parent.mkdir(exist_ok=True)
    if not target.exists(): shutil.copy2(R/name,target)

python_rows=[]; licenses=D/'dependency_licenses';licenses.mkdir(exist_ok=True)
for line in (R/'requirements-tested.txt').read_text().splitlines():
    if '==' not in line or line.startswith('#'):continue
    name,version=line.split('==');dist=md.distribution(name);m=dist.metadata
    urls=m.get_all('Project-URL',[]); url=m.get('Home-page') or (urls[0].split(', ',1)[-1] if urls else 'NOT FOUND')
    expression=m.get('License-Expression') or m.get('License') or 'NOT FOUND'
    if len(expression)>150 or '\n' in expression: expression='See retained license text (metadata is not an SPDX expression)'
    retained=[]
    for f in dist.files or []:
        if any(n.lower().startswith(('license','copying','notice','authors')) for n in Path(str(f)).parts):
            src=Path(dist.locate_file(f))
            if src.is_file():
                dst=licenses/'python'/name/str(f);dst.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(src,dst);retained.append(str(dst.relative_to(R)))
    python_rows.append({'name':name,'version':dist.version,'scope':'pinned Python runtime/test dependency','source':url,'license':expression,'license_files':'; '.join(retained) or 'NOT FOUND','metadata_urls':'; '.join(urls)})
csvout('docs/submission/PYTHON_DEPENDENCIES.csv',python_rows)
dump('docs/submission/PYTHON_DEPENDENCIES.json',python_rows)

lock=j('frontend/package-lock.json');node_rows=[]
for key,m in lock['packages'].items():
    if not key:continue
    name=key.rsplit('node_modules/',1)[-1];p=R/'frontend'/key
    package=json.loads((p/'package.json').read_text()) if (p/'package.json').exists() else {}
    license_=m.get('license') or package.get('license') or 'NOT FOUND'
    repo=package.get('repository',{});repo=repo.get('url') if isinstance(repo,dict) else repo
    retained=[]
    if p.exists():
        for q in p.iterdir():
            if q.is_file() and q.name.lower().startswith(('license','copying','notice')):
                dst=licenses/'npm'/key/q.name;dst.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(q,dst);retained.append(str(dst.relative_to(R)))
    node_rows.append({'name':name,'version':m.get('version','NOT FOUND'),'scope':'dev/build' if m.get('dev') else 'frontend distribution','source':repo or package.get('homepage') or m.get('resolved','NOT FOUND'),'license':str(license_),'license_files':'; '.join(retained) or 'NOT FOUND (optional package may not be installed on Linux)','lock_path':key})
csvout('docs/submission/NPM_DEPENDENCIES.csv',node_rows)
dump('docs/submission/NPM_DEPENDENCIES.json',node_rows)

usgs='USGS-produced material: U.S. public domain under USGS policy; preserve credits and any third-party exceptions. Dataset-specific SPDX license NOT FOUND.'
pds='Explicit dataset redistribution license NOT FOUND in retained labels; public PDS archive access is not an Apache-2.0 grant. Credit instrument team and PDS.'
rows=[]
def dataset(name,source,link,scope,local,terms):rows.append(dict(resource=name,source=source,url_or_doi=link,actual_use=scope,local_evidence=local,license_or_terms=terms))
dataset('CTX TRN DTM 20 m','USGS / NASA MRO / Fergason and collaborators (2020)',j('data/source/source_manifest.json')['url'],'Native routing terrain and elevation crop','data/source/source_manifest.json; data/derived/grid.json',usgs)
dataset('CTX orthoimage 6 m','USGS / NASA MRO / CTX',j('data/derived/imagery_manifest.json')['ctx']['url'],'Registered visual context, resampled display is not added detail','data/derived/imagery_manifest.json',usgs)
dataset('HiRISE TRN DTM 1 m','USGS / NASA MRO / HiRISE',j('data/derived/hirise_validation.json')['source']['url'],'Five downloaded local patches, sections and local slope comparison; not full coverage','data/derived/hirise_validation.json; data/source/hirise',usgs)
dataset('HiRISE orthoimage 25 cm','USGS / NASA MRO / HiRISE',j('data/derived/imagery_manifest.json')['hirise']['url'],'One 256 x 256 m patch only','data/derived/imagery_manifest.json',usgs)
dataset('CRISM HRL000040FF_07_SU183J_MTR3','NASA MRO / CRISM team / PDS Geosciences',j('data/source/crism_manifest.json')['source_url'],'BD1900_2, D2300 and BD2500_2 native summary bands; not mineral confirmation','data/source/crism_manifest.json and PDS labels',pds)
dataset('Jezero geology and contacts','Sun, V.Z. and Stack, K.M. (2020), USGS SIM 3464','https://doi.org/10.3133/sim3464','1:75000 geology context; no physical terrain penalty','data/source/geology_service.json; geology_item.json; geology_layer_5.json; geology_layer_8.json',usgs+' Feature service states viewing-purpose scope.')
dataset('Perseverance PLACES','NASA/JPL-Caltech / PDS Geosciences',j('data/derived/places.json')['source_url'],'Archived rover localizations, source version 16.0, not proof of instrument coverage','data/derived/places.json; data/source/places',pds)
dataset('MEDA environment archive','Mars 2020 MEDA team / PDS Atmospheres','https://doi.org/10.17189/1522849','Pressure, ATS1 air temperature, horizontal wind and RDS TOP7 radiance; cached sols 313,314,315,1858,1859','meda_archive.py; data/derived/meda/catalog.json; sol_*.json',pds)
dataset('PIXL / sample dossier factual tables','Farley K.A. and Stack K.M. (editors), Mars 2020 Science Team (2023), Initial Reports vol.2 release 3.1','https://doi.org/10.17189/49zd-2k55','Nine oxide-equivalent measurements and three supplementary values; archived local context','docs/PIXL_EVIDENCE_NINE.md; analysis/results_2026_10_05/PIXL_evidence_nine.json','NASA/JPL-Caltech; ©2023 California Institute of Technology. Public redistribution license for report page images NOT FOUND. No Apache relicensing.')
dataset('USGS STAC discovery catalog including THEMIS','USGS Astrogeology, per-item providers','https://stac.astrogeology.usgs.gov/api/','145 metadata entries only; not 145 ingested scientific rasters or route cost layers','data/derived/catalog.json; CATALOG_RESOURCES.csv','Per-item license fields retained; missing fields are NOT FOUND. Catalog inclusion is not a blanket license.')
csvout('docs/submission/DATASETS.csv',rows);dump('docs/submission/DATASETS.json',rows)
cat=[]
for x in j('data/derived/catalog.json')['items']:
    cat.append({'id':x['id'],'collection':x.get('collection',''),'source':json.dumps(x.get('source',x.get('source_url',{}))), 'license':str(x.get('license','NOT FOUND')),'assets':json.dumps(x.get('assets',{})),'scope':'catalog metadata; ingestion not implied'})
csvout('docs/submission/CATALOG_RESOURCES.csv',cat)
meda=[]
for p in sorted((R/'data/derived/meda').glob('sol_*.json')):
    for k,x in json.loads(p.read_text())['products'].items():meda.append({'cache_file':str(p.relative_to(R)),'variable':k,'unit':x['unit'],**x['source']})
dump('docs/submission/MEDA_PRODUCT_SOURCES.json',meda)

resources='# External resources and licenses\n\nThis register describes what is shipped and what is only catalogued. Original MarsFlex code is Apache-2.0 (`LICENSE`). This does not relicense external datasets, reports, or dependencies.\n\n'
resources+='| Resource | Source / link | Actual use | License / terms |\n|---|---|---|---|\n'
for x in rows:resources+='| '+ ' | '.join([x['resource'],x['source']+'; '+x['url_or_doi'],x['actual_use'],x['license_or_terms']])+' |\n'
resources+='\n## Software and tools\n\n'
resources+=f'Every pinned Python package ({len(python_rows)}) is listed in `PYTHON_DEPENDENCIES.csv`; every package-lock entry ({len(node_rows)}) is listed in `NPM_DEPENDENCIES.csv`, including optional and build packages. Versions and license declarations come from the installed distribution metadata and lockfile, not guessed from package names. Full retained license texts are in `docs/dependency_licenses/`; prior `THIRD_PARTY_NOTICES.md` is retained.\n\n'
resources+='Primary application tools: Python (PSF license, https://www.python.org/psf/license/), React/React DOM (MIT), Three.js/OrbitControls (MIT), Cesium (Apache-2.0), TypeScript (Apache-2.0), Vite (MIT), NumPy and SciPy (BSD-style, including bundled third-party notices), Rasterio (BSD-style), PyProj (MIT with PROJ terms), Shapely (BSD-style with GEOS terms), FastAPI (MIT), Uvicorn (BSD-style). Exact package-specific metadata and URLs are in the CSVs. Browser APIs, WebGL and Node.js are execution/build facilities, not measured Mars data. Node.js licensing: https://github.com/nodejs/node/blob/main/LICENSE .\n\n'
resources+='Review-only tools: pytest, HTTPX and Node (recorded versions in logs), Playwright (Apache-2.0, https://github.com/microsoft/playwright/blob/main/LICENSE), Chromium (multiple licenses, https://chromium.googlesource.com/chromium/src/+/main/LICENSE), Matplotlib 3.10.8 (PSF-based license, https://matplotlib.org/stable/project/license.html), ReportLab (BSD-style, https://www.reportlab.com/opensource/), Poppler (GPL-2.0-or-later components, https://poppler.freedesktop.org/), LibreOffice (MPL-2.0, https://www.libreoffice.org/about-us/licenses/). Presentation creation uses the provided OpenAI Artifact Tool runtime; a public redistribution license for that tool was NOT FOUND. It is not bundled as an application dependency. AI roles are listed in `AI_ASSISTANCE.md`.\n\n'
resources+='## Publication and image scope\n\nUSGS policy: https://www.usgs.gov/information-policies-and-instructions/copyrights-and-credits . JPL image policy: https://www.jpl.nasa.gov/jpl-image-use-policy/ . These policies have third-party exceptions; the JPL image policy is not a license for arbitrary PDS publications. Report-page screenshots in `docs/PIXL_source_pages/` are retained as limited evidence extracts for this requested audit, with copyright credit, not advertised as open-source assets. Blanket public redistribution permission was NOT FOUND. The application and final slides use factual numeric transcription and original data-derived renders rather than those page images.\n\n'
resources+='`web/prototype_original.html` retains historical Wikimedia and NASA PIA23239 URL references. Their registration and asset-specific rights were NOT FOUND in this audit; they are not the active frontend basemap. No NASA endorsement or logo is claimed.\n\n## Scientific references\n\nThe verified PIXL source is in `PIXL_EVIDENCE_NINE.md`. Existing detailed references and rejected assumptions remain in `MODEL_ASSUMPTIONS.md`, `DATA_SOURCES.md`, and `docs/MarsFlex_v0.10.0_Audit.md`. This release does not introduce or validate a new physiology equation. A full text-to-reference URL index is provided in `REFERENCE_URLS.csv`; inclusion means cited in project files, not a fresh scientific verification of every claim.\n'
write('docs/submission/EXTERNAL_RESOURCES.md',resources)

write('docs/submission/AI_ASSISTANCE.md','''# AI assistance disclosure

| Work | Assistance and evidence | Limits |
|---|---|---|
| Concept and decisions | The user defined Mission Freedom Map, constraints, interpretation boundaries and acceptance tests; preserved in historical handoffs and conversation instructions. | AI is not a human teammate. |
| Application code | ChatGPT/Codex assisted Python, JavaScript/TypeScript, UI, data processing, deterministic graph calculations, APIs, tests and installation troubleshooting. Source files, changelogs and preserved versions record the work. | No claim of independent human engineering review or flight qualification. |
| Scientific research | AI located official archives, compared source labels, drafted limitations and transcribed PIXL factual tables with source-page checks. | Retrieval and transcription can err. Exact evidence and limitations are retained. |
| Writing | AI drafted English/Arabic documentation, audits, judge brief, video narration, slides, source registers and handoff. The user gave scientific and presentation corrections. | Narration duration is proposed, not a measured recording. |
| Images | AI-written code produced data-derived plots, hillshade and renderers. Screenshots capture the application. Orbital imagery and terrain are credited NASA/USGS products. | No generative landscape image was created for this final release. Earlier third-party image-generation involvement: NOT FOUND. |
| External models | A Claude critique was supplied by the user and informed priorities. | Claude code contributions in these files: NOT FOUND. A completed DeepSeek review exchange: NOT FOUND. |
| Hosting | Replit was discussed as a possible execution environment. | A tested or deployed Replit release: NOT FOUND. |

An LLM does not choose the computed route, color classification, or safety threshold. The deterministic implementation uses declared scenario parameters. This is not operational human-safety certification.
''')
write('README.md','''MarsFlex plans Jezero scenario walks with terrain routes, optional visits and traceable orbital/rover context. [S1–S4]
Source keys: docs/SOURCES_EN.md; full delivery state: HANDOFF.md.
1. Install 64-bit Python 3.12 and keep internet available for the first dependency installation. [S13]
2. Extract the entire ZIP to a writable folder; keep frontend/dist and data beside launch.py. [S13]
3. On Windows double-click Start_MarsFlex.cmd; on Linux run python3 launch.py in that folder. [S13]
4. Open http://127.0.0.1:8000, wait for the mission result, then select Test Shuyak detour. [S2,S13]
Keep the launch window open; Ctrl+C stops the local server. [S13]
Green denotes time-budget feasibility under assumptions; operational safety calibration is NOT FOUND. [S1]
HiRISE supports only a local comparison; MEDA is archived rover-local context. [S5,S6,S12]
Original code: Apache-2.0; external terms: docs/submission/EXTERNAL_RESOURCES.md. [S8]
''')
assert len((R/'README.md').read_text().splitlines())==10

# Retain established source keys while superseding old revision-specific statements.
sources=(D/'history/SOURCES_EN.md').read_text()
sources=sources.replace('Source keys resolve','Source keys resolve')
sources=sources.replace('No interface file changed this revision.','Final UI wording changes are listed in `docs/UI_TEXT_FINAL_AUDIT.json`; calculations are preserved.')
sources=sources.replace('Historical results, NOT recalculated this revision.','Saved local audit; final browser response is recorded separately in `review/final/ui_verification.json`.')
sources=sources.replace('no new cross-version routing or Python/JavaScript parity test.','Final current regression is in `review/final/regression.json`; fresh 413,130-cell parity is in `review/final/python_js_parity_after_rebuild.log`.')
sources+='\n- **S13:** `launch.py`, `Start_MarsFlex.cmd`, `requirements-tested.txt`, `review/final/clean_launch.log`, `pytest.log`, `regression.json`, `python_js_parity_after_rebuild.log`, `browser.log`. Fresh Python 3.12 Linux environment; Windows execution NOT TESTED here.\n- **S14:** `docs/submission/EXTERNAL_RESOURCES.md`, dependency CSVs, source manifests and retained license texts.\n'
write('docs/SOURCES_EN.md',sources)

claims=(D/'history/claims_vs_code.md').read_text()
claims=claims.replace('Scope: existing application unchanged; new artifacts only.','Scope: final release. Six UI text-only revisions, regenerated production assets and repaired historical standalone HTML; protected engine files unchanged. The previous analysis-only scope is preserved in docs/history/.')
claims=claims.replace('| Delta was rerun under pinned versions in this revision | No routing calls allowed or made | False. Previous exact result retained, source hashes unchanged; current checks are array reductions and route evidence only. |','| Delta was rerun under pinned versions in the final release | `review/final/regression.json` and raw log | True: 4019.7137875635854 m, 143.4349420073279 min; exact full current response equals original v0.10 API response. This does not recover an absent full v0.9 JSON response. |')
claims=claims.replace('| Existing colors, routes, engine and UI changed | Before/after file hashes | False. All pre-existing project files match. |','| Engine and UI were both unchanged | `review/final/before_hashes.json`, final changed-file manifest | False for UI: six text revisions plus rebuilt assets. True for protected terrain.py and geoscene.ts. No color or physiology logic changed. |')
claims+='\n## Labels corrected in the final UI\n\nNo literal `label only` status existed in the supplied table. Every overbroad equivalent was checked. `Exploration system` now reads `Scenario planner`; the headline states mission/return time limits; the trust heading names HiRISE coverage and slope comparison. The generic RDS radiation-index wording now names archived TOP7 radiance. Small-obstacle uncertainty is explicit, and the station comparison is labelled as a team hypothesis. Exact before/after strings: `UI_TEXT_FINAL_AUDIT.json`. None adds a new calculation.\n\nThe initial legacy verifier failed because the distributed v2 HTML ended inside its JSON payload. It was regenerated using the existing builder, stopping before optional route statistics. The original truncated artifact is preserved in `review/final/Original_Truncated_v2.zip`. The actual unchanged JS worker then matched Python on 413,130 cells with zero differences.\n'
write('docs/claims_vs_code.md',claims)
write('docs/UI_TEXT_ADDITIONS_EN.md','''# Final UI wording: MEDA and obstacles

Implemented in `frontend/src/main.tsx`: “Dust concentration not derived from RDS. RDS TOP7 radiance shown as archived.” The existing archived-observation label, rover-location warning and no-route-effect statement remain. [S12]

Implemented in `frontend/src/DecisionView.tsx`: “20 m terrain estimate. Small obstacles remain unresolved. Green does not certify obstacle clearance.” The confidence strip retains “Not validated outside coverage.” [S1,S5,S6]

No MEDA processing, route logic, color or physiological calculation changed. [S1,S12; final file hashes]
''')

for name in ['ONE_PAGE_EN.md','VIDEO_30_SECONDS_EN.md','SEVEN_SLIDES_EN.md']:
    s=(D/name).read_text().replace('the application, routes and physiology remain unchanged','UI wording now matches the existing calculations; route and physiology logic remain unchanged').replace('unchanged app','app with text-only corrections')
    s=s.replace('Word count: 55.','Narration length: see the actual text above;')
    write('docs/submission/'+name,s)
    write('docs/'+name,s)

write('START_FINAL_AR.md','''# تشغيل MarsFlex

1. نزّل الحزمة الكاملة وفك ضغطها بالكامل. لا تشغّل الملفات من داخل ZIP.
2. في Windows ثبّت Python 3.12 بنسخة 64-bit من python.org إن لم يكن مثبتًا.
3. افتح المجلد واضغط مرتين على Start_MarsFlex.cmd. يحتاج التشغيل الأول الإنترنت لتثبيت الحزم.
4. اترك نافذة التشغيل مفتوحة. افتح http://127.0.0.1:8000 إذا لم يفتح المتصفح تلقائيًا.
5. انتظر ظهور نتيجة المهمة. زر Test Shuyak detour يختبر الزيارة؛ Advanced يعرض الأدوات الإضافية.

لا تحتاج Node.js لتشغيل الحزمة؛ الواجهة مبنية في frontend/dist. لا تحذف data أو تنقل launch.py وحده.
تم اختبار بيئة Python جديدة على Linux. لم يتوفر جهاز Windows لإثبات حل مشكلة DLL السابقة عليه.
إذا فشل التشغيل أرسل النص كاملًا من النافذة. لا تُعد تثبيت NumPy عشوائيًا ولا تنزّل DLL منفردة.
أوامر المطور والاختبارات والمخرجات الفعلية موجودة في HANDOFF.md وreview/final/.
الخرائط تقديرات سيناريو، وليست تصريح أمان لمهمة بشرية. بيانات MEDA مؤرشفة.
''')

write('docs/submission/DELIVERY_GAPS.md','''# Unproven or incomplete items

- Windows clean-machine execution and the earlier NumPy DLL fault: NOT TESTED on Windows in this environment.
- Operational human Marswalk safety, physiology calibration, sub-grid obstacle clearance, independent CRISM validation and outside-HiRISE validation: NOT FOUND; no such claim.
- Historical v0.9 full-response JSON: NOT FOUND in the final comparison. The supplied exact Delta reference and original v0.10 full API response were tested.
- Per-case pixel masks for empirical cellwise monotonicity: NOT FOUND. The saved 513 comparisons check green counts.
- Earlier exact requested nine-PIXL list: NOT FOUND. The audit explicitly checks MgO, FeO-T and SO3 at each site, with three SiO2 values supplementary.
- Zero-length two-point route_trust top-level status remains assessed while coverage says no_route_length; no engine or diagnostic behavior change authorized.
- A public license allowing blanket redistribution of PDS report page images: NOT FOUND. Their copyright is retained and they are not Apache assets.
- Replit/cloud deployment, public repository publication, measured video duration and an actual edited video recording: NOT DONE in this release. The requested narration and seven slides are supplied.
- PowerPoint/Google Slides application inspection: NOT DONE; slide package and rendered previews are checked.
- Entire upstream multi-gigabyte mosaics and full CRISM spectra: not included; downloaded patches/bands and their provenance are included, as used by the app.
''')

print(json.dumps({'python_packages':len(python_rows),'npm_lock_entries':len(node_rows),'datasets':len(rows),'catalog_entries':len(cat),'meda_products':len(meda),'readme_lines':10},indent=2))
