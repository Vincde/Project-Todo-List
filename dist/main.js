!function(){const t=[];let e;const o=document.querySelector(".dashboard input"),n=document.querySelector(".dashboard button:first-of-type"),c=document.querySelector(".delete");n.addEventListener("click",(()=>{if(o&&""!==o.value&&void 0!==o.value&&null!==o.value){let n=o.value;const c=function(t){return this.name=t,this.todo=[],this.getName=()=>this.name,this.push=t=>{this.todo.push(t)},this.getTodo=()=>this.todo,{getName,push,getTodo}}(n);t.push(c),function(t){const e=document.querySelector(".projects"),o=document.createElement("button");o.setAttribute("type","button"),o.textContent=t,e.appendChild(o)}(n);const r=document.querySelector(".projects button:last-of-type");r&&r.addEventListener("click",(o=>{e=o.currentTarget.textContent,function(){const t=document.querySelectorAll(".todo-board div");for(let e=0;e<t.length;e++)t[e].parentElement.removeChild(t[e])}(),function(t,e){const o=document.querySelector(".todo-board");for(let n=0;n<e.length;n++)if(t===e[n].getName()){let t=e[n].getTodo();for(let e=0;e<t.length;e++){const n=document.createElement("div");n.textContent=t[e].print(),o.appendChild(n)}}}(o.currentTarget.textContent,t)}))}})),c.addEventListener("click",(()=>{}))}();