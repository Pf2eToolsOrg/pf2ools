import{w as k}from"./index.6705a80d.js";import{al as q}from"./index.be22c6cd.js";k(void 0);const P=k(void 0);function B(e){return e instanceof Node}function re(e,t){if(!t.event||!t.target)return;const{computePosition:s,autoUpdate:r,flip:i,shift:l,offset:a,arrow:m}=q(P),o=document.querySelector(`[data-popup="${t.target}"]`),g=(o==null?void 0:o.querySelector(".arrow"))??null;let c=!1,p;const E=':is(a[href], button, input, textarea, select, details, [tabindex]):not([tabindex="-1"])';let u,w;function x(){var f,d,h,y;if(!o||!s)return;const n=[];a&&n.push(a(((f=t.middleware)==null?void 0:f.offset)??8)),l&&n.push(l(((d=t.middleware)==null?void 0:d.shift)??{padding:8})),i&&n.push(i((h=t.middleware)==null?void 0:h.flip)),m&&g&&n.push(m(((y=t.middleware)==null?void 0:y.arrow)??{element:g})),s(e,o,{placement:t.placement??"bottom",middleware:n}).then(({x:F,y:Q,placement:H,middlewareData:V})=>{if(Object.assign(o.style,{left:`${F}px`,top:`${Q}px`}),g){const{x:O,y:U}=V.arrow,W={top:"bottom",right:"left",bottom:"top",left:"right"}[H.split("-")[0]];Object.assign(g.style,{left:O!=null?`${O}px`:"",top:U!=null?`${U}px`:"",right:"",bottom:"",[W]:"-4px"})}A()})}function A(){var n;o&&(w=Array.from(o==null?void 0:o.querySelectorAll(E)),u=-1,u=0,t.event!=="focus"&&t.event!=="focus-click"&&((n=w[0])==null||n.focus()))}function _(n){if(!n)return;const f=!t.closeQuery||t.closeQuery===""?"a[href], button":t.closeQuery,d=o==null?void 0:o.querySelectorAll(f);d!=null&&d.length&&d.forEach(h=>{h.contains(n)&&v()})}const L=n=>{if(!e||!o)return;e.contains(n.target)?c==!1?b():v():o&&!o.contains(n.target)?v():_(n.target)},N=()=>{b(),c=!0,D(!0)},$=()=>{v(),c=!1,D(!1)};function C(){c||e.focus()}function S(n){n.relatedTarget instanceof Element&&(o!=null&&o.contains(n.relatedTarget)||e.isSameNode(n.relatedTarget))||v()}function I(n){if(n.preventDefault(),B(document.activeElement)){if(!e.isSameNode(document.activeElement)){e.focus();return}c?v():b()}}function b(){o&&(x(),o.style.display="block",o.style.opacity="1",c=!0,D(!0),p=r(e,o,x))}function v(){if(!o)return;o.style.opacity="0";const n=parseFloat(window.getComputedStyle(o).transitionDuration.replace("s",""))*1e3;setTimeout(()=>{o.style.display="none",c=!1,D(!1)},n),p&&p()}const D=n=>{t.state&&t.state({state:n})},M=n=>{var d,h,y;if(!c)return;const f=n.key;if(f==="Escape"||document.activeElement===e&&f==="Tab"){n.preventDefault(),v(),e.focus();return}else f==="ArrowDown"?(n.preventDefault(),u<w.length-1&&(u+=1,(d=w[u])==null||d.focus())):f==="ArrowUp"&&(n.preventDefault(),u>0?(u-=1,(h=w[u])==null||h.focus()):w.length&&u===-1&&(n.preventDefault(),u=w.length-1,(y=w[u])==null||y.focus()))};if(x(),t.event==="click"&&window.addEventListener("click",L,!0),t.event==="hover"&&(e.addEventListener("mouseover",b,!0),e.addEventListener("mouseout",v,!0)),t.event==="hover-click"&&(e.addEventListener("mouseover",b,!0),window.addEventListener("click",L,!0)),t.event==="focus"||t.event==="focus-click"){if(!o)return;e.addEventListener("focusin",b,!0),e.addEventListener("focusout",S,!0),o.addEventListener("focusin",C,!0),o.addEventListener("focusout",S,!0),o.addEventListener("click",L,!0)}return t.event==="focus-click"&&e.addEventListener("mousedown",I,!0),window.addEventListener("keydown",M,!0),{update(n){t=n,x()},destroy(){window.removeEventListener("click",L,!0),e.removeEventListener("mouseover",N,!0),e.removeEventListener("mouseout",$,!0),e.removeEventListener("focusin",b,!0),e.removeEventListener("focusout",S,!0),e.removeEventListener("mousedown",I,!0),o==null||o.removeEventListener("focusin",C,!0),o==null||o.removeEventListener("focusout",S,!0),window.removeEventListener("keydown",M,!0)}}}function J(){const{subscribe:e,set:t,update:s}=k({});return{subscribe:e,set:t,update:s,open:r=>s(()=>({open:!0,...r})),close:()=>s(r=>(r.open=!1,r))}}const se=J();function K(){const{subscribe:e,set:t,update:s}=k([]);return{subscribe:e,set:t,update:s,trigger:r=>s(i=>(i.push(r),i)),close:()=>s(r=>(r.length>0&&r.shift(),r)),clear:()=>t([])}}K();const X={message:"Missing Toast Message",autohide:!0,timeout:5e3};function Y(){const e=Math.random();return Number(e).toString(32)}function G(e){if(e.autohide===!0)return setTimeout(()=>{Z.close(e.id)},e.timeout)}function R(){const{subscribe:e,set:t,update:s}=k([]);return{subscribe:e,trigger:r=>s(i=>{const l=Y();r&&r.callback&&r.callback({id:l,status:"queued"});const a={...X,...r,id:l};return a.timeoutId=G(a),i.push(a),i}),close:r=>s(i=>{if(i.length>0){const l=i.findIndex(m=>m.id===r),a=i[l];a&&(a.callback&&a.callback({id:r,status:"closed"}),a.timeoutId&&clearTimeout(a.timeoutId),i.splice(l,1))}return i}),clear:()=>t([])}}const Z=R(),T={};function j(e){return e==="local"?localStorage:sessionStorage}function z(e,t,s){const r=(s==null?void 0:s.serializer)??JSON,i=(s==null?void 0:s.storage)??"local",l=typeof window<"u"&&typeof document<"u";function a(m,o){l&&j(i).setItem(m,r.stringify(o))}if(!T[e]){const m=k(t,c=>{const p=l?j(i).getItem(e):null;if(p&&c(r.parse(p)),l){const E=u=>{u.key===e&&c(u.newValue?r.parse(u.newValue):null)};return window.addEventListener("storage",E),()=>window.removeEventListener("storage",E)}}),{subscribe:o,set:g}=m;T[e]={set(c){a(e,c),g(c)},update(c){const p=c(q(m));a(e,p),g(p)},subscribe:o}}return T[e]}z("modeOsPrefers",!1);const ee=z("modeUserPrefers",void 0),te=z("modeCurrent",!1);function ie(e){ee.set(e)}function ce(e){const t=document.documentElement.classList,s="dark";e===!0?t.remove(s):t.add(s),te.set(e)}function ae(){const e=document.documentElement.classList,t=localStorage.getItem("modeUserPrefers")==="false",s=!("modeUserPrefers"in localStorage),r=window.matchMedia("(prefers-color-scheme: dark)").matches;t||s&&r?e.add("dark"):e.remove("dark")}function ue(e){return e&&typeof e=="object"&&!Array.isArray(e)}function le(){let e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e}function de(e=[],t=""){return typeof e=="object"&&(e=Object.keys(e)),e.length===1?t:`${t}s`}export{ie as a,ce as b,P as c,se as d,le as e,ee as f,de as g,ue as i,z as l,te as m,re as p,ae as s,Z as t};
