import {lazy,Suspense,useState} from 'react';
import {createRoot} from 'react-dom/client';
import type {Pick} from './geoscene';
import GeoStudio from './GeoStudio';
const Mission=lazy(()=>import('./main'));
function Workspace(){const [mode,setMode]=useState('mission');const [point,setPoint]=useState<Pick>();const [draft,setDraft]=useState<any>();const [savedMission,setSavedMission]=useState<{request:any;result:any}>();return <>{mode==='geology'&&<nav className="modebar"><span>MARSFLEX WORKSPACE</span><button className={mode==='geology'?'active':''} onClick={()=>setMode('geology')}>3D terrain & sections</button><button className="" onClick={()=>setMode('mission')}>Expedition planning</button></nav>}{mode==='geology'?<GeoStudio savedMission={savedMission} openMission={p=>{setPoint(p);setMode('mission');}}/>:<Suspense fallback={<div className="workspace-loading">Loading expedition planner…</div>}><Mission onOpenTerrain={()=>setMode('geology')} initialPoint={point} initialRequest={draft} onDraft={setDraft} onComputed={(request,result)=>setSavedMission({request,result})}/></Suspense>}</>;}
createRoot(document.getElementById('root')!).render(<Workspace/>);
