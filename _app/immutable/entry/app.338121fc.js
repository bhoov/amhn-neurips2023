import{S as C,i as q,s as U,a as j,e as p,c as z,b as g,d as h,f as P,g as d,h as w,j as W,o as F,k as G,l as H,m as J,n as A,p as m,q as K,r as M,u as Q,v as y,t as X,w as D,x as E,y as v,z as I,A as R,B as L}from"../chunks/index.2fb4a083.js";const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},O={},k=function(e,n,i){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Z(f,i),f in O)return;O[f]=!0;const t=f.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!i)for(let l=s.length-1;l>=0;l--){const u=s[l];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${r}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":Y,t||(o.as="script",o.crossOrigin=""),o.href=f,document.head.appendChild(o),t)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},se={};function $(a){let e,n,i;var s=a[1][0];function f(t){return{props:{data:t[3],form:t[2]}}}return s&&(e=E(s,f(a)),a[12](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&I(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),g(t,n,r),i=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&4&&(_.form=t[2]),r&2&&s!==(s=t[1][0])){if(e){y();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=E(s,f(t)),t[12](e),v(e.$$.fragment),d(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&d(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[12](null),t&&w(n),e&&L(e,t)}}}function x(a){let e,n,i;var s=a[1][0];function f(t){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=E(s,f(a)),a[11](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&I(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),g(t,n,r),i=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&8215&&(_.$$scope={dirty:r,ctx:t}),r&2&&s!==(s=t[1][0])){if(e){y();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=E(s,f(t)),t[11](e),v(e.$$.fragment),d(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&d(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[11](null),t&&w(n),e&&L(e,t)}}}function ee(a){let e,n,i;var s=a[1][1];function f(t){return{props:{data:t[4],form:t[2]}}}return s&&(e=E(s,f(a)),a[10](e)),{c(){e&&v(e.$$.fragment),n=p()},l(t){e&&I(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),g(t,n,r),i=!0},p(t,r){const _={};if(r&16&&(_.data=t[4]),r&4&&(_.form=t[2]),r&2&&s!==(s=t[1][1])){if(e){y();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}s?(e=E(s,f(t)),t[10](e),v(e.$$.fragment),d(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else s&&e.$set(_)},i(t){i||(e&&d(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[10](null),t&&w(n),e&&L(e,t)}}}function T(a){let e,n=a[6]&&V(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=J(e);n&&n.l(s),s.forEach(w),this.h()},h(){A(e,"id","svelte-announcer"),A(e,"aria-live","assertive"),A(e,"aria-atomic","true"),m(e,"position","absolute"),m(e,"left","0"),m(e,"top","0"),m(e,"clip","rect(0 0 0 0)"),m(e,"clip-path","inset(50%)"),m(e,"overflow","hidden"),m(e,"white-space","nowrap"),m(e,"width","1px"),m(e,"height","1px")},m(i,s){g(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=V(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&w(e),n&&n.d()}}}function V(a){let e;return{c(){e=K(a[7])},l(n){e=M(n,a[7])},m(n,i){g(n,e,i)},p(n,i){i&128&&Q(e,n[7])},d(n){n&&w(e)}}}function te(a){let e,n,i,s,f;const t=[x,$],r=[];function _(l,u){return l[1][1]?0:1}e=_(a),n=r[e]=t[e](a);let o=a[5]&&T(a);return{c(){n.c(),i=j(),o&&o.c(),s=p()},l(l){n.l(l),i=z(l),o&&o.l(l),s=p()},m(l,u){r[e].m(l,u),g(l,i,u),o&&o.m(l,u),g(l,s,u),f=!0},p(l,[u]){let b=e;e=_(l),e===b?r[e].p(l,u):(y(),h(r[b],1,1,()=>{r[b]=null}),P(),n=r[e],n?n.p(l,u):(n=r[e]=t[e](l),n.c()),d(n,1),n.m(i.parentNode,i)),l[5]?o?o.p(l,u):(o=T(l),o.c(),o.m(s.parentNode,s)):o&&(o.d(1),o=null)},i(l){f||(d(n),f=!0)},o(l){h(n),f=!1},d(l){r[e].d(l),l&&w(i),o&&o.d(l),l&&w(s)}}}function ne(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:f}=e,{components:t=[]}=e,{form:r}=e,{data_0:_=null}=e,{data_1:o=null}=e;W(i.page.notify);let l=!1,u=!1,b=null;F(()=>{const c=i.page.subscribe(()=>{l&&(n(6,u=!0),X().then(()=>{n(7,b=document.title||"untitled page")}))});return n(5,l=!0),c});function N(c){D[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function S(c){D[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function B(c){D[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,s=c.page),"constructors"in c&&n(1,f=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,r=c.form),"data_0"in c&&n(3,_=c.data_0),"data_1"in c&&n(4,o=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,f,r,_,o,l,u,b,i,s,N,S,B]}class re extends C{constructor(e){super(),q(this,e,ne,te,U,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const oe=[()=>k(()=>import("../nodes/0.9105e6b2.js"),["../nodes/0.9105e6b2.js","../chunks/index.2fb4a083.js","../assets/0.6161eb8d.css","../assets/HeroSection.d71cc950.css","../assets/NavBar.5fb8f5cf.css"],import.meta.url),()=>k(()=>import("../nodes/1.28203c75.js"),["../nodes/1.28203c75.js","../chunks/index.2fb4a083.js","../chunks/singletons.8ac5fde4.js"],import.meta.url),()=>k(()=>import("../nodes/2.988ec65f.js"),["../nodes/2.988ec65f.js","../chunks/index.2fb4a083.js","../chunks/pathJoin.862fcf1a.js","../assets/2.cf3ab7fa.css","../assets/HeroSection.d71cc950.css","../assets/NavBar.5fb8f5cf.css"],import.meta.url),()=>k(()=>import("../nodes/3.b85d6c45.js"),["../nodes/3.b85d6c45.js","../chunks/index.2fb4a083.js","../assets/3.a1ef68a9.css","../assets/NavBar.5fb8f5cf.css"],import.meta.url),()=>k(()=>import("../nodes/4.45cf8b2a.js"),["../nodes/4.45cf8b2a.js","../chunks/index.2fb4a083.js","../chunks/_commonjsHelpers.de833af9.js","../chunks/pathJoin.862fcf1a.js","../assets/4.8ab48737.css"],import.meta.url),()=>k(()=>import("../nodes/5.3a38c33f.js"),["../nodes/5.3a38c33f.js","../chunks/index.2fb4a083.js","../chunks/_commonjsHelpers.de833af9.js","../assets/5.3b9871e4.css","../assets/NavBar.5fb8f5cf.css"],import.meta.url)],ae=[0],le={"/":[2],"/cfp":[3],"/demo":[4],"/papers":[5]},fe={handleError:({error:a})=>{console.error(a)}};export{le as dictionary,fe as hooks,se as matchers,oe as nodes,re as root,ae as server_loads};
