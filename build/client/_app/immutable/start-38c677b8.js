import{S as Ye,i as Xe,s as Ze,a as Qe,e as B,c as xe,b as z,g as pe,t as F,d as de,f as J,h as G,j as et,o as ke,k as tt,l as nt,m as rt,n as ve,p as V,q as at,r as st,u as ot,v as W,w as Y,x as Le,y as X,z as Z,A as Be,B as Fe,C as K,D as Re,E as Je,F as it,G as lt}from"./chunks/singletons-f5ba5de6.js";function ct(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ft(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ut=["href","pathname","search","searchParams","toString","toJSON"];function pt(r,e){const t=new URL(r);for(const o of ut){let s=t[o];Object.defineProperty(t,o,{get(){return e(),s},enumerable:!0,configurable:!0})}return dt(t),t}function dt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function ht(r){let e=5381;if(typeof r=="string"){let t=r.length;for(;t;)e=e*33^r.charCodeAt(--t)}else if(ArrayBuffer.isView(r)){const t=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=t.length;for(;o;)e=e*33^t[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ue.delete(o)}return he(r,e)};const ue=new Map;function mt(r,e,t){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(t==null?void 0:t.body)&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&(s+=`[data-hash="${ht(t.body)}"]`);const l=document.querySelector(s);if(l!=null&&l.textContent){const{body:n,...f}=JSON.parse(l.textContent),d=l.getAttribute("data-ttl");return d&&ue.set(e,{body:n,init:f,ttl:1e3*Number(d)}),Promise.resolve(new Response(n,f))}return he(r,t)}function gt(r,e){const t=ue.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);ue.delete(r)}return he(r,e)}const _t=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function yt(r){const e=[],t=[];let o=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(wt).map((l,n,f)=>{const d=decodeURIComponent(l),h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(d);if(h)return e.push(h[1]),t.push(h[2]),"(?:/(.*))?";const _=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(d);if(_)return e.push(_[1]),t.push(_[2]),"(?:/([^/]+))?";const v=n===f.length-1;return d?"/"+d.split(/\[(.+?)\](?!\])/).map((T,C)=>{if(C%2){const D=_t.exec(T);if(!D)throw new Error(`Invalid param: ${T}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,re,M,ae,Q]=D;return e.push(ae),t.push(Q),M?"(.*?)":re?"([^/]*)?":"([^/]+?)"}return v&&T.includes(".")&&(o=!1),T.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${o?"/?":""}$`),names:e,types:t}}function wt(r){return!/^\([^)]+\)$/.test(r)}function bt(r,e,t,o){const s={};for(let l=0;l<e.length;l+=1){const n=e[l],f=t[l];let d=r[l+1]||"";if(f){const h=o[f];if(!h)throw new Error(`Missing "${f}" param matcher`);if(!h(d))return}s[n]=d}return s}function vt(r,e,t,o){const s=new Set(e);return Object.entries(t).map(([f,[d,h,_]])=>{const{pattern:v,names:$,types:U}=yt(f),T={id:f,exec:C=>{const D=v.exec(C);if(D)return bt(D,$,U,o)},errors:[1,..._||[]].map(C=>r[C]),layouts:[0,...h||[]].map(n),leaf:l(d)};return T.errors.length=T.layouts.length=Math.max(T.errors.length,T.layouts.length),T});function l(f){const d=f<0;return d&&(f=~f),[d,r[f]]}function n(f){return f===void 0?f:[s.has(f),r[f]]}}function Et(r){let e,t,o;var s=r[0][0];function l(n){return{props:{data:n[2],form:n[1]}}}return s&&(e=W(s,l(r))),{c(){e&&Y(e.$$.fragment),t=B()},l(n){e&&Le(e.$$.fragment,n),t=B()},m(n,f){e&&X(e,n,f),z(n,t,f),o=!0},p(n,f){const d={};if(f&4&&(d.data=n[2]),f&2&&(d.form=n[1]),s!==(s=n[0][0])){if(e){pe();const h=e;F(h.$$.fragment,1,0,()=>{Z(h,1)}),de()}s?(e=W(s,l(n)),Y(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(d)},i(n){o||(e&&J(e.$$.fragment,n),o=!0)},o(n){e&&F(e.$$.fragment,n),o=!1},d(n){n&&G(t),e&&Z(e,n)}}}function kt(r){let e,t,o;var s=r[0][0];function l(n){return{props:{data:n[2],$$slots:{default:[Rt]},$$scope:{ctx:n}}}}return s&&(e=W(s,l(r))),{c(){e&&Y(e.$$.fragment),t=B()},l(n){e&&Le(e.$$.fragment,n),t=B()},m(n,f){e&&X(e,n,f),z(n,t,f),o=!0},p(n,f){const d={};if(f&4&&(d.data=n[2]),f&523&&(d.$$scope={dirty:f,ctx:n}),s!==(s=n[0][0])){if(e){pe();const h=e;F(h.$$.fragment,1,0,()=>{Z(h,1)}),de()}s?(e=W(s,l(n)),Y(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(d)},i(n){o||(e&&J(e.$$.fragment,n),o=!0)},o(n){e&&F(e.$$.fragment,n),o=!1},d(n){n&&G(t),e&&Z(e,n)}}}function Rt(r){let e,t,o;var s=r[0][1];function l(n){return{props:{data:n[3],form:n[1]}}}return s&&(e=W(s,l(r))),{c(){e&&Y(e.$$.fragment),t=B()},l(n){e&&Le(e.$$.fragment,n),t=B()},m(n,f){e&&X(e,n,f),z(n,t,f),o=!0},p(n,f){const d={};if(f&8&&(d.data=n[3]),f&2&&(d.form=n[1]),s!==(s=n[0][1])){if(e){pe();const h=e;F(h.$$.fragment,1,0,()=>{Z(h,1)}),de()}s?(e=W(s,l(n)),Y(e.$$.fragment),J(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else s&&e.$set(d)},i(n){o||(e&&J(e.$$.fragment,n),o=!0)},o(n){e&&F(e.$$.fragment,n),o=!1},d(n){n&&G(t),e&&Z(e,n)}}}function Ge(r){let e,t=r[5]&&Ke(r);return{c(){e=tt("div"),t&&t.c(),this.h()},l(o){e=nt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=rt(e);t&&t.l(s),s.forEach(G),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),V(e,"position","absolute"),V(e,"left","0"),V(e,"top","0"),V(e,"clip","rect(0 0 0 0)"),V(e,"clip-path","inset(50%)"),V(e,"overflow","hidden"),V(e,"white-space","nowrap"),V(e,"width","1px"),V(e,"height","1px")},m(o,s){z(o,e,s),t&&t.m(e,null)},p(o,s){o[5]?t?t.p(o,s):(t=Ke(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&G(e),t&&t.d()}}}function Ke(r){let e;return{c(){e=at(r[6])},l(t){e=st(t,r[6])},m(t,o){z(t,e,o)},p(t,o){o&64&&ot(e,t[6])},d(t){t&&G(e)}}}function St(r){let e,t,o,s,l;const n=[kt,Et],f=[];function d(_,v){return _[0][1]?0:1}e=d(r),t=f[e]=n[e](r);let h=r[4]&&Ge(r);return{c(){t.c(),o=Qe(),h&&h.c(),s=B()},l(_){t.l(_),o=xe(_),h&&h.l(_),s=B()},m(_,v){f[e].m(_,v),z(_,o,v),h&&h.m(_,v),z(_,s,v),l=!0},p(_,[v]){let $=e;e=d(_),e===$?f[e].p(_,v):(pe(),F(f[$],1,1,()=>{f[$]=null}),de(),t=f[e],t?t.p(_,v):(t=f[e]=n[e](_),t.c()),J(t,1),t.m(o.parentNode,o)),_[4]?h?h.p(_,v):(h=Ge(_),h.c(),h.m(s.parentNode,s)):h&&(h.d(1),h=null)},i(_){l||(J(t),l=!0)},o(_){F(t),l=!1},d(_){f[e].d(_),_&&G(o),h&&h.d(_),_&&G(s)}}}function Ot(r,e,t){let{stores:o}=e,{page:s}=e,{components:l}=e,{form:n}=e,{data_0:f=null}=e,{data_1:d=null}=e;et(o.page.notify);let h=!1,_=!1,v=null;return ke(()=>{const $=o.page.subscribe(()=>{h&&(t(5,_=!0),t(6,v=document.title||"untitled page"))});return t(4,h=!0),$}),r.$$set=$=>{"stores"in $&&t(7,o=$.stores),"page"in $&&t(8,s=$.page),"components"in $&&t(0,l=$.components),"form"in $&&t(1,n=$.form),"data_0"in $&&t(2,f=$.data_0),"data_1"in $&&t(3,d=$.data_1)},r.$$.update=()=>{r.$$.dirty&384&&o.page.set(s)},[l,n,f,d,h,_,v,o,s]}class $t extends Ye{constructor(e){super(),Xe(this,e,Ot,St,Ze,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Lt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),It=function(r,e){return new URL(r,e).href},ze={},ie=function(e,t,o){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=It(s,o),s in ze)return;ze[s]=!0;const l=s.endsWith(".css"),n=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":Lt,l||(f.as="script",f.crossOrigin=""),f.href=s,document.head.appendChild(f),l)return new Promise((d,h)=>{f.addEventListener("load",d),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},jt={},me=[()=>ie(()=>import("./chunks/0-217d5201.js"),["chunks\\0-217d5201.js","components\\pages\\_layout.svelte-12a5365a.js","assets\\_layout-79f7b686.css","chunks\\singletons-f5ba5de6.js","chunks\\store-284d3162.js"],import.meta.url),()=>ie(()=>import("./chunks/1-ab95dfa0.js"),["chunks\\1-ab95dfa0.js","components\\error.svelte-0656ca2d.js","chunks\\singletons-f5ba5de6.js"],import.meta.url),()=>ie(()=>import("./chunks/2-c320e355.js"),["chunks\\2-c320e355.js","components\\pages\\_page.svelte-347116d2.js","chunks\\singletons-f5ba5de6.js","chunks\\store-284d3162.js","chunks\\BlogModal-0621e4f2.js"],import.meta.url),()=>ie(()=>import("./chunks/3-e96e672c.js"),["chunks\\3-e96e672c.js","components\\pages\\blogs\\_page.svelte-375aa4d8.js","chunks\\singletons-f5ba5de6.js","chunks\\store-284d3162.js","chunks\\BlogModal-0621e4f2.js"],import.meta.url)],At=[],Nt={"":[2],blogs:[3]},Pt={handleError:({error:r})=>{console.error(r)}};class Se{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Me{constructor(e,t){this.status=e,this.location=t}}const Ut="/__data.json";async function Tt(r){var e;for(const t in r)if(typeof((e=r[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,s])=>[o,await s])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Dt=-1,Ct=-2,Vt=-3,qt=-4,Bt=-5,Ft=-6;function Jt(r){const e=JSON.parse(r);if(typeof e=="number")return s(e);const t=e,o=Array(t.length);function s(l){if(l===Dt)return;if(l===Vt)return NaN;if(l===qt)return 1/0;if(l===Bt)return-1/0;if(l===Ft)return-0;if(l in o)return o[l];const n=t[l];if(!n||typeof n!="object")o[l]=n;else if(Array.isArray(n))if(typeof n[0]=="string")switch(n[0]){case"Date":o[l]=new Date(n[1]);break;case"Set":const d=new Set;o[l]=d;for(let v=1;v<n.length;v+=1)d.add(s(n[v]));break;case"Map":const h=new Map;o[l]=h;for(let v=1;v<n.length;v+=2)h.set(s(n[v]),s(n[v+1]));break;case"RegExp":o[l]=new RegExp(n[1],n[2]);break;case"Object":o[l]=Object(n[1]);break;case"BigInt":o[l]=BigInt(n[1]);break;case"null":const _=Object.create(null);o[l]=_;for(let v=1;v<n.length;v+=2)_[n[v]]=s(n[v+1]);break}else{const f=new Array(n.length);o[l]=f;for(let d=0;d<n.length;d+=1){const h=n[d];h!==Ct&&(f[d]=s(h))}}else{const f={};o[l]=f;for(const d in n){const h=n[d];f[d]=s(h)}}return o[l]}return s(0)}const We="sveltekit:scroll",q="sveltekit:index",le=vt(me,At,Nt,jt),Oe=me[0],$e=me[1];Oe();$e();let ne={};try{ne=JSON.parse(sessionStorage[We])}catch{}function Ee(r){ne[r]=Re()}function Gt({target:r,base:e,trailing_slash:t}){var Ce;const o=[];let s=null;const l={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},f=!1,d=!1,h=!0,_=!1,v=!1,$,U=(Ce=history.state)==null?void 0:Ce[q];U||(U=Date.now(),history.replaceState({...history.state,[q]:U},"",location.href));const T=ne[U];T&&(history.scrollRestoration="manual",scrollTo(T.x,T.y));let C=!1,D,re,M;async function ae(){M=M||Promise.resolve(),await M,M=null;const a=new URL(location.href),u=ye(a,!0);s=null,await je(u,a,[])}async function Q(a,{noscroll:u=!1,replaceState:p=!1,keepfocus:i=!1,state:c={}},m,g){return typeof a=="string"&&(a=new URL(a,Be(document))),we({url:a,scroll:u?Re():null,keepfocus:i,redirect_chain:m,details:{state:c,replaceState:p},nav_token:g,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Ie(a){const u=ye(a,!1);if(!u)throw new Error("Attempted to prefetch a URL that does not belong to this app");return s={id:u.id,promise:Pe(u)},s.promise}async function je(a,u,p,i,c={},m){var k,E;re=c;let g=a&&await Pe(a);if(g||(g=await De(u,null,te(new Error(`Not found: ${u.pathname}`),{url:u,params:{},routeId:null}),404)),u=(a==null?void 0:a.url)||u,re!==c)return!1;if(g.type==="redirect")if(p.length>10||p.includes(u.pathname))g=await se({status:500,error:te(new Error("Redirect loop"),{url:u,params:{},routeId:null}),url:u,routeId:null});else return Q(new URL(g.location,u).href,{},[...p,u.pathname],c),!1;else((E=(k=g.props)==null?void 0:k.page)==null?void 0:E.status)>=400&&await K.updated.check()&&await oe(u);if(o.length=0,v=!1,_=!0,i&&i.details){const{details:w}=i,b=w.replaceState?0:1;w.state[q]=U+=b,history[w.replaceState?"replaceState":"pushState"](w.state,"",u)}if(s=null,d){n=g.state,g.props.page&&(g.props.page.url=u);const w=fe();$.$set(g.props),w()}else Ae(g);if(i){const{scroll:w,keepfocus:b}=i;if(!b){const S=document.body,L=S.getAttribute("tabindex");S.tabIndex=-1,S.focus({preventScroll:!0}),setTimeout(()=>{var I;(I=getSelection())==null||I.removeAllRanges()}),L!==null?S.setAttribute("tabindex",L):S.removeAttribute("tabindex")}if(await Je(),h){const S=u.hash&&document.getElementById(u.hash.slice(1));w?scrollTo(w.x,w.y):S?S.scrollIntoView():scrollTo(0,0)}}else await Je();h=!0,g.props.page&&(D=g.props.page),m&&m(),_=!1}function Ae(a){var c,m;n=a.state;const u=document.querySelector("style[data-sveltekit]");u&&u.remove(),D=a.props.page;const p=fe();$=new $t({target:r,props:{...a.props,stores:K},hydrate:!0}),p();const i={from:null,to:ce("to",{params:n.params,routeId:(m=(c=n.route)==null?void 0:c.id)!=null?m:null,url:new URL(location.href)}),type:"load"};l.after_navigate.forEach(g=>g(i)),d=!0}async function x({url:a,params:u,branch:p,status:i,error:c,route:m,form:g}){var L;const k=p.filter(Boolean),E={type:"loaded",state:{url:a,params:u,branch:p,error:c,route:m},props:{components:k.map(I=>I.node.component)}};g!==void 0&&(E.props.form=g);let w={},b=!D;for(let I=0;I<k.length;I+=1){const N=k[I];w={...w,...N.data},(b||!n.branch.some(P=>P===N))&&(E.props[`data_${I}`]=w,b=b||Object.keys((L=N.data)!=null?L:{}).length>0)}if(b||(b=Object.keys(D.data).length!==Object.keys(w).length),!n.url||a.href!==n.url.href||n.error!==c||g!==void 0||b){E.props.page={error:c,params:u,routeId:m&&m.id,status:i,url:a,form:g,data:b?w:D.data};const I=(N,P)=>{Object.defineProperty(E.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${P}`)}})};I("origin","origin"),I("path","pathname"),I("query","searchParams")}return E}async function ge({loader:a,parent:u,url:p,params:i,routeId:c,server_data_node:m}){var w,b,S,L,I;let g=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await a();if((w=E.shared)!=null&&w.load){let N=function(...O){for(const y of O){const{href:R}=new URL(y,p);k.dependencies.add(R)}};const P={routeId:c,params:new Proxy(i,{get:(O,y)=>(k.params.add(y),O[y])}),data:(b=m==null?void 0:m.data)!=null?b:null,url:pt(p,()=>{k.url=!0}),async fetch(O,y){let R;O instanceof Request?(R=O.url,y={body:O.method==="GET"||O.method==="HEAD"?void 0:await O.blob(),cache:O.cache,credentials:O.credentials,headers:O.headers,integrity:O.integrity,keepalive:O.keepalive,method:O.method,mode:O.mode,redirect:O.redirect,referrer:O.referrer,referrerPolicy:O.referrerPolicy,signal:O.signal,...y}):R=O;const A=new URL(R,p).href;return N(A),d?gt(A,y):mt(R,A,y)},setHeaders:()=>{},depends:N,parent(){return k.parent=!0,u()}};Object.defineProperties(P,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),g=(S=await E.shared.load.call(null,P))!=null?S:null,g=g?await Tt(g):null}return{node:E,loader:a,server:m,shared:(L=E.shared)!=null&&L.load?{type:"data",data:g,uses:k}:null,data:(I=g!=null?g:m==null?void 0:m.data)!=null?I:null}}function Ne(a,u,p,i){if(v)return!0;if(!p)return!1;if(p.parent&&u||p.url&&a)return!0;for(const c of p.params)if(i[c]!==n.params[c])return!0;for(const c of p.dependencies)if(o.some(m=>m(new URL(c))))return!0;return!1}function _e(a,u){var p,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&u!=null?u:null}async function Pe({id:a,invalidating:u,url:p,params:i,route:c}){var O;if((s==null?void 0:s.id)===a)return s.promise;const{errors:m,layouts:g,leaf:k}=c,E=[...g,k];m.forEach(y=>y==null?void 0:y().catch(()=>{})),E.forEach(y=>y==null?void 0:y[1]().catch(()=>{}));let w=null;const b=n.url?a!==n.url.pathname+n.url.search:!1,S=E.reduce((y,R,A)=>{var ee;const j=n.branch[A],H=!!(R!=null&&R[0])&&((j==null?void 0:j.loader)!==R[1]||Ne(b,y.some(Boolean),(ee=j.server)==null?void 0:ee.uses,i));return y.push(H),y},[]);if(S.some(Boolean)){try{w=await He(p,S)}catch(y){return se({status:500,error:te(y,{url:p,params:i,routeId:c.id}),url:p,routeId:c.id})}if(w.type==="redirect")return w}const L=w==null?void 0:w.nodes;let I=!1;const N=E.map(async(y,R)=>{var ee;if(!y)return;const A=n.branch[R],j=L==null?void 0:L[R];if((!j||j.type==="skip")&&y[1]===(A==null?void 0:A.loader)&&!Ne(b,I,(ee=A.shared)==null?void 0:ee.uses,i))return A;if(I=!0,(j==null?void 0:j.type)==="error")throw j;return ge({loader:y[1],url:p,params:i,routeId:c.id,parent:async()=>{var qe;const Ve={};for(let be=0;be<R;be+=1)Object.assign(Ve,(qe=await N[be])==null?void 0:qe.data);return Ve},server_data_node:_e(j===void 0&&y[0]?{type:"skip"}:j!=null?j:null,A==null?void 0:A.server)})});for(const y of N)y.catch(()=>{});const P=[];for(let y=0;y<E.length;y+=1)if(E[y])try{P.push(await N[y])}catch(R){if(R instanceof Me)return{type:"redirect",location:R.location};let A=500,j;L!=null&&L.includes(R)?(A=(O=R.status)!=null?O:A,j=R.error):R instanceof Se?(A=R.status,j=R.body):j=te(R,{params:i,url:p,routeId:c.id});const H=await Ue(y,P,m);return H?await x({url:p,params:i,branch:P.slice(0,H.idx).concat(H.node),status:A,error:j,route:c}):await De(p,c.id,j,A)}else P.push(void 0);return await x({url:p,params:i,branch:P,status:200,error:null,route:c,form:u?void 0:null})}async function Ue(a,u,p){for(;a--;)if(p[a]){let i=a;for(;!u[i];)i-=1;try{return{idx:i+1,node:{node:await p[a](),loader:p[a],data:{},server:null,shared:null}}}catch{continue}}}async function se({status:a,error:u,url:p,routeId:i}){var w;const c={},m=await Oe();let g=null;if(m.server)try{const b=await He(p,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;g=(w=b.nodes[0])!=null?w:null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||f)&&await oe(p)}const k=await ge({loader:Oe,url:p,params:c,routeId:i,parent:()=>Promise.resolve({}),server_data_node:_e(g)}),E={node:await $e(),loader:$e,shared:null,server:null,data:null};return await x({url:p,params:c,branch:[k,E],status:a,error:u,route:null})}function ye(a,u){if(Te(a))return;const p=decodeURI(a.pathname.slice(e.length)||"/");for(const i of le){const c=i.exec(p);if(c){const m=new URL(a.origin+ct(a.pathname,t)+a.search+a.hash);return{id:m.pathname+m.search,invalidating:u,route:i,params:ft(c),url:m}}}}function Te(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function we({url:a,scroll:u,keepfocus:p,redirect_chain:i,details:c,type:m,delta:g,nav_token:k,accepted:E,blocked:w}){var N,P,O,y;let b=!1;const S=ye(a,!1),L={from:ce("from",{params:n.params,routeId:(P=(N=n.route)==null?void 0:N.id)!=null?P:null,url:n.url}),to:ce("to",{params:(O=S==null?void 0:S.params)!=null?O:null,routeId:(y=S==null?void 0:S.route.id)!=null?y:null,url:a}),type:m};g!==void 0&&(L.delta=g);const I={...L,cancel:()=>{b=!0}};if(l.before_navigate.forEach(R=>R(I)),b){w();return}Ee(U),E(),d&&K.navigating.set(L),await je(S,a,i,{scroll:u,keepfocus:p,details:c},k,()=>{l.after_navigate.forEach(R=>R(L)),K.navigating.set(null)})}async function De(a,u,p,i){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await se({status:i,error:p,url:a,routeId:u}):await oe(a)}function oe(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{ke(()=>(l.after_navigate.push(a),()=>{const u=l.after_navigate.indexOf(a);l.after_navigate.splice(u,1)}))},before_navigate:a=>{ke(()=>(l.before_navigate.push(a),()=>{const u=l.before_navigate.indexOf(a);l.before_navigate.splice(u,1)}))},disable_scroll_handling:()=>{(_||!d)&&(h=!1)},goto:(a,u={})=>Q(a,u,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")o.push(a);else{const{href:u}=new URL(a,location.href);o.push(p=>p.href===u)}return ae()},invalidateAll:()=>(v=!0,ae()),prefetch:async a=>{const u=new URL(a,Be(document));await Ie(u)},prefetch_routes:async a=>{const p=(a?le.filter(i=>a.some(c=>i.exec(c))):le).map(i=>Promise.all([...i.layouts,i.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(p)},apply_action:async a=>{if(a.type==="error"){const u=new URL(location.href),{branch:p,route:i}=n;if(!i)return;const c=await Ue(n.branch.length,p,i.errors);if(c){const m=await x({url:u,params:n.params,branch:p.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:i});n=m.state;const g=fe();$.$set(m.props),g()}}else if(a.type==="redirect")Q(a.location,{},[]);else{const u={form:a.data,page:{...D,form:a.data,status:a.status}},p=fe();$.$set(u),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var g,k;let c=!1;const m={from:ce("from",{params:n.params,routeId:(k=(g=n.route)==null?void 0:g.id)!=null?k:null,url:n.url}),to:null,type:"unload",cancel:()=>c=!0};l.before_navigate.forEach(E=>E(m)),c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Ee(U);try{sessionStorage[We]=JSON.stringify(ne)}catch{}}});const a=i=>{const{url:c,options:m}=Fe(i);if(c&&m.prefetch){if(Te(c))return;Ie(c)}};let u;const p=i=>{clearTimeout(u),u=setTimeout(()=>{var c;(c=i.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:c,url:m,options:g}=Fe(i);if(!c||!m)return;const k=c instanceof SVGAElement;if(!k&&m.protocol!==location.protocol&&!(m.protocol==="https:"||m.protocol==="http:"))return;const E=(c.getAttribute("rel")||"").split(/\s+/);if(c.hasAttribute("download")||E.includes("external")||g.reload||(k?c.target.baseVal:c.target))return;const[w,b]=m.href.split("#");if(b!==void 0&&w===location.href.split("#")[0]){C=!0,Ee(U),n.url=m,K.page.set({...D,url:m}),K.page.notify();return}we({url:m,scroll:g.noscroll?Re():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[q]===U)return;const c=i.state[q]-U;we({url:new URL(location.href),scroll:ne[i.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{U=i.state[q]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{C&&(C=!1,history.replaceState({...history.state,[q]:++U},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&K.navigating.set(null)})},_hydrate:async({status:a,error:u,node_ids:p,params:i,routeId:c,data:m,form:g})=>{var w;f=!0;const k=new URL(location.href);let E;try{const b=p.map(async(S,L)=>{const I=m[L];return ge({loader:me[S],url:k,params:i,routeId:c,parent:async()=>{const N={};for(let P=0;P<L;P+=1)Object.assign(N,(await b[P]).data);return N},server_data_node:_e(I)})});E=await x({url:k,params:i,branch:await Promise.all(b),status:a,error:u,form:g,route:(w=le.find(S=>S.id===c))!=null?w:null})}catch(b){if(b instanceof Me){await oe(new URL(b.location,location.href));return}E=await se({status:b instanceof Se?b.status:500,error:te(b,{url:k,params:i,routeId:c}),url:k,routeId:c})}Ae(E)}}}async function He(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+Ut;const o=await he(t.href,{headers:{"x-sveltekit-invalidated":e.map(l=>l?"1":"").join(",")}}),s=await o.text();if(!o.ok)throw new Error(JSON.parse(s));return Jt(s)}function te(r,e){var t;return r instanceof Se?r.body:(t=Pt.handleError({error:r,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Kt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ce(r,e){for(const t of Kt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return e}function fe(){return()=>{}}async function Mt({env:r,hydrate:e,paths:t,target:o,trailing_slash:s}){it(t);const l=Gt({target:o,base:t.base,trailing_slash:s});lt({client:l}),e?await l._hydrate(e):l.goto(location.href,{replaceState:!0}),l._start_router()}export{Mt as start};
