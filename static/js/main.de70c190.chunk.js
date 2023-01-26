(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{148:function(e,t,n){"use strict";n.r(t);var r,a=n(0),c=n(11),s=n.n(c),o=n(20),i=n(21),u=n(14),l=n(198),j=n(211),d=n(8),b=n.n(d),p=n(12),f=n(95),O=n(17),h=n(88),m=n.n(h).a.create({baseURL:"https://bloglist-backend.onrender.com/"}),x="/api/blogs",g=null,v={getAll:function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get(x);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(p.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:g}},e.next=3,m.post(x,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){g="bearer ".concat(e)},update:function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.put("".concat(x,"/").concat(t.id),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteBlog:function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:g}},e.next=3,m.delete("".concat(x,"/").concat(t),n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addComment:function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.post("".concat(x,"/").concat(t.id,"/comments"),t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(e,t,n){return r&&clearTimeout(r),function(){var a=Object(p.a)(b.a.mark((function a(c){return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c({type:"SET_ALERTS",data:{content:e,type:t}}),r=setTimeout((function(){c({type:"CLEAR_ALERTS"})}),1e3*n);case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ALERTS":return t.data;case"CLEAR_ALERTS":return[];default:return e}},k=function(e,t){return t.likes-e.likes},C={blogs:[],requestInProgress:!0},N=function(){return function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.getAll();case 2:n=e.sent,t({type:"SET_BLOGS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_BLOG":return Object(O.a)(Object(O.a)({},e),{},{blogs:[].concat(Object(f.a)(e.blogs),[t.data])});case"DELETE_BLOG":return Object(O.a)(Object(O.a)({},e),{},{blogs:e.blogs.filter((function(e){return e.id!==t.data}))});case"SET_BLOGS":return Object(O.a)(Object(O.a)({},e),{},{blogs:t.data.sort(k),requestInProgress:!1});case"UPVOTE":var n=t.data,r=e.blogs.find((function(e){return e.id===n}));return Object(O.a)(Object(O.a)({},e),{},{blogs:e.blogs.map((function(e){return e.id!==n?e:r})).sort(k)});case"ADD_COMMENT":var a=t.data.id,c=e.blogs.find((function(e){return e.id===a})),s=Object(O.a)(Object(O.a)({},c),{},{comments:t.data.comments});return Object(O.a)(Object(O.a)({},e),{},{blogs:e.blogs.map((function(e){return e.id!==a?e:s}))});default:return e}},L={getAll:function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("/api/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERS":return t.data;default:return e}},T={login:function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(){return function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.removeItem("loggedBlogappUser"),t({type:"LOGOUT"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.data;case"LOGOUT":return null;default:return e}},I=n(36),B=n(178),_=n(185),A=n(188),W=n(189),R=n(57),q=n(190),F=n(191),G=n(93),P=n.n(G),H=n(180),M=n(2),z=Object(B.a)((function(e){return{loadingContainer:{display:"flex",justifyContent:"center",margin:e.spacing(3,0,0)}}})),J=function(){var e=z();return Object(M.jsx)("div",{className:e.loadingContainer,children:Object(M.jsx)(H.a,{})})},V=n(25),K=n(181),Q=n(182),X=n(183),Y=n(184),Z=n(212),$=n(186),ee=n(187),te=function(e){var t=e.dialogOpen,n=e.handleDialogClose,r=Object(o.b)(),a=Object(V.a)(),c=Object(K.a)(a.breakpoints.down("sm"));return Object(M.jsxs)(Q.a,{open:t,onClose:n,fullScreen:c,children:[Object(M.jsx)(X.a,{children:"Create New Blog"}),Object(M.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:e.target.title.value,author:e.target.author.value,url:e.target.url.value};r(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.create(e);case 3:r=t.sent,n({type:"NEW_BLOG",data:r}),n(N()),n(y(["".concat(r.title," added")],"success",5)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),n(y(Object.values(t.t0.response.data),"error",5));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(t)),e.target.title.value="",e.target.author.value="",e.target.url.value="",n()},autoComplete:"off",children:[Object(M.jsxs)(Y.a,{children:[Object(M.jsx)(Z.a,{autoFocus:!0,margin:"dense",name:"title",label:"Title",fullWidth:!0,required:!0}),Object(M.jsx)(Z.a,{margin:"dense",name:"author",label:"Author",fullWidth:!0,required:!0}),Object(M.jsx)(Z.a,{margin:"dense",name:"url",label:"URL",fullWidth:!0,required:!0})]}),Object(M.jsxs)($.a,{children:[Object(M.jsx)(ee.a,{onClick:n,color:"primary",children:"Cancel"}),Object(M.jsx)(ee.a,{type:"submit",color:"primary",children:"Create"})]})]})]})},ne=Object(B.a)((function(){return{addButton:{right:20,bottom:20,position:"fixed"},listItemDate:{display:"flex",justifyContent:"flex-end"},centerText:{display:"flex",justifyContent:"center"}}})),re=function(e){var t=e.blogData,n=e.users,r=Object(a.useState)(!1),c=Object(I.a)(r,2),s=c[0],o=c[1],l=ne(),j=Object(u.h)().id,d=n.find((function(e){return e.id===j})),b=d?d.blogs:t.blogs;return t.requestInProgress?Object(M.jsx)(J,{}):Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(te,{dialogOpen:s,handleDialogClose:function(){return o(!1)}}),Object(M.jsx)(_.a,{children:b.map((function(e){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(A.a,{component:i.b,to:"/blogs/".concat(e.id),button:!0,children:[Object(M.jsx)(W.a,{primary:e.title,secondary:d?"":"by ".concat(e.user.username)}),Object(M.jsx)(W.a,{className:l.listItemDate,children:Object(M.jsx)(R.a,{variant:"caption",children:(t=e.postedAt,new Date(t).toLocaleDateString())})})]},e.id),Object(M.jsx)(q.a,{})]});var t}))}),0===b.length&&Object(M.jsx)(R.a,{className:l.centerText,children:"No posts found :("}),Object(M.jsx)(F.a,{size:"medium",color:"primary",className:l.addButton,onClick:function(){return o(!0)},children:Object(M.jsx)(P.a,{})})]})},ae=n(192),ce=n(193),se=n(194),oe=n(195),ie=n(213),ue=n(196),le=n(197),je=function(e){var t=e.loggedInUser,n=e.blogData,r=Object(a.useState)(!1),c=Object(I.a)(r,2),s=c[0],l=c[1],j=Object(u.h)().id,d=Object(o.b)(),f=Object(u.g)(),h=n.blogs.find((function(e){return e.id===j})),m=function(){var e=Object(O.a)(Object(O.a)({},h),{},{likes:h.likes+=1,user:h.user.id});d(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.update(e);case 2:n({type:"UPVOTE",data:e.id});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},x=function(){window.confirm("Delete '".concat(h.title,"' by ").concat(h.author,"?"))&&(d(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.deleteBlog(e.id);case 2:n({type:"DELETE_BLOG",data:e.id}),n(y(["".concat(e.title," deleted")],"success",5));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(h)),f.push("/"))},g=function(e){e.preventDefault();var t={text:e.target.comment.value},n=Object(O.a)(Object(O.a)({},h),{},{comments:h.comments.concat(t)});d(function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.addComment(e);case 2:n({type:"ADD_COMMENT",data:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n)),e.target.comment.value="",l(!1)};return Object(M.jsxs)("div",{children:[Object(M.jsxs)(ae.a,{variant:"outlined",style:{marginBottom:20},children:[Object(M.jsxs)(ce.a,{children:[Object(M.jsx)(R.a,{variant:"h5",children:h.title}),Object(M.jsxs)(R.a,{color:"textSecondary",style:{marginBottom:12},children:["added by ",h.user.username]}),Object(M.jsx)(R.a,{component:i.b,to:h.url,children:h.url})]}),Object(M.jsxs)(se.a,{children:[Object(M.jsx)(oe.a,{onClick:function(){return m()},children:Object(M.jsx)(ue.a,{})}),Object(M.jsxs)(R.a,{children:[h.likes," likes"]}),Object(M.jsx)(oe.a,{onClick:function(){return l(!0)},children:Object(M.jsx)(le.a,{})}),t&&t.username===h.user.username&&Object(M.jsx)(ee.a,{size:"small",color:"secondary",variant:"contained",style:{marginLeft:"auto"},onClick:function(){return x()},children:"Delete"})]})]}),h.comments.length>0&&Object(M.jsxs)("div",{children:[Object(M.jsx)(R.a,{align:"center",variant:"h6",children:"Comments"}),h.comments.map((function(e){return Object(M.jsx)(ie.a,{boxShadow:"1",m:3,p:1,bgcolor:"#efefef",children:e.text},e.id)}))]}),Object(M.jsx)(Q.a,{open:s,fullWidth:!0,children:Object(M.jsxs)("form",{onSubmit:g,children:[Object(M.jsx)(X.a,{children:"Create New Comment"}),Object(M.jsx)(Y.a,{children:Object(M.jsx)(Z.a,{margin:"dense",name:"comment",label:"Text",fullWidth:!0,autoFocus:!0,required:!0})}),Object(M.jsxs)($.a,{children:[Object(M.jsx)(ee.a,{onClick:function(){return l(!1)},color:"primary",children:"Cancel"}),Object(M.jsx)(ee.a,{type:"submit",color:"primary",children:"Create"})]})]})})]})},de=n(42),be=n(215),pe=n(199),fe=n(200),Oe={signup:function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},he=Object(B.a)((function(e){return{paper:Object(de.a)({display:"flex",flexDirection:"column",alignItems:"center"},e.breakpoints.down("sm"),{marginTop:e.spacing(1)}),avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},nameField:{width:"48%"},link:{textDecoration:"none",marginLeft:"4px"},centerText:{display:"flex",justifyContent:"center"},loader:{margin:e.spacing(3,0,2)}}})),me=function(e){var t=e.classes,n=e.dispatch,r=e.history,a=e.setIsLoading;return Object(M.jsxs)("form",{className:t.form,onSubmit:function(e){e.preventDefault(),a(!0);var t,r={username:e.target.username.value,password:e.target.password.value};n((t=r,function(){var e=Object(p.a)(b.a.mark((function e(n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.login(t);case 3:r=e.sent,v.setToken(r.token),window.localStorage.setItem("loggedBlogappUser",JSON.stringify(r)),n({type:"SET_USER",data:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n(y(["Wrong username or password"],"error",5));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(M.jsx)(Z.a,{label:"Username",name:"username",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,autoFocus:!0}),Object(M.jsx)(Z.a,{label:"Password",type:"password",name:"password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0}),Object(M.jsx)(ee.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Log In"}),Object(M.jsxs)(R.a,{className:t.centerText,children:["Don't have an account? Sign up",Object(M.jsx)(i.b,{className:t.link,onClick:function(){return r.push("/signup")},children:"here"})]})]})},xe=function(e){var t=e.classes,n=e.dispatch,r=e.history,a=function(){var e=Object(p.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),t.target.password.value!==t.target.password_confirm.value){e.next=14;break}return a={firstName:t.target.firstName.value,lastName:t.target.lastName.value,username:t.target.username.value,password:t.target.password.value},e.prev=3,e.next=6,Oe.signup(a);case 6:n(y(["Sign Up was successful!"],"success",5)),r.push("/login"),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0),n(y(["Error with username or password"],"error",5));case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(M.jsxs)("form",{className:t.form,onSubmit:a,children:[Object(M.jsxs)(ie.a,{display:"flex",justifyContent:"space-between",children:[Object(M.jsx)(Z.a,{label:"First Name",name:"firstName",variant:"outlined",margin:"normal",required:!0,autoFocus:!0,className:t.nameField}),Object(M.jsx)(Z.a,{label:"Last Name",name:"lastName",variant:"outlined",margin:"normal",required:!0,className:t.nameField})]}),Object(M.jsx)(Z.a,{label:"Username",name:"username",variant:"outlined",margin:"normal",required:!0,fullWidth:!0}),Object(M.jsx)(Z.a,{label:"Password",type:"password",name:"password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0}),Object(M.jsx)(Z.a,{label:"Confirm Password",type:"password",name:"password_confirm",variant:"outlined",margin:"normal",required:!0,fullWidth:!0}),Object(M.jsx)(ee.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign Up"}),Object(M.jsxs)(R.a,{className:t.centerText,children:["Have an account? Log in",Object(M.jsx)(i.b,{className:t.link,onClick:function(){return r.push("/login")},children:"here"})]})]})},ge=function(e){var t=e.isLogIn,n=Object(o.b)(),r=Object(u.g)(),c=he(),s=Object(o.c)((function(e){return e.alerts})),i=Object(a.useState)(!1),j=Object(I.a)(i,2),d=j[0],b=j[1];return Object(a.useEffect)((function(){"error"===s.type&&b(!1)}),[s]),Object(M.jsxs)(l.a,{maxWidth:"sm",className:c.paper,children:[Object(M.jsx)(be.a,{className:c.avatar,children:t?Object(M.jsx)(pe.a,{}):Object(M.jsx)(fe.a,{})}),Object(M.jsx)(R.a,{component:"h1",variant:"h5",children:t?"Log In":"Sign Up"}),t&&!d&&Object(M.jsx)(me,{classes:c,dispatch:n,history:r,setIsLoading:b}),!t&&!d&&Object(M.jsx)(xe,{classes:c,dispatch:n,history:r,setIsLoading:b}),d&&Object(M.jsx)(J,{})]})},ve=n(201),ye=n(74),we=n(202),ke=n(203),Ce=n(204),Ne=n(205),Se=n(206),Le=Object(B.a)((function(e){return{tableHeading:{backgroundColor:"#efefef",color:e.palette.common.black},userRow:{textDecoration:"none"}}})),Ee=function(e){var t=e.users,n=Le(),r=Object(u.g)(),a=t.sort((function(e,t){return t.blogs.length-e.blogs.length}));return Object(M.jsxs)("div",{children:[Object(M.jsx)(R.a,{align:"center",component:"h1",variant:"h5",children:"Users"}),Object(M.jsx)(ve.a,{component:ye.a,children:Object(M.jsxs)(we.a,{children:[Object(M.jsx)(ke.a,{children:Object(M.jsxs)(Ce.a,{children:[Object(M.jsx)(Ne.a,{className:n.tableHeading,children:"Username"}),Object(M.jsx)(Ne.a,{className:n.tableHeading,align:"right",children:"Blogs Created"})]})}),Object(M.jsx)(Se.a,{children:a.map((function(e){return Object(M.jsxs)(Ce.a,{className:n.userRow,style:e.blogs.length>0?{cursor:"pointer"}:{},onClick:function(t){return function(e,t){e.preventDefault(),t.blogs.length>0&&r.push("/users/".concat(t.id))}(t,e)},hover:e.blogs.length>0,children:[Object(M.jsx)(Ne.a,{component:"th",scope:"row",children:e.username}),Object(M.jsx)(Ne.a,{align:"right",children:e.blogs.length})]},e.id)}))})]})})]})},Te=n(96),De=n(216),Ue=n(209),Ie=n(210),Be=n(207),_e=n(208),Ae=["text","href"],We=Object(B.a)((function(e){return{root:{flexGrow:1,paddingBottom:20},navbar:{backgroundColor:"#689f38"},title:{marginRight:e.spacing(5)},toolbar:{justifyContent:"space-between"},navLinks:Object(de.a)({flexGrow:1},e.breakpoints.down("sm"),{display:"none"}),drawerIcon:Object(de.a)({display:"none"},e.breakpoints.down("sm"),{display:"block"}),drawerLink:{textDecoration:"none",color:"#fff"},userCorner:Object(de.a)({flexGrow:.03,display:"flex",justifyContent:"space-between",alignItems:"center"},e.breakpoints.down("sm"),{display:"none"}),list:{height:"100%",width:300,backgroundColor:"#689f38"}}})),Re=function(e){var t=e.text,n=e.href,r=Object(Te.a)(e,Ae),a=We();return Object(M.jsx)(A.a,Object(O.a)(Object(O.a)({className:a.drawerLink,component:i.b,to:n},r),{},{children:Object(M.jsx)(W.a,{children:Object(M.jsx)(R.a,{children:t})})}))},qe=function(){var e=We(),t=Object(o.b)(),n=Object(a.useState)(!1),r=Object(I.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(0),u=Object(I.a)(i,2),l=u[0],j=u[1],d=function(e,t){(!e||"keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&s(t)},b=function(e,t){d(e,!1),j(t)};return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(oe.a,{className:e.drawerIcon,onClick:function(e){return d(e,!0)},edge:"end",children:Object(M.jsx)(Be.a,{style:{color:"#92C565"}})}),Object(M.jsx)(De.a,{anchor:"right",open:c,onClose:function(e){return d(e,!1)},onOpen:function(e){return d(e,!0)},children:Object(M.jsx)("div",{role:"presentation",className:e.list,children:Object(M.jsxs)(_.a,{children:[Object(M.jsx)(A.a,{style:{justifyContent:"flex-end"},children:Object(M.jsx)(oe.a,{onClick:function(e){return d(e,!1)},edge:"end",children:Object(M.jsx)(_e.a,{style:{color:"#92C565"}})})}),Object(M.jsx)(q.a,{}),Object(M.jsx)(Re,{text:"Blogs",href:"/blogs",onClick:function(e){return b(e,0)},selected:0===l}),Object(M.jsx)(Re,{text:"Users",href:"/users",onClick:function(e){return b(e,1)},selected:1===l}),Object(M.jsx)(q.a,{}),Object(M.jsx)(Re,{text:"Log Out",onClick:function(){return t(D())}})]})})})]})},Fe=function(e){var t=e.currentUser,n=e.users,r=Object(o.b)(),a=We(),c=t&&n.find((function(e){return e.username===t.username}));return Object(M.jsxs)("div",{className:a.root,children:[Object(M.jsx)(Ue.a,{className:a.navbar,children:Object(M.jsxs)(Ie.a,{className:a.toolbar,children:[Object(M.jsx)(R.a,{variant:"h5",className:a.title,children:"Blog App"}),t&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)("div",{className:a.navLinks,children:[Object(M.jsx)(ee.a,{color:"inherit",component:i.b,to:"/blogs",children:"Blogs"}),Object(M.jsx)(ee.a,{color:"inherit",component:i.b,to:"/users",children:"Users"})]}),Object(M.jsx)(qe,{}),Object(M.jsxs)("div",{className:a.userCorner,children:[Object(M.jsxs)(R.a,{className:a.userCornerItem,children:["Hello, ",c&&c.username]}),Object(M.jsx)(q.a,{style:{background:"#92C565"},orientation:"vertical",variant:"middle",flexItem:!0}),Object(M.jsx)(ee.a,{color:"inherit",component:i.b,to:c&&"/users/".concat(c.id),children:"My Posts"}),Object(M.jsx)(ee.a,{color:"inherit",onClick:function(){return r(D())},children:"Logout"})]})]})]})}),Object(M.jsx)(Ie.a,{})]})},Ge=n(214),Pe=function(e){var t=e.alerts;return t.content?Object(M.jsx)("div",{children:t.content.map((function(e,n){return Object(M.jsx)(Ge.a,{severity:"success"===t.type?"success":"error",children:e},n)}))}):null},He=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.alerts})),n=Object(o.c)((function(e){return e.blogs})),r=Object(o.c)((function(e){return e.login})),c=Object(o.c)((function(e){return e.users}));return Object(a.useEffect)((function(){e(N()),e(function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.getAll();case 2:n=e.sent,t({type:"SET_USERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(a.useEffect)((function(){var t=window.localStorage.getItem("loggedBlogappUser");if(t){var n=JSON.parse(t);v.setToken(n.token),e(function(e){return{type:"SET_USER",data:e}}(n))}}),[e]),Object(M.jsxs)(l.a,{component:"main",maxWidth:"md",children:[Object(M.jsx)(j.a,{}),Object(M.jsxs)(i.a,{children:[Object(M.jsx)(Fe,{currentUser:r,blogs:n,users:c}),Object(M.jsx)(Pe,{alerts:t}),Object(M.jsxs)(u.d,{children:[Object(M.jsx)(u.b,{path:"/users/:id",children:r?Object(M.jsx)(re,{users:c}):Object(M.jsx)(u.a,{to:"/login"})}),Object(M.jsx)(u.b,{path:"/users",children:r?Object(M.jsx)(Ee,{users:c}):Object(M.jsx)(u.a,{to:"/login"})}),Object(M.jsx)(u.b,{path:"/blogs/:id",children:r?Object(M.jsx)(je,{loggedInUser:r,blogData:n}):Object(M.jsx)(u.a,{to:"/login"})}),Object(M.jsx)(u.b,{path:"/blogs",children:r?Object(M.jsx)(re,{blogData:n,users:c}):Object(M.jsx)(u.a,{to:"/login"})}),Object(M.jsx)(u.b,{path:"/signup",children:Object(M.jsx)(ge,{isLogIn:!1})}),Object(M.jsx)(u.b,{path:"/login",children:r?Object(M.jsx)(u.a,{to:"/"}):Object(M.jsx)(ge,{isLogIn:!0})}),Object(M.jsx)(u.b,{path:"/",children:r?Object(M.jsx)(u.a,{to:"/blogs"}):Object(M.jsx)(ge,{isLogIn:!0})})]})]})]})},Me=n(66),ze=n(94),Je=Object(Me.b)({alerts:w,blogs:S,login:U,users:E}),Ve=Object(Me.c)(Je,Object(Me.a)(ze.a));s.a.render(Object(M.jsx)(o.a,{store:Ve,children:Object(M.jsx)(He,{})}),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.de70c190.chunk.js.map