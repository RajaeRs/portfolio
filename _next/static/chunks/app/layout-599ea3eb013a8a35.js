(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{1105:(e,t,r)=>{Promise.resolve().then(r.bind(r,8302)),Promise.resolve().then(r.t.bind(r,9316,23)),Promise.resolve().then(r.t.bind(r,9324,23))},8302:(e,t,r)=>{"use strict";r.d(t,{default:()=>m});var n=r(5155),o=r(2115),l=r(8173),a=r.n(l),i=r(5565);let u=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()};var c={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let f=(0,o.forwardRef)((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:l=2,absoluteStrokeWidth:a,className:i="",children:u,iconNode:f,...d}=e;return(0,o.createElement)("svg",{ref:t,...c,width:n,height:n,stroke:r,strokeWidth:a?24*Number(l)/Number(n):l,className:s("lucide",i),...d},[...f.map(e=>{let[t,r]=e;return(0,o.createElement)(t,r)}),...Array.isArray(u)?u:[u]])}),d=(e,t)=>{let r=(0,o.forwardRef)((r,n)=>{let{className:l,...a}=r;return(0,o.createElement)(f,{ref:n,iconNode:t,className:s("lucide-".concat(u(e)),l),...a})});return r.displayName="".concat(e),r},p=d("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),h=d("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);function m(){let[e,t]=(0,o.useState)(!1),r=()=>{t(!e)};return(0,n.jsxs)("nav",{className:"fixed top-0 w-full text-foreground h-24 flex items-center bg-background z-10",children:[(0,n.jsxs)("ul",{className:"flex w-full h-full items-center justify-between font-bold text-lg pr-4",children:[(0,n.jsx)("li",{className:"text-2xl h-full flex ",children:(0,n.jsx)(a(),{href:"#welcome",children:(0,n.jsx)(i.default,{src:"/images/logo.svg",alt:"logo",width:250,height:250})})}),(0,n.jsxs)("div",{className:"hidden md:flex flex-1 justify-center space-x-4",children:[(0,n.jsx)("li",{className:"w-[20%]",children:(0,n.jsx)(a(),{href:"#about",children:"~/ about"})}),(0,n.jsx)("li",{className:"w-[20%]",children:(0,n.jsx)(a(),{href:"#projects",children:"~/ projects"})}),(0,n.jsx)("li",{className:"w-[20%]",children:(0,n.jsx)(a(),{href:"#contact",children:"~/ contact"})})]}),(0,n.jsx)("div",{className:"md:hidden",children:(0,n.jsx)("button",{onClick:r,className:"text-foreground focus:outline-none","aria-label":"Toggle mobile menu",children:e?(0,n.jsx)(p,{size:24}):(0,n.jsx)(h,{size:24})})})]}),e&&(0,n.jsxs)("div",{className:"fixed md:hidden inset-0 bg-background/90 top-24 flex flex-col items-center justify-center space-y-6 text-2xl",children:[(0,n.jsx)(a(),{href:"#about",className:"hover:text-primary",onClick:r,children:"~/ about"}),(0,n.jsx)(a(),{href:"#projects",className:"hover:text-primary",onClick:r,children:"~/ projects"}),(0,n.jsx)(a(),{href:"#contact",className:"hover:text-primary",onClick:r,children:"~/ contact"})]})]})}},8173:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let n=r(306),o=r(5155),l=n._(r(2115)),a=r(180),i=r(1394),u=r(4116),s=r(4445),c=r(5353),f=r(2170),d=r(9544);function p(e,t,r){"undefined"!=typeof window&&(async()=>e.prefetch(t,r))().catch(e=>{})}function h(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}r(2363);let m=l.default.forwardRef(function(e,t){let r,n;let{href:a,as:m,children:y,prefetch:g=null,passHref:b,replace:x,shallow:j,scroll:v,onClick:k,onMouseEnter:w,onTouchStart:E,legacyBehavior:_=!1,...N}=e;r=y,_&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let P=l.default.useContext(i.AppRouterContext),C=!1!==g,O=null===g?s.PrefetchKind.AUTO:s.PrefetchKind.FULL,{href:M,as:I}=l.default.useMemo(()=>{let e=h(a);return{href:e,as:m?h(m):e}},[a,m]),T=l.default.useRef(M),S=l.default.useRef(I);_&&(n=l.default.Children.only(r));let A=_?n&&"object"==typeof n&&n.ref:t,[R,U,L]=(0,u.useIntersection)({rootMargin:"200px"}),z=l.default.useCallback(e=>{(S.current!==I||T.current!==M)&&(L(),S.current=I,T.current=M),R(e)},[I,M,L,R]),F=(0,c.useMergedRef)(z,A);l.default.useEffect(()=>{P&&U&&C&&p(P,M,{kind:O})},[I,M,U,C,P,O]);let K={ref:F,onClick(e){_||"function"!=typeof k||k(e),_&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),P&&!e.defaultPrevented&&function(e,t,r,n,o,a,i){let{nodeName:u}=e.currentTarget;"A"===u.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),l.default.startTransition(()=>{let e=null==i||i;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,P,M,I,x,j,v)},onMouseEnter(e){_||"function"!=typeof w||w(e),_&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),P&&C&&p(P,M,{kind:O})},onTouchStart:function(e){_||"function"!=typeof E||E(e),_&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),P&&C&&p(P,M,{kind:O})}};return(0,f.isAbsoluteUrl)(I)?K.href=I:_&&!b&&("a"!==n.type||"href"in n.props)||(K.href=(0,d.addBasePath)(I)),_?l.default.cloneElement(n,K):(0,o.jsx)("a",{...N,...K,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cancelIdleCallback:function(){return n},requestIdleCallback:function(){return r}});let r="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},n="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4116:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let n=r(2115),o=r(8571),l="function"==typeof IntersectionObserver,a=new Map,i=[];function u(e){let{rootRef:t,rootMargin:r,disabled:u}=e,s=u||!l,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(l){if(s||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},i.push(r),a.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,d.current]),[p,c,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},180:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return l},formatWithValidation:function(){return i},urlObjectKeys:function(){return a}});let n=r(9955)._(r(4156)),o=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,l=e.protocol||"",a=e.pathname||"",i=e.hash||"",u=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),u&&"object"==typeof u&&(u=String(n.urlQueryToSearchParams(u)));let c=e.search||u&&"?"+u||"";return l&&!l.endsWith(":")&&(l+=":"),e.slashes||(!l||o.test(l))&&!1!==s?(s="//"+(s||""),a&&"/"!==a[0]&&(a="/"+a)):s||(s=""),i&&"#"!==i[0]&&(i="#"+i),c&&"?"!==c[0]&&(c="?"+c),""+l+s+(a=a.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+i}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function i(e){return l(e)}},4156:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,o]=e;Array.isArray(o)?o.forEach(e=>t.append(r,n(e))):t.set(r,n(o))}),t}function l(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return l},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},2170:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return g},NormalizeError:function(){return m},PageNotFoundError:function(){return y},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return u},getLocationOrigin:function(){return a},getURL:function(){return i},isAbsoluteUrl:function(){return l},isResSent:function(){return s},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return x}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),l=0;l<n;l++)o[l]=arguments[l];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function i(){let{href:e}=window.location,t=a();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&s(r))return n;if(!n)throw Error('"'+u(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class m extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class g extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function x(e){return JSON.stringify({message:e.message,stack:e.stack})}},9324:()=>{},9316:e=>{e.exports={style:{fontFamily:"'Thasadith', 'Thasadith Fallback'",fontStyle:"normal"},className:"__className_f450af",variable:"__variable_f450af"}}},e=>{var t=t=>e(e.s=t);e.O(0,[125,565,441,517,358],()=>t(1105)),_N_E=e.O()}]);