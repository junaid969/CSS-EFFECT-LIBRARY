(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,86318,31171,9797,e=>{"use strict";var t=e.i(71645),a=(e.i(43476),Object.defineProperty),r=t.createContext(void 0);function n(e){let a=t.useContext(r);return e||a||"ltr"}a(n,"name",{value:"useDirection",configurable:!0}),e.s(["f",0,n],86318);let o=(0,e.i(75254).f)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);e.s(["f",0,o],31171),e.s(["f",0,o],9797)},3536,65491,86312,85369,e=>{"use strict";var t,a,r,n,o,i,s,l=e.i(71645),d=Object.defineProperty,p=(e,t)=>d(e,"name",{value:t,configurable:!0}),c=0,f=null;function h(){l.useEffect(()=>{f||(f={start:x(),end:x()});let{start:e,end:t}=f;return document.body.firstElementChild!==e&&document.body.insertAdjacentElement("afterbegin",e),document.body.lastElementChild!==t&&document.body.insertAdjacentElement("beforeend",t),c++,()=>{1===c&&(f?.start.remove(),f?.end.remove(),f=null),c=Math.max(0,c-1)}},[])}function x(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}p(function(e){return h(),e.children},"FocusGuards"),p(h,"useFocusGuards"),p(x,"createFocusGuard"),e.s(["f",0,h],3536);var u=e.i(20783),g=e.i(48425),b=e.i(30207),m=e.i(43476),w=Object.defineProperty,v=(e,t)=>w(e,"name",{value:t,configurable:!0}),y="focusScope.autoFocusOnMount",k="focusScope.autoFocusOnUnmount",j={bubbles:!1,cancelable:!0},S=l.forwardRef(v(function(e,t){let{loop:a=!1,trapped:r=!1,branches:n,onMountAutoFocus:o,onUnmountAutoFocus:i,...s}=e,[d,p]=l.useState(null),c=(0,b.f)(o),f=(0,b.f)(i),h=l.useRef(null),x=(0,u.f)(t,p),w=l.useRef(n);l.useEffect(()=>{w.current=n});let S=l.useCallback(e=>!!e&&(!!d?.contains(e)||!!w.current?.some(t=>t.contains(e))),[d]),C=l.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;l.useEffect(()=>{if(r){let e=function(e){if(C.paused||!d)return;let t=e.target;S(t)?h.current=t:P(h.current,{select:!0})},t=function(e){if(C.paused||!d)return;let t=e.relatedTarget;null!==t&&(S(t)||P(h.current,{select:!0}))},a=function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&P(d)};v(e,"handleFocusIn"),v(t,"handleFocusOut"),v(a,"handleMutations"),document.addEventListener("focusin",e),document.addEventListener("focusout",t);let r=new MutationObserver(a);return d&&r.observe(d,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),r.disconnect()}}},[r,d,C.paused,S]),l.useEffect(()=>{if(d){L.add(C);let e=document.activeElement;if(!d.contains(e)){let t=new CustomEvent(y,j);d.addEventListener(y,c),d.dispatchEvent(t),t.defaultPrevented||(z(I(T(d)),{select:!0}),document.activeElement===e&&P(d))}return()=>{d.removeEventListener(y,c);let t=d.ownerDocument,a=CustomEvent;setTimeout(()=>{let r=new a(k,j);d.addEventListener(k,f),d.dispatchEvent(r),r.defaultPrevented||P(e??t.body,{select:!0}),d.removeEventListener(k,f),L.remove(C)},0)}}},[d,c,f,C]);let N=l.useCallback(e=>{if(!a&&!r||C.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,n=document.activeElement;if(t&&n){let t=e.currentTarget,[r,o]=E(t);r&&o?e.shiftKey||n!==o?e.shiftKey&&n===r&&(e.preventDefault(),a&&P(o,{select:!0})):(e.preventDefault(),a&&P(r,{select:!0})):n===t&&e.preventDefault()}},[a,r,C.paused]);return(0,m.jsx)(g.V.div,{tabIndex:-1,...s,ref:x,onKeyDown:N})},"FocusScope")),C=l.createContext(null);function N({registry:e,children:t}){return e?(0,m.jsx)(C.Provider,{value:e,children:t}):t}function A(){let[e,t]=l.useState([]);return{nodes:e,registry:l.useMemo(()=>({add:v(e=>t(t=>t.includes(e)?t:[...t,e]),"add"),remove:v(e=>t(t=>t.filter(t=>t!==e)),"remove")}),[])}}function z(e,{select:t=!1}={}){let a=document.activeElement;for(let r of e)if(P(r,{select:t}),document.activeElement!==a)return}function E(e){let t=T(e);return[R(t,e),R(t.reverse(),e)]}function T(e){let t=[],a=e.ownerDocument.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:v(e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP},"acceptNode")});for(;a.nextNode();)t.push(a.currentNode);return t}function R(e,t){let a="function"==typeof t.checkVisibility&&t.checkVisibility({checkVisibilityCSS:!0});for(let r of e)if(!(a?!r.checkVisibility({checkVisibilityCSS:!0}):M(r,{upTo:t})))return r}function M(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}function F(e){return"INPUT"===e.tagName&&"function"==typeof e.select}function P(e,{select:t=!1}={}){if(e&&e.focus){let a=(e.ownerDocument??document).activeElement;e.focus({preventScroll:!0}),e!==a&&F(e)&&t&&e.select()}}v(N,"FocusScopeBranchProvider"),v(A,"useFocusScopeBranchRegistry"),v(function(e){let t=l.useContext(C);l.useEffect(()=>{if(e&&t)return t.add(e),()=>t.remove(e)},[e,t])},"useFocusScopeBranch"),v(z,"focusFirst"),v(E,"getTabbableEdges"),v(T,"getTabbableCandidates"),v(R,"findVisible"),v(M,"isHidden"),v(F,"isSelectableInput"),v(P,"focus");var L=D();function D(){let e=[];return{add(t){let a=e[0];t!==a&&a?.pause(),(e=B(e,t)).unshift(t)},remove(t){e=B(e,t),e[0]?.resume()}}}function B(e,t){let a=[...e],r=a.indexOf(t);return -1!==r&&a.splice(r,1),a}function I(e){return e.filter(e=>"A"!==e.tagName)}v(D,"createFocusScopesStack"),v(B,"arrayRemove"),v(I,"removeLinks"),e.s(["v",0,S,"l",0,N,"D",0,A],65491);var H=new WeakMap,Y=new WeakMap,O={},q=0,X=function(e){return e&&(e.host||X(e.parentNode))},V=function(e,t,a,r){var n=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var a=X(e);return a&&t.contains(a)?a:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});O[a]||(O[a]=new WeakMap);var o=O[a],i=[],s=new Set,l=new Set(n),d=function(e){!e||s.has(e)||(s.add(e),d(e.parentNode))};n.forEach(d);var p=function(e){!e||l.has(e)||Array.prototype.forEach.call(e.children,function(e){if(s.has(e))p(e);else try{var t=e.getAttribute(r),n=null!==t&&"false"!==t,l=(H.get(e)||0)+1,d=(o.get(e)||0)+1;H.set(e,l),o.set(e,d),i.push(e),1===l&&n&&Y.set(e,!0),1===d&&e.setAttribute(a,"true"),n||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return p(t),s.clear(),q++,function(){i.forEach(function(e){var t=H.get(e)-1,n=o.get(e)-1;H.set(e,t),o.set(e,n),t||(Y.has(e)||e.removeAttribute(r),Y.delete(e)),n||e.removeAttribute(a)}),--q||(H=new WeakMap,H=new WeakMap,Y=new WeakMap,O={})}};e.s(["f",0,function(e,t,a){void 0===a&&(a="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),n=t||("u"<typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return n?(r.push.apply(r,Array.from(n.querySelectorAll("[aria-live], script"))),V(r,n,a,"aria-hidden")):function(){return null}}],86312);var _=function(){return(_=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function W(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]]);return a}var G=("function"==typeof SuppressedError&&SuppressedError,"right-scroll-bar-position"),$="width-before-scroll-bar";function U(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var K="u">typeof window?l.useLayoutEffect:l.useEffect,Z=new WeakMap,J=(void 0===t&&(t={}),(void 0===a&&(a=function(e){return e}),r=[],n=!1,o={read:function(){if(n)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:null},useMedium:function(e){var t=a(e,n);return r.push(t),function(){r=r.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(n=!0;r.length;){var t=r;r=[],t.forEach(e)}r={push:function(t){return e(t)},filter:function(){return r}}},assignMedium:function(e){n=!0;var t=[];if(r.length){var a=r;r=[],a.forEach(e),t=r}var o=function(){var a=t;t=[],a.forEach(e)},i=function(){return Promise.resolve().then(o)};i(),r={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),r}}}}).options=_({async:!0,ssr:!1},t),o),Q=function(){},ee=l.forwardRef(function(e,t){var a,r,n,o,i=l.useRef(null),s=l.useState({onScrollCapture:Q,onWheelCapture:Q,onTouchMoveCapture:Q}),d=s[0],p=s[1],c=e.forwardProps,f=e.children,h=e.className,x=e.removeScrollBar,u=e.enabled,g=e.shards,b=e.sideCar,m=e.noRelative,w=e.noIsolation,v=e.inert,y=e.allowPinchZoom,k=e.as,j=e.gapMode,S=W(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),C=(a=[i,t],r=function(e){return a.forEach(function(t){return U(t,e)})},(n=(0,l.useState)(function(){return{value:null,callback:r,facade:{get current(){return n.value},set current(e){var t=n.value;t!==e&&(n.value=e,n.callback(e,t))}}}})[0]).callback=r,o=n.facade,K(function(){var e=Z.get(o);if(e){var t=new Set(e),r=new Set(a),n=o.current;t.forEach(function(e){r.has(e)||U(e,null)}),r.forEach(function(e){t.has(e)||U(e,n)})}Z.set(o,a)},[a]),o),N=_(_({},S),d);return l.createElement(l.Fragment,null,u&&l.createElement(b,{sideCar:J,removeScrollBar:x,shards:g,noRelative:m,noIsolation:w,inert:v,setCallbacks:p,allowPinchZoom:!!y,lockRef:i,gapMode:j}),c?l.cloneElement(l.Children.only(f),_(_({},N),{ref:C})):l.createElement(void 0===k?"div":k,_({},N,{className:h,ref:C}),f))});ee.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},ee.classNames={fullWidth:$,zeroRight:G};var et=function(e){var t=e.sideCar,a=W(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return l.createElement(r,_({},a))};et.isSideCarExport=!0;var ea=function(){var e=0,t=null;return{add:function(a){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=s||("u">typeof __webpack_nonce__?__webpack_nonce__:void 0);return t&&e.setAttribute("nonce",t),e}())){var r,n;(r=t).styleSheet?r.styleSheet.cssText=a:r.appendChild(document.createTextNode(a)),n=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},er=function(){var e=ea();return function(t,a){l.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&a])}},en=function(){var e=er();return function(t){return e(t.styles,t.dynamic),null}},eo={left:0,top:0,right:0,gap:0},ei=function(e){return parseInt(e||"",10)||0},es=function(e){var t=window.getComputedStyle(document.body),a=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],n=t["padding"===e?"paddingRight":"marginRight"];return[ei(a),ei(r),ei(n)]},el=function(e){if(void 0===e&&(e="margin"),"u"<typeof window)return eo;var t=es(e),a=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-a+t[2]-t[0])}},ed=en(),ep="data-scroll-locked",ec=function(e,t,a,r){var n=e.left,o=e.top,i=e.right,s=e.gap;return void 0===a&&(a="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(s,"px ").concat(r,";\n  }\n  body[").concat(ep,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===a&&"\n    padding-left: ".concat(n,"px;\n    padding-top: ").concat(o,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s,"px ").concat(r,";\n    "),"padding"===a&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(G," {\n    right: ").concat(s,"px ").concat(r,";\n  }\n  \n  .").concat($," {\n    margin-right: ").concat(s,"px ").concat(r,";\n  }\n  \n  .").concat(G," .").concat(G," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat($," .").concat($," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(ep,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(s,"px;\n  }\n")},ef=function(){var e=parseInt(document.body.getAttribute(ep)||"0",10);return isFinite(e)?e:0},eh=function(){l.useEffect(function(){return document.body.setAttribute(ep,(ef()+1).toString()),function(){var e=ef()-1;e<=0?document.body.removeAttribute(ep):document.body.setAttribute(ep,e.toString())}},[])},ex=function(e){var t=e.noRelative,a=e.noImportant,r=e.gapMode,n=void 0===r?"margin":r;eh();var o=l.useMemo(function(){return el(n)},[n]);return l.createElement(ed,{styles:ec(o,!t,n,a?"":"!important")})},eu=!1;if("u">typeof window)try{var eg=Object.defineProperty({},"passive",{get:function(){return eu=!0,!0}});window.addEventListener("test",eg,eg),window.removeEventListener("test",eg,eg)}catch(e){eu=!1}var eb=!!eu&&{passive:!1},em=function(e,t){if(!(e instanceof Element))return!1;var a=window.getComputedStyle(e);return"hidden"!==a[t]&&(a.overflowY!==a.overflowX||"TEXTAREA"===e.tagName||"visible"!==a[t])},ew=function(e,t){var a=t.ownerDocument,r=t;do{if("u">typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),ev(e,r)){var n=ey(e,r);if(n[1]>n[2])return!0}r=r.parentNode}while(r&&r!==a.body)return!1},ev=function(e,t){return"v"===e?em(t,"overflowY"):em(t,"overflowX")},ey=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},ek=function(e,t,a,r,n){var o,i=(o=window.getComputedStyle(t).direction,"h"===e&&"rtl"===o?-1:1),s=i*r,l=a.target,d=t.contains(l),p=!1,c=s>0,f=0,h=0;do{if(!l)break;var x=ey(e,l),u=x[0],g=x[1]-x[2]-i*u;(u||g)&&ev(e,l)&&(f+=g,h+=u);var b=l.parentNode;l=b&&b.nodeType===Node.DOCUMENT_FRAGMENT_NODE?b.host:b}while(!d&&l!==document.body||d&&(t.contains(l)||t===l))return c&&(n&&1>Math.abs(f)||!n&&s>f)?p=!0:!c&&(n&&1>Math.abs(h)||!n&&-s>h)&&(p=!0),p},ej=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},eS=function(e){return[e.deltaX,e.deltaY]},eC=function(e){return e&&"current"in e?e.current:e},eN=0,eA=[];let ez=(i=function(e){var t=l.useRef([]),a=l.useRef([0,0]),r=l.useRef(),n=l.useState(eN++)[0],o=l.useState(en)[0],i=l.useRef(e);l.useEffect(function(){i.current=e},[e]),l.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(n));var t=(function(e,t,a){if(a||2==arguments.length)for(var r,n=0,o=t.length;n<o;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(eC),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(n))}),function(){document.body.classList.remove("block-interactivity-".concat(n)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(n))})}}},[e.inert,e.lockRef.current,e.shards]);var s=l.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!i.current.allowPinchZoom;var n,o=ej(e),s=a.current,l="deltaX"in e?e.deltaX:s[0]-o[0],d="deltaY"in e?e.deltaY:s[1]-o[1],p=e.target,c=Math.abs(l)>Math.abs(d)?"h":"v";if("touches"in e&&"h"===c&&"range"===p.type)return!1;var f=window.getSelection(),h=f&&f.anchorNode;if(h&&(h===p||h.contains(p)))return!1;var x=ew(c,p);if(!x)return!0;if(x?n=c:(n="v"===c?"h":"v",x=ew(c,p)),!x)return!1;if(!r.current&&"changedTouches"in e&&(l||d)&&(r.current=n),!n)return!0;var u=r.current||n;return ek(u,t,e,"h"===u?l:d,!0)},[]),d=l.useCallback(function(e){if(eA.length&&eA[eA.length-1]===o){var a="deltaY"in e?eS(e):ej(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta,r[0]===a[0]&&r[1]===a[1])})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var n=(i.current.shards||[]).map(eC).filter(Boolean).filter(function(t){return t.contains(e.target)});(n.length>0?s(e,n[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),p=l.useCallback(function(e,a,r,n){var o={name:e,delta:a,target:r,should:n,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(o),setTimeout(function(){t.current=t.current.filter(function(e){return e!==o})},1)},[]),c=l.useCallback(function(e){a.current=ej(e),r.current=void 0},[]),f=l.useCallback(function(t){p(t.type,eS(t),t.target,s(t,e.lockRef.current))},[]),h=l.useCallback(function(t){p(t.type,ej(t),t.target,s(t,e.lockRef.current))},[]);l.useEffect(function(){return eA.push(o),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:h}),document.addEventListener("wheel",d,eb),document.addEventListener("touchmove",d,eb),document.addEventListener("touchstart",c,eb),function(){eA=eA.filter(function(e){return e!==o}),document.removeEventListener("wheel",d,eb),document.removeEventListener("touchmove",d,eb),document.removeEventListener("touchstart",c,eb)}},[]);var x=e.removeScrollBar,u=e.inert;return l.createElement(l.Fragment,null,u?l.createElement(o,{styles:"\n  .block-interactivity-".concat(n," {pointer-events: none;}\n  .allow-interactivity-").concat(n," {pointer-events: all;}\n")}):null,x?l.createElement(ex,{noRelative:e.noRelative,gapMode:e.gapMode}):null)},J.useMedium(i),et);var eE=l.forwardRef(function(e,t){return l.createElement(ee,_({},e,{ref:t,sideCar:ez}))});eE.classNames=ee.classNames,e.s(["f",0,eE],85369)},10772,e=>{"use strict";var t=e.i(71645),a=e.i(34620),r=Object.defineProperty,n=t[" useId ".trim().toString()]||(()=>void 0),o=0;function i(e){let[r,i]=t.useState(n());return(0,a.f)(()=>{e||i(e=>e??String(o++))},[e]),e||(r?`radix-${r}`:"")}r(i,"name",{value:"useId",configurable:!0}),e.s(["f",0,i])},33768,e=>{"use strict";var t=e.i(71645);e.s(["f",0,function(e,a,r){(0,t.useInsertionEffect)(()=>e.on(a,r),[e,a,r])}])},10542,e=>{"use strict";var t=e.i(60140),a=e.i(30551),r=e.i(86427),n=e.i(65566),o=e.i(71645),i=e.i(60830),s=e.i(87022);function l(e,t){let a,r=()=>{let{currentTime:r}=t,n=(null===r?0:r.value)/100;a!==n&&e(n),a=n};return s.y.preUpdate(r,!0),()=>(0,s.Y)(r)}function d(e){return!("u"<typeof window)&&(e?(0,a.G)():(0,a.a)())}var p=e.i(61327),c=e.i(83920),f=e.i(25791);let h=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),x={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function u(e,t,a,r){let n=a[t],{length:o,position:i}=x[t],s=n.current,l=a.time;n.current=Math.abs(e[`scroll${i}`]),n.scrollLength=e[`scroll${o}`]-e[`client${o}`],n.offset.length=0,n.offset[0]=0,n.offset[1]=n.scrollLength,n.progress=(0,c.f)(0,n.scrollLength,n.current);let d=r-l;n.velocity=d>50?0:(0,f.f)(n.current-s,d)}var g=e.i(44230),b=e.i(15923),m=e.i(76959),w=e.i(72846);let v={start:0,center:.5,end:1};function y(e,t,a=0){let r=0;if(e in v&&(e=v[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),a+r}let k=[0,0],j=[[0,0],[1,1]],S={x:0,y:0},C=new WeakMap,N=new WeakMap,A=new WeakMap,z=new WeakMap,E=new WeakMap,T=e=>e===document.scrollingElement?window:e;function R(e,{container:t=document.scrollingElement,trackContentSize:a=!1,...r}={}){if(!t)return i.f;let n=A.get(t);n||(n=new Set,A.set(t,n));let o=function(e,t,a,r={}){return{measure:t=>{!function(e,t=e,a){if(a.x.targetOffset=0,a.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)a.x.targetOffset+=r.offsetLeft,a.y.targetOffset+=r.offsetTop,r=r.offsetParent}a.x.targetLength=t===e?t.scrollWidth:t.clientWidth,a.y.targetLength=t===e?t.scrollHeight:t.clientHeight,a.x.containerLength=e.clientWidth,a.y.containerLength=e.clientHeight}(e,r.target,a),u(e,"x",a,t),u(e,"y",a,t),a.time=t,(r.offset||r.target)&&function(e,t,a){let{offset:r=j}=a,{target:n=e,axis:o="y"}=a,i="y"===o?"height":"width",s=n!==e?function(e,t){let a={x:0,y:0},r=e;for(;r&&r!==t;)if((0,w.f)(r))a.x+=r.offsetLeft,a.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){let e=r.getBoundingClientRect(),t=(r=r.parentElement).getBoundingClientRect();a.x+=e.left-t.left,a.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();a.x+=e,a.y+=t;let n=null,o=r.parentNode;for(;!n;)"svg"===o.tagName&&(n=o),o=r.parentNode;r=n}else break;return a}(n,e):S,l=n===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in n&&"svg"!==n.tagName?n.getBBox():{width:n.clientWidth,height:n.clientHeight},d={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let p=!t[o].interpolate,c=r.length;for(let e=0;e<c;e++){let a=function(e,t,a,r){let n=Array.isArray(e)?e:k,o=0;return"number"==typeof e?n=[e,e]:"string"==typeof e&&(n=(e=e.trim()).includes(" ")?e.split(" "):[e,v[e]?e:"0"]),(o=y(n[0],a,r))-y(n[1],t)}(r[e],d[i],l[i],s[o]);p||a===t[o].interpolatorOffsets[e]||(p=!0),t[o].offset[e]=a}p&&(t[o].interpolate=(0,g.f)(t[o].offset,(0,b.f)(r),{clamp:!1}),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=(0,m.f)(0,1,t[o].interpolate(t[o].current))}(e,a,r)},notify:()=>t(a)}}(t,e,{time:0,x:h(),y:h()},r);if(n.add(o),!C.has(t)){let e=()=>{for(let e of n)e.measure(s.I.timestamp);s.y.preUpdate(a)},a=()=>{for(let e of n)e.notify()},r=()=>s.y.read(e);C.set(t,r);let o=T(t);window.addEventListener("resize",r),t!==document.documentElement&&N.set(t,(0,p.f)(t,r)),o.addEventListener("scroll",r),r()}if(a&&!E.has(t)){let e=C.get(t),a={width:t.scrollWidth,height:t.scrollHeight};z.set(t,a);let r=s.y.read(()=>{let r=t.scrollWidth,n=t.scrollHeight;(a.width!==r||a.height!==n)&&(e(),a.width=r,a.height=n)},!0);E.set(t,r)}let l=C.get(t);return s.y.read(l,!1,!0),()=>{(0,s.Y)(l);let e=A.get(t);if(!e||(e.delete(o),e.size))return;let a=C.get(t);C.delete(t),a&&(T(t).removeEventListener("scroll",a),N.get(t)?.(),window.removeEventListener("resize",a));let r=E.get(t);r&&((0,s.Y)(r),E.delete(t)),z.delete(t)}}let M=[[[[0,1],[1,1]],"entry"],[[[0,0],[1,0]],"exit"],[[[1,0],[0,1]],"cover"],[j,"contain"]],F={start:0,end:1};function P(e){if(!e)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(let[t,a]of M)if(function(e,t){let a=function(e){if(2!==e.length)return;let t=[];for(let a of e)if(Array.isArray(a))t.push(a);else{if("string"!=typeof a)return;let e=function(e){let t=e.trim().split(/\s+/);if(2!==t.length)return;let a=F[t[0]],r=F[t[1]];if(void 0!==a&&void 0!==r)return[a,r]}(a);if(!e)return;t.push(e)}return t}(e);if(!a)return!1;for(let e=0;e<2;e++){let r=a[e],n=t[e];if(r[0]!==n[0]||r[1]!==n[1])return!1}return!0}(e,t))return{rangeStart:`${a} 0%`,rangeEnd:`${a} 100%`}}let L=new Map;function D(e){let t={value:0},a=R(a=>{t.value=100*a[e.axis].progress},e);return{currentTime:t,cancel:a}}function B({source:e,container:t,...a}){let{axis:r}=a;e&&(t=e);let n=L.get(t);n||(n=new Map,L.set(t,n));let o=a.target??"self",i=n.get(o);i||(i={},n.set(o,i));let s=r+(a.offset??[]).join(",");return i[s]||(a.target&&d(a.target)?P(a.offset)?i[s]=new ViewTimeline({subject:a.target,axis:r}):i[s]=D({container:t,...a}):d()?i[s]=new ScrollTimeline({source:t,axis:r}):i[s]=D({container:t,...a})),i[s]}function I(e,{axis:t="y",container:a=document.scrollingElement,...r}={}){let n,o,s;if(!a)return i.f;let p={axis:t,container:a,...r};return"function"==typeof e?function(e,t){return 2===e.length||t&&(t.target||t.offset)?R(a=>{e(a[t.axis].progress,a)},t):l(e,B(t))}(e,p):(n=B(p),o=p.target?P(p.offset):void 0,s=p.target?d(p.target)&&!!o:d(),e.attachTimeline({timeline:s?n:void 0,...o&&s&&{rangeStart:o.rangeStart,rangeEnd:o.rangeEnd},observe:e=>(e.pause(),l(t=>{e.time=e.iterationDuration*t},n))}))}var H=e.i(47414),Y=e.i(74008);let O=()=>({scrollX:(0,r.o)(0),scrollY:(0,r.o)(0),scrollXProgress:(0,r.o)(0),scrollYProgress:(0,r.o)(0)}),q=e=>!!e&&!e.current;function X(e,a,r,n){return{factory:o=>{let i,s=()=>{q(r)||q(n)?t.t.read(s):i=I(o,{...a,axis:e,container:r?.current||void 0,target:n?.current||void 0})};return t.t.read(s),()=>{(0,t.w)(s),i?.()}},times:[0,1],keyframes:[0,1],ease:e=>e,duration:1}}e.s(["f",0,function({container:e,target:r,...i}={}){var s;let l=(0,H.f)(O);s=i.offset,!("u"<typeof window)&&(r?(0,a.G)()&&!!P(s):(0,a.a)())&&(l.scrollXProgress.accelerate=X("x",i,e,r),l.scrollYProgress.accelerate=X("y",i,e,r));let d=(0,o.useRef)(null),p=(0,o.useRef)(!1),c=(0,o.useCallback)(()=>(d.current=I((e,{x:t,y:a})=>{l.scrollX.set(t.current),l.scrollXProgress.set(t.progress),l.scrollY.set(a.current),l.scrollYProgress.set(a.progress)},{...i,container:e?.current||void 0,target:r?.current||void 0}),()=>{d.current?.()}),[e,r,JSON.stringify(i.offset)]);return(0,Y.f)(()=>{if(p.current=!1,!(q(e)||q(r)))return c();p.current=!0},[c]),(0,o.useEffect)(()=>{let a;if(!p.current)return;let o=()=>{let t=q(e),o=q(r);(0,n.k)(!t,"Container ref is defined but not hydrated","use-scroll-ref"),(0,n.k)(!o,"Target ref is defined but not hydrated","use-scroll-ref"),t||o||(a=c())};return t.t.read(o),()=>{(0,t.w)(o),a?.()}},[c]),l}],10542)},95420,35382,e=>{"use strict";var t=e.i(44230),a=e.i(47414),r=e.i(87022),n=e.i(74008),o=e.i(86427),i=e.i(71645),s=e.i(37806);function l(e){let t=(0,a.f)(()=>(0,o.o)(e)),{isStatic:r}=(0,i.useContext)(s.f);if(r){let[,a]=(0,i.useState)(e);(0,i.useEffect)(()=>t.on("change",a),[])}return t}function d(e,t){let a=l(t()),o=()=>a.set(t());return o(),(0,n.f)(()=>{let t=()=>r.y.preRender(o,!1,!0),a=e.map(e=>e.on("change",t));return()=>{a.forEach(e=>e()),(0,r.Y)(o)}}),a}e.s(["f",0,l],35382);function p(e,t){let r=(0,a.f)(()=>[]);return d(e,()=>{r.length=0;let a=e.length;for(let t=0;t<a;t++)r[t]=e[t].get();return t(r)})}e.s(["f",0,function e(r,n,i,s){if("function"==typeof r){let e;return o.I.current=[],r(),e=d(o.I.current,r),o.I.current=void 0,e}if(void 0!==i&&!Array.isArray(i)&&"function"!=typeof n){var l=r,c=n,f=i,h=s;let t=(0,a.f)(()=>Object.keys(f)),o=(0,a.f)(()=>({}));for(let a of t)o[a]=e(l,c,f[a],h);return o}let x="function"==typeof n?n:function(...e){let a=!Array.isArray(e[0]),r=a?0:-1,n=e[0+r],o=e[1+r],i=e[2+r],s=e[3+r],l=(0,t.f)(o,i,s);return a?l(n):l}(n,i,s),u=Array.isArray(r)?p(r,x):p([r],([e])=>x(e)),g=Array.isArray(r)?void 0:r.accelerate;return g&&!g.isTransformed&&"function"!=typeof n&&Array.isArray(i)&&s?.clamp!==!1&&(u.accelerate={...g,times:n,keyframes:i,isTransformed:!0,...s?.ease?{ease:s.ease}:{}}),u}],95420)},25063,e=>{"use strict";let t=(0,e.i(75254).f)("arrow-down",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);e.s(["f",0,t],25063)},43531,78745,74886,87486,e=>{"use strict";var t=e.i(75254);let a=(0,t.f)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["f",0,a],78745),e.s(["f",0,a],43531);let r=(0,t.f)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);e.s(["f",0,r],74886);var n=e.i(43476),o=e.i(91918),i=e.i(25913),s=e.i(75157);let l=(0,i.f)("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});e.s(["f",0,function({className:e,variant:t,asChild:a=!1,...r}){let i=a?o.M:"span";return(0,n.jsx)(i,{"data-slot":"badge",className:(0,s.f)(l({variant:t}),e),...r})}],87486)},34754,e=>{"use strict";let t=(0,e.i(75254).f)("monitor-play",[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]]);e.s(["f",0,t],34754)},83086,e=>{"use strict";let t=(0,e.i(75254).f)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);e.s(["f",0,t],83086)},61683,e=>{"use strict";var t=e.i(43476),a=e.i(71645);let r=(0,e.i(75254).f)("arrow-up",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);var n=e.i(31178),o=e.i(47414),i=e.i(74008),s=e.i(21476),l=e.i(72846),d=a,p=e.i(37806);function c(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}class f extends d.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if((0,l.f)(t)&&e.isPresent&&!this.props.isPresent&&!1!==this.props.pop){let e=t.offsetParent,a=(0,l.f)(e)&&e.offsetWidth||0,r=(0,l.f)(e)&&e.offsetHeight||0,n=getComputedStyle(t),o=this.props.sizeRef.current;o.height=parseFloat(n.height),o.width=parseFloat(n.width),o.top=t.offsetTop,o.left=t.offsetLeft,o.right=a-o.width-o.left,o.bottom=r-o.height-o.top,o.direction=n.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function h({children:e,isPresent:r,anchorX:n,anchorY:o,root:i,pop:s}){let l=(0,d.useId)(),x=(0,d.useRef)(null),u=(0,d.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:g}=(0,d.useContext)(p.f),b=function(...e){return a.useCallback(function(...e){return t=>{let a=!1,r=e.map(e=>{let r=c(e,t);return a||"function"!=typeof r||(a=!0),r});if(a)return()=>{for(let t=0;t<r.length;t++){let a=r[t];"function"==typeof a?a():c(e[t],null)}}}}(...e),e)}(x,!1!==s?e.props?.ref??e?.ref:void 0);return(0,d.useInsertionEffect)(()=>{let{width:e,height:t,top:a,left:d,right:p,bottom:c,direction:f}=u.current;if(r||!1===s||!x.current||!e||!t)return;let h="rtl"===f,b="left"===n?h?`right: ${p}`:`left: ${d}`:h?`left: ${d}`:`right: ${p}`,m="bottom"===o?`bottom: ${c}`:`top: ${a}`;x.current.dataset.motionPopId=l;let w=document.createElement("style");g&&(w.nonce=g);let v=i??document.head;return v.appendChild(w),w.sheet&&w.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${b}px !important;
            ${m}px !important;
          }
        `),()=>{x.current?.removeAttribute("data-motion-pop-id"),v.contains(w)&&v.removeChild(w)}},[r]),(0,t.jsx)(f,{isPresent:r,childRef:x,sizeRef:u,pop:s,children:!1===s?e:d.cloneElement(e,{ref:b})})}let x=({children:e,initial:r,isPresent:n,onExitComplete:l,custom:d,presenceAffectsLayout:p,mode:c,anchorX:f,anchorY:x,root:g})=>{let b=(0,o.f)(u),m=(0,a.useId)(),w=(0,a.useRef)(n),v=(0,a.useRef)(l);(0,i.f)(()=>{w.current=n,v.current=l});let y=!0,k=(0,a.useMemo)(()=>(y=!1,{id:m,initial:r,isPresent:n,custom:d,onExitComplete:e=>{for(let t of(b.set(e,!0),b.values()))if(!t)return;l&&l()},register:e=>(b.set(e,!1),()=>{b.delete(e),w.current||b.size||v.current?.()})}),[n,b,l]);return p&&y&&(k={...k}),(0,a.useMemo)(()=>{b.forEach((e,t)=>b.set(t,!1))},[n]),a.useEffect(()=>{n||b.size||!l||l()},[n]),e=(0,t.jsx)(h,{pop:"popLayout"===c,isPresent:n,anchorX:f,anchorY:x,root:g,children:e}),(0,t.jsx)(s.f.Provider,{value:k,children:e})};function u(){return new Map}var g=e.i(64978);let b=e=>e.key||"";function m(e){let t=[];return a.Children.forEach(e,e=>{(0,a.isValidElement)(e)&&t.push(e)}),t}let w=({children:e,custom:r,initial:s=!0,onExitComplete:l,presenceAffectsLayout:d=!0,mode:p="sync",propagate:c=!1,anchorX:f="left",anchorY:h="top",root:u})=>{let[w,v]=(0,g.f)(c),y=(0,a.useMemo)(()=>m(e),[e]),k=c&&!w?[]:y.map(b),j=(0,a.useRef)(!0),S=(0,a.useRef)(y),C=(0,o.f)(()=>new Map),N=(0,a.useRef)(new Set),[A,z]=(0,a.useState)(y),[E,T]=(0,a.useState)(y);(0,i.f)(()=>{j.current=!1,S.current=y;for(let e=0;e<E.length;e++){let t=b(E[e]);k.includes(t)?(C.delete(t),N.current.delete(t)):!0!==C.get(t)&&C.set(t,!1)}},[E,k.length,k.join("-")]);let R=[];if(y!==A){let e=[...y];for(let t=0;t<E.length;t++){let a=E[t],r=b(a);k.includes(r)||(e.splice(t,0,a),R.push(a))}return"wait"===p&&R.length&&(e=R),T(m(e)),z(y),null}let{forceRender:M}=(0,a.useContext)(n.f);return(0,t.jsx)(t.Fragment,{children:E.map(e=>{let a=b(e),n=(!c||!!w)&&(y===E||k.includes(a));return(0,t.jsx)(x,{isPresent:n,initial:(!j.current||!!s)&&void 0,custom:r,presenceAffectsLayout:d,mode:p,root:u,onExitComplete:n?void 0:()=>{if(N.current.has(a)||!C.has(a))return;N.current.add(a),C.set(a,!0);let e=!0;C.forEach(t=>{t||(e=!1)}),e&&(M?.(),T(S.current),c&&v?.(),l&&l())},anchorX:f,anchorY:h,children:e},a)})})};var v=e.i(46932),y=e.i(33768),k=e.i(10542),j=e.i(79871);e.s(["BackToTop",0,function(){let{scrollY:e}=(0,k.f)(),[n,o]=(0,a.useState)(!1);return(0,y.f)(e,"change",e=>{o(e>600)}),(0,t.jsx)(w,{children:n&&(0,t.jsx)(v.f.button,{type:"button","aria-label":"Back to top",initial:{opacity:0,y:16,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:16,scale:.9},transition:{duration:.35,ease:j.EASE},whileHover:{scale:1.08,y:-2},whileTap:{scale:.92},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f07025] text-white shadow-lg shadow-[#f07025]/30 transition-colors hover:bg-[#e0611a]",children:(0,t.jsx)(r,{className:"h-5 w-5"})})})}],61683)},67919,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(43531),n=e.i(74886);let o=(0,e.i(75254).f)("paintbrush",[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]]);var i=e.i(46932),s=e.i(87486),l=e.i(74911),d=e.i(75157);let p=["dark","light","warm","cool","vibrant","minimal"],c=[{id:"midnight-ember",name:"Midnight Ember",vibe:"Deep ink night warmed by a glowing ember accent — the exact combo this site runs on.",tags:["dark","warm"],useCases:["SaaS","Dashboards","Developer tools"],colors:[{name:"Ink Night",hex:"#0B1120",role:"Background"},{name:"Slate Deep",hex:"#16213A",role:"Surface"},{name:"Ember Orange",hex:"#F07025",role:"Accent"},{name:"Cloud White",hex:"#F8FAFC",role:"Text"},{name:"Dusk Steel",hex:"#8CA3C3",role:"Muted"}]},{id:"forest-calm",name:"Forest Calm",vibe:"Deep pine greens with a fresh mint spark — calm, natural and trustworthy.",tags:["dark","cool"],useCases:["Wellness","Eco brands","Finance"],colors:[{name:"Pine Night",hex:"#0C1F17",role:"Background"},{name:"Forest Shade",hex:"#16352A",role:"Surface"},{name:"Spring Leaf",hex:"#4ADE80",role:"Accent"},{name:"Mint Foam",hex:"#ECFDF5",role:"Text"},{name:"Fern Mist",hex:"#7FB89A",role:"Muted"}]},{id:"royal-gold",name:"Royal Gold",vibe:"Near-black warmth with brushed gold — quiet luxury without the noise.",tags:["dark","warm"],useCases:["Luxury","Law firms","Finance"],colors:[{name:"Onyx Night",hex:"#12100C",role:"Background"},{name:"Espresso Black",hex:"#221D13",role:"Surface"},{name:"Royal Gold",hex:"#D4A94A",role:"Accent"},{name:"Champagne",hex:"#F7F1E3",role:"Text"},{name:"Bronze Mist",hex:"#9A8A68",role:"Muted"}]},{id:"ocean-teal",name:"Ocean Teal",vibe:"Deep ocean tones with a mint glow — fresh, clean and quietly modern.",tags:["dark","cool"],useCases:["Travel","Fintech","Health"],colors:[{name:"Abyss Teal",hex:"#062A30",role:"Background"},{name:"Deep Kelp",hex:"#0E3E46",role:"Surface"},{name:"Lagoon Mint",hex:"#2DD4BF",role:"Accent"},{name:"Foam White",hex:"#F0FDFA",role:"Text"},{name:"Reef Mist",hex:"#7FB8B0",role:"Muted"}]},{id:"warm-sand",name:"Warm Sand",vibe:"Sun-baked neutrals with terracotta heat — soft, human and editorial.",tags:["light","warm","minimal"],useCases:["Portfolio","Lifestyle","Interior"],colors:[{name:"Ivory Sand",hex:"#FAF6F0",role:"Background"},{name:"Dune Beige",hex:"#EFE4D4",role:"Surface"},{name:"Terracotta",hex:"#C2703D",role:"Accent"},{name:"Roast Brown",hex:"#3E2E22",role:"Text"},{name:"Mocha Mist",hex:"#97897A",role:"Muted"}]},{id:"paper-mono",name:"Paper Mono",vibe:"Pure black-and-white discipline — content first, chrome last.",tags:["light","minimal"],useCases:["Editorial","Agency","Documentation"],colors:[{name:"Pure White",hex:"#FFFFFF",role:"Background"},{name:"Paper Gray",hex:"#F4F4F5",role:"Surface"},{name:"Ink Black",hex:"#18181B",role:"Accent"},{name:"Graphite",hex:"#52525B",role:"Text"},{name:"Silver Fog",hex:"#A1A1AA",role:"Muted"}]},{id:"coral-dusk",name:"Coral Dusk",vibe:"Blush creams with a coral jolt — friendly, appetizing and warm.",tags:["light","warm","vibrant"],useCases:["Food","Events","Lifestyle"],colors:[{name:"Shell Cream",hex:"#FFF4F0",role:"Background"},{name:"Peach Blush",hex:"#FFDCD2",role:"Surface"},{name:"Coral Punch",hex:"#FF6B5E",role:"Accent"},{name:"Rosewood",hex:"#5C2320",role:"Text"},{name:"Clay Rose",hex:"#C98F86",role:"Muted"}]},{id:"cyber-grape",name:"Cyber Grape",vibe:"A violet void with a lilac glow — bold, playful and futuristic.",tags:["dark","vibrant"],useCases:["Gaming","Music","Crypto"],colors:[{name:"Void Plum",hex:"#0D0B1A",role:"Background"},{name:"Deep Violet",hex:"#241B3E",role:"Surface"},{name:"Lilac Pop",hex:"#A78BFA",role:"Accent"},{name:"Petal White",hex:"#F5F3FF",role:"Text"},{name:"Iris Fog",hex:"#8E7CC3",role:"Muted"}]},{id:"neo-citrus",name:"Neo Citrus",vibe:"Citrus creams with tangerine energy — loud in the best possible way.",tags:["light","warm","vibrant"],useCases:["Marketing","Startups","Education"],colors:[{name:"Cream Lemon",hex:"#FFFBEA",role:"Background"},{name:"Soft Lemon",hex:"#FDEBB2",role:"Surface"},{name:"Tangerine",hex:"#F97316",role:"Accent"},{name:"Charcoal",hex:"#1C1917",role:"Text"},{name:"Dried Citrus",hex:"#8A7A55",role:"Muted"}]},{id:"berry-bloom",name:"Berry Bloom",vibe:"Rose creams with berry confidence — soft power for bold brands.",tags:["light","vibrant"],useCases:["Beauty","Fashion","Kids"],colors:[{name:"Blossom White",hex:"#FFF1F6",role:"Background"},{name:"Rose Petal",hex:"#FBD5E4",role:"Surface"},{name:"Berry Punch",hex:"#DB2777",role:"Accent"},{name:"Mulberry",hex:"#4C0519",role:"Text"},{name:"Dusty Rose",hex:"#C0839E",role:"Muted"}]}];var f=e.i(79871);async function h(e){try{return await navigator.clipboard.writeText(e),!0}catch{try{let t=document.createElement("textarea");return t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),!0}catch{return!1}}}function x({colors:e,tags:a}){let[r,n,o,i,s]=e.map(e=>e.hex);return(0,t.jsxs)("div",{"aria-hidden":"true",className:"pointer-events-none relative h-40 overflow-hidden border-b",style:{backgroundColor:r},children:[(0,t.jsxs)("div",{className:"absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04]",children:[(0,t.jsxs)("div",{className:"px-4 pt-10",children:[(0,t.jsx)("div",{className:"h-3 w-2/3 rounded-full",style:{backgroundColor:i,opacity:.92}}),(0,t.jsx)("div",{className:"mt-2 h-2 w-1/2 rounded-full",style:{backgroundColor:s,opacity:.5}}),(0,t.jsxs)("div",{className:"mt-3 flex items-center gap-2",children:[(0,t.jsx)("span",{className:"h-5 w-16 rounded-full",style:{backgroundColor:o}}),(0,t.jsx)("span",{className:"h-5 w-12 rounded-full border",style:{borderColor:s,opacity:.55}})]})]}),(0,t.jsx)("div",{className:"absolute inset-x-4 bottom-3 flex gap-2",children:[0,1,2].map(e=>(0,t.jsxs)("div",{className:"h-10 flex-1 rounded-md p-1.5",style:{backgroundColor:n},children:[(0,t.jsx)("span",{className:"block h-1.5 w-6 rounded-full",style:{backgroundColor:o,opacity:0===e?1:.4}}),(0,t.jsx)("span",{className:"mt-1.5 block h-1 w-full rounded-full",style:{backgroundColor:s,opacity:.35}})]},e))})]}),(0,t.jsx)("span",{className:"absolute left-3 top-3 rounded-full bg-slate-950/70 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-slate-300 backdrop-blur",children:a.join(" · ")})]})}function u({palette:e,index:o}){let{toast:d}=(0,l.f)(),[p,c]=(0,a.useState)(null),[g,b]=(0,a.useState)(!1),m=e.colors[3].hex,w=async e=>{await h(e.hex)?(c(e.hex),d({title:"Hex code copied",description:`${e.hex} — ${e.name}`}),setTimeout(()=>c(null),1600)):d({title:"Copy failed",description:"Please copy the hex code manually.",variant:"destructive"})},v=async()=>{let t;await h((t=e.colors.map(e=>`  --${e.role.toLowerCase()}: ${e.hex}; /* ${e.name} */`),`/* ${e.name} — color palette from CSS Effects Lab */
:root {
${t.join("\n")}
}`))?(b(!0),d({title:"Palette copied as CSS",description:`${e.name} variables are on your clipboard.`}),setTimeout(()=>b(!1),1600)):d({title:"Copy failed",description:"Please copy the variables manually.",variant:"destructive"})};return(0,t.jsxs)(i.f.article,{initial:{opacity:0,y:26},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.65,delay:o%3*.1,ease:f.EASE},className:"group flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#f07025]/45 hover:shadow-lg hover:shadow-[#f07025]/5",children:[(0,t.jsx)(x,{colors:e.colors,tags:e.tags}),(0,t.jsxs)("div",{className:"flex flex-1 flex-col gap-3 p-5",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-base font-semibold tracking-tight",children:e.name}),(0,t.jsx)("p",{className:"mt-1.5 text-sm leading-relaxed text-muted-foreground",children:e.vibe})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-1.5",children:e.useCases.map(e=>(0,t.jsx)(s.f,{variant:"secondary",className:"px-2 py-0 text-[11px] font-normal",children:e},e))}),(0,t.jsx)("div",{className:"mt-1 grid grid-cols-5 gap-1.5",children:e.colors.map(e=>(0,t.jsxs)("button",{type:"button",onClick:()=>w(e),"aria-label":`Copy ${e.name} ${e.hex}`,className:"group/swatch flex min-w-0 flex-col items-center gap-1 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#f07025]",children:[(0,t.jsx)("span",{className:"relative flex h-11 w-full items-center justify-center rounded-md border shadow-sm transition-transform duration-300 group-hover/swatch:-translate-y-0.5 group-hover/swatch:scale-[1.07]",style:{backgroundColor:e.hex},children:p===e.hex?(0,t.jsx)(r.f,{className:"h-4 w-4 drop-shadow",style:{color:m}}):null}),(0,t.jsx)("span",{className:"font-mono text-[10px] leading-none tracking-wide text-foreground/80",children:e.hex}),(0,t.jsx)("span",{className:"w-full truncate text-center text-[10px] leading-tight text-muted-foreground",title:e.name,children:e.name})]},e.hex+e.role))}),(0,t.jsx)("button",{type:"button",onClick:v,"aria-label":`Copy ${e.name} palette as CSS variables`,className:"mt-auto inline-flex h-9 items-center justify-center gap-1.5 rounded-md border bg-background pt-0 text-xs font-medium transition-colors hover:border-[#f07025] hover:text-[#f07025]",children:g?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.f,{className:"h-3.5 w-3.5 text-green-600"}),"Variables copied"]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.f,{className:"h-3.5 w-3.5"}),"Copy CSS variables"]})})]})]})}function g(){return(0,t.jsx)(f.Reveal,{delay:.2,children:(0,t.jsxs)("div",{className:"mt-10 flex flex-col gap-5 rounded-xl border bg-card p-6 shadow-sm sm:flex-row sm:items-center",children:[(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsxs)("h3",{className:"inline-flex items-center gap-2 text-base font-semibold tracking-tight",children:[(0,t.jsx)(o,{className:"h-4 w-4 text-[#f07025]"}),"The 60-30-10 rule"]}),(0,t.jsxs)("p",{className:"mt-2 text-sm leading-relaxed text-muted-foreground",children:["Give roughly ",(0,t.jsx)("strong",{className:"text-foreground",children:"60%"})," of the page to your background,"," ",(0,t.jsx)("strong",{className:"text-foreground",children:"30%"})," to surfaces and text, and save your loudest color for the final"," ",(0,t.jsx)("strong",{className:"text-foreground",children:"10%"}),". Every palette below already follows this balance — pick one and it will just work."]})]}),(0,t.jsxs)("div",{className:"sm:w-64",children:[(0,t.jsxs)("div",{className:"flex h-3.5 overflow-hidden rounded-full border shadow-inner","aria-hidden":"true",children:[(0,t.jsx)("span",{className:"w-[60%] bg-muted"}),(0,t.jsx)("span",{className:"w-[30%] bg-foreground/25"}),(0,t.jsx)("span",{className:"w-[10%] bg-[#f07025]"})]}),(0,t.jsxs)("div",{className:"mt-2.5 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",children:[(0,t.jsxs)("span",{className:"inline-flex items-center gap-1.5",children:[(0,t.jsx)("span",{className:"h-2 w-2 rounded-full bg-muted ring-1 ring-border"}),"60% Dominant"]}),(0,t.jsxs)("span",{className:"inline-flex items-center gap-1.5",children:[(0,t.jsx)("span",{className:"h-2 w-2 rounded-full bg-foreground/25"}),"30% Secondary"]}),(0,t.jsxs)("span",{className:"inline-flex items-center gap-1.5",children:[(0,t.jsx)("span",{className:"h-2 w-2 rounded-full bg-[#f07025]"}),"10% Accent"]})]})]})]})})}e.s(["ColorPalettes",0,function(){let[e,r]=(0,a.useState)("all"),n=(0,a.useMemo)(()=>"all"===e?c:c.filter(t=>t.tags.includes(e)),[e]);return(0,t.jsx)("section",{id:"palettes",className:"scroll-mt-20 bg-muted/30",children:(0,t.jsxs)("div",{className:"mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8",children:[(0,t.jsxs)("div",{className:"mx-auto max-w-2xl text-center",children:[(0,t.jsx)(f.Reveal,{children:(0,t.jsx)("p",{className:"font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#f07025]",children:"Color Palettes"})}),(0,t.jsx)(f.Reveal,{delay:.08,children:(0,t.jsx)("h2",{className:"mt-3 text-3xl font-semibold tracking-tight sm:text-4xl",children:"Color combos that just work"})}),(0,t.jsx)(f.Reveal,{delay:.16,children:(0,t.jsx)("p",{className:"mt-4 text-base leading-relaxed text-muted-foreground",children:"Ten hand-picked palettes with named colors, hex codes and live previews. Click any swatch to copy its hex, or grab the whole palette as ready-to-paste CSS variables."})})]}),(0,t.jsxs)(f.Reveal,{delay:.24,children:[(0,t.jsx)("div",{role:"group","aria-label":"Filter palettes by mood",className:"mt-10 flex flex-wrap items-center justify-center gap-2",children:["all",...p].map(a=>{let n=e===a;return(0,t.jsx)("button",{type:"button",onClick:()=>r(a),"aria-pressed":n,className:(0,d.f)("rounded-full border px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-wider transition-all duration-300",n?"border-transparent bg-[#f07025] text-white shadow-sm":"border-border bg-background text-muted-foreground hover:-translate-y-0.5 hover:border-[#f07025]/50 hover:text-foreground"),children:a},a)})}),(0,t.jsxs)("p",{className:"mt-3 text-center font-mono text-[11px] uppercase tracking-wider text-muted-foreground","aria-live":"polite",children:["Showing ",n.length," of ",c.length," palettes"]})]}),(0,t.jsx)("div",{className:"mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",children:n.map((e,a)=>(0,t.jsx)(u,{palette:e,index:a},e.id))}),(0,t.jsx)(g,{})]})})}],67919)},90890,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(25063),n=e.i(46932),o=e.i(10542),i=e.i(95420),s=e.i(33277),l=e.i(79871);e.s(["CtaBand",0,function(){let e=(0,a.useRef)(null),{scrollYProgress:d}=(0,o.f)({target:e,offset:["start end","end start"]}),p=(0,i.f)(d,[0,1],[50,-50]),c=(0,i.f)(d,[0,1],[-40,60]);return(0,t.jsx)("section",{"aria-label":"Get started",children:(0,t.jsx)("div",{className:"mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8",children:(0,t.jsxs)(n.f.div,{ref:e,initial:{opacity:0,y:28},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.7,ease:l.EASE},className:"relative overflow-hidden rounded-2xl bg-slate-950 px-6 py-14 text-center text-white sm:px-12 md:py-16",children:[(0,t.jsx)(n.f.div,{"aria-hidden":"true",style:{y:p},className:"pointer-events-none absolute -left-20 -top-20 h-56 w-56",children:(0,t.jsx)("div",{className:"fx-float h-full w-full rounded-full bg-[#f07025]/25 blur-[90px]"})}),(0,t.jsx)(n.f.div,{"aria-hidden":"true",style:{y:c},className:"pointer-events-none absolute -bottom-24 -right-16 h-56 w-56",children:(0,t.jsx)("div",{className:"fx-float-slow h-full w-full rounded-full bg-[#ec4899]/20 blur-[90px]"})}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(n.f.h2,{initial:{opacity:0,y:22},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.65,delay:.1,ease:l.EASE},className:"mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl",children:"Ready to ship something beautiful?"}),(0,t.jsxs)(n.f.p,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.65,delay:.2,ease:l.EASE},className:"mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70",children:[s.a," hand-crafted effects are waiting in the gallery. Find the one your project needs and copy it in a single click — free, forever."]}),(0,t.jsx)(n.f.div,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.65,delay:.3,ease:l.EASE},className:"mt-8",children:(0,t.jsxs)("a",{href:"#gallery",className:"fx-btn-shine inline-flex h-12 items-center gap-2 rounded-full bg-[#f07025] px-8 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0611a] hover:shadow-lg hover:shadow-[#f07025]/30 active:translate-y-0 active:scale-[0.97]",children:["Browse the library",(0,t.jsx)(r.f,{className:"h-4 w-4"})]})})]})]})})})}])},20703,e=>{"use strict";let t;var a=e.i(43476),r=e.i(71645),n=e.i(75254);let o=(0,n.f)("arrow-down-wide-narrow",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]]);var i=e.i(31171),i=i;let s=(0,n.f)("flask-conical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]),l=(0,n.f)("heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),d=(0,n.f)("layout-grid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]),p=(0,n.f)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]),c=(0,n.f)("search-x",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);var f=e.i(93479),h=e.i(74080);function x(e,[t,a]){return Math.min(a,Math.max(t,e))}(0,Object.defineProperty)(x,"name",{value:"clamp",configurable:!0});var u=e.i(81140),g=e.i(75830),b=e.i(20783),m=e.i(30030),w=e.i(86318),v=e.i(26330),y=e.i(3536),k=e.i(65491),j=e.i(10772);let S=["top","right","bottom","left"],C=Math.min,N=Math.max,A=Math.round,z=Math.floor,E=e=>({x:e,y:e}),T={left:"right",right:"left",bottom:"top",top:"bottom"};function R(e,t){return"function"==typeof e?e(t):e}function M(e){return e.split("-")[0]}function F(e){return e.split("-")[1]}function P(e){return"x"===e?"y":"x"}function L(e){return"y"===e?"height":"width"}function D(e){let t=e[0];return"t"===t||"b"===t?"y":"x"}function B(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}let I=["left","right"],H=["right","left"],Y=["top","bottom"],O=["bottom","top"];function q(e){let t=M(e);return T[t]+e.slice(t.length)}function X(e){var t,a,r,n;return"number"!=typeof e?{top:null!=(t=e.top)?t:0,right:null!=(a=e.right)?a:0,bottom:null!=(r=e.bottom)?r:0,left:null!=(n=e.left)?n:0}:{top:e,right:e,bottom:e,left:e}}function V(e){let{x:t,y:a,width:r,height:n}=e;return{width:r,height:n,top:a,left:t,right:t+r,bottom:a+n,x:t,y:a}}function _(e,t,a){let r,{reference:n,floating:o}=e,i=D(t),s=P(D(t)),l=L(s),d=M(t),p=n.x+n.width/2-o.width/2,c=n.y+n.height/2-o.height/2,f=n[l]/2-o[l]/2;switch(d){case"top":r={x:p,y:n.y-o.height};break;case"bottom":r={x:p,y:n.y+n.height};break;case"right":r={x:n.x+n.width,y:c};break;case"left":r={x:n.x-o.width,y:c};break;default:r={x:n.x,y:n.y}}let h=F(t);return h&&(r[s]+=f*("end"===h?1:-1)*(a&&"y"===i?-1:1)),r}async function W(e,t){var a;void 0===t&&(t={});let{x:r,y:n,platform:o,rects:i,elements:s,strategy:l}=e,{boundary:d="clippingAncestors",rootBoundary:p="viewport",elementContext:c="floating",altBoundary:f=!1,padding:h=0}=R(t,e),x=X(h),u=s[f?"floating"===c?"reference":"floating":c],g=V(await o.getClippingRect({element:null==(a=await (null==o.isElement?void 0:o.isElement(u)))||a?u:u.contextElement||await (null==o.getDocumentElement?void 0:o.getDocumentElement(s.floating)),boundary:d,rootBoundary:p,strategy:l})),b="floating"===c?{x:r,y:n,width:i.floating.width,height:i.floating.height}:i.reference,m=await (null==o.getOffsetParent?void 0:o.getOffsetParent(s.floating)),w=await (null==o.isElement?void 0:o.isElement(m))&&await (null==o.getScale?void 0:o.getScale(m))||{x:1,y:1},v=V(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:b,offsetParent:m,strategy:l}):b);return{top:(g.top-v.top+x.top)/w.y,bottom:(v.bottom-g.bottom+x.bottom)/w.y,left:(g.left-v.left+x.left)/w.x,right:(v.right-g.right+x.right)/w.x}}let G=async(e,t,a)=>{let{placement:r="bottom",strategy:n="absolute",middleware:o=[],platform:i}=a,s=i.detectOverflow?i:{...i,detectOverflow:W},l=await (null==i.isRTL?void 0:i.isRTL(t)),d=await i.getElementRects({reference:e,floating:t,strategy:n}),{x:p,y:c}=_(d,r,l),f=r,h=0,x={};for(let a=0;a<o.length;a++){let u=o[a];if(!u)continue;let{name:g,fn:b}=u,{x:m,y:w,data:v,reset:y}=await b({x:p,y:c,initialPlacement:r,placement:f,strategy:n,middlewareData:x,rects:d,platform:s,elements:{reference:e,floating:t}});p=null!=m?m:p,c=null!=w?w:c,x[g]={...x[g],...v},y&&h<50&&(h++,"object"==typeof y&&(y.placement&&(f=y.placement),y.rects&&(d=!0===y.rects?await i.getElementRects({reference:e,floating:t,strategy:n}):y.rects),{x:p,y:c}=_(d,f,l)),a=-1)}return{x:p,y:c,placement:f,strategy:n,middlewareData:x}};function $(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function U(e){return S.some(t=>e[t]>=0)}let K=new Set(["left","top"]);async function Z(e,t){let{placement:a,platform:r,elements:n}=e,o=await (null==r.isRTL?void 0:r.isRTL(n.floating)),i=M(a),s=F(a),l="y"===D(a),d=K.has(i)?-1:1,p=o&&l?-1:1,c=R(t,e),{mainAxis:f,crossAxis:h,alignmentAxis:x}="number"==typeof c?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return s&&"number"==typeof x&&(h="end"===s?-1*x:x),l?{x:h*p,y:f*d}:{x:f*d,y:h*p}}function J(){return"u">typeof window}function Q(e){return ea(e)?(e.nodeName||"").toLowerCase():"#document"}function ee(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function et(e){var t;return null==(t=(ea(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function ea(e){return!!J()&&(e instanceof Node||e instanceof ee(e).Node)}function er(e){return!!J()&&(e instanceof Element||e instanceof ee(e).Element)}function en(e){return!!J()&&(e instanceof HTMLElement||e instanceof ee(e).HTMLElement)}function eo(e){return!(!J()||"u"<typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof ee(e).ShadowRoot)}function ei(e){let{overflow:t,overflowX:a,overflowY:r,display:n}=ex(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+a)&&"inline"!==n&&"contents"!==n}function es(e){try{if(e.matches(":popover-open"))return!0}catch(e){}try{return e.matches(":modal")}catch(e){return!1}}let el=/transform|translate|scale|rotate|perspective|filter/,ed=/paint|layout|strict|content/,ep=e=>!!e&&"none"!==e;function ec(e){let t=er(e)?ex(e):e;return ep(t.transform)||ep(t.translate)||ep(t.scale)||ep(t.rotate)||ep(t.perspective)||!ef()&&(ep(t.backdropFilter)||ep(t.filter))||el.test(t.willChange||"")||ed.test(t.contain||"")}function ef(){return null==t&&(t="u">typeof CSS&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),t}function eh(e){return/^(html|body|#document)$/.test(Q(e))}function ex(e){return ee(e).getComputedStyle(e)}function eu(e){return er(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function eg(e){if("html"===Q(e))return e;let t=e.assignedSlot||e.parentNode||eo(e)&&e.host||et(e);return eo(t)?t.host:t}function eb(e,t,a){var r;void 0===t&&(t=[]),void 0===a&&(a=!0);let n=function e(t){let a=eg(t);return eh(a)?(t.ownerDocument||t).body:en(a)&&ei(a)?a:e(a)}(e),o=n===(null==(r=e.ownerDocument)?void 0:r.body),i=ee(n);if(!o)return t.concat(n,eb(n,[],a));{let e=em(i);return t.concat(i,i.visualViewport||[],ei(n)?n:[],e&&a?eb(e):[])}}function em(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ew(e){let t=ex(e),a=parseFloat(t.width)||0,r=parseFloat(t.height)||0,n=en(e),o=n?e.offsetWidth:a,i=n?e.offsetHeight:r,s=A(a)!==o||A(r)!==i;return s&&(a=o,r=i),{width:a,height:r,$:s}}function ev(e){return er(e)?e:e.contextElement}function ey(e){let t=ev(e);if(!en(t))return E(1);let a=t.getBoundingClientRect(),{width:r,height:n,$:o}=ew(t),i=(o?A(a.width):a.width)/r,s=(o?A(a.height):a.height)/n;return i&&Number.isFinite(i)||(i=1),s&&Number.isFinite(s)||(s=1),{x:i,y:s}}let ek=E(0);function ej(e){let t=ee(e);return ef()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:ek}function eS(e,t,a,r){var n;void 0===t&&(t=!1),void 0===a&&(a=!1);let o=e.getBoundingClientRect(),i=ev(e),s=E(1);t&&(r?er(r)&&(s=ey(r)):s=ey(e));let l=(void 0===(n=a)&&(n=!1),r&&n&&r===ee(i))?ej(i):E(0),d=(o.left+l.x)/s.x,p=(o.top+l.y)/s.y,c=o.width/s.x,f=o.height/s.y;if(i&&r){let e=ee(i),t=er(r)?ee(r):r,a=e,n=em(a);for(;n&&t!==a;){let e=ey(n),t=n.getBoundingClientRect(),r=ex(n),o=t.left+(n.clientLeft+parseFloat(r.paddingLeft))*e.x,i=t.top+(n.clientTop+parseFloat(r.paddingTop))*e.y;d*=e.x,p*=e.y,c*=e.x,f*=e.y,d+=o,p+=i,n=em(a=ee(n))}}return V({width:c,height:f,x:d,y:p})}function eC(e,t){let a=eu(e).scrollLeft;return t?t.left+a:eS(et(e)).left+a}function eN(e,t){let a=e.getBoundingClientRect();return{x:a.left+t.scrollLeft-eC(e,a),y:a.top+t.scrollTop}}function eA(e,t,a){var r;let n;if("viewport"===t||"layoutViewport"===t)n=function(e,t,a){void 0===a&&(a="viewport");let r="layoutViewport"===a,n=ee(e),o=et(e),i=n.visualViewport,s=o.clientWidth,l=o.clientHeight,d=0,p=0;if(i){let e=!ef()||"fixed"===t;r?e||(d=-i.offsetLeft,p=-i.offsetTop):(s=i.width,l=i.height,e&&(d=i.offsetLeft,p=i.offsetTop))}if(0>=eC(o)){let e=o.ownerDocument,t=e.body,a=getComputedStyle(t),r="CSS1Compat"===e.compatMode&&parseFloat(a.marginLeft)+parseFloat(a.marginRight)||0,n=Math.abs(o.clientWidth-t.clientWidth-r),i="stable both-edges"===getComputedStyle(o).scrollbarGutter?n/2:n;i<=25&&(s-=i)}return{width:s,height:l,x:d,y:p}}(e,a,t);else if("document"===t){let t,a,o,i,s,l;t=eu(r=et(e)),a=r.ownerDocument.body,o=N(r.scrollWidth,r.clientWidth,a.scrollWidth,a.clientWidth),i=N(r.scrollHeight,r.clientHeight,a.scrollHeight,a.clientHeight),s=-t.scrollLeft+eC(r),l=-t.scrollTop,"rtl"===ex(a).direction&&(s+=N(r.clientWidth,a.clientWidth)-o),n={width:o,height:i,x:s,y:l}}else if(er(t)){let e,r,o,i,s,l;r=(e=eS(t,!0,"fixed"===a)).top+t.clientTop,o=e.left+t.clientLeft,i=ey(t),s=t.clientWidth*i.x,l=t.clientHeight*i.y,n={width:s,height:l,x:o*i.x,y:r*i.y}}else{let a=ej(e);n={x:t.x-a.x,y:t.y-a.y,width:t.width,height:t.height}}return V(n)}function ez(e){return"static"===ex(e).position}function eE(e,t){if(!en(e)||"fixed"===ex(e).position)return null;if(t)return t(e);let a=e.offsetParent;return et(e)===a&&(a=a.ownerDocument.body),a}function eT(e,t){var a;let r=ee(e);if(es(e))return r;if(!en(e)){let t=eg(e);for(;t&&!eh(t);){if(er(t)&&!ez(t))return t;t=eg(t)}return r}let n=eE(e,t);for(;n&&(a=n,/^(table|td|th)$/.test(Q(a)))&&ez(n);)n=eE(n,t);return n&&eh(n)&&ez(n)&&!ec(n)?r:n||function(e){let t=eg(e);for(;en(t)&&!eh(t);){if(ec(t))return t;if(es(t))break;t=eg(t)}return null}(e)||r}let eR=async function(e){let t=this.getOffsetParent||eT,a=this.getDimensions,r=await a(e.floating);return{reference:function(e,t,a){let r=en(t),n=et(t),o="fixed"===a,i=eS(e,!0,o,t),s={scrollLeft:0,scrollTop:0},l=E(0);if((r||!o)&&(("body"!==Q(t)||ei(n))&&(s=eu(t)),r)){let e=eS(t,!0,o,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}!r&&n&&(l.x=eC(n));let d=!n||r||o?E(0):eN(n,s);return{x:i.left+s.scrollLeft-l.x-d.x,y:i.top+s.scrollTop-l.y-d.y,width:i.width,height:i.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},eM={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:a,offsetParent:r,strategy:n}=e,o="fixed"===n,i=et(r),s=!!t&&es(t.floating);if(r===i||s&&o)return a;let l={scrollLeft:0,scrollTop:0},d=E(1),p=E(0),c=en(r);if((c||!o)&&(("body"!==Q(r)||ei(i))&&(l=eu(r)),c)){let e=eS(r);d=ey(r),p.x=e.x+r.clientLeft,p.y=e.y+r.clientTop}let f=!i||c||o?E(0):eN(i,l);return{width:a.width*d.x,height:a.height*d.y,x:a.x*d.x-l.scrollLeft*d.x+p.x+f.x,y:a.y*d.y-l.scrollTop*d.y+p.y+f.y}},getDocumentElement:et,getClippingRect:function(e){let{element:t,boundary:a,rootBoundary:r,strategy:n}=e,o=[..."clippingAncestors"===a?es(t)?[]:function(e,t){let a=t.get(e);if(a)return a;let r=eb(e,[],!1).filter(e=>er(e)&&"body"!==Q(e)),n=null,o="fixed"===ex(e).position,i=o?eg(e):e;for(;er(i)&&!eh(i);){let e=ex(i),t=ec(i),a=n?n.position:o?"fixed":"";t||"fixed"!==a&&("absolute"!==a||"static"!==e.position)?n=e:r=r.filter(e=>e!==i),i=eg(i)}return t.set(e,r),r}(t,this._c):[].concat(a),r],i=eA(t,o[0],n),s=i.top,l=i.right,d=i.bottom,p=i.left;for(let e=1;e<o.length;e++){let a=eA(t,o[e],n);s=N(a.top,s),l=C(a.right,l),d=C(a.bottom,d),p=N(a.left,p)}return{width:l-p,height:d-s,x:p,y:s}},getOffsetParent:eT,getElementRects:eR,getClientRects:function(e){return e.getClientRects?Array.from(e.getClientRects()):[]},getDimensions:function(e){let{width:t,height:a}=ew(e);return{width:t,height:a}},getScale:ey,isElement:er,isRTL:function(e){return"rtl"===ex(e).direction}};function eF(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}let eP=e=>({name:"arrow",options:e,async fn(t){let{x:a,y:r,placement:n,rects:o,platform:i,elements:s,middlewareData:l}=t,{element:d,padding:p=0}=R(e,t)||{};if(null==d)return{};let c=X(p),f={x:a,y:r},h=P(D(n)),x=L(h),u=await i.getDimensions(d),g="y"===h,b=g?"clientHeight":"clientWidth",m=o.reference[x]+o.reference[h]-f[h]-o.floating[x],w=f[h]-o.reference[h],v=await (null==i.getOffsetParent?void 0:i.getOffsetParent(d)),y=v?v[b]:0;y&&await (null==i.isElement?void 0:i.isElement(v))||(y=s.floating[b]||o.floating[x]);let k=y/2-u[x]/2-1,j=C(c[g?"top":"left"],k),S=C(c[g?"bottom":"right"],k),A=y-u[x]-S,z=y/2-u[x]/2+(m/2-w/2),E=N(j,C(z,A)),T=!l.arrow&&null!=F(n)&&z!==E&&o.reference[x]/2-(z<j?j:S)-u[x]/2<0,M=T?z<j?z-j:z-A:0;return{[h]:f[h]+M,data:{[h]:E,centerOffset:z-E-M,...T&&{alignmentOffset:M}},reset:T}}});var eL="u">typeof document?r.useLayoutEffect:function(){};function eD(e,t){let a,r,n;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((a=e.length)!==t.length)return!1;for(r=a;0!=r--;)if(!eD(e[r],t[r]))return!1;return!0}if((a=(n=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(r=a;0!=r--;)if(!({}).hasOwnProperty.call(t,n[r]))return!1;for(r=a;0!=r--;){let a=n[r];if(("_owner"!==a||!e.$$typeof)&&!eD(e[a],t[a]))return!1}return!0}return e!=e&&t!=t}function eB(e){return"u"<typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function eI(e,t){let a=eB(e);return Math.round(t*a)/a}function eH(e){let t=r.useRef(e);return eL(()=>{t.current=e}),t}var eY=e.i(48425),eO=Object.defineProperty,eq=(eO(function(e,t){let{children:r,width:n=10,height:o=5,...i}=e;return(0,a.jsx)(eY.V.svg,{...i,ref:t,width:n,height:o,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?r:(0,a.jsx)("polygon",{points:"0,0 30,0 15,10"})})},"name",{value:"Arrow",configurable:!0}),e.i(30207)),eX=e.i(34620);function eV(e){let[t,a]=r.useState(void 0);return(0,eX.f)(()=>{if(e){a({width:e.offsetWidth,height:e.offsetHeight});let t=0,r=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;let n=r[0];window.cancelAnimationFrame(t),t=window.requestAnimationFrame(()=>{let t,r;if("borderBoxSize"in n){let e=n.borderBoxSize,a=Array.isArray(e)?e[0]:e;t=a.inlineSize,r=a.blockSize}else t=e.offsetWidth,r=e.offsetHeight;a({width:t,height:r})})});return r.observe(e,{box:"border-box"}),()=>{window.cancelAnimationFrame(t),r.unobserve(e)}}a(void 0)},[e]),t}(0,Object.defineProperty)(eV,"name",{value:"useSize",configurable:!0});var e_=Object.defineProperty,eW=(e,t)=>e_(e,"name",{value:t,configurable:!0}),eG="partial",e$="Popper",[eU,eK]=(0,m.f)(e$),[eZ,eJ]=eU(e$),eQ=eW(e=>{let{__scopePopper:t,children:n}=e,[o,i]=r.useState(null),[s,l]=r.useState(void 0);return(0,a.jsx)(eZ,{scope:t,anchor:o,onAnchorChange:i,placementState:s,setPlacementState:l,children:n})},"Popper"),e0=r.forwardRef(eW(function(e,t){let{__scopePopper:n,virtualRef:o,...i}=e,s=eJ("PopperAnchor",n),l=r.useRef(null),d=s.onAnchorChange,p=r.useCallback(e=>{l.current=e,e&&d(e)},[d]),c=(0,b.f)(t,p),f=r.useRef(null);r.useEffect(()=>{if(!o)return;let e=f.current;f.current=o.current,e!==f.current&&d(f.current)});let h=s.placementState&&e8(s.placementState),x=h?.[0],u=h?.[1];return o?null:(0,a.jsx)(eY.V.div,{"data-radix-popper-side":x,"data-radix-popper-align":u,...i,ref:c})},"PopperAnchor")),e1="PopperContent",[e2,e5]=eU(e1),e4=r.forwardRef(eW(function(e,t){var n,o,i,s,l,d,p,c,f,x,u,g,m;let w,v,y,k,j,S,{__scopePopper:A,side:E="bottom",sideOffset:T=0,align:X="center",alignOffset:V=0,arrowPadding:_=0,avoidCollisions:W=!0,collisionBoundary:J=[],collisionPadding:Q=0,sticky:ea=eG,hideWhenDetached:er=!1,updatePositionStrategy:en="optimized",onPlaced:eo,...ei}=e,es=eJ(e1,A),[el,ed]=r.useState(null),ep=(0,b.f)(t,ed),[ec,ef]=r.useState(null),eh=eV(ec),ex=eh?.width??0,eu=eh?.height??0,eg="number"==typeof Q?Q:{top:0,right:0,bottom:0,left:0,...Q},em=Array.isArray(J)?J:[J],ew=em.length>0,ey={padding:eg,boundary:em.filter(e3),altBoundary:ew},{refs:ek,floatingStyles:ej,placement:eC,isPositioned:eN,middlewareData:eA}=function(e){void 0===e&&(e={});let{placement:t="bottom",strategy:a="absolute",middleware:n=[],platform:o,elements:{reference:i,floating:s}={},transform:l=!0,whileElementsMounted:d,open:p}=e,[c,f]=r.useState({x:0,y:0,strategy:a,placement:t,middlewareData:{},isPositioned:!1}),[x,u]=r.useState(n);eD(x,n)||u(n);let[g,b]=r.useState(null),[m,w]=r.useState(null),v=r.useCallback(e=>{e!==S.current&&(S.current=e,b(e))},[]),y=r.useCallback(e=>{e!==C.current&&(C.current=e,w(e))},[]),k=i||g,j=s||m,S=r.useRef(null),C=r.useRef(null),N=r.useRef(c),A=null!=d,z=eH(d),E=eH(o),T=eH(p),R=r.useCallback(()=>{var e,r;let n,o,i;if(!S.current||!C.current)return;let s={placement:t,strategy:a,middleware:x};E.current&&(s.platform=E.current),(e=S.current,r=C.current,n=new Map,o=null!=s?s:{},i={...eM,...o.platform,_c:n},G(e,r,{...o,platform:i})).then(e=>{let t={...e,isPositioned:!1!==T.current};M.current&&!eD(N.current,t)&&(N.current=t,h.flushSync(()=>{f(t)}))})},[x,t,a,E,T]);eL(()=>{!1===p&&N.current.isPositioned&&(N.current.isPositioned=!1,f(e=>({...e,isPositioned:!1})))},[p]);let M=r.useRef(!1);eL(()=>(M.current=!0,()=>{M.current=!1}),[]),eL(()=>{if(k&&(S.current=k),j&&(C.current=j),k&&j){if(z.current)return z.current(k,j,R);R()}},[k,j,R,z,A]);let F=r.useMemo(()=>({reference:S,floating:C,setReference:v,setFloating:y}),[v,y]),P=r.useMemo(()=>({reference:k,floating:j}),[k,j]),L=r.useMemo(()=>{let e={position:a,left:0,top:0};if(!P.floating)return e;let t=eI(P.floating,c.x),r=eI(P.floating,c.y);return l?{...e,transform:"translate("+t+"px, "+r+"px)",...eB(P.floating)>=1.5&&{willChange:"transform"}}:{position:a,left:t,top:r}},[a,l,P.floating,c.x,c.y]);return r.useMemo(()=>({...c,update:R,refs:F,elements:P,floatingStyles:L}),[c,R,F,P,L])}({strategy:"fixed",placement:E+("center"!==X?"-"+X:""),whileElementsMounted:eW((...e)=>(function(e,t,a,r){let n;void 0===r&&(r={});let{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:s="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:d=!1}=r,p=ev(e),c=o||i?[...p?eb(p):[],...t?eb(t):[]]:[];c.forEach(e=>{o&&e.addEventListener("scroll",a),i&&e.addEventListener("resize",a)});let f=p&&l?function(e,t,a){let r,n=null,o=et(e);function i(){var e;clearTimeout(r),null==(e=n)||e.disconnect(),n=null}function s(a,l){void 0===a&&(a=!1),void 0===l&&(l=1),i();let d=e.getBoundingClientRect(),{left:p,top:c,width:f,height:h}=d;if(a||t(),!f||!h)return;let x={rootMargin:-z(c)+"px "+-z(o.clientWidth-(p+f))+"px "+-z(o.clientHeight-(c+h))+"px "+-z(p)+"px",threshold:N(0,C(1,l))||1},u=!0;function g(t){let a=t[0].intersectionRatio;if(!eF(d,e.getBoundingClientRect()))return s();if(a!==l){if(!u)return s();a?s(!1,a):r=setTimeout(()=>{s(!1,1e-7)},1e3)}u=!1}try{n=new IntersectionObserver(g,{...x,root:o.ownerDocument})}catch(e){n=new IntersectionObserver(g,x)}n.observe(e)}let l=ee(e),d=()=>s(a);return l.addEventListener("resize",d),s(!0),()=>{l.removeEventListener("resize",d),i()}}(p,a,i):null,h=-1,x=null;s&&(x=new ResizeObserver(e=>{let[r]=e;r&&r.target===p&&x&&t&&(x.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var e;null==(e=x)||e.observe(t)})),a()}),p&&!d&&x.observe(p),t&&x.observe(t));let u=d?eS(e):null;return d&&function t(){let r=eS(e);u&&!eF(u,r)&&a(),u=r,n=requestAnimationFrame(t)}(),a(),()=>{var e;c.forEach(e=>{o&&e.removeEventListener("scroll",a),i&&e.removeEventListener("resize",a)}),null==f||f(),null==(e=x)||e.disconnect(),x=null,d&&cancelAnimationFrame(n)}})(...e,{animationFrame:"always"===en}),"whileElementsMounted"),elements:{reference:es.anchor},middleware:[{name:(w={name:"offset",options:o=n={mainAxis:T+eu,alignmentAxis:V},async fn(e){var t,a;let{x:r,y:n,placement:i,middlewareData:s}=e,l=await Z(e,o);return i===(null==(t=s.offset)?void 0:t.placement)&&null!=(a=s.arrow)&&a.alignmentOffset?{}:{x:r+l.x,y:n+l.y,data:{...l,placement:i}}}}).name,fn:w.fn,options:[n,void 0]},W&&{name:(v={name:"shift",options:l=s={mainAxis:!0,crossAxis:!1,...ea===eG?{limiter:{fn:(i=void 0,{options:i={},fn(e){var t,a,r,n;let{x:o,y:s,placement:l,rects:d,middlewareData:p}=e,{offset:c=0,mainAxis:f=!0,crossAxis:h=!0}=R(i,e),x={x:o,y:s},u=D(l),g=P(u),b=x[g],m=x[u],w=R(c,e),v="number"==typeof w?{mainAxis:w,crossAxis:0}:{mainAxis:null!=(t=w.mainAxis)?t:0,crossAxis:null!=(a=w.crossAxis)?a:0};if(f){let e="y"===g?"height":"width",t=d.reference[g]-d.floating[e]+v.mainAxis,a=d.reference[g]+d.reference[e]-v.mainAxis;b<t?b=t:b>a&&(b=a)}if(h){let e="y"===g?"width":"height",t=K.has(M(l)),a=d.reference[u]-d.floating[e]+(t&&(null==(r=p.offset)?void 0:r[u])||0)+(t?0:v.crossAxis),o=d.reference[u]+d.reference[e]+(t?0:(null==(n=p.offset)?void 0:n[u])||0)-(t?v.crossAxis:0);m<a?m=a:m>o&&(m=o)}return{[g]:b,[u]:m}}}).fn,options:[void 0,void 0]}}:{},...ey},async fn(e){let{x:t,y:a,placement:r,platform:n}=e,{mainAxis:o=!0,crossAxis:i=!1,limiter:s={fn:e=>{let{x:t,y:a}=e;return{x:t,y:a}}},...d}=R(l,e),p={x:t,y:a},c=await n.detectOverflow(e,d),f=D(r),h=P(f),x=p[h],u=p[f],g=(e,t)=>N(t+c["y"===e?"top":"left"],C(t,t-c["y"===e?"bottom":"right"]));o&&(x=g(h,x)),i&&(u=g(f,u));let b=s.fn({...e,[h]:x,[f]:u});return{...b,data:{x:b.x-t,y:b.y-a,enabled:{[h]:o,[f]:i}}}}}).name,fn:v.fn,options:[s,void 0]},W&&{name:(y={name:"flip",options:p=d={...ey},async fn(e){var t,a,r,n,o,i,s,l;let d,c,f,{placement:h,middlewareData:x,rects:u,initialPlacement:g,platform:b,elements:m}=e,{mainAxis:w=!0,crossAxis:v=!0,fallbackPlacements:y,fallbackStrategy:k="bestFit",fallbackAxisSideDirection:j="none",flipAlignment:S=!0,...C}=R(p,e);if(null!=(t=x.arrow)&&t.alignmentOffset)return{};let N=M(h),A=D(g),z=M(g)===g,E=await (null==b.isRTL?void 0:b.isRTL(m.floating)),T=y||(z||!S?[q(g)]:(d=q(g),[B(g),d,B(d)])),X="none"!==j;!y&&X&&T.push(...(c=F(g),f=function(e,t,a){switch(e){case"top":case"bottom":if(a)return t?H:I;return t?I:H;case"left":case"right":return t?Y:O;default:return[]}}(M(g),"start"===j,E),c&&(f=f.map(e=>e+"-"+c),S&&(f=f.concat(f.map(B)))),f));let V=[g,...T],_=await b.detectOverflow(e,C),W=[],G=(null==(a=x.flip)?void 0:a.overflows)||[];if(w&&W.push(_[N]),v){let e,t,a,r,n=(i=h,s=u,void 0===(l=E)&&(l=!1),e=F(i),a=L(t=P(D(i))),r="x"===t?e===(l?"end":"start")?"right":"left":"start"===e?"bottom":"top",s.reference[a]>s.floating[a]&&(r=q(r)),[r,q(r)]);W.push(_[n[0]],_[n[1]])}if(G=[...G,{placement:h,overflows:W}],!W.every(e=>e<=0)){let e=((null==(r=x.flip)?void 0:r.index)||0)+1,t=V[e];if(t&&("alignment"!==v||A===D(t)||G.every(e=>D(e.placement)!==A||e.overflows[0]>0)))return{data:{index:e,overflows:G},reset:{placement:t}};let a=null==(n=G.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:n.placement;if(!a)switch(k){case"bestFit":{let e=null==(o=G.filter(e=>{if(X){let t=D(e.placement);return t===A||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:o[0];e&&(a=e);break}case"initialPlacement":a=g}if(h!==a)return{reset:{placement:a}}}return{}}}).name,fn:y.fn,options:[d,void 0]},{name:(k={name:"size",options:f=c={...ey,apply:eW(({elements:e,rects:t,availableWidth:a,availableHeight:r})=>{let{width:n,height:o}=t.reference,i=e.floating.style;i.setProperty("--radix-popper-available-width",`${a}px`),i.setProperty("--radix-popper-available-height",`${r}px`),i.setProperty("--radix-popper-anchor-width",`${n}px`),i.setProperty("--radix-popper-anchor-height",`${o}px`)},"apply")},async fn(e){let t,a,{placement:r,rects:n,platform:o,elements:i}=e,{apply:s=()=>{},...l}=R(f,e),d=await o.detectOverflow(e,l),p=M(r),c=F(r),h="y"===D(r),{width:x,height:u}=n.floating;"top"===p||"bottom"===p?(t=p,a=c===(await (null==o.isRTL?void 0:o.isRTL(i.floating))?"start":"end")?"left":"right"):(a=p,t="end"===c?"top":"bottom");let g=u-d.top-d.bottom,b=x-d.left-d.right,m=C(u-d[t],g),w=C(x-d[a],b),v=e.middlewareData.shift,y=!v,k=m,j=w;null!=v&&v.enabled.x&&(j=b),null!=v&&v.enabled.y&&(k=g),y&&!c&&(h?j=x-2*N(d.left,d.right):k=u-2*N(d.top,d.bottom)),await s({...e,availableWidth:j,availableHeight:k});let S=await o.getDimensions(i.floating);return x!==S.width||u!==S.height?{reset:{rects:!0}}:{}}}).name,fn:k.fn,options:[c,void 0]},ec&&{name:(j={name:"arrow",options:u=x={element:ec,padding:_},fn(e){let{element:t,padding:a}="function"==typeof u?u(e):u;return t&&({}).hasOwnProperty.call(t,"current")?null!=t.current?eP({element:t.current,padding:a}).fn(e):{}:t?eP({element:t,padding:a}).fn(e):{}}}).name,fn:j.fn,options:[x,void 0]},e6({arrowWidth:ex,arrowHeight:eu}),er&&{name:(S={name:"hide",options:m=g=ew?{strategy:"referenceHidden",...ey}:{strategy:"referenceHidden",padding:ey.padding,altBoundary:ey.altBoundary},async fn(e){let{rects:t,platform:a}=e,{strategy:r="referenceHidden",...n}=R(m,e);switch(r){case"referenceHidden":{let r=$(await a.detectOverflow(e,{...n,elementContext:"reference"}),t.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:U(r)}}}case"escaped":{let r=$(await a.detectOverflow(e,{...n,altBoundary:!0}),t.floating);return{data:{escapedOffsets:r,escaped:U(r)}}}default:return{}}}}).name,fn:S.fn,options:[g,void 0]}]}),ez=es.setPlacementState;(0,eX.f)(()=>(ez(eC),()=>{ez(void 0)}),[eC,ez]);let[eE,eT]=e8(eC),eR=(0,eq.f)(eo);(0,eX.f)(()=>{eN&&eR?.()},[eN,eR]);let eO=eA.arrow?.x,e_=eA.arrow?.y,e$=eA.arrow?.centerOffset!==0,[eU,eK]=r.useState();return(0,eX.f)(()=>{el&&eK(window.getComputedStyle(el).zIndex)},[el]),(0,a.jsx)("div",{ref:ek.setFloating,"data-radix-popper-content-wrapper":"",style:{...ej,transform:eN?ej.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:eU,"--radix-popper-transform-origin":[eA.transformOrigin?.x,eA.transformOrigin?.y].join(" "),...eA.hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:(0,a.jsx)(e2,{scope:A,placedSide:eE,placedAlign:eT,onArrowChange:ef,arrowX:eO,arrowY:e_,shouldHideArrow:e$,children:(0,a.jsx)(eY.V.div,{"data-side":eE,"data-align":eT,...ei,ref:ep,style:{...ei.style,animation:eN?ei.style?.animation:"none"}})})})},"PopperContent"));function e3(e){return null!==e}eW(e3,"isNotNull");var e6=eW(e=>({name:"transformOrigin",options:e,fn(t){let{placement:a,rects:r,middlewareData:n}=t,o=n.arrow?.centerOffset!==0,i=o?0:e.arrowWidth,s=o?0:e.arrowHeight,[l,d]=e8(a),p={start:"0%",center:"50%",end:"100%"}[d],c=(n.arrow?.x??0)+i/2,f=(n.arrow?.y??0)+s/2,h="",x="";return"bottom"===l?(h=o?p:`${c}px`,x=`${-s}px`):"top"===l?(h=o?p:`${c}px`,x=`${r.floating.height+s}px`):"right"===l?(h=`${-s}px`,x=o?p:`${f}px`):"left"===l&&(h=`${r.floating.width+s}px`,x=o?p:`${f}px`),{data:{x:h,y:x}}}}),"transformOrigin");function e8(e){let[t,a="center"]=e.split("-");return[t,a]}eW(e8,"getSideAndAlignFromPlacement");var e7=e.i(74606),e9=e.i(96626),te=e.i(91918),tt=e.i(69340),ta=e.i(59411),tr=e.i(86312),tn=e.i(85369),to=Object.defineProperty,ti=(e,t)=>to(e,"name",{value:t,configurable:!0}),ts=[" ","Enter","ArrowUp","ArrowDown"],tl=[" ","Enter"],td="Select",[tp,tc,tf]=(0,g.H)(td),[th,tx]=(0,m.f)(td,[tf,eK]),tu=eK(),[tg,tb]=th(td),[tm,tw]=th(td);function tv(e){let{__scopeSelect:t,children:n,open:o,defaultOpen:i,onOpenChange:s,value:l,defaultValue:d,onValueChange:p,dir:c,name:f,autoComplete:h,disabled:x,required:u,form:g,internal_do_not_use_render:b}=e,m=tu(t),[v,y]=r.useState(null),[k,S]=r.useState(null),[C,N]=r.useState(!1),A=(0,w.f)(c),[z,E]=(0,tt.f)({prop:o,defaultProp:i??!1,onChange:s,caller:td}),[T,R]=(0,tt.f)({prop:l,defaultProp:d,onChange:p,caller:td}),M=r.useRef(null),F=r.useRef(!1),[P,L]=r.useState(null),D=ti(e=>{L({value:e,hasConsumerStoppedPropagation:F.current}),R(e)},"handleUserSelect"),B=r.useRef(T);r.useEffect(()=>{let e=g?v?.ownerDocument.getElementById(g):v?.form;if(e instanceof HTMLFormElement){let t=ti(()=>R(B.current),"reset");return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[g,v,R]);let I=!v||!!g||!!v.closest("form"),[H,Y]=r.useState(new Set),O=(0,j.f)(),q=Array.from(H).map(e=>e.props.value).join(";"),X=r.useCallback(e=>{Y(t=>new Set(t).add(e))},[]),V=r.useCallback(e=>{Y(t=>{let a=new Set(t);return a.delete(e),a})},[]),_={required:u,trigger:v,onTriggerChange:y,valueNode:k,onValueNodeChange:S,valueNodeHasChildren:C,onValueNodeHasChildrenChange:N,contentId:O,value:T,onValueChange:R,hasConsumerStoppedPropagationRef:F,userSelection:P,onUserSelect:D,open:z,onOpenChange:E,dir:A,triggerPointerDownPosRef:M,disabled:x,name:f,autoComplete:h,form:g,nativeOptions:H,nativeSelectKey:q,isFormControl:I};return(0,a.jsx)(eQ,{...m,children:(0,a.jsx)(tg,{scope:t,..._,children:(0,a.jsx)(tp.Provider,{scope:t,children:(0,a.jsx)(tm,{scope:t,onNativeOptionAdd:X,onNativeOptionRemove:V,children:t2(b)?b(_):n})})})})}ti(tv,"SelectProvider");var ty=ti(e=>{let{__scopeSelect:t,children:r,...n}=e;return(0,a.jsx)(tv,{__scopeSelect:t,...n,internal_do_not_use_render:({isFormControl:e})=>(0,a.jsxs)(a.Fragment,{children:[r,e?(0,a.jsx)(t1,{__scopeSelect:t}):null]})})},"Select"),tk=r.forwardRef(ti(function(e,t){let{__scopeSelect:n,disabled:o=!1,...i}=e,s=tu(n),l=tb("SelectTrigger",n),d=l.disabled||o,p=(0,b.f)(t,l.onTriggerChange),c=tc(n),f=r.useRef("touch"),[h,x,g]=t4(e=>{let t=c().filter(e=>!e.disabled),a=t.find(e=>e.value===l.value),r=t3(t,e,a);void 0!==r&&l.onUserSelect(r.value)}),m=ti(e=>{d||(l.onOpenChange(!0),g()),e&&(l.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)})},"handleOpen");return(0,a.jsx)(e0,{asChild:!0,...s,children:(0,a.jsx)(eY.V.button,{type:"button",role:"combobox","aria-controls":l.open?l.contentId:void 0,"aria-expanded":l.open,"aria-required":l.required,"aria-autocomplete":"none",dir:l.dir,"data-state":l.open?"open":"closed",disabled:d,"data-disabled":d?"":void 0,"data-placeholder":t5(l.value)?"":void 0,...i,ref:p,onClick:(0,u.f)(i.onClick,e=>{e.currentTarget.focus(),"mouse"!==f.current&&m(e)}),onPointerDown:(0,u.f)(i.onPointerDown,e=>{f.current=e.pointerType;let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&"mouse"===e.pointerType&&(m(e),e.preventDefault())}),onKeyDown:(0,u.f)(i.onKeyDown,e=>{let t=""!==h.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||(l.hasConsumerStoppedPropagationRef.current=e.isPropagationStopped(),x(e.key)),(!t||" "!==e.key)&&ts.includes(e.key)&&(m(),e.preventDefault())})})})},"SelectTrigger")),tj=r.forwardRef(ti(function(e,t){let{__scopeSelect:n,className:o,style:i,children:s,placeholder:l="",...d}=e,p=tb("SelectValue",n),{onValueNodeHasChildrenChange:c}=p,f=void 0!==s,h=(0,b.f)(t,p.onValueNodeChange);(0,eX.f)(()=>{c(f)},[c,f]);let x=t5(p.value);return(0,a.jsx)(eY.V.span,{...d,asChild:!x&&d.asChild,ref:h,style:{pointerEvents:"none"},children:(0,a.jsx)(r.Fragment,{children:x?l:s},x?"placeholder":"value")})},"SelectValue")),tS=r.forwardRef(ti(function(e,t){let{__scopeSelect:r,children:n,...o}=e;return(0,a.jsx)(eY.V.span,{"aria-hidden":!0,...o,ref:t,children:n||"▼"})},"SelectIcon")),[tC,tN]=th("SelectPortal",{forceMount:void 0}),tA=ti(e=>{let{__scopeSelect:t,forceMount:r,...n}=e;return(0,a.jsx)(tC,{scope:e.__scopeSelect,forceMount:r,children:(0,a.jsx)(e7.f,{asChild:!0,...n})})},"SelectPortal"),tz="SelectContent",tE=r.forwardRef(ti(function(e,t){let n=tN(tz,e.__scopeSelect),{forceMount:o=n.forceMount,...i}=e,s=tb(tz,e.__scopeSelect),[l,d]=r.useState();return(0,eX.f)(()=>{d(new DocumentFragment)},[]),(0,a.jsx)(e9.f,{present:o||s.open,children:({present:e})=>e?(0,a.jsx)(tP,{...i,ref:t}):(0,a.jsx)(tT,{...i,fragment:l})})},"SelectContent")),tT=r.forwardRef(ti(function(e,t){let{__scopeSelect:r,children:n,fragment:o}=e;return o?h.createPortal((0,a.jsx)(tR,{scope:r,children:(0,a.jsx)(tp.Slot,{scope:r,children:(0,a.jsx)("div",{ref:t,children:n})})}),o):null},"SelectContentFragment")),[tR,tM]=th(tz),tF=(0,te.B)("SelectContent.RemoveScroll"),tP=r.forwardRef(ti(function(e,t){let{__scopeSelect:n}=e,{position:o="item-aligned",onCloseAutoFocus:i,onEscapeKeyDown:s,onPointerDownOutside:l,side:d,sideOffset:p,align:c,alignOffset:f,arrowPadding:h,collisionBoundary:x,collisionPadding:g,sticky:m,hideWhenDetached:w,avoidCollisions:j,...S}=e,C=tb(tz,n),[N,A]=r.useState(null),[z,E]=r.useState(null),T=(0,b.f)(t,A),[R,M]=r.useState(null),[F,P]=r.useState(null),L=tc(n),[D,B]=r.useState(!1),I=r.useRef(!1),H=r.useRef(!1),Y=r.useRef(!1);r.useEffect(()=>{if(N)return(0,tr.f)(N)},[N]),(0,y.f)();let O=r.useCallback(e=>{let[t,...a]=L().map(e=>e.ref.current),[r]=a.slice(-1),n=document.activeElement;for(let a of e)if(a===n||(a?.scrollIntoView({block:"nearest"}),a===t&&z&&(z.scrollTop=0),a===r&&z&&(z.scrollTop=z.scrollHeight),a?.focus(),document.activeElement!==n))return},[L,z]),q=r.useCallback(()=>O([R,N]),[O,R,N]);r.useEffect(()=>{D&&q()},[D,q]);let{onOpenChange:X,triggerPointerDownPosRef:V}=C;r.useEffect(()=>{if(N){let e={x:0,y:0},t=ti(t=>{e={x:Math.abs(Math.round(t.pageX)-(V.current?.x??0)),y:Math.abs(Math.round(t.pageY)-(V.current?.y??0))}},"handlePointerMove"),a=ti(a=>{e.x<=10&&e.y<=10?a.preventDefault():a.composedPath().includes(N)||X(!1),document.removeEventListener("pointermove",t),V.current=null},"handlePointerUp");return null!==V.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",a,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",a,{capture:!0})}}},[N,X,V]),r.useEffect(()=>{let e=ti(()=>X(!1),"close");return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}},[X]);let[_,W]=t4(e=>{let t=L().filter(e=>!e.disabled),a=t.find(e=>e.ref.current===document.activeElement),r=t3(t,e,a);r&&setTimeout(()=>r.ref.current?.focus())}),G=r.useCallback((e,t,a)=>{let r=!H.current;r&&(H.current=!0);let n=!I.current&&!a;void 0!==C.value&&C.value===t||n?(M(e),n&&(I.current=!0)):r&&M(e)},[C.value]),$=r.useCallback(()=>N?.focus(),[N]),U=r.useCallback((e,t,a)=>{if(!e)return;let r=!Y.current;r&&(Y.current=!0);let n=!I.current&&!a;void 0!==C.value&&C.value===t||n?P(e):r&&P(e)},[C.value]),K="popper"===o?tD:tL;return(0,a.jsx)(tR,{scope:n,content:N,viewport:z,onViewportChange:E,itemRefCallback:G,selectedItem:R,onItemLeave:$,itemTextRefCallback:U,focusSelectedItem:q,selectedItemText:F,position:o,isPositioned:D,searchRef:_,children:(0,a.jsx)(tn.f,{as:tF,allowPinchZoom:!0,children:(0,a.jsx)(k.v,{asChild:!0,trapped:C.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:(0,u.f)(i,e=>{C.trigger?.focus({preventScroll:!0}),e.preventDefault()}),children:(0,a.jsx)(v.V,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:s,onPointerDownOutside:l,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>C.onOpenChange(!1),children:(0,a.jsx)(K,{role:"listbox",id:C.contentId,"data-state":C.open?"open":"closed",dir:C.dir,onContextMenu:e=>e.preventDefault(),...S,...K===tD?{side:d,sideOffset:p,align:c,alignOffset:f,arrowPadding:h,collisionBoundary:x,collisionPadding:g,sticky:m,hideWhenDetached:w,avoidCollisions:j}:{},onPlaced:()=>B(!0),ref:T,style:{display:"flex",flexDirection:"column",outline:"none",...S.style},onKeyDown:(0,u.f)(S.onKeyDown,e=>{let t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||W(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=L().filter(e=>!e.disabled).map(e=>e.ref.current);if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){let a=e.target,r=t.indexOf(a);t=t.slice(r+1)}setTimeout(()=>O(t)),e.preventDefault()}})})})})})})},"SelectContentImpl")),tL=r.forwardRef(ti(function(e,t){let{__scopeSelect:n,onPlaced:o,...i}=e,s=tb(tz,n),l=tM(tz,n),[d,p]=r.useState(null),[c,f]=r.useState(null),h=(0,b.f)(t,f),u=tc(n),g=r.useRef(!1),m=r.useRef(!0),{viewport:w,selectedItem:v,selectedItemText:y,focusSelectedItem:k}=l,j=r.useCallback(()=>{if(s.trigger&&s.valueNode&&d&&c&&w&&v&&y){let e=s.trigger.getBoundingClientRect(),t=c.getBoundingClientRect(),a=s.valueNode.getBoundingClientRect(),r=y.getBoundingClientRect();if("rtl"!==s.dir){let n=r.left-t.left,o=a.left-n,i=e.left-o,s=e.width+i,l=Math.max(s,t.width),p=x(o,[10,Math.max(10,window.innerWidth-10-l)]);d.style.minWidth=s+"px",d.style.left=p+"px"}else{let n=t.right-r.right,o=window.innerWidth-a.right-n,i=window.innerWidth-e.right-o,s=e.width+i,l=Math.max(s,t.width),p=x(o,[10,Math.max(10,window.innerWidth-10-l)]);d.style.minWidth=s+"px",d.style.right=p+"px"}let n=u(),i=window.innerHeight-20,l=w.scrollHeight,p=window.getComputedStyle(c),f=parseInt(p.borderTopWidth,10),h=parseInt(p.paddingTop,10),b=parseInt(p.borderBottomWidth,10),m=f+h+l+parseInt(p.paddingBottom,10)+b,k=Math.min(5*v.offsetHeight,m),j=window.getComputedStyle(w),S=parseInt(j.paddingTop,10),C=parseInt(j.paddingBottom,10),N=e.top+e.height/2-10,A=v.offsetHeight/2,z=f+h+(v.offsetTop+A);if(z<=N){let e=n.length>0&&v===n[n.length-1].ref.current;d.style.bottom="0px";let t=Math.max(i-N,A+(e?C:0)+(c.clientHeight-w.offsetTop-w.offsetHeight)+b);d.style.height=z+t+"px"}else{let e=n.length>0&&v===n[0].ref.current;d.style.top="0px";let t=Math.max(N,f+w.offsetTop+(e?S:0)+A);d.style.height=t+(m-z)+"px",w.scrollTop=z-N+w.offsetTop}d.style.margin="10px 0",d.style.minHeight=k+"px",d.style.maxHeight=i+"px",o?.(),requestAnimationFrame(()=>g.current=!0)}},[u,s.trigger,s.valueNode,d,c,w,v,y,s.dir,o]);(0,eX.f)(()=>j(),[j]);let[S,C]=r.useState();(0,eX.f)(()=>{c&&C(window.getComputedStyle(c).zIndex)},[c]);let N=r.useCallback(e=>{e&&!0===m.current&&(j(),k?.(),m.current=!1)},[j,k]);return(0,a.jsx)(tB,{scope:n,contentWrapper:d,shouldExpandOnScrollRef:g,onScrollButtonChange:N,children:(0,a.jsx)("div",{ref:p,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:S},children:(0,a.jsx)(eY.V.div,{...i,ref:h,style:{boxSizing:"border-box",maxHeight:"100%",...i.style}})})})},"SelectItemAlignedPosition")),tD=r.forwardRef(ti(function(e,t){let{__scopeSelect:r,align:n="start",collisionPadding:o=10,...i}=e,s=tu(r);return(0,a.jsx)(e4,{...s,...i,ref:t,align:n,collisionPadding:o,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})},"SelectPopperPosition")),[tB,tI]=th(tz,{}),tH="SelectViewport",tY=r.forwardRef(ti(function(e,t){let{__scopeSelect:n,nonce:o,...i}=e,s=tM(tH,n),l=tI(tH,n),d=(0,b.f)(t,s.onViewportChange),p=r.useRef(0);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:o}),(0,a.jsx)(tp.Slot,{scope:n,children:(0,a.jsx)(eY.V.div,{"data-radix-select-viewport":"",role:"presentation",...i,ref:d,style:{position:"relative",flex:1,overflow:"hidden auto",...i.style},onScroll:(0,u.f)(i.onScroll,e=>{let t=e.currentTarget,{contentWrapper:a,shouldExpandOnScrollRef:r}=l;if(r?.current&&a){let e=Math.abs(p.current-t.scrollTop);if(e>0){let r=window.innerHeight-20,n=Math.max(parseFloat(a.style.minHeight),parseFloat(a.style.height));if(n<r){let o=n+e,i=Math.min(r,o),s=o-i;a.style.height=i+"px","0px"===a.style.bottom&&(t.scrollTop=s>0?s:0,a.style.justifyContent="flex-end")}}}p.current=t.scrollTop})})})]})},"SelectViewport")),[tO,tq]=th("SelectGroup"),tX="SelectItem",[tV,t_]=th(tX),tW=r.forwardRef(ti(function(e,t){let{__scopeSelect:n,value:o,disabled:i=!1,textValue:s,...l}=e,d=tb(tX,n),p=tM(tX,n),c=d.value===o,[f,h]=r.useState(s??""),[x,g]=r.useState(!1),m=(0,eq.f)(e=>p.itemRefCallback?.(e,o,i)),w=(0,b.f)(t,m),v=(0,j.f)(),y=r.useRef("touch");function k(e){d.hasConsumerStoppedPropagationRef.current=e.isPropagationStopped(),d.onUserSelect(o),d.onOpenChange(!1)}return ti(k,"handleSelect"),(0,a.jsx)(tV,{scope:n,value:o,disabled:i,textId:v,isSelected:c,onItemTextChange:r.useCallback(e=>{h(t=>t||(e?.textContent??"").trim())},[]),children:(0,a.jsx)(tp.ItemSlot,{scope:n,value:o,disabled:i,textValue:f,children:(0,a.jsx)(eY.V.div,{role:"option","aria-labelledby":v,"data-highlighted":x?"":void 0,"aria-selected":c&&x,"data-state":c?"checked":"unchecked","aria-disabled":i||void 0,"data-disabled":i?"":void 0,tabIndex:i?void 0:-1,...l,ref:w,onFocus:(0,u.f)(l.onFocus,()=>g(!0)),onBlur:(0,u.f)(l.onBlur,()=>g(!1)),onClick:(0,u.f)(l.onClick,e=>{i||"mouse"!==y.current&&k(e)}),onPointerUp:(0,u.f)(l.onPointerUp,e=>{i||"mouse"===y.current&&k(e)}),onPointerDown:(0,u.f)(l.onPointerDown,e=>{y.current=e.pointerType}),onPointerMove:(0,u.f)(l.onPointerMove,e=>{y.current=e.pointerType,i?p.onItemLeave?.():"mouse"===y.current&&e.currentTarget.focus({preventScroll:!0})}),onPointerLeave:(0,u.f)(l.onPointerLeave,e=>{e.currentTarget===document.activeElement&&p.onItemLeave?.()}),onKeyDown:(0,u.f)(l.onKeyDown,e=>{i||e.target!==e.currentTarget||(p.searchRef?.current===""||" "!==e.key)&&(tl.includes(e.key)&&k(e)," "===e.key&&e.preventDefault())})})})})},"SelectItem")),tG="SelectItemText",t$=r.forwardRef(ti(function(e,t){let{__scopeSelect:n,className:o,style:i,...s}=e,l=tb(tG,n),d=tM(tG,n),p=t_(tG,n),c=tw(tG,n),[f,x]=r.useState(null),u=(0,eq.f)(e=>d.itemTextRefCallback?.(e,p.value,p.disabled)),g=(0,b.f)(t,x,p.onItemTextChange,u),m=f?.textContent,w=r.useMemo(()=>(0,a.jsx)("option",{value:p.value,disabled:p.disabled,children:m},p.value),[p.disabled,p.value,m]),{onNativeOptionAdd:v,onNativeOptionRemove:y}=c;return(0,eX.f)(()=>(v(w),()=>y(w)),[v,y,w]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(eY.V.span,{id:p.textId,...s,ref:g}),p.isSelected&&l.valueNode&&!l.valueNodeHasChildren&&!t5(l.value)?h.createPortal(s.children,l.valueNode):null]})},"SelectItemText")),tU=r.forwardRef(ti(function(e,t){let{__scopeSelect:r,...n}=e;return t_("SelectItemIndicator",r).isSelected?(0,a.jsx)(eY.V.span,{"aria-hidden":!0,...n,ref:t}):null},"SelectItemIndicator")),tK="SelectScrollUpButton",tZ=r.forwardRef(ti(function(e,t){let n=tM(tK,e.__scopeSelect),o=tI(tK,e.__scopeSelect),[i,s]=r.useState(!1),l=(0,b.f)(t,o.onScrollButtonChange);return(0,eX.f)(()=>{if(n.viewport&&n.isPositioned){let e=function(){s(t.scrollTop>0)};ti(e,"handleScroll");let t=n.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[n.viewport,n.isPositioned]),i?(0,a.jsx)(t0,{...e,ref:l,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop=e.scrollTop-t.offsetHeight)}}):null},"SelectScrollUpButton")),tJ="SelectScrollDownButton",tQ=r.forwardRef(ti(function(e,t){let n=tM(tJ,e.__scopeSelect),o=tI(tJ,e.__scopeSelect),[i,s]=r.useState(!1),l=(0,b.f)(t,o.onScrollButtonChange);return(0,eX.f)(()=>{if(n.viewport&&n.isPositioned){let e=function(){let e=t.scrollHeight-t.clientHeight;s(Math.ceil(t.scrollTop)<e)};ti(e,"handleScroll");let t=n.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}},[n.viewport,n.isPositioned]),i?(0,a.jsx)(t0,{...e,ref:l,onAutoScroll:()=>{let{viewport:e,selectedItem:t}=n;e&&t&&(e.scrollTop=e.scrollTop+t.offsetHeight)}}):null},"SelectScrollDownButton")),t0=r.forwardRef(ti(function(e,t){let{__scopeSelect:n,onAutoScroll:o,...i}=e,s=tM("SelectScrollButton",n),l=r.useRef(null),d=tc(n),p=r.useCallback(()=>{null!==l.current&&(window.clearInterval(l.current),l.current=null)},[]);return r.useEffect(()=>()=>p(),[p]),(0,eX.f)(()=>{let e=d().find(e=>e.ref.current===document.activeElement);e?.ref.current?.scrollIntoView({block:"nearest"})},[d]),(0,a.jsx)(eY.V.div,{"aria-hidden":!0,...i,ref:t,style:{flexShrink:0,...i.style},onPointerDown:(0,u.f)(i.onPointerDown,()=>{null===l.current&&(l.current=window.setInterval(o,50))}),onPointerMove:(0,u.f)(i.onPointerMove,()=>{s.onItemLeave?.(),null===l.current&&(l.current=window.setInterval(o,50))}),onPointerLeave:(0,u.f)(i.onPointerLeave,()=>{p()})})},"SelectScrollButtonImpl")),t1=r.forwardRef(ti(function({__scopeSelect:e,...t},n){let o=tb("SelectBubbleInput",e),{value:i,onValueChange:s,required:l,disabled:d,name:p,autoComplete:c,form:f,userSelection:h}=o,{nativeOptions:x,nativeSelectKey:u}=o,g=r.useRef(null),m=(0,b.f)(n,g),w=i??"",v=r.useRef(w),y=r.useRef(h),k=r.useRef(!1),j=Array.from(x).some(e=>(e.props.value??"")==="");return r.useEffect(()=>{let e=g.current;if(!e)return;let t=Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype,"value").set,a=null!==h&&h!==y.current;y.current=h;let r=v.current!==w;if(v.current=w,a&&!r&&h.value!==w&&!h.hasConsumerStoppedPropagation&&t){k.current=!0;try{t.call(e,h.value),e.dispatchEvent(new Event("change",{bubbles:!0}))}finally{k.current=!1,t.call(e,w)}return}let n=a&&r&&!h.hasConsumerStoppedPropagation;if(r&&t){let a=new Event("change",{bubbles:n});t.call(e,w),e.dispatchEvent(a)}},[w,h]),(0,a.jsxs)(eY.V.select,{"aria-hidden":!0,required:l,tabIndex:-1,name:p,autoComplete:c,disabled:d,form:f,onChange:e=>{k.current||s(e.target.value)},...t,style:{...ta.u,...t.style},ref:m,defaultValue:w,children:[t5(i)&&!j?(0,a.jsx)("option",{value:""}):null,Array.from(x)]},u)},"SelectBubbleInput"));function t2(e){return"function"==typeof e}function t5(e){return""===e||void 0===e}function t4(e){let t=(0,eq.f)(e),a=r.useRef(""),n=r.useRef(0),o=r.useCallback(e=>{let r=a.current+e;function o(e){a.current=e,window.clearTimeout(n.current),""!==e&&(n.current=window.setTimeout(()=>o(""),1e3))}t(r),ti(o,"updateSearch"),o(r)},[t]),i=r.useCallback(()=>{a.current="",window.clearTimeout(n.current)},[]);return r.useEffect(()=>()=>window.clearTimeout(n.current),[]),[a,o,i]}function t3(e,t,a){let r=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,n=a?e.indexOf(a):-1,o=t6(e,Math.max(n,0));1===r.length&&(o=o.filter(e=>e!==a));let i=o.find(e=>e.textValue.toLowerCase().startsWith(r.toLowerCase()));return i!==a?i:void 0}function t6(e,t){return e.map((a,r)=>e[(t+r)%e.length])}ti(t2,"isFunction"),ti(t5,"shouldShowPlaceholder"),ti(t4,"useTypeaheadSearch"),ti(t3,"findNextItem"),ti(t6,"wrapArray");var t8=e.i(78745),t8=t8,t7=e.i(9797);let t9=(0,n.f)("chevron-up",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);var ae=e.i(75157);function at({...e}){return(0,a.jsx)(ty,{"data-slot":"select",...e})}function aa({...e}){return(0,a.jsx)(tj,{"data-slot":"select-value",...e})}function ar({className:e,size:t="default",children:r,...n}){return(0,a.jsxs)(tk,{"data-slot":"select-trigger","data-size":t,className:(0,ae.f)("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...n,children:[r,(0,a.jsx)(tS,{asChild:!0,children:(0,a.jsx)(t7.f,{className:"size-4 opacity-50"})})]})}function an({className:e,children:t,position:r="popper",...n}){return(0,a.jsx)(tA,{children:(0,a.jsxs)(tE,{"data-slot":"select-content",className:(0,ae.f)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md","popper"===r&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:r,...n,children:[(0,a.jsx)(ai,{}),(0,a.jsx)(tY,{className:(0,ae.f)("p-1","popper"===r&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),children:t}),(0,a.jsx)(as,{})]})})}function ao({className:e,children:t,...r}){return(0,a.jsxs)(tW,{"data-slot":"select-item",className:(0,ae.f)("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",e),...r,children:[(0,a.jsx)("span",{className:"absolute right-2 flex size-3.5 items-center justify-center",children:(0,a.jsx)(tU,{children:(0,a.jsx)(t8.f,{className:"size-4"})})}),(0,a.jsx)(t$,{children:t})]})}function ai({className:e,...t}){return(0,a.jsx)(tZ,{"data-slot":"select-scroll-up-button",className:(0,ae.f)("flex cursor-default items-center justify-center py-1",e),...t,children:(0,a.jsx)(t9,{className:"size-4"})})}function as({className:e,...t}){return(0,a.jsx)(tQ,{"data-slot":"select-scroll-down-button",className:(0,ae.f)("flex cursor-default items-center justify-center py-1",e),...t,children:(0,a.jsx)(t7.f,{className:"size-4"})})}var al=e.i(33277),ad=e.i(43531),ap=e.i(74886);let ac=(0,n.f)("mouse-pointer-2",[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",key:"edeuup"}]]);var af=e.i(46932),ah=e.i(87486),ax=Object.defineProperty,au=(e,t)=>ax(e,"name",{value:t,configurable:!0}),ag=!1;function ab(){let[e,t]=r.useState(ag);return r.useEffect(()=>{ag||(ag=!0,t(!0))},[]),e}au(ab,"useIsHydrated");var am=r[" useSyncExternalStore ".trim().toString()];function aw(){return()=>{}}function av(){return am(aw,()=>!0,()=>!1)}au(aw,"subscribe"),au(av,"useIsHydratedModern");var ay="function"==typeof am?av:ab,ak=Object.defineProperty,aj=(e,t)=>ak(e,"name",{value:t,configurable:!0}),aS="rovingFocusGroup.onEntryFocus",aC={bubbles:!1,cancelable:!0},aN="RovingFocusGroup",[aA,az,aE]=(0,g.H)(aN),[aT,aR]=(0,m.f)(aN,[aE]),[aM,aF]=aT(aN),aP=r.forwardRef(aj(function(e,t){return(0,a.jsx)(aA.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,a.jsx)(aA.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,a.jsx)(aL,{...e,ref:t})})})},"RovingFocusGroup")),aL=r.forwardRef(aj(function(e,t){let{__scopeRovingFocusGroup:n,orientation:o,loop:i=!1,dir:s,currentTabStopId:l,defaultCurrentTabStopId:d,onCurrentTabStopIdChange:p,onEntryFocus:c,preventScrollOnEntryFocus:f=!1,...h}=e,x=r.useRef(null),g=(0,b.f)(t,x),m=(0,w.f)(s),[v,y]=(0,tt.f)({prop:l,defaultProp:d??null,onChange:p,caller:aN}),[k,j]=r.useState(!1),S=(0,eq.f)(c),C=az(n),N=r.useRef(!1),[A,z]=r.useState(0);return r.useEffect(()=>{let e=x.current;if(e)return e.addEventListener(aS,S),()=>e.removeEventListener(aS,S)},[S]),(0,a.jsx)(aM,{scope:n,orientation:o,dir:m,loop:i,currentTabStopId:v,onItemFocus:r.useCallback(e=>y(e),[y]),onItemShiftTab:r.useCallback(()=>j(!0),[]),onFocusableItemAdd:r.useCallback(()=>z(e=>e+1),[]),onFocusableItemRemove:r.useCallback(()=>z(e=>e-1),[]),children:(0,a.jsx)(eY.V.div,{tabIndex:k||0===A?-1:0,"data-orientation":o,...h,ref:g,style:{outline:"none",...e.style},onMouseDown:(0,u.f)(e.onMouseDown,()=>{N.current=!0}),onFocus:(0,u.f)(e.onFocus,e=>{let t=!N.current;if(e.target===e.currentTarget&&t&&!k){let t=new CustomEvent(aS,aC);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=C().filter(e=>e.focusable);aY([e.find(e=>e.active),e.find(e=>e.id===v),...e].filter(Boolean).map(e=>e.ref.current),f)}}N.current=!1}),onBlur:(0,u.f)(e.onBlur,()=>j(!1))})})},"RovingFocusGroupImpl")),aD=r.forwardRef(aj(function(e,t){let{__scopeRovingFocusGroup:n,focusable:o=!0,active:i=!1,tabStopId:s,children:l,...d}=e,p=(0,j.f)(),c=s||p,f=aF("RovingFocusGroupItem",n),h=f.currentTabStopId===c,x=az(n),{onFocusableItemAdd:g,onFocusableItemRemove:b,currentTabStopId:m}=f,w=ay();return(0,eX.f)(()=>{if(w&&o)return g(),()=>b()},[w,o,g,b]),r.useEffect(()=>{if(!w&&o)return g(),()=>b()},[w,o,g,b]),(0,a.jsx)(aA.ItemSlot,{scope:n,id:c,focusable:o,active:i,children:(0,a.jsx)(eY.V.span,{tabIndex:h?0:-1,"data-orientation":f.orientation,...d,ref:t,onMouseDown:(0,u.f)(e.onMouseDown,e=>{o?f.onItemFocus(c):e.preventDefault()}),onFocus:(0,u.f)(e.onFocus,()=>f.onItemFocus(c)),onKeyDown:(0,u.f)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey)return void f.onItemShiftTab();if(e.target!==e.currentTarget)return;let t=aH(e,f.orientation,f.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let a=x().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)a.reverse();else if("prev"===t||"next"===t){"prev"===t&&a.reverse();let r=a.indexOf(e.currentTarget);a=f.loop?aO(a,r+1):a.slice(r+1)}setTimeout(()=>aY(a))}}),children:"function"==typeof l?l({isCurrentTabStop:h,hasTabStop:null!=m}):l})})},"RovingFocusGroupItem")),aB={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function aI(e,t){return"rtl"!==t?e:"ArrowLeft"===e?"ArrowRight":"ArrowRight"===e?"ArrowLeft":e}function aH(e,t,a){let r=aI(e.key,a);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(r))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(r)))return aB[r]}function aY(e,t=!1){let a=document.activeElement;for(let r of e)if(r===a||(r.focus({preventScroll:t}),document.activeElement!==a))return}function aO(e,t){return e.map((a,r)=>e[(t+r)%e.length])}aj(aI,"getDirectionAwareKey"),aj(aH,"getFocusIntent"),aj(aY,"focusFirst"),aj(aO,"wrapArray");var aq=Object.defineProperty,aX=(e,t)=>aq(e,"name",{value:t,configurable:!0}),aV="Tabs",[a_,aW]=(0,m.f)(aV,[aR]),aG=aR(),[a$,aU]=a_(aV),aK=r.forwardRef(aX(function(e,t){let{__scopeTabs:r,value:n,onValueChange:o,defaultValue:i,orientation:s="horizontal",dir:l,activationMode:d="automatic",...p}=e,c=(0,w.f)(l),[f,h]=(0,tt.f)({prop:n,onChange:o,defaultProp:i??"",caller:aV});return(0,a.jsx)(a$,{scope:r,baseId:(0,j.f)(),value:f,onValueChange:h,orientation:s,dir:c,activationMode:d,children:(0,a.jsx)(eY.V.div,{dir:c,"data-orientation":s,...p,ref:t})})},"Tabs")),aZ=r.forwardRef(aX(function(e,t){let{__scopeTabs:r,loop:n=!0,...o}=e,i=aU("TabsList",r),s=aG(r);return(0,a.jsx)(aP,{asChild:!0,...s,orientation:i.orientation,dir:i.dir,loop:n,children:(0,a.jsx)(eY.V.div,{role:"tablist","aria-orientation":i.orientation,...o,ref:t})})},"TabsList")),aJ=r.forwardRef(aX(function(e,t){let{__scopeTabs:r,value:n,disabled:o=!1,...i}=e,s=aU("TabsTrigger",r),l=aG(r),d=a0(s.baseId,n),p=a1(s.baseId,n),c=n===s.value;return(0,a.jsx)(aD,{asChild:!0,...l,focusable:!o,active:c,children:(0,a.jsx)(eY.V.button,{type:"button",role:"tab","aria-selected":c,"aria-controls":p,"data-state":c?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:d,...i,ref:t,onMouseDown:(0,u.f)(e.onMouseDown,e=>{o||0!==e.button||!1!==e.ctrlKey?e.preventDefault():(e.currentTarget.focus(),s.onValueChange(n))}),onKeyDown:(0,u.f)(e.onKeyDown,e=>{!o&&e.target===e.currentTarget&&[" ","Enter"].includes(e.key)&&s.onValueChange(n)}),onFocus:(0,u.f)(e.onFocus,()=>{let e="manual"!==s.activationMode;c||o||!e||s.onValueChange(n)})})})},"TabsTrigger")),aQ=r.forwardRef(aX(function(e,t){let{__scopeTabs:n,value:o,forceMount:i,children:s,...l}=e,d=aU("TabsContent",n),p=a0(d.baseId,o),c=a1(d.baseId,o),f=o===d.value,h=r.useRef(f);return r.useEffect(()=>{let e=requestAnimationFrame(()=>h.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,a.jsx)(e9.f,{present:i||f,children:({present:r})=>(0,a.jsx)(eY.V.div,{"data-state":f?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":p,hidden:!r,id:c,tabIndex:0,...l,ref:t,style:{...e.style,animationDuration:h.current?"0s":void 0},children:r&&s})})},"TabsContent"));function a0(e,t){return`${e}-trigger-${t}`}function a1(e,t){return`${e}-content-${t}`}function a2({className:e,...t}){return(0,a.jsx)(aK,{"data-slot":"tabs",className:(0,ae.f)("flex flex-col gap-2",e),...t})}function a5({className:e,...t}){return(0,a.jsx)(aZ,{"data-slot":"tabs-list",className:(0,ae.f)("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",e),...t})}function a4({className:e,...t}){return(0,a.jsx)(aJ,{"data-slot":"tabs-trigger",className:(0,ae.f)("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...t})}function a3({className:e,...t}){return(0,a.jsx)(aQ,{"data-slot":"tabs-content",className:(0,ae.f)("flex-1 outline-none",e),...t})}aX(a0,"makeTriggerId"),aX(a1,"makeContentId");var a6=e.i(74911),a8=e.i(53115);let a7={buttons:"Button",loaders:"Loader",text:"Text",hover:"Hover Card",backgrounds:"Background",animations:"Animation"};async function a9(e){try{return await navigator.clipboard.writeText(e),!0}catch{try{let t=document.createElement("textarea");return t.value=e,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),!0}catch{return!1}}}function re({code:e}){return(0,a.jsx)("pre",{className:"fx-scroll max-h-64 overflow-auto rounded-lg border border-slate-800 bg-slate-950 p-4 text-left font-mono text-[12.5px] leading-relaxed text-slate-200",children:(0,a.jsx)("code",{children:e})})}function rt({effect:e,index:t=0,isFavorite:n,onToggleFavorite:o}){let[i,s]=(0,r.useState)(!1),[d,p]=(0,r.useState)("html"),{toast:c}=(0,a6.f)(),f="html"===d?e.html:e.css,h=async()=>{await a9(f)?(s(!0),c({title:"Copied to clipboard",description:`${e.name} ${d.toUpperCase()} code copied.`}),setTimeout(()=>s(!1),1600)):c({title:"Copy failed",description:"Please select the code manually and copy it.",variant:"destructive"})};return(0,a.jsxs)("article",{className:"fx-card-enter group flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#f07025]/45 hover:shadow-lg hover:shadow-[#f07025]/5",style:{animationDelay:`${t%12*45}ms`},children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(a8.f,{effect:e,className:"h-48 border-b"}),(0,a.jsx)("span",{className:"pointer-events-none absolute left-3 top-3 rounded-full bg-slate-950/70 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-slate-300 backdrop-blur",children:a7[e.category]}),(0,a.jsx)(af.f.button,{type:"button",whileTap:{scale:.82},onClick:()=>{o(e.id),c({title:n?"Removed from favorites":"Added to favorites",description:n?`${e.name} was removed from your favorites.`:`${e.name} was saved to your favorites.`})},"aria-pressed":n,"aria-label":n?`Remove ${e.name} from favorites`:`Add ${e.name} to favorites`,className:"absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-950/70 backdrop-blur transition-colors hover:bg-slate-900",children:(0,a.jsx)(l,{className:`h-4 w-4 transition-all duration-200 ${n?"fill-[#f07025] text-[#f07025]":"text-slate-300"}`})}),(0,a.jsxs)("span",{className:"pointer-events-none absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-[#f07025]/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100",children:[(0,a.jsx)(ac,{className:"h-3 w-3"}),"Try it"]})]}),(0,a.jsxs)("div",{className:"flex flex-1 flex-col gap-3 p-5",children:[(0,a.jsx)("div",{className:"flex items-start justify-between gap-2",children:(0,a.jsx)("h3",{className:"text-base font-semibold tracking-tight",children:e.name})}),(0,a.jsx)("p",{className:"text-sm leading-relaxed text-muted-foreground",children:e.description}),(0,a.jsx)("div",{className:"flex flex-wrap gap-1.5",children:e.tags.map(e=>(0,a.jsxs)(ah.f,{variant:"secondary",className:"px-2 py-0 text-[11px] font-normal",children:["#",e]},e))}),(0,a.jsx)("div",{className:"mt-auto pt-1",children:(0,a.jsxs)(a2,{value:d,onValueChange:p,className:"w-full",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between gap-2",children:[(0,a.jsxs)(a5,{className:"h-8 bg-muted/70 p-0.5",children:[(0,a.jsx)(a4,{value:"html",className:"h-7 rounded-md px-3 font-mono text-[11px]",children:"HTML"}),(0,a.jsx)(a4,{value:"css",className:"h-7 rounded-md px-3 font-mono text-[11px]",children:"CSS"})]}),(0,a.jsx)("button",{type:"button",onClick:h,"aria-label":`Copy ${d.toUpperCase()} code for ${e.name}`,className:"inline-flex h-8 items-center gap-1.5 rounded-md border bg-background px-3 text-xs font-medium transition-colors hover:border-[#f07025] hover:text-[#f07025]",children:i?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ad.f,{className:"h-3.5 w-3.5 text-green-600"}),"Copied"]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ap.f,{className:"h-3.5 w-3.5"}),"Copy"]})})]}),(0,a.jsx)(a3,{value:"html",className:"mt-3",children:(0,a.jsx)(re,{code:e.html})}),(0,a.jsx)(a3,{value:"css",className:"mt-3",children:(0,a.jsx)(re,{code:e.css})})]})})]})]})}var ra=e.i(79871);let rr=al.m.map(e=>({id:e.id,label:e.label,count:"all"===e.id?al.a:al.z.filter(t=>t.category===e.id).length})),rn="fx-favorites";e.s(["EffectGallery",0,function(){let[e,t]=(0,r.useState)(al.z),[n,h]=(0,r.useState)(rr),[x,u]=(0,r.useState)("all"),[g,b]=(0,r.useState)(""),[m,w]=(0,r.useState)("featured"),[v,y]=(0,r.useState)(24),[k,j]=(0,r.useState)(!0),[S,C]=(0,r.useState)(new Set),N=(0,r.useRef)(null),A=(0,r.useCallback)(e=>{u(e),y(24)},[]),z=(0,r.useCallback)(e=>{b(e),y(24)},[]),E=(0,r.useCallback)(e=>{w(e),y(24)},[]);(0,r.useEffect)(()=>{try{let e=window.localStorage.getItem(rn);e&&C(new Set(JSON.parse(e)))}catch{}},[]),(0,r.useEffect)(()=>{let e=!1;return(async()=>{try{let a=await fetch("/api/effects"),r=await a.json();!e&&r?.ok&&Array.isArray(r.effects)&&(t(r.effects),h(r.categories??rr))}catch{}finally{e||j(!1)}})(),()=>{e=!0}},[]),(0,r.useEffect)(()=>{let e=e=>{let t=e.detail;"string"==typeof t&&(A(t),document.getElementById("gallery")?.scrollIntoView({behavior:"smooth",block:"start"}))};return window.addEventListener("fx-category",e),()=>window.removeEventListener("fx-category",e)},[A]),(0,r.useEffect)(()=>{let e=e=>{let t=e.target,a=t&&("INPUT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable);"/"!==e.key||a||(e.preventDefault(),N.current?.focus()),"Escape"===e.key&&t===N.current&&(z(""),N.current?.blur())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]);let T=(0,r.useCallback)(()=>{z(""),A("all")},[z,A]),R=(0,r.useCallback)(e=>{C(t=>{let a=new Set(t);a.has(e)?a.delete(e):a.add(e);try{window.localStorage.setItem(rn,JSON.stringify([...a]))}catch{}return a})},[]),M=(0,r.useMemo)(()=>{let t=g.trim().toLowerCase(),a=e.filter(e=>{let a="all"===x||"favorites"===x&&S.has(e.id)||e.category===x,r=""===t||e.name.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)||e.tags.some(e=>e.toLowerCase().includes(t));return a&&r});return"az"===m?[...a].sort((e,t)=>e.name.localeCompare(t.name)):"za"===m?[...a].sort((e,t)=>t.name.localeCompare(e.name)):a},[e,x,g,m,S]),F=M.slice(0,v),P=M.length>v,L=[...n,{id:"favorites",label:"Favorites",count:S.size}];return(0,a.jsx)("section",{id:"gallery",className:"scroll-mt-20",children:(0,a.jsxs)("div",{className:"mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8",children:[(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)(ra.Reveal,{children:(0,a.jsx)("p",{className:"font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#f07025]",children:"The Library"})}),(0,a.jsx)(ra.Reveal,{delay:.08,children:(0,a.jsxs)("h2",{className:"mt-3 text-3xl font-semibold tracking-tight sm:text-4xl",children:[al.a," effects. Copy, paste, done."]})}),(0,a.jsx)(ra.Reveal,{delay:.16,children:(0,a.jsx)("p",{className:"mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground",children:"Every card is a live demonstration running real CSS right here on the page. Hover, click, watch — then open the HTML or CSS tab and copy exactly what you see."})})]}),(0,a.jsxs)(ra.Reveal,{delay:.2,className:"mt-10 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between",children:[(0,a.jsx)("div",{className:"flex flex-wrap items-center gap-2",role:"tablist","aria-label":"Filter effects by category",children:L.map(e=>{let t=x===e.id,r="favorites"===e.id;return(0,a.jsxs)("button",{type:"button",role:"tab","aria-selected":t,onClick:()=>A(e.id),className:`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all ${t?"border-[#f07025] bg-[#f07025] text-white shadow-sm":"border-border bg-background text-foreground/70 hover:border-foreground/30 hover:text-foreground"}`,children:["all"===e.id?(0,a.jsx)(d,{className:"h-3.5 w-3.5"}):r?(0,a.jsx)(l,{className:`h-3.5 w-3.5 ${t?"fill-white":""}`}):null,e.label,(0,a.jsx)("span",{className:`font-mono text-[11px] ${t?"text-white/80":"text-muted-foreground"}`,children:e.count})]},e.id)})}),(0,a.jsxs)("div",{className:"relative w-full xl:w-80",children:[(0,a.jsx)(p,{className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"}),(0,a.jsx)(f.f,{ref:N,value:g,onChange:e=>z(e.target.value),placeholder:"Search effects, tags...","aria-label":"Search effects",className:"h-10 rounded-full pl-9 pr-9"}),(0,a.jsx)("kbd",{"aria-hidden":"true",className:"pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground sm:block",children:"/"})]})]}),(0,a.jsxs)("div",{className:"mt-6 flex flex-wrap items-center justify-between gap-3",children:[(0,a.jsxs)("p",{className:"text-sm text-muted-foreground",children:["Showing"," ",(0,a.jsx)("span",{className:"font-semibold text-foreground",children:M.length})," ",1===M.length?"effect":"effects","favorites"===x&&" from your favorites","all"!==x&&"favorites"!==x&&" in this category",g&&(0,a.jsxs)(a.Fragment,{children:[" ",'for "',(0,a.jsx)("span",{className:"text-foreground",children:g}),'"']})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[k&&(0,a.jsx)("span",{className:"font-mono text-xs text-muted-foreground",children:"syncing with API..."}),(0,a.jsx)(o,{className:"h-4 w-4 text-muted-foreground"}),(0,a.jsxs)(at,{value:m,onValueChange:e=>E(e),children:[(0,a.jsx)(ar,{"aria-label":"Sort effects",className:"h-9 w-[170px] rounded-full text-sm",children:(0,a.jsx)(aa,{placeholder:"Sort"})}),(0,a.jsxs)(an,{children:[(0,a.jsx)(ao,{value:"featured",children:"Featured order"}),(0,a.jsx)(ao,{value:"az",children:"Name A–Z"}),(0,a.jsx)(ao,{value:"za",children:"Name Z–A"})]})]})]})]}),F.length>0?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3",children:F.map((e,t)=>(0,a.jsx)(rt,{effect:e,index:t,isFavorite:S.has(e.id),onToggleFavorite:R},e.id))}),P&&(0,a.jsxs)("div",{className:"mt-10 flex flex-col items-center gap-3",children:[(0,a.jsxs)("p",{className:"font-mono text-xs text-muted-foreground",children:["Showing ",F.length," of ",M.length," effects"]}),(0,a.jsxs)("button",{type:"button",onClick:()=>y(e=>e+24),className:"inline-flex items-center gap-1.5 rounded-full border px-6 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f07025] hover:text-[#f07025] hover:shadow-lg hover:shadow-[#f07025]/10 active:translate-y-0 active:scale-[0.97]",children:["Load more effects",(0,a.jsx)(i.f,{className:"h-4 w-4"})]})]})]}):(0,a.jsxs)("div",{className:"mt-6 flex flex-col items-center gap-3 rounded-xl border border-dashed py-16 text-center",children:["favorites"===x?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l,{className:"h-8 w-8 text-muted-foreground"}),(0,a.jsx)("p",{className:"text-sm font-medium",children:"No favorites yet"}),(0,a.jsx)("p",{className:"max-w-sm text-sm text-muted-foreground",children:"Tap the heart on any effect to save it here. Your favorites are stored in this browser."})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c,{className:"h-8 w-8 text-muted-foreground"}),(0,a.jsx)("p",{className:"text-sm font-medium",children:"No effects match your search"}),(0,a.jsx)("p",{className:"text-sm text-muted-foreground",children:"Try a different keyword or clear the filters."})]}),(0,a.jsxs)("button",{type:"button",onClick:T,className:"mt-1 inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:border-[#f07025] hover:text-[#f07025]",children:[(0,a.jsx)(s,{className:"h-4 w-4"}),"Reset filters"]})]})]})})}],20703)},53115,e=>{"use strict";var t=e.i(43476);let a=(0,e.i(71645).memo)(function({effect:e,className:a=""}){return(0,t.jsxs)("div",{className:`fx-canvas relative w-full overflow-hidden ${a}`,"aria-label":`${e.name} live preview`,children:[(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:e.css}}),(0,t.jsx)("div",{className:"relative z-10 flex h-full w-full items-center justify-center p-4",dangerouslySetInnerHTML:{__html:e.html}})]})});e.s(["f",0,a])},85133,e=>{"use strict";var t=e.i(43476);let a=(0,e.i(75254).f)("circle-question-mark",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);var r=e.i(46932),n=e.i(71645),o=e.i(30030),i=e.i(75830),s=e.i(20783),l=e.i(81140),d=e.i(69340),p=e.i(48425),c=e.i(34620),f=e.i(96626),h=e.i(10772),x=Object.defineProperty,u=(e,t)=>x(e,"name",{value:t,configurable:!0}),g="Collapsible",[b,m]=(0,o.f)(g),[w,v]=b(g),y=n.forwardRef(u(function(e,a){let{__scopeCollapsible:r,open:o,defaultOpen:i,disabled:s,onOpenChange:l,...c}=e,[f,x]=(0,d.f)({prop:o,defaultProp:i??!1,onChange:l,caller:g});return(0,t.jsx)(w,{scope:r,disabled:s,contentId:(0,h.f)(),open:f,onOpenToggle:n.useCallback(()=>x(e=>!e),[x]),children:(0,t.jsx)(p.V.div,{"data-state":N(f),"data-disabled":s?"":void 0,...c,ref:a})})},"Collapsible")),k=n.forwardRef(u(function(e,a){let{__scopeCollapsible:r,...n}=e,o=v("CollapsibleTrigger",r);return(0,t.jsx)(p.V.button,{type:"button","aria-controls":o.open?o.contentId:void 0,"aria-expanded":o.open||!1,"data-state":N(o.open),"data-disabled":o.disabled?"":void 0,disabled:o.disabled,...n,ref:a,onClick:(0,l.f)(e.onClick,o.onOpenToggle)})},"CollapsibleTrigger")),j="CollapsibleContent",S=n.forwardRef(u(function(e,a){let{forceMount:r,...n}=e,o=v(j,e.__scopeCollapsible);return(0,t.jsx)(f.f,{present:r||o.open,children:({present:e})=>(0,t.jsx)(C,{...n,ref:a,present:e})})},"CollapsibleContent")),C=n.forwardRef(u(function(e,a){let{__scopeCollapsible:r,present:o,children:i,...l}=e,d=v(j,r),[f,h]=n.useState(o),x=n.useRef(null),u=(0,s.f)(a,x),g=n.useRef(0),b=g.current,m=n.useRef(0),w=m.current,y=d.open||f,k=n.useRef(y),S=n.useRef(void 0);return n.useEffect(()=>{let e=requestAnimationFrame(()=>k.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,c.f)(()=>{let e=x.current;if(e){S.current=S.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();g.current=t.height,m.current=t.width,k.current||(e.style.transitionDuration=S.current.transitionDuration,e.style.animationName=S.current.animationName),h(o)}},[d.open,o]),(0,t.jsx)(p.V.div,{"data-state":N(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!y,...l,ref:u,style:{"--radix-collapsible-content-height":b?`${b}px`:void 0,"--radix-collapsible-content-width":w?`${w}px`:void 0,...e.style},children:y&&i})},"CollapsibleContentImpl"));function N(e){return e?"open":"closed"}u(N,"getState");var A=e.i(86318),z=Object.defineProperty,E=(e,t)=>z(e,"name",{value:t,configurable:!0}),T="vertical",R="horizontal",M="Accordion",F=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[P,{useGetCollection:L,createCollectionScope:D}]=(0,i.K)(M),[B,I]=(0,o.f)(M,[D,m]),H=m(),Y=n.forwardRef(E(function(e,a){let{type:r,...n}=e;return(0,t.jsx)(P.Provider,{scope:e.__scopeAccordion,children:"multiple"===r?(0,t.jsx)(W,{...n,ref:a}):(0,t.jsx)(_,{...n,ref:a})})},"Accordion")),[O,q]=B(M),[X,V]=B(M,{collapsible:!1}),_=n.forwardRef(E(function(e,a){let{value:r,defaultValue:o,onValueChange:i=E(()=>{},"onValueChange"),collapsible:s=!1,...l}=e,[p,c]=(0,d.f)({prop:r,defaultProp:o??"",onChange:i,caller:M});return(0,t.jsx)(O,{scope:e.__scopeAccordion,value:n.useMemo(()=>p?[p]:[],[p]),onItemOpen:c,onItemClose:n.useCallback(()=>s&&c(""),[s,c]),children:(0,t.jsx)(X,{scope:e.__scopeAccordion,collapsible:s,children:(0,t.jsx)(U,{...l,ref:a})})})},"AccordionImplSingle")),W=n.forwardRef(E(function(e,a){let{value:r,defaultValue:o,onValueChange:i=E(()=>{},"onValueChange"),...s}=e,[l,p]=(0,d.f)({prop:r,defaultProp:o??[],onChange:i,caller:M}),c=n.useCallback(e=>p((t=[])=>[...t,e]),[p]),f=n.useCallback(e=>p((t=[])=>t.filter(t=>t!==e)),[p]);return(0,t.jsx)(O,{scope:e.__scopeAccordion,value:l,onItemOpen:c,onItemClose:f,children:(0,t.jsx)(X,{scope:e.__scopeAccordion,collapsible:!0,children:(0,t.jsx)(U,{...s,ref:a})})})},"AccordionImplMultiple")),[G,$]=B(M),U=n.forwardRef(E(function(e,a){let{__scopeAccordion:r,disabled:o,dir:i,orientation:d=T,...c}=e,f=n.useRef(null),h=(0,s.f)(f,a),x=L(r),u="ltr"===(0,A.f)(i),g=(0,l.f)(e.onKeyDown,e=>{if(!F.includes(e.key))return;let t=x(),a=e.target,r=t.filter(([,e])=>!e.element.disabled),n=r.findIndex(([,e])=>e.element===a),o=r.size;if(-1===n)return;e.preventDefault();let i=n,s=o-1,l=E(()=>{(i=n+1)>s&&(i=0)},"moveNext"),p=E(()=>{(i=n-1)<0&&(i=s)},"movePrev");switch(e.key){case"Home":i=0;break;case"End":i=s;break;case"ArrowRight":d===R&&(u?l():p());break;case"ArrowDown":d===T&&l();break;case"ArrowLeft":d===R&&(u?p():l());break;case"ArrowUp":d===T&&p()}let c=i%o;r.at(c)?.element.focus()});return(0,t.jsx)(G,{scope:r,disabled:o,direction:i,orientation:d,children:(0,t.jsx)(P.Slot,{scope:r,children:(0,t.jsx)(p.V.div,{...c,"data-orientation":d,ref:h,onKeyDown:o?void 0:g})})})},"AccordionImpl")),K="AccordionItem",[Z,J]=B(K),Q=n.forwardRef(E(function(e,a){let{__scopeAccordion:r,value:n,...o}=e,i=$(K,r),s=q(K,r),l=H(r),d=(0,h.f)(),p=n&&s.value.includes(n)||!1,c=i.disabled||e.disabled;return(0,t.jsx)(Z,{scope:r,open:p,disabled:c,triggerId:d,children:(0,t.jsx)(y,{"data-orientation":i.orientation,"data-state":en(p),...l,...o,ref:a,disabled:c,open:p,onOpenChange:e=>{e?s.onItemOpen(n):s.onItemClose(n)}})})},"AccordionItem")),ee=n.forwardRef(E(function(e,a){let{__scopeAccordion:r,...n}=e,o=$(M,r),i=J("AccordionHeader",r);return(0,t.jsx)(p.V.h3,{"data-orientation":o.orientation,"data-state":en(i.open),"data-disabled":i.disabled?"":void 0,...n,ref:a})},"AccordionHeader")),et="AccordionTrigger",ea=n.forwardRef(E(function(e,a){let{__scopeAccordion:r,...n}=e,o=$(M,r),i=J(et,r),s=V(et,r),l=H(r);return(0,t.jsx)(P.ItemSlot,{scope:r,children:(0,t.jsx)(k,{"aria-disabled":i.open&&!s.collapsible||void 0,"data-orientation":o.orientation,id:i.triggerId,...l,...n,ref:a})})},"AccordionTrigger")),er=n.forwardRef(E(function(e,a){let{__scopeAccordion:r,...n}=e,o=$(M,r),i=J("AccordionContent",r),s=H(r);return(0,t.jsx)(S,{role:"region","aria-labelledby":i.triggerId,"data-orientation":o.orientation,...s,...n,ref:a,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})},"AccordionContent"));function en(e){return e?"open":"closed"}E(en,"getState");var eo=e.i(9797),ei=e.i(75157);function es({...e}){return(0,t.jsx)(Y,{"data-slot":"accordion",...e})}function el({className:e,...a}){return(0,t.jsx)(Q,{"data-slot":"accordion-item",className:(0,ei.f)("border-b last:border-b-0",e),...a})}function ed({className:e,children:a,...r}){return(0,t.jsx)(ee,{className:"flex",children:(0,t.jsxs)(ea,{"data-slot":"accordion-trigger",className:(0,ei.f)("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",e),...r,children:[a,(0,t.jsx)(eo.f,{className:"text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"})]})})}function ep({className:e,children:a,...r}){return(0,t.jsx)(er,{"data-slot":"accordion-content",className:"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",...r,children:(0,t.jsx)("div",{className:(0,ei.f)("pt-0 pb-4",e),children:a})})}var ec=e.i(79871);let ef=[{question:"Are these effects really pure CSS?",answer:"Yes — 100%. Every effect is built with plain HTML and CSS only: keyframe animations, transitions, transforms, gradients and pseudo-elements. No JavaScript, no external libraries, no images."},{question:"Can I use the effects in commercial projects?",answer:"Absolutely. All effects in the library are free to use in personal, client and commercial work — no attribution required. Copy the code and ship it."},{question:"Will they work with React, Next.js or WordPress?",answer:"Yes. Because the code is plain HTML and CSS, it works anywhere CSS works — React, Next.js, Vue, Svelte, WordPress, Shopify, emails with CSS support, and plain static sites. Just paste the HTML into your markup and the CSS into your stylesheet."},{question:"Will these effects slow down my website?",answer:"No. Each snippet is a few lines of CSS with no runtime cost. Animations run on the GPU via transform and opacity, which is exactly how browsers render them efficiently."},{question:"How do I use an effect?",answer:"Open any card, switch between the HTML and CSS tabs, hit Copy, and paste both parts into your project. Rename the .fx-* classes if you like — each effect is namespaced so multiple effects never collide."},{question:"Do you add new effects?",answer:"Yes — the library keeps growing with modern CSS techniques like @property, scroll-driven animations, 3D transforms and more. New effects land in the gallery as they're crafted."}];e.s(["Faq",0,function(){return(0,t.jsx)("section",{id:"faq",className:"scroll-mt-20 border-y bg-muted/40",children:(0,t.jsxs)("div",{className:"mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-20 lg:px-8",children:[(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)(ec.Reveal,{children:(0,t.jsx)("p",{className:"font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#f07025]",children:"FAQ"})}),(0,t.jsx)(ec.Reveal,{delay:.08,children:(0,t.jsx)("h2",{className:"mt-3 text-3xl font-semibold tracking-tight sm:text-4xl",children:"Frequently asked questions"})}),(0,t.jsx)(ec.Reveal,{delay:.16,children:(0,t.jsx)("p",{className:"mt-4 text-base leading-relaxed text-muted-foreground",children:"Everything you need to know before copying your first effect."})})]}),(0,t.jsx)(es,{type:"single",collapsible:!0,className:"mt-10",children:ef.map((e,n)=>(0,t.jsx)(r.f.div,{initial:{opacity:0,y:18},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-40px"},transition:{duration:.55,delay:.06*n,ease:ec.EASE},children:(0,t.jsxs)(el,{value:`faq-${n}`,children:[(0,t.jsx)(ed,{className:"text-left text-base font-medium hover:no-underline hover:text-[#f07025]",children:(0,t.jsxs)("span",{className:"flex items-center gap-2.5",children:[(0,t.jsx)(a,{className:"h-4 w-4 shrink-0 text-[#f07025]"}),e.question]})}),(0,t.jsx)(ep,{className:"text-sm leading-relaxed text-muted-foreground",children:e.answer})]})},n))})]})})}],85133)},48399,e=>{"use strict";var t=e.i(43476),a=e.i(75254);let r=(0,a.f)("blocks",[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]]),n=(0,a.f)("clipboard-check",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]),o=(0,a.f)("heart-handshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);var i=e.i(34754),s=e.i(83086);let l=(0,a.f)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);var d=e.i(46932),p=e.i(79871);let c=[{icon:l,title:"Zero dependencies",description:"No jQuery, no libraries, no npm installs. Just a small snippet of CSS that you fully own and control."},{icon:s.f,title:"Pure CSS, no JavaScript",description:"Every animation is powered by modern CSS — keyframes, transitions, transforms. Lightning fast and framework safe."},{icon:n,title:"Copy-ready code",description:"Each effect ships with clean, formatted HTML and CSS. Copy the exact code you see running in the demo."},{icon:i.f,title:"Live demonstrations",description:"What you preview is what you paste. All demos run the real code right in your browser — hover, click and watch."},{icon:r,title:"Framework agnostic",description:"Works in React, Next.js, Vue, Svelte, WordPress, Shopify, plain HTML — anywhere CSS is supported."},{icon:o,title:"Free for any project",description:"Use every effect in personal, client, or commercial work. No attribution required, no hidden paywalls."}];e.s(["Features",0,function(){return(0,t.jsx)("section",{id:"features",className:"scroll-mt-20",children:(0,t.jsxs)("div",{className:"mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8",children:[(0,t.jsxs)("div",{className:"mx-auto max-w-2xl text-center",children:[(0,t.jsx)(p.Reveal,{children:(0,t.jsx)("p",{className:"font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#f07025]",children:"Why CSS Effects Lab"})}),(0,t.jsx)(p.Reveal,{delay:.08,children:(0,t.jsx)("h2",{className:"mt-3 text-3xl font-semibold tracking-tight sm:text-4xl",children:"Built for developers who ship"})}),(0,t.jsx)(p.Reveal,{delay:.16,children:(0,t.jsx)("p",{className:"mt-4 text-base leading-relaxed text-muted-foreground",children:"Everything in the lab follows one rule: the code you copy should just work — anywhere, on any stack, with nothing else to install."})})]}),(0,t.jsx)("div",{className:"mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",children:c.map((e,a)=>(0,t.jsxs)(d.f.div,{initial:{opacity:0,y:26},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.65,delay:a%3*.1,ease:p.EASE},className:"group rounded-xl border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#f07025]/40 hover:shadow-lg hover:shadow-[#f07025]/5",children:[(0,t.jsx)("span",{className:"inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#f07025]/10 text-[#f07025] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6",children:(0,t.jsx)(e.icon,{className:"h-5 w-5"})}),(0,t.jsx)("h3",{className:"mt-5 text-base font-semibold tracking-tight",children:e.title}),(0,t.jsx)("p",{className:"mt-2 text-sm leading-relaxed text-muted-foreground",children:e.description})]},e.title))})]})})}],48399)},42377,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(75254);let n=(0,r.f)("bug",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]),o=(0,r.f)("circle-check",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),i=(0,r.f)("clock-3",[["path",{d:"M12 6v6h4",key:"135r8i"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),s=(0,r.f)("lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),l=(0,r.f)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),d=(0,r.f)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),p=(0,r.f)("message-square-heart",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8",key:"1blaws"}]]),c=(0,r.f)("send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]),f=(0,r.f)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);var h=e.i(83086);let x=(0,r.f)("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]),u=(0,r.f)("wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);var g=e.i(19455),b=e.i(93479),m=e.i(48425),w=Object.defineProperty,v=a.forwardRef(w(function(e,a){return(0,t.jsx)(m.V.label,{...e,ref:a,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}})},"name",{value:"Label",configurable:!0})),y=e.i(75157);function k({className:e,...a}){return(0,t.jsx)(v,{"data-slot":"label",className:(0,y.f)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",e),...a})}function j({className:e,...a}){return(0,t.jsx)("textarea",{"data-slot":"textarea",className:(0,y.f)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),...a})}var S=e.i(74911),C=e.i(79871);let N=[{id:"general",label:"General",icon:p},{id:"suggestion",label:"Suggestion",icon:s},{id:"bug",label:"Bug report",icon:n},{id:"feature",label:"Feature request",icon:u}];function A({value:e,onChange:r,disabled:n}){let[o,i]=(0,a.useState)(0),s=o||e;return(0,t.jsxs)("div",{className:"flex items-center gap-1.5",role:"radiogroup","aria-label":"Overall rating (required)",children:[[1,2,3,4,5].map(a=>(0,t.jsx)("button",{type:"button",role:"radio","aria-checked":e===a,"aria-label":`Rate ${a} out of 5 stars`,disabled:n,onMouseEnter:()=>i(a),onMouseLeave:()=>i(0),onFocus:()=>i(a),onBlur:()=>i(0),onClick:()=>r(a),className:"rounded-md p-1 transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f07025] hover:scale-110 disabled:cursor-not-allowed disabled:opacity-60",children:(0,t.jsx)(x,{className:(0,y.f)("h-6 w-6 transition-colors",a<=s?"fill-[#f07025] text-[#f07025]":"fill-transparent text-muted-foreground/50")})},a)),e>0&&(0,t.jsxs)("span",{className:"ml-1.5 font-mono text-xs text-muted-foreground",children:[e,"/5"]})]})}function z({label:e,value:a}){return(0,t.jsxs)("div",{className:"rounded-xl border bg-background/60 px-4 py-3",children:[(0,t.jsx)("p",{className:"font-mono text-[10px] uppercase tracking-wider text-muted-foreground",children:e}),(0,t.jsx)("p",{className:"mt-1 text-lg font-semibold tabular-nums",children:a})]})}e.s(["FeedbackSection",0,function(){let{toast:e}=(0,S.f)(),r=(0,a.useRef)(Date.now()),[n,s]=(0,a.useState)(0),[p,x]=(0,a.useState)("general"),[u,m]=(0,a.useState)(""),[w,v]=(0,a.useState)(""),[E,T]=(0,a.useState)(""),[R,M]=(0,a.useState)(""),[F,P]=(0,a.useState)("idle"),[L,D]=(0,a.useState)(""),[B,I]=(0,a.useState)(null);(0,a.useEffect)(()=>{r.current=Date.now();let e=!1;return fetch("/api/feedback").then(e=>e.ok?e.json():Promise.reject(Error("failed"))).then(t=>{e||"number"!=typeof t.total||I(t)}).catch(()=>{}),()=>{e=!0}},[]);let H=1e3-E.length,Y=n>0&&E.trim().length>=4&&E.length<=1e3;async function O(t){if(t.preventDefault(),"submitting"===F||!Y)return;if(0===n)return void D("Please select a star rating first.");P("submitting"),D("");let a=Date.now()-r.current;try{let t=await fetch("/api/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({rating:n,category:p,name:u,email:w,message:E,website:R,elapsedMs:a})}),r=await t.json().catch(()=>({}));if(!t.ok||!r.ok){P("error"),D(r.error||"Something went wrong while sending your feedback. Please try again."),429===t.status&&e({title:"Too many attempts",description:r.error||"Please wait a few minutes and try again.",variant:"destructive"});return}P("success"),I(e=>e?{total:e.total+1,averageRating:Math.round((e.averageRating*e.total+n)/(e.total+1)*10)/10}:{total:1,averageRating:n}),e({title:"Feedback received",description:"Thank you! Your feedback helps us improve the library."})}catch{P("error"),D("Network error — please check your connection and try again.")}}return(0,t.jsx)("section",{id:"feedback",className:"scroll-mt-20 border-y bg-muted/40",children:(0,t.jsx)("div",{className:"mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8",children:(0,t.jsxs)("div",{className:"grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14",children:[(0,t.jsx)(C.Reveal,{children:(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#f07025]",children:"Feedback"}),(0,t.jsx)("h2",{className:"mt-3 text-3xl font-semibold tracking-tight sm:text-4xl",children:"Tell us what you think"}),(0,t.jsx)("p",{className:"mt-4 max-w-lg text-base leading-relaxed text-muted-foreground",children:"Found a bug? Want a new effect? Your feedback is saved directly in our database and reviewed regularly — every suggestion shapes the next version of the library."}),(0,t.jsxs)("ul",{className:"mt-6 space-y-3 text-sm text-muted-foreground",children:[(0,t.jsxs)("li",{className:"flex items-start gap-2.5",children:[(0,t.jsx)(f,{className:"mt-0.5 h-4 w-4 shrink-0 text-[#f07025]"}),"Validated, sanitized and rate-limited to stop spam and abuse."]}),(0,t.jsxs)("li",{className:"flex items-start gap-2.5",children:[(0,t.jsx)(d,{className:"mt-0.5 h-4 w-4 shrink-0 text-[#f07025]"}),"Your name and email are optional — we never store your IP address."]}),(0,t.jsxs)("li",{className:"flex items-start gap-2.5",children:[(0,t.jsx)(i,{className:"mt-0.5 h-4 w-4 shrink-0 text-[#f07025]"}),"Feedback is reviewed within a few days. Bug reports get priority."]})]}),B&&(0,t.jsxs)("div",{className:"mt-8 grid max-w-sm grid-cols-2 gap-3",children:[(0,t.jsx)(z,{label:"Feedback received",value:String(B.total)}),(0,t.jsx)(z,{label:"Average rating",value:B.total>0?`${B.averageRating}/5`:"—"})]})]})}),(0,t.jsx)(C.Reveal,{delay:.14,className:"rounded-2xl",children:(0,t.jsx)("div",{className:"h-full rounded-2xl border bg-background p-6 shadow-sm transition-shadow duration-500 hover:shadow-lg sm:p-8",children:"success"===F?(0,t.jsxs)("div",{className:"flex min-h-[420px] flex-col items-center justify-center text-center",role:"status",children:[(0,t.jsxs)("span",{className:"relative flex h-20 w-20 items-center justify-center",children:[(0,t.jsx)("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f07025]/20"}),(0,t.jsx)("span",{className:"relative flex h-16 w-16 items-center justify-center rounded-full bg-[#f07025]",children:(0,t.jsx)(o,{className:"h-8 w-8 text-white"})})]}),(0,t.jsxs)("h3",{className:"mt-6 text-2xl font-semibold",children:["Thank you",u?`, ${u}`:"","!"]}),(0,t.jsx)("p",{className:"mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground",children:"Your feedback has been saved and will be reviewed soon. If you reported a bug, we really appreciate the details — it makes fixing it much faster."}),(0,t.jsxs)(g.f,{type:"button",variant:"outline",onClick:function(){s(0),x("general"),m(""),v(""),T(""),M(""),P("idle"),D(""),r.current=Date.now()},className:"mt-8 rounded-full",children:[(0,t.jsx)(h.f,{className:"h-4 w-4"}),"Send more feedback"]})]}):(0,t.jsxs)("form",{onSubmit:O,noValidate:!0,children:[(0,t.jsxs)("div",{"aria-hidden":"true",className:"absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden",children:[(0,t.jsx)("label",{htmlFor:"fx-website",children:"Leave this field empty"}),(0,t.jsx)("input",{id:"fx-website",name:"website",type:"text",tabIndex:-1,autoComplete:"off",value:R,onChange:e=>M(e.target.value)})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)(k,{className:"text-sm font-medium",children:["Rate your experience"," ",(0,t.jsx)("span",{className:"text-[#f07025]",children:"*"})]}),(0,t.jsx)("div",{className:"mt-2.5",children:(0,t.jsx)(A,{value:n,onChange:s,disabled:"submitting"===F})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(k,{className:"text-sm font-medium",children:"What is this about?"}),(0,t.jsx)("div",{className:"mt-2.5 flex flex-wrap gap-2",role:"radiogroup","aria-label":"Feedback type",children:N.map(e=>{let a=e.icon,r=p===e.id;return(0,t.jsxs)("button",{type:"button",role:"radio","aria-checked":r,disabled:"submitting"===F,onClick:()=>x(e.id),className:(0,y.f)("inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f07025] disabled:cursor-not-allowed disabled:opacity-60",r?"border-[#f07025] bg-[#f07025] text-white":"border-border bg-transparent text-muted-foreground hover:border-[#f07025]/60 hover:text-foreground"),children:[(0,t.jsx)(a,{className:"h-3.5 w-3.5"}),e.label]},e.id)})})]}),(0,t.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-1.5",children:[(0,t.jsxs)(k,{htmlFor:"fx-name",className:"text-sm font-medium",children:["Name ",(0,t.jsx)("span",{className:"text-muted-foreground",children:"(optional)"})]}),(0,t.jsx)(b.f,{id:"fx-name",placeholder:"Jane Doe",maxLength:60,autoComplete:"name",disabled:"submitting"===F,value:u,onChange:e=>m(e.target.value)})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-1.5",children:[(0,t.jsxs)(k,{htmlFor:"fx-email",className:"text-sm font-medium",children:["Email ",(0,t.jsx)("span",{className:"text-muted-foreground",children:"(optional)"})]}),(0,t.jsx)(b.f,{id:"fx-email",type:"email",placeholder:"jane@example.com",maxLength:120,autoComplete:"email",disabled:"submitting"===F,value:w,onChange:e=>v(e.target.value)})]})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-1.5",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)(k,{htmlFor:"fx-message",className:"text-sm font-medium",children:["Message ",(0,t.jsx)("span",{className:"text-[#f07025]",children:"*"})]}),(0,t.jsxs)("span",{className:(0,y.f)("font-mono text-[11px] tabular-nums",H<=100?"text-amber-600 dark:text-amber-400":"text-muted-foreground"),children:[E.length,"/",1e3]})]}),(0,t.jsx)(j,{id:"fx-message",required:!0,placeholder:"Tell us what you love, what's broken, or what you'd like to see next…",rows:5,maxLength:1e3,disabled:"submitting"===F,value:E,onChange:e=>T(e.target.value),className:"resize-y min-h-[110px]","aria-describedby":"fx-message-hint"}),(0,t.jsxs)("p",{id:"fx-message-hint",className:"text-xs text-muted-foreground",children:["Max ",1e3.toLocaleString()," characters. Plain text only."]})]}),"error"===F&&L&&(0,t.jsx)("div",{role:"alert",className:"rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive",children:L}),(0,t.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[(0,t.jsx)(g.f,{type:"submit",disabled:"submitting"===F||!Y,className:"fx-btn-shine rounded-full bg-[#f07025] text-white shadow-sm shadow-[#f07025]/20 transition-all duration-300 enabled:hover:-translate-y-0.5 enabled:hover:bg-[#e0611a] enabled:hover:shadow-lg enabled:hover:shadow-[#f07025]/25 enabled:active:translate-y-0 enabled:active:scale-[0.97] sm:min-w-44",children:"submitting"===F?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l,{className:"h-4 w-4 animate-spin"}),"Sending…"]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c,{className:"h-4 w-4"}),"Send feedback"]})}),(0,t.jsxs)("p",{className:"inline-flex items-center gap-1.5 text-xs text-muted-foreground",children:[(0,t.jsx)(d,{className:"h-3 w-3"}),"Protected by rate limiting & spam filters"]})]})]})]})})})]})})})}],42377)},96228,e=>{"use strict";var t=e.i(43476),a=e.i(75157);function r({className:e}){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:e,children:[(0,t.jsx)("path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"}),(0,t.jsx)("path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"}),(0,t.jsx)("path",{d:"M12 9.2l.75 2.05L14.8 12l-2.05.75L12 14.8l-.75-2.05L9.2 12l2.05-.75z",fill:"currentColor",stroke:"none"})]})}e.s(["f",0,function({badgeClassName:e="h-9 w-9",markClassName:n="h-5 w-5"}){return(0,t.jsx)("span",{"aria-hidden":"true",className:(0,a.f)("flex items-center justify-center rounded-xl bg-gradient-to-br from-[#fb923c] via-[#f07025] to-[#d95a10] shadow-[0_8px_20px_-8px_rgba(240,112,37,0.7),inset_0_1px_0_rgba(255,255,255,0.35)] ring-1 ring-white/25",e),children:(0,t.jsx)(r,{className:n})})}])},27308,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(25063);let n=(0,e.i(75254).f)("mouse-pointer-click",[["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",key:"s0h3yz"}]]);class o{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>e.finished))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let a=0;a<this.animations.length;a++)this.animations[a][e]=t}attachTimeline(e){let t=this.animations.map(t=>t.attachTimeline(e));return()=>{t.forEach((e,t)=>{e&&e(),this.animations[t].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get state(){return this.getAll("state")}get startTime(){return this.getAll("startTime")}get duration(){return i(this.animations,"duration")}get iterationDuration(){return i(this.animations,"iterationDuration")}runAll(e){this.animations.forEach(t=>t[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function i(e,t){let a=0;for(let r=0;r<e.length;r++){let n=e[r][t];null!==n&&n>a&&(a=n)}return a}class s extends o{then(e,t){return this.finished.finally(e).then(()=>{})}}var l=e.i(33887),d=e.i(86427),p=e.i(28409),c=e.i(83411),f=e.i(15923),h=e.i(97307),x=e.i(21748),u=e.i(15932),g=e.i(83920),b=e.i(63074),m=e.i(65566),w=e.i(30151),v=e.i(93544);function y(e,t){var a;let r;return(0,v.f)(e)?e[a=e.length,((t-0)%(r=a-0)+r)%r+0]:e}var k=e.i(49652);function j(e){return"object"==typeof e&&!Array.isArray(e)}function S(e,t,a,r){return null==e?[]:"string"==typeof e&&j(t)?(0,k.f)(e,a,r):e instanceof NodeList?Array.from(e):Array.isArray(e)?e.filter(e=>null!=e):[e]}function C(e,t,a,r){return"number"==typeof t?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):"<"===t?a:t.startsWith("<")?Math.max(0,a+parseFloat(t.slice(1))):r.get(t)??e}var N=e.i(706);function A(e,t){return e.at!==t.at?e.at-t.at:null===e.value?1:null===t.value?-1:0}function z(e,t){return t.has(e)||t.set(e,{}),t.get(e)}function E(e,t){return t[e]||(t[e]=[]),t[e]}let T=e=>"number"==typeof e,R=e=>e.every(T);var M=e.i(68705),F=e.i(72094),P=e.i(72323),L=e.i(89026),D=e.i(36331),B=e.i(75737),I=e.i(86783),H=e.i(30162),Y=e.i(17218);class O extends Y.F{constructor(){super(...arguments),this.type="object"}readValueFromInstance(e,t){if(t in e){let a=e[t];if("string"==typeof a||"number"==typeof a)return a}}getBaseTargetFromProps(){}removeValueFromRenderState(e,t){delete t.output[e]}measureInstanceViewportBox(){return(0,H.J)()}build(e,t){Object.assign(e.output,t)}renderInstance(e,{output:t}){Object.assign(e,t)}sortInstanceNodePosition(){return 0}}function q(e){let t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},a=(0,L.f)(e)&&!(0,D.f)(e)?new B.f(t):new I.f(t);a.mount(e),F.f.set(e,a)}function X(e){let t=new O({presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}});t.mount(e),F.f.set(e,t)}function V(e,t,a,r){let n=[];if((0,c.f)(e)||"number"==typeof e||"string"==typeof e&&!j(t))n.push((0,M.f)(e,j(t)&&t.default||t,a&&a.default||a));else{if(null==e)return n;let o=S(e,t,r),i=o.length;(0,m.k)(!!i,"No valid elements provided.","no-valid-elements");for(let e=0;e<i;e++){let r=o[e],s=r instanceof Element?q:X;F.f.has(r)||s(r);let l=F.f.get(r),d={...a};"delay"in d&&"function"==typeof d.delay&&(d.delay=d.delay(e,i)),n.push(...(0,P.f)(l,{...t,transition:d},{}))}}return n}let _=function(e={}){let{scope:t,reduceMotion:a,skipAnimations:r}=e;return function(e,n,o){var i;let v,k=[],j={};if(void 0!==a&&(j.reduceMotion=a),void 0!==r&&(j.skipAnimations=r),Array.isArray(e)&&e.some(Array.isArray)){let a,{onComplete:r,...o}=n||{};"function"==typeof r&&(v=r),i={...j,...o},a=[],(function(e,{defaultTransition:t={},...a}={},r,n){let o=t.duration||.3,i=new Map,s=new Map,d={},p=new Map,v=0,k=0,j=0;for(let a=0;a<e.length;a++){let i=e[a];if("string"==typeof i){p.set(i,k);continue}if(!Array.isArray(i)){p.set(i.name,C(k,i.at,v,p));continue}let[g,A,F={}]=i;void 0!==F.at&&(k=C(k,F.at,v,p));let P=0,L=(e,a,r,i=0,s=0)=>{var d;let p=Array.isArray(d=e)?d:[d],{delay:c=0,times:g=(0,f.f)(p),type:v=t.type||"keyframes",repeat:S,repeatType:C,repeatDelay:A=0,...z}=a,{ease:E=t.ease||"easeOut",duration:T}=a,M="function"==typeof c?c(i,s):c,F=p.length,L=(0,h.f)(v)?v:n?.[v||"keyframes"];if(F<=2&&L){let e=100;2===F&&R(p)&&(e=Math.abs(p[1]-p[0]));let a={...t,...z};void 0!==T&&(a.duration=(0,b.Z)(T));let r=(0,x.f)(a,e,L);E=r.ease,T=r.duration}T??(T=o);let D=k+M;1===g.length&&0===g[0]&&(g[1]=1);let B=g.length-p.length;if(B>0&&(0,u.f)(g,B),1===p.length&&p.unshift(null),S&&(0,m.w)(S<20,`Sequence segments can't repeat ${S} times — ignoring repeat option. Use a value below 20 or apply repeat at the sequence level instead.`),S&&S<20){let e=T>0?A/T:0;T=T*(S+1)+A*S;let t=[...p],a=[...g],r=[...E=Array.isArray(E)?[...E]:[E]],n="reverse"===C||"mirror"===C,o=t,i=r;n&&(o=[...t].reverse(),"reverse"===C&&(i=[...r].reverse().map(e=>"function"==typeof e?(0,w.f)(e):e)));for(let s=0;s<S;s++){let l=n&&s%2==0,d=l?o:t,c=l?i:r,f=(s+1)*(1+e);e>0&&(p.push(p[p.length-1]),g.push(f),E.push("linear")),p.push(...d);for(let e=0;e<d.length;e++)g.push(a[e]+f),E.push(0===e?"linear":y(c,e-1))}!function(e,t,a=0){let r=t+1+t*a;for(let t=0;t<e.length;t++)e[t]=e[t]/r}(g,S,e)}let I=D+T;!function(e,t,a,r,n,o){for(let t=0;t<e.length;t++){let a=e[t];a.at>n&&a.at<o&&((0,l.i)(e,a),t--)}for(let i=0;i<t.length;i++)e.push({value:t[i],at:(0,N.f)(n,o,r[i]),easing:y(a,i)})}(r,p,E,g,D,I),P=Math.max(M+T,P),j=Math.max(I,j)};if((0,c.f)(g))L(A,F,E("default",z(g,s)));else{let e=S(g,A,r,d),t=e.length;for(let a=0;a<t;a++){let r=z(e[a],s);for(let e in A){var T,M;L(A[e],(T=F,M=e,T&&T[M]?{...T,...T[M]}:{...T}),E(e,r),a,t)}}}v=k,k+=P}return s.forEach((e,r)=>{for(let n in e){let o=e[n];o.sort(A);let s=[],l=[],d=[];for(let e=0;e<o.length;e++){let{at:t,value:a,easing:r}=o[e];s.push(a),l.push((0,g.f)(0,j,t)),d.push(r||"easeOut")}0!==l[0]&&(l.unshift(0),s.unshift(s[0]),d.unshift("easeInOut")),1!==l[l.length-1]&&(l.push(1),s.push(null)),i.has(r)||i.set(r,{keyframes:{},transition:{}});let p=i.get(r);p.keyframes[n]=s;let{type:c,...f}=t;p.transition[n]={...f,duration:j,ease:d,times:l,...a}}}),i})(e.map(e=>{if(Array.isArray(e)&&"function"==typeof e[0]){let t=e[0],a=(0,d.o)(0);return(a.on("change",t),1===e.length)?[a,[0,1]]:2===e.length?[a,[0,1],e[1]]:[a,e[1],e[2]]}return e}),i,t,{spring:p.f}).forEach(({keyframes:e,transition:t},r)=>{a.push(...V(r,e,t))}),k=a}else{let{onComplete:a,...r}=o||{};"function"==typeof a&&(v=a),k=V(e,n,{...j,...r},t)}let T=new s(k);return v&&T.finished.then(v),t&&(t.animations.push(T),T.finished.then(()=>{(0,l.i)(t.animations,T)})),T}}();var W=e.i(46932);let G={some:0,all:1};var $=e.i(10542),U=e.i(95420),K=e.i(33277),Z=e.i(53115),J=e.i(79871);let Q=["gradient-text","aurora-glow-btn","rotating-cube"],ee={hidden:{opacity:0,y:28},show:{opacity:1,y:0,transition:{duration:.7,ease:J.EASE}}},et={hidden:{},show:{transition:{staggerChildren:.09,delayChildren:.08}}};function ea({value:e,suffix:r=""}){let n=(0,a.useRef)(null),o=function(e,{root:t,margin:r,amount:n,once:o=!1,initial:i=!1}={}){let[s,l]=(0,a.useState)(i);return(0,a.useEffect)(()=>{if(!e.current||o&&s)return;let a={root:t&&t.current||void 0,margin:r,amount:n};return function(e,t,{root:a,margin:r,amount:n="some"}={}){let o=(0,k.f)(e),i=new WeakMap,s=new IntersectionObserver(e=>{e.forEach(e=>{let a=i.get(e.target);if(!!a!==e.isIntersecting)if(e.isIntersecting){let a=t(e.target,e);"function"==typeof a?i.set(e.target,a):s.unobserve(e.target)}else"function"==typeof a&&(a(e),i.delete(e.target))})},{root:a,rootMargin:r,threshold:"number"==typeof n?n:G[n]});return o.forEach(e=>s.observe(e)),()=>s.disconnect()}(e.current,()=>(l(!0),o?void 0:()=>l(!1)),a)},[t,e,r,o,n]),s}(n,{once:!0,margin:"-40px"}),[i,s]=(0,a.useState)(0);return(0,a.useEffect)(()=>{if(!o)return;let t=_(0,e,{duration:1.4,ease:"easeOut",onUpdate:e=>s(Math.round(e))});return()=>t.stop()},[o,e]),(0,t.jsxs)("span",{ref:n,className:"text-xl font-semibold tabular-nums text-[#f07025]",children:[i,r]})}e.s(["Hero",0,function(){let e=Q.map(e=>K.z.find(t=>t.id===e)).filter(e=>!!e),o=(0,a.useRef)(null),{scrollYProgress:i}=(0,$.f)({target:o,offset:["start start","end start"]}),s=(0,U.f)(i,[0,1],[0,150]),l=(0,U.f)(i,[0,1],[0,-110]),d=(0,U.f)(i,[0,1],[0,90]),p=(0,U.f)(i,[0,1],[0,70]),c=(0,U.f)(i,[0,.85],[1,.45]);return(0,t.jsxs)("section",{ref:o,className:"relative overflow-hidden border-b bg-slate-950 text-white",children:[(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:`.fx-hero-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(240, 112, 37, 0.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(240, 112, 37, 0.12) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: fx-grid-move 2.4s linear infinite;
  mask-image: radial-gradient(ellipse 90% 80% at 50% 20%, black 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 90% 80% at 50% 20%, black 30%, transparent 75%);
}
@keyframes fx-grid-move {
  to {
    background-position: 40px 40px;
  }
}`}}),(0,t.jsx)(W.f.div,{className:"fx-hero-grid",style:{y:d},"aria-hidden":"true"}),(0,t.jsx)(W.f.div,{"aria-hidden":"true",style:{y:s},className:"pointer-events-none absolute -left-32 top-10 h-72 w-72",children:(0,t.jsx)("div",{className:"fx-float h-full w-full rounded-full bg-[#f07025]/20 blur-[110px]"})}),(0,t.jsx)(W.f.div,{"aria-hidden":"true",style:{y:l},className:"pointer-events-none absolute -right-24 bottom-0 h-64 w-64",children:(0,t.jsx)("div",{className:"fx-float-slow h-full w-full rounded-full bg-[#ec4899]/15 blur-[110px]"})}),(0,t.jsxs)("div",{className:"relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 md:pb-20 md:pt-24 lg:px-8",children:[(0,t.jsxs)(W.f.div,{variants:et,initial:"hidden",animate:"show",style:{y:p,opacity:c},className:"mx-auto max-w-3xl text-center",children:[(0,t.jsxs)(W.f.p,{variants:ee,className:"inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur",children:[(0,t.jsxs)("span",{className:"relative flex h-2 w-2",children:[(0,t.jsx)("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f07025] opacity-75"}),(0,t.jsx)("span",{className:"relative inline-flex h-2 w-2 rounded-full bg-[#f07025]"})]}),"100% Pure CSS · Zero JavaScript"]}),(0,t.jsx)("div",{className:"overflow-hidden py-1",children:(0,t.jsx)(W.f.h1,{initial:{y:"105%"},animate:{y:0},transition:{duration:.95,ease:J.EASE,delay:.14},className:"fx-hero-title mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl",children:"CSS Effects Lab"})}),(0,t.jsx)(W.f.p,{variants:ee,className:"mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70",children:"A complete library of hand-crafted CSS effects with live online demonstrations and copy-ready code. Hover it, click it, love it — then paste it straight into your project."}),(0,t.jsxs)(W.f.div,{variants:ee,className:"mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",children:[(0,t.jsxs)("a",{href:"#gallery",className:"fx-btn-shine inline-flex h-11 items-center gap-2 rounded-full bg-[#f07025] px-7 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0611a] hover:shadow-lg hover:shadow-[#f07025]/30 active:translate-y-0 active:scale-[0.97]",children:["Browse the library",(0,t.jsx)(r.f,{className:"h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5"})]}),(0,t.jsxs)("a",{href:"#how-it-works",className:"inline-flex h-11 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white/85 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 hover:text-white active:translate-y-0 active:scale-[0.97]",children:[(0,t.jsx)(n,{className:"h-4 w-4"}),"See how it works"]})]}),(0,t.jsxs)(W.f.dl,{variants:ee,className:"mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-mono text-sm",children:[(0,t.jsxs)("div",{className:"flex items-baseline gap-2",children:[(0,t.jsx)("dt",{className:"text-white/50",children:"Effects"}),(0,t.jsx)("dd",{children:(0,t.jsx)(ea,{value:K.a})})]}),(0,t.jsxs)("div",{className:"flex items-baseline gap-2",children:[(0,t.jsx)("dt",{className:"text-white/50",children:"Categories"}),(0,t.jsx)("dd",{children:(0,t.jsx)(ea,{value:K.m.length-1})})]}),(0,t.jsxs)("div",{className:"flex items-baseline gap-2",children:[(0,t.jsx)("dt",{className:"text-white/50",children:"Dependencies"}),(0,t.jsx)("dd",{children:(0,t.jsx)(ea,{value:0})})]})]})]}),(0,t.jsx)("div",{className:"mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3",children:e.map((e,a)=>(0,t.jsxs)(W.f.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-40px"},transition:{duration:.7,delay:.12+.12*a,ease:J.EASE},className:"group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-black/40",children:[(0,t.jsx)(Z.f,{effect:e,className:"h-40"}),(0,t.jsxs)("div",{className:"flex items-center justify-between px-4 py-3",children:[(0,t.jsx)("span",{className:"text-sm font-medium text-white/85",children:e.name}),(0,t.jsx)("span",{className:"font-mono text-[10px] uppercase tracking-wider text-white/40 transition-colors duration-300 group-hover:text-[#f07025]",children:"live demo"})]})]},e.id))})]})]})}],27308)},40465,e=>{"use strict";var t=e.i(43476),a=e.i(75254);let r=(0,a.f)("clipboard-copy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);var n=e.i(34754);let o=(0,a.f)("rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);var i=e.i(46932),s=e.i(79871);let l=[{number:"01",icon:n.f,title:"Browse & preview",description:"Every effect runs live on the page. Hover it, click it, watch the animation — no screenshots, the real thing."},{number:"02",icon:r,title:"Copy the code",description:"Open the HTML or CSS tab and copy exactly what you see. Clean, formatted, dependency-free code in one click."},{number:"03",icon:o,title:"Paste into your project",description:"Drop it into any website or framework — React, Next.js, WordPress, plain HTML. Pure CSS works everywhere."}],d={hidden:{opacity:0,y:28},show:{opacity:1,y:0,transition:{duration:.65,delay:0,ease:s.EASE}}},p={hidden:{scaleX:0},show:{scaleX:1,transition:{duration:.6,delay:.45,ease:s.EASE}}};e.s(["HowItWorks",0,function(){return(0,t.jsx)("section",{id:"how-it-works",className:"scroll-mt-20 border-y bg-muted/40",children:(0,t.jsxs)("div",{className:"mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8",children:[(0,t.jsxs)("div",{className:"mx-auto max-w-2xl text-center",children:[(0,t.jsx)(s.Reveal,{children:(0,t.jsx)("p",{className:"font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#f07025]",children:"How it works"})}),(0,t.jsx)(s.Reveal,{delay:.08,children:(0,t.jsx)("h2",{className:"mt-3 text-3xl font-semibold tracking-tight sm:text-4xl",children:"From discovery to production in three steps"})}),(0,t.jsx)(s.Reveal,{delay:.16,children:(0,t.jsx)("p",{className:"mt-4 text-base leading-relaxed text-muted-foreground",children:"No sign-up, no installs, no build steps. The entire library is designed to get an effect into your project in under a minute."})})]}),(0,t.jsx)("ol",{className:"mt-12 grid grid-cols-1 gap-6 md:grid-cols-3",children:l.map((e,a)=>(0,t.jsxs)(i.f.li,{variants:d,initial:"hidden",whileInView:"show",viewport:{once:!0,margin:"-60px"},transition:{duration:.65,delay:.12*a,ease:s.EASE},className:"group relative rounded-xl border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-[#f07025]/40 hover:shadow-lg hover:shadow-[#f07025]/5",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsx)("span",{className:"flex h-11 w-11 items-center justify-center rounded-lg bg-[#f07025]/10 text-[#f07025] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6",children:(0,t.jsx)(e.icon,{className:"h-5 w-5"})}),(0,t.jsx)("span",{className:"font-mono text-3xl font-bold text-foreground/10 transition-colors duration-500 group-hover:text-[#f07025]/25",children:e.number})]}),(0,t.jsx)("h3",{className:"mt-5 text-lg font-semibold tracking-tight",children:e.title}),(0,t.jsx)("p",{className:"mt-2 text-sm leading-relaxed text-muted-foreground",children:e.description}),a<l.length-1&&(0,t.jsx)(i.f.span,{"aria-hidden":"true",variants:p,className:"absolute -right-4 top-1/2 hidden h-px w-8 origin-left bg-gradient-to-r from-[#f07025]/50 to-transparent md:block"})]},e.number))})]})})}],40465)},88574,e=>{"use strict";var t=e.i(43476),a=e.i(46932),r=e.i(79871),n=e.i(96228);let o=[{href:"#palettes",label:"Color palettes"},{href:"#gallery",label:"Effect Gallery"},{href:"#how-it-works",label:"How it works"},{href:"#features",label:"Features"},{href:"#faq",label:"FAQ"},{href:"#feedback",label:"Give feedback"}],i=[{id:"buttons",label:"Buttons"},{id:"loaders",label:"Loaders"},{id:"text",label:"Text Effects"},{id:"hover",label:"Hover Cards"},{id:"backgrounds",label:"Backgrounds"},{id:"animations",label:"Animations"}];e.s(["SiteFooter",0,function(){let e=new Date().getFullYear();return(0,t.jsx)("footer",{className:"mt-auto border-t bg-slate-950 text-slate-300",children:(0,t.jsxs)("div",{className:"mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8",children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4",children:[(0,t.jsxs)(r.Reveal,{className:"lg:col-span-2",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2.5",children:[(0,t.jsx)(n.f,{badgeClassName:"h-9 w-9",markClassName:"h-5 w-5"}),(0,t.jsx)("span",{className:"text-lg font-semibold tracking-tight text-white",children:"CSS Effects Lab"})]}),(0,t.jsx)("p",{className:"mt-4 max-w-sm text-sm leading-relaxed text-slate-400",children:"Complete online demonstrations with copy-ready CSS code. Every effect is pure CSS — no JavaScript, no dependencies. Crafted for developers who want to ship faster."}),(0,t.jsxs)("p",{className:"mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-slate-400",children:[(0,t.jsx)("span",{className:"h-1.5 w-1.5 rounded-full bg-[#f07025]"}),"Free for personal & commercial use"]})]}),(0,t.jsx)(r.Reveal,{delay:.1,children:(0,t.jsxs)("nav",{"aria-label":"Quick links",children:[(0,t.jsx)("p",{className:"font-mono text-xs font-medium uppercase tracking-wider text-slate-500",children:"Quick links"}),(0,t.jsx)("ul",{className:"mt-4 space-y-2.5 text-sm",children:o.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:e.href,className:"inline-flex items-center gap-1.5 text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white",children:e.label})},e.href+e.label))})]})}),(0,t.jsx)(r.Reveal,{delay:.2,children:(0,t.jsxs)("nav",{"aria-label":"Browse by category",children:[(0,t.jsx)("p",{className:"font-mono text-xs font-medium uppercase tracking-wider text-slate-500",children:"Categories"}),(0,t.jsx)("ul",{className:"mt-4 space-y-2.5 text-sm",children:i.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)("button",{type:"button",onClick:()=>{var t;return t=e.id,void window.dispatchEvent(new CustomEvent("fx-category",{detail:t}))},className:"inline-flex items-center gap-1.5 text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-white",children:e.label})},e.id))})]})})]}),(0,t.jsxs)(a.f.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0,margin:"-30px"},transition:{duration:.8,delay:.2,ease:r.EASE},className:"mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row",children:[(0,t.jsxs)("p",{children:["© ",e," CSS Effects Lab. All effects are free to use in any project."]}),(0,t.jsx)("p",{className:"font-mono",children:"Built with Next.js + Tailwind CSS · Pure CSS, zero dependencies"})]})]})})}])},33869,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(75254);let n=(0,r.f)("menu",[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]]);var o=e.i(83086),i=e.i(46932),s=e.i(33768),l=e.i(10542);e.i(86427);var d=e.i(83352),p=e.i(83411),c=e.i(87022);function f(e){return"number"==typeof e?e:parseFloat(e)}var h=e.i(37806),x=e.i(35382),u=e.i(95420),g=e.i(81140),b=e.i(20783),m=e.i(30030),w=e.i(10772),v=e.i(69340),y=e.i(26330),k=e.i(65491),j=e.i(74606),S=e.i(96626),C=e.i(48425),N=e.i(3536),A=e.i(34620),z=e.i(85369),E=e.i(86312),T=e.i(91918),R=Object.defineProperty,M=(e,t)=>R(e,"name",{value:t,configurable:!0}),F="Dialog",[P,L]=(0,m.f)(F),[D,B]=P(F),I=M(e=>{let{__scopeDialog:r,children:n,open:o,defaultOpen:i,onOpenChange:s,modal:l=!0}=e,d=a.useRef(null),p=a.useRef(null),{nodes:c,registry:f}=(0,k.D)(),[h,x]=(0,v.f)({prop:o,defaultProp:i??!1,onChange:s,caller:F}),[u,g]=a.useState(0),[b,m]=a.useState(0);return(0,t.jsx)(D,{scope:r,triggerRef:d,contentRef:p,contentId:(0,w.f)(),titleId:(0,w.f)(),descriptionId:(0,w.f)(),titlePresent:u>0,descriptionPresent:b>0,setTitleCount:g,setDescriptionCount:m,open:h,onOpenChange:x,onOpenToggle:a.useCallback(()=>x(e=>!e),[x]),modal:l,branchNodes:c,branchRegistry:f,children:n})},"Dialog"),H=a.forwardRef(M(function(e,a){let{__scopeDialog:r,...n}=e,o=B("DialogTrigger",r),i=(0,b.f)(a,o.triggerRef);return(0,t.jsx)(C.V.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.open?o.contentId:void 0,"data-state":ea(o.open),...n,ref:i,onClick:(0,g.f)(e.onClick,o.onOpenToggle)})},"DialogTrigger")),Y="DialogPortal",[O,q]=P(Y,{forceMount:void 0}),X=M(e=>{let{__scopeDialog:r,forceMount:n,children:o,container:i}=e,s=B(Y,r);return(0,t.jsx)(O,{scope:r,forceMount:n,children:a.Children.map(o,e=>(0,t.jsx)(S.f,{present:n||s.open,children:(0,t.jsx)(j.f,{asChild:!0,container:i,children:e})}))})},"DialogPortal"),V="DialogOverlay",_=a.forwardRef(M(function(e,a){let r=q(V,e.__scopeDialog),{forceMount:n=r.forceMount,...o}=e,i=B(V,e.__scopeDialog);return i.modal?(0,t.jsx)(S.f,{present:n||i.open,children:(0,t.jsx)(G,{...o,ref:a})}):null},"DialogOverlay")),W=(0,T.B)("DialogOverlay.RemoveScroll"),G=a.forwardRef(M(function(e,r){let{__scopeDialog:n,...o}=e,i=B(V,n),s=(0,y.y)(),l=(0,b.f)(r,s);return(0,t.jsx)(z.f,{as:W,allowPinchZoom:!0,shards:a.useMemo(()=>[i.contentRef,...i.branchNodes.map(e=>({current:e}))],[i.contentRef,i.branchNodes]),children:(0,t.jsx)(C.V.div,{"data-state":ea(i.open),...o,ref:l,style:{pointerEvents:"auto",...o.style}})})},"DialogOverlayImpl")),$="DialogContent",U=a.forwardRef(M(function(e,a){let r=q($,e.__scopeDialog),{forceMount:n=r.forceMount,...o}=e,i=B($,e.__scopeDialog);return(0,t.jsx)(S.f,{present:n||i.open,children:i.modal?(0,t.jsx)(K,{...o,ref:a}):(0,t.jsx)(Z,{...o,ref:a})})},"DialogContent")),K=a.forwardRef(M(function(e,r){let n=B($,e.__scopeDialog),o=a.useRef(null),i=(0,b.f)(r,n.contentRef,o);return a.useEffect(()=>{let e=o.current;if(e)return(0,E.f)(e)},[]),(0,t.jsx)(J,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:n.open,onCloseAutoFocus:(0,g.f)(e.onCloseAutoFocus,e=>{e.preventDefault(),n.triggerRef.current?.focus()}),onPointerDownOutside:(0,g.f)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,a=0===t.button&&!0===t.ctrlKey;(2===t.button||a)&&e.preventDefault()}),onFocusOutside:(0,g.f)(e.onFocusOutside,e=>e.preventDefault())})},"DialogContentModal")),Z=a.forwardRef(M(function(e,r){let n=B($,e.__scopeDialog),o=a.useRef(!1),i=a.useRef(!1);return(0,t.jsx)(J,{...e,ref:r,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(o.current||n.triggerRef.current?.focus(),t.preventDefault()),o.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(o.current=!0,"pointerdown"===t.detail.originalEvent.type&&(i.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&i.current&&t.preventDefault()}})},"DialogContentNonModal")),J=a.forwardRef(M(function(e,a){let{__scopeDialog:r,trapFocus:n,onOpenAutoFocus:o,onCloseAutoFocus:i,"aria-describedby":s,children:l,...d}=e,p=B($,r);return(0,N.f)(),(0,t.jsx)(k.l,{registry:p.branchRegistry,children:(0,t.jsx)(k.v,{asChild:!0,loop:!0,trapped:n,branches:p.branchNodes,onMountAutoFocus:o,onUnmountAutoFocus:i,children:(0,t.jsx)(y.V,{role:"dialog",id:p.contentId,"aria-labelledby":p.titlePresent?p.titleId:void 0,"aria-describedby":p.descriptionPresent?et(s,p.descriptionId):s,"data-state":ea(p.open),...d,ref:a,deferPointerDownOutside:!0,onDismiss:()=>p.onOpenChange(!1),children:l})})})},"DialogContentImpl")),Q=a.forwardRef(M(function(e,a){let{__scopeDialog:r,...n}=e,o=B("DialogTitle",r),{setTitleCount:i}=o;return(0,A.f)(()=>(i(e=>e+1),()=>i(e=>e-1)),[i]),(0,t.jsx)(C.V.h2,{id:o.titleId,...n,ref:a})},"DialogTitle")),ee=a.forwardRef(M(function(e,a){let{__scopeDialog:r,...n}=e,o=B("DialogClose",r);return(0,t.jsx)(C.V.button,{type:"button",...n,ref:a,onClick:(0,g.f)(e.onClick,()=>o.onOpenChange(!1))})},"DialogClose"));function et(...e){let t=new Set;for(let a of e)if("string"==typeof a)for(let e of String(a).trim().split(/\s+/))e&&t.add(e);return t.size>0?Array.from(t).join(" "):void 0}function ea(e){return e?"open":"closed"}M(et,"concatAriaDescribedby"),M(ea,"getState");var er=e.i(41947),er=er,en=e.i(75157);function eo({...e}){return(0,t.jsx)(I,{"data-slot":"sheet",...e})}function ei({...e}){return(0,t.jsx)(H,{"data-slot":"sheet-trigger",...e})}function es({...e}){return(0,t.jsx)(X,{"data-slot":"sheet-portal",...e})}function el({className:e,...a}){return(0,t.jsx)(_,{"data-slot":"sheet-overlay",className:(0,en.f)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...a})}function ed({className:e,children:a,side:r="right",...n}){return(0,t.jsxs)(es,{children:[(0,t.jsx)(el,{}),(0,t.jsxs)(U,{"data-slot":"sheet-content",className:(0,en.f)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500","right"===r&&"data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm","left"===r&&"data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm","top"===r&&"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b","bottom"===r&&"data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",e),...n,children:[a,(0,t.jsxs)(ee,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",children:[(0,t.jsx)(er.f,{className:"size-4"}),(0,t.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}function ep({className:e,...a}){return(0,t.jsx)(Q,{"data-slot":"sheet-title",className:(0,en.f)("text-foreground font-semibold",e),...a})}var ec=e.i(19455);let ef=(0,r.f)("moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),eh=(0,r.f)("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);var ex=e.i(63178);function eu(){let{resolvedTheme:e,setTheme:a}=(0,ex.i)();return(0,t.jsxs)(ec.f,{variant:"outline",size:"icon","aria-label":"Toggle light and dark theme",title:"Toggle theme",className:"h-9 w-9 rounded-full",onClick:()=>a("dark"===e?"light":"dark"),children:[(0,t.jsx)(eh,{className:"hidden h-4 w-4 dark:block"}),(0,t.jsx)(ef,{className:"block h-4 w-4 dark:hidden"})]})}var eg=e.i(96228);let eb=[{href:"#palettes",label:"Palettes"},{href:"#gallery",label:"Gallery"},{href:"#how-it-works",label:"How it works"},{href:"#features",label:"Features"},{href:"#faq",label:"FAQ"},{href:"#feedback",label:"Feedback"}];function em(){let{scrollYProgress:e}=(0,l.f)(),r=function(e,t={}){return function(e,t={}){let{isStatic:r}=(0,a.useContext)(h.f),n=()=>(0,p.f)(e)?e.get():e;if(r)return(0,u.f)(n);let o=(0,x.f)(n());return(0,a.useInsertionEffect)(()=>(function(e,t,a={}){let r,n=e.get(),o=null,i=n,s="string"==typeof n?n.replace(/[\d.-]/g,""):void 0,l=()=>{o&&(o.stop(),o=null),e.animation=void 0},h=()=>{(()=>{let t=f(e.get()),n=f(i);if(t===n)return l();let s=o?o.getGeneratorVelocity():e.getVelocity();l(),o=new d.f({keyframes:[t,n],velocity:s,type:"spring",restDelta:.001,restSpeed:.01,...a,onUpdate:r})})(),e.animation=o??void 0,e.events.animationStart?.notify(),o?.then(()=>{e.animation=void 0,e.events.animationComplete?.notify()})};if(e.attach((e,t)=>{i=e,r=e=>{var a,r;return t((a=e,(r=s)?a+r:a))},c.y.postRender(h)},l),(0,p.f)(t)){let r=!0===a.skipInitialAnimation,n=t.on("change",t=>{var a,n,o,i;r?(r=!1,e.jump((a=t,(n=s)?a+n:a),!1)):e.set((o=t,(i=s)?o+i:o))}),o=e.on("destroy",n);return()=>{n(),o()}}return l})(o,e,t),[o,JSON.stringify(t)]),o}(e,{type:"spring",...t})}(e,{stiffness:120,damping:24,restDelta:.001});return(0,t.jsx)(i.f.div,{"aria-hidden":"true",className:"fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[#f07025] via-[#ec4899] to-[#f07025]",style:{scaleX:r}})}function ew(){let[e,r]=(0,a.useState)(!1);return(0,t.jsxs)(eo,{open:e,onOpenChange:r,children:[(0,t.jsx)(ei,{asChild:!0,children:(0,t.jsx)(ec.f,{variant:"outline",size:"icon","aria-label":"Open navigation menu",className:"h-9 w-9 rounded-full md:hidden",children:(0,t.jsx)(n,{className:"h-4 w-4"})})}),(0,t.jsxs)(ed,{side:"right","aria-describedby":void 0,className:"w-72",children:[(0,t.jsxs)(ep,{className:"flex items-center gap-2 text-base font-semibold",children:[(0,t.jsx)(eg.f,{badgeClassName:"h-8 w-8",markClassName:"h-4 w-4"}),"CSS Effects Lab"]}),(0,t.jsxs)("nav",{"aria-label":"Mobile",className:"mt-6 flex flex-col gap-1",children:[eb.map(e=>(0,t.jsx)("a",{href:e.href,onClick:()=>r(!1),className:"rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground",children:e.label},e.href)),(0,t.jsxs)("a",{href:"#gallery",onClick:()=>r(!1),className:"mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#f07025] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e0611a]",children:[(0,t.jsx)(o.f,{className:"h-4 w-4"}),"Explore effects"]})]})]})]})}e.s(["SiteHeader",0,function(){let{scrollY:e}=(0,l.f)(),[r,n]=(0,a.useState)(!1);return(0,s.f)(e,"change",e=>n(e>12)),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(em,{}),(0,t.jsx)("header",{className:(0,en.f)("sticky top-0 z-50 border-b backdrop-blur transition-all duration-500",r?"border-border/80 bg-background/85 shadow-[0_10px_36px_-18px_rgba(0,0,0,0.25)] supports-[backdrop-filter]:bg-background/70":"border-transparent bg-background/60 supports-[backdrop-filter]:bg-background/45"),children:(0,t.jsxs)("div",{className:(0,en.f)("mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 transition-all duration-500 sm:px-6 lg:px-8",r?"h-14":"h-16"),children:[(0,t.jsxs)("a",{href:"#",className:"group flex items-center gap-2.5","aria-label":"CSS Effects Lab home",children:[(0,t.jsx)(eg.f,{badgeClassName:"h-9 w-9 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110",markClassName:"h-5 w-5"}),(0,t.jsxs)("span",{className:"flex flex-col justify-center gap-0.5",children:[(0,t.jsx)("span",{className:"text-lg font-semibold leading-none tracking-tight",children:"CSS Effects Lab"}),(0,t.jsx)("span",{className:"font-mono text-[10px] font-medium uppercase leading-none tracking-wider text-[#f07025]",children:"Effect Library"})]})]}),(0,t.jsx)("nav",{"aria-label":"Primary",className:"hidden items-center gap-1 md:flex",children:eb.map(e=>(0,t.jsx)("a",{href:e.href,className:"fx-nav-link rounded-full px-4 py-2 text-sm font-medium text-foreground/60 transition-colors duration-300 hover:bg-foreground/5 hover:text-foreground",children:e.label},e.href))}),(0,t.jsxs)("div",{className:"flex items-center gap-2.5",children:[(0,t.jsx)(eu,{}),(0,t.jsx)("a",{href:"#gallery",className:"fx-btn-shine hidden items-center rounded-full bg-[#f07025] px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0611a] hover:shadow-lg hover:shadow-[#f07025]/30 active:translate-y-0 active:scale-[0.97] sm:inline-flex",children:"Explore"}),(0,t.jsx)(ew,{})]})]})})]})}],33869)},19455,e=>{"use strict";var t=e.i(43476),a=e.i(91918),r=e.i(25913),n=e.i(75157);let o=(0,r.f)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});e.s(["f",0,function({className:e,variant:r,size:i,asChild:s=!1,...l}){let d=s?a.M:"button";return(0,t.jsx)(d,{"data-slot":"button",className:(0,n.f)(o({variant:r,size:i,className:e})),...l})}])},93479,e=>{"use strict";var t=e.i(43476),a=e.i(75157);e.s(["f",0,function({className:e,type:r,...n}){return(0,t.jsx)("input",{type:r,"data-slot":"input",className:(0,a.f)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",e),...n})}])},33277,e=>{"use strict";let t=[{id:"neon-glow-btn",name:"Neon Glow Button",category:"buttons",description:"A transparent button wrapped in a cyan neon aura that floods with light on hover.",tags:["hover","glow","neon"],html:'<button class="fx-neon-btn">Hover Me</button>',css:`.fx-neon-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #22d3ee;
  background: transparent;
  border: 2px solid #22d3ee;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.35),
    inset 0 0 10px rgba(34, 211, 238, 0.08);
}
.fx-neon-btn:hover {
  color: #0b1120;
  background: #22d3ee;
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.8),
    0 0 60px rgba(34, 211, 238, 0.45);
}`},{id:"slide-fill-btn",name:"Slide Fill Button",category:"buttons",description:"An orange layer slides in from the left behind the label, flipping the text color.",tags:["hover","fill","slide"],html:'<button class="fx-slide-btn">Slide Fill</button>',css:`.fx-slide-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #f07025;
  background: transparent;
  border: 2px solid #f07025;
  border-radius: 999px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: color 0.3s ease;
}
.fx-slide-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #f07025;
  transform: translateX(-101%);
  transition: transform 0.35s cubic-bezier(0.65, 0, 0.35, 1);
  z-index: -1;
}
.fx-slide-btn:hover {
  color: #ffffff;
}
.fx-slide-btn:hover::before {
  transform: translateX(0);
}`},{id:"border-trace-btn",name:"Border Trace Button",category:"buttons",description:"Two corners draw the border around the button when you hover, like a live sketch.",tags:["hover","border","draw"],html:'<button class="fx-trace-btn">Trace Border</button>',css:`.fx-trace-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #e2e8f0;
  background: transparent;
  border: none;
  cursor: pointer;
}
.fx-trace-btn::before,
.fx-trace-btn::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 2px solid transparent;
  transition: width 0.25s ease 0.1s, height 0.25s ease;
}
.fx-trace-btn::before {
  top: 0;
  left: 0;
  border-top-color: #f07025;
  border-left-color: #f07025;
}
.fx-trace-btn::after {
  bottom: 0;
  right: 0;
  border-bottom-color: #f07025;
  border-right-color: #f07025;
}
.fx-trace-btn:hover::before,
.fx-trace-btn:hover::after {
  width: 100%;
  height: 100%;
}`},{id:"shine-sweep-btn",name:"Shine Sweep Button",category:"buttons",description:"A diagonal light beam sweeps across the button once on every hover.",tags:["hover","shine","sweep"],html:'<button class="fx-shine-btn">Shine Sweep</button>',css:`.fx-shine-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #fafafa;
  background: #18181b;
  border: 1px solid #3f3f46;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
}
.fx-shine-btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.35),
    transparent
  );
  transform: skewX(-20deg);
}
.fx-shine-btn:hover::after {
  animation: fx-shine-sweep 0.9s ease;
}
@keyframes fx-shine-sweep {
  to {
    left: 125%;
  }
}`},{id:"push-3d-btn",name:"3D Push Button",category:"buttons",description:"A chunky red button with a hard shadow that physically presses down when clicked.",tags:["click","3d","press"],html:'<button class="fx-push-btn">Push Me</button>',css:`.fx-push-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  background: #ef4444;
  border: none;
  border-radius: 10px;
  box-shadow: 0 6px 0 #991b1b;
  cursor: pointer;
  transition: all 0.12s ease;
}
.fx-push-btn:hover {
  filter: brightness(1.08);
}
.fx-push-btn:active {
  transform: translateY(6px);
  box-shadow: 0 0 0 #991b1b;
}`},{id:"gradient-flow-btn",name:"Gradient Flow Button",category:"buttons",description:"A four-color gradient endlessly flows through the button and gently scales on hover.",tags:["gradient","animated","hover"],html:'<button class="fx-flow-btn">Gradient Flow</button>',css:`.fx-flow-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background: linear-gradient(270deg, #f07025, #ec4899, #8b5cf6, #f07025);
  background-size: 300% 300%;
  animation: fx-flow-shift 4s ease infinite;
  transition: transform 0.2s ease;
}
.fx-flow-btn:hover {
  transform: scale(1.06);
}
@keyframes fx-flow-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}`},{id:"ring-spinner",name:"Classic Ring Spinner",category:"loaders",description:"The timeless loading ring: a faded track with a single spinning accent arc.",tags:["spinner","loading","classic"],html:'<div class="fx-ring-spinner" aria-label="Loading"></div>',css:`.fx-ring-spinner {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, 0.15);
  border-top-color: #f07025;
  animation: fx-ring-spin 0.9s linear infinite;
}
@keyframes fx-ring-spin {
  to {
    transform: rotate(360deg);
  }
}`},{id:"bounce-dots",name:"Bouncing Dots Loader",category:"loaders",description:"Three dots bounce in sequence with a warm color gradient, perfect for chat loading states.",tags:["dots","bounce","loading"],html:'<div class="fx-bounce-dots"><span></span><span></span><span></span></div>',css:`.fx-bounce-dots {
  display: flex;
  gap: 10px;
}
.fx-bounce-dots span {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #f07025;
  animation: fx-dots-bounce 0.6s ease-in-out infinite alternate;
}
.fx-bounce-dots span:nth-child(2) {
  background: #fb923c;
  animation-delay: 0.2s;
}
.fx-bounce-dots span:nth-child(3) {
  background: #fdba74;
  animation-delay: 0.4s;
}
@keyframes fx-dots-bounce {
  to {
    transform: translateY(-16px);
    opacity: 0.55;
  }
}`},{id:"dual-ring",name:"Dual Counter-Ring",category:"loaders",description:"Two rings spin in opposite directions around the same axis for a hypnotic effect.",tags:["spinner","dual","orbit"],html:'<div class="fx-dual-ring" aria-label="Loading"></div>',css:`.fx-dual-ring {
  position: relative;
  width: 60px;
  height: 60px;
}
.fx-dual-ring::before,
.fx-dual-ring::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 4px solid transparent;
}
.fx-dual-ring::before {
  border-top-color: #22d3ee;
  animation: fx-dual-spin 1.2s linear infinite;
}
.fx-dual-ring::after {
  inset: 10px;
  border-bottom-color: #f07025;
  animation: fx-dual-spin 1.2s linear reverse infinite;
}
@keyframes fx-dual-spin {
  to {
    transform: rotate(360deg);
  }
}`},{id:"typing-dots",name:"Typing Indicator",category:"loaders",description:"The familiar chat bubble with three blinking dots that wave in and out.",tags:["chat","typing","blink"],html:'<div class="fx-typing"><span></span><span></span><span></span></div>',css:`.fx-typing {
  display: flex;
  gap: 6px;
  padding: 16px 20px;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 999px;
}
.fx-typing span {
  width: 8px;
  height: 8px;
  background: #94a3b8;
  border-radius: 50%;
  animation: fx-typing-blink 1.2s infinite;
}
.fx-typing span:nth-child(2) {
  animation-delay: 0.2s;
}
.fx-typing span:nth-child(3) {
  animation-delay: 0.4s;
}
@keyframes fx-typing-blink {
  0%,
  80%,
  100% {
    opacity: 0.25;
    transform: scale(0.8);
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
}`},{id:"striped-bar",name:"Striped Progress Bar",category:"loaders",description:"A progress bar with candy-stripe texture that scrolls forever while work happens.",tags:["progress","stripes","indeterminate"],html:'<div class="fx-progress"><div class="fx-progress-bar"></div></div>',css:`.fx-progress {
  width: 220px;
  height: 14px;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 999px;
  overflow: hidden;
}
.fx-progress-bar {
  height: 100%;
  width: 62%;
  border-radius: 999px;
  background: repeating-linear-gradient(
    45deg,
    #f07025 0 12px,
    #c2591d 12px 24px
  );
  background-size: 34px 34px;
  animation: fx-progress-stripes 0.8s linear infinite;
}
@keyframes fx-progress-stripes {
  to {
    background-position: 34px 0;
  }
}`},{id:"orbit-loader",name:"Orbit Loader",category:"loaders",description:"A glowing satellite orbits a dashed ring while the ring itself slowly rotates.",tags:["orbit","satellite","glow"],html:'<div class="fx-orbit" aria-label="Loading"></div>',css:`.fx-orbit {
  position: relative;
  width: 70px;
  height: 70px;
}
.fx-orbit span {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px dashed rgba(240, 112, 37, 0.4);
  animation: fx-orbit-spin 8s linear infinite;
}
.fx-orbit::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -7px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #f07025;
  box-shadow: 0 0 12px rgba(240, 112, 37, 0.8);
  transform-origin: 7px 35px;
  animation: fx-orbit-spin 2s linear infinite;
}
@keyframes fx-orbit-spin {
  to {
    transform: rotate(360deg);
  }
}`},{id:"gradient-text",name:"Animated Gradient Text",category:"text",description:"A moving multi-color gradient painted inside the letters using background-clip.",tags:["gradient","animated","headline"],html:'<h2 class="fx-gradient-text">CSS Effects</h2>',css:`.fx-gradient-text {
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 1px;
  background: linear-gradient(90deg, #f07025, #ec4899, #22d3ee, #f07025);
  background-size: 300% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: fx-gradient-flow 4s linear infinite;
}
@keyframes fx-gradient-flow {
  to {
    background-position: 300% center;
  }
}`},{id:"glitch-text",name:"Glitch Text",category:"text",description:"Cyberpunk-style glitch with sliced orange and cyan layers jittering behind the text.",tags:["glitch","cyberpunk","clip-path"],html:'<h2 class="fx-glitch-text" data-text="GLITCH">GLITCH</h2>',css:`.fx-glitch-text {
  position: relative;
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 2px;
  color: #fafafa;
}
.fx-glitch-text::before,
.fx-glitch-text::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
}
.fx-glitch-text::before {
  color: #f07025;
  clip-path: inset(0 0 55% 0);
  animation: fx-glitch-a 2.4s infinite linear alternate;
}
.fx-glitch-text::after {
  color: #22d3ee;
  clip-path: inset(55% 0 0 0);
  animation: fx-glitch-b 3.1s infinite linear alternate;
}
@keyframes fx-glitch-a {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-3px, 2px);
  }
  40% {
    transform: translate(2px, -2px);
  }
  60% {
    transform: translate(-2px, -1px);
  }
  80% {
    transform: translate(3px, 1px);
  }
  100% {
    transform: translate(0);
  }
}
@keyframes fx-glitch-b {
  0% {
    transform: translate(0);
  }
  25% {
    transform: translate(3px, -2px);
  }
  50% {
    transform: translate(-3px, 2px);
  }
  75% {
    transform: translate(2px, 2px);
  }
  100% {
    transform: translate(0);
  }
}`},{id:"typewriter",name:"Typewriter Text",category:"text",description:"Text typed character by character with a blinking caret, then deleted and retyped.",tags:["typewriter","steps","caret"],html:'<h2 class="fx-typewriter">Pure CSS. No JS.</h2>',css:`.fx-typewriter {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  width: 16ch;
  border-right: 3px solid #f07025;
  font-size: 26px;
  font-weight: 600;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  color: #e2e8f0;
  animation: fx-typing 4s steps(16) infinite alternate,
    fx-caret 0.75s step-end infinite;
}
@keyframes fx-typing {
  from {
    width: 0;
  }
  to {
    width: 16ch;
  }
}
@keyframes fx-caret {
  50% {
    border-color: transparent;
  }
}`},{id:"neon-flicker",name:"Neon Flicker Text",category:"text",description:"A pink neon sign that occasionally stutters and flickers like a dying tube.",tags:["neon","flicker","sign"],html:'<h2 class="fx-neon-flicker">OPEN 24/7</h2>',css:`.fx-neon-flicker {
  font-size: 38px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #ffffff;
  text-shadow: 0 0 8px #ec4899, 0 0 24px #ec4899, 0 0 48px #ec4899;
  animation: fx-neon-flicker 2.4s infinite;
}
@keyframes fx-neon-flicker {
  0%,
  18%,
  22%,
  25%,
  53%,
  57%,
  100% {
    text-shadow: 0 0 8px #ec4899, 0 0 24px #ec4899, 0 0 48px #ec4899;
    opacity: 1;
  }
  20%,
  24%,
  55% {
    text-shadow: none;
    opacity: 0.6;
  }
}`},{id:"text-3d",name:"Layered 3D Text",category:"text",description:"Stacked text-shadow layers build a chunky extrusion that lifts when hovered.",tags:["3d","shadow","hover"],html:'<h2 class="fx-text-3d">EXTRUDE</h2>',css:`.fx-text-3d {
  font-size: 42px;
  font-weight: 900;
  letter-spacing: 2px;
  color: #fafafa;
  cursor: pointer;
  transition: transform 0.25s ease;
  text-shadow: 1px 1px 0 #f07025, 2px 2px 0 #ea580c, 3px 3px 0 #c2410c,
    4px 4px 0 #9a3412, 5px 5px 0 #7c2d12, 8px 8px 12px rgba(0, 0, 0, 0.5);
}
.fx-text-3d:hover {
  transform: translate(-3px, -3px);
}`},{id:"wave-text",name:"Wave Letters",category:"text",description:"Each letter rides an offset sine wave, a classic playful headline effect.",tags:["wave","letters","bounce"],html:'<h2 class="fx-wave-text"><span>C</span><span>S</span><span>S</span><span>&nbsp;</span><span>i</span><span>s</span><span>&nbsp;</span><span>f</span><span>u</span><span>n</span><span>!</span></h2>',css:`.fx-wave-text {
  display: flex;
  gap: 2px;
  font-size: 34px;
  font-weight: 800;
  color: #f07025;
}
.fx-wave-text span {
  display: inline-block;
  animation: fx-wave-bounce 1.2s ease-in-out infinite;
}
.fx-wave-text span:nth-child(odd) {
  animation-delay: 0.15s;
}
.fx-wave-text span:nth-child(3n) {
  animation-delay: 0.3s;
}
@keyframes fx-wave-bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-14px);
  }
}`},{id:"lift-card",name:"Lift & Glow Card",category:"hover",description:"The card rises on hover with a soft orange glow beneath it, like floating.",tags:["hover","lift","shadow"],html:'<div class="fx-lift-card"><h4>Lift &amp; Glow</h4><p>Hover the card to raise it with a warm glow.</p></div>',css:`.fx-lift-card {
  width: 240px;
  padding: 24px;
  border-radius: 14px;
  background: #1e293b;
  border: 1px solid #334155;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    border-color 0.3s ease;
}
.fx-lift-card h4 {
  font-size: 17px;
  font-weight: 700;
  color: #f8fafc;
}
.fx-lift-card p {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.55;
  color: #94a3b8;
}
.fx-lift-card:hover {
  transform: translateY(-8px);
  border-color: #f07025;
  box-shadow: 0 20px 40px rgba(240, 112, 37, 0.18),
    0 8px 16px rgba(0, 0, 0, 0.4);
}`},{id:"gradient-border-card",name:"Gradient Border Card",category:"hover",description:"A rainbow gradient border fades in around the card using the mask compositing trick.",tags:["hover","border","gradient"],html:'<div class="fx-gb-card"><h4>Gradient Border</h4><p>Hover to reveal the gradient border.</p></div>',css:`.fx-gb-card {
  position: relative;
  width: 240px;
  padding: 24px;
  border-radius: 14px;
  background: #18181b;
  cursor: pointer;
}
.fx-gb-card h4 {
  font-size: 17px;
  font-weight: 700;
  color: #fafafa;
}
.fx-gb-card p {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.55;
  color: #a1a1aa;
}
.fx-gb-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 14px;
  padding: 2px;
  background: linear-gradient(135deg, #f07025, #ec4899, #22d3ee);
  -webkit-mask: linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.35s ease;
  pointer-events: none;
}
.fx-gb-card:hover::before {
  opacity: 1;
}`},{id:"shine-card",name:"Shine Sweep Card",category:"hover",description:"A glossy beam of light slides diagonally across the card surface on hover.",tags:["hover","shine","glossy"],html:'<div class="fx-shine-card"><h4>Shine Sweep</h4><p>Hover and watch the light pass.</p></div>',css:`.fx-shine-card {
  position: relative;
  width: 240px;
  padding: 24px;
  border-radius: 14px;
  background: #1e293b;
  border: 1px solid #334155;
  overflow: hidden;
  cursor: pointer;
}
.fx-shine-card h4 {
  font-size: 17px;
  font-weight: 700;
  color: #f8fafc;
}
.fx-shine-card p {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.55;
  color: #94a3b8;
}
.fx-shine-card::after {
  content: "";
  position: absolute;
  top: 0;
  left: -80%;
  width: 60%;
  height: 100%;
  background: linear-gradient(
    100deg,
    transparent,
    rgba(255, 255, 255, 0.18),
    transparent
  );
  transform: skewX(-25deg);
  transition: left 0.6s ease;
}
.fx-shine-card:hover::after {
  left: 130%;
}`},{id:"flip-card",name:"3D Flip Card",category:"hover",description:"The classic two-sided card that rotates 180 degrees in 3D space on hover.",tags:["hover","3d","flip"],html:'<div class="fx-flip-card"><div class="fx-flip-inner"><div class="fx-flip-front">Hover to flip</div><div class="fx-flip-back">Hello from the back!</div></div></div>',css:`.fx-flip-card {
  width: 240px;
  height: 150px;
  perspective: 1000px;
  cursor: pointer;
}
.fx-flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
}
.fx-flip-card:hover .fx-flip-inner {
  transform: rotateY(180deg);
}
.fx-flip-front,
.fx-flip-back {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  font-weight: 600;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.fx-flip-front {
  background: #1e293b;
  border: 1px solid #334155;
  color: #e2e8f0;
}
.fx-flip-back {
  background: #f07025;
  color: #ffffff;
  transform: rotateY(180deg);
}`},{id:"gradient-bg",name:"Animated Gradient Background",category:"backgrounds",description:"A full-bleed gradient that slowly drifts between four brand colors.",tags:["gradient","background","animated"],html:'<div class="fx-gradient-bg"></div>',css:`.fx-gradient-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    270deg,
    #f07025,
    #ec4899,
    #7c3aed,
    #0ea5e9,
    #f07025
  );
  background-size: 400% 400%;
  animation: fx-bg-flow 8s ease infinite;
}
@keyframes fx-bg-flow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}`},{id:"grid-bg",name:"Moving Grid Background",category:"backgrounds",description:"An orange blueprint grid that scrolls diagonally forever — great for hero sections.",tags:["grid","blueprint","background"],html:'<div class="fx-grid-bg"></div>',css:`.fx-grid-bg {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      rgba(240, 112, 37, 0.25) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(240, 112, 37, 0.25) 1px, transparent 1px);
  background-size: 32px 32px;
  animation: fx-grid-move 1.5s linear infinite;
}
@keyframes fx-grid-move {
  to {
    background-position: 32px 32px;
  }
}`},{id:"orbs-bg",name:"Floating Orbs Background",category:"backgrounds",description:"Blurred glowing orbs drift and swell behind your content for instant depth.",tags:["orbs","blur","ambient"],html:'<div class="fx-orbs-bg"><span></span><span></span><span></span></div>',css:`.fx-orbs-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0f172a;
}
.fx-orbs-bg span {
  position: absolute;
  border-radius: 50%;
  filter: blur(28px);
  opacity: 0.55;
}
.fx-orbs-bg span:nth-child(1) {
  width: 120px;
  height: 120px;
  background: #f07025;
  top: 12%;
  left: 10%;
  animation: fx-orb-float 6s ease-in-out infinite;
}
.fx-orbs-bg span:nth-child(2) {
  width: 90px;
  height: 90px;
  background: #ec4899;
  top: 42%;
  left: 55%;
  animation: fx-orb-float 8s ease-in-out infinite reverse;
}
.fx-orbs-bg span:nth-child(3) {
  width: 70px;
  height: 70px;
  background: #22d3ee;
  top: 62%;
  left: 22%;
  animation: fx-orb-float 7s ease-in-out infinite 1s;
}
@keyframes fx-orb-float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(30px, -24px) scale(1.15);
  }
}`},{id:"equalizer-bg",name:"Equalizer Bars Background",category:"backgrounds",description:"Twelve bars dance at the bottom of the container like a music visualizer.",tags:["music","bars","visualizer"],html:'<div class="fx-eq-bg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>',css:`.fx-eq-bg {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  gap: 6px;
  padding: 16px;
  background: #0f172a;
}
.fx-eq-bg span {
  flex: 1;
  height: 30%;
  border-radius: 4px 4px 0 0;
  background: linear-gradient(180deg, #f07025, #7c2d12);
  animation: fx-eq 1.1s ease-in-out infinite alternate;
}
.fx-eq-bg span:nth-child(2n) {
  animation-duration: 0.9s;
  height: 55%;
}
.fx-eq-bg span:nth-child(3n) {
  animation-duration: 1.3s;
  height: 70%;
  animation-delay: 0.2s;
}
.fx-eq-bg span:nth-child(5n) {
  animation-delay: 0.45s;
}
@keyframes fx-eq {
  from {
    height: 12%;
  }
  to {
    height: 88%;
  }
}`},{id:"pulse-dot",name:"Notification Pulse",category:"animations",description:"The status dot that emits expanding rings — exactly like live presence indicators.",tags:["pulse","notification","status"],html:'<div class="fx-pulse-dot"></div>',css:`.fx-pulse-dot {
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #ef4444;
}
.fx-pulse-dot::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #ef4444;
  animation: fx-pulse 1.6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes fx-pulse {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(2.6);
    opacity: 0;
  }
}`},{id:"shake-box",name:"Shake Animation",category:"animations",description:"A rapid horizontal wobble that plays once per hover — ideal for wrong answers.",tags:["hover","shake","feedback"],html:'<div class="fx-shake-box">Hover to shake</div>',css:`.fx-shake-box {
  padding: 20px 32px;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 12px;
  color: #e2e8f0;
  font-weight: 600;
  cursor: pointer;
}
.fx-shake-box:hover {
  animation: fx-shake 0.5s ease;
}
@keyframes fx-shake {
  0%,
  100% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(-8px);
  }
  30% {
    transform: translateX(8px);
  }
  45% {
    transform: translateX(-6px);
  }
  60% {
    transform: translateX(6px);
  }
  75% {
    transform: translateX(-3px);
  }
  90% {
    transform: translateX(3px);
  }
}`},{id:"float-box",name:"Floating Element",category:"animations",description:"A gradient tile levitates up and down on an endless eased loop with a soft shadow.",tags:["float","loop","levitate"],html:'<div class="fx-float-box"></div>',css:`.fx-float-box {
  width: 84px;
  height: 84px;
  border-radius: 20px;
  background: linear-gradient(135deg, #f07025, #c2410c);
  box-shadow: 0 18px 30px rgba(240, 112, 37, 0.35);
  animation: fx-float 3s ease-in-out infinite;
}
@keyframes fx-float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-18px);
  }
}`},{id:"bouncing-ball",name:"Bouncing Ball",category:"animations",description:"A glowing ball bounces with realistic easing using alternate direction.",tags:["bounce","ball","physics"],html:'<div class="fx-ball-stage"><div class="fx-ball"></div></div>',css:`.fx-ball-stage {
  display: flex;
  align-items: flex-end;
  height: 110px;
}
.fx-ball {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #22d3ee;
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.6);
  animation: fx-bounce 1s cubic-bezier(0.5, 0.05, 0.5, 1) infinite alternate;
}
@keyframes fx-bounce {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-84px);
  }
}`},{id:"aurora-glow-btn",name:"Aurora Glow Button",category:"buttons",description:"A dark glass button with a swirling blurred aurora burning inside its frame — the signature 2026 look.",tags:["aurora","glow","gradient","2026"],html:'<button class="fx-aurora-btn">Aurora Glow</button>',css:`.fx-aurora-btn {
  position: relative;
  padding: 15px 40px;
  font-size: 16px;
  font-weight: 600;
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: border-color 0.3s ease;
}
.fx-aurora-btn::before {
  content: "";
  position: absolute;
  inset: -60%;
  background: conic-gradient(
    from 0deg,
    #f07025,
    #ec4899,
    #22d3ee,
    #8b5cf6,
    #f07025
  );
  filter: blur(22px);
  opacity: 0.5;
  z-index: -1;
  animation: fx-aurora-rotate 4s linear infinite;
  transition: opacity 0.3s ease;
}
.fx-aurora-btn:hover {
  border-color: rgba(255, 255, 255, 0.45);
}
.fx-aurora-btn:hover::before {
  opacity: 0.95;
}
@keyframes fx-aurora-rotate {
  to {
    transform: rotate(360deg);
  }
}`},{id:"glass-btn",name:"Glassmorphism Button",category:"buttons",description:"Frosted glass pill using backdrop-filter — glassmorphism 2.0 in its purest form.",tags:["glass","blur","frosted","2026"],html:'<button class="fx-glass-btn">Glass Button</button>',css:`.fx-glass-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
}
.fx-glass-btn:hover {
  background: rgba(255, 255, 255, 0.16);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
}
.fx-glass-btn:active {
  transform: translateY(0) scale(0.97);
}`},{id:"arrow-slide-btn",name:"Arrow Slide Button",category:"buttons",description:"The arrow nudges forward with a springy overshoot when you hover — a micro-interaction staple.",tags:["arrow","spring","micro-interaction"],html:'<button class="fx-arrow-btn">Get Started <span class="fx-arrow-btn-icon">&#8594;</span></button>',css:`.fx-arrow-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 30px;
  font-size: 16px;
  font-weight: 600;
  color: #0b1120;
  background: #f07025;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  transition: background 0.25s ease;
}
.fx-arrow-btn-icon {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-arrow-btn:hover {
  background: #fb923c;
}
.fx-arrow-btn:hover .fx-arrow-btn-icon {
  transform: translateX(6px);
}`},{id:"clip-corner-btn",name:"Sci-Fi Corner Cut Button",category:"buttons",description:"Angular clip-path corners give a cyber HUD feel; hover floods the frame with color.",tags:["clip-path","scifi","cyber","2026"],html:'<button class="fx-clip-btn">ENGAGE</button>',css:`.fx-clip-btn {
  padding: 15px 40px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #f07025;
  background: transparent;
  border: none;
  cursor: pointer;
  box-shadow: inset 0 0 0 2px #f07025;
  clip-path: polygon(
    0 0,
    calc(100% - 16px) 0,
    100% 16px,
    100% 100%,
    16px 100%,
    0 calc(100% - 16px)
  );
  transition: color 0.25s ease, background 0.25s ease;
}
.fx-clip-btn:hover {
  color: #0b1120;
  background: #f07025;
}`},{id:"squeeze-btn",name:"Squish Press Button",category:"buttons",description:"A springy squish on hover that compresses further on click — physical, toy-like feedback.",tags:["spring","press","squish"],html:'<button class="fx-squeeze-btn">Squish Me</button>',css:`.fx-squeeze-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background: #10b981;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35);
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.25s ease;
}
.fx-squeeze-btn:hover {
  transform: scale(0.94);
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}
.fx-squeeze-btn:active {
  transform: scale(0.88);
}`},{id:"skeleton-shimmer",name:"Skeleton Shimmer",category:"loaders",description:"The 2026-standard loading placeholder: avatar and text lines swept by a soft light.",tags:["skeleton","shimmer","loading","2026"],html:'<div class="fx-skeleton"><div class="fx-skeleton-avatar"></div><div class="fx-skeleton-lines"><span></span><span></span><span></span></div></div>',css:`.fx-skeleton {
  display: flex;
  gap: 14px;
  align-items: center;
}
.fx-skeleton-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(
    100deg,
    #1e293b 40%,
    #334155 50%,
    #1e293b 60%
  );
  background-size: 200% 100%;
  animation: fx-skeleton-sweep 1.4s linear infinite;
}
.fx-skeleton-lines {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.fx-skeleton-lines span {
  height: 12px;
  width: 160px;
  border-radius: 6px;
  background: linear-gradient(
    100deg,
    #1e293b 40%,
    #334155 50%,
    #1e293b 60%
  );
  background-size: 200% 100%;
  animation: fx-skeleton-sweep 1.4s linear infinite;
}
.fx-skeleton-lines span:nth-child(2) {
  width: 130px;
  animation-delay: 0.15s;
}
.fx-skeleton-lines span:nth-child(3) {
  width: 100px;
  animation-delay: 0.3s;
}
@keyframes fx-skeleton-sweep {
  to {
    background-position: -200% 0;
  }
}`},{id:"dot-grid-pulse",name:"Dot Grid Pulse",category:"loaders",description:"A 3x3 grid of dots pulsing in a diagonal wave — tidy and hypnotic.",tags:["grid","pulse","wave"],html:'<div class="fx-dot-grid"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>',css:`.fx-dot-grid {
  display: grid;
  grid-template-columns: repeat(3, 14px);
  gap: 8px;
}
.fx-dot-grid span {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #f07025;
  animation: fx-dot-grid-pulse 1.2s ease-in-out infinite;
}
.fx-dot-grid span:nth-child(1) { animation-delay: 0s; }
.fx-dot-grid span:nth-child(2) { animation-delay: 0.1s; }
.fx-dot-grid span:nth-child(3) { animation-delay: 0.2s; }
.fx-dot-grid span:nth-child(4) { animation-delay: 0.1s; }
.fx-dot-grid span:nth-child(5) { animation-delay: 0.2s; }
.fx-dot-grid span:nth-child(6) { animation-delay: 0.3s; }
.fx-dot-grid span:nth-child(7) { animation-delay: 0.2s; }
.fx-dot-grid span:nth-child(8) { animation-delay: 0.3s; }
.fx-dot-grid span:nth-child(9) { animation-delay: 0.4s; }
@keyframes fx-dot-grid-pulse {
  0%,
  100% {
    transform: scale(0.55);
    opacity: 0.35;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
}`},{id:"morph-blob-loader",name:"Morphing Blob",category:"loaders",description:"An organic blob that continuously reshapes itself — morphing blobs are everywhere in 2026.",tags:["blob","morph","organic","2026"],html:'<div class="fx-morph-blob"></div>',css:`.fx-morph-blob {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, #f07025, #ec4899);
  animation: fx-morph 3s ease-in-out infinite;
}
@keyframes fx-morph {
  0%,
  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    transform: rotate(0deg);
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    transform: rotate(90deg) scale(1.08);
  }
}`},{id:"clock-loader",name:"Clock Loader",category:"loaders",description:"A tiny clock with a fast minute hand and a slow hour hand ticking around the dial.",tags:["clock","time","spinner"],html:'<div class="fx-clock"></div>',css:`.fx-clock {
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 4px solid #1e293b;
  background: #0f172a;
  box-shadow: 0 0 0 2px rgba(240, 112, 37, 0.2);
}
.fx-clock::before,
.fx-clock::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 50%;
  width: 3px;
  margin-left: -1.5px;
  border-radius: 2px;
  background: #f07025;
  transform-origin: bottom center;
}
.fx-clock::before {
  height: 18px;
  animation: fx-clock-spin 2s linear infinite;
}
.fx-clock::after {
  height: 12px;
  background: #94a3b8;
  animation: fx-clock-spin 8s linear infinite;
}
@keyframes fx-clock-spin {
  to {
    transform: rotate(360deg);
  }
}`},{id:"conic-ring",name:"Conic Gradient Ring",category:"loaders",description:"A smooth conic-gradient comet tail masked into a ring — cleaner than any border hack.",tags:["conic","ring","modern","2026"],html:'<div class="fx-conic-ring"></div>',css:`.fx-conic-ring {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    transparent 0 70%,
    #22d3ee 85%,
    #f07025 100%
  );
  -webkit-mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 7px),
    #000 calc(100% - 6px)
  );
  mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 7px),
    #000 calc(100% - 6px)
  );
  animation: fx-conic-spin 1.1s linear infinite;
}
@keyframes fx-conic-spin {
  to {
    transform: rotate(360deg);
  }
}`},{id:"aurora-text",name:"Aurora Text",category:"text",description:"Crisp white letters floating over a blurred flowing gradient ghost of themselves.",tags:["aurora","glow","gradient","2026"],html:'<h2 class="fx-aurora-text" data-text="AURORA">AURORA</h2>',css:`.fx-aurora-text {
  position: relative;
  font-size: 44px;
  font-weight: 900;
  letter-spacing: 2px;
  color: #f8fafc;
}
.fx-aurora-text::before {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #f07025, #ec4899, #22d3ee, #f07025);
  background-size: 300% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: blur(16px);
  opacity: 0.85;
  z-index: -1;
  animation: fx-aurora-text-flow 4s linear infinite;
}
@keyframes fx-aurora-text-flow {
  to {
    background-position: 300% center;
  }
}`},{id:"shimmer-text",name:"Shimmer Text",category:"text",description:"A bright gleam sweeps across muted letters, matching modern skeleton loading states.",tags:["shimmer","gleam","loading"],html:'<h2 class="fx-shimmer-text">Loading magic...</h2>',css:`.fx-shimmer-text {
  font-size: 32px;
  font-weight: 800;
  background: linear-gradient(110deg, #475569 40%, #f8fafc 50%, #475569 60%);
  background-size: 250% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: fx-shimmer-sweep 2.2s linear infinite;
}
@keyframes fx-shimmer-sweep {
  to {
    background-position: -250% 0;
  }
}`},{id:"stroke-fill-text",name:"Stroke Fill Text",category:"text",description:"Hollow outlined letters that flood with color and glow when hovered.",tags:["outline","stroke","hover","2026"],html:'<h2 class="fx-stroke-text">OUTLINE</h2>',css:`.fx-stroke-text {
  font-size: 44px;
  font-weight: 900;
  letter-spacing: 3px;
  color: transparent;
  -webkit-text-stroke: 2px #f07025;
  cursor: pointer;
  transition: color 0.35s ease, text-shadow 0.35s ease;
}
.fx-stroke-text:hover {
  color: #f07025;
  text-shadow: 0 0 24px rgba(240, 112, 37, 0.55);
}`},{id:"marquee",name:"Infinite Marquee",category:"text",description:"The retro marquee is back: an edge-masked ticker that loops forever and pauses on hover.",tags:["marquee","ticker","loop","2026"],html:'<div class="fx-marquee"><div class="fx-marquee-track"><span>fresh css effects &bull; 2026 edition &bull; pure css only &bull; copy and paste &bull;&nbsp;</span><span>fresh css effects &bull; 2026 edition &bull; pure css only &bull; copy and paste &bull;&nbsp;</span></div></div>',css:`.fx-marquee {
  width: 280px;
  padding: 10px 0;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    #000 12%,
    #000 88%,
    transparent
  );
  mask-image: linear-gradient(
    90deg,
    transparent,
    #000 12%,
    #000 88%,
    transparent
  );
}
.fx-marquee-track {
  display: flex;
  width: max-content;
  animation: fx-marquee-scroll 9s linear infinite;
}
.fx-marquee-track span {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  white-space: nowrap;
  text-transform: uppercase;
  color: #cbd5e1;
}
.fx-marquee:hover .fx-marquee-track {
  animation-play-state: paused;
}
@keyframes fx-marquee-scroll {
  to {
    transform: translateX(-50%);
  }
}`},{id:"highlight-sweep-text",name:"Highlight Sweep Text",category:"text",description:"A marker-style highlight paints itself across the words on hover, like swiping a pen.",tags:["highlight","marker","hover"],html:'<h2 class="fx-highlight-text"><span>Hover to highlight</span></h2>',css:`.fx-highlight-text span {
  font-size: 26px;
  font-weight: 700;
  color: #e2e8f0;
  padding: 2px 6px;
  cursor: pointer;
  background-image: linear-gradient(
    120deg,
    rgba(240, 112, 37, 0) 0%,
    rgba(240, 112, 37, 0.85) 100%
  );
  background-repeat: no-repeat;
  background-size: 0% 100%;
  transition: background-size 0.45s ease, color 0.3s ease;
}
.fx-highlight-text:hover span {
  background-size: 100% 100%;
  color: #ffffff;
}`},{id:"glass-card",name:"Glassmorphism Card",category:"hover",description:"A frosted glass panel floating over colorful blurred blobs — glassmorphism done right.",tags:["glass","blur","frosted","2026"],html:'<div class="fx-glass-stage"><span class="fx-glass-blob"></span><span class="fx-glass-blob b"></span><div class="fx-glass-card"><h4>Glass Card</h4><p>Frosted glass over glowing color.</p></div></div>',css:`.fx-glass-stage {
  position: relative;
  width: 260px;
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fx-glass-blob {
  position: absolute;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: #f07025;
  filter: blur(30px);
  opacity: 0.8;
  top: 4px;
  left: 14px;
}
.fx-glass-blob.b {
  background: #22d3ee;
  top: 64px;
  left: 136px;
  opacity: 0.7;
}
.fx-glass-card {
  position: relative;
  width: 230px;
  padding: 20px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.3s ease, border-color 0.3s ease,
    background 0.3s ease;
}
.fx-glass-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255, 255, 255, 0.45);
  background: rgba(255, 255, 255, 0.11);
}
.fx-glass-card h4 {
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
}
.fx-glass-card p {
  margin-top: 6px;
  font-size: 13px;
  line-height: 1.55;
  color: rgba(226, 232, 240, 0.78);
}`},{id:"animated-gradient-border-card",name:"Animated Gradient Border Card",category:"hover",description:"The border itself is a flowing gradient — the padding-box/border-box double background trick.",tags:["border","gradient","animated","2026"],html:'<div class="fx-agb-card"><h4>Animated Border</h4><p>The border gradient flows forever.</p></div>',css:`.fx-agb-card {
  width: 240px;
  padding: 24px;
  border-radius: 14px;
  border: 2px solid transparent;
  background: linear-gradient(#18181b, #18181b) padding-box,
    linear-gradient(90deg, #f07025, #ec4899, #22d3ee, #f07025) border-box;
  background-size: 100% 100%, 300% 300%;
  animation: fx-agb-flow 4s linear infinite;
  cursor: pointer;
}
.fx-agb-card h4 {
  font-size: 17px;
  font-weight: 700;
  color: #fafafa;
}
.fx-agb-card p {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.55;
  color: #a1a1aa;
}
@keyframes fx-agb-flow {
  0% {
    background-position: 0 0, 0% 50%;
  }
  100% {
    background-position: 0 0, 100% 50%;
  }
}`},{id:"spotlight-card",name:"Spotlight Card",category:"hover",description:"A soft radial light blooms over the surface on hover — the classic dashboard glow.",tags:["spotlight","glow","radial","2026"],html:'<div class="fx-spot-card"><h4>Spotlight</h4><p>A soft light blooms over the surface.</p></div>',css:`.fx-spot-card {
  position: relative;
  width: 240px;
  padding: 24px;
  border-radius: 14px;
  background: #1e293b;
  border: 1px solid #334155;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.3s ease, transform 0.3s ease;
}
.fx-spot-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    240px circle at 30% 0%,
    rgba(240, 112, 37, 0.28),
    transparent 65%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}
.fx-spot-card:hover {
  border-color: rgba(240, 112, 37, 0.6);
  transform: translateY(-4px);
}
.fx-spot-card:hover::after {
  opacity: 1;
}
.fx-spot-card h4 {
  position: relative;
  font-size: 17px;
  font-weight: 700;
  color: #f8fafc;
}
.fx-spot-card p {
  position: relative;
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.55;
  color: #94a3b8;
}`},{id:"tilt-card",name:"3D Tilt Card",category:"hover",description:"The card leans into a perspective tilt with a directional shadow, like a physical tile.",tags:["3d","tilt","perspective"],html:'<div class="fx-tilt-card"><h4>3D Tilt</h4><p>Hover and the card leans toward you.</p></div>',css:`.fx-tilt-card {
  width: 240px;
  padding: 24px;
  border-radius: 14px;
  background: linear-gradient(145deg, #1e293b, #0f172a);
  border: 1px solid #334155;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transform: perspective(700px) rotateX(0deg) rotateY(0deg);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}
.fx-tilt-card:hover {
  transform: perspective(700px) rotateX(8deg) rotateY(-8deg)
    translateY(-4px);
  box-shadow: -14px 18px 30px rgba(0, 0, 0, 0.45);
}
.fx-tilt-card h4 {
  font-size: 17px;
  font-weight: 700;
  color: #f8fafc;
}
.fx-tilt-card p {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.55;
  color: #94a3b8;
}`},{id:"reveal-card",name:"Expand on Hover Card",category:"hover",description:"Hidden content slides open with a max-height transition — perfect for FAQ-style cards.",tags:["expand","reveal","accordion","2026"],html:'<div class="fx-reveal-card"><h4>Reveal Card</h4><p class="fx-reveal-card-teaser">Hover to expand...</p><p class="fx-reveal-card-more">This hidden paragraph slides open using a max-height transition.</p></div>',css:`.fx-reveal-card {
  width: 240px;
  padding: 22px;
  border-radius: 14px;
  background: #18181b;
  border: 1px solid #3f3f46;
  cursor: pointer;
}
.fx-reveal-card h4 {
  font-size: 17px;
  font-weight: 700;
  color: #fafafa;
}
.fx-reveal-card-teaser {
  margin-top: 8px;
  font-size: 13px;
  color: #a1a1aa;
}
.fx-reveal-card-more {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  margin-top: 0;
  font-size: 13px;
  line-height: 1.55;
  color: #f07025;
  transition: max-height 0.45s ease, opacity 0.35s ease,
    margin-top 0.35s ease;
}
.fx-reveal-card:hover .fx-reveal-card-more {
  max-height: 120px;
  opacity: 1;
  margin-top: 10px;
}`},{id:"aurora-bg",name:"Aurora Background",category:"backgrounds",description:"Two vast blurred ribbons of teal, violet and pink drifting like polar lights.",tags:["aurora","ambient","gradient","2026"],html:'<div class="fx-aurora-bg"><span></span><span></span></div>',css:`.fx-aurora-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #05070f;
}
.fx-aurora-bg span {
  position: absolute;
  width: 70%;
  height: 55%;
  border-radius: 50%;
  filter: blur(46px);
  opacity: 0.5;
}
.fx-aurora-bg span:nth-child(1) {
  background: linear-gradient(120deg, #22d3ee, #8b5cf6, #ec4899);
  top: -18%;
  left: -12%;
  animation: fx-aurora-drift-a 9s ease-in-out infinite alternate;
}
.fx-aurora-bg span:nth-child(2) {
  background: linear-gradient(300deg, #10b981, #22d3ee, #8b5cf6);
  bottom: -22%;
  right: -14%;
  animation: fx-aurora-drift-b 11s ease-in-out infinite alternate;
}
@keyframes fx-aurora-drift-a {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  100% {
    transform: translate(22%, 18%) rotate(24deg) scale(1.18);
  }
}
@keyframes fx-aurora-drift-b {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1.1);
  }
  100% {
    transform: translate(-20%, -16%) rotate(-20deg) scale(0.95);
  }
}`},{id:"mesh-gradient-bg",name:"Mesh Gradient Background",category:"backgrounds",description:"Four soft color points blended into a living mesh that slowly shifts its hue.",tags:["mesh","gradient","hue-rotate","2026"],html:'<div class="fx-mesh-bg"></div>',css:`.fx-mesh-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(at 20% 25%, #f07025 0px, transparent 50%),
    radial-gradient(at 75% 20%, #ec4899 0px, transparent 50%),
    radial-gradient(at 80% 80%, #8b5cf6 0px, transparent 50%),
    radial-gradient(at 15% 85%, #22d3ee 0px, transparent 50%),
    #0f172a;
  filter: blur(2px) saturate(1.15);
  animation: fx-mesh-hue 10s ease-in-out infinite alternate;
}
@keyframes fx-mesh-hue {
  from {
    filter: blur(2px) saturate(1.15) hue-rotate(0deg);
  }
  to {
    filter: blur(2px) saturate(1.3) hue-rotate(40deg);
  }
}`},{id:"starfield-bg",name:"Twinkling Starfield",category:"backgrounds",description:"Two layers of box-shadow stars twinkle out of sync over a deep space gradient.",tags:["stars","night","twinkle","2026"],html:'<div class="fx-starfield"><span></span><span></span></div>',css:`.fx-starfield {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: radial-gradient(
    ellipse at 50% 0%,
    #101c3a 0%,
    #05070f 70%
  );
}
.fx-starfield span {
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: transparent;
}
.fx-starfield span:nth-child(1) {
  box-shadow: 30px 40px #fff, 120px 90px #cbd5e1, 210px 30px #fff,
    300px 140px #fff, 90px 180px #94a3b8, 380px 60px #fff,
    440px 190px #e2e8f0, 520px 40px #fff, 560px 150px #94a3b8,
    620px 90px #fff, 700px 30px #e2e8f0, 760px 170px #fff,
    180px 220px #fff, 640px 230px #cbd5e1, 260px 260px #fff;
  animation: fx-star-twinkle 2.4s ease-in-out infinite alternate;
}
.fx-starfield span:nth-child(2) {
  box-shadow: 70px 120px #fff, 170px 60px #94a3b8, 240px 170px #fff,
    330px 220px #cbd5e1, 420px 110px #fff, 500px 200px #fff,
    590px 60px #cbd5e1, 680px 150px #fff, 740px 240px #fff,
    140px 250px #fff, 460px 20px #e2e8f0, 20px 210px #cbd5e1;
  animation: fx-star-twinkle 3.4s ease-in-out infinite alternate-reverse;
}
@keyframes fx-star-twinkle {
  from {
    opacity: 0.35;
  }
  to {
    opacity: 1;
  }
}`},{id:"light-beams-bg",name:"Rotating Light Beams",category:"backgrounds",description:"Searchlight rays sweep in a circle from below, masked to fade with distance.",tags:["beams","conic","spotlight","2026"],html:'<div class="fx-beams-bg"></div>',css:`.fx-beams-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: radial-gradient(
    circle at 50% 120%,
    #1a1208 0%,
    #0b0e1a 55%,
    #05070f 100%
  );
}
.fx-beams-bg::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  width: 220%;
  height: 220%;
  transform-origin: top center;
  background: repeating-conic-gradient(
    from 0deg at 50% 0%,
    rgba(240, 112, 37, 0.22) 0deg 6deg,
    transparent 6deg 14deg
  );
  filter: blur(6px);
  -webkit-mask-image: radial-gradient(
    circle at 50% 0%,
    #000 0%,
    transparent 62%
  );
  mask-image: radial-gradient(circle at 50% 0%, #000 0%, transparent 62%);
  animation: fx-beams-rotate 14s linear infinite;
}
@keyframes fx-beams-rotate {
  from {
    transform: translateX(-50%) rotate(0deg);
  }
  to {
    transform: translateX(-50%) rotate(360deg);
  }
}`},{id:"heartbeat",name:"Heartbeat Pulse",category:"animations",description:"A pure-CSS heart with the unmistakable double-thump rhythm.",tags:["heart","rhythm","pulse"],html:'<div class="fx-heartbeat"></div>',css:`.fx-heartbeat {
  position: relative;
  width: 70px;
  height: 63px;
  animation: fx-heartbeat 1.4s ease-in-out infinite;
}
.fx-heartbeat::before,
.fx-heartbeat::after {
  content: "";
  position: absolute;
  top: 0;
  width: 35px;
  height: 56px;
  border-radius: 35px 35px 0 0;
  background: #ef4444;
}
.fx-heartbeat::before {
  left: 35px;
  transform: rotate(45deg);
  transform-origin: 0 100%;
}
.fx-heartbeat::after {
  left: 0;
  transform: rotate(-45deg);
  transform-origin: 100% 100%;
}
@keyframes fx-heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.15);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.15);
  }
  60% {
    transform: scale(1);
  }
}`},{id:"jello-wiggle",name:"Jello Wiggle",category:"animations",description:"A gelatinous wobble that squashes and stretches once per hover — pure cartoon physics.",tags:["hover","jello","squash","fun"],html:'<div class="fx-jello-box">Hover me</div>',css:`.fx-jello-box {
  padding: 20px 32px;
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  border-radius: 12px;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
}
.fx-jello-box:hover {
  animation: fx-jello 0.9s ease;
}
@keyframes fx-jello {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
  100% {
    transform: scale(1, 1);
  }
}`},{id:"pendulum-swing",name:"Pendulum Swing",category:"animations",description:"A glowing bob swings from a fixed pivot with natural eased momentum.",tags:["pendulum","swing","physics"],html:'<div class="fx-swing"></div>',css:`.fx-swing {
  position: relative;
  width: 3px;
  height: 84px;
  border-radius: 2px;
  background: #475569;
  transform-origin: top center;
  animation: fx-swing 1.8s ease-in-out infinite alternate;
}
.fx-swing::after {
  content: "";
  position: absolute;
  bottom: -7px;
  left: 50%;
  margin-left: -8px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #f07025;
  box-shadow: 0 0 10px rgba(240, 112, 37, 0.6);
}
@keyframes fx-swing {
  from {
    transform: rotate(-28deg);
  }
  to {
    transform: rotate(28deg);
  }
}`},{id:"rotating-cube",name:"3D Wireframe Cube",category:"animations",description:"A glowing orange wireframe cube tumbling through 3D space with preserve-3d.",tags:["3d","cube","wireframe","2026"],html:'<div class="fx-cube-stage"><div class="fx-cube"><span class="fx-cube-face front"></span><span class="fx-cube-face back"></span><span class="fx-cube-face right"></span><span class="fx-cube-face left"></span><span class="fx-cube-face top"></span><span class="fx-cube-face bottom"></span></div></div>',css:`.fx-cube-stage {
  perspective: 420px;
}
.fx-cube {
  position: relative;
  width: 64px;
  height: 64px;
  transform-style: preserve-3d;
  animation: fx-cube-spin 6s linear infinite;
}
.fx-cube-face {
  position: absolute;
  inset: 0;
  border: 1px solid rgba(240, 112, 37, 0.9);
  background: rgba(240, 112, 37, 0.12);
  box-shadow: inset 0 0 18px rgba(240, 112, 37, 0.25);
}
.fx-cube-face.front { transform: translateZ(32px); }
.fx-cube-face.back { transform: rotateY(180deg) translateZ(32px); }
.fx-cube-face.right { transform: rotateY(90deg) translateZ(32px); }
.fx-cube-face.left { transform: rotateY(-90deg) translateZ(32px); }
.fx-cube-face.top { transform: rotateX(90deg) translateZ(32px); }
.fx-cube-face.bottom { transform: rotateX(-90deg) translateZ(32px); }
@keyframes fx-cube-spin {
  0% {
    transform: rotateX(-18deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(-18deg) rotateY(360deg);
  }
}`},{id:"bounce-arrow",name:"Scroll Cue Arrow",category:"animations",description:"The universal scroll-down chevron bouncing gently at the bottom of hero sections.",tags:["arrow","scroll","cue"],html:'<div class="fx-bounce-arrow" aria-hidden="true"></div>',css:`.fx-bounce-arrow {
  width: 22px;
  height: 22px;
  border-right: 4px solid #f07025;
  border-bottom: 4px solid #f07025;
  animation: fx-arrow-bounce 1.6s ease-in-out infinite;
}
@keyframes fx-arrow-bounce {
  0%,
  100% {
    transform: rotate(45deg) translate(0, 0);
    opacity: 0.9;
  }
  50% {
    transform: rotate(45deg) translate(8px, 8px);
    opacity: 0.5;
  }
}`},{id:"pb-liquid-btn",name:"Liquid Fill Button",category:"buttons",description:"A cyan liquid rises from the bottom of the button on hover, its spinning wavy crest flooding the label with color.",tags:["hover","liquid","fill","wave"],html:'<button class="fx-pb-liquid-btn">Hover Me</button>',css:`.fx-pb-liquid-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #22d3ee;
  background: transparent;
  border: 2px solid #22d3ee;
  border-radius: 999px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: color 0.5s ease 0.15s;
}
.fx-pb-liquid-btn::before {
  content: "";
  position: absolute;
  top: 165%;
  left: 50%;
  width: 170px;
  height: 170px;
  margin-left: -85px;
  border-radius: 42%;
  background: #22d3ee;
  z-index: -1;
  animation: fx-pb-liquid-btn-wave 5s linear infinite;
  transition: top 0.85s ease-in-out;
}
.fx-pb-liquid-btn:hover {
  color: #0b1120;
}
.fx-pb-liquid-btn:hover::before {
  top: 65%;
}
@keyframes fx-pb-liquid-btn-wave {
  to {
    transform: rotate(360deg);
  }
}`},{id:"pb-magnet-btn",name:"Magnet Lift Button",category:"buttons",description:"The button lifts toward you on hover with a gentle scale-up while a soft green glow blooms beneath it.",tags:["hover","lift","glow"],html:'<button class="fx-pb-magnet-btn">Attract Me</button>',css:`.fx-pb-magnet-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #0b1120;
  background: #34d399;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(52, 211, 153, 0.25);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}
.fx-pb-magnet-btn:hover {
  transform: translateY(-4px) scale(1.04);
  box-shadow: 0 18px 38px rgba(52, 211, 153, 0.5),
    0 6px 16px rgba(52, 211, 153, 0.35);
}
.fx-pb-magnet-btn:active {
  transform: translateY(-1px) scale(1.01);
  box-shadow: 0 8px 20px rgba(52, 211, 153, 0.4);
}`},{id:"pb-conic-border-btn",name:"Conic Spin Border",category:"buttons",description:"A vivid rainbow conic border spins endlessly around the dark frame; hovering brightens the face inside.",tags:["border","conic","spin","gradient"],html:'<button class="fx-pb-conic-border-btn"><span class="fx-pb-conic-border-btn-face">Conic Spin</span></button>',css:`.fx-pb-conic-border-btn {
  position: relative;
  padding: 3px;
  background: transparent;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
}
.fx-pb-conic-border-btn::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  aspect-ratio: 1;
  background: conic-gradient(
    from 0deg,
    #f07025,
    #ec4899,
    #a78bfa,
    #22d3ee,
    #34d399,
    #f07025
  );
  animation: fx-pb-conic-border-btn-spin 3s linear infinite;
}
.fx-pb-conic-border-btn-face {
  position: relative;
  display: block;
  padding: 13px 34px;
  font-size: 16px;
  font-weight: 600;
  color: #f8fafc;
  background: #101a33;
  border-radius: 13px;
  transition: background 0.3s ease, color 0.3s ease;
}
.fx-pb-conic-border-btn:hover .fx-pb-conic-border-btn-face {
  background: #1d2c52;
  color: #ffffff;
}
@keyframes fx-pb-conic-border-btn-spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}`},{id:"pb-candy-btn",name:"Candy Press Button",category:"buttons",description:"A chunky glossy candy button with a hard bottom shadow that presses down flush when hovered, like a physical sweet.",tags:["hover","press","candy","3d"],html:'<button class="fx-pb-candy-btn">Sweet!</button>',css:`.fx-pb-candy-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #ffffff;
  background: #ec4899;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  box-shadow: inset 0 3px 0 rgba(255, 255, 255, 0.45),
    inset 0 -4px 0 rgba(0, 0, 0, 0.2), 0 7px 0 #9d174d,
    0 12px 20px rgba(236, 72, 153, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease,
    background 0.2s ease;
}
.fx-pb-candy-btn:hover {
  transform: translateY(5px);
  background: #db2777;
  box-shadow: inset 0 3px 0 rgba(255, 255, 255, 0.3),
    inset 0 -4px 0 rgba(0, 0, 0, 0.2), 0 2px 0 #9d174d,
    0 5px 10px rgba(236, 72, 153, 0.4);
}
.fx-pb-candy-btn:active {
  transform: translateY(7px);
  box-shadow: inset 0 3px 0 rgba(255, 255, 255, 0.25), 0 0 0 #9d174d;
}`},{id:"pb-glitch-btn",name:"Glitch Label Button",category:"buttons",description:"On hover the label splits into red and cyan ghost copies that jitter and slice in a retro glitch rhythm.",tags:["hover","glitch","chromatic"],html:'<button class="fx-pb-glitch-btn" data-text="GLITCH">GLITCH</button>',css:`.fx-pb-glitch-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #f8fafc;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.25s ease;
}
.fx-pb-glitch-btn::before,
.fx-pb-glitch-btn::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  pointer-events: none;
}
.fx-pb-glitch-btn:hover {
  background: rgba(255, 255, 255, 0.09);
  border-color: rgba(255, 255, 255, 0.4);
}
.fx-pb-glitch-btn:hover::before {
  opacity: 0.9;
  color: #ef4444;
  animation: fx-pb-glitch-btn-jitter 0.5s steps(3, end) infinite;
}
.fx-pb-glitch-btn:hover::after {
  opacity: 0.9;
  color: #22d3ee;
  animation: fx-pb-glitch-btn-jitter 0.5s steps(3, end) infinite reverse;
}
@keyframes fx-pb-glitch-btn-jitter {
  0% {
    transform: translate(-3px, -2px);
    clip-path: inset(0 0 55% 0);
  }
  50% {
    transform: translate(2px, 1px);
    clip-path: inset(45% 0 0 0);
  }
  100% {
    transform: translate(-1px, 2px);
    clip-path: inset(20% 0 35% 0);
  }
}`},{id:"pb-ping-btn",name:"Ping Rings Button",category:"buttons",description:"Hovering fires two concentric amber rings that expand and fade outward from the pill in a sonar ping.",tags:["hover","ping","rings"],html:'<button class="fx-pb-ping-btn">Ping Me</button>',css:`.fx-pb-ping-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #fbbf24;
  background: transparent;
  border: 2px solid #fbbf24;
  border-radius: 999px;
  cursor: pointer;
  z-index: 1;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}
.fx-pb-ping-btn::before,
.fx-pb-ping-btn::after {
  content: "";
  position: absolute;
  inset: -2px;
  border: 2px solid #fbbf24;
  border-radius: 999px;
  opacity: 0;
  pointer-events: none;
  z-index: -1;
}
.fx-pb-ping-btn:hover {
  background: rgba(251, 191, 36, 0.12);
  box-shadow: 0 0 24px rgba(251, 191, 36, 0.35);
}
.fx-pb-ping-btn:hover::before {
  animation: fx-pb-ping-btn-ring 1.4s ease-out infinite;
}
.fx-pb-ping-btn:hover::after {
  animation: fx-pb-ping-btn-ring 1.4s ease-out 0.45s infinite;
}
@keyframes fx-pb-ping-btn-ring {
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1.65);
    opacity: 0;
  }
}`},{id:"pb-race-btn",name:"Comet Race Button",category:"buttons",description:"A glowing comet dot races across the button face again and again while hovered, trailing amber light.",tags:["hover","comet","race"],html:'<button class="fx-pb-race-btn">Race</button>',css:`.fx-pb-race-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #f8fafc;
  background: #111c36;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.3s ease, background 0.3s ease;
}
.fx-pb-race-btn::after {
  content: "";
  position: absolute;
  top: 50%;
  left: -18%;
  width: 12px;
  height: 12px;
  margin-top: -6px;
  border-radius: 50%;
  background: #fbbf24;
  box-shadow: -16px 0 10px -2px rgba(251, 191, 36, 0.9),
    -30px 0 18px -4px rgba(251, 191, 36, 0.5);
  opacity: 0;
}
.fx-pb-race-btn:hover {
  border-color: rgba(251, 191, 36, 0.6);
  background: #16233f;
}
.fx-pb-race-btn:hover::after {
  animation: fx-pb-race-btn-zoom 0.9s linear infinite;
}
@keyframes fx-pb-race-btn-zoom {
  0% {
    left: -18%;
    opacity: 0;
  }
  12% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    left: 108%;
    opacity: 0;
  }
}`},{id:"pb-swap-btn",name:"Label Swap Button",category:"buttons",description:"Two stacked labels trade places on hover: the first slides up out of view as the second springs in from below.",tags:["hover","swap","text"],html:'<button class="fx-pb-swap-btn"><span class="fx-pb-swap-btn-clip"><span class="fx-pb-swap-btn-a">Download</span><span class="fx-pb-swap-btn-b">Ready?</span></span></button>',css:`.fx-pb-swap-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #0b1120;
  background: #fbbf24;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.fx-pb-swap-btn:hover {
  background: #fcd34d;
}
.fx-pb-swap-btn-clip {
  display: block;
  height: 22px;
  overflow: hidden;
}
.fx-pb-swap-btn-a,
.fx-pb-swap-btn-b {
  display: block;
  height: 22px;
  line-height: 22px;
  text-align: center;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-pb-swap-btn-b {
  transform: translateY(100%);
}
.fx-pb-swap-btn:hover .fx-pb-swap-btn-a {
  transform: translateY(-100%);
}
.fx-pb-swap-btn:hover .fx-pb-swap-btn-b {
  transform: translateY(0);
}`},{id:"pb-pixel-btn",name:"Pixel Invert Button",category:"buttons",description:"An 8-bit pixel button with stepped corners and chunky bevels that inverts its green and midnight palette on hover.",tags:["pixel","retro","invert","hover"],html:'<button class="fx-pb-pixel-btn">PLAYER 1</button>',css:`.fx-pb-pixel-btn {
  padding: 14px 28px;
  font-family: "Courier New", monospace;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 3px;
  color: #052e16;
  background: #34d399;
  border: none;
  cursor: pointer;
  clip-path: polygon(
    0 8px,
    8px 8px,
    8px 0,
    calc(100% - 8px) 0,
    calc(100% - 8px) 8px,
    100% 8px,
    100% calc(100% - 8px),
    calc(100% - 8px) calc(100% - 8px),
    calc(100% - 8px) 100%,
    8px 100%,
    8px calc(100% - 8px),
    0 calc(100% - 8px)
  );
  box-shadow: inset 5px 5px 0 rgba(255, 255, 255, 0.35),
    inset -5px -5px 0 rgba(6, 78, 59, 0.85);
  transition: background 0.2s steps(2, end), color 0.2s steps(2, end),
    box-shadow 0.2s steps(2, end);
}
.fx-pb-pixel-btn:hover {
  color: #34d399;
  background: #131c33;
  box-shadow: inset 5px 5px 0 rgba(52, 211, 153, 0.45),
    inset -5px -5px 0 rgba(255, 255, 255, 0.15);
}`},{id:"pb-draw-btn",name:"Outline Draw Button",category:"buttons",description:"On hover a cyan outline draws itself around the button, sweeping the top edge before the sides snap into place.",tags:["hover","outline","draw"],html:'<button class="fx-pb-draw-btn">Draw Me</button>',css:`.fx-pb-draw-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #e2e8f0;
  background: rgba(255, 255, 255, 0.04);
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: color 0.4s ease 0.25s;
}
.fx-pb-draw-btn::before,
.fx-pb-draw-btn::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 0 solid #22d3ee;
}
.fx-pb-draw-btn::before {
  top: 0;
  left: 0;
  border-top-width: 2px;
  border-left-width: 2px;
}
.fx-pb-draw-btn::after {
  bottom: 0;
  right: 0;
  border-bottom-width: 2px;
  border-right-width: 2px;
}
.fx-pb-draw-btn:hover {
  color: #22d3ee;
}
.fx-pb-draw-btn:hover::before,
.fx-pb-draw-btn:hover::after {
  animation: fx-pb-draw-btn-draw 0.6s ease forwards;
}
@keyframes fx-pb-draw-btn-draw {
  0% {
    width: 0;
    height: 0;
  }
  45% {
    width: 100%;
    height: 0;
  }
  100% {
    width: 100%;
    height: 100%;
  }
}`},{id:"pb-heartglow-btn",name:"Heartbeat Glow Button",category:"buttons",description:"A pink glow pulses in a double-thump heartbeat rhythm; hovering makes the pulse bigger and brighter.",tags:["glow","pulse","heartbeat"],html:'<button class="fx-pb-heartglow-btn">Beat</button>',css:`.fx-pb-heartglow-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #fecdd3;
  background: #22101f;
  border: 2px solid #ec4899;
  border-radius: 999px;
  cursor: pointer;
  animation: fx-pb-heartglow-btn-beat 1.8s ease-in-out infinite;
  transition: color 0.3s ease, background 0.3s ease;
}
.fx-pb-heartglow-btn:hover {
  color: #ffffff;
  background: #38122f;
  animation: fx-pb-heartglow-btn-throb 1.8s ease-in-out infinite;
}
@keyframes fx-pb-heartglow-btn-beat {
  0%,
  28%,
  60%,
  100% {
    box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.4);
  }
  14% {
    box-shadow: 0 0 22px 4px rgba(236, 72, 153, 0.55);
  }
  42% {
    box-shadow: 0 0 16px 2px rgba(236, 72, 153, 0.35);
  }
}
@keyframes fx-pb-heartglow-btn-throb {
  0%,
  28%,
  60%,
  100% {
    box-shadow: 0 0 0 0 rgba(236, 72, 153, 0.65);
  }
  14% {
    box-shadow: 0 0 34px 10px rgba(236, 72, 153, 0.8);
  }
  42% {
    box-shadow: 0 0 26px 6px rgba(236, 72, 153, 0.6);
  }
}`},{id:"pb-diagonal-btn",name:"Diagonal Split Button",category:"buttons",description:"A pink triangle sweeps across the violet face on hover, splitting the button into two vivid diagonal halves.",tags:["hover","diagonal","split"],html:'<button class="fx-pb-diagonal-btn">Split</button>',css:`.fx-pb-diagonal-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #ffffff;
  background: #7c3aed;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  transition: color 0.35s ease;
}
.fx-pb-diagonal-btn::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #ec4899;
  clip-path: polygon(0 0, 100% 0, 0 100%);
  transform: translateX(-105%);
  transition: transform 0.45s ease;
  z-index: -1;
}
.fx-pb-diagonal-btn:hover::before {
  transform: translateX(0);
}`},{id:"pb-ghost-btn",name:"Ghost Morph Button",category:"buttons",description:"A sharp-cornered ghost outline morphs into a fully filled violet pill on hover, softening its radius as it fills.",tags:["hover","morph","pill"],html:'<button class="fx-pb-ghost-btn">Ghost Pill</button>',css:`.fx-pb-ghost-btn {
  padding: 12px 34px;
  font-size: 16px;
  font-weight: 600;
  color: #a78bfa;
  background: transparent;
  border: 2px solid #a78bfa;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.35s ease, color 0.35s ease,
    border-radius 0.35s ease, box-shadow 0.35s ease;
}
.fx-pb-ghost-btn:hover {
  color: #0b1120;
  background: #a78bfa;
  border-radius: 999px;
  box-shadow: 0 8px 24px rgba(167, 139, 250, 0.45);
}`},{id:"pb-spring-btn",name:"Spring Bounce Button",category:"buttons",description:"Hovering triggers a springy squash-and-stretch bounce with overshoot easing plus a lifted orange shadow.",tags:["hover","spring","bounce"],html:'<button class="fx-pb-spring-btn">Boing!</button>',css:`.fx-pb-spring-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  background: #f07025;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(240, 112, 37, 0.35);
  transition: box-shadow 0.3s ease;
}
.fx-pb-spring-btn:hover {
  animation: fx-pb-spring-btn-boing 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 14px 30px rgba(240, 112, 37, 0.5);
}
.fx-pb-spring-btn:active {
  transform: scale(0.96);
}
@keyframes fx-pb-spring-btn-boing {
  0% {
    transform: scale(1);
  }
  35% {
    transform: scale(1.12, 0.92);
  }
  60% {
    transform: scale(0.94, 1.08);
  }
  80% {
    transform: scale(1.05, 0.97);
  }
  100% {
    transform: scale(1);
  }
}`},{id:"pb-stripes-btn",name:"Scrolling Stripes Button",category:"buttons",description:"Orange and pink candy stripes scroll diagonally behind the label forever; hovering adds a warm glow.",tags:["stripes","scroll","candy","loop"],html:'<button class="fx-pb-stripes-btn">Candy Rush</button>',css:`.fx-pb-stripes-btn {
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #ffffff;
  text-shadow: 0 2px 6px rgba(11, 17, 32, 0.85);
  background: repeating-linear-gradient(
    45deg,
    #f07025 0px,
    #f07025 14px,
    #ec4899 14px,
    #ec4899 28px
  );
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 6px 18px rgba(236, 72, 153, 0.3);
  animation: fx-pb-stripes-btn-scroll 1s linear infinite;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.fx-pb-stripes-btn:hover {
  transform: scale(1.03);
  box-shadow: 0 10px 28px rgba(236, 72, 153, 0.55);
}
@keyframes fx-pb-stripes-btn-scroll {
  to {
    background-position: 39.6px 0;
  }
}`},{id:"pb-terminal-btn",name:"Terminal Prompt Button",category:"buttons",description:"A retro terminal button with a blinking caret prompt that floods the little screen with green light on hover.",tags:["terminal","retro","caret"],html:'<button class="fx-pb-terminal-btn"><span class="fx-pb-terminal-btn-prompt">&gt;</span>npm run dev<span class="fx-pb-terminal-btn-caret">_</span></button>',css:`.fx-pb-terminal-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 30px;
  font-family: "Courier New", monospace;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #34d399;
  background: #071322;
  border: 1px solid #14532d;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: inset 0 0 18px rgba(52, 211, 153, 0.08);
  transition: box-shadow 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}
.fx-pb-terminal-btn-prompt {
  color: #86efac;
}
.fx-pb-terminal-btn-caret {
  display: inline-block;
  animation: fx-pb-terminal-btn-blink 1.1s steps(1, end) infinite;
}
.fx-pb-terminal-btn:hover {
  color: #6ee7b7;
  border-color: #34d399;
  box-shadow: inset 0 0 26px rgba(52, 211, 153, 0.25),
    0 0 22px rgba(52, 211, 153, 0.35);
}
@keyframes fx-pb-terminal-btn-blink {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}`},{id:"pb-dotted-spin-btn",name:"Dotted Halo Button",category:"buttons",description:"A dashed violet halo rotates slowly around this circular button at all times and turns cyan on hover.",tags:["dashed","spin","halo","circle"],html:'<button class="fx-pb-dotted-spin-btn">SCAN</button>',css:`.fx-pb-dotted-spin-btn {
  position: relative;
  width: 92px;
  height: 92px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #f8fafc;
  background: #1a2540;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}
.fx-pb-dotted-spin-btn::before {
  content: "";
  position: absolute;
  inset: -8px;
  border: 2px dashed #a78bfa;
  border-radius: 50%;
  animation: fx-pb-dotted-spin-btn-rotate 9s linear infinite;
  transition: border-color 0.3s ease;
  pointer-events: none;
}
.fx-pb-dotted-spin-btn:hover {
  background: #27346b;
  box-shadow: 0 0 26px rgba(167, 139, 250, 0.45);
}
.fx-pb-dotted-spin-btn:hover::before {
  border-color: #22d3ee;
}
@keyframes fx-pb-dotted-spin-btn-rotate {
  to {
    transform: rotate(360deg);
  }
}`},{id:"pb-underline-btn",name:"Glow Underline Button",category:"buttons",description:"A glowing cyan underline grows beneath the label on hover while the text lifts a couple of pixels.",tags:["hover","underline","glow"],html:'<button class="fx-pb-underline-btn">Underline</button>',css:`.fx-pb-underline-btn {
  position: relative;
  padding: 12px 10px;
  font-size: 17px;
  font-weight: 600;
  color: #cbd5e1;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
}
.fx-pb-underline-btn::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 2px;
  width: 0;
  height: 3px;
  border-radius: 3px;
  background: #22d3ee;
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.8);
  transform: translateX(-50%);
  transition: width 0.35s ease;
}
.fx-pb-underline-btn:hover {
  color: #ffffff;
  transform: translateY(-2px);
}
.fx-pb-underline-btn:hover::after {
  width: 100%;
}`},{id:"pb-frost-btn",name:"Frost Melt Button",category:"buttons",description:"A frosted glass pill with a blurred rainbow behind it; on hover the frost melts and the gradient snaps into focus.",tags:["glass","frost","gradient","blur"],html:'<button class="fx-pb-frost-btn">Frost</button>',css:`.fx-pb-frost-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #f8fafc;
  text-shadow: 0 1px 8px rgba(11, 17, 32, 0.65);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 999px;
  cursor: pointer;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  overflow: hidden;
  z-index: 1;
  transition: border-color 0.5s ease, box-shadow 0.5s ease;
}
.fx-pb-frost-btn::before,
.fx-pb-frost-btn::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  z-index: -1;
  transition: opacity 0.5s ease, filter 0.6s ease;
}
.fx-pb-frost-btn::before {
  background: linear-gradient(120deg, #ec4899, #a78bfa 50%, #22d3ee);
  opacity: 0.55;
  filter: blur(14px) saturate(0.8);
}
.fx-pb-frost-btn::after {
  background: rgba(255, 255, 255, 0.22);
}
.fx-pb-frost-btn:hover {
  border-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 10px 30px rgba(167, 139, 250, 0.45);
}
.fx-pb-frost-btn:hover::before {
  opacity: 1;
  filter: blur(0px) saturate(1.4);
}
.fx-pb-frost-btn:hover::after {
  opacity: 0.12;
}`},{id:"pb-block3d-btn",name:"3D Block Press",category:"buttons",description:"A solid green block with a dark extruded side that slides flush underneath the face when pressed on hover.",tags:["3d","press","block"],html:'<button class="fx-pb-block3d-btn">Push</button>',css:`.fx-pb-block3d-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #06281c;
  background: transparent;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.15s ease, color 0.15s ease;
}
.fx-pb-block3d-btn::before,
.fx-pb-block3d-btn::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 10px;
  transition: transform 0.15s ease;
}
.fx-pb-block3d-btn::before {
  background: #065f46;
  transform: translate(7px, 7px);
  z-index: -2;
}
.fx-pb-block3d-btn::after {
  background: #34d399;
  z-index: -1;
}
.fx-pb-block3d-btn:hover {
  transform: translate(7px, 7px);
  color: #052e16;
}
.fx-pb-block3d-btn:hover::before {
  transform: translate(0, 0);
}`},{id:"pb-orbit-btn",name:"Satellite Orbit Button",category:"buttons",description:"A tiny orange satellite circles the button on a dashed orbit path forever, glowing hotter on hover.",tags:["orbit","satellite","loop","glow"],html:'<button class="fx-pb-orbit-btn"><span class="fx-pb-orbit-btn-sat"></span><span class="fx-pb-orbit-btn-label">Launch</span></button>',css:`.fx-pb-orbit-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 16px;
  font-weight: 600;
  color: #f8fafc;
  background: #131c36;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.fx-pb-orbit-btn-sat {
  position: absolute;
  inset: -42px;
  border-radius: inherit;
  animation: fx-pb-orbit-btn-rotate 3.5s linear infinite;
  pointer-events: none;
}
.fx-pb-orbit-btn-sat::before {
  content: "";
  position: absolute;
  top: -5px;
  left: 50%;
  width: 8px;
  height: 8px;
  margin-left: -4px;
  border-radius: 50%;
  background: #f07025;
  box-shadow: 0 0 10px rgba(240, 112, 37, 0.9);
  transition: background 0.3s ease, box-shadow 0.3s ease;
}
.fx-pb-orbit-btn-sat::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 138px;
  height: 138px;
  margin: -69px 0 0 -69px;
  border: 1px dashed rgba(148, 163, 184, 0.35);
  border-radius: 50%;
}
.fx-pb-orbit-btn:hover {
  border-color: rgba(240, 112, 37, 0.6);
  box-shadow: 0 0 24px rgba(240, 112, 37, 0.3);
}
.fx-pb-orbit-btn:hover .fx-pb-orbit-btn-sat::before {
  background: #fb923c;
  box-shadow: 0 0 16px rgba(251, 146, 60, 1);
}
@keyframes fx-pb-orbit-btn-rotate {
  to {
    transform: rotate(360deg);
  }
}`},{id:"pl-wave-dots",name:"Wave Dots",category:"loaders",description:"Five dots ride an invisible sine wave, each one arriving a beat later than the last.",tags:["dots","wave","stagger"],html:'<div class="fx-pl-wave-dots"><span class="fx-pl-wave-dots-dot"></span><span class="fx-pl-wave-dots-dot"></span><span class="fx-pl-wave-dots-dot"></span><span class="fx-pl-wave-dots-dot"></span><span class="fx-pl-wave-dots-dot"></span></div>',css:`.fx-pl-wave-dots {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 56px;
}
.fx-pl-wave-dots-dot {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #22d3ee;
  animation: fx-pl-wave-dots-ride 1.15s ease-in-out infinite;
}
.fx-pl-wave-dots-dot:nth-child(2) {
  background: #a78bfa;
  animation-delay: 0.13s;
}
.fx-pl-wave-dots-dot:nth-child(3) {
  background: #ec4899;
  animation-delay: 0.26s;
}
.fx-pl-wave-dots-dot:nth-child(4) {
  background: #fbbf24;
  animation-delay: 0.39s;
}
.fx-pl-wave-dots-dot:nth-child(5) {
  background: #34d399;
  animation-delay: 0.52s;
}
@keyframes fx-pl-wave-dots-ride {
  0%, 100% { transform: translateY(16px) scale(0.85); }
  50% { transform: translateY(-16px) scale(1); }
}`},{id:"pl-flip-cascade",name:"Flip Cascade",category:"loaders",description:"Three rounded squares somersault around the Y axis one after another in an endless relay.",tags:["flip","cascade","3d"],html:'<div class="fx-pl-flip-cascade"><span class="fx-pl-flip-cascade-square"></span><span class="fx-pl-flip-cascade-square"></span><span class="fx-pl-flip-cascade-square"></span></div>',css:`.fx-pl-flip-cascade {
  display: flex;
  gap: 16px;
  perspective: 420px;
}
.fx-pl-flip-cascade-square {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: #a78bfa;
  box-shadow: 0 0 14px rgba(167, 139, 250, 0.45);
  animation: fx-pl-flip-cascade-flip 1.9s cubic-bezier(0.45, 0, 0.25, 1) infinite;
}
.fx-pl-flip-cascade-square:nth-child(2) {
  background: #ec4899;
  box-shadow: 0 0 14px rgba(236, 72, 153, 0.45);
  animation-delay: 0.22s;
}
.fx-pl-flip-cascade-square:nth-child(3) {
  background: #22d3ee;
  box-shadow: 0 0 14px rgba(34, 211, 238, 0.45);
  animation-delay: 0.44s;
}
@keyframes fx-pl-flip-cascade-flip {
  0%, 18% { transform: rotateY(0deg); }
  50%, 68% { transform: rotateY(180deg); }
  100% { transform: rotateY(360deg); }
}`},{id:"pl-hourglass",name:"Flip Hourglass",category:"loaders",description:"An amber hourglass drains its sand, tips over, and starts pouring again every couple of seconds.",tags:["hourglass","flip","time"],html:'<div class="fx-pl-hourglass"><span class="fx-pl-hourglass-top"></span><span class="fx-pl-hourglass-bottom"></span></div>',css:`.fx-pl-hourglass {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  animation: fx-pl-hourglass-flip 2.2s cubic-bezier(0.7, 0, 0.3, 1) infinite;
}
.fx-pl-hourglass-top {
  width: 0;
  height: 0;
  border-left: 17px solid transparent;
  border-right: 17px solid transparent;
  border-top: 24px solid #fbbf24;
  transform-origin: top center;
  animation: fx-pl-hourglass-drain 2.2s ease-in infinite;
}
.fx-pl-hourglass-bottom {
  width: 0;
  height: 0;
  border-left: 17px solid transparent;
  border-right: 17px solid transparent;
  border-bottom: 24px solid #fbbf24;
  transform-origin: bottom center;
  animation: fx-pl-hourglass-fill 2.2s ease-out infinite;
}
@keyframes fx-pl-hourglass-flip {
  0%, 55% { transform: rotate(0deg); }
  100% { transform: rotate(180deg); }
}
@keyframes fx-pl-hourglass-drain {
  0% { transform: scaleY(1); }
  55%, 100% { transform: scaleY(0.12); }
}
@keyframes fx-pl-hourglass-fill {
  0% { transform: scaleY(0.12); }
  55%, 100% { transform: scaleY(1); }
}`},{id:"pl-radar",name:"Radar Sweep",category:"loaders",description:"A green radar disc spins a glowing sweep wedge while two blips ping their echoes back.",tags:["radar","sweep","ping"],html:'<div class="fx-pl-radar"><span class="fx-pl-radar-sweep"></span><span class="fx-pl-radar-blip"></span><span class="fx-pl-radar-blip fx-pl-radar-blip-b"></span></div>',css:`.fx-pl-radar {
  position: relative;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 2px solid rgba(52, 211, 153, 0.45);
  overflow: hidden;
  background: radial-gradient(circle, rgba(52, 211, 153, 0.14), rgba(52, 211, 153, 0.03));
}
.fx-pl-radar-sweep {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(from 0deg, rgba(52, 211, 153, 0.55), rgba(52, 211, 153, 0) 75deg);
  animation: fx-pl-radar-spin 2.6s linear infinite;
}
.fx-pl-radar::before {
  content: "";
  position: absolute;
  inset: 26px;
  border-radius: 50%;
  border: 1px solid rgba(52, 211, 153, 0.3);
}
.fx-pl-radar-blip {
  position: absolute;
  top: 32px;
  left: 72px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d399;
  opacity: 0.6;
  animation: fx-pl-radar-ping 2.6s ease-out infinite;
}
.fx-pl-radar-blip-b {
  top: 74px;
  left: 30px;
  animation-delay: 1.3s;
}
@keyframes fx-pl-radar-spin {
  to { transform: rotate(360deg); }
}
@keyframes fx-pl-radar-ping {
  0% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7); opacity: 1; }
  70% { box-shadow: 0 0 0 16px rgba(52, 211, 153, 0); opacity: 1; }
  100% { box-shadow: 0 0 0 0 rgba(52, 211, 153, 0); opacity: 0.6; }
}`},{id:"pl-grid-wave",name:"Grid Wave",category:"loaders",description:"A three-by-three panel of tiles pulses bright in a diagonal wave that rolls corner to corner.",tags:["grid","wave","tiles"],html:'<div class="fx-pl-grid-wave"><span class="fx-pl-grid-wave-cell"></span><span class="fx-pl-grid-wave-cell"></span><span class="fx-pl-grid-wave-cell"></span><span class="fx-pl-grid-wave-cell"></span><span class="fx-pl-grid-wave-cell"></span><span class="fx-pl-grid-wave-cell"></span><span class="fx-pl-grid-wave-cell"></span><span class="fx-pl-grid-wave-cell"></span><span class="fx-pl-grid-wave-cell"></span></div>',css:`.fx-pl-grid-wave {
  display: grid;
  grid-template-columns: repeat(3, 26px);
  gap: 8px;
}
.fx-pl-grid-wave-cell {
  width: 26px;
  height: 26px;
  border-radius: 7px;
  background: #1e293b;
  transform: scale(0.75);
  animation: fx-pl-grid-wave-pulse 1.6s ease-in-out infinite;
}
.fx-pl-grid-wave-cell:nth-child(1) { animation-delay: 0s; }
.fx-pl-grid-wave-cell:nth-child(2),
.fx-pl-grid-wave-cell:nth-child(4) { animation-delay: 0.16s; }
.fx-pl-grid-wave-cell:nth-child(3),
.fx-pl-grid-wave-cell:nth-child(5),
.fx-pl-grid-wave-cell:nth-child(7) { animation-delay: 0.32s; }
.fx-pl-grid-wave-cell:nth-child(6),
.fx-pl-grid-wave-cell:nth-child(8) { animation-delay: 0.48s; }
.fx-pl-grid-wave-cell:nth-child(9) { animation-delay: 0.64s; }
@keyframes fx-pl-grid-wave-pulse {
  0%, 100% { transform: scale(0.75); background: #1e293b; }
  35% { transform: scale(1); background: #22d3ee; }
}`},{id:"pl-pacman",name:"Pacman Munch",category:"loaders",description:"A chomping arcade mouth runs down the lane, eats three pellets one by one, then resets for another pass.",tags:["pacman","arcade","chomp"],html:'<div class="fx-pl-pacman"><span class="fx-pl-pacman-mouth"></span><span class="fx-pl-pacman-dot"></span><span class="fx-pl-pacman-dot"></span><span class="fx-pl-pacman-dot"></span></div>',css:`.fx-pl-pacman {
  position: relative;
  width: 172px;
  height: 44px;
}
.fx-pl-pacman-mouth {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fbbf24;
  clip-path: polygon(50% 50%, 100% 32%, 100% 0, 0 0, 0 100%, 100% 100%, 100% 68%);
  animation: fx-pl-pacman-run 4.2s linear infinite, fx-pl-pacman-chomp 0.5s ease-in-out infinite;
}
.fx-pl-pacman-dot {
  position: absolute;
  top: 18px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #ec4899;
}
.fx-pl-pacman-dot:nth-child(2) { left: 106px; animation: fx-pl-pacman-eat-a 4.2s linear infinite; }
.fx-pl-pacman-dot:nth-child(3) { left: 130px; animation: fx-pl-pacman-eat-b 4.2s linear infinite; }
.fx-pl-pacman-dot:nth-child(4) { left: 154px; animation: fx-pl-pacman-eat-c 4.2s linear infinite; }
@keyframes fx-pl-pacman-run {
  0%, 6% { transform: translateX(0); }
  82%, 100% { transform: translateX(128px); }
}
@keyframes fx-pl-pacman-chomp {
  0%, 100% { clip-path: polygon(50% 50%, 100% 48%, 100% 0, 0 0, 0 100%, 100% 100%, 100% 52%); }
  50% { clip-path: polygon(50% 50%, 100% 18%, 100% 0, 0 0, 0 100%, 100% 100%, 100% 82%); }
}
@keyframes fx-pl-pacman-eat-a {
  0%, 36% { transform: scale(1); opacity: 1; }
  42%, 100% { transform: scale(0); opacity: 0; }
}
@keyframes fx-pl-pacman-eat-b {
  0%, 48% { transform: scale(1); opacity: 1; }
  54%, 100% { transform: scale(0); opacity: 0; }
}
@keyframes fx-pl-pacman-eat-c {
  0%, 60% { transform: scale(1); opacity: 1; }
  66%, 100% { transform: scale(0); opacity: 0; }
}`},{id:"pl-eclipse",name:"Eclipse Orbit",category:"loaders",description:"A blazing amber disc circles the rim of a shadowed disc, grazing its edge like a solar eclipse on loop.",tags:["eclipse","orbit","glow"],html:'<div class="fx-pl-eclipse"><span class="fx-pl-eclipse-dark"></span><span class="fx-pl-eclipse-orbit"><span class="fx-pl-eclipse-sun"></span></span></div>',css:`.fx-pl-eclipse {
  position: relative;
  width: 100px;
  height: 100px;
}
.fx-pl-eclipse-dark {
  position: absolute;
  inset: 16px;
  border-radius: 50%;
  background: #1e293b;
  border: 2px solid rgba(148, 163, 184, 0.3);
  box-shadow: inset 0 0 18px rgba(34, 211, 238, 0.15);
}
.fx-pl-eclipse-orbit {
  position: absolute;
  inset: 0;
  animation: fx-pl-eclipse-spin 3s linear infinite;
}
.fx-pl-eclipse-sun {
  position: absolute;
  top: -6px;
  left: 35px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fbbf24;
  box-shadow: 0 0 16px rgba(251, 191, 36, 0.75);
}
@keyframes fx-pl-eclipse-spin {
  to { transform: rotate(360deg); }
}`},{id:"pl-drop-stack",name:"Drop Stack",category:"loaders",description:"Three colored slabs fall from above, bounce once, and stack into a neat pile before clearing for the next round.",tags:["stack","drop","bounce"],html:'<div class="fx-pl-drop-stack"><span class="fx-pl-drop-stack-bar"></span><span class="fx-pl-drop-stack-bar"></span><span class="fx-pl-drop-stack-bar"></span></div>',css:`.fx-pl-drop-stack {
  position: relative;
  width: 64px;
  height: 60px;
}
.fx-pl-drop-stack-bar {
  position: absolute;
  left: 10px;
  width: 44px;
  height: 11px;
  border-radius: 6px;
  opacity: 0;
  animation: fx-pl-drop-stack-fall 2.4s ease-in-out infinite;
}
.fx-pl-drop-stack-bar:nth-child(1) { bottom: 0; background: #22d3ee; }
.fx-pl-drop-stack-bar:nth-child(2) { bottom: 14px; background: #a78bfa; animation-delay: 0.25s; }
.fx-pl-drop-stack-bar:nth-child(3) { bottom: 28px; background: #ec4899; animation-delay: 0.5s; }
@keyframes fx-pl-drop-stack-fall {
  0% { transform: translateY(-52px); opacity: 0; }
  32% { transform: translateY(0); opacity: 1; }
  42% { transform: translateY(-7px); }
  50%, 86% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(0); opacity: 0; }
}`},{id:"pl-sonar",name:"Sonar Ping",category:"loaders",description:"Concentric rings ripple outward from a glowing cyan core like sonar pulses crossing deep water.",tags:["sonar","ping","rings"],html:'<div class="fx-pl-sonar"><span class="fx-pl-sonar-core"></span><span class="fx-pl-sonar-ring"></span><span class="fx-pl-sonar-ring"></span><span class="fx-pl-sonar-ring"></span></div>',css:`.fx-pl-sonar {
  position: relative;
  width: 92px;
  height: 92px;
}
.fx-pl-sonar-core {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 50%;
  background: #22d3ee;
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.8);
}
.fx-pl-sonar-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 14px;
  height: 14px;
  margin: -7px 0 0 -7px;
  border-radius: 50%;
  border: 2px solid #22d3ee;
  opacity: 0;
  animation: fx-pl-sonar-ping 2.4s cubic-bezier(0.2, 0.4, 0.4, 1) infinite;
}
.fx-pl-sonar-ring:nth-child(3) { animation-delay: 0.8s; }
.fx-pl-sonar-ring:nth-child(4) { animation-delay: 1.6s; }
@keyframes fx-pl-sonar-ping {
  0% { transform: scale(1); opacity: 0.85; }
  100% { transform: scale(6.5); opacity: 0; }
}`},{id:"pl-windmill",name:"Windmill Flutter",category:"loaders",description:"Six pastel blades spin like a windmill while each one flutters on its own slightly offset phase.",tags:["windmill","spin","blades"],html:'<div class="fx-pl-windmill"><span class="fx-pl-windmill-blade"></span><span class="fx-pl-windmill-blade"></span><span class="fx-pl-windmill-blade"></span><span class="fx-pl-windmill-blade"></span><span class="fx-pl-windmill-blade"></span><span class="fx-pl-windmill-blade"></span></div>',css:`.fx-pl-windmill {
  position: relative;
  width: 68px;
  height: 68px;
  animation: fx-pl-windmill-spin 4.5s linear infinite;
}
.fx-pl-windmill-blade {
  position: absolute;
  left: 30px;
  bottom: 34px;
  width: 8px;
  height: 30px;
  border-radius: 4px;
  transform-origin: 50% 100%;
  background: #22d3ee;
  --a: 0deg;
  animation: fx-pl-windmill-sway 1.4s ease-in-out infinite;
}
.fx-pl-windmill-blade:nth-child(2) { --a: 60deg; background: #a78bfa; animation-delay: -0.12s; }
.fx-pl-windmill-blade:nth-child(3) { --a: 120deg; background: #ec4899; animation-delay: -0.24s; }
.fx-pl-windmill-blade:nth-child(4) { --a: 180deg; background: #fbbf24; animation-delay: -0.36s; }
.fx-pl-windmill-blade:nth-child(5) { --a: 240deg; background: #34d399; animation-delay: -0.48s; }
.fx-pl-windmill-blade:nth-child(6) { --a: 300deg; background: #f07025; animation-delay: -0.6s; }
@keyframes fx-pl-windmill-sway {
  0%, 100% { transform: rotate(calc(var(--a) - 11deg)); }
  50% { transform: rotate(calc(var(--a) + 11deg)); }
}
@keyframes fx-pl-windmill-spin {
  to { transform: rotate(360deg); }
}`},{id:"pl-helix",name:"Helix Strand",category:"loaders",description:"Two strands of dots rise and fall out of phase, weaving a floating DNA ladder in mid-air.",tags:["helix","dna","strand"],html:'<div class="fx-pl-helix"><div class="fx-pl-helix-strand"><span class="fx-pl-helix-dot"></span><span class="fx-pl-helix-dot"></span><span class="fx-pl-helix-dot"></span><span class="fx-pl-helix-dot"></span></div><div class="fx-pl-helix-strand fx-pl-helix-strand-b"><span class="fx-pl-helix-dot"></span><span class="fx-pl-helix-dot"></span><span class="fx-pl-helix-dot"></span><span class="fx-pl-helix-dot"></span></div></div>',css:`.fx-pl-helix {
  display: flex;
  gap: 26px;
  height: 92px;
  align-items: center;
}
.fx-pl-helix-strand {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.fx-pl-helix-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #22d3ee;
  animation: fx-pl-helix-rise 2.1s linear infinite;
}
.fx-pl-helix-strand-b .fx-pl-helix-dot {
  background: #ec4899;
}
.fx-pl-helix-strand .fx-pl-helix-dot:nth-child(2) { animation-delay: -0.18s; }
.fx-pl-helix-strand .fx-pl-helix-dot:nth-child(3) { animation-delay: -0.36s; }
.fx-pl-helix-strand .fx-pl-helix-dot:nth-child(4) { animation-delay: -0.54s; }
.fx-pl-helix-strand-b .fx-pl-helix-dot:nth-child(1) { animation-delay: -1.05s; }
.fx-pl-helix-strand-b .fx-pl-helix-dot:nth-child(2) { animation-delay: -1.23s; }
.fx-pl-helix-strand-b .fx-pl-helix-dot:nth-child(3) { animation-delay: -1.41s; }
.fx-pl-helix-strand-b .fx-pl-helix-dot:nth-child(4) { animation-delay: -1.59s; }
@keyframes fx-pl-helix-rise {
  0% { transform: translateY(22px); opacity: 0; }
  20%, 80% { opacity: 1; }
  100% { transform: translateY(-22px); opacity: 0; }
}`},{id:"pl-gooey-blobs",name:"Gooey Blobs",category:"loaders",description:"Two vivid blobs drift toward each other, melt into one rounded shape, then pull apart and start over.",tags:["gooey","blob","merge"],html:'<div class="fx-pl-gooey-blobs"><span class="fx-pl-gooey-blobs-blob fx-pl-gooey-blobs-blob-a"></span><span class="fx-pl-gooey-blobs-blob fx-pl-gooey-blobs-blob-b"></span></div>',css:`.fx-pl-gooey-blobs {
  position: relative;
  width: 120px;
  height: 56px;
}
.fx-pl-gooey-blobs-blob {
  position: absolute;
  top: 8px;
  width: 40px;
  height: 40px;
  opacity: 0.85;
}
.fx-pl-gooey-blobs-blob-a {
  left: 8px;
  background: #ec4899;
  animation: fx-pl-gooey-blobs-meet-a 2.8s ease-in-out infinite, fx-pl-gooey-blobs-morph 2.8s ease-in-out infinite;
}
.fx-pl-gooey-blobs-blob-b {
  right: 8px;
  background: #a78bfa;
  animation: fx-pl-gooey-blobs-meet-b 2.8s ease-in-out infinite, fx-pl-gooey-blobs-morph 2.8s ease-in-out infinite;
}
@keyframes fx-pl-gooey-blobs-meet-a {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(28px); }
}
@keyframes fx-pl-gooey-blobs-meet-b {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-28px); }
}
@keyframes fx-pl-gooey-blobs-morph {
  0%, 100% { border-radius: 58% 42% 55% 45% / 48% 60% 40% 52%; }
  50% { border-radius: 50%; }
}`},{id:"pl-tumble",name:"Tumble Roll",category:"loaders",description:"A rounded orange square tumbles end over end down a short line, then rolls back the other way.",tags:["tumble","roll","cube"],html:'<div class="fx-pl-tumble"><span class="fx-pl-tumble-cube"></span></div>',css:`.fx-pl-tumble {
  position: relative;
  width: 130px;
  height: 44px;
}
.fx-pl-tumble::after {
  content: "";
  position: absolute;
  bottom: 2px;
  left: 8px;
  width: 114px;
  height: 2px;
  border-radius: 2px;
  background: rgba(148, 163, 184, 0.25);
}
.fx-pl-tumble-cube {
  position: absolute;
  bottom: 6px;
  left: 50px;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: #f07025;
  box-shadow: 0 0 14px rgba(240, 112, 37, 0.5);
  animation: fx-pl-tumble-roll 2.6s ease-in-out infinite;
}
@keyframes fx-pl-tumble-roll {
  0% { transform: translateX(-46px) rotate(0deg); }
  12.5% { transform: translateX(-23px) rotate(90deg); }
  25% { transform: translateX(0px) rotate(180deg); }
  37.5% { transform: translateX(23px) rotate(270deg); }
  50% { transform: translateX(46px) rotate(360deg); }
  62.5% { transform: translateX(23px) rotate(270deg); }
  75% { transform: translateX(0px) rotate(180deg); }
  87.5% { transform: translateX(-23px) rotate(90deg); }
  100% { transform: translateX(-46px) rotate(0deg); }
}`},{id:"pl-orbit-square",name:"Square Orbit",category:"loaders",description:"A glowing cyan dot patrols the perimeter of a square track without ever slowing down.",tags:["orbit","square","patrol"],html:'<div class="fx-pl-orbit-square"><span class="fx-pl-orbit-square-dot"></span></div>',css:`.fx-pl-orbit-square {
  position: relative;
  width: 66px;
  height: 66px;
  border: 2px solid rgba(148, 163, 184, 0.35);
  border-radius: 10px;
}
.fx-pl-orbit-square-dot {
  position: absolute;
  top: -6px;
  left: -6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #22d3ee;
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.8);
  animation: fx-pl-orbit-square-patrol 3.4s linear infinite;
}
@keyframes fx-pl-orbit-square-patrol {
  0% { transform: translate(0, 0); }
  25% { transform: translate(62px, 0); }
  50% { transform: translate(62px, 62px); }
  75% { transform: translate(0, 62px); }
  100% { transform: translate(0, 0); }
}`},{id:"pl-scan-beam",name:"Scan Beam",category:"loaders",description:"A luminous cyan beam glides up and down a dark rail like a scanner reading a page.",tags:["scan","beam","glow"],html:'<div class="fx-pl-scan-beam"><span class="fx-pl-scan-beam-rail"></span><span class="fx-pl-scan-beam-light"></span></div>',css:`.fx-pl-scan-beam {
  position: relative;
  width: 64px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fx-pl-scan-beam-rail {
  width: 6px;
  height: 88px;
  border-radius: 4px;
  background: rgba(148, 163, 184, 0.18);
}
.fx-pl-scan-beam-light {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 52px;
  height: 7px;
  margin: -3.5px 0 0 -26px;
  border-radius: 4px;
  background: #22d3ee;
  box-shadow: 0 0 14px rgba(34, 211, 238, 0.8), 0 0 30px rgba(34, 211, 238, 0.35);
  animation: fx-pl-scan-beam-sweep 1.9s ease-in-out infinite alternate;
}
@keyframes fx-pl-scan-beam-sweep {
  from { transform: translateY(-40px); }
  to { transform: translateY(40px); }
}`},{id:"pl-spinner-dots",name:"Spinner Dots",category:"loaders",description:"Eight dots around a circle ignite one by one in a crisp iOS-style chase around the dial.",tags:["spinner","dots","sequence"],html:'<div class="fx-pl-spinner-dots"><span class="fx-pl-spinner-dots-dot"></span><span class="fx-pl-spinner-dots-dot"></span><span class="fx-pl-spinner-dots-dot"></span><span class="fx-pl-spinner-dots-dot"></span><span class="fx-pl-spinner-dots-dot"></span><span class="fx-pl-spinner-dots-dot"></span><span class="fx-pl-spinner-dots-dot"></span><span class="fx-pl-spinner-dots-dot"></span></div>',css:`.fx-pl-spinner-dots {
  position: relative;
  width: 64px;
  height: 64px;
}
.fx-pl-spinner-dots-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 9px;
  height: 9px;
  margin: -4.5px 0 0 -4.5px;
  border-radius: 50%;
  background: #f07025;
  opacity: 0.2;
  animation: fx-pl-spinner-dots-glow 1.4s linear infinite;
}
.fx-pl-spinner-dots-dot:nth-child(1) { transform: rotate(0deg) translateY(-25px); }
.fx-pl-spinner-dots-dot:nth-child(2) { transform: rotate(45deg) translateY(-25px); animation-delay: 0.13s; }
.fx-pl-spinner-dots-dot:nth-child(3) { transform: rotate(90deg) translateY(-25px); animation-delay: 0.26s; }
.fx-pl-spinner-dots-dot:nth-child(4) { transform: rotate(135deg) translateY(-25px); animation-delay: 0.39s; }
.fx-pl-spinner-dots-dot:nth-child(5) { transform: rotate(180deg) translateY(-25px); animation-delay: 0.52s; }
.fx-pl-spinner-dots-dot:nth-child(6) { transform: rotate(225deg) translateY(-25px); animation-delay: 0.65s; }
.fx-pl-spinner-dots-dot:nth-child(7) { transform: rotate(270deg) translateY(-25px); animation-delay: 0.78s; }
.fx-pl-spinner-dots-dot:nth-child(8) { transform: rotate(315deg) translateY(-25px); animation-delay: 0.91s; }
@keyframes fx-pl-spinner-dots-glow {
  0%, 10%, 100% { opacity: 0.2; }
  5% { opacity: 1; }
}`},{id:"pl-fill-bar",name:"Fill Drain Bar",category:"loaders",description:"A pill-shaped track fills with a hot gradient, pauses at full, then drains back for the next pass.",tags:["progress","bar","gradient"],html:'<div class="fx-pl-fill-bar"><span class="fx-pl-fill-bar-level"></span></div>',css:`.fx-pl-fill-bar {
  width: 132px;
  height: 16px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.14);
  border: 1px solid rgba(148, 163, 184, 0.25);
  overflow: hidden;
}
.fx-pl-fill-bar-level {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #f07025, #ec4899, #a78bfa);
  transform-origin: left center;
  transform: scaleX(0);
  animation: fx-pl-fill-bar-pour 2.8s ease-in-out infinite;
}
.fx-pl-fill-bar-level::after {
  content: "";
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.85);
}
@keyframes fx-pl-fill-bar-pour {
  0% { transform: scaleX(0); }
  42%, 58% { transform: scaleX(1); }
  100% { transform: scaleX(0); }
}`},{id:"pl-squash-ball",name:"Squash Ball",category:"loaders",description:"A green ball bounces with cartoon squash and stretch while its shadow swells and fades beneath it.",tags:["bounce","squash","physics"],html:'<div class="fx-pl-squash-ball"><span class="fx-pl-squash-ball-body"></span><span class="fx-pl-squash-ball-shadow"></span></div>',css:`.fx-pl-squash-ball {
  position: relative;
  width: 70px;
  height: 92px;
}
.fx-pl-squash-ball-body {
  position: absolute;
  bottom: 16px;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-radius: 50%;
  background: #34d399;
  box-shadow: 0 0 14px rgba(52, 211, 153, 0.5);
  transform-origin: 50% 100%;
  animation: fx-pl-squash-ball-hop 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.fx-pl-squash-ball-shadow {
  position: absolute;
  bottom: 4px;
  left: 50%;
  width: 30px;
  height: 8px;
  margin-left: -15px;
  border-radius: 50%;
  background: rgba(2, 6, 23, 0.75);
  animation: fx-pl-squash-ball-shadow-pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes fx-pl-squash-ball-hop {
  0%, 100% { transform: translateY(-48px) scale(0.94, 1.06); }
  46% { transform: translateY(0) scale(1); }
  50% { transform: translateY(0) scale(1.3, 0.7); }
  54% { transform: translateY(0) scale(1); }
}
@keyframes fx-pl-squash-ball-shadow-pulse {
  0%, 100% { transform: scale(0.45); opacity: 0.35; }
  50% { transform: scale(1); opacity: 0.7; }
}`},{id:"pl-chain-wave",name:"Chain Wave",category:"loaders",description:"Three linked rings pass a lift along the chain like energy traveling from link to link.",tags:["chain","links","wave"],html:'<div class="fx-pl-chain-wave"><span class="fx-pl-chain-wave-link"></span><span class="fx-pl-chain-wave-link"></span><span class="fx-pl-chain-wave-link"></span></div>',css:`.fx-pl-chain-wave {
  display: flex;
  align-items: center;
}
.fx-pl-chain-wave-link {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 4px solid #22d3ee;
  animation: fx-pl-chain-wave-lift 1.6s ease-in-out infinite;
}
.fx-pl-chain-wave-link:nth-child(2) {
  margin: 0 -8px;
  border-color: #a78bfa;
  animation-delay: 0.2s;
}
.fx-pl-chain-wave-link:nth-child(3) {
  border-color: #ec4899;
  animation-delay: 0.4s;
}
@keyframes fx-pl-chain-wave-lift {
  0%, 100% { transform: translateY(0); }
  30% { transform: translateY(-16px); }
}`},{id:"pl-ticks",name:"Tick Chase",category:"loaders",description:"A ring of clock ticks stays calm while one amber tick sprints around the dial forever.",tags:["ticks","chase","ring"],html:'<div class="fx-pl-ticks"><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-mark"></span><span class="fx-pl-ticks-runner"></span></div>',css:`.fx-pl-ticks {
  position: relative;
  width: 76px;
  height: 76px;
}
.fx-pl-ticks-mark {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3px;
  height: 11px;
  margin: -5.5px 0 0 -1.5px;
  border-radius: 2px;
  background: rgba(148, 163, 184, 0.4);
}
.fx-pl-ticks-mark:nth-child(1) { transform: rotate(0deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(2) { transform: rotate(30deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(3) { transform: rotate(60deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(4) { transform: rotate(90deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(5) { transform: rotate(120deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(6) { transform: rotate(150deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(7) { transform: rotate(180deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(8) { transform: rotate(210deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(9) { transform: rotate(240deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(10) { transform: rotate(270deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(11) { transform: rotate(300deg) translateY(-30px); }
.fx-pl-ticks-mark:nth-child(12) { transform: rotate(330deg) translateY(-30px); }
.fx-pl-ticks-runner {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 14px;
  margin: -7px 0 0 -2px;
  border-radius: 2px;
  background: #fbbf24;
  box-shadow: 0 0 10px rgba(251, 191, 36, 0.8);
  animation: fx-pl-ticks-chase 2.6s linear infinite;
}
@keyframes fx-pl-ticks-chase {
  from { transform: rotate(0deg) translateY(-30px); }
  to { transform: rotate(360deg) translateY(-30px); }
}`},{id:"pl-shapeshift",name:"Shapeshift Morph",category:"loaders",description:"A gradient shape morphs from circle to rounded square to pill while hue-rotating through the spectrum.",tags:["morph","shape","hue"],html:'<div class="fx-pl-shapeshift"><span class="fx-pl-shapeshift-core"></span></div>',css:`.fx-pl-shapeshift {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
}
.fx-pl-shapeshift-core {
  width: 46px;
  height: 46px;
  background: linear-gradient(135deg, #ec4899, #a78bfa);
  box-shadow: 0 0 20px rgba(236, 72, 153, 0.45);
  animation: fx-pl-shapeshift-morph 3.2s ease-in-out infinite, fx-pl-shapeshift-hue 3.2s linear infinite;
}
@keyframes fx-pl-shapeshift-morph {
  0%, 100% { width: 46px; height: 46px; border-radius: 50%; }
  34% { width: 46px; height: 46px; border-radius: 11px; }
  67% { width: 68px; height: 30px; border-radius: 15px; }
}
@keyframes fx-pl-shapeshift-hue {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}`},{id:"pt-liquid-text",name:"Liquid Fill Text",category:"text",description:"The word starts hollow and fills from the bottom with a warm liquid gradient while hovered, like a glass filling up.",tags:["hover","gradient","fill"],html:'<span class="fx-pt-liquid-text">Liquid</span>',css:`.fx-pt-liquid-text {
  font-size: 48px;
  font-weight: 800;
  cursor: pointer;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.22);
  background-image: linear-gradient(
    180deg,
    rgba(251, 191, 36, 0) 0%,
    rgba(251, 191, 36, 0) 38%,
    #fbbf24 52%,
    #f07025 74%,
    #ec4899 100%
  );
  background-size: 100% 230%;
  background-position: 0 0;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  transition: background-position 1.5s ease-in-out;
}
.fx-pt-liquid-text:hover {
  background-position: 0 100%;
}`},{id:"pt-rgb-split",name:"RGB Split Jitter",category:"text",description:"Pink and cyan copies of the word drift apart and jitter in choppy steps on hover, mimicking chromatic aberration.",tags:["hover","glitch","chromatic"],html:'<span class="fx-pt-rgb-split" data-text="Chroma">Chroma</span>',css:`.fx-pt-rgb-split {
  position: relative;
  display: inline-block;
  font-size: 48px;
  font-weight: 800;
  color: #f8fafc;
  cursor: pointer;
}
.fx-pt-rgb-split::before,
.fx-pt-rgb-split::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  opacity: 0.85;
  pointer-events: none;
  transition: transform 0.2s ease;
}
.fx-pt-rgb-split::before {
  color: #ec4899;
  transform: translate(-3px, -2px);
}
.fx-pt-rgb-split::after {
  color: #22d3ee;
  transform: translate(3px, 2px);
}
.fx-pt-rgb-split:hover::before {
  animation: fx-pt-rgb-split-jitter-a 0.6s steps(2, end) infinite;
}
.fx-pt-rgb-split:hover::after {
  animation: fx-pt-rgb-split-jitter-b 0.6s steps(2, end) infinite;
}
@keyframes fx-pt-rgb-split-jitter-a {
  0% { transform: translate(-6px, -3px); }
  50% { transform: translate(-3px, 3px); }
  100% { transform: translate(-7px, 1px); }
}
@keyframes fx-pt-rgb-split-jitter-b {
  0% { transform: translate(6px, 3px); }
  50% { transform: translate(3px, -3px); }
  100% { transform: translate(7px, -1px); }
}`},{id:"pt-sign-flicker",name:"Neon Sign Flicker",category:"text",description:"Each neon letter dims and re-ignites on its own irregular schedule, like a tired sign on a rainy street.",tags:["neon","flicker","glow","loop"],html:'<span class="fx-pt-sign-flicker"><span class="fx-pt-sign-flicker-ch">O</span><span class="fx-pt-sign-flicker-ch">P</span><span class="fx-pt-sign-flicker-ch">E</span><span class="fx-pt-sign-flicker-ch">N</span></span>',css:`.fx-pt-sign-flicker {
  display: inline-flex;
  gap: 8px;
}
.fx-pt-sign-flicker-ch {
  font-size: 52px;
  font-weight: 800;
  color: #d9fbff;
  text-shadow: 0 0 8px #22d3ee, 0 0 22px rgba(34, 211, 238, 0.75),
    0 0 48px rgba(34, 211, 238, 0.4);
  animation: fx-pt-sign-flicker-dim 3.6s linear infinite;
}
.fx-pt-sign-flicker-ch:nth-child(2) { animation-duration: 4.2s; animation-delay: -1.3s; }
.fx-pt-sign-flicker-ch:nth-child(3) { animation-duration: 3.1s; animation-delay: -2.4s; }
.fx-pt-sign-flicker-ch:nth-child(4) { animation-duration: 4.7s; animation-delay: -0.6s; }
@keyframes fx-pt-sign-flicker-dim {
  0%, 100% { opacity: 1; }
  4% { opacity: 0.2; }
  6% { opacity: 0.9; }
  8% { opacity: 0.3; }
  11% { opacity: 1; }
  62% { opacity: 1; }
  64% { opacity: 0.5; }
  66% { opacity: 1; }
}`},{id:"pt-breathe-space",name:"Breathing Letter Space",category:"text",description:"The tracking of the word slowly expands and contracts in a calm breathing rhythm while a violet glow swells with it.",tags:["spacing","loop","minimal"],html:'<span class="fx-pt-breathe-space">Space</span>',css:`.fx-pt-breathe-space {
  font-size: 46px;
  font-weight: 700;
  letter-spacing: 8px;
  color: #a78bfa;
  text-shadow: 0 0 24px rgba(167, 139, 250, 0.45);
  animation: fx-pt-breathe-space-open 3.8s ease-in-out infinite;
}
@keyframes fx-pt-breathe-space-open {
  0%, 100% {
    letter-spacing: 8px;
    opacity: 0.7;
    text-shadow: 0 0 24px rgba(167, 139, 250, 0.45);
  }
  50% {
    letter-spacing: 22px;
    opacity: 1;
    text-shadow: 0 0 36px rgba(167, 139, 250, 0.8);
  }
}`},{id:"pt-slide-mask",name:"Sliding Word Mask",category:"text",description:"Two words share one overflow-hidden slot and take turns sliding up into view in an endless, seamless loop.",tags:["loop","mask","slide"],html:'<span class="fx-pt-slide-mask"><span class="fx-pt-slide-mask-word">Rise</span><span class="fx-pt-slide-mask-word">Shine</span></span>',css:`.fx-pt-slide-mask {
  display: inline-block;
  overflow: hidden;
  height: 60px;
}
.fx-pt-slide-mask-word {
  display: block;
  height: 60px;
  line-height: 60px;
  font-size: 44px;
  font-weight: 800;
  color: #22d3ee;
  animation: fx-pt-slide-mask-cycle 4s cubic-bezier(0.7, 0, 0.3, 1) infinite;
}
.fx-pt-slide-mask-word + .fx-pt-slide-mask-word {
  margin-top: -60px;
  color: #ec4899;
  animation-delay: -2s;
}
@keyframes fx-pt-slide-mask-cycle {
  0%, 40% { transform: translateY(0); }
  50%, 90% {
    transform: translateY(-60px);
    animation-timing-function: steps(1, end);
  }
  91% { transform: translateY(60px); }
  100% { transform: translateY(0); }
}`},{id:"pt-outline-fill",name:"Outline Fill Hover",category:"text",description:"A hollow outlined word floods with a green-to-cyan gradient from left to right for as long as it is hovered.",tags:["hover","outline","fill"],html:'<span class="fx-pt-outline-fill">Hollow</span>',css:`.fx-pt-outline-fill {
  display: inline-block;
  padding: 0 6px;
  font-size: 48px;
  font-weight: 800;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px #34d399;
  background-image: linear-gradient(90deg, #34d399, #22d3ee);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  background-position: 0 0;
  -webkit-background-clip: text;
  background-clip: text;
  cursor: pointer;
  transition: background-size 0.9s cubic-bezier(0.65, 0, 0.35, 1);
}
.fx-pt-outline-fill:hover {
  background-size: 100% 100%;
}`},{id:"pt-fire-text",name:"Fire Glow Text",category:"text",description:"A hot amber-to-pink gradient word with a blurred flame glow underneath that flickers and licks like real fire.",tags:["gradient","glow","fire","loop"],html:'<span class="fx-pt-fire-text" data-text="Flame">Flame</span>',css:`.fx-pt-fire-text {
  position: relative;
  z-index: 0;
  font-size: 50px;
  font-weight: 900;
  background: linear-gradient(180deg, #fbbf24 8%, #f07025 52%, #ec4899 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.fx-pt-fire-text::before {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  z-index: -1;
  color: #f07025;
  -webkit-text-fill-color: #f07025;
  filter: blur(16px);
  animation: fx-pt-fire-text-burn 1.7s ease-in-out infinite;
}
@keyframes fx-pt-fire-text-burn {
  0%, 100% { opacity: 0.5; transform: translateY(3px) scaleY(0.94); }
  35% { opacity: 0.95; transform: translateY(-2px) scaleY(1.05); }
  70% { opacity: 0.7; transform: translateY(5px) scaleY(0.97); }
}`},{id:"pt-rainbow-letters",name:"Rainbow Hue Letters",category:"text",description:"Every letter spins through the full hue wheel on a staggered delay, producing a rolling rainbow across the word.",tags:["loop","color","letters"],html:'<span class="fx-pt-rainbow-letters"><span class="fx-pt-rainbow-letters-ch">P</span><span class="fx-pt-rainbow-letters-ch">r</span><span class="fx-pt-rainbow-letters-ch">i</span><span class="fx-pt-rainbow-letters-ch">s</span><span class="fx-pt-rainbow-letters-ch">m</span></span>',css:`.fx-pt-rainbow-letters {
  display: inline-flex;
}
.fx-pt-rainbow-letters-ch {
  display: inline-block;
  font-size: 48px;
  font-weight: 800;
  color: #f07025;
  animation: fx-pt-rainbow-letters-cycle 3.6s linear infinite;
}
.fx-pt-rainbow-letters-ch:nth-child(2) { animation-delay: -0.6s; }
.fx-pt-rainbow-letters-ch:nth-child(3) { animation-delay: -1.2s; }
.fx-pt-rainbow-letters-ch:nth-child(4) { animation-delay: -1.8s; }
.fx-pt-rainbow-letters-ch:nth-child(5) { animation-delay: -2.4s; }
@keyframes fx-pt-rainbow-letters-cycle {
  from { filter: hue-rotate(0deg); }
  to { filter: hue-rotate(360deg); }
}`},{id:"pt-sweep-glow",name:"Sweeping Light Glow",category:"text",description:"A bright radial spotlight glides across violet-to-pink gradient letters over and over, leaving them glowing.",tags:["loop","glow","sweep","gradient"],html:'<span class="fx-pt-sweep-glow">Gleam</span>',css:`.fx-pt-sweep-glow {
  font-size: 48px;
  font-weight: 800;
  background-image: radial-gradient(closest-side, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    linear-gradient(90deg, #a78bfa, #ec4899);
  background-size: 90px 100%, 100% 100%;
  background-position: -120px 0, 0 0;
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fx-pt-sweep-glow-move 2.6s linear infinite;
}
@keyframes fx-pt-sweep-glow-move {
  0% { background-position: -120px 0, 0 0; }
  100% { background-position: 520px 0, 0 0; }
}`},{id:"pt-stack-echo",name:"Stacked Echo Layers",category:"text",description:"Orange and pink echo layers sit behind the word and spring further apart whenever the cursor arrives.",tags:["hover","layers","3d"],html:'<span class="fx-pt-stack-echo" data-text="Stack">Stack</span>',css:`.fx-pt-stack-echo {
  position: relative;
  z-index: 0;
  display: inline-block;
  font-size: 48px;
  font-weight: 900;
  color: #fbbf24;
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-pt-stack-echo::before,
.fx-pt-stack-echo::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  z-index: -1;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-pt-stack-echo::before {
  color: #f07025;
  transform: translate(5px, 5px);
}
.fx-pt-stack-echo::after {
  color: #ec4899;
  transform: translate(10px, 10px);
}
.fx-pt-stack-echo:hover {
  transform: translate(-5px, -5px);
}
.fx-pt-stack-echo:hover::before {
  transform: translate(9px, 9px);
}
.fx-pt-stack-echo:hover::after {
  transform: translate(16px, 16px);
}`},{id:"pt-jelly-letters",name:"Jelly Letter Bounce",category:"text",description:"Letters take turns squashing and overshooting like jelly, sending a soft ripple across the word in a loop.",tags:["loop","bounce","letters","squash"],html:'<span class="fx-pt-jelly-letters"><span class="fx-pt-jelly-letters-ch">W</span><span class="fx-pt-jelly-letters-ch">o</span><span class="fx-pt-jelly-letters-ch">b</span><span class="fx-pt-jelly-letters-ch">b</span><span class="fx-pt-jelly-letters-ch">l</span><span class="fx-pt-jelly-letters-ch">e</span></span>',css:`.fx-pt-jelly-letters {
  display: inline-flex;
}
.fx-pt-jelly-letters-ch {
  display: inline-block;
  font-size: 46px;
  font-weight: 800;
  color: #34d399;
  transform-origin: 50% 100%;
  animation: fx-pt-jelly-letters-bounce 2.4s ease-in-out infinite;
}
.fx-pt-jelly-letters-ch:nth-child(2) { animation-delay: 0.14s; }
.fx-pt-jelly-letters-ch:nth-child(3) { animation-delay: 0.28s; }
.fx-pt-jelly-letters-ch:nth-child(4) { animation-delay: 0.42s; }
.fx-pt-jelly-letters-ch:nth-child(5) { animation-delay: 0.56s; }
.fx-pt-jelly-letters-ch:nth-child(6) { animation-delay: 0.7s; }
@keyframes fx-pt-jelly-letters-bounce {
  0%, 52%, 100% { transform: translateY(0) scale(1, 1); }
  60% { transform: translateY(-14px) scale(0.94, 1.14); }
  68% { transform: translateY(0) scale(1.12, 0.84); }
  76% { transform: translateY(-6px) scale(0.98, 1.05); }
  84% { transform: translateY(0) scale(1.04, 0.96); }
}`},{id:"pt-flip-word",name:"Flipping Word Card",category:"text",description:"The word rotates around its X axis every few seconds, revealing a mirrored pink back face before flipping home.",tags:["loop","flip","3d"],html:'<span class="fx-pt-flip-word"><span class="fx-pt-flip-word-core" data-text="Twist">Twist</span></span>',css:`.fx-pt-flip-word {
  display: inline-block;
  perspective: 700px;
}
.fx-pt-flip-word-core {
  position: relative;
  display: inline-block;
  font-size: 48px;
  font-weight: 900;
  color: #22d3ee;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  animation: fx-pt-flip-word-turn 4.4s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}
.fx-pt-flip-word-core::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  color: #ec4899;
  transform: rotateX(180deg);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
@keyframes fx-pt-flip-word-turn {
  0%, 30% { transform: rotateX(0deg); }
  40%, 80% { transform: rotateX(180deg); }
  90%, 100% { transform: rotateX(360deg); }
}`},{id:"pt-type-erase",name:"Type and Erase Loop",category:"text",description:"A monospace line types one word letter by letter, erases it, then types a second word, with a blinking caret riding the whole time.",tags:["typing","loop","caret"],html:'<span class="fx-pt-type-erase"><span class="fx-pt-type-erase-stack"><span class="fx-pt-type-erase-word">Code</span><span class="fx-pt-type-erase-word fx-pt-type-erase-word-alt">Erase</span></span><span class="fx-pt-type-erase-caret"></span></span>',css:`.fx-pt-type-erase {
  display: inline-flex;
  align-items: center;
  font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
  font-size: 38px;
  font-weight: 700;
}
.fx-pt-type-erase-stack {
  display: inline-grid;
  justify-items: start;
}
.fx-pt-type-erase-word {
  grid-area: 1 / 1;
  white-space: nowrap;
  overflow: hidden;
  width: 0ch;
  color: #22d3ee;
  animation: fx-pt-type-erase-a 8s linear infinite;
}
.fx-pt-type-erase-word-alt {
  color: #fbbf24;
  animation-name: fx-pt-type-erase-b;
}
.fx-pt-type-erase-caret {
  width: 4px;
  height: 0.9em;
  margin-left: 4px;
  background: #ec4899;
  animation: fx-pt-type-erase-ride 8s linear infinite,
    fx-pt-type-erase-blink 0.9s linear infinite;
}
@keyframes fx-pt-type-erase-a {
  0% { width: 0ch; animation-timing-function: steps(4, end); }
  10% { width: 4ch; }
  30% { width: 4ch; animation-timing-function: steps(4, end); }
  40%, 100% { width: 0ch; }
}
@keyframes fx-pt-type-erase-b {
  0%, 40% { width: 0ch; }
  50% { width: 0ch; animation-timing-function: steps(5, end); }
  60% { width: 5ch; }
  80% { width: 5ch; animation-timing-function: steps(5, end); }
  90%, 100% { width: 0ch; }
}
@keyframes fx-pt-type-erase-ride {
  0% { transform: translateX(-5ch); animation-timing-function: steps(4, end); }
  10% { transform: translateX(-1ch); }
  30% { transform: translateX(-1ch); animation-timing-function: steps(4, end); }
  40% { transform: translateX(-5ch); }
  50% { transform: translateX(-5ch); animation-timing-function: steps(5, end); }
  60% { transform: translateX(0ch); }
  80% { transform: translateX(0ch); animation-timing-function: steps(5, end); }
  90%, 100% { transform: translateX(-5ch); }
}
@keyframes fx-pt-type-erase-blink {
  0%, 55% { opacity: 1; }
  56%, 100% { opacity: 0.15; }
}`},{id:"pt-echo-bounce",name:"Bouncing Echo Trail",category:"text",description:"The word hops while a pink echo copy follows the motion a beat behind, like a rubber-stamp trail.",tags:["loop","bounce","shadow"],html:'<span class="fx-pt-echo-bounce" data-text="Bounce">Bounce</span>',css:`.fx-pt-echo-bounce {
  position: relative;
  z-index: 0;
  display: inline-block;
  font-size: 48px;
  font-weight: 900;
  color: #fbbf24;
  transform-origin: 50% 100%;
  animation: fx-pt-echo-bounce-hop 1.5s cubic-bezier(0.35, 0, 0.4, 1) infinite;
}
.fx-pt-echo-bounce::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  z-index: -1;
  color: #ec4899;
  opacity: 0.75;
  transform-origin: 50% 100%;
  animation: fx-pt-echo-bounce-hop 1.5s cubic-bezier(0.35, 0, 0.4, 1) infinite;
  animation-delay: 0.16s;
}
@keyframes fx-pt-echo-bounce-hop {
  0%, 100% { transform: translateY(0) scale(1, 1); }
  38% { transform: translateY(-30px) scale(0.96, 1.06); }
  62% { transform: translateY(0) scale(1.08, 0.86); }
  78% { transform: translateY(-8px) scale(0.99, 1.02); }
  90% { transform: translateY(0) scale(1, 1); }
}`},{id:"pt-italic-snap",name:"Italic Snap Hover",category:"text",description:"On hover the word snaps into a sharp italic skew with a springy overshoot, then relaxes back when the cursor leaves.",tags:["hover","skew","spring"],html:'<span class="fx-pt-italic-snap">Snap</span>',css:`.fx-pt-italic-snap {
  display: inline-block;
  font-size: 48px;
  font-weight: 800;
  color: #a78bfa;
  cursor: pointer;
  transform: skewX(0deg);
  transition: transform 0.5s cubic-bezier(0.34, 2, 0.64, 1), color 0.3s ease,
    text-shadow 0.3s ease;
}
.fx-pt-italic-snap:hover {
  transform: skewX(-14deg) translateX(6px);
  color: #ec4899;
  text-shadow: 0 0 26px rgba(236, 72, 153, 0.55);
}`},{id:"pt-glow-halo",name:"Pulsing Glow Halo",category:"text",description:"A soft violet halo breathes behind the word while a thin cyan ring keeps pinging outward around it.",tags:["glow","pulse","loop","halo"],html:'<span class="fx-pt-glow-halo">Halo</span>',css:`.fx-pt-glow-halo {
  position: relative;
  z-index: 0;
  display: inline-block;
  font-size: 48px;
  font-weight: 800;
  color: #f8fafc;
  text-shadow: 0 0 18px rgba(167, 139, 250, 0.6);
}
.fx-pt-glow-halo::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  margin: -75px 0 0 -75px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(167, 139, 250, 0.55) 0%, rgba(167, 139, 250, 0.16) 48%, transparent 70%);
  z-index: -1;
  animation: fx-pt-glow-halo-pulse 3s ease-in-out infinite;
}
.fx-pt-glow-halo::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 120px;
  margin: -60px 0 0 -60px;
  border: 2px solid rgba(34, 211, 238, 0.5);
  border-radius: 50%;
  z-index: -1;
  animation: fx-pt-glow-halo-ring 3s ease-out infinite;
}
@keyframes fx-pt-glow-halo-pulse {
  0%, 100% { transform: scale(0.75); opacity: 0.55; }
  50% { transform: scale(1.25); opacity: 1; }
}
@keyframes fx-pt-glow-halo-ring {
  0% { transform: scale(0.4); opacity: 0.9; }
  100% { transform: scale(1.9); opacity: 0; }
}`},{id:"pt-stitch-label",name:"Embroidered Stitch Label",category:"text",description:"A patch-style label with dashed thread borders, embossed stitching shadows and a slow sheen traveling across the fabric.",tags:["label","dashed","shimmer","loop"],html:'<span class="fx-pt-stitch-label">Stitch</span>',css:`.fx-pt-stitch-label {
  position: relative;
  display: inline-block;
  overflow: hidden;
  padding: 12px 30px;
  font-size: 34px;
  font-weight: 700;
  letter-spacing: 4px;
  color: #fbbf24;
  background: rgba(251, 191, 36, 0.07);
  border: 2px dashed #fbbf24;
  border-radius: 12px;
  outline: 2px dashed rgba(251, 191, 36, 0.35);
  outline-offset: 5px;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.55), 0 -1px 0 rgba(255, 255, 255, 0.12);
}
.fx-pt-stitch-label::before {
  content: "";
  position: absolute;
  top: -30%;
  left: -70%;
  width: 34%;
  height: 160%;
  background: linear-gradient(105deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%);
  transform: skewX(-20deg);
  animation: fx-pt-stitch-label-sheen 3.4s ease-in-out infinite;
}
@keyframes fx-pt-stitch-label-sheen {
  0% { left: -70%; }
  55%, 100% { left: 130%; }
}`},{id:"pt-split-reveal",name:"Split Reveal Hover",category:"text",description:"Cyan and pink halves of the word slide apart horizontally on hover, exposing the solid amber core underneath.",tags:["hover","clip-path","reveal"],html:'<span class="fx-pt-split-reveal" data-text="Split">Split</span>',css:`.fx-pt-split-reveal {
  position: relative;
  display: inline-block;
  font-size: 48px;
  font-weight: 900;
  color: #fbbf24;
  cursor: pointer;
}
.fx-pt-split-reveal::before,
.fx-pt-split-reveal::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  transition: transform 0.45s cubic-bezier(0.7, 0, 0.3, 1);
}
.fx-pt-split-reveal::before {
  color: #22d3ee;
  clip-path: inset(0 0 50% 0);
}
.fx-pt-split-reveal::after {
  color: #ec4899;
  clip-path: inset(50% 0 0 0);
}
.fx-pt-split-reveal:hover::before {
  transform: translateX(-34px);
}
.fx-pt-split-reveal:hover::after {
  transform: translateX(34px);
}`},{id:"pt-squiggle-underline",name:"Squiggle Underline Scroll",category:"text",description:"A wavy cyan squiggle crawls endlessly beneath the word like a thread being sewn along the baseline.",tags:["loop","underline","wavy"],html:'<span class="fx-pt-squiggle-underline">Wavy</span>',css:`.fx-pt-squiggle-underline {
  position: relative;
  display: inline-block;
  padding-bottom: 14px;
  font-size: 46px;
  font-weight: 800;
  color: #f8fafc;
}
.fx-pt-squiggle-underline::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 10px;
  background-image: radial-gradient(circle at 5px 11px, transparent 4px, #22d3ee 4px, #22d3ee 6px, transparent 6px);
  background-size: 10px 10px;
  background-repeat: repeat-x;
  animation: fx-pt-squiggle-underline-crawl 0.9s linear infinite;
}
@keyframes fx-pt-squiggle-underline-crawl {
  from { background-position-x: 0; }
  to { background-position-x: 10px; }
}`},{id:"pt-slice-glitch",name:"Slice Glitch Loop",category:"text",description:"Clip-path slices of the word jump sideways in uneven steps before snapping back into place, looping forever.",tags:["glitch","clip-path","loop"],html:'<span class="fx-pt-slice-glitch" data-text="Shatter">Shatter</span>',css:`.fx-pt-slice-glitch {
  position: relative;
  display: inline-block;
  font-size: 48px;
  font-weight: 800;
  color: #e2e8f0;
}
.fx-pt-slice-glitch::before,
.fx-pt-slice-glitch::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.fx-pt-slice-glitch::before {
  color: #22d3ee;
  clip-path: inset(0 0 55% 0);
  animation: fx-pt-slice-glitch-top 3.2s steps(1, end) infinite;
}
.fx-pt-slice-glitch::after {
  color: #ec4899;
  clip-path: inset(62% 0 0 0);
  animation: fx-pt-slice-glitch-bottom 3.2s steps(1, end) infinite;
}
@keyframes fx-pt-slice-glitch-top {
  0%, 20%, 63%, 90%, 100% { transform: translateX(0); }
  12% { transform: translateX(-9px); }
  16% { transform: translateX(7px); }
  55% { transform: translateX(-12px); }
  59% { transform: translateX(5px); }
  86% { transform: translateX(8px); }
}
@keyframes fx-pt-slice-glitch-bottom {
  0%, 22%, 65%, 92%, 100% { transform: translateX(0); }
  14% { transform: translateX(8px); }
  18% { transform: translateX(-6px); }
  57% { transform: translateX(10px); }
  61% { transform: translateX(-4px); }
  88% { transform: translateX(-7px); }
}`},{id:"pt-candy-shadow",name:"Candy Hard Shadow",category:"text",description:"A chunky pink display word with a hard cyan shadow; on hover the shadow travels to the other side while the word squashes.",tags:["hover","shadow","chunky"],html:'<span class="fx-pt-candy-shadow">Candy</span>',css:`.fx-pt-candy-shadow {
  display: inline-block;
  font-size: 50px;
  font-weight: 900;
  color: #ec4899;
  text-shadow: 7px 7px 0 #22d3ee;
  cursor: pointer;
  transition: text-shadow 0.35s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-pt-candy-shadow:hover {
  text-shadow: -7px 7px 0 #fbbf24;
  transform: scale(1.06, 0.9) rotate(-2deg);
}`},{id:"ph-glare-sweep",name:"Glare Sweep Card",category:"hover",description:"A diagonal glare beam streaks across the glass surface on hover while the card lifts.",tags:["hover","glare","glass","light"],html:'<div class="fx-ph-glare-sweep"><h3>Glare Sweep</h3><p>Hover and a beam of light streaks past.</p></div>',css:`.fx-ph-glare-sweep {
  position: relative;
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #f8fafc;
  overflow: hidden;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.35);
  transition: transform 0.4s ease, border-color 0.4s ease;
}
.fx-ph-glare-sweep h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-glare-sweep p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-glare-sweep::after {
  content: "";
  position: absolute;
  top: -70%;
  left: -30%;
  width: 50%;
  height: 240%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.45), transparent);
  transform: rotate(22deg) translateX(-260%);
  transition: transform 0.55s ease;
  pointer-events: none;
}
.fx-ph-glare-sweep:hover {
  transform: translateY(-4px);
  border-color: rgba(34, 211, 238, 0.55);
}
.fx-ph-glare-sweep:hover::after {
  transform: rotate(22deg) translateX(260%);
}`},{id:"ph-chase-border",name:"Chase Border Card",category:"hover",description:"Three tiny bright dots orbit the card border nonstop and flare up on hover.",tags:["hover","border","orbit","dots"],html:'<div class="fx-ph-chase-border"><h3>Chase Border</h3><p>Three bright dots chase along the edge.</p></div>',css:`@property --fx-ph-chase-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
.fx-ph-chase-border {
  position: relative;
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: #131c30;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #f8fafc;
  transition: transform 0.4s ease, border-color 0.4s ease;
}
.fx-ph-chase-border h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-chase-border p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-chase-border::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  --fx-ph-chase-angle: 0deg;
  background: conic-gradient(
    from var(--fx-ph-chase-angle),
    #22d3ee 0deg 24deg,
    transparent 24deg 120deg,
    #ec4899 120deg 144deg,
    transparent 144deg 240deg,
    #fbbf24 240deg 264deg,
    transparent 264deg 360deg
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0.45;
  animation: fx-ph-chase-border-spin 3s linear infinite;
  transition: opacity 0.4s ease, filter 0.4s ease;
  pointer-events: none;
}
.fx-ph-chase-border:hover {
  transform: translateY(-4px);
  border-color: rgba(34, 211, 238, 0.4);
}
.fx-ph-chase-border:hover::before {
  opacity: 1;
  filter: drop-shadow(0 0 6px rgba(34, 211, 238, 0.8));
}
@keyframes fx-ph-chase-border-spin {
  to {
    --fx-ph-chase-angle: 360deg;
  }
}`},{id:"ph-glass-deep",name:"Deep Glass Card",category:"hover",description:"The frosted glass deepens its blur, lifts gently and brightens its violet border on hover.",tags:["hover","glass","blur","frosted"],html:'<div class="fx-ph-glass-deep"><h3>Deep Glass</h3><p>Hover to thicken the frosted blur.</p></div>',css:`.fx-ph-glass-deep {
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  color: #f8fafc;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s ease, background 0.4s ease, border-color 0.4s ease,
    box-shadow 0.4s ease, backdrop-filter 0.4s ease;
}
.fx-ph-glass-deep h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-glass-deep p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-glass-deep:hover {
  transform: translateY(-6px);
  background: rgba(255, 255, 255, 0.13);
  border-color: rgba(167, 139, 250, 0.75);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45),
    0 0 26px rgba(167, 139, 250, 0.28);
}`},{id:"ph-fan-stack",name:"Fan Stack Card",category:"hover",description:"Two hidden layers fan out behind the card like spread playing cards on hover.",tags:["hover","3d","stack","layers"],html:'<div class="fx-ph-fan-stack"><h3>Fan Stack</h3><p>Hover to fan out the hidden layers.</p></div>',css:`.fx-ph-fan-stack {
  position: relative;
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(160deg, #1f2a44, #131c30);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #f8fafc;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
}
.fx-ph-fan-stack h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-fan-stack p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-fan-stack::before,
.fx-ph-fan-stack::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 1px solid rgba(255, 255, 255, 0.16);
  z-index: -1;
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.fx-ph-fan-stack::before {
  background: linear-gradient(150deg, rgba(240, 112, 37, 0.65), rgba(236, 72, 153, 0.5));
}
.fx-ph-fan-stack::after {
  background: linear-gradient(150deg, rgba(34, 211, 238, 0.6), rgba(167, 139, 250, 0.5));
}
.fx-ph-fan-stack:hover {
  border-color: rgba(255, 255, 255, 0.35);
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);
}
.fx-ph-fan-stack:hover::before {
  transform: rotate(-6deg) translate(-12px, 2px);
}
.fx-ph-fan-stack:hover::after {
  transform: rotate(6deg) translate(12px, 2px);
}`},{id:"ph-slide-panel",name:"Slide Up Panel",category:"hover",description:"A bold orange-pink action tray slides up over the lower half of the card on hover.",tags:["hover","panel","slide","action"],html:'<div class="fx-ph-slide-panel"><h3>Slide Panel</h3><p>Hover to raise the action tray.</p><div class="fx-ph-slide-panel-tray">View Project &#8594;</div></div>',css:`.fx-ph-slide-panel {
  position: relative;
  overflow: hidden;
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(160deg, #1c2740, #121a2e);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f8fafc;
  transition: transform 0.4s ease, border-color 0.4s ease;
}
.fx-ph-slide-panel h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-slide-panel p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-slide-panel-tray {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #f07025, #ec4899);
  color: #0b1120;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  transform: translateY(101%);
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.fx-ph-slide-panel:hover {
  transform: translateY(-3px);
  border-color: rgba(240, 112, 37, 0.6);
}
.fx-ph-slide-panel:hover .fx-ph-slide-panel-tray {
  transform: translateY(0);
}`},{id:"ph-corner-brackets",name:"Corner Brackets Card",category:"hover",description:"Four L-shaped green brackets draw in toward the card corners on hover.",tags:["hover","brackets","corners","frame"],html:'<div class="fx-ph-corner-brackets"><h3>Corner Brackets</h3><p>Hover to draw the brackets in.</p></div>',css:`.fx-ph-corner-brackets {
  position: relative;
  width: 240px;
  padding: 20px;
  border-radius: 12px;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f8fafc;
  transition: transform 0.4s ease, border-color 0.4s ease;
}
.fx-ph-corner-brackets h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-corner-brackets p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-corner-brackets::before,
.fx-ph-corner-brackets::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  transition: background-size 0.35s ease;
}
.fx-ph-corner-brackets::before {
  background:
    linear-gradient(#34d399, #34d399) left top no-repeat,
    linear-gradient(#34d399, #34d399) left top no-repeat,
    linear-gradient(#34d399, #34d399) right bottom no-repeat,
    linear-gradient(#34d399, #34d399) right bottom no-repeat;
  background-size: 0 0, 0 0, 0 0, 0 0;
}
.fx-ph-corner-brackets::after {
  background:
    linear-gradient(#34d399, #34d399) right top no-repeat,
    linear-gradient(#34d399, #34d399) right top no-repeat,
    linear-gradient(#34d399, #34d399) left bottom no-repeat,
    linear-gradient(#34d399, #34d399) left bottom no-repeat;
  background-size: 0 0, 0 0, 0 0, 0 0;
}
.fx-ph-corner-brackets:hover {
  transform: translateY(-3px);
  border-color: rgba(52, 211, 153, 0.55);
}
.fx-ph-corner-brackets:hover::before,
.fx-ph-corner-brackets:hover::after {
  background-size: 20px 2px, 2px 20px, 20px 2px, 2px 20px;
}`},{id:"ph-ripple-card",name:"Ripple Pulse Card",category:"hover",description:"Concentric cyan rings ripple outward from the card center on hover.",tags:["hover","ripple","rings","pulse"],html:'<div class="fx-ph-ripple-card"><h3>Ripple Pulse</h3><p>Hover and rings ripple outward.</p></div>',css:`.fx-ph-ripple-card {
  position: relative;
  overflow: hidden;
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(160deg, #16233c, #101a2e);
  border: 1px solid rgba(34, 211, 238, 0.35);
  color: #f8fafc;
  transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
}
.fx-ph-ripple-card h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-ripple-card p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-ripple-card::before,
.fx-ph-ripple-card::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  margin: -30px 0 0 -30px;
  border: 2px solid rgba(34, 211, 238, 0.8);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.fx-ph-ripple-card:hover {
  transform: translateY(-3px);
  border-color: rgba(34, 211, 238, 0.7);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4), 0 0 20px rgba(34, 211, 238, 0.2);
}
.fx-ph-ripple-card:hover::before {
  animation: fx-ph-ripple-card-ripple 1.4s ease-out infinite;
}
.fx-ph-ripple-card:hover::after {
  animation: fx-ph-ripple-card-ripple 1.4s ease-out 0.7s infinite;
}
@keyframes fx-ph-ripple-card-ripple {
  0% {
    transform: scale(0.4);
    opacity: 0.9;
  }
  100% {
    transform: scale(3.2);
    opacity: 0;
  }
}`},{id:"ph-hue-shift",name:"Hue Shift Card",category:"hover",description:"The vivid gradient face rotates its hues through 60 degrees on hover.",tags:["hover","gradient","hue","color"],html:'<div class="fx-ph-hue-shift"><h3>Hue Shift</h3><p>Hover to spin the gradient hues.</p></div>',css:`.fx-ph-hue-shift {
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(130deg, #f07025, #ec4899 48%, #a78bfa);
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #ffffff;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.35);
  transition: filter 0.45s ease, transform 0.45s ease, border-color 0.45s ease;
}
.fx-ph-hue-shift h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 800;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
}
.fx-ph-hue-shift p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
}
.fx-ph-hue-shift:hover {
  filter: hue-rotate(60deg) saturate(1.4);
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.7);
}`},{id:"ph-inner-zoom",name:"Inner Zoom Frame",category:"hover",description:"The framed artwork inside the card zooms closer on hover while the frame holds still.",tags:["hover","zoom","frame","scale"],html:'<div class="fx-ph-inner-zoom"><div class="fx-ph-inner-zoom-frame"><span class="fx-ph-inner-zoom-art"></span><span class="fx-ph-inner-zoom-dot"></span></div><h3>Inner Zoom</h3><p>Hover to zoom the framed art.</p></div>',css:`.fx-ph-inner-zoom {
  width: 240px;
  padding: 18px;
  border-radius: 14px;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #f8fafc;
  transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
}
.fx-ph-inner-zoom-frame {
  position: relative;
  height: 46px;
  margin-bottom: 10px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(34, 211, 238, 0.4);
  background: #0d1526;
}
.fx-ph-inner-zoom-art {
  position: absolute;
  inset: -10%;
  background: repeating-linear-gradient(
    45deg,
    rgba(34, 211, 238, 0.55) 0 8px,
    rgba(167, 139, 250, 0.55) 8px 16px
  );
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.fx-ph-inner-zoom-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  margin: -6px 0 0 -6px;
  border-radius: 50%;
  background: #fbbf24;
  box-shadow: 0 0 10px rgba(251, 191, 36, 0.8);
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.fx-ph-inner-zoom h3 {
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-inner-zoom p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-inner-zoom:hover {
  transform: translateY(-3px);
  border-color: rgba(34, 211, 238, 0.55);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
}
.fx-ph-inner-zoom:hover .fx-ph-inner-zoom-art {
  transform: scale(1.12);
}
.fx-ph-inner-zoom:hover .fx-ph-inner-zoom-dot {
  transform: scale(1.2);
}`},{id:"ph-long-shadow",name:"Long Diffuse Shadow",category:"hover",description:"The card lifts and a long diffuse colored shadow spreads far beneath it on hover.",tags:["hover","shadow","lift","depth"],html:'<div class="fx-ph-long-shadow"><h3>Long Shadow</h3><p>Hover to lift into a long glow.</p></div>',css:`.fx-ph-long-shadow {
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(160deg, #1f2a44, #131c30);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f8fafc;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.35);
  transition: transform 0.4s ease, box-shadow 0.45s ease, border-color 0.4s ease;
}
.fx-ph-long-shadow h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-long-shadow p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-long-shadow:hover {
  transform: translateY(-12px);
  border-color: rgba(240, 112, 37, 0.5);
  box-shadow: 0 42px 60px -18px rgba(240, 112, 37, 0.42),
    0 24px 40px -20px rgba(236, 72, 153, 0.32);
}`},{id:"ph-accent-bar",name:"Accent Bar Card",category:"hover",description:"A glowing orange-pink bar slides in along the left edge and shines on hover.",tags:["hover","bar","accent","glow"],html:'<div class="fx-ph-accent-bar"><h3>Accent Bar</h3><p>Hover to slide in the glowing bar.</p></div>',css:`.fx-ph-accent-bar {
  position: relative;
  overflow: hidden;
  width: 240px;
  padding: 20px 20px 20px 26px;
  border-radius: 14px;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f8fafc;
  transition: transform 0.4s ease, border-color 0.4s ease;
}
.fx-ph-accent-bar h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-accent-bar p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-accent-bar::before {
  content: "";
  position: absolute;
  left: 0;
  top: 14px;
  bottom: 14px;
  width: 4px;
  border-radius: 0 4px 4px 0;
  background: linear-gradient(180deg, #f07025, #ec4899);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}
.fx-ph-accent-bar:hover {
  transform: translateX(6px);
  border-color: rgba(240, 112, 37, 0.55);
}
.fx-ph-accent-bar:hover::before {
  transform: scaleY(1);
  box-shadow: 0 0 14px rgba(240, 112, 37, 0.8);
}`},{id:"ph-gradient-wipe",name:"Gradient Wipe Card",category:"hover",description:"A cyan-violet gradient wash wipes diagonally across the card face on hover.",tags:["hover","gradient","wipe","overlay"],html:'<div class="fx-ph-gradient-wipe"><h3>Gradient Wipe</h3><p>Hover to wipe color across the face.</p></div>',css:`.fx-ph-gradient-wipe {
  position: relative;
  overflow: hidden;
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(160deg, #1c2740, #121a2e);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f8fafc;
  transition: transform 0.4s ease, border-color 0.4s ease;
}
.fx-ph-gradient-wipe h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-gradient-wipe p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-gradient-wipe::after {
  content: "";
  position: absolute;
  inset: -20%;
  background: linear-gradient(
    120deg,
    transparent 30%,
    rgba(34, 211, 238, 0.35) 45%,
    rgba(167, 139, 250, 0.35) 55%,
    transparent 70%
  );
  transform: translateX(-110%);
  transition: transform 0.5s ease;
  pointer-events: none;
}
.fx-ph-gradient-wipe:hover {
  transform: translateY(-3px);
  border-color: rgba(167, 139, 250, 0.55);
}
.fx-ph-gradient-wipe:hover::after {
  transform: translateX(110%);
}`},{id:"ph-spring-rotate",name:"Spring Rotate Card",category:"hover",description:"The card springs into a slight rotation with a playful overshoot on hover.",tags:["hover","spring","rotate","bounce"],html:'<div class="fx-ph-spring-rotate"><h3>Spring Rotate</h3><p>Hover for a springy little tilt.</p></div>',css:`.fx-ph-spring-rotate {
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(160deg, rgba(167, 139, 250, 0.14), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(167, 139, 250, 0.35);
  color: #f8fafc;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.45s ease;
}
.fx-ph-spring-rotate h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: #d8ccff;
}
.fx-ph-spring-rotate p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-spring-rotate:hover {
  transform: rotate(-3deg) scale(1.06);
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.45),
    0 0 24px rgba(167, 139, 250, 0.35);
}`},{id:"ph-dash-glow",name:"Dashed Glow Border",category:"hover",description:"The dashed amber border fuses into a solid glowing frame on hover.",tags:["hover","border","dashed","glow"],html:'<div class="fx-ph-dash-glow"><h3>Dash Glow</h3><p>Hover to fuse the border into light.</p></div>',css:`.fx-ph-dash-glow {
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 2px dashed rgba(251, 191, 36, 0.55);
  color: #f8fafc;
  transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease,
    transform 0.4s ease;
}
.fx-ph-dash-glow h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: #fde68a;
}
.fx-ph-dash-glow p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-dash-glow:hover {
  border-style: solid;
  border-color: #fbbf24;
  background: rgba(251, 191, 36, 0.1);
  box-shadow: 0 0 24px rgba(251, 191, 36, 0.35),
    0 12px 28px rgba(0, 0, 0, 0.4);
  transform: translateY(-4px);
}`},{id:"ph-arrow-cta",name:"Arrow CTA Card",category:"hover",description:"A round arrow chip slides in from the right while the title shifts left on hover.",tags:["hover","arrow","cta","chip"],html:'<div class="fx-ph-arrow-cta"><h3>Arrow CTA</h3><p>Hover to summon the arrow chip.</p><span class="fx-ph-arrow-cta-chip">&#8594;</span></div>',css:`.fx-ph-arrow-cta {
  position: relative;
  width: 240px;
  padding: 20px 58px 20px 20px;
  border-radius: 14px;
  background: linear-gradient(160deg, rgba(251, 191, 36, 0.12), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(251, 191, 36, 0.35);
  color: #f8fafc;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
}
.fx-ph-arrow-cta h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-ph-arrow-cta p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-arrow-cta-chip {
  position: absolute;
  right: 14px;
  top: 22px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fbbf24, #f07025);
  color: #0b1120;
  font-size: 16px;
  font-weight: 800;
  opacity: 0;
  transform: translateX(18px) scale(0.5);
  transition: opacity 0.35s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fx-ph-arrow-cta:hover {
  border-color: rgba(251, 191, 36, 0.7);
  box-shadow: 0 0 22px rgba(251, 191, 36, 0.25),
    0 12px 28px rgba(0, 0, 0, 0.4);
}
.fx-ph-arrow-cta:hover h3 {
  transform: translateX(-14px);
}
.fx-ph-arrow-cta:hover .fx-ph-arrow-cta-chip {
  opacity: 1;
  transform: translateX(0) scale(1);
}`},{id:"ph-half-flip",name:"Half Split Reveal",category:"hover",description:"The top and bottom halves slide apart to reveal a glowing color core on hover.",tags:["hover","split","reveal","core"],html:'<div class="fx-ph-half-flip"><div class="fx-ph-half-flip-core"><span>Hello!</span></div><div class="fx-ph-half-flip-top"><h3>Half Split</h3></div><div class="fx-ph-half-flip-bottom"><p>Hover to part the halves.</p></div></div>',css:`.fx-ph-half-flip {
  position: relative;
  width: 240px;
  height: 118px;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #f8fafc;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
}
.fx-ph-half-flip-core {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 50% 45%, rgba(255, 255, 255, 0.3), transparent 55%),
    linear-gradient(135deg, #22d3ee, #a78bfa);
}
.fx-ph-half-flip-core span {
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #0b1120;
}
.fx-ph-half-flip-top,
.fx-ph-half-flip-bottom {
  position: absolute;
  left: 0;
  right: 0;
  height: 50%;
  display: flex;
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}
.fx-ph-half-flip-top {
  top: 0;
  align-items: flex-end;
  padding: 0 20px 6px;
  background: linear-gradient(160deg, #26314b, #1a2439);
}
.fx-ph-half-flip-bottom {
  bottom: 0;
  align-items: flex-start;
  padding: 6px 20px 0;
  background: linear-gradient(20deg, #223052, #16203a);
}
.fx-ph-half-flip-top h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-half-flip-bottom p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-half-flip:hover {
  border-color: rgba(34, 211, 238, 0.6);
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.25);
}
.fx-ph-half-flip:hover .fx-ph-half-flip-top {
  transform: translateY(-100%);
}
.fx-ph-half-flip:hover .fx-ph-half-flip-bottom {
  transform: translateY(100%);
}`},{id:"ph-icon-pop",name:"Icon Pop Badge",category:"hover",description:"A golden circular badge bounces in above the title with a springy overshoot on hover.",tags:["hover","icon","badge","bounce"],html:'<div class="fx-ph-icon-pop"><div class="fx-ph-icon-pop-slot"><span class="fx-ph-icon-pop-badge">&#10022;</span></div><h3>Icon Pop</h3><p>Hover to bounce the badge in.</p></div>',css:`.fx-ph-icon-pop {
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  text-align: center;
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f8fafc;
  transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
}
.fx-ph-icon-pop-slot {
  max-height: 0;
  margin-bottom: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  transition: max-height 0.35s ease, margin-bottom 0.35s ease;
}
.fx-ph-icon-pop-badge {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fbbf24, #f07025);
  color: #0b1120;
  font-size: 18px;
  font-weight: 700;
  box-shadow: 0 6px 16px rgba(251, 191, 36, 0.4);
  transform: scale(0) rotate(-40deg);
  transition: transform 0.45s cubic-bezier(0.34, 1.7, 0.64, 1) 0.05s;
}
.fx-ph-icon-pop h3 {
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-icon-pop p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-icon-pop:hover {
  transform: translateY(-4px);
  border-color: rgba(251, 191, 36, 0.6);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.4);
}
.fx-ph-icon-pop:hover .fx-ph-icon-pop-slot {
  max-height: 46px;
  margin-bottom: 10px;
}
.fx-ph-icon-pop:hover .fx-ph-icon-pop-badge {
  transform: scale(1) rotate(0deg);
}`},{id:"ph-ambient-sheen",name:"Ambient Sheen Card",category:"hover",description:"A soft sheen drifts across the glass continuously and brightens on hover.",tags:["hover","sheen","glass","ambient"],html:'<div class="fx-ph-ambient-sheen"><h3>Ambient Sheen</h3><p>A slow light drifts and brightens.</p></div>',css:`.fx-ph-ambient-sheen {
  position: relative;
  overflow: hidden;
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  color: #f8fafc;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
}
.fx-ph-ambient-sheen h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-ambient-sheen p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-ambient-sheen::before {
  content: "";
  position: absolute;
  top: -30%;
  bottom: -30%;
  left: -60%;
  width: 45%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.16), transparent);
  transform: skewX(-18deg);
  opacity: 0.5;
  animation: fx-ph-ambient-sheen-drift 4.5s linear infinite;
  transition: opacity 0.4s ease;
  pointer-events: none;
}
.fx-ph-ambient-sheen:hover {
  transform: translateY(-4px);
  border-color: rgba(34, 211, 238, 0.6);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(34, 211, 238, 0.2);
}
.fx-ph-ambient-sheen:hover::before {
  opacity: 1;
}
@keyframes fx-ph-ambient-sheen-drift {
  from {
    transform: skewX(-18deg) translateX(0);
  }
  to {
    transform: skewX(-18deg) translateX(360%);
  }
}`},{id:"ph-glow-ring",name:"Glow Ring Pulse",category:"hover",description:"A green glow ring pulses outward around the card edges on hover.",tags:["hover","glow","ring","pulse"],html:'<div class="fx-ph-glow-ring"><h3>Glow Ring</h3><p>Hover to pulse the halo outward.</p></div>',css:`.fx-ph-glow-ring {
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(160deg, rgba(52, 211, 153, 0.1), rgba(255, 255, 255, 0.03));
  border: 1px solid rgba(52, 211, 153, 0.4);
  color: #f8fafc;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.35);
  transition: transform 0.4s ease, border-color 0.4s ease;
}
.fx-ph-glow-ring h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
  color: #a7f3d0;
}
.fx-ph-glow-ring p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-glow-ring:hover {
  transform: translateY(-4px);
  border-color: rgba(52, 211, 153, 0.85);
  animation: fx-ph-glow-ring-pulse 1.6s ease-in-out infinite;
}
@keyframes fx-ph-glow-ring-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.35),
      0 8px 22px rgba(0, 0, 0, 0.35);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(52, 211, 153, 0.18),
      0 0 36px 6px rgba(52, 211, 153, 0.45);
  }
}`},{id:"ph-shadow-stack",name:"Shadow Stack Card",category:"hover",description:"Stacked cyan, pink and orange shadows cascade beneath the card on hover.",tags:["hover","shadow","stack","color"],html:'<div class="fx-ph-shadow-stack"><h3>Shadow Stack</h3><p>Hover to cascade colored shadows.</p></div>',css:`.fx-ph-shadow-stack {
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(160deg, #1f2a44, #131c30);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #f8fafc;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.35);
  transition: transform 0.4s ease, box-shadow 0.45s ease, border-color 0.4s ease;
}
.fx-ph-shadow-stack h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-shadow-stack p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-shadow-stack:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 0 -1px rgba(34, 211, 238, 0.55),
    0 12px 0 -3px rgba(236, 72, 153, 0.45),
    0 22px 0 -5px rgba(240, 112, 37, 0.4),
    0 34px 46px -12px rgba(0, 0, 0, 0.55);
}`},{id:"ph-tilt-glide",name:"Tilt Glide Parallax",category:"hover",description:"The card glides toward the top-right while its content counter-drifts for parallax depth on hover.",tags:["hover","parallax","glide","depth"],html:'<div class="fx-ph-tilt-glide"><div class="fx-ph-tilt-glide-inner"><h3>Tilt Glide</h3><p>Hover to drift with parallax.</p></div></div>',css:`.fx-ph-tilt-glide {
  width: 240px;
  padding: 20px;
  border-radius: 14px;
  background: linear-gradient(150deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03));
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: #f8fafc;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
  transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
}
.fx-ph-tilt-glide-inner {
  transition: transform 0.4s ease;
}
.fx-ph-tilt-glide h3 {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 700;
}
.fx-ph-tilt-glide p {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: #cbd5e1;
}
.fx-ph-tilt-glide:hover {
  transform: translate(6px, -6px);
  border-color: rgba(34, 211, 238, 0.5);
  box-shadow: -10px 16px 32px rgba(0, 0, 0, 0.5),
    0 0 18px rgba(34, 211, 238, 0.2);
}
.fx-ph-tilt-glide:hover .fx-ph-tilt-glide-inner {
  transform: translate(-4px, 3px);
}`},{id:"pg-aurora-waves",name:"Aurora Waves",category:"backgrounds",description:"Two huge blurred gradient waves in pink, violet and cyan swirl and morph slowly behind each other.",tags:["aurora","waves","gradient","ambient"],html:'<div class="fx-pg-aurora-waves"></div>',css:`.fx-pg-aurora-waves {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0b1120;
}
.fx-pg-aurora-waves::before,
.fx-pg-aurora-waves::after {
  content: "";
  position: absolute;
  left: -30%;
  top: -20%;
  width: 160%;
  height: 140%;
  filter: blur(52px);
  opacity: 0.5;
}
.fx-pg-aurora-waves::before {
  background: linear-gradient(115deg, #ec4899, #a78bfa 45%, #22d3ee);
  animation: fx-pg-aurora-waves-swirl-a 16s ease-in-out infinite alternate;
}
.fx-pg-aurora-waves::after {
  background: linear-gradient(245deg, #22d3ee, #ec4899 55%, #a78bfa);
  animation: fx-pg-aurora-waves-swirl-b 12s ease-in-out infinite alternate-reverse;
}
@keyframes fx-pg-aurora-waves-swirl-a {
  0% {
    transform: translate(-5%, 4%) rotate(0deg) scale(1);
    border-radius: 42% 58% 62% 38% / 55% 44% 56% 45%;
  }
  50% {
    border-radius: 58% 42% 46% 54% / 44% 58% 42% 56%;
  }
  100% {
    transform: translate(7%, -6%) rotate(24deg) scale(1.18);
    border-radius: 46% 54% 58% 42% / 52% 46% 54% 48%;
  }
}
@keyframes fx-pg-aurora-waves-swirl-b {
  0% {
    transform: translate(6%, -5%) rotate(14deg) scale(1.12);
    border-radius: 55% 45% 48% 52% / 46% 54% 46% 54%;
  }
  100% {
    transform: translate(-7%, 6%) rotate(-18deg) scale(0.92);
    border-radius: 44% 56% 52% 48% / 56% 44% 54% 46%;
  }
}`},{id:"pg-stripe-candy",name:"Candy Stripe Scroll",category:"backgrounds",description:"Vivid diagonal candy stripes in orange, pink and amber scroll endlessly in one direction.",tags:["stripes","candy","pattern","scroll"],html:'<div class="fx-pg-stripe-candy"></div>',css:`.fx-pg-stripe-candy {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0b1120;
}
.fx-pg-stripe-candy::before {
  content: "";
  position: absolute;
  left: -50%;
  top: -50%;
  width: 200%;
  height: 200%;
  background: repeating-linear-gradient(
    90deg,
    #f07025 0px,
    #f07025 20px,
    #ec4899 20px,
    #ec4899 40px,
    #fbbf24 40px,
    #fbbf24 60px,
    #ec4899 60px,
    #ec4899 80px
  );
  animation: fx-pg-stripe-candy-scroll 2.4s linear infinite;
}
.fx-pg-stripe-candy::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(11, 17, 32, 0.6) 100%);
}
@keyframes fx-pg-stripe-candy-scroll {
  from {
    transform: rotate(45deg) translateX(0);
  }
  to {
    transform: rotate(45deg) translateX(80px);
  }
}`},{id:"pg-bubble-rise",name:"Bubble Rise",category:"backgrounds",description:"Soft translucent bubbles of many sizes wobble upward from the bottom on staggered loops.",tags:["bubbles","float","ambient"],html:'<div class="fx-pg-bubble-rise"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>',css:`.fx-pg-bubble-rise {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #101a36, #0b1120);
}
.fx-pg-bubble-rise span {
  position: absolute;
  bottom: -24px;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 30%, rgba(255, 255, 255, 0.75) 0 12%, rgba(34, 211, 238, 0.35) 32%, rgba(34, 211, 238, 0.08) 70%);
  box-shadow: inset -2px -3px 6px rgba(34, 211, 238, 0.4);
  opacity: 0;
  animation: fx-pg-bubble-rise-float 7s linear infinite;
}
.fx-pg-bubble-rise span:nth-child(1) { left: 6%; width: 20px; height: 20px; animation-duration: 8s; }
.fx-pg-bubble-rise span:nth-child(2) { left: 18%; width: 12px; height: 12px; animation-duration: 6s; animation-delay: 1.2s; }
.fx-pg-bubble-rise span:nth-child(3) { left: 30%; width: 26px; height: 26px; animation-duration: 9s; animation-delay: 2.8s; }
.fx-pg-bubble-rise span:nth-child(4) { left: 42%; width: 10px; height: 10px; animation-duration: 5.5s; animation-delay: 0.6s; }
.fx-pg-bubble-rise span:nth-child(5) { left: 54%; width: 18px; height: 18px; animation-duration: 7.5s; animation-delay: 3.4s; }
.fx-pg-bubble-rise span:nth-child(6) { left: 65%; width: 14px; height: 14px; animation-duration: 6.5s; animation-delay: 1.9s; }
.fx-pg-bubble-rise span:nth-child(7) { left: 76%; width: 24px; height: 24px; animation-duration: 8.5s; animation-delay: 4.2s; }
.fx-pg-bubble-rise span:nth-child(8) { left: 86%; width: 11px; height: 11px; animation-duration: 5s; animation-delay: 2.4s; }
.fx-pg-bubble-rise span:nth-child(9) { left: 94%; width: 16px; height: 16px; animation-duration: 7s; animation-delay: 5s; }
.fx-pg-bubble-rise span:nth-child(10) { left: 48%; width: 9px; height: 9px; animation-duration: 6.2s; animation-delay: 5.6s; }
@keyframes fx-pg-bubble-rise-float {
  0% {
    transform: translate(0, 0) scale(0.5);
    opacity: 0;
  }
  10% {
    opacity: 0.85;
  }
  30% {
    transform: translate(10px, -70px) scale(1);
  }
  55% {
    transform: translate(-9px, -140px);
  }
  80% {
    transform: translate(8px, -210px);
    opacity: 0.7;
  }
  100% {
    transform: translate(-4px, -260px) scale(1.05);
    opacity: 0;
  }
}`},{id:"pg-conic-blur",name:"Conic Blur Spin",category:"backgrounds",description:"A giant heavily blurred conic rainbow spins slowly and fills the canvas with drifting color.",tags:["conic","rainbow","blur","gradient"],html:'<div class="fx-pg-conic-blur"></div>',css:`.fx-pg-conic-blur {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0b1120;
}
.fx-pg-conic-blur::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 260%;
  height: 260%;
  background: conic-gradient(
    from 0deg,
    #f07025,
    #ec4899,
    #a78bfa,
    #22d3ee,
    #34d399,
    #fbbf24,
    #f07025
  );
  filter: blur(60px);
  opacity: 0.55;
  animation: fx-pg-conic-blur-spin 18s linear infinite;
}
.fx-pg-conic-blur::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 30%, #0b1120 96%);
}
@keyframes fx-pg-conic-blur-spin {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}`},{id:"pg-grid-pulse",name:"Grid Pulse Sweep",category:"backgrounds",description:"A faint wireframe grid with a bright radial glow that travels diagonally across the lines.",tags:["grid","glow","pulse","tech"],html:'<div class="fx-pg-grid-pulse"></div>',css:`.fx-pg-grid-pulse {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0b1120;
}
.fx-pg-grid-pulse::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(148, 163, 184, 0.18) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148, 163, 184, 0.18) 1px, transparent 1px);
  background-size: 26px 26px;
  animation: fx-pg-grid-pulse-breathe 5s ease-in-out infinite alternate;
}
.fx-pg-grid-pulse::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 240px;
  height: 240px;
  margin: -120px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.42) 0%, rgba(34, 211, 238, 0.14) 45%, transparent 70%);
  mix-blend-mode: screen;
  animation: fx-pg-grid-pulse-sweep 5s ease-in-out infinite alternate;
}
@keyframes fx-pg-grid-pulse-sweep {
  from {
    transform: translate(-40px, -30px) scale(0.85);
    opacity: 0.75;
  }
  to {
    transform: translate(560px, 160px) scale(1.1);
    opacity: 1;
  }
}
@keyframes fx-pg-grid-pulse-breathe {
  from {
    opacity: 0.65;
  }
  to {
    opacity: 1;
  }
}`},{id:"pg-bokeh-drift",name:"Bokeh Drift",category:"backgrounds",description:"Large soft-focus bokeh discs in five colors drift lazily in different directions.",tags:["bokeh","blur","ambient","soft"],html:'<div class="fx-pg-bokeh-drift"><span></span><span></span><span></span><span></span><span></span><span></span></div>',css:`.fx-pg-bokeh-drift {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0b1120;
}
.fx-pg-bokeh-drift span {
  position: absolute;
  border-radius: 50%;
  filter: blur(5px);
}
.fx-pg-bokeh-drift span:nth-child(1) {
  left: 6%;
  top: 12%;
  width: 96px;
  height: 96px;
  background: radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.22) 52%, rgba(236, 72, 153, 0.5) 66%, transparent 72%);
  animation: fx-pg-bokeh-drift-a 11s ease-in-out infinite alternate;
}
.fx-pg-bokeh-drift span:nth-child(2) {
  right: 10%;
  top: 6%;
  width: 64px;
  height: 64px;
  background: radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.22) 52%, rgba(34, 211, 238, 0.5) 66%, transparent 72%);
  animation: fx-pg-bokeh-drift-b 9s ease-in-out infinite alternate;
}
.fx-pg-bokeh-drift span:nth-child(3) {
  left: 22%;
  bottom: 4%;
  width: 74px;
  height: 74px;
  background: radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.2) 52%, rgba(251, 191, 36, 0.48) 66%, transparent 72%);
  animation: fx-pg-bokeh-drift-c 12s ease-in-out infinite alternate;
}
.fx-pg-bokeh-drift span:nth-child(4) {
  right: 26%;
  bottom: 10%;
  width: 110px;
  height: 110px;
  background: radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.18) 52%, rgba(167, 139, 250, 0.45) 66%, transparent 72%);
  animation: fx-pg-bokeh-drift-b 14s ease-in-out infinite alternate-reverse;
}
.fx-pg-bokeh-drift span:nth-child(5) {
  left: 46%;
  top: 30%;
  width: 52px;
  height: 52px;
  background: radial-gradient(circle at 50% 50%, rgba(52, 211, 153, 0.2) 52%, rgba(52, 211, 153, 0.5) 66%, transparent 72%);
  animation: fx-pg-bokeh-drift-a 8s ease-in-out infinite alternate-reverse;
}
.fx-pg-bokeh-drift span:nth-child(6) {
  right: 44%;
  top: 16%;
  width: 40px;
  height: 40px;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.16) 52%, rgba(255, 255, 255, 0.4) 66%, transparent 72%);
  animation: fx-pg-bokeh-drift-c 10s ease-in-out infinite alternate-reverse;
}
@keyframes fx-pg-bokeh-drift-a {
  from {
    transform: translate(0, 0) scale(1);
  }
  to {
    transform: translate(56px, -34px) scale(1.14);
  }
}
@keyframes fx-pg-bokeh-drift-b {
  from {
    transform: translate(0, 0) scale(1.08);
  }
  to {
    transform: translate(-64px, 30px) scale(0.9);
  }
}
@keyframes fx-pg-bokeh-drift-c {
  from {
    transform: translate(-24px, 14px) scale(0.95);
  }
  to {
    transform: translate(44px, -26px) scale(1.12);
  }
}`},{id:"pg-twinkle-dots",name:"Twinkle Dots",category:"backgrounds",description:"Tiny colored star dots twinkle on staggered rhythms across two layered fields.",tags:["stars","twinkle","dots","night"],html:'<div class="fx-pg-twinkle-dots"></div>',css:`.fx-pg-twinkle-dots {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: radial-gradient(ellipse at 50% 0%, #101c3a 0%, #0b1120 70%);
}
.fx-pg-twinkle-dots::before,
.fx-pg-twinkle-dots::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: transparent;
}
.fx-pg-twinkle-dots::before {
  box-shadow: 24px 30px #22d3ee, 90px 80px #ffffff, 160px 40px #22d3ee,
    240px 120px #ffffff, 320px 60px #a78bfa, 410px 150px #22d3ee,
    480px 30px #ffffff, 560px 110px #a78bfa, 630px 60px #22d3ee,
    120px 170px #ffffff, 300px 180px #22d3ee, 520px 190px #ffffff,
    60px 130px #a78bfa, 700px 170px #22d3ee, 200px 20px #ffffff,
    380px 20px #a78bfa;
  animation: fx-pg-twinkle-dots-glow-a 2.2s ease-in-out infinite;
}
.fx-pg-twinkle-dots::after {
  width: 3px;
  height: 3px;
  box-shadow: 50px 60px #fbbf24, 140px 130px #ec4899, 210px 90px #fbbf24,
    280px 30px #ec4899, 350px 160px #fbbf24, 440px 90px #ec4899,
    510px 160px #fbbf24, 600px 130px #ec4899, 670px 40px #fbbf24,
    30px 180px #ec4899, 180px 110px #fbbf24, 420px 40px #ec4899,
    580px 20px #fbbf24, 730px 120px #ec4899;
  animation: fx-pg-twinkle-dots-glow-b 3.4s ease-in-out infinite;
}
@keyframes fx-pg-twinkle-dots-glow-a {
  0%,
  100% {
    opacity: 0.25;
  }
  18% {
    opacity: 1;
  }
  42% {
    opacity: 0.35;
  }
  70% {
    opacity: 0.9;
  }
}
@keyframes fx-pg-twinkle-dots-glow-b {
  0%,
  100% {
    opacity: 0.9;
  }
  25% {
    opacity: 0.2;
  }
  55% {
    opacity: 0.75;
  }
  80% {
    opacity: 0.3;
  }
}`},{id:"pg-digital-rain",name:"Digital Rain",category:"backgrounds",description:"Thin neon light streaks fall continuously in masked columns at two different speeds.",tags:["rain","matrix","neon","cyber"],html:'<div class="fx-pg-digital-rain"></div>',css:`.fx-pg-digital-rain {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background-color: #0b1120;
  background-image: repeating-linear-gradient(90deg, rgba(148, 163, 184, 0.08) 0 1px, transparent 1px 42px);
}
.fx-pg-digital-rain::before,
.fx-pg-digital-rain::after {
  content: "";
  position: absolute;
  inset: 0;
  -webkit-mask-image: repeating-linear-gradient(90deg, #000 0 2px, transparent 2px 42px);
  mask-image: repeating-linear-gradient(90deg, #000 0 2px, transparent 2px 42px);
}
.fx-pg-digital-rain::before {
  background-image: repeating-linear-gradient(180deg, transparent 0 52px, rgba(34, 211, 238, 0.7) 52px 58px, transparent 58px 64px);
  animation: fx-pg-digital-rain-fall-a 1.4s linear infinite;
}
.fx-pg-digital-rain::after {
  background-image: repeating-linear-gradient(180deg, transparent 0 66px, rgba(52, 211, 153, 0.5) 66px 71px, transparent 71px 80px);
  -webkit-mask-image: repeating-linear-gradient(90deg, transparent 0 21px, #000 21px 23px, transparent 23px 42px);
  mask-image: repeating-linear-gradient(90deg, transparent 0 21px, #000 21px 23px, transparent 23px 42px);
  animation: fx-pg-digital-rain-fall-b 2.3s linear infinite;
}
@keyframes fx-pg-digital-rain-fall-a {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 64px;
  }
}
@keyframes fx-pg-digital-rain-fall-b {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 80px;
  }
}`},{id:"pg-lava-lamp",name:"Lava Lamp Blobs",category:"backgrounds",description:"Two huge blurred blobs morph, stretch and drift like a slow-motion lava lamp.",tags:["blobs","lava","blur","morph"],html:'<div class="fx-pg-lava-lamp"></div>',css:`.fx-pg-lava-lamp {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0b1120;
}
.fx-pg-lava-lamp::before,
.fx-pg-lava-lamp::after {
  content: "";
  position: absolute;
  width: 65%;
  height: 85%;
  filter: blur(42px);
  mix-blend-mode: screen;
  opacity: 0.55;
}
.fx-pg-lava-lamp::before {
  left: -8%;
  top: -12%;
  background: radial-gradient(circle at 40% 40%, #ec4899, #a78bfa 70%, transparent 75%);
  animation: fx-pg-lava-lamp-morph-a 14s ease-in-out infinite;
}
.fx-pg-lava-lamp::after {
  right: -10%;
  bottom: -18%;
  background: radial-gradient(circle at 60% 60%, #f07025, #ec4899 65%, transparent 72%);
  animation: fx-pg-lava-lamp-morph-b 11s ease-in-out infinite;
}
@keyframes fx-pg-lava-lamp-morph-a {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
    border-radius: 46% 54% 58% 42% / 52% 46% 54% 48%;
  }
  33% {
    transform: translate(10%, 14%) scale(1.15);
    border-radius: 62% 38% 44% 56% / 44% 62% 38% 56%;
  }
  66% {
    transform: translate(-8%, -6%) scale(0.9);
    border-radius: 40% 60% 56% 44% / 58% 40% 60% 42%;
  }
}
@keyframes fx-pg-lava-lamp-morph-b {
  0%,
  100% {
    transform: translate(0, 0) scale(1.05);
    border-radius: 54% 46% 42% 58% / 48% 54% 46% 52%;
  }
  40% {
    transform: translate(-12%, -16%) scale(0.88);
    border-radius: 44% 56% 60% 40% / 56% 44% 58% 42%;
  }
  70% {
    transform: translate(8%, 10%) scale(1.18);
    border-radius: 58% 42% 48% 52% / 42% 58% 44% 56%;
  }
}`},{id:"pg-checker-pulse",name:"Checker Pulse",category:"backgrounds",description:"A checkerboard of violet and cyan squares whose alternating cells breathe out of phase.",tags:["checker","pattern","pulse"],html:'<div class="fx-pg-checker-pulse"></div>',css:`.fx-pg-checker-pulse {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: #0b1120;
}
.fx-pg-checker-pulse::before,
.fx-pg-checker-pulse::after {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-conic-gradient(rgba(167, 139, 250, 0.55) 0% 25%, transparent 0% 50%) 0 0 / 44px 44px;
  animation: fx-pg-checker-pulse-breathe 3.2s ease-in-out infinite;
}
.fx-pg-checker-pulse::after {
  background: repeating-conic-gradient(rgba(34, 211, 238, 0.55) 0% 25%, transparent 0% 50%) 22px 22px / 44px 44px;
  animation-delay: -1.6s;
}
@keyframes fx-pg-checker-pulse-breathe {
  0%,
  100% {
    opacity: 0.15;
  }
  50% {
    opacity: 0.9;
  }
}`},{id:"pg-sunrise-band",name:"Sunrise Band",category:"backgrounds",description:"A blurred amber-to-violet horizon band slowly shifts and breathes like a living sunrise.",tags:["sunrise","gradient","horizon","warm"],html:'<div class="fx-pg-sunrise-band"></div>',css:`.fx-pg-sunrise-band {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #0b1120 0%, #131b33 55%, #0b1120 100%);
}
.fx-pg-sunrise-band::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 28%;
  height: 44%;
  background: linear-gradient(90deg, #fbbf24, #f07025 25%, #ec4899 50%, #a78bfa 75%, #fbbf24);
  background-size: 200% 100%;
  filter: blur(26px);
  opacity: 0.8;
  animation: fx-pg-sunrise-band-shift 10s linear infinite,
    fx-pg-sunrise-band-breathe 5s ease-in-out infinite alternate;
}
.fx-pg-sunrise-band::after {
  content: "";
  position: absolute;
  left: 10%;
  right: 10%;
  bottom: 8%;
  height: 14%;
  background: linear-gradient(90deg, #fbbf24, #ec4899, #a78bfa);
  filter: blur(18px);
  opacity: 0.25;
  animation: fx-pg-sunrise-band-glow 5s ease-in-out infinite alternate;
}
@keyframes fx-pg-sunrise-band-shift {
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: 200% 0%;
  }
}
@keyframes fx-pg-sunrise-band-breathe {
  from {
    transform: scaleY(0.85);
    opacity: 0.65;
  }
  to {
    transform: scaleY(1.1);
    opacity: 0.9;
  }
}
@keyframes fx-pg-sunrise-band-glow {
  from {
    opacity: 0.15;
  }
  to {
    opacity: 0.35;
  }
}`},{id:"pg-levitate-orb",name:"Levitating Orb",category:"animations",description:"A glossy orange orb levitates in place while its ground shadow shrinks and grows in sync.",tags:["orb","levitate","shadow"],html:'<div class="fx-pg-levitate-orb"></div>',css:`.fx-pg-levitate-orb {
  position: relative;
  width: 60px;
  height: 96px;
}
.fx-pg-levitate-orb::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 4px;
  width: 52px;
  height: 52px;
  margin-left: -26px;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 28%, rgba(255, 255, 255, 0.85) 0 10%, transparent 12%),
    radial-gradient(circle at 35% 30%, #fbbf24, #f07025 55%, #c2410c 90%);
  box-shadow: 0 0 24px rgba(240, 112, 37, 0.45), inset 0 -6px 14px rgba(124, 45, 18, 0.55);
  animation: fx-pg-levitate-orb-float 2.8s ease-in-out infinite alternate;
}
.fx-pg-levitate-orb::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 6px;
  width: 54px;
  height: 12px;
  margin-left: -27px;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.25) 55%, transparent 75%);
  animation: fx-pg-levitate-orb-shadow 2.8s ease-in-out infinite alternate;
}
@keyframes fx-pg-levitate-orb-float {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-30px);
  }
}
@keyframes fx-pg-levitate-orb-shadow {
  from {
    transform: scaleX(1);
    opacity: 0.7;
  }
  to {
    transform: scaleX(0.55);
    opacity: 0.25;
  }
}`},{id:"pg-gyro-rings",name:"Gyroscope Rings",category:"animations",description:"Three thin neon rings gyroscope around a pulsing amber core on different axes.",tags:["rings","3d","gyroscope","neon"],html:'<div class="fx-pg-gyro-rings"><span></span><span></span><span></span></div>',css:`.fx-pg-gyro-rings {
  position: relative;
  width: 96px;
  height: 96px;
  transform-style: preserve-3d;
  perspective: 480px;
}
.fx-pg-gyro-rings span {
  position: absolute;
  inset: 0;
  border-radius: 50%;
}
.fx-pg-gyro-rings span:nth-child(1) {
  border: 2px solid #22d3ee;
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.35), inset 0 0 12px rgba(34, 211, 238, 0.25);
  animation: fx-pg-gyro-rings-spin-a 4.2s linear infinite;
}
.fx-pg-gyro-rings span:nth-child(2) {
  border: 2px solid #ec4899;
  box-shadow: 0 0 12px rgba(236, 72, 153, 0.35), inset 0 0 12px rgba(236, 72, 153, 0.25);
  animation: fx-pg-gyro-rings-spin-b 5.6s linear infinite;
}
.fx-pg-gyro-rings span:nth-child(3) {
  border: 2px solid #a78bfa;
  box-shadow: 0 0 12px rgba(167, 139, 250, 0.35), inset 0 0 12px rgba(167, 139, 250, 0.25);
  animation: fx-pg-gyro-rings-spin-c 7s linear infinite;
}
.fx-pg-gyro-rings::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 26px;
  height: 26px;
  margin: -13px 0 0 -13px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fde68a, #fbbf24 55%, #b45309);
  animation: fx-pg-gyro-rings-core 1.8s ease-in-out infinite;
}
@keyframes fx-pg-gyro-rings-spin-a {
  from {
    transform: rotateX(68deg) rotateZ(0deg);
  }
  to {
    transform: rotateX(68deg) rotateZ(360deg);
  }
}
@keyframes fx-pg-gyro-rings-spin-b {
  from {
    transform: rotateY(68deg) rotateX(0deg);
  }
  to {
    transform: rotateY(68deg) rotateX(360deg);
  }
}
@keyframes fx-pg-gyro-rings-spin-c {
  from {
    transform: rotateX(24deg) rotateY(-30deg) rotateZ(0deg);
  }
  to {
    transform: rotateX(24deg) rotateY(-30deg) rotateZ(-360deg);
  }
}
@keyframes fx-pg-gyro-rings-core {
  0%,
  100% {
    transform: scale(1);
    box-shadow: 0 0 14px rgba(251, 191, 36, 0.55);
  }
  50% {
    transform: scale(1.18);
    box-shadow: 0 0 26px rgba(251, 191, 36, 0.85);
  }
}`},{id:"pg-seesaw",name:"Seesaw Tilt",category:"animations",description:"A plank carrying two glowing weights tips back and forth above a violet pivot.",tags:["seesaw","tilt","physics"],html:'<div class="fx-pg-seesaw"><span class="fx-pg-seesaw-plank"></span></div>',css:`.fx-pg-seesaw {
  position: relative;
  width: 160px;
  height: 104px;
}
.fx-pg-seesaw::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 2px;
  width: 140px;
  height: 3px;
  margin-left: -70px;
  border-radius: 2px;
  background: rgba(148, 163, 184, 0.35);
}
.fx-pg-seesaw::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 5px;
  margin-left: -15px;
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 30px solid #a78bfa;
  filter: drop-shadow(0 0 8px rgba(167, 139, 250, 0.45));
}
.fx-pg-seesaw-plank {
  position: absolute;
  left: 50%;
  bottom: 34px;
  width: 136px;
  height: 9px;
  margin-left: -68px;
  border-radius: 5px;
  background: linear-gradient(180deg, #fbbf24, #f07025);
  box-shadow: 0 2px 8px rgba(240, 112, 37, 0.4);
  transform-origin: center center;
  animation: fx-pg-seesaw-tilt 3s ease-in-out infinite alternate;
}
.fx-pg-seesaw-plank::before,
.fx-pg-seesaw-plank::after {
  content: "";
  position: absolute;
  top: -17px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.fx-pg-seesaw-plank::before {
  left: 6px;
  background: radial-gradient(circle at 32% 30%, #f9a8d4, #ec4899 60%, #9d174d);
  box-shadow: 0 0 10px rgba(236, 72, 153, 0.5);
}
.fx-pg-seesaw-plank::after {
  right: 6px;
  background: radial-gradient(circle at 32% 30%, #a5f3fc, #22d3ee 60%, #0e7490);
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
}
@keyframes fx-pg-seesaw-tilt {
  from {
    transform: rotate(9deg);
  }
  to {
    transform: rotate(-9deg);
  }
}`},{id:"pg-rocket-bob",name:"Rocket Bob",category:"animations",description:"A tiny gradient rocket bobs up and down while its flame flickers underneath.",tags:["rocket","flame","bob","cute"],html:'<div class="fx-pg-rocket-bob"><span class="fx-pg-rocket-bob-fin fx-pg-rocket-bob-fin-l"></span><span class="fx-pg-rocket-bob-fin fx-pg-rocket-bob-fin-r"></span></div>',css:`.fx-pg-rocket-bob {
  position: relative;
  width: 36px;
  height: 64px;
  border-radius: 20px 20px 12px 12px / 38px 38px 14px 14px;
  background: linear-gradient(180deg, #fbbf24 0%, #f07025 50%, #ec4899 100%);
  box-shadow: inset -5px -5px 10px rgba(157, 23, 77, 0.45),
    inset 4px 5px 8px rgba(255, 255, 255, 0.3),
    0 0 20px rgba(240, 112, 37, 0.35);
  animation: fx-pg-rocket-bob-hover 2.6s ease-in-out infinite alternate;
}
.fx-pg-rocket-bob::before {
  content: "";
  position: absolute;
  top: 13px;
  left: 50%;
  width: 17px;
  height: 17px;
  margin-left: -8.5px;
  border-radius: 50%;
  border: 3px solid #e2e8f0;
  background: radial-gradient(circle at 35% 30%, #cffafe, #22d3ee 60%, #0e7490);
  box-shadow: 0 0 8px rgba(34, 211, 238, 0.6);
}
.fx-pg-rocket-bob::after {
  content: "";
  position: absolute;
  bottom: -17px;
  left: 50%;
  width: 15px;
  height: 20px;
  margin-left: -7.5px;
  background: linear-gradient(0deg, rgba(236, 72, 153, 0), #f07025 40%, #fbbf24 90%);
  border-radius: 50% 50% 0 50%;
  transform-origin: top center;
  animation: fx-pg-rocket-bob-flicker 0.24s ease-in-out infinite alternate;
}
.fx-pg-rocket-bob-fin {
  position: absolute;
  bottom: 3px;
  width: 15px;
  height: 26px;
  background: linear-gradient(180deg, #ec4899, #9d174d);
}
.fx-pg-rocket-bob-fin-l {
  left: -11px;
  border-radius: 14px 0 4px 14px;
  transform: rotate(6deg);
  box-shadow: 0 0 10px rgba(236, 72, 153, 0.4);
}
.fx-pg-rocket-bob-fin-r {
  right: -11px;
  border-radius: 0 14px 14px 4px;
  transform: rotate(-6deg);
  box-shadow: 0 0 10px rgba(236, 72, 153, 0.4);
}
@keyframes fx-pg-rocket-bob-hover {
  from {
    transform: translateY(8px);
  }
  to {
    transform: translateY(-14px);
  }
}
@keyframes fx-pg-rocket-bob-flicker {
  from {
    transform: rotate(45deg) scale(0.82, 0.9);
    opacity: 0.75;
  }
  to {
    transform: rotate(45deg) scale(1.05, 1.15);
    opacity: 1;
  }
}`},{id:"pg-elastic-stamp",name:"Elastic Stamp",category:"animations",description:"A badge stamp slams down with elastic overshoot, holds, and repeats its impression.",tags:["stamp","elastic","overshoot"],html:'<div class="fx-pg-elastic-stamp"><span class="fx-pg-elastic-stamp-star"></span></div>',css:`.fx-pg-elastic-stamp {
  position: relative;
  width: 86px;
  height: 86px;
  border-radius: 16px;
  border: 3px solid #f07025;
  background: rgba(240, 112, 37, 0.1);
  animation: fx-pg-elastic-stamp-slam 2.8s ease infinite;
}
.fx-pg-elastic-stamp::after {
  content: "";
  position: absolute;
  inset: 5px;
  border: 2px dashed rgba(240, 112, 37, 0.55);
  border-radius: 11px;
}
.fx-pg-elastic-stamp-star {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 42px;
  height: 42px;
  margin: -21px 0 0 -21px;
  background: linear-gradient(180deg, #fbbf24, #f07025);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  filter: drop-shadow(0 0 6px rgba(251, 191, 36, 0.6));
}
@keyframes fx-pg-elastic-stamp-slam {
  0% {
    transform: scale(2.4) rotate(-10deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  16% {
    transform: scale(0.9) rotate(2deg);
    box-shadow: 0 12px 30px rgba(240, 112, 37, 0.5);
  }
  26% {
    transform: scale(1.07) rotate(-1deg);
  }
  36% {
    transform: scale(0.98) rotate(0.5deg);
  }
  44%,
  82% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
    box-shadow: 0 6px 18px rgba(240, 112, 37, 0.25);
  }
  92% {
    transform: scale(1);
    opacity: 0;
  }
  100% {
    transform: scale(2.4) rotate(-10deg);
    opacity: 0;
  }
}`},{id:"pg-planet-moons",name:"Planet Moons",category:"animations",description:"A ringed violet planet with two glowing moons orbiting at different speeds and radii.",tags:["planet","orbit","space","moons"],html:'<div class="fx-pg-planet-moons"><span></span><span></span></div>',css:`.fx-pg-planet-moons {
  position: relative;
  width: 120px;
  height: 120px;
}
.fx-pg-planet-moons::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 46px;
  height: 46px;
  margin: -23px 0 0 -23px;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 28%, #ddd6fe, #a78bfa 45%, #6d28d9 85%);
  box-shadow: 0 0 22px rgba(167, 139, 250, 0.55), inset -6px -6px 12px rgba(49, 46, 129, 0.6);
}
.fx-pg-planet-moons::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 84px;
  height: 26px;
  margin: -13px 0 0 -42px;
  border: 3px solid rgba(251, 191, 36, 0.75);
  border-radius: 50%;
  transform: rotate(-16deg);
  box-shadow: 0 0 10px rgba(251, 191, 36, 0.3), inset 0 0 10px rgba(251, 191, 36, 0.2);
}
.fx-pg-planet-moons span {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
}
.fx-pg-planet-moons span:nth-child(1) {
  width: 78px;
  height: 78px;
  margin: -39px 0 0 -39px;
  animation: fx-pg-planet-moons-orbit-a 5.5s linear infinite;
}
.fx-pg-planet-moons span:nth-child(2) {
  width: 116px;
  height: 116px;
  margin: -58px 0 0 -58px;
  animation: fx-pg-planet-moons-orbit-b 9s linear infinite;
}
.fx-pg-planet-moons span::before {
  content: "";
  position: absolute;
  left: 50%;
  top: -5px;
  width: 11px;
  height: 11px;
  margin-left: -5.5px;
  border-radius: 50%;
  background: radial-gradient(circle at 32% 30%, #a5f3fc, #22d3ee 60%, #155e75);
  box-shadow: 0 0 8px rgba(34, 211, 238, 0.7);
}
.fx-pg-planet-moons span:nth-child(2)::before {
  top: auto;
  bottom: -4px;
  width: 8px;
  height: 8px;
  margin-left: -4px;
  background: radial-gradient(circle at 32% 30%, #fbcfe8, #ec4899 60%, #9d174d);
  box-shadow: 0 0 8px rgba(236, 72, 153, 0.7);
}
@keyframes fx-pg-planet-moons-orbit-a {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes fx-pg-planet-moons-orbit-b {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}`},{id:"pg-step-dots",name:"Walking Step Dots",category:"animations",description:"Four colored dots hop along a faint track one after another, pausing between steps.",tags:["dots","steps","loader","walk"],html:'<div class="fx-pg-step-dots"><span></span><span></span><span></span><span></span></div>',css:`.fx-pg-step-dots {
  position: relative;
  width: 150px;
  height: 22px;
}
.fx-pg-step-dots::before {
  content: "";
  position: absolute;
  left: 0;
  right: 8px;
  bottom: 1px;
  height: 2px;
  border-radius: 1px;
  background: rgba(148, 163, 184, 0.25);
}
.fx-pg-step-dots span {
  position: absolute;
  left: 0;
  top: 6px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  opacity: 0;
  animation: fx-pg-step-dots-walk 3.6s linear infinite;
}
.fx-pg-step-dots span:nth-child(1) {
  background: #f07025;
  box-shadow: 0 0 10px rgba(240, 112, 37, 0.6);
  animation-delay: 0s;
}
.fx-pg-step-dots span:nth-child(2) {
  background: #ec4899;
  box-shadow: 0 0 10px rgba(236, 72, 153, 0.6);
  animation-delay: -0.9s;
}
.fx-pg-step-dots span:nth-child(3) {
  background: #22d3ee;
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.6);
  animation-delay: -1.8s;
}
.fx-pg-step-dots span:nth-child(4) {
  background: #34d399;
  box-shadow: 0 0 10px rgba(52, 211, 153, 0.6);
  animation-delay: -2.7s;
}
@keyframes fx-pg-step-dots-walk {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  12% {
    transform: translate(0, 0);
  }
  24% {
    transform: translate(30px, -7px);
  }
  30% {
    transform: translate(34px, 0);
  }
  36% {
    transform: translate(34px, 0);
  }
  48% {
    transform: translate(64px, -7px);
  }
  54% {
    transform: translate(68px, 0);
  }
  60% {
    transform: translate(68px, 0);
  }
  72% {
    transform: translate(98px, -7px);
  }
  78% {
    transform: translate(102px, 0);
  }
  84% {
    transform: translate(102px, 0);
    opacity: 1;
  }
  96% {
    transform: translate(136px, -5px);
    opacity: 0.9;
  }
  100% {
    transform: translate(140px, 0);
    opacity: 0;
  }
}`},{id:"pg-swing-bell",name:"Swinging Bell",category:"animations",description:"A golden bell swings from its knob with a decaying wobble, rests, then rings again.",tags:["bell","swing","wobble"],html:'<div class="fx-pg-swing-bell"><span class="fx-pg-swing-bell-lip"></span></div>',css:`.fx-pg-swing-bell {
  position: relative;
  width: 52px;
  height: 58px;
  transform-origin: 50% -12px;
  background: linear-gradient(180deg, #fde68a 0%, #fbbf24 45%, #f07025 100%);
  border-radius: 26px 26px 10px 10px / 46px 46px 10px 10px;
  box-shadow: inset -4px -4px 8px rgba(180, 83, 9, 0.5), 0 0 18px rgba(251, 191, 36, 0.35);
  animation: fx-pg-swing-bell-ring 3s ease-in-out infinite;
}
.fx-pg-swing-bell::before {
  content: "";
  position: absolute;
  top: -7px;
  left: 50%;
  width: 10px;
  height: 10px;
  margin-left: -5px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fde68a, #d97706);
}
.fx-pg-swing-bell::after {
  content: "";
  position: absolute;
  bottom: -8px;
  left: 50%;
  width: 10px;
  height: 10px;
  margin-left: -5px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #fbbf24, #b45309);
  box-shadow: 0 0 8px rgba(251, 191, 36, 0.5);
  animation: fx-pg-swing-bell-clap 3s ease-in-out infinite;
}
.fx-pg-swing-bell-lip {
  position: absolute;
  left: 50%;
  bottom: -3px;
  width: 58px;
  height: 9px;
  margin-left: -29px;
  border-radius: 5px;
  background: linear-gradient(180deg, #f07025, #b45309);
  box-shadow: 0 2px 8px rgba(180, 83, 9, 0.5);
}
@keyframes fx-pg-swing-bell-ring {
  0%,
  100% {
    transform: rotate(0deg);
  }
  6% {
    transform: rotate(15deg);
  }
  16% {
    transform: rotate(-12deg);
  }
  26% {
    transform: rotate(9deg);
  }
  36% {
    transform: rotate(-6deg);
  }
  46% {
    transform: rotate(4deg);
  }
  56% {
    transform: rotate(-2deg);
  }
  66% {
    transform: rotate(1deg);
  }
  76% {
    transform: rotate(0deg);
  }
}
@keyframes fx-pg-swing-bell-clap {
  0%,
  100% {
    transform: translateX(0);
  }
  8% {
    transform: translateX(5px);
  }
  18% {
    transform: translateX(-4px);
  }
  28% {
    transform: translateX(3px);
  }
  38% {
    transform: translateX(-2px);
  }
  48% {
    transform: translateX(1px);
  }
  60%,
  100% {
    transform: translateX(0);
  }
}`},{id:"pg-pinwheel",name:"Pinwheel Spin",category:"animations",description:"A four-blade pinwheel on a stick spins with playful bursts of fast and slow rotation.",tags:["pinwheel","spin","toy"],html:'<div class="fx-pg-pinwheel"><span class="fx-pg-pinwheel-wheel"><span></span><span></span><span></span><span></span></span></div>',css:`.fx-pg-pinwheel {
  position: relative;
  width: 64px;
  height: 116px;
}
.fx-pg-pinwheel::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 58px;
  width: 5px;
  height: 56px;
  margin-left: -2.5px;
  border-radius: 3px;
  background: linear-gradient(180deg, #cbd5e1, #64748b);
}
.fx-pg-pinwheel-wheel {
  position: absolute;
  left: 2px;
  top: 0;
  width: 60px;
  height: 60px;
  filter: drop-shadow(0 0 10px rgba(236, 72, 153, 0.35));
  animation: fx-pg-pinwheel-spin 5s infinite;
}
.fx-pg-pinwheel-wheel span {
  position: absolute;
  left: 0;
  top: 0;
  width: 30px;
  height: 30px;
  transform-origin: 100% 100%;
  border-radius: 100% 0 12% 0;
}
.fx-pg-pinwheel-wheel span:nth-child(1) {
  background: #f07025;
  transform: rotate(0deg);
}
.fx-pg-pinwheel-wheel span:nth-child(2) {
  background: #ec4899;
  transform: rotate(90deg);
}
.fx-pg-pinwheel-wheel span:nth-child(3) {
  background: #22d3ee;
  transform: rotate(180deg);
}
.fx-pg-pinwheel-wheel span:nth-child(4) {
  background: #a78bfa;
  transform: rotate(270deg);
}
.fx-pg-pinwheel-wheel::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 14px;
  height: 14px;
  margin: -7px 0 0 -7px;
  border-radius: 50%;
  background: #0b1120;
  box-shadow: 0 0 0 3px #fbbf24;
}
@keyframes fx-pg-pinwheel-spin {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.55, 0.05, 0.35, 1);
  }
  30% {
    transform: rotate(560deg);
    animation-timing-function: ease-in-out;
  }
  55% {
    transform: rotate(720deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(1080deg);
  }
}`},{id:"pg-cascade-balls",name:"Cascade Balls",category:"animations",description:"Three glossy balls bounce in a staggered cascade, squashing flat at every impact.",tags:["balls","bounce","squash","cascade"],html:'<div class="fx-pg-cascade-balls"><span></span><span></span><span></span></div>',css:`.fx-pg-cascade-balls {
  position: relative;
  width: 96px;
  height: 84px;
}
.fx-pg-cascade-balls::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  border-radius: 1px;
  background: rgba(148, 163, 184, 0.3);
}
.fx-pg-cascade-balls span {
  position: absolute;
  bottom: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform-origin: center bottom;
  animation: fx-pg-cascade-balls-bounce 1.5s cubic-bezier(0.3, 0, 0.6, 1) infinite;
}
.fx-pg-cascade-balls span:nth-child(1) {
  left: 4px;
  background: radial-gradient(circle at 32% 30%, #fcd34d, #f07025 60%, #9a3412);
  box-shadow: 0 0 12px rgba(240, 112, 37, 0.55);
}
.fx-pg-cascade-balls span:nth-child(2) {
  left: 38px;
  background: radial-gradient(circle at 32% 30%, #a5f3fc, #22d3ee 60%, #155e75);
  box-shadow: 0 0 12px rgba(34, 211, 238, 0.55);
  animation-delay: 0.25s;
}
.fx-pg-cascade-balls span:nth-child(3) {
  left: 72px;
  background: radial-gradient(circle at 32% 30%, #6ee7b7, #34d399 60%, #065f46);
  box-shadow: 0 0 12px rgba(52, 211, 153, 0.55);
  animation-delay: 0.5s;
}
@keyframes fx-pg-cascade-balls-bounce {
  0% {
    transform: translateY(0) scale(1.3, 0.65);
  }
  14% {
    transform: translateY(0) scale(1, 1);
  }
  50% {
    transform: translateY(-58px) scale(0.92, 1.08);
  }
  86% {
    transform: translateY(0) scale(1, 1);
  }
  100% {
    transform: translateY(0) scale(1.3, 0.65);
  }
}`}],a=t.length;e.s(["m",0,[{id:"all",label:"All Effects"},{id:"buttons",label:"Buttons"},{id:"loaders",label:"Loaders"},{id:"text",label:"Text Effects"},{id:"hover",label:"Hover Cards"},{id:"backgrounds",label:"Backgrounds"},{id:"animations",label:"Animations"}],"z",0,t,"a",0,a],33277)}]);