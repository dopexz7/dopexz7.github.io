(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[843],{6505:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/update-profile",function(){return t(666)}])},8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],s=!0,l=!1;try{for(t=t.call(e);!(s=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);s=!0);}catch(i){l=!0,a=i}finally{try{s||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var o,s=(o=t(7294))&&o.__esModule?o:{default:o},l=t(6273),i=t(387),c=t(7190);var u={};function f(e,r,t,n){if(e&&l.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[r+"%"+t+(a?"%"+a:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=i.useRouter(),o=s.default.useMemo((function(){var r=a(l.resolveHref(n,e.href,!0),2),t=r[0],o=r[1];return{href:t,as:e.as?l.resolveHref(n,e.as):o||t}}),[n,e.href,e.as]),d=o.href,p=o.as,m=e.children,v=e.replace,h=e.shallow,y=e.scroll,b=e.locale;"string"===typeof m&&(m=s.default.createElement("a",null,m));var x=(r=s.default.Children.only(m))&&"object"===typeof r&&r.ref,j=a(c.useIntersection({rootMargin:"200px"}),2),w=j[0],N=j[1],g=s.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);s.default.useEffect((function(){var e=N&&t&&l.isLocalURL(d),r="undefined"!==typeof b?b:n&&n.locale,a=u[d+"%"+p+(r?"%"+r:"")];e&&!a&&f(n,d,p,{locale:r})}),[p,d,N,b,t,n]);var I={ref:g,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,o,s,i){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),r[a?"replace":"push"](t,n,{shallow:o,locale:i,scroll:s}))}(e,n,d,p,v,h,y,b)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var C="undefined"!==typeof b?b:n&&n.locale,E=n&&n.isLocaleDomain&&l.getDomainLocale(p,C,n&&n.locales,n&&n.domainLocales);I.href=E||l.addBasePath(l.addLocale(p,C,n&&n.defaultLocale))}return s.default.cloneElement(r,I)};r.default=d},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,o=[],s=!0,l=!1;try{for(t=t.call(e);!(s=(n=t.next()).done)&&(o.push(n.value),!r||o.length!==r);s=!0);}catch(i){l=!0,a=i}finally{try{s||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!l,n=o.useRef(),c=a(o.useState(!1),2),u=c[0],f=c[1],d=o.useCallback((function(e){n.current&&(n.current(),n.current=void 0),t||u||e&&e.tagName&&(n.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=i.get(r);if(t)return t;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return i.set(r,t={id:r,observer:a,elements:n}),t}(t),a=n.id,o=n.observer,s=n.elements;return s.set(e,r),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:r}))}),[t,r,u]);return o.useEffect((function(){if(!l&&!u){var e=s.requestIdleCallback((function(){return f(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[u]),[d,u]};var o=t(7294),s=t(9311),l="undefined"!==typeof IntersectionObserver;var i=new Map},666:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return d}});var n=t(5893),a=t(7294),o=t(7525),s=t(5197),l=t(1676),i=t(5005),c=(t(8210),t(5819)),u=t(1664),f=t(1163);function d(){var e=(0,a.useRef)(),r=(0,a.useRef)(),t=(0,a.useRef)(),d=(0,c.a)(),p=d.currentUser,m=d.updatePassword,v=d.updateEmail,h=(0,a.useState)(""),y=h[0],b=h[1],x=(0,a.useState)(!1),j=x[0],w=x[1],N=(0,f.useRouter)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"main-container",children:[(0,n.jsx)(o.Z,{children:(0,n.jsxs)(o.Z.Body,{children:[(0,n.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),y&&(0,n.jsx)(s.Z,{variant:"danger",children:y}),(0,n.jsxs)(l.Z,{onSubmit:function(n){if(n.preventDefault(),r.current.value!==t.current.value)return b("Passwords do not match");var a=[];w(!0),b(""),e.current.value!==p.email&&a.push(v(e.current.value)),r.current.value&&a.push(m(r.current.value)),Promise.all(a).then((function(){N.push("/dashboard")})).catch((function(){b("Failed to update account")})).finally((function(){w(!1)}))},children:[(0,n.jsxs)(l.Z.Group,{id:"email",children:[(0,n.jsx)(l.Z.Label,{children:"Email"}),(0,n.jsx)(l.Z.Control,{type:"email",ref:e,required:!0,defaultValue:p.email})]}),(0,n.jsxs)(l.Z.Group,{id:"password",children:[(0,n.jsx)(l.Z.Label,{children:"Password"}),(0,n.jsx)(l.Z.Control,{type:"password",ref:r,placeholder:"Leave blank to keep the same"})]}),(0,n.jsxs)(l.Z.Group,{id:"password-confirm",children:[(0,n.jsx)(l.Z.Label,{children:"Password Confirmation"}),(0,n.jsx)(l.Z.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),(0,n.jsx)(i.Z,{disabled:j,className:"w-100",type:"submit",children:"Update"})]})]})}),(0,n.jsx)("div",{className:"w-100 text-center mt-2",children:(0,n.jsx)(u.default,{href:"/dashboard",children:"Cancel"})})]})})}},1664:function(e,r,t){e.exports=t(8418)},1163:function(e,r,t){e.exports=t(387)},1676:function(e,r,t){"use strict";t.d(r,{Z:function(){return V}});var n=t(4184),a=t.n(n),o=t(5697),s=t.n(o),l=t(7294),i=t(5893);const c={type:s().string,tooltip:s().bool,as:s().elementType},u=l.forwardRef((({as:e="div",className:r,type:t="valid",tooltip:n=!1,...o},s)=>(0,i.jsx)(e,{...o,ref:s,className:a()(r,`${t}-${n?"tooltip":"feedback"}`)})));u.displayName="Feedback",u.propTypes=c;var f=u;var d=l.createContext({}),p=t(6792);const m=l.forwardRef((({id:e,bsPrefix:r,className:t,type:n="checkbox",isValid:o=!1,isInvalid:s=!1,as:c="input",...u},f)=>{const{controlId:m}=(0,l.useContext)(d);return r=(0,p.vE)(r,"form-check-input"),(0,i.jsx)(c,{...u,ref:f,type:n,id:e||m,className:a()(t,r,o&&"is-valid",s&&"is-invalid")})}));m.displayName="FormCheckInput";var v=m;const h=l.forwardRef((({bsPrefix:e,className:r,htmlFor:t,...n},o)=>{const{controlId:s}=(0,l.useContext)(d);return e=(0,p.vE)(e,"form-check-label"),(0,i.jsx)("label",{...n,ref:o,htmlFor:t||s,className:a()(r,e)})}));h.displayName="FormCheckLabel";var y=h;const b=l.forwardRef((({id:e,bsPrefix:r,bsSwitchPrefix:t,inline:n=!1,disabled:o=!1,isValid:s=!1,isInvalid:c=!1,feedbackTooltip:u=!1,feedback:m,feedbackType:h,className:b,style:x,title:j="",type:w="checkbox",label:N,children:g,as:I="input",...C},E)=>{r=(0,p.vE)(r,"form-check"),t=(0,p.vE)(t,"form-switch");const{controlId:k}=(0,l.useContext)(d),P=(0,l.useMemo)((()=>({controlId:e||k})),[k,e]),R=!g&&null!=N&&!1!==N||function(e,r){return l.Children.toArray(e).some((e=>l.isValidElement(e)&&e.type===r))}(g,y),L=(0,i.jsx)(v,{...C,type:"switch"===w?"checkbox":w,ref:E,isValid:s,isInvalid:c,disabled:o,as:I});return(0,i.jsx)(d.Provider,{value:P,children:(0,i.jsx)("div",{style:x,className:a()(b,R&&r,n&&`${r}-inline`,"switch"===w&&t),children:g||(0,i.jsxs)(i.Fragment,{children:[L,R&&(0,i.jsx)(y,{title:j,children:N}),m&&(0,i.jsx)(f,{type:h,tooltip:u,children:m})]})})})}));b.displayName="FormCheck";var x=Object.assign(b,{Input:v,Label:y});t(2473);const j=l.forwardRef((({bsPrefix:e,type:r,size:t,htmlSize:n,id:o,className:s,isValid:c=!1,isInvalid:u=!1,plaintext:f,readOnly:m,as:v="input",...h},y)=>{const{controlId:b}=(0,l.useContext)(d);let x;return e=(0,p.vE)(e,"form-control"),x=f?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${t}`]:t},(0,i.jsx)(v,{...h,type:r,size:n,ref:y,readOnly:m,id:o||b,className:a()(s,x,c&&"is-valid",u&&"is-invalid","color"===r&&`${e}-color`)})}));j.displayName="FormControl";var w=Object.assign(j,{Feedback:f}),N=(0,t(6611).Z)("form-floating");const g=l.forwardRef((({controlId:e,as:r="div",...t},n)=>{const a=(0,l.useMemo)((()=>({controlId:e})),[e]);return(0,i.jsx)(d.Provider,{value:a,children:(0,i.jsx)(r,{...t,ref:n})})}));g.displayName="FormGroup";var I=g;const C=["xxl","xl","lg","md","sm","xs"];const E=l.forwardRef(((e,r)=>{const[{className:t,...n},{as:o="div",bsPrefix:s,spans:l}]=function({as:e,bsPrefix:r,className:t,...n}){r=(0,p.vE)(r,"col");const o=[],s=[];return C.forEach((e=>{const t=n[e];let a,l,i;delete n[e],"object"===typeof t&&null!=t?({span:a,offset:l,order:i}=t):a=t;const c="xs"!==e?`-${e}`:"";a&&o.push(!0===a?`${r}${c}`:`${r}${c}-${a}`),null!=i&&s.push(`order${c}-${i}`),null!=l&&s.push(`offset${c}-${l}`)})),[{...n,className:a()(t,...o,...s)},{as:e,bsPrefix:r,spans:o}]}(e);return(0,i.jsx)(o,{...n,ref:r,className:a()(t,!l.length&&s)})}));E.displayName="Col";var k=E;const P=l.forwardRef((({as:e="label",bsPrefix:r,column:t,visuallyHidden:n,className:o,htmlFor:s,...c},u)=>{const{controlId:f}=(0,l.useContext)(d);r=(0,p.vE)(r,"form-label");let m="col-form-label";"string"===typeof t&&(m=`${m} ${m}-${t}`);const v=a()(o,r,n&&"visually-hidden",t&&m);return s=s||f,t?(0,i.jsx)(k,{ref:u,as:"label",className:v,htmlFor:s,...c}):(0,i.jsx)(e,{ref:u,className:v,htmlFor:s,...c})}));P.displayName="FormLabel",P.defaultProps={column:!1,visuallyHidden:!1};var R=P;const L=l.forwardRef((({bsPrefix:e,className:r,id:t,...n},o)=>{const{controlId:s}=(0,l.useContext)(d);return e=(0,p.vE)(e,"form-range"),(0,i.jsx)("input",{...n,type:"range",ref:o,className:a()(r,e),id:t||s})}));L.displayName="FormRange";var F=L;const $=l.forwardRef((({bsPrefix:e,size:r,htmlSize:t,className:n,isValid:o=!1,isInvalid:s=!1,id:c,...u},f)=>{const{controlId:m}=(0,l.useContext)(d);return e=(0,p.vE)(e,"form-select"),(0,i.jsx)("select",{...u,size:t,ref:f,className:a()(n,e,r&&`${e}-${r}`,o&&"is-valid",s&&"is-invalid"),id:c||m})}));$.displayName="FormSelect";var S=$;const _=l.forwardRef((({bsPrefix:e,className:r,as:t="small",muted:n,...o},s)=>(e=(0,p.vE)(e,"form-text"),(0,i.jsx)(t,{...o,ref:s,className:a()(r,e,n&&"text-muted")}))));_.displayName="FormText";var M=_;const O=l.forwardRef(((e,r)=>(0,i.jsx)(x,{...e,ref:r,type:"switch"})));O.displayName="Switch";var Z=Object.assign(O,{Input:x.Input,Label:x.Label});const A=l.forwardRef((({bsPrefix:e,className:r,children:t,controlId:n,label:o,...s},l)=>(e=(0,p.vE)(e,"form-floating"),(0,i.jsxs)(I,{ref:l,className:a()(r,e),controlId:n,...s,children:[t,(0,i.jsx)("label",{htmlFor:n,children:o})]}))));A.displayName="FloatingLabel";var T=A;const U={_ref:s().any,validated:s().bool,as:s().elementType},z=l.forwardRef((({className:e,validated:r,as:t="form",...n},o)=>(0,i.jsx)(t,{...n,ref:o,className:a()(e,r&&"was-validated")})));z.displayName="Form",z.propTypes=U;var V=Object.assign(z,{Group:I,Control:w,Floating:N,Check:x,Switch:Z,Label:R,Text:M,Range:F,Select:S,FloatingLabel:T})},2473:function(e){"use strict";var r=function(){};e.exports=r}},function(e){e.O(0,[293,301,774,888,179],(function(){return r=6505,e(e.s=r);var r}));var r=e.O();_N_E=r}]);