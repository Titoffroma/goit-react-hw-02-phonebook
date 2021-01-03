(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{23:function(t,n,e){},26:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e(1),i=e.n(a),c=e(12),o=e.n(c),s=(e(23),e(13)),u=e(17),b=e(4),l=e(5),h=e(8),d=e(7),j=e(2),p=e(3);function x(){var t=Object(j.a)(["\n width: 600px;\n margin: 0 auto;\n padding: 15px;\n background: white;\n border-radius: 10px;\n box-shadow: 4px 2px 12px rgba(0, 0, 0, 0.8) \n"]);return x=function(){return t},t}var f=p.a.div(x());function g(){var t=Object(j.a)(["\n color: #212121;\n font-size: ","px;\n text-align: ",";\n padding: ","px 0;\n font-weight: bold;\n"]);return g=function(){return t},t}var m=p.a.h2.attrs((function(t){return{children:t.title||"Title"}}))(g(),(function(t){return t.fontSize||22}),(function(t){return t.textAlign||"center"}),(function(t){return t.padding||10})),O=function(t){var n=t.title,e=t.fontSize,a=t.padding,i=t.tagName,c=t.children;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m,{as:i,title:n,fontSize:e,padding:a}),c]})};function v(){var t=Object(j.a)(["\n margin-bottom: 10px;\n background: white;\n color: #717171;\n font-size: 12px;\n font-weight: bold;\n padding: 4px 10px;\n border: 1px solid #212121;\n border-radius: 4px;\n"]);return v=function(){return t},t}var w=p.a.button(v());function C(){var t=Object(j.a)(["\nmargin-top: 10px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);\n &:hover {\n     color: #212121;\n }\n &:focus {\n     outline: none;\n     border: 1px solid #212121;\n }\n &:active {\n     box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);\n }\n &:not(:last-child) {\n     margin-right: 8px;\n }\n"]);return C=function(){return t},t}function y(){var t=Object(j.a)(["\n&:first-child {\n  margin-right: 10px;\n}\n"]);return y=function(){return t},t}var S=p.a.label(y()),k=Object(p.a)(w)(C()),z=function(t){Object(h.a)(e,t);var n=Object(d.a)(e);function e(){return Object(b.a)(this,e),n.apply(this,arguments)}return Object(l.a)(e,[{key:"render",value:function(){return Object(r.jsxs)("form",{method:"submit",onSubmit:this.props.handleSubmit,children:[Object(r.jsxs)(S,{children:[Object(r.jsx)("strong",{children:"Name"}),Object(r.jsx)("br",{}),Object(r.jsx)(w,{as:"input",type:"text",required:!0,id:"name",value:this.props.name,onChange:this.props.handleChange})]}),Object(r.jsx)("br",{}),Object(r.jsxs)(S,{children:[Object(r.jsx)("strong",{children:"Number"}),Object(r.jsx)("br",{}),Object(r.jsx)(w,{as:"input",type:"tel",required:!0,id:"number",value:this.props.number,onChange:this.props.handleChange})]}),Object(r.jsx)("br",{}),Object(r.jsx)(k,{children:"Add contact"})]})}}]),e}(a.Component);function A(){var t=Object(j.a)(["\n  font-weight: bold;\n  font-size: 14px;\n"]);return A=function(){return t},t}function L(){var t=Object(j.a)(["\n  list-style-type: none;\n"]);return L=function(){return t},t}var N=p.a.ul(L()),F=p.a.li.attrs((function(t){return{children:[t.name,t.number].join(":  ")}}))(A()),q=function(t){var n=t.contactsList,e=t.filter;console.log(e);var a=n.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return a.length||(a=n),Object(r.jsx)(N,{children:a.map((function(t){return Object(r.jsx)(F,{name:t.name,number:t.number},t.id)}))})},J=e(28),M=function(t){Object(h.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(b.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=n.call.apply(n,[this].concat(a))).state={contacts:[],filter:"",name:"",number:""},t.handleSubmit=function(n){n.preventDefault(),t.setState({contacts:[].concat(Object(u.a)(t.state.contacts),[{name:n.target.elements[0].value,number:n.target.elements[1].value,id:Object(J.a)()}]),name:"",number:""})},t.handleChange=function(n){t.setState(Object(s.a)({},n.target.getAttribute("id"),n.target.value))},t}return Object(l.a)(e,[{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O,{title:"My Phonebook App",fontSize:30,padding:20,tagName:"h1"}),Object(r.jsxs)(f,{children:[Object(r.jsx)(O,{title:"Phonebook",children:Object(r.jsx)(z,{name:this.state.name,number:this.state.number,handleSubmit:this.handleSubmit,handleChange:this.handleChange})}),Object(r.jsxs)(O,{title:"Contacts",children:[Object(r.jsx)(m,{as:"h3",title:"Find contacts by name",fontSize:"16",textAlign:"left"}),Object(r.jsx)(w,{as:"input",type:"text",id:"filter",onChange:this.handleChange,value:this.state.filter}),Object(r.jsx)(q,{contactsList:this.state.contacts,filter:this.state.filter})]})]})]})}}]),e}(a.Component);o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(M,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.2264d01c.chunk.js.map