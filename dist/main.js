(()=>{class e{constructor(e){this.name=e}changeName(e){this.name=e}getName(){return this.name}}!function(){const t=document.querySelector(".buttons button:first-of-type"),n=[];t.addEventListener("click",(()=>{!function(){const e=document.createElement("div"),t=document.createElement("label"),n=document.createElement("input"),o=document.createElement("button");e.setAttribute("class","projectForm"),o.setAttribute("type","button"),o.textContent="Ok",n.setAttribute("id","NewProjectName"),t.textContent="Name => ",t.setAttribute("for","NewProjectName"),e.appendChild(t),e.appendChild(n),e.appendChild(o),document.querySelector("body").appendChild(e);const r=document.querySelectorAll("div:not(.projectForm)");for(all of r)all.style.filter="blur(1px)"}(),function(t){const n=document.querySelector(".projectForm button"),o=document.querySelector(".projectForm"),r=document.querySelector(".projectForm input");n.addEventListener("click",(()=>{if(""!=r.value||null!=r.value||null!=r.value){let l=new e(r.value);t.push(l),n.parentElement.parentElement.removeChild(o),function(e){const t=document.querySelector(".my-projects"),n=document.createElement("button");n.setAttribute("type","button"),n.textContent=e,t.appendChild(n)}(t[t.length-1].getName());const c=document.querySelectorAll("div:not(.projectForm)");for(all of c)all.style.filter="blur(0)"}}))}(n)}))}()})();