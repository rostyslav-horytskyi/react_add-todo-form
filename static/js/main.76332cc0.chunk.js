(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(4),i=a.n(s),o=a(2),c=a(1),l=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),u=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],d=a(5),m=a(6),h=a(8),p=a(7),b=(a(15),function(e){var t=e.title,a=e.status,n=e.id;return r.a.createElement(r.a.Fragment,null,t,r.a.createElement("input",{id:n,type:"checkbox",onChange:a}))}),g=(a(16),function(e){var t=e.todos,a=e.selectValue,n=e.status;return r.a.createElement("div",{className:"TodoList",hidden:"Choose a user"===a},"Choose a user"!==a&&r.a.createElement("h1",null,a),r.a.createElement("ul",null,t.map((function(e){return e.user.name===a&&r.a.createElement("li",{key:e.id,className:e.completed?"done":"active"},r.a.createElement(b,Object.assign({},e,{status:n})))}))))}),y=(a(17),function(e){var t=e.errors;return r.a.createElement("div",{className:"ErrorMessage"},"not specified user"===t&&r.a.createElement("div",{className:"error"},"Please choose a user"),"not specified todo"===t&&r.a.createElement("div",{className:"error"},"Please enter the title"),"to short todo"===t&&r.a.createElement("div",{className:"error"},"Todo must be at least 10 characters long"))}),f=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todos:e.props.todos,userId:0,selectValue:"Choose a user",inputValue:"",errors:""},e.select=function(t){var a=t.target.value,n=e.props.users;e.setState({userId:a.includes("Choose a user")?0:n.find((function(e){return e.name===a})).id,selectValue:a,errors:""})},e.changeValue=function(t){var a=t.target.value;e.setState({inputValue:a,errors:""})},e.addTodo=function(t){t.preventDefault(),e.setState((function(t){var a={userId:t.userId,id:t.todos.length+1,title:t.inputValue,completed:!1,hidden:!1,user:e.props.users.find((function(e){return e.id===t.userId}))};return e.validateForm()?{errors:e.validateForm()}:{todos:Object(c.a)(t.todos).concat(a),inputValue:""}}))},e.status=function(t){var a=t.target,n=a.checked,r=a.id;e.setState((function(e){return{todos:Object(c.a)(e.todos).map((function(e){var t=e;return e.id===+r&&(t.completed=n),Object(o.a)({},t)}))}}))},e}return Object(m.a)(a,[{key:"validateForm",value:function(){var e,t=this.state,a=t.selectValue,n=t.inputValue;return"Choose a user"===a?e="not specified user":n.length?n.length<10&&(e="to short todo"):e="not specified todo",e}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"TodoForm"},r.a.createElement("label",{htmlFor:"select"},r.a.createElement("select",{id:"select",value:this.state.selectValue,onChange:this.select},r.a.createElement("option",null,"Choose a user"),Object(c.a)(this.props.users).map((function(e){return r.a.createElement("option",{key:e.id},e.name)})))),r.a.createElement("label",{htmlFor:"input"},r.a.createElement("input",{id:"input",type:"text",placeholder:"Add new Todo",value:this.state.inputValue,onChange:this.changeValue})),r.a.createElement("label",{htmlFor:"button"},r.a.createElement("button",{id:"button",type:"submit",onClick:this.addTodo},"Add"))),r.a.createElement(y,this.state),r.a.createElement(g,Object.assign({},this.state,{status:this.status})))}}]),a}(r.a.Component),v=Object(c.a)(u).map((function(e){return Object(o.a)(Object(o.a)({},e),{},{user:l.find((function(t){return t.id===e.userId})),hidden:!0})}));var E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Add todo form"),r.a.createElement("div",{className:"navigation"},r.a.createElement(f,{users:l,todos:Object(c.a)(v)}))))};i.a.render(r.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.76332cc0.chunk.js.map