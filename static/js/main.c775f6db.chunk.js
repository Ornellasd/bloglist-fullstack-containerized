(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{148:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n(11),s=n.n(c),i=n(19),o=n(20),u=n(14),l=n(198),j=n(211),d=n(8),b=n.n(d),p=n(12),f=n(29),h=n(95),m=n(88),O=n.n(m).a.create({baseURL:"https://bloglist-backend.onrender.com/"}),x="/api/blogs",g=null,v={getAll:function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get(x);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(p.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:g}},e.next=3,O.post(x,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){g="bearer ".concat(e)},update:function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.put("".concat(x,"/").concat(t.id),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteBlog:function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:g}},e.next=3,O.delete("".concat(x,"/").concat(t),n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addComment:function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.post("".concat(x,"/").concat(t.id,"/comments"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(e,t,n){return r&&clearTimeout(r),function(){var a=Object(p.a)(b.a.mark((function a(c){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c({type:"SET_ALERTS",data:{content:e,type:t}}),r=setTimeout((function(){c({type:"CLEAR_ALERTS"})}),1e3*n);case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ALERTS":return t.data;case"CLEAR_ALERTS":return[];default:return e}},k=function(e,t){return t.likes-e.likes},C=function(){return function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getAll();case 2:n=e.sent,t({type:"SET_BLOGS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_BLOG":return[].concat(Object(h.a)(e),[t.data]);case"DELETE_BLOG":return e.filter((function(e){return e.id!==t.data}));case"SET_BLOGS":return t.data.sort(k);case"UPVOTE":var n=t.data.id,r=e.find((function(e){return e.id===n}));return e.map((function(e){return e.id!==n?e:r})).sort(k);case"ADD_COMMENT":var a=t.data.id,c=e.find((function(e){return e.id===a})),s=Object(f.a)(Object(f.a)({},c),{},{comments:t.data.comments});return e.map((function(e){return e.id!==a?e:s}));default:return e}},S={getAll:function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS":return t.data;default:return e}},L={login:function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){return function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.removeItem("loggedBlogappUser"),t({type:"LOGOUT"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.data;case"LOGOUT":return null;default:return e}},B=n(46),D=n(186),I=n(187),_=n(183),A=n(188),W=n(189),R=n(57),F=n(190),q=n(191),G=n(93),P=n.n(G),H=n(24),M=n(178),z=n(179),J=n(181),V=n(182),K=n(212),Q=n(184),X=n(185),Y=n(2),Z=function(e){var t=e.dialogOpen,n=e.handleDialogClose,r=Object(i.b)(),a=Object(H.a)(),c=Object(M.a)(a.breakpoints.down("sm"));return Object(Y.jsxs)(z.a,{open:t,onClose:n,fullScreen:c,children:[Object(Y.jsx)(J.a,{children:"Create New Blog"}),Object(Y.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:e.target.title.value,author:e.target.author.value,url:e.target.url.value};r(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.create(e);case 3:r=t.sent,n({type:"NEW_BLOG",data:r}),n(C()),n(w(["".concat(r.title," added")],"success",5)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(w(Object.values(t.t0.response.data),"error",5));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(t)),e.target.title.value="",e.target.author.value="",e.target.url.value="",n()},autoComplete:"off",children:[Object(Y.jsxs)(V.a,{children:[Object(Y.jsx)(K.a,{autoFocus:!0,margin:"dense",name:"title",label:"Title",fullWidth:!0,required:!0}),Object(Y.jsx)(K.a,{margin:"dense",name:"author",label:"Author",fullWidth:!0,required:!0}),Object(Y.jsx)(K.a,{margin:"dense",name:"url",label:"URL",fullWidth:!0,required:!0})]}),Object(Y.jsxs)(Q.a,{children:[Object(Y.jsx)(X.a,{onClick:n,color:"primary",children:"Cancel"}),Object(Y.jsx)(X.a,{type:"submit",color:"primary",children:"Create"})]})]})]})},$=Object(D.a)((function(e){return{addButton:{right:20,bottom:20,position:"fixed"},listItemDate:{display:"flex",justifyContent:"flex-end"},loadingContainer:{display:"flex",justifyContent:"center",margin:e.spacing(3,0,0)}}})),ee=function(e){var t=e.classes;return Object(Y.jsx)("div",{className:t.loadingContainer,children:Object(Y.jsx)(I.a,{})})},te=function(e){var t=e.allBlogs,n=e.users,r=Object(a.useState)(!1),c=Object(B.a)(r,2),s=c[0],i=c[1],l=$(),j=Object(u.h)().id,d=n.find((function(e){return e.id===j})),b=d?d.blogs:t;return 0===t.length?Object(Y.jsx)(ee,{classes:l}):Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(Z,{dialogOpen:s,handleDialogClose:function(){return i(!1)}}),Object(Y.jsx)(_.a,{children:b.map((function(e){return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)(A.a,{component:o.b,to:"/blogs/".concat(e.id),button:!0,children:[Object(Y.jsx)(W.a,{primary:e.title,secondary:d?"":"by ".concat(e.user.username)}),Object(Y.jsx)(W.a,{className:l.listItemDate,children:Object(Y.jsx)(R.a,{variant:"caption",children:(t=e.postedAt,new Date(t).toLocaleDateString())})})]},e.id),Object(Y.jsx)(F.a,{})]});var t}))}),Object(Y.jsx)(q.a,{size:"medium",color:"primary",className:l.addButton,onClick:function(){return i(!0)},children:Object(Y.jsx)(P.a,{})})]})},ne=n(192),re=n(193),ae=n(194),ce=n(195),se=n(213),ie=n(196),oe=n(197),ue=function(e){var t=e.loggedInUser,n=e.blogs,r=Object(a.useState)(!1),c=Object(B.a)(r,2),s=c[0],l=c[1],j=Object(u.h)().id,d=Object(i.b)(),h=Object(u.g)(),m=n.find((function(e){return e.id===j})),O=function(){var e=Object(f.a)(Object(f.a)({},m),{},{likes:m.likes+=1,user:m.user.id});d(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.update(e);case 2:n({type:"UPVOTE",data:{id:e.id}});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},x=function(){window.confirm("Delete '".concat(m.title,"' by ").concat(m.author,"?"))&&(d(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.deleteBlog(e.id);case 2:n({type:"DELETE_BLOG",data:e.id}),n(w(["".concat(e.title," deleted")],"success",5));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(m)),h.push("/"))},g=function(e){e.preventDefault();var t={text:e.target.comment.value},n=Object(f.a)(Object(f.a)({},m),{},{comments:m.comments.concat(t)});d(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.addComment(e);case 2:n({type:"ADD_COMMENT",data:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n)),e.target.comment.value="",l(!1)};return Object(Y.jsxs)("div",{children:[Object(Y.jsxs)(ne.a,{variant:"outlined",style:{marginBottom:20},children:[Object(Y.jsxs)(re.a,{children:[Object(Y.jsx)(R.a,{variant:"h5",children:m.title}),Object(Y.jsxs)(R.a,{color:"textSecondary",style:{marginBottom:12},children:["added by ",m.user.username]}),Object(Y.jsx)(R.a,{component:o.b,to:m.url,children:m.url})]}),Object(Y.jsxs)(ae.a,{children:[Object(Y.jsx)(ce.a,{onClick:function(){return O()},children:Object(Y.jsx)(ie.a,{})}),Object(Y.jsxs)(R.a,{children:[m.likes," likes"]}),Object(Y.jsx)(ce.a,{onClick:function(){return l(!0)},children:Object(Y.jsx)(oe.a,{})}),t&&t.username===m.user.username&&Object(Y.jsx)(X.a,{size:"small",color:"secondary",variant:"contained",style:{marginLeft:"auto"},onClick:function(){return x()},children:"Delete"})]})]}),m.comments.length>0&&Object(Y.jsxs)("div",{children:[Object(Y.jsx)(R.a,{align:"center",variant:"h6",children:"Comments"}),m.comments.map((function(e){return Object(Y.jsx)(se.a,{boxShadow:"1",m:3,p:1,bgcolor:"#efefef",children:e.text},e.id)}))]}),Object(Y.jsx)(z.a,{open:s,fullWidth:!0,children:Object(Y.jsxs)("form",{onSubmit:g,children:[Object(Y.jsx)(J.a,{children:"Create New Comment"}),Object(Y.jsx)(V.a,{children:Object(Y.jsx)(K.a,{margin:"dense",name:"comment",label:"Text",fullWidth:!0,autoFocus:!0,required:!0})}),Object(Y.jsxs)(Q.a,{children:[Object(Y.jsx)(X.a,{onClick:function(){return l(!1)},color:"primary",children:"Cancel"}),Object(Y.jsx)(X.a,{type:"submit",color:"primary",children:"Create"})]})]})})]})},le=n(41),je=n(215),de=n(199),be=n(200),pe={signup:function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},fe=Object(D.a)((function(e){return{paper:Object(le.a)({display:"flex",flexDirection:"column",alignItems:"center"},e.breakpoints.down("sm"),{marginTop:e.spacing(1)}),avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},nameField:{width:"48%"},link:{textDecoration:"none",marginLeft:"4px"},centerText:{display:"flex",justifyContent:"center"}}})),he=function(e){var t=e.classes,n=e.dispatch,r=e.history;r.push("/login");return Object(Y.jsxs)("form",{className:t.form,onSubmit:function(e){e.preventDefault();var t,a={username:e.target.username.value,password:e.target.password.value};n((t=a,function(){var e=Object(p.a)(b.a.mark((function e(n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.login(t);case 3:r=e.sent,v.setToken(r.token),window.localStorage.setItem("loggedBlogappUser",JSON.stringify(r)),n({type:"SET_USER",data:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n(w(["Wrong username or password"],"error",5));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())),r.push("/")},children:[Object(Y.jsx)(K.a,{label:"Username",name:"username",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,autoFocus:!0}),Object(Y.jsx)(K.a,{label:"Password",type:"password",name:"password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0}),Object(Y.jsx)(X.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Log In"}),Object(Y.jsxs)(R.a,{className:t.centerText,children:["Don't have an account? Sign up",Object(Y.jsx)(o.b,{className:t.link,onClick:function(){return r.push("/signup")},children:"here"})]})]})},me=function(e){var t=e.classes,n=e.dispatch,r=e.history;r.push("/signup");var a=function(){var e=Object(p.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),t.target.password.value!==t.target.password_confirm.value){e.next=14;break}return a={firstName:t.target.firstName.value,lastName:t.target.lastName.value,username:t.target.username.value,password:t.target.password.value},e.prev=3,e.next=6,pe.signup(a);case 6:n(w(["Sign Up was successful!"],"success",5)),r.push("/login"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0),n(w(["Error with username or password"],"error",5));case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(Y.jsxs)("form",{className:t.form,onSubmit:a,children:[Object(Y.jsxs)(se.a,{display:"flex",justifyContent:"space-between",children:[Object(Y.jsx)(K.a,{label:"First Name",name:"firstName",variant:"outlined",margin:"normal",required:!0,autoFocus:!0,className:t.nameField}),Object(Y.jsx)(K.a,{label:"Last Name",name:"lastName",variant:"outlined",margin:"normal",required:!0,className:t.nameField})]}),Object(Y.jsx)(K.a,{label:"Username",name:"username",variant:"outlined",margin:"normal",required:!0,fullWidth:!0}),Object(Y.jsx)(K.a,{label:"Password",type:"password",name:"password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0}),Object(Y.jsx)(K.a,{label:"Confirm Password",type:"password",name:"password_confirm",variant:"outlined",margin:"normal",required:!0,fullWidth:!0}),Object(Y.jsx)(X.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign Up"}),Object(Y.jsxs)(R.a,{className:t.centerText,children:["Have an account? Log in",Object(Y.jsx)(o.b,{className:t.link,onClick:function(){return r.push("/login")},children:"here"})]})]})},Oe=function(e){var t=e.isLogIn,n=Object(i.b)(),r=Object(u.g)(),a=fe();return Object(Y.jsxs)(l.a,{maxWidth:"sm",className:a.paper,children:[Object(Y.jsx)(je.a,{className:a.avatar,children:t?Object(Y.jsx)(de.a,{}):Object(Y.jsx)(be.a,{})}),Object(Y.jsx)(R.a,{component:"h1",variant:"h5",children:t?"Log In":"Sign Up"}),t&&Object(Y.jsx)(he,{classes:a,dispatch:n,history:r}),!t&&Object(Y.jsx)(me,{classes:a,dispatch:n,history:r})]})},xe=n(201),ge=n(74),ve=n(202),we=n(203),ye=n(204),ke=n(205),Ce=n(206),Ne=Object(D.a)((function(e){return{tableHeading:{backgroundColor:"#efefef",color:e.palette.common.black},userRow:{textDecoration:"none"}}})),Se=function(e){var t=e.users,n=Ne(),r=Object(u.g)(),a=t.sort((function(e,t){return t.blogs.length-e.blogs.length}));return Object(Y.jsxs)("div",{children:[Object(Y.jsx)(R.a,{align:"center",component:"h1",variant:"h5",children:"Users"}),Object(Y.jsx)(xe.a,{component:ge.a,children:Object(Y.jsxs)(ve.a,{children:[Object(Y.jsx)(we.a,{children:Object(Y.jsxs)(ye.a,{children:[Object(Y.jsx)(ke.a,{className:n.tableHeading,children:"Username"}),Object(Y.jsx)(ke.a,{className:n.tableHeading,align:"right",children:"Blogs Created"})]})}),Object(Y.jsx)(Ce.a,{children:a.map((function(e){return Object(Y.jsxs)(ye.a,{className:n.userRow,style:e.blogs.length>0?{cursor:"pointer"}:{},onClick:function(t){return function(e,t){e.preventDefault(),t.blogs.length>0&&r.push("/users/".concat(t.id))}(t,e)},hover:e.blogs.length>0,children:[Object(Y.jsx)(ke.a,{component:"th",scope:"row",children:e.username}),Object(Y.jsx)(ke.a,{align:"right",children:e.blogs.length})]},e.id)}))})]})})]})},Ee=n(96),Le=n(216),Te=n(209),Ue=n(210),Be=n(207),De=n(208),Ie=["text","href"],_e=Object(D.a)((function(e){return{root:{flexGrow:1,paddingBottom:20},navbar:{backgroundColor:"#689f38"},title:{marginRight:e.spacing(5)},toolbar:{justifyContent:"space-between"},navLinks:Object(le.a)({flexGrow:1},e.breakpoints.down("sm"),{display:"none"}),drawerIcon:Object(le.a)({display:"none"},e.breakpoints.down("sm"),{display:"block"}),drawerLink:{textDecoration:"none",color:"#fff"},userCorner:Object(le.a)({flexGrow:.03,display:"flex",justifyContent:"space-between",alignItems:"center"},e.breakpoints.down("sm"),{display:"none"}),list:{height:"100%",width:300,backgroundColor:"#689f38"}}})),Ae=function(e){var t=e.text,n=e.href,r=Object(Ee.a)(e,Ie),a=_e();return Object(Y.jsx)(A.a,Object(f.a)(Object(f.a)({className:a.drawerLink,component:o.b,to:n},r),{},{children:Object(Y.jsx)(W.a,{children:Object(Y.jsx)(R.a,{children:t})})}))},We=function(){var e=_e(),t=Object(i.b)(),n=Object(a.useState)(!1),r=Object(B.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(0),u=Object(B.a)(o,2),l=u[0],j=u[1],d=function(e,t){(!e||"keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&s(t)},b=function(e,t){d(e,!1),j(t)};return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(ce.a,{className:e.drawerIcon,onClick:function(e){return d(e,!0)},edge:"end",children:Object(Y.jsx)(Be.a,{style:{color:"#92C565"}})}),Object(Y.jsx)(Le.a,{anchor:"right",open:c,onClose:function(e){return d(e,!1)},onOpen:function(e){return d(e,!0)},children:Object(Y.jsx)("div",{role:"presentation",className:e.list,children:Object(Y.jsxs)(_.a,{children:[Object(Y.jsx)(A.a,{style:{justifyContent:"flex-end"},children:Object(Y.jsx)(ce.a,{onClick:function(e){return d(e,!1)},edge:"end",children:Object(Y.jsx)(De.a,{style:{color:"#92C565"}})})}),Object(Y.jsx)(F.a,{}),Object(Y.jsx)(Ae,{text:"Blogs",href:"/blogs",onClick:function(e){return b(e,0)},selected:0===l}),Object(Y.jsx)(Ae,{text:"Users",href:"/users",onClick:function(e){return b(e,1)},selected:1===l}),Object(Y.jsx)(F.a,{}),Object(Y.jsx)(Ae,{text:"Log Out",onClick:function(){return t(T())}})]})})})]})},Re=function(e){var t=e.currentUser,n=e.users,r=Object(i.b)(),a=_e(),c=t&&n.find((function(e){return e.username===t.username}));return Object(Y.jsxs)("div",{className:a.root,children:[Object(Y.jsx)(Te.a,{className:a.navbar,children:Object(Y.jsxs)(Ue.a,{className:a.toolbar,children:[Object(Y.jsx)(R.a,{variant:"h5",className:a.title,children:"Blog App"}),t&&Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)("div",{className:a.navLinks,children:[Object(Y.jsx)(X.a,{color:"inherit",component:o.b,to:"/blogs",children:"Blogs"}),Object(Y.jsx)(X.a,{color:"inherit",component:o.b,to:"/users",children:"Users"})]}),Object(Y.jsx)(We,{}),Object(Y.jsxs)("div",{className:a.userCorner,children:[Object(Y.jsxs)(R.a,{className:a.userCornerItem,children:["Hello, ",c&&c.username]}),Object(Y.jsx)(F.a,{style:{background:"#92C565"},orientation:"vertical",variant:"middle",flexItem:!0}),Object(Y.jsx)(X.a,{color:"inherit",component:o.b,to:c&&"/users/".concat(c.id),children:"My Posts"}),Object(Y.jsx)(X.a,{color:"inherit",onClick:function(){return r(T())},children:"Logout"})]})]})]})}),Object(Y.jsx)(Ue.a,{})]})},Fe=n(214),qe=function(e){var t=e.alerts;return t.content?Object(Y.jsx)("div",{children:t.content.map((function(e,n){return Object(Y.jsx)(Fe.a,{severity:"success"===t.type?"success":"error",children:e},n)}))}):null},Ge=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.alerts})),n=Object(i.c)((function(e){return e.blogs})),r=Object(i.c)((function(e){return e.login})),c=Object(i.c)((function(e){return e.users}));return Object(a.useEffect)((function(){e(C()),e(function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.getAll();case 2:n=e.sent,t({type:"SET_USERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(a.useEffect)((function(){var t=window.localStorage.getItem("loggedBlogappUser");if(t){var n=JSON.parse(t);v.setToken(n.token),e(function(e){return{type:"SET_USER",data:e}}(n))}}),[e]),Object(Y.jsxs)(l.a,{component:"main",maxWidth:"md",children:[Object(Y.jsx)(j.a,{}),Object(Y.jsxs)(o.a,{children:[Object(Y.jsx)(Re,{currentUser:r,blogs:n,users:c}),Object(Y.jsx)(qe,{alerts:t}),Object(Y.jsxs)(u.d,{children:[Object(Y.jsx)(u.b,{path:"/users/:id",children:r?Object(Y.jsx)(te,{users:c}):Object(Y.jsx)(u.a,{to:"/login"})}),Object(Y.jsx)(u.b,{path:"/users",children:r?Object(Y.jsx)(Se,{users:c}):Object(Y.jsx)(u.a,{to:"/login"})}),Object(Y.jsx)(u.b,{path:"/blogs/:id",children:r?Object(Y.jsx)(ue,{loggedInUser:r,blogs:n}):Object(Y.jsx)(u.a,{to:"/login"})}),Object(Y.jsx)(u.b,{path:"/blogs",children:r?Object(Y.jsx)(te,{allBlogs:n,users:c}):Object(Y.jsx)(u.a,{to:"/login"})}),Object(Y.jsx)(u.b,{path:"/signup",children:Object(Y.jsx)(Oe,{isLogIn:!1})}),Object(Y.jsx)(u.b,{path:"/",children:r?Object(Y.jsx)(u.a,{to:"/blogs"}):Object(Y.jsx)(Oe,{isLogIn:!0})})]})]})]})},Pe=n(66),He=n(94),Me=Object(Pe.b)({alerts:y,blogs:N,login:U,users:E}),ze=Object(Pe.c)(Me,Object(Pe.a)(He.a));s.a.render(Object(Y.jsx)(i.a,{store:ze,children:Object(Y.jsx)(Ge,{})}),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.c775f6db.chunk.js.map