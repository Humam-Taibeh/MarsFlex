const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-DyByFiQB.js","assets/main-DIBNI33u.css"])))=>i.map(i=>d[i]);
var OE=Object.defineProperty;var PE=(o,t,i)=>t in o?OE(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var de=(o,t,i)=>PE(o,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();const IE="modulepreload",zE=function(o){return"/"+o},Yv={},BE=function(t,i,s){let l=Promise.resolve();if(i&&i.length>0){let h=function(p){return Promise.all(p.map(x=>Promise.resolve(x).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));l=h(i.map(p=>{if(p=zE(p),p in Yv)return;Yv[p]=!0;const x=p.endsWith(".css"),v=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${v}`))return;const g=document.createElement("link");if(g.rel=x?"stylesheet":IE,x||(g.as="script"),g.crossOrigin="",g.href=p,m&&g.setAttribute("nonce",m),document.head.appendChild(g),x)return new Promise((y,R)=>{g.addEventListener("load",y),g.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(h){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=h,window.dispatchEvent(d),!d.defaultPrevented)throw h}return l.then(h=>{for(const d of h||[])d.status==="rejected"&&c(d.reason);return t().catch(c)})};var zd={exports:{}},xl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv;function FE(){if(qv)return xl;qv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return xl.Fragment=t,xl.jsx=i,xl.jsxs=i,xl}var Zv;function HE(){return Zv||(Zv=1,zd.exports=FE()),zd.exports}var W=HE(),Bd={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv;function GE(){if(jv)return ce;jv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.for("react.view_transition"),y=Symbol.iterator;function R(B){return B===null||typeof B!="object"?null:(B=y&&B[y]||B["@@iterator"],typeof B=="function"?B:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,S={};function I(B,mt,At){this.props=B,this.context=mt,this.refs=S,this.updater=At||w}I.prototype.isReactComponent={},I.prototype.setState=function(B,mt){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,mt,"setState")},I.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function X(){}X.prototype=I.prototype;function C(B,mt,At){this.props=B,this.context=mt,this.refs=S,this.updater=At||w}var U=C.prototype=new X;U.constructor=C,M(U,I.prototype),U.isPureReactComponent=!0;var D=Array.isArray;function P(){}var b={H:null,A:null,T:null,S:null},L=Object.prototype.hasOwnProperty;function H(B,mt,At){var Z=At.ref;return{$$typeof:o,type:B,key:mt,ref:Z!==void 0?Z:null,props:At}}function q(B,mt){return H(B.type,mt,B.props)}function Q(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function at(B){var mt={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(At){return mt[At]})}var V=/\/+/g;function J(B,mt){return typeof B=="object"&&B!==null&&B.key!=null?at(""+B.key):mt.toString(36)}function k(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(P,P):(B.status="pending",B.then(function(mt){B.status==="pending"&&(B.status="fulfilled",B.value=mt)},function(mt){B.status==="pending"&&(B.status="rejected",B.reason=mt)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function $(B,mt,At,Z,dt){var Tt=typeof B;(Tt==="undefined"||Tt==="boolean")&&(B=null);var Nt=!1;if(B===null)Nt=!0;else switch(Tt){case"bigint":case"string":case"number":Nt=!0;break;case"object":switch(B.$$typeof){case o:case t:Nt=!0;break;case x:return Nt=B._init,$(Nt(B._payload),mt,At,Z,dt)}}if(Nt)return dt=dt(B),Nt=Z===""?"."+J(B,0):Z,D(dt)?(At="",Nt!=null&&(At=Nt.replace(V,"$&/")+"/"),$(dt,mt,At,"",function(He){return He})):dt!=null&&(Q(dt)&&(dt=q(dt,At+(dt.key==null||B&&B.key===dt.key?"":(""+dt.key).replace(V,"$&/")+"/")+Nt)),mt.push(dt)),1;Nt=0;var _t=Z===""?".":Z+":";if(D(B))for(var Rt=0;Rt<B.length;Rt++)Z=B[Rt],Tt=_t+J(Z,Rt),Nt+=$(Z,mt,At,Tt,dt);else if(Rt=R(B),typeof Rt=="function")for(B=Rt.call(B),Rt=0;!(Z=B.next()).done;)Z=Z.value,Tt=_t+J(Z,Rt++),Nt+=$(Z,mt,At,Tt,dt);else if(Tt==="object"){if(typeof B.then=="function")return $(k(B),mt,At,Z,dt);throw mt=String(B),Error("Objects are not valid as a React child (found: "+(mt==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":mt)+"). If you meant to render a collection of children, use an array instead.")}return Nt}function ht(B,mt,At){if(B==null)return B;var Z=[],dt=0;return $(B,Z,"","",function(Tt){return mt.call(At,Tt,dt++)}),Z}function st(B){if(B._status===-1){var mt=B._result,At=mt();At.then(function(Z){(B._status===0||B._status===-1)&&(B._status=1,B._result=Z,At.status===void 0&&(At.status="fulfilled",At.value=Z))},function(Z){(B._status===0||B._status===-1)&&(B._status=2,B._result=Z,At.status===void 0&&(At.status="rejected",At.reason=Z))}),B._status===-1&&(B._status=0,B._result=At)}if(B._status===1)return B._result.default;throw B._result}var pt=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var mt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(mt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function Et(B){var mt=b.T,At={};At.types=mt!==null?mt.types:null,b.T=At;try{var Z=B(),dt=b.S;dt!==null&&dt(At,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(P,pt)}catch(Tt){pt(Tt)}finally{mt!==null&&At.types!==null&&(mt.types=At.types),b.T=mt}}function jt(B){var mt=b.T;if(mt!==null){var At=mt.types;At===null?mt.types=[B]:At.indexOf(B)===-1&&At.push(B)}else Et(jt.bind(null,B))}var kt={map:ht,forEach:function(B,mt,At){ht(B,function(){mt.apply(this,arguments)},At)},count:function(B){var mt=0;return ht(B,function(){mt++}),mt},toArray:function(B){return ht(B,function(mt){return mt})||[]},only:function(B){if(!Q(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return ce.Activity=v,ce.Children=kt,ce.Component=I,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=C,ce.StrictMode=s,ce.Suspense=m,ce.ViewTransition=g,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b,ce.__COMPILER_RUNTIME={__proto__:null,c:function(B){return b.H.useMemoCache(B)}},ce.addTransitionType=jt,ce.cache=function(B){return function(){return B.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(B,mt,At){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Z=M({},B.props),dt=B.key;if(mt!=null)for(Tt in mt.key!==void 0&&(dt=""+mt.key),mt)!L.call(mt,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&mt.ref===void 0||(Z[Tt]=mt[Tt]);var Tt=arguments.length-2;if(Tt===1)Z.children=At;else if(1<Tt){for(var Nt=Array(Tt),_t=0;_t<Tt;_t++)Nt[_t]=arguments[_t+2];Z.children=Nt}return H(B.type,dt,Z)},ce.createContext=function(B){return B={$$typeof:h,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},ce.createElement=function(B,mt,At){var Z,dt={},Tt=null;if(mt!=null)for(Z in mt.key!==void 0&&(Tt=""+mt.key),mt)L.call(mt,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(dt[Z]=mt[Z]);var Nt=arguments.length-2;if(Nt===1)dt.children=At;else if(1<Nt){for(var _t=Array(Nt),Rt=0;Rt<Nt;Rt++)_t[Rt]=arguments[Rt+2];dt.children=_t}if(B&&B.defaultProps)for(Z in Nt=B.defaultProps,Nt)dt[Z]===void 0&&(dt[Z]=Nt[Z]);return H(B,Tt,dt)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(B){return{$$typeof:d,render:B}},ce.isValidElement=Q,ce.lazy=function(B){return{$$typeof:x,_payload:{_status:-1,_result:B},_init:st}},ce.memo=function(B,mt){return{$$typeof:p,type:B,compare:mt===void 0?null:mt}},ce.startTransition=Et,ce.unstable_useCacheRefresh=function(){return b.H.useCacheRefresh()},ce.use=function(B){return b.H.use(B)},ce.useActionState=function(B,mt,At){return b.H.useActionState(B,mt,At)},ce.useCallback=function(B,mt){return b.H.useCallback(B,mt)},ce.useContext=function(B){return b.H.useContext(B)},ce.useDebugValue=function(){},ce.useDeferredValue=function(B,mt){return b.H.useDeferredValue(B,mt)},ce.useEffect=function(B,mt){return b.H.useEffect(B,mt)},ce.useEffectEvent=function(B){return b.H.useEffectEvent(B)},ce.useId=function(){return b.H.useId()},ce.useImperativeHandle=function(B,mt,At){return b.H.useImperativeHandle(B,mt,At)},ce.useInsertionEffect=function(B,mt){return b.H.useInsertionEffect(B,mt)},ce.useLayoutEffect=function(B,mt){return b.H.useLayoutEffect(B,mt)},ce.useMemo=function(B,mt){return b.H.useMemo(B,mt)},ce.useOptimistic=function(B,mt){return b.H.useOptimistic(B,mt)},ce.useReducer=function(B,mt,At){return b.H.useReducer(B,mt,At)},ce.useRef=function(B){return b.H.useRef(B)},ce.useState=function(B){return b.H.useState(B)},ce.useSyncExternalStore=function(B,mt,At){return b.H.useSyncExternalStore(B,mt,At)},ce.useTransition=function(){return b.H.useTransition()},ce.version="19.3.0",ce}var Kv;function vm(){return Kv||(Kv=1,Bd.exports=GE()),Bd.exports}var ve=vm(),Fd={exports:{}},Sl={},Hd={exports:{}},Gd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv;function VE(){return Qv||(Qv=1,(function(o){function t(k,$){var ht=k.length;k.push($);t:for(;0<ht;){var st=ht-1>>>1,pt=k[st];if(0<l(pt,$))k[st]=$,k[ht]=pt,ht=st;else break t}}function i(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var $=k[0],ht=k.pop();if(ht!==$){k[0]=ht;t:for(var st=0,pt=k.length,Et=pt>>>1;st<Et;){var jt=2*(st+1)-1,kt=k[jt],B=jt+1,mt=k[B];if(0>l(kt,ht))B<pt&&0>l(mt,kt)?(k[st]=mt,k[B]=ht,st=B):(k[st]=kt,k[jt]=ht,st=jt);else if(B<pt&&0>l(mt,ht))k[st]=mt,k[B]=ht,st=B;else break t}}return $}function l(k,$){var ht=k.sortIndex-$.sortIndex;return ht!==0?ht:k.id-$.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],x=1,v=null,g=3,y=!1,R=!1,w=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function C(k){for(var $=i(p);$!==null;){if($.callback===null)s(p);else if($.startTime<=k)s(p),$.sortIndex=$.expirationTime,t(m,$);else break;$=i(p)}}function U(k){if(w=!1,C(k),!R)if(i(m)!==null)R=!0,D||(D=!0,Q());else{var $=i(p);$!==null&&J(U,$.startTime-k)}}var D=!1,P=-1,b=5,L=-1;function H(){return M?!0:!(o.unstable_now()-L<b)}function q(){if(M=!1,D){var k=o.unstable_now();L=k;var $=!0;try{t:{R=!1,w&&(w=!1,I(P),P=-1),y=!0;var ht=g;try{e:{for(C(k),v=i(m);v!==null&&!(v.expirationTime>k&&H());){var st=v.callback;if(typeof st=="function"){v.callback=null,g=v.priorityLevel;var pt=st(v.expirationTime<=k);if(k=o.unstable_now(),typeof pt=="function"){v.callback=pt,C(k),$=!0;break e}v===i(m)&&s(m),C(k)}else s(m);v=i(m)}if(v!==null)$=!0;else{var Et=i(p);Et!==null&&J(U,Et.startTime-k),$=!1}}break t}finally{v=null,g=ht,y=!1}$=void 0}}finally{$?Q():D=!1}}}var Q;if(typeof X=="function")Q=function(){X(q)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,V=at.port2;at.port1.onmessage=q,Q=function(){V.postMessage(null)}}else Q=function(){S(q,0)};function J(k,$){P=S(function(){k(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(k){switch(g){case 1:case 2:case 3:var $=3;break;default:$=g}var ht=g;g=$;try{return k()}finally{g=ht}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(k,$){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var ht=g;g=k;try{return $()}finally{g=ht}},o.unstable_scheduleCallback=function(k,$,ht){var st=o.unstable_now();switch(typeof ht=="object"&&ht!==null?(ht=ht.delay,ht=typeof ht=="number"&&0<ht?st+ht:st):ht=st,k){case 1:var pt=-1;break;case 2:pt=250;break;case 5:pt=1073741823;break;case 4:pt=1e4;break;default:pt=5e3}return pt=ht+pt,k={id:x++,callback:$,priorityLevel:k,startTime:ht,expirationTime:pt,sortIndex:-1},ht>st?(k.sortIndex=ht,t(p,k),i(m)===null&&k===i(p)&&(w?(I(P),P=-1):w=!0,J(U,ht-st))):(k.sortIndex=pt,t(m,k),R||y||(R=!0,D||(D=!0,Q()))),k},o.unstable_shouldYield=H,o.unstable_wrapCallback=function(k){var $=g;return function(){var ht=g;g=$;try{return k.apply(this,arguments)}finally{g=ht}}}})(Gd)),Gd}var Jv;function XE(){return Jv||(Jv=1,Hd.exports=VE()),Hd.exports}var Vd={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v;function kE(){if($v)return Fn;$v=1;var o=vm();function t(x){var v="https://react.dev/errors/"+x;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)v+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+x+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(x,v,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:y===h?h:""+y,children:x,containerInfo:v,implementation:g}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(x,v){if(x==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Fn.browser=function(x){return{$$typeof:c,_reason:x}},Fn.createPortal=function(x,v){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(t(299));return d(x,v,null,g)},Fn.flushSync=function(x){var v=m.T,g=s.p;try{if(m.T=null,s.p=2,x)return x()}finally{m.T=v,s.p=g,s.d.f()}},Fn.preconnect=function(x,v){typeof x=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(x,v))},Fn.prefetchDNS=function(x){typeof x=="string"&&s.d.D(x)},Fn.preinit=function(x,v){if(typeof x=="string"&&v&&typeof v.as=="string"){var g=v.as,y=p(g,v.crossOrigin),R=typeof v.integrity=="string"?v.integrity:void 0,w=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;g==="style"?s.d.S(x,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:y,integrity:R,fetchPriority:w}):g==="script"&&s.d.X(x,{crossOrigin:y,integrity:R,fetchPriority:w,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Fn.preinitModule=function(x,v){if(typeof x=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var g=p(v.as,v.crossOrigin);s.d.M(x,{crossOrigin:g,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}}else v==null&&s.d.M(x)},Fn.preload=function(x,v){if(typeof x=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var g=v.as,y=p(g,v.crossOrigin);s.d.L(x,g,{crossOrigin:y,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Fn.preloadModule=function(x,v){if(typeof x=="string")if(v){var g=p(v.as,v.crossOrigin);s.d.m(x,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:g,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0})}else s.d.m(x)},Fn.requestFormReset=function(x){s.d.r(x)},Fn.unstable_batchedUpdates=function(x,v){return x(v)},Fn.useFormState=function(x,v,g){return m.H.useFormState(x,v,g)},Fn.useFormStatus=function(){return m.H.useHostTransitionStatus()},Fn.version="19.3.0",Fn}var tx;function WE(){if(tx)return Vd.exports;tx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Vd.exports=kE(),Vd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ex;function YE(){if(ex)return Sl;ex=1;var o=XE(),t=vm(),i=WE();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var _=!1,A=u.child;A;){if(A===a){_=!0,a=u,r=f;break}if(A===r){_=!0,r=u,a=f;break}A=A.sibling}if(!_){for(A=f.child;A;){if(A===a){_=!0,a=f,r=u;break}if(A===r){_=!0,r=f,a=u;break}A=A.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}function v(e,n,a,r,u,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,u,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&v(e.child,n,a,r,u,f))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function y(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function R(e){var n=[null,null],a=g(e);return a===null||w(n,e,a.child,{foundSelf:!1}),n}function w(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&w(e,n,a.child,r))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,I=null;function X(e,n,a){return e===a?!0:e===n?(S=e,!0):!1}function C(e,n,a){return e===a?(I=e,!1):e===n?(I!==null&&(S=e),!0):!1}function U(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function D(e,n,a){for(var r=0,u=e;u;u=a(u))r++;u=0;for(var f=n;f;f=a(f))u++;for(;0<r-u;)e=a(e),r--;for(;0<u-r;)n=a(n),u--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var P=Object.assign,b=Symbol.for("react.element"),L=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),at=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),J=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ht=Symbol.for("react.suspense_list"),st=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),jt=Symbol.for("react.legacy_hidden"),kt=Symbol.for("react.memo_cache_sentinel"),B=Symbol.for("react.view_transition"),mt=Symbol.for("react.recoverable"),At=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=At&&e[At]||e["@@iterator"],typeof e=="function"?e:null)}var dt=Symbol.for("react.client.reference");function Tt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===dt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case at:return"Profiler";case Q:return"StrictMode";case $:return"Suspense";case ht:return"SuspenseList";case Et:return"Activity";case B:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case H:return"Portal";case J:return e.displayName||"Context";case V:return(e._context.displayName||"Context")+".Consumer";case k:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case st:return n=e.displayName||null,n!==null?n:Tt(e.type)||"Memo";case pt:n=e._payload,e=e._init;try{return Tt(e(n))}catch{}}return null}var Nt=Array.isArray,_t=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Rt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,He={pending:!1,data:null,method:null,action:null},pe=[],xe=-1;function Ee(e){return{current:e}}function ee(e){0>xe||(e.current=pe[xe],pe[xe]=null,xe--)}function ie(e,n){xe++,pe[xe]=e.current,e.current=n}var Ge=Ee(null),cn=Ee(null),Oe=Ee(null),Je=Ee(null);function N(e,n){switch(ie(Oe,n),ie(cn,e),ie(Ge,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?ev(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=ev(n),e=nv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ee(Ge),ie(Ge,e)}function te(){ee(Ge),ee(cn),ee(Oe)}function ue(e){var n=e.memoizedState;n!==null&&(qr._currentValue=n.memoizedState,ie(Je,e)),n=Ge.current;var a=nv(n,e.type);n!==a&&(ie(cn,e),ie(Ge,a))}function O(e){cn.current===e&&(ee(Ge),ee(cn)),Je.current===e&&(ee(Je),qr._currentValue=He)}var E,nt;function ut(e){if(E===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||"",nt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+E+e+nt}var gt=!1;function Ct(e,n){if(!e||gt)return"";gt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(Pt){var j=Pt}Reflect.construct(e,[],St)}else{try{St.call()}catch(Pt){j=Pt}St=!1;try{var lt=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),St=!0,new e}finally{St&&(lt!==void 0?Object.defineProperty(e.prototype,"props",lt):delete e.prototype.props)}}}else{try{throw Error()}catch(Pt){j=Pt}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(Pt){if(Pt&&j&&typeof Pt.stack=="string")return[Pt.stack,j.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],A=f[1];if(_&&A){var z=_.split(`
`),et=A.split(`
`);for(u=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(r===z.length||u===et.length)for(r=z.length-1,u=et.length-1;1<=r&&0<=u&&z[r]!==et[u];)u--;for(;1<=r&&0<=u;r--,u--)if(z[r]!==et[u]){if(r!==1||u!==1)do if(r--,u--,0>u||z[r]!==et[u]){var ct=`
`+z[r].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=r&&0<=u);break}}}finally{gt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ut(a):""}function Ut(e,n){switch(e.tag){case 26:case 27:case 5:return ut(e.type);case 16:return ut("Lazy");case 13:return e.child!==n&&n!==null?ut("Suspense Fallback"):ut("Suspense");case 19:return ut("SuspenseList");case 0:case 15:return Ct(e.type,!1);case 11:return Ct(e.type.render,!1);case 1:return Ct(e.type,!0);case 31:return ut("Activity");case 30:return ut("ViewTransition");default:return""}}function vt(e){try{var n="",a=null;do n+=Ut(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Mt=Object.prototype.hasOwnProperty,Dt=o.unstable_scheduleCallback,$t=o.unstable_cancelCallback,zt=o.unstable_shouldYield,It=o.unstable_requestPaint,Xt=o.unstable_now,se=o.unstable_getCurrentPriorityLevel,he=o.unstable_ImmediatePriority,Y=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,yt=o.unstable_LowPriority,Lt=o.unstable_IdlePriority,Vt=o.log,bt=o.unstable_setDisableYieldValue,Jt=null,Gt=null;function Pe(e){if(typeof Vt=="function"&&bt(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(Jt,e)}catch{}}var me=Math.clz32?Math.clz32:hf,ui=Math.log,Mi=Math.LN2;function hf(e){return e>>>=0,e===0?32:31-(ui(e)/Mi|0)|0}var ur=256,Cs=262144,ka=4194304;function xa(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ws(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?u=xa(r):(_&=A,_!==0?u=xa(_):a||(a=A&~e,a!==0&&(u=xa(a))))):(A=r&~f,A!==0?u=xa(A):_!==0?u=xa(_):a||(a=r&~e,a!==0&&(u=xa(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Wa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ji(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-me(a),u=1<<r;n|=e[r],a&=~u}return n}function To(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ao(){var e=ka;return ka<<=1,(ka&62914560)===0&&(ka=4194304),e}function cr(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ki(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yl(e,n,a,r,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,z=e.expirationTimes,et=e.hiddenUpdates;for(a=_&~a;0<a;){var ct=31-me(a),St=1<<ct;A[ct]=0,z[ct]=-1;var j=et[ct];if(j!==null)for(et[ct]=null,ct=0;ct<j.length;ct++){var lt=j[ct];lt!==null&&(lt.lane&=-536870913)}a&=~St}r!==0&&Ds(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function Ds(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-me(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Ro(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-me(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Co(e,n){var a=n&-n;return a=(a&42)!==0?1:wo(a),(a&(e.suspendedLanes|n))!==0?0:a}function wo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Do(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ql(){var e=Rt.p;return e!==0?e:(e=window.event,e===void 0?32:Fv(e.type))}function Zl(e,n){var a=Rt.p;try{return Rt.p=e,n()}finally{Rt.p=a}}var Ei=Math.random().toString(36).slice(2),T="__reactFiber$"+Ei,F="__reactProps$"+Ei,ft="__reactContainer$"+Ei,rt="__reactEvents$"+Ei,ot="__reactListeners$"+Ei,Bt="__reactHandles$"+Ei,Wt="__reactResources$"+Ei,Ot="__reactMarker$"+Ei,Zt="__reactLoad$"+Ei;function Kt(e){delete e[T],delete e[F],delete e[ot],delete e[Bt]}function oe(e){var n;if(n=e[T])return n;for(var a=e.parentNode;a;){if(n=a[ft]||a[T]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=xv(e);e!==null;){if(a=e[T])return a;e=xv(e)}return n}e=a,a=e.parentNode}return null}function ge(e){if(e=e[T]||e[ft]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Yt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Re(e){var n=e[Wt];return n||(n=e[Wt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function be(e){e[Ot]=!0}function $e(e){e[Zt]=void 0}var ke=new Set,En={};function Ft(e,n){fn(e,n),fn(e+"Capture",n)}function fn(e,n){for(En[e]=n,e=0;e<n.length;e++)ke.add(n[e])}var Ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yn={},ci={};function Qi(e){return Mt.call(ci,e)?!0:Mt.call(Yn,e)?!1:Ie.test(e)?ci[e]=!0:(Yn[e]=!0,!1)}var Te=!1;function Ve(){var e=Te;return Te=!1,e}function an(e,n,a){if(Qi(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function fi(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function Ne(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function hn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jl(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function df(e){if(!e._valueTracker){var n=Sa(e)?"checked":"value";e._valueTracker=jl(e,n,""+e[n])}}function Xm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Sa(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var ey=/[\n"\\]/g;function bi(e){return e.replace(ey,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function pf(e,n,a,r,u,f,_,A){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+hn(n)):e.value!==""+hn(n)&&(e.value=""+hn(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?_==="number"&&e.value==n?mf(e,hn(e.value)):mf(e,hn(n)):a!=null?mf(e,hn(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+hn(A):e.removeAttribute("name")}function km(e,n,a,r,u,f,_,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){df(e);return}a=a!=null?""+hn(a):"",n=n!=null?""+hn(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),df(e)}function mf(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function fr(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+hn(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Wm(e,n,a){if(n!=null&&(n=""+hn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+hn(a):""}function Ym(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Nt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=hn(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),df(e)}function hr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ny=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qm(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||ny.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Zm(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",Te=!0);for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&(qm(e,u,r),Te=!0)}else for(var f in n)n.hasOwnProperty(f)&&qm(e,f,n[f])}function gf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ay=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kl(e){return ay.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ji(){}var _f=null;function vf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dr=null,pr=null;function jm(e){var n=ge(e);if(n&&(e=n.stateNode)){var a=e[F]||null;t:switch(e=n.stateNode,n.type){case"input":if(pf(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+bi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[F]||null;if(!u)throw Error(s(90));pf(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Xm(r)}break t;case"textarea":Wm(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&fr(e,!!a.multiple,n,!1)}}}var xf=!1;function Km(e,n,a){if(xf)return e(n,a);xf=!0;try{var r=e(n);return r}finally{if(xf=!1,(dr!==null||pr!==null)&&(Ku(),dr&&(n=dr,e=pr,pr=dr=null,jm(n),e)))for(n=0;n<e.length;n++)jm(e[n])}}function No(e,n){var a=e.stateNode;if(a===null)return null;var r=a[F]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ya=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sf=!1;if(ya)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{Sf=!1}var Ya=null,yf=null,Ql=null;function Qm(){if(Ql)return Ql;var e,n=yf,a=n.length,r,u="value"in Ya?Ya.value:Ya.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(r=1;r<=_&&n[a-r]===u[f-r];r++);return Ql=u.slice(e,1<r?1-r:void 0)}function Jl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function $l(){return!0}function Jm(){return!1}function qn(e){function n(a,r,u,f,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$l:Jm,this.isPropagationStopped=Jm,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tu=qn(qa),Lo=P({},qa,{view:0,detail:0}),sy=qn(Lo),Mf,Ef,Oo,eu=P({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oo&&(Oo&&e.type==="mousemove"?(Mf=e.screenX-Oo.screenX,Ef=e.screenY-Oo.screenY):Ef=Mf=0,Oo=e),Mf)},movementY:function(e){return"movementY"in e?e.movementY:Ef}}),$m=qn(eu),ry=P({},eu,{dataTransfer:0}),oy=qn(ry),ly=P({},Lo,{relatedTarget:0}),bf=qn(ly),uy=P({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),cy=qn(uy),fy=P({},qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hy=qn(fy),dy=P({},qa,{data:0}),tg=qn(dy),py={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},my={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _y(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=gy[e])?!!n[e]:!1}function Tf(){return _y}var vy=P({},Lo,{key:function(e){if(e.key){var n=py[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Jl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?my[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(e){return e.type==="keypress"?Jl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xy=qn(vy),Sy=P({},eu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eg=qn(Sy),yy=P({},qa,{submitter:0}),My=qn(yy),Ey=P({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),by=qn(Ey),Ty=P({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ay=qn(Ty),Ry=P({},eu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cy=qn(Ry),wy=P({},qa,{newState:0,oldState:0,source:0}),Dy=qn(wy),Ny=[9,13,27,32],Af=ya&&"CompositionEvent"in window,Po=null;ya&&"documentMode"in document&&(Po=document.documentMode);var Uy=ya&&"TextEvent"in window&&!Po,ng=ya&&(!Af||Po&&8<Po&&11>=Po),ig=" ",ag=!1;function sg(e,n){switch(e){case"keyup":return Ny.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function Ly(e,n){switch(e){case"compositionend":return rg(n);case"keypress":return n.which!==32?null:(ag=!0,ig);case"textInput":return e=n.data,e===ig&&ag?null:e;default:return null}}function Oy(e,n){if(mr)return e==="compositionend"||!Af&&sg(e,n)?(e=Qm(),Ql=yf=Ya=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ng&&n.locale!=="ko"?null:n.data;default:return null}}var Py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function og(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Py[e.type]:n==="textarea"}function lg(e,n,a,r){dr?pr?pr.push(r):pr=[r]:dr=r,n=nc(n,"onChange"),0<n.length&&(a=new tu("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Io=null,zo=null;function Iy(e){j_(e,0)}function nu(e){var n=Yt(e);if(Xm(n))return e}function ug(e,n){if(e==="change")return n}var cg=!1;if(ya){var Rf;if(ya){var Cf="oninput"in document;if(!Cf){var fg=document.createElement("div");fg.setAttribute("oninput","return;"),Cf=typeof fg.oninput=="function"}Rf=Cf}else Rf=!1;cg=Rf&&(!document.documentMode||9<document.documentMode)}function hg(){Io&&(Io.detachEvent("onpropertychange",dg),zo=Io=null)}function dg(e){if(e.propertyName==="value"&&nu(zo)){var n=[];lg(n,zo,e,vf(e)),Km(Iy,n)}}function zy(e,n,a){e==="focusin"?(hg(),Io=n,zo=a,Io.attachEvent("onpropertychange",dg)):e==="focusout"&&hg()}function By(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nu(zo)}function Fy(e,n){if(e==="click")return nu(n)}function Hy(e,n){if(e==="input"||e==="change")return nu(n)}function Gy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var hi=typeof Object.is=="function"?Object.is:Gy;function Bo(e,n){if(hi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Mt.call(n,u)||!hi(e[u],n[u]))return!1}return!0}function wf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mg(e,n){var a=pg(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=pg(a)}}function gg(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?gg(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function _g(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=wf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=wf(e.document)}return n}function Df(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Vy=ya&&"documentMode"in document&&11>=document.documentMode,gr=null,Nf=null,Fo=null,Uf=!1;function vg(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uf||gr==null||gr!==wf(r)||(r=gr,"selectionStart"in r&&Df(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fo&&Bo(Fo,r)||(Fo=r,r=nc(Nf,"onSelect"),0<r.length&&(n=new tu("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=gr)))}function Ns(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var _r={animationend:Ns("Animation","AnimationEnd"),animationiteration:Ns("Animation","AnimationIteration"),animationstart:Ns("Animation","AnimationStart"),transitionrun:Ns("Transition","TransitionRun"),transitionstart:Ns("Transition","TransitionStart"),transitioncancel:Ns("Transition","TransitionCancel"),transitionend:Ns("Transition","TransitionEnd")},Lf={},xg={};ya&&(xg=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function Us(e){if(Lf[e])return Lf[e];if(!_r[e])return e;var n=_r[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in xg)return Lf[e]=n[a];return e}var Sg=Us("animationend"),yg=Us("animationiteration"),Mg=Us("animationstart"),Xy=Us("transitionrun"),ky=Us("transitionstart"),Wy=Us("transitioncancel"),Eg=Us("transitionend"),bg=new Map,Of="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Of.push("scrollEnd");function zi(e,n){bg.set(e,n),Ft(n,[e])}var Yy=0;function Ma(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Gi.identifierPrefix;var a=Yy++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function Tg(e){if(e==null||typeof e=="string")return e;var n=null,a=zr;if(a!==null)for(var r=0;r<a.length;r++){var u=e[a[r]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??e.default}function Ea(e,n){return e=Tg(e),n=Tg(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var iu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ti=[],vr=0,Pf=0;function au(){for(var e=vr,n=Pf=vr=0;n<e;){var a=Ti[n];Ti[n++]=null;var r=Ti[n];Ti[n++]=null;var u=Ti[n];Ti[n++]=null;var f=Ti[n];if(Ti[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}f!==0&&Ag(a,u,f)}}function su(e,n,a,r){Ti[vr++]=e,Ti[vr++]=n,Ti[vr++]=a,Ti[vr++]=r,Pf|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function If(e,n,a,r){return su(e,n,a,r),ru(e)}function Ls(e,n){return su(e,null,null,n),ru(e)}function Ag(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-me(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function ru(e){if(50<ol)throw ol=0,ju=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var xr={};function qy(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(e,n,a,r){return new qy(e,n,a,r)}function zf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ba(e,n){var a=e.alternate;return a===null?(a=$n(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Rg(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ou(e,n,a,r,u,f){var _=0;if(r=e,typeof r=="function")zf(r)&&(_=1);else if(typeof r=="string")_=yE(e,a,Ge.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(r){case Et:return e=$n(31,a,n,u),e.elementType=Et,e.lanes=f,e;case q:return Os(a.children,u,f,n);case Q:_=8,u|=24;break;case at:return e=$n(12,a,n,u|2),e.elementType=at,e.lanes=f,e;case $:return e=$n(13,a,n,u),e.elementType=$,e.lanes=f,e;case ht:return e=$n(19,a,n,u),e.elementType=ht,e.lanes=f,e;case jt:case B:return e=u|32,e=$n(30,a,n,e),e.elementType=B,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case J:_=10;break t;case V:_=9;break t;case k:_=11;break t;case st:_=14;break t;case pt:_=16,r=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=$n(_,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function Os(e,n,a,r){return e=$n(7,e,r,n),e.lanes=a,e}function Bf(e,n,a){return e=$n(6,e,null,n),e.lanes=a,e}function Cg(e){var n=$n(18,null,null,0);return n.stateNode=e,n}function Ff(e,n,a){return n=$n(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var wg=new WeakMap;function Ai(e,n){if(typeof e=="object"&&e!==null){var a=wg.get(e);return a!==void 0?a:(n={value:e,source:n,stack:vt(n)},wg.set(e,n),n)}return{value:e,source:n,stack:vt(n)}}var Sr=[],yr=0,lu=null,Ho=0,Ri=[],Ci=0,Za=null,$i=1,ta="";function Ta(e,n){Sr[yr++]=Ho,Sr[yr++]=lu,lu=e,Ho=n}function Dg(e,n,a){Ri[Ci++]=$i,Ri[Ci++]=ta,Ri[Ci++]=Za,Za=e;var r=$i;e=ta;var u=32-me(r)-1;r&=~(1<<u),a+=1;var f=32-me(n)+u;if(30<f){var _=u-u%5;f=(r&(1<<_)-1).toString(32),r>>=_,u-=_,$i=1<<32-me(n)+u|a<<u|r,ta=f+e}else $i=1<<f|a<<u|r,ta=e}function uu(e){e.return!==null&&(Ta(e,1),Dg(e,1,0))}function Hf(e){for(;e===lu;)lu=Sr[--yr],Sr[yr]=null,Ho=Sr[--yr],Sr[yr]=null;for(;e===Za;)Za=Ri[--Ci],Ri[Ci]=null,ta=Ri[--Ci],Ri[Ci]=null,$i=Ri[--Ci],Ri[Ci]=null}function Ng(e,n){Ri[Ci++]=$i,Ri[Ci++]=ta,Ri[Ci++]=Za,$i=n.id,ta=n.overflow,Za=e}var wn=null,sn=null,Ae=!1,ja=null,wi=!1,Gf=Error(s(519));function Ka(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Go(Ai(n,e)),Gf}function Ug(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[T]=e,n[F]=r,a){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(a=0;a<ul.length;a++)we(ul[a],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":we("invalid",n),km(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":we("invalid",n);break;case"textarea":we("invalid",n),Ym(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||$_(n.textContent,a)?(r.popover!=null&&(we("beforetoggle",n),we("toggle",n)),r.onScroll!=null&&we("scroll",n),r.onScrollEnd!=null&&we("scrollend",n),r.onClick!=null&&(n.onclick=Ji),n=!0):n=!1,n||Ka(e,!0)}function cu(e){for(wn=e.return;wn;)switch(wn.tag){case 5:case 31:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:wn=wn.return}}function Mr(e){if(e!==wn)return!1;if(!Ae)return cu(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||_d(e.type,e.memoizedProps)),a=!a),a&&sn&&Ka(e),cu(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));sn=vv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));sn=vv(e)}else n===27?(n=sn,hs(e.type)?(e=Ad,Ad=null,sn=e):sn=n):sn=wn?Ni(e.stateNode.nextSibling):null;return!0}function Ps(){sn=wn=null,Ae=!1}function Vf(){var e=ja;return e!==null&&(ni===null?ni=e:ni.push.apply(ni,e),ja=null),e}function Go(e){ja===null?ja=[e]:ja.push(e)}var Xf=Ee(null),Is=null,Aa=null;function Qa(e,n,a){ie(Xf,n._currentValue),n._currentValue=a}function Ra(e){e._currentValue=Xf.current,ee(Xf)}function fu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function kf(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var z=0;z<n.length;z++)if(A.context===n[z]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),fu(f.return,a,e),r||(_=null);break t}f=A.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),fu(_,a,e),_=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,_=u.alternate,_!==null&&(_.lanes|=a),fu(u.return,a,e),_=u.child,_=_!==null?_.sibling:null):_=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function zs(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var A=u.type;hi(u.pendingProps.value,_.value)||(e!==null?e.push(A):e=[A])}}else if(u===Je.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(qr):e=[qr])}u=u.return}return e!==null&&kf(n,e,a,r),n.flags|=262144,e!==null}function hu(e){for(e=e.firstContext;e!==null;){if(!hi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Bs(e){Is=e,Aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function On(e){return Lg(Is,e)}function du(e,n){return Is===null&&Bs(e),Lg(e,n)}function Lg(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Aa===null){if(e===null)throw Error(s(308));Aa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Aa=Aa.next=n;return a}var Zy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},jy=o.unstable_scheduleCallback,Ky=o.unstable_NormalPriority,_n={$$typeof:J,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wf(){return{controller:new Zy,data:new Map,refCount:0}}function Vo(e){e.refCount--,e.refCount===0&&jy(Ky,function(){e.controller.abort()})}function Og(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var Xo=null;function Qy(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var ko=null,Yf=0,Fs=0,Er=null;function Jy(e,n){if(ko===null){var a=ko=[];Yf=0,Fs=ld(),Er={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Yf++,n.then(Pg,Pg),n}function Pg(){if(--Yf===0&&(Xo=null,ko!==null)){Er!==null&&(Er.status="fulfilled");var e=ko;ko=null,Fs=0,Er=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function $y(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Ig=_t.S;_t.S=function(e,n){if(C_=Xt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Jy(e,n),Xo!==null)for(var a=Gr;a!==null;)Og(a,Xo),a=a.next;if(a=e.types,a!==null){for(var r=Gr;r!==null;)Og(r,a),r=r.next;if(Fs!==0){r=Xo,r===null&&(r=Xo=[]);for(var u=0;u<a.length;u++){var f=a[u];r.indexOf(f)===-1&&r.push(f)}}}Ig!==null&&Ig(e,n)};var Hs=Ee(null);function qf(){var e=Hs.current;return e!==null?e:nn.pooledCache}function pu(e,n){n===null?ie(Hs,Hs.current):ie(Hs,n.pool)}function zg(){var e=qf();return e===null?null:{parent:_n._currentValue,pool:e}}var br=Error(s(460)),Zf=Error(s(474)),mu=Error(s(542)),gu={then:function(){}};function Bg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fg(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ji,Ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Gg(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(Ji,Ji);else{if(e=nn,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Gg(e),e}throw Vs=n,br}}function Gs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Vs=a,br):a}}var Vs=null;function Hg(){if(Vs===null)throw Error(s(459));var e=Vs;return Vs=null,e}function Gg(e){if(e===br||e===mu)throw Error(s(483))}var Tr=null,Wo=0;function _u(e){var n=Wo;return Wo+=1,Tr===null&&(Tr=[]),Fg(Tr,e,n)}function Ja(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function vu(e,n){throw n.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Vg(e){function n(tt,G){if(e){var it=tt.deletions;it===null?(tt.deletions=[G],tt.flags|=16):it.push(G)}}function a(tt,G){if(!e)return null;for(;G!==null;)n(tt,G),G=G.sibling;return null}function r(tt){for(var G=new Map;tt!==null;)tt.key===null?G.set(tt.index,tt):G.set(tt.key,tt),tt=tt.sibling;return G}function u(tt,G){return tt=ba(tt,G),tt.index=0,tt.sibling=null,tt}function f(tt,G,it){return tt.index=it,e?(it=tt.alternate,it!==null?(it=it.index,it<G?(tt.flags|=2,G):it):(tt.flags|=134217730,G)):(tt.flags|=1048576,G)}function _(tt){return e&&tt.alternate===null&&(tt.flags|=134217730),tt}function A(tt,G,it,xt){return G===null||G.tag!==6?(G=Bf(it,tt.mode,xt),G.return=tt,G):(G=u(G,it),G.return=tt,G)}function z(tt,G,it,xt){var qt=it.type;return qt===q?(tt=ct(tt,G,it.props.children,xt,it.key),Ja(tt,it),tt):G!==null&&(G.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===pt&&Gs(qt)===G.type)?(G=u(G,it.props),Ja(G,it),G.return=tt,G):(G=ou(it.type,it.key,it.props,null,tt.mode,xt),Ja(G,it),G.return=tt,G)}function et(tt,G,it,xt){return G===null||G.tag!==4||G.stateNode.containerInfo!==it.containerInfo||G.stateNode.implementation!==it.implementation?(G=Ff(it,tt.mode,xt),G.return=tt,G):(G=u(G,it.children||[]),G.return=tt,G)}function ct(tt,G,it,xt,qt){return G===null||G.tag!==7?(G=Os(it,tt.mode,xt,qt),G.return=tt,G):(G=u(G,it),G.return=tt,G)}function St(tt,G,it){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=Bf(""+G,tt.mode,it),G.return=tt,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case L:return it=ou(G.type,G.key,G.props,null,tt.mode,it),Ja(it,G),it.return=tt,it;case H:return G=Ff(G,tt.mode,it),G.return=tt,G;case pt:return G=Gs(G),St(tt,G,it)}if(Nt(G)||Z(G))return G=Os(G,tt.mode,it,null),G.return=tt,G;if(typeof G.then=="function")return St(tt,_u(G),it);if(G.$$typeof===J)return St(tt,du(tt,G),it);vu(tt,G)}return null}function j(tt,G,it,xt){var qt=G!==null?G.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return qt!==null?null:A(tt,G,""+it,xt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case L:return it.key===qt?z(tt,G,it,xt):null;case H:return it.key===qt?et(tt,G,it,xt):null;case pt:return it=Gs(it),j(tt,G,it,xt)}if(Nt(it)||Z(it))return qt!==null?null:ct(tt,G,it,xt,null);if(typeof it.then=="function")return j(tt,G,_u(it),xt);if(it.$$typeof===J)return j(tt,G,du(tt,it),xt);vu(tt,it)}return null}function lt(tt,G,it,xt,qt){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return tt=tt.get(it)||null,A(G,tt,""+xt,qt);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case L:return tt=tt.get(xt.key===null?it:xt.key)||null,z(G,tt,xt,qt);case H:return tt=tt.get(xt.key===null?it:xt.key)||null,et(G,tt,xt,qt);case pt:return xt=Gs(xt),lt(tt,G,it,xt,qt)}if(Nt(xt)||Z(xt))return tt=tt.get(it)||null,ct(G,tt,xt,qt,null);if(typeof xt.then=="function")return lt(tt,G,it,_u(xt),qt);if(xt.$$typeof===J)return lt(tt,G,it,du(G,xt),qt);vu(G,xt)}return null}function Pt(tt,G,it,xt){for(var qt=null,Le=null,ne=G,re=G=0,Sn=null;ne!==null&&re<it.length;re++){ne.index>re?(Sn=ne,ne=null):Sn=ne.sibling;var Be=j(tt,ne,it[re],xt);if(Be===null){ne===null&&(ne=Sn);break}e&&ne&&Be.alternate===null&&n(tt,ne),G=f(Be,G,re),Le===null?qt=Be:Le.sibling=Be,Le=Be,ne=Sn}if(re===it.length)return a(tt,ne),Ae&&Ta(tt,re),qt;if(ne===null){for(;re<it.length;re++)ne=St(tt,it[re],xt),ne!==null&&(G=f(ne,G,re),Le===null?qt=ne:Le.sibling=ne,Le=ne);return Ae&&Ta(tt,re),qt}for(ne=r(ne);re<it.length;re++)Sn=lt(ne,tt,re,it[re],xt),Sn!==null&&(e&&(Be=Sn.alternate,Be!==null&&ne.delete(Be.key===null?re:Be.key)),G=f(Sn,G,re),Le===null?qt=Sn:Le.sibling=Sn,Le=Sn);return e&&ne.forEach(function(_s){return n(tt,_s)}),Ae&&Ta(tt,re),qt}function Qt(tt,G,it,xt){if(it==null)throw Error(s(151));for(var qt=null,Le=null,ne=G,re=G=0,Sn=null,Be=it.next();ne!==null&&!Be.done;re++,Be=it.next()){ne.index>re?(Sn=ne,ne=null):Sn=ne.sibling;var _s=j(tt,ne,Be.value,xt);if(_s===null){ne===null&&(ne=Sn);break}e&&ne&&_s.alternate===null&&n(tt,ne),G=f(_s,G,re),Le===null?qt=_s:Le.sibling=_s,Le=_s,ne=Sn}if(Be.done)return a(tt,ne),Ae&&Ta(tt,re),qt;if(ne===null){for(;!Be.done;re++,Be=it.next())Be=St(tt,Be.value,xt),Be!==null&&(G=f(Be,G,re),Le===null?qt=Be:Le.sibling=Be,Le=Be);return Ae&&Ta(tt,re),qt}for(ne=r(ne);!Be.done;re++,Be=it.next())Be=lt(ne,tt,re,Be.value,xt),Be!==null&&(e&&(Sn=Be.alternate,Sn!==null&&ne.delete(Sn.key===null?re:Sn.key)),G=f(Be,G,re),Le===null?qt=Be:Le.sibling=Be,Le=Be);return e&&ne.forEach(function(LE){return n(tt,LE)}),Ae&&Ta(tt,re),qt}function ye(tt,G,it,xt){if(typeof it=="object"&&it!==null&&it.type===q&&it.key===null&&it.props.ref===void 0&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case L:t:{for(var qt=it.key;G!==null;){if(G.key===qt){if(qt=it.type,qt===q){if(G.tag===7){a(tt,G.sibling),xt=u(G,it.props.children),Ja(xt,it),xt.return=tt,tt=xt;break t}}else if(G.elementType===qt||typeof qt=="object"&&qt!==null&&qt.$$typeof===pt&&Gs(qt)===G.type){a(tt,G.sibling),xt=u(G,it.props),Ja(xt,it),xt.return=tt,tt=xt;break t}a(tt,G);break}else n(tt,G);G=G.sibling}it.type===q?(xt=Os(it.props.children,tt.mode,xt,it.key),Ja(xt,it),xt.return=tt,tt=xt):(xt=ou(it.type,it.key,it.props,null,tt.mode,xt),Ja(xt,it),xt.return=tt,tt=xt)}return _(tt);case H:t:{for(qt=it.key;G!==null;){if(G.key===qt)if(G.tag===4&&G.stateNode.containerInfo===it.containerInfo&&G.stateNode.implementation===it.implementation){a(tt,G.sibling),xt=u(G,it.children||[]),xt.return=tt,tt=xt;break t}else{a(tt,G);break}else n(tt,G);G=G.sibling}xt=Ff(it,tt.mode,xt),xt.return=tt,tt=xt}return _(tt);case pt:return it=Gs(it),ye(tt,G,it,xt)}if(Nt(it))return Pt(tt,G,it,xt);if(Z(it)){if(qt=Z(it),typeof qt!="function")throw Error(s(150));return it=qt.call(it),Qt(tt,G,it,xt)}if(typeof it.then=="function")return ye(tt,G,_u(it),xt);if(it.$$typeof===J)return ye(tt,G,du(tt,it),xt);vu(tt,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,G!==null&&G.tag===6?(a(tt,G.sibling),xt=u(G,it),xt.return=tt,tt=xt):(a(tt,G),xt=Bf(it,tt.mode,xt),xt.return=tt,tt=xt),_(tt)):a(tt,G)}return function(tt,G,it,xt){try{Wo=0;var qt=ye(tt,G,it,xt);return Tr=null,qt}catch(ne){if(ne===br||ne===mu)throw ne;var Le=$n(29,ne,null,tt.mode);return Le.lanes=xt,Le.return=tt,Le}finally{}}}var Xs=Vg(!0),Xg=Vg(!1),$a=!1;function jf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Kf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ts(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function es(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Xe&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=ru(e),Ag(e,null,a),n}return su(e,r,n,a),ru(e)}function Yo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ro(e,a)}}function Qf(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Jf=!1;function qo(){if(Jf){var e=Er;if(e!==null)throw e}}function Zo(e,n,a,r){Jf=!1;var u=e.updateQueue;$a=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var z=A,et=z.next;z.next=null,_===null?f=et:_.next=et,_=z;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,A=ct.lastBaseUpdate,A!==_&&(A===null?ct.firstBaseUpdate=et:A.next=et,ct.lastBaseUpdate=z))}if(f!==null){var St=u.baseState;_=0,ct=et=z=null,A=f;do{var j=A.lane&-536870913,lt=j!==A.lane;if(lt?(Ue&j)===j:(r&j)===j){j!==0&&j===Fs&&(Jf=!0),ct!==null&&(ct=ct.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Pt=e,Qt=A;j=n;var ye=a;switch(Qt.tag){case 1:if(Pt=Qt.payload,typeof Pt=="function"){St=Pt.call(ye,St,j);break t}St=Pt;break t;case 3:Pt.flags=Pt.flags&-65537|128;case 0:if(Pt=Qt.payload,j=typeof Pt=="function"?Pt.call(ye,St,j):Pt,j==null)break t;St=P({},St,j);break t;case 2:$a=!0}}j=A.callback,j!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[j]:lt.push(j))}else lt={lane:j,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ct===null?(et=ct=lt,z=St):ct=ct.next=lt,_|=j;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);ct===null&&(z=St),u.baseState=z,u.firstBaseUpdate=et,u.lastBaseUpdate=ct,f===null&&(u.shared.lanes=0),ls|=_,e.lanes=_,e.memoizedState=St}}function kg(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Wg(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)kg(a[e],n)}var ns=Ee(null),xu=Ee(0);function Yg(e,n){e=Ua,ie(xu,e),ie(ns,n),Ua=e|n.baseLanes}function $f(){ie(xu,Ua),ie(ns,ns.current)}function th(){Ua=xu.current,ee(ns),ee(xu)}var Pn=Ee(null),Gn=null;function is(e){var n=e.alternate;ie(In,In.current&1),ie(Pn,e),Gn===null&&(n===null||ns.current!==null||n.memoizedState!==null)&&(Gn=e)}function eh(e){ie(In,In.current),ie(Pn,e),Gn===null&&(Gn=e)}function qg(e){e.tag===22?(ie(In,In.current),ie(Pn,e),Gn===null&&(Gn=e)):as()}function as(){ie(In,In.current),ie(Pn,Pn.current)}function di(e){ee(Pn),Gn===e&&(Gn=null),ee(In)}var In=Ee(0);function jo(e,n){ie(Pn,Pn.current),ie(In,n)}function nh(e){ee(In),ee(Pn),Gn===e&&(Gn=null)}function Su(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||bd(a)||Td(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ca=0,Se=null,tn=null,vn=null,yu=!1,Ar=!1,ks=!1,Mu=0,Ko=0,Rr=null,tM=0;function dn(){throw Error(s(321))}function ih(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!hi(e[a],n[a]))return!1;return!0}function ah(e,n,a,r,u,f){return Ca=f,Se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,_t.H=e===null||e.memoizedState===null?D0:N0,ks=!1,f=a(r,u),ks=!1,Ar&&(f=jg(n,a,r,u)),Zg(e),f}function Zg(e){_t.H=wu;var n=tn!==null&&tn.next!==null;if(Ca=0,vn=tn=Se=null,yu=!1,Ko=0,Rr=null,n)throw Error(s(300));e===null||xn||(e=e.dependencies,e!==null&&hu(e)&&(xn=!0))}function jg(e,n,a,r){Se=e;var u=0;do{if(Ar&&(Rr=null),Ko=0,Ar=!1,25<=u)throw Error(s(301));if(u+=1,vn=tn=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}_t.H=lM,f=n(a,r)}while(Ar);return f}function eM(){var e=_t.H,n=e.useState()[0];return n=typeof n.then=="function"?Qo(n):n,e=e.useState()[0],(tn!==null?tn.memoizedState:null)!==e&&(Se.flags|=1024),n}function sh(){var e=Mu!==0;return Mu=0,e}function rh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function oh(e){if(yu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}yu=!1}Ca=0,vn=tn=Se=null,Ar=!1,Ko=Mu=0,Rr=null}function Zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?Se.memoizedState=vn=e:vn=vn.next=e,vn}function gn(){if(tn===null){var e=Se.alternate;e=e!==null?e.memoizedState:null}else e=tn.next;var n=vn===null?Se.memoizedState:vn.next;if(n!==null)vn=n,tn=e;else{if(e===null)throw Se.alternate===null?Error(s(467)):Error(s(310));tn=e,e={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},vn===null?Se.memoizedState=vn=e:vn=vn.next=e}return vn}function Eu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qo(e){var n=Ko;return Ko+=1,Rr===null&&(Rr=[]),e=Fg(Rr,e,n),n=Se,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,_t.H=n===null||n.memoizedState===null?D0:N0),e}function bu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qo(e);if(e.$$typeof===mt)return;if(e.$$typeof===J)return On(e)}throw Error(s(438,String(e)))}function lh(e){var n=null,a=Se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=Se.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Eu(),Se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=kt;return n.index++,a}function wa(e,n){return typeof n=="function"?n(e):n}function Tu(e){var n=gn();return uh(n,tn,e)}function uh(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=_=null,z=null,et=n,ct=!1;do{var St=et.lane&-536870913;if(St!==et.lane?(Ue&St)===St:(Ca&St)===St){var j=et.revertLane;if(j===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),St===Fs&&(ct=!0);else if((Ca&j)===j){et=et.next,j===Fs&&(ct=!0);continue}else St={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},z===null?(A=z=St,_=f):z=z.next=St,Se.lanes|=j,ls|=j;St=et.action,ks&&a(f,St),f=et.hasEagerState?et.eagerState:a(f,St)}else j={lane:St,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},z===null?(A=z=j,_=f):z=z.next=j,Se.lanes|=St,ls|=St;et=et.next}while(et!==null&&et!==n);if(z===null?_=f:z.next=A,!hi(f,e.memoizedState)&&(xn=!0,ct&&(a=Er,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=z,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ch(e){var n=gn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);hi(f,n.memoizedState)||(xn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Kg(e,n,a){var r=Se,u=gn(),f=Ae;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!hi((tn||u).memoizedState,a);if(_&&(u.memoizedState=a,xn=!0),u=u.queue,dh($g.bind(null,r,u,e),[e]),e=u.getSnapshot!==n||_||vn!==null&&(vn.memoizedState.tag&1)!==0,Cr(e?9:8,{destroy:void 0},Jg.bind(null,r,u,a,n),null),e){if(r.flags|=2048,nn===null)throw Error(s(349));f||(Ca&127)!==0||Qg(r,n,a)}return a}function Qg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Se.updateQueue,n===null?(n=Eu(),Se.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Jg(e,n,a,r){n.value=a,n.getSnapshot=r,t0(n)&&e0(e)}function $g(e,n,a){return a(function(){t0(n)&&e0(e)})}function t0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!hi(e,a)}catch{return!0}}function e0(e){var n=Ls(e,2);n!==null&&ii(n,e,2)}function fh(e){var n=Zn();if(typeof e=="function"){var a=e;if(e=a(),ks){Pe(!0);try{a()}finally{Pe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:e},n}function n0(e,n,a,r){return e.baseState=a,uh(e,tn,typeof r=="function"?r:wa)}function nM(e,n,a,r,u){if(Cu(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};_t.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,i0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function i0(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=_t.T,_={};_.types=f!==null?f.types:null,_t.T=_;try{var A=a(u,r),z=_t.S;z!==null&&z(_,A),a0(e,n,A)}catch(et){hh(e,n,et)}finally{f!==null&&_.types!==null&&(f.types=_.types),_t.T=f}}else try{f=a(u,r),a0(e,n,f)}catch(et){hh(e,n,et)}}function a0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){s0(e,n,r)},function(r){return hh(e,n,r)}):s0(e,n,a)}function s0(e,n,a){n.status="fulfilled",n.value=a,r0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,i0(e,a)))}function hh(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,r0(n),n=n.next;while(n!==r)}e.action=null}function r0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function o0(e,n){return n}function l0(e,n){if(Ae){var a=nn.formState;if(a!==null){t:{var r=Se;if(Ae){if(sn){e:{for(var u=sn,f=wi;u.nodeType!==8;){if(!f){u=null;break e}if(u=Ni(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){sn=Ni(u.nextSibling),r=u.data==="F!";break t}}Ka(r)}r=!1}r&&(n=a[0])}}return a=Zn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:o0,lastRenderedState:n},a.queue=r,a=R0.bind(null,Se,r),r.dispatch=a,r=fh(!1),f=vh.bind(null,Se,!1,r.queue),r=Zn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=nM.bind(null,Se,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function u0(e){var n=gn();return c0(n,tn,e)}function c0(e,n,a){if(n=uh(e,n,o0)[0],e=Tu(wa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Qo(n)}catch(_){throw _===br?mu:_}else r=n;n=gn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Se.flags|=2048,Cr(9,{destroy:void 0},iM.bind(null,u,a),null)),[r,f,e]}function iM(e,n){e.action=n}function f0(e){var n=gn(),a=tn;if(a!==null)return c0(n,a,e);gn(),n=n.memoizedState,a=gn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Cr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=Se.updateQueue,n===null&&(n=Eu(),Se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function h0(){return gn().memoizedState}function Au(e,n,a,r){var u=Zn();Se.flags|=e,u.memoizedState=Cr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Ru(e,n,a,r){var u=gn();r=r===void 0?null:r;var f=u.memoizedState.inst;tn!==null&&r!==null&&ih(r,tn.memoizedState.deps)?u.memoizedState=Cr(n,f,a,r):(Se.flags|=e,u.memoizedState=Cr(1|n,f,a,r))}function d0(e,n){Au(8390656,8,e,n)}function dh(e,n){Ru(2048,8,e,n)}function aM(e){Se.flags|=4;var n=Se.updateQueue;if(n===null)n=Eu(),Se.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function p0(e){var n=gn().memoizedState;return aM({ref:n,nextImpl:e}),function(){if((Xe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function m0(e,n){return Ru(4,2,e,n)}function g0(e,n){return Ru(4,4,e,n)}function _0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function v0(e,n,a){a=a!=null?a.concat([e]):null,Ru(4,4,_0.bind(null,n,e),a)}function ph(){}function x0(e,n){var a=gn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&ih(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function S0(e,n){var a=gn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&ih(n,r[1]))return r[0];if(r=e(),ks){Pe(!0);try{e()}finally{Pe(!1)}}return a.memoizedState=[r,n],r}function mh(e,n,a){return a===void 0||(Ca&1073741824)!==0&&(Ue&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=D_(),Se.lanes|=e,ls|=e,a)}function y0(e,n,a,r){return hi(a,n)?a:ns.current!==null?(e=mh(e,a,r),hi(e,n)||(xn=!0),e):(Ca&106)===0||(Ca&1073741824)!==0&&(Ue&261930)===0?(xn=!0,e.memoizedState=a):(e=D_(),Se.lanes|=e,ls|=e,n)}function M0(e,n,a,r,u){var f=Rt.p;Rt.p=f!==0&&8>f?f:8;var _=_t.T,A={};A.types=_!==null?_.types:null,_t.T=A,vh(e,!1,n,a);try{var z=u(),et=_t.S;if(et!==null&&et(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ct=$y(z,r);Jo(e,n,ct,_i(e))}else Jo(e,n,r,_i(e))}catch(St){Jo(e,n,{then:function(){},status:"rejected",reason:St},_i())}finally{Rt.p=f,_!==null&&A.types!==null&&(_.types=A.types),_t.T=_}}function sM(){}function gh(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=E0(e).queue;M0(e,u,n,He,a===null?sM:function(){return b0(e),a(r)})}function E0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:He,baseState:He,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:He},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function b0(e){var n=E0(e);n.next===null&&(n=e.alternate.memoizedState),Jo(e,n.next.queue,{},_i())}function _h(){return On(qr)}function T0(){return gn().memoizedState}function A0(){return gn().memoizedState}function rM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=_i();e=ts(a);var r=es(n,e,a);r!==null&&(ii(r,n,a),Yo(r,n,a)),n={cache:Wf()},e.payload=n;return}n=n.return}}function oM(e,n,a){var r=_i();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cu(e)?C0(n,a):(a=If(e,n,a,r),a!==null&&(ii(a,e,r),w0(a,n,r)))}function R0(e,n,a){var r=_i();Jo(e,n,a,r)}function Jo(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cu(e))C0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,A=f(_,a);if(u.hasEagerState=!0,u.eagerState=A,hi(A,_))return su(e,n,u,0),nn===null&&au(),!1}catch{}finally{}if(a=If(e,n,u,r),a!==null)return ii(a,e,r),w0(a,n,r),!0}return!1}function vh(e,n,a,r){if(r={lane:2,revertLane:ld(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Cu(e)){if(n)throw Error(s(479))}else n=If(e,a,r,2),n!==null&&ii(n,e,2)}function Cu(e){var n=e.alternate;return e===Se||n!==null&&n===Se}function C0(e,n){Ar=yu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function w0(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ro(e,a)}}var wu={readContext:On,use:bu,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useLayoutEffect:dn,useInsertionEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useSyncExternalStore:dn,useId:dn,useHostTransitionStatus:dn,useFormState:dn,useActionState:dn,useOptimistic:dn,useMemoCache:dn,useCacheRefresh:dn,useEffectEvent:dn},D0={readContext:On,use:bu,useCallback:function(e,n){return Zn().memoizedState=[e,n===void 0?null:n],e},useContext:On,useEffect:d0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Au(4194308,4,_0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Au(4194308,4,e,n)},useInsertionEffect:function(e,n){Au(4,2,e,n)},useMemo:function(e,n){var a=Zn();n=n===void 0?null:n;var r=e();if(ks){Pe(!0);try{e()}finally{Pe(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Zn();if(a!==void 0){var u=a(n);if(ks){Pe(!0);try{a(n)}finally{Pe(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=oM.bind(null,Se,e),[r.memoizedState,e]},useRef:function(e){var n=Zn();return e={current:e},n.memoizedState=e},useState:function(e){e=fh(e);var n=e.queue,a=R0.bind(null,Se,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ph,useDeferredValue:function(e,n){var a=Zn();return mh(a,e,n)},useTransition:function(){var e=fh(!1);return e=M0.bind(null,Se,e.queue,!0,!1),Zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=Se,u=Zn();if(Ae){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),nn===null)throw Error(s(349));(Ue&127)!==0||Qg(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,d0($g.bind(null,r,f,e),[e]),r.flags|=2048,Cr(9,{destroy:void 0},Jg.bind(null,r,f,a,n),null),a},useId:function(){var e=Zn(),n=nn.identifierPrefix;if(Ae){var a=ta,r=$i;a=(r&~(1<<32-me(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Mu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=tM++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:_h,useFormState:l0,useActionState:l0,useOptimistic:function(e){var n=Zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=vh.bind(null,Se,!0,a),a.dispatch=n,[e,n]},useMemoCache:lh,useCacheRefresh:function(){return Zn().memoizedState=rM.bind(null,Se)},useEffectEvent:function(e){var n=Zn(),a={impl:e};return n.memoizedState=a,function(){if((Xe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},N0={readContext:On,use:bu,useCallback:x0,useContext:On,useEffect:dh,useImperativeHandle:v0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:S0,useReducer:Tu,useRef:h0,useState:function(){return Tu(wa)},useDebugValue:ph,useDeferredValue:function(e,n){var a=gn();return y0(a,tn.memoizedState,e,n)},useTransition:function(){var e=Tu(wa)[0],n=gn().memoizedState;return[typeof e=="boolean"?e:Qo(e),n]},useSyncExternalStore:Kg,useId:T0,useHostTransitionStatus:_h,useFormState:u0,useActionState:u0,useOptimistic:function(e,n){var a=gn();return n0(a,tn,e,n)},useMemoCache:lh,useCacheRefresh:A0,useEffectEvent:p0},lM={readContext:On,use:bu,useCallback:x0,useContext:On,useEffect:dh,useImperativeHandle:v0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:S0,useReducer:ch,useRef:h0,useState:function(){return ch(wa)},useDebugValue:ph,useDeferredValue:function(e,n){var a=gn();return tn===null?mh(a,e,n):y0(a,tn.memoizedState,e,n)},useTransition:function(){var e=ch(wa)[0],n=gn().memoizedState;return[typeof e=="boolean"?e:Qo(e),n]},useSyncExternalStore:Kg,useId:T0,useHostTransitionStatus:_h,useFormState:f0,useActionState:f0,useOptimistic:function(e,n){var a=gn();return tn!==null?n0(a,tn,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:lh,useCacheRefresh:A0,useEffectEvent:p0};function xh(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Sh={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=_i(),u=ts(r);u.payload=n,a!=null&&(u.callback=a),n=es(e,u,r),n!==null&&(ii(n,e,r),Yo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=_i(),u=ts(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=es(e,u,r),n!==null&&(ii(n,e,r),Yo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=_i(),r=ts(a);r.tag=2,n!=null&&(r.callback=n),n=es(e,r,a),n!==null&&(ii(n,e,a),Yo(n,e,a))}};function U0(e,n,a,r,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!Bo(a,r)||!Bo(u,f):!0}function L0(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Sh.enqueueReplaceState(n,n.state,null)}function Ws(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=P({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function O0(e){iu(e)}function P0(e){console.error(e)}function I0(e){iu(e)}function Du(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function z0(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function yh(e,n,a){return a=ts(a),a.tag=3,a.payload={element:null},a.callback=function(){Du(e,n)},a}function B0(e){return e=ts(e),e.tag=3,e}function F0(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){z0(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){z0(n,a,r),typeof u!="function"&&(us===null?us=new Set([this]):us.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function uM(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&zs(n,a,u,!0),a=Pn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Gn===null?Qu():a.alternate===null&&pn===0&&(pn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===gu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),sd(e,r,u)),!1;case 22:return a.flags|=65536,r===gu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),sd(e,r,u)),!1}throw Error(s(435,a.tag))}return sd(e,r,u),Qu(),!1}if(Ae)return n=Pn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Gf&&(e=Error(s(422),{cause:r}),Go(Ai(e,a)))):(r!==Gf&&(n=Error(s(423),{cause:r}),Go(Ai(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=Ai(r,a),u=yh(e.stateNode,r,u),Qf(e,u),pn!==4&&(pn=2)),!1;var f=Error(s(520),{cause:r});if(f=Ai(f,a),rl===null?rl=[f]:rl.push(f),pn!==4&&(pn=2),n===null)return!0;r=Ai(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=yh(a.stateNode,r,e),Qf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(us===null||!us.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=B0(u),F0(u,e,a,r),Qf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Mh=Error(s(461)),xn=!1;function bn(e,n,a,r){n.child=e===null?Xg(n,null,a,r):Xs(n,e.child,a,r)}function H0(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var A in r)A!=="ref"&&(_[A]=r[A])}else _=r;return Bs(n),r=ah(e,n,a,_,f,u),A=sh(),e!==null&&!xn?(rh(e,n,u),Da(e,n,u)):(Ae&&A&&uu(n),n.flags|=1,bn(e,n,r,u),n.child)}function G0(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!zf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,V0(e,n,f,r,u)):(e=ou(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Dh(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Bo,a(_,r)&&e.ref===n.ref)return Da(e,n,u)}return n.flags|=1,e=ba(f,r),e.ref=n.ref,e.return=n,n.child=e}function V0(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(Bo(f,r)&&e.ref===n.ref)if(xn=!1,n.pendingProps=r=f,Dh(e,u))(e.flags&131072)!==0&&(xn=!0);else return n.lanes=e.lanes,Da(e,n,u)}return Eh(e,n,a,r,u)}function X0(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return k0(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&pu(n,f!==null?f.cachePool:null),f!==null?Yg(n,f):$f(),qg(n);else return r=n.lanes=536870912,k0(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(pu(n,f.cachePool),Yg(n,f),as(),n.memoizedState=null):(e!==null&&pu(n,null),$f(),as());return bn(e,n,u,a),n.child}function $o(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function k0(e,n,a,r,u){var f=qf();return f=f===null?null:{parent:_n._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&pu(n,null),$f(),qg(n),e!==null&&zs(e,n,r,!0),n.childLanes=u,null}function Nu(e,n){return n=Uu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function W0(e,n,a){return Xs(n,e.child,null,a),e=Nu(n,n.pendingProps),e.flags|=2,di(n),n.memoizedState=null,e}function cM(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ae){if(r.mode==="hidden")return e=Nu(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},$o(null,e);if(eh(n),(e=sn)?(e=_v(e,wi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Za!==null?{id:$i,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},a=Cg(e),a.return=n,n.child=a,wn=n,sn=null)):e=null,e===null)throw Ka(n);return n.lanes=536870912,null}return Nu(n,r)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(eh(n),u)if(n.flags&256)n.flags&=-257,n=W0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(xn||zs(e,n,a,!1),u=(a&e.childLanes)!==0,xn||u){if(ns.current===null){if(r=nn,r!==null&&(_=Co(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Ls(e,_),ii(r,e,_),Mh;Qu()}n=W0(e,n,a)}else e=f.treeContext,sn=Ni(_.nextSibling),wn=n,Ae=!0,ja=null,wi=!1,e!==null&&Ng(n,e),n=Nu(n,r),n.flags|=134221824;return n}return e=ba(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function wr(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Eh(e,n,a,r,u){return Bs(n),a=ah(e,n,a,r,void 0,u),r=sh(),e!==null&&!xn?(rh(e,n,u),Da(e,n,u)):(Ae&&r&&uu(n),n.flags|=1,bn(e,n,a,u),n.child)}function Y0(e,n,a,r,u,f){return Bs(n),n.updateQueue=null,a=jg(n,r,a,u),Zg(e),r=sh(),e!==null&&!xn?(rh(e,n,f),Da(e,n,f)):(Ae&&r&&uu(n),n.flags|=1,bn(e,n,a,f),n.child)}function q0(e,n,a,r,u){if(Bs(n),n.stateNode===null){var f=xr,_=a.contextType;typeof _=="object"&&_!==null&&(f=On(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Sh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},jf(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?On(_):xr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(xh(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&Sh.enqueueReplaceState(f,f.state,null),Zo(n,r,f,u),qo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,z=Ws(a,A);f.props=z;var et=f.context,ct=a.contextType;_=xr,typeof ct=="object"&&ct!==null&&(_=On(ct));var St=a.getDerivedStateFromProps;ct=typeof St=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||et!==_)&&L0(n,f,r,_),$a=!1;var j=n.memoizedState;f.state=j,Zo(n,r,f,u),qo(),et=n.memoizedState,A||j!==et||$a?(typeof St=="function"&&(xh(n,a,St,r),et=n.memoizedState),(z=$a||U0(n,a,z,r,j,et,_))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=et),f.props=r,f.state=et,f.context=_,r=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Kf(e,n),_=n.memoizedProps,ct=Ws(a,_),f.props=ct,St=n.pendingProps,j=f.context,et=a.contextType,z=xr,typeof et=="object"&&et!==null&&(z=On(et)),A=a.getDerivedStateFromProps,(et=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==St||j!==z)&&L0(n,f,r,z),$a=!1,j=n.memoizedState,f.state=j,Zo(n,r,f,u),qo();var lt=n.memoizedState;_!==St||j!==lt||$a||e!==null&&e.dependencies!==null&&hu(e.dependencies)?(typeof A=="function"&&(xh(n,a,A,r),lt=n.memoizedState),(ct=$a||U0(n,a,ct,r,j,lt,z)||e!==null&&e.dependencies!==null&&hu(e.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,lt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,lt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&j===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&j===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),f.props=r,f.state=lt,f.context=z,r=ct):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&j===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&j===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,wr(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Xs(n,e.child,null,u),n.child=Xs(n,null,a,u)):bn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Da(e,n,u),e}function Z0(e,n,a,r){return Ps(),n.flags|=256,bn(e,n,a,r),n.child}var bh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Th(e){return{baseLanes:e,cachePool:zg()}}function Ah(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=gi),e}function j0(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(In.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(u?is(n):as(),(e=sn)?(e=_v(e,wi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Za!==null?{id:$i,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},a=Cg(e),a.return=n,n.child=a,wn=n,sn=null)):e=null,e===null)throw Ka(n);return Td(e)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,u?(as(),u=n.mode,f=Uu({mode:"hidden",children:f},u),r=Os(r,u,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=Th(a),r.childLanes=Ah(e,_,a),n.memoizedState=bh,$o(null,r)):(is(n),Rh(n,f))}var A=e.memoizedState;if(A!==null){var z=A.dehydrated;if(z!==null)return fM(e,n,f,_,r,z,A,a)}return u?(as(),u=r.fallback,f=n.mode,A=e.child,z=A.sibling,r=ba(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&1206910976,z!==null?u=ba(z,u):(u=Os(u,f,a,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,$o(null,r),r=n.child,u=e.child.memoizedState,u===null?u=Th(a):(f=u.cachePool,f!==null?(A=_n._currentValue,f=f.parent!==A?{parent:A,pool:A}:f):f=zg(),u={baseLanes:u.baseLanes|a,cachePool:f}),r.memoizedState=u,r.childLanes=Ah(e,_,a),n.memoizedState=bh,$o(e.child,r)):(is(n),a=e.child,e=a.sibling,a=ba(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function Rh(e,n){return n=Uu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Uu(e,n){return e=$n(22,e,null,n),e.lanes=0,e}function Lu(e,n,a){return Xs(n,e.child,null,a),e=Rh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function fM(e,n,a,r,u,f,_,A){if(a)return n.flags&256?(is(n),n.flags&=-257,Lu(e,n,A)):n.memoizedState!==null?(as(),n.child=e.child,n.flags|=128,null):(as(),f=u.fallback,_=n.mode,u=Uu({mode:"visible",children:u.children},_),f=Os(f,_,A,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,Xs(n,e.child,null,A),u=n.child,u.memoizedState=Th(A),u.childLanes=Ah(e,r,A),n.memoizedState=bh,$o(null,u));if(is(n),Td(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var z=r.dgst;return r=z,r!==""&&(u=Error(s(419)),u.stack="",u.digest=r,Go({value:u,source:null,stack:null})),Lu(e,n,A)}if(xn||zs(e,n,A,!1),r=(A&e.childLanes)!==0,xn||r){if(ns.current!==null)return Lu(e,n,A);if(r=nn,r!==null&&(u=Co(r,A),u!==0&&u!==_.retryLane))throw _.retryLane=u,Ls(e,u),ii(r,e,u),Mh;return bd(f)||Qu(),Lu(e,n,A)}return bd(f)?(n.flags|=192,n.child=e.child,null):(e=_.treeContext,sn=Ni(f.nextSibling),wn=n,Ae=!0,ja=null,wi=!1,e!==null&&Ng(n,e),n=Rh(n,u.children),n.flags|=134221824,n)}function K0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),fu(e.return,n,a)}function Q0(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&Su(a)===null&&(n=e),e=e.sibling}return n}function Ou(e,n,a,r,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function Ch(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function wh(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var _=In.current;if(n.flags&128)return jo(n,_),null;var A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,jo(n,_),u==="backwards"&&e!==null?(Ch(e),bn(e,n,r,a),Ch(e)):bn(e,n,r,a),r=Ae?Ho:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&K0(e,a,n);else if(e.tag===19)K0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"backwards":a=Q0(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,Ch(n)),Ou(n,!0,u,null,f,r);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Su(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Ou(n,!0,a,null,f,r);break;case"together":Ou(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=Q0(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ou(n,!1,u,a,f,r)}return n.child}function J0(e,n,a){var r=n.pendingProps;return Qa(n,n.type,r.value),bn(e,n,r.children,a),n.child}function Da(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ls|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(zs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ba(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ba(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Dh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&hu(e)))}function hM(e,n,a){switch(n.tag){case 3:N(n,n.stateNode.containerInfo),Qa(n,_n,e.memoizedState.cache),Ps();break;case 27:case 5:ue(n);break;case 4:N(n,n.stateNode.containerInfo);break;case 10:Qa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,eh(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return is(n),n.flags|=128,null;r=zs(e,n,a,!1);var u=n.child.childLanes;return r||(a&u)!==0?j0(e,n,a):(is(n),e=Da(e,n,a),e!==null?e.sibling:null)}is(n);break;case 19:if(n.flags&128)return wh(e,n,a);if(u=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(zs(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return wh(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),jo(n,In.current),r)break;return null;case 22:return n.lanes=0,X0(e,n,a,n.pendingProps);case 24:Qa(n,_n,e.memoizedState.cache)}return Da(e,n,a)}function $0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)xn=!0;else{if(!Dh(e,a)&&(n.flags&128)===0)return xn=!1,hM(e,n,a);xn=(e.flags&131072)!==0}else xn=!1,Ae&&(n.flags&1048576)!==0&&Dg(n,Ho,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=Gs(n.elementType),n.type=e,typeof e=="function")zf(e)?(r=Ws(e,r),n.tag=1,n=q0(null,n,e,r,a)):(n.tag=0,n=Eh(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===k){n.tag=11,n=H0(null,n,e,r,a);break t}else if(u===st){n.tag=14,n=G0(null,n,e,r,a);break t}else if(u===J){n.tag=10,n.type=e,n=J0(null,n,a);break t}}throw n=Tt(e)||e,Error(s(306,n,""))}}return n;case 0:return Eh(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Ws(r,n.pendingProps),q0(e,n,r,u,a);case 3:t:{if(N(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Kf(e,n),Zo(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Qa(n,_n,r),r!==f.cache&&kf(n,[_n],a,!0),qo(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Z0(e,n,r,a);break t}else if(r!==u){u=Ai(Error(s(424)),n),Go(u),n=Z0(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(sn=Ni(e.firstChild),wn=n,Ae=!0,ja=null,wi=!0,a=Xg(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Ps(),r===u){n=Da(e,n,a);break t}bn(e,n,r,a)}n=n.child}return n;case 26:return wr(e,n),e===null?(a=bv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(n.stateNode=iv(n.type,n.pendingProps,Oe.current,n)):n.memoizedState=bv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ue(n),e===null&&Ae&&(r=n.stateNode=Sv(n.type,n.pendingProps,Oe.current),wn=n,wi=!0,u=sn,hs(n.type)?(Ad=u,sn=Ni(r.firstChild)):sn=u),bn(e,n,n.pendingProps.children,a),wr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((u=r=sn)&&(r=rE(r,n.type,n.pendingProps,wi),r!==null?(n.stateNode=r,wn=n,sn=Ni(r.firstChild),wi=!1,u=!0):u=!1),u||Ka(n)),ue(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,r=f.children,_d(u,f)?r=null:_!==null&&_d(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=ah(e,n,eM,null,null,a),qr._currentValue=u),wr(e,n),bn(e,n,r,a),n.child;case 6:return e===null&&Ae&&((e=a=sn)&&(a=oE(a,n.pendingProps,wi),a!==null?(n.stateNode=a,wn=n,sn=null,e=!0):e=!1),e||Ka(n)),null;case 13:return j0(e,n,a);case 4:return N(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Xs(n,null,r,a):bn(e,n,r,a),n.child;case 11:return H0(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,wr(e,n),bn(e,n,r,a),n.child;case 8:return bn(e,n,n.pendingProps.children,a),n.child;case 12:return bn(e,n,n.pendingProps.children,a),n.child;case 10:return J0(e,n,a);case 9:return u=n.type._context,r=n.pendingProps.children,Bs(n),u=On(u),r=r(u),n.flags|=1,bn(e,n,r,a),n.child;case 14:return G0(e,n,n.type,n.pendingProps,a);case 15:return V0(e,n,n.type,n.pendingProps,a);case 19:return wh(e,n,a);case 31:return cM(e,n,a);case 22:return X0(e,n,a,n.pendingProps);case 24:return Bs(n),r=On(_n),e===null?(u=qf(),u===null&&(u=nn,f=Wf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},jf(n),Qa(n,_n,u)):((e.lanes&a)!==0&&(Kf(e,n),Zo(n,null,null,a),qo()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Qa(n,_n,r)):(r=f.cache,Qa(n,_n,r),r!==u.cache&&kf(n,[_n],a,!0))),bn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:Ae&&uu(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:wr(e,n),bn(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Na(e){e.flags|=4}function Nh(e,n,a,r,u){var f;if((f=(e.mode&32)!==0)&&(f=a===null?Cv(n,r):Cv(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(O_())e.flags|=8192;else throw Vs=gu,Zf}else e.flags&=-16777217}function t_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wv(n))if(O_())e.flags|=8192;else throw Vs=gu,Zf}function Pu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ao():536870912,e.lanes|=n,Or|=n)}function tl(e,n){if(!Ae)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function rn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&1206910976,r|=u.flags&1206910976,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function dM(e,n,a){var r=n.pendingProps;switch(Hf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(n),null;case 1:return rn(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ra(_n),te(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Mr(n)?Na(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Vf())),rn(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Na(n),f!==null?(rn(n),t_(n,f)):(rn(n),Nh(n,u,null,r,a))):f?f!==e.memoizedState?(Na(n),rn(n),t_(n,f)):(rn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Na(n),rn(n),Nh(n,u,e,r,a)),null;case 27:if(O(n),a=Oe.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return rn(n),n.subtreeFlags&=-33554433,null}e=Ge.current,Mr(n)?Ug(n):(e=Sv(u,r,a),n.stateNode=e,Na(n))}return rn(n),n.subtreeFlags&=-33554433,null;case 5:if(O(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Na(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return rn(n),n.subtreeFlags&=-33554433,null}if(f=Ge.current,Mr(n))Ug(n);else{var _=fl(Oe.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}f[T]=n,f[F]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Bn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Na(n)}}return rn(n),n.subtreeFlags&=-33554433,Nh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Na(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=Oe.current,Mr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=wn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[T]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||$_(e.nodeValue,a)),e||Ka(n,!0)}else e=fl(e).createTextNode(r),e[T]=n,n.stateNode=e}return rn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Mr(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[T]=n}else Ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;rn(n),e=!1}else a=Vf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(di(n),n):(di(n),null);if((n.flags&128)!==0)throw Error(s(558))}return rn(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Mr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[T]=n}else Ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;rn(n),u=!1}else u=Vf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(di(n),n):(di(n),null)}return di(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Pu(n,n.updateQueue),rn(n),null);case 4:return te(),e===null&&hd(n.stateNode.containerInfo),n.flags|=67108864,rn(n),null;case 10:return Ra(n.type),rn(n),null;case 19:if(nh(n),r=n.memoizedState,r===null)return rn(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)tl(r,!1);else{if(pn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Su(e),f!==null){for(n.flags|=128,tl(r,!1),e=f.updateQueue,n.updateQueue=e,Pu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Rg(a,e),a=a.sibling;return jo(n,In.current&1|2),Ae&&Ta(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&Xt()>qu&&(n.flags|=128,u=!0,tl(r,!1),n.lanes=4194304)}else{if(!u)if(e=Su(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Pu(n,e),tl(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!Ae)return rn(n),null}else 2*Xt()-r.renderingStartTime>qu&&a!==536870912&&(n.flags|=128,u=!0,tl(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){e=r.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Xt(),e.sibling=null,f=In.current,f=u?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Ae?jo(n,f):(a=f,ie(Pn,n),ie(In,a),Gn===null&&(Gn=n)),Ae&&Ta(n,r.treeForkCount),e}return rn(n),null;case 22:case 23:return di(n),th(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(rn(n),n.subtreeFlags&6&&(n.flags|=8192)):rn(n),a=n.updateQueue,a!==null&&Pu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&ee(Hs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ra(_n),rn(n),null;case 25:return null;case 30:return n.flags|=33554432,rn(n),null}throw Error(s(156,n.tag))}function pM(e,n){switch(Hf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ra(_n),te(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return O(n),null;case 31:if(n.memoizedState!==null){if(di(n),n.alternate===null)throw Error(s(340));Ps()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(di(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ps()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nh(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return te(),null;case 10:return Ra(n.type),null;case 22:case 23:return di(n),th(),e!==null&&ee(Hs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ra(_n),null;case 25:return null;default:return null}}function e_(e,n){switch(Hf(n),n.tag){case 3:Ra(_n),te();break;case 26:case 27:case 5:O(n);break;case 4:te();break;case 31:n.memoizedState!==null&&di(n);break;case 13:di(n);break;case 19:nh(n);break;case 10:Ra(n.type);break;case 22:case 23:di(n),th(),e!==null&&ee(Hs);break;case 24:Ra(_n)}}function el(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==u)}}catch(A){qe(n,n.return,A)}}function ss(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var _=r.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,u=n;var z=a,et=A;try{et()}catch(ct){qe(u,z,ct)}}}r=r.next}while(r!==f)}}catch(ct){qe(n,n.return,ct)}}function n_(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Wg(n,a)}catch(r){qe(e,e.return,r)}}}function i_(e,n,a){a.props=Ws(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){qe(e,n,r)}}function ea(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var u=e.stateNode,f=Ma(e.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=cv(f)),r=u.ref;break;case 7:if(e.stateNode===null){var _=new vi(e);v(e.child,!1,aE,_,void 0,void 0),e.stateNode=_}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(A){qe(e,n,A)}}function zn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){qe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){qe(e,n,u)}else a.current=null}function Iu(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)gv(e.stateNode,n[a])}function a_(e){for(var n=e.return;n!==null&&(Lh(n)&&gv(e.stateNode,n.stateNode),!Uh(n));)n=n.return}function nl(e){for(var n=e.return;n!==null&&(Lh(n)&&sE(e.stateNode,n.stateNode),!Uh(n));)n=n.return}function Uh(e){return e.tag===5||e.tag===3||e.tag===27}function Lh(e){return e&&e.tag===7&&e.stateNode!==null}function Oh(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){qe(e,e.return,u)}}function Ph(e,n,a){try{var r=e.stateNode;HM(r,e.type,a,n),r[F]=n}catch(u){qe(e,e.return,u)}}function s_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&hs(e.type)||e.tag===4}function Ih(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||s_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&hs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zh(e,n,a,r){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ji)),Iu(e,r),Te=!0;else if(u!==4&&(u===27&&(Iu(e,r),r=null,hs(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(zh(e,n,a,r),e=e.sibling;e!==null;)zh(e,n,a,r),e=e.sibling}function zu(e,n,a,r){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Iu(e,r),Te=!0;else if(u!==4&&(u===27&&(Iu(e,r),r=null,hs(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(zu(e,n,a,r),e=e.sibling;e!==null;)zu(e,n,a,r),e=e.sibling}function r_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Bn(n,r,a),n[T]=e,n[F]=a}catch(f){qe(e,e.return,f)}}var Bu=!1,pi=null;function o_(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Bu=!0)}var na=null;function l_(){var e=na;return na=null,e}var ti=0;function Dr(e,n,a,r,u){return ti=0,u_(e.child,n,a,r,u)}function u_(e,n,a,r,u){for(var f=!1;e!==null;){if(e.tag===5){var _=e.stateNode;if(r!==null){var A=Sd(_);r.push(A),A.view&&(f=!0)}else f||Sd(_).view&&(f=!0);Bu=!0,lv(_,ti===0?n:n+"_"+ti,a),ti++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&u||u_(e.child,n,a,r,u)&&(f=!0));e=e.sibling}return f}function ia(e,n){for(;e!==null;)e.tag===5?uv(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||ia(e.child,n)),e=e.sibling}function Fu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Fu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=Ea(n.default,n.share),n!=="none"&&(Dr(e,a,n,null,!1)||ia(e.child,!1))}e=e.sibling}}function Bh(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,u=Ma(r,a),f=Ea(r.default,a.paired?r.share:r.enter);f!=="none"?Dr(e,u,f,null,!1)?(Fu(e),a.paired||n||Br(e,r.onEnter)):ia(e.child,!1):Fu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Bh(e,n),e=e.sibling;else Fu(e)}function Fh(e){if(pi!==null&&pi.size!==0){var n=pi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var u=n.get(r);if(u!==void 0){var f=Ea(a.default,a.share);if(f!=="none"&&(Dr(e,r,f,null,!1)?(f=e.stateNode,u.paired=f,f.paired=u,Br(e,a.onShare)):ia(e.child,!1)),n.delete(r),n.size===0)break}}}Fh(e)}e=e.sibling}}}function Hh(e){if(e.tag===30){var n=e.memoizedProps,a=Ma(n,e.stateNode),r=pi!==null?pi.get(a):void 0,u=Ea(n.default,r!==void 0?n.share:n.exit);u!=="none"&&(Dr(e,a,u,null,!1)?r!==void 0?(u=e.stateNode,r.paired=u,u.paired=r,pi.delete(a),Br(e,n.onShare)):Br(e,n.onExit):ia(e.child,!1)),pi!==null&&Fh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Hh(e),e=e.sibling;else pi!==null&&Fh(e)}function c_(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=Ma(n,e.stateNode);n=Ea(n.default,n.update),e.flags&=-5,n!=="none"&&Dr(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&c_(e);e=e.sibling}}function Gh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,ia(e.child,!1))}Gh(e)}e=e.sibling}}function Hu(e){if(e.tag===30)e.stateNode.paired=null,ia(e.child,!1),Gh(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Hu(e),e=e.sibling;else Gh(e)}function f_(e){for(e=e.child;e!==null;)e.tag===30?ia(e.child,!1):(e.subtreeFlags&33554432)!==0&&f_(e),e=e.sibling}function Vh(e,n,a,r,u,f,_){for(var A=!1;n!==null;){if(n.tag===5){var z=n.stateNode;if(f!==null&&ti<f.length){var et=f[ti],ct=Sd(z);(et.view||ct.view)&&(A=!0);var St;if(St=(e.flags&4)===0)if(ct.clip)St=!0;else{St=et.rect;var j=ct.rect;St=St.y!==j.y||St.x!==j.x||St.height!==j.height||St.width!==j.width}St&&(e.flags|=4),ct.abs?ct=!et.abs:(et=et.rect,ct=ct.rect,ct=et.height!==ct.height||et.width!==ct.width),ct&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&lv(z,ti===0?a:a+"_"+ti,u),A&&(e.flags&4)!==0||(na===null&&(na=[]),na.push(z,ti===0?r:r+"_"+ti,n.memoizedProps)),ti++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?e.flags|=n.flags&32:Vh(e,n.child,a,r,u,f,_)&&(A=!0));n=n.sibling}return A}function h_(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,u=Ma(a,r),f=Ea(a.default,a.update),_;_=e.memoizedState,e.memoizedState=null,r=e;var A=e.child;ti=0,u=Vh(r,A,u,u,f,_,!1),(e.flags&4)!==0&&u&&Br(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&h_(e);e=e.sibling}}var Dn=!1,We=!1,aa=!1,Xh=!1,d_=typeof WeakSet=="function"?WeakSet:Set,Nn=null,sa=!1,il=!1,Gu=!1,kh=!1;function mM(e,n,a){if(e=e.containerInfo,md=Zr,e=_g(e),Df(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var f=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{r.nodeType,_.nodeType}catch{r=null;break t}var A=0,z=-1,et=-1,ct=0,St=0,j=e,lt=null;e:for(;;){for(var Pt;j!==r||f!==0&&j.nodeType!==3||(z=A+f),j!==_||u!==0&&j.nodeType!==3||(et=A+u),j.nodeType===3&&(A+=j.nodeValue.length),(Pt=j.firstChild)!==null;)lt=j,j=Pt;for(;;){if(j===e)break e;if(lt===r&&++ct===f&&(z=A),lt===_&&++St===u&&(et=A),(Pt=j.nextSibling)!==null)break;j=lt,lt=j.parentNode}j=Pt}r=z===-1||et===-1?null:{start:z,end:et}}else r=null}r=r||{start:0,end:0}}else r=null;for(gd={focusedElem:e,selectionRange:r},Zr=!1,a=(a&335544064)===a,Nn=n,n=a?9270:1024;Nn!==null;){if(e=Nn,a&&(r=e.deletions,r!==null))for(f=0;f<r.length;f++)a&&Hh(r[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&o_(e),Vu(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&Hh(r),Vu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&o_(e),Vu(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,Nn=r):(a&&c_(e),Vu(a))}}pi=null}function Vu(e){for(;Nn!==null;){var n=Nn,a=e,r=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&r!==null){a=void 0,u=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var _=Ws(n.type,u);a=f.getSnapshotBeforeUpdate(_,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(A){qe(n,n.return,A)}}break;case 3:if((u&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Ed(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Ed(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=Ma(r.memoizedProps,r.stateNode),u=n.memoizedProps,u=Ea(u.default,u.update),u!=="none"&&Dr(r,a,u,r.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Nn=r;break}Nn=n.return}}function p_(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ra(e,a),r&4&&el(5,a);break;case 1:if(ra(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){qe(a,a.return,_)}else{var u=Ws(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){qe(a,a.return,_)}}r&64&&n_(a),r&512&&ea(a,a.return);break;case 3:if(ra(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Wg(e,n)}catch(_){qe(a,a.return,_)}}break;case 27:n===null&&r&4&&r_(a);case 26:case 5:ra(e,a),n===null&&r&4&&Oh(a),r&512&&ea(a,a.return);break;case 12:ra(e,a);break;case 31:ra(e,a),r&4&&v_(e,a);break;case 13:ra(e,a),r&4&&x_(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=RM.bind(null,a),lE(e,a))));break;case 22:if(r=a.memoizedState!==null||Dn,!r){var f=n!==null&&n.memoizedState!==null||We;n=Dn,u=We,Dn=r,(We=f)&&!u?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Hi(e,a,r)):ra(e,a),Dn=n,We=u}break;case 30:ra(e,a),r&512&&ea(a,a.return);break;case 7:r&512&&ea(a,a.return);default:ra(e,a)}}function Wh(e,n){for(e=e.child;e!==null;)m_(e,n),e=e.sibling}function m_(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var u=e.stateNode,f=e.memoizedProps.style,_=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(z){qe(e,e.return,z)}Yh(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,Te=!0}catch(z){qe(e,e.return,z)}break;case 18:try{var A=e.stateNode;n?ov(A,!0):ov(e.stateNode,!1)}catch(z){qe(e,e.return,z)}break;case 22:case 23:e.memoizedState===null&&Wh(e,n);break;default:Wh(e,n)}}function Yh(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,r=n;switch(a.tag){case 4:m_(a,r);break t;case 22:a.memoizedState===null&&Yh(a,r);break t;default:Yh(a,r)}}e=e.sibling}}function g_(e){var n=e.alternate;n!==null&&(e.alternate=null,g_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Kt(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var on=null,ei=!1;function Bi(e,n,a){for(a=a.child;a!==null;)__(e,n,a),a=a.sibling}function __(e,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(Jt,a)}catch{}switch(a.tag){case 26:We||zn(a,n),Bi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!We&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:We||zn(a,n),nl(a);var r=on,u=ei;hs(a.type)&&(on=a.stateNode,ei=!1),Bi(e,n,a),yv(a.stateNode,a.type,a.memoizedProps),on=r,ei=u;break;case 5:We||zn(a,n),nl(a);case 6:if(a.tag===6&&nl(a),r=on,u=ei,on=null,Bi(e,n,a),on=r,ei=u,on!==null)if(ei)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(a.stateNode),Te=!0}catch(f){qe(a,n,f)}else try{on.removeChild(a.stateNode),Te=!0}catch(f){qe(a,n,f)}break;case 18:on!==null&&(ei?(e=on,rv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),jr(e)):rv(on,a.stateNode));break;case 4:r=on,u=ei,on=a.stateNode.containerInfo,ei=!0,Bi(e,n,a),on=r,ei=u;break;case 0:case 11:case 14:case 15:ss(2,a,n),We||ss(4,a,n),Bi(e,n,a);break;case 1:We||(zn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&i_(a,n,r)),Bi(e,n,a);break;case 21:Bi(e,n,a);break;case 22:We=(r=We)||a.memoizedState!==null,Bi(e,n,a),We=r;break;case 30:zn(a,n),Bi(e,n,a);break;case 7:We||zn(a,n),Bi(e,n,a);break;default:Bi(e,n,a)}}function v_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{jr(e)}catch(a){qe(n,n.return,a)}}}function x_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{jr(e)}catch(a){qe(n,n.return,a)}}function gM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new d_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new d_),n;default:throw Error(s(435,e.tag))}}function Xu(e,n){var a=gM(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=CM.bind(null,e,r);r.then(u,u)}})}function jn(e,n,a){var r=n.deletions;if(r!==null)for(var u=0;u<r.length;u++){var f=r[u],_=e,A=n,z=A;t:for(;z!==null;){switch(z.tag){case 27:if(hs(z.type)){on=z.stateNode,ei=!1;break t}break;case 5:on=z.stateNode,ei=!1;break t;case 3:case 4:on=z.stateNode.containerInfo,ei=!0;break t}z=z.return}if(on===null)throw Error(s(160));__(_,A,f),on=null,ei=!1,_=f.alternate,_!==null&&(_.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)S_(n,e,a),n=n.sibling}var Fi=null;function S_(e,n,a){var r=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(u&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var _=r[f];_.ref.impl=_.nextImpl}jn(n,e,a),Kn(e),u&4&&(ss(3,e,e.return),el(3,e),ss(5,e,e.return));break;case 1:jn(n,e,a),Kn(e),u&512&&(We||r===null||zn(r,r.return)),u&64&&Dn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Fi,jn(n,e,a),Kn(e),u&512&&(We||r===null||zn(r,r.return)),u&4)if(u=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(Dn)e.stateNode=iv(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":r=u.getElementsByTagName("title")[0],(!r||r[Ot]||r[T]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=u.createElement(n),u.head.insertBefore(r,u.querySelector("head > title"))),Bn(r,n,a),r[T]=e,be(r),n=r;break t;case"link":if(f=Rv("link","href",u).get(n+(a.href||""))){for(_=0;_<f.length;_++)if(r=f[_],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(_,1);break e}}r=u.createElement(n),Bn(r,n,a),u.head.appendChild(r);break;case"meta":if(f=Rv("meta","content",u).get(n+(a.content||""))){for(_=0;_<f.length;_++)if(r=f[_],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(_,1);break e}}r=u.createElement(n),Bn(r,n,a),u.head.appendChild(r);break;default:throw Error(s(468,n))}r[T]=e,be(r),n=r}e.stateNode=n}else Dn||Dd(f,e.type,e.stateNode);else e.stateNode=Av(f,a,e.memoizedProps);else u!==a?(u===null?(n=r.stateNode,n===null||We||n.parentNode.removeChild(n)):u.count--,a===null?Dn||Dd(f,e.type,e.stateNode):Av(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ph(e,e.memoizedProps,r.memoizedProps);break;case 27:jn(n,e,a),Kn(e),u&512&&(We||r===null||zn(r,r.return)),r!==null&&u&4&&Ph(e,e.memoizedProps,r.memoizedProps);break;case 5:if(f=aa,aa=!1,jn(n,e,a),aa=f,Kn(e),u&512&&(We||r===null||zn(r,r.return)),e.flags&32){n=e.stateNode;try{hr(n,""),Te=!0}catch(ct){qe(e,e.return,ct)}}u&4&&e.stateNode!=null&&(n=e.memoizedProps,Ph(e,n,r!==null?r.memoizedProps:n)),u&1024&&(Xh=!0);break;case 6:if(jn(n,e,a),Kn(e),u&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,Te=!0}catch(ct){qe(e,e.return,ct)}}break;case 3:if(Te=!1,ac=null,f=Fi,Fi=hl(n.containerInfo),jn(n,e,a),Fi=f,Kn(e),u&4&&r!==null&&r.memoizedState.isDehydrated)try{jr(n.containerInfo)}catch(ct){qe(e,e.return,ct)}Xh&&(Xh=!1,y_(e)),Te=!1;break;case 4:u=aa,aa=Dn,r=Ve(),f=Fi,Fi=hl(e.stateNode.containerInfo),jn(n,e,a),Kn(e),Fi=f,Te&&il&&(Gu=!0),Te=r,aa=u;break;case 12:jn(n,e,a),Kn(e);break;case 31:jn(n,e,a),Kn(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Xu(e,n)));break;case 13:jn(n,e,a),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Yu=Xt()),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Xu(e,n)));break;case 22:f=e.memoizedState!==null,_=r!==null&&r.memoizedState!==null;var A=Dn,z=We,et=aa;Dn=A||f,aa=et||f,We=z||_,jn(n,e,a),We=z,aa=et,Dn=A,Kn(e),u&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||_||Dn||We||(n=_||We,a=Dn,r=We,Dn=f||Dn,We=n,rs(e,2),Dn=a,We=r),!f&&aa||Wh(e,f)),u&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Xu(e,a))));break;case 19:jn(n,e,a),Kn(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Xu(e,n)));break;case 30:u&512&&(We||r===null||zn(r,r.return)),u=Ve(),f=il,_=(a&335544064)===a,A=e.memoizedProps,il=_&&Ea(A.default,A.update)!=="none",jn(n,e,a),Kn(e),_&&r!==null&&Te&&(e.flags|=4),il=f,Te=u;break;case 21:break;case 7:u&512&&(We||r===null||zn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:jn(n,e,a),Kn(e)}}function Kn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(s_(r)){a=r;break}r=r.return}r=null;for(var u=e.return;u!==null;){if(Lh(u)){var f=u.stateNode;r===null?r=[f]:r.push(f)}if(Uh(u))break;u=u.return}var _=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var A=a.stateNode,z=Ih(e);zu(e,z,A,_);break;case 5:var et=a.stateNode;a.flags&32&&(hr(et,""),a.flags&=-33);var ct=Ih(e);zu(e,ct,et,_);break;case 3:case 4:var St=a.stateNode.containerInfo,j=Ih(e);zh(e,j,St,_);break;default:throw Error(s(161))}}catch(lt){qe(e,e.return,lt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function y_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;y_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Zr=!0,n.reset(),Zr=!1),e=e.sibling}}function Nr(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)M_(n,e),n=n.sibling;else h_(n)}function M_(e,n){var a=e.alternate;if(a===null)Bh(e,!1);else switch(e.tag){case 3:if(kh=sa=!1,l_(),Nr(n,e),!sa&&!Gu){if(e=na,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var u=e[r+1];uv(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),kh=!0}na=null;break;case 5:Nr(n,e);break;case 4:r=sa,sa=!1,Nr(n,e),sa&&(Gu=!0),sa=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Bh(e,!1):Nr(n,e));break;case 30:r=sa,u=l_(),sa=!1,Nr(n,e),sa&&(e.flags|=4);var f=e.memoizedProps,_=e.stateNode;n=Ma(f,_),_=Ma(a.memoizedProps,_);var A=Ea(f.default,f.update);A==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,ti=0,n=Vh(e,a,n,_,A,f,!0),ti!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Br(e,e.memoizedProps.onUpdate),na=u):u!==null&&(u.push.apply(u,na),na=u),sa=(e.flags&32)!==0?!0:r;break;default:Nr(n,e)}}function ra(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)p_(e,n.alternate,n),n=n.sibling}function rs(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:ss(4,a,a.return),rs(a,r);break;case 1:zn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&i_(a,a.return,u),rs(a,r);break;case 27:(r&2)!==0&&yv(a.stateNode,a.type,a.memoizedProps);case 5:zn(a,a.return),a.tag!==5&&a.tag!==27||nl(a),rs(a,r);break;case 6:nl(a);break;case 26:zn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||We||u.parentNode.removeChild(u),rs(a,r);break;case 22:a.memoizedState===null&&rs(a,r);break;case 30:zn(a,a.return),rs(a,r);break;case 7:zn(a,a.return);default:rs(a,r)}e=e.sibling}}function Hi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,_=f.flags,A=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Hi(u,f,a),el(4,f);break;case 1:if(Hi(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ct){qe(r,r.return,ct)}if(r=f,u=r.updateQueue,u!==null){var z=r.stateNode;try{var et=u.shared.hiddenCallbacks;if(et!==null)for(u.shared.hiddenCallbacks=null,u=0;u<et.length;u++)kg(et[u],z)}catch(ct){qe(r,r.return,ct)}}A&&_&64&&n_(f),ea(f,f.return);break;case 27:(a&2)!==0&&r_(f);case 5:f.tag!==5&&f.tag!==27||a_(f),Hi(u,f,a),A&&r===null&&_&4&&Oh(f),ea(f,f.return);break;case 6:a_(f);break;case 26:z=f.stateNode,f.memoizedState!==null||z===null||Dn||Dd(hl(z.ownerDocument),f.type,z),Hi(u,f,a),A&&r===null&&_&4&&Oh(f),ea(f,f.return);break;case 12:Hi(u,f,a);break;case 31:Hi(u,f,a),A&&_&4&&v_(u,f);break;case 13:Hi(u,f,a),A&&_&4&&x_(u,f);break;case 22:f.memoizedState===null&&Hi(u,f,a),ea(f,f.return);break;case 30:Hi(u,f,a),ea(f,f.return);break;case 7:ea(f,f.return);default:Hi(u,f,a)}n=n.sibling}}function qh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Vo(a))}function Zh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Vo(e))}function Di(e,n,a,r){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)E_(e,n,a,r),n=n.sibling;else u&&f_(n)}function E_(e,n,a,r){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Hu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Di(e,n,a,r),f&2048&&el(9,n);break;case 1:Di(e,n,a,r);break;case 3:Di(e,n,a,r),u&&kh&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Vo(f)));break;case 12:if(f&2048){Di(e,n,a,r),f=n.stateNode;try{var _=n.memoizedProps,A=_.id,z=_.onPostCommit;typeof z=="function"&&z(A,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(et){qe(n,n.return,et)}}else Di(e,n,a,r);break;case 31:Di(e,n,a,r);break;case 13:Di(e,n,a,r);break;case 23:break;case 22:_=n.stateNode,A=n.alternate,n.memoizedState!==null?(u&&A!==null&&A.memoizedState===null&&Hu(A),_._visibility&2?Di(e,n,a,r):al(e,n)):(u&&A!==null&&A.memoizedState!==null&&Hu(n),_._visibility&2?Di(e,n,a,r):(_._visibility|=2,Ur(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&qh(A,n);break;case 24:Di(e,n,a,r),f&2048&&Zh(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(ia(f.child,!0),ia(n.child,!0))),Di(e,n,a,r);break;default:Di(e,n,a,r)}}function Ur(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,A=a,z=r,et=_.flags;switch(_.tag){case 0:case 11:case 15:Ur(f,_,A,z,u),el(8,_);break;case 23:break;case 22:var ct=_.stateNode;_.memoizedState!==null?ct._visibility&2?Ur(f,_,A,z,u):al(f,_):(ct._visibility|=2,Ur(f,_,A,z,u)),u&&et&2048&&qh(_.alternate,_);break;case 24:Ur(f,_,A,z,u),u&&et&2048&&Zh(_.alternate,_);break;default:Ur(f,_,A,z,u)}n=n.sibling}}function al(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:al(a,r),u&2048&&qh(r.alternate,r);break;case 24:al(a,r),u&2048&&Zh(r.alternate,r);break;default:al(a,r)}n=n.sibling}}var Ys=8192;function qs(e,n,a){if(e.subtreeFlags&Ys)for(e=e.child;e!==null;)b_(e,n,a),e=e.sibling}function b_(e,n,a){switch(e.tag){case 26:qs(e,n,a),e.flags&Ys&&(e.memoizedState!==null?ME(a,Fi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&Nv(a,e)));break;case 5:qs(e,n,a),e.flags&Ys&&(e=e.stateNode,(n&335544128)===n&&Nv(a,e));break;case 3:case 4:var r=Fi;Fi=hl(e.stateNode.containerInfo),qs(e,n,a),Fi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ys,Ys=16777216,qs(e,n,a),Ys=r):qs(e,n,a));break;case 30:if((e.flags&Ys)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var u=e.stateNode;u.paired=null,pi===null&&(pi=new Map),pi.set(r,u)}qs(e,n,a);break;default:qs(e,n,a)}}function T_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function sl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Nn=r,R_(r,e)}T_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)A_(e),e=e.sibling}function A_(e){switch(e.tag){case 0:case 11:case 15:sl(e),e.flags&2048&&ss(9,e,e.return);break;case 3:sl(e);break;case 12:sl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ku(e)):sl(e);break;default:sl(e)}}function ku(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Nn=r,R_(r,e)}T_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ss(8,n,n.return),ku(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ku(n));break;default:ku(n)}e=e.sibling}}function R_(e,n){for(;Nn!==null;){var a=Nn;switch(a.tag){case 0:case 11:case 15:ss(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Vo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Nn=r;else t:for(a=e;Nn!==null;){r=Nn;var u=r.sibling,f=r.return;if(g_(r),r===a){Nn=null;break t}if(u!==null){u.return=f,Nn=u;break t}Nn=f}}}var _M={getCacheForType:function(e){var n=On(_n),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return On(_n).controller.signal}},vM=typeof WeakMap=="function"?WeakMap:Map,Xe=0,nn=null,Ce=null,Ue=0,Ye=0,mi=null,os=!1,Lr=!1,jh=!1,Ua=0,pn=0,ls=0,Zs=0,Wu=0,gi=0,Or=0,rl=null,ni=null,Kh=!1,Yu=0,C_=0,qu=1/0,Zu=null,us=null,ln=0,Gi=null,js=null,oa=0,Qh=0,Jh=null,w_=null,Pr=null,Ir=null,zr=null,ol=0,ju=null;function _i(){return(Xe&2)!==0&&Ue!==0?Ue&-Ue:_t.T!==null?ld():ql()}function D_(){if(gi===0)if((Ue&536870912)===0||Ae){var e=Cs;Cs<<=1,(Cs&3932160)===0&&(Cs=262144),gi=e}else gi=536870912;return e=Pn.current,e!==null&&(e.flags|=32),gi}function Br(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=cv(Ma(e.memoizedProps,a))),Ir===null&&(Ir=[]),Ir.push(n.bind(null,r))}}function ii(e,n,a){(e===nn&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)&&(Fr(e,0),cs(e,Ue,gi,!1)),Ki(e,a),((Xe&2)===0||e!==nn)&&(e===nn&&((Xe&2)===0&&(Zs|=a),pn===4&&cs(e,Ue,gi,!1)),la(e))}function N_(e,n,a){if((Xe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Wa(e,n),u=r?yM(e,n):td(e,n,!0),f=r;do{if(u===0){Lr&&!r&&cs(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!xM(a)){u=td(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var A=e;u=rl;var z=A.current.memoizedState.isDehydrated;if(z&&(Fr(A,_).flags|=256),_=td(A,_,!1),_!==2&&_!==6){if(jh&&!z){A.errorRecoveryDisabledLanes|=f,Zs|=f,u=4;break t}f=ni,ni=u,f!==null&&(ni===null?ni=f:ni.push.apply(ni,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){Fr(e,0),cs(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:cs(r,n,gi,!os);break t;case 2:ni=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Yu+300-Xt(),10<u)){if(cs(r,n,gi,!os),ws(r,0,!0)!==0)break t;oa=n,r.timeoutHandle=xd(U_.bind(null,r,a,ni,Zu,Kh,n,gi,Zs,Or,os,f,"Throttled",-0,0),u);break t}U_(r,a,ni,Zu,Kh,n,gi,Zs,Or,os,f,null,-0,0)}}break}while(!0);la(e)}function U_(e,n,a,r,u,f,_,A,z,et,ct,St,j,lt){e.timeoutHandle=-1;var Pt=n.subtreeFlags,Qt=(f&335544064)===f;if(St=null,(Qt||Pt&8192||(Pt&16785408)===16785408)&&(St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ji},pi=null,b_(n,f,St),Qt&&(Pt=St,Qt=e.containerInfo,Qt=(Qt.nodeType===9?Qt:Qt.ownerDocument).__reactViewTransition,Qt!=null&&(Pt.count++,Pt.waitingForViewTransition=!0,Pt=ml.bind(Pt),Qt.finished.then(Pt,Pt))),Pt=(f&62914560)===f?Yu-Xt():(f&4194048)===f?C_-Xt():0,Pt=EE(St,Pt),Pt!==null)){oa=f,e.cancelPendingCommit=Pt(H_.bind(null,e,n,f,a,r,u,_,A,z,et,ct,St,null,j,lt)),cs(e,f,_,!et);return}H_(e,n,f,a,r,u,_,A,z,et,ct,St)}function xM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!hi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function cs(e,n,a,r){n=ji(e,n),n&=~Wu,n&=~Zs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-me(u),_=1<<f;r[f]=-1,u&=~_}a!==0&&Ds(e,a,n)}function Ku(){return(Xe&6)===0?(ll(0),!1):!0}function $h(){if(Ce!==null){if(Ye===0)var e=Ce.return;else e=Ce,Aa=Is=null,oh(e),Tr=null,Wo=0,e=Ce;for(;e!==null;)e_(e.alternate,e),e=e.return;Ce=null}}function Fr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,XM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),oa=0,$h(),nn=e,Ce=a=ba(e.current,null),Ue=n,Ye=0,mi=null,os=!1,Lr=Wa(e,n),jh=!1,Or=gi=Wu=Zs=ls=pn=0,ni=rl=null,Kh=!1,Ua=ji(e,n),au(),a}function L_(e,n){Se=null,_t.H=wu,n===br||n===mu?(n=Hg(),Ye=3):n===Zf?(n=Hg(),Ye=4):Ye=n===Mh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,mi=n,Ce===null&&(pn=1,Du(e,Ai(n,e.current)))}function O_(){var e=Pn.current;return e===null?!0:(Ue&4194048)===Ue?Gn===null:(Ue&62914560)===Ue||(Ue&536870912)!==0?e===Gn:!1}function P_(){var e=_t.H;return _t.H=wu,e===null?wu:e}function I_(){var e=_t.A;return _t.A=_M,e}function Qu(){pn=4,os||(Ue&4194048)!==Ue&&Pn.current!==null||(Lr=!0),(ls&134217727)===0&&(Zs&134217727)===0||nn===null||cs(nn,Ue,gi,!1)}function td(e,n,a){var r=Xe;Xe|=2;var u=P_(),f=I_();(nn!==e||Ue!==n)&&(Zu=null,Fr(e,n)),n=!1;var _=pn;t:do try{if(Ye!==0&&Ce!==null){var A=Ce,z=mi;switch(Ye){case 8:$h(),_=6;break t;case 3:case 2:case 9:case 6:Pn.current===null&&(n=!0);var et=Ye;if(Ye=0,mi=null,Hr(e,A,z,et),a&&Lr){_=0;break t}break;default:et=Ye,Ye=0,mi=null,Hr(e,A,z,et)}}SM(),_=pn;break}catch(ct){L_(e,ct)}while(!0);return n&&e.shellSuspendCounter++,Aa=Is=null,Xe=r,_t.H=u,_t.A=f,Ce===null&&(nn=null,Ue=0,au()),_}function SM(){for(;Ce!==null;)z_(Ce)}function yM(e,n){var a=Xe;Xe|=2;var r=P_(),u=I_();nn!==e||Ue!==n?(Zu=null,qu=Xt()+500,Fr(e,n)):Lr=Wa(e,n);t:do try{if(Ye!==0&&Ce!==null){n=Ce;var f=mi;e:switch(Ye){case 1:Ye=0,mi=null,Hr(e,n,f,1);break;case 2:case 9:if(Bg(f)){Ye=0,mi=null,B_(n);break}n=function(){Ye!==2&&Ye!==9||nn!==e||(Ye=7),la(e)},f.then(n,n);break t;case 3:Ye=7;break t;case 4:Ye=5;break t;case 7:Bg(f)?(Ye=0,mi=null,B_(n)):(Ye=0,mi=null,Hr(e,n,f,7));break;case 5:var _=null;switch(Ce.tag){case 26:_=Ce.memoizedState;case 5:case 27:var A=Ce;if(_?wv(_):A.stateNode.complete){Ye=0,mi=null;var z=A.sibling;if(z!==null)Ce=z;else{var et=A.return;et!==null?(Ce=et,Ju(et)):Ce=null}break e}}Ye=0,mi=null,Hr(e,n,f,5);break;case 6:Ye=0,mi=null,Hr(e,n,f,6);break;case 8:$h(),pn=6;break t;default:throw Error(s(462))}}MM();break}catch(ct){L_(e,ct)}while(!0);return Aa=Is=null,_t.H=r,_t.A=u,Xe=a,Ce!==null?0:(nn=null,Ue=0,au(),pn)}function MM(){for(;Ce!==null&&!zt();)z_(Ce)}function z_(e){var n=$0(e.alternate,e,Ua);e.memoizedProps=e.pendingProps,n===null?Ju(e):Ce=n}function B_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Y0(a,n,n.pendingProps,n.type,void 0,Ue);break;case 11:n=Y0(a,n,n.pendingProps,n.type.render,n.ref,Ue);break;case 5:oh(n);var r=n;r===wn&&(Ae?(cu(r),r.tag===5&&r.stateNode!=null&&(sn=r.stateNode)):(cu(r),Ae=!0));default:e_(a,n),n=Ce=Rg(n,Ua),n=$0(a,n,Ua)}e.memoizedProps=e.pendingProps,n===null?Ju(e):Ce=n}function Hr(e,n,a,r){Aa=Is=null,oh(n),Tr=null,Wo=0;var u=n.return;try{if(uM(e,u,n,a,Ue)){pn=1,Du(e,Ai(a,e.current)),Ce=null;return}}catch(f){if(u!==null)throw Ce=u,f;pn=1,Du(e,Ai(a,e.current)),Ce=null;return}n.flags&32768?(Ae||r===1?e=!0:Lr||(Ue&536870912)!==0?e=!1:(os=e=!0,(r===2||r===9||r===3||r===6)&&(r=Pn.current,r!==null&&r.tag===13&&(r.flags|=16384))),F_(n,e)):Ju(n)}function Ju(e){var n=e;do{if((n.flags&32768)!==0){F_(n,os);return}e=n.return;var a=dM(n.alternate,n,Ua);if(a!==null){Ce=a;return}if(n=n.sibling,n!==null){Ce=n;return}Ce=n=e}while(n!==null);pn===0&&(pn=5)}function F_(e,n){do{var a=pM(e.alternate,e);if(a!==null){a.flags&=32767,Ce=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ce=e;return}Ce=e=a}while(e!==null);pn=6,Ce=null}function H_(e,n,a,r,u,f,_,A,z,et,ct,St){e.cancelPendingCommit=null;do $u();while(ln!==0);if((Xe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===nn&&(Ce=nn=null,Ue=0),js=n,Gi=e,oa=a,Jh=u,w_=r,EM(e,n,a,_,A,z,St)}}function EM(e,n,a,r,u,f,_){var A=n.lanes|n.childLanes;if(Qh=A,A|=Pf,Yl(e,a,A,r,u,f),Ir=null,(a&335544064)===a?(zr=Qy(e),r=10262):(zr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,wM(wt,function(){return ad(),null})):(e.callbackNode=null,e.callbackPriority=0),Bu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=_t.T,_t.T=null,u=Rt.p,Rt.p=2,f=Xe,Xe|=4;try{mM(e,n,a)}finally{Xe=f,Rt.p=u,_t.T=r}}ln=1,Bu?Pr=jM(_,e.containerInfo,zr,ed,nd,TM,id,ad,bM):(ed(),nd(),id())}function bM(e){if(ln!==0){var n=Gi.onRecoverableError;n(e,{componentStack:null})}}function TM(){ln===3&&(ln=0,M_(js,Gi),ln=4)}function ed(){if(ln===1){ln=0;var e=Gi,n=js,a=oa,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=_t.T,_t.T=null;var u=Rt.p;Rt.p=2;var f=Xe;Xe|=4;try{il=Gu=!1,S_(n,e,a),a=gd;var _=_g(e.containerInfo),A=a.focusedElem,z=a.selectionRange;if(_!==A&&A&&A.ownerDocument&&gg(A.ownerDocument.documentElement,A)){if(z!==null&&Df(A)){var et=z.start,ct=z.end;if(ct===void 0&&(ct=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(ct,A.value.length);else{var St=A.ownerDocument||document,j=St&&St.defaultView||window;if(j.getSelection){var lt=j.getSelection(),Pt=A.textContent.length,Qt=Math.min(z.start,Pt),ye=z.end===void 0?Qt:Math.min(z.end,Pt);!lt.extend&&Qt>ye&&(_=ye,ye=Qt,Qt=_);var tt=mg(A,Qt),G=mg(A,ye);if(tt&&G&&(lt.rangeCount!==1||lt.anchorNode!==tt.node||lt.anchorOffset!==tt.offset||lt.focusNode!==G.node||lt.focusOffset!==G.offset)){var it=St.createRange();it.setStart(tt.node,tt.offset),lt.removeAllRanges(),Qt>ye?(lt.addRange(it),lt.extend(G.node,G.offset)):(it.setEnd(G.node,G.offset),lt.addRange(it))}}}}for(St=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&St.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<St.length;A++){var xt=St[A];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}Zr=!!md,gd=md=null}finally{Xe=f,Rt.p=u,_t.T=r}}e.current=n,ln=2}}function nd(){if(ln===2){ln=0;var e=Gi,n=js,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=_t.T,_t.T=null;var r=Rt.p;Rt.p=2;var u=Xe;Xe|=4;try{p_(e,n.alternate,n)}finally{Xe=u,Rt.p=r,_t.T=a}}ln=3}}function id(){if(ln===4||ln===3){ln=0;var e=Pr;Pr=null,It();var n=Gi,a=js,r=oa,u=w_,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?ln=5:(ln=0,js=Gi=null,G_(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(us=null),Do(r),a=a.stateNode,Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(Jt,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=_t.T,f=Rt.p,Rt.p=2,_t.T=null;try{for(var _=n.onRecoverableError,A=0;A<u.length;A++){var z=u[A];_(z.value,{componentStack:z.stack})}}finally{_t.T=a,Rt.p=f}}if(u=Ir,_=zr,zr=null,u!==null&&(Ir=null,_===null&&(_=[]),e!==null))for(z=0;z<u.length;z++)a=(0,u[z])(_),a!==void 0&&e.finished.finally(a);(oa&3)!==0&&$u(),la(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===ju?ol++:(ol=0,ju=n):(ol=0,ju=null),ll(0)}}function G_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Vo(n)))}function $u(){return Pr!==null&&(Pr.skipTransition(),Pr=null),ed(),nd(),id(),ad()}function ad(){if(ln!==5)return!1;var e=Gi,n=Qh;Qh=0;var a=Do(oa),r=_t.T,u=Rt.p;try{Rt.p=32>a?32:a,_t.T=null,a=Jh,Jh=null;var f=Gi,_=oa;if(ln=0,js=Gi=null,oa=0,(Xe&6)!==0)throw Error(s(331));var A=Xe;if(Xe|=4,A_(f.current),E_(f,f.current,_,a),Xe=A,ll(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(Jt,f)}catch{}return!0}finally{Rt.p=u,_t.T=r,G_(e,n)}}function V_(e,n,a){n=Ai(a,n),n=yh(e.stateNode,n,2),e=es(e,n,2),e!==null&&(Ki(e,2),la(e))}function qe(e,n,a){if(e.tag===3)V_(e,e,a);else for(;n!==null;){if(n.tag===3){V_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(us===null||!us.has(r))){e=Ai(a,e),a=B0(2),r=es(n,a,2),r!==null&&(F0(a,r,n,e),Ki(r,2),la(r));break}}n=n.return}}function sd(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new vM;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(jh=!0,u.add(a),e=AM.bind(null,e,n,a),n.then(e,e))}function AM(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,nn===e&&(Ue&a)===a&&((pn===4||pn===3&&(Ue&62914560)===Ue&&300>Xt()-Yu)&&(Xe&2)===0?Fr(e,0):Wu|=a,Or===Ue&&(Or=0)),la(e)}function X_(e,n){n===0&&(n=Ao()),e=Ls(e,n),e!==null&&(Ki(e,n),la(e))}function RM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),X_(e,a)}function CM(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),X_(e,a)}function wM(e,n){return Dt(e,n)}var Gr=null,Vr=null,rd=!1,tc=!1,od=!1,fs=0;function la(e){e!==Vr&&e.next===null&&(Vr===null?Gr=Vr=e:Vr=Vr.next=e),tc=!0,rd||(rd=!0,NM())}function ll(e,n){if(!od&&tc){od=!0;do for(var a=!1,r=Gr;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var _=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-me(42|e)+1)-1,f&=u&~(_&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,q_(r,f))}else f=Ue,f=ws(r,r===nn?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Wa(r,f)||(a=!0,q_(r,f));r=r.next}while(a);od=!1}}function DM(){k_()}function k_(){tc=rd=!1;var e=0;fs!==0&&VM()&&(e=fs);for(var n=Xt(),a=null,r=Gr;r!==null;){var u=r.next,f=W_(r,n);f===0?(r.next=null,a===null?Gr=u:a.next=u,u===null&&(Vr=a)):(a=r,(e!==0||(f&3)!==0)&&(tc=!0)),r=u}ln!==0&&ln!==5||ll(e),fs!==0&&(fs=0)}function W_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-me(f),A=1<<_,z=u[_];z===-1?((A&a)===0||(A&r)!==0)&&(u[_]=To(A,n)):z<=n&&(e.expiredLanes|=A),f&=~A}if(n=nn,a=Ue,a=ws(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Ye===2||Ye===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&$t(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Wa(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&$t(r),Do(a)){case 2:case 8:a=Y;break;case 32:a=wt;break;case 268435456:a=Lt;break;default:a=wt}return r=Y_.bind(null,e),a=Dt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&$t(r),e.callbackPriority=2,e.callbackNode=null,2}function Y_(e,n){if(ln!==0&&ln!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if($u()&&e.callbackNode!==a)return null;var r=Ue;return r=ws(e,e===nn?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(N_(e,r,n),W_(e,Xt()),e.callbackNode!=null&&e.callbackNode===a?Y_.bind(null,e):null)}function q_(e,n){if($u())return null;N_(e,n,!0)}function NM(){kM(function(){(Xe&6)!==0?Dt(he,DM):k_()})}function ld(){if(fs===0){var e=Fs;e===0&&(e=ur,ur<<=1,(ur&261888)===0&&(ur=256)),fs=e}return fs}function Z_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kl(e)}function UM(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=Z_((u[F]||null).action),_=r.submitter;_&&(n=(n=_[F]||null)?Z_(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var A=new tu("action","action",null,r,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(fs!==0){var z=new FormData(u,_);gh(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(A.preventDefault(),z=new FormData(u,_),gh(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var ud=0;ud<Of.length;ud++){var cd=Of[ud],LM=cd.toLowerCase(),OM=cd[0].toUpperCase()+cd.slice(1);zi(LM,"on"+OM)}zi(Sg,"onAnimationEnd"),zi(yg,"onAnimationIteration"),zi(Mg,"onAnimationStart"),zi("dblclick","onDoubleClick"),zi("focusin","onFocus"),zi("focusout","onBlur"),zi(Xy,"onTransitionRun"),zi(ky,"onTransitionStart"),zi(Wy,"onTransitionCancel"),zi(Eg,"onTransitionEnd"),fn("onMouseEnter",["mouseout","mouseover"]),fn("onMouseLeave",["mouseout","mouseover"]),fn("onPointerEnter",["pointerout","pointerover"]),fn("onPointerLeave",["pointerout","pointerover"]),Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul));function j_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var A=r[_],z=A.instance,et=A.currentTarget;if(A=A.listener,z!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=et;try{f(u)}catch(ct){iu(ct)}u.currentTarget=null,f=z}else for(_=0;_<r.length;_++){if(A=r[_],z=A.instance,et=A.currentTarget,A=A.listener,z!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=et;try{f(u)}catch(ct){iu(ct)}u.currentTarget=null,f=z}}}}function we(e,n){var a=n[rt];a===void 0&&(a=n[rt]=new Set);var r=e+"__bubble";a.has(r)||(K_(n,e,2,!1),a.add(r))}function fd(e,n,a){var r=0;n&&(r|=4),K_(a,e,r,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function hd(e){if(!e[ec]){e[ec]=!0,ke.forEach(function(a){a!=="selectionchange"&&(PM.has(a)||fd(a,!1,e),fd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ec]||(n[ec]=!0,fd("selectionchange",!1,n))}}function K_(e,n,a,r){switch(Fv(n)){case 2:var u=RE;break;case 8:u=CE;break;default:u=Ud}a=u.bind(null,n,a,e),u=void 0,!Sf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function dd(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var A=r.stateNode.containerInfo;if(A===u)break;if(_===4)for(_=r.return;_!==null;){var z=_.tag;if((z===3||z===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;A!==null;){if(_=oe(A),_===null)return;if(z=_.tag,z===5||z===6||z===26||z===27){r=f=_;continue t}A=A.parentNode}}r=r.return}Km(function(){var et=f,ct=vf(a),St=[];t:{var j=bg.get(e);if(j!==void 0){var lt=tu,Pt=e;switch(e){case"keypress":if(Jl(a)===0)break t;case"keydown":case"keyup":lt=xy;break;case"focusin":Pt="focus",lt=bf;break;case"focusout":Pt="blur",lt=bf;break;case"beforeblur":case"afterblur":lt=bf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=$m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=oy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=by;break;case Sg:case yg:case Mg:lt=cy;break;case Eg:lt=Ay;break;case"scroll":case"scrollend":lt=sy;break;case"wheel":lt=Cy;break;case"copy":case"cut":case"paste":lt=hy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=eg;break;case"submit":lt=My;break;case"toggle":case"beforetoggle":lt=Dy}var Qt=(n&4)!==0,ye=!Qt&&(e==="scroll"||e==="scrollend"),tt=Qt?j!==null?j+"Capture":null:j;Qt=[];for(var G=et,it;G!==null;){var xt=G;if(it=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||it===null||tt===null||(xt=No(G,tt),xt!=null&&Qt.push(cl(G,xt,it))),ye)break;G=G.return}0<Qt.length&&(j=new lt(j,Pt,null,a,ct),St.push({event:j,listeners:Qt}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",lt&&a!==_f&&(Pt=a.relatedTarget||a.fromElement)&&(oe(Pt)||Pt[ft]))break t;(j||lt)&&(Pt=ct.window===ct?ct:(lt=ct.ownerDocument)?lt.defaultView||lt.parentWindow:window,j?(lt=a.relatedTarget||a.toElement,j=et,lt=lt?oe(lt):null,lt!==null&&(ye=c(lt),Qt=lt.tag,lt!==ye||Qt!==5&&Qt!==27&&Qt!==6)&&(lt=null)):(j=null,lt=et),j!==lt&&(Qt=$m,xt="onMouseLeave",tt="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(Qt=eg,xt="onPointerLeave",tt="onPointerEnter",G="pointer"),ye=j==null?Pt:Yt(j),it=lt==null?Pt:Yt(lt),Pt=new Qt(xt,G+"leave",j,a,ct),Pt.target=ye,Pt.relatedTarget=it,xt=null,oe(ct)===et&&(Qt=new Qt(tt,G+"enter",lt,a,ct),Qt.target=it,Qt.relatedTarget=ye,xt=Qt),ye=xt,Qt=j&&lt?D(j,lt,IM):null,j!==null&&Q_(St,Pt,j,Qt,!1),lt!==null&&ye!==null&&Q_(St,ye,lt,Qt,!0)))}t:{if(j=et?Yt(et):window,lt=j.nodeName&&j.nodeName.toLowerCase(),lt==="select"||lt==="input"&&j.type==="file")var qt=ug;else if(og(j))if(cg)qt=Hy;else{qt=By;var Le=zy}else lt=j.nodeName,!lt||lt.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?et&&gf(et.elementType)&&(qt=ug):qt=Fy;if(qt&&(qt=qt(e,et))){lg(St,qt,a,ct);break t}Le&&Le(e,j,et)}switch(Le=et?Yt(et):window,e){case"focusin":(og(Le)||Le.contentEditable==="true")&&(gr=Le,Nf=et,Fo=null);break;case"focusout":Fo=Nf=gr=null;break;case"mousedown":Uf=!0;break;case"contextmenu":case"mouseup":case"dragend":Uf=!1,vg(St,a,ct);break;case"selectionchange":if(Vy)break;case"keydown":case"keyup":vg(St,a,ct)}var ne;if(Af)t:{switch(e){case"compositionstart":var re="onCompositionStart";break t;case"compositionend":re="onCompositionEnd";break t;case"compositionupdate":re="onCompositionUpdate";break t}re=void 0}else mr?sg(e,a)&&(re="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(ng&&a.locale!=="ko"&&(mr||re!=="onCompositionStart"?re==="onCompositionEnd"&&mr&&(ne=Qm()):(Ya=ct,yf="value"in Ya?Ya.value:Ya.textContent,mr=!0)),Le=nc(et,re),0<Le.length&&(re=new tg(re,e,null,a,ct),St.push({event:re,listeners:Le}),ne?re.data=ne:(ne=rg(a),ne!==null&&(re.data=ne)))),(ne=Uy?Ly(e,a):Oy(e,a))&&(re=nc(et,"onBeforeInput"),0<re.length&&(Le=new tg("onBeforeInput","beforeinput",null,a,ct),St.push({event:Le,listeners:re}),Le.data=ne)),UM(St,e,et,a,ct)}j_(St,n)})}function cl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function nc(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=No(e,a),u!=null&&r.unshift(cl(e,u,f)),u=No(e,n),u!=null&&r.push(cl(e,u,f))),e.tag===3)return r;e=e.return}return[]}function IM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Q_(e,n,a,r,u){for(var f=n._reactName,_=[];a!==null&&a!==r;){var A=a,z=A.alternate,et=A.stateNode;if(A=A.tag,z!==null&&z===r)break;A!==5&&A!==26&&A!==27||et===null||(z=et,u?(et=No(a,f),et!=null&&_.unshift(cl(a,et,z))):u||(et=No(a,f),et!=null&&_.push(cl(a,et,z)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var zM=/\r\n?/g,BM=/\u0000|\uFFFD/g;function J_(e){return(typeof e=="string"?e:""+e).replace(zM,`
`).replace(BM,"")}function $_(e,n){return n=J_(n),J_(e)===n}function Ze(e,n,a,r,u,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||hr(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&hr(e,""+r);else return;break;case"className":fi(e,"class",r);break;case"tabIndex":fi(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":fi(e,a,r);break;case"style":Zm(e,r,f);return;case"data":if(n!=="object"){fi(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Kl(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ze(e,n,"name",u.name,u,null),Ze(e,n,"formEncType",u.formEncType,u,null),Ze(e,n,"formMethod",u.formMethod,u,null),Ze(e,n,"formTarget",u.formTarget,u,null)):(Ze(e,n,"encType",u.encType,u,null),Ze(e,n,"method",u.method,u,null),Ze(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Kl(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Ji);return;case"onScroll":r!=null&&we("scroll",e);return;case"onScrollEnd":r!=null&&we("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Kl(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":we("beforetoggle",e),we("toggle",e),an(e,"popover",r);break;case"xlinkActuate":Ne(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ne(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ne(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ne(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ne(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ne(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ne(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ne(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ne(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":an(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=iy.get(a)||a,an(e,a,r);else return}Te=!0}function pd(e,n,a,r,u,f){switch(a){case"style":Zm(e,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")hr(e,r);else if(typeof r=="number"||typeof r=="bigint")hr(e,""+r);else return;break;case"onScroll":r!=null&&we("scroll",e);return;case"onScrollEnd":r!=null&&we("scrollend",e);return;case"onClick":r!=null&&(e.onclick=Ji);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!En.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=e[F]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,u),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,r,u);break t}Te=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):an(e,a,r)}return}Te=!0}function Bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ze(e,n,f,_,a,null)}}u&&Ze(e,n,"srcSet",a.srcSet,a,null),r&&Ze(e,n,"src",a.src,a,null);return;case"input":we("invalid",e);var A=f=_=u=null,z=null,et=null;for(r in a)if(a.hasOwnProperty(r)){var ct=a[r];if(ct!=null)switch(r){case"name":u=ct;break;case"type":_=ct;break;case"checked":z=ct;break;case"defaultChecked":et=ct;break;case"value":f=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:Ze(e,n,r,ct,a,null)}}km(e,f,A,z,et,_,u,!1);return;case"select":we("invalid",e),r=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":_=A;break;case"multiple":r=A;default:Ze(e,n,u,A,a,null)}n=f,a=_,e.multiple=!!r,n!=null?fr(e,!!r,n,!1):a!=null&&fr(e,!!r,a,!0);return;case"textarea":we("invalid",e),f=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":r=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ze(e,n,_,A,a,null)}Ym(e,r,u,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(r=a[z],r!=null))switch(z){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ze(e,n,z,r,a,null)}return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(r=0;r<ul.length;r++)we(ul[r],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(r=a[et],r!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ze(e,n,et,r,a,null)}return;default:if(gf(n)){for(ct in a)a.hasOwnProperty(ct)&&(r=a[ct],r!==void 0&&pd(e,n,ct,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Ze(e,n,A,r,a,null))}var FM={};function HM(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,A=null,z=null,et=null,ct=null;for(lt in a){var St=a[lt];if(a.hasOwnProperty(lt)&&St!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":z=St;default:r.hasOwnProperty(lt)||Ze(e,n,lt,null,r,St)}}for(var j in r){var lt=r[j];if(St=a[j],r.hasOwnProperty(j)&&(lt!=null||St!=null))switch(j){case"type":lt!==St&&(Te=!0),f=lt;break;case"name":lt!==St&&(Te=!0),u=lt;break;case"checked":lt!==St&&(Te=!0),et=lt;break;case"defaultChecked":lt!==St&&(Te=!0),ct=lt;break;case"value":lt!==St&&(Te=!0),_=lt;break;case"defaultValue":lt!==St&&(Te=!0),A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==St&&Ze(e,n,j,lt,r,St)}}pf(e,_,A,z,et,ct,f,u);return;case"select":lt=_=A=j=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":lt=z;default:r.hasOwnProperty(f)||Ze(e,n,f,null,r,z)}for(u in r)if(f=r[u],z=a[u],r.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":f!==z&&(Te=!0),j=f;break;case"defaultValue":f!==z&&(Te=!0),A=f;break;case"multiple":f!==z&&(Te=!0),_=f;default:f!==z&&Ze(e,n,u,f,r,z)}n=A,a=_,r=lt,j!=null?fr(e,!!a,j,!1):!!r!=!!a&&(n!=null?fr(e,!!a,n,!0):fr(e,!!a,a?[]:"",!1));return;case"textarea":lt=j=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ze(e,n,A,null,r,u)}for(_ in r)if(u=r[_],f=a[_],r.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":u!==f&&(Te=!0),j=u;break;case"defaultValue":u!==f&&(Te=!0),lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ze(e,n,_,u,r,f)}Wm(e,j,lt);return;case"option":for(var Pt in a)if(j=a[Pt],a.hasOwnProperty(Pt)&&j!=null&&!r.hasOwnProperty(Pt))switch(Pt){case"selected":e.selected=!1;break;default:Ze(e,n,Pt,null,r,j)}for(z in r)if(j=r[z],lt=a[z],r.hasOwnProperty(z)&&j!==lt&&(j!=null||lt!=null))switch(z){case"selected":j!==lt&&(Te=!0),e.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:Ze(e,n,z,j,r,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)j=a[Qt],a.hasOwnProperty(Qt)&&j!=null&&!r.hasOwnProperty(Qt)&&Ze(e,n,Qt,null,r,j);for(et in r)if(j=r[et],lt=a[et],r.hasOwnProperty(et)&&j!==lt&&(j!=null||lt!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,n));break;default:Ze(e,n,et,j,r,lt)}return;default:if(gf(n)){for(var ye in a)j=a[ye],a.hasOwnProperty(ye)&&j!==void 0&&!r.hasOwnProperty(ye)&&pd(e,n,ye,void 0,r,j);for(ct in r)j=r[ct],lt=a[ct],!r.hasOwnProperty(ct)||j===lt||j===void 0&&lt===void 0||pd(e,n,ct,j,r,lt);return}}for(var tt in a)j=a[tt],a.hasOwnProperty(tt)&&j!=null&&!r.hasOwnProperty(tt)&&Ze(e,n,tt,null,r,j);for(St in r)j=r[St],lt=a[St],!r.hasOwnProperty(St)||j===lt||j==null&&lt==null||Ze(e,n,St,j,r,lt)}function tv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function GM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,_=u.initiatorType,A=u.duration;if(f&&A&&tv(_)){for(_=0,A=u.responseEnd,r+=1;r<a.length;r++){var z=a[r],et=z.startTime;if(et>A)break;var ct=z.transferSize,St=z.initiatorType;ct&&tv(St)&&(z=z.responseEnd,_+=ct*(z<A?1:(A-et)/(z-et)))}if(--r,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var md=null,gd=null;function fl(e){return e.nodeType===9?e:e.ownerDocument}function ev(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function iv(e,n,a,r){return a=fl(a).createElement(e),a[T]=r,a[F]=n,Bn(a,e,n),be(a),a}function _d(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vd=null;function VM(){var e=window.event;return e&&e.type==="popstate"?e===vd?!1:(vd=e,!0):(vd=null,!1)}var xd=typeof setTimeout=="function"?setTimeout:void 0,XM=typeof clearTimeout=="function"?clearTimeout:void 0,av=typeof Promise=="function"?Promise:void 0,sv=typeof requestAnimationFrame=="function"?requestAnimationFrame:xd,kM=typeof queueMicrotask=="function"?queueMicrotask:typeof av<"u"?function(e){return av.resolve(null).then(e).catch(WM)}:xd;function WM(e){setTimeout(function(){throw e})}function hs(e){return e==="head"}function rv(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),jr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Rd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Rd(a);for(var f=a.firstChild;f;){var _=f.nextSibling,A=f.nodeName;f[Ot]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Rd(e.ownerDocument.body);a=u}while(a);jr(n)}function ov(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function lv(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var u=r=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function uv(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function YM(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Sd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return YM(n,a,e)}function qM(e){return e.documentElement.clientHeight}function ZM(e){this.addEventListener("load",e),this.addEventListener("error",e)}function jM(e,n,a,r,u,f,_,A,z){var et=n.nodeType===9?n:n.ownerDocument;try{var ct=et.startViewTransition({update:function(){var j=et.defaultView,lt=j.navigation&&j.navigation.transition,Pt=et.fonts.status;r();var Qt=[];if(Pt==="loaded"&&(qM(et),et.fonts.status==="loading"&&Qt.push(et.fonts.ready)),Pt=Qt.length,e!==null)for(var ye=e.suspenseyImages,tt=0,G=0;G<ye.length;G++){var it=ye[G];if(!it.complete){var xt=it.getBoundingClientRect();if(0<xt.bottom&&0<xt.right&&xt.top<j.innerHeight&&xt.left<j.innerWidth){if(tt+=Dv(it),tt>sc){Qt.length=Pt;break}it=new Promise(ZM.bind(it)),Qt.push(it)}}}if(0<Qt.length)return j=Promise.race([Promise.all(Qt),new Promise(function(qt){return setTimeout(qt,500)})]).then(u,u),(lt?Promise.allSettled([lt.finished,j]):j).then(f,f);if(u(),lt)return lt.finished.then(f,f);f()},types:a});et.__reactViewTransition=ct;var St=[];return ct.ready.then(function(){for(var j=et.documentElement.getAnimations({subtree:!0}),lt=0;lt<j.length;lt++){var Pt=j[lt],Qt=Pt.effect,ye=Qt.pseudoElement;if(ye!=null&&ye.startsWith("::view-transition")){St.push(Pt),Pt=Qt.getKeyframes();for(var tt=ye=void 0,G=!0,it=0;it<Pt.length;it++){var xt=Pt[it],qt=xt.width;if(ye===void 0)ye=qt;else if(ye!==qt){G=!1;break}if(qt=xt.height,tt===void 0)tt=qt;else if(tt!==qt){G=!1;break}delete xt.width,delete xt.height,xt.transform==="none"&&delete xt.transform}G&&ye!==void 0&&tt!==void 0&&(Qt.setKeyframes(Pt),G=getComputedStyle(Qt.target,Qt.pseudoElement),G.width!==ye||G.height!==tt)&&(G=Pt[0],G.width=ye,G.height=tt,G=Pt[Pt.length-1],G.width=ye,G.height=tt,Qt.setKeyframes(Pt))}}_()},function(j){et.__reactViewTransition===ct&&(et.__reactViewTransition=null);try{if(typeof j=="object"&&j!==null)switch(j.name){case"InvalidStateError":(j.message==="View transition was skipped because document visibility state is hidden."||j.message==="Skipping view transition because document visibility state has become hidden."||j.message==="Skipping view transition because viewport size changed."||j.message==="Transition was aborted because of invalid state")&&(j=null)}j!==null&&z(j)}finally{r(),u(),_()}}),ct.finished.finally(function(){for(var j=0;j<St.length;j++)St[j].cancel();et.__reactViewTransition===ct&&(et.__reactViewTransition=null),A()}),ct}catch{return r(),u(),_(),null}}function Ks(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Ks.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Ks.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===e&&f.pseudoElement===n&&r.push(a[u])}return r},Ks.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function cv(e){return{name:e,group:new Ks("group",e),imagePair:new Ks("image-pair",e),old:new Ks("old",e),new:new Ks("new",e)}}function vi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}vi.prototype.addEventListener=function(e,n,a){var r=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(hv(f,e,n,a)===-1){var _=this,A=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(z){_.removeEventListener(e,n,a),typeof n=="function"?n.call(this,z):n.handleEvent(z)}),r!==null&&(u=_.removeEventListener.bind(_,e,n,a),r.addEventListener("abort",u,{once:!0}),u=r.removeEventListener.bind(r,"abort",u)),r=Xr(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:A,cleanup:u}),v(this._fragmentFiber.child,!1,KM,e,A,r)}this._eventListeners=f}};function KM(e,n,a,r){return M(e).addEventListener(n,a,r),!1}vi.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=hv(r,e,n,a),n!==-1)){var u=r[n];a=u.attachedListener;var f=u.cleanup;u=Xr(u.optionsOrUseCapture),v(this._fragmentFiber.child,!1,QM,e,a,u),r.splice(n,1),f!==null&&f()}};function QM(e,n,a,r){return M(e).removeEventListener(n,a,r),!1}function Xr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function fv(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function hv(e,n,a,r){if(e.length===0)return-1;r=fv(r);for(var u=0;u<e.length;u++){var f=e[u];if(f.type===n&&f.listener===a&&fv(f.optionsOrUseCapture)===r)return u}return-1}vi.prototype.dispatchEvent=function(e){var n=g(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];r.addEventListener(f.type,f.attachedListener,Xr(f.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(u=0;u<a.length;u++)f=a[u],r.removeEventListener(f.type,f.attachedListener,Xr(f.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},vi.prototype.focus=function(e){v(this._fragmentFiber.child,!0,dv,e,void 0,void 0)};function dv(e,n){return e.tag===6?!1:(e=M(e),uE(e,n))}vi.prototype.focusLast=function(e){var n=[];v(this._fragmentFiber.child,!0,yd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!dv(n[a],e);a--);};function yd(e,n){return n.push(e),!1}vi.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=M(e),e=fl(e).activeElement,e!==null&&v(this._fragmentFiber.child,!1,JM,e,void 0,void 0))};function JM(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}vi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),v(this._fragmentFiber.child,!1,$M,e,void 0,void 0)};function $M(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}vi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),v(this._fragmentFiber.child,!1,tE,e,void 0,void 0);for(var a=n=0;a<Vi.length;a++){var r=Vi[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Vi[n++]=r}Vi.length=n}};function tE(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var Vi=[],Md=!1;function eE(e,n,a){Vi.push({fragmentInstance:e,observer:n,instance:a}),Md||(Md=!0,cE(function(){Md=!1;var r=Vi;Vi=[];for(var u=0;u<r.length;u++){var f=r[u];f.observer.unobserve(f.instance)}}))}vi.prototype.getClientRects=function(){var e=[];return v(this._fragmentFiber.child,!1,nE,e,void 0,void 0),e};function nE(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}vi.prototype.getRootNode=function(e){var n=g(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},vi.prototype.compareDocumentPosition=function(e){var n=g(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];v(this._fragmentFiber.child,!1,yd,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,y(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=r=a.compareDocumentPosition(e);return a===e?u=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=R(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),u=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var f=y(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(e),A=u.compareDocumentPosition(e),z=_&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=r&&f&&_&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||f&&u===e||z||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!f&&u===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||iE(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function iE(e,n,a,r,u){var f=oe(u);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=g(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=D(a,f,U),n===null?n=!1:(v(n,!0,X,f,a),f=S,S=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=D(r,f,U),n===null?n=!1:(v(n,!0,C,f,r),f=S,I=S=null,n=f!==null)),n):!1}function pv(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}vi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];v(this._fragmentFiber.child,!1,yd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=R(this._fragmentFiber);if(r=a?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=M(r),pv(e,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var u=n[r];u.tag===6?(u=M(u),pv(u,a)):M(u).scrollIntoView(e),r+=a?-1:1}};function aE(e,n){return e=M(e),mv(e,n),!1}function mv(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function gv(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];e.addEventListener(u.type,u.attachedListener,Xr(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var _=0,A=0;A<Vi.length;A++){var z=Vi[A];(z.fragmentInstance!==n||z.observer!==f||z.instance!==e)&&(Vi[_++]=z)}Vi.length=_,f.observe(e)}),mv(e,n))}function sE(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];e.removeEventListener(u.type,u.attachedListener,Xr(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?eE(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function Ed(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ed(a),Kt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function rE(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ot])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ni(e.nextSibling),e===null)break}return null}function oE(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ni(e.nextSibling),e===null))return null;return e}function _v(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ni(e.nextSibling),e===null))return null;return e}function bd(e){return e.data==="$?"||e.data==="$~"}function Td(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function lE(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ni(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Ad=null;function vv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ni(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function xv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function uE(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function cE(e){sv(function(){sv(function(n){return e(n)})})}function Sv(e,n,a){switch(n=fl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function yv(e,n,a){for(var r in a){var u=a[r];a.hasOwnProperty(r)&&u!=null&&Ze(e,n,r,null,FM,u)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Ji&&(e.onclick=null),Kt(e)}function Rd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Kt(e)}var Ui=new Map,Mv=new Set;function hl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var La=Rt.d;Rt.d={f:fE,r:hE,D:dE,C:pE,L:mE,m:gE,X:vE,S:_E,M:xE};function fE(){var e=La.f(),n=Ku();return e||n}function hE(e){var n=ge(e);n!==null&&n.tag===5&&n.type==="form"?b0(n):La.r(e)}var kr=typeof document>"u"?null:document;function Ev(e,n,a){var r=kr;if(r&&typeof n=="string"&&n){var u=bi(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Mv.has(u)||(Mv.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Bn(n,"link",e),be(n),r.head.appendChild(n)))}}function dE(e){La.D(e),Ev("dns-prefetch",e,null)}function pE(e,n){La.C(e,n),Ev("preconnect",e,n)}function mE(e,n,a){La.L(e,n,a);var r=kr;if(r&&e&&n){var u='link[rel="preload"][as="'+bi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+bi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+bi(a.imageSizes)+'"]')):u+='[href="'+bi(e)+'"]';var f=u;switch(n){case"style":f=Wr(e);break;case"script":f=Yr(e)}if(!(Ui.has(f)||(e=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ui.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(dl(f))||n==="script"&&r.querySelector(pl(f))))){var _=r.createElement("link");Bn(_,"link",e),n==="style"&&(_[Zt]=!0,_.onload=_.onerror=function(){$e(_)}),be(_),r.head.appendChild(_)}}}function gE(e,n){La.m(e,n);var a=kr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+bi(r)+'"][href="'+bi(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Yr(e)}if(!Ui.has(f)&&(e=P({rel:"modulepreload",href:e},n),Ui.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(pl(f)))return}r=a.createElement("link"),Bn(r,"link",e),be(r),a.head.appendChild(r)}}}function _E(e,n,a){La.S(e,n,a);var r=kr;if(r&&e){var u=Re(r).hoistableStyles,f=Wr(e);n=n||"default";var _=u.get(f);if(!_){var A={loading:0,preload:null};if(_=r.querySelector(dl(f)))A.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ui.get(f))&&Cd(e,a);var z=_=r.createElement("link");be(z),Bn(z,"link",e),z._p=new Promise(function(et,ct){z.onload=et,z.onerror=ct}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ic(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:A},u.set(f,_)}}}function vE(e,n){La.X(e,n);var a=kr;if(a&&e){var r=Re(a).hoistableScripts,u=Yr(e),f=r.get(u);f||(f=a.querySelector(pl(u)),f||(e=P({src:e,async:!0},n),(n=Ui.get(u))&&wd(e,n),f=a.createElement("script"),be(f),Bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function xE(e,n){La.M(e,n);var a=kr;if(a&&e){var r=Re(a).hoistableScripts,u=Yr(e),f=r.get(u);f||(f=a.querySelector(pl(u)),f||(e=P({src:e,async:!0,type:"module"},n),(n=Ui.get(u))&&wd(e,n),f=a.createElement("script"),be(f),Bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function bv(e,n,a,r){var u=(u=Oe.current)?hl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Wr(a.href),n=Re(u).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Wr(a.href);var f=Re(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(dl(e)))?f._p||(_.instance=f,_.state.loading=5):(f=Ui.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ui.set(e,f)),SE(u,e,f,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Yr(a),n=Re(u).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Wr(e){return'href="'+bi(e)+'"'}function dl(e){return'link[rel="stylesheet"]['+e+"]"}function Tv(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function SE(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Zt]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[Zt]=!0,n.onload=n.onerror=$e.bind(null,n),Bn(n,"link",a),be(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Yr(e){return'[src="'+bi(e)+'"]'}function pl(e){return"script[async]"+e}function Av(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+bi(a.href)+'"]');if(r)return n.instance=r,be(r),r;var u=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),be(r),Bn(r,"style",u),ic(r,a.precedence,e),n.instance=r;case"stylesheet":u=Wr(a.href);var f=e.querySelector(dl(u));if(f)return n.state.loading|=4,n.instance=f,be(f),f;r=Tv(a),(u=Ui.get(u))&&Cd(r,u),f=(e.ownerDocument||e).createElement("link"),be(f);var _=f;return _._p=new Promise(function(A,z){_.onload=A,_.onerror=z}),Bn(f,"link",r),n.state.loading|=4,ic(f,a.precedence,e),n.instance=f;case"script":return f=Yr(a.src),(u=e.querySelector(pl(f)))?(n.instance=u,be(u),u):(r=a,(u=Ui.get(f))&&(r=P({},a),wd(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),be(u),Bn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,ic(r,a.precedence,e));return n.instance}function ic(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,_=0;_<r.length;_++){var A=r[_];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Cd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function wd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ac=null;function Rv(e,n,a){if(ac===null){var r=new Map,u=ac=new Map;u.set(a,r)}else u=ac,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ot]||f[T]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var A=r.get(_);A?A.push(f):r.set(_,[f])}}return r}function Dd(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function yE(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Cv(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function wv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Dv(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Nv(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=Dv(n),e.suspenseyImages.push(n)),e=bE.bind(e),n.decode().then(e,e))}function ME(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Wr(r.href),f=n.querySelector(dl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ml.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,be(f);return}f=n.ownerDocument||n,r=Tv(r),(u=Ui.get(u))&&Cd(r,u),f=f.createElement("link"),be(f);var _=f;_._p=new Promise(function(A,z){_.onload=A,_.onerror=z}),Bn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ml.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var sc=0;function EE(e,n){return e.stylesheets&&e.count===0&&oc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&oc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&sc===0&&(sc=62500*GM());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&oc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>sc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function Uv(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)oc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function ml(){this.count--,Uv(this)}function bE(){this.imgCount--,Uv(this)}var rc=null;function oc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,rc=new Map,n.forEach(TE,e),rc=null,ml.call(e))}function TE(e,n){if(!(n.state.loading&4)){var a=rc.get(e);if(a)var r=a.get(null);else{a=new Map,rc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,u),a.set(_,u),this.count++,r=ml.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var qr={$$typeof:J,Provider:null,Consumer:null,_currentValue:He,_currentValue2:He,_threadCount:0};function AE(e,n,a,r,u,f,_,A,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cr(0),this.hiddenUpdates=cr(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.transitionTypes=null,this.incompleteTransitions=new Map}function Lv(e,n,a,r,u,f,_,A,z,et,ct,St){return e=new AE(e,n,a,_,z,et,ct,St,A),n=1,f===!0&&(n|=24),f=$n(3,null,null,n),e.current=f,f.stateNode=e,n=Wf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},jf(f),e}function Ov(e){return e?(e=xr,e):xr}function Pv(e,n,a,r,u,f){u=Ov(u),r.context===null?r.context=u:r.pendingContext=u,r=ts(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=es(e,r,n),a!==null&&(ii(a,e,n),Yo(a,e,n))}function Iv(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Nd(e,n){Iv(e,n),(e=e.alternate)&&Iv(e,n)}function zv(e){if(e.tag===13||e.tag===31){var n=Ls(e,67108864);n!==null&&ii(n,e,67108864),Nd(e,67108864)}}function Bv(e){if(e.tag===13||e.tag===31){var n=_i();n=wo(n);var a=Ls(e,n);a!==null&&ii(a,e,n),Nd(e,n)}}var Zr=!0;function RE(e,n,a,r){var u=_t.T;_t.T=null;var f=Rt.p;try{Rt.p=2,Ud(e,n,a,r)}finally{Rt.p=f,_t.T=u}}function CE(e,n,a,r){var u=_t.T;_t.T=null;var f=Rt.p;try{Rt.p=8,Ud(e,n,a,r)}finally{Rt.p=f,_t.T=u}}function Ud(e,n,a,r){if(Zr){var u=Ld(r);if(u===null)dd(e,n,r,lc,a),Hv(e,r);else if(DE(u,e,n,a,r))r.stopPropagation();else if(Hv(e,r),n&4&&-1<wE.indexOf(e)){for(;u!==null;){var f=ge(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=xa(f.pendingLanes);if(_!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var z=1<<31-me(_);A.entanglements[1]|=z,_&=~z}la(f),(Xe&6)===0&&(qu=Xt()+500,ll(0))}}break;case 31:case 13:A=Ls(f,2),A!==null&&ii(A,f,2),Ku(),Nd(f,2)}if(f=Ld(r),f===null&&dd(e,n,r,lc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else dd(e,n,r,null,a)}}function Ld(e){return e=vf(e),Od(e)}var lc=null;function Od(e){if(lc=null,e=oe(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return lc=e,null}function Fv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(se()){case he:return 2;case Y:return 8;case wt:case yt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var Pd=!1,ds=null,ps=null,ms=null,gl=new Map,_l=new Map,gs=[],wE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hv(e,n){switch(e){case"focusin":case"focusout":ds=null;break;case"dragenter":case"dragleave":ps=null;break;case"mouseover":case"mouseout":ms=null;break;case"pointerover":case"pointerout":gl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(n.pointerId)}}function vl(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ge(n),n!==null&&zv(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function DE(e,n,a,r,u){switch(n){case"focusin":return ds=vl(ds,e,n,a,r,u),!0;case"dragenter":return ps=vl(ps,e,n,a,r,u),!0;case"mouseover":return ms=vl(ms,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return gl.set(f,vl(gl.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,_l.set(f,vl(_l.get(f)||null,e,n,a,r,u)),!0}return!1}function Gv(e){var n=oe(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Zl(e.priority,function(){Bv(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Zl(e.priority,function(){Bv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Ld(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);_f=r,a.target.dispatchEvent(r),_f=null}else return n=ge(a),n!==null&&zv(n),e.blockedOn=a,!1;n.shift()}return!0}function Vv(e,n,a){uc(e)&&a.delete(n)}function NE(){Pd=!1,ds!==null&&uc(ds)&&(ds=null),ps!==null&&uc(ps)&&(ps=null),ms!==null&&uc(ms)&&(ms=null),gl.forEach(Vv),_l.forEach(Vv)}function cc(e,n){e.blockedOn===n&&(e.blockedOn=null,Pd||(Pd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,NE)))}var fc=null;function Xv(e){fc!==e&&(fc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){fc===e&&(fc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(Od(r||a)===null)continue;break}var f=ge(a);f!==null&&(e.splice(n,3),n-=3,gh(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function jr(e){function n(z){return cc(z,e)}ds!==null&&cc(ds,e),ps!==null&&cc(ps,e),ms!==null&&cc(ms,e),gl.forEach(n),_l.forEach(n);for(var a=0;a<gs.length;a++){var r=gs[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<gs.length&&(a=gs[0],a.blockedOn===null);)Gv(a),a.blockedOn===null&&gs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],_=u[F]||null;if(typeof f=="function")_||Xv(a);else if(_){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[F]||null)A=_.formAction;else if(Od(u)!==null)continue}else A=_.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),Xv(a)}}}function kv(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Id(e){this._internalRoot=e}hc.prototype.render=Id.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=_i();Pv(a,r,e,n,null,null)},hc.prototype.unmount=Id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Pv(e.current,2,null,e,null,null),Ku(),n[ft]=null}};function hc(e){this._internalRoot=e}hc.prototype.unstable_scheduleHydration=function(e){if(e){var n=ql();e={blockedOn:null,target:e,priority:n};for(var a=0;a<gs.length&&n!==0&&n<gs[a].priority;a++);gs.splice(a,0,e),a===0&&Gv(e)}};var Wv=t.version;if(Wv!=="19.3.0")throw Error(s(527,Wv,"19.3.0"));Rt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var UE={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:_t,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{Jt=dc.inject(UE),Gt=dc}catch{}}return Sl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=O0,f=P0,_=I0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Lv(e,1,!1,null,null,a,r,null,u,f,_,kv),e[ft]=n.current,hd(e),new Id(n)},Sl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=O0,_=P0,A=I0,z=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=Lv(e,1,!0,n,a??null,r,u,z,f,_,A,kv),n.context=Ov(null),a=n.current,r=_i(),r=wo(r),u=ts(r),u.callback=null,es(a,u,r),a=r,n.current.lanes=a,Ki(n,a),la(n),e[ft]=n.current,hd(e),new hc(n)},Sl.version="19.3.0",Sl}var nx;function qE(){if(nx)return Fd.exports;nx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Fd.exports=YE(),Fd.exports}var ZE=qE();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xm="186",vo={ROTATE:0,DOLLY:1,PAN:2},go={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jE=0,ix=1,KE=2,Pl=1,QE=2,Ll=3,ar=0,oi=1,Pi=2,Ha=0,Il=1,ax=2,sx=3,rx=4,JE=5,mo=100,$E=101,tb=102,eb=103,nb=104,ib=200,ab=201,sb=202,rb=203,mS=204,gS=205,ob=206,lb=207,ub=208,cb=209,fb=210,hb=211,db=212,pb=213,mb=214,Cp=0,wp=1,Dp=2,zl=3,Np=4,Up=5,Lp=6,Op=7,_S=0,gb=1,_b=2,ma=0,vS=1,xS=2,SS=3,Sm=4,yS=5,MS=6,ES=7,bS=300,sr=301,yo=302,Xd=303,kd=304,of=306,Pp=1e3,Fa=1001,Ip=1002,Hn=1003,vb=1004,pc=1005,kn=1006,Wd=1007,nr=1008,yi=1009,TS=1010,AS=1011,Bl=1012,ym=1013,ga=1014,Yi=1015,_a=1016,Mm=1017,Em=1018,Fl=1020,RS=35902,CS=35899,wS=1021,DS=1022,qi=1023,Va=1026,ir=1027,bm=1028,Tm=1029,rr=1030,Am=1031,Rm=1033,kc=33776,Wc=33777,Yc=33778,qc=33779,zp=35840,Bp=35841,Fp=35842,Hp=35843,Gp=36196,Vp=37492,Xp=37496,kp=37488,Wp=37489,Kc=37490,Yp=37491,qp=37808,Zp=37809,jp=37810,Kp=37811,Qp=37812,Jp=37813,$p=37814,tm=37815,em=37816,nm=37817,im=37818,am=37819,sm=37820,rm=37821,om=36492,lm=36494,um=36495,cm=36283,fm=36284,Qc=36285,hm=36286,xb=3200,dm=0,Sb=1,Es="",ri="srgb",Jc="srgb-linear",$c="linear",je="srgb",Yd=7680,yb=519,Mb=512,Eb=513,bb=514,Cm=515,Tb=516,Ab=517,wm=518,Rb=519,NS=35044,ox="300 es",pa=2e3,Hl=2001;function Cb(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function tf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function wb(){const o=tf("canvas");return o.style.display="block",o}const lx={};function ef(...o){const t="THREE."+o.shift();console.log(t,...o)}function US(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function le(...o){o=US(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Fe(...o){o=US(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function xo(...o){const t=o.join(" ");t in lx||(lx[t]=!0,le(...o))}function Db(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Nb={[Cp]:wp,[Dp]:Lp,[Np]:Op,[zl]:Up,[wp]:Cp,[Lp]:Dp,[Op]:Np,[Up]:zl};class Rs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zc=Math.PI/180,pm=180/Math.PI;function Ts(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Vn[o&255]+Vn[o>>8&255]+Vn[o>>16&255]+Vn[o>>24&255]+"-"+Vn[t&255]+Vn[t>>8&255]+"-"+Vn[t>>16&15|64]+Vn[t>>24&255]+"-"+Vn[i&63|128]+Vn[i>>8&255]+"-"+Vn[i>>16&255]+Vn[i>>24&255]+Vn[s&255]+Vn[s>>8&255]+Vn[s>>16&255]+Vn[s>>24&255]).toLowerCase()}function De(o,t,i){return Math.max(t,Math.min(i,o))}function Ub(o,t){return(o%t+t)%t}function qd(o,t,i){return(1-i)*o+i*t}function da(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:case Uint8ClampedArray:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function en(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Lb={DEG2RAD:Zc},Bm=class Bm{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bm.prototype.isVector2=!0;let ae=Bm;class Xa{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],x=s[l+2],v=s[l+3],g=c[h+0],y=c[h+1],R=c[h+2],w=c[h+3];if(v!==w||m!==g||p!==y||x!==R){let M=m*g+p*y+x*R+v*w;M<0&&(g=-g,y=-y,R=-R,w=-w,M=-M);let S=1-d;if(M<.9995){const I=Math.acos(M),X=Math.sin(I);S=Math.sin(S*I)/X,d=Math.sin(d*I)/X,m=m*S+g*d,p=p*S+y*d,x=x*S+R*d,v=v*S+w*d}else{m=m*S+g*d,p=p*S+y*d,x=x*S+R*d,v=v*S+w*d;const I=1/Math.sqrt(m*m+p*p+x*x+v*v);m*=I,p*=I,x*=I,v*=I}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],x=s[l+3],v=c[h],g=c[h+1],y=c[h+2],R=c[h+3];return t[i]=d*R+x*v+m*y-p*g,t[i+1]=m*R+x*g+p*v-d*y,t[i+2]=p*R+x*y+d*g-m*v,t[i+3]=x*R-d*v-m*g-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),x=d(l/2),v=d(c/2),g=m(s/2),y=m(l/2),R=m(c/2);switch(h){case"XYZ":this._x=g*x*v+p*y*R,this._y=p*y*v-g*x*R,this._z=p*x*R+g*y*v,this._w=p*x*v-g*y*R;break;case"YXZ":this._x=g*x*v+p*y*R,this._y=p*y*v-g*x*R,this._z=p*x*R-g*y*v,this._w=p*x*v+g*y*R;break;case"ZXY":this._x=g*x*v-p*y*R,this._y=p*y*v+g*x*R,this._z=p*x*R+g*y*v,this._w=p*x*v-g*y*R;break;case"ZYX":this._x=g*x*v-p*y*R,this._y=p*y*v+g*x*R,this._z=p*x*R-g*y*v,this._w=p*x*v+g*y*R;break;case"YZX":this._x=g*x*v+p*y*R,this._y=p*y*v+g*x*R,this._z=p*x*R-g*y*v,this._w=p*x*v-g*y*R;break;case"XZY":this._x=g*x*v-p*y*R,this._y=p*y*v-g*x*R,this._z=p*x*R+g*y*v,this._w=p*x*v+g*y*R;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],x=i[6],v=i[10],g=s+d+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(x-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(s>d&&s>v){const y=2*Math.sqrt(1+s-d-v);this._w=(x-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-s-v);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+x)/y}else{const y=2*Math.sqrt(1+v-s-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+h*d+l*p-c*m,this._y=l*x+h*m+c*d-s*p,this._z=c*x+h*p+s*m-l*d,this._w=h*x-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Fm=class Fm{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(ux.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(ux.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),x=2*(d*i-c*l),v=2*(c*s-h*i);return this.x=i+m*p+h*v-d*x,this.y=s+m*x+d*p-c*v,this.z=l+m*v+c*x-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Zd.copy(this).projectOnVector(t),this.sub(Zd)}reflect(t){return this.sub(Zd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fm.prototype.isVector3=!0;let K=Fm;const Zd=new K,ux=new Xa,Hm=class Hm{constructor(t,i,s,l,c,h,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const x=this.elements;return x[0]=t,x[1]=l,x[2]=d,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=h,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],x=s[4],v=s[7],g=s[2],y=s[5],R=s[8],w=l[0],M=l[3],S=l[6],I=l[1],X=l[4],C=l[7],U=l[2],D=l[5],P=l[8];return c[0]=h*w+d*I+m*U,c[3]=h*M+d*X+m*D,c[6]=h*S+d*C+m*P,c[1]=p*w+x*I+v*U,c[4]=p*M+x*X+v*D,c[7]=p*S+x*C+v*P,c[2]=g*w+y*I+R*U,c[5]=g*M+y*X+R*D,c[8]=g*S+y*C+R*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8];return i*h*x-i*d*p-s*c*x+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8],v=x*h-d*p,g=d*m-x*c,y=p*c-h*m,R=i*v+s*g+l*y;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/R;return t[0]=v*w,t[1]=(l*p-x*s)*w,t[2]=(d*s-l*h)*w,t[3]=g*w,t[4]=(x*i-l*m)*w,t[5]=(l*c-d*i)*w,t[6]=y*w,t[7]=(s*m-p*i)*w,t[8]=(h*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return xo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jd.makeScale(t,i)),this}rotate(t){return xo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jd.makeRotation(-t)),this}translate(t,i){return xo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Hm.prototype.isMatrix3=!0;let _e=Hm;const jd=new _e,cx=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fx=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ob(){const o={enabled:!0,workingColorSpace:Jc,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===je&&(l.r=Ga(l.r),l.g=Ga(l.g),l.b=Ga(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===je&&(l.r=So(l.r),l.g=So(l.g),l.b=So(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Es?$c:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return xo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return xo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Jc]:{primaries:t,whitePoint:s,transfer:$c,toXYZ:cx,fromXYZ:fx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:t,whitePoint:s,transfer:je,toXYZ:cx,fromXYZ:fx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),o}const ze=Ob();function Ga(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function So(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Kr;class Pb{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Kr===void 0&&(Kr=tf("canvas")),Kr.width=t.width,Kr.height=t.height;const l=Kr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Kr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=tf("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ga(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ga(i[s]/255)*255):i[s]=Ga(i[s]);return{data:i,width:t.width,height:t.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ib=0;class Dm{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ib++}),this.uuid=Ts(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Kd(l[h].image)):c.push(Kd(l[h]))}else c=Kd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Kd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Pb.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(le("Texture: Unable to serialize Texture."),{})}let zb=0;const Qd=new K;class Wn extends Rs{constructor(t=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,s=Fa,l=Fa,c=kn,h=nr,d=qi,m=yi,p=Wn.DEFAULT_ANISOTROPY,x=Es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=Ts(),this.name="",this.source=new Dm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qd).x}get height(){return this.source.getSize(Qd).y}get depth(){return this.source.getSize(Qd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){le(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pp:t.x=t.x-Math.floor(t.x);break;case Fa:t.x=t.x<0?0:1;break;case Ip:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pp:t.y=t.y-Math.floor(t.y);break;case Fa:t.y=t.y<0?0:1;break;case Ip:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=bS;Wn.DEFAULT_ANISOTROPY=1;const Gm=class Gm{constructor(t=0,i=0,s=0,l=1){this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],x=m[4],v=m[8],g=m[1],y=m[5],R=m[9],w=m[2],M=m[6],S=m[10];if(Math.abs(x-g)<.01&&Math.abs(v-w)<.01&&Math.abs(R-M)<.01){if(Math.abs(x+g)<.1&&Math.abs(v+w)<.1&&Math.abs(R+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const X=(p+1)/2,C=(y+1)/2,U=(S+1)/2,D=(x+g)/4,P=(v+w)/4,b=(R+M)/4;return X>C&&X>U?X<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(X),l=D/s,c=P/s):C>U?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=D/l,c=b/l):U<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(U),s=P/c,l=b/c),this.set(s,l,c,i),this}let I=Math.sqrt((M-R)*(M-R)+(v-w)*(v-w)+(g-x)*(g-x));return Math.abs(I)<.001&&(I=1),this.x=(M-R)/I,this.y=(v-w)/I,this.z=(g-x)/I,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this.w=De(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this.w=De(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gm.prototype.isVector4=!0;let un=Gm;class Bb extends Rs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new un(0,0,t,i),this.scissorTest=!1,this.viewport=new un(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Wn(l),h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Dm(l)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends Bb{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class LS extends Wn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fb extends Wn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const rf=class rf{constructor(t,i,s,l,c,h,d,m,p,x,v,g,y,R,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,x,v,g,y,R,w,M)}set(t,i,s,l,c,h,d,m,p,x,v,g,y,R,w,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=x,S[10]=v,S[14]=g,S[3]=y,S[7]=R,S[11]=w,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rf().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Qr.setFromMatrixColumn(t,0).length(),c=1/Qr.setFromMatrixColumn(t,1).length(),h=1/Qr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=h*x,y=h*v,R=d*x,w=d*v;i[0]=m*x,i[4]=-m*v,i[8]=p,i[1]=y+R*p,i[5]=g-w*p,i[9]=-d*m,i[2]=w-g*p,i[6]=R+y*p,i[10]=h*m}else if(t.order==="YXZ"){const g=m*x,y=m*v,R=p*x,w=p*v;i[0]=g+w*d,i[4]=R*d-y,i[8]=h*p,i[1]=h*v,i[5]=h*x,i[9]=-d,i[2]=y*d-R,i[6]=w+g*d,i[10]=h*m}else if(t.order==="ZXY"){const g=m*x,y=m*v,R=p*x,w=p*v;i[0]=g-w*d,i[4]=-h*v,i[8]=R+y*d,i[1]=y+R*d,i[5]=h*x,i[9]=w-g*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const g=h*x,y=h*v,R=d*x,w=d*v;i[0]=m*x,i[4]=R*p-y,i[8]=g*p+w,i[1]=m*v,i[5]=w*p+g,i[9]=y*p-R,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const g=h*m,y=h*p,R=d*m,w=d*p;i[0]=m*x,i[4]=w-g*v,i[8]=R*v+y,i[1]=v,i[5]=h*x,i[9]=-d*x,i[2]=-p*x,i[6]=y*v+R,i[10]=g-w*v}else if(t.order==="XZY"){const g=h*m,y=h*p,R=d*m,w=d*p;i[0]=m*x,i[4]=-v,i[8]=p*x,i[1]=g*v+w,i[5]=h*x,i[9]=y*v-R,i[2]=R*v-y,i[6]=d*x,i[10]=w*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hb,t,Gb)}lookAt(t,i,s){const l=this.elements;return xi.subVectors(t,i),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),vs.crossVectors(s,xi),vs.lengthSq()===0&&(Math.abs(s.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),vs.crossVectors(s,xi)),vs.normalize(),mc.crossVectors(xi,vs),l[0]=vs.x,l[4]=mc.x,l[8]=xi.x,l[1]=vs.y,l[5]=mc.y,l[9]=xi.y,l[2]=vs.z,l[6]=mc.z,l[10]=xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],x=s[1],v=s[5],g=s[9],y=s[13],R=s[2],w=s[6],M=s[10],S=s[14],I=s[3],X=s[7],C=s[11],U=s[15],D=l[0],P=l[4],b=l[8],L=l[12],H=l[1],q=l[5],Q=l[9],at=l[13],V=l[2],J=l[6],k=l[10],$=l[14],ht=l[3],st=l[7],pt=l[11],Et=l[15];return c[0]=h*D+d*H+m*V+p*ht,c[4]=h*P+d*q+m*J+p*st,c[8]=h*b+d*Q+m*k+p*pt,c[12]=h*L+d*at+m*$+p*Et,c[1]=x*D+v*H+g*V+y*ht,c[5]=x*P+v*q+g*J+y*st,c[9]=x*b+v*Q+g*k+y*pt,c[13]=x*L+v*at+g*$+y*Et,c[2]=R*D+w*H+M*V+S*ht,c[6]=R*P+w*q+M*J+S*st,c[10]=R*b+w*Q+M*k+S*pt,c[14]=R*L+w*at+M*$+S*Et,c[3]=I*D+X*H+C*V+U*ht,c[7]=I*P+X*q+C*J+U*st,c[11]=I*b+X*Q+C*k+U*pt,c[15]=I*L+X*at+C*$+U*Et,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],x=t[2],v=t[6],g=t[10],y=t[14],R=t[3],w=t[7],M=t[11],S=t[15],I=m*y-p*g,X=d*y-p*v,C=d*g-m*v,U=h*y-p*x,D=h*g-m*x,P=h*v-d*x;return i*(w*I-M*X+S*C)-s*(R*I-M*U+S*D)+l*(R*X-w*U+S*P)-c*(R*C-w*D+M*P)}determinantAffine(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[1],h=t[5],d=t[9],m=t[2],p=t[6],x=t[10];return i*(h*x-d*p)-s*(c*x-d*m)+l*(c*p-h*m)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],x=t[8],v=t[9],g=t[10],y=t[11],R=t[12],w=t[13],M=t[14],S=t[15],I=i*d-s*h,X=i*m-l*h,C=i*p-c*h,U=s*m-l*d,D=s*p-c*d,P=l*p-c*m,b=x*w-v*R,L=x*M-g*R,H=x*S-y*R,q=v*M-g*w,Q=v*S-y*w,at=g*S-y*M,V=I*at-X*Q+C*q+U*H-D*L+P*b;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/V;return t[0]=(d*at-m*Q+p*q)*J,t[1]=(l*Q-s*at-c*q)*J,t[2]=(w*P-M*D+S*U)*J,t[3]=(g*D-v*P-y*U)*J,t[4]=(m*H-h*at-p*L)*J,t[5]=(i*at-l*H+c*L)*J,t[6]=(M*C-R*P-S*X)*J,t[7]=(x*P-g*C+y*X)*J,t[8]=(h*Q-d*H+p*b)*J,t[9]=(s*H-i*Q-c*b)*J,t[10]=(R*D-w*C+S*I)*J,t[11]=(v*C-x*D-y*I)*J,t[12]=(d*L-h*q-m*b)*J,t[13]=(i*q-s*L+l*b)*J,t[14]=(w*X-R*U-M*I)*J,t[15]=(x*U-v*X+g*I)*J,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,x=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,x*d+s,x*m-l*h,0,p*m-l*d,x*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,x=h+h,v=d+d,g=c*p,y=c*x,R=c*v,w=h*x,M=h*v,S=d*v,I=m*p,X=m*x,C=m*v,U=s.x,D=s.y,P=s.z;return l[0]=(1-(w+S))*U,l[1]=(y+C)*U,l[2]=(R-X)*U,l[3]=0,l[4]=(y-C)*D,l[5]=(1-(g+S))*D,l[6]=(M+I)*D,l[7]=0,l[8]=(R+X)*P,l[9]=(M-I)*P,l[10]=(1-(g+w))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Qr.set(l[0],l[1],l[2]).length();const d=Qr.set(l[4],l[5],l[6]).length(),m=Qr.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Xi.copy(this);const p=1/h,x=1/d,v=1/m;return Xi.elements[0]*=p,Xi.elements[1]*=p,Xi.elements[2]*=p,Xi.elements[4]*=x,Xi.elements[5]*=x,Xi.elements[6]*=x,Xi.elements[8]*=v,Xi.elements[9]*=v,Xi.elements[10]*=v,i.setFromRotationMatrix(Xi),s.x=h,s.y=d,s.z=m,this}makePerspective(t,i,s,l,c,h,d=pa,m=!1){const p=this.elements,x=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let R,w;if(m)R=c/(h-c),w=h*c/(h-c);else if(d===pa)R=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(d===Hl)R=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=R,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=pa,m=!1){const p=this.elements,x=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let R,w;if(m)R=1/(h-c),w=h/(h-c);else if(d===pa)R=-2/(h-c),w=-(h+c)/(h-c);else if(d===Hl)R=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=R,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}};rf.prototype.isMatrix4=!0;let Qe=rf;const Qr=new K,Xi=new Qe,Hb=new K(0,0,0),Gb=new K(1,1,1),vs=new K,mc=new K,xi=new K,hx=new Qe,dx=new Xa;class As{constructor(t=0,i=0,s=0,l=As.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],x=l[9],v=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-De(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(De(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-De(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(De(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,y),this._y=0);break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return hx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hx,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return dx.setFromEuler(this),this.setFromQuaternion(dx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}As.DEFAULT_ORDER="XYZ";class Nm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vb=0;const px=new K,Jr=new Xa,Oa=new Qe,gc=new K,yl=new K,Xb=new K,kb=new Xa,mx=new K(1,0,0),gx=new K(0,1,0),_x=new K(0,0,1),vx={type:"added"},Wb={type:"removed"},$r={type:"childadded",child:null},Jd={type:"childremoved",child:null};class Mn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new K,i=new As,s=new Xa,l=new K(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new _e}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Jr.setFromAxisAngle(t,i),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(t,i){return Jr.setFromAxisAngle(t,i),this.quaternion.premultiply(Jr),this}rotateX(t){return this.rotateOnAxis(mx,t)}rotateY(t){return this.rotateOnAxis(gx,t)}rotateZ(t){return this.rotateOnAxis(_x,t)}translateOnAxis(t,i){return px.copy(t).applyQuaternion(this.quaternion),this.position.add(px.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(mx,t)}translateY(t){return this.translateOnAxis(gx,t)}translateZ(t){return this.translateOnAxis(_x,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?gc.copy(t):gc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),yl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oa.lookAt(yl,gc,this.up):Oa.lookAt(gc,yl,this.up),this.quaternion.setFromRotationMatrix(Oa),l&&(Oa.extractRotation(l.matrixWorld),Jr.setFromRotationMatrix(Oa),this.quaternion.premultiply(Jr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Fe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vx),$r.child=t,this.dispatchEvent($r),$r.child=null):Fe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Wb),Jd.child=t,this.dispatchEvent(Jd),Jd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vx),$r.child=t,this.dispatchEvent($r),$r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,t,Xb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yl,kb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i,s=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let h=0,d=c.length;h<d;h++)c[h].updateWorldMatrix(!1,!0,s)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const v=m[p];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),x=h(t.images),v=h(t.shapes),g=h(t.skeletons),y=h(t.animations),R=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),R.length>0&&(s.nodes=R)}return s.object=l,s;function h(d){const m=[];for(const p in d){const x=d[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Mn.DEFAULT_UP=new K(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class bs extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yb={type:"move"};class $d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,s),S=this._getHandJoint(p,w);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const x=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=x.position.distanceTo(v.position),y=.02,R=.005;p.inputState.pinching&&g>y+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&g<=y-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:t,target:this})));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Yb)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new bs;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const OS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},_c={h:0,s:0,l:0};function tp(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class fe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ze.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=ze.workingColorSpace){return this.r=t,this.g=i,this.b=s,ze.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=ze.workingColorSpace){if(t=Ub(t,1),i=De(i,0,1),s=De(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=tp(h,c,t+1/3),this.g=tp(h,c,t),this.b=tp(h,c,t-1/3)}return ze.colorSpaceToWorking(this,l),this}setStyle(t,i=ri){function s(c){c!==void 0&&parseFloat(c)<1&&le("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:le("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);le("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ri){const s=OS[t.toLowerCase()];return s!==void 0?this.setHex(s,i):le("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ga(t.r),this.g=Ga(t.g),this.b=Ga(t.b),this}copyLinearToSRGB(t){return this.r=So(t.r),this.g=So(t.g),this.b=So(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ri){return ze.workingToColorSpace(Xn.copy(this),t),Math.round(De(Xn.r*255,0,255))*65536+Math.round(De(Xn.g*255,0,255))*256+Math.round(De(Xn.b*255,0,255))}getHexString(t=ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=ze.workingColorSpace){ze.workingToColorSpace(Xn.copy(this),i);const s=Xn.r,l=Xn.g,c=Xn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const x=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=x<=.5?v/(h+d):v/(2-h-d),h){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=ze.workingColorSpace){return ze.workingToColorSpace(Xn.copy(this),i),t.r=Xn.r,t.g=Xn.g,t.b=Xn.b,t}getStyle(t=ri){ze.workingToColorSpace(Xn.copy(this),t);const i=Xn.r,s=Xn.g,l=Xn.b;return t!==ri?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(xs),this.setHSL(xs.h+t,xs.s+i,xs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(xs),t.getHSL(_c);const s=qd(xs.h,_c.h,i),l=qd(xs.s,_c.s,i),c=qd(xs.l,_c.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new fe;fe.NAMES=OS;class qb extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new As,this.environmentIntensity=1,this.environmentRotation=new As,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ki=new K,Pa=new K,ep=new K,Ia=new K,to=new K,eo=new K,xx=new K,np=new K,ip=new K,ap=new K,sp=new un,rp=new un,op=new un;class Ii{constructor(t=new K,i=new K,s=new K){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),ki.subVectors(t,i),l.cross(ki);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){ki.subVectors(l,i),Pa.subVectors(s,i),ep.subVectors(t,i);const h=ki.dot(ki),d=ki.dot(Pa),m=ki.dot(ep),p=Pa.dot(Pa),x=Pa.dot(ep),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const g=1/v,y=(p*m-d*x)*g,R=(h*x-d*m)*g;return c.set(1-y-R,R,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ia)===null?!1:Ia.x>=0&&Ia.y>=0&&Ia.x+Ia.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,Ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ia.x),m.addScaledVector(h,Ia.y),m.addScaledVector(d,Ia.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return sp.setScalar(0),rp.setScalar(0),op.setScalar(0),sp.fromBufferAttribute(t,i),rp.fromBufferAttribute(t,s),op.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(sp,c.x),h.addScaledVector(rp,c.y),h.addScaledVector(op,c.z),h}static isFrontFacing(t,i,s,l){return ki.subVectors(s,i),Pa.subVectors(t,i),ki.cross(Pa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ki.subVectors(this.c,this.b),Pa.subVectors(this.a,this.b),ki.cross(Pa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ii.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ii.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ii.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ii.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ii.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;to.subVectors(l,s),eo.subVectors(c,s),np.subVectors(t,s);const m=to.dot(np),p=eo.dot(np);if(m<=0&&p<=0)return i.copy(s);ip.subVectors(t,l);const x=to.dot(ip),v=eo.dot(ip);if(x>=0&&v<=x)return i.copy(l);const g=m*v-x*p;if(g<=0&&m>=0&&x<=0)return h=m/(m-x),i.copy(s).addScaledVector(to,h);ap.subVectors(t,c);const y=to.dot(ap),R=eo.dot(ap);if(R>=0&&y<=R)return i.copy(c);const w=y*p-m*R;if(w<=0&&p>=0&&R<=0)return d=p/(p-R),i.copy(s).addScaledVector(eo,d);const M=x*R-y*v;if(M<=0&&v-x>=0&&y-R>=0)return xx.subVectors(c,l),d=(v-x)/(v-x+(y-R)),i.copy(l).addScaledVector(xx,d);const S=1/(M+w+g);return h=w*S,d=g*S,i.copy(s).addScaledVector(to,h).addScaledVector(eo,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class or{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Wi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Wi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Wi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Wi):Wi.fromBufferAttribute(c,h),Wi.applyMatrix4(t.matrixWorld),this.expandByPoint(Wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vc.copy(s.boundingBox)),vc.applyMatrix4(t.matrixWorld),this.union(vc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wi),Wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ml),xc.subVectors(this.max,Ml),no.subVectors(t.a,Ml),io.subVectors(t.b,Ml),ao.subVectors(t.c,Ml),Ss.subVectors(io,no),ys.subVectors(ao,io),Qs.subVectors(no,ao);let i=[0,-Ss.z,Ss.y,0,-ys.z,ys.y,0,-Qs.z,Qs.y,Ss.z,0,-Ss.x,ys.z,0,-ys.x,Qs.z,0,-Qs.x,-Ss.y,Ss.x,0,-ys.y,ys.x,0,-Qs.y,Qs.x,0];return!lp(i,no,io,ao,xc)||(i=[1,0,0,0,1,0,0,0,1],!lp(i,no,io,ao,xc))?!1:(Sc.crossVectors(Ss,ys),i=[Sc.x,Sc.y,Sc.z],lp(i,no,io,ao,xc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(za[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),za[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),za[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),za[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),za[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),za[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),za[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),za[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(za),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const za=[new K,new K,new K,new K,new K,new K,new K,new K],Wi=new K,vc=new or,no=new K,io=new K,ao=new K,Ss=new K,ys=new K,Qs=new K,Ml=new K,xc=new K,Sc=new K,Js=new K;function lp(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){Js.fromArray(o,c);const d=l.x*Math.abs(Js.x)+l.y*Math.abs(Js.y)+l.z*Math.abs(Js.z),m=t.dot(Js),p=i.dot(Js),x=s.dot(Js);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>d)return!1}return!0}const yn=new K,yc=new ae;let Zb=0;class li extends Rs{constructor(t,i,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=NS,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)yc.fromBufferAttribute(this,i),yc.applyMatrix3(t),this.setXY(i,yc.x,yc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix3(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix4(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyNormalMatrix(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.transformDirection(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=da(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=en(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=da(i,this.array)),i}setX(t,i){return this.normalized&&(i=en(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=da(i,this.array)),i}setY(t,i){return this.normalized&&(i=en(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=da(i,this.array)),i}setZ(t,i){return this.normalized&&(i=en(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=da(i,this.array)),i}setW(t,i){return this.normalized&&(i=en(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=en(i,this.array),s=en(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=en(i,this.array),s=en(s,this.array),l=en(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=en(i,this.array),s=en(s,this.array),l=en(l,this.array),c=en(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class PS extends li{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class IS extends li{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class mn extends li{constructor(t,i,s){super(new Float32Array(t),i,s)}}const jb=new or,El=new K,up=new K;class Eo{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):jb.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;El.subVectors(t,this.center);const i=El.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(El,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(up.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(El.copy(t.center).add(up)),this.expandByPoint(El.copy(t.center).sub(up))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Kb=0;const Li=new Qe,cp=new Mn,so=new K,Si=new or,bl=new or,Un=new K;class An extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kb++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cb(t)?IS:PS)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new _e().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Li.makeRotationFromQuaternion(t),this.applyMatrix4(Li),this}rotateX(t){return Li.makeRotationX(t),this.applyMatrix4(Li),this}rotateY(t){return Li.makeRotationY(t),this.applyMatrix4(Li),this}rotateZ(t){return Li.makeRotationZ(t),this.applyMatrix4(Li),this}translate(t,i,s){return Li.makeTranslation(t,i,s),this.applyMatrix4(Li),this}scale(t,i,s){return Li.makeScale(t,i,s),this.applyMatrix4(Li),this}lookAt(t){return cp.lookAt(t),cp.updateMatrix(),this.applyMatrix4(cp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(so).negate(),this.translate(so.x,so.y,so.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new mn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Si.setFromBufferAttribute(c),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const s=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];bl.setFromBufferAttribute(d),this.morphTargetsRelative?(Un.addVectors(Si.min,bl.min),Si.expandByPoint(Un),Un.addVectors(Si.max,bl.max),Si.expandByPoint(Un)):(Si.expandByPoint(bl.min),Si.expandByPoint(bl.max))}Si.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Un.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Un));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)Un.fromBufferAttribute(d,p),m&&(so.fromBufferAttribute(t,p),Un.add(so)),l=Math.max(l,s.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==s.count)&&(h=new li(new Float32Array(4*s.count),4),this.setAttribute("tangent",h));const d=[],m=[];for(let b=0;b<s.count;b++)d[b]=new K,m[b]=new K;const p=new K,x=new K,v=new K,g=new ae,y=new ae,R=new ae,w=new K,M=new K;function S(b,L,H){p.fromBufferAttribute(s,b),x.fromBufferAttribute(s,L),v.fromBufferAttribute(s,H),g.fromBufferAttribute(c,b),y.fromBufferAttribute(c,L),R.fromBufferAttribute(c,H),x.sub(p),v.sub(p),y.sub(g),R.sub(g);const q=1/(y.x*R.y-R.x*y.y);isFinite(q)&&(w.copy(x).multiplyScalar(R.y).addScaledVector(v,-y.y).multiplyScalar(q),M.copy(v).multiplyScalar(y.x).addScaledVector(x,-R.x).multiplyScalar(q),d[b].add(w),d[L].add(w),d[H].add(w),m[b].add(M),m[L].add(M),m[H].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let b=0,L=I.length;b<L;++b){const H=I[b],q=H.start,Q=H.count;for(let at=q,V=q+Q;at<V;at+=3)S(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const X=new K,C=new K,U=new K,D=new K;function P(b){U.fromBufferAttribute(l,b),D.copy(U);const L=d[b];X.copy(L),X.sub(U.multiplyScalar(U.dot(L))).normalize(),C.crossVectors(D,L);const q=C.dot(m[b])<0?-1:1;h.setXYZW(b,X.x,X.y,X.z,q)}for(let b=0,L=I.length;b<L;++b){const H=I[b],q=H.start,Q=H.count;for(let at=q,V=q+Q;at<V;at+=3)P(t.getX(at+0)),P(t.getX(at+1)),P(t.getX(at+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new li(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new K,c=new K,h=new K,d=new K,m=new K,p=new K,x=new K,v=new K;if(t)for(let g=0,y=t.count;g<y;g+=3){const R=t.getX(g+0),w=t.getX(g+1),M=t.getX(g+2);l.fromBufferAttribute(i,R),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),x.subVectors(h,c),v.subVectors(l,c),x.cross(v),d.fromBufferAttribute(s,R),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),d.add(x),m.add(x),p.add(x),s.setXYZ(R,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),x.subVectors(h,c),v.subVectors(l,c),x.cross(v),s.setXYZ(g+0,x.x,x.y,x.z),s.setXYZ(g+1,x.x,x.y,x.z),s.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Un.fromBufferAttribute(t,i),Un.normalize(),t.setXYZ(i,Un.x,Un.y,Un.z)}toNonIndexed(){function t(d,m){const p=d.array,x=d.itemSize,v=d.normalized,g=new p.constructor(m.length*x);let y=0,R=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?y=m[w]*d.data.stride+d.offset:y=m[w]*x;for(let S=0;S<x;S++)g[R++]=p[y++]}return new li(g,x,v)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new An,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let x=0,v=p.length;x<v;x++){const g=p[x],y=t(g,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let v=0,g=p.length;v<g;v++){const y=p[v];x.push(y.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=t.morphAttributes;for(const p in c){const x=[],v=c[p];for(let g=0,y=v.length;g<y;g++)x.push(v[g].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,x=h.length;p<x;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qb{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=NS,this.updateRanges=[],this.version=0,this.uuid=Ts()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ts()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ts()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const i={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}const Qn=new K;class nf{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Qn.fromBufferAttribute(this,i),Qn.applyMatrix4(t),this.setXYZ(i,Qn.x,Qn.y,Qn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Qn.fromBufferAttribute(this,i),Qn.applyNormalMatrix(t),this.setXYZ(i,Qn.x,Qn.y,Qn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Qn.fromBufferAttribute(this,i),Qn.transformDirection(t),this.setXYZ(i,Qn.x,Qn.y,Qn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=da(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=en(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=en(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=en(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=en(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=en(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=da(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=da(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=da(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=da(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=en(i,this.array),s=en(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=en(i,this.array),s=en(s,this.array),l=en(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=en(i,this.array),s=en(s,this.array),l=en(l,this.array),c=en(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){ef("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new li(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new nf(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ef("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const fp=new K,Jb=new K,$b=new _e;class fa{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=fp.subVectors(s,i).cross(Jb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,s=!0){const l=t.delta(fp),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||$b.getNormalMatrix(t),l=this.coplanarPoint(fp).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let tT=0;class lr extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=Il,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mS,this.blendDst=gS,this.blendEquation=mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yb,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yd,this.stencilZFail=Yd,this.stencilZPass=Yd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){le(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new fe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(s=>new fa().fromJSON(s))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new ae().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class zS extends lr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ro;const Tl=new K,oo=new K,lo=new K,uo=new ae,Al=new ae,BS=new Qe,Mc=new K,Rl=new K,Ec=new K,Sx=new ae,hp=new ae,yx=new ae;class eT extends Mn{constructor(t=new zS){if(super(),this.isSprite=!0,this.type="Sprite",ro===void 0){ro=new An;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new Qb(i,5);ro.setIndex([0,1,2,0,2,3]),ro.setAttribute("position",new nf(s,3,0,!1)),ro.setAttribute("uv",new nf(s,2,3,!1))}this.geometry=ro,this.material=t,this.center=new ae(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,i){t.camera===null&&Fe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),oo.setFromMatrixScale(this.matrixWorld),BS.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),lo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&oo.multiplyScalar(-lo.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const h=this.center;bc(Mc.set(-.5,-.5,0),lo,h,oo,l,c),bc(Rl.set(.5,-.5,0),lo,h,oo,l,c),bc(Ec.set(.5,.5,0),lo,h,oo,l,c),Sx.set(0,0),hp.set(1,0),yx.set(1,1);let d=t.ray.intersectTriangle(Mc,Rl,Ec,!1,Tl);if(d===null&&(bc(Rl.set(-.5,.5,0),lo,h,oo,l,c),hp.set(0,1),d=t.ray.intersectTriangle(Mc,Ec,Rl,!1,Tl),d===null))return;const m=t.ray.origin.distanceTo(Tl);m<t.near||m>t.far||i.push({distance:m,point:Tl.clone(),uv:Ii.getInterpolation(Tl,Mc,Rl,Ec,Sx,hp,yx,new ae),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function bc(o,t,i,s,l,c){uo.subVectors(o,i).addScalar(.5).multiply(s),l!==void 0?(Al.x=c*uo.x-l*uo.y,Al.y=l*uo.x+c*uo.y):Al.copy(uo),o.copy(t),o.x+=Al.x,o.y+=Al.y,o.applyMatrix4(BS)}const Ba=new K,dp=new K,Tc=new K,Ac=new K;class lf{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ba)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ba.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ba.copy(this.origin).addScaledVector(this.direction,i),Ba.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){dp.copy(t).add(i).multiplyScalar(.5),Tc.copy(i).sub(t).normalize(),Ac.copy(this.origin).sub(dp);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Tc),d=Ac.dot(this.direction),m=-Ac.dot(Tc),p=Ac.lengthSq(),x=Math.abs(1-h*h);let v,g,y,R;if(x>0)if(v=h*m-d,g=h*d-m,R=c*x,v>=0)if(g>=-R)if(g<=R){const w=1/x;v*=w,g*=w,y=v*(v+h*g+2*d)+g*(h*v+g+2*m)+p}else g=c,v=Math.max(0,-(h*g+d)),y=-v*v+g*(g+2*m)+p;else g=-c,v=Math.max(0,-(h*g+d)),y=-v*v+g*(g+2*m)+p;else g<=-R?(v=Math.max(0,-(-h*c+d)),g=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+p):g<=R?(v=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+p):(v=Math.max(0,-(h*c+d)),g=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+p);else g=h>0?-c:c,v=Math.max(0,-(h*g+d)),y=-v*v+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(dp).addScaledVector(Tc,g),y}intersectSphere(t,i){if(t.radius<0)return null;Ba.subVectors(t.center,this.origin);const s=Ba.dot(this.direction),l=Ba.dot(Ba)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(s=(t.min.x-g.x)*p,l=(t.max.x-g.x)*p):(s=(t.max.x-g.x)*p,l=(t.min.x-g.x)*p),x>=0?(c=(t.min.y-g.y)*x,h=(t.max.y-g.y)*x):(c=(t.max.y-g.y)*x,h=(t.min.y-g.y)*x),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(d=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ba)!==null}intersectTriangle(t,i,s,l,c){const h=this.origin,d=this.direction,m=d.x,p=d.y,x=d.z,v=t.x-h.x,g=t.y-h.y,y=t.z-h.z,R=i.x-h.x,w=i.y-h.y,M=i.z-h.z,S=s.x-h.x,I=s.y-h.y,X=s.z-h.z,C=Math.abs(m),U=Math.abs(p),D=Math.abs(x);let P,b,L,H,q,Q,at,V,J,k,$,ht;if(C>=U&&C>=D?(L=m,Q=v,J=R,ht=S,m>=0?(P=p,b=x,H=g,q=y,at=w,V=M,k=I,$=X):(P=x,b=p,H=y,q=g,at=M,V=w,k=X,$=I)):U>=D?(L=p,Q=g,J=w,ht=I,p>=0?(P=x,b=m,H=y,q=v,at=M,V=R,k=X,$=S):(P=m,b=x,H=v,q=y,at=R,V=M,k=S,$=X)):(L=x,Q=y,J=M,ht=X,x>=0?(P=m,b=p,H=v,q=g,at=R,V=w,k=S,$=I):(P=p,b=m,H=g,q=v,at=w,V=R,k=I,$=S)),L===0)return null;const st=P/L,pt=b/L,Et=1/L,jt=H-st*Q,kt=q-pt*Q,B=at-st*J,mt=V-pt*J,At=k-st*ht,Z=$-pt*ht,dt=At*mt-Z*B,Tt=jt*Z-kt*At,Nt=B*kt-mt*jt;if(l){if(dt<0||Tt<0||Nt<0)return null}else if((dt<0||Tt<0||Nt<0)&&(dt>0||Tt>0||Nt>0))return null;const _t=dt+Tt+Nt;if(_t===0)return null;const Rt=Et*(dt*Q+Tt*J+Nt*ht);return(_t>0?Rt<0:Rt>0)?null:this.at(Rt/_t,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gl extends lr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new As,this.combine=_S,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Mx=new Qe,$s=new lf,Rc=new Eo,Ex=new K,Cc=new K,wc=new K,Dc=new K,pp=new K,Nc=new K,bx=new K,Uc=new K;class Ln extends Mn{constructor(t=new An,i=new Gl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Nc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=d[m],v=c[m];x!==0&&(pp.fromBufferAttribute(v,t),h?Nc.addScaledVector(pp,x):Nc.addScaledVector(pp.sub(i),x))}i.add(Nc)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(c),$s.copy(t.ray).recast(t.near),!(Rc.containsPoint($s.origin)===!1&&($s.intersectSphere(Rc,Ex)===null||$s.origin.distanceToSquared(Ex)>(t.far-t.near)**2))&&(Mx.copy(c).invert(),$s.copy(t.ray).applyMatrix4(Mx),!(s.boundingBox!==null&&$s.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,$s)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,v=c.attributes.normal,g=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let R=0,w=g.length;R<w;R++){const M=g[R],S=h[M.materialIndex],I=Math.max(M.start,y.start),X=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let C=I,U=X;C<U;C+=3){const D=d.getX(C),P=d.getX(C+1),b=d.getX(C+2);l=Lc(this,S,t,s,p,x,v,D,P,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,y.start),w=Math.min(d.count,y.start+y.count);for(let M=R,S=w;M<S;M+=3){const I=d.getX(M),X=d.getX(M+1),C=d.getX(M+2);l=Lc(this,h,t,s,p,x,v,I,X,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let R=0,w=g.length;R<w;R++){const M=g[R],S=h[M.materialIndex],I=Math.max(M.start,y.start),X=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let C=I,U=X;C<U;C+=3){const D=C,P=C+1,b=C+2;l=Lc(this,S,t,s,p,x,v,D,P,b),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const R=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let M=R,S=w;M<S;M+=3){const I=M,X=M+1,C=M+2;l=Lc(this,h,t,s,p,x,v,I,X,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function nT(o,t,i,s,l,c,h,d){let m;if(t.side===oi?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===ar,d),m===null)return null;Uc.copy(d),Uc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Uc);return p<i.near||p>i.far?null:{distance:p,point:Uc.clone(),object:o}}function Lc(o,t,i,s,l,c,h,d,m,p){o.getVertexPosition(d,Cc),o.getVertexPosition(m,wc),o.getVertexPosition(p,Dc);const x=nT(o,t,i,s,Cc,wc,Dc,bx);if(x){const v=new K;Ii.getBarycoord(bx,Cc,wc,Dc,v),l&&(x.uv=Ii.getInterpolatedAttribute(l,d,m,p,v,new ae)),c&&(x.uv1=Ii.getInterpolatedAttribute(c,d,m,p,v,new ae)),h&&(x.normal=Ii.getInterpolatedAttribute(h,d,m,p,v,new K),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const g={a:d,b:m,c:p,normal:new K,materialIndex:0};Ii.getNormal(Cc,wc,Dc,g.normal),x.face=g,x.barycoord=v}return x}class FS extends Wn{constructor(t=null,i=1,s=1,l,c,h,d,m,p=Hn,x=Hn,v,g){super(null,h,d,m,p,x,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tx extends li{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const co=new Qe,Ax=new Qe,Oc=[],Rx=new or,iT=new Qe,Cl=new Ln,wl=new Eo;class aT extends Ln{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Tx(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,iT)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new or),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,co),Rx.copy(t.boundingBox).applyMatrix4(co),this.boundingBox.union(Rx)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Eo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,co),wl.copy(t.boundingSphere).applyMatrix4(co),this.boundingSphere.union(wl)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){return this.instanceColor===null?i.setRGB(1,1,1):i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){return i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Cl.geometry=this.geometry,Cl.material=this.material,Cl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wl.copy(this.boundingSphere),wl.applyMatrix4(s),t.ray.intersectsSphere(wl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,co),Ax.multiplyMatrices(s,co),Cl.matrixWorld=Ax,Cl.raycast(t,Oc);for(let h=0,d=Oc.length;h<d;h++){const m=Oc[h];m.instanceId=c,m.object=this,i.push(m)}Oc.length=0}}setColorAt(t,i){return this.instanceColor===null&&(this.instanceColor=new Tx(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,i){return i.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new FS(new Float32Array(l*this.count),l,this.count,bm,Yi));const c=this.morphTexture.source.data.data;let h=0;for(let p=0;p<s.length;p++)h+=s[p];const d=this.geometry.morphTargetsRelative?1:1-h,m=l*t;return c[m]=d,c.set(s,m+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const tr=new Eo,sT=new ae(.5,.5),Pc=new K;class Um{constructor(t=new fa,i=new fa,s=new fa,l=new fa,c=new fa,h=new fa){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=pa,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],x=c[4],v=c[5],g=c[6],y=c[7],R=c[8],w=c[9],M=c[10],S=c[11],I=c[12],X=c[13],C=c[14],U=c[15];if(l[0].setComponents(p-h,y-x,S-R,U-I).normalize(),l[1].setComponents(p+h,y+x,S+R,U+I).normalize(),l[2].setComponents(p+d,y+v,S+w,U+X).normalize(),l[3].setComponents(p-d,y-v,S-w,U-X).normalize(),s)l[4].setComponents(m,g,M,C).normalize(),l[5].setComponents(p-m,y-g,S-M,U-C).normalize();else if(l[4].setComponents(p-m,y-g,S-M,U-C).normalize(),i===pa)l[5].setComponents(p+m,y+g,S+M,U+C).normalize();else if(i===Hl)l[5].setComponents(m,g,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),tr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(t){tr.center.set(0,0,0);const i=sT.distanceTo(t.center);return tr.radius=.7071067811865476+i,tr.applyMatrix4(t.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Pc.x=l.normal.x>0?t.max.x:t.min.x,Pc.y=l.normal.y>0?t.max.y:t.min.y,Pc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vl extends lr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const af=new K,sf=new K,Cx=new Qe,Dl=new lf,Ic=new Eo,mp=new K,wx=new K;class Lm extends Mn{constructor(t=new An,i=new Vl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)af.fromBufferAttribute(i,l-1),sf.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=af.distanceTo(sf);t.setAttribute("lineDistance",new mn(s,1))}else le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ic.copy(s.boundingSphere),Ic.applyMatrix4(l),Ic.radius+=c,t.ray.intersectsSphere(Ic)===!1)return;Cx.copy(l).invert(),Dl.copy(t.ray).applyMatrix4(Cx);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,x=s.index,g=s.attributes.position;if(x!==null){const y=Math.max(0,h.start),R=Math.min(x.count,h.start+h.count);for(let w=y,M=R-1;w<M;w+=p){const S=x.getX(w),I=x.getX(w+1),X=zc(this,t,Dl,m,S,I,w);X&&i.push(X)}if(this.isLineLoop){const w=x.getX(R-1),M=x.getX(y),S=zc(this,t,Dl,m,w,M,R-1);S&&i.push(S)}}else{const y=Math.max(0,h.start),R=Math.min(g.count,h.start+h.count);for(let w=y,M=R-1;w<M;w+=p){const S=zc(this,t,Dl,m,w,w+1,w);S&&i.push(S)}if(this.isLineLoop){const w=zc(this,t,Dl,m,R-1,y,R-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function zc(o,t,i,s,l,c,h){const d=o.geometry.attributes.position;if(af.fromBufferAttribute(d,l),sf.fromBufferAttribute(d,c),i.distanceSqToSegment(af,sf,mp,wx)>s)return;mp.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(mp);if(!(p<t.near||p>t.far))return{distance:p,point:wx.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const Dx=new K,Nx=new K;class HS extends Lm{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Dx.fromBufferAttribute(i,l),Nx.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Dx.distanceTo(Nx);t.setAttribute("lineDistance",new mn(s,1))}else le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class GS extends Wn{constructor(t=[],i=sr,s,l,c,h,d,m,p,x){super(t,i,s,l,c,h,d,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class rT extends Wn{constructor(t,i,s,l,c,h,d,m,p){super(t,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xl extends Wn{constructor(t,i,s=ga,l,c,h,d=Hn,m=Hn,p,x=Va,v=1){if(x!==Va&&x!==ir)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,h,d,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Dm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class oT extends Xl{constructor(t,i=ga,s=sr,l,c,h=Hn,d=Hn,m,p=Va){const x={width:t,height:t,depth:1},v=[x,x,x,x,x,x];super(t,t,i,s,l,c,h,d,m,p),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class VS extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class kl extends An{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],x=[],v=[];let g=0,y=0;R("z","y","x",-1,-1,s,i,t,h,c,0),R("z","y","x",1,-1,s,i,-t,h,c,1),R("x","z","y",1,1,t,s,i,l,h,2),R("x","z","y",1,-1,t,s,-i,l,h,3),R("x","y","z",1,-1,t,i,s,l,c,4),R("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new mn(p,3)),this.setAttribute("normal",new mn(x,3)),this.setAttribute("uv",new mn(v,2));function R(w,M,S,I,X,C,U,D,P,b,L){const H=C/P,q=U/b,Q=C/2,at=U/2,V=D/2,J=P+1,k=b+1;let $=0,ht=0;const st=new K;for(let pt=0;pt<k;pt++){const Et=pt*q-at;for(let jt=0;jt<J;jt++){const kt=jt*H-Q;st[w]=kt*I,st[M]=Et*X,st[S]=V,p.push(st.x,st.y,st.z),st[w]=0,st[M]=0,st[S]=D>0?1:-1,x.push(st.x,st.y,st.z),v.push(jt/P),v.push(1-pt/b),$+=1}}for(let pt=0;pt<b;pt++)for(let Et=0;Et<P;Et++){const jt=g+Et+J*pt,kt=g+Et+J*(pt+1),B=g+(Et+1)+J*(pt+1),mt=g+(Et+1)+J*pt;m.push(jt,kt,mt),m.push(kt,B,mt),ht+=6}d.addGroup(y,ht,L),y+=ht,g+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class uf extends An{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const x=[],v=[],g=[],y=[];let R=0;const w=[],M=s/2;let S=0;I(),h===!1&&(t>0&&X(!0),i>0&&X(!1)),this.setIndex(x),this.setAttribute("position",new mn(v,3)),this.setAttribute("normal",new mn(g,3)),this.setAttribute("uv",new mn(y,2));function I(){const C=new K,U=new K;let D=0;const P=(i-t)/s;for(let b=0;b<=c;b++){const L=[],H=b/c,q=H*(i-t)+t;for(let Q=0;Q<=l;Q++){const at=Q/l,V=at*m+d,J=Math.sin(V),k=Math.cos(V);U.x=q*J,U.y=-H*s+M,U.z=q*k,v.push(U.x,U.y,U.z),C.set(J,P,k).normalize(),g.push(C.x,C.y,C.z),y.push(at,1-H),L.push(R++)}w.push(L)}for(let b=0;b<l;b++)for(let L=0;L<c;L++){const H=w[L][b],q=w[L+1][b],Q=w[L+1][b+1],at=w[L][b+1];(t>0||L!==0)&&(x.push(H,q,at),D+=3),(i>0||L!==c-1)&&(x.push(q,Q,at),D+=3)}p.addGroup(S,D,0),S+=D}function X(C){const U=R,D=new ae,P=new K;let b=0;const L=C===!0?t:i,H=C===!0?1:-1;for(let Q=1;Q<=l;Q++)v.push(0,M*H,0),g.push(0,H,0),y.push(.5,.5),R++;const q=R;for(let Q=0;Q<=l;Q++){const V=Q/l*m+d,J=Math.cos(V),k=Math.sin(V);P.x=L*k,P.y=M*H,P.z=L*J,v.push(P.x,P.y,P.z),g.push(0,H,0),D.x=J*.5+.5,D.y=k*.5*H+.5,y.push(D.x,D.y),R++}for(let Q=0;Q<l;Q++){const at=U+Q,V=q+Q;C===!0?x.push(V,V+1,at):x.push(V+1,V,at),b+=3}p.addGroup(S,b,C===!0?1:2),S+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uf(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Om extends uf{constructor(t=1,i=1,s=32,l=1,c=!1,h=0,d=Math.PI*2){super(0,t,i,s,l,c,h,d),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:d}}static fromJSON(t){return new Om(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wl extends An{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,x=m+1,v=t/d,g=i/m,y=[],R=[],w=[],M=[];for(let S=0;S<x;S++){const I=S*g-h;for(let X=0;X<p;X++){const C=X*v-c;R.push(C,-I,0),w.push(0,0,1),M.push(X/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let I=0;I<d;I++){const X=I+p*S,C=I+p*(S+1),U=I+1+p*(S+1),D=I+1+p*S;y.push(X,C,D),y.push(C,U,D)}this.setIndex(y),this.setAttribute("position",new mn(R,3)),this.setAttribute("normal",new mn(w,3)),this.setAttribute("uv",new mn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wl(t.width,t.height,t.widthSegments,t.heightSegments)}}class Pm extends An{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const x=[],v=new K,g=new K,y=[],R=[],w=[],M=[];for(let S=0;S<=s;S++){const I=[],X=S/s,C=h+X*d,U=t*Math.cos(C),D=Math.sqrt(t*t-U*U);let P=0;S===0&&h===0?P=.5/i:S===s&&m===Math.PI&&(P=-.5/i);for(let b=0;b<=i;b++){const L=b/i,H=l+L*c;v.x=-D*Math.cos(H),v.y=U,v.z=D*Math.sin(H),R.push(v.x,v.y,v.z),g.copy(v).normalize(),w.push(g.x,g.y,g.z),M.push(L+P,1-X),I.push(p++)}x.push(I)}for(let S=0;S<s;S++)for(let I=0;I<i;I++){const X=x[S][I+1],C=x[S][I],U=x[S+1][I],D=x[S+1][I+1];(S!==0||h>0)&&y.push(X,C,D),(S!==s-1||m<Math.PI)&&y.push(C,U,D)}this.setIndex(y),this.setAttribute("position",new mn(R,3)),this.setAttribute("normal",new mn(w,3)),this.setAttribute("uv",new mn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pm(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Mo(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];if(Ux(l))l.isRenderTargetTexture?(le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone();else if(Array.isArray(l))if(Ux(l[0])){const c=[];for(let h=0,d=l.length;h<d;h++)c[h]=l[h].clone();t[i][s]=c}else t[i][s]=l.slice();else t[i][s]=l}}return t}function Jn(o){const t={};for(let i=0;i<o.length;i++){const s=Mo(o[i]);for(const l in s)t[l]=s[l]}return t}function Ux(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function lT(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function XS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ze.workingColorSpace}const uT={clone:Mo,merge:Jn};var cT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class va extends lr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cT,this.fragmentShader=fT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mo(t.uniforms),this.uniformsGroups=lT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const s in t.uniforms){const l=t.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new fe().setHex(l.value);break;case"v2":this.uniforms[s].value=new ae().fromArray(l.value);break;case"v3":this.uniforms[s].value=new K().fromArray(l.value);break;case"v4":this.uniforms[s].value=new un().fromArray(l.value);break;case"m3":this.uniforms[s].value=new _e().fromArray(l.value);break;case"m4":this.uniforms[s].value=new Qe().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class hT extends va{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gp extends lr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dm,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new As,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dT extends lr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pT extends lr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class kS extends Mn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=i}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}class mT extends kS{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}toJSON(t){const i=super.toJSON(t);return i.object.groundColor=this.groundColor.getHex(),i}}const _p=new Qe,Lx=new K,Ox=new K;class gT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Um,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera;Lx.setFromMatrixPosition(t.matrixWorld),i.position.copy(Lx),Ox.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Ox),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(t,i,s,l){_p.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),s.setFromProjectionMatrix(_p,t.coordinateSystem,t.reversedDepth);const c=this._frameExtents,h=l?l.z/c.x:1,d=l?l.w/c.y:1,m=l?l.x/c.x:0,p=l?l.y/c.y:0;t.coordinateSystem===Hl||t.reversedDepth?i.set(.5*h,0,0,.5*h+m,0,.5*d,0,.5*d+p,0,0,1,0,0,0,0,1):i.set(.5*h,0,0,.5*h+m,0,.5*d,0,.5*d+p,0,0,.5,.5,0,0,0,1),i.multiply(_p)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Bc=new K,Fc=new Xa,ua=new K;class WS extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=pa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Bc,Fc,ua),ua.x===1&&ua.y===1&&ua.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bc,Fc,ua.set(1,1,1)).invert()}updateWorldMatrix(t,i,s=!1){super.updateWorldMatrix(t,i,s),this.matrixWorld.decompose(Bc,Fc,ua),ua.x===1&&ua.y===1&&ua.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bc,Fc,ua.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ms=new K,Px=new ae,Ix=new ae;class Oi extends WS{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=pm*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pm*2*Math.atan(Math.tan(Zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ms.x,Ms.y).multiplyScalar(-t/Ms.z),Ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ms.x,Ms.y).multiplyScalar(-t/Ms.z)}getViewSize(t,i){return this.getViewBounds(t,Px,Ix),i.subVectors(Ix,Px)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Zc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Im extends WS{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=x*this.view.offsetY,m=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class _T extends gT{constructor(){super(new Im(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zx extends kS{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new _T}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}const fo=-90,ho=1;class vT extends Mn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Oi(fo,ho,t,i);l.layers=this.layers,this.add(l);const c=new Oi(fo,ho,t,i);c.layers=this.layers,this.add(c);const h=new Oi(fo,ho,t,i);h.layers=this.layers,this.add(h);const d=new Oi(fo,ho,t,i);d.layers=this.layers,this.add(d);const m=new Oi(fo,ho,t,i);m.layers=this.layers,this.add(m);const p=new Oi(fo,ho,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===pa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Hl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,x]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),R=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(s,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(v,g,y),t.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class xT extends Oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Bx=new Qe;class ST{constructor(t,i,s=0,l=1/0){this.ray=new lf(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Nm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,i.projectionMatrix.elements[14]).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Fe("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Bx.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bx),this}intersectObject(t,i=!0,s=[]){return mm(t,this,s,i),s.sort(Fx),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)mm(t[l],this,s,i);return s.sort(Fx),s}}function Fx(o,t){return o.distance-t.distance}function mm(o,t,i,s){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=o.children;for(let h=0,d=c.length;h<d;h++)mm(c[h],t,i,!0)}}class Hx{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=De(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(De(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Vm=class Vm{constructor(t,i,s,l){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let s=0;s<4;s++)this.elements[s]=t[s+i];return this}set(t,i,s,l){const c=this.elements;return c[0]=t,c[2]=i,c[1]=s,c[3]=l,this}};Vm.prototype.isMatrix2=!0;let Gx=Vm;class yT extends HS{constructor(t=10,i=10,s=4473924,l=8947848){s=new fe(s),l=new fe(l);const c=i/2,h=t/i,d=t/2,m=[],p=[];for(let g=0,y=0,R=-d;g<=i;g++,R+=h){m.push(-d,0,R,d,0,R),m.push(R,0,-d,R,0,d);const w=g===c?s:l;w.toArray(p,y),y+=3,w.toArray(p,y),y+=3,w.toArray(p,y),y+=3,w.toArray(p,y),y+=3}const x=new An;x.setAttribute("position",new mn(m,3)),x.setAttribute("color",new mn(p,3));const v=new Vl({vertexColors:!0,toneMapped:!1});super(x,v),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}const Vx=new K;let Hc,vp;class MT extends Mn{constructor(t=new K(0,0,1),i=new K(0,0,0),s=1,l=16776960,c=s*.2,h=c*.2){super(),this.type="ArrowHelper",Hc===void 0&&(Hc=new An,Hc.setAttribute("position",new mn([0,0,0,0,1,0],3)),vp=new Om(.5,1,5,1),vp.translate(0,-.5,0)),this.position.copy(i),this.line=new Lm(Hc,new Vl({color:l,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ln(vp,new Gl({color:l,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(s,c,h)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Vx.set(t.z,0,-t.x).normalize();const i=Math.acos(t.y);this.quaternion.setFromAxisAngle(Vx,i)}}setLength(t,i=t*.2,s=i*.2){this.line.scale.set(1,Math.max(1e-4,t-i),1),this.line.updateMatrix(),this.cone.scale.set(s,i,s),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class ET extends Rs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Xx(o,t,i,s){const l=bT(s);switch(i){case wS:return o*t;case bm:return o*t/l.components*l.byteLength;case Tm:return o*t/l.components*l.byteLength;case rr:return o*t*2/l.components*l.byteLength;case Am:return o*t*2/l.components*l.byteLength;case DS:return o*t*3/l.components*l.byteLength;case qi:return o*t*4/l.components*l.byteLength;case Rm:return o*t*4/l.components*l.byteLength;case kc:case Wc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Yc:case qc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Bp:case Hp:return Math.max(o,16)*Math.max(t,8)/4;case zp:case Fp:return Math.max(o,8)*Math.max(t,8)/2;case Gp:case Vp:case kp:case Wp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Xp:case Kc:case Yp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case qp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Zp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case jp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Kp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Qp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Jp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case $p:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case tm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case em:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case nm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case im:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case am:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case sm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case rm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case om:case lm:case um:return Math.ceil(o/4)*Math.ceil(t/4)*16;case cm:case fm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Qc:case hm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function bT(o){switch(o){case yi:case TS:return{byteLength:1,components:1};case Bl:case AS:case _a:return{byteLength:2,components:1};case Mm:case Em:return{byteLength:2,components:4};case ga:case ym:case Yi:return{byteLength:4,components:1};case RS:case CS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xm}}));typeof window<"u"&&(window.__THREE__?le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function YS(){let o=null,t=!1,i=null,s=null;function l(c,h){s=o.requestAnimationFrame(l),i(c,h)}return{start:function(){t!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function TT(o){const t=new WeakMap;function i(d,m){const p=d.array,x=d.usage,v=p.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,p,x),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,m,p){const x=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,x);else{v.sort((y,R)=>y.start-R.start);let g=0;for(let y=1;y<v.length;y++){const R=v[g],w=v[y];w.start<=R.start+R.count+1?R.count=Math.max(R.count,w.start+w.count-R.start):(++g,v[g]=w)}v.length=g+1;for(let y=0,R=v.length;y<R;y++){const w=v[y];o.bufferSubData(p,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=t.get(d);(!x||x.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var AT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,LT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,PT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,FT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,HT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,YT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ZT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,jT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,KT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,QT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,JT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$T=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n1="gl_FragColor = linearToOutputTexel( gl_FragColor );",i1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,s1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,o1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,u1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,p1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,v1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,x1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,b1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,T1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,A1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,R1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,w1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,I1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,X1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,W1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,j1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,K1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,nA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,uA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_A=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,SA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,TA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,OA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,IA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,WA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$A=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Me={alphahash_fragment:AT,alphahash_pars_fragment:RT,alphamap_fragment:CT,alphamap_pars_fragment:wT,alphatest_fragment:DT,alphatest_pars_fragment:NT,aomap_fragment:UT,aomap_pars_fragment:LT,batching_pars_vertex:OT,batching_vertex:PT,begin_vertex:IT,beginnormal_vertex:zT,bsdfs:BT,iridescence_fragment:FT,bumpmap_pars_fragment:HT,clipping_planes_fragment:GT,clipping_planes_pars_fragment:VT,clipping_planes_pars_vertex:XT,clipping_planes_vertex:kT,color_fragment:WT,color_pars_fragment:YT,color_pars_vertex:qT,color_vertex:ZT,common:jT,cube_uv_reflection_fragment:KT,defaultnormal_vertex:QT,displacementmap_pars_vertex:JT,displacementmap_vertex:$T,emissivemap_fragment:t1,emissivemap_pars_fragment:e1,colorspace_fragment:n1,colorspace_pars_fragment:i1,envmap_fragment:a1,envmap_common_pars_fragment:s1,envmap_pars_fragment:r1,envmap_pars_vertex:o1,envmap_physical_pars_fragment:v1,envmap_vertex:l1,fog_vertex:u1,fog_pars_vertex:c1,fog_fragment:f1,fog_pars_fragment:h1,gradientmap_pars_fragment:d1,lightmap_pars_fragment:p1,lights_lambert_fragment:m1,lights_lambert_pars_fragment:g1,lights_pars_begin:_1,lights_toon_fragment:x1,lights_toon_pars_fragment:S1,lights_phong_fragment:y1,lights_phong_pars_fragment:M1,lights_physical_fragment:E1,lights_physical_pars_fragment:b1,lights_fragment_begin:T1,lights_fragment_maps:A1,lights_fragment_end:R1,lightprobes_pars_fragment:C1,logdepthbuf_fragment:w1,logdepthbuf_pars_fragment:D1,logdepthbuf_pars_vertex:N1,logdepthbuf_vertex:U1,map_fragment:L1,map_pars_fragment:O1,map_particle_fragment:P1,map_particle_pars_fragment:I1,metalnessmap_fragment:z1,metalnessmap_pars_fragment:B1,morphinstance_vertex:F1,morphcolor_vertex:H1,morphnormal_vertex:G1,morphtarget_pars_vertex:V1,morphtarget_vertex:X1,normal_fragment_begin:k1,normal_fragment_maps:W1,normal_pars_fragment:Y1,normal_pars_vertex:q1,normal_vertex:Z1,normalmap_pars_fragment:j1,clearcoat_normal_fragment_begin:K1,clearcoat_normal_fragment_maps:Q1,clearcoat_pars_fragment:J1,iridescence_pars_fragment:$1,opaque_fragment:tA,packing:eA,premultiplied_alpha_fragment:nA,project_vertex:iA,dithering_fragment:aA,dithering_pars_fragment:sA,roughnessmap_fragment:rA,roughnessmap_pars_fragment:oA,shadowmap_pars_fragment:lA,shadowmap_pars_vertex:uA,shadowmap_vertex:cA,shadowmask_pars_fragment:fA,skinbase_vertex:hA,skinning_pars_vertex:dA,skinning_vertex:pA,skinnormal_vertex:mA,specularmap_fragment:gA,specularmap_pars_fragment:_A,tonemapping_fragment:vA,tonemapping_pars_fragment:xA,transmission_fragment:SA,transmission_pars_fragment:yA,uv_pars_fragment:MA,uv_pars_vertex:EA,uv_vertex:bA,worldpos_vertex:TA,background_vert:AA,background_frag:RA,backgroundCube_vert:CA,backgroundCube_frag:wA,cube_vert:DA,cube_frag:NA,depth_vert:UA,depth_frag:LA,distance_vert:OA,distance_frag:PA,equirect_vert:IA,equirect_frag:zA,linedashed_vert:BA,linedashed_frag:FA,meshbasic_vert:HA,meshbasic_frag:GA,meshlambert_vert:VA,meshlambert_frag:XA,meshmatcap_vert:kA,meshmatcap_frag:WA,meshnormal_vert:YA,meshnormal_frag:qA,meshphong_vert:ZA,meshphong_frag:jA,meshphysical_vert:KA,meshphysical_frag:QA,meshtoon_vert:JA,meshtoon_frag:$A,points_vert:tR,points_frag:eR,shadow_vert:nR,shadow_frag:iR,sprite_vert:aR,sprite_frag:sR},Ht={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},ha={basic:{uniforms:Jn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:Jn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:Jn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:Jn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:Jn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new fe(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:Jn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:Jn([Ht.points,Ht.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:Jn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:Jn([Ht.common,Ht.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:Jn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:Jn([Ht.sprite,Ht.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distance:{uniforms:Jn([Ht.common,Ht.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distance_vert,fragmentShader:Me.distance_frag},shadow:{uniforms:Jn([Ht.lights,Ht.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};ha.physical={uniforms:Jn([ha.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const Gc={r:0,b:0,g:0},rR=new Qe,qS=new _e;qS.set(-1,0,0,0,1,0,0,0,1);function oR(o,t,i,s,l,c){const h=new fe(0);let d=l===!0?0:1,m,p,x=null,v=0,g=null;function y(I){let X=I.isScene===!0?I.background:null;if(X&&X.isTexture){const C=I.backgroundBlurriness>0;X=t.get(X,C)}return X}function R(I){let X=!1;const C=y(I);C===null?M(h,d):C&&C.isColor&&(M(C,1),X=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||X)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(I,X){const C=y(X);C&&(C.isCubeTexture||C.mapping===of)?(p===void 0&&(p=new Ln(new kl(1,1,1),new va({name:"BackgroundCubeMaterial",uniforms:Mo(ha.backgroundCube.uniforms),vertexShader:ha.backgroundCube.vertexShader,fragmentShader:ha.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(U,D,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=X.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(rR.makeRotationFromEuler(X.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(qS),p.material.toneMapped=ze.getTransfer(C.colorSpace)!==je,(x!==C||v!==C.version||g!==o.toneMapping)&&(p.material.needsUpdate=!0,x=C,v=C.version,g=o.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Ln(new Wl(2,2),new va({name:"BackgroundMaterial",uniforms:Mo(ha.background.uniforms),vertexShader:ha.background.vertexShader,fragmentShader:ha.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=X.backgroundIntensity,m.material.toneMapped=ze.getTransfer(C.colorSpace)!==je,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(x!==C||v!==C.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,x=C,v=C.version,g=o.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function M(I,X){I.getRGB(Gc,XS(o)),i.buffers.color.setClear(Gc.r,Gc.g,Gc.b,X,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(I,X=1){h.set(I),d=X,M(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(I){d=I,M(h,d)},render:R,addToRenderList:w,dispose:S}}function lR(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function d(q,Q,at,V,J){let k=!1;const $=v(q,V,at,Q);c!==$&&(c=$,p(c.object)),k=y(q,V,at,J),k&&R(q,V,at,J),J!==null&&t.update(J,o.ELEMENT_ARRAY_BUFFER),(k||h)&&(h=!1,C(q,Q,at,V),J!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function m(){return o.createVertexArray()}function p(q){return o.bindVertexArray(q)}function x(q){return o.deleteVertexArray(q)}function v(q,Q,at,V){const J=V.wireframe===!0;let k=s[Q.id];k===void 0&&(k={},s[Q.id]=k);const $=q.isInstancedMesh===!0?q.id:0;let ht=k[$];ht===void 0&&(ht={},k[$]=ht);let st=ht[at.id];st===void 0&&(st={},ht[at.id]=st);let pt=st[J];return pt===void 0&&(pt=g(m()),st[J]=pt),pt}function g(q){const Q=[],at=[],V=[];for(let J=0;J<i;J++)Q[J]=0,at[J]=0,V[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:at,attributeDivisors:V,object:q,attributes:{},index:null}}function y(q,Q,at,V){const J=c.attributes,k=Q.attributes;let $=0;const ht=at.getAttributes();for(const st in ht)if(ht[st].location>=0){const Et=J[st];let jt=k[st];if(jt===void 0&&(st==="instanceMatrix"&&q.instanceMatrix&&(jt=q.instanceMatrix),st==="instanceColor"&&q.instanceColor&&(jt=q.instanceColor)),Et===void 0||Et.attribute!==jt||jt&&Et.data!==jt.data)return!0;$++}return c.attributesNum!==$||c.index!==V}function R(q,Q,at,V){const J={},k=Q.attributes;let $=0;const ht=at.getAttributes();for(const st in ht)if(ht[st].location>=0){let Et=k[st];Et===void 0&&(st==="instanceMatrix"&&q.instanceMatrix&&(Et=q.instanceMatrix),st==="instanceColor"&&q.instanceColor&&(Et=q.instanceColor));const jt={};jt.attribute=Et,Et&&Et.data&&(jt.data=Et.data),J[st]=jt,$++}c.attributes=J,c.attributesNum=$,c.index=V}function w(){const q=c.newAttributes;for(let Q=0,at=q.length;Q<at;Q++)q[Q]=0}function M(q){S(q,0)}function S(q,Q){const at=c.newAttributes,V=c.enabledAttributes,J=c.attributeDivisors;at[q]=1,V[q]===0&&(o.enableVertexAttribArray(q),V[q]=1),J[q]!==Q&&(o.vertexAttribDivisor(q,Q),J[q]=Q)}function I(){const q=c.newAttributes,Q=c.enabledAttributes;for(let at=0,V=Q.length;at<V;at++)Q[at]!==q[at]&&(o.disableVertexAttribArray(at),Q[at]=0)}function X(q,Q,at,V,J,k,$){$===!0?o.vertexAttribIPointer(q,Q,at,J,k):o.vertexAttribPointer(q,Q,at,V,J,k)}function C(q,Q,at,V){w();const J=V.attributes,k=at.getAttributes(),$=Q.defaultAttributeValues;for(const ht in k){const st=k[ht];if(st.location>=0){let pt=J[ht];if(pt===void 0&&(ht==="instanceMatrix"&&q.instanceMatrix&&(pt=q.instanceMatrix),ht==="instanceColor"&&q.instanceColor&&(pt=q.instanceColor)),pt!==void 0){const Et=pt.normalized,jt=pt.itemSize,kt=t.get(pt);if(kt===void 0)continue;const B=kt.buffer,mt=kt.type,At=kt.bytesPerElement,Z=mt===o.INT||mt===o.UNSIGNED_INT||pt.gpuType===ym;if(pt.isInterleavedBufferAttribute){const dt=pt.data,Tt=dt.stride,Nt=pt.offset;if(dt.isInstancedInterleavedBuffer){for(let _t=0;_t<st.locationSize;_t++)S(st.location+_t,dt.meshPerAttribute);q.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let _t=0;_t<st.locationSize;_t++)M(st.location+_t);o.bindBuffer(o.ARRAY_BUFFER,B);for(let _t=0;_t<st.locationSize;_t++)X(st.location+_t,jt/st.locationSize,mt,Et,Tt*At,(Nt+jt/st.locationSize*_t)*At,Z)}else{if(pt.isInstancedBufferAttribute){for(let dt=0;dt<st.locationSize;dt++)S(st.location+dt,pt.meshPerAttribute);q.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let dt=0;dt<st.locationSize;dt++)M(st.location+dt);o.bindBuffer(o.ARRAY_BUFFER,B);for(let dt=0;dt<st.locationSize;dt++)X(st.location+dt,jt/st.locationSize,mt,Et,jt*At,jt/st.locationSize*dt*At,Z)}}else if($!==void 0){const Et=$[ht];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(st.location,Et);break;case 3:o.vertexAttrib3fv(st.location,Et);break;case 4:o.vertexAttrib4fv(st.location,Et);break;default:o.vertexAttrib1fv(st.location,Et)}}}}I()}function U(){L();for(const q in s){const Q=s[q];for(const at in Q){const V=Q[at];for(const J in V){const k=V[J];for(const $ in k)x(k[$].object),delete k[$];delete V[J]}}delete s[q]}}function D(q){if(s[q.id]===void 0)return;const Q=s[q.id];for(const at in Q){const V=Q[at];for(const J in V){const k=V[J];for(const $ in k)x(k[$].object),delete k[$];delete V[J]}}delete s[q.id]}function P(q){for(const Q in s){const at=s[Q];for(const V in at){const J=at[V];if(J[q.id]===void 0)continue;const k=J[q.id];for(const $ in k)x(k[$].object),delete k[$];delete J[q.id]}}}function b(q){for(const Q in s){const at=s[Q],V=q.isInstancedMesh===!0?q.id:0,J=at[V];if(J!==void 0){for(const k in J){const $=J[k];for(const ht in $)x($[ht].object),delete $[ht];delete J[k]}delete at[V],Object.keys(at).length===0&&delete s[Q]}}}function L(){H(),h=!0,c!==l&&(c=l,p(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:L,resetDefaultState:H,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfObject:b,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:M,disableUnusedAttributes:I}}function uR(o,t,i){let s;function l(m){s=m}function c(m,p){o.drawArrays(s,m,p),i.update(p,s,1)}function h(m,p,x){x!==0&&(o.drawArraysInstanced(s,m,p,x),i.update(p,s,x))}function d(m,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,x);let g=0;for(let y=0;y<x;y++)g+=p[y];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function cR(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==qi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const b=P===_a&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==yi&&P!==Yi&&!b&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(le("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),X=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),U=o.getParameter(o.MAX_SAMPLES),D=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:R,maxTextureSize:w,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:I,maxVaryings:X,maxFragmentUniforms:C,maxSamples:U,samples:D}}function fR(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new fa,d=new _e,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||s!==0||l;return l=g,s=v.length,y},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=x(v,g,0)},this.setState=function(v,g,y){const R=v.clippingPlanes,w=v.clipIntersection,M=v.clipShadows,S=o.get(v);if(!l||R===null||R.length===0||c&&!M)c?x(null):p();else{const I=c?0:s,X=I*4;let C=S.clippingState||null;m.value=C,C=x(R,g,X,y);for(let U=0;U!==X;++U)C[U]=i[U];S.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(v,g,y,R){const w=v!==null?v.length:0;let M=null;if(w!==0){if(M=m.value,R!==!0||M===null){const S=y+w*4,I=g.matrixWorldInverse;d.getNormalMatrix(I),(M===null||M.length<S)&&(M=new Float32Array(S));for(let X=0,C=y;X!==w;++X,C+=4)h.copy(v[X]).applyMatrix4(I,d),h.normal.toArray(M,C),M[C+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}const _o=4,hR=6,dR=20,pR=256,Nl=new Im,kx=new fe;let xp=null,Sp=0,yp=0,Mp=!1;const mR=new K,er=new K;class Wx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=mR}=c;xp=this._renderer.getRenderTarget(),Sp=this._renderer.getActiveCubeFace(),yp=this._renderer.getActiveMipmapLevel(),Mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(xp,Sp,yp),this._renderer.xr.enabled=Mp,t.scissorTest=!1,po(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===sr||t.mapping===yo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xp=this._renderer.getRenderTarget(),Sp=this._renderer.getActiveCubeFace(),yp=this._renderer.getActiveMipmapLevel(),Mp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:_a,format:qi,colorSpace:Jc,depthBuffer:!1},l=Yx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yx(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gR(c)),this._blurMaterial=vR(c,t,i),this._ggxMaterial=_R(c,t,i)}return l}_compileMaterial(t){const i=new Ln(new An,t);this._renderer.compile(i,Nl)}_sceneToCubeUV(t,i,s,l,c){const m=new Oi(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(kx),v.toneMapping=ma,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ln(new kl,new Gl({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let S=!1;const I=t.background;I?I.isColor&&(M.color.copy(I),t.background=null,S=!0):(M.color.copy(kx),S=!0);for(let X=0;X<6;X++){const C=X%3;C===0?(m.up.set(0,p[X],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[X],c.y,c.z)):C===1?(m.up.set(0,0,p[X]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[X],c.z)):(m.up.set(0,p[X],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[X]));const U=this._cubeSize;po(l,C*U,X>2?U:0,U,U),v.setRenderTarget(l),S&&v.render(w,m),v.render(t,m)}v.toneMapping=y,v.autoClear=g,t.background=I}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===sr||t.mapping===yo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qx());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;po(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Nl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),v=Math.sqrt(p*p-x*x),g=p*1.25,y=v*g,{_lodMax:R}=this,w=this._sizeLods[s],M=3*w*(s>R-_o?s-R+_o:0),S=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=R-i,po(c,M,S,3*w,2*w),l.setRenderTarget(c),l.render(d,Nl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=R-s,po(t,M,S,3*w,2*w),l.setRenderTarget(t),l.render(d,Nl)}_blur(t,i,s,l){const c=this._pingPongRenderTarget,h=Math.min(l,Math.PI)/Math.SQRT2;this._blurPass(t,c,i,s,h),this._blurPass(c,t,s,s,h)}_blurPass(t,i,s,l,c){const h=this._renderer,d=this._blurMaterial,m=this._lodMeshes[l];m.material=d;const p=d.uniforms;p.envMap.value=t.texture,p.sigma.value=c,p.mipInt.value=this._lodMax-s;const x=this._sizeLods[l],v=3*x*(l>this._lodMax-_o?l-this._lodMax+_o:0),g=4*(this._cubeSize-x);po(i,v,g,3*x,2*x),h.setRenderTarget(i),h.render(m,Nl)}}function gR(o){const t=[],i=[];let s=o;const l=o-_o+1+hR;for(let c=0;c<l;c++){const h=Math.pow(2,s);t.push(h);const d=1/(h-2),m=-d,p=1+d,x=[m,m,p,m,p,p,m,m,p,p,m,p],v=6,g=6,y=3,R=new Float32Array(y*g*v),w=new Float32Array(y*g*v);for(let S=0;S<v;S++){const I=S%3*2/3-1,X=S>2?0:-1,C=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];R.set(C,y*g*S);for(let U=0;U<g;U++){const D=x[U*2]*2-1,P=x[U*2+1]*2-1;S===0?er.set(1,P,D):S===1?er.set(-D,1,-P):S===2?er.set(-D,P,1):S===3?er.set(-1,P,-D):S===4?er.set(-D,-1,P):er.set(D,P,-1),er.toArray(w,(S*g+U)*y)}}const M=new An;M.setAttribute("position",new li(R,y)),M.setAttribute("outputDirection",new li(w,y)),i.push(new Ln(M,null)),s>_o&&s--}return{lodMeshes:i,sizeLods:t}}function Yx(o,t,i){const s=new Zi(o,t,i);return s.texture.mapping=of,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function po(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function _R(o,t,i){return new va({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function vR(o,t,i){return new va({name:"SphericalGaussianBlur",defines:{SAMPLES:dR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:cf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function qx(){return new va({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Zx(){return new va({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function cf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class ZS extends Zi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new GS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new kl(5,5,5),c=new va({name:"CubemapFromEquirect",uniforms:Mo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:oi,blending:Ha});c.uniforms.tEquirect.value=i;const h=new Ln(l,c),d=i.minFilter;return i.minFilter===nr&&(i.minFilter=kn),new vT(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}function xR(o){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?h(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===Xd||y===kd)if(t.has(g)){const R=t.get(g).texture;return d(R,g.mapping)}else{const R=g.image;if(R&&R.height>0){const w=new ZS(R.height);return w.fromEquirectangularTexture(o,g),t.set(g,w),g.addEventListener("dispose",p),d(w.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const y=g.mapping,R=y===Xd||y===kd,w=y===sr||y===yo;if(R||w){let M=i.get(g);const S=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new Wx(o)),M=R?s.fromEquirectangular(g,M):s.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),M.texture;if(M!==void 0)return M.texture;{const I=g.image;return R&&I&&I.height>0||w&&I&&m(I)?(s===null&&(s=new Wx(o)),M=R?s.fromEquirectangular(g):s.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,i.set(g,M),g.addEventListener("dispose",x),M.texture):null}}}return g}function d(g,y){return y===Xd?g.mapping=sr:y===kd&&(g.mapping=yo),g}function m(g){let y=0;const R=6;for(let w=0;w<R;w++)g[w]!==void 0&&y++;return y===R}function p(g){const y=g.target;y.removeEventListener("dispose",p);const R=t.get(y);R!==void 0&&(t.delete(y),R.dispose())}function x(g){const y=g.target;y.removeEventListener("dispose",x);const R=i.get(y);R!==void 0&&(i.delete(y),R.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function SR(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&xo("WebGLRenderer: "+s+" extension not supported."),l}}}function yR(o,t,i,s){const l={},c=new WeakMap;function h(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const R in g.attributes)t.remove(g.attributes[R]);g.removeEventListener("dispose",h),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function d(v,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const y in g)t.update(g[y],o.ARRAY_BUFFER)}function p(v){const g=[],y=v.index,R=v.attributes.position;let w=0;if(R===void 0)return;if(y!==null){const I=y.array;w=y.version;for(let X=0,C=I.length;X<C;X+=3){const U=I[X+0],D=I[X+1],P=I[X+2];g.push(U,D,D,P,P,U)}}else{const I=R.array;w=R.version;for(let X=0,C=I.length/3-1;X<C;X+=3){const U=X+0,D=X+1,P=X+2;g.push(U,D,D,P,P,U)}}const M=new(R.count>=65535?IS:PS)(g,1);M.version=w;const S=c.get(v);S&&t.remove(S),c.set(v,M)}function x(v){const g=c.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:x}}function MR(o,t,i){let s;function l(v){s=v}let c,h;function d(v){c=v.type,h=v.bytesPerElement}function m(v,g){o.drawElements(s,g,c,v*h),i.update(g,s,1)}function p(v,g,y){y!==0&&(o.drawElementsInstanced(s,g,c,v*h,y),i.update(g,s,y))}function x(v,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,v,0,y);let w=0;for(let M=0;M<y;M++)w+=g[M];i.update(w,s,1)}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=x}function ER(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:Fe("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function bR(o,t,i){const s=new WeakMap,l=new un;function c(h,d,m){const p=h.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=x!==void 0?x.length:0;let g=s.get(d);if(g===void 0||g.count!==v){let L=function(){P.dispose(),s.delete(d),d.removeEventListener("dispose",L)};g!==void 0&&g.texture.dispose();const y=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let X=0;y===!0&&(X=1),R===!0&&(X=2),w===!0&&(X=3);let C=d.attributes.position.count*X,U=1;C>t.maxTextureSize&&(U=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const D=new Float32Array(C*U*4*v),P=new LS(D,C,U,v);P.type=Yi,P.needsUpdate=!0;const b=X*4;for(let H=0;H<v;H++){const q=M[H],Q=S[H],at=I[H],V=C*U*4*H;for(let J=0;J<q.count;J++){const k=J*b;y===!0&&(l.fromBufferAttribute(q,J),D[V+k+0]=l.x,D[V+k+1]=l.y,D[V+k+2]=l.z,D[V+k+3]=0),R===!0&&(l.fromBufferAttribute(Q,J),D[V+k+4]=l.x,D[V+k+5]=l.y,D[V+k+6]=l.z,D[V+k+7]=0),w===!0&&(l.fromBufferAttribute(at,J),D[V+k+8]=l.x,D[V+k+9]=l.y,D[V+k+10]=l.z,D[V+k+11]=at.itemSize===4?l.w:1)}}g={count:v,texture:P,size:new ae(C,U)},s.set(d,g),d.addEventListener("dispose",L)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let y=0;for(let w=0;w<p.length;w++)y+=p[w];const R=d.morphTargetsRelative?1:1-y;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function TR(o,t,i,s,l){let c=new WeakMap;function h(p){const x=l.render.frame,v=p.geometry,g=t.get(p,v);if(c.get(g)!==x&&(t.update(g),c.set(g,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==x&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),c.set(p,x))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==x&&(y.update(),c.set(y,x))}return g}function d(){c=new WeakMap}function m(p){const x=p.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:h,dispose:d}}const AR={[vS]:"LINEAR_TONE_MAPPING",[xS]:"REINHARD_TONE_MAPPING",[SS]:"CINEON_TONE_MAPPING",[Sm]:"ACES_FILMIC_TONE_MAPPING",[MS]:"AGX_TONE_MAPPING",[ES]:"NEUTRAL_TONE_MAPPING",[yS]:"CUSTOM_TONE_MAPPING"};function RR(o,t,i,s,l,c){const h=new Zi(t,i,{type:o,depthBuffer:l,stencilBuffer:c,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,m=null;const p=new An;p.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new mn([0,2,0,0,2,0],2));const x=new hT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new Ln(p,x),g=new Im(-1,1,1,-1,0,1);let y=null,R=null,w=!1,M,S=null,I=[],X=!1;this.setSize=function(C,U){h.setSize(C,U),d!==null&&d.setSize(C,U),m!==null&&m.setSize(C,U);for(let D=0;D<I.length;D++){const P=I[D];P.setSize&&P.setSize(C,U)}},this.setEffects=function(C){I=C,X=I.length>0&&I[0].isRenderPass===!0;const U=h.width,D=h.height;I.length>0&&d===null&&(d=new Zi(U,D,{type:_a,depthBuffer:!1,stencilBuffer:!1}),m=new Zi(U,D,{type:_a,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<I.length;P++){const b=I[P];b.setSize&&b.setSize(U,D)}},this.begin=function(C,U){if(w||C.toneMapping===ma&&I.length===0)return!1;if(S=U,U!==null){const D=U.width,P=U.height;(h.width!==D||h.height!==P)&&this.setSize(D,P)}return X===!1&&C.setRenderTarget(h),M=C.toneMapping,C.toneMapping=ma,!0},this.hasRenderPass=function(){return X},this.end=function(C,U){C.toneMapping=M,w=!0;let D=h,P=d;for(let b=0;b<I.length;b++){const L=I[b];L.enabled!==!1&&(L.render(C,P,D,U),L.needsSwap!==!1&&(D=P,P=P===d?m:d))}if(y!==C.outputColorSpace||R!==C.toneMapping){y=C.outputColorSpace,R=C.toneMapping,x.defines={},ze.getTransfer(y)===je&&(x.defines.SRGB_TRANSFER="");const b=AR[R];b&&(x.defines[b]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(S),C.render(v,g),S=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){h.dispose(),d!==null&&d.dispose(),m!==null&&m.dispose(),p.dispose(),x.dispose()}}const jS=new Wn,gm=new Xl(1,1),KS=new LS,QS=new Fb,JS=new GS,jx=[],Kx=[],Qx=new Float32Array(16),Jx=new Float32Array(9),$x=new Float32Array(4);function bo(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=jx[l];if(c===void 0&&(c=new Float32Array(l),jx[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function Rn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function Cn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function ff(o,t){let i=Kx[t];i===void 0&&(i=new Int32Array(t),Kx[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function CR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function wR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rn(i,t))return;o.uniform2fv(this.addr,t),Cn(i,t)}}function DR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Rn(i,t))return;o.uniform3fv(this.addr,t),Cn(i,t)}}function NR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rn(i,t))return;o.uniform4fv(this.addr,t),Cn(i,t)}}function UR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Rn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Cn(i,t)}else{if(Rn(i,s))return;$x.set(s),o.uniformMatrix2fv(this.addr,!1,$x),Cn(i,s)}}function LR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Rn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Cn(i,t)}else{if(Rn(i,s))return;Jx.set(s),o.uniformMatrix3fv(this.addr,!1,Jx),Cn(i,s)}}function OR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(Rn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Cn(i,t)}else{if(Rn(i,s))return;Qx.set(s),o.uniformMatrix4fv(this.addr,!1,Qx),Cn(i,s)}}function PR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function IR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rn(i,t))return;o.uniform2iv(this.addr,t),Cn(i,t)}}function zR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Rn(i,t))return;o.uniform3iv(this.addr,t),Cn(i,t)}}function BR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rn(i,t))return;o.uniform4iv(this.addr,t),Cn(i,t)}}function FR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function HR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Rn(i,t))return;o.uniform2uiv(this.addr,t),Cn(i,t)}}function GR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Rn(i,t))return;o.uniform3uiv(this.addr,t),Cn(i,t)}}function VR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Rn(i,t))return;o.uniform4uiv(this.addr,t),Cn(i,t)}}function XR(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(gm.compareFunction=i.isReversedDepthBuffer()?wm:Cm,c=gm):c=jS,i.setTexture2D(t||c,l)}function kR(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||QS,l)}function WR(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||JS,l)}function YR(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||KS,l)}function qR(o){switch(o){case 5126:return CR;case 35664:return wR;case 35665:return DR;case 35666:return NR;case 35674:return UR;case 35675:return LR;case 35676:return OR;case 5124:case 35670:return PR;case 35667:case 35671:return IR;case 35668:case 35672:return zR;case 35669:case 35673:return BR;case 5125:return FR;case 36294:return HR;case 36295:return GR;case 36296:return VR;case 35678:case 36198:case 36298:case 36306:case 35682:return XR;case 35679:case 36299:case 36307:return kR;case 35680:case 36300:case 36308:case 36293:return WR;case 36289:case 36303:case 36311:case 36292:return YR}}function ZR(o,t){o.uniform1fv(this.addr,t)}function jR(o,t){const i=bo(t,this.size,2);o.uniform2fv(this.addr,i)}function KR(o,t){const i=bo(t,this.size,3);o.uniform3fv(this.addr,i)}function QR(o,t){const i=bo(t,this.size,4);o.uniform4fv(this.addr,i)}function JR(o,t){const i=bo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function $R(o,t){const i=bo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function tC(o,t){const i=bo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function eC(o,t){o.uniform1iv(this.addr,t)}function nC(o,t){o.uniform2iv(this.addr,t)}function iC(o,t){o.uniform3iv(this.addr,t)}function aC(o,t){o.uniform4iv(this.addr,t)}function sC(o,t){o.uniform1uiv(this.addr,t)}function rC(o,t){o.uniform2uiv(this.addr,t)}function oC(o,t){o.uniform3uiv(this.addr,t)}function lC(o,t){o.uniform4uiv(this.addr,t)}function uC(o,t,i){const s=this.cache,l=t.length,c=ff(i,l);Rn(s,c)||(o.uniform1iv(this.addr,c),Cn(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=gm:h=jS;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function cC(o,t,i){const s=this.cache,l=t.length,c=ff(i,l);Rn(s,c)||(o.uniform1iv(this.addr,c),Cn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||QS,c[h])}function fC(o,t,i){const s=this.cache,l=t.length,c=ff(i,l);Rn(s,c)||(o.uniform1iv(this.addr,c),Cn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||JS,c[h])}function hC(o,t,i){const s=this.cache,l=t.length,c=ff(i,l);Rn(s,c)||(o.uniform1iv(this.addr,c),Cn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||KS,c[h])}function dC(o){switch(o){case 5126:return ZR;case 35664:return jR;case 35665:return KR;case 35666:return QR;case 35674:return JR;case 35675:return $R;case 35676:return tC;case 5124:case 35670:return eC;case 35667:case 35671:return nC;case 35668:case 35672:return iC;case 35669:case 35673:return aC;case 5125:return sC;case 36294:return rC;case 36295:return oC;case 36296:return lC;case 35678:case 36198:case 36298:case 36306:case 35682:return uC;case 35679:case 36299:case 36307:return cC;case 35680:case 36300:case 36308:case 36293:return fC;case 36289:case 36303:case 36311:case 36292:return hC}}class pC{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=qR(i.type)}}class mC{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=dC(i.type)}}class gC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Ep=/(\w+)(\])?(\[|\.)?/g;function tS(o,t){o.seq.push(t),o.map[t.id]=t}function _C(o,t,i){const s=o.name,l=s.length;for(Ep.lastIndex=0;;){const c=Ep.exec(s),h=Ep.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){tS(i,p===void 0?new pC(d,o,t):new mC(d,o,t));break}else{let v=i.map[d];v===void 0&&(v=new gC(d),tS(i,v)),i=v}}}class jc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);_C(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function eS(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const vC=37297;let xC=0;function SC(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const nS=new _e;function yC(o){ze._getMatrix(nS,ze.workingColorSpace,o);const t=`mat3( ${nS.elements.map(i=>i.toFixed(4))} )`;switch(ze.getTransfer(o)){case $c:return[t,"LinearTransferOETF"];case je:return[t,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function iS(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+SC(o.getShaderSource(t),d)}else return c}function MC(o,t){const i=yC(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const EC={[vS]:"Linear",[xS]:"Reinhard",[SS]:"Cineon",[Sm]:"ACESFilmic",[MS]:"AgX",[ES]:"Neutral",[yS]:"Custom"};function bC(o,t){const i=EC[t];return i===void 0?(le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Vc=new K;function TC(){ze.getLuminanceCoefficients(Vc);const o=Vc.x.toFixed(4),t=Vc.y.toFixed(4),i=Vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ol).join(`
`)}function RC(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function CC(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Ol(o){return o!==""}function aS(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sS(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const wC=/^[ \t]*#include +<([\w\d./]+)>/gm;function _m(o){return o.replace(wC,NC)}const DC=new Map;function NC(o,t){let i=Me[t];if(i===void 0){const s=DC.get(t);if(s!==void 0)i=Me[s],le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return _m(i)}const UC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rS(o){return o.replace(UC,LC)}function LC(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function oS(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const OC={[Pl]:"SHADOWMAP_TYPE_PCF",[Ll]:"SHADOWMAP_TYPE_VSM"};function PC(o){return OC[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const IC={[sr]:"ENVMAP_TYPE_CUBE",[yo]:"ENVMAP_TYPE_CUBE",[of]:"ENVMAP_TYPE_CUBE_UV"};function zC(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":IC[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const BC={[yo]:"ENVMAP_MODE_REFRACTION"};function FC(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":BC[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const HC={[_S]:"ENVMAP_BLENDING_MULTIPLY",[gb]:"ENVMAP_BLENDING_MIX",[_b]:"ENVMAP_BLENDING_ADD"};function GC(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":HC[o.combine]||"ENVMAP_BLENDING_NONE"}function VC(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function XC(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=PC(i),p=zC(i),x=FC(i),v=GC(i),g=VC(i),y=AC(i),R=RC(c),w=l.createProgram();let M,S,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ol).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ol).join(`
`),S.length>0&&(S+=`
`)):(M=[oS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ol).join(`
`),S=[oS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ma?"#define TONE_MAPPING":"",i.toneMapping!==ma?Me.tonemapping_pars_fragment:"",i.toneMapping!==ma?bC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,MC("linearToOutputTexel",i.outputColorSpace),TC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ol).join(`
`)),h=_m(h),h=aS(h,i),h=sS(h,i),d=_m(d),d=aS(d,i),d=sS(d,i),h=rS(h),d=rS(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===ox?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ox?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const X=I+M+h,C=I+S+d,U=eS(l,l.VERTEX_SHADER,X),D=eS(l,l.FRAGMENT_SHADER,C);l.attachShader(w,U),l.attachShader(w,D),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function P(q){if(o.debug.checkShaderErrors){const Q=l.getProgramInfoLog(w)||"",at=l.getShaderInfoLog(U)||"",V=l.getShaderInfoLog(D)||"",J=Q.trim(),k=at.trim(),$=V.trim();let ht=!0,st=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,U,D);else{const pt=iS(l,U,"vertex"),Et=iS(l,D,"fragment");Fe("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+J+`
`+pt+`
`+Et)}else J!==""?le("WebGLProgram: Program Info Log:",J):(k===""||$==="")&&(st=!1);st&&(q.diagnostics={runnable:ht,programLog:J,vertexShader:{log:k,prefix:M},fragmentShader:{log:$,prefix:S}})}l.deleteShader(U),l.deleteShader(D),b=new jc(l,w),L=CC(l,w)}let b;this.getUniforms=function(){return b===void 0&&P(this),b};let L;this.getAttributes=function(){return L===void 0&&P(this),L};let H=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=l.getProgramParameter(w,vC)),H},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=xC++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=U,this.fragmentShader=D,this}let kC=0;class WC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,s){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new YC(t),i.set(t,s)),s}}class YC{constructor(t){this.id=kC++,this.code=t,this.usedTimes=0}}function qC(o){return o===rr||o===Kc||o===Qc}function ZC(o,t,i,s,l,c){const h=new Nm,d=new WC,m=new Set,p=[],x=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(b){return m.add(b),b===0?"uv":`uv${b}`}function w(b,L,H,q,Q,at){const V=q.fog,J=Q.geometry,k=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?q.environment:null,$=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ht=t.get(b.envMap||k,$),st=ht&&ht.mapping===of?ht.image.height:null,pt=y[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&le("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const Et=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,jt=Et!==void 0?Et.length:0;let kt=0;J.morphAttributes.position!==void 0&&(kt=1),J.morphAttributes.normal!==void 0&&(kt=2),J.morphAttributes.color!==void 0&&(kt=3);let B,mt,At,Z;if(pt){const Pe=ha[pt];B=Pe.vertexShader,mt=Pe.fragmentShader}else{B=b.vertexShader,mt=b.fragmentShader;const Pe=d.getVertexShaderStage(b),me=d.getFragmentShaderStage(b);d.update(b,Pe,me),At=Pe.id,Z=me.id}const dt=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),Nt=Q.isInstancedMesh===!0,_t=Q.isBatchedMesh===!0,Rt=!!b.map,He=!!b.matcap,pe=!!ht,xe=!!b.aoMap,Ee=!!b.lightMap,ee=!!b.bumpMap&&b.wireframe===!1,ie=!!b.normalMap,Ge=!!b.displacementMap,cn=!!b.emissiveMap,Oe=!!b.metalnessMap,Je=!!b.roughnessMap,N=b.anisotropy>0,te=b.clearcoat>0,ue=b.dispersion>0,O=b.retroreflectivity>0,E=b.iridescence>0,nt=b.sheen>0,ut=b.transmission>0,gt=N&&!!b.anisotropyMap,Ct=te&&!!b.clearcoatMap,Ut=te&&!!b.clearcoatNormalMap,vt=te&&!!b.clearcoatRoughnessMap,Mt=E&&!!b.iridescenceMap,Dt=E&&!!b.iridescenceThicknessMap,$t=nt&&!!b.sheenColorMap,zt=nt&&!!b.sheenRoughnessMap,It=!!b.specularMap,Xt=!!b.specularColorMap,se=!!b.specularIntensityMap,he=ut&&!!b.transmissionMap,Y=ut&&!!b.thicknessMap,wt=!!b.gradientMap,yt=!!b.alphaMap,Lt=b.alphaTest>0,Vt=!!b.alphaHash,bt=!!b.extensions;let Jt=ma;b.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Jt=o.toneMapping);const Gt={shaderID:pt,shaderType:b.type,shaderName:b.name,vertexShader:B,fragmentShader:mt,defines:b.defines,customVertexShaderID:At,customFragmentShaderID:Z,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:_t,batchingColor:_t&&Q._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&Q.instanceColor!==null,instancingMorph:Nt&&Q.morphTexture!==null,outputColorSpace:dt===null?o.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:ze.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Rt,matcap:He,envMap:pe,envMapMode:pe&&ht.mapping,envMapCubeUVHeight:st,aoMap:xe,lightMap:Ee,bumpMap:ee,normalMap:ie,displacementMap:Ge,emissiveMap:cn,normalMapObjectSpace:ie&&b.normalMapType===Sb,normalMapTangentSpace:ie&&b.normalMapType===dm,packedNormalMap:ie&&b.normalMapType===dm&&qC(b.normalMap.format),metalnessMap:Oe,roughnessMap:Je,anisotropy:N,anisotropyMap:gt,clearcoat:te,clearcoatMap:Ct,clearcoatNormalMap:Ut,clearcoatRoughnessMap:vt,dispersion:ue,retroreflection:O,iridescence:E,iridescenceMap:Mt,iridescenceThicknessMap:Dt,sheen:nt,sheenColorMap:$t,sheenRoughnessMap:zt,specularMap:It,specularColorMap:Xt,specularIntensityMap:se,transmission:ut,transmissionMap:he,thicknessMap:Y,gradientMap:wt,opaque:b.transparent===!1&&b.blending===Il&&b.alphaToCoverage===!1,alphaMap:yt,alphaTest:Lt,alphaHash:Vt,combine:b.combine,mapUv:Rt&&R(b.map.channel),aoMapUv:xe&&R(b.aoMap.channel),lightMapUv:Ee&&R(b.lightMap.channel),bumpMapUv:ee&&R(b.bumpMap.channel),normalMapUv:ie&&R(b.normalMap.channel),displacementMapUv:Ge&&R(b.displacementMap.channel),emissiveMapUv:cn&&R(b.emissiveMap.channel),metalnessMapUv:Oe&&R(b.metalnessMap.channel),roughnessMapUv:Je&&R(b.roughnessMap.channel),anisotropyMapUv:gt&&R(b.anisotropyMap.channel),clearcoatMapUv:Ct&&R(b.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&R(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&R(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&R(b.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&R(b.iridescenceThicknessMap.channel),sheenColorMapUv:$t&&R(b.sheenColorMap.channel),sheenRoughnessMapUv:zt&&R(b.sheenRoughnessMap.channel),specularMapUv:It&&R(b.specularMap.channel),specularColorMapUv:Xt&&R(b.specularColorMap.channel),specularIntensityMapUv:se&&R(b.specularIntensityMap.channel),transmissionMapUv:he&&R(b.transmissionMap.channel),thicknessMapUv:Y&&R(b.thicknessMap.channel),alphaMapUv:yt&&R(b.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ie||N),vertexNormals:!!J.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!J.attributes.uv&&(Rt||yt),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||J.attributes.normal===void 0&&ie===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Tt,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:jt,morphTextureStride:kt,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:at.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:Jt,decodeVideoTexture:Rt&&b.map.isVideoTexture===!0&&ze.getTransfer(b.map.colorSpace)===je,decodeVideoTextureEmissive:cn&&b.emissiveMap.isVideoTexture===!0&&ze.getTransfer(b.emissiveMap.colorSpace)===je,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Pi,flipSided:b.side===oi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:bt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&b.extensions.multiDraw===!0||_t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Gt.vertexUv1s=m.has(1),Gt.vertexUv2s=m.has(2),Gt.vertexUv3s=m.has(3),m.clear(),Gt}function M(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const H in b.defines)L.push(H),L.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(S(L,b),I(L,b),L.push(o.outputColorSpace)),L.push(b.customProgramCacheKey),L.join()}function S(b,L){b.push(L.precision),b.push(L.outputColorSpace),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.anisotropyMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numSunLights),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numSunLightShadows),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.numLightProbes),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function I(b,L){h.disableAll(),L.instancing&&h.enable(0),L.instancingColor&&h.enable(1),L.instancingMorph&&h.enable(2),L.matcap&&h.enable(3),L.envMap&&h.enable(4),L.normalMapObjectSpace&&h.enable(5),L.normalMapTangentSpace&&h.enable(6),L.clearcoat&&h.enable(7),L.iridescence&&h.enable(8),L.alphaTest&&h.enable(9),L.vertexColors&&h.enable(10),L.vertexAlphas&&h.enable(11),L.vertexUv1s&&h.enable(12),L.vertexUv2s&&h.enable(13),L.vertexUv3s&&h.enable(14),L.vertexTangents&&h.enable(15),L.anisotropy&&h.enable(16),L.alphaHash&&h.enable(17),L.batching&&h.enable(18),L.dispersion&&h.enable(19),L.retroreflection&&h.enable(24),L.batchingColor&&h.enable(20),L.gradientMap&&h.enable(21),L.packedNormalMap&&h.enable(22),L.vertexNormals&&h.enable(23),b.push(h.mask),h.disableAll(),L.fog&&h.enable(0),L.useFog&&h.enable(1),L.flatShading&&h.enable(2),L.logarithmicDepthBuffer&&h.enable(3),L.reversedDepthBuffer&&h.enable(4),L.skinning&&h.enable(5),L.morphTargets&&h.enable(6),L.morphNormals&&h.enable(7),L.morphColors&&h.enable(8),L.premultipliedAlpha&&h.enable(9),L.shadowMapEnabled&&h.enable(10),L.doubleSided&&h.enable(11),L.flipSided&&h.enable(12),L.useDepthPacking&&h.enable(13),L.dithering&&h.enable(14),L.transmission&&h.enable(15),L.sheen&&h.enable(16),L.opaque&&h.enable(17),L.pointsUvs&&h.enable(18),L.decodeVideoTexture&&h.enable(19),L.decodeVideoTextureEmissive&&h.enable(20),L.alphaToCoverage&&h.enable(21),L.numLightProbeGrids>0&&h.enable(22),L.hasPositionAttribute&&h.enable(23),b.push(h.mask)}function X(b){const L=y[b.type];let H;if(L){const q=ha[L];H=uT.clone(q.uniforms)}else H=b.uniforms;return H}function C(b,L){let H=x.get(L);return H!==void 0?++H.usedTimes:(H=new XC(o,L,b,l),p.push(H),x.set(L,H)),H}function U(b){if(--b.usedTimes===0){const L=p.indexOf(b);p[L]=p[p.length-1],p.pop(),x.delete(b.cacheKey),b.destroy()}}function D(b){d.remove(b)}function P(){d.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:X,acquireProgram:C,releaseProgram:U,releaseShaderCache:D,programs:p,dispose:P}}function jC(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function KC(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function lS(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function uS(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function d(g,y,R,w,M,S){let I=o[t];return I===void 0?(I={id:g.id,object:g,geometry:y,material:R,materialVariant:h(g),groupOrder:w,renderOrder:g.renderOrder,z:M,group:S},o[t]=I):(I.id=g.id,I.object=g,I.geometry=y,I.material=R,I.materialVariant=h(g),I.groupOrder=w,I.renderOrder=g.renderOrder,I.z=M,I.group=S),t++,I}function m(g,y,R,w,M,S,I){I.reversedDepth===!0&&(M=-M);const X=d(g,y,R,w,M,S);R.transmission>0?s.push(X):R.transparent===!0?l.push(X):i.push(X)}function p(g,y,R,w,M,S){const I=d(g,y,R,w,M,S);R.transmission>0?s.unshift(I):R.transparent===!0?l.unshift(I):i.unshift(I)}function x(g,y){i.length>1&&i.sort(g||KC),s.length>1&&s.sort(y||lS),l.length>1&&l.sort(y||lS)}function v(){for(let g=t,y=o.length;g<y;g++){const R=o[g];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:v,sort:x}}function QC(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new uS,o.set(s,[h])):l>=c.length?(h=new uS,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function JC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new K,color:new fe};break;case"SpotLight":i={position:new K,direction:new K,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":i={color:new fe,position:new K,halfWidth:new K,halfHeight:new K};break}return o[t.id]=i,i}}}function $C(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let tw=0;function ew(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function nw(o){const t=new JC,i=$C(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new K);const l=new K,c=new Qe,h=new Qe;function d(p){let x=0,v=0,g=0;for(let Q=0;Q<9;Q++)s.probe[Q].set(0,0,0);let y=0,R=0,w=0,M=0,S=0,I=0,X=0,C=0,U=0,D=0,P=0,b=0,L=0,H=0;p.sort(ew);for(let Q=0,at=p.length;Q<at;Q++){const V=p[Q],J=V.color,k=V.intensity,$=V.distance;let ht=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===rr?ht=V.shadow.map.texture:ht=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)x+=J.r*k,v+=J.g*k,g+=J.b*k;else if(V.isLightProbe){for(let st=0;st<9;st++)s.probe[st].addScaledVector(V.sh.coefficients[st],k);H++}else if(V.isSunLight){const st=t.get(V);if(st.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const pt=V.shadow,Et=i.get(V);Et.shadowIntensity=pt.intensity,Et.shadowBias=pt.bias,Et.shadowNormalBias=pt.normalBias,Et.shadowRadius=pt.radius,Et.shadowMapSize.copy(pt.mapSize).multiply(pt.getFrameExtents()),s.sunShadow[R]=Et,s.sunShadowMap[R]=ht;const jt=pt.getViewportCount();for(let kt=0;kt<jt;kt++)s.sunShadowMatrix[w+kt]=pt.getMatrix(kt),s.sunShadowCascade[w+kt]=pt._cascadeData[kt];w+=jt,R++}s.sun[y]=st,y++}else if(V.isDirectionalLight){const st=t.get(V);if(st.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const pt=V.shadow,Et=i.get(V);Et.shadowIntensity=pt.intensity,Et.shadowBias=pt.bias,Et.shadowNormalBias=pt.normalBias,Et.shadowRadius=pt.radius,Et.shadowMapSize=pt.mapSize,s.directionalShadow[M]=Et,s.directionalShadowMap[M]=ht,s.directionalShadowMatrix[M]=V.shadow.matrix,U++}s.directional[M]=st,M++}else if(V.isSpotLight){const st=t.get(V);st.position.setFromMatrixPosition(V.matrixWorld),st.color.copy(J).multiplyScalar(k),st.distance=$,st.coneCos=Math.cos(V.angle),st.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),st.decay=V.decay,s.spot[I]=st;const pt=V.shadow;if(V.map&&(s.spotLightMap[b]=V.map,b++,pt.updateMatrices(V),V.castShadow&&L++),s.spotLightMatrix[I]=pt.matrix,V.castShadow){const Et=i.get(V);Et.shadowIntensity=pt.intensity,Et.shadowBias=pt.bias,Et.shadowNormalBias=pt.normalBias,Et.shadowRadius=pt.radius,Et.shadowMapSize=pt.mapSize,s.spotShadow[I]=Et,s.spotShadowMap[I]=ht,P++}I++}else if(V.isRectAreaLight){const st=t.get(V);st.color.copy(J).multiplyScalar(k),st.halfWidth.set(V.width*.5,0,0),st.halfHeight.set(0,V.height*.5,0),s.rectArea[X]=st,X++}else if(V.isPointLight){const st=t.get(V);if(st.color.copy(V.color).multiplyScalar(V.intensity),st.distance=V.distance,st.decay=V.decay,V.castShadow){const pt=V.shadow,Et=i.get(V);Et.shadowIntensity=pt.intensity,Et.shadowBias=pt.bias,Et.shadowNormalBias=pt.normalBias,Et.shadowRadius=pt.radius,Et.shadowMapSize=pt.mapSize,Et.shadowCameraNear=pt.camera.near,Et.shadowCameraFar=pt.camera.far,s.pointShadow[S]=Et,s.pointShadowMap[S]=ht,s.pointShadowMatrix[S]=V.shadow.matrix,D++}s.point[S]=st,S++}else if(V.isHemisphereLight){const st=t.get(V);st.skyColor.copy(V.color).multiplyScalar(k),st.groundColor.copy(V.groundColor).multiplyScalar(k),s.hemi[C]=st,C++}}X>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=v,s.ambient[2]=g;const q=s.hash;(q.sunLength!==y||q.directionalLength!==M||q.pointLength!==S||q.spotLength!==I||q.rectAreaLength!==X||q.hemiLength!==C||q.numSunShadows!==R||q.numDirectionalShadows!==U||q.numPointShadows!==D||q.numSpotShadows!==P||q.numSpotMaps!==b||q.numLightProbes!==H)&&(s.sun.length=y,s.directional.length=M,s.spot.length=I,s.rectArea.length=X,s.point.length=S,s.hemi.length=C,s.sunShadow.length=R,s.sunShadowMap.length=R,s.sunShadowMatrix.length=w,s.sunShadowCascade.length=w,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.directionalShadowMatrix.length=U,s.pointShadow.length=D,s.pointShadowMap.length=D,s.pointShadowMatrix.length=D,s.spotShadow.length=P,s.spotShadowMap.length=P,s.spotLightMatrix.length=P+b-L,s.spotLightMap.length=b,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=H,q.sunLength=y,q.directionalLength=M,q.pointLength=S,q.spotLength=I,q.rectAreaLength=X,q.hemiLength=C,q.numSunShadows=R,q.numDirectionalShadows=U,q.numPointShadows=D,q.numSpotShadows=P,q.numSpotMaps=b,q.numLightProbes=H,s.version=tw++)}function m(p,x){let v=0,g=0,y=0,R=0,w=0,M=0;const S=x.matrixWorldInverse;for(let I=0,X=p.length;I<X;I++){const C=p[I];if(C.isSunLight){const U=s.sun[v];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(S),v++}else if(C.isDirectionalLight){const U=s.directional[g];U.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),g++}else if(C.isSpotLight){const U=s.spot[R];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),R++}else if(C.isRectAreaLight){const U=s.rectArea[w];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(S),h.identity(),c.copy(C.matrixWorld),c.premultiply(S),h.extractRotation(c),U.halfWidth.set(C.width*.5,0,0),U.halfHeight.set(0,C.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),w++}else if(C.isPointLight){const U=s.point[y];U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(S),y++}else if(C.isHemisphereLight){const U=s.hemi[M];U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(S),M++}}}return{setup:d,setupView:m,state:s}}function cS(o){const t=new nw(o),i=[],s=[],l=[];function c(g){v.camera=g,i.length=0,s.length=0,l.length=0}function h(g){i.push(g)}function d(g){s.push(g)}function m(g){l.push(g)}function p(){t.setup(i)}function x(g){t.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:x,pushLight:h,pushShadow:d,pushLightProbeGrid:m}}function iw(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new cS(o),t.set(l,[d])):c>=h.length?(d=new cS(o),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const aw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rw=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],ow=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],fS=new Qe,Ul=new K,bp=new K;function lw(o,t,i){let s=new Um;const l=new ae,c=new ae,h=new un,d=new dT,m=new pT,p={},x=i.maxTextureSize,v={[ar]:oi,[oi]:ar,[Pi]:Pi},g=new va({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:aw,fragmentShader:sw}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const R=new An;R.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ln(R,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pl;let S=this.type;this.render=function(D,P,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||D.length===0)return;this.type===QE&&(le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Pl);const L=o.getRenderTarget(),H=o.getActiveCubeFace(),q=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(Ha),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const at=S!==this.type;at&&P.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(J=>J.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,J=D.length;V<J;V++){const k=D[V],$=k.shadow;if($===void 0){le("WebGLShadowMap:",k,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;l.copy($.mapSize);const ht=$.getFrameExtents();l.multiply(ht),c.copy($.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/ht.x),l.x=c.x*ht.x,$.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/ht.y),l.y=c.y*ht.y,$.mapSize.y=c.y));const st=o.state.buffers.depth.getReversed();if($.camera._reversedDepth=st,$.map===null||at===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Ll){if(k.isPointLight){le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Zi(l.x,l.y,{format:rr,type:_a,minFilter:kn,magFilter:kn,generateMipmaps:!1}),$.map.texture.name=k.name+".shadowMap",$.map.depthTexture=new Xl(l.x,l.y,Yi),$.map.depthTexture.name=k.name+".shadowMapDepth",$.map.depthTexture.format=Va,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Hn,$.map.depthTexture.magFilter=Hn}else k.isPointLight?($.map=new ZS(l.x),$.map.depthTexture=new oT(l.x,ga)):($.map=new Zi(l.x,l.y),$.map.depthTexture=new Xl(l.x,l.y,ga)),$.map.depthTexture.name=k.name+".shadowMap",$.map.depthTexture.format=Va,this.type===Pl?($.map.depthTexture.compareFunction=st?wm:Cm,$.map.depthTexture.minFilter=kn,$.map.depthTexture.magFilter=kn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Hn,$.map.depthTexture.magFilter=Hn);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==l.x||$.map.height!==l.y)&&$.map.setSize(l.x,l.y);const pt=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();k.isPointLight!==!0&&$.updateMatrices(k,b);for(let Et=0;Et<pt;Et++){const jt=$.getCamera(Et);if(k.isPointLight){const kt=$.camera,B=$.matrix,mt=k.distance||kt.far;mt!==kt.far&&(kt.far=mt,kt.updateProjectionMatrix()),Ul.setFromMatrixPosition(k.matrixWorld),kt.position.copy(Ul),bp.copy(kt.position),bp.add(rw[Et]),kt.up.copy(ow[Et]),kt.lookAt(bp),kt.updateMatrixWorld(),B.makeTranslation(-Ul.x,-Ul.y,-Ul.z),fS.multiplyMatrices(kt.projectionMatrix,kt.matrixWorldInverse),$._frustum.setFromProjectionMatrix(fS,kt.coordinateSystem,kt.reversedDepth)}if($.map.isWebGLCubeRenderTarget)o.setRenderTarget($.map,Et),o.clear();else{Et===0&&(o.setRenderTarget($.map),o.clear());const kt=$.getViewport(Et);h.set(c.x*kt.x,c.y*kt.y,c.x*kt.z,c.y*kt.w),Q.viewport(h)}s=$.getFrustum(Et),C(P,b,jt,k,this.type)}$.isPointLightShadow!==!0&&this.type===Ll&&I($,b),$.needsUpdate=!1}S=this.type,M.needsUpdate=!1,o.setRenderTarget(L,H,q)};function I(D,P){const b=t.update(w);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,y.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),D.mapPass===null?D.mapPass=new Zi(l.x,l.y,{format:rr,type:_a}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value.set(D.map.width,D.map.height),g.uniforms.radius.value=D.radius,o.setRenderTarget(D.mapPass),o.clear(),o.renderBufferDirect(P,null,b,g,w,null),y.uniforms.shadow_pass.value=D.mapPass.texture,y.uniforms.resolution.value.set(D.map.width,D.map.height),y.uniforms.radius.value=D.radius,o.setRenderTarget(D.map),o.clear(),o.renderBufferDirect(P,null,b,y,w,null)}function X(D,P,b,L){let H=null;const q=b.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(q!==void 0)H=q;else if(H=b.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Q=H.uuid,at=P.uuid;let V=p[Q];V===void 0&&(V={},p[Q]=V);let J=V[at];J===void 0&&(J=H.clone(),V[at]=J,P.addEventListener("dispose",U)),H=J}if(H.visible=P.visible,H.wireframe=P.wireframe,L===Ll?H.side=P.shadowSide!==null?P.shadowSide:P.side:H.side=P.shadowSide!==null?P.shadowSide:v[P.side],H.alphaMap=P.alphaMap,H.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,H.map=P.map,H.clipShadows=P.clipShadows,H.clippingPlanes=P.clippingPlanes,H.clipIntersection=P.clipIntersection,H.displacementMap=P.displacementMap,H.displacementScale=P.displacementScale,H.displacementBias=P.displacementBias,H.wireframeLinewidth=P.wireframeLinewidth,H.linewidth=P.linewidth,b.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const Q=o.properties.get(H);Q.light=b}return H}function C(D,P,b,L,H){if(D.visible===!1)return;if(D.layers.test(P.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&H===Ll)&&(!D.frustumCulled||D.intersectsFrustum(s))){D.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,D.matrixWorld);const at=t.update(D),V=D.material;if(Array.isArray(V)){const J=at.groups;for(let k=0,$=J.length;k<$;k++){const ht=J[k],st=V[ht.materialIndex];if(st&&st.visible){const pt=X(D,st,L,H);D.onBeforeShadow(o,D,P,b,at,pt,ht),o.renderBufferDirect(b,null,at,pt,D,ht),D.onAfterShadow(o,D,P,b,at,pt,ht)}}}else if(V.visible){const J=X(D,V,L,H);D.onBeforeShadow(o,D,P,b,at,J,null),o.renderBufferDirect(b,null,at,J,D,null),D.onAfterShadow(o,D,P,b,at,J,null)}}const Q=D.children;for(let at=0,V=Q.length;at<V;at++)C(Q[at],P,b,L,H)}function U(D){D.target.removeEventListener("dispose",U);for(const b in p){const L=p[b],H=D.target.uuid;H in L&&(L[H].dispose(),delete L[H])}}}function uw(o,t){function i(){let Y=!1;const wt=new un;let yt=null;const Lt=new un(0,0,0,0);return{setMask:function(Vt){yt!==Vt&&!Y&&(o.colorMask(Vt,Vt,Vt,Vt),yt=Vt)},setLocked:function(Vt){Y=Vt},setClear:function(Vt,bt,Jt,Gt,Pe){Pe===!0&&(Vt*=Gt,bt*=Gt,Jt*=Gt),wt.set(Vt,bt,Jt,Gt),Lt.equals(wt)===!1&&(o.clearColor(Vt,bt,Jt,Gt),Lt.copy(wt))},reset:function(){Y=!1,yt=null,Lt.set(-1,0,0,0)}}}function s(){let Y=!1,wt=!1,yt=null,Lt=null,Vt=null;return{setReversed:function(bt){if(wt!==bt){const Jt=t.get("EXT_clip_control");bt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),wt=bt;const Gt=Vt;Vt=null,this.setClear(Gt)}},getReversed:function(){return wt},setTest:function(bt){bt?dt(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(bt){yt!==bt&&!Y&&(o.depthMask(bt),yt=bt)},setFunc:function(bt){if(wt&&(bt=Nb[bt]),Lt!==bt){switch(bt){case Cp:o.depthFunc(o.NEVER);break;case wp:o.depthFunc(o.ALWAYS);break;case Dp:o.depthFunc(o.LESS);break;case zl:o.depthFunc(o.LEQUAL);break;case Np:o.depthFunc(o.EQUAL);break;case Up:o.depthFunc(o.GEQUAL);break;case Lp:o.depthFunc(o.GREATER);break;case Op:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Lt=bt}},setLocked:function(bt){Y=bt},setClear:function(bt){Vt!==bt&&(Vt=bt,wt&&(bt=1-bt),o.clearDepth(bt))},reset:function(){Y=!1,yt=null,Lt=null,Vt=null,wt=!1}}}function l(){let Y=!1,wt=null,yt=null,Lt=null,Vt=null,bt=null,Jt=null,Gt=null,Pe=null;return{setTest:function(me){Y||(me?dt(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(me){wt!==me&&!Y&&(o.stencilMask(me),wt=me)},setFunc:function(me,ui,Mi){(yt!==me||Lt!==ui||Vt!==Mi)&&(o.stencilFunc(me,ui,Mi),yt=me,Lt=ui,Vt=Mi)},setOp:function(me,ui,Mi){(bt!==me||Jt!==ui||Gt!==Mi)&&(o.stencilOp(me,ui,Mi),bt=me,Jt=ui,Gt=Mi)},setLocked:function(me){Y=me},setClear:function(me){Pe!==me&&(o.clearStencil(me),Pe=me)},reset:function(){Y=!1,wt=null,yt=null,Lt=null,Vt=null,bt=null,Jt=null,Gt=null,Pe=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let x={},v={},g={},y=new WeakMap,R=[],w=null,M=!1,S=null,I=null,X=null,C=null,U=null,D=null,P=null,b=new fe(0,0,0),L=0,H=!1,q=null,Q=null,at=null,V=null,J=null;const k=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ht=0;const st=o.getParameter(o.VERSION);st.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec(st)[1]),$=ht>=1):st.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),$=ht>=2);let pt=null,Et={};const jt=o.getParameter(o.SCISSOR_BOX),kt=o.getParameter(o.VIEWPORT),B=new un().fromArray(jt),mt=new un().fromArray(kt);function At(Y,wt,yt,Lt){const Vt=new Uint8Array(4),bt=o.createTexture();o.bindTexture(Y,bt),o.texParameteri(Y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<yt;Jt++)Y===o.TEXTURE_3D||Y===o.TEXTURE_2D_ARRAY?o.texImage3D(wt,0,o.RGBA,1,1,Lt,0,o.RGBA,o.UNSIGNED_BYTE,Vt):o.texImage2D(wt+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Vt);return bt}const Z={};Z[o.TEXTURE_2D]=At(o.TEXTURE_2D,o.TEXTURE_2D,1),Z[o.TEXTURE_CUBE_MAP]=At(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[o.TEXTURE_2D_ARRAY]=At(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Z[o.TEXTURE_3D]=At(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),dt(o.DEPTH_TEST),h.setFunc(zl),ee(!1),ie(ix),dt(o.CULL_FACE),xe(Ha);function dt(Y){x[Y]!==!0&&(o.enable(Y),x[Y]=!0)}function Tt(Y){x[Y]!==!1&&(o.disable(Y),x[Y]=!1)}function Nt(Y,wt){return g[Y]!==wt?(o.bindFramebuffer(Y,wt),g[Y]=wt,Y===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=wt),Y===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=wt),!0):!1}function _t(Y,wt){let yt=R,Lt=!1;if(Y){yt=y.get(wt),yt===void 0&&(yt=[],y.set(wt,yt));const Vt=Y.textures;if(yt.length!==Vt.length||yt[0]!==o.COLOR_ATTACHMENT0){for(let bt=0,Jt=Vt.length;bt<Jt;bt++)yt[bt]=o.COLOR_ATTACHMENT0+bt;yt.length=Vt.length,Lt=!0}}else yt[0]!==o.BACK&&(yt[0]=o.BACK,Lt=!0);Lt&&o.drawBuffers(yt)}function Rt(Y){return w!==Y?(o.useProgram(Y),w=Y,!0):!1}const He={[mo]:o.FUNC_ADD,[$E]:o.FUNC_SUBTRACT,[tb]:o.FUNC_REVERSE_SUBTRACT};He[eb]=o.MIN,He[nb]=o.MAX;const pe={[ib]:o.ZERO,[ab]:o.ONE,[sb]:o.SRC_COLOR,[mS]:o.SRC_ALPHA,[fb]:o.SRC_ALPHA_SATURATE,[ub]:o.DST_COLOR,[ob]:o.DST_ALPHA,[rb]:o.ONE_MINUS_SRC_COLOR,[gS]:o.ONE_MINUS_SRC_ALPHA,[cb]:o.ONE_MINUS_DST_COLOR,[lb]:o.ONE_MINUS_DST_ALPHA,[hb]:o.CONSTANT_COLOR,[db]:o.ONE_MINUS_CONSTANT_COLOR,[pb]:o.CONSTANT_ALPHA,[mb]:o.ONE_MINUS_CONSTANT_ALPHA};function xe(Y,wt,yt,Lt,Vt,bt,Jt,Gt,Pe,me){if(Y===Ha){M===!0&&(Tt(o.BLEND),M=!1);return}if(M===!1&&(dt(o.BLEND),M=!0),Y!==JE){if(Y!==S||me!==H){if((I!==mo||U!==mo)&&(o.blendEquation(o.FUNC_ADD),I=mo,U=mo),me)switch(Y){case Il:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ax:o.blendFunc(o.ONE,o.ONE);break;case sx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case rx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Fe("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Il:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ax:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case sx:Fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rx:Fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Fe("WebGLState: Invalid blending: ",Y);break}X=null,C=null,D=null,P=null,b.set(0,0,0),L=0,S=Y,H=me}return}Vt=Vt||wt,bt=bt||yt,Jt=Jt||Lt,(wt!==I||Vt!==U)&&(o.blendEquationSeparate(He[wt],He[Vt]),I=wt,U=Vt),(yt!==X||Lt!==C||bt!==D||Jt!==P)&&(o.blendFuncSeparate(pe[yt],pe[Lt],pe[bt],pe[Jt]),X=yt,C=Lt,D=bt,P=Jt),(Gt.equals(b)===!1||Pe!==L)&&(o.blendColor(Gt.r,Gt.g,Gt.b,Pe),b.copy(Gt),L=Pe),S=Y,H=!1}function Ee(Y,wt){Y.side===Pi?Tt(o.CULL_FACE):dt(o.CULL_FACE);let yt=Y.side===oi;wt&&(yt=!yt),ee(yt),Y.blending===Il&&Y.transparent===!1?xe(Ha):xe(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),h.setFunc(Y.depthFunc),h.setTest(Y.depthTest),h.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Lt=Y.stencilWrite;d.setTest(Lt),Lt&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),cn(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?dt(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ee(Y){q!==Y&&(Y?o.frontFace(o.CW):o.frontFace(o.CCW),q=Y)}function ie(Y){Y!==jE?(dt(o.CULL_FACE),Y!==Q&&(Y===ix?o.cullFace(o.BACK):Y===KE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),Q=Y}function Ge(Y){Y!==at&&($&&o.lineWidth(Y),at=Y)}function cn(Y,wt,yt){Y?(dt(o.POLYGON_OFFSET_FILL),(V!==wt||J!==yt)&&(V=wt,J=yt,h.getReversed()&&(wt=-wt),o.polygonOffset(wt,yt))):Tt(o.POLYGON_OFFSET_FILL)}function Oe(Y){Y?dt(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function Je(Y){Y===void 0&&(Y=o.TEXTURE0+k-1),pt!==Y&&(o.activeTexture(Y),pt=Y)}function N(Y,wt,yt){yt===void 0&&(pt===null?yt=o.TEXTURE0+k-1:yt=pt);let Lt=Et[yt];Lt===void 0&&(Lt={type:void 0,texture:void 0},Et[yt]=Lt),(Lt.type!==Y||Lt.texture!==wt)&&(pt!==yt&&(o.activeTexture(yt),pt=yt),o.bindTexture(Y,wt||Z[Y]),Lt.type=Y,Lt.texture=wt)}function te(){const Y=Et[pt];Y!==void 0&&Y.type!==void 0&&(o.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ue(){try{o.compressedTexImage2D(...arguments)}catch(Y){Fe("WebGLState:",Y)}}function O(){try{o.compressedTexImage3D(...arguments)}catch(Y){Fe("WebGLState:",Y)}}function E(){try{o.texSubImage2D(...arguments)}catch(Y){Fe("WebGLState:",Y)}}function nt(){try{o.texSubImage3D(...arguments)}catch(Y){Fe("WebGLState:",Y)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(Y){Fe("WebGLState:",Y)}}function gt(){try{o.compressedTexSubImage3D(...arguments)}catch(Y){Fe("WebGLState:",Y)}}function Ct(){try{o.texStorage2D(...arguments)}catch(Y){Fe("WebGLState:",Y)}}function Ut(){try{o.texStorage3D(...arguments)}catch(Y){Fe("WebGLState:",Y)}}function vt(){try{o.texImage2D(...arguments)}catch(Y){Fe("WebGLState:",Y)}}function Mt(){try{o.texImage3D(...arguments)}catch(Y){Fe("WebGLState:",Y)}}function Dt(Y){return v[Y]!==void 0?v[Y]:o.getParameter(Y)}function $t(Y,wt){v[Y]!==wt&&(o.pixelStorei(Y,wt),v[Y]=wt)}function zt(Y){B.equals(Y)===!1&&(o.scissor(Y.x,Y.y,Y.z,Y.w),B.copy(Y))}function It(Y){mt.equals(Y)===!1&&(o.viewport(Y.x,Y.y,Y.z,Y.w),mt.copy(Y))}function Xt(Y,wt){let yt=p.get(wt);yt===void 0&&(yt=new WeakMap,p.set(wt,yt));let Lt=yt.get(Y);Lt===void 0&&(Lt=o.getUniformBlockIndex(wt,Y.name),yt.set(Y,Lt))}function se(Y,wt){const Lt=p.get(wt).get(Y);m.get(wt)!==Lt&&(o.uniformBlockBinding(wt,Lt,Y.__bindingPointIndex),m.set(wt,Lt))}function he(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),x={},v={},pt=null,Et={},g={},y=new WeakMap,R=[],w=null,M=!1,S=null,I=null,X=null,C=null,U=null,D=null,P=null,b=new fe(0,0,0),L=0,H=!1,q=null,Q=null,at=null,V=null,J=null,B.set(0,0,o.canvas.width,o.canvas.height),mt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:dt,disable:Tt,bindFramebuffer:Nt,drawBuffers:_t,useProgram:Rt,setBlending:xe,setMaterial:Ee,setFlipSided:ee,setCullFace:ie,setLineWidth:Ge,setPolygonOffset:cn,setScissorTest:Oe,activeTexture:Je,bindTexture:N,unbindTexture:te,compressedTexImage2D:ue,compressedTexImage3D:O,texImage2D:vt,texImage3D:Mt,pixelStorei:$t,getParameter:Dt,updateUBOMapping:Xt,uniformBlockBinding:se,texStorage2D:Ct,texStorage3D:Ut,texSubImage2D:E,texSubImage3D:nt,compressedTexSubImage2D:ut,compressedTexSubImage3D:gt,scissor:zt,viewport:It,reset:he}}function cw(o,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ae,x=new WeakMap,v=new Set;let g;const y=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(O,E){return R?new OffscreenCanvas(O,E):tf("canvas")}function M(O,E,nt){let ut=1;const gt=ue(O);if((gt.width>nt||gt.height>nt)&&(ut=nt/Math.max(gt.width,gt.height)),ut<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Ct=Math.floor(ut*gt.width),Ut=Math.floor(ut*gt.height);g===void 0&&(g=w(Ct,Ut));const vt=E?w(Ct,Ut):g;return vt.width=Ct,vt.height=Ut,vt.getContext("2d").drawImage(O,0,0,Ct,Ut),le("WebGLRenderer: Texture has been resized from ("+gt.width+"x"+gt.height+") to ("+Ct+"x"+Ut+")."),vt}else return"data"in O&&le("WebGLRenderer: Image in DataTexture is too big ("+gt.width+"x"+gt.height+")."),O;return O}function S(O){return O.generateMipmaps}function I(O){o.generateMipmap(O)}function X(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function C(O,E,nt,ut,gt,Ct=!1){if(O!==null){if(o[O]!==void 0)return o[O];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Ut;ut&&(Ut=t.get("EXT_texture_norm16"),Ut||le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let vt=E;if(E===o.RED&&(nt===o.FLOAT&&(vt=o.R32F),nt===o.HALF_FLOAT&&(vt=o.R16F),nt===o.UNSIGNED_BYTE&&(vt=o.R8),nt===o.UNSIGNED_SHORT&&Ut&&(vt=Ut.R16_EXT),nt===o.SHORT&&Ut&&(vt=Ut.R16_SNORM_EXT)),E===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(vt=o.R8UI),nt===o.UNSIGNED_SHORT&&(vt=o.R16UI),nt===o.UNSIGNED_INT&&(vt=o.R32UI),nt===o.BYTE&&(vt=o.R8I),nt===o.SHORT&&(vt=o.R16I),nt===o.INT&&(vt=o.R32I)),E===o.RG&&(nt===o.FLOAT&&(vt=o.RG32F),nt===o.HALF_FLOAT&&(vt=o.RG16F),nt===o.UNSIGNED_BYTE&&(vt=o.RG8),nt===o.UNSIGNED_SHORT&&Ut&&(vt=Ut.RG16_EXT),nt===o.SHORT&&Ut&&(vt=Ut.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(vt=o.RG8UI),nt===o.UNSIGNED_SHORT&&(vt=o.RG16UI),nt===o.UNSIGNED_INT&&(vt=o.RG32UI),nt===o.BYTE&&(vt=o.RG8I),nt===o.SHORT&&(vt=o.RG16I),nt===o.INT&&(vt=o.RG32I)),E===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(vt=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(vt=o.RGB16UI),nt===o.UNSIGNED_INT&&(vt=o.RGB32UI),nt===o.BYTE&&(vt=o.RGB8I),nt===o.SHORT&&(vt=o.RGB16I),nt===o.INT&&(vt=o.RGB32I)),E===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(vt=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(vt=o.RGBA16UI),nt===o.UNSIGNED_INT&&(vt=o.RGBA32UI),nt===o.BYTE&&(vt=o.RGBA8I),nt===o.SHORT&&(vt=o.RGBA16I),nt===o.INT&&(vt=o.RGBA32I)),E===o.RGB&&(nt===o.UNSIGNED_SHORT&&Ut&&(vt=Ut.RGB16_EXT),nt===o.SHORT&&Ut&&(vt=Ut.RGB16_SNORM_EXT),nt===o.UNSIGNED_INT_5_9_9_9_REV&&(vt=o.RGB9_E5),nt===o.UNSIGNED_INT_10F_11F_11F_REV&&(vt=o.R11F_G11F_B10F)),E===o.RGBA){const Mt=Ct?$c:ze.getTransfer(gt);nt===o.FLOAT&&(vt=o.RGBA32F),nt===o.HALF_FLOAT&&(vt=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(vt=Mt===je?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT&&Ut&&(vt=Ut.RGBA16_EXT),nt===o.SHORT&&Ut&&(vt=Ut.RGBA16_SNORM_EXT),nt===o.UNSIGNED_SHORT_4_4_4_4&&(vt=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(vt=o.RGB5_A1)}return(vt===o.R16F||vt===o.R32F||vt===o.RG16F||vt===o.RG32F||vt===o.RGBA16F||vt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),vt}function U(O,E){let nt;return O?E===null||E===ga||E===Fl?nt=o.DEPTH24_STENCIL8:E===Yi?nt=o.DEPTH32F_STENCIL8:E===Bl&&(nt=o.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ga||E===Fl?nt=o.DEPTH_COMPONENT24:E===Yi?nt=o.DEPTH_COMPONENT32F:E===Bl&&(nt=o.DEPTH_COMPONENT16),nt}function D(O,E){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Hn&&O.minFilter!==kn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function P(O){const E=O.target;E.removeEventListener("dispose",P),L(E),E.isVideoTexture&&x.delete(E),E.isHTMLTexture&&v.delete(E)}function b(O){const E=O.target;E.removeEventListener("dispose",b),q(E)}function L(O){const E=s.get(O);if(E.__webglInit===void 0)return;const nt=O.source,ut=y.get(nt);if(ut){const gt=ut[E.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&H(O),Object.keys(ut).length===0&&y.delete(nt)}s.remove(O)}function H(O){const E=s.get(O);o.deleteTexture(E.__webglTexture);const nt=O.source,ut=y.get(nt);delete ut[E.__cacheKey],h.memory.textures--}function q(O){const E=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(E.__webglFramebuffer[ut]))for(let gt=0;gt<E.__webglFramebuffer[ut].length;gt++)o.deleteFramebuffer(E.__webglFramebuffer[ut][gt]);else o.deleteFramebuffer(E.__webglFramebuffer[ut]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ut])}else{if(Array.isArray(E.__webglFramebuffer))for(let ut=0;ut<E.__webglFramebuffer.length;ut++)o.deleteFramebuffer(E.__webglFramebuffer[ut]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ut=0;ut<E.__webglColorRenderbuffer.length;ut++)E.__webglColorRenderbuffer[ut]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ut]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const nt=O.textures;for(let ut=0,gt=nt.length;ut<gt;ut++){const Ct=s.get(nt[ut]);Ct.__webglTexture&&(o.deleteTexture(Ct.__webglTexture),h.memory.textures--),s.remove(nt[ut])}s.remove(O)}let Q=0;function at(){Q=0}function V(){return Q}function J(O){Q=O}function k(){const O=Q;return O>=l.maxTextures&&le("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+l.maxTextures),Q+=1,O}function $(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function ht(O,E){const nt=s.get(O);if(O.isVideoTexture&&N(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&nt.__version!==O.version){const ut=O.image;if(ut===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(nt,O,E);return}}else O.isExternalTexture&&(nt.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+E)}function st(O,E){const nt=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&nt.__version!==O.version){Tt(nt,O,E);return}else O.isExternalTexture&&(nt.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+E)}function pt(O,E){const nt=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&nt.__version!==O.version){Tt(nt,O,E);return}i.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+E)}function Et(O,E){const nt=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&nt.__version!==O.version){Nt(nt,O,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+E)}const jt={[Pp]:o.REPEAT,[Fa]:o.CLAMP_TO_EDGE,[Ip]:o.MIRRORED_REPEAT},kt={[Hn]:o.NEAREST,[vb]:o.NEAREST_MIPMAP_NEAREST,[pc]:o.NEAREST_MIPMAP_LINEAR,[kn]:o.LINEAR,[Wd]:o.LINEAR_MIPMAP_NEAREST,[nr]:o.LINEAR_MIPMAP_LINEAR},B={[Mb]:o.NEVER,[Rb]:o.ALWAYS,[Eb]:o.LESS,[Cm]:o.LEQUAL,[bb]:o.EQUAL,[wm]:o.GEQUAL,[Tb]:o.GREATER,[Ab]:o.NOTEQUAL};function mt(O,E){if(E.type===Yi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===kn||E.magFilter===Wd||E.magFilter===pc||E.magFilter===nr||E.minFilter===kn||E.minFilter===Wd||E.minFilter===pc||E.minFilter===nr)&&le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,jt[E.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,jt[E.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,jt[E.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,kt[E.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,kt[E.minFilter]),E.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Hn||E.minFilter!==pc&&E.minFilter!==nr||E.type===Yi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function At(O,E){let nt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",P));const ut=E.source;let gt=y.get(ut);gt===void 0&&(gt={},y.set(ut,gt));const Ct=$(E);if(Ct!==O.__cacheKey){gt[Ct]===void 0&&(gt[Ct]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),gt[Ct].usedTimes++;const Ut=gt[O.__cacheKey];Ut!==void 0&&(gt[O.__cacheKey].usedTimes--,Ut.usedTimes===0&&H(E)),O.__cacheKey=Ct,O.__webglTexture=gt[Ct].texture}return nt}function Z(O,E,nt){return Math.floor(Math.floor(O/nt)/E)}function dt(O,E,nt,ut){const Ct=O.updateRanges;if(Ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,nt,ut,E.data);else{Ct.sort(($t,zt)=>$t.start-zt.start);let Ut=0;for(let $t=1;$t<Ct.length;$t++){const zt=Ct[Ut],It=Ct[$t],Xt=zt.start+zt.count,se=Z(It.start,E.width,4),he=Z(zt.start,E.width,4);It.start<=Xt+1&&se===he&&Z(It.start+It.count-1,E.width,4)===se?zt.count=Math.max(zt.count,It.start+It.count-zt.start):(++Ut,Ct[Ut]=It)}Ct.length=Ut+1;const vt=i.getParameter(o.UNPACK_ROW_LENGTH),Mt=i.getParameter(o.UNPACK_SKIP_PIXELS),Dt=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let $t=0,zt=Ct.length;$t<zt;$t++){const It=Ct[$t],Xt=Math.floor(It.start/4),se=Math.ceil(It.count/4),he=Xt%E.width,Y=Math.floor(Xt/E.width),wt=se,yt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,he),i.pixelStorei(o.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(o.TEXTURE_2D,0,he,Y,wt,yt,nt,ut,E.data)}O.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,vt),i.pixelStorei(o.UNPACK_SKIP_PIXELS,Mt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Dt)}}function Tt(O,E,nt){let ut=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ut=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ut=o.TEXTURE_3D);const gt=At(O,E),Ct=E.source;i.bindTexture(ut,O.__webglTexture,o.TEXTURE0+nt);const Ut=s.get(Ct);if(Ct.version!==Ut.__version||gt===!0){if(i.activeTexture(o.TEXTURE0+nt),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const yt=ze.getPrimaries(ze.workingColorSpace),Lt=E.colorSpace===Es?null:ze.getPrimaries(E.colorSpace),Vt=E.colorSpace===Es||yt===Lt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let Mt=M(E.image,!1,l.maxTextureSize);Mt=te(E,Mt);const Dt=c.convert(E.format,E.colorSpace),$t=c.convert(E.type);let zt=C(E.internalFormat,Dt,$t,E.normalized,E.colorSpace,E.isVideoTexture);mt(ut,E);let It;const Xt=E.mipmaps,se=E.isVideoTexture!==!0,he=Ut.__version===void 0||gt===!0,Y=Ct.dataReady,wt=D(E,Mt);if(E.isDepthTexture)zt=U(E.format===ir,E.type),he&&(se?i.texStorage2D(o.TEXTURE_2D,1,zt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,zt,Mt.width,Mt.height,0,Dt,$t,null));else if(E.isDataTexture)if(Xt.length>0){se&&he&&i.texStorage2D(o.TEXTURE_2D,wt,zt,Xt[0].width,Xt[0].height);for(let yt=0,Lt=Xt.length;yt<Lt;yt++)It=Xt[yt],se?Y&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,It.width,It.height,Dt,$t,It.data):i.texImage2D(o.TEXTURE_2D,yt,zt,It.width,It.height,0,Dt,$t,It.data);E.generateMipmaps=!1}else se?(he&&i.texStorage2D(o.TEXTURE_2D,wt,zt,Mt.width,Mt.height),Y&&dt(E,Mt,Dt,$t)):i.texImage2D(o.TEXTURE_2D,0,zt,Mt.width,Mt.height,0,Dt,$t,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){se&&he&&i.texStorage3D(o.TEXTURE_2D_ARRAY,wt,zt,Xt[0].width,Xt[0].height,Mt.depth);for(let yt=0,Lt=Xt.length;yt<Lt;yt++)if(It=Xt[yt],E.format!==qi)if(Dt!==null)if(se){if(Y)if(E.layerUpdates.size>0){const Vt=Xx(It.width,It.height,E.format,E.type);for(const bt of E.layerUpdates){const Jt=It.data.subarray(bt*Vt/It.data.BYTES_PER_ELEMENT,(bt+1)*Vt/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,bt,It.width,It.height,1,Dt,Jt)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,It.width,It.height,Mt.depth,Dt,It.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,zt,It.width,It.height,Mt.depth,0,It.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Y&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,It.width,It.height,Mt.depth,Dt,$t,It.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,zt,It.width,It.height,Mt.depth,0,Dt,$t,It.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{se&&he&&i.texStorage2D(o.TEXTURE_2D,wt,zt,Xt[0].width,Xt[0].height);for(let yt=0,Lt=Xt.length;yt<Lt;yt++)It=Xt[yt],E.format!==qi?Dt!==null?se?Y&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,It.width,It.height,Dt,It.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,zt,It.width,It.height,0,It.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Y&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,It.width,It.height,Dt,$t,It.data):i.texImage2D(o.TEXTURE_2D,yt,zt,It.width,It.height,0,Dt,$t,It.data)}else if(E.isDataArrayTexture)if(se){if(he&&i.texStorage3D(o.TEXTURE_2D_ARRAY,wt,zt,Mt.width,Mt.height,Mt.depth),Y)if(E.layerUpdates.size>0){const yt=Xx(Mt.width,Mt.height,E.format,E.type);for(const Lt of E.layerUpdates){const Vt=Mt.data.subarray(Lt*yt/Mt.data.BYTES_PER_ELEMENT,(Lt+1)*yt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Lt,Mt.width,Mt.height,1,Dt,$t,Vt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Dt,$t,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,Mt.width,Mt.height,Mt.depth,0,Dt,$t,Mt.data);else if(E.isData3DTexture)se?(he&&i.texStorage3D(o.TEXTURE_3D,wt,zt,Mt.width,Mt.height,Mt.depth),Y&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Dt,$t,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,zt,Mt.width,Mt.height,Mt.depth,0,Dt,$t,Mt.data);else if(E.isFramebufferTexture){if(he)if(se)i.texStorage2D(o.TEXTURE_2D,wt,zt,Mt.width,Mt.height);else{let yt=Mt.width,Lt=Mt.height;for(let Vt=0;Vt<wt;Vt++)i.texImage2D(o.TEXTURE_2D,Vt,zt,yt,Lt,0,Dt,$t,null),yt>>=1,Lt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const yt=o.canvas;if(yt.hasAttribute("layoutsubtree")||yt.setAttribute("layoutsubtree","true"),Mt.parentNode!==yt){yt.appendChild(Mt),v.add(E),yt.onpaint=Lt=>{const Vt=Lt.changedElements;for(const bt of v)Vt.includes(bt.image)&&(bt.needsUpdate=!0)},yt.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,Mt);else{const Vt=o.RGBA,bt=o.RGBA,Jt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Vt,bt,Jt,Mt)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(se&&he){const yt=ue(Xt[0]);i.texStorage2D(o.TEXTURE_2D,wt,zt,yt.width,yt.height)}for(let yt=0,Lt=Xt.length;yt<Lt;yt++)It=Xt[yt],se?Y&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Dt,$t,It):i.texImage2D(o.TEXTURE_2D,yt,zt,Dt,$t,It);E.generateMipmaps=!1}else if(se){if(he){const yt=ue(Mt);i.texStorage2D(o.TEXTURE_2D,wt,zt,yt.width,yt.height)}Y&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Dt,$t,Mt)}else i.texImage2D(o.TEXTURE_2D,0,zt,Dt,$t,Mt);S(E)&&I(ut),Ut.__version=Ct.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Nt(O,E,nt){if(E.image.length!==6)return;const ut=At(O,E),gt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+nt);const Ct=s.get(gt);if(gt.version!==Ct.__version||ut===!0){i.activeTexture(o.TEXTURE0+nt);const Ut=ze.getPrimaries(ze.workingColorSpace),vt=E.colorSpace===Es?null:ze.getPrimaries(E.colorSpace),Mt=E.colorSpace===Es||Ut===vt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Dt=E.isCompressedTexture||E.image[0].isCompressedTexture,$t=E.image[0]&&E.image[0].isDataTexture,zt=[];for(let bt=0;bt<6;bt++)!Dt&&!$t?zt[bt]=M(E.image[bt],!0,l.maxCubemapSize):zt[bt]=$t?E.image[bt].image:E.image[bt],zt[bt]=te(E,zt[bt]);const It=zt[0],Xt=c.convert(E.format,E.colorSpace),se=c.convert(E.type),he=C(E.internalFormat,Xt,se,E.normalized,E.colorSpace),Y=E.isVideoTexture!==!0,wt=Ct.__version===void 0||ut===!0,yt=gt.dataReady;let Lt=D(E,It);mt(o.TEXTURE_CUBE_MAP,E);let Vt;if(Dt){Y&&wt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,he,It.width,It.height);for(let bt=0;bt<6;bt++){Vt=zt[bt].mipmaps;for(let Jt=0;Jt<Vt.length;Jt++){const Gt=Vt[Jt];E.format!==qi?Xt!==null?Y?yt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,0,0,Gt.width,Gt.height,Xt,Gt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,he,Gt.width,Gt.height,0,Gt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?yt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,0,0,Gt.width,Gt.height,Xt,se,Gt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt,he,Gt.width,Gt.height,0,Xt,se,Gt.data)}}}else{if(Vt=E.mipmaps,Y&&wt){Vt.length>0&&Lt++;const bt=ue(zt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,he,bt.width,bt.height)}for(let bt=0;bt<6;bt++)if($t){Y?yt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,zt[bt].width,zt[bt].height,Xt,se,zt[bt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,he,zt[bt].width,zt[bt].height,0,Xt,se,zt[bt].data);for(let Jt=0;Jt<Vt.length;Jt++){const Pe=Vt[Jt].image[bt].image;Y?yt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,0,0,Pe.width,Pe.height,Xt,se,Pe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,he,Pe.width,Pe.height,0,Xt,se,Pe.data)}}else{Y?yt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,0,0,Xt,se,zt[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,he,Xt,se,zt[bt]);for(let Jt=0;Jt<Vt.length;Jt++){const Gt=Vt[Jt];Y?yt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,0,0,Xt,se,Gt.image[bt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+bt,Jt+1,he,Xt,se,Gt.image[bt])}}}S(E)&&I(o.TEXTURE_CUBE_MAP),Ct.__version=gt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function _t(O,E,nt,ut,gt,Ct){const Ut=c.convert(nt.format,nt.colorSpace),vt=c.convert(nt.type),Mt=C(nt.internalFormat,Ut,vt,nt.normalized,nt.colorSpace),Dt=s.get(E),$t=s.get(nt);if($t.__renderTarget=E,!Dt.__hasExternalTextures){const zt=Math.max(1,E.width>>Ct),It=Math.max(1,E.height>>Ct);gt===o.TEXTURE_3D||gt===o.TEXTURE_2D_ARRAY?i.texImage3D(gt,Ct,Mt,zt,It,E.depth,0,Ut,vt,null):i.texImage2D(gt,Ct,Mt,zt,It,0,Ut,vt,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Je(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ut,gt,$t.__webglTexture,0,Oe(E)):(gt===o.TEXTURE_2D||gt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ut,gt,$t.__webglTexture,Ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Rt(O,E,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,O),E.depthBuffer){const ut=E.depthTexture,gt=ut&&ut.isDepthTexture?ut.type:null,Ct=U(E.stencilBuffer,gt),Ut=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Je(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Oe(E),Ct,E.width,E.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Oe(E),Ct,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ct,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,O)}else{const ut=E.textures;for(let gt=0;gt<ut.length;gt++){const Ct=ut[gt],Ut=c.convert(Ct.format,Ct.colorSpace),vt=c.convert(Ct.type),Mt=C(Ct.internalFormat,Ut,vt,Ct.normalized,Ct.colorSpace);Je(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Oe(E),Mt,E.width,E.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Oe(E),Mt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Mt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function He(O,E,nt){const ut=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const gt=s.get(E.depthTexture);if(gt.__renderTarget=E,(!gt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ut){if(gt.__webglInit===void 0&&(gt.__webglInit=!0,E.depthTexture.addEventListener("dispose",P)),gt.__webglTexture===void 0){gt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),mt(o.TEXTURE_CUBE_MAP,E.depthTexture);const Dt=c.convert(E.depthTexture.format),$t=c.convert(E.depthTexture.type);let zt;E.depthTexture.format===Va?zt=o.DEPTH_COMPONENT24:E.depthTexture.format===ir&&(zt=o.DEPTH24_STENCIL8);for(let It=0;It<6;It++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,zt,E.width,E.height,0,Dt,$t,null)}}else ht(E.depthTexture,0);const Ct=gt.__webglTexture,Ut=Oe(E),vt=ut?o.TEXTURE_CUBE_MAP_POSITIVE_X+nt:o.TEXTURE_2D,Mt=E.depthTexture.format===ir?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Va)Je(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Mt,vt,Ct,0,Ut):o.framebufferTexture2D(o.FRAMEBUFFER,Mt,vt,Ct,0);else if(E.depthTexture.format===ir)Je(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Mt,vt,Ct,0,Ut):o.framebufferTexture2D(o.FRAMEBUFFER,Mt,vt,Ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pe(O){const E=s.get(O),nt=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const ut=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ut){const gt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ut.removeEventListener("dispose",gt)};ut.addEventListener("dispose",gt),E.__depthDisposeCallback=gt}E.__boundDepthTexture=ut}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(nt)for(let ut=0;ut<6;ut++)He(E.__webglFramebuffer[ut],O,ut);else{const ut=O.texture.mipmaps;ut&&ut.length>0?He(E.__webglFramebuffer[0],O,0):He(E.__webglFramebuffer,O,0)}else if(nt){E.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ut]),E.__webglDepthbuffer[ut]===void 0)E.__webglDepthbuffer[ut]=o.createRenderbuffer(),Rt(E.__webglDepthbuffer[ut],O,!1);else{const gt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=E.__webglDepthbuffer[ut];o.bindRenderbuffer(o.RENDERBUFFER,Ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,Ct)}}else{const ut=O.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Rt(E.__webglDepthbuffer,O,!1);else{const gt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,Ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function xe(O,E,nt){const ut=s.get(O);E!==void 0&&_t(ut.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&pe(O)}function Ee(O){const E=O.texture,nt=s.get(O),ut=s.get(E);O.addEventListener("dispose",b);const gt=O.textures,Ct=O.isWebGLCubeRenderTarget===!0,Ut=gt.length>1;if(Ut||(ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture()),ut.__version=E.version,h.memory.textures++),Ct){nt.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer[vt]=[];for(let Mt=0;Mt<E.mipmaps.length;Mt++)nt.__webglFramebuffer[vt][Mt]=o.createFramebuffer()}else nt.__webglFramebuffer[vt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){nt.__webglFramebuffer=[];for(let vt=0;vt<E.mipmaps.length;vt++)nt.__webglFramebuffer[vt]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(Ut)for(let vt=0,Mt=gt.length;vt<Mt;vt++){const Dt=s.get(gt[vt]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&Je(O)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let vt=0;vt<gt.length;vt++){const Mt=gt[vt];nt.__webglColorRenderbuffer[vt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[vt]);const Dt=c.convert(Mt.format,Mt.colorSpace),$t=c.convert(Mt.type),zt=C(Mt.internalFormat,Dt,$t,Mt.normalized,Mt.colorSpace,O.isXRRenderTarget===!0),It=Oe(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,It,zt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+vt,o.RENDERBUFFER,nt.__webglColorRenderbuffer[vt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),Rt(nt.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ct){i.bindTexture(o.TEXTURE_CUBE_MAP,ut.__webglTexture),mt(o.TEXTURE_CUBE_MAP,E);for(let vt=0;vt<6;vt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)_t(nt.__webglFramebuffer[vt][Mt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Mt);else _t(nt.__webglFramebuffer[vt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);S(E)&&I(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ut){for(let vt=0,Mt=gt.length;vt<Mt;vt++){const Dt=gt[vt],$t=s.get(Dt);let zt=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(zt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(zt,$t.__webglTexture),mt(zt,Dt),_t(nt.__webglFramebuffer,O,Dt,o.COLOR_ATTACHMENT0+vt,zt,0),S(Dt)&&I(zt)}i.unbindTexture()}else{let vt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(vt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(vt,ut.__webglTexture),mt(vt,E),E.mipmaps&&E.mipmaps.length>0)for(let Mt=0;Mt<E.mipmaps.length;Mt++)_t(nt.__webglFramebuffer[Mt],O,E,o.COLOR_ATTACHMENT0,vt,Mt);else _t(nt.__webglFramebuffer,O,E,o.COLOR_ATTACHMENT0,vt,0);S(E)&&I(vt),i.unbindTexture()}O.depthBuffer&&pe(O)}function ee(O){const E=O.textures;for(let nt=0,ut=E.length;nt<ut;nt++){const gt=E[nt];if(S(gt)){const Ct=X(O),Ut=s.get(gt).__webglTexture;i.bindTexture(Ct,Ut),I(Ct),i.unbindTexture()}}}const ie=[],Ge=[];function cn(O){if(O.samples>0){if(Je(O)===!1){const E=O.textures,nt=O.width,ut=O.height;let gt=o.COLOR_BUFFER_BIT;const Ct=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=s.get(O),vt=E.length>1;if(vt)for(let Dt=0;Dt<E.length;Dt++)i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer);const Mt=O.texture.mipmaps;Mt&&Mt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Dt=0;Dt<E.length;Dt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(gt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(gt|=o.STENCIL_BUFFER_BIT)),vt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[Dt]);const $t=s.get(E[Dt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,$t,0)}o.blitFramebuffer(0,0,nt,ut,0,0,nt,ut,gt,o.NEAREST),m===!0&&(ie.length=0,Ge.length=0,ie.push(o.COLOR_ATTACHMENT0+Dt),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(ie.push(Ct),Ge.push(Ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ge)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),vt)for(let Dt=0;Dt<E.length;Dt++){i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,Ut.__webglColorRenderbuffer[Dt]);const $t=s.get(E[Dt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ut.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,$t,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&m){const E=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Oe(O){return Math.min(l.maxSamples,O.samples)}function Je(O){const E=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function N(O){const E=h.render.frame;x.get(O)!==E&&(x.set(O,E),O.update())}function te(O,E){const nt=O.colorSpace,ut=O.format,gt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||nt!==Jc&&nt!==Es&&(ze.getTransfer(nt)===je?(ut!==qi||gt!==yi)&&le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Fe("WebGLTextures: Unsupported texture color space:",nt)),E}function ue(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=k,this.resetTextureUnits=at,this.getTextureUnits=V,this.setTextureUnits=J,this.setTexture2D=ht,this.setTexture2DArray=st,this.setTexture3D=pt,this.setTextureCube=Et,this.rebindTextures=xe,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function fw(o,t){function i(s,l=Es){let c;const h=ze.getTransfer(l);if(s===yi)return o.UNSIGNED_BYTE;if(s===Mm)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Em)return o.UNSIGNED_SHORT_5_5_5_1;if(s===RS)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===CS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===TS)return o.BYTE;if(s===AS)return o.SHORT;if(s===Bl)return o.UNSIGNED_SHORT;if(s===ym)return o.INT;if(s===ga)return o.UNSIGNED_INT;if(s===Yi)return o.FLOAT;if(s===_a)return o.HALF_FLOAT;if(s===wS)return o.ALPHA;if(s===DS)return o.RGB;if(s===qi)return o.RGBA;if(s===Va)return o.DEPTH_COMPONENT;if(s===ir)return o.DEPTH_STENCIL;if(s===bm)return o.RED;if(s===Tm)return o.RED_INTEGER;if(s===rr)return o.RG;if(s===Am)return o.RG_INTEGER;if(s===Rm)return o.RGBA_INTEGER;if(s===kc||s===Wc||s===Yc||s===qc)if(h===je)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===zp||s===Bp||s===Fp||s===Hp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===zp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Gp||s===Vp||s===Xp||s===kp||s===Wp||s===Kc||s===Yp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Gp||s===Vp)return h===je?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Xp)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===kp)return c.COMPRESSED_R11_EAC;if(s===Wp)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Kc)return c.COMPRESSED_RG11_EAC;if(s===Yp)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===qp||s===Zp||s===jp||s===Kp||s===Qp||s===Jp||s===$p||s===tm||s===em||s===nm||s===im||s===am||s===sm||s===rm)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===qp)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zp)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jp)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Kp)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Qp)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Jp)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$p)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===tm)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===em)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===nm)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===im)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===am)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sm)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rm)return h===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===om||s===lm||s===um)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===om)return h===je?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===lm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===um)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cm||s===fm||s===Qc||s===hm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===cm)return c.COMPRESSED_RED_RGTC1_EXT;if(s===fm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===hm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Fl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const hw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new VS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new va({vertexShader:hw,fragmentShader:dw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ln(new Wl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mw extends Rs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,x=null,v=null,g=null,y=null,R=null;const w=typeof XRWebGLBinding<"u",M=new pw,S={},I=i.getContextAttributes();let X=null,C=null;const U=[],D=[],P=new ae;let b=null,L=null;const H=new Oi;H.viewport=new un;const q=new Oi;q.viewport=new un;const Q=[H,q],at=new xT;let V=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let dt=U[Z];return dt===void 0&&(dt=new $d,U[Z]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(Z){let dt=U[Z];return dt===void 0&&(dt=new $d,U[Z]=dt),dt.getGripSpace()},this.getHand=function(Z){let dt=U[Z];return dt===void 0&&(dt=new $d,U[Z]=dt),dt.getHandSpace()};function k(Z){const dt=D.indexOf(Z.inputSource);if(dt===-1)return;const Tt=U[dt];Tt!==void 0&&(Tt.update(Z.inputSource,Z.frame,p||h),Tt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function $(){l.removeEventListener("select",k),l.removeEventListener("selectstart",k),l.removeEventListener("selectend",k),l.removeEventListener("squeeze",k),l.removeEventListener("squeezestart",k),l.removeEventListener("squeezeend",k),l.removeEventListener("end",$),l.removeEventListener("inputsourceschange",ht);for(let Z=0;Z<U.length;Z++){const dt=D[Z];dt!==null&&(D[Z]=null,U[Z].disconnect(dt))}V=null,J=null,M.reset();for(const Z in S)delete S[Z];if(t.setRenderTarget(X),y=null,g=null,v=null,l=null,C=null,At.stop(),s.isPresenting=!1,t.setPixelRatio(b),t.setSize(P.width,P.height,!1),L!==null){const Z=L.camera;Z.fov=L.fov,Z.zoom=L.zoom,Z.updateProjectionMatrix(),L=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,s.isPresenting===!0&&le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,s.isPresenting===!0&&le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(X=t.getRenderTarget(),l.addEventListener("select",k),l.addEventListener("selectstart",k),l.addEventListener("selectend",k),l.addEventListener("squeeze",k),l.addEventListener("squeezestart",k),l.addEventListener("squeezeend",k),l.addEventListener("end",$),l.addEventListener("inputsourceschange",ht),I.xrCompatible!==!0&&await i.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(P),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Nt=null,_t=null;I.depth&&(_t=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=I.stencil?ir:Va,Nt=I.stencil?Fl:ga);const Rt={colorFormat:i.RGBA8,depthFormat:_t,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Rt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),C=new Zi(g.textureWidth,g.textureHeight,{format:qi,type:yi,depthTexture:new Xl(g.textureWidth,g.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const Tt={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Zi(y.framebufferWidth,y.framebufferHeight,{format:qi,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),At.setContext(l),At.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ht(Z){for(let dt=0;dt<Z.removed.length;dt++){const Tt=Z.removed[dt],Nt=D.indexOf(Tt);Nt>=0&&(D[Nt]=null,U[Nt].disconnect(Tt))}for(let dt=0;dt<Z.added.length;dt++){const Tt=Z.added[dt];let Nt=D.indexOf(Tt);if(Nt===-1){for(let Rt=0;Rt<U.length;Rt++)if(Rt>=D.length){D.push(Tt),Nt=Rt;break}else if(D[Rt]===null){D[Rt]=Tt,Nt=Rt;break}if(Nt===-1)break}const _t=U[Nt];_t&&_t.connect(Tt)}}const st=new K,pt=new K;function Et(Z,dt,Tt){st.setFromMatrixPosition(dt.matrixWorld),pt.setFromMatrixPosition(Tt.matrixWorld);const Nt=st.distanceTo(pt),_t=dt.projectionMatrix.elements,Rt=Tt.projectionMatrix.elements,He=_t[14]/(_t[10]-1),pe=_t[14]/(_t[10]+1),xe=(_t[9]+1)/_t[5],Ee=(_t[9]-1)/_t[5],ee=(_t[8]-1)/_t[0],ie=(Rt[8]+1)/Rt[0],Ge=He*ee,cn=He*ie,Oe=Nt/(-ee+ie),Je=Oe*-ee;if(dt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Je),Z.translateZ(Oe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),_t[10]===-1)Z.projectionMatrix.copy(dt.projectionMatrix),Z.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const N=He+Oe,te=pe+Oe,ue=Ge-Je,O=cn+(Nt-Je),E=xe*pe/te*N,nt=Ee*pe/te*N;Z.projectionMatrix.makePerspective(ue,O,E,nt,N,te),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function jt(Z,dt){dt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(dt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let dt=Z.near,Tt=Z.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(Tt=M.depthFar)),at.near=q.near=H.near=dt,at.far=q.far=H.far=Tt,(V!==at.near||J!==at.far)&&(l.updateRenderState({depthNear:at.near,depthFar:at.far}),V=at.near,J=at.far),at.layers.mask=Z.layers.mask|6,H.layers.mask=at.layers.mask&-5,q.layers.mask=at.layers.mask&-3;const Nt=Z.parent,_t=at.cameras;jt(at,Nt);for(let Rt=0;Rt<_t.length;Rt++)jt(_t[Rt],Nt);_t.length===2?Et(at,H,q):at.projectionMatrix.copy(H.projectionMatrix),L===null&&Z.isPerspectiveCamera&&(L={camera:Z,fov:Z.fov,zoom:Z.zoom}),kt(Z,at,Nt)};function kt(Z,dt,Tt){Tt===null?Z.matrix.copy(dt.matrixWorld):(Z.matrix.copy(Tt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(dt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(dt.projectionMatrix),Z.projectionMatrixInverse.copy(dt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=pm*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(Z){m=Z,g!==null&&(g.fixedFoveation=Z),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Z)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(at)},this.getCameraTexture=function(Z){return S[Z]};let B=null;function mt(Z,dt){if(x=dt.getViewerPose(p||h),R=dt,x!==null){const Tt=x.views;y!==null&&(t.setRenderTargetFramebuffer(C,y.framebuffer),t.setRenderTarget(C));let Nt=!1;Tt.length!==at.cameras.length&&(at.cameras.length=0,Nt=!0);for(let pe=0;pe<Tt.length;pe++){const xe=Tt[pe];let Ee=null;if(y!==null)Ee=y.getViewport(xe);else{const ie=v.getViewSubImage(g,xe);Ee=ie.viewport,pe===0&&(t.setRenderTargetTextures(C,ie.colorTexture,ie.depthStencilTexture),t.setRenderTarget(C))}let ee=Q[pe];ee===void 0&&(ee=new Oi,ee.layers.enable(pe),ee.viewport=new un,Q[pe]=ee),ee.matrix.fromArray(xe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(xe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),pe===0&&(at.matrix.copy(ee.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),Nt===!0&&at.cameras.push(ee)}const _t=l.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=s.getBinding();const pe=v.getDepthInformation(Tt[0]);pe&&pe.isValid&&pe.texture&&M.init(pe,l.renderState)}if(_t&&_t.includes("camera-access")&&w){t.state.unbindTexture(),v=s.getBinding();for(let pe=0;pe<Tt.length;pe++){const xe=Tt[pe].camera;if(xe){let Ee=S[xe];Ee||(Ee=new VS,S[xe]=Ee);const ee=v.getCameraImage(xe);Ee.sourceTexture=ee}}}}for(let Tt=0;Tt<U.length;Tt++){const Nt=D[Tt],_t=U[Tt];Nt!==null&&_t!==void 0&&_t.update(Nt,dt,p||h)}B&&B(Z,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),R=null}const At=new YS;At.setAnimationLoop(mt),this.setAnimationLoop=function(Z){B=Z},this.dispose=function(){}}}const gw=new Qe,$S=new _e;$S.set(-1,0,0,0,1,0,0,0,1);function _w(o,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,XS(o)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,I,X,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(M,S):S.isMeshLambertMaterial?(c(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(M,S),v(M,S)):S.isMeshPhongMaterial?(c(M,S),x(M,S),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(M,S),g(M,S),S.isMeshPhysicalMaterial&&y(M,S,C)):S.isMeshMatcapMaterial?(c(M,S),R(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),w(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,I,X):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===oi&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===oi&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const I=t.get(S),X=I.envMap,C=I.envMapRotation;X&&(M.envMap.value=X,M.envMapRotation.value.setFromMatrix4(gw.makeRotationFromEuler(C)).transpose(),X.isCubeTexture&&X.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply($S),M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,I,X){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*I,M.scale.value=X*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function x(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function v(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function g(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,I){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===oi&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.retroreflectivity>0&&(M.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function R(M,S){S.matcap&&(M.matcap.value=S.matcap)}function w(M,S){const I=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function vw(o,t,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,U){const D=U.program;s.uniformBlockBinding(C,D)}function p(C,U){let D=l[C.id];D===void 0&&(M(C),D=x(C),l[C.id]=D,C.addEventListener("dispose",I));const P=U.program;s.updateUBOMapping(C,P);const b=t.render.frame;c[C.id]!==b&&(g(C),c[C.id]=b)}function x(C){const U=v();C.__bindingPointIndex=U;const D=o.createBuffer(),P=C.__size,b=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,P,b),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,D),D}function v(){for(let C=0;C<d;C++)if(h.indexOf(C)===-1)return h.push(C),C;return Fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const U=l[C.id],D=C.uniforms,P=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let b=0,L=D.length;b<L;b++){const H=D[b];if(Array.isArray(H))for(let q=0,Q=H.length;q<Q;q++)y(H[q],b,q,P);else y(H,b,0,P)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(C,U,D,P){if(w(C,U,D,P)===!0){const b=C.__offset,L=C.value;if(Array.isArray(L)){let H=0;for(let q=0;q<L.length;q++){const Q=L[q],at=S(Q);R(Q,C.__data,H),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(H+=at.storage/Float32Array.BYTES_PER_ELEMENT)}}else R(L,C.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,b,C.__data)}}function R(C,U,D){typeof C=="number"||typeof C=="boolean"?U[0]=C:C.isMatrix3?(U[0]=C.elements[0],U[1]=C.elements[1],U[2]=C.elements[2],U[3]=0,U[4]=C.elements[3],U[5]=C.elements[4],U[6]=C.elements[5],U[7]=0,U[8]=C.elements[6],U[9]=C.elements[7],U[10]=C.elements[8],U[11]=0):ArrayBuffer.isView(C)?U.set(new C.constructor(C.buffer,C.byteOffset,U.length)):C.toArray(U,D)}function w(C,U,D,P){const b=C.value,L=U+"_"+D;if(P[L]===void 0)return typeof b=="number"||typeof b=="boolean"?P[L]=b:ArrayBuffer.isView(b)?P[L]=b.slice():P[L]=b.clone(),!0;{const H=P[L];if(typeof b=="number"||typeof b=="boolean"){if(H!==b)return P[L]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(H.equals(b)===!1)return H.copy(b),!0}}return!1}function M(C){const U=C.uniforms;let D=0;const P=16;for(let L=0,H=U.length;L<H;L++){const q=Array.isArray(U[L])?U[L]:[U[L]];for(let Q=0,at=q.length;Q<at;Q++){const V=q[Q],J=Array.isArray(V.value)?V.value:[V.value];for(let k=0,$=J.length;k<$;k++){const ht=J[k],st=S(ht),pt=D%P,Et=pt%st.boundary,jt=pt+Et;D+=Et,jt!==0&&P-jt<st.storage&&(D+=P-jt),V.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=D,D+=st.storage}}}const b=D%P;return b>0&&(D+=P-b),C.__size=D,C.__cache={},this}function S(C){const U={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(U.boundary=4,U.storage=4):C.isVector2?(U.boundary=8,U.storage=8):C.isVector3||C.isColor?(U.boundary=16,U.storage=12):C.isVector4?(U.boundary=16,U.storage=16):C.isMatrix3?(U.boundary=48,U.storage=48):C.isMatrix4?(U.boundary=64,U.storage=64):C.isTexture?le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(U.boundary=16,U.storage=C.byteLength):le("WebGLRenderer: Unsupported uniform value type.",C),U}function I(C){const U=C.target;U.removeEventListener("dispose",I);const D=h.indexOf(U.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function X(){for(const C in l)o.deleteBuffer(l[C]);h=[],l={},c={}}return{bind:m,update:p,dispose:X}}const xw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ca=null;function Sw(){return ca===null&&(ca=new FS(xw,16,16,rr,_a),ca.name="DFG_LUT",ca.minFilter=kn,ca.magFilter=kn,ca.wrapS=Fa,ca.wrapT=Fa,ca.generateMipmaps=!1,ca.needsUpdate=!0),ca}class yw{constructor(t={}){const{canvas:i=wb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:y=yi}=t;this.isWebGLRenderer=!0;let R;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=s.getContextAttributes().alpha}else R=h;const w=y,M=new Set([Rm,Am,Tm]),S=new Set([yi,ga,Bl,Fl,Mm,Em]),I=new Uint32Array(4),X=new Int32Array(4),C=new K;let U=null,D=null;const P=[],b=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ma,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const H=this;let q=!1,Q=null,at=null,V=null,J=null;this._outputColorSpace=ri;let k=0,$=0,ht=null,st=-1,pt=null;const Et=new un,jt=new un;let kt=null;const B=new fe(0);let mt=0,At=i.width,Z=i.height,dt=1,Tt=null,Nt=null;const _t=new un(0,0,At,Z),Rt=new un(0,0,At,Z);let He=!1;const pe=new Um;let xe=!1,Ee=!1;const ee=new Qe,ie=new K,Ge=new un,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function Je(){return ht===null?dt:1}let N=s;function te(T,F){return i.getContext(T,F)}let ue,O,E,nt,ut,gt,Ct,Ut,vt,Mt,Dt,$t,zt,It,Xt,se,he,Y,wt,yt,Lt,Vt,bt;try{const T={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${xm}`),i.addEventListener("webglcontextlost",Pe,!1),i.addEventListener("webglcontextrestored",me,!1),i.addEventListener("webglcontextcreationerror",ui,!1),N===null){const F="webgl2";if(N=te(F,T),N===null)throw te(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(T){throw i.removeEventListener("webglcontextlost",Pe,!1),i.removeEventListener("webglcontextrestored",me,!1),i.removeEventListener("webglcontextcreationerror",ui,!1),Fe("WebGLRenderer: "+T.message),T}function Jt(){ue=new SR(N),ue.init(),Lt=new fw(N,ue),O=new cR(N,ue,t,Lt),E=new uw(N,ue),O.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),at=N.createFramebuffer(),V=N.createFramebuffer(),J=N.createFramebuffer(),nt=new ER(N),ut=new jC,gt=new cw(N,ue,E,ut,O,Lt,nt),Ct=new xR(H),Ut=new TT(N),Vt=new lR(N,Ut),vt=new yR(N,Ut,nt,Vt),Mt=new TR(N,vt,Ut,Vt,nt),Y=new bR(N,O,gt),Xt=new fR(ut),Dt=new ZC(H,Ct,ue,O,Vt,Xt),$t=new _w(H,ut),zt=new QC,It=new iw(ue),he=new oR(H,Ct,E,Mt,R,m),se=new lw(H,Mt,O),bt=new vw(N,nt,O,E),wt=new uR(N,ue,nt),yt=new MR(N,ue,nt),nt.programs=Dt.programs,H.capabilities=O,H.extensions=ue,H.properties=ut,H.renderLists=zt,H.shadowMap=se,H.state=E,H.info=nt}w!==yi&&(L=new RR(w,i.width,i.height,d,l,c));const Gt=new mw(H,N);this.xr=Gt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=ue.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ue.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(T){T!==void 0&&(dt=T,this.setSize(At,Z,!1))},this.getSize=function(T){return T.set(At,Z)},this.setSize=function(T,F,ft=!0){if(Gt.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}At=T,Z=F,i.width=Math.floor(T*dt),i.height=Math.floor(F*dt),ft===!0&&(i.style.width=T+"px",i.style.height=F+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(At*dt,Z*dt).floor()},this.setDrawingBufferSize=function(T,F,ft){At=T,Z=F,dt=ft,i.width=Math.floor(T*ft),i.height=Math.floor(F*ft),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(w===yi){Fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Et)},this.getViewport=function(T){return T.copy(_t)},this.setViewport=function(T,F,ft,rt){T.isVector4?_t.set(T.x,T.y,T.z,T.w):_t.set(T,F,ft,rt),E.viewport(Et.copy(_t).multiplyScalar(dt).round())},this.getScissor=function(T){return T.copy(Rt)},this.setScissor=function(T,F,ft,rt){T.isVector4?Rt.set(T.x,T.y,T.z,T.w):Rt.set(T,F,ft,rt),E.scissor(jt.copy(Rt).multiplyScalar(dt).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(T){E.setScissorTest(He=T)},this.setOpaqueSort=function(T){Tt=T},this.setTransparentSort=function(T){Nt=T},this.getClearColor=function(T){return T.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,ft=!0){let rt=0;if(T){let ot=!1;if(ht!==null){const Bt=ht.texture.format;ot=M.has(Bt)}if(ot){const Bt=ht.texture.type,Wt=S.has(Bt),Ot=he.getClearColor(),Zt=he.getClearAlpha(),Kt=Ot.r,oe=Ot.g,ge=Ot.b;Wt?(I[0]=Kt,I[1]=oe,I[2]=ge,I[3]=Zt,N.clearBufferuiv(N.COLOR,0,I)):(X[0]=Kt,X[1]=oe,X[2]=ge,X[3]=Zt,N.clearBufferiv(N.COLOR,0,X))}else rt|=N.COLOR_BUFFER_BIT}F&&(rt|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ft&&(rt|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),rt!==0&&N.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),Q=T},this.dispose=function(){i.removeEventListener("webglcontextlost",Pe,!1),i.removeEventListener("webglcontextrestored",me,!1),i.removeEventListener("webglcontextcreationerror",ui,!1),he.dispose(),zt.dispose(),It.dispose(),ut.dispose(),Ct.dispose(),Mt.dispose(),Vt.dispose(),bt.dispose(),Dt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",ws),Gt.removeEventListener("sessionend",Wa),ji.stop()};function Pe(T){T.preventDefault(),ef("WebGLRenderer: Context Lost."),q=!0}function me(){ef("WebGLRenderer: Context Restored."),q=!1;const T=nt.autoReset,F=se.enabled,ft=se.autoUpdate,rt=se.needsUpdate,ot=se.type;Jt(),nt.autoReset=T,se.enabled=F,se.autoUpdate=ft,se.needsUpdate=rt,se.type=ot}function ui(T){Fe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Mi(T){const F=T.target;F.removeEventListener("dispose",Mi),hf(F)}function hf(T){ur(T),ut.remove(T)}function ur(T){const F=ut.get(T).programs;F!==void 0&&(F.forEach(function(ft){Dt.releaseProgram(ft)}),T.isShaderMaterial&&Dt.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,ft,rt,ot,Bt){F===null&&(F=cn);const Wt=ot.isMesh&&ot.matrixWorld.determinantAffine()<0,Ot=Do(T,F,ft,rt,ot);E.setMaterial(rt,Wt);let Zt=ft.index,Kt=1;if(rt.wireframe===!0){if(Zt=vt.getWireframeAttribute(ft),Zt===void 0)return;Kt=2}const oe=ft.drawRange,ge=ft.attributes.position;let Yt=oe.start*Kt,Re=(oe.start+oe.count)*Kt;Bt!==null&&(Yt=Math.max(Yt,Bt.start*Kt),Re=Math.min(Re,(Bt.start+Bt.count)*Kt)),Zt!==null?(Yt=Math.max(Yt,0),Re=Math.min(Re,Zt.count)):ge!=null&&(Yt=Math.max(Yt,0),Re=Math.min(Re,ge.count));const be=Re-Yt;if(be<0||be===1/0)return;Vt.setup(ot,rt,Ot,ft,Zt);let $e,ke=wt;if(Zt!==null&&($e=Ut.get(Zt),ke=yt,ke.setIndex($e)),ot.isMesh)rt.wireframe===!0?(E.setLineWidth(rt.wireframeLinewidth*Je()),ke.setMode(N.LINES)):ke.setMode(N.TRIANGLES);else if(ot.isLine){let En=rt.linewidth;En===void 0&&(En=1),E.setLineWidth(En*Je()),ot.isLineSegments?ke.setMode(N.LINES):ot.isLineLoop?ke.setMode(N.LINE_LOOP):ke.setMode(N.LINE_STRIP)}else ot.isPoints?ke.setMode(N.POINTS):ot.isSprite&&ke.setMode(N.TRIANGLES);if(ot.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))ke.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{const En=ot._multiDrawStarts,Ft=ot._multiDrawCounts,fn=ot._multiDrawCount,Ie=Zt?Ut.get(Zt).bytesPerElement:1,Yn=ut.get(rt).currentProgram.getUniforms();for(let ci=0;ci<fn;ci++)Yn.setValue(N,"_gl_DrawID",ci),ke.render(En[ci]/Ie,Ft[ci])}else if(ot.isInstancedMesh)ke.renderInstances(Yt,be,ot.count);else if(ft.isInstancedBufferGeometry){const En=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Ft=Math.min(ft.instanceCount,En);ke.renderInstances(Yt,be,Ft)}else ke.render(Yt,be)};function Cs(T,F,ft,rt){Q!==null&&T.isNodeMaterial&&Q.setObject(rt,T),xe===!0&&Xt.setState(T,ft,!1),T.transparent===!0&&T.side===Pi&&T.forceSinglePass===!1?(T.side=oi,T.needsUpdate=!0,Ds(T,F,rt),T.side=ar,T.needsUpdate=!0,Ds(T,F,rt),T.side=Pi):Ds(T,F,rt)}this.compile=function(T,F,ft=null){ft===null&&(ft=T),Q!==null&&Q.renderStart(T,F,ft),D=It.get(ft),D.init(F),b.push(D),ft.traverseVisible(function(ot){ot.isLight&&ot.layers.test(F.layers)&&(D.pushLight(ot),ot.castShadow&&D.pushShadow(ot))}),T!==ft&&T.traverseVisible(function(ot){ot.isLight&&ot.layers.test(F.layers)&&(D.pushLight(ot),ot.castShadow&&D.pushShadow(ot))}),D.setupLights(),Q!==null&&Q.updateLights(D.state.lightsArray),Ee=this.localClippingEnabled,xe=Xt.init(this.clippingPlanes,Ee),xe===!0&&Xt.setGlobalState(this.clippingPlanes,F),Q!==null&&se.render(D.state.shadowsArray,ft,F);const rt=new Set;return T.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;const Bt=ot.material;if(Bt)if(Array.isArray(Bt))for(let Wt=0;Wt<Bt.length;Wt++){const Ot=Bt[Wt];Cs(Ot,ft,F,ot),rt.add(Ot)}else Cs(Bt,ft,F,ot),rt.add(Bt)}),D=b.pop(),Q!==null&&Q.renderEnd(),rt},this.compileAsync=function(T,F,ft=null){const rt=this.compile(T,F,ft);return new Promise(ot=>{function Bt(){if(rt.forEach(function(Wt){const Zt=ut.get(Wt).currentProgram;(Zt===void 0||Zt.isReady())&&rt.delete(Wt)}),rt.size===0){ot(T);return}setTimeout(Bt,10)}ue.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let ka=null;function xa(T){ka&&ka(T)}function ws(){ji.stop()}function Wa(){ji.start()}const ji=new YS;ji.setAnimationLoop(xa),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(T){ka=T,Gt.setAnimationLoop(T),T===null?ji.stop():ji.start()},Gt.addEventListener("sessionstart",ws),Gt.addEventListener("sessionend",Wa),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){Fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;Q!==null&&Q.renderStart(T,F);const ft=Gt.enabled===!0&&Gt.isPresenting===!0,rt=L!==null&&(ht===null||ft)&&L.begin(H,ht);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(F),F=Gt.getCamera()),T.isScene===!0&&T.onBeforeRender(H,T,F,ht),D=It.get(T,b.length),D.init(F),D.state.textureUnits=gt.getTextureUnits(),b.push(D),ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),pe.setFromProjectionMatrix(ee,pa,F.reversedDepth),Ee=this.localClippingEnabled,xe=Xt.init(this.clippingPlanes,Ee),U=zt.get(T,P.length),U.init(),P.push(U),Gt.enabled===!0&&Gt.isPresenting===!0){const Wt=H.xr.getDepthSensingMesh();Wt!==null&&To(Wt,F,-1/0,H.sortObjects)}To(T,F,0,H.sortObjects),U.finish(),Q!==null&&Q.updateLights(D.state.lightsArray),H.sortObjects===!0&&U.sort(Tt,Nt),Oe=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,Oe&&he.addToRenderList(U,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&Xt.beginShadows();const ot=D.state.shadowsArray;if(se.render(ot,T,F),xe===!0&&Xt.endShadows(),(rt&&L.hasRenderPass())===!1){const Wt=U.opaque,Ot=U.transmissive;if(D.setupLights(),F.isArrayCamera){const Zt=F.cameras;if(Ot.length>0)for(let Kt=0,oe=Zt.length;Kt<oe;Kt++){const ge=Zt[Kt];cr(Wt,Ot,T,ge)}Oe&&he.render(T);for(let Kt=0,oe=Zt.length;Kt<oe;Kt++){const ge=Zt[Kt];Ao(U,T,ge,ge.viewport)}}else Ot.length>0&&cr(Wt,Ot,T,F),Oe&&he.render(T),Ao(U,T,F)}ht!==null&&$===0&&(gt.updateMultisampleRenderTarget(ht),gt.updateRenderTargetMipmap(ht)),rt&&L.end(H),T.isScene===!0&&T.onAfterRender(H,T,F),Vt.resetDefaultState(),st=-1,pt=null,b.pop(),b.length>0?(D=b[b.length-1],gt.setTextureUnits(D.state.textureUnits),xe===!0&&Xt.setGlobalState(H.clippingPlanes,D.state.camera)):D=null,P.pop(),P.length>0?U=P[P.length-1]:U=null,Q!==null&&Q.renderEnd()};function To(T,F,ft,rt){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)ft=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLightProbeGrid)D.pushLightProbeGrid(T);else if(T.isLight)D.pushLight(T),T.castShadow&&D.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(pe)){rt&&Ge.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ee);const Wt=Mt.update(T),Ot=T.material;Ot.visible&&U.push(T,Wt,Ot,ft,Ge.z,null,F)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(pe))){const Wt=Mt.update(T),Ot=T.material;if(rt&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ge.copy(T.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),Ge.copy(Wt.boundingSphere.center)),Ge.applyMatrix4(T.matrixWorld).applyMatrix4(ee)),Array.isArray(Ot)){const Zt=Wt.groups;for(let Kt=0,oe=Zt.length;Kt<oe;Kt++){const ge=Zt[Kt],Yt=Ot[ge.materialIndex];Yt&&Yt.visible&&U.push(T,Wt,Yt,ft,Ge.z,ge,F)}}else Ot.visible&&U.push(T,Wt,Ot,ft,Ge.z,null,F)}}const Bt=T.children;for(let Wt=0,Ot=Bt.length;Wt<Ot;Wt++)To(Bt[Wt],F,ft,rt)}function Ao(T,F,ft,rt){const{opaque:ot,transmissive:Bt,transparent:Wt}=T;D.setupLightsView(ft),xe===!0&&Xt.setGlobalState(H.clippingPlanes,ft),rt&&E.viewport(Et.copy(rt)),ot.length>0&&Ki(ot,F,ft),Bt.length>0&&Ki(Bt,F,ft),Wt.length>0&&Ki(Wt,F,ft),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function cr(T,F,ft,rt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[rt.id]===void 0){const Yt=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[rt.id]=new Zi(1,1,{generateMipmaps:!0,type:Yt?_a:yi,minFilter:nr,samples:Math.max(4,O.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ze.workingColorSpace})}const Bt=D.state.transmissionRenderTarget[rt.id],Wt=rt.viewport||Et;Bt.setSize(Wt.z*H.transmissionResolutionScale,Wt.w*H.transmissionResolutionScale);const Ot=H.getRenderTarget(),Zt=H.getActiveCubeFace(),Kt=H.getActiveMipmapLevel();H.setRenderTarget(Bt),H.getClearColor(B),mt=H.getClearAlpha(),mt<1&&H.setClearColor(16777215,.5),H.clear(),Oe&&he.render(ft);const oe=H.toneMapping;H.toneMapping=ma;const ge=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),D.setupLightsView(rt),xe===!0&&Xt.setGlobalState(H.clippingPlanes,rt),Ki(T,ft,rt),gt.updateMultisampleRenderTarget(Bt),gt.updateRenderTargetMipmap(Bt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Re=0,be=F.length;Re<be;Re++){const $e=F[Re],{object:ke,geometry:En,material:Ft,group:fn}=$e;if(Ft.side===Pi&&ke.layers.test(rt.layers)){const Ie=Ft.side;Ft.side=oi,Ft.needsUpdate=!0,Yl(ke,ft,rt,En,Ft,fn),Ft.side=Ie,Ft.needsUpdate=!0,Yt=!0}}Yt===!0&&(gt.updateMultisampleRenderTarget(Bt),gt.updateRenderTargetMipmap(Bt))}H.setRenderTarget(Ot,Zt,Kt),H.setClearColor(B,mt),ge!==void 0&&(rt.viewport=ge),H.toneMapping=oe}function Ki(T,F,ft){const rt=F.isScene===!0?F.overrideMaterial:null;for(let ot=0,Bt=T.length;ot<Bt;ot++){const Wt=T[ot],{object:Ot,geometry:Zt,group:Kt}=Wt;let oe=Wt.material;oe.allowOverride===!0&&rt!==null&&(oe=rt),Ot.layers.test(ft.layers)&&Yl(Ot,F,ft,Zt,oe,Kt)}}function Yl(T,F,ft,rt,ot,Bt){Q!==null&&ot.isNodeMaterial&&Q.setObject(T,ot),T.onBeforeRender(H,F,ft,rt,ot,Bt),T.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ot.onBeforeRender(H,F,ft,rt,T,Bt),ot.transparent===!0&&ot.side===Pi&&ot.forceSinglePass===!1?(ot.side=oi,ot.needsUpdate=!0,H.renderBufferDirect(ft,F,rt,ot,T,Bt),ot.side=ar,ot.needsUpdate=!0,H.renderBufferDirect(ft,F,rt,ot,T,Bt),ot.side=Pi):H.renderBufferDirect(ft,F,rt,ot,T,Bt),T.onAfterRender(H,F,ft,rt,ot,Bt)}function Ds(T,F,ft){F.isScene!==!0&&(F=cn);const rt=ut.get(T),ot=D.state.lights,Bt=D.state.shadowsArray,Wt=ot.state.version,Ot=Dt.getParameters(T,ot.state,Bt,F,ft,D.state.lightProbeGridArray),Zt=Dt.getProgramCacheKey(Ot);let Kt=rt.programs;rt.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,rt.fog=F.fog;const oe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;rt.envMap=Ct.get(T.envMap||rt.environment,oe),rt.envMapRotation=rt.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Kt===void 0&&(T.addEventListener("dispose",Mi),Kt=new Map,rt.programs=Kt);let ge=Kt.get(Zt);if(ge!==void 0){if(rt.currentProgram===ge&&rt.lightsStateVersion===Wt)return Co(T,Ot),ge}else Ot.uniforms=Dt.getUniforms(T),Q!==null&&T.isNodeMaterial&&Q.build(T,ft,Ot),T.onBeforeCompile(Ot,H),ge=Dt.acquireProgram(Ot,Zt),Kt.set(Zt,ge),rt.uniforms=Ot.uniforms;const Yt=rt.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Yt.clippingPlanes=Xt.uniform),Co(T,Ot),rt.needsLights=Zl(T),rt.lightsStateVersion=Wt,rt.needsLights&&(Yt.ambientLightColor.value=ot.state.ambient,Yt.lightProbe.value=ot.state.probe,Yt.sunLights.value=ot.state.sun,Yt.sunLightShadows.value=ot.state.sunShadow,Yt.directionalLights.value=ot.state.directional,Yt.directionalLightShadows.value=ot.state.directionalShadow,Yt.spotLights.value=ot.state.spot,Yt.spotLightShadows.value=ot.state.spotShadow,Yt.rectAreaLights.value=ot.state.rectArea,Yt.ltc_1.value=ot.state.rectAreaLTC1,Yt.ltc_2.value=ot.state.rectAreaLTC2,Yt.pointLights.value=ot.state.point,Yt.pointLightShadows.value=ot.state.pointShadow,Yt.hemisphereLights.value=ot.state.hemi,Yt.sunShadowMatrix.value=ot.state.sunShadowMatrix,Yt.sunShadowCascade.value=ot.state.sunShadowCascade,Yt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Yt.spotLightMatrix.value=ot.state.spotLightMatrix,Yt.spotLightMap.value=ot.state.spotLightMap,Yt.pointShadowMatrix.value=ot.state.pointShadowMatrix),rt.lightProbeGrid=D.state.lightProbeGridArray.length>0,rt.currentProgram=ge,rt.uniformsList=null,ge}function Ro(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=jc.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Co(T,F){const ft=ut.get(T);ft.outputColorSpace=F.outputColorSpace,ft.batching=F.batching,ft.batchingColor=F.batchingColor,ft.instancing=F.instancing,ft.instancingColor=F.instancingColor,ft.instancingMorph=F.instancingMorph,ft.skinning=F.skinning,ft.morphTargets=F.morphTargets,ft.morphNormals=F.morphNormals,ft.morphColors=F.morphColors,ft.morphTargetsCount=F.morphTargetsCount,ft.numClippingPlanes=F.numClippingPlanes,ft.numIntersection=F.numClipIntersection,ft.vertexAlphas=F.vertexAlphas,ft.vertexTangents=F.vertexTangents,ft.toneMapping=F.toneMapping}function wo(T,F){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;C.setFromMatrixPosition(F.matrixWorld);for(let ft=0,rt=T.length;ft<rt;ft++){const ot=T[ft];if(ot.texture!==null&&ot.boundingBox.containsPoint(C))return ot}return null}function Do(T,F,ft,rt,ot){F.isScene!==!0&&(F=cn),gt.resetTextureUnits();const Bt=F.fog,Wt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial?F.environment:null,Ot=ht===null?H.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:ze.workingColorSpace,Zt=rt.isMeshStandardMaterial||rt.isMeshLambertMaterial&&!rt.envMap||rt.isMeshPhongMaterial&&!rt.envMap,Kt=Ct.get(rt.envMap||Wt,Zt),oe=rt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,ge=!!ft.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),Yt=!!ft.morphAttributes.position,Re=!!ft.morphAttributes.normal,be=!!ft.morphAttributes.color;let $e=ma;rt.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&($e=H.toneMapping);const ke=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,En=ke!==void 0?ke.length:0,Ft=ut.get(rt),fn=D.state.lights;if(xe===!0&&(Ee===!0||T!==pt)){const Ne=T===pt&&rt.id===st;Xt.setState(rt,T,Ne)}let Ie=!1;rt.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==fn.state.version||Ft.outputColorSpace!==Ot||ot.isBatchedMesh&&Ft.batching===!1||!ot.isBatchedMesh&&Ft.batching===!0||ot.isBatchedMesh&&Ft.batchingColor===!0&&ot._colorsTexture===null||ot.isBatchedMesh&&Ft.batchingColor===!1&&ot._colorsTexture!==null||ot.isInstancedMesh&&Ft.instancing===!1||!ot.isInstancedMesh&&Ft.instancing===!0||ot.isSkinnedMesh&&Ft.skinning===!1||!ot.isSkinnedMesh&&Ft.skinning===!0||ot.isInstancedMesh&&Ft.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Ft.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Ft.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Ft.instancingMorph===!1&&ot.morphTexture!==null||Ft.envMap!==Kt||rt.fog===!0&&Ft.fog!==Bt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Xt.numPlanes||Ft.numIntersection!==Xt.numIntersection)||Ft.vertexAlphas!==oe||Ft.vertexTangents!==ge||Ft.morphTargets!==Yt||Ft.morphNormals!==Re||Ft.morphColors!==be||Ft.toneMapping!==$e||Ft.morphTargetsCount!==En||!!Ft.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(Ie=!0):(Ie=!0,Ft.__version=rt.version);let Yn=Ft.currentProgram;Ie===!0&&(Yn=Ds(rt,F,ot),Q&&rt.isNodeMaterial&&Q.onUpdateProgram(rt,Yn,Ft));let ci=!1,Qi=!1,Te=!1;const Ve=Yn.getUniforms(),an=Ft.uniforms;if(E.useProgram(Yn.program)&&(ci=!0,Qi=!0,Te=!0),rt.id!==st&&(st=rt.id,Qi=!0),Ft.needsLights){const Ne=wo(D.state.lightProbeGridArray,ot);Ft.lightProbeGrid!==Ne&&(Ft.lightProbeGrid=Ne,Qi=!0)}if(ci||pt!==T){E.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ve.setValue(N,"projectionMatrix",T.projectionMatrix),Ve.setValue(N,"viewMatrix",T.matrixWorldInverse);const hn=Ve.map.cameraPosition;hn!==void 0&&hn.setValue(N,ie.setFromMatrixPosition(T.matrixWorld)),O.logarithmicDepthBuffer&&Ve.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Ve.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),pt!==T&&(pt=T,Qi=!0,Te=!0)}if(Ft.needsLights&&(fn.state.sunShadowMap.length>0&&Ve.setValue(N,"sunShadowMap",fn.state.sunShadowMap,gt),fn.state.directionalShadowMap.length>0&&Ve.setValue(N,"directionalShadowMap",fn.state.directionalShadowMap,gt),fn.state.spotShadowMap.length>0&&Ve.setValue(N,"spotShadowMap",fn.state.spotShadowMap,gt),fn.state.pointShadowMap.length>0&&Ve.setValue(N,"pointShadowMap",fn.state.pointShadowMap,gt)),ot.isSkinnedMesh){Ve.setOptional(N,ot,"bindMatrix"),Ve.setOptional(N,ot,"bindMatrixInverse");const Ne=ot.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),Ve.setValue(N,"boneTexture",Ne.boneTexture,gt))}ot.isBatchedMesh&&(Ve.setOptional(N,ot,"batchingTexture"),Ve.setValue(N,"batchingTexture",ot._matricesTexture,gt),Ve.setOptional(N,ot,"batchingIdTexture"),Ve.setValue(N,"batchingIdTexture",ot._indirectTexture,gt),Ve.setOptional(N,ot,"batchingColorTexture"),ot._colorsTexture!==null&&Ve.setValue(N,"batchingColorTexture",ot._colorsTexture,gt));const fi=ft.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&Y.update(ot,ft,Yn),(Qi||Ft.receiveShadow!==ot.receiveShadow)&&(Ft.receiveShadow=ot.receiveShadow,Ve.setValue(N,"receiveShadow",ot.receiveShadow)),(rt.isMeshStandardMaterial||rt.isMeshLambertMaterial||rt.isMeshPhongMaterial)&&rt.envMap===null&&F.environment!==null&&(an.envMapIntensity.value=F.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=Sw()),Qi){if(Ve.setValue(N,"toneMappingExposure",H.toneMappingExposure),Ft.needsLights&&ql(an,Te),Bt&&rt.fog===!0&&$t.refreshFogUniforms(an,Bt),$t.refreshMaterialUniforms(an,rt,dt,Z,D.state.transmissionRenderTarget[T.id]),Ft.needsLights&&Ft.lightProbeGrid){const Ne=Ft.lightProbeGrid;an.probesSH.value=Ne.texture,an.probesMin.value.copy(Ne.boundingBox.min),an.probesMax.value.copy(Ne.boundingBox.max),an.probesResolution.value.copy(Ne.resolution)}jc.upload(N,Ro(Ft),an,gt)}if(rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(jc.upload(N,Ro(Ft),an,gt),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Ve.setValue(N,"center",ot.center),Ve.setValue(N,"modelViewMatrix",ot.modelViewMatrix),Ve.setValue(N,"normalMatrix",ot.normalMatrix),Ve.setValue(N,"modelMatrix",ot.matrixWorld),rt.uniformsGroups!==void 0){const Ne=rt.uniformsGroups;for(let hn=0,Sa=Ne.length;hn<Sa;hn++){const jl=Ne[hn];bt.update(jl,Yn),bt.bind(jl,Yn)}}return Yn}function ql(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Zl(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ht},this.setRenderTargetTextures=function(T,F,ft){const rt=ut.get(T);rt.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),ut.get(T.texture).__webglTexture=F,ut.get(T.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:ft,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const ft=ut.get(T);ft.__webglFramebuffer=F,ft.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,ft=0){ht=T,k=F,$=ft;let rt=null,ot=!1,Bt=!1;if(T){const Ot=ut.get(T);if(Ot.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(N.FRAMEBUFFER,Ot.__webglFramebuffer),Et.copy(T.viewport),jt.copy(T.scissor),kt=T.scissorTest,E.viewport(Et),E.scissor(jt),E.setScissorTest(kt),st=-1;return}else if(Ot.__webglFramebuffer===void 0)gt.setupRenderTarget(T);else if(Ot.__hasExternalTextures)gt.rebindTextures(T,ut.get(T.texture).__webglTexture,ut.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const oe=T.depthTexture;if(Ot.__boundDepthTexture!==oe){if(oe!==null&&ut.has(oe)&&(T.width!==oe.image.width||T.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");gt.setupDepthRenderbuffer(T)}}const Zt=T.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Bt=!0);const Kt=ut.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Kt[F])?rt=Kt[F][ft]:rt=Kt[F],ot=!0):T.samples>0&&gt.useMultisampledRTT(T)===!1?rt=ut.get(T).__webglMultisampledFramebuffer:Array.isArray(Kt)?rt=Kt[ft]:rt=Kt,Et.copy(T.viewport),jt.copy(T.scissor),kt=T.scissorTest}else Et.copy(_t).multiplyScalar(dt).floor(),jt.copy(Rt).multiplyScalar(dt).floor(),kt=He;if(ft!==0&&(rt=at),E.bindFramebuffer(N.FRAMEBUFFER,rt)&&E.drawBuffers(T,rt),E.viewport(Et),E.scissor(jt),E.setScissorTest(kt),ot){const Ot=ut.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ot.__webglTexture,ft)}else if(Bt){const Ot=F;for(let Zt=0;Zt<T.textures.length;Zt++){const Kt=ut.get(T.textures[Zt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Zt,Kt.__webglTexture,ft,Ot)}}else if(T!==null&&ft!==0){const Ot=ut.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ot.__webglTexture,ft)}st=-1};function Ei(T){const F=ut.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=O.textureFormatReadable(T.format),F.__typeReadable=O.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,ft,rt,ot,Bt,Wt,Ot=0){if(!(T&&T.isWebGLRenderTarget)){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=ut.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Wt!==void 0&&(Zt=Zt[Wt]),Zt){E.bindFramebuffer(N.FRAMEBUFFER,Zt);try{const Kt=T.textures[Ot],oe=Kt.format,ge=Kt.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ot);const Yt=Ei(Kt);if(Yt.__formatReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Yt.__typeReadable===!1){Fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-rt&&ft>=0&&ft<=T.height-ot&&N.readPixels(F,ft,rt,ot,Lt.convert(oe),Lt.convert(ge),Bt)}finally{const Kt=ht!==null?ut.get(ht).__webglFramebuffer:null;E.bindFramebuffer(N.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(T,F,ft,rt,ot,Bt,Wt,Ot=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=ut.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Wt!==void 0&&(Zt=Zt[Wt]),Zt)if(F>=0&&F<=T.width-rt&&ft>=0&&ft<=T.height-ot){E.bindFramebuffer(N.FRAMEBUFFER,Zt);const Kt=T.textures[Ot],oe=Kt.format,ge=Kt.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ot);const Yt=Ei(Kt);if(Yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Re),N.bufferData(N.PIXEL_PACK_BUFFER,Bt.byteLength,N.STREAM_READ),N.readPixels(F,ft,rt,ot,Lt.convert(oe),Lt.convert(ge),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const be=ht!==null?ut.get(ht).__webglFramebuffer:null;E.bindFramebuffer(N.FRAMEBUFFER,be);const $e=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Db(N,$e,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Re),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Bt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Re),N.deleteSync($e),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,ft=0){const rt=Math.pow(2,-ft),ot=Math.floor(T.image.width*rt),Bt=Math.floor(T.image.height*rt),Wt=F!==null?F.x:0,Ot=F!==null?F.y:0;gt.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,ft,0,0,Wt,Ot,ot,Bt),E.unbindTexture()},this.copyTextureToTexture=function(T,F,ft=null,rt=null,ot=0,Bt=0){let Wt,Ot,Zt,Kt,oe,ge,Yt,Re,be;const $e=T.isCompressedTexture?T.mipmaps[Bt]:T.image;if(ft!==null)Wt=ft.max.x-ft.min.x,Ot=ft.max.y-ft.min.y,Zt=ft.isBox3?ft.max.z-ft.min.z:1,Kt=ft.min.x,oe=ft.min.y,ge=ft.isBox3?ft.min.z:0;else{const an=Math.pow(2,-ot);Wt=Math.floor($e.width*an),Ot=Math.floor($e.height*an),T.isDataArrayTexture?Zt=$e.depth:T.isData3DTexture?Zt=Math.floor($e.depth*an):Zt=1,Kt=0,oe=0,ge=0}rt!==null?(Yt=rt.x,Re=rt.y,be=rt.z):(Yt=0,Re=0,be=0);const ke=Lt.convert(F.format),En=Lt.convert(F.type);let Ft;F.isData3DTexture?(gt.setTexture3D(F,0),Ft=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(gt.setTexture2DArray(F,0),Ft=N.TEXTURE_2D_ARRAY):(gt.setTexture2D(F,0),Ft=N.TEXTURE_2D),E.activeTexture(N.TEXTURE0),E.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),E.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),E.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const fn=E.getParameter(N.UNPACK_ROW_LENGTH),Ie=E.getParameter(N.UNPACK_IMAGE_HEIGHT),Yn=E.getParameter(N.UNPACK_SKIP_PIXELS),ci=E.getParameter(N.UNPACK_SKIP_ROWS),Qi=E.getParameter(N.UNPACK_SKIP_IMAGES);E.pixelStorei(N.UNPACK_ROW_LENGTH,$e.width),E.pixelStorei(N.UNPACK_IMAGE_HEIGHT,$e.height),E.pixelStorei(N.UNPACK_SKIP_PIXELS,Kt),E.pixelStorei(N.UNPACK_SKIP_ROWS,oe),E.pixelStorei(N.UNPACK_SKIP_IMAGES,ge);const Te=T.isDataArrayTexture||T.isData3DTexture,Ve=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const an=ut.get(T),fi=ut.get(F),Ne=ut.get(an.__renderTarget),hn=ut.get(fi.__renderTarget);E.bindFramebuffer(N.READ_FRAMEBUFFER,Ne.__webglFramebuffer),E.bindFramebuffer(N.DRAW_FRAMEBUFFER,hn.__webglFramebuffer);for(let Sa=0;Sa<Zt;Sa++)Te&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ut.get(T).__webglTexture,ot,ge+Sa),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ut.get(F).__webglTexture,Bt,be+Sa)),N.blitFramebuffer(Kt,oe,Wt,Ot,Yt,Re,Wt,Ot,N.DEPTH_BUFFER_BIT,N.NEAREST);E.bindFramebuffer(N.READ_FRAMEBUFFER,null),E.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(ot!==0||T.isRenderTargetTexture||ut.has(T)){const an=ut.get(T),fi=ut.get(F);E.bindFramebuffer(N.READ_FRAMEBUFFER,V),E.bindFramebuffer(N.DRAW_FRAMEBUFFER,J);for(let Ne=0;Ne<Zt;Ne++)Te?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,an.__webglTexture,ot,ge+Ne):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,an.__webglTexture,ot),Ve?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,fi.__webglTexture,Bt,be+Ne):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,fi.__webglTexture,Bt),ot!==0?N.blitFramebuffer(Kt,oe,Wt,Ot,Yt,Re,Wt,Ot,N.COLOR_BUFFER_BIT,N.NEAREST):Ve?N.copyTexSubImage3D(Ft,Bt,Yt,Re,be+Ne,Kt,oe,Wt,Ot):N.copyTexSubImage2D(Ft,Bt,Yt,Re,Kt,oe,Wt,Ot);E.bindFramebuffer(N.READ_FRAMEBUFFER,null),E.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ve?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Ft,Bt,Yt,Re,be,Wt,Ot,Zt,ke,En,$e.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Ft,Bt,Yt,Re,be,Wt,Ot,Zt,ke,$e.data):N.texSubImage3D(Ft,Bt,Yt,Re,be,Wt,Ot,Zt,ke,En,$e):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Bt,Yt,Re,Wt,Ot,ke,En,$e.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Bt,Yt,Re,$e.width,$e.height,ke,$e.data):N.texSubImage2D(N.TEXTURE_2D,Bt,Yt,Re,Wt,Ot,ke,En,$e);E.pixelStorei(N.UNPACK_ROW_LENGTH,fn),E.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ie),E.pixelStorei(N.UNPACK_SKIP_PIXELS,Yn),E.pixelStorei(N.UNPACK_SKIP_ROWS,ci),E.pixelStorei(N.UNPACK_SKIP_IMAGES,Qi),Bt===0&&F.generateMipmaps&&N.generateMipmap(Ft),E.unbindTexture()},this.initRenderTarget=function(T){ut.get(T).__webglFramebuffer===void 0&&gt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?gt.setTextureCube(T,0):T.isData3DTexture?gt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?gt.setTexture2DArray(T,0):gt.setTexture2D(T,0),E.unbindTexture()},this.resetState=function(){k=0,$=0,ht=null,E.reset(),Vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=ze._getDrawingBufferColorSpace(t),i.unpackColorSpace=ze._getUnpackColorSpace()}}const hS={type:"change"},zm={type:"start"},ty={type:"end"},Xc=new lf,dS=new fa,Mw=Math.cos(70*Lb.DEG2RAD),Tn=new K,ai=2*Math.PI,Ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tp=1e-6;class Ew extends ET{constructor(t,i=null){super(t,i),this.state=Ke.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vo.ROTATE,MIDDLE:vo.DOLLY,RIGHT:vo.PAN},this.touches={ONE:go.ROTATE,TWO:go.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Xa,this._lastTargetPosition=new K,this._quat=new Xa().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hx,this._sphericalDelta=new Hx,this._scale=1,this._panOffset=new K,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new K,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Tw.bind(this),this._onPointerDown=bw.bind(this),this._onPointerUp=Aw.bind(this),this._onContextMenu=Lw.bind(this),this._onMouseWheel=ww.bind(this),this._onKeyDown=Dw.bind(this),this._onTouchStart=Nw.bind(this),this._onTouchMove=Uw.bind(this),this._onMouseDown=Rw.bind(this),this._onMouseMove=Cw.bind(this),this._interceptControlDown=Ow.bind(this),this._interceptControlUp=Pw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ke.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hS),this.update(),this.state=Ke.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;Tn.copy(i).sub(this.target),Tn.applyQuaternion(this._quat),this._spherical.setFromVector3(Tn),this.autoRotate&&this.state===Ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ai:s>Math.PI&&(s-=ai),l<-Math.PI?l+=ai:l>Math.PI&&(l-=ai),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(Tn.setFromSpherical(this._spherical),Tn.applyQuaternion(this._quatInverse),i.copy(this.target).add(Tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=Tn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new K(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new K(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=Tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Xc.origin.copy(this.object.position),Xc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xc.direction))<Mw?this.object.lookAt(this.target):(dS.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xc.intersectPlane(dS,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Tp||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tp||this._lastTargetPosition.distanceToSquared(this.target)>Tp?(this.dispatchEvent(hS),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ai/60*this.autoRotateSpeed*t:ai/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){Tn.setFromMatrixColumn(i,0),Tn.multiplyScalar(-t),this._panOffset.add(Tn)}_panUp(t,i){this.screenSpacePanning===!0?Tn.setFromMatrixColumn(i,1):(Tn.setFromMatrixColumn(i,0),Tn.crossVectors(this.object.up,Tn)),Tn.multiplyScalar(t),this._panOffset.add(Tn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Tn.copy(l).sub(this.target);let c=Tn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ai*this._rotateDelta.x/i.clientHeight),this._rotateUp(ai*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ai*this._rotateDelta.x/i.clientHeight),this._rotateUp(ai*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ae,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function bw(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Tw(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function Aw(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ty),this.state=Ke.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function Rw(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case vo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ke.DOLLY;break;case vo.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ke.ROTATE}break;case vo.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ke.PAN}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(zm)}function Cw(o){switch(this.state){case Ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function ww(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ke.NONE||(o.preventDefault(),this.dispatchEvent(zm),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(ty))}function Dw(o){this.enabled!==!1&&this._handleKeyDown(o)}function Nw(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case go.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ke.TOUCH_ROTATE;break;case go.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ke.TOUCH_PAN;break;default:this.state=Ke.NONE}break;case 2:switch(this.touches.TWO){case go.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ke.TOUCH_DOLLY_PAN;break;case go.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ke.TOUCH_DOLLY_ROTATE;break;default:this.state=Ke.NONE}break;default:this.state=Ke.NONE}this.state!==Ke.NONE&&this.dispatchEvent(zm)}function Uw(o){switch(this._trackPointer(o),this.state){case Ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ke.NONE}}function Lw(o){this.enabled!==!1&&o.preventDefault()}function Ow(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Pw(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const pS=[new fe("#143caf"),new fe("#288eaf"),new fe("#80bba5"),new fe("#d5d19c"),new fe("#bb7447")];function Ap(o){o=Math.max(0,Math.min(.999999,o));const t=Math.floor(o*4);return pS[t].clone().lerp(pS[t+1],o*4-t)}class Iw{constructor(t,i){de(this,"scene",new qb);de(this,"renderer");de(this,"camera");de(this,"controls");de(this,"group",new bs);de(this,"gridGroup",new bs);de(this,"model");de(this,"z",new Float32Array);de(this,"rows",0);de(this,"cols",0);de(this,"dx",1);de(this,"dy",1);de(this,"width",1);de(this,"depth",1);de(this,"span",1);de(this,"exaggeration",3);de(this,"top");de(this,"walls");de(this,"bottom");de(this,"cap");de(this,"trace");de(this,"contours");de(this,"marker");de(this,"plane");de(this,"topMaterial",new gp({vertexColors:!0,roughness:.9,metalness:0,side:Pi}));de(this,"bodyMaterial",new gp({color:"#50616a",roughness:1,side:Pi}));de(this,"capMaterial",new gp({color:"#607c81",roughness:1,side:Pi}));de(this,"freedom");de(this,"routeGroup",new bs);de(this,"key",new zx("#fff2dc",2.7));de(this,"inspection",!1);de(this,"axis","ns");de(this,"fraction",.5);de(this,"cut",!1);de(this,"contourVisible",!1);de(this,"wireframe",!1);de(this,"colorMode","elevation");de(this,"dirty",!0);de(this,"resize");de(this,"frame",0);de(this,"disposed",!1);de(this,"canvas");de(this,"onPick");de(this,"down",{x:0,y:0});this.onPick=i,this.scene.background=new fe("#101c25"),this.renderer=new yw({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.6)),this.renderer.localClippingEnabled=!0,this.renderer.outputColorSpace=ri,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.type=Pl,this.renderer.toneMapping=Sm,this.renderer.toneMappingExposure=1.05,this.renderer.setSize(t.clientWidth,t.clientHeight),t.appendChild(this.renderer.domElement),this.canvas=this.renderer.domElement,this.camera=new Oi(45,t.clientWidth/t.clientHeight,.1,1e6),this.controls=new Ew(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.09,this.controls.minPolarAngle=.06,this.controls.maxPolarAngle=Math.PI*.49,this.controls.minZoom=.3,this.controls.maxZoom=12,this.scene.add(new mT("#d7edff","#293943",.8));const s=this.key;s.castShadow=!0,s.shadow.mapSize.set(2048,2048),s.shadow.bias=-65e-5,this.scene.add(s,s.target);const l=new zx("#accce4",.25);l.position.set(1,.4,-1),this.scene.add(l),this.controls.addEventListener("change",()=>{this.dirty=!0}),this.scene.add(this.group,this.gridGroup),this.resize=new ResizeObserver(()=>{this.renderer.setSize(t.clientWidth,t.clientHeight),this.resizeCamera()}),this.resize.observe(t),this.canvas.addEventListener("pointerdown",h=>{this.down={x:h.clientX,y:h.clientY}}),this.canvas.addEventListener("pointerup",h=>{Math.hypot(h.clientX-this.down.x,h.clientY-this.down.y)<4&&this.pick(h)});const c=()=>{this.disposed||(this.frame=requestAnimationFrame(c),this.controls.update(),this.dirty&&(this.renderer.render(this.scene,this.camera),this.dirty=!1))};c()}resizeCamera(){this.dirty=!0,this.camera.aspect=this.canvas.clientWidth/this.canvas.clientHeight,this.camera.updateProjectionMatrix()}disposeObject(t){t.traverse(i=>{const s=i;s.geometry&&s.geometry.dispose()}),t.removeFromParent()}load(t){this.dirty=!0;for(const x of[...this.group.children])this.disposeObject(x);for(const x of[...this.gridGroup.children])this.disposeObject(x);this.top=this.walls=this.bottom=this.cap=this.marker=void 0,this.freedom=void 0,this.routeGroup=new bs,this.group.add(this.routeGroup),this.trace=void 0,this.contours=void 0,this.model=t,this.z=new Float32Array(Uint8Array.from(atob(t.data),x=>x.charCodeAt(0)).buffer),[this.rows,this.cols]=t.shape,this.dx=t.spacing_map_m*Math.cos(t.center_lonlat[1]*Math.PI/180),this.dy=t.spacing_map_m,this.width=(this.cols-1)*this.dx,this.depth=(this.rows-1)*this.dy,this.span=Math.max(this.width,this.depth);const i=new Float32Array(this.z.length*3),s=new Uint32Array((this.rows-1)*(this.cols-1)*6);let l=0;for(let x=0;x<this.rows;x++)for(let v=0;v<this.cols;v++){const g=x*this.cols+v;i.set(this.point(x,v),g*3),x<this.rows-1&&v<this.cols-1&&(s.set([g,g+1,g+this.cols,g+1,g+this.cols+1,g+this.cols],l),l+=6)}const c=new An;c.setAttribute("position",new li(i,3)),c.setIndex(new li(s,1)),c.computeVertexNormals(),this.top=new Ln(c,this.topMaterial),this.top.castShadow=!0,this.top.receiveShadow=!0,this.group.add(this.top);const h=[];for(let x=0;x<this.cols;x++)h.push(this.point(0,x));for(let x=1;x<this.rows;x++)h.push(this.point(x,this.cols-1));for(let x=this.cols-2;x>=0;x--)h.push(this.point(this.rows-1,x));for(let x=this.rows-2;x>0;x--)h.push(this.point(x,0));h.push(h[0]),this.walls=new Ln(this.curtain(h),this.bodyMaterial),this.group.add(this.walls);const d=new Wl(this.width,this.depth);d.rotateX(-Math.PI/2),this.bottom=new Ln(d,this.bodyMaterial),this.group.add(this.bottom),this.setColor(this.colorMode),this.buildContours(),this.buildGrid(),this.setExaggeration(this.exaggeration),this.setSection(this.axis,this.fraction,this.cut),this.setInspection(this.inspection);const m=this.key;m.position.set(-this.span*.65,this.span*1.1,this.span*.4),m.target.position.set(0,0,0);const p=m.shadow.camera;p.left=p.bottom=-this.span,p.right=p.top=this.span,p.near=this.span*.01,p.far=this.span*5,p.updateProjectionMatrix(),this.renderer.shadowMap.needsUpdate=!0,m.shadow.normalBias=this.span*8e-4,this.controls.minDistance=this.span*.07,this.controls.maxDistance=this.span*6,this.camera.near=this.span*1e-4,this.camera.far=this.span*30,this.home()}point(t,i){return[(i-(this.cols-1)/2)*this.dx,this.z[t*this.cols+i]-this.model.base_elevation_m,(t-(this.rows-1)/2)*this.dy]}curtain(t){const i=[];for(let l=0;l<t.length-1;l++){const c=t[l],h=t[l+1];i.push(...c,c[0],0,c[2],...h,...h,c[0],0,c[2],h[0],0,h[2])}const s=new An;return s.setAttribute("position",new mn(i,3)),s.computeVertexNormals(),s}slope(t,i){const s=this.z[t*this.cols+Math.max(0,i-1)],l=this.z[t*this.cols+Math.min(this.cols-1,i+1)],c=this.z[Math.max(0,t-1)*this.cols+i],h=this.z[Math.min(this.rows-1,t+1)*this.cols+i];return Math.atan(Math.hypot((l-s)/(i===0||i===this.cols-1?this.dx:2*this.dx),(h-c)/(t===0||t===this.rows-1?this.dy:2*this.dy)))*180/Math.PI}setColor(t){var c;if(this.dirty=!0,this.colorMode=t,!this.model||!this.top)return;const i=new Float32Array(this.z.length*3),[s,l]=this.model.elevation_range_m;for(let h=0;h<this.rows;h++)for(let d=0;d<this.cols;d++){const m=h*this.cols+d;let p;if(t==="mission"&&((c=this.freedom)==null?void 0:c.length)===this.z.length){const x=["#75818a","#e98274","#dfbc64","#65d2a6"];p=Ap((this.z[m]-s)/(l-s)).lerp(new fe(x[this.freedom[m]]),.72)}else t==="slope"?p=Ap(this.slope(h,d)/35):t==="neutral"?p=new fe("#b6c3c4"):p=Ap((this.z[m]-s)/(l-s));i.set([p.r,p.g,p.b],m*3)}this.top.geometry.setAttribute("color",new li(i,3))}setExaggeration(t){this.dirty=!0,this.renderer.shadowMap.needsUpdate=!0,this.exaggeration=t,this.group.scale.y=t,this.controls.target.y=this.model?(this.model.elevation_range_m[0]+this.model.elevation_range_m[1]-2*this.model.base_elevation_m)/2*t*.65:0}setWireframe(t){this.dirty=!0,this.wireframe=t,this.topMaterial.wireframe=t}buildContours(){if(this.contours&&this.disposeObject(this.contours),!this.model)return;const t=this.model.spacing_map_m===1?2:20,i=[],s=c=>{const h=Math.min(...c.map(m=>m[1]))+this.model.base_elevation_m,d=Math.max(...c.map(m=>m[1]))+this.model.base_elevation_m;for(let m=Math.ceil(h/t)*t;m<d;m+=t){const p=m-this.model.base_elevation_m,x=[];for(let v=0;v<3;v++){const g=c[v],y=c[(v+1)%3];if(g[1]<=p&&y[1]>p||y[1]<=p&&g[1]>p){const R=(p-g[1])/(y[1]-g[1]);x.push([g[0]+R*(y[0]-g[0]),p+this.span*5e-4,g[2]+R*(y[2]-g[2])])}}x.length===2&&i.push(...x[0],...x[1])}};for(let c=0;c<this.rows-1;c++)for(let h=0;h<this.cols-1;h++){const d=this.point(c,h),m=this.point(c,h+1),p=this.point(c+1,h),x=this.point(c+1,h+1);s([d,m,p]),s([m,x,p])}const l=new An;l.setAttribute("position",new mn(i,3)),this.contours=new HS(l,new Vl({color:"#182c36",transparent:!0,opacity:.48})),this.contours.visible=this.contourVisible,this.group.add(this.contours)}setContours(t){this.dirty=!0,this.contourVisible=t,this.contours&&(this.contours.visible=t)}section(t=this.axis,i=this.fraction){const s=[];if(t==="ns"){const l=Math.round(i*(this.cols-1));for(let c=0;c<this.rows;c++)s.push({row:c,col:l,distance_m:c*this.dy,elevation_m:this.z[c*this.cols+l]})}else{const l=Math.round(i*(this.rows-1));for(let c=0;c<this.cols;c++)s.push({row:l,col:c,distance_m:c*this.dx,elevation_m:this.z[l*this.cols+c]})}return s}setSection(t,i,s){if(this.dirty=!0,this.axis=t,this.fraction=i,this.cut=s,!this.model)return[];this.cap&&this.disposeObject(this.cap),this.trace&&this.disposeObject(this.trace);const l=this.section(),c=l.map(p=>this.point(p.row,p.col)),h=t==="ns"?c[0][0]:c[0][2];this.plane=new fa(t==="ns"?new K(-1,0,0):new K(0,0,-1),h);const d=s?[this.plane]:[];this.routeGroup.traverse(p=>{p instanceof Ln&&(p.material.clippingPlanes=d,p.material.needsUpdate=!0)}),this.topMaterial.clippingPlanes=d,this.bodyMaterial.clippingPlanes=d,this.topMaterial.needsUpdate=!0,this.bodyMaterial.needsUpdate=!0,this.contours&&(this.contours.material.clippingPlanes=d),this.cap=new Ln(this.curtain(c),this.capMaterial),this.cap.visible=s,this.group.add(this.cap);const m=new An().setFromPoints(c.map(p=>new K(p[0],p[1]+this.span*.001,p[2])));return this.trace=new Lm(m,new Vl({color:"#adf2d4",linewidth:2})),this.trace.visible=this.inspection,this.group.add(this.trace),l}hover(t){if(this.dirty=!0,this.marker&&this.disposeObject(this.marker),this.marker=void 0,!t)return;const i=this.point(t.row,t.col);this.marker=new Ln(new Pm(this.span*.008,12,12),new Gl({color:"#e8fff2"})),this.marker.position.set(i[0],i[1]+this.span*.003,i[2]),this.group.add(this.marker)}text(t,i,s,l,c,h="#a8bdc8"){const d=document.createElement("canvas");d.width=1024,d.height=128;const m=d.getContext("2d");m.font="70px sans-serif",m.textAlign="center",m.fillStyle=h,m.fillText(t,512,85);const p=new rT(d);p.colorSpace=ri;const x=new eT(new zS({map:p,transparent:!0,depthTest:!1}));x.position.set(i,s,l),x.scale.set(c*8,c,1),this.gridGroup.add(x)}buildGrid(){const t=this.model.spacing_map_m===1?100:2e3,i=Math.ceil(this.span/t+4)*t,s=new yT(i,i/t,"#58717c","#2b404a");s.position.y=-this.span*.08,this.gridGroup.add(s),this.text("EAST  →",this.width*.67,0,0,this.span*.036),this.text("NORTH",0,0,-this.depth*.66,this.span*.036),this.text(`${Math.round(this.width)} m`,0,0,this.depth*.65,this.span*.038),this.text(`${Math.round(this.depth)} m`,-this.width*.68,0,0,this.span*.038);const l=new MT(new K(0,0,-1),new K(-this.width*.7,0,-this.depth*.2),this.span*.25,10012110,this.span*.025,this.span*.014);this.gridGroup.add(l)}setInspection(t){this.dirty=!0,this.inspection=t,this.gridGroup.visible=t,this.walls&&(this.walls.visible=t),this.bottom&&(this.bottom.visible=t),this.trace&&(this.trace.visible=t)}home(t="relief"){this.dirty=!0,this.resizeCamera(),this.camera.zoom=1;const i=this.model,s=i?((i.elevation_range_m[0]+i.elevation_range_m[1])/2-i.base_elevation_m)*this.exaggeration:0;this.camera.up.set(0,1,0),t==="top"?(this.camera.position.set(0,s+this.span*1.6,.001),this.camera.up.set(0,0,-1)):t==="front"?this.camera.position.set(0,s+this.span*.18,this.span*.95):t==="overview"||t==="iso"?this.camera.position.set(this.span*.9,s+this.span*.95,this.span*1.15):this.camera.position.set(this.span*.39,s+this.span*.38,this.span*.72),this.controls.target.set(0,s,-this.span*.03),this.camera.lookAt(this.controls.target),this.camera.updateProjectionMatrix(),this.controls.update()}pick(t){if(!this.top||!this.model)return;const i=this.canvas.getBoundingClientRect(),s=new ST;s.setFromCamera(new ae((t.clientX-i.left)/i.width*2-1,-(t.clientY-i.top)/i.height*2+1),this.camera);const l=s.intersectObject(this.top)[0];if(!l||this.cut&&this.plane.distanceToPoint(l.point)<-1e-5)return;const c=Math.max(0,Math.min(this.cols-1,Math.round(l.point.x/this.dx+(this.cols-1)/2))),h=Math.max(0,Math.min(this.rows-1,Math.round(l.point.z/this.dy+(this.rows-1)/2))),[d,,m,,,p]=this.model.transform;this.onPick({lon:(m+(c+.5)*d)/this.model.radius_m*180/Math.PI,lat:(p-(h+.5)*d)/this.model.radius_m*180/Math.PI,row:h,col:c,elevation_m:this.z[h*this.cols+c],slope_deg:this.slope(h,c)})}mission(t,i,s){var c;this.dirty=!0;for(const h of[...this.routeGroup.children])this.disposeObject(h);if(((c=this.model)==null?void 0:c.id)!=="regional")return;this.freedom=s;const l=([h,d,m])=>{const[p,,x,,,v]=this.model.transform,g=(h*Math.PI/180*this.model.radius_m-x)/p-.5,y=(v-d*Math.PI/180*this.model.radius_m)/p-.5;return new K((g-(this.cols-1)/2)*this.dx,m-this.model.base_elevation_m+12,(y-(this.rows-1)/2)*this.dy)};for(const[h,d,m]of[[i,"#f6f8ed",28],[t,"#36bdf4",24]]){if(h.length<2)continue;const p=new uf(1,1,1,6),x=new aT(p,new Gl({color:d,clippingPlanes:this.cut&&this.plane?[this.plane]:[]}),h.length-1),v=new K(0,1,0);for(let g=0;g<h.length-1;g++){const y=l(h[g]),R=l(h[g+1]),w=R.clone().sub(y),M=w.length();x.setMatrixAt(g,new Qe().compose(y.add(R).multiplyScalar(.5),new Xa().setFromUnitVectors(v,w.normalize()),new K(m,M,m)))}x.instanceMatrix.needsUpdate=!0,this.routeGroup.add(x)}this.colorMode==="mission"&&this.setColor("mission")}snapshot(){return this.renderer.domElement.toDataURL("image/png")}destroy(){this.disposed=!0,cancelAnimationFrame(this.frame),this.resize.disconnect(),this.controls.dispose(),this.renderer.dispose();for(const t of[...this.group.children])this.disposeObject(t);for(const t of[...this.gridGroup.children])this.disposeObject(t);this.canvas.remove()}}const si=(o,t=1)=>o===void 0?"—":o.toFixed(t);async function Rp(o){const t=await fetch(o);if(!t.ok)throw Error(await t.text());return t.json()}function zw({points:o,axis:t,onHover:i}){const[s,l]=ve.useState();if(!o.length)return null;const c=Math.min(...o.map(x=>x.elevation_m)),h=Math.max(...o.map(x=>x.elevation_m)),d=Math.max(h-c,1),m=o.at(-1).distance_m,p=o.map((x,v)=>`${v?"L":"M"}${x.distance_m/m*800},${100-(x.elevation_m-c)/d*75}`).join(" ");return W.jsxs("div",{className:"geo-profile",children:[W.jsxs("div",{className:"geo-profile-info",children:[W.jsxs("span",{children:[si(h,1)," m"]}),W.jsx("b",{children:s?`${si(s.distance_m,1)} m along section · ${si(s.elevation_m,2)} m elevation`:"Move over this profile to locate the surface sample in 3D"})]}),W.jsxs("svg",{viewBox:"0 0 800 122",preserveAspectRatio:"none",onMouseMove:x=>{const v=x.currentTarget.getBoundingClientRect(),g=Math.max(0,Math.min(1,(x.clientX-v.left)/v.width)),y=o[Math.round(g*(o.length-1))];l(y),i(y)},onMouseLeave:()=>{l(void 0),i()},role:"img","aria-label":"Measured terrain cross-section",children:[W.jsx("defs",{children:W.jsxs("linearGradient",{id:"geoSectionFill",x1:"0",y1:"0",x2:"0",y2:"1",children:[W.jsx("stop",{offset:"0",stopColor:"#a3dbbe",stopOpacity:".25"}),W.jsx("stop",{offset:"1",stopColor:"#a3dbbe",stopOpacity:"0"})]})}),W.jsx("path",{d:p+" L800,122 L0,122 Z",fill:"url(#geoSectionFill)"}),W.jsx("path",{d:p,fill:"none",stroke:"#a6e7ce",strokeWidth:"2",vectorEffect:"non-scaling-stroke"}),s&&W.jsx("line",{x1:s.distance_m/m*800,x2:s.distance_m/m*800,y1:"0",y2:"122",stroke:"#b8dacf",strokeDasharray:"3 4"})]}),W.jsxs("div",{className:"geo-profile-axis",children:[W.jsxs("span",{children:[t==="ns"?"N":"W"," · 0 m"]}),W.jsxs("span",{children:[si(c,1)," m minimum · profile axes scaled independently"]}),W.jsxs("span",{children:[si(m,1)," m · ",t==="ns"?"S":"E"]})]})]})}function Bw({openMission:o,savedMission:t}){var Oe,Je;const i=ve.useRef(null),s=ve.useRef(null),l=ve.useRef(0),[c,h]=ve.useState([]),[d,m]=ve.useState(),[p,x]=ve.useState("skinner_ridge"),[v,g]=ve.useState(!0),[y,R]=ve.useState(""),[w,M]=ve.useState("ns"),[S,I]=ve.useState(.52),[X,C]=ve.useState(!1),[U,D]=ve.useState(3),[P,b]=ve.useState("elevation"),[L,H]=ve.useState(!1),[q,Q]=ve.useState(!1),[at,V]=ve.useState([]),[J,k]=ve.useState(),[$,ht]=ve.useState((t==null?void 0:t.request.remaining_min)||300),[st,pt]=ve.useState(),[Et,jt]=ve.useState(),[kt,B]=ve.useState(!1),[mt,At]=ve.useState(0),[Z,dt]=ve.useState(!1);ve.useEffect(()=>{var N;(N=s.current)==null||N.setInspection(Z),Z||C(!1)},[Z]);const[Tt,Nt]=ve.useState(!1),[_t,Rt]=ve.useState(),[He,pe]=ve.useState(!1);ve.useEffect(()=>{let N=!1;return s.current=new Iw(i.current,te=>{k(te),dt(!0)}),Rp("/v1/geomodel/models").then(te=>{N||h(te.models)}).catch(te=>R(te.message)),()=>{var te;N=!0,(te=s.current)==null||te.destroy(),s.current=null}},[]),ve.useEffect(()=>{const N=++l.current;return g(!0),R(""),k(void 0),Rt(void 0),Rp("/v1/geomodel/models/"+p).then(te=>{N===l.current&&(s.current.load(te),m(te),V(s.current.setSection(w,S,X)),g(!1))}).catch(te=>{N===l.current&&(R(te.message),g(!1))}),()=>{l.current===N&&l.current++}},[p]),ve.useEffect(()=>{d&&V(s.current.setSection(w,S,X))},[d,w,S,X]),ve.useEffect(()=>{var N;(N=s.current)==null||N.setExaggeration(U)},[U]),ve.useEffect(()=>{var N;(N=s.current)==null||N.setColor(P)},[P]),ve.useEffect(()=>{var N;(N=s.current)==null||N.setContours(L)},[L]),ve.useEffect(()=>{var N;(N=s.current)==null||N.setWireframe(q)},[q]),ve.useEffect(()=>{let N=!1;if(Rt(void 0),!!J)return pe(!0),Rp(`/v1/evidence/at?lon=${J.lon}&lat=${J.lat}`).then(te=>{N||Rt(te)}).catch(te=>{N||R(te.message)}).finally(()=>{N||pe(!1)}),()=>{N=!0}},[J]),ve.useEffect(()=>{var N;(d==null?void 0:d.id)==="regional"&&st&&Et&&mt===$&&((N=s.current)==null||N.mission(st.mission.route_lon_lat_areoid_height,st.return.route_lon_lat_areoid_height,Et))},[d,st,Et,$,mt]);async function xe(){if(!kt){B(!0),R("");try{const N={...(t==null?void 0:t.request)||{position:{lon:77.397,lat:18.485},habitat:{lon:77.415,lat:18.466},reserve_min:72,activities:[{id:"Swift Run",lon:77.40617078,lat:18.458931,dwell_min:15,type:"required"},{id:"Hazeltop",lon:77.40588851,lat:18.45863707,dwell_min:15,type:"required"}],detour_dwell_min:10},remaining_min:$,include_field:!0},te=await fetch("/v1/mission/evaluate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)});if(!te.ok)throw Error(await te.text());const ue=await te.json(),O=Uint8Array.from(atob(ue.field.data),nt=>nt.charCodeAt(0)),E=new Uint8Array(await new Response(new Blob([O]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer());pt(ue),jt(E),At($),C(!1),x("regional"),b("mission")}catch(N){R(N.message)}finally{B(!1)}}}function Ee(N){var te,ue;ht(N),b("elevation"),((ue=(te=s.current)==null?void 0:te.model)==null?void 0:ue.id)==="regional"&&s.current.mission([],[],new Uint8Array)}const ee=d==null?void 0:d.elevation_range_m[1],ie=d==null?void 0:d.elevation_range_m[0],Ge=ee!==void 0&&ie!==void 0?ee-ie:void 0;function cn(){if(!d)return;const N=`distance_m,elevation_above_source_areoid_m,native_row,native_col
`+at.map(O=>[O.distance_m,O.elevation_m,O.row,O.col].join(",")).join(`
`),te=URL.createObjectURL(new Blob([N],{type:"text/csv"})),ue=document.createElement("a");ue.href=te,ue.download=`MarsFlex_${d.id}_${w}_section.csv`,ue.click(),URL.revokeObjectURL(te)}return W.jsxs("div",{className:`geo-studio ${Z?"":"geo-immersive"}`,children:[W.jsxs("header",{className:"geo-header",children:[W.jsxs("div",{className:"geo-brand",children:["MARS",W.jsx("span",{children:"FLEX"}),W.jsx("small",{children:"TERRAIN & GEOLOGICAL CONTEXT"})]}),W.jsxs("div",{className:"geo-breadcrumb",children:["JEZERO ",W.jsx("span",{children:"/"})," SURFACE MODEL LAB"]}),W.jsxs("div",{className:"geo-header-right",children:[W.jsx("button",{onClick:()=>dt(N=>!N),children:Z?"Focus on terrain":"Sections & measurements"}),W.jsx("button",{className:"geo-header-mission",disabled:kt,onClick:xe,children:kt?"Computing…":"Mission on 3D surface →"}),W.jsx("button",{onClick:()=>Nt(!0),children:"Data & interpretation limits ↗"})]})]}),W.jsxs("div",{className:"geo-workspace",children:[W.jsxs("aside",{className:"geo-sidebar",children:[W.jsx("div",{className:"geo-eyebrow",children:"01 / MODEL EXPLORER"}),W.jsx("h1",{children:"Terrain, in three dimensions."}),W.jsxs("p",{className:"geo-muted",children:["Explore the measured relief.",W.jsx("br",{}),"Drag to orbit. Scroll to approach."]}),W.jsxs("div",{className:"geo-section-label",children:["TERRAIN DATASETS ",W.jsx("span",{children:c.length})]}),W.jsx("div",{className:"geo-datasets",children:c.map(N=>W.jsxs("button",{className:p===N.id?"active":"",onClick:()=>x(N.id),children:[W.jsx("i",{children:"▱"}),W.jsxs("div",{children:[W.jsx("b",{children:N.title}),W.jsxs("span",{children:[N.instrument," · ",N.spacing_map_m," m map posts"]})]}),W.jsx("em",{children:p===N.id?"●":"○"})]},N.id))}),W.jsx("div",{className:"geo-section-label",children:"SURFACE DISPLAY"}),W.jsx("div",{className:"geo-color-buttons",children:[["elevation","Elevation"],["slope","Slope"],["neutral","Neutral relief"]].map(([N,te])=>W.jsx("button",{className:P===N?"active":"",onClick:()=>b(N),children:te},N))}),W.jsxs("label",{className:"geo-checkbox",children:[W.jsx("input",{type:"checkbox",checked:L,onChange:N=>H(N.target.checked)}),"Elevation contours ",W.jsxs("span",{children:[(d==null?void 0:d.spacing_map_m)===1?2:20," m"]})]}),W.jsxs("label",{className:"geo-checkbox",children:[W.jsx("input",{type:"checkbox",checked:q,onChange:N=>Q(N.target.checked)}),"Inspect mesh edges"]}),W.jsxs("div",{className:"geo-section-label",children:["VERTICAL SCALE ",W.jsxs("b",{children:[U.toFixed(1),"×"]})]}),W.jsx("div",{className:"geo-scale-buttons",children:[1,2,3,5].map(N=>W.jsxs("button",{className:U===N?"active":"",onClick:()=>{var te,ue;D(N),(te=s.current)==null||te.setExaggeration(N),(ue=s.current)==null||ue.home()},children:[N,"×"]},N))}),W.jsxs("p",{className:"geo-mini",children:[U===1?"True vertical scale.":"Vertical exaggeration is for viewing only."," Elevation and slope readouts always use the original data."]}),W.jsxs("div",{className:"geo-mission-controls",children:[W.jsx("div",{className:"geo-section-label",children:"MISSION ON 3D TERRAIN"}),W.jsxs("label",{children:["Time available ",W.jsxs("b",{children:[$," min"]})]}),W.jsx("input",{"aria-label":"3D mission time",type:"range",min:"120",max:"600",step:"10",value:$,onChange:N=>Ee(+N.target.value)}),W.jsx("button",{disabled:kt,onClick:xe,children:kt?"Computing terrain routes…":t?"Show saved mission in 3D →":"Calculate mission in 3D →"}),st&&mt===$&&W.jsxs("p",{className:st.mission.feasible?"fits":"exceeds",children:[st.mission.feasible?"Full mission fits":"Full mission exceeds budget"," · ",si(st.mission.margin_min)," min margin"]}),W.jsx("small",{children:t?"Uses the expedition planner’s constraints.":"Default scenario: Swift Run + Hazeltop + return; 72 min reserve."})]}),W.jsxs("div",{className:"geo-source-card",children:[W.jsx("div",{className:"geo-eyebrow",children:"CURRENT SOURCE"}),W.jsxs("b",{children:[(d==null?void 0:d.instrument)||"Loading"," digital terrain model"]}),W.jsxs("p",{children:[d==null?void 0:d.shape.map(N=>N.toLocaleString()).join(" × ")," native posts",W.jsx("br",{}),"NASA MRO / USGS TRN"]}),W.jsx("a",{href:d==null?void 0:d.source_url,target:"_blank",rel:"noreferrer",children:"Original source raster ↗"})]}),W.jsx("button",{className:"geo-to-mission",onClick:()=>o(J),children:"Open mission planning →"})]}),W.jsxs("main",{className:"geo-view",children:[W.jsx("div",{className:"geo-canvas",ref:i}),W.jsxs("div",{className:"geo-view-title",children:[W.jsxs("div",{className:"geo-eyebrow",children:[d==null?void 0:d.instrument," / NATIVE DTM"]}),W.jsx("h2",{children:(d==null?void 0:d.title)||"Loading terrain"}),W.jsxs("p",{children:[d==null?void 0:d.center_lonlat[1].toFixed(4),"° N · ",d==null?void 0:d.center_lonlat[0].toFixed(4),"° E"]})]}),W.jsxs("div",{className:"geo-camera",children:[W.jsx("button",{onClick:()=>{var N;return(N=s.current)==null?void 0:N.home("relief")},children:"Close 3D"}),W.jsx("button",{title:"Overview",onClick:()=>{var N;return(N=s.current)==null?void 0:N.home("overview")},children:"Overview"}),W.jsx("button",{onClick:()=>{var N;return(N=s.current)==null?void 0:N.home("top")},children:"Top"}),W.jsx("button",{onClick:()=>{var N;return(N=s.current)==null?void 0:N.home("front")},children:"Front"})]}),W.jsxs("div",{className:"geo-scale-tag",children:[W.jsxs("span",{className:U===1?"":"emphasized",children:["VERTICAL ",U.toFixed(1),"×"]}),W.jsx("span",{children:"PERSPECTIVE 3D"})]}),W.jsxs("div",{className:"geo-elevation-legend",children:[W.jsx("div",{className:"geo-eyebrow",children:P==="mission"?"MISSION FREEDOM":P==="slope"?"SURFACE SLOPE":"SOURCE ELEVATION"}),P==="mission"&&W.jsxs("div",{className:"geo-mission-legend",children:[W.jsxs("span",{children:[W.jsx("i",{style:{background:"#65d2a6"}}),"Science + return"]}),W.jsxs("span",{children:[W.jsx("i",{style:{background:"#dfbc64"}}),"Return only fits"]}),W.jsxs("span",{children:[W.jsx("i",{style:{background:"#e98274"}}),"Reserve exceeded"]}),W.jsxs("span",{children:[W.jsx("i",{style:{background:"#36bdf4"}}),"Mission route"]}),W.jsxs("span",{children:[W.jsx("i",{style:{background:"#fff"}}),"Current return"]})]}),P!=="neutral"&&P!=="mission"&&W.jsxs(W.Fragment,{children:[W.jsx("div",{className:"geo-ramp"}),W.jsxs("div",{className:"geo-ramp-labels",children:[W.jsx("span",{children:P==="slope"?"0°":si(ie,1)+" m"}),W.jsx("span",{children:P==="slope"?"35°+":si(ee,1)+" m"})]})]}),W.jsx("p",{children:P==="mission"?"Deterministic CTX routing · scenario assumptions":P==="slope"?"Computed at native terrain spacing":"Height above the source areoid"})]}),W.jsxs("div",{className:"geo-block-note",children:[W.jsx("i",{}),"Native terrain geometry · ",W.jsxs("b",{children:[d==null?void 0:d.spacing_map_m," m posts"]}),W.jsx("span",{children:"Contours and sections use source elevations."})]}),W.jsx("div",{className:"geo-nav-hint",children:"Drag to rotate · right-drag to pan · scroll to zoom · click surface to inspect"}),v&&W.jsxs("div",{className:"geo-loading",children:[W.jsx("span",{className:"spinner"}),W.jsx("b",{children:"Building native terrain geometry…"})]}),y&&W.jsxs("div",{role:"alert",className:"geo-error",children:[y,W.jsx("button",{onClick:()=>R(""),children:"×"})]})]}),W.jsxs("aside",{className:"geo-inspector",children:[W.jsx("div",{className:"geo-eyebrow",children:"02 / SECTION & INSPECTION"}),W.jsx("h3",{children:"Inspect the surface."}),W.jsx("p",{className:"geo-muted",children:"Move the section across the terrain to inspect the shape and elevation of the measured surface."}),W.jsx("div",{className:"geo-section-label",children:"SECTION ORIENTATION"}),W.jsxs("div",{className:"geo-axis-buttons",children:[W.jsx("button",{className:w==="ns"?"active":"",onClick:()=>M("ns"),children:"North → South"}),W.jsx("button",{className:w==="ew"?"active":"",onClick:()=>M("ew"),children:"West → East"})]}),W.jsxs("label",{className:"geo-slider-label",htmlFor:"section-position",children:["Section position ",W.jsxs("b",{children:[Math.round(S*100),"%"]})]}),W.jsx("input",{id:"section-position","aria-label":"Section position",type:"range",min:".02",max:".98",step:".01",value:S,onChange:N=>I(+N.target.value)}),W.jsxs("label",{className:"geo-cut-control",children:[W.jsx("input",{type:"checkbox",checked:X,onChange:N=>C(N.target.checked)}),W.jsxs("span",{children:[W.jsx("b",{children:"Clip surface at section"}),W.jsx("small",{children:"Reveal the terrain cross-section"})]})]}),W.jsxs("div",{className:"geo-metrics",children:[W.jsxs("div",{children:[W.jsx("small",{children:"SURFACE RELIEF"}),W.jsxs("b",{children:[si(Ge,1),W.jsx("em",{children:" m"})]})]}),W.jsxs("div",{children:[W.jsx("small",{children:"SECTION LENGTH"}),W.jsxs("b",{children:[si((Oe=at.at(-1))==null?void 0:Oe.distance_m,0),W.jsx("em",{children:" m"})]})]})]}),W.jsx("div",{className:"geo-section-label",children:"SELECTED SURFACE SAMPLE"}),J?W.jsxs(W.Fragment,{children:[W.jsxs("div",{className:"geo-point",children:[W.jsxs("span",{children:[J.lat.toFixed(6),"° N / ",J.lon.toFixed(6),"° E"]}),W.jsxs("strong",{children:[si(J.elevation_m,2)," ",W.jsx("small",{children:"m"})]}),W.jsxs("p",{children:[si(J.slope_deg,1),"° native-scale slope · row ",J.row,", col ",J.col]})]}),He?W.jsx("p",{className:"geo-mini",children:"Reading mapped context…"}):_t&&W.jsxs("div",{className:"geo-surface-evidence",children:[W.jsx("small",{children:"REGIONAL GEOLOGIC CONTEXT"}),W.jsx("b",{children:((Je=_t.geology.unit)==null?void 0:Je.name)||"No mapped unit"}),W.jsx("p",{children:"Regional surface interpretation at 1:75,000; displayed as context for the selected point."}),W.jsx("a",{className:"evidence-source",href:"https://doi.org/10.3133/sim3464",target:"_blank",rel:"noreferrer",children:"Source: Sun & Stack (2020), USGS SIM 3464 ↗"}),W.jsxs("div",{children:[W.jsx("span",{children:"CRISM BD2500_2"}),W.jsx("b",{children:si(_t.crism.summary_parameters.BD2500_2,5)})]})]}),W.jsx("button",{className:"geo-use-point",onClick:()=>o(J),children:"Inspect this location in mission map →"})]}):W.jsxs("div",{className:"geo-empty-point",children:[W.jsx("span",{children:"⊕"}),W.jsx("p",{children:"Click the colored terrain surface to read the original elevation and local slope."})]}),W.jsxs("div",{className:"geo-base-value",children:[W.jsx("span",{children:"Model display base"}),W.jsxs("b",{children:[si(d==null?void 0:d.base_elevation_m,0)," m"]}),W.jsx("p",{children:"Reference elevation used to close the model and draw its section face."})]})]})]}),W.jsxs("footer",{className:"geo-bottom",children:[W.jsxs("div",{className:"geo-section-summary",children:[W.jsx("div",{className:"geo-eyebrow",children:"MEASURED SURFACE SECTION"}),W.jsxs("h4",{children:["A ",W.jsx("span",{children:"→"})," A′"]}),W.jsxs("p",{children:[w==="ns"?"North to south":"West to east"," · ",at.length," native samples"]}),W.jsx("button",{onClick:cn,disabled:!d,children:"Export section CSV ↓"})]}),W.jsx("div",{className:"geo-section-chart",children:W.jsx(zw,{points:at,axis:w,onHover:N=>{var te;return(te=s.current)==null?void 0:te.hover(N)}})}),W.jsxs("div",{className:"geo-readout",children:[W.jsx("span",{children:"SURFACE DATA"}),W.jsxs("b",{children:[d==null?void 0:d.spacing_map_m," m posts"]}),W.jsx("p",{children:(d==null?void 0:d.instrument)==="HiRISE"?"Local native-resolution patch":"Regional routing context"}),W.jsx("small",{children:"Source elevations remain unchanged"})]})]}),Tt&&W.jsx("div",{className:"geo-modal-backdrop",onClick:()=>Nt(!1),children:W.jsxs("section",{onClick:N=>N.stopPropagation(),children:[W.jsx("button",{onClick:()=>Nt(!1),children:"Close ×"}),W.jsx("div",{className:"geo-eyebrow",children:"MODEL INTERPRETATION"}),W.jsx("h2",{children:"Source elevations and rendering."}),W.jsx("p",{children:"The top mesh uses native elevations from NASA MRO / USGS digital terrain models. HiRISE models here contain 401 × 401 posts at 1 m map spacing; the regional CTX model uses 20 m posts."}),W.jsx("p",{children:"Side walls and the section face close the model at an arbitrary display base. Their uniform color has no geological meaning."}),W.jsx("p",{children:"The cross-section graph follows the source surface elevations. Changing vertical exaggeration never changes the data, slope calculation, CSV values or mission route costs."}),W.jsx("p",{children:"Horizontal coordinates use a local metric frame with east distances corrected at the model center latitude. The vertical datum remains the source areoid. HiRISE and CTX are related products, not independent absolute validation of one another."}),W.jsx("p",{children:"CTX remains the mission routing engine. Selecting a 1 m visual model does not silently certify 1 m traversability or astronaut safety."}),W.jsx("a",{href:"/v1/geomodel/models",target:"_blank",rel:"noreferrer",children:"Source models, bounds and checksums ↗"})]})})]})}const Fw=ve.lazy(()=>BE(()=>import("./main-DyByFiQB.js"),__vite__mapDeps([0,1])));function Hw(){const[o,t]=ve.useState("mission"),[i,s]=ve.useState(),[l,c]=ve.useState(),[h,d]=ve.useState();return W.jsxs(W.Fragment,{children:[o==="geology"&&W.jsxs("nav",{className:"modebar",children:[W.jsx("span",{children:"MARSFLEX WORKSPACE"}),W.jsx("button",{className:o==="geology"?"active":"",onClick:()=>t("geology"),children:"3D terrain & sections"}),W.jsx("button",{className:"",onClick:()=>t("mission"),children:"Expedition planning"})]}),o==="geology"?W.jsx(Bw,{savedMission:h,openMission:m=>{s(m),t("mission")}}):W.jsx(ve.Suspense,{fallback:W.jsx("div",{className:"workspace-loading",children:"Loading expedition planner…"}),children:W.jsx(Fw,{onOpenTerrain:()=>t("geology"),initialPoint:i,initialRequest:l,onDraft:c,onComputed:(m,p)=>d({request:m,result:p})})})]})}ZE.createRoot(document.getElementById("root")).render(W.jsx(Hw,{}));export{W as j,ve as r};
