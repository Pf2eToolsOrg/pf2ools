import{S as k,i as B,s as F,k as _,y as b,a as p,l as m,m as v,z as C,c as x,h as f,n as g,b as y,A as E,O as h,g as I,d as D,B as V,ad as j,q as R,r as S,u as z,a2 as A,X as O}from"../chunks/index.54c581ea.js";import{R as U}from"../chunks/Renderer.5ff91db0.js";class X extends k{constructor(e){super(),B(this,e,null,null,F,{})}}function L(i,e,n){const l=i.slice();return l[1]=e[n],l}function P(i){let e,n=i[1]+"",l,r;return{c(){e=_("li"),l=R(n),r=p()},l(c){e=m(c,"LI",{});var o=v(e);l=S(o,n),r=x(o),o.forEach(f)},m(c,o){y(c,e,o),h(e,l),h(e,r)},p(c,o){o&1&&n!==(n=c[1]+"")&&z(l,n)},d(c){c&&f(e)}}}function G(i){let e,n,l,r,c;n=new X({});let o=i[0],s=[];for(let a=0;a<o.length;a+=1)s[a]=P(L(i,o,a));return{c(){e=_("div"),b(n.$$.fragment),l=p(),r=_("ul");for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=m(a,"DIV",{class:!0,id:!0});var d=v(e);C(n.$$.fragment,d),l=x(d),r=m(d,"UL",{class:!0});var t=v(r);for(let u=0;u<s.length;u+=1)s[u].l(t);t.forEach(f),d.forEach(f),this.h()},h(){g(r,"class","view-row"),g(e,"class","view-col"),g(e,"id","listcontainer")},m(a,d){y(a,e,d),E(n,e,null),h(e,l),h(e,r);for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(r,null);c=!0},p(a,[d]){if(d&1){o=a[0];let t;for(t=0;t<o.length;t+=1){const u=L(a,o,t);s[t]?s[t].p(u,d):(s[t]=P(u),s[t].c(),s[t].m(r,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=o.length}},i(a){c||(I(n.$$.fragment,a),c=!0)},o(a){D(n.$$.fragment,a),c=!1},d(a){a&&f(e),V(n),j(s,a)}}}function H(i,e,n){let{data:l=[]}=e;return i.$$set=r=>{"data"in r&&n(0,l=r.data)},[l]}class J extends k{constructor(e){super(),B(this,e,H,G,F,{data:0})}}function K(i){let e,n,l,r,c,o,s,a,d;return r=new J({}),s=new U({}),{c(){e=p(),n=_("div"),l=_("div"),b(r.$$.fragment),c=p(),o=_("div"),b(s.$$.fragment),a=R("Content Content Content"),this.h()},l(t){A("svelte-1xgp5u0",document.head).forEach(f),e=x(t),n=m(t,"DIV",{class:!0});var $=v(n);l=m($,"DIV",{class:!0});var q=v(l);C(r.$$.fragment,q),q.forEach(f),c=x($),o=m($,"DIV",{class:!0});var w=v(o);C(s.$$.fragment,w),a=S(w,"Content Content Content"),w.forEach(f),$.forEach(f),this.h()},h(){document.title="PF2ools - Items",g(l,"class","border view-col svelte-npy0rt"),g(o,"class","border view-col font-sabonltstd svelte-npy0rt"),g(n,"class","container pf2ools md:flex flex-row justify-center space-y-3")},m(t,u){y(t,e,u),y(t,n,u),h(n,l),E(r,l,null),h(n,c),h(n,o),E(s,o,null),h(o,a),d=!0},p:O,i(t){d||(I(r.$$.fragment,t),I(s.$$.fragment,t),d=!0)},o(t){D(r.$$.fragment,t),D(s.$$.fragment,t),d=!1},d(t){t&&f(e),t&&f(n),V(r),V(s)}}}function M(i,e,n){let{data:l}=e;return i.$$set=r=>{"data"in r&&n(0,l=r.data)},i.$$.update=()=>{i.$$.dirty&1&&console.log(l)},[l]}class T extends k{constructor(e){super(),B(this,e,M,K,F,{data:0})}}export{T as default};
