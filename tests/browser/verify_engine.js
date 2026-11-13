/* Execute the actual embedded worker under Node; this is not browser UI QA. */
const fs=require('fs'),zlib=require('zlib'),path=require('path'),assert=require('assert');
const root=path.resolve(__dirname,'../..'),out=process.argv[2];
const html=fs.readFileSync(path.join(root,'reports/MarsFlex_Terrain_v2.html'),'utf8');
const D=JSON.parse(html.match(/<script type="application\/json" id="payload">([\s\S]*?)<\/script>/)[1]);
const decode=s=>Uint8Array.from(zlib.gunzipSync(Buffer.from(s,'base64'))).buffer;
const engine=require('../../frontend/legacy/engine.js');
engine.setup({W:D.shape[1],H:D.shape[0],home:D.home,targets:D.targets,meta:{},costs:new Float32Array(decode(D.costs)),walkable:new Uint8Array(decode(D.walkable))});
const start=Date.now(),result=engine.evaluate({seq:1,p:D.home,x:D.targets[0],ids:[D.targets[0]],budget:300,reserve:72,dwell:10,stationDwell:15});
fs.writeFileSync(path.join(out,'labels.u8'),result.labels);
const science=require('../../frontend/legacy/science.js'),S=D.science;
const decoded={units:new Uint8Array(decode(S.geology.unit_grid)),bands:Object.fromEntries(Object.entries(S.crism.bands).map(([k,v])=>[k,new Float32Array(decode(v))]))};
const checks=S.crism.candidates.map(c=>{
 const ev=science.lookup(S,decoded,c.node,c.lon,c.lat);
 assert.strictEqual(ev.crism.native_row,c.native_row);assert.strictEqual(ev.crism.native_col,c.native_col);
 for(const [k,v] of Object.entries(ev.crism.values))assert.strictEqual(v,decoded.bands[k][c.native_row*455+c.native_col]);
 return ev;
});
const outside=science.lookup(S,decoded,D.home,0,0);
assert(Object.values(outside.crism.values).every(v=>v===null));
// Check a real source NoData pixel, not a fabricated zero.
const invalid=decoded.bands.BD2500_2.findIndex(v=>v===65535),r=Math.floor(invalid/455),c=invalid%455,b=S.crism.bounds;
const ev=science.lookup(S,decoded,D.home,b[0]+(c+.5)/455*(b[2]-b[0]),b[3]-(r+.5)/751*(b[3]-b[1]));
assert.strictEqual(ev.crism.values.BD2500_2,null);
fs.writeFileSync(path.join(out,'result.json'),JSON.stringify({baseline:result.baseline,selected:result.selected,elapsed_ms:Date.now()-start,science_checks:checks}));
console.log('Embedded engine and native science lookups executed successfully.');
