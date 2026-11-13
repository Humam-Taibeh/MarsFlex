/* MarsFlex source-native evidence lookup. No effect on the routing graph. */
const MarsScience = (()=>{
 function lookup(S,decoded,node,lon,lat){
  const key=decoded.units[node],unit=S.geology.legend[String(key)];
  const C=S.crism,b=C.bounds,[h,w]=C.shape;
  const col=Math.floor((lon-b[0])/(b[2]-b[0])*w),row=Math.floor((b[3]-lat)/(b[3]-b[1])*h);
  const inBounds=col>=0&&col<w&&row>=0&&row<h,values={};
  for(const [name,arr] of Object.entries(decoded.bands)){
   const value=inBounds?arr[row*w+col]:NaN;
   values[name]=Number.isFinite(value)&&value!==C.manifest.no_data?value:null;
  }
  return {geology:{name:unit?.name||'No unique mapped unit',symbol:unit?.symbol||null,
    source:S.geology.source,scale:S.geology.scale,scope:S.geology.scope},
    crism:{product_id:C.manifest.product_id,source_url:C.manifest.source_url,
    native_row:inBounds?row:null,native_col:inBounds?col:null,values,
    note:'Dimensionless summary parameters; not abundance, probability, or mineral confirmation.'}};
 }
 return {lookup};
})();
if(typeof module!=='undefined')module.exports=MarsScience;
