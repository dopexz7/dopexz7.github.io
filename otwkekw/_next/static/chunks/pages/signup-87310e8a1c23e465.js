(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{8971:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return c(4266)}])},8418:function(a,b,c){"use strict";function d(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}function e(a,b){return(function(a){if(Array.isArray(a))return a})(a)||(function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}})(a,b)||f(a,b)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}function f(a,b){if(a){if("string"==typeof a)return d(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return d(a,b)}}b.default=void 0;var g,h=(g=c(7294))&&g.__esModule?g:{default:g},i=c(6273),j=c(387),k=c(7190),l={};function m(a,b,c,d){if(a&&i.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;l[b+"%"+c+(e?"%"+e:"")]=!0}}b.default=function(a){var b,c=!1!==a.prefetch,d=j.useRouter(),f=h.default.useMemo(function(){var b=e(i.resolveHref(d,a.href,!0),2),c=b[0],f=b[1];return{href:c,as:a.as?i.resolveHref(d,a.as):f||c}},[d,a.href,a.as]),g=f.href,n=f.as,o=a.children,p=a.replace,q=a.shallow,r=a.scroll,s=a.locale;"string"==typeof o&&(o=h.default.createElement("a",null,o));var t=(b=h.default.Children.only(o))&&"object"==typeof b&&b.ref,u=e(k.useIntersection({rootMargin:"200px"}),2),v=u[0],w=u[1],x=h.default.useCallback(function(a){v(a),t&&("function"==typeof t?t(a):"object"==typeof t&&(t.current=a))},[t,v]);h.default.useEffect(function(){var a=w&&c&&i.isLocalURL(g),b=void 0!==s?s:d&&d.locale,e=l[g+"%"+n+(b?"%"+b:"")];a&&!e&&m(d,g,n,{locale:b})},[n,g,w,s,c,d]);var y={ref:x,onClick:function(a){var c,e,f,h,j,k,l,m,o,t;b.props&&"function"==typeof b.props.onClick&&b.props.onClick(a),a.defaultPrevented||(c=a,e=d,f=g,h=n,j=p,k=q,l=r,m=s,"A"===c.currentTarget.nodeName&&((t=(o=c).currentTarget.target)&&"_self"!==t||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.nativeEvent&&2===o.nativeEvent.which||!i.isLocalURL(f))||(c.preventDefault(),null==l&&h.indexOf("#")>=0&&(l=!1),e[j?"replace":"push"](f,h,{shallow:k,locale:m,scroll:l})))}};if(y.onMouseEnter=function(a){b.props&&"function"==typeof b.props.onMouseEnter&&b.props.onMouseEnter(a),i.isLocalURL(g)&&m(d,g,n,{priority:!0})},a.passHref||"a"===b.type&&!("href"in b.props)){var z=void 0!==s?s:d&&d.locale,A=d&&d.isLocaleDomain&&i.getDomainLocale(n,z,d&&d.locales,d&&d.domainLocales);y.href=A||i.addBasePath(i.addLocale(n,z,d&&d.defaultLocale))}return h.default.cloneElement(b,y)}},7190:function(a,b,c){"use strict";function d(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}Object.defineProperty(b,"__esModule",{value:!0}),b.useIntersection=function(a){var b,c=a.rootMargin,i=a.disabled||!g,j=e.useRef(),k=function(a){if(Array.isArray(a))return a}(b=e.useState(!1))||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(b,2)||function(a,b){if(a){if("string"==typeof a)return d(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return d(a,b)}}(b,2)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),l=k[0],m=k[1],n=e.useCallback(function(a){j.current&&(j.current(),j.current=void 0),!i&&!l&&a&&a.tagName&&(j.current=h(a,function(a){return a&&m(a)},{rootMargin:c}))},[i,c,l]);return e.useEffect(function(){if(!g&&!l){var a=f.requestIdleCallback(function(){return m(!0)});return function(){return f.cancelIdleCallback(a)}}},[l]),[n,l]};var e=c(7294),f=c(9311),g="undefined"!=typeof IntersectionObserver;function h(a,b,c){var d=j(c),e=d.id,f=d.observer,g=d.elements;return g.set(a,b),f.observe(a),function(){g.delete(a),f.unobserve(a),0===g.size&&(f.disconnect(),i.delete(e))}}var i=new Map();function j(a){var b=a.rootMargin||"",c=i.get(b);if(c)return c;var d=new Map(),e=new IntersectionObserver(function(a){a.forEach(function(a){var b=d.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},a);return i.set(b,c={id:b,observer:e,elements:d}),c}},4266:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return q}});var d=c(4051),e=c.n(d),f=c(5893),g=c(7294),h=c(7525),i=c(5197),j=c(1676),k=c(5005),l=c(5819),m=c(1163),n=c(1664),o=c(8210);function p(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function q(){var a=(0,g.useRef)(),b=(0,g.useRef)(),c=(0,g.useRef)(),d=(0,l.a)().signup,o=(0,m.useRouter)();(0,l.a)().currentUser&&o.push("/dashboard");var q=(0,g.useState)(""),r=q[0],s=q[1],t=(0,g.useState)(!1),u=t[0],v=t[1];function w(){return(w=(function(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){var f=a.apply(b,c);function g(a){p(f,d,e,g,h,"next",a)}function h(a){p(f,d,e,g,h,"throw",a)}g(void 0)})}})(e().mark(function f(g){return e().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(g.preventDefault(),!(b.current.value!==c.current.value)){e.next=3;break}return e.abrupt("return",s("Passwords do not match!"));case 3:return e.prev=3,s(""),v(!0),e.next=8,d(a.current.value,b.current.value);case 8:o.push("/dashboard"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),s("Failed to create an account!");case 14:v(!1);case 15:case"end":return e.stop()}},f,null,[[3,11]])}))).apply(this,arguments)}return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(l.Z,{children:(0,f.jsxs)("div",{className:"main-container",children:[(0,f.jsx)(h.Z,{children:(0,f.jsxs)(h.Z.Body,{children:[(0,f.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),r&&(0,f.jsx)(i.Z,{variant:"danger",children:r}),(0,f.jsxs)(j.Z,{onSubmit:function(a){return w.apply(this,arguments)},children:[(0,f.jsxs)(j.Z.Group,{id:"email",children:[(0,f.jsx)(j.Z.Label,{children:"Email"}),(0,f.jsx)(j.Z.Control,{type:"email",ref:a,required:!0})]}),(0,f.jsxs)(j.Z.Group,{id:"password",children:[(0,f.jsx)(j.Z.Label,{children:"Password"}),(0,f.jsx)(j.Z.Control,{type:"password",ref:b,required:!0})]}),(0,f.jsxs)(j.Z.Group,{id:"password-confirm",children:[(0,f.jsx)(j.Z.Label,{children:"Password Confirmation"}),(0,f.jsx)(j.Z.Control,{type:"password",ref:c,required:!0})]}),(0,f.jsx)(k.Z,{disabled:u,className:"w-100 mt-3",type:"submit",children:"Sign up"})]})]})}),(0,f.jsxs)("div",{className:"card-forgotetc w-100 text-center mt-2",children:["Already have an account? ",(0,f.jsx)(n.default,{href:"/login",children:"Login"})]})]})})})}c.n(o)},1664:function(a,b,c){a.exports=c(8418)},1163:function(a,b,c){a.exports=c(387)},1676:function(a,b,c){"use strict";c.d(b,{Z:function(){return M}});var d=c(4184),e=c.n(d),f=c(5697),g=c.n(f),h=c(7294),i=c(5893);const j={type:g().string,tooltip:g().bool,as:g().elementType},k=h.forwardRef(({as:a="div",className:b,type:c="valid",tooltip:d=!1,...f},g)=>(0,i.jsx)(a,{...f,ref:g,className:e()(b,`${c}-${d?"tooltip":"feedback"}`)}));k.displayName="Feedback",k.propTypes=j;var l=k;const m=h.createContext({});var n=m,o=c(6792);const p=h.forwardRef(({id:a,bsPrefix:b,className:c,type:d="checkbox",isValid:f=!1,isInvalid:g=!1,as:j="input",...k},l)=>{const{controlId:m}=(0,h.useContext)(n);return b=(0,o.vE)(b,"form-check-input"),(0,i.jsx)(j,{...k,ref:l,type:d,id:a||m,className:e()(c,b,f&&"is-valid",g&&"is-invalid")})});p.displayName="FormCheckInput";var q=p;const r=h.forwardRef(({bsPrefix:a,className:b,htmlFor:c,...d},f)=>{const{controlId:g}=(0,h.useContext)(n);return a=(0,o.vE)(a,"form-check-label"),(0,i.jsx)("label",{...d,ref:f,htmlFor:c||g,className:e()(b,a)})});r.displayName="FormCheckLabel";var s=r;const t=h.forwardRef(({id:a,bsPrefix:b,bsSwitchPrefix:c,inline:d=!1,disabled:f=!1,isValid:g=!1,isInvalid:j=!1,feedbackTooltip:k=!1,feedback:m,feedbackType:p,className:r,style:t,title:u="",type:v="checkbox",label:w,children:x,as:y="input",...z},A)=>{var B,C;b=(0,o.vE)(b,"form-check"),c=(0,o.vE)(c,"form-switch");const{controlId:D}=(0,h.useContext)(n),E=(0,h.useMemo)(()=>({controlId:a||D}),[D,a]),F=!x&&null!=w&& !1!==w||(B=x,C=s,h.Children.toArray(B).some(a=>h.isValidElement(a)&&a.type===C)),G=(0,i.jsx)(q,{...z,type:"switch"===v?"checkbox":v,ref:A,isValid:g,isInvalid:j,disabled:f,as:y});return(0,i.jsx)(n.Provider,{value:E,children:(0,i.jsx)("div",{style:t,className:e()(r,F&&b,d&&`${b}-inline`,"switch"===v&&c),children:x||(0,i.jsxs)(i.Fragment,{children:[G,F&&(0,i.jsx)(s,{title:u,children:w}),m&&(0,i.jsx)(l,{type:p,tooltip:k,children:m})]})})})});t.displayName="FormCheck";var u=Object.assign(t,{Input:q,Label:s});c(2473);const v=h.forwardRef(({bsPrefix:a,type:b,size:c,htmlSize:d,id:f,className:g,isValid:j=!1,isInvalid:k=!1,plaintext:l,readOnly:m,as:p="input",...q},r)=>{const{controlId:s}=(0,h.useContext)(n);a=(0,o.vE)(a,"form-control");let t;return t=l?{[`${a}-plaintext`]:!0}:{[a]:!0,[`${a}-${c}`]:c},(0,i.jsx)(p,{...q,type:b,size:d,ref:r,readOnly:m,id:f||s,className:e()(g,t,j&&"is-valid",k&&"is-invalid","color"===b&&`${a}-color`)})});v.displayName="FormControl";var w=Object.assign(v,{Feedback:l}),x=(0,c(6611).Z)("form-floating");const y=h.forwardRef(({controlId:a,as:b="div",...c},d)=>{const e=(0,h.useMemo)(()=>({controlId:a}),[a]);return(0,i.jsx)(n.Provider,{value:e,children:(0,i.jsx)(b,{...c,ref:d})})});y.displayName="FormGroup";var z=y;const A=["xxl","xl","lg","md","sm","xs"],B=h.forwardRef((a,b)=>{const[{className:c,...d},{as:f="div",bsPrefix:g,spans:h}]=function({as:a,bsPrefix:b,className:c,...d}){b=(0,o.vE)(b,"col");const f=[],g=[];return A.forEach(a=>{const c=d[a];delete d[a];let e,h,i;"object"==typeof c&&null!=c?{span:e,offset:h,order:i}=c:e=c;const j="xs"!==a?`-${a}`:"";e&&f.push(!0===e?`${b}${j}`:`${b}${j}-${e}`),null!=i&&g.push(`order${j}-${i}`),null!=h&&g.push(`offset${j}-${h}`)}),[{...d,className:e()(c,...f,...g)},{as:a,bsPrefix:b,spans:f}]}(a);return(0,i.jsx)(f,{...d,ref:b,className:e()(c,!h.length&&g)})});B.displayName="Col";var C=B;const D=h.forwardRef(({as:a="label",bsPrefix:b,column:c,visuallyHidden:d,className:f,htmlFor:g,...j},k)=>{const{controlId:l}=(0,h.useContext)(n);b=(0,o.vE)(b,"form-label");let m="col-form-label";"string"==typeof c&&(m=`${m} ${m}-${c}`);const p=e()(f,b,d&&"visually-hidden",c&&m);return(g=g||l,c)?(0,i.jsx)(C,{ref:k,as:"label",className:p,htmlFor:g,...j}):(0,i.jsx)(a,{ref:k,className:p,htmlFor:g,...j})});D.displayName="FormLabel",D.defaultProps={column:!1,visuallyHidden:!1};const E=h.forwardRef(({bsPrefix:a,className:b,id:c,...d},f)=>{const{controlId:g}=(0,h.useContext)(n);return a=(0,o.vE)(a,"form-range"),(0,i.jsx)("input",{...d,type:"range",ref:f,className:e()(b,a),id:c||g})});E.displayName="FormRange";const F=h.forwardRef(({bsPrefix:a,size:b,htmlSize:c,className:d,isValid:f=!1,isInvalid:g=!1,id:j,...k},l)=>{const{controlId:m}=(0,h.useContext)(n);return a=(0,o.vE)(a,"form-select"),(0,i.jsx)("select",{...k,size:c,ref:l,className:e()(d,a,b&&`${a}-${b}`,f&&"is-valid",g&&"is-invalid"),id:j||m})});F.displayName="FormSelect";const G=h.forwardRef(({bsPrefix:a,className:b,as:c="small",muted:d,...f},g)=>(a=(0,o.vE)(a,"form-text"),(0,i.jsx)(c,{...f,ref:g,className:e()(b,a,d&&"text-muted")})));G.displayName="FormText";const H=h.forwardRef((a,b)=>(0,i.jsx)(u,{...a,ref:b,type:"switch"}));H.displayName="Switch";var I=Object.assign(H,{Input:u.Input,Label:u.Label});const J=h.forwardRef(({bsPrefix:a,className:b,children:c,controlId:d,label:f,...g},h)=>(a=(0,o.vE)(a,"form-floating"),(0,i.jsxs)(z,{ref:h,className:e()(b,a),controlId:d,...g,children:[c,(0,i.jsx)("label",{htmlFor:d,children:f})]})));J.displayName="FloatingLabel";const K={_ref:g().any,validated:g().bool,as:g().elementType},L=h.forwardRef(({className:a,validated:b,as:c="form",...d},f)=>(0,i.jsx)(c,{...d,ref:f,className:e()(a,b&&"was-validated")}));L.displayName="Form",L.propTypes=K;var M=Object.assign(L,{Group:z,Control:w,Floating:x,Check:u,Switch:I,Label:D,Text:G,Range:E,Select:F,FloatingLabel:J})},2473:function(a){"use strict";a.exports=function(){}}},function(a){a.O(0,[293,301,774,888,179],function(){return a(a.s=8971)}),_N_E=a.O()}])