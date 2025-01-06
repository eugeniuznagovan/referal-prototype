import{a as ge,c as ye}from"./chunk-FIRXXYNY.js";var n={allRenderFn:!1,cmpDidLoad:!0,cmpDidUnload:!1,cmpDidUpdate:!0,cmpDidRender:!0,cmpWillLoad:!0,cmpWillUpdate:!0,cmpWillRender:!0,connectedCallback:!0,disconnectedCallback:!0,element:!0,event:!0,hasRenderFn:!0,lifecycle:!0,hostListener:!0,hostListenerTargetWindow:!0,hostListenerTargetDocument:!0,hostListenerTargetBody:!0,hostListenerTargetParent:!1,hostListenerTarget:!0,member:!0,method:!0,mode:!0,observeAttribute:!0,prop:!0,propMutable:!0,reflect:!0,scoped:!0,shadowDom:!0,slot:!0,cssAnnotations:!0,state:!0,style:!0,formAssociated:!1,svg:!0,updatable:!0,vdomAttribute:!0,vdomXlink:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomRef:!0,vdomPropOrAttr:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,watchCallback:!0,taskQueue:!0,hotModuleReplacement:!1,isDebug:!1,isDev:!1,isTesting:!1,hydrateServerSide:!1,hydrateClientSide:!1,lifecycleDOMEvents:!1,lazyLoad:!1,profile:!1,slotRelocation:!0,appendChildSlotFix:!1,cloneNodeFix:!1,hydratedAttribute:!1,hydratedClass:!0,scriptDataOpts:!1,scopedSlotTextContentFix:!1,shadowDomShim:!1,slotChildNodesFix:!1,invisiblePrehydration:!0,propBoolean:!0,propNumber:!0,propString:!0,constructableCSS:!0,cmpShouldUpdate:!0,devTools:!1,shadowDelegatesFocus:!0,initializeNextTick:!1,asyncLoading:!1,asyncQueue:!1,transformTagName:!1,attachStyles:!0,experimentalSlotFixes:!1};var F="app";var ft=ye({});var ut=Object.defineProperty,ht=(e,t)=>{for(var s in t)ut(e,s,{get:t[s],enumerable:!0})},Se={isDev:!!n.isDev,isBrowser:!0,isServer:!1,isTesting:!!n.isTesting},Fe=n.hotModuleReplacement?window.__STENCIL_HOSTREFS__||(window.__STENCIL_HOSTREFS__=new WeakMap):new WeakMap,L=e=>Fe.get(e);var pt=(e,t)=>{let s={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.isDev&&(s.$renderCount$=0),n.method&&n.lazyLoad&&(s.$onInstancePromise$=new Promise(o=>s.$onInstanceResolve$=o)),n.asyncLoading&&(s.$onReadyPromise$=new Promise(o=>s.$onReadyResolve$=o),e["s-p"]=[],e["s-rc"]=[]),Fe.set(e,s)},be=(e,t)=>t in e,mt,I=(e,t)=>(mt||console.error)(e,t),He=n.isTesting?["STENCIL:"]:["%cstencil","color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"],W=(...e)=>console.error(...He,...e),z=(...e)=>console.warn(...He,...e);var Le=new Map;var vt=(e,t,s)=>{let o=e.$tagName$.replace(/-/g,"_"),r=e.$lazyBundleId$;if(n.isDev&&typeof r!="string"){W(`Trying to lazily load component <${e.$tagName$}> with style mode "${t.$modeName$}", but it does not exist.`);return}else if(!r)return;let i=n.hotModuleReplacement?!1:Le.get(r);if(i)return i[o];return ft(`./${r}.entry.js${n.hotModuleReplacement&&s?"?s-hmr="+s:""}`).then(l=>(n.hotModuleReplacement||Le.set(r,l),l[o]),I)},q=new Map,Me=[],gt="r",yt="o",St="s",bt="t",ne="s-id",xe="sty-id",De="c-id";var Lt="slot-fb{display:contents}slot-fb[hidden]{display:none}",Te="http://www.w3.org/1999/xlink",xt=["formAssociatedCallback","formResetCallback","formDisabledCallback","formStateRestoreCallback"],O=typeof window<"u"?window:{},g=O.document||{head:{}},Ns=O.HTMLElement||class{},p={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,s,o)=>e.addEventListener(t,s,o),rel:(e,t,s,o)=>e.removeEventListener(t,s,o),ce:(e,t)=>new CustomEvent(e,t)},Is=e=>{Object.assign(p,e)},A=n.shadowDom,Dt=(()=>{let e=!1;try{g.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch{}return e})(),Tt=e=>Promise.resolve(e),Ct=n.constructableCSS?(()=>{try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})():!1,ee=0,Q=!1,M=[],w=[],te=[],We=(e,t)=>s=>{e.push(s),Q||(Q=!0,t&&p.$flags$&4?G(X):p.raf(X))},Ce=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(s){I(s)}e.length=0},Ne=(e,t)=>{let s=0,o=0;for(;s<e.length&&(o=performance.now())<t;)try{e[s++](o)}catch(r){I(r)}s===e.length?e.length=0:s!==0&&e.splice(0,s)},X=()=>{if(n.asyncQueue&&ee++,Ce(M),n.asyncQueue){let e=(p.$flags$&6)===2?performance.now()+14*Math.ceil(ee*.1):1/0;Ne(w,e),Ne(te,e),w.length>0&&(te.push(...w),w.length=0),(Q=M.length+w.length+te.length>0)?p.raf(X):ee=0}else Ce(w),(Q=M.length>0)&&p.raf(X)},G=e=>Tt().then(e),ks=We(M,!1),Nt=We(w,!0),ws=e=>{let t=new URL(e,p.$resourcesUrl$);return t.origin!==O.location.origin?t.href:t.pathname};var Ie={},It="http://www.w3.org/2000/svg",kt="http://www.w3.org/1999/xhtml",wt=e=>e!=null,ue=e=>(e=typeof e,e==="object"||e==="function");function At(e){var t,s,o;return(o=(s=(t=e.head)==null?void 0:t.querySelector('meta[name="csp-nonce"]'))==null?void 0:s.getAttribute("content"))!=null?o:void 0}var _t={};ht(_t,{err:()=>qe,map:()=>Et,ok:()=>oe,unwrap:()=>Ut,unwrapErr:()=>Rt});var oe=e=>({isOk:!0,isErr:!1,value:e}),qe=e=>({isOk:!1,isErr:!0,value:e});function Et(e,t){if(e.isOk){let s=t(e.value);return s instanceof Promise?s.then(o=>oe(o)):oe(s)}if(e.isErr){let s=e.value;return qe(s)}throw"should never get here"}var Ut=e=>{if(e.isOk)return e.value;throw e.value},Rt=e=>{if(e.isErr)return e.value;throw e.value},Bt=0,N=(e,t="")=>{if(n.profile&&performance.mark){let s=`st:${e}:${t}:${Bt++}`;return performance.mark(s),()=>performance.measure(`[Stencil] ${e}() <${t}>`,s)}else return()=>{}},Ot=(e,t)=>n.profile&&performance.mark?(performance.getEntriesByName(e,"mark").length===0&&performance.mark(e),()=>{performance.getEntriesByName(t,"measure").length===0&&performance.measure(t,e)}):()=>{};var Qe=(e,t,...s)=>{let o=null,r=null,i=null,l=!1,c=!1,a=[],$=f=>{for(let u=0;u<f.length;u++)o=f[u],Array.isArray(o)?$(o):o!=null&&typeof o!="boolean"&&((l=typeof e!="function"&&!ue(o))?o=String(o):n.isDev&&typeof e!="function"&&o.$flags$===void 0&&W(`vNode passed as children has unexpected type.
Make sure it's using the correct h() function.
Empty objects can also be the cause, look for JSX comments that became objects.`),l&&c?a[a.length-1].$text$+=o:a.push(l?R(null,o):o),c=l)};if($(s),t&&(n.isDev&&e==="input"&&Ft(t),n.vdomKey&&t.key&&(r=t.key),n.slotRelocation&&t.name&&(i=t.name),n.vdomClass)){let f=t.className||t.class;f&&(t.class=typeof f!="object"?f:Object.keys(f).filter(u=>f[u]).join(" "))}if(n.isDev&&a.some(re)&&W(`The <Host> must be the single root component. Make sure:
- You are NOT using hostData() and <Host> in the same component.
- <Host> is used once, and it's the single root component of the render() function.`),n.vdomFunctional&&typeof e=="function")return e(t===null?{}:t,a,zt);let d=R(e,null);return d.$attrs$=t,a.length>0&&(d.$children$=a),n.vdomKey&&(d.$key$=r),n.slotRelocation&&(d.$name$=i),d},R=(e,t)=>{let s={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return n.vdomAttribute&&(s.$attrs$=null),n.vdomKey&&(s.$key$=null),n.slotRelocation&&(s.$name$=null),s},jt={},re=e=>e&&e.$tag$===jt,zt={forEach:(e,t)=>e.map(ke).forEach(t),map:(e,t)=>e.map(ke).map(t).map(Pt)},ke=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),Pt=e=>{if(typeof e.vtag=="function"){let s=ge({},e.vattrs);return e.vkey&&(s.key=e.vkey),e.vname&&(s.name=e.vname),Qe(e.vtag,s,...e.vchildren||[])}let t=R(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},Ft=e=>{let t=Object.keys(e),s=t.indexOf("value");if(s===-1)return;let o=t.indexOf("type"),r=t.indexOf("min"),i=t.indexOf("max"),l=t.indexOf("step");(s<o||s<r||s<i||s<l)&&z('The "value" prop of <input> should be set after "min", "max", "type" and "step"')},Ht=(e,t,s,o)=>{let r=N("hydrateClient",t),i=e.shadowRoot,l=[],c=[],a=n.shadowDom&&i?[]:null,$=o.$vnode$=R(t,null);p.$orgLocNodes$||ae(g.body,p.$orgLocNodes$=new Map),e[ne]=s,e.removeAttribute(ne),ie($,l,c,a,e,e,s),l.map(d=>{let f=d.$hostId$+"."+d.$nodeId$,u=p.$orgLocNodes$.get(f),h=d.$elm$;u&&A&&u["s-en"]===""&&u.parentNode.insertBefore(h,u.nextSibling),i||(h["s-hn"]=t,u&&(h["s-ol"]=u,h["s-ol"]["s-nr"]=h)),p.$orgLocNodes$.delete(f)}),n.shadowDom&&i&&a.map(d=>{d&&i.appendChild(d)}),r()},ie=(e,t,s,o,r,i,l)=>{let c,a,$,d;if(i.nodeType===1){if(c=i.getAttribute(De),c&&(a=c.split("."),(a[0]===l||a[0]==="0")&&($={$flags$:0,$hostId$:a[0],$nodeId$:a[1],$depth$:a[2],$index$:a[3],$tag$:i.tagName.toLowerCase(),$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null},t.push($),i.removeAttribute(De),e.$children$||(e.$children$=[]),e.$children$[$.$index$]=$,e=$,o&&$.$depth$==="0"&&(o[$.$index$]=$.$elm$))),i.shadowRoot)for(d=i.shadowRoot.childNodes.length-1;d>=0;d--)ie(e,t,s,o,r,i.shadowRoot.childNodes[d],l);for(d=i.childNodes.length-1;d>=0;d--)ie(e,t,s,o,r,i.childNodes[d],l)}else if(i.nodeType===8)a=i.nodeValue.split("."),(a[1]===l||a[1]==="0")&&(c=a[0],$={$flags$:0,$hostId$:a[1],$nodeId$:a[2],$depth$:a[3],$index$:a[4],$elm$:i,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null},c===bt?($.$elm$=i.nextSibling,$.$elm$&&$.$elm$.nodeType===3&&($.$text$=$.$elm$.textContent,t.push($),i.remove(),e.$children$||(e.$children$=[]),e.$children$[$.$index$]=$,o&&$.$depth$==="0"&&(o[$.$index$]=$.$elm$))):$.$hostId$===l&&(c===St?($.$tag$="slot",a[5]?i["s-sn"]=$.$name$=a[5]:i["s-sn"]="",i["s-sr"]=!0,n.shadowDom&&o&&($.$elm$=g.createElement($.$tag$),$.$name$&&$.$elm$.setAttribute("name",$.$name$),i.parentNode.insertBefore($.$elm$,i),i.remove(),$.$depth$==="0"&&(o[$.$index$]=$.$elm$)),s.push($),e.$children$||(e.$children$=[]),e.$children$[$.$index$]=$):c===gt&&(n.shadowDom&&o?i.remove():n.slotRelocation&&(r["s-cr"]=i,i["s-cn"]=!0))));else if(e&&e.$tag$==="style"){let f=R(null,i.textContent);f.$elm$=i,f.$index$="0",e.$children$=[f]}},ae=(e,t)=>{if(e.nodeType===1){let s=0;if(e.shadowRoot)for(;s<e.shadowRoot.childNodes.length;s++)ae(e.shadowRoot.childNodes[s],t);for(s=0;s<e.childNodes.length;s++)ae(e.childNodes[s],t)}else if(e.nodeType===8){let s=e.nodeValue.split(".");s[0]===yt&&(t.set(s[1]+"."+s[2],e),e.nodeValue="",e["s-en"]=s[3])}},Mt=e=>Me.map(t=>t(e)).find(t=>!!t),Os=e=>Me.push(e),js=e=>L(e).$modeName$,Wt=(e,t)=>e!=null&&!ue(e)?n.propBoolean&&t&4?e==="false"?!1:e===""||!!e:n.propNumber&&t&2?parseFloat(e):n.propString&&t&1?String(e):e:e,qt=e=>n.lazyLoad?L(e).$hostElement$:e,qs=(e,t,s)=>{let o=qt(e);return{emit:r=>(n.isDev&&!o.isConnected&&z(`The "${t}" event was emitted, but the dispatcher node is no longer connected to the dom.`),he(o,t,{bubbles:!!(s&4),composed:!!(s&2),cancelable:!!(s&1),detail:r}))}},he=(e,t,s)=>{let o=p.ce(t,s);return e.dispatchEvent(o),o},we=new WeakMap,Qt=(e,t,s)=>{let o=q.get(e);Ct&&s?(o=o||new CSSStyleSheet,typeof o=="string"?o=t:o.replaceSync(t)):o=t,q.set(e,o)},le=(e,t,s)=>{var o;let r=Xe(t,s),i=q.get(r);if(!n.attachStyles)return r;if(e=e.nodeType===11?e:g,i)if(typeof i=="string"){e=e.head||e;let l=we.get(e),c;if(l||we.set(e,l=new Set),!l.has(r)){if(n.hydrateClientSide&&e.host&&(c=e.querySelector(`[${xe}="${r}"]`)))c.innerHTML=i;else{c=g.createElement("style"),c.innerHTML=i;let a=(o=p.$nonce$)!=null?o:At(g);a!=null&&c.setAttribute("nonce",a),(n.hydrateServerSide||n.hotModuleReplacement)&&t.$flags$&2&&c.setAttribute(xe,r),(!(t.$flags$&1)||t.$flags$&1&&e.nodeName!=="HEAD")&&e.insertBefore(c,e.querySelector("link"))}t.$flags$&4&&(c.innerHTML+=Lt),l&&l.add(r)}}else n.constructableCSS&&!e.adoptedStyleSheets.includes(i)&&(e.adoptedStyleSheets=[...e.adoptedStyleSheets,i]);return r},Xt=e=>{let t=e.$cmpMeta$,s=e.$hostElement$,o=t.$flags$,r=N("attachStyles",t.$tagName$),i=le(n.shadowDom&&A&&s.shadowRoot?s.shadowRoot:s.getRootNode(),t,e.$modeName$);(n.shadowDom||n.scoped)&&n.cssAnnotations&&o&10&&o&2&&(s["s-sc"]=i,s.classList.add(i+"-h"),n.scoped&&o&2&&s.classList.add(i+"-s")),r()},Xe=(e,t)=>"sc-"+(n.mode&&t&&e.$flags$&32?e.$tagName$+"-"+t:e.$tagName$),Ae=(e,t,s,o,r,i)=>{if(s!==o){let l=be(e,t),c=t.toLowerCase();if(n.vdomClass&&t==="class"){let a=e.classList,$=_e(s),d=_e(o);a.remove(...$.filter(f=>f&&!d.includes(f))),a.add(...d.filter(f=>f&&!$.includes(f)))}else if(n.vdomStyle&&t==="style"){if(n.updatable)for(let a in s)(!o||o[a]==null)&&(!n.hydrateServerSide&&a.includes("-")?e.style.removeProperty(a):e.style[a]="");for(let a in o)(!s||o[a]!==s[a])&&(!n.hydrateServerSide&&a.includes("-")?e.style.setProperty(a,o[a]):e.style[a]=o[a])}else if(!(n.vdomKey&&t==="key")){if(n.vdomRef&&t==="ref")o&&o(e);else if(n.vdomListener&&(n.lazyLoad?!l:!e.__lookupSetter__(t))&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"?t=t.slice(3):be(O,c)?t=c.slice(2):t=c[2]+t.slice(3),s||o){let a=t.endsWith(Ke);t=t.replace(Yt,""),s&&p.rel(e,t,s,a),o&&p.ael(e,t,o,a)}}else if(n.vdomPropOrAttr){let a=ue(o);if((l||a&&o!==null)&&!r)try{if(e.tagName.includes("-"))e[t]=o;else{let d=o??"";t==="list"?l=!1:(s==null||e[t]!=d)&&(e[t]=d)}}catch{}let $=!1;n.vdomXlink&&c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,$=!0),o==null||o===!1?(o!==!1||e.getAttribute(t)==="")&&(n.vdomXlink&&$?e.removeAttributeNS(Te,t):e.removeAttribute(t)):(!l||i&4||r)&&!a&&(o=o===!0?"":o,n.vdomXlink&&$?e.setAttributeNS(Te,t,o):e.setAttribute(t,o))}}}},Kt=/\s/,_e=e=>e?e.split(Kt):[],Ke="Capture",Yt=new RegExp(Ke+"$"),Ye=(e,t,s)=>{let o=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$,r=e&&e.$attrs$||Ie,i=t.$attrs$||Ie;if(n.updatable)for(let l of Ee(Object.keys(r)))l in i||Ae(o,l,r[l],void 0,s,t.$flags$);for(let l of Ee(Object.keys(i)))Ae(o,l,r[l],i[l],s,t.$flags$)};function Ee(e){return e.includes("ref")?[...e.filter(t=>t!=="ref"),"ref"]:e}var _,ce,C,j=!1,K=!1,J=!1,b=!1,Y=(e,t,s,o)=>{var r;let i=t.$children$[s],l=0,c,a,$;if(n.slotRelocation&&!j&&(J=!0,i.$tag$==="slot"&&(_&&o.classList.add(_+"-s"),i.$flags$|=i.$children$?2:1)),n.isDev&&i.$elm$&&W(`The JSX ${i.$text$!==null?`"${i.$text$}" text`:`"${i.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`),n.vdomText&&i.$text$!==null)c=i.$elm$=g.createTextNode(i.$text$);else if(n.slotRelocation&&i.$flags$&1)c=i.$elm$=n.isDebug||n.hydrateServerSide?Jt(i):g.createTextNode("");else{if(n.svg&&!b&&(b=i.$tag$==="svg"),c=i.$elm$=n.svg?g.createElementNS(b?It:kt,!j&&n.slotRelocation&&i.$flags$&2?"slot-fb":i.$tag$):g.createElement(!j&&n.slotRelocation&&i.$flags$&2?"slot-fb":i.$tag$),n.svg&&b&&i.$tag$==="foreignObject"&&(b=!1),n.vdomAttribute&&Ye(null,i,b),!!c.getRootNode().querySelector("body")&&n.scoped&&wt(_)&&c["s-si"]!==_&&c.classList.add(c["s-si"]=_),n.scoped&&me(c,o),i.$children$)for(l=0;l<i.$children$.length;++l)a=Y(e,i,l,c),a&&c.appendChild(a);n.svg&&(i.$tag$==="svg"?b=!1:c.tagName==="foreignObject"&&(b=!0))}return c["s-hn"]=C,n.slotRelocation&&i.$flags$&3&&(c["s-sr"]=!0,c["s-cr"]=ce,c["s-sn"]=i.$name$||"",c["s-rf"]=(r=i.$attrs$)==null?void 0:r.ref,$=e&&e.$children$&&e.$children$[s],$&&$.$tag$===i.$tag$&&e.$elm$&&(n.experimentalSlotFixes?Ge(e.$elm$):P(e.$elm$,!1))),c},Ge=e=>{p.$flags$|=1;let t=e.closest(C.toLowerCase());if(t!=null){let s=Array.from(t.childNodes).find(r=>r["s-cr"]),o=Array.from(e.childNodes);for(let r of s?o.reverse():o)r["s-sh"]!=null&&(S(t,r,s??null),r["s-sh"]=void 0,J=!0)}p.$flags$&=-2},P=(e,t)=>{p.$flags$|=1;let s=Array.from(e.childNodes);if(e["s-sr"]&&n.experimentalSlotFixes){let o=e;for(;o=o.nextSibling;)o&&o["s-sn"]===e["s-sn"]&&o["s-sh"]===C&&s.push(o)}for(let o=s.length-1;o>=0;o--){let r=s[o];r["s-hn"]!==C&&r["s-ol"]&&(S(Ve(r),r,pe(r)),r["s-ol"].remove(),r["s-ol"]=void 0,r["s-sh"]=void 0,J=!0),t&&P(r,t)}p.$flags$&=-2},Je=(e,t,s,o,r,i)=>{let l=n.slotRelocation&&e["s-cr"]&&e["s-cr"].parentNode||e,c;for(n.shadowDom&&l.shadowRoot&&l.tagName===C&&(l=l.shadowRoot);r<=i;++r)o[r]&&(c=Y(null,s,r,e),c&&(o[r].$elm$=c,S(l,c,n.slotRelocation?pe(t):t)))},Ze=(e,t,s)=>{for(let o=t;o<=s;++o){let r=e[o];if(r){let i=r.$elm$;tt(r),i&&(n.slotRelocation&&(K=!0,i["s-ol"]?i["s-ol"].remove():P(i,!0)),i.remove())}}},Gt=(e,t,s,o,r=!1)=>{let i=0,l=0,c=0,a=0,$=t.length-1,d=t[0],f=t[$],u=o.length-1,h=o[0],m=o[u],x,y;for(;i<=$&&l<=u;)if(d==null)d=t[++i];else if(f==null)f=t[--$];else if(h==null)h=o[++l];else if(m==null)m=o[--u];else if(H(d,h,r))E(d,h,r),d=t[++i],h=o[++l];else if(H(f,m,r))E(f,m,r),f=t[--$],m=o[--u];else if(H(d,m,r))n.slotRelocation&&(d.$tag$==="slot"||m.$tag$==="slot")&&P(d.$elm$.parentNode,!1),E(d,m,r),S(e,d.$elm$,f.$elm$.nextSibling),d=t[++i],m=o[--u];else if(H(f,h,r))n.slotRelocation&&(d.$tag$==="slot"||m.$tag$==="slot")&&P(f.$elm$.parentNode,!1),E(f,h,r),S(e,f.$elm$,d.$elm$),f=t[--$],h=o[++l];else{if(c=-1,n.vdomKey){for(a=i;a<=$;++a)if(t[a]&&t[a].$key$!==null&&t[a].$key$===h.$key$){c=a;break}}n.vdomKey&&c>=0?(y=t[c],y.$tag$!==h.$tag$?x=Y(t&&t[l],s,c,e):(E(y,h,r),t[c]=void 0,x=y.$elm$),h=o[++l]):(x=Y(t&&t[l],s,l,e),h=o[++l]),x&&(n.slotRelocation?S(Ve(d.$elm$),x,pe(d.$elm$)):S(d.$elm$.parentNode,x,d.$elm$))}i>$?Je(e,o[u+1]==null?null:o[u+1].$elm$,s,o,l,u):n.updatable&&l>u&&Ze(t,i,$)},H=(e,t,s=!1)=>e.$tag$===t.$tag$?n.slotRelocation&&e.$tag$==="slot"?"$nodeId$"in e&&s&&e.$elm$.nodeType!==8?!1:e.$name$===t.$name$:n.vdomKey&&!s?e.$key$===t.$key$:!0:!1,pe=e=>e&&e["s-ol"]||e,Ve=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,E=(e,t,s=!1)=>{let o=t.$elm$=e.$elm$,r=e.$children$,i=t.$children$,l=t.$tag$,c=t.$text$,a;!n.vdomText||c===null?(n.svg&&(b=l==="svg"?!0:l==="foreignObject"?!1:b),(n.vdomAttribute||n.reflect)&&(n.slot&&l==="slot"&&!j?n.experimentalSlotFixes&&e.$name$!==t.$name$&&(t.$elm$["s-sn"]=t.$name$||"",Ge(t.$elm$.parentElement)):Ye(e,t,b)),n.updatable&&r!==null&&i!==null?Gt(o,r,t,i,s):i!==null?(n.updatable&&n.vdomText&&e.$text$!==null&&(o.textContent=""),Je(o,null,t,i,0,i.length-1)):!s&&n.updatable&&r!==null&&Ze(r,0,r.length-1),n.svg&&b&&l==="svg"&&(b=!1)):n.vdomText&&n.slotRelocation&&(a=o["s-cr"])?a.parentNode.textContent=c:n.vdomText&&e.$text$!==c&&(o.data=c)},Z=e=>{let t=e.childNodes;for(let s of t)if(s.nodeType===1){if(s["s-sr"]){let o=s["s-sn"];s.hidden=!1;for(let r of t)if(r!==s){if(r["s-hn"]!==s["s-hn"]||o!==""){if(r.nodeType===1&&(o===r.getAttribute("slot")||o===r["s-sn"])||r.nodeType===3&&o===r["s-sn"]){s.hidden=!0;break}}else if(r.nodeType===1||r.nodeType===3&&r.textContent.trim()!==""){s.hidden=!0;break}}}Z(s)}},T=[],et=e=>{let t,s,o;for(let r of e.childNodes){if(r["s-sr"]&&(t=r["s-cr"])&&t.parentNode){s=t.parentNode.childNodes;let i=r["s-sn"];for(o=s.length-1;o>=0;o--)if(t=s[o],!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]&&(!n.experimentalSlotFixes||!t["s-sh"]||t["s-sh"]!==r["s-hn"]))if(Ue(t,i)){let l=T.find(c=>c.$nodeToRelocate$===t);K=!0,t["s-sn"]=t["s-sn"]||i,l?(l.$nodeToRelocate$["s-sh"]=r["s-hn"],l.$slotRefNode$=r):(t["s-sh"]=r["s-hn"],T.push({$slotRefNode$:r,$nodeToRelocate$:t})),t["s-sr"]&&T.map(c=>{Ue(c.$nodeToRelocate$,t["s-sn"])&&(l=T.find(a=>a.$nodeToRelocate$===t),l&&!c.$slotRefNode$&&(c.$slotRefNode$=l.$slotRefNode$))})}else T.some(l=>l.$nodeToRelocate$===t)||T.push({$nodeToRelocate$:t})}r.nodeType===1&&et(r)}},Ue=(e,t)=>e.nodeType===1?e.getAttribute("slot")===null&&t===""||e.getAttribute("slot")===t:e["s-sn"]===t?!0:t==="",tt=e=>{n.vdomRef&&(e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(tt))},S=(e,t,s)=>{let o=e?.insertBefore(t,s);return n.scoped&&me(t,e),o},st=e=>{let t=[];return e&&t.push(...e["s-scs"]||[],e["s-si"],e["s-sc"],...st(e.parentElement)),t},me=(e,t,s=!1)=>{var o;if(e&&t&&e.nodeType===1){let r=new Set(st(t).filter(Boolean));if(r.size&&((o=e.classList)==null||o.add(...e["s-scs"]=[...r]),e["s-ol"]||s))for(let i of Array.from(e.childNodes))me(i,e,!0)}},Re=(e,t,s=!1)=>{var o,r,i,l,c;let a=e.$hostElement$,$=e.$cmpMeta$,d=e.$vnode$||R(null,null),f=re(t)?t:Qe(null,null,t);if(C=a.tagName,n.isDev&&Array.isArray(t)&&t.some(re))throw new Error(`The <Host> must be the single root component.
Looks like the render() function of "${C.toLowerCase()}" is returning an array that contains the <Host>.

The render() function should look like this instead:

render() {
  // Do not return an array
  return (
    <Host>{content}</Host>
  );
}
  `);if(n.reflect&&$.$attrsToReflect$&&(f.$attrs$=f.$attrs$||{},$.$attrsToReflect$.map(([u,h])=>f.$attrs$[h]=a[u])),s&&f.$attrs$)for(let u of Object.keys(f.$attrs$))a.hasAttribute(u)&&!["key","ref","style","class"].includes(u)&&(f.$attrs$[u]=a[u]);if(f.$tag$=null,f.$flags$|=4,e.$vnode$=f,f.$elm$=d.$elm$=n.shadowDom&&a.shadowRoot||a,(n.scoped||n.shadowDom)&&(_=a["s-sc"]),j=A&&($.$flags$&1)!==0,n.slotRelocation&&(ce=a["s-cr"],K=!1),E(d,f,s),n.slotRelocation){if(p.$flags$|=1,J){et(f.$elm$);for(let u of T){let h=u.$nodeToRelocate$;if(!h["s-ol"]){let m=n.isDebug||n.hydrateServerSide?Zt(h):g.createTextNode("");m["s-nr"]=h,S(h.parentNode,h["s-ol"]=m,h)}}for(let u of T){let h=u.$nodeToRelocate$,m=u.$slotRefNode$;if(m){let x=m.parentNode,y=m.nextSibling;if(!n.experimentalSlotFixes||y&&y.nodeType===1){let k=(o=h["s-ol"])==null?void 0:o.previousSibling;for(;k;){let v=(r=k["s-nr"])!=null?r:null;if(v&&v["s-sn"]===h["s-sn"]&&x===v.parentNode){for(v=v.nextSibling;v===h||v?.["s-sr"];)v=v?.nextSibling;if(!v||!v["s-nr"]){y=v;break}}k=k.previousSibling}}(!y&&x!==h.parentNode||h.nextSibling!==y)&&h!==y&&(!n.experimentalSlotFixes&&!h["s-hn"]&&h["s-ol"]&&(h["s-hn"]=h["s-ol"].parentNode.nodeName),S(x,h,y),h.nodeType===1&&(h.hidden=(i=h["s-ih"])!=null?i:!1)),h&&typeof m["s-rf"]=="function"&&m["s-rf"](h)}else h.nodeType===1&&(s&&(h["s-ih"]=(l=h.hidden)!=null?l:!1),h.hidden=!0)}}K&&Z(f.$elm$),p.$flags$&=-2,T.length=0}if(n.experimentalScopedSlotChanges&&$.$flags$&2)for(let u of f.$elm$.childNodes)u["s-hn"]!==C&&!u["s-sh"]&&(s&&u["s-ih"]==null&&(u["s-ih"]=(c=u.hidden)!=null?c:!1),u.hidden=!0);ce=void 0},Jt=e=>g.createComment(`<slot${e.$name$?' name="'+e.$name$+'"':""}> (host=${C.toLowerCase()})`),Zt=e=>g.createComment("org-location for "+(e.localName?`<${e.localName}> (host=${e["s-hn"]})`:`[${e.textContent}]`)),nt=(e,t)=>{n.asyncLoading&&t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise(s=>e.$onRenderResolve$=s))},V=(e,t)=>{if(n.taskQueue&&n.updatable&&(e.$flags$|=16),n.asyncLoading&&e.$flags$&4){e.$flags$|=512;return}nt(e,e.$ancestorComponent$);let s=()=>Vt(e,t);return n.taskQueue?Nt(s):s()},Vt=(e,t)=>{let s=e.$hostElement$,o=N("scheduleUpdate",e.$cmpMeta$.$tagName$),r=n.lazyLoad?e.$lazyInstance$:s;if(!r)throw new Error(`Can't render component <${s.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);let i;return t?(n.lazyLoad&&n.hostListener&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map(([l,c])=>D(r,l,c)),e.$queuedListeners$=void 0)),U(s,"componentWillLoad"),n.cmpWillLoad&&(i=D(r,"componentWillLoad"))):(U(s,"componentWillUpdate"),n.cmpWillUpdate&&(i=D(r,"componentWillUpdate"))),U(s,"componentWillRender"),n.cmpWillRender&&(i=Be(i,()=>D(r,"componentWillRender"))),o(),Be(i,()=>ts(e,r,t))},Be=(e,t)=>es(e)?e.then(t).catch(s=>{console.error(s),t()}):t(),es=e=>e instanceof Promise||e&&e.then&&typeof e.then=="function",ts=async(e,t,s)=>{var o;let r=e.$hostElement$,i=N("update",e.$cmpMeta$.$tagName$),l=r["s-rc"];n.style&&s&&Xt(e);let c=N("render",e.$cmpMeta$.$tagName$);if(n.isDev&&(e.$flags$|=1024),n.hydrateServerSide?await je(e,t,r,s):je(e,t,r,s),n.isDev&&(e.$renderCount$=e.$renderCount$===void 0?1:e.$renderCount$+1,e.$flags$&=-1025),n.hydrateServerSide)try{rt(r),s&&(e.$cmpMeta$.$flags$&1?r["s-en"]="":e.$cmpMeta$.$flags$&2&&(r["s-en"]="c"))}catch(a){I(a,r)}if(n.asyncLoading&&l&&(l.map(a=>a()),r["s-rc"]=void 0),c(),i(),n.asyncLoading){let a=(o=r["s-p"])!=null?o:[],$=()=>ze(e);a.length===0?$():(Promise.all(a).then($),e.$flags$|=4,a.length=0)}else ze(e)},Oe=null,je=(e,t,s,o)=>{let r=!!n.allRenderFn,i=!!n.lazyLoad,l=!!n.taskQueue,c=!!n.updatable;try{if(Oe=t,t=(r||t.render)&&t.render(),c&&l&&(e.$flags$&=-17),(c||i)&&(e.$flags$|=2),n.hasRenderFn||n.reflect)if(n.vdomRender||n.reflect){if(n.hydrateServerSide)return Promise.resolve(t).then(a=>Re(e,a,o));Re(e,t,o)}else{let a=s.shadowRoot;e.$cmpMeta$.$flags$&1?a.textContent=t:s.textContent=t}}catch(a){I(a,e.$hostElement$)}return Oe=null,null};var ze=e=>{let t=e.$cmpMeta$.$tagName$,s=e.$hostElement$,o=N("postUpdate",t),r=n.lazyLoad?e.$lazyInstance$:s,i=e.$ancestorComponent$;n.cmpDidRender&&(n.isDev&&(e.$flags$|=1024),D(r,"componentDidRender"),n.isDev&&(e.$flags$&=-1025)),U(s,"componentDidRender"),e.$flags$&64?(n.cmpDidUpdate&&(n.isDev&&(e.$flags$|=1024),D(r,"componentDidUpdate"),n.isDev&&(e.$flags$&=-1025)),U(s,"componentDidUpdate"),o()):(e.$flags$|=64,n.asyncLoading&&n.cssAnnotations&&ot(s),n.cmpDidLoad&&(n.isDev&&(e.$flags$|=2048),D(r,"componentDidLoad"),n.isDev&&(e.$flags$&=-2049)),U(s,"componentDidLoad"),o(),n.asyncLoading&&(e.$onReadyResolve$(s),i||ss(t))),n.method&&n.lazyLoad&&e.$onInstanceResolve$(s),n.asyncLoading&&(e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),e.$flags$&512&&G(()=>V(e,!1)),e.$flags$&=-517)},Gs=e=>{if(n.updatable&&(Se.isBrowser||Se.isTesting)){let t=L(e),s=t.$hostElement$.isConnected;return s&&(t.$flags$&18)===2&&V(t,!1),s}return!1},ss=e=>{n.cssAnnotations&&ot(g.documentElement),n.asyncQueue&&(p.$flags$|=2),G(()=>he(O,"appload",{detail:{namespace:F}})),n.profile&&performance.measure&&performance.measure(`[Stencil] ${F} initial load (by ${e})`,"st:app:start")},D=(e,t,s)=>{if(e&&e[t])try{return e[t](s)}catch(o){I(o)}},U=(e,t)=>{n.lifecycleDOMEvents&&he(e,"stencil_"+t,{bubbles:!0,composed:!0,detail:{namespace:F}})},ot=e=>{var t,s;return n.hydratedClass?e.classList.add((t=n.hydratedSelectorName)!=null?t:"hydrated"):n.hydratedAttribute?e.setAttribute((s=n.hydratedSelectorName)!=null?s:"hydrated",""):void 0},rt=e=>{let t=e.children;if(t!=null)for(let s=0,o=t.length;s<o;s++){let r=t[s];typeof r.connectedCallback=="function"&&r.connectedCallback(),rt(r)}},ns=(e,t)=>L(e).$instanceValues$.get(t),os=(e,t,s,o)=>{let r=L(e);if(n.lazyLoad&&!r)throw new Error(`Couldn't find host element for "${o.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`);let i=n.lazyLoad?r.$hostElement$:e,l=r.$instanceValues$.get(t),c=r.$flags$,a=n.lazyLoad?r.$lazyInstance$:i;s=Wt(s,o.$members$[t][0]);let $=Number.isNaN(l)&&Number.isNaN(s),d=s!==l&&!$;if((!n.lazyLoad||!(c&8)||l===void 0)&&d&&(r.$instanceValues$.set(t,s),n.isDev&&(r.$flags$&1024?z(`The state/prop "${t}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`,`
Element`,i,`
New value`,s,`
Old value`,l):r.$flags$&2048&&z(`The state/prop "${t}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`,`
Element`,i,`
New value`,s,`
Old value`,l)),!n.lazyLoad||a)){if(n.watchCallback&&o.$watchers$&&c&128){let f=o.$watchers$[t];f&&f.map(u=>{try{a[u](s,l,t)}catch(h){I(h,i)}})}if(n.updatable&&(c&18)===2){if(n.cmpShouldUpdate&&a.componentShouldUpdate&&a.componentShouldUpdate(s,l,t)===!1)return;V(r,!1)}}},it=(e,t,s)=>{var o,r;let i=e.prototype;if(n.formAssociated&&t.$flags$&64&&s&1&&xt.forEach(l=>Object.defineProperty(i,l,{value(...c){let a=L(this),$=n.lazyLoad?a.$hostElement$:this,d=n.lazyLoad?a.$lazyInstance$:$;if(!d)a.$onReadyPromise$.then(f=>{let u=f[l];typeof u=="function"&&u.call(f,...c)});else{let f=d[l];typeof f=="function"&&f.call(d,...c)}}})),n.member&&t.$members$||n.watchCallback&&(t.$watchers$||e.watchers)){n.watchCallback&&e.watchers&&!t.$watchers$&&(t.$watchers$=e.watchers);let l=Object.entries((o=t.$members$)!=null?o:{});if(l.map(([c,[a]])=>{(n.prop||n.state)&&(a&31||(!n.lazyLoad||s&2)&&a&32)?Object.defineProperty(i,c,{get(){return ns(this,c)},set($){if(n.isDev){let d=L(this);!(s&1)&&(d&&d.$flags$&8)===0&&a&31&&!(a&1024)&&z(`@Prop() "${c}" on <${t.$tagName$}> is immutable but was modified from within the component.
More information: https://stenciljs.com/docs/properties#prop-mutability`)}os(this,c,$,t)},configurable:!0,enumerable:!0}):n.lazyLoad&&n.method&&s&1&&a&64&&Object.defineProperty(i,c,{value(...$){var d;let f=L(this);return(d=f?.$onInstancePromise$)==null?void 0:d.then(()=>{var u;return(u=f.$lazyInstance$)==null?void 0:u[c](...$)})}})}),n.observeAttribute&&(!n.lazyLoad||s&1)){let c=new Map;i.attributeChangedCallback=function(a,$,d){p.jmp(()=>{var f;let u=c.get(a);if(this.hasOwnProperty(u))d=this[u],delete this[u];else{if(i.hasOwnProperty(u)&&typeof this[u]=="number"&&this[u]==d)return;if(u==null){let h=L(this),m=h?.$flags$;if(m&&!(m&8)&&m&128&&d!==$){let x=n.lazyLoad?h.$hostElement$:this,y=n.lazyLoad?h.$lazyInstance$:x,k=(f=t.$watchers$)==null?void 0:f[a];k?.forEach(v=>{y[v]!=null&&y[v].call(y,d,$,a)})}return}}this[u]=d===null&&typeof this[u]=="boolean"?!1:d})},e.observedAttributes=Array.from(new Set([...Object.keys((r=t.$watchers$)!=null?r:{}),...l.filter(([a,$])=>$[0]&15).map(([a,$])=>{var d;let f=$[1]||a;return c.set(f,a),n.reflect&&$[0]&512&&((d=t.$attrsToReflect$)==null||d.push([a,f])),f})]))}}return e},Pe=async(e,t,s,o)=>{let r;if(!(t.$flags$&32)){t.$flags$|=32;let c=s.$lazyBundleId$;if((n.lazyLoad||n.hydrateClientSide)&&c){let a=vt(s,t,o);if(a&&"then"in a){let d=Ot(`st:load:${s.$tagName$}:${t.$modeName$}`,`[Stencil] Load module for <${s.$tagName$}>`);r=await a,d()}else r=a;if(!r)throw new Error(`Constructor for "${s.$tagName$}#${t.$modeName$}" was not found`);n.member&&!r.isProxied&&(n.watchCallback&&(s.$watchers$=r.watchers),it(r,s,2),r.isProxied=!0);let $=N("createInstance",s.$tagName$);n.member&&(t.$flags$|=8);try{new r(t)}catch(d){I(d)}n.member&&(t.$flags$&=-9),n.watchCallback&&(t.$flags$|=128),$(),$e(t.$lazyInstance$)}else{r=e.constructor;let a=e.localName;customElements.whenDefined(a).then(()=>t.$flags$|=128)}if(n.style&&r&&r.style){let a;typeof r.style=="string"?a=r.style:n.mode&&typeof r.style!="string"&&(t.$modeName$=Mt(e),t.$modeName$&&(a=r.style[t.$modeName$]),n.hydrateServerSide&&t.$modeName$&&e.setAttribute("s-mode",t.$modeName$));let $=Xe(s,t.$modeName$);if(!q.has($)){let d=N("registerStyles",s.$tagName$);!n.hydrateServerSide&&n.shadowDom&&n.shadowDomShim&&s.$flags$&8&&(a=await import("./chunk-V3LBT5DZ.js").then(f=>f.scopeCss(a,$))),Qt($,a,!!(s.$flags$&1)),d()}}}let i=t.$ancestorComponent$,l=()=>V(t,!0);n.asyncLoading&&i&&i["s-rc"]?i["s-rc"].push(l):l()},$e=e=>{n.lazyLoad&&n.connectedCallback&&D(e,"connectedCallback")},rs=e=>{if(!(p.$flags$&1)){let t=L(e),s=t.$cmpMeta$,o=N("connectedCallback",s.$tagName$);if(n.hostListenerTargetParent&&fe(e,t,s.$listeners$,!0),t.$flags$&1)fe(e,t,s.$listeners$,!1),t?.$lazyInstance$?$e(t.$lazyInstance$):t?.$onReadyPromise$&&t.$onReadyPromise$.then(()=>$e(t.$lazyInstance$));else{t.$flags$|=1;let r;if(n.hydrateClientSide&&(r=e.getAttribute(ne),r)){if(n.shadowDom&&A&&s.$flags$&1){let i=n.mode?le(e.shadowRoot,s,e.getAttribute("s-mode")):le(e.shadowRoot,s);e.classList.remove(i+"-h",i+"-s")}Ht(e,s.$tagName$,r,t)}if(n.slotRelocation&&!r&&(n.hydrateServerSide||(n.slot||n.shadowDom)&&s.$flags$&12)&&is(e),n.asyncLoading){let i=e;for(;i=i.parentNode||i.host;)if(n.hydrateClientSide&&i.nodeType===1&&i.hasAttribute("s-id")&&i["s-p"]||i["s-p"]){nt(t,t.$ancestorComponent$=i);break}}n.prop&&!n.hydrateServerSide&&s.$members$&&Object.entries(s.$members$).map(([i,[l]])=>{if(l&31&&e.hasOwnProperty(i)){let c=e[i];delete e[i],e[i]=c}}),n.initializeNextTick?G(()=>Pe(e,t,s)):Pe(e,t,s)}o()}},is=e=>{let t=e["s-cr"]=g.createComment(n.isDebug?`content-ref (host=${e.localName})`:"");t["s-cn"]=!0,S(e,t,e.firstChild)},se=e=>{n.lazyLoad&&n.disconnectedCallback&&D(e,"disconnectedCallback"),n.cmpDidUnload&&D(e,"componentDidUnload")},as=async e=>{if(!(p.$flags$&1)){let t=L(e);n.hostListener&&t.$rmListeners$&&(t.$rmListeners$.map(s=>s()),t.$rmListeners$=void 0),n.lazyLoad?t?.$lazyInstance$?se(t.$lazyInstance$):t?.$onReadyPromise$&&t.$onReadyPromise$.then(()=>se(t.$lazyInstance$)):se(e)}},ls=(e,t)=>{at(e),lt(e),ds(e),$s(e),hs(e),fs(e),us(e),ct(e),$t(e,t),cs(e)},at=e=>{let t=e.cloneNode;e.cloneNode=function(s){let o=this,r=n.shadowDom?o.shadowRoot&&A:!1,i=t.call(o,r?s:!1);if(n.slot&&!r&&s){let l=0,c,a,$=["s-id","s-cr","s-lr","s-rc","s-sc","s-p","s-cn","s-sr","s-sn","s-hn","s-ol","s-nr","s-si","s-rf","s-scs"];for(;l<o.childNodes.length;l++)c=o.childNodes[l]["s-nr"],a=$.every(d=>!o.childNodes[l][d]),c&&(n.appendChildSlotFix&&i.__appendChild?i.__appendChild(c.cloneNode(!0)):i.appendChild(c.cloneNode(!0))),a&&i.appendChild(o.childNodes[l].cloneNode(!0))}return i}},lt=e=>{e.__appendChild=e.appendChild,e.appendChild=function(t){let s=t["s-sn"]=dt(t),o=B(this.childNodes,s,this.tagName);if(o){let r=ve(o,s),i=r[r.length-1],l=S(i.parentNode,t,i.nextSibling);return Z(this),l}return this.__appendChild(t)}},cs=e=>{e.__removeChild=e.removeChild,e.removeChild=function(t){if(t&&typeof t["s-sn"]<"u"){let s=B(this.childNodes,t["s-sn"],this.tagName);if(s){let r=ve(s,t["s-sn"]).find(i=>i===t);if(r){r.remove(),Z(this);return}}}return this.__removeChild(t)}},$s=e=>{let t=e.prepend;e.prepend=function(...s){s.forEach(o=>{typeof o=="string"&&(o=this.ownerDocument.createTextNode(o));let r=o["s-sn"]=dt(o),i=B(this.childNodes,r,this.tagName);if(i){let l=document.createTextNode("");l["s-nr"]=o,i["s-cr"].parentNode.__appendChild(l),o["s-ol"]=l;let a=ve(i,r)[0];return S(a.parentNode,o,a.nextSibling)}return o.nodeType===1&&o.getAttribute("slot")&&(o.hidden=!0),t.call(this,o)})}},ds=e=>{e.append=function(...t){t.forEach(s=>{typeof s=="string"&&(s=this.ownerDocument.createTextNode(s)),this.appendChild(s)})}},fs=e=>{let t=e.insertAdjacentHTML;e.insertAdjacentHTML=function(s,o){if(s!=="afterbegin"&&s!=="beforeend")return t.call(this,s,o);let r=this.ownerDocument.createElement("_"),i;if(r.innerHTML=o,s==="afterbegin")for(;i=r.firstChild;)this.prepend(i);else if(s==="beforeend")for(;i=r.firstChild;)this.append(i)}},us=e=>{e.insertAdjacentText=function(t,s){this.insertAdjacentHTML(t,s)}},hs=e=>{let t=e.insertAdjacentElement;e.insertAdjacentElement=function(s,o){return s!=="afterbegin"&&s!=="beforeend"?t.call(this,s,o):s==="afterbegin"?(this.prepend(o),o):(s==="beforeend"&&this.append(o),o)}},ct=e=>{let t=Object.getOwnPropertyDescriptor(Node.prototype,"textContent");Object.defineProperty(e,"__textContent",t),n.experimentalScopedSlotChanges?Object.defineProperty(e,"textContent",{get(){return" "+de(this.childNodes).map(r=>{var i,l;let c=[],a=r.nextSibling;for(;a&&a["s-sn"]===r["s-sn"];)(a.nodeType===3||a.nodeType===1)&&c.push((l=(i=a.textContent)==null?void 0:i.trim())!=null?l:""),a=a.nextSibling;return c.filter($=>$!=="").join(" ")}).filter(r=>r!=="").join(" ")+" "},set(s){de(this.childNodes).forEach(r=>{let i=r.nextSibling;for(;i&&i["s-sn"]===r["s-sn"];){let l=i;i=i.nextSibling,l.remove()}if(r["s-sn"]===""){let l=this.ownerDocument.createTextNode(s);l["s-sn"]="",S(r.parentElement,l,r.nextSibling)}else r.remove()})}}):Object.defineProperty(e,"textContent",{get(){var s;let o=B(this.childNodes,"",this.tagName);return((s=o?.nextSibling)==null?void 0:s.nodeType)===3?o.nextSibling.textContent:o?o.textContent:this.__textContent},set(s){var o;let r=B(this.childNodes,"",this.tagName);if(((o=r?.nextSibling)==null?void 0:o.nodeType)===3)r.nextSibling.textContent=s;else if(r)r.textContent=s;else{this.__textContent=s;let i=this["s-cr"];i&&S(this,i,this.firstChild)}}})},$t=(e,t)=>{class s extends Array{item(r){return this[r]}}if(t.$flags$&8){let o=e.__lookupGetter__("childNodes");Object.defineProperty(e,"children",{get(){return this.childNodes.map(r=>r.nodeType===1)}}),Object.defineProperty(e,"childElementCount",{get(){return e.children.length}}),Object.defineProperty(e,"childNodes",{get(){let r=o.call(this);if(!(p.$flags$&1)&&L(this).$flags$&2){let i=new s;for(let l=0;l<r.length;l++){let c=r[l]["s-nr"];c&&i.push(c)}return i}return s.from(r)}})}},de=e=>{let t=[];for(let s of Array.from(e))s["s-sr"]&&t.push(s),t.push(...de(s.childNodes));return t},dt=e=>e["s-sn"]||e.nodeType===1&&e.getAttribute("slot")||"",B=(e,t,s)=>{let o=0,r;for(;o<e.length;o++)if(r=e[o],r["s-sr"]&&r["s-sn"]===t&&r["s-hn"]===s||(r=B(r.childNodes,t,s),r))return r;return null},ve=(e,t)=>{let s=[e];for(;(e=e.nextSibling)&&e["s-sn"]===t;)s.push(e);return s};var Vs=(e,t)=>{let s={$flags$:t[0],$tagName$:t[1]};n.member&&(s.$members$=t[2]),n.hostListener&&(s.$listeners$=t[3]),n.watchCallback&&(s.$watchers$=e.$watchers$),n.reflect&&(s.$attrsToReflect$=[]),n.shadowDom&&!A&&s.$flags$&1&&(s.$flags$|=8),n.experimentalSlotFixes?n.scoped&&s.$flags$&2&&ls(e.prototype,s):(n.slotChildNodesFix&&$t(e.prototype,s),n.cloneNodeFix&&at(e.prototype),n.appendChildSlotFix&&lt(e.prototype),n.scopedSlotTextContentFix&&s.$flags$&2&&ct(e.prototype));let o=e.prototype.connectedCallback,r=e.prototype.disconnectedCallback;return Object.assign(e.prototype,{__registerHost(){pt(this,s)},connectedCallback(){let i=L(this);fe(this,i,s.$listeners$,!1),rs(this),n.connectedCallback&&o&&o.call(this)},disconnectedCallback(){as(this),n.disconnectedCallback&&r&&r.call(this)},__attachShadow(){if(A){if(!this.shadowRoot)n.shadowDelegatesFocus?this.attachShadow({mode:"open",delegatesFocus:!!(s.$flags$&16)}):this.attachShadow({mode:"open"});else if(this.shadowRoot.mode!=="open")throw new Error(`Unable to re-use existing shadow root for ${s.$tagName$}! Mode is set to ${this.shadowRoot.mode} but Stencil only supports open shadow roots.`)}else this.shadowRoot=this}}),e.is=s.$tagName$,it(e,s,3)};var fe=(e,t,s,o)=>{n.hostListener&&s&&(n.hostListenerTargetParent&&(o?s=s.filter(([r])=>r&32):s=s.filter(([r])=>!(r&32))),s.map(([r,i,l])=>{let c=n.hostListenerTarget?ms(e,r):e,a=ps(t,l),$=vs(r);p.ael(c,i,a,$),(t.$rmListeners$=t.$rmListeners$||[]).push(()=>p.rel(c,i,a,$))}))},ps=(e,t)=>s=>{var o;try{n.lazyLoad?e.$flags$&256?(o=e.$lazyInstance$)==null||o[t](s):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,s]):e.$hostElement$[t](s)}catch(r){I(r)}},ms=(e,t)=>n.hostListenerTargetDocument&&t&4?g:n.hostListenerTargetWindow&&t&8?O:n.hostListenerTargetBody&&t&16?g.body:n.hostListenerTargetParent&&t&32&&e.parentElement?e.parentElement:e,vs=e=>Dt?{passive:(e&1)!==0,capture:(e&2)!==0}:(e&2)!==0;export{Se as a,Ns as b,Is as c,ks as d,Nt as e,ws as f,Qe as g,jt as h,Os as i,js as j,qs as k,Gs as l,Vs as m};
