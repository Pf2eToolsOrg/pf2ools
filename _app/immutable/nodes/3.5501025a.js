import{_ as B}from"../chunks/preload-helper.41c905a7.js";import{D as et,R as tt,T as rt}from"../chunks/Renderer.fd614072.js";import{S as ve,i as pe,s as be,C as ye,k as j,a as J,l as L,m as R,h as P,c as Q,n as b,b as K,O as T,P as x,D as Ee,E as Pe,F as Ie,g as M,v as Te,d as G,f as De,Q as Le,R as Se,G as _e,H as ke,I as Ve,Z as ue,aj as ot,a3 as Be,a0 as lt,ak as Ue,U as ge,w as Ce,q as ne,r as ae,a4 as Fe,$ as Ne,ai as ct,ah as ze,y as fe,z as de,A as he,B as me,_ as ut,al as nt,am as at,a8 as ft,X as dt,u as we}from"../chunks/index.10f9c6f3.js";import{h as qe}from"../chunks/index.e248da5c.js";import{j as ht}from"../chunks/singletons.5899963b.js";import{m as mt}from"../chunks/MiscUtils.55e932a1.js";import{w as _t}from"../chunks/index.bdd2c49b.js";import{F as gt,a as vt}from"../chunks/fa.63209dcd.js";import{p as pt}from"../chunks/stores.ddf72dae.js";const bt=r=>({}),Me=r=>({});function He(r){let e,t,a;const i=r[17].panel,n=ye(i,r,r[16],Me);return{c(){e=j("div"),n&&n.c(),this.h()},l(s){e=L(s,"DIV",{class:!0,role:!0,"aria-labelledby":!0,tabindex:!0});var o=R(e);n&&n.l(o),o.forEach(P),this.h()},h(){b(e,"class",t="tab-panel "+r[2]),b(e,"role","tabpanel"),b(e,"aria-labelledby",r[1]),b(e,"tabindex","0")},m(s,o){K(s,e,o),n&&n.m(e,null),a=!0},p(s,o){n&&n.p&&(!a||o&65536)&&Ee(n,i,s,s[16],a?Ie(i,s[16],o,bt):Pe(s[16]),Me),(!a||o&4&&t!==(t="tab-panel "+s[2]))&&b(e,"class",t),(!a||o&2)&&b(e,"aria-labelledby",s[1])},i(s){a||(M(n,s),a=!0)},o(s){G(n,s),a=!1},d(s){s&&P(e),n&&n.d(s)}}}function yt(r){let e,t,a,i,n,s,o,c;const y=r[17].default,l=ye(y,r,r[16],null);let g=r[5].panel&&He(r);return{c(){e=j("div"),t=j("div"),l&&l.c(),i=J(),g&&g.c(),this.h()},l(u){e=L(u,"DIV",{class:!0,"data-testid":!0});var m=R(e);t=L(m,"DIV",{class:!0,role:!0,"aria-labelledby":!0});var D=R(t);l&&l.l(D),D.forEach(P),i=Q(m),g&&g.l(m),m.forEach(P),this.h()},h(){b(t,"class",a="tab-list "+r[3]),b(t,"role","tablist"),b(t,"aria-labelledby",r[0]),b(e,"class",n="tab-group "+r[4]),b(e,"data-testid","tab-group")},m(u,m){K(u,e,m),T(e,t),l&&l.m(t,null),T(e,i),g&&g.m(e,null),s=!0,o||(c=[x(e,"click",r[18]),x(e,"keypress",r[19]),x(e,"keydown",r[20]),x(e,"keyup",r[21])],o=!0)},p(u,[m]){l&&l.p&&(!s||m&65536)&&Ee(l,y,u,u[16],s?Ie(y,u[16],m,null):Pe(u[16]),null),(!s||m&8&&a!==(a="tab-list "+u[3]))&&b(t,"class",a),(!s||m&1)&&b(t,"aria-labelledby",u[0]),u[5].panel?g?(g.p(u,m),m&32&&M(g,1)):(g=He(u),g.c(),M(g,1),g.m(e,null)):g&&(Te(),G(g,1,1,()=>{g=null}),De()),(!s||m&16&&n!==(n="tab-group "+u[4]))&&b(e,"class",n)},i(u){s||(M(l,u),M(g),s=!0)},o(u){G(l,u),G(g),s=!1},d(u){u&&P(e),l&&l.d(u),g&&g.d(),o=!1,Le(c)}}}const Et="space-y-4",Pt="flex overflow-x-auto hide-scrollbar",It="";function At(r,e,t){let a,i,n,{$$slots:s={},$$scope:o}=e;const c=Se(s);let{justify:y="justify-start"}=e,{border:l="border-b border-surface-400-500-token"}=e,{active:g="border-b-2 border-surface-900-50-token"}=e,{hover:u="hover:variant-soft"}=e,{flex:m="flex-none"}=e,{padding:D="px-4 py-2"}=e,{rounded:F="rounded-tl-container-token rounded-tr-container-token"}=e,{spacing:h="space-y-1"}=e,{regionList:v=""}=e,{regionPanel:p=""}=e,{labelledby:V=""}=e,{panel:N=""}=e;_e("active",g),_e("hover",u),_e("flex",m),_e("padding",D),_e("rounded",F),_e("spacing",h);function f(d){ue.call(this,r,d)}function I(d){ue.call(this,r,d)}function _(d){ue.call(this,r,d)}function E(d){ue.call(this,r,d)}return r.$$set=d=>{t(22,e=ke(ke({},e),Ve(d))),"justify"in d&&t(6,y=d.justify),"border"in d&&t(7,l=d.border),"active"in d&&t(8,g=d.active),"hover"in d&&t(9,u=d.hover),"flex"in d&&t(10,m=d.flex),"padding"in d&&t(11,D=d.padding),"rounded"in d&&t(12,F=d.rounded),"spacing"in d&&t(13,h=d.spacing),"regionList"in d&&t(14,v=d.regionList),"regionPanel"in d&&t(15,p=d.regionPanel),"labelledby"in d&&t(0,V=d.labelledby),"panel"in d&&t(1,N=d.panel),"$$scope"in d&&t(16,o=d.$$scope)},r.$$.update=()=>{t(4,a=`${Et} ${e.class??""}`),r.$$.dirty&16576&&t(3,i=`${Pt} ${y} ${l} ${v}`),r.$$.dirty&32768&&t(2,n=`${It} ${p}`)},e=Ve(e),[V,N,n,i,a,c,y,l,g,u,m,D,F,h,v,p,o,s,f,I,_,E]}class Tt extends ve{constructor(e){super(),pe(this,e,At,yt,be,{justify:6,border:7,active:8,hover:9,flex:10,padding:11,rounded:12,spacing:13,regionList:14,regionPanel:15,labelledby:0,panel:1})}}const Dt=r=>({}),Ge=r=>({});function Xe(r){let e,t;const a=r[19].lead,i=ye(a,r,r[18],Ge);return{c(){e=j("div"),i&&i.c(),this.h()},l(n){e=L(n,"DIV",{class:!0});var s=R(e);i&&i.l(s),s.forEach(P),this.h()},h(){b(e,"class","tab-lead")},m(n,s){K(n,e,s),i&&i.m(e,null),t=!0},p(n,s){i&&i.p&&(!t||s&262144)&&Ee(i,a,n,n[18],t?Ie(a,n[18],s,Dt):Pe(n[18]),Ge)},i(n){t||(M(i,n),t=!0)},o(n){G(i,n),t=!1},d(n){n&&P(e),i&&i.d(n)}}}function kt(r){let e,t,a,i,n,s,o,c,y,l,g,u,m,D,F,h=[{type:"radio"},{name:r[1]},{__value:r[2]},r[9](),{tabindex:"-1"}],v={};for(let f=0;f<h.length;f+=1)v=ke(v,h[f]);let p=r[10].lead&&Xe(r);const V=r[19].default,N=ye(V,r,r[18],null);return m=ot(r[27][0]),{c(){e=j("label"),t=j("div"),a=j("div"),i=j("input"),n=J(),s=j("div"),p&&p.c(),o=J(),c=j("div"),N&&N.c(),this.h()},l(f){e=L(f,"LABEL",{});var I=R(e);t=L(I,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-controls":!0,"aria-selected":!0,tabindex:!0});var _=R(t);a=L(_,"DIV",{class:!0});var E=R(a);i=L(E,"INPUT",{type:!0,name:!0,tabindex:!0}),E.forEach(P),n=Q(_),s=L(_,"DIV",{class:!0});var d=R(s);p&&p.l(d),o=Q(d),c=L(d,"DIV",{class:!0});var w=R(c);N&&N.l(w),w.forEach(P),d.forEach(P),_.forEach(P),I.forEach(P),this.h()},h(){Be(i,v),b(a,"class","h-0 w-0 overflow-hidden"),b(c,"class","tab-label"),b(s,"class",y="tab-interface "+r[6]),b(t,"class",l="tab "+r[7]),b(t,"data-testid","tab"),b(t,"role","tab"),b(t,"aria-controls",r[3]),b(t,"aria-selected",r[4]),b(t,"tabindex",g=r[4]?0:-1),m.p(i)},m(f,I){K(f,e,I),T(e,t),T(t,a),T(a,i),i.autofocus&&i.focus(),r[25](i),i.checked=i.__value===r[0],T(t,n),T(t,s),p&&p.m(s,null),T(s,o),T(s,c),N&&N.m(c,null),u=!0,D||(F=[x(i,"change",r[26]),x(i,"click",r[23]),x(i,"change",r[24]),x(t,"keydown",r[8]),x(t,"keydown",r[20]),x(t,"keyup",r[21]),x(t,"keypress",r[22])],D=!0)},p(f,[I]){Be(i,v=lt(h,[{type:"radio"},(!u||I&2)&&{name:f[1]},(!u||I&4)&&{__value:f[2]},f[9](),{tabindex:"-1"}])),I&1&&(i.checked=i.__value===f[0]),f[10].lead?p?(p.p(f,I),I&1024&&M(p,1)):(p=Xe(f),p.c(),M(p,1),p.m(s,o)):p&&(Te(),G(p,1,1,()=>{p=null}),De()),N&&N.p&&(!u||I&262144)&&Ee(N,V,f,f[18],u?Ie(V,f[18],I,null):Pe(f[18]),null),(!u||I&64&&y!==(y="tab-interface "+f[6]))&&b(s,"class",y),(!u||I&128&&l!==(l="tab "+f[7]))&&b(t,"class",l),(!u||I&8)&&b(t,"aria-controls",f[3]),(!u||I&16)&&b(t,"aria-selected",f[4]),(!u||I&16&&g!==(g=f[4]?0:-1))&&b(t,"tabindex",g)},i(f){u||(M(p),M(N,f),u=!0)},o(f){G(p),G(N,f),u=!1},d(f){f&&P(e),r[25](null),p&&p.d(),N&&N.d(f),m.r(),D=!1,Le(F)}}}const wt="text-center cursor-pointer transition-colors duration-100",Vt="";function jt(r,e,t){let a,i,n,s;const o=["group","name","value","controls","active","hover","flex","padding","rounded","spacing"];let c=Ue(e,o),{$$slots:y={},$$scope:l}=e;const g=Se(y);let{group:u}=e,{name:m}=e,{value:D}=e,{controls:F=""}=e,{active:h=ge("active")}=e,{hover:v=ge("hover")}=e,{flex:p=ge("flex")}=e,{padding:V=ge("padding")}=e,{rounded:N=ge("rounded")}=e,{spacing:f=ge("spacing")}=e,I;function _(A){if(["Enter","Space"].includes(A.code))A.preventDefault(),I.click();else if(A.code==="ArrowRight"){const re=I.closest(".tab-list");if(!re)return;const Z=Array.from(re.querySelectorAll(".tab")),W=I.closest(".tab");if(!W)return;const Y=Z.indexOf(W),ie=Y+1>=Z.length?0:Y+1,X=Z[ie],ee=X==null?void 0:X.querySelector("input");X&&ee&&(ee.click(),X.focus())}else if(A.code==="ArrowLeft"){const re=I.closest(".tab-list");if(!re)return;const Z=Array.from(re.querySelectorAll(".tab")),W=I.closest(".tab");if(!W)return;const Y=Z.indexOf(W),ie=Y-1<0?Z.length-1:Y-1,X=Z[ie],ee=X==null?void 0:X.querySelector("input");X&&ee&&(ee.click(),X.focus())}}function E(){return delete c.class,c}const d=[[]];function w(A){ue.call(this,r,A)}function z(A){ue.call(this,r,A)}function C(A){ue.call(this,r,A)}function O(A){ue.call(this,r,A)}function S(A){ue.call(this,r,A)}function $(A){Ce[A?"unshift":"push"](()=>{I=A,t(5,I)})}function se(){u=this.__value,t(0,u)}return r.$$set=A=>{t(29,e=ke(ke({},e),Ve(A))),t(28,c=Ue(e,o)),"group"in A&&t(0,u=A.group),"name"in A&&t(1,m=A.name),"value"in A&&t(2,D=A.value),"controls"in A&&t(3,F=A.controls),"active"in A&&t(11,h=A.active),"hover"in A&&t(12,v=A.hover),"flex"in A&&t(13,p=A.flex),"padding"in A&&t(14,V=A.padding),"rounded"in A&&t(15,N=A.rounded),"spacing"in A&&t(16,f=A.spacing),"$$scope"in A&&t(18,l=A.$$scope)},r.$$.update=()=>{r.$$.dirty&5&&t(4,a=D===u),r.$$.dirty&6160&&t(17,i=a?h:v),t(7,n=`${wt} ${p} ${V} ${N} ${i} ${e.class??""}`),r.$$.dirty&65536&&t(6,s=`${Vt} ${f}`)},e=Ve(e),[u,m,D,F,a,I,s,n,_,E,g,h,v,p,V,N,f,i,l,y,w,z,C,O,S,$,se,d]}class st extends ve{constructor(e){super(),pe(this,e,jt,kt,be,{group:0,name:1,value:2,controls:3,active:11,hover:12,flex:13,padding:14,rounded:15,spacing:16})}}class Lt extends et{constructor(e){super(e),this.traitsPrototype=e.traits}get type(){return"ancestry"}get extraHp(){let e=[];return this.heritage.forEach(t=>{var a;(a=t==null?void 0:t.modif)!=null&&a.hp&&e.push({hp:t.modif.hp,name:t.name,source:t.source,hash:this.hashify(t.name,t.source)})}),e.length?e:null}get heritages(){const e=new Map;return this.heritage.map(t=>{const a=new Ot(t,this);e.set(a.hash,a)}),e}}class Ot extends et{constructor(e,t){super(e),this.ancestry={name:t.name,source:t.source}}get type(){return"heritage"}tag(e){return`${this.ancestry.name}|${this.ancestry.source}|${e||this.name}|${this.shortName}|${this.source}`}}const Ke=Object.assign({"/src/data/core/ancestries/ancestry-anadi.json":()=>B(()=>import("../chunks/ancestry-anadi.bc3b36aa.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-android.json":()=>B(()=>import("../chunks/ancestry-android.70ba544c.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-automaton.json":()=>B(()=>import("../chunks/ancestry-automaton.fe18f78f.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-azarketi.json":()=>B(()=>import("../chunks/ancestry-azarketi.8eef2316.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-catfolk.json":()=>B(()=>import("../chunks/ancestry-catfolk.164fbd05.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-conrasu.json":()=>B(()=>import("../chunks/ancestry-conrasu.f6af23c0.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-dwarf.json":()=>B(()=>import("../chunks/ancestry-dwarf.e0322b7b.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-elf.json":()=>B(()=>import("../chunks/ancestry-elf.df3da23c.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-fetchling.json":()=>B(()=>import("../chunks/ancestry-fetchling.1634f370.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-fleshwarp.json":()=>B(()=>import("../chunks/ancestry-fleshwarp.91d5d4ba.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-ghoran.json":()=>B(()=>import("../chunks/ancestry-ghoran.bee86fe7.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-gnoll.json":()=>B(()=>import("../chunks/ancestry-gnoll.9007a6da.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-gnome.json":()=>B(()=>import("../chunks/ancestry-gnome.f04ba74b.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-goblin.json":()=>B(()=>import("../chunks/ancestry-goblin.5c4662a6.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-goloma.json":()=>B(()=>import("../chunks/ancestry-goloma.44855751.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-grippli.json":()=>B(()=>import("../chunks/ancestry-grippli.b47cd181.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-halfling.json":()=>B(()=>import("../chunks/ancestry-halfling.583a68ff.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-hobgoblin.json":()=>B(()=>import("../chunks/ancestry-hobgoblin.d1d99bc6.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-human.json":()=>B(()=>import("../chunks/ancestry-human.59aa3152.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-kashrishi.json":()=>B(()=>import("../chunks/ancestry-kashrishi.4ad0f543.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-kitsune.json":()=>B(()=>import("../chunks/ancestry-kitsune.4d243c1d.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-kobold.json":()=>B(()=>import("../chunks/ancestry-kobold.6a409935.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-leshy.json":()=>B(()=>import("../chunks/ancestry-leshy.6f773e20.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-lizardfolk.json":()=>B(()=>import("../chunks/ancestry-lizardfolk.dbd1ddf6.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-nagaji.json":()=>B(()=>import("../chunks/ancestry-nagaji.17b7b37d.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-orc.json":()=>B(()=>import("../chunks/ancestry-orc.5638d9f1.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-poppet.json":()=>B(()=>import("../chunks/ancestry-poppet.82ec83bc.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-ratfolk.json":()=>B(()=>import("../chunks/ancestry-ratfolk.7edbe5a6.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-shisk.json":()=>B(()=>import("../chunks/ancestry-shisk.f5367dd1.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-shoony.json":()=>B(()=>import("../chunks/ancestry-shoony.2ce12db5.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-skeleton.json":()=>B(()=>import("../chunks/ancestry-skeleton.4f25cf88.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-sprite.json":()=>B(()=>import("../chunks/ancestry-sprite.737644ad.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-strix.json":()=>B(()=>import("../chunks/ancestry-strix.11659569.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-tengu.json":()=>B(()=>import("../chunks/ancestry-tengu.ffd2f6c8.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-vanara.json":()=>B(()=>import("../chunks/ancestry-vanara.5431222c.js"),[],import.meta.url),"/src/data/core/ancestries/ancestry-vishkanya.json":()=>B(()=>import("../chunks/ancestry-vishkanya.78e4a165.js"),[],import.meta.url)});async function Rt(){const r=new Map;for(const e in Ke)await Ke[e]().then(t=>{t.ancestry.forEach(i=>{i._path=e;const n=new Lt(i);r.set(n.hash,n)})});return{ancestries:r}}const fr=Object.freeze(Object.defineProperty({__proto__:null,load:Rt},Symbol.toStringTag,{value:"Module"})),St=ht("goto");function We(r,e,t){const a=r.slice();return a[13]=e[t],a}const Ct=r=>({item:r&9}),Je=r=>({item:r[13]}),Bt=r=>({}),Qe=r=>({});function Ze(r){let e,t;const a=r[9].header,i=ye(a,r,r[8],Qe);return{c(){e=j("div"),i&&i.c(),this.h()},l(n){e=L(n,"DIV",{class:!0});var s=R(e);i&&i.l(s),s.forEach(P),this.h()},h(){b(e,"class","row header px-1 svelte-auiqv")},m(n,s){K(n,e,s),i&&i.m(e,null),t=!0},p(n,s){i&&i.p&&(!t||s&256)&&Ee(i,a,n,n[8],t?Ie(a,n[8],s,Bt):Pe(n[8]),Qe)},i(n){t||(M(i,n),t=!0)},o(n){G(i,n),t=!1},d(n){n&&P(e),i&&i.d(n)}}}function Ye(r){let e,t,a,i,n;const s=r[9].list,o=ye(s,r,r[8],Je);return{c(){e=j("div"),t=j("a"),o&&o.c(),i=J(),this.h()},l(c){e=L(c,"DIV",{class:!0});var y=R(e);t=L(y,"A",{href:!0,class:!0});var l=R(t);o&&o.l(l),l.forEach(P),i=Q(y),y.forEach(P),this.h()},h(){b(t,"href",a="#"+r[13].hash),b(t,"class","unstyled"),b(e,"class","row text-sm px-1 leading-5 bg-[#cbcbcb] hover:bg-[#d3d3d3] dark:bg-[#222] dark:hover:bg-[#333]  svelte-auiqv"),ze(e,"selected",r[13].hash===r[1].hash)},m(c,y){K(c,e,y),T(e,t),o&&o.m(t,null),T(e,i),n=!0},p(c,y){o&&o.p&&(!n||y&265)&&Ee(o,s,c,c[8],n?Ie(s,c[8],y,Ct):Pe(c[8]),Je),(!n||y&9&&a!==(a="#"+c[13].hash))&&b(t,"href",a),(!n||y&11)&&ze(e,"selected",c[13].hash===c[1].hash)},i(c){n||(M(o,c),n=!0)},o(c){G(o,c),n=!1},d(c){c&&P(e),o&&o.d(c)}}}function Ut(r){let e,t,a,i,n,s,o,c,y,l,g,u,m,D,F,h,v=r[5].header&&Ze(r),p=r[0].filter(r[3]).toValueArray(),V=[];for(let f=0;f<p.length;f+=1)V[f]=Ye(We(r,p,f));const N=f=>G(V[f],1,1,()=>{V[f]=null});return{c(){e=j("button"),t=J(),a=j("button"),i=J(),n=j("div"),s=j("div"),o=j("button"),c=ne("Filters"),y=J(),l=j("input"),g=J(),v&&v.c(),u=J(),m=j("div");for(let f=0;f<V.length;f+=1)V[f].c();this.h()},l(f){e=L(f,"BUTTON",{class:!0}),R(e).forEach(P),t=Q(f),a=L(f,"BUTTON",{class:!0}),R(a).forEach(P),i=Q(f),n=L(f,"DIV",{class:!0});var I=R(n);s=L(I,"DIV",{class:!0});var _=R(s);o=L(_,"BUTTON",{class:!0});var E=R(o);c=ae(E,"Filters"),E.forEach(P),y=Q(_),l=L(_,"INPUT",{class:!0,type:!0}),_.forEach(P),g=Q(I),v&&v.l(I),u=Q(I),m=L(I,"DIV",{class:!0});var d=R(m);for(let w=0;w<V.length;w+=1)V[w].l(d);d.forEach(P),I.forEach(P),this.h()},h(){b(e,"class","hidden"),b(a,"class","hidden"),b(o,"class","btn variant-ghost-surface rounded-tl-md rounded-none px-2"),b(l,"class","w-[100%] rounded-t-md variant-ghost-surface border-none rounded-tl-none"),b(l,"type","search"),b(s,"class","flex h-8"),b(m,"class","h-[84vh] overflow-y-scroll mr-[-9px]"),b(n,"class","overflow-x-hidden")},m(f,I){K(f,e,I),K(f,t,I),K(f,a,I),K(f,i,I),K(f,n,I),T(n,s),T(s,o),T(o,c),T(s,y),T(s,l),Fe(l,r[2]),T(n,g),v&&v.m(n,null),T(n,u),T(n,m);for(let _=0;_<V.length;_+=1)V[_]&&V[_].m(m,null);D=!0,F||(h=[x(e,"click",r[10]),Ne(qe.call(null,e,"k")),x(a,"click",r[11]),Ne(qe.call(null,a,"j")),x(l,"input",r[12])],F=!0)},p(f,[I]){if(I&4&&l.value!==f[2]&&Fe(l,f[2]),f[5].header?v?(v.p(f,I),I&32&&M(v,1)):(v=Ze(f),v.c(),M(v,1),v.m(n,u)):v&&(Te(),G(v,1,1,()=>{v=null}),De()),I&267){p=f[0].filter(f[3]).toValueArray();let _;for(_=0;_<p.length;_+=1){const E=We(f,p,_);V[_]?(V[_].p(E,I),M(V[_],1)):(V[_]=Ye(E),V[_].c(),M(V[_],1),V[_].m(m,null))}for(Te(),_=p.length;_<V.length;_+=1)N(_);De()}},i(f){if(!D){M(v);for(let I=0;I<p.length;I+=1)M(V[I]);D=!0}},o(f){G(v),V=V.filter(Boolean);for(let I=0;I<V.length;I+=1)G(V[I]);D=!1},d(f){f&&P(e),f&&P(t),f&&P(a),f&&P(i),f&&P(n),v&&v.d(),ct(V,f),F=!1,Le(h)}}}function Ft(r,e,t){let a,i,{$$slots:n={},$$scope:s}=e;const o=Se(n);let{data:c}=e,{field:y}=e,{selected:l}=e,g="";function u(h){let v=[...c.values()].indexOf(l),p=[...c.values()][v===0&&h===-1?c.size-1:(v+h)%c.size];St("#"+p.hash)}const m=h=>{u(-1)},D=h=>{u(1)};function F(){g=this.value,t(2,g)}return r.$$set=h=>{"data"in h&&t(0,c=h.data),"field"in h&&t(6,y=h.field),"selected"in h&&t(1,l=h.selected),"$$scope"in h&&t(8,s=h.$$scope)},r.$$.update=()=>{r.$$.dirty&4&&t(7,a=g?new RegExp(g,"i"):null),r.$$.dirty&192&&t(3,i=h=>a?a.test(h[y]):!0)},[c,l,g,i,u,o,y,a,s,n,m,D,F]}class Nt extends ve{constructor(e){super(),pe(this,e,Ft,Ut,be,{data:0,field:6,selected:1})}}function zt(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var it={exports:{}};(function(r){(function(e){var t=V(),a=N(),i=f(),n=I(),s={imagePlaceholder:void 0,cacheBust:!1},o={toSvg:c,toPng:l,toJpeg:g,toBlob:u,toPixelData:y,impl:{fontFaces:i,images:n,util:t,inliner:a,options:{}}};r.exports=o;function c(_,E){return E=E||{},m(E),Promise.resolve(_).then(function(w){return F(w,E.filter,!0)}).then(h).then(v).then(d).then(function(w){return p(w,E.width||t.width(_),E.height||t.height(_))});function d(w){return E.bgcolor&&(w.style.backgroundColor=E.bgcolor),E.width&&(w.style.width=E.width+"px"),E.height&&(w.style.height=E.height+"px"),E.style&&Object.keys(E.style).forEach(function(z){w.style[z]=E.style[z]}),w}}function y(_,E){return D(_,E||{}).then(function(d){return d.getContext("2d").getImageData(0,0,t.width(_),t.height(_)).data})}function l(_,E){return D(_,E||{}).then(function(d){return d.toDataURL()})}function g(_,E){return E=E||{},D(_,E).then(function(d){return d.toDataURL("image/jpeg",E.quality||1)})}function u(_,E){return D(_,E||{}).then(t.canvasToBlob)}function m(_){typeof _.imagePlaceholder>"u"?o.impl.options.imagePlaceholder=s.imagePlaceholder:o.impl.options.imagePlaceholder=_.imagePlaceholder,typeof _.cacheBust>"u"?o.impl.options.cacheBust=s.cacheBust:o.impl.options.cacheBust=_.cacheBust}function D(_,E){return c(_,E).then(t.makeImage).then(t.delay(100)).then(function(w){var z=d(_);return z.getContext("2d").drawImage(w,0,0),z});function d(w){var z=document.createElement("canvas");if(z.width=E.width||t.width(w),z.height=E.height||t.height(w),E.bgcolor){var C=z.getContext("2d");C.fillStyle=E.bgcolor,C.fillRect(0,0,z.width,z.height)}return z}}function F(_,E,d){if(!d&&E&&!E(_))return Promise.resolve();return Promise.resolve(_).then(w).then(function(O){return z(_,O,E)}).then(function(O){return C(_,O)});function w(O){return O instanceof HTMLCanvasElement?t.makeImage(O.toDataURL()):O.cloneNode(!1)}function z(O,S,$){var se=O.childNodes;if(se.length===0)return Promise.resolve(S);return A(S,t.asArray(se),$).then(function(){return S});function A(re,Z,W){var Y=Promise.resolve();return Z.forEach(function(ie){Y=Y.then(function(){return F(ie,W)}).then(function(X){X&&re.appendChild(X)})}),Y}}function C(O,S){if(!(S instanceof Element))return S;return Promise.resolve().then($).then(se).then(A).then(re).then(function(){return S});function $(){Z(window.getComputedStyle(O),S.style);function Z(W,Y){W.cssText?Y.cssText=W.cssText:ie(W,Y);function ie(X,ee){t.asArray(X).forEach(function(k){ee.setProperty(k,X.getPropertyValue(k),X.getPropertyPriority(k))})}}}function se(){[":before",":after"].forEach(function(W){Z(W)});function Z(W){var Y=window.getComputedStyle(O,W),ie=Y.getPropertyValue("content");if(ie===""||ie==="none")return;var X=t.uid();S.className=S.className+" "+X;var ee=document.createElement("style");ee.appendChild(k(X,W,Y)),S.appendChild(ee);function k(U,H,q){var te="."+U+":"+H,oe=q.cssText?Oe(q):Re(q);return document.createTextNode(te+"{"+oe+"}");function Oe(le){var ce=le.getPropertyValue("content");return le.cssText+" content: "+ce+";"}function Re(le){return t.asArray(le).map(ce).join("; ")+";";function ce(Ae){return Ae+": "+le.getPropertyValue(Ae)+(le.getPropertyPriority(Ae)?" !important":"")}}}}}function A(){O instanceof HTMLTextAreaElement&&(S.innerHTML=O.value),O instanceof HTMLInputElement&&S.setAttribute("value",O.value)}function re(){S instanceof SVGElement&&(S.setAttribute("xmlns","http://www.w3.org/2000/svg"),S instanceof SVGRectElement&&["width","height"].forEach(function(Z){var W=S.getAttribute(Z);W&&S.style.setProperty(Z,W)}))}}}function h(_){return i.resolveAll().then(function(E){var d=document.createElement("style");return _.appendChild(d),d.appendChild(document.createTextNode(E)),_})}function v(_){return n.inlineAll(_).then(function(){return _})}function p(_,E,d){return Promise.resolve(_).then(function(w){return w.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),new XMLSerializer().serializeToString(w)}).then(t.escapeXhtml).then(function(w){return'<foreignObject x="0" y="0" width="100%" height="100%">'+w+"</foreignObject>"}).then(function(w){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+E+'" height="'+d+'">'+w+"</svg>"}).then(function(w){return"data:image/svg+xml;charset=utf-8,"+w})}function V(){return{escape:re,parseExtension:E,mimeType:d,dataAsUrl:A,isDataUrl:w,canvasToBlob:C,resolveUrl:O,getAndEncode:se,uid:S(),delay:Z,asArray:W,escapeXhtml:Y,makeImage:$,width:ie,height:X};function _(){var k="application/font-woff",U="image/jpeg";return{woff:k,woff2:k,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:U,jpeg:U,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}function E(k){var U=/\.([^\.\/]*?)$/g.exec(k);return U?U[1]:""}function d(k){var U=E(k).toLowerCase();return _()[U]||""}function w(k){return k.search(/^(data:)/)!==-1}function z(k){return new Promise(function(U){for(var H=window.atob(k.toDataURL().split(",")[1]),q=H.length,te=new Uint8Array(q),oe=0;oe<q;oe++)te[oe]=H.charCodeAt(oe);U(new Blob([te],{type:"image/png"}))})}function C(k){return k.toBlob?new Promise(function(U){k.toBlob(U)}):z(k)}function O(k,U){var H=document.implementation.createHTMLDocument(),q=H.createElement("base");H.head.appendChild(q);var te=H.createElement("a");return H.body.appendChild(te),q.href=U,te.href=k,te.href}function S(){var k=0;return function(){return"u"+U()+k++;function U(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}}}function $(k){return new Promise(function(U,H){var q=new Image;q.onload=function(){U(q)},q.onerror=H,q.src=k})}function se(k){var U=3e4;return o.impl.options.cacheBust&&(k+=(/\?/.test(k)?"&":"?")+new Date().getTime()),new Promise(function(H){var q=new XMLHttpRequest;q.onreadystatechange=Oe,q.ontimeout=Re,q.responseType="blob",q.timeout=U,q.open("GET",k,!0),q.send();var te;if(o.impl.options.imagePlaceholder){var oe=o.impl.options.imagePlaceholder.split(/,/);oe&&oe[1]&&(te=oe[1])}function Oe(){if(q.readyState===4){if(q.status!==200){te?H(te):le("cannot fetch resource: "+k+", status: "+q.status);return}var ce=new FileReader;ce.onloadend=function(){var Ae=ce.result.split(/,/)[1];H(Ae)},ce.readAsDataURL(q.response)}}function Re(){te?H(te):le("timeout of "+U+"ms occured while fetching resource: "+k)}function le(ce){console.error(ce),H("")}})}function A(k,U){return"data:"+U+";base64,"+k}function re(k){return k.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")}function Z(k){return function(U){return new Promise(function(H){setTimeout(function(){H(U)},k)})}}function W(k){for(var U=[],H=k.length,q=0;q<H;q++)U.push(k[q]);return U}function Y(k){return k.replace(/#/g,"%23").replace(/\n/g,"%0A")}function ie(k){var U=ee(k,"border-left-width"),H=ee(k,"border-right-width");return k.scrollWidth+U+H}function X(k){var U=ee(k,"border-top-width"),H=ee(k,"border-bottom-width");return k.scrollHeight+U+H}function ee(k,U){var H=window.getComputedStyle(k).getPropertyValue(U);return parseFloat(H.replace("px",""))}}function N(){var _=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:z,shouldProcess:E,impl:{readUrls:d,inline:w}};function E(C){return C.search(_)!==-1}function d(C){for(var O=[],S;(S=_.exec(C))!==null;)O.push(S[1]);return O.filter(function($){return!t.isDataUrl($)})}function w(C,O,S,$){return Promise.resolve(O).then(function(A){return S?t.resolveUrl(A,S):A}).then($||t.getAndEncode).then(function(A){return t.dataAsUrl(A,t.mimeType(O))}).then(function(A){return C.replace(se(O),"$1"+A+"$3")});function se(A){return new RegExp(`(url\\(['"]?)(`+t.escape(A)+`)(['"]?\\))`,"g")}}function z(C,O,S){if($())return Promise.resolve(C);return Promise.resolve(C).then(d).then(function(se){var A=Promise.resolve(C);return se.forEach(function(re){A=A.then(function(Z){return w(Z,re,O,S)})}),A});function $(){return!E(C)}}}function f(){return{resolveAll:_,impl:{readAll:E}};function _(){return E().then(function(d){return Promise.all(d.map(function(w){return w.resolve()}))}).then(function(d){return d.join(`
`)})}function E(){return Promise.resolve(t.asArray(document.styleSheets)).then(w).then(d).then(function(C){return C.map(z)});function d(C){return C.filter(function(O){return O.type===CSSRule.FONT_FACE_RULE}).filter(function(O){return a.shouldProcess(O.style.getPropertyValue("src"))})}function w(C){var O=[];return C.forEach(function(S){try{t.asArray(S.cssRules||[]).forEach(O.push.bind(O))}catch($){console.log("Error while reading CSS rules from "+S.href,$.toString())}}),O}function z(C){return{resolve:function(){var S=(C.parentStyleSheet||{}).href;return a.inlineAll(C.cssText,S)},src:function(){return C.style.getPropertyValue("src")}}}}}function I(){return{inlineAll:E,impl:{newImage:_}};function _(d){return{inline:w};function w(z){return t.isDataUrl(d.src)?Promise.resolve():Promise.resolve(d.src).then(z||t.getAndEncode).then(function(C){return t.dataAsUrl(C,t.mimeType(d.src))}).then(function(C){return new Promise(function(O,S){d.onload=O,d.onerror=S,d.src=C})})}}function E(d){if(!(d instanceof Element))return Promise.resolve(d);return w(d).then(function(){return d instanceof HTMLImageElement?_(d).inline():Promise.all(t.asArray(d.childNodes).map(function(z){return E(z)}))});function w(z){var C=z.style.getPropertyValue("background");return C?a.inlineAll(C).then(function(O){z.style.setProperty("background",O,z.style.getPropertyPriority("background"))}).then(function(){return z}):Promise.resolve(z)}}}})()})(it);var qt=it.exports;const je=zt(qt);function Mt(r){let e,t,a,i,n,s,o,c,y,l,g,u,m,D,F;return u=new tt({props:{entries:r[0]}}),{c(){e=j("div"),t=j("div"),a=j("button"),i=ne("Save"),n=J(),s=j("button"),o=ne("Copy"),c=J(),y=j("div"),l=j("div"),g=j("div"),fe(u.$$.fragment),this.h()},l(h){e=L(h,"DIV",{class:!0});var v=R(e);t=L(v,"DIV",{class:!0});var p=R(t);a=L(p,"BUTTON",{class:!0});var V=R(a);i=ae(V,"Save"),V.forEach(P),n=Q(p),s=L(p,"BUTTON",{class:!0});var N=R(s);o=ae(N,"Copy"),N.forEach(P),p.forEach(P),c=Q(v),y=L(v,"DIV",{class:!0});var f=R(y);l=L(f,"DIV",{class:!0});var I=R(l);g=L(I,"DIV",{class:!0});var _=R(g);de(u.$$.fragment,_),_.forEach(P),I.forEach(P),f.forEach(P),v.forEach(P),this.h()},h(){b(a,"class","btn variant-ghost-surface"),b(s,"class","btn variant-ghost-surface"),b(t,"class","flex"),b(g,"class","m-1.5"),b(l,"class","wrp-stats stats !overflow-hidden resize w-96 min-h-min min-w-min"),b(y,"class","pf2ools"),b(e,"class","relative")},m(h,v){K(h,e,v),T(e,t),T(t,a),T(a,i),T(t,n),T(t,s),T(s,o),T(e,c),T(e,y),T(y,l),T(l,g),he(u,g,null),m=!0,D||(F=[x(a,"click",r[2]),x(s,"click",r[1])],D=!0)},p(h,[v]){const p={};v&1&&(p.entries=h[0]),u.$set(p)},i(h){m||(M(u.$$.fragment,h),m=!0)},o(h){G(u.$$.fragment,h),m=!1},d(h){h&&P(e),me(u),D=!1,Le(F)}}}function Ht(r,e,t){let{entries:a}=e,i=new rt;function n(){const o=document.querySelector(".wrp-stats");je.toBlob(o,{style:{resize:"none"}}).then(c=>{navigator.clipboard.write([new ClipboardItem({"image/png":c})]),i.success("Copied to Clipboard")}).catch(c=>{console.error("Failed to take screenshot",c)})}function s(){const o=document.querySelector(".wrp-stats");je.toPng(o,{style:{resize:"none"}}).then(c=>{const y=document.createElement("a");y.download="screenshot.png",y.href=c,y.click()}).catch(c=>{console.error("Failed to take screenshot",c)})}return r.$$set=o=>{"entries"in o&&t(0,a=o.entries)},[a,n,s]}class Gt extends ve{constructor(e){super(),pe(this,e,Ht,Mt,be,{entries:0})}}function Xt(r){let e;return{c(){e=ne("Stats")},l(t){e=ae(t,"Stats")},m(t,a){K(t,e,a)},d(t){t&&P(e)}}}function xe(r){let e,t,a;function i(s){r[5](s)}let n={name:"tab1",value:"fluff",padding:"px-2",$$slots:{default:[Kt]},$$scope:{ctx:r}};return r[1]!==void 0&&(n.group=r[1]),e=new st({props:n}),Ce.push(()=>nt(e,"group",i)),{c(){fe(e.$$.fragment)},l(s){de(e.$$.fragment,s)},m(s,o){he(e,s,o),a=!0},p(s,o){const c={};o&128&&(c.$$scope={dirty:o,ctx:s}),!t&&o&2&&(t=!0,c.group=s[1],at(()=>t=!1)),e.$set(c)},i(s){a||(M(e.$$.fragment,s),a=!0)},o(s){G(e.$$.fragment,s),a=!1},d(s){me(e,s)}}}function Kt(r){let e;return{c(){e=ne("Fluff")},l(t){e=ae(t,"Fluff")},m(t,a){K(t,e,a)},d(t){t&&P(e)}}}function Wt(r){var D,F;let e,t,a,i,n,s,o,c,y,l;function g(h){r[4](h)}let u={name:"tab1",value:"data",padding:"px-2",$$slots:{default:[Xt]},$$scope:{ctx:r}};r[1]!==void 0&&(u.group=r[1]),e=new st({props:u}),Ce.push(()=>nt(e,"group",g));let m=((F=(D=r[0])==null?void 0:D.fluff)==null?void 0:F.length)&&xe(r);return o=new gt({props:{icon:vt}}),{c(){fe(e.$$.fragment),a=J(),m&&m.c(),i=J(),n=j("div"),s=j("button"),fe(o.$$.fragment),this.h()},l(h){de(e.$$.fragment,h),a=Q(h),m&&m.l(h),i=Q(h),n=L(h,"DIV",{class:!0});var v=R(n);s=L(v,"BUTTON",{id:!0,class:!0,title:!0});var p=R(s);de(o.$$.fragment,p),p.forEach(P),v.forEach(P),this.h()},h(){b(s,"id","screenshot"),b(s,"class","btn btn-sm p-1 variant-ghost-surface rounded-b-none"),b(s,"title","Screenshot the Current Tab (+ Ctrl to Copy to Clipboard, + Shift to Download)"),b(n,"class","ml-auto")},m(h,v){he(e,h,v),K(h,a,v),m&&m.m(h,v),K(h,i,v),K(h,n,v),T(n,s),he(o,s,null),c=!0,y||(l=x(s,"click",r[6]),y=!0)},p(h,v){var V,N;const p={};v&128&&(p.$$scope={dirty:v,ctx:h}),!t&&v&2&&(t=!0,p.group=h[1],at(()=>t=!1)),e.$set(p),(N=(V=h[0])==null?void 0:V.fluff)!=null&&N.length?m?(m.p(h,v),v&1&&M(m,1)):(m=xe(h),m.c(),M(m,1),m.m(i.parentNode,i)):m&&(Te(),G(m,1,1,()=>{m=null}),De())},i(h){c||(M(e.$$.fragment,h),M(m),M(o.$$.fragment,h),c=!0)},o(h){G(e.$$.fragment,h),G(m),G(o.$$.fragment,h),c=!1},d(h){me(e,h),h&&P(a),m&&m.d(h),h&&P(i),h&&P(n),me(o),y=!1,l()}}}function Jt(r){let e,t,a,i;return a=new tt({props:{entries:r[1]==="data"?r[0]:r[0][r[1]]}}),{c(){e=j("div"),t=j("div"),fe(a.$$.fragment),this.h()},l(n){e=L(n,"DIV",{class:!0});var s=R(e);t=L(s,"DIV",{class:!0});var o=R(t);de(a.$$.fragment,o),o.forEach(P),s.forEach(P),this.h()},h(){b(t,"class","m-1.5"),b(e,"class","wrp-stats stats")},m(n,s){K(n,e,s),T(e,t),he(a,t,null),i=!0},p(n,s){const o={};s&3&&(o.entries=n[1]==="data"?n[0]:n[0][n[1]]),a.$set(o)},i(n){i||(M(a.$$.fragment,n),i=!0)},o(n){G(a.$$.fragment,n),i=!1},d(n){n&&P(e),me(a)}}}function Qt(r){let e,t;return e=new Tt({props:{regionPanel:"!mt-0 pf2ools",$$slots:{panel:[Jt],default:[Wt]},$$scope:{ctx:r}}}),{c(){fe(e.$$.fragment)},l(a){de(e.$$.fragment,a)},m(a,i){he(e,a,i),t=!0},p(a,[i]){const n={};i&131&&(n.$$scope={dirty:i,ctx:a}),e.$set(n)},i(a){t||(M(e.$$.fragment,a),t=!0)},o(a){G(e.$$.fragment,a),t=!1},d(a){me(e,a)}}}function Zt(r,e,t){let a,{selected:i}=e,n=new rt,s=_t("data");ut(r,s,l=>t(1,a=l));function o(l){a=l,s.set(a)}function c(l){a=l,s.set(a)}const y=l=>{const g=document.querySelector(".wrp-stats");l.ctrlKey||l.shiftKey?(l.ctrlKey?je.toBlob(g):je.toPng(g)).then(u=>{if(l.shiftKey){const m=document.createElement("a");m.download="screenshot.png",m.href=u,m.click()}else l.ctrlKey&&(navigator.clipboard.write([new ClipboardItem({"image/png":u})]),n.success("Copied to Clipboard"))}).catch(u=>{console.error("Failed to take screenshot",u)}):mt.trigger({type:"component",component:{ref:Gt,props:{entries:a==="data"?i:i[a]}}})};return r.$$set=l=>{"selected"in l&&t(0,i=l.selected)},[i,a,n,s,o,c,y]}class Yt extends ve{constructor(e){super(),pe(this,e,Zt,Qt,be,{selected:0})}}function xt(r){let e,t,a,i,n,s,o,c,y,l,g,u;return{c(){e=j("div"),t=j("div"),a=ne("Name"),i=J(),n=j("div"),s=ne("HP"),o=J(),c=j("div"),y=ne("Size"),l=J(),g=j("div"),u=ne("Source"),this.h()},l(m){e=L(m,"DIV",{class:!0});var D=R(e);t=L(D,"DIV",{id:!0});var F=R(t);a=ae(F,"Name"),F.forEach(P),i=Q(D),n=L(D,"DIV",{id:!0});var h=R(n);s=ae(h,"HP"),h.forEach(P),o=Q(D),c=L(D,"DIV",{id:!0});var v=R(c);y=ae(v,"Size"),v.forEach(P),l=Q(D),g=L(D,"DIV",{id:!0});var p=R(g);u=ae(p,"Source"),p.forEach(P),D.forEach(P),this.h()},h(){b(t,"id","name"),b(n,"id","hp"),b(c,"id","size"),b(g,"id","source"),b(e,"class","grid grid-cols-4 gap-1")},m(m,D){K(m,e,D),T(e,t),T(t,a),T(e,i),T(e,n),T(n,s),T(e,o),T(e,c),T(c,y),T(e,l),T(e,g),T(g,u)},p:dt,d(m){m&&P(e)}}}function $t(r){let e,t,a=r[3].name+"",i,n,s,o=r[3].hp+"",c,y,l,g=r[3].size.map($e).joinConjunct(", "," or ")+"",u,m,D,F=r[3].source+"",h;return{c(){e=j("div"),t=j("span"),i=ne(a),n=J(),s=j("span"),c=ne(o),y=J(),l=j("span"),u=ne(g),m=J(),D=j("span"),h=ne(F),this.h()},l(v){e=L(v,"DIV",{class:!0});var p=R(e);t=L(p,"SPAN",{id:!0});var V=R(t);i=ae(V,a),V.forEach(P),n=Q(p),s=L(p,"SPAN",{id:!0});var N=R(s);c=ae(N,o),N.forEach(P),y=Q(p),l=L(p,"SPAN",{id:!0});var f=R(l);u=ae(f,g),f.forEach(P),m=Q(p),D=L(p,"SPAN",{id:!0});var I=R(D);h=ae(I,F),I.forEach(P),p.forEach(P),this.h()},h(){b(t,"id","name"),b(s,"id","hp"),b(l,"id","size"),b(D,"id","source"),b(e,"class","grid grid-cols-4 gap-1")},m(v,p){K(v,e,p),T(e,t),T(t,i),T(e,n),T(e,s),T(s,c),T(e,y),T(e,l),T(l,u),T(e,m),T(e,D),T(D,h)},p(v,p){p&8&&a!==(a=v[3].name+"")&&we(i,a),p&8&&o!==(o=v[3].hp+"")&&we(c,o),p&8&&g!==(g=v[3].size.map($e).joinConjunct(", "," or ")+"")&&we(u,g),p&8&&F!==(F=v[3].source+"")&&we(h,F)},d(v){v&&P(e)}}}function er(r){let e,t,a,i,n,s,o,c,y;return document.title=e=(r[1]?r[1].name:"Ancestries")+" - PF2ools",n=new Nt({props:{data:r[0].ancestries,field:"name",selected:r[1],$$slots:{list:[$t,({item:l})=>({3:l}),({item:l})=>l?8:0],header:[xt,({item:l})=>({3:l}),({item:l})=>l?8:0]},$$scope:{ctx:r}}}),c=new Yt({props:{selected:r[1]}}),{c(){t=J(),a=j("div"),i=j("div"),fe(n.$$.fragment),s=J(),o=j("div"),fe(c.$$.fragment),this.h()},l(l){ft("svelte-1q5bze3",document.head).forEach(P),t=Q(l),a=L(l,"DIV",{class:!0});var u=R(a);i=L(u,"DIV",{class:!0});var m=R(i);de(n.$$.fragment,m),m.forEach(P),s=Q(u),o=L(u,"DIV",{class:!0});var D=R(o);de(c.$$.fragment,D),D.forEach(P),u.forEach(P),this.h()},h(){b(i,"class","view-col md:w-3/5"),b(o,"class","view-col max-h-[90vh] md:w-2/5"),b(a,"class","container md:flex")},m(l,g){K(l,t,g),K(l,a,g),T(a,i),he(n,i,null),T(a,s),T(a,o),he(c,o,null),y=!0},p(l,[g]){(!y||g&2)&&e!==(e=(l[1]?l[1].name:"Ancestries")+" - PF2ools")&&(document.title=e);const u={};g&1&&(u.data=l[0].ancestries),g&2&&(u.selected=l[1]),g&24&&(u.$$scope={dirty:g,ctx:l}),n.$set(u);const m={};g&2&&(m.selected=l[1]),c.$set(m)},i(l){y||(M(n.$$.fragment,l),M(c.$$.fragment,l),y=!0)},o(l){G(n.$$.fragment,l),G(c.$$.fragment,l),y=!1},d(l){l&&P(t),l&&P(a),me(n),me(c)}}}const $e=r=>r.toTitleCase();function tr(r,e,t){let{data:a}=e;const i=a.ancestries;let n;return pt.subscribe(s=>{let o=s.url.hash.replaceAll(/\#|\?.+/g,"");o&&i.has(o)?t(1,n=i.get(o)):t(1,n=i.entries().next().value[1])}),r.$$set=s=>{"data"in s&&t(0,a=s.data)},[a,n]}class dr extends ve{constructor(e){super(),pe(this,e,tr,er,be,{data:0})}}export{dr as component,fr as universal};
