import{S,i as q,s as x,k as _,q as f,a as k,l as d,m as g,r as h,h as u,c as y,b as m,D as v,u as $,F as E,N as C}from"../chunks/index.a926db80.js";import{d as D}from"../chunks/singletons.dfc9a946.js";const F=()=>{const s=D;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},H={subscribe(s){return F().page.subscribe(s)}};function N(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=_("h1"),o=f(r),n=k(),i=_("p"),l=f(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(u),n=y(e),i=d(e,"P",{});var p=g(i);l=h(p,c),p.forEach(u)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(l,c)},i:E,o:E,d(e){e&&u(t),e&&u(n),e&&u(i)}}}function P(s,t,r){let o;return C(s,H,n=>r(0,o=n)),[o]}let z=class extends S{constructor(t){super(),q(this,t,P,N,x,{})}};export{z as component};
