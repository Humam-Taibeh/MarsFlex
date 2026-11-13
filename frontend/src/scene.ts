import * as C from 'cesium';

export type Point = {lon:number;lat:number};
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
    this.viewer.scene.fog.enabled=false;this.viewer.scene.highDynamicRange=false;this.viewer.scene.msaaSamples=4;
    this.viewer.scene.postProcessStages.fxaa.enabled=false;this.viewer.targetFrameRate=60;
    this.viewer.scene.maximumRenderTimeChange=Infinity;
    this.viewer.camera.percentageChanged=0.02;
    if(this.viewer.scene.sun)this.viewer.scene.sun.show=false; if(this.viewer.scene.moon)this.viewer.scene.moon.show=false;
    this.viewer.scene.light=new C.DirectionalLight({direction:C.Matrix4.multiplyByPointAsVector(this.frame,new C.Cartesian3(.3,.4,-1),new C.Cartesian3()),intensity:1.7});
    const ctl=this.viewer.scene.screenSpaceCameraController;ctl.minimumZoomDistance=80;ctl.inertiaSpin=.88;ctl.inertiaZoom=.8;ctl.inertiaTranslate=.88;
    this.viewer.scene.preRender.addEventListener(()=>this.limitPitch());
    this.viewer.scene.screenSpaceCameraController.maximumZoomDistance=45000;
    this.viewer.creditDisplay.addStaticCredit(new C.Credit('Terrain: USGS / NASA MRO · Rover: NASA PDS Mars 2020',true));
    const positions=new Float64Array(this.z.length*3),st=new Float32Array(this.z.length*2);
    this.base=new Uint8ClampedArray(this.z.length*4);
    const [lo,hi]=this.grid.elevation_range_m,span=hi-lo||1;
    for(let r=0;r<this.h;r++){
      const y=f-(r+.5)*a-this.cy;
      for(let col=0;col<this.w;col++){
        const n=r*this.w+col,z=this.z[n],o=n*3,s=n*2,k=n*4;
        positions[o]=(c+(col+.5)*a-this.cx)*this.cos;positions[o+1]=y;positions[o+2]=this.zz(z);
        st[s]=(col+.5)/this.w;st[s+1]=1-(r+.5)/this.h;
        const q=Math.max(0,Math.min(1,(z-lo)/span));
        this.base[k]=105+q*95;this.base[k+1]=96+q*79;this.base[k+2]=82+q*58;this.base[k+3]=255;
      }
    }
    const indexBuffer=new Uint32Array((this.h-1)*(this.w-1)*6);let count=0;
    for(let r=0;r<this.h-1;r++)for(let col=0;col<this.w-1;col++){
      const n=r*this.w+col,z=this.z;
      if(Number.isFinite(z[n])&&Number.isFinite(z[n+1])&&Number.isFinite(z[n+this.w])&&Number.isFinite(z[n+this.w+1])){
        indexBuffer[count++]=n;indexBuffer[count++]=n+this.w;indexBuffer[count++]=n+1;
        indexBuffer[count++]=n+1;indexBuffer[count++]=n+this.w;indexBuffer[count++]=n+this.w+1;
      }
    }
    const indices=indexBuffer.subarray(0,count);
    let geometry=new C.Geometry({attributes:Object.assign(new C.GeometryAttributes(),{position:new C.GeometryAttribute({componentDatatype:C.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:positions}),
      st:new C.GeometryAttribute({componentDatatype:C.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:st})}),
      indices,primitiveType:C.PrimitiveType.TRIANGLES,boundingSphere:C.BoundingSphere.fromVertices(positions)});
    geometry=C.GeometryPipeline.computeNormal(geometry);
    this.material=C.Material.fromType('Image',{image:this.texture(this.base)});
    this.viewer.scene.primitives.add(new C.Primitive({geometryInstances:new C.GeometryInstance({geometry,modelMatrix:this.frame,id:'ctx-terrain'}),
      appearance:new C.MaterialAppearance({material:this.material,translucent:false,faceForward:true}),asynchronous:false}));
    this.rover=this.viewer.scene.primitives.add(new C.PointPrimitiveCollection());
    this.click=new C.ScreenSpaceEventHandler(this.viewer.canvas);
    this.click.setInputAction((e:{position:C.Cartesian2})=>{
      if(!this.viewer.scene.pickPositionSupported)return;
      const hit=this.viewer.scene.pickPosition(e.position);
      if(!C.defined(hit))return;
      const p=C.Matrix4.multiplyByPoint(this.inverse,hit,new C.Cartesian3());
      const point={lon:(p.x/this.cos+this.cx)/this.grid.radius_m*180/Math.PI,lat:(p.y+this.cy)/this.grid.radius_m*180/Math.PI};
      if(this.index(point)!==null)onPick(point);
    },C.ScreenSpaceEventType.LEFT_CLICK);
    this.home(false,false);this.intro();
  }
  texture(pixels:Uint8ClampedArray){const canvas=document.createElement('canvas');canvas.width=this.w;canvas.height=this.h;canvas.getContext('2d')!.putImageData(new ImageData(new Uint8ClampedArray(pixels),this.w,this.h),0,0);return canvas;}
  index(p:Point){const [a,,c,,,f]=this.grid.transform;const col=Math.floor((p.lon*Math.PI/180*this.grid.radius_m-c)/a),r=Math.floor((f-p.lat*Math.PI/180*this.grid.radius_m)/a);return col>=0&&col<this.w&&r>=0&&r<this.h?r*this.w+col:null;}
  /** Scene height of a source elevation (display exaggeration applied). */
  zz(z:number){return (z-this.baseHeight)*this.exag;}
  local(p:Point,i:number){return new C.Cartesian3((p.lon*Math.PI/180*this.grid.radius_m-this.cx)*this.cos,p.lat*Math.PI/180*this.grid.radius_m-this.cy,this.zz(this.z[i]));}
  world(p:Point,z?:number,lift=5){const i=this.index(p);if(i===null)return null;return C.Matrix4.multiplyByPoint(this.frame,new C.Cartesian3((p.lon*Math.PI/180*this.grid.radius_m-this.cx)*this.cos,p.lat*Math.PI/180*this.grid.radius_m-this.cy,this.zz(z??this.z[i])+lift),new C.Cartesian3());}
  home(top=false,animate=true){this.focus({lon:77.397,lat:18.49},top?10500:8200,top,animate);}
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
      this.viewer.scene.requestRender();if(k<1)this.anim=requestAnimationFrame(step);};
    this.anim=requestAnimationFrame(step);
  }
  intro(){const i=this.index({lon:77.397,lat:18.49})??0,home=this.local({lon:77.397,lat:18.49},i);
    this.apply(home,.9,-.55,26000);this.fly(home,0,-1.0,8200,2600);setTimeout(()=>{this.introDone=true;},2700);}
  focus(p:Point,range=3400,top=false,animate=true){
    const i=this.index(p);if(i===null)return;
    this.setPlanar(top);
    this.fly(this.local(p,i),0,top?-Math.PI/2:-1.0,range,animate?900:0);
  }
  /** 2D = top-down map: tilt is disabled so the view cannot be dragged edge-on. 3D keeps tilt within a safe range. */
  setPlanar(flat:boolean){this.is2D=flat;this.viewer.scene.screenSpaceCameraController.enableTilt=!flat;}
  private limitPitch(){
    if(this.is2D)return;const c=this.viewer.camera;
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
  async layer(name:string,field?:Uint8Array,freedom=false,opacity=.45){
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
    if(serial!==this.layerSerial)return;this.material.uniforms.image=canvas;this.viewer.scene.requestRender();
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
    for(const x of grouped.values()){const world=this.world(x.p,undefined,9);if(world)this.markerEntities.push(this.viewer.entities.add({position:world,
      point:{pixelSize:11,color:C.Color.fromCssColorString(x.color),outlineWidth:3,outlineColor:C.Color.fromCssColorString('#0a1217'),disableDepthTestDistance:Number.POSITIVE_INFINITY},
      label:{text:x.label,font:'600 12px "Segoe UI Variable","Segoe UI",Inter,system-ui,sans-serif',fillColor:C.Color.WHITE,showBackground:true,
        backgroundColor:C.Color.fromCssColorString('#09131ad9'),backgroundPadding:new C.Cartesian2(9,6),style:C.LabelStyle.FILL,
        pixelOffset:new C.Cartesian2(0,-20),verticalOrigin:C.VerticalOrigin.BOTTOM,horizontalOrigin:C.HorizontalOrigin.CENTER,disableDepthTestDistance:Number.POSITIVE_INFINITY}}));}
    this.viewer.scene.requestRender();
  }
  destroy(){cancelAnimationFrame(this.anim);this.routeSerial++;this.click.destroy();this.viewer.destroy();}
}
