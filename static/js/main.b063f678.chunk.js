(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,a,t){e.exports=t(345)},142:function(e,a,t){},143:function(e,a,t){},345:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(48),r=t.n(o),s=(t(142),t(125)),i=t(126),l=t(136),d=t(127),u=t(135),m=(t(143),t(13)),b=t(5),p=t(25),f=t(132),k=t(30),g=t.n(k),v=(t(80),function(e){var a,t=Object(n.useState)(e.item.text),o=Object(m.a)(t,2),r=o[0],s=o[1],i=Object(n.useState)(e.item.description),l=Object(m.a)(i,2),d=l[0],u=l[1],k=Object(n.useState)(!0),v=Object(m.a)(k,2),h=(v[0],v[1]),O=Object(n.useState)(!1),E=Object(m.a)(O,2),j=E[0],C=E[1],N=(a={height:"40px",width:"100%",fontSize:"18px",padding:"13px 15px"},Object(b.a)(a,"height","50px"),Object(b.a)(a,"fontWeight","500"),Object(b.a)(a,"background","white"),Object(b.a)(a,"margin","3px 0"),Object(b.a)(a,"border","1px solid #dfe1e6"),Object(b.a)(a,"borderRadius"," 5px"),Object(b.a)(a,"boxShadow","0 1px 0 rgba(9,30,66,.25)"),Object(b.a)(a,"overflow","hidden"),a),x=function(a){a.preventDefault();var t={id:e.item.id,text:r,description:d};C(!1),e.taskChange(t,e.item.id)};return c.a.createElement(p.b,{draggableId:e.listID,index:e.index},function(e){return c.a.createElement("div",Object.assign({className:"input-group ",ref:e.innerRef},e.draggableProps,e.dragHandleProps),c.a.createElement("div",{onClick:function(){return h(!0),void C(!0)},style:N},r),c.a.createElement(g.a,{visible:j,onClose:function(){return C(!1)},height:500,width:700},c.a.createElement("form",{onSubmit:x,id:"taskform"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Title"),c.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){return s(e.target.value)},value:r})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",null,"Description"),c.a.createElement(f.a,{className:"form-control",onChange:function(e){return u(e.target.value)},defaultValue:d,minRows:8,cols:0})),c.a.createElement("button",{className:"btn btn-info",type:"submit"},"Save"))),e.placeholder)})}),h=function(e){return c.a.createElement(p.c,{droppableId:e.item},function(a){return c.a.createElement("div",Object.assign({ref:a.innerRef},a.droppableProps),e.tasks.map(function(a,t){return c.a.createElement(v,{key:a.id,listID:a.id,index:t,item:a,taskChange:e.taskChange})}),a.placeholder)})},O=t(74),E=t(18),j=t(32),C=t.n(j),N=t(2),x=t(78),y={tasks:{"task-1":{id:"task-1",text:"Walk your Cat",description:"column-1"},"task-2":{id:"task-2",text:"Fix your porch",description:"column-2"},"task-3":{id:"task-3",text:"Gather firewood",description:"column-3"},"task-5":{id:"task-5",text:"Dance with white fairy",description:"column-1"},"task-4":{id:"task-4",text:"Feed your dragon",description:"column-2"},"task-6":{id:"task-6",text:"Light up the mountain",description:"column-3"},"task-7":{id:"task-7",text:"Build a pirate ship",description:"column-1"},"task-8":{id:"task-8",text:"Say no Darth Vadar",description:"column-2"}},columnData:["column-1","column-2","column-3"],columns:{"column-1":{id:"column-1",title:"Open",taskIds:["task-1","task-4","task-7"],background:["rgb(48, 191, 191)"]},"column-2":{id:"column-2",title:"In Progress",taskIds:["task-2","task-5","task-8"],background:["rgb(0, 170, 255)"]},"column-3":{id:"column-3",title:"Done",taskIds:["task-3","task-6"],background:["rgb(143, 126, 230)"]}},taskCount:8},w=Object(E.b)(function(e){return{data:e.datas.data}},{columnChange:function(e,a,t){return function(n){var c=Object(N.a)({},t,{columns:Object(N.a)({},t.columns,Object(b.a)({},e.id,{id:e.id,title:a,taskIds:e.taskIds,background:e.background}))});console.log(c),n({type:"COLUMN_CHANGE",payload:c})}},fetchData:function(){return function(e){e({type:"FETCH_TASKS",payload:y})}},addArea:function(e){return function(a){var t=e.columnData.length+1;t="column-"+t;var n=[].concat(Object(x.a)(e.columnData),[t]),c=Object(N.a)({},e.columns,Object(b.a)({},t,{id:t,title:"Add a title",taskIds:[],background:"rgb(48, 191, 191)"}));a({type:"NEW_COLUMN",payload:Object(N.a)({},e,{columns:c,columnData:n})})}},addTask:function(e,a){return function(t){var n=a.taskCount+1,c="task-"+n,o=Object(N.a)({},a.tasks,Object(b.a)({},c,{id:c,text:"Please Enter A Topic",column:e})),r=[].concat(Object(x.a)(a.columns[e].taskIds),[c]),s=Object(N.a)({},a.columns,Object(b.a)({},e,Object(N.a)({},a.columns[e],{taskIds:r})));t({type:"NEW_TASK",payload:Object(N.a)({},a,{columns:s,taskCount:n,tasks:o})})}},dragEnd:function(e,a){return function(t){var n=e.destination,c=e.source,o=e.draggableId;if(n&&(n.droppableId!==c.droppableId||n.index!==c.index)){var r=a.columns[c.droppableId],s=a.columns[n.droppableId];if(r!==s){var i,l=Array.from(r.taskIds);l.splice(c.index,1);var d=Object(N.a)({},r,{taskIds:l}),u=Array.from(s.taskIds);u.splice(n.index,0,o);var m=Object(N.a)({},s,{taskIds:u});t({type:"DRAG_END",payload:Object(N.a)({},a,{columns:Object(N.a)({},a.columns,(i={},Object(b.a)(i,d.id,d),Object(b.a)(i,m.id,m),i))})})}else{var p=Array.from(r.taskIds);p.splice(c.index,1),p.splice(n.index,0,o);var f=Object(N.a)({},r,{taskIds:p});Object(N.a)({},a,{columns:Object(N.a)({},a.columns,Object(b.a)({},f.id,f))})}}}},colorChange:function(e,a,t){return function(n){var c=Object(N.a)({},t.columns,Object(b.a)({},a,Object(N.a)({},t.columns[a],{background:e.hex})));n({type:"COLOR_CHANGE",payload:Object(N.a)({},t,{columns:c})})}},taskChange:function(e,a,t){return function(n){var c=Object(N.a)({},t.tasks,Object(b.a)({},a,e));n({type:"TASK_CHANGE",payload:Object(N.a)({},t,{tasks:c})})}}})(function(e){var a=Object(n.useState)([]),t=Object(m.a)(a,2),o=t[0],r=t[1],s=Object(n.useState)(!1),i=Object(m.a)(s,2),l=(i[0],i[1],Object(n.useState)(!1)),d=Object(m.a)(l,2),u=(d[0],d[1]);Object(n.useEffect)(function(){e.fetchData()},[]),Object(n.useEffect)(function(){r(e.data)},[e.data]);var b={container:{fontSize:"12px",padding:0,margin:"5px"},btn:{textAlign:"center",border:"none",background:"none",fonSize:"16px"}},f=function(a,t){e.colorChange(a,t,e.data)},k=function(a,t){e.taskChange(a,t,e.data),C.a.fire({position:"top-end",type:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})},g=e.data.columnData.map(function(a){var t=e.data.columns[a],n="";return""!==t.taskIds&&(n=t.taskIds.map(function(a){return e.data.tasks[a]})),c.a.createElement("div",{className:"",key:a,style:b.container},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header",style:{background:e.data.columns[a].background}},c.a.createElement("h4",{className:"m-4",onClick:function(){return function(a){u(!0),C.a.fire({title:"Please Enter a Column Name",input:"text",inputAttributes:{autocapitalize:"on"},showCancelButton:!0,confirmButtonText:"Save",showLoaderOnConfirm:!0,preConfirm:function(t){console.log(t),e.columnChange(a,t,e.data)},allowOutsideClick:function(){return!C.a.isLoading()}}).then(function(e){C.a.fire({position:"top-end",type:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})})}(t)}},e.data.columns[a].title)),c.a.createElement("div",{className:"card-body"},c.a.createElement(h,{item:a,tasks:n,colorchange:f,taskChange:k})),c.a.createElement("div",{className:"card-footer"},c.a.createElement("button",{onClick:function(){return t=a,void e.addTask(t,o);var t},style:b.btn}," ",c.a.createElement("i",{className:"fas fa-plus"})," \xa0  Add another card"))))});return c.a.createElement(p.a,{onDragEnd:function(a){e.dragEnd(a,e.data)}},c.a.createElement("div",{className:"row m-2 flex-row flex-sm-nowrap pt-2",id:"content"},g,c.a.createElement("div",{className:"col-sm-4 col-md-3 d-flex justify-content-center"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("button",{className:"btn btn-info",onClick:function(){e.addArea(e.data)}},c.a.createElement("i",{className:"fas fa-plus"})," \xa0  Add another List"))))))}),A=t(133),I=t.n(A),S=function(e){var a=Object(n.useState)(!1),t=Object(m.a)(a,2),o=t[0],r=t[1],s=function(){r(!o)};return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},c.a.createElement("div",{className:"container"},c.a.createElement(I.a,{href:"https://github.com/aslamwebz?tab=repositories",direction:"left",size:"90"}),c.a.createElement("a",{className:"navbar-brand",href:"/TaskExpert"},"Tasker"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item active"},c.a.createElement("button",{className:"nav-link",onClick:s},"Change Color"))))),c.a.createElement(g.a,{visible:o,onClose:function(){return s()}},c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement(O.TwitterPicker,{onChangeComplete:e.colorchange}))))},D=t(6),T=t(134),_={data:{tasks:{},columnData:[],columns:{},taskCount:8},task:{}},L=Object(D.c)({datas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FETCH_TASKS":case"NEW_COLUMN":case"NEW_TASK":case"DRAG_END":case"COLOR_CHANGE":case"TASK_CHANGE":case"COLUMN_CHANGE":return Object(N.a)({},e,{data:a.payload});default:return e}}}),G=[T.a],H=Object(D.e)(L,{},Object(D.d)(D.a.apply(void 0,G))),R=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(c)))).state={color:""},t.colorchange=function(e){t.setState({color:e.hex}),console.log(t.state.color)},t.dragEnd=function(){console.log("hi")},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement(E.a,{store:H},c.a.createElement("div",{className:"App",style:{background:this.state.color,height:"100vh !important"}},c.a.createElement(S,{colorchange:this.colorchange}),c.a.createElement(w,null)))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[137,1,2]]]);
//# sourceMappingURL=main.b063f678.chunk.js.map