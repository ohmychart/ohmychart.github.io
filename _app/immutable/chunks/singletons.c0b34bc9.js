import{F as d,s as m}from"./index.3e30f378.js";const c=[];function p(e,t=d){let n;const o=new Set;function l(s){if(m(e,s)&&(e=s,n)){const u=!c.length;for(const i of o)i[1](),c.push(i,e);if(u){for(let i=0;i<c.length;i+=2)c[i][0](c[i+1]);c.length=0}}}function r(s){l(s(e))}function a(s,u=d){const i=[s,u];return o.add(i),o.size===1&&(n=t(l)||d),s(e),()=>{o.delete(i),o.size===0&&n&&(n(),n=null)}}return{set:l,update:r,subscribe:a}}var g;const E=((g=globalThis.__sveltekit_1cputub)==null?void 0:g.base)??"";var k;const w=((k=globalThis.__sveltekit_1cputub)==null?void 0:k.assets)??E,A="1683027478631",I="sveltekit:snapshot",x="sveltekit:scroll",O="sveltekit:index",b={tap:1,hover:2,viewport:3,eager:4,off:-1};function U(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function L(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const _={...b,"":b.hover};function v(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function N(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function P(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,l=!n||!!o||S(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),r=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:l,target:o,download:r}}function V(e){let t=null,n=null,o=null,l=null,r=null,a=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),l===null&&(l=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),r===null&&(r=f(s,"reload")),a===null&&(a=f(s,"replacestate")),s=v(s);return{preload_code:_[o??"off"],preload_data:_[l??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:r==="off"?!1:r===""?!0:null,replace_state:a==="off"?!1:a===""?!0:null}}function h(e){const t=p(e);let n=!0;function o(){n=!0,t.update(a=>a)}function l(a){n=!1,t.set(a)}function r(a){let s;return t.subscribe(u=>{(s===void 0||n&&u!==s)&&a(s=u)})}return{notify:o,set:l,subscribe:r}}function R(){const{set:e,subscribe:t}=p(!1);let n;async function o(){clearTimeout(n);try{const l=await fetch(`${w}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!l.ok)return!1;const a=(await l.json()).version!==A;return a&&(e(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:t,check:o}}function S(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let T;function Y(e){T=e.client}const j={url:h({}),page:h({}),navigating:p(null),updated:R()};export{O as I,b as P,x as S,I as a,P as b,V as c,L as d,E as e,N as f,U as g,Y as h,S as i,T as j,j as s,p as w};