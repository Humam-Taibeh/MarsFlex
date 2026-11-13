import * as C from 'cesium';

export type Point = {lon:number;lat:number};
export type Hover = {label:string;lon:number;lat:number;x:number;y:number};
export type WalkController = {pause:()=>void;resume:()=>void;seek:(s:number)=>void;setSpeed:(x:number)=>void;stop:()=>void;readonly playing:boolean};
export type Grid = {shape:number[];transform:number[];radius_m:number;aoi_lonlat:number[];elevation_range_m:number[]};
export type Surface = {grid:Grid;data:string;rendering_frame:string};
export function bytes64(text:string){ return Uint8Array.from(atob(text),c=>c.charCodeAt(0)); }
export async function decodeField(text:string){
  const stream = new Blob([bytes64(text)]).stream().pipeThrough(new DecompressionStream('gzip'));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

/** Local relief renderer. Its local datum is not a global areoid/ellipsoid solution. */
export class MarsScene {
  viewer:C.Viewer;
  grid:Grid;
  z:Float32Array;
  frame:C.Matrix4;
  inverse:C.Matrix4;
  w:number;h:number;
  cx:number;cy:number;cos:number;
  baseHeight=-2500;
  /** Display-only vertical exaggeration. Elevations, slopes and distances reported by the API are never scaled. */
  readonly exag=2.2;
  is2D=false;
  anim=0;
  introDone=false;
  material:C.Material;
  base:Uint8ClampedArray;
  rover:C.PointPrimitiveCollection;
  click:C.ScreenSpaceEventHandler;
  routeEntities:C.Entity[]=[];
  selected:C.Entity|undefined;
  mode='inspect';
  layerSerial=0;
  routeSerial=0;
  terrainFine!:C.Primitive;
  fx!:HTMLCanvasElement;fxRaf=0;fxStations:{w:C.Cartesian3;color:string;s?:C.Cartesian2}[]=[];fxRoute:C.Cartesian3[]=[];fxRouteScreen:C.Cartesian2[]=[];
  hover?:C.ScreenSpaceEventHandler;onHover?:(h?:Hover)=>void;lastPick=0;lastInput=0;spinRaf=0;moving=false;pointerDown=false;fxCleared=false;
  terrainCoarse!:C.Primitive;
  lodFine=false;
  lowTimer=0;
  descending=false;
  walkCtl?:WalkController;
  walker?:C.Entity;
  globeLayer?:C.ImageryLayer;
  globeData?:C.CustomDataSource;
  globeReady=false;
  globeMode=false;
  globeLoading:Promise<void>=Promise.resolve();
  fadeSerial=0;
  onMode?:(m:'globe'|'3d'|'2d')=>void;
  orbital:HTMLImageElement|undefined;
  markerEntities:C.Entity[]=[];
  contactEntities:C.Entity[]=[];
  referenceEntities:C.Entity[]=[];
  cursor:C.Entity|undefined;

  constructor(element:HTMLElement,data:Surface,onPick:(p:Point)=>void){
    this.grid=data.grid;[this.h,this.w]=this.grid.shape;
    this.z=new Float32Array(bytes64(data.data).buffer);
    const [a,,c,,,f]=this.grid.transform;
    this.cx=c+this.w*a/2;this.cy=f-this.h*a/2;
    const lat=this.cy/this.grid.radius_m,lon=this.cx/this.grid.radius_m;
    this.cos=Math.cos(lat);
    const sphere=new C.Ellipsoid(this.grid.radius_m,this.grid.radius_m,this.grid.radius_m);
    this.frame=C.Transforms.eastNorthUpToFixedFrame(C.Cartesian3.fromRadians(lon,lat,0,sphere),sphere);
    this.inverse=C.Matrix4.inverseTransformation(this.frame,new C.Matrix4());
    this.viewer=new C.Viewer(element,{ellipsoid:sphere,mapProjection:new C.GeographicProjection(sphere),
      globe:false,baseLayer:false,skyBox:false,skyAtmosphere:false,animation:false,timeline:false,
      geocoder:false,baseLayerPicker:false,homeButton:false,navigationHelpButton:false,
      sceneModePicker:false,fullscreenButton:false,selectionIndicator:false,infoBox:false,
      requestRenderMode:true,contextOptions:{webgl:{alpha:false,antialias:true}}});
    this.viewer.scene.backgroundColor=C.Color.fromCssColorString('#0a1015');
    this.viewer.scene.fog.enabled=false;this.viewer.scene.highDynamicRange=false;
    this.viewer.scene.postProcessStages.fxaa.enabled=false;this.viewer.targetFrameRate=60;
    this.viewer.scene.maximumRenderTimeChange=Infinity;
    this.viewer.camera.percentageChanged=0.02;
    {const cv=this.viewer.canvas,px=cv.clientWidth*cv.clientHeight*devicePixelRatio*devicePixelRatio;
      this.viewer.scene.msaaSamples=px>3.2e6?2:4;this.viewer.resolutionScale=this.scaleCap();}
    this.viewer.camera.changed.addEventListener(()=>this.motion());
    this.viewer.scene.skyBox=this.starfield();
    {const atm=new C.SkyAtmosphere(sphere);atm.hueShift=-.52;atm.saturationShift=.12;atm.brightnessShift=-.12;atm.show=false;this.viewer.scene.skyAtmosphere=atm;}
    if(this.viewer.scene.sun)this.viewer.scene.sun.show=false; if(this.viewer.scene.moon)this.viewer.scene.moon.show=false;
    this.viewer.scene.light=new C.DirectionalLight({direction:C.Matrix4.multiplyByPointAsVector(this.frame,new C.Cartesian3(.3,.4,-1),new C.Cartesian3()),intensity:1.7});
    const ctl=this.viewer.scene.screenSpaceCameraController;ctl.minimumZoomDistance=80;ctl.inertiaSpin=.88;ctl.inertiaZoom=.8;ctl.inertiaTranslate=.88;
    this.viewer.scene.preRender.addEventListener(()=>{this.limitPitch();this.updateLod();this.autoDescend();});
    this.viewer.scene.screenSpaceCameraController.maximumZoomDistance=45000;
    this.viewer.creditDisplay.addStaticCredit(new C.Credit('Terrain: USGS / NASA MRO · Rover: NASA PDS Mars 2020',true));
    this.base=new Uint8ClampedArray(this.z.length*4);
    const [lo,hi]=this.grid.elevation_range_m,span=hi-lo||1;
    for(let n=0;n<this.z.length;n++){const q=Math.max(0,Math.min(1,(this.z[n]-lo)/span)),k=n*4;
      this.base[k]=105+q*95;this.base[k+1]=96+q*79;this.base[k+2]=82+q*58;this.base[k+3]=255;}
    this.material=C.Material.fromType('Image',{image:this.texture(this.base)});
    const make=(stride:number,id:string)=>this.viewer.scene.primitives.add(new C.Primitive({geometryInstances:new C.GeometryInstance({geometry:this.mesh(stride),modelMatrix:this.frame,id}),
      appearance:new C.MaterialAppearance({material:this.material,translucent:false,faceForward:true}),asynchronous:false}));
    this.terrainCoarse=make(2,'ctx-terrain-lod1');this.terrainFine=make(1,'ctx-terrain');this.terrainFine.show=false;
    this.rover=this.viewer.scene.primitives.add(new C.PointPrimitiveCollection());
    this.click=new C.ScreenSpaceEventHandler(this.viewer.canvas);
    this.click.setInputAction((e:{position:C.Cartesian2})=>{
      if(this.globeMode){const hit=this.viewer.scene.pick(e.position);if((hit as any)?.id?.id==='jezero-pin')this.toLocal(false);return;}
      if(!this.viewer.scene.pickPositionSupported)return;
      const hit=this.viewer.scene.pickPosition(e.position);
      if(!C.defined(hit))return;
      const p=C.Matrix4.multiplyByPoint(this.inverse,hit,new C.Cartesian3());
      const point={lon:(p.x/this.cos+this.cx)/this.grid.radius_m*180/Math.PI,lat:(p.y+this.cy)/this.grid.radius_m*180/Math.PI};
      if(this.index(point)!==null)onPick(point);
    },C.ScreenSpaceEventType.LEFT_CLICK);
    this.setupFx(element);
    this.hover=new C.ScreenSpaceEventHandler(this.viewer.canvas);
    this.hover.setInputAction((e:{endPosition:C.Cartesian2})=>this.pickHover(e.endPosition),C.ScreenSpaceEventType.MOUSE_MOVE);
    for(const ev of ['pointerdown','wheel','touchstart'])this.viewer.canvas.addEventListener(ev,()=>{this.lastInput=performance.now();},{passive:true});
    this.viewer.canvas.addEventListener('pointerdown',()=>{this.pointerDown=true;this.onHover?.(undefined);});addEventListener('pointerup',()=>{this.pointerDown=false;});
    this.home(false,false);
    this.viewer.creditDisplay.addStaticCredit(new C.Credit('Globe: USGS / NASA Viking MDIM 2.1',true));
    this.globeLoading=this.initGlobe().catch(()=>{this.globeReady=false;});
  }
  /** Global Mars sphere textured with the Viking MDIM 2.1 colour mosaic (down-sampled from 232 m/pixel). */
  private async initGlobe(){
    const sphere=this.viewer.scene.mapProjection.ellipsoid;
    const provider=await C.SingleTileImageryProvider.fromUrl('/v1/map/image/globe',{rectangle:C.Rectangle.MAX_VALUE});
    const globe=new C.Globe(sphere);globe.show=false;globe.showGroundAtmosphere=false;globe.enableLighting=false;
    globe.baseColor=C.Color.fromCssColorString('#140e0b');globe.showWaterEffect=false;
    this.viewer.scene.globe=globe;this.globeLayer=globe.imageryLayers.addImageryProvider(provider);
    this.globeData=new C.CustomDataSource('globe-overview');this.globeData.show=false;void this.viewer.dataSources.add(this.globeData);
    this.globeData.entities.add({id:'jezero-pin',position:C.Cartesian3.fromDegrees(77.45,18.44,0,sphere),
      point:{pixelSize:13,color:C.Color.fromCssColorString('#ff8a4c'),outlineWidth:3,outlineColor:C.Color.fromCssColorString('#0a1217'),disableDepthTestDistance:Number.POSITIVE_INFINITY},
      label:{text:'Jezero Crater · Perseverance landing region · click to descend',font:'600 13px "Segoe UI Variable","Segoe UI",Inter,system-ui,sans-serif',fillColor:C.Color.WHITE,showBackground:true,
        backgroundColor:C.Color.fromCssColorString('#09131ad9'),backgroundPadding:new C.Cartesian2(10,7),style:C.LabelStyle.FILL,pixelOffset:new C.Cartesian2(0,-22),
        verticalOrigin:C.VerticalOrigin.BOTTOM,disableDepthTestDistance:Number.POSITIVE_INFINITY}});
    this.globeReady=true;
  }
  private reduced(){return typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches;}
  private setGlobeVisible(on:boolean){
    this.globeMode=on;this.spin(on);const g=this.viewer.scene.globe;if(g)g.show=on;
    this.syncTerrainVisibility();this.rover.show=!on;if(this.viewer.scene.skyAtmosphere)this.viewer.scene.skyAtmosphere.show=on;this.viewer.entities.show=!on;if(this.globeData)this.globeData.show=on;
    const ctl=this.viewer.scene.screenSpaceCameraController;ctl.minimumZoomDistance=on?400000:80;ctl.maximumZoomDistance=on?4e7:45000;ctl.enableTilt=on?true:!this.is2D;
    this.viewer.scene.requestRender();
  }
  private fadeGlobe(from:number,to:number,ms:number,delay=0){
    const layer=this.globeLayer;if(!layer)return;const serial=++this.fadeSerial,t0=performance.now()+delay;
    if(ms<=0){layer.alpha=to;this.viewer.scene.requestRender();return;}
    const step=(now:number)=>{if(serial!==this.fadeSerial)return;const k=Math.max(0,Math.min(1,(now-t0)/ms));layer.alpha=from+(to-from)*k;this.viewer.scene.requestRender();if(k<1)requestAnimationFrame(step);};
    layer.alpha=from;requestAnimationFrame(step);
  }
  /** Planet view: full Mars disc with the mission area marked. */
  toGlobe(instant=false){
    if(!this.globeReady||this.globeMode)return;
    const cam=this.viewer.camera;cancelAnimationFrame(this.anim);
    const pos=C.Cartesian3.clone(cam.positionWC),dir=C.Cartesian3.clone(cam.directionWC),up=C.Cartesian3.clone(cam.upWC);
    cam.lookAtTransform(C.Matrix4.IDENTITY);cam.setView({destination:pos,orientation:{direction:dir,up}});
    this.onMode?.('globe');this.setGlobeVisible(true);
    this.descending=true;setTimeout(()=>{this.descending=false;},instant||this.reduced()?700:3300); // block auto-descend while we fly up ourselves
    const sphere=this.viewer.scene.mapProjection.ellipsoid,dest=C.Cartesian3.fromDegrees(77.4,14,9_000_000,sphere),ori={heading:0,pitch:-Math.PI/2,roll:0};
    if(instant||this.reduced()){this.fadeGlobe(1,1,0);cam.setView({destination:dest,orientation:ori});this.viewer.scene.requestRender();return;}
    this.fadeGlobe(0,1,900);
    cam.flyTo({destination:dest,orientation:ori,duration:2.4,easingFunction:C.EasingFunction.CUBIC_IN_OUT});
  }
  /** Fly from the planet down to the local relief; the globe fades out as the CTX/HiRISE surface takes over. */
  toLocal(flat=false,after?:()=>void){
    if(!this.globeMode){after?.();return;}
    cancelAnimationFrame(this.anim);this.onMode?.(flat?'2d':'3d');
    const sphere=this.viewer.scene.mapProjection.ellipsoid,H:Point={lon:77.397,lat:18.49},home=this.local(H,this.index(H)??0);
    const finish=()=>{this.setGlobeVisible(false);this.setPlanar(flat);
      this.apply(home,0,-Math.PI/2,120000);this.fly(home,0,flat?-Math.PI/2:-1.0,flat?10500:8200,this.reduced()?0:1800);after?.();};
    if(this.reduced()){finish();return;}
    this.fadeGlobe(1,0,1100,1500);
    this.viewer.camera.flyTo({destination:C.Cartesian3.fromDegrees(H.lon,H.lat,120000,sphere),orientation:{heading:0,pitch:-Math.PI/2,roll:0},
      duration:2.7,easingFunction:C.EasingFunction.CUBIC_IN_OUT,complete:finish});
  }
  /** Scrolling the planet toward Jezero hands over to the detailed scene (no dead end at the coarse texture). */
  private autoDescend(){
    if(!this.globeMode||this.descending||!this.globeReady)return;
    const carto=this.viewer.camera.positionCartographic;if(!carto||carto.height>1.9e6)return;
    const lon=C.Math.toDegrees(carto.longitude),lat=C.Math.toDegrees(carto.latitude);
    const d=Math.hypot((lon-77.4)*Math.cos(C.Math.toRadians(18.4)),lat-18.45);
    if(d<14){this.descending=true;this.toLocal(false);setTimeout(()=>{this.descending=false;},4200);}
  }
  turnBackEntity?:C.Entity;
  /** Point of no return on the planned route (from the life-support ledger). */
  turnBack(p?:Point){
    if(this.turnBackEntity){this.viewer.entities.remove(this.turnBackEntity);this.turnBackEntity=undefined;}
    const w=p?this.world(p,undefined,10):null;
    if(w)this.turnBackEntity=this.viewer.entities.add({position:w,point:{pixelSize:12,color:C.Color.fromCssColorString('#f4695b'),outlineWidth:3,outlineColor:C.Color.WHITE,disableDepthTestDistance:Number.POSITIVE_INFINITY},
      label:{text:'TURN-BACK POINT',font:'700 11px "Segoe UI",system-ui,sans-serif',fillColor:C.Color.WHITE,showBackground:true,backgroundColor:C.Color.fromCssColorString('#7a1f18e6'),
        backgroundPadding:new C.Cartesian2(8,5),pixelOffset:new C.Cartesian2(0,-20),verticalOrigin:C.VerticalOrigin.BOTTOM,disableDepthTestDistance:Number.POSITIVE_INFINITY}});
    this.viewer.scene.requestRender();
  }
  stopWalk(){this.walkCtl?.stop();}
  /**
   * Fly the camera along a route at walking height. `onTick` receives the fraction of ground distance covered (0..1).
   * `ms` is the duration at 1x. Purely a visual replay of the already computed route.
   */
  walk(route:number[][],ms:number,onTick:(s:number)=>void,onEnd:()=>void):WalkController|undefined{
    this.stopWalk();
    if(this.globeMode||route.length<2)return undefined;
    const R=this.grid.radius_m,pts=route.map(([lon,lat,z])=>new C.Cartesian3((lon*Math.PI/180*R-this.cx)*this.cos,lat*Math.PI/180*R-this.cy,this.zz(z)));
    const cum=[0];for(let i=1;i<pts.length;i++)cum.push(cum[i-1]+Math.hypot(pts[i].x-pts[i-1].x,pts[i].y-pts[i-1].y));
    const total=cum[cum.length-1];if(!(total>0))return undefined;
    const at=(s:number)=>{const d=Math.max(0,Math.min(1,s))*total;let j=1;while(j<cum.length-1&&cum[j]<d)j++;
      const k=cum[j]-cum[j-1]||1,u=Math.max(0,Math.min(1,(d-cum[j-1])/k));return C.Cartesian3.lerp(pts[j-1],pts[j],u,new C.Cartesian3());};
    this.setPlanar(false);cancelAnimationFrame(this.anim);
    if(this.walker)this.viewer.entities.remove(this.walker);
    this.walker=this.viewer.entities.add({position:new C.CallbackProperty(()=>C.Matrix4.multiplyByPoint(this.frame,wp,new C.Cartesian3()),false) as any,
      point:{pixelSize:13,color:C.Color.fromCssColorString('#ffb27a'),outlineWidth:3,outlineColor:C.Color.WHITE,disableDepthTestDistance:Number.POSITIVE_INFINITY}});
    let wp=at(0),s=0,speed=1,playing=true,last=performance.now(),heading=0,first=true,raf=0,stopped=false;
    const start=this.pose();
    const frame=(now:number)=>{
      if(stopped)return;const dt=now-last;last=now;
      if(playing)s=Math.min(1,s+dt*speed/ms);
      wp=at(s);const ahead=at(Math.min(1,s+.018)),behind=at(Math.max(0,s-.004));
      const dx=ahead.x-behind.x,dy=ahead.y-behind.y;
      if(Math.hypot(dx,dy)>1e-6){const target=Math.atan2(dx,dy);let d=target-heading;d=Math.atan2(Math.sin(d),Math.cos(d));heading=first?target:heading+d*Math.min(1,dt*.004);first=false;}
      const eye=C.Cartesian3.clone(wp);eye.z+=26;
      this.apply(eye,heading,-.5,620);this.motion();this.viewer.scene.requestRender();onTick(s);
      if(s>=1&&playing){playing=false;onTick(1);ctl.stop(true);return;}
      raf=requestAnimationFrame(frame);
    };
    const ctl:WalkController&{stop:(done?:boolean)=>void}={
      pause:()=>{playing=false;},resume:()=>{if(s>=1)s=0;playing=true;last=performance.now();},
      seek:(v:number)=>{s=Math.max(0,Math.min(1,v));},setSpeed:(x:number)=>{speed=x;},
      get playing(){return playing;},
      stop:(done?:boolean)=>{if(stopped)return;stopped=true;cancelAnimationFrame(raf);if(this.walker){this.viewer.entities.remove(this.walker);this.walker=undefined;}
        this.walkCtl=undefined;onEnd();this.fly(start.target,start.heading,Math.min(-.6,start.pitch),Math.max(3200,Math.min(start.range,9000)),done?1400:700);}
    };
    this.walkCtl=ctl;raf=requestAnimationFrame(frame);return ctl;
  }
  /** Single entry point for the Globe / 3D / 2D switch. */
  go(mode:'globe'|'3d'|'2d'){
    this.stopWalk();
    if(mode==='globe'){this.toGlobe();return;}
    if(this.globeMode){this.toLocal(mode==='2d');return;}
    this.onMode?.(mode);this.home(mode==='2d');
  }
  /** Opening sequence: planet first, then down to the mission area. */
  async startIntro(){
    await this.globeLoading;
    if(!this.globeReady||this.reduced()){this.onMode?.('3d');this.intro();return;}
    this.toGlobe(true);setTimeout(()=>this.toLocal(false),1300);
  }

  /** Terrain mesh sampled every `stride` posts (1 = the full 20 m grid). Double positions relative to the local frame (Cesium primitives require double precision). */
  private mesh(stride:number){
    const [a,,c,,,f]=this.grid.transform;
    const axis=(n:number)=>{const v:number[]=[];for(let i=0;i<n;i+=stride)v.push(i);if(v[v.length-1]!==n-1)v.push(n-1);return v;};
    const cols=axis(this.w),rows=axis(this.h),nc=cols.length,nr=rows.length,count=nc*nr;
    const positions=new Float64Array(count*3),st=new Float32Array(count*2),zs=new Float32Array(count);
    for(let ri=0;ri<nr;ri++){const r=rows[ri],y=f-(r+.5)*a-this.cy;
      for(let ci=0;ci<nc;ci++){const col=cols[ci],n=ri*nc+ci,z=this.z[r*this.w+col];zs[n]=z;
        positions[n*3]=(c+(col+.5)*a-this.cx)*this.cos;positions[n*3+1]=y;positions[n*3+2]=Number.isFinite(z)?this.zz(z):0;
        st[n*2]=(col+.5)/this.w;st[n*2+1]=1-(r+.5)/this.h;}}
    const idx=new Uint32Array((nr-1)*(nc-1)*6);let k=0;
    for(let ri=0;ri<nr-1;ri++)for(let ci=0;ci<nc-1;ci++){const n=ri*nc+ci;
      if(Number.isFinite(zs[n])&&Number.isFinite(zs[n+1])&&Number.isFinite(zs[n+nc])&&Number.isFinite(zs[n+nc+1])){
        idx[k++]=n;idx[k++]=n+nc;idx[k++]=n+1;idx[k++]=n+1;idx[k++]=n+nc;idx[k++]=n+nc+1;}}
    const geometry=new C.Geometry({attributes:Object.assign(new C.GeometryAttributes(),{
      position:new C.GeometryAttribute({componentDatatype:C.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:positions}),
      st:new C.GeometryAttribute({componentDatatype:C.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:st})}),
      indices:idx.subarray(0,k),primitiveType:C.PrimitiveType.TRIANGLES,boundingSphere:C.BoundingSphere.fromVertices(positions)});
    return C.GeometryPipeline.computeNormal(geometry);
  }
  /** Fine mesh only when the camera is close; the half-resolution mesh is used for overview and fast motion. */
  private updateLod(){
    if(this.globeMode)return;const range=C.Cartesian3.magnitude(this.viewer.camera.position);
    const fine=this.lodFine?range<5800:range<4800;
    if(fine!==this.lodFine){this.lodFine=fine;this.syncTerrainVisibility();}
  }
  private syncTerrainVisibility(){this.terrainFine.show=!this.globeMode&&this.lodFine;this.terrainCoarse.show=!this.globeMode&&!this.lodFine;this.viewer.scene.requestRender();}
  /** Cap the rendered pixel count (integrated GPUs on large / high-DPI screens). */
  private scaleCap(){const cv=this.viewer.canvas,px=cv.clientWidth*cv.clientHeight*devicePixelRatio*devicePixelRatio;return Math.min(1,Math.sqrt(4.2e6/Math.max(px,1)));}
  /** Render at lower resolution while the camera moves; restore full quality when it settles. */
  private motion(){
    const v=this.viewer,cap=this.scaleCap(),low=Math.max(.55,cap*.72);
    if(Math.abs(v.resolutionScale-low)>1e-3)v.resolutionScale=low;
    this.moving=true;window.clearTimeout(this.lowTimer);
    this.lowTimer=window.setTimeout(()=>{this.moving=false;v.resolutionScale=this.scaleCap();v.scene.requestRender();},340);
  }
  /** Procedural star field (deterministic), used as the scene sky box. */
  private starfield(){
    const size=1024,faces:HTMLCanvasElement[]=[];let seed=20260;const rnd=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
    for(let f=0;f<6;f++){const cv=document.createElement('canvas');cv.width=cv.height=size;const g=cv.getContext('2d')!;g.fillStyle='#04070b';g.fillRect(0,0,size,size);
      for(let i=0;i<2300;i++){const x=rnd()*size,y=rnd()*size,m=rnd(),r=m>.985?2.4:m>.9?1.5:.8,tint=rnd();
        g.fillStyle=`rgba(${tint>.85?255:226},${tint>.85?214:232},${tint<.12?255:240},${.35+rnd()*.65})`;g.beginPath();g.arc(x,y,r,0,6.2832);g.fill();}
      faces.push(cv);}
    return new C.SkyBox({sources:{positiveX:faces[0],negativeX:faces[1],positiveY:faces[2],negativeY:faces[3],positiveZ:faces[4],negativeZ:faces[5]}});
  }
  texture(pixels:Uint8ClampedArray){const canvas=document.createElement('canvas');canvas.width=this.w;canvas.height=this.h;canvas.getContext('2d')!.putImageData(new ImageData(new Uint8ClampedArray(pixels),this.w,this.h),0,0);return canvas;}
  index(p:Point){const [a,,c,,,f]=this.grid.transform;const col=Math.floor((p.lon*Math.PI/180*this.grid.radius_m-c)/a),r=Math.floor((f-p.lat*Math.PI/180*this.grid.radius_m)/a);return col>=0&&col<this.w&&r>=0&&r<this.h?r*this.w+col:null;}
  /** Scene height of a source elevation (display exaggeration applied). */
  zz(z:number){return (z-this.baseHeight)*this.exag;}
  local(p:Point,i:number){return new C.Cartesian3((p.lon*Math.PI/180*this.grid.radius_m-this.cx)*this.cos,p.lat*Math.PI/180*this.grid.radius_m-this.cy,this.zz(this.z[i]));}
  world(p:Point,z?:number,lift=5){const i=this.index(p);if(i===null)return null;return C.Matrix4.multiplyByPoint(this.frame,new C.Cartesian3((p.lon*Math.PI/180*this.grid.radius_m-this.cx)*this.cos,p.lat*Math.PI/180*this.grid.radius_m-this.cy,this.zz(z??this.z[i])+lift),new C.Cartesian3());}
  home(top=false,animate=true){if(this.globeMode){this.toLocal(top);return;}this.focus({lon:77.397,lat:18.49},top?10500:8200,top,animate);}
  /** Current camera as local target + heading/pitch/range, so transitions start where the user left the view. */
  private pose(){const c=this.viewer.camera;const origin=C.Matrix4.getTranslation(c.transform,new C.Cartesian3());
    return {target:C.Matrix4.multiplyByPoint(this.inverse,origin,new C.Cartesian3()),heading:c.heading,pitch:c.pitch,range:C.Cartesian3.magnitude(c.position)};}
  private apply(target:C.Cartesian3,heading:number,pitch:number,range:number){
    this.viewer.camera.lookAtTransform(C.Matrix4.multiplyByTranslation(this.frame,target,new C.Matrix4()),new C.HeadingPitchRange(heading,pitch,range));}
  /** Smoothly move the camera. Instant for reduced-motion users. */
  fly(target:C.Cartesian3,heading:number,pitch:number,range:number,ms=900){
    cancelAnimationFrame(this.anim);
    const reduce=typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduce||ms<=0){this.apply(target,heading,pitch,range);this.viewer.scene.requestRender();return;}
    const from=this.pose();let dh=heading-from.heading;dh=Math.atan2(Math.sin(dh),Math.cos(dh));
    const t0=performance.now(),ease=(x:number)=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;
    const step=(now:number)=>{const k=Math.min(1,(now-t0)/ms),e=ease(k);
      this.apply(C.Cartesian3.lerp(from.target,target,e,new C.Cartesian3()),from.heading+dh*e,from.pitch+(pitch-from.pitch)*e,from.range+(range-from.range)*e);
      this.motion();this.viewer.scene.requestRender();if(k<1)this.anim=requestAnimationFrame(step);};
    this.anim=requestAnimationFrame(step);
  }
  intro(){const i=this.index({lon:77.397,lat:18.49})??0,home=this.local({lon:77.397,lat:18.49},i);
    this.apply(home,.9,-.55,26000);this.fly(home,0,-1.0,8200,2600);setTimeout(()=>{this.introDone=true;},2700);}
  focus(p:Point,range=3400,top=false,animate=true){
    const i=this.index(p);if(i===null)return;
    if(this.globeMode){this.toLocal(top,()=>this.focus(p,range,top,animate));return;}
    this.setPlanar(top);
    this.fly(this.local(p,i),0,top?-Math.PI/2:-1.0,range,animate?900:0);
  }
  /** 2D = top-down map: tilt is disabled so the view cannot be dragged edge-on. 3D keeps tilt within a safe range. */
  setPlanar(flat:boolean){this.is2D=flat;this.viewer.scene.screenSpaceCameraController.enableTilt=!flat;}
  private limitPitch(){
    if(this.is2D||this.globeMode)return;const c=this.viewer.camera;
    if(c.pitch>-.28){const t=c.transform,h=c.heading,r=C.Cartesian3.magnitude(c.position);c.lookAtTransform(t,new C.HeadingPitchRange(h,-.28,r));}
  }
  zoom(factor:number){this.viewer.camera.zoomIn(this.viewer.camera.positionCartographic.height*factor);this.viewer.scene.requestRender();}
  routeCursor(p?:Point){if(this.cursor)this.viewer.entities.remove(this.cursor);this.cursor=undefined;if(p){const position=this.world(p);if(position)this.cursor=this.viewer.entities.add({position,point:{pixelSize:14,color:C.Color.WHITE,outlineWidth:4,outlineColor:C.Color.fromCssColorString('#09bfd1')}});}this.viewer.scene.requestRender();}
  contacts(lines:{coordinates:number[][];type:string}[],show:boolean){
    for(const e of this.contactEntities)this.viewer.entities.remove(e);this.contactEntities=[];
    if(show)for(const line of lines){const positions=line.coordinates.map(([lon,lat])=>this.world({lon,lat})).filter((p):p is C.Cartesian3=>p!==null);if(positions.length>1)this.contactEntities.push(this.viewer.entities.add({polyline:{positions,width:1.6,material:new C.PolylineDashMaterialProperty({color:C.Color.fromCssColorString('#ffe6b3'),dashLength:12}),arcType:C.ArcType.NONE}}));}
    this.viewer.scene.requestRender();
  }
  setRover(records:Point[],show=true){this.rover.removeAll();if(show)for(const p of records){const position=this.world(p);if(position)this.rover.add({position,color:C.Color.fromCssColorString('#ffb36b'),pixelSize:4,outlineWidth:.5,outlineColor:C.Color.BLACK});}this.viewer.scene.requestRender();}
  async layer(name:string,field?:Uint8Array,freedom=false,opacity=.45,site?:Uint8Array){
    const serial=++this.layerSerial;
    if(!this.orbital){const image=new Image();image.src='/v1/map/image/orbital';await image.decode();this.orbital=image;}
    const k=Math.min(1,2048/this.orbital.width),canvas=document.createElement('canvas');canvas.width=Math.round(this.orbital.width*k);canvas.height=Math.round(this.orbital.height*k);const ctx=canvas.getContext('2d')!;ctx.imageSmoothingQuality='high';ctx.drawImage(this.orbital,0,0,canvas.width,canvas.height);
    if(name!=='orbital'){
      const image=new Image();image.src='/v1/map/image/'+name;await image.decode();ctx.globalAlpha=opacity;ctx.drawImage(image,0,0,canvas.width,canvas.height);ctx.globalAlpha=1;
    }
    if(freedom&&field){
      const pixels=new Uint8ClampedArray(this.z.length*4),palette=[[140,150,160],[244,105,91],[243,191,89],[54,224,177]];
      for(let r=0;r<this.h;r++)for(let c=0;c<this.w;c++){const n=r*this.w+c,v=field[n];const boundary=(c>0&&field[n-1]!==v)||(r>0&&field[n-this.w]!==v);pixels.set([...palette[v],v===0?80:boundary?220:v===1?25:65],n*4);}
      ctx.imageSmoothingEnabled=false;ctx.drawImage(this.texture(pixels),0,0,canvas.width,canvas.height);
    }
    if(site){
      // suitability heat ramp: transparent -> deep violet -> Mars orange -> warm white
      const stops=[[0,[40,20,70]],[.45,[170,50,90]],[.7,[255,120,60]],[1,[255,236,190]]] as [number,number[]][];
      const ramp=(t:number)=>{let i=1;while(i<stops.length-1&&stops[i][0]<t)i++;const [a,ca]=stops[i-1],[b,cb]=stops[i],u=(t-a)/(b-a||1);return ca.map((v,k)=>v+(cb[k]-v)*u);};
      const pixels=new Uint8ClampedArray(this.z.length*4);
      for(let n=0;n<site.length;n++){const v=site[n]/255;if(v<=0){pixels[n*4+3]=95;continue;}const c=ramp(v);pixels[n*4]=c[0];pixels[n*4+1]=c[1];pixels[n*4+2]=c[2];pixels[n*4+3]=70+v*170;}
      ctx.imageSmoothingEnabled=true;ctx.drawImage(this.texture(pixels),0,0,canvas.width,canvas.height);
    }
    if(serial!==this.layerSerial)return;this.material.uniforms.image=canvas;this.viewer.scene.requestRender();
  }
  /** 2D effects canvas over the map: pulsing station halos and a light "comet" running along the route.
   *  It is redrawn at ~30 fps with plain 2D drawing, so WebGL only re-renders when the camera moves. */
  private setupFx(element:HTMLElement){
    const cv=document.createElement('canvas');cv.className='mf-fx';cv.setAttribute('aria-hidden','true');element.appendChild(cv);this.fx=cv;
    this.viewer.scene.postRender.addEventListener(()=>this.projectFx());
    if(this.reduced())return;
    let last=0;const loop=(now:number)=>{this.fxRaf=requestAnimationFrame(loop);if(now-last<33||document.hidden)return;last=now;this.drawFx(now);};
    this.fxRaf=requestAnimationFrame(loop);
  }
  private projectFx(){
    if(this.moving||this.globeMode)return;
    const sc=this.viewer.scene,tmp=(w:C.Cartesian3)=>C.SceneTransforms.worldToWindowCoordinates(sc,w);
    for(const s of this.fxStations)s.s=tmp(s.w);
    this.fxRouteScreen=this.fxRoute.map(tmp).filter((p):p is C.Cartesian2=>!!p);
  }
  private drawFx(now:number){
    const cv=this.fx,dpr=Math.min(devicePixelRatio,2),w=cv.clientWidth,h=cv.clientHeight;
    if(cv.width!==Math.round(w*dpr)||cv.height!==Math.round(h*dpr)){cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);}
    const g=cv.getContext('2d')!;
    // ambient effects only while the camera is still, so they never compete with interaction
    if(this.globeMode||this.walkCtl||this.moving){if(!this.fxCleared){g.setTransform(1,0,0,1,0,0);g.clearRect(0,0,cv.width,cv.height);this.fxCleared=true;}return;}
    this.fxCleared=false;g.setTransform(dpr,0,0,dpr,0,0);g.clearRect(0,0,w,h);
    // station halos
    for(const [i,s] of this.fxStations.entries()){if(!s.s)continue;const k=.5+.5*Math.sin(now/600+i*1.3),r=12+16*k;
      const grad=g.createRadialGradient(s.s.x,s.s.y,0,s.s.x,s.s.y,r);grad.addColorStop(0,s.color+'00');grad.addColorStop(.55,s.color+'55');grad.addColorStop(1,s.color+'00');
      g.fillStyle=grad;g.beginPath();g.arc(s.s.x,s.s.y,r,0,6.2832);g.fill();
      g.strokeStyle=s.color+Math.round((1-k)*160).toString(16).padStart(2,'0');g.lineWidth=1.5;g.beginPath();g.arc(s.s.x,s.s.y,8+22*k,0,6.2832);g.stroke();}
    // comet along the planned route
    const pts=this.fxRouteScreen;if(pts.length<2)return;
    const cum=[0];for(let i=1;i<pts.length;i++)cum.push(cum[i-1]+Math.hypot(pts[i].x-pts[i-1].x,pts[i].y-pts[i-1].y));
    const L=cum[cum.length-1];if(L<20)return;
    const at=(d:number)=>{let j=1;while(j<cum.length-1&&cum[j]<d)j++;const u=Math.max(0,Math.min(1,(d-cum[j-1])/((cum[j]-cum[j-1])||1)));return {x:pts[j-1].x+(pts[j].x-pts[j-1].x)*u,y:pts[j-1].y+(pts[j].y-pts[j-1].y)*u};};
    const head=((now/7000)%1)*L,tail=Math.min(L*.12,160),steps=24;
    g.lineCap='round';
    for(let s=0;s<steps;s++){const d0=head-tail*(1-s/steps),d1=head-tail*(1-(s+1)/steps);if(d1<0)continue;const a=at(Math.max(0,d0)),b=at(d1);
      g.strokeStyle=`rgba(190,235,255,${(s/steps)*.85})`;g.lineWidth=1+3.5*(s/steps);g.beginPath();g.moveTo(a.x,a.y);g.lineTo(b.x,b.y);g.stroke();}
    const p=at(head),glow=g.createRadialGradient(p.x,p.y,0,p.x,p.y,14);glow.addColorStop(0,'rgba(255,255,255,1)');glow.addColorStop(.35,'rgba(160,225,255,.75)');glow.addColorStop(1,'rgba(120,200,255,0)');
    g.fillStyle=glow;g.beginPath();g.arc(p.x,p.y,14,0,6.2832);g.fill();
  }
  /** Hover over a marker: report its label and screen position (throttled GPU pick). */
  private pickHover(pos:C.Cartesian2){
    const now=performance.now();if(!this.onHover||now-this.lastPick<70||this.globeMode||this.pointerDown||this.moving||this.walkCtl)return;this.lastPick=now;
    const hit=this.viewer.scene.pick(pos) as any,props=hit?.id?.properties;
    if(props?.hoverLabel){const t=C.JulianDate.now();this.onHover({label:props.hoverLabel.getValue(t),lon:props.lon.getValue(t),lat:props.lat.getValue(t),x:pos.x,y:pos.y});}
    else this.onHover(undefined);
  }
  /** Slow idle rotation of the planet in Globe view (stops on any input, resumes after 2.5 s). */
  private spin(on:boolean){
    cancelAnimationFrame(this.spinRaf);if(!on||this.reduced())return;
    let last=performance.now();
    const loop=(now:number)=>{this.spinRaf=requestAnimationFrame(loop);const dt=now-last;last=now;
      if(document.hidden||now-this.lastInput<2500||this.descending)return;
      this.viewer.camera.rotate(C.Cartesian3.UNIT_Z,-dt*0.000035);this.viewer.scene.requestRender();};
    this.spinRaf=requestAnimationFrame(loop);
  }
  beaconEntities:C.Entity[]=[];beaconRaf=0;
  private glowImage?:HTMLCanvasElement;
  private glow(){if(this.glowImage)return this.glowImage;const s=128,cv=document.createElement('canvas');cv.width=cv.height=s;const g=cv.getContext('2d')!;
    const grad=g.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);grad.addColorStop(0,'rgba(255,240,210,1)');grad.addColorStop(.18,'rgba(255,170,100,.9)');grad.addColorStop(.45,'rgba(255,120,60,.35)');grad.addColorStop(1,'rgba(255,120,60,0)');
    g.fillStyle=grad;g.fillRect(0,0,s,s);this.glowImage=cv;return cv;}
  /** Pulsing beacons for recommended sites. */
  beacons(sites:{lon:number;lat:number;rank:number;score:number}[]=[]){
    for(const e of this.beaconEntities)this.viewer.entities.remove(e);this.beaconEntities=[];cancelAnimationFrame(this.beaconRaf);
    const reduce=this.reduced(),t0=performance.now();
    for(const s of sites){const w=this.world(s,undefined,14);if(!w)continue;const phase=s.rank*.9;
      this.beaconEntities.push(this.viewer.entities.add({position:w,
        billboard:{image:this.glow(),scale:new C.CallbackProperty(()=>reduce?.75:.55+.35*(.5+.5*Math.sin((performance.now()-t0)/420+phase)),false) as any,
          disableDepthTestDistance:Number.POSITIVE_INFINITY},
        label:{text:`#${s.rank}  ${Math.round(s.score*100)}`,font:'800 13px "Segoe UI",system-ui,sans-serif',fillColor:C.Color.fromCssColorString('#1a0d05'),showBackground:true,
          backgroundColor:C.Color.fromCssColorString('#ffb27aee'),backgroundPadding:new C.Cartesian2(9,5),pixelOffset:new C.Cartesian2(0,-34),verticalOrigin:C.VerticalOrigin.BOTTOM,
          disableDepthTestDistance:Number.POSITIVE_INFINITY}}));}
    if(sites.length&&!reduce){let last=0;const loop=(now:number)=>{if(now-last>33){this.viewer.scene.requestRender();last=now;}this.beaconRaf=requestAnimationFrame(loop);};this.beaconRaf=requestAnimationFrame(loop);}
    this.viewer.scene.requestRender();
  }
  routes(mission:number[][]=[],home:number[][]=[],detour:number[][]=[]){
    for(const e of this.routeEntities)this.viewer.entities.remove(e);this.routeEntities=[];
    const specs:[number[][],string,number,number][]=[[home,'#ffffff',5,0],[mission,'#38bdf8',6,180],[detour,'#d7a3ff',9,520]];
    const reduce=typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t0=performance.now(),runs:{full:C.Cartesian3[];progress:{v:number};delay:number;entity:C.Entity}[]=[];
    for(const [coords,color,width,delay] of specs){
      const full=coords.map(([lon,lat,z])=>this.world({lon,lat},z,7)).filter((p):p is C.Cartesian3=>p!==null);
      if(full.length<2)continue;const progress={v:reduce?1:0};
      const material=color==='#ffffff'?C.Color.fromCssColorString(color):color==='#38bdf8'?new C.PolylineOutlineMaterialProperty({color:C.Color.fromCssColorString('#2fb4ff'),outlineColor:C.Color.fromCssColorString('#04202e'),outlineWidth:2.5}):new C.PolylineGlowMaterialProperty({glowPower:.3,color:C.Color.fromCssColorString(color)});
      const entity=this.viewer.entities.add({polyline:{positions:new C.CallbackProperty(()=>full.slice(0,Math.max(2,Math.ceil(full.length*progress.v))),false),width,material,arcType:C.ArcType.NONE}});
      this.routeEntities.push(entity);runs.push({full,progress,delay,entity});
    }
    this.fxRoute=mission.map(([lon,lat,z])=>this.world({lon,lat},z,9)).filter((p):p is C.Cartesian3=>p!==null);
    const serial=++this.routeSerial;
    if(reduce||!runs.length){for(const r of runs)r.progress.v=1;this.viewer.scene.requestRender();return;}
    const dur=1100;
    const step=(now:number)=>{if(serial!==this.routeSerial)return;let live=false;
      for(const r of runs){const k=Math.max(0,Math.min(1,(now-t0-r.delay)/dur));r.progress.v=1-Math.pow(1-k,3);if(k<1)live=true;}
      this.viewer.scene.requestRender();
      if(live)requestAnimationFrame(step);else for(const r of runs)if(r.entity.polyline)r.entity.polyline.positions=new C.ConstantProperty(r.full) as any;};
    requestAnimationFrame(step);
  }
  referenceFootprints(rings:number[][][]){
    for(const e of this.referenceEntities)this.viewer.entities.remove(e);this.referenceEntities=[];
    for(const ring of rings){const positions=ring.map(([lon,lat])=>this.world({lon,lat})).filter((p):p is C.Cartesian3=>p!==null);
      if(positions.length>1)this.referenceEntities.push(this.viewer.entities.add({polyline:{positions,width:1.5,material:new C.PolylineDashMaterialProperty({color:C.Color.fromCssColorString('#e8d4ae'),dashLength:12})}}));
    }this.viewer.scene.requestRender();
  }
  markers(position:Point,habitat:Point,activities:(Point&{id:string})[],selected?:Point){
    for(const e of this.markerEntities)this.viewer.entities.remove(e);this.markerEntities=[];
    const entries=[{p:habitat,label:'HAB',color:'#fff'},{p:position,label:'CREW',color:'#64d9d0'},...activities.map((a,i)=>({p:a,label:`${i+1} · ${a.id}`,color:'#69b9ff'}))];
    if(selected)entries.push({p:selected,label:'INSPECT',color:'#efbb71'});
    const grouped=new Map<string,typeof entries[number]>();
    for(const x of entries){const nearby=[...grouped.entries()].find(([,v])=>Math.hypot((v.p.lon-x.p.lon)*this.cos,v.p.lat-x.p.lat)*Math.PI/180*this.grid.radius_m<60);const key=nearby?.[0]??`${x.p.lon.toFixed(5)},${x.p.lat.toFixed(5)}`;const existing=grouped.get(key);if(existing){existing.label+=' / '+x.label;existing.color=x.color;}else grouped.set(key,{...x});}
    this.fxStations=[];
    for(const x of grouped.values()){const world=this.world(x.p,undefined,9);if(world)this.fxStations.push({w:world,color:x.color.length===4?'#'+[...x.color.slice(1)].map(ch=>ch+ch).join(''):x.color});if(world)this.markerEntities.push(this.viewer.entities.add({position:world,properties:{hoverLabel:x.label,lon:x.p.lon,lat:x.p.lat},
      point:{pixelSize:11,color:C.Color.fromCssColorString(x.color),outlineWidth:3,outlineColor:C.Color.fromCssColorString('#0a1217'),disableDepthTestDistance:Number.POSITIVE_INFINITY},
      label:{text:x.label,font:'600 12px "Segoe UI Variable","Segoe UI",Inter,system-ui,sans-serif',fillColor:C.Color.WHITE,showBackground:true,
        backgroundColor:C.Color.fromCssColorString('#09131ad9'),backgroundPadding:new C.Cartesian2(9,6),style:C.LabelStyle.FILL,
        pixelOffset:new C.Cartesian2(0,-20),verticalOrigin:C.VerticalOrigin.BOTTOM,horizontalOrigin:C.HorizontalOrigin.CENTER,disableDepthTestDistance:Number.POSITIVE_INFINITY}}));}
    this.viewer.scene.requestRender();
  }
  destroy(){cancelAnimationFrame(this.beaconRaf);cancelAnimationFrame(this.fxRaf);cancelAnimationFrame(this.spinRaf);this.hover?.destroy();this.fx?.remove();this.stopWalk();window.clearTimeout(this.lowTimer);cancelAnimationFrame(this.anim);this.fadeSerial++;this.routeSerial++;this.click.destroy();this.viewer.destroy();}
}
