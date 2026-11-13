(()=>{
const D=JSON.parse(document.getElementById('payload').textContent), el=id=>document.getElementById(id);
const W=D.shape[1],H=D.shape[0],N=W*H,stage=el('stage'),viewport=el('viewport'),svg=el('overlay');
const worker=new Worker(URL.createObjectURL(new Blob([el('worker-code').textContent],{type:'text/javascript'})));
const canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;const ctx=canvas.getContext('2d');
const aoiCanvas=document.createElement('canvas');aoiCanvas.width=W;aoiCanvas.height=H;
let p=D.home,x=D.targets[0],zoom=1,panX=0,panY=0,drag=null,moveMode=true,ready=false,seq=0,result=null,selectedIds=[],pending=null,inflight=false;
const names={[D.home]:'Demo habitat',[D.targets[0]]:'Target A · delta candidate',[D.targets[1]]:'Target B · margin candidate'};
const statusNames=['Unknown / blocked / no modeled connection','Return reserve violated','Return fits; mission goals lost','Mission + return fit'];
const B=D.bounds;
let scienceDecoded=null;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function evidence(){const q=ll(xy(x));return scienceDecoded?MarsScience.lookup(D.science,scienceDecoded,x,q.lon,q.lat):null;}
function showEvidence(){
 const ev=evidence();if(!ev)return;
 el('scienceResult').innerHTML=`<b>${esc(ev.geology.name)}</b><p>USGS regional map · 1:75000 · context only.</p><p>CRISM native pixel: row ${ev.crism.native_row??'—'}, col ${ev.crism.native_col??'—'} (zero-based)</p>`+
 Object.entries(ev.crism.values).map(([k,v])=>`<div>${esc(k)}: <b>${v===null?'No data':v.toFixed(5)}</b></div>`).join('')+
 '<p class="tiny">Native 36 m grid. These parameters flag spectral structure; they do not confirm carbonate, water, or abundance. Candidates use 3×3-pixel BD2500_2 patch medians for review only.</p>';
}
function xy(i){return {x:i%W+.5,y:Math.floor(i/W)+.5};}
function ll(q){return {lon:B[0]+q.x/W*(B[2]-B[0]),lat:B[3]-q.y/H*(B[3]-B[1])};}
function point(e){const rect=stage.getBoundingClientRect();const c=Math.floor((e.clientX-rect.left)/rect.width*W),r=Math.floor((e.clientY-rect.top)/rect.height*H);return c>=0&&c<W&&r>=0&&r<H?r*W+c:-1;}
function fmt(v){return Number.isFinite(v)?v.toFixed(1)+' min':'No feasible route';}
function path(nodes){return nodes.map((n,j)=>{const q=xy(n);return `${j?'L':'M'}${q.x},${q.y}`;}).join(' ');}
function marker(n,color,label){const q=xy(n);return `<g data-node="${n}" style="cursor:pointer"><circle cx="${q.x}" cy="${q.y}" r="4" fill="${color}" stroke="white"/><text x="${q.x+6}" y="${q.y-6}" class="targetLabel" fill="white" style="font-size:7px">${label}</text></g>`;}
function transform(){stage.style.transform=`translate(calc(-50% + ${panX}px),calc(-50% + ${panY}px)) scale(${zoom})`;}
function request(){
 if(!ready)return;
 const choice=el('objective').value;
 selectedIds=choice==='delta'?[D.targets[0]]:choice==='aqueous'?[D.targets[1]]:D.targets;
 const budget=+el('time').value,reserve=480*(+el('reserve').value)/100;
 el('timeVal').textContent=budget+' min';el('reserveVal').textContent=`${el('reserve').value}% = ${reserve} min`;
 el('dwellVal').textContent=el('dwell').value+' min';
 el('usableTime').textContent=fmt(Math.max(0,budget-reserve));
 pending={type:'calculate',seq:++seq,p,x,ids:selectedIds,budget,reserve,dwell:+el('dwell').value,stationDwell:15};
 el('computeState').textContent='Computing terrain routes…';
 // Hide stale routes/field immediately after constraints change.
 result=null;svg.innerHTML='';
 if(!inflight)dispatch();
}
function dispatch(){if(!pending)return;const req=pending;pending=null;inflight=true;worker.postMessage(req);}
function render(){
 if(!result)return;let s='';
 const geology=el('showGeology').checked,crism=el('showCRISM').checked;
 if(el('showFreedom').checked&&!geology&&!crism)s+=`<image width="${W}" height="${H}" href="${canvas.toDataURL()}" style="image-rendering:pixelated"/>`;
 if(geology){
  s+=`<image width="${W}" height="${H}" href="${D.science.geology.image}"/>`;
  for(const contact of D.science.geology.contacts){
   const d=contact.points.map((q,i)=>`${i?'L':'M'}${q[0]},${q[1]}`).join(' ');
   const certain=contact.type==='certain';
   s+=`<path d="${d}" fill="none" stroke="#fff2be" stroke-width=".7" ${certain?'':'stroke-dasharray="2 2"'}><title>${esc(contact.type)}</title></path>`;
  }
 }
 if(crism){const b=D.science.crism.bounds;
  const left=(b[0]-B[0])/(B[2]-B[0])*W,top=(B[3]-b[3])/(B[3]-B[1])*H;
  s+=`<image x="${left}" y="${top}" width="${(b[2]-b[0])/(B[2]-B[0])*W}" height="${(b[3]-b[1])/(B[3]-B[1])*H}" preserveAspectRatio="none" href="${D.science.crism.image}" style="image-rendering:pixelated"/>`;
 }
 if(el('showAOI').checked){const q=D.aoiPixels;s+=`<rect x="${q[0]}" y="${q[1]}" width="${q[2]-q[0]}" height="${q[3]-q[1]}" fill="none" stroke="#58b9ff" stroke-width="1" stroke-dasharray="4 3"/>`;}
 if(el('showRoutes').checked){s+=`<path d="${path(result.baseline.nodes)}" fill="none" stroke="#4ba3ff" stroke-width="2.3"/>`;
 s+=`<path d="${path(result.ret.nodes)}" fill="none" stroke="white" stroke-width="1.4" stroke-dasharray="3 2"/>`;}
 if(el('showTargets').checked)for(const n of D.targets)s+=marker(n,'#b4a1ff',names[n]);
 if(el('showCandidates').checked)for(const c of D.science.crism.candidates)s+=marker(c.node,'#63edff',esc(c.label));
 s+=marker(D.home,'#fff','Habitat')+marker(p,'#ff6868','Astronaut')+marker(x,'#f5c85b','Inspect here');
 svg.innerHTML=s;
 svg.querySelectorAll('[data-node]').forEach(g=>g.addEventListener('pointerdown',e=>{e.stopPropagation();x=+g.dataset.node;request();}));
}
function display(r){
 result=r;const rgba=ctx.createImageData(W,H),colors=[[95,105,115,120],[255,75,75,100],[245,200,91,105],[65,215,132,105]],counts=[0,0,0,0];
 for(let i=0;i<N;i++){const q=xy(i),a=D.aoiPixels;if(q.x>=a[0]&&q.x<a[2]&&q.y>=a[1]&&q.y<a[3])counts[r.labels[i]]++;
  const color=colors[r.labels[i]];for(let j=0;j<4;j++)rgba.data[4*i+j]=color[j];}
 ctx.putImageData(rgba,0,0);
 el('computeState').textContent='Real CTX terrain · ready';
 el('retDist').textContent=fmt(r.ret.cost);el('scienceDist').textContent=fmt(r.baseline.cost);
 const usable=+el('time').value-480*(+el('reserve').value)/100;
 el('scienceStatus').textContent=r.baseline.cost<=usable?'Fits model':'Over budget';
 el('returnStatus').textContent=r.ret.cost<=usable?'Fits model':'Reserve violated';
 el('statusPill').textContent=`AOI green: ${counts[3].toLocaleString()} cells`;
 el('returnPill').textContent=`Yellow: ${counts[2].toLocaleString()} · red: ${counts[1].toLocaleString()}`;
 const chosen=r.selected,options=chosen.options;
 el('detourResult').innerHTML=`<b>${statusNames[chosen.status]}</b><p>Detour + full mission + return: ${fmt(chosen.fullCost)}</p><p>Extra over baseline: ${fmt(chosen.incrementalCost)}</p><p>Return margin after reserve: ${fmt(chosen.margin)}</p><p>Full-mission margin: ${fmt(chosen.missionMargin)}</p><p>${options.length?(options[0].dropped.length?'Fits if dropped: '+options[0].dropped.map(n=>names[n]).join(', '):'All planned objectives fit.'):'No return plan fits at this point.'}</p><small>Visiting a target does not count as completing its scientific task. Yellow is a proposed tradeoff, never automatic authorization.</small>`;
 el('boundaryNote').textContent=r.boundary?'Domain warning: reachable buffer edge. Feasibility is restricted to this grid; enlarge domain before treating red as global infeasibility.':'All boundary cells are outside the one-way usable budget for this scenario.';
 showEvidence();render();
}
worker.onmessage=({data})=>{
 if(data.type==='ready'){ready=true;request();return;}
 inflight=false;
 if(data.error){el('computeState').textContent=data.error;dispatch();return;}
 if(data.seq===seq)display(data);
 dispatch();
};
worker.onerror=e=>el('computeState').textContent='Engine error: '+e.message;
async function bytes(b64){const raw=Uint8Array.from(atob(b64),c=>c.charCodeAt(0));return new Response(new Blob([raw]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();}
(async()=>{try{
 const [costs,walk,units,...bands]=await Promise.all([bytes(D.costs),bytes(D.walkable),bytes(D.science.geology.unit_grid),...Object.values(D.science.crism.bands).map(bytes)]);window.marsWalkable=new Uint8Array(walk.slice(0));
 scienceDecoded={units:new Uint8Array(units),bands:Object.fromEntries(Object.keys(D.science.crism.bands).map((key,i)=>[key,new Float32Array(bands[i])]))};
 worker.postMessage({type:'init',W,H,meta:{aoiPixels:D.aoiPixels},home:D.home,targets:D.targets,costs,walkable:walk},[costs,walk]);
}catch(e){el('computeState').textContent='Cannot initialize: '+e.message;}})();
viewport.addEventListener('pointerdown',e=>{if(e.button===0){drag={x:e.clientX,y:e.clientY,px:panX,py:panY};viewport.setPointerCapture(e.pointerId);}});
viewport.addEventListener('pointermove',e=>{
 if(drag&&Math.hypot(e.clientX-drag.x,e.clientY-drag.y)>5){panX=drag.px+e.clientX-drag.x;panY=drag.py+e.clientY-drag.y;transform();}
 const n=point(e);if(n>=0){const q=ll(xy(n));el('coord').textContent=`${q.lon.toFixed(5)}°E · ${q.lat.toFixed(5)}°N · native 20 m grid`;}
});
viewport.addEventListener('pointerup',e=>{if(drag&&Math.hypot(e.clientX-drag.x,e.clientY-drag.y)<5){const n=point(e);if(n>=0&&window.marsWalkable?.[n]){if(moveMode)p=n;else x=n;request();}else el('computeState').textContent='Unknown or slope-blocked cell. Choose another point.';}drag=null;});
viewport.addEventListener('wheel',e=>{e.preventDefault();zoom=Math.min(6,Math.max(.6,zoom*(e.deltaY<0?1.15:.87)));transform();},{passive:false});
el('placeAstronaut').onclick=()=>{moveMode=!moveMode;el('placeAstronaut').textContent=moveMode?'Map click: move astronaut':'Map click: inspect detour';el('placeAstronaut').classList.toggle('active',moveMode);};
el('resetPos').onclick=()=>{p=D.home;x=D.targets[0];request();};
el('zoomIn').onclick=()=>{zoom=Math.min(6,zoom*1.2);transform();};el('zoomOut').onclick=()=>{zoom=Math.max(.6,zoom/1.2);transform();};el('home').onclick=()=>{zoom=1;panX=panY=0;transform();};
['time','reserve','objective','dwell'].forEach(id=>el(id).addEventListener('input',request));
['showRoutes','showFreedom','showTargets','showAOI','showCandidates'].forEach(id=>el(id).addEventListener('input',render));
['showGeology','showCRISM'].forEach(id=>el(id).addEventListener('input',()=>{if(el(id).checked)el(id==='showGeology'?'showCRISM':'showGeology').checked=false;render();}));
el('export').onclick=()=>{if(!result)return;const out={source:D.source,model:D.model,scenario:{astronaut:ll(xy(p)),detour:ll(xy(x)),remaining_min:+el('time').value,reserve_min:480*(+el('reserve').value)/100,detour_dwell_min:+el('dwell').value,station_dwell_min:15,planned_targets:selectedIds.map(n=>names[n])},baseline_min:result.baseline.cost,return_min:result.ret.cost,detour:result.selected,evidence:evidence(),boundary_reachable:result.boundary,limitations:D.limitations};const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(out,null,2)],{type:'application/json'}));a.download='MarsFlex_decision.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);};
transform();
})();
