(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{47:function(e,t,c){e.exports={comments:"Comments_comments__iZX-v"}},48:function(e,t,c){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},49:function(e,t,c){e.exports={item:"CommentItem_item__24mbD"}},50:function(e,t,c){e.exports={comments:"CommentsList_comments__valp0"}},51:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},53:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(7),o=c(37),a=c(0),m=c(47),r=c.n(m),i=c(48),j=c.n(i),d=c(35),l=c(36),u=c(14),b=c(1),x=function(e){var t=Object(a.useRef)(),c=Object(d.a)(l.a),n=c.sendRequest,s=c.status,o=c.error,m=function(c){c.preventDefault();var s=t.current.value;n({commentData:s,quoteId:e.quoteId})},r=e.onAddedComment;return Object(a.useEffect)((function(){"completed"!==s||o||r()}),[s,o,r]),Object(b.jsxs)("form",{className:j.a.form,onSubmit:m,children:["pending"===s&&Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(u.a,{})}),Object(b.jsxs)("div",{className:j.a.control,onSubmit:m,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(b.jsx)("div",{className:j.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},O=c(49),h=c.n(O),f=function(e){return Object(b.jsx)("li",{className:h.a.item,children:Object(b.jsx)("p",{children:e.text})})},p=c(50),_=c.n(p),N=function(e){return Object(b.jsx)("ul",{className:_.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(f,{text:e.comment},e.id)}))})},v=function(e){var t,c=Object(a.useState)(!1),n=Object(o.a)(c,2),s=n[0],m=n[1],i=Object(d.a)(l.c),j=i.sendRequest,O=i.status,h=i.data,f=e.quoteId,p=Object(a.useCallback)((function(){j(f)}),[j,f]);return Object(a.useEffect)((function(){j(f)}),[f,j]),"pending"===O&&(t=Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(u.a,{})})),"completed"===O&&h&&h.length>0&&(t=Object(b.jsx)(N,{comments:h})),"completed"===O&&h&&0===h.length&&(t=Object(b.jsx)("p",{className:"centered",children:"No comments added."})),Object(b.jsxs)("section",{className:r.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!s&&Object(b.jsx)("button",{className:"btn",onClick:function(){m(!0)},children:"Add a Comment"}),s&&Object(b.jsx)(x,{quoteId:f,onAddedComment:p}),t]})},C=c(51),g=c.n(C),q=function(e){return Object(b.jsxs)("figure",{className:g.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(n.j)(),t=Object(n.k)(),c=e.quoteId,o=Object(d.a)(l.e,!0),m=o.sendRequest,r=o.status,i=o.data,j=o.error;return Object(a.useEffect)((function(){m(c)}),[m,c]),"pending"===r?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(u.a,{})}):j?Object(b.jsx)("div",{className:"centered",children:j}):i.text?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"QuoteDetail page"}),Object(b.jsx)(q,{text:i.text,author:i.author}),Object(b.jsx)(n.c,{path:t.path,exact:!0,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(s.b,{className:"btn--flat",to:"".concat(t.url,"/comments"),children:"Load comments"})})}),Object(b.jsx)(n.c,{path:"".concat(t.url,"/comments"),children:Object(b.jsx)(v,{quoteId:c})})]}):Object(b.jsx)("p",{children:"No quote found"})}}}]);
//# sourceMappingURL=4.e64739c7.chunk.js.map