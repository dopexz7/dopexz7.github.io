(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{1976:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return r(3775)}])},3775:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return w},default:function(){return j}});var n=r(5893),s=r(7294),o=r(5232),i=r(4051),l=r.n(i),a=r(8533),c=r(7500),u=r(5434),d=r(4849),h=(r(4714),r(6195));function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function x(e,t,r,n,s,o,i){try{var l=e[o](i),a=l.value}catch(c){return void r(c)}l.done?t(a):Promise.resolve(a).then(n,s)}function p(e){return function(){var t=this,r=arguments;return new Promise((function(n,s){var o=e.apply(t,r);function i(e){x(o,n,s,i,l,"next",e)}function l(e){x(o,n,s,i,l,"throw",e)}i(void 0)}))}}function m(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e){var t=e.session,r=e.data,o=(0,s.useState)(null),i=o[0],h=o[1],f=(0,s.useState)(!1),x=(f[0],f[1],(0,s.useState)("")),v=x[0],b=x[1],w=(0,s.useState)(!1),j=w[0],I=w[1],g=(0,s.useState)(r),N=g[0],y=g[1],k=function(){var e=p(l().mark((function e(){var t,r,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=N.length+12,e.next=4,fetch("https://emxllayyisdskjtscvck.supabase.co/rest/v1/allemotes?select=*",{headers:{apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVteGxsYXl5aXNkc2tqdHNjdmNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDcwODgxNDMsImV4cCI6MTk2MjY2NDE0M30.-AGqiBqpHvuSGzlp3WPLwBfrUXu7hk0wl5OkH9AQjvI",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVteGxsYXl5aXNkc2tqdHNjdmNrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NzA4ODE0MywiZXhwIjoxOTYyNjY0MTQzfQ.A4onJm_IC2wRv1ATjlSGzI62msRjZ8V3p0KeL9I3bQg",Range:"".concat(N.length,"-").concat(t)}});case 4:return r=e.sent,e.next=7,r.json();case 7:n=e.sent,y((function(e){return m(e).concat(m(n))})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),C=(0,s.useState)(!1),S=C[0],O=C[1],Z=(0,s.useState)(!0),J=(Z[0],Z[1]);(0,s.useEffect)((function(){J(!1)}),[]);var X=function(){var e=p(l().mark((function e(){var t,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://emxllayyisdskjtscvck.supabase.co/rest/v1/allemotes?select=*",{headers:{apikey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVteGxsYXl5aXNkc2tqdHNjdmNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDcwODgxNDMsImV4cCI6MTk2MjY2NDE0M30.-AGqiBqpHvuSGzlp3WPLwBfrUXu7hk0wl5OkH9AQjvI",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVteGxsYXl5aXNkc2tqdHNjdmNrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY0NzA4ODE0MywiZXhwIjoxOTYyNjY0MTQzfQ.A4onJm_IC2wRv1ATjlSGzI62msRjZ8V3p0KeL9I3bQg"}});case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,h(r),v.length>2?(I(!0),O(!1)):(I(!1),O(!0)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"px-6 py-5 border-b-2 flex flex-row items-center",children:[(0,n.jsx)("div",{className:"font-bold text-lg flex-1 max-w-xs",children:"All emotes"}),(0,n.jsxs)("div",{className:"overflow-hidden duration-300 border-2 px-3 py-1 rounded-2xl ml-auto flex flex-row items-center text-md font-semibold",children:[(0,n.jsx)(u.Zh8,{className:"mr-3 ml-auto"}),(0,n.jsx)("input",{value:v,onChange:function(e){return b(e.target.value)},type:"text",className:"peer w-16 bg-transparent border-0 focus:w-36 duration-300",placeholder:"Search..."}),(0,n.jsx)("div",{onClick:function(){X()},className:"hover:border-darker-purple text-main-black hover:bg-darker-purple hover:text-white cursor-pointer peer-focus:opacity-100 opacity-0 duration-300 w-1 peer-focus:w-20 overflow-hidden border-2 px-1 items-center flex justify-center rounded-3xl",children:"Update"}),(0,n.jsx)(c.u,{position:"top",placement:"end",gutter:15,label:"at least 3 characters",opened:S})]})]}),j&&v.length>2?(0,n.jsx)("div",{className:"overflow-y-scroll overflow-x-hidden w-full grid xgrd gap-3 p-6",children:i.filter((function(e){return""===v||e.code.toLowerCase().includes(v.toLowerCase())?e:void 0})).map((function(e,r){return(0,n.jsx)("div",{className:"h-32 w-32 group duration-300 bg-accent-white rounded-md",children:(0,n.jsxs)("div",{className:"w-full h-32 overflow-hidden text-black flex flex-row items-center justify-center relative border-2 rounded-md",children:[(0,n.jsx)("img",{className:"absolute w-16 duration-300 group-hover:w-36 group-hover:opacity-25",src:e.src,alt:""}),(0,n.jsxs)("div",{className:"duration-300 flex flex-col opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 justify-center items-center",children:[(0,n.jsx)("div",{className:"overflow-hidden text-sm font-bold ",children:e.code}),(0,n.jsxs)("div",{className:"text-xs ",children:["by ",e.by]}),t?(0,n.jsxs)("div",{className:"text-xs mt-1 bg-darker-purple rounded-3xl items-center justify-center p-1 flex flex-row text-white hover:bg-white hover:text-darker-purple duration-300 font-bold cursor-pointer",children:[(0,n.jsx)(u.OrI,{className:"mr-1"})," add to channel"]}):""]})]})},r)}))}):(0,n.jsx)("div",{id:"scrollableDiv",className:"overflow-y-scroll overflow-x-hidden w-full",children:(0,n.jsx)(a.Z,{className:"grid xgrd gap-3 p-6",dataLength:N.length,next:k,hasMore:!0,scrollableTarget:"scrollableDiv",children:N&&N.map((function(e,r){return(0,n.jsx)("div",{className:"h-32 w-32 group duration-300 bg-accent-white rounded-md",children:(0,n.jsxs)("div",{className:"w-full h-32 overflow-hidden text-black flex flex-row items-center justify-center relative border-2 rounded-md",children:[(0,n.jsx)("img",{className:"absolute w-16 duration-300 group-hover:w-36 group-hover:opacity-25",src:e.src,alt:""}),(0,n.jsxs)("div",{className:"duration-300 flex flex-col opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100 justify-center items-center",children:[(0,n.jsx)("div",{className:"overflow-hidden text-sm font-bold ",children:e.code}),(0,n.jsxs)("div",{className:"text-xs ",children:["by ",e.by]}),t?(0,n.jsxs)("div",{className:"text-xs mt-1 bg-darker-purple rounded-3xl items-center justify-center p-1 flex flex-row text-white hover:bg-white hover:text-darker-purple duration-300 font-bold cursor-pointer",children:[(0,n.jsx)(u.OrI,{className:"mr-1"})," add to channel"]}):""]})]})},r)}))||(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.Z,{height:125,count:6,width:125,baseColor:"#e5e7eb",highlightColor:"#f9fafb"}),(0,n.jsx)(d.Z,{height:125,count:6,width:125,baseColor:"#e5e7eb",highlightColor:"#f9fafb"}),(0,n.jsx)(d.Z,{height:125,count:6,width:125,baseColor:"#e5e7eb",highlightColor:"#f9fafb"}),(0,n.jsx)(d.Z,{height:125,count:6,width:125,baseColor:"#e5e7eb",highlightColor:"#f9fafb"}),(0,n.jsx)(d.Z,{height:125,count:6,width:125,baseColor:"#e5e7eb",highlightColor:"#f9fafb"}),(0,n.jsx)(d.Z,{height:125,count:6,width:125,baseColor:"#e5e7eb",highlightColor:"#f9fafb"})]})})})]})}function b(e){var t=e.session,r=e.data;return(0,n.jsxs)(o.Z,{session:t,title:"Dashboard",children:[(0,n.jsx)("div",{className:"text-black border-r-2 h-full w-[55%] flex flex-col",children:(0,n.jsx)(v,{data:r,session:t})}),(0,n.jsxs)("div",{className:"text-black bg-border-white h-full w-3/12 flex flex-col",children:[(0,n.jsx)("div",{className:"p-5 flex flex-row items-center justify-center ",children:(0,n.jsx)("div",{className:"font-bold text-accent-purple px-6 py-2 rounded-2xl text-lg",children:"Recently uploaded emotes"})}),(0,n.jsx)("div",{className:"w-full overflow-hidden h-full p-3 flex flex-col space-y-3 items-center",children:(0,n.jsx)("div",{className:"overflow-auto flex flex-row items-center space-x-3 bg-white justify-center w-full h-full",children:(0,n.jsx)("div",{children:(0,n.jsx)("button",{className:"button block",onClick:function(){return h.O.auth.signOut()},children:"Sign Out"})})})})]})]})}var w=!0;function j(e){var t=(0,s.useState)(null),r=t[0],o=t[1];return(0,s.useEffect)((function(){o(h.O.auth.session());var e=h.O.auth.onAuthStateChange((function(e,t){o(t)})).data;return function(){e.unsubscribe()}}),[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(b,{data:e.data,session:r})})}}},function(e){e.O(0,[445,13,228,178,168,3,232,774,888,179],(function(){return t=1976,e(e.s=t);var t}));var t=e.O();_N_E=t}]);