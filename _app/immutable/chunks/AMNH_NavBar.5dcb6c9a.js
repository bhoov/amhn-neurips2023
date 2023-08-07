import{s as Q,f as g,a as z,l as R,g as w,h as b,d,c as B,m as U,j as m,M as H,k as N,i as L,x as v,N as D,n as X,y as P,B as G,o as J,O as S,P as K}from"./scheduler.56648161.js";import{S as Y,i as F,b as W,d as Z,m as $,a as ee,t as te,e as le}from"./index.bf21ed9e.js";function j(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function k(t,l,e){const a=t.slice();return a[5]=l[e],a}function q(t){let l,e,a=t[5].label+"",s,i,f;return{c(){l=g("li"),e=g("a"),s=R(a),f=z(),this.h()},l(r){l=w(r,"LI",{class:!0});var n=b(l);e=w(n,"A",{href:!0,class:!0});var c=b(e);s=U(c,a),c.forEach(d),f=B(n),n.forEach(d),this.h()},h(){m(e,"href",i=t[5].href),m(e,"class","svelte-ehsn6h"),m(l,"class","svelte-ehsn6h")},m(r,n){L(r,l,n),v(l,e),v(e,s),v(l,f)},p(r,n){n&2&&a!==(a=r[5].label+"")&&X(s,a),n&2&&i!==(i=r[5].href)&&m(e,"href",i)},d(r){r&&d(l)}}}function se(t){let l,e,a,s,i,f,r,n,c,_,I,A,T,O,E=j(t[1]),u=[];for(let h=0;h<E.length;h+=1)u[h]=q(k(t,E,h));return{c(){l=g("nav"),e=g("div"),a=g("div"),s=g("div"),f=z(),r=g("div"),n=g("a"),c=R(t[0]),_=z(),I=g("ul");for(let h=0;h<u.length;h+=1)u[h].c();this.h()},l(h){l=w(h,"NAV",{class:!0});var p=b(l);e=w(p,"DIV",{class:!0});var o=b(e);a=w(o,"DIV",{class:!0});var M=b(a);s=w(M,"DIV",{class:!0}),b(s).forEach(d),M.forEach(d),f=B(o),r=w(o,"DIV",{style:!0});var y=b(r);n=w(y,"A",{href:!0,class:!0});var C=b(n);c=U(C,t[0]),C.forEach(d),y.forEach(d),_=B(o),I=w(o,"UL",{class:!0});var x=b(I);for(let V=0;V<u.length;V+=1)u[V].l(x);x.forEach(d),o.forEach(d),p.forEach(d),this.h()},h(){m(s,"class","middle-line svelte-ehsn6h"),m(a,"class",i=H(`mobile-icon${t[2]?" active":""}`)+" svelte-ehsn6h"),m(n,"href","/"),m(n,"class","svelte-ehsn6h"),N(r,"white-space","nowrap"),m(I,"class",A=H(`navbar-list${t[2]?" mobile":""}`)+" svelte-ehsn6h"),m(e,"class","inner svelte-ehsn6h"),m(l,"class","svelte-ehsn6h")},m(h,p){L(h,l,p),v(l,e),v(e,a),v(a,s),v(e,f),v(e,r),v(r,n),v(n,c),v(e,_),v(e,I);for(let o=0;o<u.length;o+=1)u[o]&&u[o].m(I,null);T||(O=D(a,"click",t[3]),T=!0)},p(h,[p]){if(p&4&&i!==(i=H(`mobile-icon${h[2]?" active":""}`)+" svelte-ehsn6h")&&m(a,"class",i),p&1&&X(c,h[0]),p&2){E=j(h[1]);let o;for(o=0;o<E.length;o+=1){const M=k(h,E,o);u[o]?u[o].p(M,p):(u[o]=q(M),u[o].c(),u[o].m(I,null))}for(;o<u.length;o+=1)u[o].d(1);u.length=E.length}p&4&&A!==(A=H(`navbar-list${h[2]?" mobile":""}`)+" svelte-ehsn6h")&&m(I,"class",A)},i:P,o:P,d(h){h&&d(l),G(u,h),T=!1,O()}}}function ae(t,l,e){let a=!1,{logoName:s="AMHN '23"}=l,{navItems:i=[{label:"Item 1",href:"#"},{label:"Item 2",href:"#"},{label:"Item 3",href:"#"}]}=l;const f=()=>e(2,a=!a),r=n=>{n.matches||e(2,a=!1)};return J(()=>{window.matchMedia("(max-width: 767px)").addEventListener("change",r)}),t.$$set=n=>{"logoName"in n&&e(0,s=n.logoName),"navItems"in n&&e(1,i=n.navItems)},[s,i,a,f]}class ne extends Y{constructor(l){super(),F(this,l,ae,se,Q,{logoName:0,navItems:1})}}function ie(t){let l=!1,e=()=>{l=!1},a,s,i,f,r,n;return S(t[4]),S(t[5]),i=new ne({props:{logoName:"AMHN",navItems:[{label:"Organizers",href:"/#organizers"},{label:"Call",href:"/cfp/"},{label:"Related Papers",href:"/papers/"}]}}),{c(){s=g("div"),W(i.$$.fragment),this.h()},l(c){s=w(c,"DIV",{style:!0});var _=b(s);Z(i.$$.fragment,_),_.forEach(d),this.h()},h(){N(s,"position","fixed"),N(s,"left","0"),N(s,"right","0"),N(s,"z-index","10"),N(s,"top",t[2]+"px")},m(c,_){L(c,s,_),$(i,s,null),f=!0,r||(n=[D(window,"scroll",()=>{l=!0,clearTimeout(a),a=setTimeout(e,100),t[4]()}),D(window,"resize",t[5])],r=!0)},p(c,[_]){_&1&&!l&&(l=!0,clearTimeout(a),scrollTo(window.pageXOffset,c[0]),a=setTimeout(e,100)),_&4&&N(s,"top",c[2]+"px")},i(c){f||(ee(i.$$.fragment,c),f=!0)},o(c){te(i.$$.fragment,c),f=!1},d(c){c&&d(s),le(i),r=!1,K(n)}}}function oe(t,l,e){let a,s=0,i,{paralax:f=!0}=l;function r(){e(0,s=window.pageYOffset)}function n(){e(1,i=window.innerHeight)}return t.$$set=c=>{"paralax"in c&&e(3,f=c.paralax)},t.$$.update=()=>{t.$$.dirty&11&&e(2,a=f?-Math.min(s/(.7*i)*30,30):-Math.min(s,30))},[s,i,a,f,r,n]}class he extends Y{constructor(l){super(),F(this,l,oe,ie,Q,{paralax:3})}}export{he as A,j as e};