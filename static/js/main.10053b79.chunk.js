(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(7),s=n.n(c),i=(n(13),n(1)),r=n(2),l=n(3),d=n(4),m=n(5),u=(n(14),n(15),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).state={isChecked:"true"},o.name=e.name,o.handleChange=o.handleChange.bind(Object(l.a)(o)),o}return Object(r.a)(n,[{key:"handleChange",value:function(e){!0===this.isChecked?(console.log("now unchecked, now unstruckthrough"),document.getElementById("todoItemText").classList.remove("struckthrough2"),this.isChecked=!1):(console.log("now checked, now struckthrough"),document.getElementById("todoItemText").classList.add("struckthrough2"),this.isChecked=!0)}},{key:"render",value:function(){return a.a.createElement("li",{id:"todoListItem1",className:"struckthrough textstyling"},a.a.createElement("span",{id:"todoItemText"},this.name),a.a.createElement("input",{type:"checkbox",id:"CheckboxItem1",onChange:this.handleChange}),a.a.createElement("button",{id:"deleteItem1"},"Remove ToDo"))}}]),n}(o.Component)),h=(n(16),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-sm-4",id:"empty"}),a.a.createElement("div",{className:"col-sm-4",id:"notempty"},a.a.createElement("form",{onSubmit:this.props.addTodo},a.a.createElement("input",{type:"text",id:"newAdd"}),a.a.createElement("button",{type:"button",onClick:this.props.addTodo,id:"myBtn"},"Add ToDo"))))}}]),n}(o.Component)),p=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).addTodo=function(e){console.log("here"),document.getElementById("newAdd").value=""},e.getInitialTodos=function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){if(4===this.readyState&&200===this.status){console.log("GET response text:");var e=JSON.parse(this.responseText);if(console.log(e),e.length>0)for(var t=e.length-1;t>-1;t--){console.log(e[t].text);e[t].text}}else 4===this.readyState&&console.log(this.responseText)},t.open("GET","https://cse204.work/todos",!0),t.setRequestHeader("x-api-key","c1d50e-f554c3-89956a-90f947-7ca7ea"),t.send()},e.state={todoItems:[],newTodoItem:{text:""}},e.getInitialTodos=e.getInitialTodos.bind(Object(l.a)(e)),e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return a.a.createElement("div",{className:"body"},a.a.createElement("div",{className:"text-center"},a.a.createElement("h1",null,"Nick's Todo List")),a.a.createElement("div",{id:"listContainer"},a.a.createElement("div",{class:"row"},a.a.createElement("div",{class:"col-sm-4",id:"empty"}),a.a.createElement("div",{class:"col-sm-4",id:"full"},a.a.createElement("ol",{id:"todoList"},a.a.createElement(u,{name:"Todo Item 1"}),a.a.createElement(u,{name:"Todo Item 2"}),a.a.createElement(u,{name:"Todo Item 3"})))),a.a.createElement("div",{class:"row"},a.a.createElement("div",{class:"col-sm-4",id:"empty"}),a.a.createElement("div",{class:"col-sm-4",id:"notempty"},a.a.createElement(h,{addTodo:this.addTodo})))))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.10053b79.chunk.js.map