(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(7),r=n.n(c),s=n(3),a=n(4),o=n(1),u=n.n(o),i=n(2),l=n.n(i),p=(n(13),n(14),"https://mate.academy/students-api");function b(e){return j.apply(this,arguments)}function j(){return(j=Object(s.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/posts").concat(0===t?"":"?userId=".concat(t)));case 3:if((n=e.sent).ok){e.next=6;break}throw Error(n.statusText);case 6:return e.next=8,n.json();case 8:return c=e.sent,e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:return e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}n(15);var d=n(0),m=l.a.memo((function(e){var t=e.selectedUserId,n=e.selectedPostId,c=e.setSelectedPostId,r=e.setPost,o=Object(i.useState)([]),l=Object(a.a)(o,2),p=l[0],j=l[1],m=Object(i.useCallback)(function(){var e=Object(s.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:n=e.sent,j(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[p]);return Object(i.useEffect)((function(){m(t)}),[t]),Object(d.jsxs)("div",{className:"PostsList",children:[Object(d.jsx)("h2",{children:"Posts:"}),Object(d.jsx)("ul",{className:"PostsList__list","data-cy":"postDetails",children:p&&p.map((function(e){return Object(d.jsxs)("li",{className:"PostsList__item",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"[User #".concat(e.userId,"]: ")}),e.title]}),n===e.id?Object(d.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){c(0),r(null)},children:"Close"}):Object(d.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){c(e.id),r(e)},children:"Open"})]},e.id)}))})]})}));function f(e){return h.apply(this,arguments)}function h(){return(h=Object(s.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/comments?postId=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return x.apply(this,arguments)}function x(){return(x=Object(s.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/comments"),{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}});case 3:if((n=e.sent).ok){e.next=6;break}throw Error(n.statusText);case 6:return e.next=8,n.json();case 8:return c=e.sent,e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:return e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function v(e){return _.apply(this,arguments)}function _(){return(_=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(p,"/comments/").concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var y=n(5),w=(n(17),function(e){var t=e.postId,n=e.getComments,c=Object(i.useState)({name:"",email:"",body:""}),r=Object(a.a)(c,2),o=r[0],l=r[1],p=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=Object(i.useCallback)(function(){var e=Object(s.a)(u.a.mark((function e(c){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),r=Object(y.a)(Object(y.a)({},o),{},{postId:t}),e.next=4,p(r);case 4:return e.next=6,n(t);case 6:l({name:"",email:"",body:""});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(d.jsxs)("form",{className:"NewCommentForm",onSubmit:function(e){b(e)},children:[Object(d.jsx)("div",{className:"form-field",children:Object(d.jsx)("input",{name:"name",type:"text",placeholder:"Your name",className:"NewCommentForm__input",value:o.name,onChange:function(e){l((function(t){return Object(y.a)(Object(y.a)({},t),{},{name:e.target.value})}))},required:!0})}),Object(d.jsx)("div",{className:"form-field",children:Object(d.jsx)("input",{name:"email",type:"text",placeholder:"Your email",className:"NewCommentForm__input",value:o.email,onChange:function(e){l((function(t){return Object(y.a)(Object(y.a)({},t),{},{email:e.target.value})}))},required:!0})}),Object(d.jsx)("div",{className:"form-field",children:Object(d.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:o.body,onChange:function(e){l((function(t){return Object(y.a)(Object(y.a)({},t),{},{body:e.target.value})}))},required:!0})}),Object(d.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),N=(n(18),l.a.memo((function(e){var t=e.post,n=Object(i.useState)(null),c=Object(a.a)(n,2),r=c[0],o=c[1],l=Object(i.useState)(!1),p=Object(a.a)(l,2),b=p[0],j=p[1],m=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=Object(i.useCallback)(function(){var e=Object(s.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:n=e.sent,o(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[r]),O=function(){var e=Object(s.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:return e.next=4,h(n);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){h(t.id)}),[t]),Object(d.jsxs)("div",{className:"PostDetails",children:[Object(d.jsx)("h2",{children:"Post details:"}),Object(d.jsx)("section",{className:"PostDetails__post",children:Object(d.jsx)("p",{children:t.body})}),Object(d.jsxs)("section",{className:"PostDetails__comments",children:[Object(d.jsx)("button",{type:"button",className:"button button--pb",onClick:function(){0!==(null===r||void 0===r?void 0:r.length)&&j(!b)},children:"".concat(b?"Show":"Hide"," ").concat(null===r||void 0===r?void 0:r.length," comments")}),b||Object(d.jsx)("ul",{className:"PostDetails__list","data-cy":"postDetails",children:null===r||void 0===r?void 0:r.map((function(e){return Object(d.jsxs)("li",{className:"PostDetails__list-item",children:[Object(d.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){O(e.id,t.id)},children:"X"}),Object(d.jsx)("p",{children:e.body})]},e.id)}))})]}),Object(d.jsx)("section",{children:Object(d.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(d.jsx)(w,{postId:t.id,getComments:h})})})]})}))),k=function(){var e=Object(s.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/users/"));case 3:if((t=e.sent).ok){e.next=6;break}throw Error(t.statusText);case 6:return e.next=8,t.json();case 8:return n=e.sent,e.abrupt("return",n.slice(0,10));case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:return e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(i.useState)(0),t=Object(a.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(0),o=Object(a.a)(r,2),l=o[0],p=o[1],b=Object(i.useState)(null),j=Object(a.a)(b,2),f=j[0],h=j[1],O=Object(i.useState)([]),x=Object(a.a)(O,2),v=x[0],_=x[1],y=Object(i.useCallback)(Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,_(t);case 4:case"end":return e.stop()}}),e)}))),[v]);return Object(i.useEffect)((function(){y()}),[]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App__header",children:Object(d.jsxs)("label",{children:["Select a user: \xa0",Object(d.jsxs)("select",{className:"App__user-selector",value:n,onChange:function(e){c(Number(e.target.value))},children:[Object(d.jsx)("option",{value:"0",children:"All users"}),v.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]})}),Object(d.jsxs)("main",{className:"App__main",children:[Object(d.jsx)("div",{className:"App__sidebar",children:Object(d.jsx)(m,{selectedUserId:n,selectedPostId:l,setSelectedPostId:p,setPost:h})}),Object(d.jsx)("div",{className:"App__content",children:null===f?Object(d.jsx)("h2",{children:"Post details"}):Object(d.jsx)(N,{post:f})})]})]})};r.a.render(Object(d.jsx)(P,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.7f834c9d.chunk.js.map