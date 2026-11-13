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
  material:C.Material;
  base:Uint8ClampedArray;
  rover:C.PointPrimitiveCollection;
  click:C.ScreenSpaceEventHandler;
  routeEntities:C.Entity[]=[];
  selected:C.Entity|undefined;
  mode='inspect';
  layerSerial=0;
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
    this.viewer.scene.backgroundColor=C.Color.fromCssColorString('#10171d');
    if(this.viewer.scene.sun)this.viewer.scene.sun.show=false; if(this.viewer.scene.moon)this.viewer.scene.moon.show=false;
    this.viewer.scene.light=new C.DirectionalLight({direction:C.Matrix4.multiplyByPointAsVector(this.frame,new C.Cartesian3(.3,.4,-1),new C.Cartesian3()),intensity:1.4});
    this.viewer.scene.screenSpaceCameraController.minimumZoomDistance=80;
    this.viewer.scene.screenSpaceCameraController.maximumZoomDistance=45000;
    this.viewer.creditDisplay.addStaticCredit(new C.Credit('Terrain: USGS / NASA MRO · Rover: NASA PDS Mars 2020',true));
    const positions=new Float64Array(this.z.length*3),st=new Float32Array(this.z.length*2);
    this.base=new Uint8ClampedArray(this.z.length*4);
    const [lo,hi]=this.grid.elevation_range_m;
    for(let r=0;r<this.h;r++)for(let col=0;col<this.w;col++){
      const n=r*this.w+col;
      positions.set([(c+(col+.5)*a-this.cx)*this.cos,(f-(r+.5)*a-this.cy),this.z[n]-this.baseHeight],n*3);
      st.set([(col+.5)/this.w,1-(r+.5)/this.h],n*2);
      const q=Math.max(0,Math.min(1,(this.z[n]-lo)/(hi-lo)));
      this.base.set([105+q*95,96+q*79,82+q*58,255],n*4);
    }
    const indices:number[]=[];
    for(let r=0;r<this.h-1;r++)for(let col=0;col<this.w-1;col++){
      const n=r*this.w+col;
      if([n,n+1,n+this.w,n+this.w+1].every(i=>Number.isFinite(this.z[i])))
        indices.push(n,n+this.w,n+1,n+1,n+this.w,n+this.w+1);
    }
    let geometry=new C.Geometry({attributes:Object.assign(new C.GeometryAttributes(),{position:new C.GeometryAttribute({componentDatatype:C.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:positions}),
      st:new C.GeometryAttribute({componentDatatype:C.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:st})}),
      indices:new Uint32Array(indices),primitiveType:C.PrimitiveType.TRIANGLES,boundingSphere:C.BoundingSphere.fromVertices(positions)});
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
    this.home();
  }
  texture(pixels:Uint8ClampedArray){const canvas=document.createElement('canvas');canvas.width=this.w;canvas.height=this.h;canvas.getContext('2d')!.putImageData(new ImageData(new Uint8ClampedArray(pixels),this.w,this.h),0,0);return canvas;}
  index(p:Point){const [a,,c,,,f]=this.grid.transform;const col=Math.floor((p.lon*Math.PI/180*this.grid.radius_m-c)/a),r=Math.floor((f-p.lat*Math.PI/180*this.grid.radius_m)/a);return col>=0&&col<this.w&&r>=0&&r<this.h?r*this.w+col:null;}
  world(p:Point,z?:number){const i=this.index(p);if(i===null)return null;return C.Matrix4.multiplyByPoint(this.frame,new C.Cartesian3((p.lon*Math.PI/180*this.grid.radius_m-this.cx)*this.cos,p.lat*Math.PI/180*this.grid.radius_m-this.cy,(z??this.z[i])-this.baseHeight+4),new C.Cartesian3());}
  home(top=false){this.focus({lon:77.397,lat:18.49},top?10000:7800,top);}
  focus(p:Point,range=3400,top=false){
    const i=this.index(p);if(i===null)return;
    const target=C.Matrix4.multiplyByTranslation(this.frame,new C.Cartesian3((p.lon*Math.PI/180*this.grid.radius_m-this.cx)*this.cos,p.lat*Math.PI/180*this.grid.radius_m-this.cy,this.z[i]-this.baseHeight),new C.Matrix4());
    this.viewer.camera.lookAtTransform(target,new C.HeadingPitchRange(0,top?-Math.PI/2:-1.02,range));this.viewer.scene.requestRender();
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
    const canvas=document.createElement('canvas');canvas.width=this.orbital.width;canvas.height=this.orbital.height;const ctx=canvas.getContext('2d')!;ctx.drawImage(this.orbital,0,0);
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
    for(const [coords,color,width] of [[home,'#ffffff',5],[mission,'#38bdf8',4],[detour,'#d7a3ff',3]] as [number[][],string,number][]){
      const positions=coords.map(([lon,lat,z])=>this.world({lon,lat},z+3)).filter((p):p is C.Cartesian3=>p!==null);
      if(positions.length>1)this.routeEntities.push(this.viewer.entities.add({polyline:{positions,width,material:C.Color.fromCssColorString(color),arcType:C.ArcType.NONE}}));
    }
    this.viewer.scene.requestRender();
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
    for(const x of grouped.values()){const world=this.world(x.p);if(world)this.markerEntities.push(this.viewer.entities.add({position:world,point:{pixelSize:8,color:C.Color.fromCssColorString(x.color),outlineWidth:2,outlineColor:C.Color.fromCssColorString('#131c23')},label:{text:x.label,font:'11px sans-serif',fillColor:C.Color.WHITE,outlineColor:C.Color.BLACK,outlineWidth:3,style:C.LabelStyle.FILL_AND_OUTLINE,pixelOffset:new C.Cartesian2(0,-20),verticalOrigin:C.VerticalOrigin.BOTTOM}}));}
    this.viewer.scene.requestRender();
  }
  destroy(){this.click.destroy();this.viewer.destroy();}
}
