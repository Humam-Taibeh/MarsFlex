import {useEffect,useRef,useState} from 'react';
import type {WalkController} from './scene';

type Sample={distance_m:number;elevation_m:number;incoming_grade_deg:number;surface_slope_deg:number;travel_min:number};
export type WalkBus={fn?:(s:number)=>void};

const clock=(min:number)=>{const m=Math.floor(min),s=Math.round((min-m)*60);return `${m}:${String(s).padStart(2,'0')}`;};

/** Heads-up display for the route replay. Owns its own state so the 60 fps camera loop never re-renders the app. */
export function WalkHud({samples,bus,ctl,onStop,life}:{samples:Sample[];bus:WalkBus;ctl:()=>WalkController|undefined;onStop:()=>void;life?:any}){
  const [t,setT]=useState(0),[playing,setPlaying]=useState(true),[speed,setSpeed]=useState(1),[rate,setRate]=useState(0.64);
  const last=useRef(0);
  useEffect(()=>{bus.fn=s=>{if(Math.abs(s-last.current)<.0015&&s<1)return;last.current=s;setT(s);setPlaying(ctl()?.playing??false);};return()=>{bus.fn=undefined;};},[bus,ctl]);
  useEffect(()=>{const c=new AbortController();fetch('/v1/environment/radiation?minutes=0',{signal:c.signal}).then(r=>r.json()).then(d=>{if(typeof d.rate_mSv_per_day==='number')setRate(d.rate_mSv_per_day);}).catch(()=>{});return()=>c.abort();},[]);
  if(samples.length<2)return null;
  const total=samples[samples.length-1].distance_m||1,d=t*total;
  let j=1;while(j<samples.length-1&&samples[j].distance_m<d)j++;
  const a=samples[j-1],b=samples[j],u=b.distance_m>a.distance_m?Math.max(0,Math.min(1,(d-a.distance_m)/(b.distance_m-a.distance_m))):0;
  const mix=(k:keyof Sample)=>a[k]+(b[k]-a[k])*u;
  const minutes=mix('travel_min'),elevation=mix('elevation_m'),grade=b.incoming_grade_deg;
  const done=t>=1;
  const ls=life?.samples?.length===samples.length?life.samples:undefined;
  const o2=ls?ls[j-1].o2_remaining_kg+(ls[j].o2_remaining_kg-ls[j-1].o2_remaining_kg)*u:undefined;
  const suitLeft=ls?ls[j-1].suit_time_remaining_min+(ls[j].suit_time_remaining_min-ls[j-1].suit_time_remaining_min)*u:undefined;
  const pastPnr=ls?!ls[j].return_possible:false;
  // with the life-support ledger, elapsed time includes the science stops (same clock as oxygen and suit time)
  const elapsed=ls?ls[j-1].elapsed_min+(ls[j].elapsed_min-ls[j-1].elapsed_min)*u:minutes,doseNow=rate*elapsed/1440;
  return <div className="walk-hud" role="region" aria-label="Route replay">
    <button className="walk-play" aria-label={playing&&!done?'Pause':done?'Replay':'Play'} onClick={()=>{const c=ctl();if(!c)return;if(playing&&!done)c.pause();else c.resume();setPlaying(c.playing);}}>{playing&&!done?'❚❚':done?'↺':'▶'}</button>
    <div className="walk-main">
      <input type="range" aria-label="Position along the route" min="0" max="1000" value={Math.round(t*1000)} onChange={e=>{const v=+e.target.value/1000;ctl()?.seek(v);setT(v);}}/>
      <div className="walk-stats">
        <span><small>Elapsed (scenario)</small><b>{clock(elapsed)}</b></span>
        <span><small>Distance</small><b>{(d/1000).toFixed(2)} km</b></span>
        <span><small>Elevation</small><b>{elevation.toFixed(0)} m</b></span>
        <span><small>Local grade</small><b className={Math.abs(grade)>12?'warn':''}>{grade>=0?'+':''}{grade.toFixed(1)}°</b></span>
        <span><small>Dose so far</small><b>≈ {doseNow<0.01?doseNow.toFixed(4):doseNow.toFixed(3)} mSv</b></span>
        {o2!==undefined&&<span><small>O₂ left (EMU ref.)</small><b className={o2<0.1?'warn':''}>{o2.toFixed(3)} kg</b></span>}
        {suitLeft!==undefined&&<span><small>Suit time left</small><b>{Math.floor(Math.max(0,suitLeft)/60)} h {String(Math.round(Math.max(0,suitLeft)%60)).padStart(2,'0')} min</b></span>}
      </div>
    </div>
    {pastPnr&&<div className="walk-alert" role="alert">Past the turn-back point</div>}
    <div className="walk-speed" role="group" aria-label="Replay speed">{[1,2,4].map(x=><button key={x} className={speed===x?'active':''} aria-pressed={speed===x} onClick={()=>{ctl()?.setSpeed(x);setSpeed(x);}}>{x}×</button>)}</div>
    <button className="walk-close" aria-label="Stop route replay" onClick={onStop}>✕</button>
  </div>;
}
