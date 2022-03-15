"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[232],{5232:function(e,t,r){r.d(t,{Z:function(){return O}});var s=r(5893),n=r(9008),a=r(7294),o=r(1664),l=[{title:"Home",path:"section0"},{title:"Donate",path:"section4"},{title:"Support",path:"section4"},{title:"Dashboard",path:"/dashboard"}],i=r(3750),c=r(9583),d=r(6727),u=r(1163),x=r(6195);function h(e){e.session;var t=(0,a.useState)(!1),r=(t[0],t[1],(0,u.useRouter)(),(0,a.useState)(!1)),n=r[0],x=r[1];return(0,s.jsx)("div",{className:"duration-300 z-50 w-screen",children:(0,s.jsxs)("div",{className:"max-w-7xl w-screen mr-auto ml-auto flex flex-row justify-center items-center p-8 duration-300 space-x-8 text-main-white text-sm font-semibold",children:[(0,s.jsx)(o.default,{href:"/",passHref:!0,children:(0,s.jsx)("div",{className:"font-normal cursor-pointer whitespace-nowrap text-clip w-max mr-auto text-white text-xl",children:"dopeChat"})}),l.map((function(e,t){return(0,s.jsx)(o.default,{href:e.path?e.path:"",passHref:!0,children:(0,s.jsx)("div",{className:"anim hover:text-white duration-300 cursor-pointer",children:e.title})},t)})),(0,s.jsxs)(d.v2,{as:"div",className:"anim relative inline-block",children:[(0,s.jsx)(d.v2.Button,{className:" ".concat(n?"bg-white text-darker-purple hover:bg-darker-purple hover:text-white":"text-main-white hover:text-white"," w-30 text-center rounded-lg px-4 py-2 duration-300 group text-sm font-semibold"),children:(0,s.jsxs)("div",{className:"inline-flex items-center justify-center ",onClick:function(){return x(!1)},children:["Links",(0,s.jsx)(i.SZO,{className:"".concat(n?"text-darker-purple  group-hover:text-white":"text-main-white  group-hover:text-white"," duration-300 w-3 h-3 ml-2"),"aria-hidden":"true"})]})}),(0,s.jsx)(d.uT,{onBlur:function(){return x(!1)},onFocus:function(){return x(!0)},as:a.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,s.jsxs)(d.v2.Items,{className:"text-darker-purple font-semibold font-xs absolute right-0 w-56 mt-3 origin-top-right bg-accent-white rounded-lg shadow-lg ",children:[(0,s.jsx)(d.v2.Item,{children:(0,s.jsxs)("a",{href:"#",className:"hover:bg-darker-purple hover:p-4 rounded-t-md overflow-hidden duration-300 hover:text-white group flex items-center p-3",children:[(0,s.jsx)(i.meP,{className:"mr-3"})," Twitter"]})}),(0,s.jsx)(d.v2.Item,{children:(0,s.jsxs)("a",{href:"#",className:"hover:bg-darker-purple hover:p-4 overflow-hidden duration-300 hover:text-white group flex items-center p-3",children:[(0,s.jsx)(c.j2d,{className:"mr-3"})," Discord"]})}),(0,s.jsx)(d.v2.Item,{children:(0,s.jsx)("a",{href:"#",className:"hover:bg-darker-purple hover:p-4 overflow-hidden duration-300 hover:text-white group flex items-center p-3",children:"Archive"})}),(0,s.jsx)(d.v2.Item,{children:(0,s.jsx)("a",{href:"#",className:"hover:bg-darker-purple hover:p-4 overflow-hidden duration-300 hover:text-white group flex items-center p-3",children:"Move"})}),(0,s.jsx)(d.v2.Item,{children:(0,s.jsx)("a",{href:"#",className:"hover:bg-darker-purple rounded-b-md hover:p-4 overflow-hidden duration-300 hover:text-white group flex items-center p-3",children:"Delete"})})]})})]}),(0,s.jsx)(o.default,{href:"/",passHref:!0,children:(0,s.jsx)("div",{className:"group w-max text-center cursor-pointer duration-300 bg-darker-purple shadow-lg rounded-lg px-4 py-2 text-white hover:bg-white hover:text-darker-purple",children:"Main page"})})]})})}var p=r(4051),m=r.n(p),f=r(5434),v=r(7548),b=r(2437),w=r(2268);function j(e,t,r,s,n,a,o){try{var l=e[a](o),i=l.value}catch(c){return void r(c)}l.done?t(i):Promise.resolve(i).then(s,n)}var g=["JPG","PNG","GIF","WEBP"],N=function(){var e=(0,a.useState)("Make sure the file name is named as the code of the emote ex. 'KEKW.png'"),t=e[0],r=e[1],n=function(){var e,t=(e=m().mark((function e(t){var s,n;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.name),e.prev=1,t&&void 0!==t||(console.log("err"),r("Failed to upload file!")),s=t,n=t.name,e.next=7,x.O.storage.from("submissions").upload(n,s);case 7:e.sent.error&&r("An emote with the same name might already be uploaded!"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),r("Failed to upload file!");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})),function(){var t=this,r=arguments;return new Promise((function(s,n){var a=e.apply(t,r);function o(e){j(a,s,n,o,l,"next",e)}function l(e){j(a,s,n,o,l,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,s.jsxs)("div",{className:"h-full w-full flex flex-col mt-3 filedrop",children:[(0,s.jsxs)("div",{className:"mb-3 text-sm bg-accent-white rounded-sm text-accent-gray font-bold p-3 flex flex-row items-center",children:[(0,s.jsx)(i.HAE,{className:" mr-2 text-red-500 rounded-sm"}),t]}),(0,s.jsx)(w.b,{classes:"!text-white !h-full !border-border-white !p-10 !max-w-full !w-full flex justify-center items-center",handleChange:n,name:"file",types:g})]})};function y(e,t,r,s,n,a,o){try{var l=e[a](o),i=l.value}catch(c){return void r(c)}l.done?t(i):Promise.resolve(i).then(s,n)}var k=function(e){var t=e.session,r=(0,a.useState)(!1),n=r[0],l=r[1],c=(0,a.useState)(),d=c[0],h=c[1],p=(0,a.useState)(""),w=p[0],j=p[1],g=(0,a.useState)(""),k=g[0],I=g[1],S=(0,u.useRouter)(),C=(0,a.useState)(""),F=C[0],O=(C[1],(0,a.useState)(null)),E=O[0],H=O[1],T=(0,a.useState)(null),P=T[0],A=T[1],D=(0,a.useState)(!1),M=D[0],J=D[1],Y=function(){var e,t=(e=m().mark((function e(){var t,r,s;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,J(!0),d&&0!==d||(console.log("err"),setErrors("You must select an image to upload.")),t=d,e.next=6,x.O.storage.from("submissions").upload(k,t);case 6:if(r=e.sent,!(s=r.error)){e.next=10;break}throw s;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message);case 15:return e.prev=15,J(!1),setTimeout((function(){h(),j("")}),1e3),e.finish(15);case 19:case"end":return e.stop()}}),e,null,[[0,12,15,19]])})),function(){var t=this,r=arguments;return new Promise((function(s,n){var a=e.apply(t,r);function o(e){y(a,s,n,o,l,"next",e)}function l(e){y(a,s,n,o,l,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,a.useEffect)((function(){var e=x.O.auth.user();H(e.user_metadata.name),A(e.user_metadata.avatar_url)}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v.u,{size:"xl",centered:!0,classNames:{root:"anim-fade duration-300",modal:"bg-darker-purple text-white shadow-xl rounded-xl",overlay:"bg-darker-purple",title:"text-xl",close:"rounded-3xl bg-main-purple hover:bg-accent-white hover:text-main-purple duration-300 text-white"},opened:n,onClose:function(){return l(!1)},overlayOpacity:.99,title:"Emote submission",children:(0,s.jsxs)(b.m,{classNames:{tabsListWrapper:"border-0 ",tabsList:"border-0 ",tabActive:"text-white border-0 border-b-2 !border-white ",tabInner:"font-bold ",tabLabel:"text-main-white hover:text-white duration-300 "},children:[(0,s.jsx)(b.m.Tab,{label:"File upload",children:(0,s.jsxs)("div",{className:"h-96 flex flex-col",children:[F?(0,s.jsxs)("div",{className:"text-sm bg-accent-white rounded-sm text-accent-gray font-bold p-3 flex flex-row items-center",children:[(0,s.jsx)(i.HAE,{className:"mr-2 text-red-500 rounded-sm"}),F]}):"",(0,s.jsx)("div",{id:"fileupload",className:"p-0.5 relative mb-4",children:(0,s.jsx)("div",{className:"file-upload",children:(0,s.jsxs)("div",{className:"file-select",children:[(0,s.jsx)("div",{className:"file-select-button",id:"fileName",children:"Choose File"}),(0,s.jsx)("div",{className:"file-select-name",id:"noFile",children:w||"No file chosen"}),(0,s.jsx)("input",{type:"file",id:"single",accept:"image/*",onChange:function(e){if(e.preventDefault(),!e.target.files||0===e.target.files.length)throw new Error("You must select an image to upload.");h(e.target.files[0]),j(e.target.files[0].name)},disabled:M})]})})}),(0,s.jsxs)("div",{id:"filename",className:"p-0.5 relative mb-4",children:[(0,s.jsx)("input",{className:"peer w-full py-4 px-4 mb-0 text-base text-white outline-none border-b-[1px] bg-transparent border-transparent-black placeholder-transparent",type:"text",placeholder:"Code",onChange:function(e){return I(e.target.value)},required:!0}),(0,s.jsx)("span",{className:" peer-focus:before:w-2/4 peer-focus:after:w-2/4 relative block w-full after:content-[''] after:h-[2px] after:w-0 after:bottom-[0px] after:absolute after:bg-main-purple after:duration-300 before:content-[''] before:h-[2px] before:w-0 before:bottom-[0px] before:absolute before:bg-main-purple before:duration-300 before:left-2/4 after:right-2/4 before:box-shadow-purple after:box-shadow-purple"}),(0,s.jsx)("label",{className:"absolute left-4 top-[-5px] text-white text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 pointer-events-none peer-focus:top-[-5px] peer-focus:text-sm",children:"Emote code"})]}),(0,s.jsx)("button",{onClick:function(){return Y()},type:"submit",className:"p-5 border-2 border-white text-white hover:bg-white hover:text-darker-purple mb-6 font-bold text-xl rounded-3xl cursor-pointer duration-300 w-full",children:M?"Uploading...":"Upload"})]})}),(0,s.jsx)(b.m.Tab,{label:"Quick upload",children:(0,s.jsx)("div",{className:"h-96 flex flex-col",children:(0,s.jsx)(N,{})})}),(0,s.jsx)(b.m.Tab,{label:"How does it work?",children:(0,s.jsxs)("div",{className:"h-96 flex flex-col",children:[(0,s.jsx)("h1",{className:"text-3xl mt-3",children:"How does emote submission work?"}),(0,s.jsx)("p",{className:"mt-3 text-xl",children:"Simple!"}),(0,s.jsx)("p",{className:"text-xl",children:"1. You submit emotes"}),(0,s.jsx)("p",{className:"text-xl",children:"2. Moderators approve or deny the submitted emotes"}),(0,s.jsx)("p",{className:"text-xl",children:"3. If your emote is approved, you can use it in your emote set!"})]})})]})}),(0,s.jsxs)("div",{className:"px-6 py-5 flex flex-col h-full overflow-hidden ".concat(S.route.includes("profile")?"":"anim-fade"," "),children:[(0,s.jsxs)("div",{className:"flex flex-row items-center px-6 py-2 ",children:[(0,s.jsx)("img",{src:P,alt:E,className:"rounded-3xl w-10 border-2 shadow-xl"}),(0,s.jsx)("div",{className:"ml-2 font-bold text-main-black rounded-2xl text-md",children:t.user.user_metadata.name}),(0,s.jsx)("div",{onClick:function(){return x.O.auth.signOut()},className:"ml-auto p-2 hover:border-darker-purple text-sm hover:bg-darker-purple duration-300 hover:text-white cursor-pointer border-2 flex text-darker-purple items-center justify-center rounded-3xl mr-3",children:(0,s.jsx)(f.lE7,{})})]}),(0,s.jsxs)("div",{className:"p-6 w-full space-y-3 flex flex-col",children:[(0,s.jsx)(o.default,{href:"/dashboard/profile",passHref:!0,children:(0,s.jsx)("div",{className:"hover:border-main-purple hover:bg-main-purple hover:text-white duration-300 border-2 font-bold text-main-black cursor-pointer flex justify-center items-center p-3 rounded-xl w-full",children:"Your profile"})}),(0,s.jsx)("div",{onClick:function(){return l(!0)},className:"group border-2 border-main-purple bg-main-purple duration-300 cursor-pointer text-white flex justify-center items-center p-3 rounded-xl w-full",children:(0,s.jsx)("span",{className:"opacity-75 font-bold group-hover:opacity-100 duration-300",children:"Submit emotes"})}),(0,s.jsx)("div",{className:"hover:border-main-purple hover:bg-main-purple hover:text-white duration-300 border-2 font-bold text-main-black cursor-pointer flex justify-center items-center p-3 rounded-xl w-full",children:"Subscribe"}),(0,s.jsxs)("div",{className:"flex flex-row items-center text-sm px-3 text-accent-gray font-bold",children:[(0,s.jsx)(i.LHN,{className:"mr-2 text-main-purple text-xl"}),"Not currently subscribed"]}),(0,s.jsx)("div",{className:"flex flex-row items-center text-sm px-3 text-accent-gray font-bold",children:"Has no access to emote sets"})]})]})]})},I=r(2573);function S(e,t,r,s,n,a,o){try{var l=e[a](o),i=l.value}catch(c){return void r(c)}l.done?t(i):Promise.resolve(i).then(s,n)}function C(e){return function(){var t=this,r=arguments;return new Promise((function(s,n){var a=e.apply(t,r);function o(e){S(a,s,n,o,l,"next",e)}function l(e){S(a,s,n,o,l,"throw",e)}o(void 0)}))}}function F(){var e=(0,a.useState)(null),t=e[0],r=e[1],n=(0,a.useState)(!1),o=n[0],l=n[1],i=(0,a.useState)(!0),c=i[0],d=i[1],u=(0,a.useState)(null),h=(u[0],u[1],(0,a.useState)(null));h[0],h[1];function p(){return(p=C(m().mark((function e(){var t,r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.href,e.next=3,x.O.auth.signIn({provider:"twitch"},{redirectTo:t});case 3:r=e.sent,r.user,r.session,r.error;case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,a.useEffect)((function(){r(x.O.auth.session()),x.O.auth.onAuthStateChange((function(e,t){r(t)})),d(!1)}),[]),(0,s.jsxs)("div",{className:"text-black border-r-2 h-full max-w-full w-1/5 flex flex-col",children:[c?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"px-6 py-5 flex flex-col h-full overflow-hidden",children:(0,s.jsx)("div",{className:"flex flex-row items-center px-6 py-2 anim-rl",children:(0,s.jsx)(I.Z,{className:"!w-5 !h-5 !text-main-purple"})})})}):t?(0,s.jsx)(k,{session:t}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"px-6 py-5 flex flex-col h-full overflow-hidden",children:(0,s.jsxs)("div",{className:"p-6 w-full space-y-3 flex flex-col",children:[(0,s.jsx)("div",{onClick:function(){return function(){return p.apply(this,arguments)}()},className:"group border-2 hover:bg-darker-purple font-bold hover:border-darker-purple border-main-purple bg-main-purple duration-300 cursor-pointer text-white flex justify-center items-center p-3 rounded-xl w-full",children:"Sign in with Twitch"}),(0,s.jsx)("div",{onClick:function(){return l(!o)},className:"font-bold text-sm cursor-pointer text-darker-purple",children:"Facebook extension, why Twitch login?"}),o?(0,s.jsx)("p",{className:"text-sm",children:"Anyone can create a Facebook account with any username, therefore to ensure the highest possible security, we decided to make Twitch-only logins."}):""]})})}),(0,s.jsx)("div",{className:"mt-auto p-3 text-accent-gray font-bold text-md border-t-2",children:"\xa9 dope, 2022"})]})}var O=function(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.default,{children:(0,s.jsx)("title",{children:e.title})}),(0,s.jsxs)("div",{className:"overflow-hidden h-screen w-screen flex flex-col justify-center items-center bg-main-purple bg-header-bg bg-blend-multiply",children:[(0,s.jsx)(h,{session:e.session}),(0,s.jsxs)("div",{className:"overflow-hidden w-full h-full flex flex-row bg-accent-white",children:[(0,s.jsx)(F,{session:e.session}),e.children]})]})]})}},6195:function(e,t,r){r.d(t,{O:function(){return s}});var s=(0,r(5360).eI)("https://emxllayyisdskjtscvck.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVteGxsYXl5aXNkc2tqdHNjdmNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDcwODgxNDMsImV4cCI6MTk2MjY2NDE0M30.-AGqiBqpHvuSGzlp3WPLwBfrUXu7hk0wl5OkH9AQjvI")}}]);