(this["webpackJsonpreact_contact-app"]=this["webpackJsonpreact_contact-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},,function(t,e,c){},function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var a=c(1),n=c(10),s=c.n(n),i=c(5),l=(c(16),c(8)),r=c(3),o=c(2),j=(c(17),c(11)),d=(c(18),c(0)),b=function(t){var e=t.contacts,c=t.setContacts,n=Object(o.g)().personalId,s=e.find((function(t){return t.id===+n})),b=Object(a.useState)(s.firstname),u=Object(r.a)(b,2),O=u[0],m=u[1],h=Object(a.useState)(s.lastname),p=Object(r.a)(h,2),x=p[0],f=p[1],_=Object(a.useState)(s.city),v=Object(r.a)(_,2),g=v[0],N=v[1],C=Object(a.useState)(s.email),y=Object(r.a)(C,2),w=y[0],S=y[1],k=Object(a.useState)(s.tel),q=Object(r.a)(k,2),F=q[0],I=q[1];return Object(d.jsx)(d.Fragment,{children:s&&Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{onSubmit:function(t){return function(t){if(t.preventDefault(),window.confirm("Do you want to change?")){alert("Your contact was changed. Please, click Back.");var a=e.map((function(t){if(t.id===s.id){var e=Object(j.a)({},t);t.firstname=O,t.lastname=x,t.city=g,t.email=w,t.tel=F,t.prev=e}return t}));c(Object(l.a)(a))}else alert("Your contact wasn't change. Please, click Back."),m(s.firstName),f(s.lastName),N(s.city),S(s.email),I(s.tel);console.log(e)}(t)},className:"form",children:[Object(d.jsx)("input",{type:"text",value:O,onChange:function(t){m(t.target.value)},className:"form__field",required:!0}),Object(d.jsx)("input",{type:"text",value:x,onChange:function(t){f(t.target.value)},className:"form__field",required:!0}),Object(d.jsx)("input",{type:"text",value:g,onChange:function(t){N(t.target.value)},className:"form__field",required:!0}),Object(d.jsx)("input",{type:"email",value:w,onChange:function(t){S(t.target.value)},className:"form__field",required:!0}),Object(d.jsx)("input",{type:"tel",pattern:"[0-9]{3}[0-9]{3}[0-9]{4}",value:F,onChange:function(t){I(t.target.value)},className:"form__field",required:!0}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{type:"submit",className:"button__edit",children:"Change"}),Object(d.jsx)(i.b,{to:"/react_contact-app/",children:Object(d.jsx)("button",{className:"button__edit",children:"Back"})}),Object(d.jsx)("button",{type:"button",className:"button__edit button__edit-return",onClick:function(){void 0!==s.prev&&(m(s.prev.firstname),f(s.prev.lastname),N(s.prev.city),S(s.prev.email),I(s.prev.tel))},children:"Return"})]})]})})})},u=(c(20),function(t){var e=t.contacts,c=t.deleteContact,a=Object(o.g)().personalId,n=e.find((function(t){return t.id===+a}));return console.log(n),Object(d.jsxs)("div",{className:"contact-view",children:[Object(d.jsx)("div",{className:"contact-view__info",children:n?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("p",{children:["Id: ",n.id]}),Object(d.jsxs)("p",{children:["First name: ",n.firstname]}),Object(d.jsxs)("p",{children:["Last name: ",n.lastname]}),Object(d.jsxs)("p",{children:["City: ",n.city]}),Object(d.jsxs)("p",{children:["Email: ",n.email]}),Object(d.jsxs)("p",{children:["Phone: ",n.tel]})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"",children:"You deleted this contact"}),Object(d.jsxs)("p",{className:"",children:["Please, click ",Object(d.jsx)("b",{children:"Back"}),"."]})]})}),Object(d.jsx)("div",{className:"contact-view__bottom",children:n?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(i.b,{to:"/react_contact-app/",className:"contact-view__button",children:"Back"}),Object(d.jsx)("button",{className:"contact-view__button contact-view__button-delete",onClick:function(){return c(n.id)},children:"Delete"}),Object(d.jsx)(i.b,{to:"/react_contact-app/edit/".concat(n.id),className:"contact-view__button",children:"Edit"})]}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(i.b,{to:"/react_contact-app/",className:"contact-view__button",children:"Back"})})})]})}),O=(c(21),function(t){var e=t.contacts,c=t.deleteContact;return Object(d.jsx)("div",{className:"contact",children:Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)("thead",{className:"table__head",children:Object(d.jsxs)("tr",{className:"table__title",children:[Object(d.jsx)("th",{children:"ID"}),Object(d.jsx)("th",{children:"First name"}),Object(d.jsx)("th",{children:"Last name"}),Object(d.jsx)("th",{children:"City"}),Object(d.jsx)("th",{children:"Email"}),Object(d.jsx)("th",{children:"Phone"}),Object(d.jsx)("th",{children:"Action"})]})}),Object(d.jsx)("tbody",{children:e.map((function(t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.id}),Object(d.jsx)("td",{children:t.firstname}),Object(d.jsx)("td",{children:t.lastname}),Object(d.jsx)("td",{children:t.city}),Object(d.jsx)("td",{children:t.email}),Object(d.jsx)("td",{children:t.tel}),Object(d.jsxs)("td",{children:[Object(d.jsx)(i.b,{to:"/react_contact-app/edit/".concat(t.id),className:"table__button",children:"Edit"}),Object(d.jsx)("div",{onClick:function(){return c(t.id)},className:"table__button table__button-delete",children:"Delete"}),Object(d.jsx)(i.b,{to:"/react_contact-app/contacts/".concat(t.id),className:"table__button",children:"View"})]})]},t.id)}))})]})})}),m=(c(22),function(t){var e=t.addContact,c=t.contacts,n=Object(a.useState)(),s=Object(r.a)(n,2),i=s[0],l=s[1],o=Object(a.useState)(),j=Object(r.a)(o,2),b=j[0],u=j[1],O=Object(a.useState)(),m=Object(r.a)(O,2),h=m[0],p=m[1],x=Object(a.useState)(),f=Object(r.a)(x,2),_=f[0],v=f[1],g=Object(a.useState)(),N=Object(r.a)(g,2),C=N[0],y=N[1];return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:function(t){return function(t){t.preventDefault();var a={id:c.length+1,firstname:i,lastname:b,city:h,email:_,tel:C,prev:null};console.log(c),e(a),l(""),u(""),p(""),v(""),y("")}(t)},className:"form",children:[Object(d.jsx)("input",{type:"text",placeholder:"First name",value:i,onChange:function(t){l(t.target.value)},className:"form__field",required:!0}),Object(d.jsx)("input",{type:"text",placeholder:"Last name",value:b,onChange:function(t){u(t.target.value)},className:"form__field",required:!0}),Object(d.jsx)("input",{type:"text",placeholder:"City",value:h,onChange:function(t){p(t.target.value)},className:"form__field",required:!0}),Object(d.jsx)("input",{type:"email",placeholder:"Email: name@gmail.com",value:_,onChange:function(t){v(t.target.value)},className:"form__field",required:!0}),Object(d.jsx)("input",{type:"tel",pattern:"[0-9]{3}[0-9]{3}[0-9]{4}",placeholder:"Phone: 123-456-7890",value:C,onChange:function(t){y(t.target.value)},className:"form__field",required:!0}),Object(d.jsx)("button",{type:"submit",className:"button-add",children:"Add contact"})]})})}),h=function(t){var e=t.addContact,c=t.contacts,a=t.deleteContact;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{addContact:e,contacts:c}),c.length?Object(d.jsx)(O,{contacts:c,deleteContact:a}):Object(d.jsx)("p",{})]})};var p=function(){var t=Object(a.useState)(JSON.parse(localStorage.getItem("contacts"))||[]),e=Object(r.a)(t,2),c=e[0],n=e[1];Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(c))}),[c]);var s=function(t){window.confirm("Do you want delete?")&&n(c.filter((function(e){return e.id!==t})))};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"header",children:Object(d.jsx)(i.b,{to:"/react_contact-app/",className:"header__title",children:"Contact App"})}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/react_contact-app/",element:Object(d.jsx)(h,{addContact:function(t){n([].concat(Object(l.a)(c),[t]))},contacts:c,deleteContact:s})}),Object(d.jsx)(o.a,{path:"/react_contact-app/contacts/:personalId",element:Object(d.jsx)(u,{contacts:c,deleteContact:s})}),Object(d.jsx)(o.a,{path:"/react_contact-app/edit/:personalId",element:Object(d.jsx)(b,{contacts:c,setContacts:n})})]})]})};s.a.render(Object(d.jsx)(i.a,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.5ba7a525.chunk.js.map