import{S as O,i as P,s as G,k as _,a as C,l as g,m as b,c as E,h as f,b as m,L as $,g as d,v as k,d as h,f as w,n as Y,y as T,z as D,A as L,B as I,U as N,Y as S,q as he,r as me,M as A,u as pe,N as _e,e as v,a8 as M,a2 as ge,W as be,R as $e,T as z,x as V,$ as ke,a1 as we,a0 as Ce}from"../chunks/index.69e6a8df.js";import{t as R,s as W,l as Ee}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.ec6fbd8a.js";import{w as ye}from"../chunks/index.363b4140.js";class ve{trigger({message:e,options:r={}}){R.trigger({message:e,duration:3e3,position:"b",isClosable:!0,...r})}error(e){console.error(e),this.trigger({message:e,background:"variant-filled-error"})}success(e){this.trigger({message:e,background:"variant-filled-success"})}warn(e){this.warning(e)}warning(e){console.warn(e),this.trigger({message:e,background:"variant-filled-warning"})}clear(){R.clear()}}const Te=new ve;function y(l,e={noWrap:!0}){return!e.noWrap&&!e.prefix&&!e.suffix&&(e.prefix='<p class="pf2-stat__text">',e.suffix="</p>"),l=Le(l,e),e.prefix&&e.suffix&&(l=e.prefix+l+e.suffix),l}function Le(l,e){const r=Oe(l),i=r.length;let t="";for(let s=0;s<i;++s){const n=r[s];if(n)if(n.startsWith("{@")){const[a,o]=Ge(n.slice(1,-1));t+=Ie(e,a,o)}else t+=n}return t}function Ie(l,e,r){switch(e){case"@as":case"@actionsymbol":return`<span class="pf2-action-icon" data-symbol="${r}"></span><span class="pf2-action-icon-copy-text">${this._renderString_actionCopyText(r)}</span>`;case"@b":case"@bold":return`<b>${y(r)}</b>`;case"@i":case"@italic":return`<i>${y(r)}</i>`;case"@u":case"@underline":return`<u>${y(r)}</u>`;case"@s":case"@strike":return`<s>${y(r)}</s>`;case"@c":case"@center":return`<span class="text-center block">${y(r)}</span>`;case"@note":return`<i class="note-muted">${y(r)}</i>`;case"@link":{const[i,t]=Pe(r);let s=t??i;return s.startsWith("http")||(s=`http://${s}`),`<a href=${s}>${y(i)}</a>`}default:return Te.warn(`Unknown tag: ${e}`),`<span class="bg-warning-500">{${e} ${y(r)}}</span>`}}const Oe=l=>Ye("@")(l),Pe=l=>De("@")(l);function Ge(l){const e=l.indexOf(" ");return e===-1?[l,""]:[l.substr(0,e),l.substr(e+1)]}function Ye(l){return function(e){let r=0,i,t;const s=[];let n="",a=!1;const o=e.length;for(let c=0;c<o;++c)switch(i=e[c],t=e[c+1],i){case"{":a=!0,t===l?r++>0?n+="{":(s.push(n.replace(/<VE_LEAD>/g,l)),n=`{${l}`,++c):n+="{";break;case"}":a=!1,n+="}",r!==0&&--r===0&&(s.push(n.replace(/<VE_LEAD>/g,l)),n="");break;case l:{a?n+=l:n+="<VE_LEAD>";break}default:a=!1,n+=i;break}return n&&s.push(n.replace(/<VE_LEAD>/g,l)),s}}function De(l){return function(e){let r=0,i,t;const s=[];let n="";const a=e.length;for(let o=0;o<a;++o)switch(i=e[o],t=e[o+1],i){case"{":t===l&&r++,n+="{";break;case"}":r&&r--,n+="}";break;case"|":{r?n+="|":(s.push(n),n="");break}default:{n+=i;break}}return n&&s.push(n),s}}function B(l){let e,r=y(l[0].name)+"";return{c(){e=_("span"),this.h()},l(i){e=g(i,"SPAN",{class:!0});var t=b(e);t.forEach(f),this.h()},h(){Y(e,"class","text-2xl font-bold")},m(i,t){m(i,e,t),e.innerHTML=r},p(i,t){t&1&&r!==(r=y(i[0].name)+"")&&(e.innerHTML=r)},d(i){i&&f(e)}}}function j(l){let e,r,i;return r=new H({props:{entries:l[0].entries}}),{c(){e=_("div"),T(r.$$.fragment)},l(t){e=g(t,"DIV",{});var s=b(e);D(r.$$.fragment,s),s.forEach(f)},m(t,s){m(t,e,s),L(r,e,null),i=!0},p(t,s){const n={};s&1&&(n.entries=t[0].entries),r.$set(n)},i(t){i||(d(r.$$.fragment,t),i=!0)},o(t){h(r.$$.fragment,t),i=!1},d(t){t&&f(e),I(r)}}}function He(l){var n,a;let e,r,i,t=l[0].name&&B(l),s=((a=(n=l[0])==null?void 0:n.entries)==null?void 0:a.length)>0&&j(l);return{c(){e=_("div"),t&&t.c(),r=C(),s&&s.c()},l(o){e=g(o,"DIV",{});var c=b(e);t&&t.l(c),r=E(c),s&&s.l(c),c.forEach(f)},m(o,c){m(o,e,c),t&&t.m(e,null),$(e,r),s&&s.m(e,null),i=!0},p(o,[c]){var u,p;o[0].name?t?t.p(o,c):(t=B(o),t.c(),t.m(e,r)):t&&(t.d(1),t=null),((p=(u=o[0])==null?void 0:u.entries)==null?void 0:p.length)>0?s?(s.p(o,c),c&1&&d(s,1)):(s=j(o),s.c(),d(s,1),s.m(e,null)):s&&(k(),h(s,1,1,()=>{s=null}),w())},i(o){i||(d(s),i=!0)},o(o){h(s),i=!1},d(o){o&&f(e),t&&t.d(),s&&s.d()}}}function Ne(l,e,r){let{entry:i}=e;return l.$$set=t=>{"entry"in t&&r(0,i=t.entry)},[i]}class Ae extends O{constructor(e){super(),P(this,e,Ne,He,G,{entry:0})}}function Se(l){let e;return{c(){e=_("hr")},l(r){e=g(r,"HR",{})},m(r,i){m(r,e,i)},p:N,i:N,o:N,d(r){r&&f(e)}}}class Me extends O{constructor(e){super(),P(this,e,null,Se,G,{})}}function q(l){let e,r=y(l[0].name)+"";return{c(){e=_("h1")},l(i){e=g(i,"H1",{});var t=b(e);t.forEach(f)},m(i,t){m(i,e,t),e.innerHTML=r},p(i,t){t&1&&r!==(r=y(i[0].name)+"")&&(e.innerHTML=r)},d(i){i&&f(e)}}}function F(l){let e,r,i;return r=new H({props:{entries:l[0].entries}}),{c(){e=_("div"),T(r.$$.fragment)},l(t){e=g(t,"DIV",{});var s=b(e);D(r.$$.fragment,s),s.forEach(f)},m(t,s){m(t,e,s),L(r,e,null),i=!0},p(t,s){const n={};s&1&&(n.entries=t[0].entries),r.$set(n)},i(t){i||(d(r.$$.fragment,t),i=!0)},o(t){h(r.$$.fragment,t),i=!1},d(t){t&&f(e),I(r)}}}function Ue(l){var n,a;let e,r,i,t=l[0].name&&q(l),s=((a=(n=l[0])==null?void 0:n.entries)==null?void 0:a.length)>0&&F(l);return{c(){e=_("div"),t&&t.c(),r=C(),s&&s.c()},l(o){e=g(o,"DIV",{});var c=b(e);t&&t.l(c),r=E(c),s&&s.l(c),c.forEach(f)},m(o,c){m(o,e,c),t&&t.m(e,null),$(e,r),s&&s.m(e,null),i=!0},p(o,[c]){var u,p;o[0].name?t?t.p(o,c):(t=q(o),t.c(),t.m(e,r)):t&&(t.d(1),t=null),((p=(u=o[0])==null?void 0:u.entries)==null?void 0:p.length)>0?s?(s.p(o,c),c&1&&d(s,1)):(s=F(o),s.c(),d(s,1),s.m(e,null)):s&&(k(),h(s,1,1,()=>{s=null}),w())},i(o){i||(d(s),i=!0)},o(o){h(s),i=!1},d(o){o&&f(e),t&&t.d(),s&&s.d()}}}function ze(l,e,r){let{entry:i}=e;return l.$$set=t=>{"entry"in t&&r(0,i=t.entry)},[i]}class Ve extends O{constructor(e){super(),P(this,e,ze,Ue,G,{entry:0})}}function J(l){let e,r=y(l[0].name)+"";return{c(){e=_("h2")},l(i){e=g(i,"H2",{});var t=b(e);t.forEach(f)},m(i,t){m(i,e,t),e.innerHTML=r},p(i,t){t&1&&r!==(r=y(i[0].name)+"")&&(e.innerHTML=r)},d(i){i&&f(e)}}}function K(l){let e,r,i;return r=new H({props:{entries:l[0].entries}}),{c(){e=_("div"),T(r.$$.fragment)},l(t){e=g(t,"DIV",{});var s=b(e);D(r.$$.fragment,s),s.forEach(f)},m(t,s){m(t,e,s),L(r,e,null),i=!0},p(t,s){const n={};s&1&&(n.entries=t[0].entries),r.$set(n)},i(t){i||(d(r.$$.fragment,t),i=!0)},o(t){h(r.$$.fragment,t),i=!1},d(t){t&&f(e),I(r)}}}function Re(l){var n,a;let e,r,i,t=l[0].name&&J(l),s=((a=(n=l[0])==null?void 0:n.entries)==null?void 0:a.length)>0&&K(l);return{c(){e=_("div"),t&&t.c(),r=C(),s&&s.c()},l(o){e=g(o,"DIV",{});var c=b(e);t&&t.l(c),r=E(c),s&&s.l(c),c.forEach(f)},m(o,c){m(o,e,c),t&&t.m(e,null),$(e,r),s&&s.m(e,null),i=!0},p(o,[c]){var u,p;o[0].name?t?t.p(o,c):(t=J(o),t.c(),t.m(e,r)):t&&(t.d(1),t=null),((p=(u=o[0])==null?void 0:u.entries)==null?void 0:p.length)>0?s?(s.p(o,c),c&1&&d(s,1)):(s=K(o),s.c(),d(s,1),s.m(e,null)):s&&(k(),h(s,1,1,()=>{s=null}),w())},i(o){i||(d(s),i=!0)},o(o){h(s),i=!1},d(o){o&&f(e),t&&t.d(),s&&s.d()}}}function We(l,e,r){let{entry:i}=e;return l.$$set=t=>{"entry"in t&&r(0,i=t.entry)},[i]}class Be extends O{constructor(e){super(),P(this,e,We,Re,G,{entry:0})}}function Q(l,e,r){const i=l.slice();return i[5]=e[r],i}function X(l){let e,r=y(l[0].name)+"";return{c(){e=_("span"),this.h()},l(i){e=g(i,"SPAN",{class:!0});var t=b(e);t.forEach(f),this.h()},h(){Y(e,"class","entry-title-inner svelte-1xgvmav")},m(i,t){m(i,e,t),e.innerHTML=r},p(i,t){t&1&&r!==(r=y(i[0].name)+"")&&(e.innerHTML=r)},d(i){i&&f(e)}}}function Z(l){let e,r=l[1]?"[+]":"[‒]",i,t,s;return{c(){e=_("button"),i=he(r),this.h()},l(n){e=g(n,"BUTTON",{class:!0});var a=b(e);i=me(a,r),a.forEach(f),this.h()},h(){Y(e,"class","ml-auto svelte-1xgvmav")},m(n,a){m(n,e,a),$(e,i),t||(s=[A(e,"keypress",l[4]),A(e,"click",l[3])],t=!0)},p(n,a){a&2&&r!==(r=n[1]?"[+]":"[‒]")&&pe(i,r)},d(n){n&&f(e),t=!1,_e(s)}}}function x(l){var t,s;let e,r,i=((s=(t=l[0])==null?void 0:t.entries)==null?void 0:s.length)>0&&ee(l);return{c(){i&&i.c(),e=v()},l(n){i&&i.l(n),e=v()},m(n,a){i&&i.m(n,a),m(n,e,a),r=!0},p(n,a){var o,c;((c=(o=n[0])==null?void 0:o.entries)==null?void 0:c.length)>0?i?(i.p(n,a),a&1&&d(i,1)):(i=ee(n),i.c(),d(i,1),i.m(e.parentNode,e)):i&&(k(),h(i,1,1,()=>{i=null}),w())},i(n){r||(d(i),r=!0)},o(n){h(i),r=!1},d(n){i&&i.d(n),n&&f(e)}}}function ee(l){let e,r,i=l[0].entries,t=[];for(let n=0;n<i.length;n+=1)t[n]=te(Q(l,i,n));const s=n=>h(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=v()},l(n){for(let a=0;a<t.length;a+=1)t[a].l(n);e=v()},m(n,a){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(n,a);m(n,e,a),r=!0},p(n,a){if(a&1){i=n[0].entries;let o;for(o=0;o<i.length;o+=1){const c=Q(n,i,o);t[o]?(t[o].p(c,a),d(t[o],1)):(t[o]=te(c),t[o].c(),d(t[o],1),t[o].m(e.parentNode,e))}for(k(),o=i.length;o<t.length;o+=1)s(o);w()}},i(n){if(!r){for(let a=0;a<i.length;a+=1)d(t[a]);r=!0}},o(n){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)h(t[a]);r=!1},d(n){M(t,n),n&&f(e)}}}function te(l){let e,r,i,t;return r=new H({props:{entries:l[5]}}),{c(){e=_("p"),T(r.$$.fragment),i=C()},l(s){e=g(s,"P",{});var n=b(e);D(r.$$.fragment,n),i=E(n),n.forEach(f)},m(s,n){m(s,e,n),L(r,e,null),$(e,i),t=!0},p(s,n){const a={};n&1&&(a.entries=s[5]),r.$set(a)},i(s){t||(d(r.$$.fragment,s),t=!0)},o(s){h(r.$$.fragment,s),t=!1},d(s){s&&f(e),I(r)}}}function je(l){let e,r,i,t,s,n=l[0].name&&X(l),a=l[0].collapsible&&Z(l),o=!l[1]&&x(l);return{c(){e=_("div"),r=_("p"),n&&n.c(),i=C(),a&&a.c(),t=C(),o&&o.c(),this.h()},l(c){e=g(c,"DIV",{});var u=b(e);r=g(u,"P",{class:!0});var p=b(r);n&&n.l(p),i=E(p),a&&a.l(p),p.forEach(f),t=E(u),o&&o.l(u),u.forEach(f),this.h()},h(){Y(r,"class","pf2-h3 flex svelte-1xgvmav")},m(c,u){m(c,e,u),$(e,r),n&&n.m(r,null),$(r,i),a&&a.m(r,null),$(e,t),o&&o.m(e,null),s=!0},p(c,[u]){c[0].name?n?n.p(c,u):(n=X(c),n.c(),n.m(r,i)):n&&(n.d(1),n=null),c[0].collapsible?a?a.p(c,u):(a=Z(c),a.c(),a.m(r,null)):a&&(a.d(1),a=null),c[1]?o&&(k(),h(o,1,1,()=>{o=null}),w()):o?(o.p(c,u),u&2&&d(o,1)):(o=x(c),o.c(),d(o,1),o.m(e,null))},i(c){s||(d(o),s=!0)},o(c){h(o),s=!1},d(c){c&&f(e),n&&n.d(),a&&a.d(),o&&o.d()}}}function qe(l,e,r){let i,{entry:t}=e,s=ye(!1);S(l,s,o=>r(1,i=o));function n(){ge(s,i=!i,i)}function a(o){be.call(this,l,o)}return l.$$set=o=>{"entry"in o&&r(0,t=o.entry)},[t,i,s,n,a]}class Fe extends O{constructor(e){super(),P(this,e,qe,je,G,{entry:0})}}function ne(l,e,r){const i=l.slice();return i[5]=e[r],i}function ie(l){let e,r=y(l[0].name)+"";return{c(){e=_("h4")},l(i){e=g(i,"H4",{});var t=b(e);t.forEach(f)},m(i,t){m(i,e,t),e.innerHTML=r},p(i,t){t&1&&r!==(r=y(i[0].name)+"")&&(e.innerHTML=r)},d(i){i&&f(e)}}}function re(l){let e,r=l[1]?"[+]":"[‒]",i,t,s;return{c(){e=_("button"),i=he(r)},l(n){e=g(n,"BUTTON",{});var a=b(e);i=me(a,r),a.forEach(f)},m(n,a){m(n,e,a),$(e,i),t||(s=[A(e,"keypress",l[4]),A(e,"click",l[3])],t=!0)},p(n,a){a&2&&r!==(r=n[1]?"[+]":"[‒]")&&pe(i,r)},d(n){n&&f(e),t=!1,_e(s)}}}function se(l){var t,s;let e,r,i=((s=(t=l[0])==null?void 0:t.entries)==null?void 0:s.length)>0&&oe(l);return{c(){i&&i.c(),e=v()},l(n){i&&i.l(n),e=v()},m(n,a){i&&i.m(n,a),m(n,e,a),r=!0},p(n,a){var o,c;((c=(o=n[0])==null?void 0:o.entries)==null?void 0:c.length)>0?i?(i.p(n,a),a&1&&d(i,1)):(i=oe(n),i.c(),d(i,1),i.m(e.parentNode,e)):i&&(k(),h(i,1,1,()=>{i=null}),w())},i(n){r||(d(i),r=!0)},o(n){h(i),r=!1},d(n){i&&i.d(n),n&&f(e)}}}function oe(l){let e,r,i=l[0].entries,t=[];for(let n=0;n<i.length;n+=1)t[n]=ae(ne(l,i,n));const s=n=>h(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=v()},l(n){for(let a=0;a<t.length;a+=1)t[a].l(n);e=v()},m(n,a){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(n,a);m(n,e,a),r=!0},p(n,a){if(a&1){i=n[0].entries;let o;for(o=0;o<i.length;o+=1){const c=ne(n,i,o);t[o]?(t[o].p(c,a),d(t[o],1)):(t[o]=ae(c),t[o].c(),d(t[o],1),t[o].m(e.parentNode,e))}for(k(),o=i.length;o<t.length;o+=1)s(o);w()}},i(n){if(!r){for(let a=0;a<i.length;a+=1)d(t[a]);r=!0}},o(n){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)h(t[a]);r=!1},d(n){M(t,n),n&&f(e)}}}function ae(l){let e,r,i,t,s;return r=new H({props:{entries:l[5]}}),{c(){e=_("p"),T(r.$$.fragment),i=C()},l(n){e=g(n,"P",{});var a=b(e);D(r.$$.fragment,a),i=E(a),a.forEach(f)},m(n,a){m(n,e,a),L(r,e,null),$(e,i),s=!0},p(n,a){const o={};a&1&&(o.entries=n[5]),r.$set(o)},i(n){s||(d(r.$$.fragment,n),$e(()=>{s&&(t||(t=z(e,W,{duration:400},!0)),t.run(1))}),s=!0)},o(n){h(r.$$.fragment,n),t||(t=z(e,W,{duration:400},!1)),t.run(0),s=!1},d(n){n&&f(e),I(r),n&&t&&t.end()}}}function Je(l){let e,r,i,t,s,n=l[0].name&&ie(l),a=l[0].collapsible&&re(l),o=!l[1]&&se(l);return{c(){e=_("div"),r=_("p"),n&&n.c(),i=C(),a&&a.c(),t=C(),o&&o.c()},l(c){e=g(c,"DIV",{});var u=b(e);r=g(u,"P",{});var p=b(r);n&&n.l(p),i=E(p),a&&a.l(p),p.forEach(f),t=E(u),o&&o.l(u),u.forEach(f)},m(c,u){m(c,e,u),$(e,r),n&&n.m(r,null),$(r,i),a&&a.m(r,null),$(e,t),o&&o.m(e,null),s=!0},p(c,[u]){c[0].name?n?n.p(c,u):(n=ie(c),n.c(),n.m(r,i)):n&&(n.d(1),n=null),c[0].collapsible?a?a.p(c,u):(a=re(c),a.c(),a.m(r,null)):a&&(a.d(1),a=null),c[1]?o&&(k(),h(o,1,1,()=>{o=null}),w()):o?(o.p(c,u),u&2&&d(o,1)):(o=se(c),o.c(),d(o,1),o.m(e,null))},i(c){s||(d(o),s=!0)},o(c){h(o),s=!1},d(c){c&&f(e),n&&n.d(),a&&a.d(),o&&o.d()}}}function Ke(l,e,r){let i,{entry:t}=e,s=ye(!1);S(l,s,o=>r(1,i=o));function n(){ge(s,i=!i,i)}function a(o){be.call(this,l,o)}return l.$$set=o=>{"entry"in o&&r(0,t=o.entry)},[t,i,s,n,a]}class Qe extends O{constructor(e){super(),P(this,e,Ke,Je,G,{entry:0})}}function le(l){let e,r=y(l[0].name)+"";return{c(){e=_("span"),this.h()},l(i){e=g(i,"SPAN",{class:!0});var t=b(e);t.forEach(f),this.h()},h(){Y(e,"class","title")},m(i,t){m(i,e,t),e.innerHTML=r},p(i,t){t&1&&r!==(r=y(i[0].name)+"")&&(e.innerHTML=r)},d(i){i&&f(e)}}}function ce(l){let e,r,i;return r=new H({props:{entries:l[0].entries}}),{c(){e=_("div"),T(r.$$.fragment)},l(t){e=g(t,"DIV",{});var s=b(e);D(r.$$.fragment,s),s.forEach(f)},m(t,s){m(t,e,s),L(r,e,null),i=!0},p(t,s){const n={};s&1&&(n.entries=t[0].entries),r.$set(n)},i(t){i||(d(r.$$.fragment,t),i=!0)},o(t){h(r.$$.fragment,t),i=!1},d(t){t&&f(e),I(r)}}}function Xe(l){var a,o;let e,r,i,t,s=l[0].name&&le(l),n=((o=(a=l[0])==null?void 0:a.entries)==null?void 0:o.length)>0&&ce(l);return{c(){e=_("div"),r=_("div"),s&&s.c(),i=C(),n&&n.c(),this.h()},l(c){e=g(c,"DIV",{class:!0});var u=b(e);r=g(u,"DIV",{class:!0});var p=b(r);s&&s.l(p),i=E(p),n&&n.l(p),p.forEach(f),u.forEach(f),this.h()},h(){Y(r,"class","pf2-box red"),Y(e,"class","flex")},m(c,u){m(c,e,u),$(e,r),s&&s.m(r,null),$(r,i),n&&n.m(r,null),t=!0},p(c,[u]){var p,U;c[0].name?s?s.p(c,u):(s=le(c),s.c(),s.m(r,i)):s&&(s.d(1),s=null),((U=(p=c[0])==null?void 0:p.entries)==null?void 0:U.length)>0?n?(n.p(c,u),u&1&&d(n,1)):(n=ce(c),n.c(),d(n,1),n.m(r,null)):n&&(k(),h(n,1,1,()=>{n=null}),w())},i(c){t||(d(n),t=!0)},o(c){h(n),t=!1},d(c){c&&f(e),s&&s.d(),n&&n.d()}}}function Ze(l,e,r){let{entry:i}=e;return l.$$set=t=>{"entry"in t&&r(0,i=t.entry)},[i]}class xe extends O{constructor(e){super(),P(this,e,Ze,Xe,G,{entry:0})}}const fe=Object.freeze(Object.defineProperty({__proto__:null,entries:Ae,hr:Me,pf2_h1:Ve,pf2_h2:Be,pf2_h3:Fe,pf2_h4:Qe,pf2_red_box:xe},Symbol.toStringTag,{value:"Module"}));function ue(l,e,r){const i=l.slice();return i[3]=e[r],i}function et(l){let e,r,i;var t=l[2](l[3]);function s(n){return{props:{entry:n[3],options:n[1]}}}return t&&(e=V(t,s(l))),{c(){e&&T(e.$$.fragment),r=v()},l(n){e&&D(e.$$.fragment,n),r=v()},m(n,a){e&&L(e,n,a),m(n,r,a),i=!0},p(n,a){const o={};if(a&1&&(o.entry=n[3]),a&2&&(o.options=n[1]),a&1&&t!==(t=n[2](n[3]))){if(e){k();const c=e;h(c.$$.fragment,1,0,()=>{I(c,1)}),w()}t?(e=V(t,s(n)),T(e.$$.fragment),d(e.$$.fragment,1),L(e,r.parentNode,r)):e=null}else t&&e.$set(o)},i(n){i||(e&&d(e.$$.fragment,n),i=!0)},o(n){e&&h(e.$$.fragment,n),i=!1},d(n){n&&f(r),e&&I(e,n)}}}function tt(l){let e,r=y(l[3],l[1])+"",i;return{c(){e=new ke(!1),i=v(),this.h()},l(t){e=we(t,!1),i=v(),this.h()},h(){e.a=i},m(t,s){e.m(r,t,s),m(t,i,s)},p(t,s){s&3&&r!==(r=y(t[3],t[1])+"")&&e.p(r)},i:N,o:N,d(t){t&&f(i),t&&e.d()}}}function de(l){let e,r,i,t;const s=[tt,et],n=[];function a(o,c){return typeof o[3]=="string"?0:typeof o[3]=="object"?1:-1}return~(e=a(l))&&(r=n[e]=s[e](l)),{c(){r&&r.c(),i=v()},l(o){r&&r.l(o),i=v()},m(o,c){~e&&n[e].m(o,c),m(o,i,c),t=!0},p(o,c){let u=e;e=a(o),e===u?~e&&n[e].p(o,c):(r&&(k(),h(n[u],1,1,()=>{n[u]=null}),w()),~e?(r=n[e],r?r.p(o,c):(r=n[e]=s[e](o),r.c()),d(r,1),r.m(i.parentNode,i)):r=null)},i(o){t||(d(r),t=!0)},o(o){h(r),t=!1},d(o){~e&&n[e].d(o),o&&f(i)}}}function nt(l){let e,r,i=l[0],t=[];for(let n=0;n<i.length;n+=1)t[n]=de(ue(l,i,n));const s=n=>h(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=v()},l(n){for(let a=0;a<t.length;a+=1)t[a].l(n);e=v()},m(n,a){for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(n,a);m(n,e,a),r=!0},p(n,[a]){if(a&7){i=n[0];let o;for(o=0;o<i.length;o+=1){const c=ue(n,i,o);t[o]?(t[o].p(c,a),d(t[o],1)):(t[o]=de(c),t[o].c(),d(t[o],1),t[o].m(e.parentNode,e))}for(k(),o=i.length;o<t.length;o+=1)s(o);w()}},i(n){if(!r){for(let a=0;a<i.length;a+=1)d(t[a]);r=!0}},o(n){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)h(t[a]);r=!1},d(n){M(t,n),n&&f(e)}}}function it(l,e,r){let{entries:i}=e,{options:t={noWrap:!1}}=e;Array.isArray(i)||(i=[i]);function s(n){if(!n.type)throw new Error("Entry type is not defined!");const a=n.type.replaceAll("-","_").toLowerCase();return Object.keys(fe).includes(a)||new ve().error(new Error(`Entry type "${n.type}" is not recognized by the renderer!`)),fe[a]}return l.$$set=n=>{"entries"in n&&r(0,i=n.entries),"options"in n&&r(1,t=n.options)},[i,t,s]}class H extends O{constructor(e){super(),P(this,e,it,nt,G,{entries:0,options:1})}}function rt(l){let e,r,i,t;return i=new H({props:{entries:l[1]}}),{c(){e=C(),r=_("div"),T(i.$$.fragment),this.h()},l(s){Ce("svelte-1332xj4",document.head).forEach(f),e=E(s),r=g(s,"DIV",{class:!0});var a=b(r);D(i.$$.fragment,a),a.forEach(f),this.h()},h(){document.title="PF2ools - Licenses",Y(r,"class","container mx-auto p-8 space-y-8 pf2ools")},m(s,n){m(s,e,n),m(s,r,n),L(i,r,null),t=!0},p:N,i(s){t||(d(i.$$.fragment,s),t=!0)},o(s){h(i.$$.fragment,s),t=!1},d(s){s&&f(e),s&&f(r),I(i)}}}function st(l,e,r){let i,{data:t}=e;const s=Ee("sources",t.sources);S(l,s,c=>r(3,i=c));const n=[{name:"Community Use Policy",type:"pf2-red-box",entries:["Pf2etools uses trademarks and/or copyrights owned by Paizo Inc., used under {@link Paizo's Community Use Policy|https://paizo.com/communityuse}. We are expressly prohibited from charging you to use or access this content. Pf2etools is not published, endorsed, or specifically approved by Paizo. For more information about Paizo Inc. and Paizo products, visit {@link paizo.com|https://paizo.com}."]},{type:"hr"},{name:"Open Game License",type:"entries",entries:["{@c OPEN GAME LICENSE Version 1.0a}",'The following text is the property of Wizards of the Coast, Inc. and is Copyright 2000 Wizards of the Coast, Inc ("Wizards"). All Rights Reserved.','1. Definitions: (a)"Contributors" means the copyright and/or trademark owners who have contributed Open Game Content; (b)"Derivative Material"means copyrighted material including derivative works and translations (including into other computer languages), potation, modification, correction, addition, extension, upgrade, improvement, compilation, abridgment or other form in which an existing work may be recast, transformed or adapted; (c) "Distribute"means to reproduce, license, rent, lease, sell, broadcast, publicly display, transmit or otherwise distribute; (d)"Open Game Content"means the game mechanic and includes the methods, procedures, processes and routines to the extent such content does not embody the Product Identity and is an enhancement over the prior art and any additional content clearly identified as Open Game Content by the Contributor, and means any work covered by this License, including translations and derivative works under copyright law, but specifically excludes Product Identity. (e) "Product Identity"means product and product line names, logos and identifying marks including trade dress; artifacts; creatures characters; stories, storylines, plots, thematic elements, dialogue, incidents, language, artwork, symbols, designs, depictions, likenesses, formats, poses, concepts, themes and graphic, photographic and other visual or audio representations; names and descriptions of characters, spells, enchantments, personalities, teams, personas, likenesses and special abilities; places, locations, environments, creatures, equipment, magical or supernatural abilities or effects, logos, symbols, or graphic designs; and any other trademark or registered trademark clearly identified as Product identity by the owner of the Product Identity, and which specifically excludes the Open Game Content; (f) "Trademark"means the logos, names, mark, sign, motto, designs that are used by a Contributor to identify itself or its products or the associated products contributed to the Open Game License by the Contributor (g) "Use", "Used"or "Using"means to use, Distribute, copy, edit, format, modify, translate and otherwise create Derivative Material of Open Game Content. (h) "You"or "Your"means the licensee in terms of this agreement.',"2. The License: This License applies to any Open Game Content that contains a notice indicating that the Open Game Content may only be Used under and in terms of this License. You must affix such a notice to any Open Game Content that you Use. No terms may be added to or subtracted from this License except as described by the License itself. No other terms or conditions may be applied to any Open Game Content distributed using this License.","3. Offer and Acceptance: By Using the Open Game Content You indicate Your acceptance of the terms of this License.","4. Grant and Consideration: In consideration for agreeing to use this License, the Contributors grant You a perpetual, worldwide, royalty-free, non-exclusive license with the exact terms of this License to Use, the Open Game Content.","5. Representation of Authority to Contribute: If You are contributing original material as Open Game Content, You represent that Your Contributions are Your original creation and/or You have sufficient rights to grant the rights conveyed by this License.","6. Notice of License Copyright: You must update the COPYRIGHT NOTICE portion of this License to include the exact text of the COPYRIGHT NOTICE of any Open Game Content You are copying, modifying or distributing, and You must add the title, the copyright date, and the copyright holder's name to the COPYRIGHT NOTICE of any original Open Game Content you Distribute.","7. Use of Product Identity: You agree not to Use any Product Identity, including as an indication as to compatibility, except as expressly licensed in another, independent Agreement with the owner of each element of that Product Identity. You agree not to indicate compatibility or co-adaptability with any Trademark or Registered Trademark in conjunction with a work containing Open Game Content except as expressly licensed in another, independent Agreement with the owner of such Trademark or Registered Trademark. The use of any Product Identity in Open Game Content does not constitute a challenge to the ownership of that Product Identity. The owner of any Product Identity used in Open Game Content shall retain all rights, title and interest in and to that Product Identity.","8. Identification: If you distribute Open Game Content You must clearly indicate which portions of the work that you are distributing are Open Game Content.","9. Updating the License: Wizards or its designated Agents may publish updated versions of this License. You may use any authorized version of this License to copy, modify and distribute any Open Game Content originally distributed under any version of this License.","10. Copy of this License: You MUST include a copy of this License with every copy of the Open Game Content You Distribute.","11. Use of Contributor Credits: You may not market or advertise the Open Game Content using the name of any Contributor unless You have written permission from the Contributor to do so.","12. Inability to Comply: If it is impossible for You to comply with any of the terms of this License with respect to some or all of the Open Game Content due to statute, judicial order, or governmental regulation then You may not Use any Open Game Material so affected.","13. Termination: This License will terminate automatically if You fail to comply with all terms herein and fail to cure such breach within 30 days of becoming aware of the breach. All sublicenses shall survive the termination of this License.","14. Reformation: If any provision of this License is held to be unenforceable, such provision shall be reformed only to the extent necessary to make it enforceable.","15. COPYRIGHT NOTICE","{@b Open Game License v 1.0} © 2000, Wizards of the Coast, Inc.","{@b System Reference Document} © 2000. Wizards of the Coast, Inc; Authors: Jonathan Tweet, Monte Cook, Skip Williams, based on material by E. Gary Gygax and Dave Arneson."]},{type:"hr"}],a=i.filter(c=>!c.unreleased).map(c=>({type:"pf2-h3",name:`{@link ${c.name}|${c.store}} {@note (${c.source})}`,source:c.source,entries:c.entries,collapsible:!0})),o=n.concat(a);return l.$$set=c=>{"data"in c&&r(2,t=c.data)},[s,o,t]}class ct extends O{constructor(e){super(),P(this,e,st,rt,G,{data:2})}}export{ct as default};
