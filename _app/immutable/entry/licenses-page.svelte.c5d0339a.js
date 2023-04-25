import{S as O,i as P,s as G,k as _,a as C,l as g,m as b,c as E,h as f,b as m,L as $,g as d,v as k,d as h,f as w,n as Y,y as T,z as D,A as L,B as I,U as N,Y as de,q as he,r as me,M as A,u as pe,N as _e,e as v,a8 as M,a2 as ge,W as be,R as $e,T as S,x as z,$ as ke,a1 as we,a0 as Ce}from"../chunks/index.69e6a8df.js";import{t as V,s as R}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.ba5a522f.js";import{w as ye}from"../chunks/index.363b4140.js";class ve{trigger({message:e,options:r={}}){V.trigger({message:e,duration:3e3,position:"b",isClosable:!0,...r})}error(e){console.error(e),this.trigger({message:e,background:"variant-filled-error"})}success(e){this.trigger({message:e,background:"variant-filled-success"})}warn(e){this.warning(e)}warning(e){console.warn(e),this.trigger({message:e,background:"variant-filled-warning"})}clear(){V.clear()}}const Ee=new ve;function y(l,e={noWrap:!0}){return!e.noWrap&&!e.prefix&&!e.suffix&&(e.prefix='<p class="pf2-stat__text">',e.suffix="</p>"),l=Te(l,e),e.prefix&&e.suffix&&(l=e.prefix+l+e.suffix),l}function Te(l,e){const r=Ie(l),i=r.length;let t="";for(let o=0;o<i;++o){const n=r[o];if(n)if(n.startsWith("{@")){const[a,s]=Pe(n.slice(1,-1));t+=Le(e,a,s)}else t+=n}return t}function Le(l,e,r){switch(e){case"@as":case"@actionsymbol":return`<span class="pf2-action-icon" data-symbol="${r}"></span><span class="pf2-action-icon-copy-text">${this._renderString_actionCopyText(r)}</span>`;case"@b":case"@bold":return`<b>${y(r)}</b>`;case"@i":case"@italic":return`<i>${y(r)}</i>`;case"@u":case"@underline":return`<u>${y(r)}</u>`;case"@s":case"@strike":return`<s>${y(r)}</s>`;case"@c":case"@center":return`<span class="text-center block">${y(r)}</span>`;case"@note":return`<i class="note-muted">${y(r)}</i>`;case"@link":{const[i,t]=Oe(r);let o=t??i;return o.startsWith("http")||(o=`http://${o}`),`<a href=${o}>${y(i)}</a>`}default:return Ee.warn(`Unknown tag: ${e}`),`<span class="bg-warning-500">{${e} ${y(r)}}</span>`}}const Ie=l=>Ge("@")(l),Oe=l=>Ye("@")(l);function Pe(l){const e=l.indexOf(" ");return e===-1?[l,""]:[l.substr(0,e),l.substr(e+1)]}function Ge(l){return function(e){let r=0,i,t;const o=[];let n="",a=!1;const s=e.length;for(let c=0;c<s;++c)switch(i=e[c],t=e[c+1],i){case"{":a=!0,t===l?r++>0?n+="{":(o.push(n.replace(/<VE_LEAD>/g,l)),n=`{${l}`,++c):n+="{";break;case"}":a=!1,n+="}",r!==0&&--r===0&&(o.push(n.replace(/<VE_LEAD>/g,l)),n="");break;case l:{a?n+=l:n+="<VE_LEAD>";break}default:a=!1,n+=i;break}return n&&o.push(n.replace(/<VE_LEAD>/g,l)),o}}function Ye(l){return function(e){let r=0,i,t;const o=[];let n="";const a=e.length;for(let s=0;s<a;++s)switch(i=e[s],t=e[s+1],i){case"{":t===l&&r++,n+="{";break;case"}":r&&r--,n+="}";break;case"|":{r?n+="|":(o.push(n),n="");break}default:{n+=i;break}}return n&&o.push(n),o}}function W(l){let e,r=y(l[0].name)+"";return{c(){e=_("span"),this.h()},l(i){e=g(i,"SPAN",{class:!0});var t=b(e);t.forEach(f),this.h()},h(){Y(e,"class","text-2xl font-bold")},m(i,t){m(i,e,t),e.innerHTML=r},p(i,t){t&1&&r!==(r=y(i[0].name)+"")&&(e.innerHTML=r)},d(i){i&&f(e)}}}function B(l){let e,r,i;return r=new H({props:{entries:l[0].entries}}),{c(){e=_("div"),T(r.$$.fragment)},l(t){e=g(t,"DIV",{});var o=b(e);D(r.$$.fragment,o),o.forEach(f)},m(t,o){m(t,e,o),L(r,e,null),i=!0},p(t,o){const n={};o&1&&(n.entries=t[0].entries),r.$set(n)},i(t){i||(d(r.$$.fragment,t),i=!0)},o(t){h(r.$$.fragment,t),i=!1},d(t){t&&f(e),I(r)}}}function De(l){var n,a;let e,r,i,t=l[0].name&&W(l),o=((a=(n=l[0])==null?void 0:n.entries)==null?void 0:a.length)>0&&B(l);return{c(){e=_("div"),t&&t.c(),r=C(),o&&o.c()},l(s){e=g(s,"DIV",{});var c=b(e);t&&t.l(c),r=E(c),o&&o.l(c),c.forEach(f)},m(s,c){m(s,e,c),t&&t.m(e,null),$(e,r),o&&o.m(e,null),i=!0},p(s,[c]){var u,p;s[0].name?t?t.p(s,c):(t=W(s),t.c(),t.m(e,r)):t&&(t.d(1),t=null),((p=(u=s[0])==null?void 0:u.entries)==null?void 0:p.length)>0?o?(o.p(s,c),c&1&&d(o,1)):(o=B(s),o.c(),d(o,1),o.m(e,null)):o&&(k(),h(o,1,1,()=>{o=null}),w())},i(s){i||(d(o),i=!0)},o(s){h(o),i=!1},d(s){s&&f(e),t&&t.d(),o&&o.d()}}}function He(l,e,r){let{entry:i}=e;return l.$$set=t=>{"entry"in t&&r(0,i=t.entry)},[i]}class Ne extends O{constructor(e){super(),P(this,e,He,De,G,{entry:0})}}function Ae(l){let e;return{c(){e=_("hr")},l(r){e=g(r,"HR",{})},m(r,i){m(r,e,i)},p:N,i:N,o:N,d(r){r&&f(e)}}}class Me extends O{constructor(e){super(),P(this,e,null,Ae,G,{})}}function j(l){let e,r=y(l[0].name)+"";return{c(){e=_("h1")},l(i){e=g(i,"H1",{});var t=b(e);t.forEach(f)},m(i,t){m(i,e,t),e.innerHTML=r},p(i,t){t&1&&r!==(r=y(i[0].name)+"")&&(e.innerHTML=r)},d(i){i&&f(e)}}}function q(l){let e,r,i;return r=new H({props:{entries:l[0].entries}}),{c(){e=_("div"),T(r.$$.fragment)},l(t){e=g(t,"DIV",{});var o=b(e);D(r.$$.fragment,o),o.forEach(f)},m(t,o){m(t,e,o),L(r,e,null),i=!0},p(t,o){const n={};o&1&&(n.entries=t[0].entries),r.$set(n)},i(t){i||(d(r.$$.fragment,t),i=!0)},o(t){h(r.$$.fragment,t),i=!1},d(t){t&&f(e),I(r)}}}function Ue(l){var n,a;let e,r,i,t=l[0].name&&j(l),o=((a=(n=l[0])==null?void 0:n.entries)==null?void 0:a.length)>0&&q(l);return{c(){e=_("div"),t&&t.c(),r=C(),o&&o.c()},l(s){e=g(s,"DIV",{});var c=b(e);t&&t.l(c),r=E(c),o&&o.l(c),c.forEach(f)},m(s,c){m(s,e,c),t&&t.m(e,null),$(e,r),o&&o.m(e,null),i=!0},p(s,[c]){var u,p;s[0].name?t?t.p(s,c):(t=j(s),t.c(),t.m(e,r)):t&&(t.d(1),t=null),((p=(u=s[0])==null?void 0:u.entries)==null?void 0:p.length)>0?o?(o.p(s,c),c&1&&d(o,1)):(o=q(s),o.c(),d(o,1),o.m(e,null)):o&&(k(),h(o,1,1,()=>{o=null}),w())},i(s){i||(d(o),i=!0)},o(s){h(o),i=!1},d(s){s&&f(e),t&&t.d(),o&&o.d()}}}function Se(l,e,r){let{entry:i}=e;return l.$$set=t=>{"entry"in t&&r(0,i=t.entry)},[i]}class ze extends O{constructor(e){super(),P(this,e,Se,Ue,G,{entry:0})}}function F(l){let e,r=y(l[0].name)+"";return{c(){e=_("h2")},l(i){e=g(i,"H2",{});var t=b(e);t.forEach(f)},m(i,t){m(i,e,t),e.innerHTML=r},p(i,t){t&1&&r!==(r=y(i[0].name)+"")&&(e.innerHTML=r)},d(i){i&&f(e)}}}function J(l){let e,r,i;return r=new H({props:{entries:l[0].entries}}),{c(){e=_("div"),T(r.$$.fragment)},l(t){e=g(t,"DIV",{});var o=b(e);D(r.$$.fragment,o),o.forEach(f)},m(t,o){m(t,e,o),L(r,e,null),i=!0},p(t,o){const n={};o&1&&(n.entries=t[0].entries),r.$set(n)},i(t){i||(d(r.$$.fragment,t),i=!0)},o(t){h(r.$$.fragment,t),i=!1},d(t){t&&f(e),I(r)}}}function Ve(l){var n,a;let e,r,i,t=l[0].name&&F(l),o=((a=(n=l[0])==null?void 0:n.entries)==null?void 0:a.length)>0&&J(l);return{c(){e=_("div"),t&&t.c(),r=C(),o&&o.c()},l(s){e=g(s,"DIV",{});var c=b(e);t&&t.l(c),r=E(c),o&&o.l(c),c.forEach(f)},m(s,c){m(s,e,c),t&&t.m(e,null),$(e,r),o&&o.m(e,null),i=!0},p(s,[c]){var u,p;s[0].name?t?t.p(s,c):(t=F(s),t.c(),t.m(e,r)):t&&(t.d(1),t=null),((p=(u=s[0])==null?void 0:u.entries)==null?void 0:p.length)>0?o?(o.p(s,c),c&1&&d(o,1)):(o=J(s),o.c(),d(o,1),o.m(e,null)):o&&(k(),h(o,1,1,()=>{o=null}),w())},i(s){i||(d(o),i=!0)},o(s){h(o),i=!1},d(s){s&&f(e),t&&t.d(),o&&o.d()}}}function Re(l,e,r){let{entry:i}=e;return l.$$set=t=>{"entry"in t&&r(0,i=t.entry)},[i]}class We extends O{constructor(e){super(),P(this,e,Re,Ve,G,{entry:0})}}function K(l,e,r){const i=l.slice();return i[5]=e[r],i}function Q(l){let e,r=y(l[0].name)+"";return{c(){e=_("span"),this.h()},l(i){e=g(i,"SPAN",{class:!0});var t=b(e);t.forEach(f),this.h()},h(){Y(e,"class","entry-title-inner svelte-1xgvmav")},m(i,t){m(i,e,t),e.innerHTML=r},p(i,t){t&1&&r!==(r=y(i[0].name)+"")&&(e.innerHTML=r)},d(i){i&&f(e)}}}function X(l){let e,r=l[1]?"[+]":"[‒]",i,t,o;return{c(){e=_("button"),i=he(r),this.h()},l(n){e=g(n,"BUTTON",{class:!0});var a=b(e);i=me(a,r),a.forEach(f),this.h()},h(){Y(e,"class","ml-auto svelte-1xgvmav")},m(n,a){m(n,e,a),$(e,i),t||(o=[A(e,"keypress",l[4]),A(e,"click",l[3])],t=!0)},p(n,a){a&2&&r!==(r=n[1]?"[+]":"[‒]")&&pe(i,r)},d(n){n&&f(e),t=!1,_e(o)}}}function Z(l){var t,o;let e,r,i=((o=(t=l[0])==null?void 0:t.entries)==null?void 0:o.length)>0&&x(l);return{c(){i&&i.c(),e=v()},l(n){i&&i.l(n),e=v()},m(n,a){i&&i.m(n,a),m(n,e,a),r=!0},p(n,a){var s,c;((c=(s=n[0])==null?void 0:s.entries)==null?void 0:c.length)>0?i?(i.p(n,a),a&1&&d(i,1)):(i=x(n),i.c(),d(i,1),i.m(e.parentNode,e)):i&&(k(),h(i,1,1,()=>{i=null}),w())},i(n){r||(d(i),r=!0)},o(n){h(i),r=!1},d(n){i&&i.d(n),n&&f(e)}}}function x(l){let e,r,i=l[0].entries,t=[];for(let n=0;n<i.length;n+=1)t[n]=ee(K(l,i,n));const o=n=>h(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=v()},l(n){for(let a=0;a<t.length;a+=1)t[a].l(n);e=v()},m(n,a){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(n,a);m(n,e,a),r=!0},p(n,a){if(a&1){i=n[0].entries;let s;for(s=0;s<i.length;s+=1){const c=K(n,i,s);t[s]?(t[s].p(c,a),d(t[s],1)):(t[s]=ee(c),t[s].c(),d(t[s],1),t[s].m(e.parentNode,e))}for(k(),s=i.length;s<t.length;s+=1)o(s);w()}},i(n){if(!r){for(let a=0;a<i.length;a+=1)d(t[a]);r=!0}},o(n){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)h(t[a]);r=!1},d(n){M(t,n),n&&f(e)}}}function ee(l){let e,r,i,t;return r=new H({props:{entries:l[5]}}),{c(){e=_("p"),T(r.$$.fragment),i=C()},l(o){e=g(o,"P",{});var n=b(e);D(r.$$.fragment,n),i=E(n),n.forEach(f)},m(o,n){m(o,e,n),L(r,e,null),$(e,i),t=!0},p(o,n){const a={};n&1&&(a.entries=o[5]),r.$set(a)},i(o){t||(d(r.$$.fragment,o),t=!0)},o(o){h(r.$$.fragment,o),t=!1},d(o){o&&f(e),I(r)}}}function Be(l){let e,r,i,t,o,n=l[0].name&&Q(l),a=l[0].collapsible&&X(l),s=!l[1]&&Z(l);return{c(){e=_("div"),r=_("p"),n&&n.c(),i=C(),a&&a.c(),t=C(),s&&s.c(),this.h()},l(c){e=g(c,"DIV",{});var u=b(e);r=g(u,"P",{class:!0});var p=b(r);n&&n.l(p),i=E(p),a&&a.l(p),p.forEach(f),t=E(u),s&&s.l(u),u.forEach(f),this.h()},h(){Y(r,"class","pf2-h3 flex svelte-1xgvmav")},m(c,u){m(c,e,u),$(e,r),n&&n.m(r,null),$(r,i),a&&a.m(r,null),$(e,t),s&&s.m(e,null),o=!0},p(c,[u]){c[0].name?n?n.p(c,u):(n=Q(c),n.c(),n.m(r,i)):n&&(n.d(1),n=null),c[0].collapsible?a?a.p(c,u):(a=X(c),a.c(),a.m(r,null)):a&&(a.d(1),a=null),c[1]?s&&(k(),h(s,1,1,()=>{s=null}),w()):s?(s.p(c,u),u&2&&d(s,1)):(s=Z(c),s.c(),d(s,1),s.m(e,null))},i(c){o||(d(s),o=!0)},o(c){h(s),o=!1},d(c){c&&f(e),n&&n.d(),a&&a.d(),s&&s.d()}}}function je(l,e,r){let i,{entry:t}=e,o=ye(!1);de(l,o,s=>r(1,i=s));function n(){ge(o,i=!i,i)}function a(s){be.call(this,l,s)}return l.$$set=s=>{"entry"in s&&r(0,t=s.entry)},[t,i,o,n,a]}class qe extends O{constructor(e){super(),P(this,e,je,Be,G,{entry:0})}}function te(l,e,r){const i=l.slice();return i[5]=e[r],i}function ne(l){let e,r=y(l[0].name)+"";return{c(){e=_("h4")},l(i){e=g(i,"H4",{});var t=b(e);t.forEach(f)},m(i,t){m(i,e,t),e.innerHTML=r},p(i,t){t&1&&r!==(r=y(i[0].name)+"")&&(e.innerHTML=r)},d(i){i&&f(e)}}}function ie(l){let e,r=l[1]?"[+]":"[‒]",i,t,o;return{c(){e=_("button"),i=he(r)},l(n){e=g(n,"BUTTON",{});var a=b(e);i=me(a,r),a.forEach(f)},m(n,a){m(n,e,a),$(e,i),t||(o=[A(e,"keypress",l[4]),A(e,"click",l[3])],t=!0)},p(n,a){a&2&&r!==(r=n[1]?"[+]":"[‒]")&&pe(i,r)},d(n){n&&f(e),t=!1,_e(o)}}}function re(l){var t,o;let e,r,i=((o=(t=l[0])==null?void 0:t.entries)==null?void 0:o.length)>0&&se(l);return{c(){i&&i.c(),e=v()},l(n){i&&i.l(n),e=v()},m(n,a){i&&i.m(n,a),m(n,e,a),r=!0},p(n,a){var s,c;((c=(s=n[0])==null?void 0:s.entries)==null?void 0:c.length)>0?i?(i.p(n,a),a&1&&d(i,1)):(i=se(n),i.c(),d(i,1),i.m(e.parentNode,e)):i&&(k(),h(i,1,1,()=>{i=null}),w())},i(n){r||(d(i),r=!0)},o(n){h(i),r=!1},d(n){i&&i.d(n),n&&f(e)}}}function se(l){let e,r,i=l[0].entries,t=[];for(let n=0;n<i.length;n+=1)t[n]=oe(te(l,i,n));const o=n=>h(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=v()},l(n){for(let a=0;a<t.length;a+=1)t[a].l(n);e=v()},m(n,a){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(n,a);m(n,e,a),r=!0},p(n,a){if(a&1){i=n[0].entries;let s;for(s=0;s<i.length;s+=1){const c=te(n,i,s);t[s]?(t[s].p(c,a),d(t[s],1)):(t[s]=oe(c),t[s].c(),d(t[s],1),t[s].m(e.parentNode,e))}for(k(),s=i.length;s<t.length;s+=1)o(s);w()}},i(n){if(!r){for(let a=0;a<i.length;a+=1)d(t[a]);r=!0}},o(n){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)h(t[a]);r=!1},d(n){M(t,n),n&&f(e)}}}function oe(l){let e,r,i,t,o;return r=new H({props:{entries:l[5]}}),{c(){e=_("p"),T(r.$$.fragment),i=C()},l(n){e=g(n,"P",{});var a=b(e);D(r.$$.fragment,a),i=E(a),a.forEach(f)},m(n,a){m(n,e,a),L(r,e,null),$(e,i),o=!0},p(n,a){const s={};a&1&&(s.entries=n[5]),r.$set(s)},i(n){o||(d(r.$$.fragment,n),$e(()=>{o&&(t||(t=S(e,R,{duration:400},!0)),t.run(1))}),o=!0)},o(n){h(r.$$.fragment,n),t||(t=S(e,R,{duration:400},!1)),t.run(0),o=!1},d(n){n&&f(e),I(r),n&&t&&t.end()}}}function Fe(l){let e,r,i,t,o,n=l[0].name&&ne(l),a=l[0].collapsible&&ie(l),s=!l[1]&&re(l);return{c(){e=_("div"),r=_("p"),n&&n.c(),i=C(),a&&a.c(),t=C(),s&&s.c()},l(c){e=g(c,"DIV",{});var u=b(e);r=g(u,"P",{});var p=b(r);n&&n.l(p),i=E(p),a&&a.l(p),p.forEach(f),t=E(u),s&&s.l(u),u.forEach(f)},m(c,u){m(c,e,u),$(e,r),n&&n.m(r,null),$(r,i),a&&a.m(r,null),$(e,t),s&&s.m(e,null),o=!0},p(c,[u]){c[0].name?n?n.p(c,u):(n=ne(c),n.c(),n.m(r,i)):n&&(n.d(1),n=null),c[0].collapsible?a?a.p(c,u):(a=ie(c),a.c(),a.m(r,null)):a&&(a.d(1),a=null),c[1]?s&&(k(),h(s,1,1,()=>{s=null}),w()):s?(s.p(c,u),u&2&&d(s,1)):(s=re(c),s.c(),d(s,1),s.m(e,null))},i(c){o||(d(s),o=!0)},o(c){h(s),o=!1},d(c){c&&f(e),n&&n.d(),a&&a.d(),s&&s.d()}}}function Je(l,e,r){let i,{entry:t}=e,o=ye(!1);de(l,o,s=>r(1,i=s));function n(){ge(o,i=!i,i)}function a(s){be.call(this,l,s)}return l.$$set=s=>{"entry"in s&&r(0,t=s.entry)},[t,i,o,n,a]}class Ke extends O{constructor(e){super(),P(this,e,Je,Fe,G,{entry:0})}}function ae(l){let e,r=y(l[0].name)+"";return{c(){e=_("span"),this.h()},l(i){e=g(i,"SPAN",{class:!0});var t=b(e);t.forEach(f),this.h()},h(){Y(e,"class","title")},m(i,t){m(i,e,t),e.innerHTML=r},p(i,t){t&1&&r!==(r=y(i[0].name)+"")&&(e.innerHTML=r)},d(i){i&&f(e)}}}function le(l){let e,r,i;return r=new H({props:{entries:l[0].entries}}),{c(){e=_("div"),T(r.$$.fragment)},l(t){e=g(t,"DIV",{});var o=b(e);D(r.$$.fragment,o),o.forEach(f)},m(t,o){m(t,e,o),L(r,e,null),i=!0},p(t,o){const n={};o&1&&(n.entries=t[0].entries),r.$set(n)},i(t){i||(d(r.$$.fragment,t),i=!0)},o(t){h(r.$$.fragment,t),i=!1},d(t){t&&f(e),I(r)}}}function Qe(l){var a,s;let e,r,i,t,o=l[0].name&&ae(l),n=((s=(a=l[0])==null?void 0:a.entries)==null?void 0:s.length)>0&&le(l);return{c(){e=_("div"),r=_("div"),o&&o.c(),i=C(),n&&n.c(),this.h()},l(c){e=g(c,"DIV",{class:!0});var u=b(e);r=g(u,"DIV",{class:!0});var p=b(r);o&&o.l(p),i=E(p),n&&n.l(p),p.forEach(f),u.forEach(f),this.h()},h(){Y(r,"class","pf2-box red"),Y(e,"class","flex")},m(c,u){m(c,e,u),$(e,r),o&&o.m(r,null),$(r,i),n&&n.m(r,null),t=!0},p(c,[u]){var p,U;c[0].name?o?o.p(c,u):(o=ae(c),o.c(),o.m(r,i)):o&&(o.d(1),o=null),((U=(p=c[0])==null?void 0:p.entries)==null?void 0:U.length)>0?n?(n.p(c,u),u&1&&d(n,1)):(n=le(c),n.c(),d(n,1),n.m(r,null)):n&&(k(),h(n,1,1,()=>{n=null}),w())},i(c){t||(d(n),t=!0)},o(c){h(n),t=!1},d(c){c&&f(e),o&&o.d(),n&&n.d()}}}function Xe(l,e,r){let{entry:i}=e;return l.$$set=t=>{"entry"in t&&r(0,i=t.entry)},[i]}class Ze extends O{constructor(e){super(),P(this,e,Xe,Qe,G,{entry:0})}}const ce=Object.freeze(Object.defineProperty({__proto__:null,entries:Ne,hr:Me,pf2_h1:ze,pf2_h2:We,pf2_h3:qe,pf2_h4:Ke,pf2_red_box:Ze},Symbol.toStringTag,{value:"Module"}));function fe(l,e,r){const i=l.slice();return i[3]=e[r],i}function xe(l){let e,r,i;var t=l[2](l[3]);function o(n){return{props:{entry:n[3],options:n[1]}}}return t&&(e=z(t,o(l))),{c(){e&&T(e.$$.fragment),r=v()},l(n){e&&D(e.$$.fragment,n),r=v()},m(n,a){e&&L(e,n,a),m(n,r,a),i=!0},p(n,a){const s={};if(a&1&&(s.entry=n[3]),a&2&&(s.options=n[1]),a&1&&t!==(t=n[2](n[3]))){if(e){k();const c=e;h(c.$$.fragment,1,0,()=>{I(c,1)}),w()}t?(e=z(t,o(n)),T(e.$$.fragment),d(e.$$.fragment,1),L(e,r.parentNode,r)):e=null}else t&&e.$set(s)},i(n){i||(e&&d(e.$$.fragment,n),i=!0)},o(n){e&&h(e.$$.fragment,n),i=!1},d(n){n&&f(r),e&&I(e,n)}}}function et(l){let e,r=y(l[3],l[1])+"",i;return{c(){e=new ke(!1),i=v(),this.h()},l(t){e=we(t,!1),i=v(),this.h()},h(){e.a=i},m(t,o){e.m(r,t,o),m(t,i,o)},p(t,o){o&3&&r!==(r=y(t[3],t[1])+"")&&e.p(r)},i:N,o:N,d(t){t&&f(i),t&&e.d()}}}function ue(l){let e,r,i,t;const o=[et,xe],n=[];function a(s,c){return typeof s[3]=="string"?0:typeof s[3]=="object"?1:-1}return~(e=a(l))&&(r=n[e]=o[e](l)),{c(){r&&r.c(),i=v()},l(s){r&&r.l(s),i=v()},m(s,c){~e&&n[e].m(s,c),m(s,i,c),t=!0},p(s,c){let u=e;e=a(s),e===u?~e&&n[e].p(s,c):(r&&(k(),h(n[u],1,1,()=>{n[u]=null}),w()),~e?(r=n[e],r?r.p(s,c):(r=n[e]=o[e](s),r.c()),d(r,1),r.m(i.parentNode,i)):r=null)},i(s){t||(d(r),t=!0)},o(s){h(r),t=!1},d(s){~e&&n[e].d(s),s&&f(i)}}}function tt(l){let e,r,i=l[0],t=[];for(let n=0;n<i.length;n+=1)t[n]=ue(fe(l,i,n));const o=n=>h(t[n],1,1,()=>{t[n]=null});return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=v()},l(n){for(let a=0;a<t.length;a+=1)t[a].l(n);e=v()},m(n,a){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(n,a);m(n,e,a),r=!0},p(n,[a]){if(a&7){i=n[0];let s;for(s=0;s<i.length;s+=1){const c=fe(n,i,s);t[s]?(t[s].p(c,a),d(t[s],1)):(t[s]=ue(c),t[s].c(),d(t[s],1),t[s].m(e.parentNode,e))}for(k(),s=i.length;s<t.length;s+=1)o(s);w()}},i(n){if(!r){for(let a=0;a<i.length;a+=1)d(t[a]);r=!0}},o(n){t=t.filter(Boolean);for(let a=0;a<t.length;a+=1)h(t[a]);r=!1},d(n){M(t,n),n&&f(e)}}}function nt(l,e,r){let{entries:i}=e,{options:t={noWrap:!1}}=e;Array.isArray(i)||(i=[i]);function o(n){if(!n.type)throw new Error("Entry type is not defined!");const a=n.type.replaceAll("-","_").toLowerCase();return Object.keys(ce).includes(a)||new ve().error(new Error(`Entry type "${n.type}" is not recognized by the renderer!`)),ce[a]}return l.$$set=n=>{"entries"in n&&r(0,i=n.entries),"options"in n&&r(1,t=n.options)},[i,t,o]}class H extends O{constructor(e){super(),P(this,e,nt,tt,G,{entries:0,options:1})}}function it(l){let e,r,i,t;return i=new H({props:{entries:l[0]}}),{c(){e=C(),r=_("div"),T(i.$$.fragment),this.h()},l(o){Ce("svelte-1332xj4",document.head).forEach(f),e=E(o),r=g(o,"DIV",{class:!0});var a=b(r);D(i.$$.fragment,a),a.forEach(f),this.h()},h(){document.title="PF2ools - Licenses",Y(r,"class","container mx-auto p-8 space-y-8 pf2ools")},m(o,n){m(o,e,n),m(o,r,n),L(i,r,null),t=!0},p:N,i(o){t||(d(i.$$.fragment,o),t=!0)},o(o){h(i.$$.fragment,o),t=!1},d(o){o&&f(e),o&&f(r),I(i)}}}function rt(l,e,r){let{data:i}=e;const t=i.sources,o=[{name:"Community Use Policy",type:"pf2-red-box",entries:["Pf2etools uses trademarks and/or copyrights owned by Paizo Inc., used under {@link Paizo's Community Use Policy|https://paizo.com/communityuse}. We are expressly prohibited from charging you to use or access this content. Pf2etools is not published, endorsed, or specifically approved by Paizo. For more information about Paizo Inc. and Paizo products, visit {@link paizo.com|https://paizo.com}."]},{type:"hr"},{name:"Open Game License",type:"entries",entries:["{@c OPEN GAME LICENSE Version 1.0a}",'The following text is the property of Wizards of the Coast, Inc. and is Copyright 2000 Wizards of the Coast, Inc ("Wizards"). All Rights Reserved.','1. Definitions: (a)"Contributors" means the copyright and/or trademark owners who have contributed Open Game Content; (b)"Derivative Material"means copyrighted material including derivative works and translations (including into other computer languages), potation, modification, correction, addition, extension, upgrade, improvement, compilation, abridgment or other form in which an existing work may be recast, transformed or adapted; (c) "Distribute"means to reproduce, license, rent, lease, sell, broadcast, publicly display, transmit or otherwise distribute; (d)"Open Game Content"means the game mechanic and includes the methods, procedures, processes and routines to the extent such content does not embody the Product Identity and is an enhancement over the prior art and any additional content clearly identified as Open Game Content by the Contributor, and means any work covered by this License, including translations and derivative works under copyright law, but specifically excludes Product Identity. (e) "Product Identity"means product and product line names, logos and identifying marks including trade dress; artifacts; creatures characters; stories, storylines, plots, thematic elements, dialogue, incidents, language, artwork, symbols, designs, depictions, likenesses, formats, poses, concepts, themes and graphic, photographic and other visual or audio representations; names and descriptions of characters, spells, enchantments, personalities, teams, personas, likenesses and special abilities; places, locations, environments, creatures, equipment, magical or supernatural abilities or effects, logos, symbols, or graphic designs; and any other trademark or registered trademark clearly identified as Product identity by the owner of the Product Identity, and which specifically excludes the Open Game Content; (f) "Trademark"means the logos, names, mark, sign, motto, designs that are used by a Contributor to identify itself or its products or the associated products contributed to the Open Game License by the Contributor (g) "Use", "Used"or "Using"means to use, Distribute, copy, edit, format, modify, translate and otherwise create Derivative Material of Open Game Content. (h) "You"or "Your"means the licensee in terms of this agreement.',"2. The License: This License applies to any Open Game Content that contains a notice indicating that the Open Game Content may only be Used under and in terms of this License. You must affix such a notice to any Open Game Content that you Use. No terms may be added to or subtracted from this License except as described by the License itself. No other terms or conditions may be applied to any Open Game Content distributed using this License.","3. Offer and Acceptance: By Using the Open Game Content You indicate Your acceptance of the terms of this License.","4. Grant and Consideration: In consideration for agreeing to use this License, the Contributors grant You a perpetual, worldwide, royalty-free, non-exclusive license with the exact terms of this License to Use, the Open Game Content.","5. Representation of Authority to Contribute: If You are contributing original material as Open Game Content, You represent that Your Contributions are Your original creation and/or You have sufficient rights to grant the rights conveyed by this License.","6. Notice of License Copyright: You must update the COPYRIGHT NOTICE portion of this License to include the exact text of the COPYRIGHT NOTICE of any Open Game Content You are copying, modifying or distributing, and You must add the title, the copyright date, and the copyright holder's name to the COPYRIGHT NOTICE of any original Open Game Content you Distribute.","7. Use of Product Identity: You agree not to Use any Product Identity, including as an indication as to compatibility, except as expressly licensed in another, independent Agreement with the owner of each element of that Product Identity. You agree not to indicate compatibility or co-adaptability with any Trademark or Registered Trademark in conjunction with a work containing Open Game Content except as expressly licensed in another, independent Agreement with the owner of such Trademark or Registered Trademark. The use of any Product Identity in Open Game Content does not constitute a challenge to the ownership of that Product Identity. The owner of any Product Identity used in Open Game Content shall retain all rights, title and interest in and to that Product Identity.","8. Identification: If you distribute Open Game Content You must clearly indicate which portions of the work that you are distributing are Open Game Content.","9. Updating the License: Wizards or its designated Agents may publish updated versions of this License. You may use any authorized version of this License to copy, modify and distribute any Open Game Content originally distributed under any version of this License.","10. Copy of this License: You MUST include a copy of this License with every copy of the Open Game Content You Distribute.","11. Use of Contributor Credits: You may not market or advertise the Open Game Content using the name of any Contributor unless You have written permission from the Contributor to do so.","12. Inability to Comply: If it is impossible for You to comply with any of the terms of this License with respect to some or all of the Open Game Content due to statute, judicial order, or governmental regulation then You may not Use any Open Game Material so affected.","13. Termination: This License will terminate automatically if You fail to comply with all terms herein and fail to cure such breach within 30 days of becoming aware of the breach. All sublicenses shall survive the termination of this License.","14. Reformation: If any provision of this License is held to be unenforceable, such provision shall be reformed only to the extent necessary to make it enforceable.","15. COPYRIGHT NOTICE","{@b Open Game License v 1.0} © 2000, Wizards of the Coast, Inc.","{@b System Reference Document} © 2000. Wizards of the Coast, Inc; Authors: Jonathan Tweet, Monte Cook, Skip Williams, based on material by E. Gary Gygax and Dave Arneson."]},{type:"hr"}],n=t.filter(s=>!s.unreleased).map(s=>({type:"pf2-h3",name:`{@link ${s.name}|${s.store}} {@note (${s.source})}`,source:s.source,entries:s.entries,collapsible:!0})),a=o.concat(n);return l.$$set=s=>{"data"in s&&r(1,i=s.data)},[a,i]}class lt extends O{constructor(e){super(),P(this,e,rt,it,G,{data:1})}}export{lt as default};
