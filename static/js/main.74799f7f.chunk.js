(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"Form_form__2sKR7",label:"Form_label__1wPUn",input:"Form_input__3aOZO",button:"Form_button__1anut"}},function(t,e,n){t.exports={list:"ContactList_list__11UCr",item:"ContactList_item__1EFqE",button:"ContactList_button__1R7sm"}},,,,,,function(t,e,n){t.exports={section:"Section_section__1yk93",title:"Section_title__2xfml"}},function(t,e,n){t.exports={label:"Filter_label__1_LXF",input:"Filter_input__1o1j3"}},,function(t,e,n){t.exports={container:"Container_container__2a5lm"}},,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),i=n.n(r),s=(n(19),n(14)),o=n(4),l=n(5),u=n(7),b=n(6),m=n(23),d=n(12),j=n.n(d),h=n(0);var f=function(t){var e=t.children;return Object(h.jsx)("div",{className:j.a.container,children:e})},p=n(9),O=n.n(p);var _=function(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{className:O.a.section,children:[Object(h.jsx)("h2",{className:O.a.title,children:e}),n]})},v=n(3),C=n.n(v),x=function(t){var e=t.name,n=t.number,a=t.onClick;return Object(h.jsxs)("li",{className:C.a.item,children:[Object(h.jsxs)("p",{children:[e,": ",n]}),Object(h.jsx)("button",{type:"button",className:C.a.button,onClick:a,children:"Delete"})]})},g=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(h.jsx)("ul",{className:C.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsx)(x,{name:a,number:c,onClick:function(){return n(e)}},e)}))})},N=n(13),y=n(2),S=n.n(y),k=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(N.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{className:S.a.form,onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{className:S.a.label,children:["Name",Object(h.jsx)("input",{type:"text",name:"name",className:S.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.handleInputChange})]}),Object(h.jsxs)("label",{className:S.a.label,children:["Number",Object(h.jsx)("input",{type:"tel",name:"number",className:S.a.input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.handleInputChange})]}),Object(h.jsx)("button",{type:"submit",className:S.a.button,children:"Add contact"})]})}}]),n}(a.Component),F=k,w=n(10),A=n.n(w);var L=function(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("label",{className:A.a.label,children:["Find contacts by name",Object(h.jsx)("input",{type:"text",className:A.a.input,value:e,onChange:n})]})},z=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(m.a)(),name:n,number:a};t.setState((function(t){var e=t.contacts;return e.some((function(t){return t.name===n}))?alert("".concat(n," is already in contacts!")):{contacts:[c].concat(Object(s.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFitler=function(e){t.setState({filter:e.target.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(h.jsxs)(f,{children:[Object(h.jsx)(_,{title:"Phonebook",children:Object(h.jsx)(F,{onSubmit:this.addContact})}),Object(h.jsxs)(_,{title:"Contacts",children:[Object(h.jsx)(L,{value:t,onChange:this.changeFitler}),Object(h.jsx)(g,{contacts:e,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component),D=z;i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(D,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.74799f7f.chunk.js.map