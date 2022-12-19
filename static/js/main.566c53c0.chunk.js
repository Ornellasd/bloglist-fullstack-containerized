(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{150:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n(11),s=n.n(c),o=n(17),i=n(20),u=n(14),l=n(199),j=n(210),d=n(8),b=n.n(d),p=n(12),f=n(29),m=n(100),h=n(26),O="/api/blogs",x=null,g={getAll:function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(O);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(p.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:x}},e.next=3,h.a.post(O,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){x="bearer ".concat(e)},update:function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.put("".concat(O,"/").concat(t.id),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteBlog:function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:x}},e.next=3,h.a.delete("".concat(O,"/").concat(t),n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addComment:function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("".concat(O,"/").concat(t.id,"/comments"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(e,t,n){return r&&clearTimeout(r),function(){var a=Object(p.a)(b.a.mark((function a(c){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c({type:"SET_ALERTS",data:{content:e,type:t}}),r=setTimeout((function(){c({type:"CLEAR_ALERTS"})}),1e3*n);case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ALERTS":return t.data;case"CLEAR_ALERTS":return[];default:return e}},y=function(e,t){return t.likes-e.likes},k=function(){return function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getAll();case 2:n=e.sent,t({type:"SET_BLOGS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_BLOG":return[].concat(Object(m.a)(e),[t.data]);case"DELETE_BLOG":return e.filter((function(e){return e.id!==t.data}));case"SET_BLOGS":return t.data.sort(y);case"UPVOTE":var n=t.data.id,r=e.find((function(e){return e.id===n}));return e.map((function(e){return e.id!==n?e:r})).sort(y);case"ADD_COMMENT":var a=t.data.id,c=e.find((function(e){return e.id===a})),s=Object(f.a)(Object(f.a)({},c),{},{comments:t.data.comments});return e.map((function(e){return e.id!==a?e:s}));default:return e}},N={getAll:function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS":return t.data;default:return e}},E={login:function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){return function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.removeItem("loggedBlogappUser"),t({type:"LOGOUT"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.data;case"LOGOUT":return null;default:return e}},U=n(48),D=n(188),B=n(185),_=n(189),A=n(190),I=n(57),R=n(191),W=n(192),F=n(98),q=n.n(F),G=n(24),P=n(180),H=n(181),M=n(183),z=n(184),J=n(211),V=n(186),K=n(187),Q=n(2),X=function(e){var t=e.dialogOpen,n=e.handleDialogClose,r=Object(o.b)(),a=Object(G.a)(),c=Object(P.a)(a.breakpoints.down("sm"));return Object(Q.jsxs)(H.a,{open:t,onClose:n,fullScreen:c,children:[Object(Q.jsx)(M.a,{children:"Create New Blog"}),Object(Q.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:e.target.title.value,author:e.target.author.value,url:e.target.url.value};r(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.create(e);case 3:r=t.sent,n({type:"NEW_BLOG",data:r}),n(k()),n(v(["".concat(r.title," added")],"success",5)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(v(Object.values(t.t0.response.data),"error",5));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(t)),e.target.title.value="",e.target.author.value="",e.target.url.value="",n()},autoComplete:"off",children:[Object(Q.jsxs)(z.a,{children:[Object(Q.jsx)(J.a,{autoFocus:!0,margin:"dense",name:"title",label:"Title",fullWidth:!0,required:!0}),Object(Q.jsx)(J.a,{margin:"dense",name:"author",label:"Author",fullWidth:!0,required:!0}),Object(Q.jsx)(J.a,{margin:"dense",name:"url",label:"URL",fullWidth:!0,required:!0})]}),Object(Q.jsxs)(V.a,{children:[Object(Q.jsx)(K.a,{onClick:n,color:"primary",children:"Cancel"}),Object(Q.jsx)(K.a,{type:"submit",color:"primary",children:"Create"})]})]})]})},Y=Object(D.a)((function(){return{addButton:{right:20,bottom:20,position:"fixed"},listItemDate:{display:"flex",justifyContent:"flex-end"}}})),Z=function(e){var t=e.blogs,n=Y(),r=Object(a.useState)(!1),c=Object(U.a)(r,2),s=c[0],o=c[1];return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(X,{dialogOpen:s,handleDialogClose:function(){o(!1)}}),Object(Q.jsx)(B.a,{children:t.map((function(e){return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)(_.a,{component:i.b,to:"/blogs/".concat(e.id),button:!0,children:[Object(Q.jsx)(A.a,{primary:e.title,secondary:"by ".concat(e.user.username)}),Object(Q.jsx)(A.a,{className:n.listItemDate,children:Object(Q.jsx)(I.a,{variant:"caption",children:(t=e.postedAt,new Date(t).toLocaleDateString())})})]},e.id),Object(Q.jsx)(R.a,{})]});var t}))}),Object(Q.jsx)(W.a,{size:"medium",color:"primary",className:n.addButton,onClick:function(){o(!0)},children:Object(Q.jsx)(q.a,{})})]})},$=n(193),ee=n(194),te=n(195),ne=n(196),re=n(212),ae=n(197),ce=n(198),se=function(e){var t=e.loggedInUser,n=e.blogs,r=Object(a.useState)(!1),c=Object(U.a)(r,2),s=c[0],l=c[1],j=Object(u.h)().id,d=Object(o.b)(),m=Object(u.g)(),h=n.find((function(e){return e.id===j})),O=function(){var e=Object(f.a)(Object(f.a)({},h),{},{likes:h.likes+=1,user:h.user.id});d(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.update(e);case 2:n({type:"UPVOTE",data:{id:e.id}});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},x=function(){window.confirm("Delete '".concat(h.title,"' by ").concat(h.author,"?"))&&(d(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.deleteBlog(e.id);case 2:n({type:"DELETE_BLOG",data:e.id}),n(v(["".concat(e.title," deleted")],"success",5));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(h)),m.push("/"))},w=function(){l(!1)},y=function(e){e.preventDefault();var t={text:e.target.comment.value},n=Object(f.a)(Object(f.a)({},h),{},{comments:h.comments.concat(t)});d(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.addComment(e);case 2:n({type:"ADD_COMMENT",data:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n)),e.target.comment.value="",w()};return Object(Q.jsxs)("div",{children:[Object(Q.jsxs)($.a,{variant:"outlined",style:{marginBottom:20},children:[Object(Q.jsxs)(ee.a,{children:[Object(Q.jsx)(I.a,{variant:"h5",children:h.title}),Object(Q.jsxs)(I.a,{color:"textSecondary",style:{marginBottom:12},children:["added by ",h.user.username]}),Object(Q.jsx)(I.a,{component:i.b,to:h.url,children:h.url})]}),Object(Q.jsxs)(te.a,{children:[Object(Q.jsx)(ne.a,{onClick:function(){return O()},children:Object(Q.jsx)(ae.a,{})}),Object(Q.jsxs)(I.a,{children:[h.likes," likes"]}),Object(Q.jsx)(ne.a,{onClick:function(){l(!0)},children:Object(Q.jsx)(ce.a,{})}),t&&t.username===h.user.username&&Object(Q.jsx)(K.a,{size:"small",color:"secondary",variant:"contained",style:{marginLeft:"auto"},onClick:function(){return x()},children:"Delete"})]})]}),h.comments.length>0&&Object(Q.jsxs)("div",{children:[Object(Q.jsx)(I.a,{align:"center",variant:"h6",children:"Comments"}),h.comments.map((function(e){return Object(Q.jsx)(re.a,{boxShadow:"1",m:3,p:1,bgcolor:"#efefef",children:e.text},e.id)}))]}),Object(Q.jsx)(H.a,{open:s,fullWidth:!0,children:Object(Q.jsxs)("form",{onSubmit:y,children:[Object(Q.jsx)(M.a,{children:"Create New Comment"}),Object(Q.jsx)(z.a,{children:Object(Q.jsx)(J.a,{margin:"dense",name:"comment",label:"Text",fullWidth:!0,autoFocus:!0,required:!0})}),Object(Q.jsxs)(V.a,{children:[Object(Q.jsx)(K.a,{onClick:w,color:"primary",children:"Cancel"}),Object(Q.jsx)(K.a,{type:"submit",color:"primary",children:"Create"})]})]})})]})},oe=n(32),ie=n(65),ue=n.n(ie),le=n(214),je=n(213),de=function(e){var t=e.alerts;return t.content?Object(Q.jsx)("div",{children:t.content.map((function(e,n){return Object(Q.jsx)(je.a,{severity:"success"===t.type?"success":"error",children:e},n)}))}):null},be=Object(D.a)((function(e){return{paper:Object(oe.a)({display:"flex",flexDirection:"column",alignItems:"center"},e.breakpoints.down("sm"),{marginTop:e.spacing(1)}),avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},link:{textDecoration:"none"}}})),pe=function(e){var t=e.alerts,n=Object(o.b)(),r=Object(u.g)(),a=be();return Object(Q.jsx)(l.a,{maxWidth:"sm",children:Object(Q.jsxs)("div",{className:a.paper,children:[Object(Q.jsx)(le.a,{className:a.avatar,children:Object(Q.jsx)(ue.a,{})}),Object(Q.jsx)(I.a,{component:"h1",variant:"h5",children:"Log In"}),Object(Q.jsxs)("form",{className:a.form,onSubmit:function(e){e.preventDefault();var t,a={username:e.target.username.value,password:e.target.password.value};n((t=a,function(){var e=Object(p.a)(b.a.mark((function e(n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.login(t);case 3:r=e.sent,g.setToken(r.token),window.localStorage.setItem("loggedBlogappUser",JSON.stringify(r)),n({type:"SET_USER",data:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n(v(["Wrong username or password"],"error",5));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())),r.push("/")},children:[Object(Q.jsx)(J.a,{label:"Username",name:"username",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,autoFocus:!0}),Object(Q.jsx)(J.a,{label:"Password",type:"password",name:"password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,autoFocus:!0}),Object(Q.jsx)(K.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit,children:"Log In"})]}),Object(Q.jsxs)(I.a,{children:["Don't have an account? Sign Up ",Object(Q.jsx)(i.b,{to:"/signup",className:a.link,children:"Here"})]}),t&&Object(Q.jsx)(de,{alerts:t})]})})},fe={signup:function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},me=Object(D.a)((function(e){return{paper:Object(oe.a)({display:"flex",flexDirection:"column",alignItems:"center"},e.breakpoints.down("sm"),{marginTop:e.spacing(1)}),avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},nameField:{width:"48%"},submit:{margin:e.spacing(3,0,2)},link:{textDecoration:"none"}}})),he=function(){var e=Object(o.b)(),t=Object(u.g)(),n=me(),r=function(){var n=Object(p.a)(b.a.mark((function n(r){var a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),r.target.password.value!==r.target.password_confirm.value){n.next=14;break}return a={firstName:r.target.firstName.value,lastName:r.target.lastName.value,username:r.target.username.value,password:r.target.password.value},n.prev=3,n.next=6,fe.signup(a);case 6:e(v(["Sign Up was successful!"],"success",5)),t.push("/"),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(3),console.log(n.t0),e(v(["Error with username or password"],"error",5));case 14:case"end":return n.stop()}}),n,null,[[3,10]])})));return function(e){return n.apply(this,arguments)}}();return Object(Q.jsx)(l.a,{maxWidth:"sm",children:Object(Q.jsxs)("div",{className:n.paper,children:[Object(Q.jsx)(le.a,{className:n.avatar,children:Object(Q.jsx)(ue.a,{})}),Object(Q.jsx)(I.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(Q.jsxs)("form",{className:n.form,onSubmit:r,children:[Object(Q.jsxs)(re.a,{display:"flex",justifyContent:"space-between",children:[Object(Q.jsx)(J.a,{label:"First Name",name:"firstName",variant:"outlined",margin:"normal",required:!0,autoFocus:!0,className:n.nameField}),Object(Q.jsx)(J.a,{label:"Last Name",name:"lastName",variant:"outlined",margin:"normal",required:!0,autoFocus:!0,className:n.nameField})]}),Object(Q.jsx)(J.a,{label:"Username",name:"username",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,autoFocus:!0}),Object(Q.jsx)(J.a,{label:"Password",type:"password",name:"password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,autoFocus:!0}),Object(Q.jsx)(J.a,{label:"Confirm Password",type:"password",name:"password_confirm",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,autoFocus:!0}),Object(Q.jsx)(K.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:n.submit,children:"Sign Up"})]}),Object(Q.jsxs)(I.a,{children:["Have an account? Log In ",Object(Q.jsx)(i.b,{to:"/login",className:n.link,children:"Here"})]})]})})},Oe=n(200),xe=n(76),ge=n(201),ve=n(202),we=n(203),ye=n(204),ke=n(205),Ce=Object(D.a)((function(e){return{tableHeading:{backgroundColor:"#efefef",color:e.palette.common.black},userRow:{textDecoration:"none"}}})),Ne=function(e){var t=e.users,n=Ce(),r=Object(u.g)(),a=t.sort((function(e,t){return t.blogs.length-e.blogs.length}));return Object(Q.jsxs)("div",{children:[Object(Q.jsx)(I.a,{align:"center",component:"h1",variant:"h5",children:"Users"}),Object(Q.jsx)(Oe.a,{component:xe.a,children:Object(Q.jsxs)(ge.a,{children:[Object(Q.jsx)(ve.a,{children:Object(Q.jsxs)(we.a,{children:[Object(Q.jsx)(ye.a,{className:n.tableHeading,children:"Username"}),Object(Q.jsx)(ye.a,{className:n.tableHeading,align:"right",children:"Blogs Created"})]})}),Object(Q.jsx)(ke.a,{children:a.map((function(e){return Object(Q.jsxs)(we.a,{className:n.userRow,style:e.blogs.length>0?{cursor:"pointer"}:{},onClick:function(t){return function(e,t){e.preventDefault(),t.blogs.length>0&&r.push("/users/".concat(t.id))}(t,e)},hover:e.blogs.length>0,children:[Object(Q.jsx)(ye.a,{component:"th",scope:"row",children:e.username}),Object(Q.jsx)(ye.a,{align:"right",children:e.blogs.length})]},e.id)}))})]})})]})},Se=Object(D.a)((function(){return{post:{textDecoration:"none",color:"black"}}})),Ee=function(){var e=Object(u.h)().id,t=Object(o.c)((function(e){return e.users})).find((function(t){return t.id===e})),n=Se();return Object(Q.jsxs)("div",{children:[Object(Q.jsxs)(I.a,{align:"center",component:"h1",variant:"h5",children:["blogs added by ",t.username]}),Object(Q.jsx)(B.a,{children:t.blogs.map((function(e){return Object(Q.jsxs)(i.b,{className:n.post,to:"/blogs/".concat(e.id),children:[Object(Q.jsx)(_.a,{button:!0,children:Object(Q.jsx)(I.a,{variant:"h6",children:e.title})}),Object(Q.jsx)(R.a,{})]},e.id)}))})]})},Te=n(101),Le=n(215),Ue=n(208),De=n(209),Be=n(206),_e=n(207),Ae=["text","href"],Ie=Object(D.a)((function(e){return{root:{flexGrow:1,paddingBottom:20},navbar:{backgroundColor:"#689f38"},title:{marginRight:e.spacing(5)},toolbar:{justifyContent:"space-between"},navLinks:Object(oe.a)({flexGrow:1},e.breakpoints.down("sm"),{display:"none"}),drawerIcon:Object(oe.a)({display:"none"},e.breakpoints.down("sm"),{display:"block"}),drawerLink:{textDecoration:"none",color:"#fff"},userCorner:Object(oe.a)({flexGrow:.03,display:"flex",justifyContent:"space-between",alignItems:"center"},e.breakpoints.down("sm"),{display:"none"}),list:{height:"100%",width:300,backgroundColor:"#689f38"}}})),Re=function(e){var t=e.text,n=e.href,r=Object(Te.a)(e,Ae),a=Ie();return Object(Q.jsx)(_.a,Object(f.a)(Object(f.a)({className:a.drawerLink,component:i.b,to:n},r),{},{children:Object(Q.jsx)(A.a,{children:Object(Q.jsx)(I.a,{children:t})})}))},We=function(){var e=Ie(),t=Object(o.b)(),n=Object(a.useState)(!1),r=Object(U.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(0),u=Object(U.a)(i,2),l=u[0],j=u[1],d=function(e,t){(!e||"keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&s(t)},b=function(e,t){d(e,!1),j(t)};return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(ne.a,{className:e.drawerIcon,onClick:function(e){return d(e,!0)},edge:"end",children:Object(Q.jsx)(Be.a,{style:{color:"#92C565"}})}),Object(Q.jsx)(Le.a,{anchor:"right",open:c,onClose:function(e){return d(e,!1)},onOpen:function(e){return d(e,!0)},children:Object(Q.jsx)("div",{role:"presentation",className:e.list,children:Object(Q.jsxs)(B.a,{children:[Object(Q.jsx)(_.a,{style:{justifyContent:"flex-end"},children:Object(Q.jsx)(ne.a,{onClick:function(e){return d(e,!1)},edge:"end",children:Object(Q.jsx)(_e.a,{style:{color:"#92C565"}})})}),Object(Q.jsx)(R.a,{}),Object(Q.jsx)(Re,{text:"Blogs",href:"/blogs",onClick:function(e){return b(e,0)},selected:0===l}),Object(Q.jsx)(Re,{text:"Users",href:"/users",onClick:function(e){return b(e,1)},selected:1===l}),Object(Q.jsx)(R.a,{}),Object(Q.jsx)(Re,{text:"Log Out",onClick:function(){return t(T())}})]})})})]})},Fe=function(e){var t=e.currentUser,n=e.users,r=Object(o.b)(),a=Ie(),c=t&&n.find((function(e){return e.username===t.username}));return Object(Q.jsxs)("div",{className:a.root,children:[Object(Q.jsx)(Ue.a,{className:a.navbar,children:Object(Q.jsxs)(De.a,{className:a.toolbar,children:[Object(Q.jsx)(I.a,{variant:"h5",className:a.title,children:"Blog App"}),t&&Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsxs)("div",{className:a.navLinks,children:[Object(Q.jsx)(K.a,{color:"inherit",component:i.b,to:"/blogs",children:"Blogs"}),Object(Q.jsx)(K.a,{color:"inherit",component:i.b,to:"/users",children:"Users"})]}),Object(Q.jsx)(We,{}),Object(Q.jsxs)("div",{className:a.userCorner,children:[Object(Q.jsxs)(I.a,{className:a.userCornerItem,children:["Hello, ",c&&c.username]}),Object(Q.jsx)(R.a,{style:{background:"#92C565"},orientation:"vertical",variant:"middle",flexItem:!0}),Object(Q.jsx)(K.a,{color:"inherit",component:i.b,to:c&&"/users/".concat(c.id),children:"My Posts"}),Object(Q.jsx)(K.a,{color:"inherit",onClick:function(){return r(T())},children:"Logout"})]})]})]})}),Object(Q.jsx)(De.a,{})]})},qe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.alerts})),n=Object(o.c)((function(e){return e.blogs})),r=Object(o.c)((function(e){return e.login})),c=Object(o.c)((function(e){return e.users}));return Object(a.useEffect)((function(){e(k()),e(function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.getAll();case 2:n=e.sent,t({type:"SET_USERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(a.useEffect)((function(){var t=window.localStorage.getItem("loggedBlogappUser");if(t){var n=JSON.parse(t);g.setToken(n.token),e(function(e){return{type:"SET_USER",data:e}}(n))}}),[e]),Object(Q.jsxs)(l.a,{component:"main",maxWidth:"md",children:[Object(Q.jsx)(j.a,{}),Object(Q.jsxs)(i.a,{children:[Object(Q.jsxs)("div",{children:[Object(Q.jsx)(Fe,{currentUser:r,blogs:n,users:c}),Object(Q.jsx)(de,{alerts:t})]}),Object(Q.jsxs)(u.d,{children:[Object(Q.jsx)(u.b,{path:"/users/:id",children:r?Object(Q.jsx)(Ee,{}):Object(Q.jsx)(u.a,{to:"/login"})}),Object(Q.jsx)(u.b,{path:"/users",children:r?Object(Q.jsx)(Ne,{users:c}):Object(Q.jsx)(u.a,{to:"/login"})}),Object(Q.jsx)(u.b,{path:"/blogs/:id",children:r?Object(Q.jsx)(se,{loggedInUser:r,blogs:n}):Object(Q.jsx)(u.a,{to:"/login"})}),Object(Q.jsx)(u.b,{path:"/blogs",children:r?Object(Q.jsx)(Z,{blogs:n}):Object(Q.jsx)(u.a,{to:"/login"})}),Object(Q.jsx)(u.b,{path:"/signup",children:Object(Q.jsx)(he,{})}),Object(Q.jsx)(u.b,{path:"/",children:r?Object(Q.jsx)(u.a,{to:"/blogs"}):Object(Q.jsx)(pe,{alerts:t})})]})]})]})},Ge=n(67),Pe=n(99),He=Object(Ge.b)({alerts:w,blogs:C,login:L,users:S}),Me=Object(Ge.c)(He,Object(Ge.a)(Pe.a));s.a.render(Object(Q.jsx)(o.a,{store:Me,children:Object(Q.jsx)(qe,{})}),document.getElementById("root"))},26:function(e,t,n){"use strict";(function(e){var r=n(93),a=n.n(r);console.log(e.REACT_APP_BACKEND_URL,"test workflow! 5");var c=a.a.create({baseURL:"https://bloglist-backend.onrender.com/"});t.a=c}).call(this,n(80))}},[[150,1,2]]]);
//# sourceMappingURL=main.566c53c0.chunk.js.map