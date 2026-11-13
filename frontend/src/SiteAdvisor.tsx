import {useState} from 'react';

export type Weights={traversability:number;reachability:number;science:number};
export type Site={rank:number;lon:number;lat:number;score:number;components:Weights;science_parts:Record<string,number>;slope_deg:number;
  round_trip_min:number;round_trip_o2_kg:number;budget_used_fraction:number;nearest_target:string|null;nearest_target_m:number;reasons:string[]};

const LABEL:Record<keyof Weights,string>={traversability:'Easy terrain',reachability:'Safety margin',science:'Science value'};

/** Mission Site Advisor panel: ranked candidates, their reasons, and the weights that produced them. */
export function SiteAdvisor({data,busy,weights,onWeights,onRecompute,onFly,onPlan,onClose}:{data?:any;busy:boolean;weights:Weights;
  onWeights:(w:Weights)=>void;onRecompute:()=>void;onFly:(s:Site)=>void;onPlan:(s:Site)=>void;onClose:()=>void}){
  const [open,setOpen]=useState<number|null>(1);
  const sites:Site[]=data?.top_sites??[];
  return <aside className="site-panel" aria-label="Mission Site Advisor">
    <div className="site-head"><div><span className="trust-kicker">MISSION SITE ADVISOR</span><h2>Where should we go?</h2></div>
      <button className="site-close" aria-label="Close site advisor" onClick={onClose}>✕</button></div>
    <p className="site-intro">Every 20 m cell is scored on terrain, round-trip safety margin (time, oxygen, suit time) and science value. Brighter means better.</p>
    <div className="site-ramp" aria-hidden><span>Lower</span><i/><span>Higher</span></div>
    {busy&&<div className="site-busy"><span className="spinner"/>Scoring {data?'again':'the crater'}…</div>}
    {!busy&&data&&sites.length===0&&<p className="site-empty">No cell fits these budgets. Increase the time budget or lower the reserve.</p>}
    <ol className="site-list">{sites.map(s=><li key={s.rank} className={open===s.rank?'open':''}>
      <button className="site-row" aria-expanded={open===s.rank} onClick={()=>{setOpen(s.rank);onFly(s);}}>
        <span className="site-rank">{s.rank}</span>
        <span className="site-main"><b>{s.nearest_target&&s.nearest_target_m<600?`Near ${s.nearest_target}`:`Candidate ${s.rank}`}</b>
          <small>{Math.round(s.round_trip_min)} min round trip · {s.round_trip_o2_kg.toFixed(2)} kg O₂ · slope {s.slope_deg.toFixed(1)}°</small></span>
        <span className="site-score"><b>{Math.round(s.score*100)}</b><small>/100</small></span>
      </button>
      {open===s.rank&&<div className="site-detail">
        {(Object.keys(LABEL) as (keyof Weights)[]).map(k=><div className="site-bar" key={k}><span>{LABEL[k]}</span><i><em style={{width:`${Math.round(s.components[k]*100)}%`}}/></i><b>{Math.round(s.components[k]*100)}</b></div>)}
        <ul>{s.reasons.map(r=><li key={r}>{r}</li>)}</ul>
        <button className="site-plan" onClick={()=>onPlan(s)}>Plan mission here <span aria-hidden>→</span></button>
      </div>}
    </li>)}</ol>
    <details className="site-weights"><summary>Adjust what matters</summary>
      {(Object.keys(LABEL) as (keyof Weights)[]).map(k=><label key={k}>{LABEL[k]}<input type="range" min="0" max="1" step="0.05" value={weights[k]} onChange={e=>onWeights({...weights,[k]:+e.target.value})}/><b>{Math.round(weights[k]*100)}</b></label>)}
      <button className="outline" disabled={busy} onClick={onRecompute}>Recompute</button>
    </details>
    <details className="site-method"><summary>Method, sources and limits</summary><div>
      <p>Terrain: 1 − slope / 20° gate (CTX 20 m). Safety margin: what is left of the most limiting of time budget (with reserve), reference-suit O₂ and suit EVA time after the round trip and a 30 min stop. Science: 45% closeness to a PIXL-sampled target, 35% CRISM summary-parameter strength, 20% within 500 m of a recorded Perseverance position.</p>
      <p>{(data?.limits??[]).join(' ')}</p></div></details>
  </aside>;
}
