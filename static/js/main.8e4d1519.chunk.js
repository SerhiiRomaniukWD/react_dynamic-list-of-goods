(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,r){},14:function(t,n,r){"use strict";r.r(n);var e=r(5),a=r.n(e),c=r(2),o=r(6),u=r(1),s=r.n(u),i=r(3),f=(r(12),r(0)),d=function(t){var n=t.goods;return Object(f.jsx)("ul",{children:n.map((function(t){var n=t.id,r=t.name,e=t.color;return Object(f.jsx)("li",{"data-cy":"good",style:{color:e},children:r},n)}))})},p="https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json",l=function(){var t=Object(c.a)(s.a.mark((function t(n){var r,e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n);case 2:if((r=t.sent).ok){t.next=5;break}throw new Error("".concat(r.status,"-").concat(r.statusText));case 5:return t.next=7,r.json();case 7:return e=t.sent,t.abrupt("return",e);case 9:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();function b(){var t=function(){var t=Object(c.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(p);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return t()}var j=function(){var t=function(){var t=Object(c.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(p);case 2:return n=t.sent,t.abrupt("return",n.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return t()},v=function(){var t=function(){var t=Object(c.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(p);case 2:return n=t.sent,t.abrupt("return",n.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return t()},h=function(){var t=Object(i.useState)([]),n=Object(o.a)(t,2),r=n[0],e=n[1],a=function(t){var n=function(){var n=Object(c.a)(s.a.mark((function n(){var r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:r=n.sent,e(r);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return n()};return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Dynamic list of Goods"}),Object(f.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return a(b)},children:"Load all goods"}),Object(f.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return a(j)},children:"Load 5 first goods"}),Object(f.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return a(v)},children:"Load red goods"}),Object(f.jsx)(d,{goods:r})]})};a.a.render(Object(f.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8e4d1519.chunk.js.map