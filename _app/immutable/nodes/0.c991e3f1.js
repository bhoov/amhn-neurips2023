import{S as U,i as X,s as Y,k as v,a as R,q as j,l as b,m as k,h as f,c as L,r as $,n as i,C as q,p as D,b as S,D as o,E as J,u as oe,F as le,G as fe,o as he,H as se,y as ie,z as ce,A as me,g as K,d as Q,B as ue,I as de,J as _e,K as pe,L as ve,M as be,N as ge}from"../chunks/index.e4335526.js";/* empty css                                                          *//* empty css                                                     */function ne(r,e,t){const l=r.slice();return l[5]=e[t],l}function re(r){let e,t,l=r[5].label+"",a,s,p;return{c(){e=v("li"),t=v("a"),a=j(l),p=R(),this.h()},l(m){e=b(m,"LI",{class:!0});var n=k(e);t=b(n,"A",{href:!0,class:!0});var h=k(t);a=$(h,l),h.forEach(f),p=L(n),n.forEach(f),this.h()},h(){i(t,"href",s=r[5].href),i(t,"class","svelte-1jkosbp"),i(e,"class","svelte-1jkosbp")},m(m,n){S(m,e,n),o(e,t),o(t,a),o(e,p)},p(m,n){n&2&&l!==(l=m[5].label+"")&&oe(a,l),n&2&&s!==(s=m[5].href)&&i(t,"href",s)},d(m){m&&f(e)}}}function we(r){let e,t,l,a,s,p,m,n,h,g,w,H,V,I,A=r[1],_=[];for(let d=0;d<A.length;d+=1)_[d]=re(ne(r,A,d));return{c(){e=v("nav"),t=v("div"),l=v("div"),a=v("div"),p=R(),m=v("div"),n=v("a"),h=j(r[0]),g=R(),w=v("ul");for(let d=0;d<_.length;d+=1)_[d].c();this.h()},l(d){e=b(d,"NAV",{class:!0});var E=k(e);t=b(E,"DIV",{class:!0});var c=k(t);l=b(c,"DIV",{class:!0});var T=k(l);a=b(T,"DIV",{class:!0}),k(a).forEach(f),T.forEach(f),p=L(c),m=b(c,"DIV",{style:!0});var C=k(m);n=b(C,"A",{href:!0,class:!0});var N=k(n);h=$(N,r[0]),N.forEach(f),C.forEach(f),g=L(c),w=b(c,"UL",{class:!0});var W=k(w);for(let z=0;z<_.length;z+=1)_[z].l(W);W.forEach(f),c.forEach(f),E.forEach(f),this.h()},h(){i(a,"class","middle-line svelte-1jkosbp"),i(l,"class",s=q(`mobile-icon${r[2]?" active":""}`)+" svelte-1jkosbp"),i(n,"href","/"),i(n,"class","svelte-1jkosbp"),D(m,"white-space","nowrap"),i(w,"class",H=q(`navbar-list${r[2]?" mobile":""}`)+" svelte-1jkosbp"),i(t,"class","inner svelte-1jkosbp"),i(e,"class","svelte-1jkosbp")},m(d,E){S(d,e,E),o(e,t),o(t,l),o(l,a),o(t,p),o(t,m),o(m,n),o(n,h),o(t,g),o(t,w);for(let c=0;c<_.length;c+=1)_[c]&&_[c].m(w,null);V||(I=J(l,"click",r[3]),V=!0)},p(d,[E]){if(E&4&&s!==(s=q(`mobile-icon${d[2]?" active":""}`)+" svelte-1jkosbp")&&i(l,"class",s),E&1&&oe(h,d[0]),E&2){A=d[1];let c;for(c=0;c<A.length;c+=1){const T=ne(d,A,c);_[c]?_[c].p(T,E):(_[c]=re(T),_[c].c(),_[c].m(w,null))}for(;c<_.length;c+=1)_[c].d(1);_.length=A.length}E&4&&H!==(H=q(`navbar-list${d[2]?" mobile":""}`)+" svelte-1jkosbp")&&i(w,"class",H)},i:le,o:le,d(d){d&&f(e),fe(_,d),V=!1,I()}}}function Ie(r,e,t){let l=!1,{logoName:a="AMHN '23"}=e,{navItems:s=[{label:"Item 1",href:"#"},{label:"Item 2",href:"#"},{label:"Item 3",href:"#"}]}=e;const p=()=>t(2,l=!l),m=n=>{n.matches||t(2,l=!1)};return he(()=>{window.matchMedia("(max-width: 767px)").addEventListener("change",m)}),r.$$set=n=>{"logoName"in n&&t(0,a=n.logoName),"navItems"in n&&t(1,s=n.navItems)},[a,s,l,p]}class Me extends U{constructor(e){super(),X(this,e,Ie,we,Y,{logoName:0,navItems:1})}}function ke(r){let e=!1,t=()=>{e=!1},l,a,s,p,m,n;return se(r[4]),se(r[5]),s=new Me({props:{logoName:"AMHN",navItems:[{label:"Call",href:"/cfp/"},{label:"Related Papers",href:"/papers/"},{label:"Demo",href:"/demo"},{label:"Contact",href:"/#contact"}]}}),{c(){a=v("div"),ie(s.$$.fragment),this.h()},l(h){a=b(h,"DIV",{style:!0});var g=k(a);ce(s.$$.fragment,g),g.forEach(f),this.h()},h(){D(a,"position","fixed"),D(a,"left","0"),D(a,"right","0"),D(a,"z-index","10"),D(a,"top",r[2]+"px")},m(h,g){S(h,a,g),me(s,a,null),p=!0,m||(n=[J(window,"scroll",()=>{e=!0,clearTimeout(l),l=setTimeout(t,100),r[4]()}),J(window,"resize",r[5])],m=!0)},p(h,[g]){g&1&&!e&&(e=!0,clearTimeout(l),scrollTo(window.pageXOffset,h[0]),l=setTimeout(t,100)),g&4&&D(a,"top",h[2]+"px")},i(h){p||(K(s.$$.fragment,h),p=!0)},o(h){Q(s.$$.fragment,h),p=!1},d(h){h&&f(a),ue(s),m=!1,de(n)}}}function Ee(r,e,t){let l,a=0,s,{paralax:p=!0}=e;function m(){t(0,a=window.pageYOffset)}function n(){t(1,s=window.innerHeight)}return r.$$set=h=>{"paralax"in h&&t(3,p=h.paralax)},r.$$.update=()=>{r.$$.dirty&11&&t(2,l=p?-Math.min(a/(.7*s)*30,30):-Math.min(a,30))},[a,s,l,p,m,n]}class ye extends U{constructor(e){super(),X(this,e,Ee,ke,Y,{paralax:3})}}function Ae(r){let e,t,l,a,s,p,m,n,h,g,w,H,V,I,A,_,d,E,c,T,C,N,W,z,F,G,O;m=new ye({});const x=r[1].default,y=_e(x,r,r[0],null);return{c(){e=v("meta"),t=v("meta"),l=v("meta"),a=v("meta"),s=v("meta"),p=R(),ie(m.$$.fragment),n=R(),y&&y.c(),h=R(),g=v("div"),w=v("footer"),H=v("hr"),V=R(),I=v("p"),A=j("Website and "),_=v("a"),d=j("demo"),E=j(` built by
            `),c=v("a"),T=j("Hendrik Strobelt"),C=j(`
            (IBM Research, MIT-IBM) and
            `),N=v("a"),W=j("Benjamin Hoover"),z=j(` (IBM
            Research, GA Tech).`),F=R(),G=v("hr"),this.h()},l(u){const M=pe("svelte-ery7jk",document.head);e=b(M,"META",{name:!0,content:!0}),t=b(M,"META",{name:!0,content:!0}),l=b(M,"META",{name:!0,content:!0}),a=b(M,"META",{name:!0,content:!0}),s=b(M,"META",{name:!0,content:!0}),M.forEach(f),p=L(u),ce(m.$$.fragment,u),n=L(u),y&&y.l(u),h=L(u),g=b(u,"DIV",{class:!0});var Z=k(g);w=b(Z,"FOOTER",{class:!0});var P=k(w);H=b(P,"HR",{class:!0}),V=L(P),I=b(P,"P",{class:!0,style:!0});var B=k(I);A=$(B,"Website and "),_=b(B,"A",{href:!0});var ee=k(_);d=$(ee,"demo"),ee.forEach(f),E=$(B,` built by
            `),c=b(B,"A",{href:!0,target:!0});var te=k(c);T=$(te,"Hendrik Strobelt"),te.forEach(f),C=$(B,`
            (IBM Research, MIT-IBM) and
            `),N=b(B,"A",{href:!0,target:!0});var ae=k(N);W=$(ae,"Benjamin Hoover"),ae.forEach(f),z=$(B,` (IBM
            Research, GA Tech).`),B.forEach(f),F=L(P),G=b(P,"HR",{class:!0}),P.forEach(f),Z.forEach(f),this.h()},h(){i(e,"name","twitter:card"),i(e,"content","summary_large_image"),i(t,"name","twitter:site"),i(t,"content","https://amhn.vizhub.ai"),i(l,"name","twitter:title"),i(l,"content","AMHN Workshop @NeurIPS 2023"),i(a,"name","twitter:description"),i(a,"content","Associative Memory & Hopfield Network Worshop @NeurIPS 2023. Discuss the latest multidisciplinary developments in Associative Memory and Hopfield Networks. Imagine new tools built around memory as computation."),i(s,"name","twitter:image"),i(s,"content","https://amhn.vizhub.ai/img/amhn_card_preview.jpg"),i(H,"class","bg-gray-800"),i(_,"href","/demo"),i(c,"href","http://hendrik.strobelt.com/"),i(c,"target","_blank"),i(N,"href","https://bhoov.com/"),i(N,"target","_blank"),i(I,"class","text-sm text-gray-400 my-8 px-6"),D(I,"text-align","center"),i(G,"class","bg-gray-800"),i(w,"class","content-wide my-8"),i(g,"class","contentWrap")},m(u,M){o(document.head,e),o(document.head,t),o(document.head,l),o(document.head,a),o(document.head,s),S(u,p,M),me(m,u,M),S(u,n,M),y&&y.m(u,M),S(u,h,M),S(u,g,M),o(g,w),o(w,H),o(w,V),o(w,I),o(I,A),o(I,_),o(_,d),o(I,E),o(I,c),o(c,T),o(I,C),o(I,N),o(N,W),o(I,z),o(w,F),o(w,G),O=!0},p(u,[M]){y&&y.p&&(!O||M&1)&&ve(y,x,u,u[0],O?ge(x,u[0],M,null):be(u[0]),null)},i(u){O||(K(m.$$.fragment,u),K(y,u),O=!0)},o(u){Q(m.$$.fragment,u),Q(y,u),O=!1},d(u){f(e),f(t),f(l),f(a),f(s),u&&f(p),ue(m,u),u&&f(n),y&&y.d(u),u&&f(h),u&&f(g)}}}function Ne(r,e,t){let{$$slots:l={},$$scope:a}=e;return r.$$set=s=>{"$$scope"in s&&t(0,a=s.$$scope)},[a,l]}class $e extends U{constructor(e){super(),X(this,e,Ne,Ae,Y,{})}}export{$e as component};
