(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[221],{9088:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/comps/topnav",function(){return t(1672)}])},8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var a,i=(a=t(7294))&&a.__esModule?a:{default:a},l=t(6273),u=t(387),c=t(7190);var f={};function s(e,r,t,n){if(e&&l.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=u.useRouter(),a=i.default.useMemo((function(){var r=o(l.resolveHref(n,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?l.resolveHref(n,e.as):a||t}}),[n,e.href,e.as]),d=a.href,p=a.as,h=e.children,v=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var g=(r=i.default.Children.only(h))&&"object"===typeof r&&r.ref,w=o(c.useIntersection({rootMargin:"200px"}),2),j=w[0],E=w[1],_=i.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);i.default.useEffect((function(){var e=E&&t&&l.isLocalURL(d),r="undefined"!==typeof b?b:n&&n.locale,o=f[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(n,d,p,{locale:r})}),[p,d,E,b,t,n]);var x={ref:_,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),r[o?"replace":"push"](t,n,{shallow:a,locale:u,scroll:i}))}(e,n,d,p,v,y,m,b)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),l.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var A="undefined"!==typeof b?b:n&&n.locale,M=n&&n.isLocaleDomain&&l.getDomainLocale(p,A,n&&n.locales,n&&n.domainLocales);x.href=M||l.addBasePath(l.addLocale(p,A,n&&n.defaultLocale))}return i.default.cloneElement(r,x)};r.default=d},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==t.return||t.return()}finally{if(l)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!l,n=a.useRef(),c=o(a.useState(!1),2),f=c[0],s=c[1],d=a.useCallback((function(e){n.current&&(n.current(),n.current=void 0),t||f||e&&e.tagName&&(n.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=u.get(r);if(t)return t;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return u.set(r,t={id:r,observer:o,elements:n}),t}(t),o=n.id,a=n.observer,i=n.elements;return i.set(e,r),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:r}))}),[t,r,f]);return a.useEffect((function(){if(!l&&!f){var e=i.requestIdleCallback((function(){return s(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[d,f]};var a=t(7294),i=t(9311),l="undefined"!==typeof IntersectionObserver;var u=new Map},1672:function(e,r,t){"use strict";t.r(r);var n=t(5893),o=t(1664);r.default=function(){return(0,n.jsxs)("div",{className:"main-header-topnav",children:[(0,n.jsx)("div",{className:"main-header-logo",children:"#NPOTW"}),(0,n.jsxs)("div",{className:"main-header-navigation",children:[(0,n.jsx)("a",{href:"#",children:"This week"}),(0,n.jsx)("a",{href:"#",children:"Past weeks"}),(0,n.jsx)("a",{href:"#",children:"Artists"}),(0,n.jsx)(o.default,{href:"/submit-art",children:"Submit art"}),(0,n.jsx)("a",{children:"/"}),(0,n.jsx)(o.default,{href:"/dashboard",children:"Dashboard"})]})]})}},1664:function(e,r,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return r=9088,e(e.s=r);var r}));var r=e.O();_N_E=r}]);