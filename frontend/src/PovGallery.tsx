import {useEffect,useState} from 'react';

type Img={imageid:string;sol:number;camera:string;date_taken_utc:string;credit:string;link:string;file:string};
let cache:Promise<any>|undefined;
export function loadPov(){if(!cache)cache=fetch('/v1/pov').then(r=>{if(!r.ok)throw Error('no pov');return r.json();}).catch(()=>{cache=undefined;return undefined;});return cache;}
const CAMERA:Record<string,string>={FRONT_HAZCAM_LEFT_A:'Front Hazcam',NAVCAM_LEFT:'Navcam',MCZ_LEFT:'Mastcam-Z'};

/** "What you will see": raw Perseverance images taken at the station, with their NASA credit. */
export function PovGallery({station}:{station?:string}){
  const [data,setData]=useState<any>(),[open,setOpen]=useState<Img|null>(null);
  useEffect(()=>{let alive=true;void loadPov().then(d=>{if(alive)setData(d);});return()=>{alive=false;};},[]);
  useEffect(()=>{if(!open)return;const k=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(null);};addEventListener('keydown',k);return()=>removeEventListener('keydown',k);},[open]);
  const s=station?data?.stations?.[station]:undefined;
  if(!s)return null;
  return <div className="pov">
    <div className="pov-head"><span className="trust-kicker">WHAT YOU WILL SEE</span><small>Perseverance at this station</small></div>
    <div className="pov-strip">{s.images.map((img:Img,i:number)=><button key={img.file} style={{animationDelay:`${i*70}ms`}} onClick={()=>setOpen(img)} aria-label={`Open ${CAMERA[img.camera]??img.camera} image from sol ${img.sol}`}>
      <img src={'/v1/pov/image/'+img.file} alt={`${s.name}: ${CAMERA[img.camera]??img.camera}, sol ${img.sol}`} loading="lazy"/><span>{CAMERA[img.camera]??img.camera} · sol {img.sol}</span></button>)}</div>
    <small className="pov-note">Raw rover images (rover viewpoint, not an astronaut viewpoint). Credit: {[...new Set(s.images.map((i:Img)=>i.credit))].join('; ')}.</small>
    {open&&<div className="pov-lightbox" role="dialog" aria-modal="true" aria-label="Rover image" onClick={()=>setOpen(null)}>
      <figure onClick={e=>e.stopPropagation()}><img src={'/v1/pov/image/'+open.file} alt={`${s.name}, ${CAMERA[open.camera]??open.camera}, sol ${open.sol}`}/>
        <figcaption><b>{s.name} · {CAMERA[open.camera]??open.camera} · sol {open.sol}</b><span>{open.date_taken_utc.slice(0,10)} UTC · raw, unprocessed image · Credit: {open.credit}</span>
          <a href={open.link} target="_blank" rel="noreferrer">Original on mars.nasa.gov ↗</a></figcaption>
        <button className="pov-close" aria-label="Close image" onClick={()=>setOpen(null)}>✕</button></figure></div>}
  </div>;
}
