function x(){}const Q=t=>t;function At(t,e){for(const n in e)t[n]=e[n];return t}function _t(t){return t()}function ct(){return Object.create(null)}function T(t){t.forEach(_t)}function L(t){return typeof t=="function"}function ne(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let F;function ie(t,e){return F||(F=document.createElement("a")),F.href=e,t===F.href}function Ct(t){return Object.keys(t).length===0}function dt(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function se(t){let e;return dt(t,n=>e=n)(),e}function re(t,e,n){t.$$.on_destroy.push(dt(e,n))}function oe(t,e,n,i){if(t){const s=ht(t,e,n,i);return t[0](s)}}function ht(t,e,n,i){return t[1]&&i?At(n.ctx.slice(),t[1](i(e))):n.ctx}function ce(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let c=0;c<r;c+=1)o[c]=e.dirty[c]|s[c];return o}return e.dirty|s}return e.dirty}function le(t,e,n,i,s,o){if(s){const r=ht(e,n,i,o);t.p(r,s)}}function ae(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ue(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function fe(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function _e(t){const e={};for(const n in t)e[n]=!0;return e}function de(t){return t??""}function he(t,e,n){return t.set(n),e}function me(t){return t&&L(t.destroy)?t.destroy:x}function pe(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const mt=typeof window<"u";let U=mt?()=>window.performance.now():()=>Date.now(),it=mt?t=>requestAnimationFrame(t):x;const S=new Set;function pt(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&it(pt)}function V(t){let e;return S.size===0&&it(pt),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}const ye=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let X=!1;function St(){X=!0}function Mt(){X=!1}function jt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Dt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const a=e[l].claim_order,f=(s>0&&e[n[s]].claim_order<=a?s+1:jt(1,s,h=>e[n[h]].claim_order,a))-1;i[l]=n[f]+1;const _=f+1;n[_]=l,s=Math.max(_,s)}const o=[],r=[];let c=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);c>=l;c--)r.push(e[c]);c--}for(;c>=0;c--)r.push(e[c]);o.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<o.length&&r[l].claim_order>=o[a].claim_order;)a++;const f=a<o.length?o[a]:null;t.insertBefore(r[l],f)}}function yt(t,e){t.appendChild(e)}function gt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Lt(t){const e=Y("style");return Ot(gt(t),e),e.sheet}function Ot(t,e){return yt(t.head||t,e),e.sheet}function Pt(t,e){if(X){for(Dt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ht(t,e,n){t.insertBefore(e,n||null)}function Rt(t,e,n){X&&!n?Pt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function j(t){t.parentNode&&t.parentNode.removeChild(t)}function ge(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function bt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function st(t){return document.createTextNode(t)}function be(){return st(" ")}function xe(){return st("")}function lt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function zt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Bt=["width","height"];function we(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&Bt.indexOf(i)===-1?t[i]=e[i]:zt(t,i,e[i])}function $e(t){let e;return{p(...n){e=n,e.forEach(i=>t.push(i))},r(){e.forEach(n=>t.splice(t.indexOf(n),1))}}}function qt(t){return Array.from(t.childNodes)}function xt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function wt(t,e,n,i,s=!1){xt(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const c=t[r];if(e(c)){const l=n(c);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),c}}for(let r=t.claim_info.last_index-1;r>=0;r--){const c=t[r];if(e(c)){const l=n(c);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,c}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function $t(t,e,n,i){return wt(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const c=s.attributes[r];n[c.name]||o.push(c.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ve(t,e,n){return $t(t,e,n,Y)}function Ee(t,e,n){return $t(t,e,n,bt)}function Wt(t,e){return wt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>st(e),!0)}function ke(t){return Wt(t," ")}function at(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function Te(t,e){const n=at(t,"HTML_TAG_START",0),i=at(t,"HTML_TAG_END",n);if(n===i)return new ut(void 0,e);xt(t);const s=t.splice(n,i-n+1);j(s[0]),j(s[s.length-1]);const o=s.slice(1,s.length-1);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new ut(o,e)}function Ne(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ae(t,e){t.value=e??""}function Ce(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Se(t,e,n){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Me(t){const e=t.querySelector(":checked");return e&&e.__value}let G;function Ft(){if(G===void 0){G=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{G=!0}}return G}function je(t,e){getComputedStyle(t).position==="static"&&(t.style.position="relative");const i=Y("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Ft();let o;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=lt(window,"message",r=>{r.source===i.contentWindow&&e()})):(i.src="about:blank",i.onload=()=>{o=lt(i.contentWindow,"resize",e),e()}),yt(t,i),()=>{(s||o&&i.contentWindow)&&o(),j(i)}}function De(t,e,n){t.classList[n?"add":"remove"](e)}function vt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,i,e),s}function Le(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const o=s.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(s)):o===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Gt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=bt(n.nodeName):this.e=Y(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Ht(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(j)}}class ut extends Gt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)Rt(this.t,this.n[n],e)}}function Oe(t,e){return new t(e)}const J=new Map;let K=0;function It(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Jt(t,e){const n={stylesheet:Lt(e),rules:{}};return J.set(t,n),n}function R(t,e,n,i,s,o,r,c=0){const l=16.666/i;let a=`{
`;for(let m=0;m<=1;m+=l){const y=e+(n-e)*o(m);a+=m*100+`%{${r(y,1-y)}}
`}const f=a+`100% {${r(n,1-n)}}
}`,_=`__svelte_${It(f)}_${c}`,h=gt(t),{stylesheet:u,rules:d}=J.get(h)||Jt(h,t);d[_]||(d[_]=!0,u.insertRule(`@keyframes ${_} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${s}ms 1 both`,K+=1,_}function z(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),K-=s,K||Kt())}function Kt(){it(()=>{K||(J.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&j(e)}),J.clear())})}function Pe(t,e,n,i){if(!e)return x;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return x;const{delay:o=0,duration:r=300,easing:c=Q,start:l=U()+o,end:a=l+r,tick:f=x,css:_}=n(t,{from:e,to:s},i);let h=!0,u=!1,d;function p(){_&&(d=R(t,0,1,r,o,c,_)),o||(u=!0)}function m(){_&&z(t,d),h=!1}return V(y=>{if(!u&&y>=l&&(u=!0),u&&y>=a&&(f(1,0),m()),!h)return!1;if(u){const w=y-l,b=0+1*c(w/r);f(b,1-b)}return!0}),p(),f(0,1),m}function He(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Qt(t,s)}}function Qt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let B;function H(t){B=t}function O(){if(!B)throw new Error("Function called outside component initialization");return B}function Re(t){O().$$.on_mount.push(t)}function ze(t){O().$$.after_update.push(t)}function Be(t){O().$$.on_destroy.push(t)}function qe(){const t=O();return(e,n,{cancelable:i=!1}={})=>{const s=t.$$.callbacks[e];if(s){const o=vt(e,n,{cancelable:i});return s.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function We(t,e){return O().$$.context.set(t,e),e}function Fe(t){return O().$$.context.get(t)}function Ge(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const C=[],ft=[];let M=[];const et=[],Et=Promise.resolve();let nt=!1;function kt(){nt||(nt=!0,Et.then(Tt))}function Ie(){return kt(),Et}function D(t){M.push(t)}function Je(t){et.push(t)}const tt=new Set;let A=0;function Tt(){if(A!==0)return;const t=B;do{try{for(;A<C.length;){const e=C[A];A++,H(e),Ut(e.$$)}}catch(e){throw C.length=0,A=0,e}for(H(null),C.length=0,A=0;ft.length;)ft.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];tt.has(n)||(tt.add(n),n())}M.length=0}while(C.length);for(;et.length;)et.pop()();nt=!1,tt.clear(),H(t)}function Ut(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}function Vt(t){const e=[],n=[];M.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),M=e}let P;function rt(){return P||(P=Promise.resolve(),P.then(()=>{P=null})),P}function N(t,e,n){t.dispatchEvent(vt(`${e?"intro":"outro"}${n}`))}const I=new Set;let k;function Ke(){k={r:0,c:[],p:k}}function Qe(){k.r||T(k.c),k=k.p}function Nt(t,e){t&&t.i&&(I.delete(t),t.i(e))}function Xt(t,e,n,i){if(t&&t.o){if(I.has(t))return;I.add(t),k.c.push(()=>{I.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ot={duration:0};function Ue(t,e,n){const i={direction:"in"};let s=e(t,n,i),o=!1,r,c,l=0;function a(){r&&z(t,r)}function f(){const{delay:h=0,duration:u=300,easing:d=Q,tick:p=x,css:m}=s||ot;m&&(r=R(t,0,1,u,h,d,m,l++)),p(0,1);const y=U()+h,w=y+u;c&&c.abort(),o=!0,D(()=>N(t,!0,"start")),c=V(b=>{if(o){if(b>=w)return p(1,0),N(t,!0,"end"),a(),o=!1;if(b>=y){const $=d((b-y)/u);p($,1-$)}}return o})}let _=!1;return{start(){_||(_=!0,z(t),L(s)?(s=s(i),rt().then(f)):f())},invalidate(){_=!1},end(){o&&(a(),o=!1)}}}function Ve(t,e,n){const i={direction:"out"};let s=e(t,n,i),o=!0,r;const c=k;c.r+=1;function l(){const{delay:a=0,duration:f=300,easing:_=Q,tick:h=x,css:u}=s||ot;u&&(r=R(t,1,0,f,a,_,u));const d=U()+a,p=d+f;D(()=>N(t,!1,"start")),V(m=>{if(o){if(m>=p)return h(0,1),N(t,!1,"end"),--c.r||T(c.c),!1;if(m>=d){const y=_((m-d)/f);h(1-y,y)}}return o})}return L(s)?rt().then(()=>{s=s(i),l()}):l(),{end(a){a&&s.tick&&s.tick(1,0),o&&(r&&z(t,r),o=!1)}}}function Xe(t,e,n,i){const s={direction:"both"};let o=e(t,n,s),r=i?0:1,c=null,l=null,a=null;function f(){a&&z(t,a)}function _(u,d){const p=u.b-r;return d*=Math.abs(p),{a:r,b:u.b,d:p,duration:d,start:u.start,end:u.start+d,group:u.group}}function h(u){const{delay:d=0,duration:p=300,easing:m=Q,tick:y=x,css:w}=o||ot,b={start:U()+d,b:u};u||(b.group=k,k.r+=1),c||l?l=b:(w&&(f(),a=R(t,r,u,p,d,m,w)),u&&y(0,1),c=_(b,p),D(()=>N(t,u,"start")),V($=>{if(l&&$>l.start&&(c=_(l,p),l=null,N(t,c.b,"start"),w&&(f(),a=R(t,r,c.b,c.duration,0,m,o.css))),c){if($>=c.end)y(r=c.b,1-r),N(t,c.b,"end"),l||(c.b?f():--c.group.r||T(c.group.c)),c=null;else if($>=c.start){const q=$-c.start;r=c.a+c.d*m(q/c.duration),y(r,1-r)}}return!!(c||l)}))}return{run(u){L(o)?rt().then(()=>{o=o(s),h(u)}):h(u)},end(){f(),c=l=null}}}function Yt(t,e){Xt(t,1,1,()=>{e.delete(t.key)})}function Ye(t,e){t.f(),Yt(t,e)}function Ze(t,e,n,i,s,o,r,c,l,a,f,_){let h=t.length,u=o.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const m=[],y=new Map,w=new Map,b=[];for(d=u;d--;){const g=_(s,o,d),v=n(g);let E=r.get(v);E?i&&b.push(()=>E.p(g,e)):(E=a(v,g),E.c()),y.set(v,m[d]=E),v in p&&w.set(v,Math.abs(d-p[v]))}const $=new Set,q=new Set;function Z(g){Nt(g,1),g.m(c,f),r.set(g.key,g),f=g.first,u--}for(;h&&u;){const g=m[u-1],v=t[h-1],E=g.key,W=v.key;g===v?(f=g.first,h--,u--):y.has(W)?!r.has(E)||$.has(E)?Z(g):q.has(W)?h--:w.get(E)>w.get(W)?(q.add(E),Z(g)):($.add(W),h--):(l(v,r),h--)}for(;h--;){const g=t[h];y.has(g.key)||l(g,r)}for(;u;)Z(m[u-1]);return T(b),m}function tn(t,e){const n={},i={},s={$$scope:1};let o=t.length;for(;o--;){const r=t[o],c=e[o];if(c){for(const l in r)l in c||(i[l]=1);for(const l in c)s[l]||(n[l]=c[l],s[l]=1);t[o]=c}else for(const l in r)s[l]=1}for(const r in i)r in n||(n[r]=void 0);return n}function en(t){return typeof t=="object"&&t!==null?t:{}}function nn(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function sn(t){t&&t.c()}function rn(t,e){t&&t.l(e)}function Zt(t,e,n,i){const{fragment:s,after_update:o}=t.$$;s&&s.m(e,n),i||D(()=>{const r=t.$$.on_mount.map(_t).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...r):T(r),t.$$.on_mount=[]}),o.forEach(D)}function te(t,e){const n=t.$$;n.fragment!==null&&(Vt(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ee(t,e){t.$$.dirty[0]===-1&&(C.push(t),kt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function on(t,e,n,i,s,o,r,c=[-1]){const l=B;H(t);const a=t.$$={fragment:null,ctx:[],props:o,update:x,not_equal:s,bound:ct(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ct(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};r&&r(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(_,h,...u)=>{const d=u.length?u[0]:h;return a.ctx&&s(a.ctx[_],a.ctx[_]=d)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](d),f&&ee(t,_)),h}):[],a.update(),f=!0,T(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){St();const _=qt(e.target);a.fragment&&a.fragment.l(_),_.forEach(j)}else a.fragment&&a.fragment.c();e.intro&&Nt(t.$$.fragment),Zt(t,e.target,e.anchor,e.customElement),Mt(),Tt()}H(l)}class cn{$destroy(){te(this,1),this.$destroy=x}$on(e,n){if(!L(n))return x;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!Ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{en as $,Zt as A,te as B,oe as C,le as D,ae as E,ce as F,We as G,At as H,ue as I,bt as J,Ee as K,Pt as L,lt as M,T as N,_e as O,qe as P,Fe as Q,D as R,cn as S,Xe as T,x as U,dt as V,Ge as W,L as X,re as Y,me as Z,tn as _,be as a,ie as a0,we as a1,Ae as a2,ut as a3,Te as a4,ye as a5,Le as a6,he as a7,Ze as a8,He as a9,Qt as aa,Pe as ab,Ue as ac,Ve as ad,Ye as ae,ge as af,De as ag,$e as ah,fe as ai,se as aj,de as ak,Se as al,Me as am,je as an,nn as ao,Je as ap,Be as aq,Q as ar,pe as as,Rt as b,ke as c,Xt as d,xe as e,Qe as f,Nt as g,j as h,on as i,ze as j,Y as k,ve as l,qt as m,zt as n,Re as o,Ce as p,st as q,Wt as r,ne as s,Ie as t,Ne as u,Ke as v,ft as w,Oe as x,sn as y,rn as z};
