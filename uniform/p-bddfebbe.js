let t,e,n,l=!1,o=!1,s=!1,r=0,i=!1;const c="undefined"!=typeof window?window:{},a=c.CSS,f=c.document||{head:{}},u={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},m=(()=>(f.head.attachShadow+"").indexOf("[native")>-1)(),p=t=>Promise.resolve(t),$=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),d=new WeakMap,h=t=>"sc-"+t,y={},w=t=>"object"==(t=typeof t)||"function"===t,b=(t,e,...n)=>{let l=null,o=null,s=!1,r=!1,i=[];const c=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof t&&!w(l))&&(l+=""),s&&r?i[i.length-1].o+=l:i.push(s?_(null,l):l),r=s)};if(c(n),e){e.name&&(o=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}const a=_(t,null);return a.s=e,i.length>0&&(a.u=i),a.p=o,a},_=(t,e)=>({t:0,$:t,o:e,h:null,u:null,s:null,p:null}),j={},v=(t,e,n,l,o,s)=>{if(n!==l){let i=nt(t,e),a=e.toLowerCase();if("class"===e){const e=t.classList,o=M(n),s=M(l);e.remove(...o.filter(t=>t&&!s.includes(t))),e.add(...s.filter(t=>t&&!o.includes(t)))}else if("style"===e){for(const e in n)l&&null!=l[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in l)n&&l[e]===n[e]||(e.includes("-")?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if(i||"o"!==e[0]||"n"!==e[1]){const c=w(l);if((i||c&&null!==l)&&!o)try{if(t.tagName.includes("-"))t[e]=l;else{let o=null==l?"":l;"list"===e?i=!1:null!=n&&t[e]==o||(t[e]=o)}}catch(r){}null==l||!1===l?t.removeAttribute(e):(!i||4&s||o)&&!c&&t.setAttribute(e,l=!0===l?"":l)}else e="-"===e[2]?e.slice(3):nt(c,a)?a.slice(2):a[2]+e.slice(3),n&&u.rel(t,e,n,!1),l&&u.ael(t,e,l,!1)}},g=/\s/,M=t=>t?t.split(g):[],R=(t,e,n,l)=>{const o=11===e.h.nodeType&&e.h.host?e.h.host:e.h,s=t&&t.s||y,r=e.s||y;for(l in s)l in r||v(o,l,s[l],void 0,n,e.t);for(l in r)v(o,l,s[l],r[l],n,e.t)},k=(o,r,i,c)=>{let a,u,m,p=r.u[i],$=0;if(l||(s=!0,"slot"===p.$&&(t&&c.classList.add(t+"-s"),p.t|=p.u?2:1)),null!==p.o)a=p.h=f.createTextNode(p.o);else if(1&p.t)a=p.h=f.createTextNode("");else if(a=p.h=f.createElement(2&p.t?"slot-fb":p.$),R(null,p,!1),null!=t&&a["s-si"]!==t&&a.classList.add(a["s-si"]=t),p.u)for($=0;$<p.u.length;++$)u=k(o,p,$,a),u&&a.appendChild(u);return a["s-hn"]=n,3&p.t&&(a["s-sr"]=!0,a["s-cr"]=e,a["s-sn"]=p.p||"",m=o&&o.u&&o.u[i],m&&m.$===p.$&&o.h&&S(o.h,!1)),a},S=(t,e)=>{u.t|=1;const l=t.childNodes;for(let o=l.length-1;o>=0;o--){const t=l[o];t["s-hn"]!==n&&t["s-ol"]&&(P(t).insertBefore(t,C(t)),t["s-ol"].remove(),t["s-ol"]=void 0,s=!0),e&&S(t,e)}u.t&=-2},U=(t,e,l,o,s,r)=>{let i,c=t["s-cr"]&&t["s-cr"].parentNode||t;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);s<=r;++s)o[s]&&(i=k(null,l,s,t),i&&(o[s].h=i,c.insertBefore(i,C(e))))},L=(t,e,n,l,s)=>{for(;e<=n;++e)(l=t[e])&&(o=!0,(s=l.h)["s-ol"]?s["s-ol"].remove():S(s,!0),s.remove())},O=(t,e)=>t.$===e.$&&("slot"!==t.$||t.p===e.p),C=t=>t&&t["s-ol"]||t,P=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,T=(t,e)=>{const n=e.h=t.h,l=t.u,o=e.u,s=e.o;let r;null===s?("slot"===e.$||R(t,e,!1),null!==l&&null!==o?((t,e,n,l)=>{let o,s=0,r=0,i=e.length-1,c=e[0],a=e[i],f=l.length-1,u=l[0],m=l[f];for(;s<=i&&r<=f;)null==c?c=e[++s]:null==a?a=e[--i]:null==u?u=l[++r]:null==m?m=l[--f]:O(c,u)?(T(c,u),c=e[++s],u=l[++r]):O(a,m)?(T(a,m),a=e[--i],m=l[--f]):O(c,m)?("slot"!==c.$&&"slot"!==m.$||S(c.h.parentNode,!1),T(c,m),t.insertBefore(c.h,a.h.nextSibling),c=e[++s],m=l[--f]):O(a,u)?("slot"!==c.$&&"slot"!==m.$||S(a.h.parentNode,!1),T(a,u),t.insertBefore(a.h,c.h),a=e[--i],u=l[++r]):(o=k(e&&e[r],n,r,t),u=l[++r],o&&P(c.h).insertBefore(o,C(c.h)));s>i?U(t,null==l[f+1]?null:l[f+1].h,n,l,r,f):r>f&&L(e,s,i)})(n,l,e,o):null!==o?(null!==t.o&&(n.textContent=""),U(n,null,e,o,0,o.length-1)):null!==l&&L(l,0,l.length-1)):(r=n["s-cr"])?r.parentNode.textContent=s:t.o!==s&&(n.data=s)},x=t=>{let e,n,l,o,s,r,i=t.childNodes;for(n=0,l=i.length;n<l;n++)if(e=i[n],1===e.nodeType){if(e["s-sr"])for(s=e["s-sn"],e.hidden=!1,o=0;o<l;o++)if(i[o]["s-hn"]!==e["s-hn"])if(r=i[o].nodeType,""!==s){if(1===r&&s===i[o].getAttribute("slot")){e.hidden=!0;break}}else if(1===r||3===r&&""!==i[o].textContent.trim()){e.hidden=!0;break}x(e)}},A=[],E=t=>{let e,n,l,s,r,i,c=0,a=t.childNodes,f=a.length;for(;c<f;c++){if(e=a[c],e["s-sr"]&&(n=e["s-cr"]))for(l=n.parentNode.childNodes,s=e["s-sn"],i=l.length-1;i>=0;i--)n=l[i],n["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||(F(n,s)?(r=A.find(t=>t._===n),o=!0,n["s-sn"]=n["s-sn"]||s,r?r.j=e:A.push({j:e,_:n}),n["s-sr"]&&A.map(t=>{F(t._,n["s-sn"])&&(r=A.find(t=>t._===n),r&&!t.j&&(t.j=r.j))})):A.some(t=>t._===n)||A.push({_:n}));1===e.nodeType&&E(e)}},F=(t,e)=>1===t.nodeType?null===t.getAttribute("slot")&&""===e||t.getAttribute("slot")===e:t["s-sn"]===e||""===e,H=t=>Z(t).v,N=(t,e,n)=>{const l=H(t);return{emit:t=>W(l,e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t})}},W=(t,e,n)=>{const l=new CustomEvent(e,n);return t.dispatchEvent(l),l},q=(t,e)=>{e&&!t.g&&e["s-p"].push(new Promise(e=>t.g=e))},B=(t,e)=>{if(t.t|=16,4&t.t)return void(t.t|=512);const n=t.M,l=()=>V(t,n,e);return q(t,t.R),I(void 0,()=>$t(l))},V=(r,i,c)=>{const a=r.v,p=a["s-rc"];c&&(t=>{const e=t.k,n=t.v,l=e.t,o=((t,e)=>{let n=h(e.S),l=rt.get(n);if(t=11===t.nodeType?t:f,l)if("string"==typeof l){let e,o=d.get(t=t.head||t);o||d.set(t,o=new Set),o.has(n)||(e=f.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),o&&o.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(m&&n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(r),((r,i)=>{const c=r.v,a=r.k,p=r.U||_(null,null),$=(t=>t&&t.$===j)(i)?i:b(null,null,i);if(n=c.tagName,$.$=null,$.t|=4,r.U=$,$.h=p.h=c.shadowRoot||c,t=c["s-sc"],e=c["s-cr"],l=m&&0!=(1&a.t),o=!1,T(p,$),s){let t,e,n,l,o,s;u.t|=1,E($.h);let r=0;for(;r<A.length;r++)t=A[r],e=t._,e["s-ol"]||(n=f.createTextNode(""),n["s-nr"]=e,e.parentNode.insertBefore(e["s-ol"]=n,e));for(r=0;r<A.length;r++)if(t=A[r],e=t._,t.j){for(l=t.j.parentNode,o=t.j.nextSibling,n=e["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===e["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==e.parentNode||e.nextSibling!==o)&&e!==o&&(!e["s-hn"]&&e["s-ol"]&&(e["s-hn"]=e["s-ol"].parentNode.nodeName),l.insertBefore(e,o))}else 1===e.nodeType&&(e.hidden=!0);u.t&=-2}o&&x($.h),A.length=0})(r,z(i)),r.t&=-17,r.t|=2,p&&(p.map(t=>t()),a["s-rc"]=void 0);{const t=a["s-p"],e=()=>D(r);0===t.length?e():(Promise.all(t).then(e),r.t|=4,t.length=0)}},z=t=>{try{t=t.render()}catch(e){lt(e)}return t},D=t=>{const e=t.v,n=t.R;64&t.t||(t.t|=64,J(e),t.L(e),n||G()),t.g&&(t.g(),t.g=void 0),512&t.t&&pt(()=>B(t,!1)),t.t&=-517},G=()=>{J(f.documentElement),u.t|=2,pt(()=>W(c,"appload",{detail:{namespace:"uniform"}}))},I=(t,e)=>t&&t.then?t.then(e):e(),J=t=>t.classList.add("hydrated"),K=(t,e,n)=>{if(e.O){t.watchers&&(e.C=t.watchers);const l=Object.entries(e.O),o=t.prototype;if(l.map(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return((t,e)=>Z(this).P.get(e))(0,t)},set(n){((t,e,n,l)=>{const o=Z(this),s=o.P.get(e),r=o.t,i=o.M;if(n=((t,e)=>null==t||w(t)?t:4&e?"false"!==t&&(""===t||!!t):1&e?t+"":t)(n,l.O[e][0]),!(8&r&&void 0!==s||n===s)&&(o.P.set(e,n),i)){if(l.C&&128&r){const t=l.C[e];t&&t.map(t=>{try{i[t](n,s,e)}catch(l){lt(l)}})}2==(18&r)&&B(o,!1)}})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,l){u.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},Q=t=>{(t=>{if(t&&t.connectedCallback)try{t.connectedCallback(void 0)}catch(e){lt(e)}})(t)},X=(t,e={})=>{const n=[],l=e.exclude||[],o=c.customElements,s=f.head,r=s.querySelector("meta[charset]"),i=f.createElement("style"),a=[];let p,d=!0;Object.assign(u,e),u.l=new URL(e.resourcesUrl||"./",f.baseURI).href,e.syncQueue&&(u.t|=4),t.map(t=>t[1].map(e=>{const s={t:e[0],S:e[1],O:e[2],T:e[3]};s.O=e[2],s.C={},!m&&1&s.t&&(s.t|=8);const r=s.S,i=class extends HTMLElement{constructor(t){super(t),et(t=this,s),1&s.t&&(m?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){p&&(clearTimeout(p),p=null),d?a.push(this):u.jmp(()=>(t=>{if(0==(1&u.t)){const e=Z(t),n=e.k,l=()=>{};if(1&e.t)Q(e.M);else{e.t|=1,12&n.t&&(t=>{const e=t["s-cr"]=f.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)})(t);{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){q(e,e.R=n);break}}n.O&&Object.entries(n.O).map(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),(async(t,e,n,l,o)=>{if(0==(32&e.t)){e.t|=32;{if((o=st(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(n.C=o.watchers,K(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(i){lt(i)}e.t&=-9,e.t|=128,t(),Q(e.M)}const t=h(n.S);if(!rt.has(t)&&o.style){const e=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_uniform("./p-0f45a80d.js").then(e=>e.scopeCss(l,t,!1))),((t,e,n)=>{let l=rt.get(t);$&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,rt.set(t,l)})(t,l,!!(1&n.t)),e()}}const s=e.R,r=()=>B(e,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(0,e,n)}l()}})(this))}disconnectedCallback(){u.jmp(()=>{})}forceUpdate(){(()=>{{const t=Z(this);t.v.isConnected&&2==(18&t.t)&&B(t,!1)}})()}componentOnReady(){return Z(this).A}};s.F=t[0],l.includes(r)||o.get(r)||(n.push(r),o.define(r,K(i,s,1)))})),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),s.insertBefore(i,r?r.nextSibling:s.firstChild),d=!1,a.length?a.map(t=>t.connectedCallback()):u.jmp(()=>p=setTimeout(G,30))},Y=new WeakMap,Z=t=>Y.get(t),tt=(t,e)=>Y.set(e.M=t,e),et=(t,e)=>{const n={t:0,v:t,k:e,P:new Map};return n.A=new Promise(t=>n.L=t),t["s-p"]=[],t["s-rc"]=[],Y.set(t,n)},nt=(t,e)=>e in t,lt=t=>console.error(t),ot=new Map,st=t=>{const e=t.S.replace(/-/g,"_"),n=t.F,l=ot.get(n);return l?l[e]:__sc_import_uniform(`./${n}.entry.js`).then(t=>(ot.set(n,t),t[e]),lt)},rt=new Map,it=[],ct=[],at=[],ft=(t,e)=>n=>{t.push(n),i||(i=!0,e&&4&u.t?pt(mt):u.raf(mt))},ut=(t,e)=>{let n=0,l=0;for(;n<t.length&&(l=performance.now())<e;)try{t[n++](l)}catch(o){lt(o)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},mt=()=>{r++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){lt(e)}t.length=0})(it);const t=2==(6&u.t)?performance.now()+10*Math.ceil(r*(1/22)):1/0;ut(ct,t),ut(at,t),ct.length>0&&(at.push(...ct),ct.length=0),(i=it.length+ct.length+at.length>0)?u.raf(mt):r=0},pt=t=>p().then(t),$t=ft(ct,!0),dt=()=>a&&a.supports&&a.supports("color","var(--c)")?p():__sc_import_uniform("./p-5570121a.js").then(()=>(u.H=c.__cssshim)?(!1).i():0),ht=()=>{u.H=c.__cssshim;const t=Array.from(f.querySelectorAll("script")).find(t=>/\/uniform(\.esm)?\.js($|\?|#)/.test(t.src)||"uniform"===t.getAttribute("data-stencil-namespace")),e=t["data-opts"]||{};return"onbeforeload"in t&&!history.scrollRestoration?{then(){}}:(e.resourcesUrl=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,c.location.href)).href,yt(e.resourcesUrl,t),c.customElements?p(e):__sc_import_uniform("./p-56487acc.js").then(()=>e))},yt=(t,e)=>{try{c.__sc_import_uniform=Function("w",`return import(w);//${Math.random()}`)}catch(n){const l=new Map;c.__sc_import_uniform=n=>{const o=new URL(n,t).href;let s=l.get(o);if(!s){const t=f.createElement("script");t.type="module",t.crossOrigin=e.crossOrigin,t.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.__sc_import_uniform.m = m;`],{type:"application/javascript"})),s=new Promise(e=>{t.onload=()=>{e(c.__sc_import_uniform.m),t.remove()}}),l.set(o,s),f.head.appendChild(t)}return s}}};export{j as H,dt as a,X as b,N as c,H as g,b as h,ht as p,tt as r}