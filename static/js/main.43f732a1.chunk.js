(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{12:function(t,e,n){"use strict";var c={getIsLoggedIn:function(t){return t.auth.isLoggedIn},getUserName:function(t){return t.auth.user.name},getIsFetching:function(t){return t.auth.isFetching}};e.a=c},13:function(t,e,n){"use strict";var c=n(14),r=n.n(c),a=n(21),i=n(17),o=n.n(i),u=n(3);o.a.defaults.baseURL="https://connections-api.herokuapp.com";var s=function(t){o.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){o.a.defaults.headers.common.Authorization=""},j=Object(u.c)("auth/register",function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("/users/singnup",e);case 3:return n=t.sent,c=n.data,s(c.token),t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(0),alert("Something went wrong");case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),l=Object(u.c)("auth/login",function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("/users/login",e);case 3:return n=t.sent,c=n.data,s(c.token),t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(0),alert("Something went wrong");case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),d=Object(u.c)("auth/exit",function(){var t=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("/users/exit",e);case 3:return n=t.sent,c=n.data,b(),t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(0),alert("Something went wrong");case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),f=Object(u.c)("auth/current",function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,i,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n.getState(),null!==(a=c.auth.token)){t.next=4;break}return t.abrupt("return",n.rejectWithValue());case 4:return s(a),t.prev=5,t.next=8,o.a.get("/users/current");case 8:return i=t.sent,u=i.data,t.abrupt("return",u);case 13:t.prev=13,t.t0=t.catch(5),alert("Some problems");case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}()),h={register:j,logIn:l,Exit:d,fetchCurrentUser:f};e.a=h},23:function(t,e,n){t.exports={link:"Navigation_link__1ec81",activeLink:"Navigation_activeLink__3nU2_ Navigation_link__1ec81"}},9:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"f",(function(){return a})),n.d(e,"g",(function(){return i})),n.d(e,"e",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"j",(function(){return l})),n.d(e,"h",(function(){return d}));var c=n(3),r=Object(c.b)("phonebook/filterContacts"),a=Object(c.b)("contacts/fetchContactsRequest"),i=Object(c.b)("contacts/fetchContactsSuccess"),o=Object(c.b)("contacts/fetchContactsError"),u=Object(c.b)("contacts/fetchAddToContactsRequest"),s=Object(c.b)("contacts/fetchAddToContactsSuccess"),b=Object(c.b)("contacts/fetchAddToContactsError"),j=Object(c.b)("contacts/fetchDeleteRequest"),l=Object(c.b)("contacts/fetchDeleteSuccess"),d=Object(c.b)("contacts/fetchDeleteError")},94:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(26),i=n.n(a),o=n(2),u=n(6),s=n(39),b=n.n(s),j=n(20),l=n(27),d=n(12),f=n(1),h=["component","redirectTo","children"];function O(t){t.component;var e=t.redirectTo,n=void 0===e?"/":e,c=t.children,r=Object(l.a)(t,h),a=Object(u.d)(d.a.getIsLoggedIn);return Object(f.jsx)(o.b,Object(j.a)(Object(j.a)({},r),{},{children:a?c:Object(f.jsx)(o.a,{to:n})}))}var g=["restricted","redirectTo","children"];function p(t){var e=t.restricted,n=void 0!==e&&e,c=t.redirectTo,r=void 0===c?"/":c,a=t.children,i=Object(l.a)(t,g),s=Object(u.d)(d.a.getIsLoggedIn)&&n;return Object(f.jsx)(o.b,Object(j.a)(Object(j.a)({},i),{},{children:s?Object(f.jsx)(o.a,{to:r}):a}))}var v=n(16),x=function(){var t=Object(u.d)(d.a.getIsLoggedIn);return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{children:[" ",t&&Object(f.jsx)(v.b,{to:"/contacts",children:"Contacts"})]})})},k=n(23),m=n.n(k);function w(){return Object(f.jsxs)("nav",{children:[Object(f.jsx)(v.b,{exact:!0,to:"/register",className:m.a.link,activeClassName:m.a.activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(f.jsx)(v.b,{to:"/login",className:m.a.link,activeClassName:m.a.activeLink,children:"\u0412\u0445\u043e\u0434"})]})}var I=n(13);function y(){var t=Object(u.c)(),e=Object(u.d)(d.a.getUserName);return Object(f.jsxs)("div",{children:[Object(f.jsxs)("h1",{children:["Hi, ",e,"! "]}),Object(f.jsx)("button",{type:"button",onClick:function(){return t(I.a.Exit())},children:"Exit"})]})}function C(){var t=Object(u.d)(d.a.getIsLoggedIn);return Object(f.jsxs)("div",{children:[Object(f.jsx)(x,{}),t?Object(f.jsx)(y,{}):Object(f.jsx)(w,{})]})}var L=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,98))})),S=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,99))})),T=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,100))}));function F(){var t=Object(u.c)(),e=Object(u.d)(d.a.getIsFetching);return Object(c.useEffect)((function(){t(I.a.fetchCurrentUser())}),[t]),e?null:Object(f.jsxs)("div",{children:[Object(f.jsx)(C,{}),Object(f.jsx)(c.Suspense,{fallback:Object(f.jsx)(b.a,{type:"Hearts",color:"#00BFFF",height:80,width:80}),children:Object(f.jsxs)(o.d,{children:[Object(f.jsx)(p,{exact:!0,path:"/register",redirectTo:"/contacts",restricted:!0,children:Object(f.jsx)(S,{})}),Object(f.jsx)(p,{exact:!0,path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(f.jsx)(L,{})}),Object(f.jsx)(O,{path:"/contacts",redirectTo:"/login",children:Object(f.jsx)(T,{})})]})})]})}var _,E,N,U,z=n(3),A=n(40),R=n.n(A),q=n(4),B=n(43),D=n(7),H=n(9),J=Object(z.d)([],(_={},Object(q.a)(_,H.g,(function(t,e){return Object(B.a)(e.payload)})),Object(q.a)(_,H.e,(function(t,e){return t})),_)),M=Object(z.d)("",Object(q.a)({},H.a,(function(t,e){return e.payload}))),V=Object(z.d)(!1,(E={},Object(q.a)(E,H.f,(function(){return!0})),Object(q.a)(E,H.e,(function(){return!1})),Object(q.a)(E,H.g,(function(){return!1})),Object(q.a)(E,H.c,(function(){return!0})),Object(q.a)(E,H.b,(function(){return!1})),Object(q.a)(E,H.d,(function(){return!1})),Object(q.a)(E,H.i,(function(){return!0})),Object(q.a)(E,H.h,(function(){return!1})),Object(q.a)(E,H.j,(function(){return!1})),E)),W=Object(z.d)(null,(N={},Object(q.a)(N,H.e,(function(t,e){return e.payload})),Object(q.a)(N,H.f,(function(t,e){e.payload;return null})),N)),G=Object(D.b)({items:J,isLoading:V,error:W,filter:M}),K=Object(z.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetching:!1},extraReducers:(U={},Object(q.a)(U,I.a.register.fulfilled,(function(t,e){var n=e.payload;t.user=n.user,t.token=n.token,t.isLoggedIn=!0})),Object(q.a)(U,I.a.logIn.fulfilled,(function(t,e){var n=e.payload;t.user=n.user,t.token=n.token,t.isLoggedIn=!0})),Object(q.a)(U,I.a.Exit.fulfilled,(function(t,e){t.user={name:null,email:null},t.token=null,t.isLoggedIn=!1})),Object(q.a)(U,I.a.fetchCurrentUser.pending,(function(t){t.isFetching=!0})),Object(q.a)(U,I.a.fetchCurrentUser.fulfilled,(function(t,e){var n=e.payload;t.user=n,t.isLoggedIn=!0,t.isFetching=!1})),Object(q.a)(U,I.a.fetchCurrentUser.rejected,(function(t,e){t.isFetching=!1})),U)}).reducer,P=n(15),Q=n(41),X={key:"root",storage:n.n(Q).a,whitelist:["token"]},Y=Object(P.g)(X,K),Z=Object(z.a)({reducer:{contacts:G,auth:Y},middleware:function(t){return t({serializableCheck:{ignoredActions:[P.a,P.f,P.b,P.c,P.d,P.e]}}).concat(R.a)},devTools:!1}),$=Object(P.h)(Z),tt=n(42);i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(u.a,{store:Z,children:Object(f.jsx)(tt.a,{loading:null,persistor:$,children:Object(f.jsx)(v.a,{children:Object(f.jsx)(F,{})})})})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.43f732a1.chunk.js.map