import{w as v}from"./index.363b4140.js";import{ab as x,ac as U,ad as b}from"./index.69e6a8df.js";const C={message:"Missing Toast Message",autohide:!0,timeout:5e3};function M(){const e=Math.random();return Number(e).toString(32)}function I(e){if(e.autohide===!0)return setTimeout(()=>{F.close(e.id)},e.timeout)}function P(){const{subscribe:e,set:a,update:s}=v([]);return{subscribe:e,trigger:r=>s(o=>{const t=M();r&&r.callback&&r.callback({id:t,status:"queued"});const n={...C,...r,id:t};return n.timeoutId=I(n),o.push(n),o}),close:r=>s(o=>{if(o.length>0){const t=o.findIndex(i=>i.id===r),n=o[t];n&&(n.callback&&n.callback({id:r,status:"closed"}),n.timeoutId&&clearTimeout(n.timeoutId),o.splice(t,1))}return o}),clear:()=>a([])}}const F=P(),y={};function w(e){return e==="local"?localStorage:sessionStorage}function h(e,a,s){const r=(s==null?void 0:s.serializer)??JSON,o=(s==null?void 0:s.storage)??"local",t=typeof window<"u"&&typeof document<"u";function n(i,m){t&&w(o).setItem(i,r.stringify(m))}if(!y[e]){const i=v(a,c=>{const u=t?w(o).getItem(e):null;if(u&&c(r.parse(u)),t){const p=f=>{f.key===e&&c(f.newValue?r.parse(f.newValue):null)};return window.addEventListener("storage",p),()=>window.removeEventListener("storage",p)}}),{subscribe:m,set:d}=i;y[e]={set(c){n(e,c),d(c)},update(c){const u=c(x(i));n(e,u),d(u)},subscribe:m}}return y[e]}h("modeOsPrefers",!1);const L=h("modeUserPrefers",void 0),E=h("modeCurrent",!1);function V(e){L.set(e)}function z(e){const a=document.documentElement.classList,s="dark";e===!0?a.remove(s):a.add(s),E.set(e)}function D(){const e=document.documentElement.classList,a=localStorage.getItem("modeUserPrefers")==="false",s=!("modeUserPrefers"in localStorage),r=window.matchMedia("(prefers-color-scheme: dark)").matches;a||s&&r?e.add("dark"):e.remove("dark")}function S(e){const a=e-1;return a*a*a+1}function H(e,{delay:a=0,duration:s=400,easing:r=U}={}){const o=+getComputedStyle(e).opacity;return{delay:a,duration:s,easing:r,css:t=>`opacity: ${t*o}`}}function O(e,{delay:a=0,duration:s=400,easing:r=S,x:o=0,y:t=0,opacity:n=0}={}){const i=getComputedStyle(e),m=+i.opacity,d=i.transform==="none"?"":i.transform,c=m*(1-n),[u,p]=b(o),[f,_]=b(t);return{delay:a,duration:s,easing:r,css:(g,$)=>`
			transform: ${d} translate(${(1-g)*u}${p}, ${(1-g)*f}${_});
			opacity: ${m-c*$}`}}function N(e,{delay:a=0,duration:s=400,easing:r=S,axis:o="y"}={}){const t=getComputedStyle(e),n=+t.opacity,i=o==="y"?"height":"width",m=parseFloat(t[i]),d=o==="y"?["top","bottom"]:["left","right"],c=d.map(l=>`${l[0].toUpperCase()}${l.slice(1)}`),u=parseFloat(t[`padding${c[0]}`]),p=parseFloat(t[`padding${c[1]}`]),f=parseFloat(t[`margin${c[0]}`]),_=parseFloat(t[`margin${c[1]}`]),g=parseFloat(t[`border${c[0]}Width`]),$=parseFloat(t[`border${c[1]}Width`]);return{delay:a,duration:s,easing:r,css:l=>`overflow: hidden;opacity: ${Math.min(l*20,1)*n};${i}: ${l*m}px;padding-${d[0]}: ${l*u}px;padding-${d[1]}: ${l*p}px;margin-${d[0]}: ${l*f}px;margin-${d[1]}: ${l*_}px;border-${d[0]}-width: ${l*g}px;border-${d[1]}-width: ${l*$}px;`}}export{H as a,D as b,S as c,V as d,z as e,O as f,h as l,E as m,N as s,F as t};
