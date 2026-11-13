/* MarsFlex original deterministic worker. Apache-2.0. Costs originate in terrain.py. */
let W,H,N,C,Z,meta,walkable,home,targets,cache={},lastP=-1,fromP;
const DR=[-1,-1,0,1,1,1,0,-1], DC=[0,1,1,1,0,-1,-1,-1];
function shortest(start,reverse=false){
 const dist=new Float64Array(N);dist.fill(Infinity);
 const prev=new Int32Array(N);prev.fill(-1);
 const hn=[],hp=[];
 function push(n,p){let i=hn.length;hn.push(n);hp.push(p);while(i){let j=(i-1)>>1;if(hp[j]<=p)break;hn[i]=hn[j];hp[i]=hp[j];i=j;}hn[i]=n;hp[i]=p;}
 function pop(){const n=hn[0],p=hp[0],vn=hn.pop(),vp=hp.pop();if(hn.length){let i=0;while(2*i+1<hn.length){let j=2*i+1;if(j+1<hn.length&&hp[j+1]<hp[j])j++;if(hp[j]>=vp)break;hn[i]=hn[j];hp[i]=hp[j];i=j;}hn[i]=vn;hp[i]=vp;}return [n,p];}
 dist[start]=0;push(start,0);
 while(hn.length){const [u,t]=pop();if(t!==dist[u])continue;
  const r=Math.floor(u/W),c=u%W;
  for(let k=0;k<8;k++){const nr=r+DR[k],nc=c+DC[k];if(nr<0||nr>=H||nc<0||nc>=W)continue;
   const v=nr*W+nc,weight=reverse?C[((k+4)%8)*N+v]:C[k*N+u],nt=t+weight;
   if(nt<dist[v]){dist[v]=nt;prev[v]=u;push(v,nt);}
  }
 }
 return {dist,prev};
}
function trace(start,end,table,reverse){
 if(!Number.isFinite(table.dist[reverse?start:end]))return [];
 let n=reverse?start:end,goal=reverse?end:start,result=[n];
 while(n!==goal){n=table.prev[n];if(n<0||result.length>N)throw Error('Invalid route');result.push(n);}
 return reverse?result:result.reverse();
}
function chain(start,ids){let nodes=[start],cost=0,u=start;for(const id of ids){const t=cache[id];cost+=t.dist[u];const part=trace(u,id,t,true);if(!part.length)return {nodes:[],cost:Infinity};nodes.push(...part.slice(1));u=id;}return {nodes,cost};}
function field(p,ids,budget,reserve,dwell,stationDwell){
 if(p!==lastP){fromP=shortest(p);lastP=p;}
 const back=cache[home].dist,labels=new Uint8Array(N);
 let tail=back;
 for(let j=ids.length-1;j>=0;j--){const next=new Float64Array(N),extra=stationDwell+tail[ids[j]],dist=cache[ids[j]].dist;for(let i=0;i<N;i++)next[i]=dist[i]+extra;tail=next;}
 let boundary=false;
 for(let i=0;i<N;i++){
  const known=walkable[i]&&Number.isFinite(fromP.dist[i])&&Number.isFinite(back[i]);
  if(!known)continue;
  const outbound=fromP.dist[i]+dwell;
  labels[i]=outbound+back[i]+reserve<=budget?2:1;
  if(outbound+tail[i]+reserve<=budget)labels[i]=3;
  if((i<W||i>=N-W||i%W===0||i%W===W-1)&&fromP.dist[i]<=budget-reserve)boundary=true;
 }
 return {labels,tail,boundary};
}
function evaluate(req){
 const {p,ids,budget,reserve,dwell,stationDwell,x}=req;
 if(!walkable[p]||!walkable[x]||![budget,reserve,dwell,stationDwell].every(n=>Number.isFinite(n)&&n>=0))throw Error('Invalid position or constraints');
 const f=field(p,ids,budget,reserve,dwell,stationDwell),baseline=chain(p,[...ids,home]);
 baseline.cost+=ids.length*stationDwell;
 const ret=chain(p,[home]);
 const selected=chain(x,[...ids,home]);
 const outbound=trace(p,x,fromP,false);
 const fullCost=fromP.dist[x]+dwell+f.tail[x],returnCost=fromP.dist[x]+dwell+cache[home].dist[x];
 const options=[];
 for(let mask=0;mask<(1<<ids.length);mask++){
  const kept=ids.filter((_,j)=>mask&(1<<j)),dropped=ids.filter((_,j)=>!(mask&(1<<j)));
  const route=chain(x,[...kept,home]),cost=fromP.dist[x]+dwell+route.cost+stationDwell*kept.length;
  if(cost+reserve<=budget)options.push({kept,dropped,cost});
 }
 options.sort((a,b)=>b.kept.length-a.kept.length||a.cost-b.cost);
 return {seq:req.seq,labels:f.labels,baseline,ret,selected:{nodes:[...outbound,...selected.nodes.slice(1)],fullCost,returnCost,
   incrementalCost:fullCost-baseline.cost,margin:budget-reserve-returnCost,missionMargin:budget-reserve-fullCost,
   status:f.labels[x],options},boundary:f.boundary};
}
if(typeof self!=='undefined')self.onmessage=async({data})=>{
 try{
  if(data.type==='init'){
   ({W,H,meta,home,targets}=data);N=W*H;C=new Float32Array(data.costs);walkable=new Uint8Array(data.walkable);
   for(const id of [home,...targets])cache[id]=shortest(id,true);
   self.postMessage({type:'ready'});
  }else{const result=evaluate(data);self.postMessage(result,[result.labels.buffer]);}
 }catch(e){self.postMessage({error:String(e),seq:data.seq});}
};
if(typeof module!=='undefined')module.exports={shortest,field,evaluate,trace,setup(d){({W,H,meta,home,targets}=d);N=W*H;C=d.costs;walkable=d.walkable;cache={};lastP=-1;for(const id of [home,...targets])cache[id]=shortest(id,true);}};
