(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{103:function(e,a,t){e.exports=t(119)},109:function(e,a,t){},119:function(e,a,t){"use strict";t.r(a);var n,r,o,l,c,i=t(0),s=t.n(i),u=t(38),m=t.n(u),d=(t(108),t(109),t(29)),b=t(52),g=t(13),p=t(97),v=t(121),k=t(140),E=t(136),h=t(96),f=t(98),w=t(20),O=t.n(w),j=t(32),S=t(15),y=t(130),I=t(131),x=t(138),C=t(92),B=t(132),T=t(133),_=t(145),F=t(125),L=t(89),$=t(90),q=t(79),N=t.n(q),U=new(function(){function e(){Object(L.a)(this,e)}return Object($.a)(e,[{key:"getProfile",value:function(){return N()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return N()(e).exp<Date.now()/1e3}catch(a){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),P=t(44),D=t(139),Y=Object(D.a)(n||(n=Object(P.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),V=Object(D.a)(r||(r=Object(P.a)(["\n  mutation createUser($username: String!, $email: String!, $password: String!) {\n    createUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),G=Object(D.a)(o||(o=Object(P.a)(["\n  mutation saveBook($book: BookToSave!) {\n    saveBook(book: $book) {\n            _id\n            username\n            email\n            savedBooks {\n              _id\n              authors\n              description\n              bookId\n              image\n              link\n              title\n            }\n    }\n  }\n"]))),J=Object(D.a)(l||(l=Object(P.a)(["\n  mutation deleteBook($bookId: String!) {\n      deleteBook(bookId: $bookId) {\n            _id\n            username\n            email\n            savedBooks {\n              _id\n              authors\n              description\n              bookId\n              image\n              link\n              title\n            }\n      }\n  }\n"]))),K=function(e){var a=localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):null;if(!a)return!1;var t=null===a||void 0===a?void 0:a.filter((function(a){return a!==e}));return localStorage.setItem("saved_books",JSON.stringify(t)),!0},z=function(){var e=Object(i.useState)([]),a=Object(S.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(""),o=Object(S.a)(r,2),l=o[0],c=o[1],u=Object(i.useState)(localStorage.getItem("saved_books")?JSON.parse(localStorage.getItem("saved_books")):[]),m=Object(S.a)(u,2),d=m[0],b=m[1],g=Object(F.a)(G),p=Object(S.a)(g,2),v=p[0],k=p[1];k.error,k.data;Object(i.useEffect)((function(){return function(){var e;(e=d).length?localStorage.setItem("saved_books",JSON.stringify(e)):localStorage.removeItem("saved_books")}}));var E=function(){var e=Object(j.a)(O.a.mark((function e(a){var t,r,o,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),l){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(l));case 6:if((t=e.sent).ok){e.next=9;break}throw new Error("something went wrong!");case 9:return e.next=11,t.json();case 11:r=e.sent,o=r.items,i=o.map((function(e){var a;return{bookId:e.id,authors:e.volumeInfo.authors||["No author to display"],title:e.volumeInfo.title,description:e.volumeInfo.description,image:(null===(a=e.volumeInfo.imageLinks)||void 0===a?void 0:a.thumbnail)||""}})),n(i),c(""),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(3),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(a){return e.apply(this,arguments)}}(),h=function(){var e=Object(j.a)(O.a.mark((function e(a){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.find((function(e){return e.bookId===a})),U.loggedIn()?U.getToken():null){e.next=4;break}return e.abrupt("return",!1);case 4:return e.prev=4,e.next=7,v({variables:{book:n}});case 7:r=e.sent,r.data,b([].concat(Object(f.a)(d),[n.bookId])),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(y.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(I.a,null,s.a.createElement("h1",null,"Search for Books!"),s.a.createElement(x.a,{onSubmit:E},s.a.createElement(x.a.Row,null,s.a.createElement(C.a,{xs:12,md:8},s.a.createElement(x.a.Control,{name:"searchInput",value:l,onChange:function(e){return c(e.target.value)},type:"text",size:"lg",placeholder:"Search for a book"})),s.a.createElement(C.a,{xs:12,md:4},s.a.createElement(B.a,{type:"submit",variant:"success",size:"lg"},"Submit Search")))))),s.a.createElement(I.a,null,s.a.createElement("h2",null,t.length?"Viewing ".concat(t.length," results:"):"Search for a book to begin"),s.a.createElement(T.a,null,t.map((function(e){return s.a.createElement(_.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(_.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(_.a.Body,null,s.a.createElement(_.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(_.a.Text,null,e.description),U.loggedIn()&&s.a.createElement(B.a,{disabled:null===d||void 0===d?void 0:d.some((function(a){return a===e.bookId})),className:"btn-block btn-info",onClick:function(){return h(e.bookId)}},(null===d||void 0===d?void 0:d.some((function(a){return a===e.bookId})))?"This book has already been saved!":"Save this Book!")))})))))},A=t(134),M=Object(D.a)(c||(c=Object(P.a)(["\n  query user {\n    user {\n      _id\n      username\n      email\n      savedBooks {\n        _id\n        authors\n        description\n        bookId\n        image\n        link\n        title\n      }\n    }\n  }\n"]))),H=function(){var e=Object(F.a)(J),a=Object(S.a)(e,2),t=a[0],n=a[1],r=(n.error,n.deleteInfo,Object(A.a)(M)),o=r.loading,l=r.data,c=(null===l||void 0===l?void 0:l.user)||{};if(console.log(c),o)return s.a.createElement("h2",null,"Loading...");if(!(null===c||void 0===c?void 0:c.username))return s.a.createElement("h4",null,"You need to be logged in to see this. Use the navigation links above to sign up or log in!");var i=function(){var e=Object(j.a)(O.a.mark((function e(a){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(U.loggedIn()?U.getToken():null){e.next=3;break}return e.abrupt("return",!1);case 3:return e.prev=3,e.next=6,t({variables:{bookId:a}});case 6:n=e.sent,n.newUserData,K(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(y.a,{fluid:!0,className:"text-light bg-dark"},s.a.createElement(I.a,null,s.a.createElement("h1",null,"Viewing saved books!"))),s.a.createElement(I.a,null,s.a.createElement("h2",null,c.savedBooks.length?"Viewing ".concat(c.savedBooks.length," saved ").concat(1===c.savedBooks.length?"book":"books",":"):"You have no saved books!"),s.a.createElement(T.a,null,c.savedBooks.map((function(e){return s.a.createElement(_.a,{key:e.bookId,border:"dark"},e.image?s.a.createElement(_.a.Img,{src:e.image,alt:"The cover for ".concat(e.title),variant:"top"}):null,s.a.createElement(_.a.Body,null,s.a.createElement(_.a.Title,null,e.title),s.a.createElement("p",{className:"small"},"Authors: ",e.authors),s.a.createElement(_.a.Text,null,e.description),s.a.createElement(B.a,{className:"btn-block btn-danger",onClick:function(){return i(e.bookId)}},"Delete this Book!")))})))))},R=t(142),W=t(141),Q=t(137),X=t(143),Z=t(48),ee=t(135),ae=function(){var e=Object(i.useState)({username:"",email:"",password:""}),a=Object(S.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(S.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(S.a)(l,2),u=c[0],m=c[1],b=function(e){var a=e.target,r=a.name,o=a.value;n(Object(d.a)(Object(d.a)({},t),{},Object(Z.a)({},r,o)))},g=Object(F.a)(V),p=Object(S.a)(g,2),v=p[0],k=p[1],E=(k.error,k.data,function(){var e=Object(j.a)(O.a.mark((function e(a){var r,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,v({variables:Object(d.a)({},t)});case 6:r=e.sent,o=r.data,console.log(o.createUser.user),U.login(o.createUser.token),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0),m(!0);case 16:n({username:"",email:"",password:""});case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(a){return e.apply(this,arguments)}}());return s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,{noValidate:!0,validated:o,onSubmit:E},s.a.createElement(ee.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your signup!"),s.a.createElement(x.a.Group,null,s.a.createElement(x.a.Label,{htmlFor:"username"},"Username"),s.a.createElement(x.a.Control,{type:"text",placeholder:"Your username",name:"username",onChange:b,value:t.username,required:!0}),s.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Username is required!")),s.a.createElement(x.a.Group,null,s.a.createElement(x.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(x.a.Control,{type:"email",placeholder:"Your email address",name:"email",onChange:b,value:t.email,required:!0}),s.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(x.a.Group,null,s.a.createElement(x.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(x.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:b,value:t.password,required:!0}),s.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(B.a,{disabled:!(t.username&&t.email&&t.password),type:"submit",variant:"success"},"Submit")))},te=function(){var e=Object(i.useState)({email:"",password:""}),a=Object(S.a)(e,2),t=a[0],n=a[1],r=Object(i.useState)(!1),o=Object(S.a)(r,1)[0],l=Object(i.useState)(!1),c=Object(S.a)(l,2),u=c[0],m=c[1],b=Object(F.a)(Y),g=Object(S.a)(b,2),p=g[0],v=g[1],k=(v.error,v.data,function(e){var a=e.target,r=a.name,o=a.value;n(Object(d.a)(Object(d.a)({},t),{},Object(Z.a)({},r,o)))}),E=function(){var e=Object(j.a)(O.a.mark((function e(a){var r,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),!1===a.currentTarget.checkValidity()&&(a.preventDefault(),a.stopPropagation()),e.prev=3,e.next=6,p({variables:Object(d.a)({},t)});case 6:r=e.sent,o=r.data,console.log(o.login.user),U.login(o.login.token),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(3),console.error(e.t0),m(!0);case 16:n({username:"",email:"",password:""});case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(a){return e.apply(this,arguments)}}();return s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,{noValidate:!0,validated:o,onSubmit:E},s.a.createElement(ee.a,{dismissible:!0,onClose:function(){return m(!1)},show:u,variant:"danger"},"Something went wrong with your login credentials!"),s.a.createElement(x.a.Group,null,s.a.createElement(x.a.Label,{htmlFor:"email"},"Email"),s.a.createElement(x.a.Control,{type:"text",placeholder:"Your email",name:"email",onChange:k,value:t.email,required:!0}),s.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Email is required!")),s.a.createElement(x.a.Group,null,s.a.createElement(x.a.Label,{htmlFor:"password"},"Password"),s.a.createElement(x.a.Control,{type:"password",placeholder:"Your password",name:"password",onChange:k,value:t.password,required:!0}),s.a.createElement(x.a.Control.Feedback,{type:"invalid"},"Password is required!")),s.a.createElement(B.a,{disabled:!(t.email&&t.password),type:"submit",variant:"success"},"Submit")))},ne=function(){var e=Object(i.useState)(!1),a=Object(S.a)(e,2),t=a[0],n=a[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement(R.a,{bg:"dark",variant:"dark",expand:"lg"},s.a.createElement(I.a,{fluid:!0},s.a.createElement(R.a.Brand,{as:b.b,to:"/"},"Google Books Search"),s.a.createElement(R.a.Toggle,{"aria-controls":"navbar"}),s.a.createElement(R.a.Collapse,{id:"navbar"},s.a.createElement(W.a,{className:"ml-auto"},s.a.createElement(W.a.Link,{as:b.b,to:"/"},"Search For Books"),U.loggedIn()?s.a.createElement(s.a.Fragment,null,s.a.createElement(W.a.Link,{as:b.b,to:"/saved"},"See Your Books"),s.a.createElement(W.a.Link,{onClick:U.logout},"Logout")):s.a.createElement(W.a.Link,{onClick:function(){return n(!0)}},"Login/Sign Up"))))),s.a.createElement(Q.a,{size:"lg",show:t,onHide:function(){return n(!1)},"aria-labelledby":"signup-modal"},s.a.createElement(X.a.Container,{defaultActiveKey:"login"},s.a.createElement(Q.a.Header,{closeButton:!0},s.a.createElement(Q.a.Title,{id:"signup-modal"},s.a.createElement(W.a,{variant:"pills"},s.a.createElement(W.a.Item,null,s.a.createElement(W.a.Link,{eventKey:"login"},"Login")),s.a.createElement(W.a.Item,null,s.a.createElement(W.a.Link,{eventKey:"signup"},"Sign Up"))))),s.a.createElement(Q.a.Body,null,s.a.createElement(X.a.Content,null,s.a.createElement(X.a.Pane,{eventKey:"login"},s.a.createElement(te,{handleModalClose:function(){return n(!1)}})),s.a.createElement(X.a.Pane,{eventKey:"signup"},s.a.createElement(ae,{handleModalClose:function(){return n(!1)}})))))))},re=Object(p.a)({uri:"/graphql"}),oe=Object(h.a)((function(e,a){var t=a.headers,n=localStorage.getItem("id_token");return{headers:Object(d.a)(Object(d.a)({},t),{},{authorization:n?"Bearer ".concat(n):""})}})),le=new v.a({link:oe.concat(re),cache:new k.a});var ce=function(){return s.a.createElement(E.a,{client:le},s.a.createElement(b.a,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(ne,null),s.a.createElement(g.c,null,s.a.createElement(g.a,{exact:!0,path:"/",component:z}),s.a.createElement(g.a,{exact:!0,path:"/saved",component:H}),s.a.createElement(g.a,{render:function(){return s.a.createElement("h1",{className:"display-2"},"Wrong page!")}})))))};m.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(ce,null)),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.efae7675.chunk.js.map