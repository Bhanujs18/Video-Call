(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,a){},111:function(e,a){},126:function(e,a,t){},127:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t(9),i=t.n(c),r=t(13),l=t(158),s=t(161),o=t(163),d=t(164),j=t(18),b=t(76),u=t(54),x=t.n(u),m=t(4),p=Object(n.createContext)(),O=Object(b.a)("https://web-production-5a4a.up.railway.app/"),f=function(e){var a=e.children,t=Object(n.useState)(!1),c=Object(j.a)(t,2),i=c[0],r=c[1],l=Object(n.useState)(!1),s=Object(j.a)(l,2),o=s[0],d=s[1],b=Object(n.useState)(),u=Object(j.a)(b,2),f=u[0],h=u[1],g=Object(n.useState)(""),v=Object(j.a)(g,2),C=v[0],w=v[1],N=Object(n.useState)({}),y=Object(j.a)(N,2),k=y[0],S=y[1],W=Object(n.useState)(""),I=Object(j.a)(W,2),A=I[0],U=I[1],B=Object(n.useRef)(),E=Object(n.useRef)(),R=Object(n.useRef)();Object(n.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){h(e),B.current.srcObject=e})),O.on("me",(function(e){return U(e)})),O.on("callUser",(function(e){var a=e.from,t=e.name,n=e.signal;S({isReceivingCall:!0,from:a,name:t,signal:n})}))}),[]);return Object(m.jsx)(p.Provider,{value:{call:k,callAccepted:i,myVideo:B,userVideo:E,stream:f,name:C,setName:w,callEnded:o,me:A,callUser:function(e){var a=new x.a({initiator:!0,trickle:!1,stream:f});console.log("id="+e),a.on("signal",(function(a){O.emit("callUser",{userToCall:e,signalData:a,from:A,name:C})})),a.on("stream",(function(e){E.current.srcObject=e})),O.on("callAccepted",(function(e){r(!0),a.signal(e)})),R.current=a},leaveCall:function(){d(!0),R.current.destroy(),window.location.reload()},answerCall:function(){r(!0);var e=new x.a({initiator:!1,trickle:!1,stream:f});e.on("signal",(function(e){O.emit("answerCall",{signal:e,to:k.from})})),e.on("stream",(function(e){E.current.srcObject=e})),e.signal(k.signal),R.current=e}},children:a})},h=Object(l.a)((function(e){return{video:Object(r.a)({width:"450px",display:"flex"},e.breakpoints.down("xs"),{width:"250px"}),gridContainer:Object(r.a)({},e.breakpoints.down("xs"),{display:"flex"}),paper:{padding:"10px",display:"flex",border:"2px solid black",margin:"10px"}}})),g=function(){var e=Object(n.useContext)(p),a=e.name,t=e.callAccepted,c=e.myVideo,i=e.userVideo,r=e.callEnded,l=e.stream,j=e.call,b=h();return Object(m.jsxs)(s.a,{container:!0,className:b.gridContainer,children:[l&&Object(m.jsx)(o.a,{className:b.paper,children:Object(m.jsxs)(s.a,{item:!0,xs:12,md:6,children:[Object(m.jsx)(d.a,{variant:"h5",gutterBottom:!0,children:a||"Name"}),Object(m.jsx)("video",{playsInline:!0,muted:!0,ref:c,autoPlay:!0,className:b.video})]})}),t&&!r&&Object(m.jsx)(o.a,{className:b.paper,children:Object(m.jsxs)(s.a,{item:!0,xs:12,md:6,children:[Object(m.jsx)(d.a,{variant:"h5",gutterBottom:!0,children:j.name||"Name"}),Object(m.jsx)("video",{playsInline:!0,ref:i,autoPlay:!0,className:b.video})]})})]})},v=t(165),C=t(169),w=t(170),N=t(75),y=t(166),k=t(167),S=t(168),W=Object(l.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},gridContainer:Object(r.a)({flexWrap:"wrap",width:"100%",height:"100%",display:"flex"},e.breakpoints.down("xs"),{}),container:Object(r.a)({flexWrap:"wrap",margin:9,padding:0},e.breakpoints.down("xs"),{width:"100%"}),margin:{flexWrap:"wrap",margin:9},padding:{display:"flex",padding:10},paper:{flexWrap:"wrap",padding:"10px 20px",display:"flex",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}})),I=function(e){var a=e.children,t=Object(n.useContext)(p),c=t.me,i=t.callAccepted,r=t.name,l=t.setName,b=t.callEnded,u=t.leaveCall,x=t.callUser,O=Object(n.useState)(""),f=Object(j.a)(O,2),h=f[0],g=f[1],I=W();return Object(m.jsx)(v.a,{className:I.container,children:Object(m.jsxs)(o.a,{elevation:10,className:I.paper,children:[Object(m.jsx)("form",{className:I.root,noValidate:!0,autoComplete:"off",children:Object(m.jsxs)(s.a,{container:!0,className:I.gridContainer,children:[Object(m.jsxs)(s.a,{item:!0,xs:12,md:6,className:I.padding,children:[Object(m.jsx)(d.a,{gutterBottom:!0,variant:"h6"}),Object(m.jsx)(C.a,{label:"Name",value:r,onChange:function(e){return l(e.target.value)},fullWidth:!0}),Object(m.jsx)(N.CopyToClipboard,{text:c,className:I.margin,children:Object(m.jsx)(w.a,{variant:"contained",color:"primary",fullWidth:!0,startIcon:Object(m.jsx)(y.a,{fontSize:"large"}),children:"Code"})})]}),Object(m.jsxs)(s.a,{item:!0,xs:12,md:6,className:I.padding,children:[Object(m.jsx)(d.a,{gutterBottom:!0,variant:"h6"}),Object(m.jsx)(C.a,{label:"ID to call",value:h,onChange:function(e){return g(e.target.value)},fullWidth:!0}),i&&!b?Object(m.jsx)(w.a,{variant:"contained",startIcon:Object(m.jsx)(k.a,{fontSize:"large"}),fullWidth:!0,onClick:u,className:I.margin,children:"Hang Up"}):Object(m.jsx)(w.a,{variant:"contained",id:"callbutton",startIcon:Object(m.jsx)(S.a,{fontSize:"large"}),fullWidth:!0,onClick:function(){return x(h)},className:I.margin,children:"Call"})]})]})}),a]})})},A=function(){var e=Object(n.useContext)(p),a=e.answerCall,t=e.call,c=e.callAccepted;return Object(m.jsx)(m.Fragment,{children:t.isReceivingCall&&!c&&Object(m.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[Object(m.jsxs)(d.a,{className:"padding",children:[t.name," is calling:  "]}),Object(m.jsx)(w.a,{variant:"contained",color:"primary",onClick:a,children:"Answer"})]})})},U=function(){return Object(m.jsxs)("div",{id:"header",children:[Object(m.jsxs)("div",{className:"sidebar",position:"static",color:"inherit",children:[Object(m.jsx)("h1",{className:"text",children:" \u2022 Live "}),Object(m.jsx)("div",{className:"callbox",children:Object(m.jsx)(I,{children:Object(m.jsx)("div",{className:"notifications",children:Object(m.jsx)(A,{})})})})]}),Object(m.jsx)("div",{className:"vidbox",children:Object(m.jsx)(g,{})})]})};t(126);i.a.render(Object(m.jsx)(f,{children:Object(m.jsx)(U,{})}),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.c1c57f44.chunk.js.map