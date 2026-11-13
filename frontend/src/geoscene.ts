import * as T from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
export type GeoModel={id:string;title:string;instrument:string;spacing_map_m:number;shape:number[];transform:number[];radius_m:number;center_lonlat:number[];bounds_lonlat:number[];elevation_range_m:number[];base_elevation_m:number;source_url:string;source_patch_sha256:string;data:string;base_scope:string};
export type SectionPoint={distance_m:number;elevation_m:number;row:number;col:number};
export type Pick={lon:number;lat:number;row:number;col:number;elevation_m:number;slope_deg:number};
const ramp=[new T.Color('#143caf'),new T.Color('#288eaf'),new T.Color('#80bba5'),new T.Color('#d5d19c'),new T.Color('#bb7447')];
function rampColor(q:number){q=Math.max(0,Math.min(.999999,q));const i=Math.floor(q*4);return ramp[i].clone().lerp(ramp[i+1],q*4-i);}
export class GeoScene{
 scene=new T.Scene();renderer:T.WebGLRenderer;camera:T.PerspectiveCamera;controls:OrbitControls;group=new T.Group();gridGroup=new T.Group();
 model?:GeoModel;z=new Float32Array();rows=0;cols=0;dx=1;dy=1;width=1;depth=1;span=1;exaggeration=3;
 top?:T.Mesh;walls?:T.Mesh;bottom?:T.Mesh;cap?:T.Mesh;trace?:T.Line;contours?:T.LineSegments;marker?:T.Mesh;plane?:T.Plane;
 topMaterial=new T.MeshStandardMaterial({vertexColors:true,roughness:.9,metalness:0,side:T.DoubleSide});
 bodyMaterial=new T.MeshStandardMaterial({color:'#50616a',roughness:1,side:T.DoubleSide});
 capMaterial=new T.MeshStandardMaterial({color:'#607c81',roughness:1,side:T.DoubleSide});
 freedom?:Uint8Array;routeGroup=new T.Group();
 key=new T.DirectionalLight('#fff2dc',2.7);inspection=false;
 axis='ns';fraction=.5;cut=false;contourVisible=false;wireframe=false;colorMode='elevation';
 dirty=true;resize:ResizeObserver;frame=0;disposed=false;canvas:HTMLCanvasElement;onPick:(p:Pick)=>void;down={x:0,y:0};
 constructor(host:HTMLElement,onPick:(p:Pick)=>void){
  this.onPick=onPick;this.scene.background=new T.Color('#101c25');
  this.renderer=new T.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true});this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));this.renderer.localClippingEnabled=true;this.renderer.outputColorSpace=T.SRGBColorSpace;
  this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.autoUpdate=false;this.renderer.shadowMap.type=T.PCFSoftShadowMap;this.renderer.toneMapping=T.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.05;
  this.renderer.setSize(host.clientWidth,host.clientHeight);host.appendChild(this.renderer.domElement);this.canvas=this.renderer.domElement;
  this.camera=new T.PerspectiveCamera(45,host.clientWidth/host.clientHeight,.1,1e6);this.controls=new OrbitControls(this.camera,this.renderer.domElement);this.controls.enableDamping=true;this.controls.dampingFactor=.09;this.controls.minPolarAngle=.06;this.controls.maxPolarAngle=Math.PI*.49;this.controls.minZoom=.3;this.controls.maxZoom=12;
  this.scene.add(new T.HemisphereLight('#d7edff','#293943',.8));const key=this.key;key.castShadow=true;key.shadow.mapSize.set(2048,2048);key.shadow.bias=-.00065;this.scene.add(key,key.target);const fill=new T.DirectionalLight('#accce4',.25);fill.position.set(1,.4,-1);this.scene.add(fill);
  this.controls.addEventListener('change',()=>{this.dirty=true;});this.scene.add(this.group,this.gridGroup);
  this.resize=new ResizeObserver(()=>{this.renderer.setSize(host.clientWidth,host.clientHeight);this.resizeCamera();});this.resize.observe(host);
  this.canvas.addEventListener('pointerdown',(e:PointerEvent)=>{this.down={x:e.clientX,y:e.clientY};});this.canvas.addEventListener('pointerup',(e:PointerEvent)=>{if(Math.hypot(e.clientX-this.down.x,e.clientY-this.down.y)<4)this.pick(e);});
  const animate=()=>{if(this.disposed)return;this.frame=requestAnimationFrame(animate);this.controls.update();if(this.dirty){this.renderer.render(this.scene,this.camera);this.dirty=false;}};animate();
 }
 resizeCamera(){this.dirty=true;this.camera.aspect=this.canvas.clientWidth/this.canvas.clientHeight;this.camera.updateProjectionMatrix();}
 disposeObject(o:T.Object3D){o.traverse((v)=>{const m=v as T.Mesh;if(m.geometry)m.geometry.dispose();});o.removeFromParent();}
 load(model:GeoModel){this.dirty=true;
  for(const x of [...this.group.children])this.disposeObject(x);for(const x of [...this.gridGroup.children])this.disposeObject(x);
  this.top=this.walls=this.bottom=this.cap=this.marker=undefined;this.freedom=undefined;this.routeGroup=new T.Group();this.group.add(this.routeGroup);this.trace=undefined;this.contours=undefined;
  this.model=model;this.z=new Float32Array(Uint8Array.from(atob(model.data),v=>v.charCodeAt(0)).buffer);[this.rows,this.cols]=model.shape;
  this.dx=model.spacing_map_m*Math.cos(model.center_lonlat[1]*Math.PI/180);this.dy=model.spacing_map_m;this.width=(this.cols-1)*this.dx;this.depth=(this.rows-1)*this.dy;this.span=Math.max(this.width,this.depth);
  const positions=new Float32Array(this.z.length*3),indices=new Uint32Array((this.rows-1)*(this.cols-1)*6);let j=0;
  for(let r=0;r<this.rows;r++)for(let c=0;c<this.cols;c++){const n=r*this.cols+c;positions.set(this.point(r,c),n*3);if(r<this.rows-1&&c<this.cols-1){indices.set([n,n+1,n+this.cols,n+1,n+this.cols+1,n+this.cols],j);j+=6;}}
  const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.BufferAttribute(positions,3));geometry.setIndex(new T.BufferAttribute(indices,1));geometry.computeVertexNormals();
  this.top=new T.Mesh(geometry,this.topMaterial);this.top.castShadow=true;this.top.receiveShadow=true;this.group.add(this.top);
  const boundary:number[][]=[];for(let c=0;c<this.cols;c++)boundary.push(this.point(0,c));for(let r=1;r<this.rows;r++)boundary.push(this.point(r,this.cols-1));for(let c=this.cols-2;c>=0;c--)boundary.push(this.point(this.rows-1,c));for(let r=this.rows-2;r>0;r--)boundary.push(this.point(r,0));boundary.push(boundary[0]);
  this.walls=new T.Mesh(this.curtain(boundary),this.bodyMaterial);this.group.add(this.walls);
  const base=new T.PlaneGeometry(this.width,this.depth);base.rotateX(-Math.PI/2);this.bottom=new T.Mesh(base,this.bodyMaterial);this.group.add(this.bottom);
  this.setColor(this.colorMode);this.buildContours();this.buildGrid();this.setExaggeration(this.exaggeration);this.setSection(this.axis,this.fraction,this.cut);this.setInspection(this.inspection);
  const k=this.key;k.position.set(-this.span*.65,this.span*1.1,this.span*.4);k.target.position.set(0,0,0);const sc=k.shadow.camera;sc.left=sc.bottom=-this.span;sc.right=sc.top=this.span;sc.near=this.span*.01;sc.far=this.span*5;sc.updateProjectionMatrix();this.renderer.shadowMap.needsUpdate=true;k.shadow.normalBias=this.span*.0008;
  this.controls.minDistance=this.span*.07;this.controls.maxDistance=this.span*6;this.camera.near=this.span*.0001;this.camera.far=this.span*30;this.home();
 }
 point(r:number,c:number){return [(c-(this.cols-1)/2)*this.dx,this.z[r*this.cols+c]-this.model!.base_elevation_m,(r-(this.rows-1)/2)*this.dy];}
 curtain(points:number[][]){const p:number[]=[];for(let i=0;i<points.length-1;i++){const a=points[i],b=points[i+1];p.push(...a,a[0],0,a[2],...b,...b,a[0],0,a[2],b[0],0,b[2]);}const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(p,3));g.computeVertexNormals();return g;}
 slope(r:number,c:number){const left=this.z[r*this.cols+Math.max(0,c-1)],right=this.z[r*this.cols+Math.min(this.cols-1,c+1)],north=this.z[Math.max(0,r-1)*this.cols+c],south=this.z[Math.min(this.rows-1,r+1)*this.cols+c];return Math.atan(Math.hypot((right-left)/((c===0||c===this.cols-1)?this.dx:2*this.dx),(south-north)/((r===0||r===this.rows-1)?this.dy:2*this.dy)))*180/Math.PI;}
 setColor(mode:string){this.dirty=true;this.colorMode=mode;if(!this.model||!this.top)return;const values=new Float32Array(this.z.length*3),[lo,hi]=this.model.elevation_range_m;for(let r=0;r<this.rows;r++)for(let c=0;c<this.cols;c++){const n=r*this.cols+c;let color:T.Color;if(mode==='mission'&&this.freedom?.length===this.z.length){const palette=['#75818a','#e98274','#dfbc64','#65d2a6'];color=rampColor((this.z[n]-lo)/(hi-lo)).lerp(new T.Color(palette[this.freedom[n]]),.72);}else if(mode==='slope')color=rampColor(this.slope(r,c)/35);else if(mode==='neutral')color=new T.Color('#b6c3c4');else color=rampColor((this.z[n]-lo)/(hi-lo));values.set([color.r,color.g,color.b],n*3);}this.top.geometry.setAttribute('color',new T.BufferAttribute(values,3));}
 setExaggeration(value:number){this.dirty=true;this.renderer.shadowMap.needsUpdate=true;this.exaggeration=value;this.group.scale.y=value;this.controls.target.y=this.model?(this.model.elevation_range_m[0]+this.model.elevation_range_m[1]-2*this.model.base_elevation_m)/2*value*.65:0;}
 setWireframe(value:boolean){this.dirty=true;this.wireframe=value;this.topMaterial.wireframe=value;}
 buildContours(){if(this.contours)this.disposeObject(this.contours);if(!this.model)return;const interval=this.model.spacing_map_m===1?2:20;const positions:number[]=[];
  const triangle=(vertices:number[][])=>{const low=Math.min(...vertices.map(p=>p[1]))+this.model!.base_elevation_m,high=Math.max(...vertices.map(p=>p[1]))+this.model!.base_elevation_m;for(let level=Math.ceil(low/interval)*interval;level<high;level+=interval){const cut=level-this.model!.base_elevation_m,hits:number[][]=[];for(let k=0;k<3;k++){const a=vertices[k],b=vertices[(k+1)%3];if((a[1]<=cut&&b[1]>cut)||(b[1]<=cut&&a[1]>cut)){const f=(cut-a[1])/(b[1]-a[1]);hits.push([a[0]+f*(b[0]-a[0]),cut+this.span*.0005,a[2]+f*(b[2]-a[2])]);}}if(hits.length===2)positions.push(...hits[0],...hits[1]);}};
  for(let r=0;r<this.rows-1;r++)for(let c=0;c<this.cols-1;c++){const a=this.point(r,c),b=this.point(r,c+1),d=this.point(r+1,c),e=this.point(r+1,c+1);triangle([a,b,d]);triangle([b,e,d]);}
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));this.contours=new T.LineSegments(g,new T.LineBasicMaterial({color:'#182c36',transparent:true,opacity:.48}));this.contours.visible=this.contourVisible;this.group.add(this.contours);
 }
 setContours(value:boolean){this.dirty=true;this.contourVisible=value;if(this.contours)this.contours.visible=value;}
 section(axis=this.axis,fraction=this.fraction):SectionPoint[]{const points:SectionPoint[]=[];if(axis==='ns'){const c=Math.round(fraction*(this.cols-1));for(let r=0;r<this.rows;r++)points.push({row:r,col:c,distance_m:r*this.dy,elevation_m:this.z[r*this.cols+c]});}else{const r=Math.round(fraction*(this.rows-1));for(let c=0;c<this.cols;c++)points.push({row:r,col:c,distance_m:c*this.dx,elevation_m:this.z[r*this.cols+c]});}return points;}
 setSection(axis:string,fraction:number,cut:boolean){this.dirty=true;this.axis=axis;this.fraction=fraction;this.cut=cut;if(!this.model)return [];
  if(this.cap)this.disposeObject(this.cap);if(this.trace)this.disposeObject(this.trace);const profile=this.section();const points=profile.map(p=>this.point(p.row,p.col));
  const v=axis==='ns'?points[0][0]:points[0][2];this.plane=new T.Plane(axis==='ns'?new T.Vector3(-1,0,0):new T.Vector3(0,0,-1),v);const planes=cut?[this.plane]:[];
  this.routeGroup.traverse(obj=>{if(obj instanceof T.Mesh){(obj.material as T.Material).clippingPlanes=planes;(obj.material as T.Material).needsUpdate=true;}});
  this.topMaterial.clippingPlanes=planes;this.bodyMaterial.clippingPlanes=planes;this.topMaterial.needsUpdate=true;this.bodyMaterial.needsUpdate=true;
  if(this.contours)(this.contours.material as T.Material).clippingPlanes=planes;
  this.cap=new T.Mesh(this.curtain(points),this.capMaterial);this.cap.visible=cut;this.group.add(this.cap);
  const geo=new T.BufferGeometry().setFromPoints(points.map(p=>new T.Vector3(p[0],p[1]+this.span*.001,p[2])));this.trace=new T.Line(geo,new T.LineBasicMaterial({color:'#adf2d4',linewidth:2}));this.trace.visible=this.inspection;this.group.add(this.trace);return profile;
 }
 hover(p?:SectionPoint){this.dirty=true;if(this.marker)this.disposeObject(this.marker);this.marker=undefined;if(!p)return;const pos=this.point(p.row,p.col);this.marker=new T.Mesh(new T.SphereGeometry(this.span*.008,12,12),new T.MeshBasicMaterial({color:'#e8fff2'}));this.marker.position.set(pos[0],pos[1]+this.span*.003,pos[2]);this.group.add(this.marker);}
 text(label:string,x:number,y:number,z:number,size:number,color='#a8bdc8'){
  const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=128;const ctx=canvas.getContext('2d')!;ctx.font='70px sans-serif';ctx.textAlign='center';ctx.fillStyle=color;ctx.fillText(label,512,85);const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;const sprite=new T.Sprite(new T.SpriteMaterial({map:texture,transparent:true,depthTest:false}));sprite.position.set(x,y,z);sprite.scale.set(size*8,size,1);this.gridGroup.add(sprite);
 }
 buildGrid(){const step=this.model!.spacing_map_m===1?100:2000;const size=Math.ceil(this.span/step+4)*step;const grid=new T.GridHelper(size,size/step,'#58717c','#2b404a');grid.position.y=-this.span*.08;this.gridGroup.add(grid);
  this.text('EAST  →',this.width*.67,0,0,this.span*.036);this.text('NORTH',0,0,-this.depth*.66,this.span*.036);this.text(`${Math.round(this.width)} m`,0,0,this.depth*.65,this.span*.038);this.text(`${Math.round(this.depth)} m`,-this.width*.68,0,0,this.span*.038);
  const arrow=new T.ArrowHelper(new T.Vector3(0,0,-1),new T.Vector3(-this.width*.7,0,-this.depth*.2),this.span*.25,0x98c5ce,this.span*.025,this.span*.014);this.gridGroup.add(arrow);
 }
 setInspection(value:boolean){this.dirty=true;this.inspection=value;this.gridGroup.visible=value;if(this.walls)this.walls.visible=value;if(this.bottom)this.bottom.visible=value;if(this.trace)this.trace.visible=value;}
 home(view='relief'){this.dirty=true;this.resizeCamera();this.camera.zoom=1;const m=this.model;const y=m?((m.elevation_range_m[0]+m.elevation_range_m[1])/2-m.base_elevation_m)*this.exaggeration:0;this.camera.up.set(0,1,0);
  if(view==='top'){this.camera.position.set(0,y+this.span*1.6,.001);this.camera.up.set(0,0,-1);}else if(view==='front'){this.camera.position.set(0,y+this.span*.18,this.span*.95);}else if(view==='overview'||view==='iso'){this.camera.position.set(this.span*.9,y+this.span*.95,this.span*1.15);}else{this.camera.position.set(this.span*.39,y+this.span*.38,this.span*.72);}
  this.controls.target.set(0,y,-this.span*.03);this.camera.lookAt(this.controls.target);this.camera.updateProjectionMatrix();this.controls.update();}

 pick(event:PointerEvent){if(!this.top||!this.model)return;const rect=this.canvas.getBoundingClientRect(),ray=new T.Raycaster();ray.setFromCamera(new T.Vector2((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1),this.camera);const hit=ray.intersectObject(this.top)[0];if(!hit||this.cut&&this.plane!.distanceToPoint(hit.point)<-1e-5)return;
  const col=Math.max(0,Math.min(this.cols-1,Math.round(hit.point.x/this.dx+(this.cols-1)/2))),row=Math.max(0,Math.min(this.rows-1,Math.round(hit.point.z/this.dy+(this.rows-1)/2)));const [a,,c,,,f]=this.model.transform;
  this.onPick({lon:(c+(col+.5)*a)/this.model.radius_m*180/Math.PI,lat:(f-(row+.5)*a)/this.model.radius_m*180/Math.PI,row,col,elevation_m:this.z[row*this.cols+col],slope_deg:this.slope(row,col)});
 }
 mission(routes:number[][],home:number[][],labels:Uint8Array){this.dirty=true;
  for(const obj of [...this.routeGroup.children])this.disposeObject(obj);if(this.model?.id!=='regional')return;this.freedom=labels;
  const world=([lon,lat,height]:number[])=>{const [a,,c,,,f]=this.model!.transform;const col=(lon*Math.PI/180*this.model!.radius_m-c)/a-.5,row=(f-lat*Math.PI/180*this.model!.radius_m)/a-.5;return new T.Vector3((col-(this.cols-1)/2)*this.dx,height-this.model!.base_elevation_m+12,(row-(this.rows-1)/2)*this.dy);};
  for(const [coords,color,radius] of [[home,'#f6f8ed',28],[routes,'#36bdf4',24]] as [number[][],string,number][]){
   if(coords.length<2)continue;const geometry=new T.CylinderGeometry(1,1,1,6),mesh=new T.InstancedMesh(geometry,new T.MeshBasicMaterial({color,clippingPlanes:this.cut&&this.plane?[this.plane]:[]}),coords.length-1);const up=new T.Vector3(0,1,0);
   for(let i=0;i<coords.length-1;i++){const a=world(coords[i]),b=world(coords[i+1]),direction=b.clone().sub(a),length=direction.length();mesh.setMatrixAt(i,new T.Matrix4().compose(a.add(b).multiplyScalar(.5),new T.Quaternion().setFromUnitVectors(up,direction.normalize()),new T.Vector3(radius,length,radius)));}mesh.instanceMatrix.needsUpdate=true;this.routeGroup.add(mesh);
  }
  if(this.colorMode==='mission')this.setColor('mission');
 }
 snapshot(){return this.renderer.domElement.toDataURL('image/png');}
 destroy(){this.disposed=true;cancelAnimationFrame(this.frame);this.resize.disconnect();this.controls.dispose();this.renderer.dispose();for(const x of [...this.group.children])this.disposeObject(x);for(const x of [...this.gridGroup.children])this.disposeObject(x);this.canvas.remove();}
}
