import{S as A,i as D,s as S,k as g,a as E,l as $,m as k,c as T,h as a,b as p,O as w,g as u,v,d as h,f as y,n as L,y as N,z as V,A as P,B as H,X as I,e as b,ad as M,q as ke,r as ve,P as C,u as ye,Q as we,Z as Ee,x as R,a1 as Le,a3 as Ne}from"./index.54c581ea.js";import{t as W}from"./ProgressBar.svelte_svelte_type_style_lang.71927ef1.js";class Te{trigger({message:e,options:n={}}){W.trigger({message:e,duration:3e3,position:"b",isClosable:!0,...n})}error(e){console.error(e),this.trigger({message:e,background:"variant-filled-error"})}success(e){this.trigger({message:e,background:"variant-filled-success"})}warn(e){this.warning(e)}warning(e){console.warn(e),this.trigger({message:e,background:"variant-filled-warning"})}clear(){W.clear()}}const U={};U.getValidColor=function(e){return/^(#|)([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/i.test(e)?`#${e.replace("#","")}`:`rgba(${e.split(",").map(t=>parseFloat(t.trim()))})`};const Pe=new Te;function d(o,e={noWrap:!0}){return!e.noWrap&&!e.prefix&&!e.suffix&&(e.prefix='<p class="pf2-stat__text">',e.suffix="</p>"),o=He(o,e),e.prefix&&e.suffix&&(o=e.prefix+o+e.suffix),o}function He(o,e){const n=De(o),r=n.length;let t="";for(let s=0;s<r;++s){const l=n[s];if(l)if(l.startsWith("{@")){const[f,i]=Se(l.slice(1,-1));t+=Ae(e,f,i)}else t+=l}return t}function Ae(o,e,n){switch(e){case"@as":case"@actionsymbol":return`<span class="font-action" data-symbol="${n}"></span>
			<span class="opacity-0 text-[0px] left-2 absolute">${Ve(n)}</span>`;case"@b":case"@bold":return`<b>${d(n)}</b>`;case"@i":case"@italic":return`<i>${d(n)}</i>`;case"@u":case"@underline":return`<u>${d(n)}</u>`;case"@s":case"@strike":return`<s>${d(n)}</s>`;case"@c":case"@center":return`<span class="text-center block">${d(n)}</span>`;case"@note":return`<i class="note-muted">${d(n)}</i>`;case"@link":{const[r,t]=O(n);let s=t??r;return s.startsWith("http")||(s=`http://${s}`),`<a href=${s}>${d(r)}</a>`}case"@color":{const[r,t]=O(n);return`<span style="color: ${U.getValidColor(t)}">${d(r)}</span>`}case"@handwriting":return`<span class="font-basing italic text-xl">${d(n)}</span>`;case"@highlight":{const[r,t]=O(n),s=t?U.getValidColor(t):null;return(s?`<span style="background-color: ${s}">`:'<span class="bg-warning-700">')+d(r)+"</span>"}case"@nostyle":return`<span class="appearance-none font-no inline-block">${d(n)}</span>`;default:return Pe.warn(`Unknown tag: ${e}`),`<span class="bg-warning-500">{${e} ${d(n)}}</span>`}}const De=o=>Be("@")(o),O=o=>Me("@")(o);function Se(o){const e=o.indexOf(" ");return e===-1?[o,""]:[o.substr(0,e),o.substr(e+1)]}function Ve(o){switch(o.toLowerCase()){case"1":case"a":return"[>]";case"2":case"d":return"[>>]";case"3":case"t":return"[>>>]";case"f":return"[F]";case"r":return"[R]";default:return"[?]"}}function Be(o){return function(e){let n=0,r,t;const s=[];let l="",f=!1;const i=e.length;for(let c=0;c<i;++c)switch(r=e[c],t=e[c+1],r){case"{":f=!0,t===o?n++>0?l+="{":(s.push(l.replace(/<VE_LEAD>/g,o)),l=`{${o}`,++c):l+="{";break;case"}":f=!1,l+="}",n!==0&&--n===0&&(s.push(l.replace(/<VE_LEAD>/g,o)),l="");break;case o:{f?l+=o:l+="<VE_LEAD>";break}default:f=!1,l+=r;break}return l&&s.push(l.replace(/<VE_LEAD>/g,o)),s}}function Me(o){return function(e){let n=0,r,t;const s=[];let l="";const f=e.length;for(let i=0;i<f;++i)switch(r=e[i],t=e[i+1],r){case"{":t===o&&n++,l+="{";break;case"}":n&&n--,l+="}";break;case"|":{n?l+="|":(s.push(l),l="");break}default:{l+=r;break}}return l&&s.push(l),s}}function j(o){let e,n=d(o[0].name)+"";return{c(){e=g("span"),this.h()},l(r){e=$(r,"SPAN",{class:!0});var t=k(e);t.forEach(a),this.h()},h(){L(e,"class","text-2xl font-bold")},m(r,t){p(r,e,t),e.innerHTML=n},p(r,t){t&1&&n!==(n=d(r[0].name)+"")&&(e.innerHTML=n)},d(r){r&&a(e)}}}function z(o){let e,n,r;return n=new B({props:{entries:o[0].entries}}),{c(){e=g("div"),N(n.$$.fragment)},l(t){e=$(t,"DIV",{});var s=k(e);V(n.$$.fragment,s),s.forEach(a)},m(t,s){p(t,e,s),P(n,e,null),r=!0},p(t,s){const l={};s&1&&(l.entries=t[0].entries),n.$set(l)},i(t){r||(u(n.$$.fragment,t),r=!0)},o(t){h(n.$$.fragment,t),r=!1},d(t){t&&a(e),H(n)}}}function Ie(o){var l,f;let e,n,r,t=o[0].name&&j(o),s=((f=(l=o[0])==null?void 0:l.entries)==null?void 0:f.length)>0&&z(o);return{c(){e=g("div"),t&&t.c(),n=E(),s&&s.c()},l(i){e=$(i,"DIV",{});var c=k(e);t&&t.l(c),n=T(c),s&&s.l(c),c.forEach(a)},m(i,c){p(i,e,c),t&&t.m(e,null),w(e,n),s&&s.m(e,null),r=!0},p(i,[c]){var _,m;i[0].name?t?t.p(i,c):(t=j(i),t.c(),t.m(e,n)):t&&(t.d(1),t=null),((m=(_=i[0])==null?void 0:_.entries)==null?void 0:m.length)>0?s?(s.p(i,c),c&1&&u(s,1)):(s=z(i),s.c(),u(s,1),s.m(e,null)):s&&(v(),h(s,1,1,()=>{s=null}),y())},i(i){r||(u(s),r=!0)},o(i){h(s),r=!1},d(i){i&&a(e),t&&t.d(),s&&s.d()}}}function Ce(o,e,n){let{entry:r}=e;return o.$$set=t=>{"entry"in t&&n(0,r=t.entry)},[r]}class Oe extends A{constructor(e){super(),D(this,e,Ce,Ie,S,{entry:0})}}function Ue(o){let e;return{c(){e=g("hr")},l(n){e=$(n,"HR",{})},m(n,r){p(n,e,r)},p:I,i:I,o:I,d(n){n&&a(e)}}}class Fe extends A{constructor(e){super(),D(this,e,null,Ue,S,{})}}function q(o,e,n){const r=o.slice();return r[1]=e[n],r}function Q(o){let e,n=d(o[0].name)+"";return{c(){e=g("h1")},l(r){e=$(r,"H1",{});var t=k(e);t.forEach(a)},m(r,t){p(r,e,t),e.innerHTML=n},p(r,t){t&1&&n!==(n=d(r[0].name)+"")&&(e.innerHTML=n)},d(r){r&&a(e)}}}function X(o){let e,n,r=o[0].entries,t=[];for(let l=0;l<r.length;l+=1)t[l]=Z(q(o,r,l));const s=l=>h(t[l],1,1,()=>{t[l]=null});return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=b()},l(l){for(let f=0;f<t.length;f+=1)t[f].l(l);e=b()},m(l,f){for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(l,f);p(l,e,f),n=!0},p(l,f){if(f&1){r=l[0].entries;let i;for(i=0;i<r.length;i+=1){const c=q(l,r,i);t[i]?(t[i].p(c,f),u(t[i],1)):(t[i]=Z(c),t[i].c(),u(t[i],1),t[i].m(e.parentNode,e))}for(v(),i=r.length;i<t.length;i+=1)s(i);y()}},i(l){if(!n){for(let f=0;f<r.length;f+=1)u(t[f]);n=!0}},o(l){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)h(t[f]);n=!1},d(l){M(t,l),l&&a(e)}}}function Z(o){let e,n,r,t;return n=new B({props:{entries:o[1]}}),{c(){e=g("p"),N(n.$$.fragment),r=E()},l(s){e=$(s,"P",{});var l=k(e);V(n.$$.fragment,l),r=T(l),l.forEach(a)},m(s,l){p(s,e,l),P(n,e,null),w(e,r),t=!0},p(s,l){const f={};l&1&&(f.entries=s[1]),n.$set(f)},i(s){t||(u(n.$$.fragment,s),t=!0)},o(s){h(n.$$.fragment,s),t=!1},d(s){s&&a(e),H(n)}}}function Re(o){var l,f;let e,n,r,t=o[0].name&&Q(o),s=((f=(l=o[0])==null?void 0:l.entries)==null?void 0:f.length)>0&&X(o);return{c(){t&&t.c(),e=E(),s&&s.c(),n=b()},l(i){t&&t.l(i),e=T(i),s&&s.l(i),n=b()},m(i,c){t&&t.m(i,c),p(i,e,c),s&&s.m(i,c),p(i,n,c),r=!0},p(i,[c]){var _,m;i[0].name?t?t.p(i,c):(t=Q(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),((m=(_=i[0])==null?void 0:_.entries)==null?void 0:m.length)>0?s?(s.p(i,c),c&1&&u(s,1)):(s=X(i),s.c(),u(s,1),s.m(n.parentNode,n)):s&&(v(),h(s,1,1,()=>{s=null}),y())},i(i){r||(u(s),r=!0)},o(i){h(s),r=!1},d(i){t&&t.d(i),i&&a(e),s&&s.d(i),i&&a(n)}}}function We(o,e,n){let{entry:r}=e;return o.$$set=t=>{"entry"in t&&n(0,r=t.entry)},[r]}class je extends A{constructor(e){super(),D(this,e,We,Re,S,{entry:0})}}function G(o,e,n){const r=o.slice();return r[1]=e[n],r}function J(o){let e,n=d(o[0].name)+"";return{c(){e=g("h2")},l(r){e=$(r,"H2",{});var t=k(e);t.forEach(a)},m(r,t){p(r,e,t),e.innerHTML=n},p(r,t){t&1&&n!==(n=d(r[0].name)+"")&&(e.innerHTML=n)},d(r){r&&a(e)}}}function K(o){let e,n,r=o[0].entries,t=[];for(let l=0;l<r.length;l+=1)t[l]=Y(G(o,r,l));const s=l=>h(t[l],1,1,()=>{t[l]=null});return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=b()},l(l){for(let f=0;f<t.length;f+=1)t[f].l(l);e=b()},m(l,f){for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(l,f);p(l,e,f),n=!0},p(l,f){if(f&1){r=l[0].entries;let i;for(i=0;i<r.length;i+=1){const c=G(l,r,i);t[i]?(t[i].p(c,f),u(t[i],1)):(t[i]=Y(c),t[i].c(),u(t[i],1),t[i].m(e.parentNode,e))}for(v(),i=r.length;i<t.length;i+=1)s(i);y()}},i(l){if(!n){for(let f=0;f<r.length;f+=1)u(t[f]);n=!0}},o(l){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)h(t[f]);n=!1},d(l){M(t,l),l&&a(e)}}}function Y(o){let e,n,r,t;return n=new B({props:{entries:o[1]}}),{c(){e=g("p"),N(n.$$.fragment),r=E()},l(s){e=$(s,"P",{});var l=k(e);V(n.$$.fragment,l),r=T(l),l.forEach(a)},m(s,l){p(s,e,l),P(n,e,null),w(e,r),t=!0},p(s,l){const f={};l&1&&(f.entries=s[1]),n.$set(f)},i(s){t||(u(n.$$.fragment,s),t=!0)},o(s){h(n.$$.fragment,s),t=!1},d(s){s&&a(e),H(n)}}}function ze(o){var l,f;let e,n,r,t=o[0].name&&J(o),s=((f=(l=o[0])==null?void 0:l.entries)==null?void 0:f.length)>0&&K(o);return{c(){e=g("div"),t&&t.c(),n=E(),s&&s.c()},l(i){e=$(i,"DIV",{});var c=k(e);t&&t.l(c),n=T(c),s&&s.l(c),c.forEach(a)},m(i,c){p(i,e,c),t&&t.m(e,null),w(e,n),s&&s.m(e,null),r=!0},p(i,[c]){var _,m;i[0].name?t?t.p(i,c):(t=J(i),t.c(),t.m(e,n)):t&&(t.d(1),t=null),((m=(_=i[0])==null?void 0:_.entries)==null?void 0:m.length)>0?s?(s.p(i,c),c&1&&u(s,1)):(s=K(i),s.c(),u(s,1),s.m(e,null)):s&&(v(),h(s,1,1,()=>{s=null}),y())},i(i){r||(u(s),r=!0)},o(i){h(s),r=!1},d(i){i&&a(e),t&&t.d(),s&&s.d()}}}function qe(o,e,n){let{entry:r}=e;return o.$$set=t=>{"entry"in t&&n(0,r=t.entry)},[r]}class Qe extends A{constructor(e){super(),D(this,e,qe,ze,S,{entry:0})}}function x(o,e,n){const r=o.slice();return r[4]=e[n],r}function ee(o){let e,n=d(o[0].name)+"";return{c(){e=g("span"),this.h()},l(r){e=$(r,"SPAN",{class:!0});var t=k(e);t.forEach(a),this.h()},h(){L(e,"class","h3 font-gin")},m(r,t){p(r,e,t),e.innerHTML=n},p(r,t){t&1&&n!==(n=d(r[0].name)+"")&&(e.innerHTML=n)},d(r){r&&a(e)}}}function te(o){let e,n=o[1]?"[+]":"[‒]",r,t,s;return{c(){e=g("button"),r=ke(n),this.h()},l(l){e=$(l,"BUTTON",{class:!0});var f=k(e);r=ve(f,n),f.forEach(a),this.h()},h(){L(e,"class","ml-auto select-none")},m(l,f){p(l,e,f),w(e,r),t||(s=[C(e,"keypress",o[3]),C(e,"click",o[2])],t=!0)},p(l,f){f&2&&n!==(n=l[1]?"[+]":"[‒]")&&ye(r,n)},d(l){l&&a(e),t=!1,we(s)}}}function le(o){var t,s;let e,n,r=((s=(t=o[0])==null?void 0:t.entries)==null?void 0:s.length)>0&&ne(o);return{c(){r&&r.c(),e=b()},l(l){r&&r.l(l),e=b()},m(l,f){r&&r.m(l,f),p(l,e,f),n=!0},p(l,f){var i,c;((c=(i=l[0])==null?void 0:i.entries)==null?void 0:c.length)>0?r?(r.p(l,f),f&1&&u(r,1)):(r=ne(l),r.c(),u(r,1),r.m(e.parentNode,e)):r&&(v(),h(r,1,1,()=>{r=null}),y())},i(l){n||(u(r),n=!0)},o(l){h(r),n=!1},d(l){r&&r.d(l),l&&a(e)}}}function ne(o){let e,n,r=o[0].entries,t=[];for(let l=0;l<r.length;l+=1)t[l]=re(x(o,r,l));const s=l=>h(t[l],1,1,()=>{t[l]=null});return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=b()},l(l){for(let f=0;f<t.length;f+=1)t[f].l(l);e=b()},m(l,f){for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(l,f);p(l,e,f),n=!0},p(l,f){if(f&1){r=l[0].entries;let i;for(i=0;i<r.length;i+=1){const c=x(l,r,i);t[i]?(t[i].p(c,f),u(t[i],1)):(t[i]=re(c),t[i].c(),u(t[i],1),t[i].m(e.parentNode,e))}for(v(),i=r.length;i<t.length;i+=1)s(i);y()}},i(l){if(!n){for(let f=0;f<r.length;f+=1)u(t[f]);n=!0}},o(l){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)h(t[f]);n=!1},d(l){M(t,l),l&&a(e)}}}function re(o){let e,n,r,t;return n=new B({props:{entries:o[4]}}),{c(){e=g("p"),N(n.$$.fragment),r=E()},l(s){e=$(s,"P",{});var l=k(e);V(n.$$.fragment,l),r=T(l),l.forEach(a)},m(s,l){p(s,e,l),P(n,e,null),w(e,r),t=!0},p(s,l){const f={};l&1&&(f.entries=s[4]),n.$set(f)},i(s){t||(u(n.$$.fragment,s),t=!0)},o(s){h(n.$$.fragment,s),t=!1},d(s){s&&a(e),H(n)}}}function Xe(o){let e,n,r,t,s,l=o[0].name&&ee(o),f=o[0].collapsible&&te(o),i=!o[1]&&le(o);return{c(){e=g("div"),n=g("p"),l&&l.c(),r=E(),f&&f.c(),t=E(),i&&i.c(),this.h()},l(c){e=$(c,"DIV",{});var _=k(e);n=$(_,"P",{class:!0});var m=k(n);l&&l.l(m),r=T(m),f&&f.l(m),m.forEach(a),t=T(_),i&&i.l(_),_.forEach(a),this.h()},h(){L(n,"class","flex")},m(c,_){p(c,e,_),w(e,n),l&&l.m(n,null),w(n,r),f&&f.m(n,null),w(e,t),i&&i.m(e,null),s=!0},p(c,[_]){c[0].name?l?l.p(c,_):(l=ee(c),l.c(),l.m(n,r)):l&&(l.d(1),l=null),c[0].collapsible?f?f.p(c,_):(f=te(c),f.c(),f.m(n,null)):f&&(f.d(1),f=null),c[1]?i&&(v(),h(i,1,1,()=>{i=null}),y()):i?(i.p(c,_),_&2&&u(i,1)):(i=le(c),i.c(),u(i,1),i.m(e,null))},i(c){s||(u(i),s=!0)},o(c){h(i),s=!1},d(c){c&&a(e),l&&l.d(),f&&f.d(),i&&i.d()}}}function Ze(o,e,n){let{entry:r}=e,t=!1;function s(){n(1,t=!t)}function l(f){Ee.call(this,o,f)}return o.$$set=f=>{"entry"in f&&n(0,r=f.entry)},[r,t,s,l]}class Ge extends A{constructor(e){super(),D(this,e,Ze,Xe,S,{entry:0})}}function ie(o,e,n){const r=o.slice();return r[4]=e[n],r}function se(o){let e,n=d(o[0].name)+"";return{c(){e=g("span"),this.h()},l(r){e=$(r,"SPAN",{class:!0});var t=k(e);t.forEach(a),this.h()},h(){L(e,"class","h4 font-gin")},m(r,t){p(r,e,t),e.innerHTML=n},p(r,t){t&1&&n!==(n=d(r[0].name)+"")&&(e.innerHTML=n)},d(r){r&&a(e)}}}function fe(o){let e,n=o[1]?"[+]":"[‒]",r,t,s;return{c(){e=g("button"),r=ke(n),this.h()},l(l){e=$(l,"BUTTON",{class:!0});var f=k(e);r=ve(f,n),f.forEach(a),this.h()},h(){L(e,"class","ml-auto select-none")},m(l,f){p(l,e,f),w(e,r),t||(s=[C(e,"keypress",o[3]),C(e,"click",o[2])],t=!0)},p(l,f){f&2&&n!==(n=l[1]?"[+]":"[‒]")&&ye(r,n)},d(l){l&&a(e),t=!1,we(s)}}}function oe(o){var t,s;let e,n,r=((s=(t=o[0])==null?void 0:t.entries)==null?void 0:s.length)>0&&ce(o);return{c(){r&&r.c(),e=b()},l(l){r&&r.l(l),e=b()},m(l,f){r&&r.m(l,f),p(l,e,f),n=!0},p(l,f){var i,c;((c=(i=l[0])==null?void 0:i.entries)==null?void 0:c.length)>0?r?(r.p(l,f),f&1&&u(r,1)):(r=ce(l),r.c(),u(r,1),r.m(e.parentNode,e)):r&&(v(),h(r,1,1,()=>{r=null}),y())},i(l){n||(u(r),n=!0)},o(l){h(r),n=!1},d(l){r&&r.d(l),l&&a(e)}}}function ce(o){let e,n,r=o[0].entries,t=[];for(let l=0;l<r.length;l+=1)t[l]=ae(ie(o,r,l));const s=l=>h(t[l],1,1,()=>{t[l]=null});return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=b()},l(l){for(let f=0;f<t.length;f+=1)t[f].l(l);e=b()},m(l,f){for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(l,f);p(l,e,f),n=!0},p(l,f){if(f&1){r=l[0].entries;let i;for(i=0;i<r.length;i+=1){const c=ie(l,r,i);t[i]?(t[i].p(c,f),u(t[i],1)):(t[i]=ae(c),t[i].c(),u(t[i],1),t[i].m(e.parentNode,e))}for(v(),i=r.length;i<t.length;i+=1)s(i);y()}},i(l){if(!n){for(let f=0;f<r.length;f+=1)u(t[f]);n=!0}},o(l){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)h(t[f]);n=!1},d(l){M(t,l),l&&a(e)}}}function ae(o){let e,n,r,t;return n=new B({props:{entries:o[4]}}),{c(){e=g("p"),N(n.$$.fragment),r=E()},l(s){e=$(s,"P",{});var l=k(e);V(n.$$.fragment,l),r=T(l),l.forEach(a)},m(s,l){p(s,e,l),P(n,e,null),w(e,r),t=!0},p(s,l){const f={};l&1&&(f.entries=s[4]),n.$set(f)},i(s){t||(u(n.$$.fragment,s),t=!0)},o(s){h(n.$$.fragment,s),t=!1},d(s){s&&a(e),H(n)}}}function Je(o){let e,n,r,t,s,l=o[0].name&&se(o),f=o[0].collapsible&&fe(o),i=!o[1]&&oe(o);return{c(){e=g("div"),n=g("p"),l&&l.c(),r=E(),f&&f.c(),t=E(),i&&i.c(),this.h()},l(c){e=$(c,"DIV",{});var _=k(e);n=$(_,"P",{class:!0});var m=k(n);l&&l.l(m),r=T(m),f&&f.l(m),m.forEach(a),t=T(_),i&&i.l(_),_.forEach(a),this.h()},h(){L(n,"class","flex")},m(c,_){p(c,e,_),w(e,n),l&&l.m(n,null),w(n,r),f&&f.m(n,null),w(e,t),i&&i.m(e,null),s=!0},p(c,[_]){c[0].name?l?l.p(c,_):(l=se(c),l.c(),l.m(n,r)):l&&(l.d(1),l=null),c[0].collapsible?f?f.p(c,_):(f=fe(c),f.c(),f.m(n,null)):f&&(f.d(1),f=null),c[1]?i&&(v(),h(i,1,1,()=>{i=null}),y()):i?(i.p(c,_),_&2&&u(i,1)):(i=oe(c),i.c(),u(i,1),i.m(e,null))},i(c){s||(u(i),s=!0)},o(c){h(i),s=!1},d(c){c&&a(e),l&&l.d(),f&&f.d(),i&&i.d()}}}function Ke(o,e,n){let{entry:r}=e,t=!1;function s(){n(1,t=!t)}function l(f){Ee.call(this,o,f)}return o.$$set=f=>{"entry"in f&&n(0,r=f.entry)},[r,t,s,l]}class Ye extends A{constructor(e){super(),D(this,e,Ke,Je,S,{entry:0})}}function ue(o){let e,n=d(o[0].name)+"";return{c(){e=g("span"),this.h()},l(r){e=$(r,"SPAN",{class:!0});var t=k(e);t.forEach(a),this.h()},h(){L(e,"class","title")},m(r,t){p(r,e,t),e.innerHTML=n},p(r,t){t&1&&n!==(n=d(r[0].name)+"")&&(e.innerHTML=n)},d(r){r&&a(e)}}}function _e(o){let e,n,r;return n=new B({props:{entries:o[0].entries}}),{c(){e=g("div"),N(n.$$.fragment)},l(t){e=$(t,"DIV",{});var s=k(e);V(n.$$.fragment,s),s.forEach(a)},m(t,s){p(t,e,s),P(n,e,null),r=!0},p(t,s){const l={};s&1&&(l.entries=t[0].entries),n.$set(l)},i(t){r||(u(n.$$.fragment,t),r=!0)},o(t){h(n.$$.fragment,t),r=!1},d(t){t&&a(e),H(n)}}}function xe(o){var f,i;let e,n,r,t,s=o[0].name&&ue(o),l=((i=(f=o[0])==null?void 0:f.entries)==null?void 0:i.length)>0&&_e(o);return{c(){e=g("div"),n=g("div"),s&&s.c(),r=E(),l&&l.c(),this.h()},l(c){e=$(c,"DIV",{class:!0});var _=k(e);n=$(_,"DIV",{class:!0});var m=k(n);s&&s.l(m),r=T(m),l&&l.l(m),m.forEach(a),_.forEach(a),this.h()},h(){L(n,"class","box red"),L(e,"class","flex")},m(c,_){p(c,e,_),w(e,n),s&&s.m(n,null),w(n,r),l&&l.m(n,null),t=!0},p(c,[_]){var m,F;c[0].name?s?s.p(c,_):(s=ue(c),s.c(),s.m(n,r)):s&&(s.d(1),s=null),((F=(m=c[0])==null?void 0:m.entries)==null?void 0:F.length)>0?l?(l.p(c,_),_&1&&u(l,1)):(l=_e(c),l.c(),u(l,1),l.m(n,null)):l&&(v(),h(l,1,1,()=>{l=null}),y())},i(c){t||(u(l),t=!0)},o(c){h(l),t=!1},d(c){c&&a(e),s&&s.d(),l&&l.d()}}}function et(o,e,n){let{entry:r}=e;return o.$$set=t=>{"entry"in t&&n(0,r=t.entry)},[r]}class tt extends A{constructor(e){super(),D(this,e,et,xe,S,{entry:0})}}function he(o,e,n){const r=o.slice();return r[1]=e[n],r}function pe(o){let e,n=d(o[0].name)+"";return{c(){e=g("span"),this.h()},l(r){e=$(r,"SPAN",{class:!0});var t=k(e);t.forEach(a),this.h()},h(){L(e,"class","")},m(r,t){p(r,e,t),e.innerHTML=n},p(r,t){t&1&&n!==(n=d(r[0].name)+"")&&(e.innerHTML=n)},d(r){r&&a(e)}}}function me(o){let e,n,r,t=o[0].items,s=[];for(let f=0;f<t.length;f+=1)s[f]=de(he(o,t,f));const l=f=>h(s[f],1,1,()=>{s[f]=null});return{c(){e=g("ul");for(let f=0;f<s.length;f+=1)s[f].c();this.h()},l(f){e=$(f,"UL",{class:!0});var i=k(e);for(let c=0;c<s.length;c+=1)s[c].l(i);i.forEach(a),this.h()},h(){L(e,"class",n=o[0].style??"list-disc")},m(f,i){p(f,e,i);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null);r=!0},p(f,i){if(i&1){t=f[0].items;let c;for(c=0;c<t.length;c+=1){const _=he(f,t,c);s[c]?(s[c].p(_,i),u(s[c],1)):(s[c]=de(_),s[c].c(),u(s[c],1),s[c].m(e,null))}for(v(),c=t.length;c<s.length;c+=1)l(c);y()}(!r||i&1&&n!==(n=f[0].style??"list-disc"))&&L(e,"class",n)},i(f){if(!r){for(let i=0;i<t.length;i+=1)u(s[i]);r=!0}},o(f){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)h(s[i]);r=!1},d(f){f&&a(e),M(s,f)}}}function lt(o){let e,n;return e=new B({props:{entries:o[1]}}),{c(){N(e.$$.fragment)},l(r){V(e.$$.fragment,r)},m(r,t){P(e,r,t),n=!0},p(r,t){const s={};t&1&&(s.entries=r[1]),e.$set(s)},i(r){n||(u(e.$$.fragment,r),n=!0)},o(r){h(e.$$.fragment,r),n=!1},d(r){H(e,r)}}}function nt(o){let e,n,r,t;return n=new B({props:{entries:o[1]}}),{c(){e=g("li"),N(n.$$.fragment),r=E()},l(s){e=$(s,"LI",{});var l=k(e);V(n.$$.fragment,l),r=T(l),l.forEach(a)},m(s,l){p(s,e,l),P(n,e,null),w(e,r),t=!0},p(s,l){const f={};l&1&&(f.entries=s[1]),n.$set(f)},i(s){t||(u(n.$$.fragment,s),t=!0)},o(s){h(n.$$.fragment,s),t=!1},d(s){s&&a(e),H(n)}}}function de(o){let e,n,r,t;const s=[nt,lt],l=[];function f(i,c){return i[1].type!=="list"?0:1}return e=f(o),n=l[e]=s[e](o),{c(){n.c(),r=b()},l(i){n.l(i),r=b()},m(i,c){l[e].m(i,c),p(i,r,c),t=!0},p(i,c){let _=e;e=f(i),e===_?l[e].p(i,c):(v(),h(l[_],1,1,()=>{l[_]=null}),y(),n=l[e],n?n.p(i,c):(n=l[e]=s[e](i),n.c()),u(n,1),n.m(r.parentNode,r))},i(i){t||(u(n),t=!0)},o(i){h(n),t=!1},d(i){l[e].d(i),i&&a(r)}}}function rt(o){var l,f;let e,n,r,t=o[0].name&&pe(o),s=((f=(l=o[0])==null?void 0:l.items)==null?void 0:f.length)>0&&me(o);return{c(){t&&t.c(),e=E(),s&&s.c(),n=b()},l(i){t&&t.l(i),e=T(i),s&&s.l(i),n=b()},m(i,c){t&&t.m(i,c),p(i,e,c),s&&s.m(i,c),p(i,n,c),r=!0},p(i,[c]){var _,m;i[0].name?t?t.p(i,c):(t=pe(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),((m=(_=i[0])==null?void 0:_.items)==null?void 0:m.length)>0?s?(s.p(i,c),c&1&&u(s,1)):(s=me(i),s.c(),u(s,1),s.m(n.parentNode,n)):s&&(v(),h(s,1,1,()=>{s=null}),y())},i(i){r||(u(s),r=!0)},o(i){h(s),r=!1},d(i){t&&t.d(i),i&&a(e),s&&s.d(i),i&&a(n)}}}function it(o,e,n){let{entry:r}=e;return o.$$set=t=>{"entry"in t&&n(0,r=t.entry)},[r]}class st extends A{constructor(e){super(),D(this,e,it,rt,S,{entry:0})}}const ge=Object.freeze(Object.defineProperty({__proto__:null,entries:Oe,hr:Fe,list:st,pf2_h1:je,pf2_h2:Qe,pf2_h3:Ge,pf2_h4:Ye,pf2_red_box:tt},Symbol.toStringTag,{value:"Module"}));function $e(o,e,n){const r=o.slice();return r[3]=e[n],r}function ft(o){let e,n,r;var t=o[2](o[3]);function s(l){return{props:{entry:l[3],options:l[1]}}}return t&&(e=R(t,s(o))),{c(){e&&N(e.$$.fragment),n=b()},l(l){e&&V(e.$$.fragment,l),n=b()},m(l,f){e&&P(e,l,f),p(l,n,f),r=!0},p(l,f){const i={};if(f&1&&(i.entry=l[3]),f&2&&(i.options=l[1]),f&1&&t!==(t=l[2](l[3]))){if(e){v();const c=e;h(c.$$.fragment,1,0,()=>{H(c,1)}),y()}t?(e=R(t,s(l)),N(e.$$.fragment),u(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else t&&e.$set(i)},i(l){r||(e&&u(e.$$.fragment,l),r=!0)},o(l){e&&h(e.$$.fragment,l),r=!1},d(l){l&&a(n),e&&H(e,l)}}}function ot(o){let e,n=d(o[3],o[1])+"",r;return{c(){e=new Le(!1),r=b(),this.h()},l(t){e=Ne(t,!1),r=b(),this.h()},h(){e.a=r},m(t,s){e.m(n,t,s),p(t,r,s)},p(t,s){s&3&&n!==(n=d(t[3],t[1])+"")&&e.p(n)},i:I,o:I,d(t){t&&a(r),t&&e.d()}}}function be(o){let e,n,r,t;const s=[ot,ft],l=[];function f(i,c){return typeof i[3]=="string"?0:typeof i[3]=="object"?1:-1}return~(e=f(o))&&(n=l[e]=s[e](o)),{c(){n&&n.c(),r=b()},l(i){n&&n.l(i),r=b()},m(i,c){~e&&l[e].m(i,c),p(i,r,c),t=!0},p(i,c){let _=e;e=f(i),e===_?~e&&l[e].p(i,c):(n&&(v(),h(l[_],1,1,()=>{l[_]=null}),y()),~e?(n=l[e],n?n.p(i,c):(n=l[e]=s[e](i),n.c()),u(n,1),n.m(r.parentNode,r)):n=null)},i(i){t||(u(n),t=!0)},o(i){h(n),t=!1},d(i){~e&&l[e].d(i),i&&a(r)}}}function ct(o){let e,n,r=o[0],t=[];for(let l=0;l<r.length;l+=1)t[l]=be($e(o,r,l));const s=l=>h(t[l],1,1,()=>{t[l]=null});return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=b()},l(l){for(let f=0;f<t.length;f+=1)t[f].l(l);e=b()},m(l,f){for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(l,f);p(l,e,f),n=!0},p(l,[f]){if(f&7){r=l[0];let i;for(i=0;i<r.length;i+=1){const c=$e(l,r,i);t[i]?(t[i].p(c,f),u(t[i],1)):(t[i]=be(c),t[i].c(),u(t[i],1),t[i].m(e.parentNode,e))}for(v(),i=r.length;i<t.length;i+=1)s(i);y()}},i(l){if(!n){for(let f=0;f<r.length;f+=1)u(t[f]);n=!0}},o(l){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)h(t[f]);n=!1},d(l){M(t,l),l&&a(e)}}}function at(o,e,n){let{entries:r}=e,{options:t={noWrap:!1}}=e;function s(l){if(!l.type)throw new Error("Entry type is not defined!");const f=l.type.replaceAll("-","_").toLowerCase();return Object.keys(ge).includes(f)||new Te().error(new Error(`Entry type "${l.type}" is not recognized by the component renderer!`)),ge[f]}return o.$$set=l=>{"entries"in l&&n(0,r=l.entries),"options"in l&&n(1,t=l.options)},o.$$.update=()=>{o.$$.dirty&1&&(Array.isArray(r)||n(0,r=[r]))},[r,t,s]}class B extends A{constructor(e){super(),D(this,e,at,ct,S,{entries:0,options:1})}}export{B as R};
