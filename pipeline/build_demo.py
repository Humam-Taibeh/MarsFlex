"""Build an offline continuation of the supplied MarsFlex Ops prototype."""
from pathlib import Path
import json, gzip, base64, re, time
import numpy as np
from PIL import Image
from marsflex.terrain import Terrain, Model, RADIUS

ROOT=Path(__file__).resolve().parents[1]
def encoded(data):return base64.b64encode(gzip.compress(data,mtime=0)).decode()
def build():
 meta=json.loads((ROOT/'data/derived/grid.json').read_text())
 z=np.load(ROOT/'data/derived/elevation.npy');t=Terrain(z,meta)
 home=t.node(77.4,18.47);targets=[t.node(77.385,18.501),t.node(77.335,18.476)]
 np.save(ROOT/'data/derived/directional_cost_minutes.npy',t.costs)
 np.save(ROOT/'data/derived/surface_slope_deg.npy',t.slope)
 a,b,c,d,e,f=meta['transform'];h,w=z.shape
 bounds=np.rad2deg(np.array([c,f+h*e,c+w*a,f])/RADIUS).tolist()
 west,south,east,north=meta['aoi_lonlat']
 aoi=[(np.deg2rad(west)*RADIUS-c)/a,(np.deg2rad(north)*RADIUS-f)/e,
      (np.deg2rad(east)*RADIUS-c)/a,(np.deg2rad(south)*RADIUS-f)/e]
 # Visualization only, from the same native DTM; lighting is fictional, not a solar model.
 dy,dx=np.gradient(z);dx/=20*np.cos(np.deg2rad(t.lat[:,None]));dy/=20
 shade=np.clip((.65-.5*dx-.5*dy)/np.sqrt(1+dx*dx+dy*dy),0,1)
 rgb=np.stack([35+shade*160,32+shade*148,28+shade*129],-1).astype('uint8')
 Image.fromarray(rgb).save(ROOT/'data/derived/terrain_hillshade.png')
 bg='data:image/png;base64,'+base64.b64encode((ROOT/'data/derived/terrain_hillshade.png').read_bytes()).decode()
 limits=['Scenario planning only; no validated human Mars EVA timing/safety model.',
 'CTX post spacing does not resolve individual rocks, sand strength, foot placement or suit hazards.',
 'Routes limited to native 20 m grid plus 2 km map-coordinate buffer; boundary warning is active.',
 'Eight-neighbor graph introduces direction quantization; no path smoothing across blocked cells.',
 'Fixed science target order after detour; passing a target does not complete its activity.',
 'Target locations are carried-over demo candidates, not verified mineral detections.',
 'Geology is regional 1:75000 service context only; authoritative GIS validation pending.',
 'CRISM contains three native summary-parameter bands, not a mineral detection or full spectral validation.',
 'CRISM angular registration follows source metadata; independent landmark alignment remains pending.',
 'No ingested HiRISE/PLACES/weather/oxygen/battery layer in this milestone.']
 payload={'shape':[h,w],'bounds':bounds,'aoiPixels':aoi,'home':home,'targets':targets,
          'source':json.loads((ROOT/'data/source/source_manifest.json').read_text()),
          'model':Model().__dict__,'limitations':limits,
          'science':json.loads((ROOT/'data/derived/science_payload.json').read_text()),
          'costs':encoded(t.costs.astype('<f4').tobytes()),'walkable':encoded(t.walkable.astype('uint8').tobytes())}
 old=(ROOT/'frontend/legacy/prototype_original.html').read_text()
 html=old[:old.index('<script>')]
 html=html.replace('v1.0 prototype','v2.1 terrain + evidence').replace('MarsFlex Ops v1','MarsFlex Ops v2')
 html=html.replace('Real CTX basemap online','<span id="computeState">Loading real CTX terrain…</span>')
 html=html.replace('width:min(92vw,1200px);aspect-ratio:5322/5040;',f'width:100%;max-width:1200px;aspect-ratio:{w}/{h};')
 html=re.sub(r'src="https://upload.wikimedia.org/[^\"]+"',f'src="{bg}"',html)
 html=html.replace('viewBox="0 0 1000 946.26"',f'viewBox="0 0 {w} {h}"')
 html=html.replace('height:100%;overflow:visible','height:100%;overflow:hidden')
 html=html.replace('USGS/NASA MRO CTX Jezero crater orthomosaic','Hillshade derived from USGS MRO CTX elevation data')
 html=html.replace('USGS Mars 2020 CTX orthomosaic • 6 m/pixel • MRO','USGS CTX elevation-derived hillshade · 20 m grid · MRO')
 html=html.replace('Basemap: USGS / NASA / JPL-Caltech • overlay: MarsFlex prototype','DTM: USGS / NASA MRO · derived map: MarsFlex')
 html=re.sub(r'<label for="mode">Mode</label>.*?</select>','<div class="tiny">Human EVA scenario · hypothetical habitat</div>',html,flags=re.S)
 html=html.replace('<option value="aqueous">Aqueous alteration / carbonates</option>','<option value="aqueous">Target B: margin candidate</option>')
 html=html.replace('<option value="diversity">Geologic diversity</option>','<option value="diversity">A then B: both planned targets</option>')
 html=html.replace('<option value="delta">Delta stratigraphy</option>','<option value="delta" selected>Target A: delta candidate</option>')
 html=html.replace('min="40" max="240" step="5" value="140"','min="40" max="480" step="5" value="300"')
 html=html.replace('140 min','300 min').replace('240 min','480 min')
 html=html.replace('<label>Return reserve</label>','<label>Reserve: % of fixed 480 min allocation</label>')
 html=html.replace('<label>Nominal walking speed</label>','<label>Detour science dwell: <span id="dwellVal">10 min</span></label><input id="dwell" type="range" min="0" max="60" value="10" step="5"><div class="tiny">Planned targets: 15 min each.</div><label>Nominal walking speed</label>')
 html=html.replace('<div class="toggle"><span>Prototype AOI</span>', '<div class="toggle"><span>Geology context (1:75000)</span><input id="showGeology" type="checkbox"></div><div class="toggle"><span>CRISM BD2500_2 (36 m)</span><input id="showCRISM" type="checkbox"></div><div class="toggle"><span>Spectral review candidates</span><input id="showCandidates" type="checkbox"></div><div class="tiny">Science overlays hide the freedom fill while on. Cyan contrast is a spectral parameter, not confidence or mineral abundance.</div><div class="toggle"><span>Prototype AOI</span>')
 html=re.sub(r'<div class="toggle"><span>Historical landing ellipse</span>.*?</div>','',html)
 html=html.replace('Set astronaut by map click','Map click: move astronaut')
 html=html.replace('Click any location on the real CTX map to move the astronaut. Distances and mission freedom update immediately.','Click a traversable cell to move. Toggle button to inspect a detour. Drag to pan. Target labels select a detour. Moving the marker does not consume time automatically.')
 html=re.sub(r'<b>Integrity guard:</b>.*?The next ingest is the CTX DTM / slope grid\.',
             '<b>Model scope:</b> Real CTX terrain, configurable demonstration movement model. Green means feasible under these assumptions, not certified EVA safety. <span id="boundaryNote"></span>',html,flags=re.S)
 html=html.replace('Return-safe / mission-loss band','Return fits / mission tradeoff')
 html=html.replace('</div>\n\n  <div class="mapTools">','<div class="l"><span class="sw" style="background:#ff6868"></span> Return reserve violated</div><div class="l"><span class="sw" style="background:#778899"></span> Unknown / blocked / disconnected</div></div>\n\n  <div class="mapTools">',1)
 html=html.replace('Astronaut → Habitat','Return modeled time').replace('Mandatory science leg','Full planned mission time')
 html=html.replace('time-only feasibility','terrain + budget model')
 html=html.replace('objective relevance','planned mission budget')
 html=html.replace('Mission-preserving detour radius: —','Calculating mission freedom…').replace('Return-only radius: —','Calculating return feasibility…')
 html=html.replace('Lon 77.4298°E · Lat 18.4663°N','Move pointer to read Mars coordinates')
 html=re.sub(r'<div class="section">\s*<h3>CRISM mineral context</h3>.*?</div>',
             '<div class="section"><h3>Selected detour</h3><div class="card" id="detourResult">Calculating…</div><button class="btn" id="export">Export decision JSON</button></div><div class="section"><h3>Evidence at selected point</h3><div class="card" id="scienceResult">Loading native source values…</div></div>',html,flags=re.S)
 start=html.index('    <h3>Data provenance</h3>')
 end=html.index('</aside>',start)
 html=html[:start]+'''    <h3>Data provenance</h3>
    <div class="source"><b>INGESTED: CTX TRN DTM</b><span>USGS Astrogeology / NASA MRO · 20 m posts · official GeoTIFF. Native-grid crop; geodesic distances on Mars sphere.</span></div>
    <div class="source"><b>DERIVED: routes + freedom</b><span>Directed 8-neighbor Dijkstra; grade and surface-slope screening. Uphill/downhill penalties are MarsFlex assumptions.</span></div>
    <div class="source"><b>CONTEXT: USGS SIM 3464</b><span>Sun &amp; Stack (2020), 1:75000 feature service. Units and contacts for display; no terrain penalty inferred.</span></div>
    <div class="source"><b>EVIDENCE: CRISM HRL000040FF</b><span>HRL000040FF_07_SU183J_MTR3 · three native summary bands · 36 m projected grid · observation 2007-01-29. Not confirmed minerals.</span></div>
    <div class="source"><b>SCENARIO: habitat and targets</b><span>Original candidate locations retained. Additional spectral candidates suggest inspection, not an automatically chosen science mission.</span></div>
    <div class="source"><b>NOT INGESTED YET</b><span>Full CRISM reflectance spectra, HiRISE checks, PLACES context, MEDA/THEMIS.</span></div>
    <p class="tiny">Gray also includes disconnected cells. Red is infeasibility within this graph and budget. Science costs do not alter physical travel costs.</p>
  </div>
'''+html[end:]
 html+='<script type="application/json" id="payload">'+json.dumps(payload,separators=(',',':'))+'</script>\n'
 html+='<script type="text/plain" id="worker-code">'+(ROOT/'frontend/legacy/engine.js').read_text()+'</script>\n'
 html+='<script>'+(ROOT/'frontend/legacy/science.js').read_text()+'</script>\n'
 html+='<script>'+(ROOT/'frontend/legacy/app.js').read_text()+'</script></body></html>'
 out=ROOT/'reports'/'MarsFlex_Terrain_v2.html';out.write_text(html)
 # Quantitative evidence from real terrain and same start/target locations.
 report={'model':Model().__dict__,'grid':meta,'walkable_cells':int(t.walkable.sum()),
         'surface_slope_percentiles_deg':dict(zip(['50','90','95','99','100'],np.percentile(t.slope,[50,90,95,99,100]).tolist())),
         'routes':{},'freedom_counts':{}}
 for name,target in zip(['delta_A','margin_B'],targets):
  route,cost=t.route(home,target);back,ret=t.route(target,home)
  report['routes'][name]={'outbound_minutes':cost,'return_minutes':ret,'outbound_distance_m':t.route_distance(route),
                         'return_distance_m':t.route_distance(back),'round_trip_with_15min_task':cost+ret+15}
  (ROOT/f'data/derived/route_{name}.json').write_text(json.dumps({'outbound':route,'return':back}))
 q0,q1,q2,q3=aoi;rows,cols=np.indices(z.shape);inside=(cols+.5>=q0)&(cols+.5<q2)&(rows+.5>=q1)&(rows+.5<q3)
 for budget in [180,240,300,360]:
  f=t.field(home,home,[(targets[0],15)],budget,72,10)
  report['freedom_counts'][str(budget)]={str(k):int(((f['labels']==k)&inside).sum()) for k in range(4)}
  report['freedom_counts'][str(budget)]['boundary_reachable']=f['boundary_reachable']
 (ROOT/'data/derived/validation_report.json').write_text(json.dumps(report,indent=2))
 print(json.dumps(report,indent=2));print('Built',out,'bytes',out.stat().st_size)

if __name__=='__main__':build()
