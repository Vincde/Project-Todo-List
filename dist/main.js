(()=>{"use strict";const e=function(){const e=[];return{pushProjectIntoArray:t=>{e.push(t)},getName:t=>e[t].getName(),getLength:()=>e.length}}(),t=e;class n{constructor(e){this.name=e}changeName(e){this.name=e}getName(){return this.name}}const o=function(e){let o=function(e){return new n(e)}(e);t.pushProjectIntoArray(o)},r=function(){const e=[];return{addElement:t=>{e.push(t)},getName:t=>e[t].getName(),getDescription:t=>e[t].getDescription(),getDueDate:t=>e[t].getDate(),getPriority:t=>e[t].getPriority(),getProjectName:t=>e[t].getProjectName(),getLength:()=>e.length}}();function c(){const e=document.createElement("div"),t=document.createElement("button"),n=document.querySelector(".todo-board");t.setAttribute("type","button"),t.textContent="delete this task",e.appendChild(t),n.appendChild(e)}function u(e){document.querySelector(".todo-board div:last-of-type");const t=document.createElement("div"),n=document.createElement("p"),o=document.createElement("p"),c=document.createElement("p"),u=document.createElement("p");n.textContent=r.getName(e),o.textContent=r.getDescription(e),c.textContent=r.getDueDate(e),u.textContent=r.getPriority(e),t.appendChild(n),t.appendChild(o),t.appendChild(c),t.appendChild(u)}document.querySelector(".buttons button:first-of-type").addEventListener("click",(()=>{!function(){const e=document.createElement("div"),t=document.createElement("label"),n=document.createElement("input"),o=document.createElement("button");e.setAttribute("class","projectForm"),o.setAttribute("type","button"),o.textContent="Ok",n.setAttribute("id","NewProjectName"),t.textContent="Name => ",t.setAttribute("for","NewProjectName"),e.appendChild(t),e.appendChild(n),e.appendChild(o),document.querySelector("body").appendChild(e)}(),function(){const e=document.querySelectorAll("div:not(.projectForm)");for(let t of e)t.style.filter="blur(1px)"}(),function(){const e=document.querySelector(".projectForm button"),n=(document.querySelector(".projectForm"),document.querySelector(".projectForm input"));e.addEventListener("click",(()=>{""==n.value&&null==n.value&&null==n.value||(o(n.value),function(e){const t=document.querySelector(".my-projects"),n=document.createElement("button");n.setAttribute("type","button"),n.textContent=e,t.appendChild(n)}(n.value),function(){const e=document.querySelector(".projectForm button"),t=document.querySelector(".projectForm");e.parentElement.parentElement.removeChild(t)}(),function(){const e=document.querySelectorAll("div:not(.projectForm)");for(let t of e)t.style.filter="blur(0)"}(),function(){const e=document.querySelector(".my-projects button:last-of-type"),n=document.querySelector(".todo-board");e.addEventListener("click",(()=>{!function(){const e=document.querySelectorAll(".todo-board *");for(let t of e)t.remove()}();const e=document.createElement("button");e.setAttribute("type","button"),e.textContent="delete this project",n.appendChild(e),function(){for(let e=0;e<r.getLength();e++)for(let n=0;n<t.getLength();n++)r[e].getProjectName()===t[n].getName()&&(c(),u(e))}()}))}())}))}()})),document.querySelector(".buttons button:nth-child(2)").addEventListener("click",(()=>{!function(){const e=document.createElement("div"),n=document.createElement("label"),o=document.createElement("input"),r=document.createElement("label"),c=document.createElement("input"),u=document.createElement("label"),l=document.createElement("input"),d=document.createElement("label"),i=document.createElement("input"),a=document.createElement("label"),m=document.createElement("select");a.setAttribute("for","labelSelect"),a.textContent="which project",m.setAttribute("id","labelSelect"),m.setAttribute("name","selectOption");for(let e=0;e<t.getLength();e++){const n=document.createElement("option");n.textContent=`${t.getName(e)}`,m.appendChild(n)}const p=document.createElement("button");e.setAttribute("class","taskForm"),p.setAttribute("type","button"),p.textContent="Ok",o.setAttribute("id","NewTaskName"),n.textContent="\nName => ",n.setAttribute("for","NewTaskName"),c.setAttribute("id","NewTaskDescription"),r.textContent="Description => ",r.setAttribute("for","NewTaskDescription"),l.setAttribute("id","NewTaskDate"),u.textContent="DueDate => ",u.setAttribute("for","NewTaskDate"),i.setAttribute("id","NewTaskPrio"),d.textContent="Priority => ",d.setAttribute("for","NewTaskPrio"),e.appendChild(n),e.appendChild(o),e.appendChild(r),e.appendChild(c),e.appendChild(u),e.appendChild(l),e.appendChild(d),e.appendChild(i),e.appendChild(a),e.appendChild(m),e.appendChild(p),document.querySelector("body").appendChild(e)}(),function(){const e=document.querySelectorAll("div:not(.taskForm)");for(let t of e)t.style.filter="blur(1px)"}()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGtCQUNsQzJDLEVBQW9CNUMsYUFBYSxNQUFNLHNCQUV2QytDLEVBQWEvQyxhQUFhLEtBQUssZUFDL0I4QyxFQUFhN0MsWUFBYyxjQUMzQjZDLEVBQWE5QyxhQUFhLE1BQU0sZUFFaENpRCxFQUFpQmpELGFBQWEsS0FBSyxlQUNuQ2dELEVBQWlCL0MsWUFBYyxlQUMvQitDLEVBQWlCaEQsYUFBYSxNQUFNLGVBRXBDTixFQUFhUSxZQUFZd0MsR0FDekJoRCxFQUFhUSxZQUFZeUMsR0FDekJqRCxFQUFhUSxZQUFZMEMsR0FDekJsRCxFQUFhUSxZQUFZMkMsR0FDekJuRCxFQUFhUSxZQUFZNEMsR0FDekJwRCxFQUFhUSxZQUFZNkMsR0FDekJyRCxFQUFhUSxZQUFZOEMsR0FDekJ0RCxFQUFhUSxZQUFZK0MsR0FDekJ2RCxFQUFhUSxZQUFZZ0QsR0FDekJ4RCxFQUFhUSxZQUFZaUQsR0FHekJ6RCxFQUFhUSxZQUFZUyxHQUVKaEIsU0FBU0ksY0FBYyxRQUMvQkcsWUFBWVIsRUFFN0IsQ0FoRlEyRCxHQWtGUixXQUNJLE1BQU14QyxFQUEyQmxCLFNBQVNtQixpQkFBaUIsc0JBRTNELElBQUksSUFBSUMsS0FBT0YsRUFDZkUsRUFBSUMsTUFBTUMsT0FBUyxXQUV2QixDQXZGUXFDLEVBQWlCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RlbXBsYXRlRmlsZXMvYXJyYXlPZlByb2plY3RzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGVtcGxhdGVGaWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdE1hbmFnZS9uZXdQcm9qZWN0Q2FsbC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RlbXBsYXRlRmlsZXMvYXJyYXlPZlRhc2tzLmpzIiwid2VicGFjazovL3Byb2plY3QtdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZG9tL2RvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhcnJheU9mUHJvamVjdHMoKXtcbiAgICBjb25zdCBhcnJheU9mUHJvamVjdHMgPSBbXTtcblxuXG4gICAgY29uc3QgcHVzaFByb2plY3RJbnRvQXJyYXkgPSAocHJvamVjdCkgPT57XG4gICAgICAgIGFycmF5T2ZQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5hbWUgPSAoY291bnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGFycmF5T2ZQcm9qZWN0c1tjb3VudF0uZ2V0TmFtZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGFycmF5T2ZQcm9qZWN0cy5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtwdXNoUHJvamVjdEludG9BcnJheSxnZXROYW1lLGdldExlbmd0aH07XG59XG5cbmNvbnN0IHByb2plY3RBcnJheSA9IGFycmF5T2ZQcm9qZWN0cygpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0QXJyYXk7IiwiY2xhc3MgUHJvamVjdHtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIGNoYW5nZU5hbWUobmV3TmFtZSl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdChuYW1lKXtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG5cbi8vQWRkIHRoaXMgZnVuY3Rpb25hbGl0eSBoZXJlIHRvIG5vdCBoYXZlIGFub3RoZXIgZmlsZSB0byBtYW5hZ2VcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmV3UHJvamVjdDsiLCJpbXBvcnQgcHJvamVjdEFycmF5IGZyb20gXCIuLi90ZW1wbGF0ZUZpbGVzL2FycmF5T2ZQcm9qZWN0cy5qc1wiO1xuaW1wb3J0IGNyZWF0ZU5ld1Byb2plY3QgZnJvbSBcIi4uL3RlbXBsYXRlRmlsZXMvcHJvamVjdC5qc1wiO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRoZVByb2plY3RBbmRBZGRJdFRvVGhlQXJyYXkobmFtZSl7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBjcmVhdGVOZXdQcm9qZWN0KG5hbWUpO1xuICAgIHByb2plY3RBcnJheS5wdXNoUHJvamVjdEludG9BcnJheShuZXdQcm9qZWN0KTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUaGVQcm9qZWN0QW5kQWRkSXRUb1RoZUFycmF5O1xuXG5cblxuXG4iLCJmdW5jdGlvbiBhcnJheU9mVGFza3MoKXtcbiAgICBjb25zdCBhcnJheU9mVGFza3MgPSBbXTtcblxuICAgIGNvbnN0IGFkZEVsZW1lbnQgPSAodGFzaykgPT57XG4gICAgICAgIGFycmF5T2ZUYXNrcy5wdXNoKHRhc2spO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE5hbWUgPSAoY291bnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGFycmF5T2ZUYXNrc1tjb3VudF0uZ2V0TmFtZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKGNvdW50KSA9PiB7XG4gICAgICAgIHJldHVybiBhcnJheU9mVGFza3NbY291bnRdLmdldERlc2NyaXB0aW9uKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9IChjb3VudCkgPT4ge1xuICAgICAgICByZXR1cm4gYXJyYXlPZlRhc2tzW2NvdW50XS5nZXREYXRlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoY291bnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGFycmF5T2ZUYXNrc1tjb3VudF0uZ2V0UHJpb3JpdHkoKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0TmFtZSA9IChjb3VudCkgPT4ge1xuICAgICAgICByZXR1cm4gYXJyYXlPZlRhc2tzW2NvdW50XS5nZXRQcm9qZWN0TmFtZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGFycmF5T2ZUYXNrcy5sZW5ndGg7XG4gICAgfVxuXG5cblxuICAgIHJldHVybiB7YWRkRWxlbWVudCxnZXROYW1lLGdldERlc2NyaXB0aW9uLGdldER1ZURhdGUsZ2V0UHJpb3JpdHksZ2V0UHJvamVjdE5hbWUsZ2V0TGVuZ3RofTtcbn1cblxuY29uc3QgcHJvamVjdFRhc2sgPSBhcnJheU9mVGFza3MoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdFRhc2s7IiwiaW1wb3J0IGNyZWF0ZVRoZVByb2plY3RBbmRBZGRJdFRvVGhlQXJyYXkgZnJvbSBcIi4uL3Byb2plY3RNYW5hZ2UvbmV3UHJvamVjdENhbGwuanNcIjtcbmltcG9ydCBwcm9qZWN0VGFzayBmcm9tIFwiLi4vdGVtcGxhdGVGaWxlcy9hcnJheU9mVGFza3MuanNcIjtcbmltcG9ydCBwcm9qZWN0QXJyYXkgZnJvbSBcIi4uL3RlbXBsYXRlRmlsZXMvYXJyYXlPZlByb2plY3RzLmpzXCI7XG5cblxuZnVuY3Rpb24gc3RhcnROZXdQcm9qZWN0QnV0dG9uKCl7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25zIGJ1dHRvbjpmaXJzdC1vZi10eXBlJyk7XG5cbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgZHJhd0Zvcm0oKTtcbiAgICAgICAgYmx1clRoZUZvcm0oKTtcbiAgICAgICAgZHJhd0Zvcm1Mb2dpYygpO1xuICAgIH0pO1xuXG59XG5cbmZ1bmN0aW9uIGRyYXdGb3JtKCl7XG4gICAgY29uc3QgbmV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmV3TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IG5ld0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBva0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIFxuICAgIG5ld0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncHJvamVjdEZvcm0nKTtcblxuICAgIG9rQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xuICAgIG9rQnV0dG9uLnRleHRDb250ZW50ID0gJ09rJztcblxuICAgIG5ld0lucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdOZXdQcm9qZWN0TmFtZScpO1xuICAgIG5ld0xhYmVsLnRleHRDb250ZW50ID0gJ05hbWUgPT4gJztcbiAgICBuZXdMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ05ld1Byb2plY3ROYW1lJyk7XG5cbiAgICBuZXdDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3TGFiZWwpO1xuICAgIG5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdJbnB1dCk7XG4gICAgbmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKG9rQnV0dG9uKTtcblxuICAgIGNvbnN0IGJvZHlTZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBib2R5U2VsZWN0b3IuYXBwZW5kQ2hpbGQobmV3Q29udGFpbmVyKTtcblxufVxuXG5cbmZ1bmN0aW9uIGJsdXJUaGVGb3JtKCl7XG4gICAgY29uc3QgYWxsRXhjZXB0T3VyRm9ybVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2Om5vdCgucHJvamVjdEZvcm0pJyk7XG4gICAgXG4gICAgZm9yKGxldCBhbGwgb2YgYWxsRXhjZXB0T3VyRm9ybVNlbGVjdG9yKXtcbiAgICBhbGwuc3R5bGUuZmlsdGVyID0gJ2JsdXIoMXB4KSc7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIGRyYXdGb3JtTG9naWMoKXtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Rm9ybSBidXR0b24nKTtcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Rm9ybScpO1xuICAgIGNvbnN0IGlucHV0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Rm9ybSBpbnB1dCcpO1xuXG4gICAgcHJvamVjdEZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGlucHV0Rm9ybS52YWx1ZSAhPSAnJyB8fFxuICAgICAgICAgICBpbnB1dEZvcm0udmFsdWUgIT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgIGlucHV0Rm9ybS52YWx1ZSAhPSBudWxsKXtcblxuICAgICAgICAgICAgY3JlYXRlVGhlUHJvamVjdEFuZEFkZEl0VG9UaGVBcnJheShpbnB1dEZvcm0udmFsdWUpO1xuICAgICAgICAgICAgY3JlYXRlQnV0dG9uRm9yTmV3UHJvamVjdChpbnB1dEZvcm0udmFsdWUpO1xuICAgICAgICAgICAgcmVtb3ZlVGhlRm9ybSgpO1xuICAgICAgICAgICAgdW5ibHVyVGhlRm9ybSgpO1xuICAgICAgICAgICAgZGlzcGxheUxvZ2ljQnV0dG9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCdXR0b25Gb3JOZXdQcm9qZWN0KG5hbWVPZk5ld0J1dHRvbil7XG4gICAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktcHJvamVjdHMnKTtcbiAgICBjb25zdCBuZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIG5ld0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcblxuICAgIG5ld0J1dHRvbi50ZXh0Q29udGVudCA9IG5hbWVPZk5ld0J1dHRvbjtcblxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0J1dHRvbik7XG59XG5cblxuZnVuY3Rpb24gcmVtb3ZlVGhlRm9ybSgpe1xuICAgIGNvbnN0IHByb2plY3RGb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RGb3JtIGJ1dHRvbicpO1xuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RGb3JtJyk7XG4gICAgcHJvamVjdEZvcm1CdXR0b24ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHByb2plY3RGb3JtKTtcbn1cblxuXG5cbmZ1bmN0aW9uIHVuYmx1clRoZUZvcm0oKXtcbiAgICBjb25zdCBhbGxFeGNlcHRPdXJGb3JtU2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXY6bm90KC5wcm9qZWN0Rm9ybSknKTtcbiAgICBcbiAgICAgICAgZm9yKGxldCBhbGwgb2YgYWxsRXhjZXB0T3VyRm9ybVNlbGVjdG9yKXtcbiAgICAgICAgICAgIGFsbC5zdHlsZS5maWx0ZXIgPSAnYmx1cigwKSc7XG4gICAgICAgICAgICB9XG59XG5cblxuZnVuY3Rpb24gZGlzcGxheUxvZ2ljQnV0dG9uKCl7XG4gICAgY29uc3Qgc2VsZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LXByb2plY3RzIGJ1dHRvbjpsYXN0LW9mLXR5cGUnKTtcbiAgICBjb25zdCBzZWxlY3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tYm9hcmQnKTtcbiAgICBcblxuICAgIHNlbGVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICBjbGVhckFsbCgpO1xuXG5cbiAgICAgICAgY29uc3QgZGVsUHJvamVjdEJ0dG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZGVsUHJvamVjdEJ0dG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgICAgIGRlbFByb2plY3RCdHRuLnRleHRDb250ZW50ID0gJ2RlbGV0ZSB0aGlzIHByb2plY3QnO1xuXG4gICAgICAgIHNlbGVjdERpc3BsYXkuYXBwZW5kQ2hpbGQoZGVsUHJvamVjdEJ0dG4pO1xuXG4gICAgICAgIGRpc3BsYXlBdFNjcmVlbigpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5QXRTY3JlZW4oKXtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0VGFzay5nZXRMZW5ndGgoKTsgaSsrKXtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHByb2plY3RBcnJheS5nZXRMZW5ndGgoKTsgaisrKXtcbiAgICAgICAgICAgIGlmKHByb2plY3RUYXNrW2ldLmdldFByb2plY3ROYW1lKCkgPT09IHByb2plY3RBcnJheVtqXS5nZXROYW1lKCkpe1xuICAgICAgICAgICAgICAgIGNyZWF0ZU5ld0RpdnNXaXRoRGVsQnV0dG9uKCk7XG4gICAgICAgICAgICAgICAgcG9wdWxhdGVDb250YWluZXIoaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVOZXdEaXZzV2l0aERlbEJ1dHRvbigpe1xuICAgIGNvbnN0IG5ld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRlbEJ0dG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBzZWxlY3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tYm9hcmQnKTtcbiAgICBcbiAgICBkZWxCdHRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBkZWxCdHRuLnRleHRDb250ZW50ID0gJ2RlbGV0ZSB0aGlzIHRhc2snO1xuXG4gICAgbmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbEJ0dG4pO1xuICAgIHNlbGVjdERpc3BsYXkuYXBwZW5kQ2hpbGQobmV3Q29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVDb250YWluZXIoaSl7XG4gICAgY29uc3Qgc2VsZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tYm9hcmQgZGl2Omxhc3Qtb2YtdHlwZScpO1xuXG4gICAgY29uc3QgbmV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgbmFtZS50ZXh0Q29udGVudCA9IHByb2plY3RUYXNrLmdldE5hbWUoaSk7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0VGFzay5nZXREZXNjcmlwdGlvbihpKTtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gcHJvamVjdFRhc2suZ2V0RHVlRGF0ZShpKTtcbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHByb2plY3RUYXNrLmdldFByaW9yaXR5KGkpOyBcblxuICAgIG5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICBuZXdDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIG5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICBuZXdDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG59XG5cbi8vIEFERCBORVcgRVZFTlQgVEFTS1xuXG5mdW5jdGlvbiBhZGROZXdFdmVudEJ1dHRvbigpe1xuICAgIGNvbnN0IG5ld0V2ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbnMgYnV0dG9uOm50aC1jaGlsZCgyKScpO1xuICAgIFxuICAgIG5ld0V2ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkcmF3Rm9ybVRhc2soKTtcbiAgICAgICAgYmx1clRoZUZvcm1UYXNrKCk7XG4gICAgICAgIC8vZHJhd0Zvcm1Mb2dpYyEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhXG4gICAgfSk7XG5cbn1cblxuZnVuY3Rpb24gZHJhd0Zvcm1UYXNrKCl7XG4gICAgY29uc3QgbmV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBuZXdMYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IG5ld0lucHV0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICBjb25zdCBuZXdMYWJlbERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBuZXdJbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgIGNvbnN0IG5ld0xhYmVsRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgbmV3SW5wdXREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblxuICAgIGNvbnN0IG5ld0xhYmVsUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IG5ld0lucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2xhYmVsU2VsZWN0Jyk7XG4gICAgZm9ybS50ZXh0Q29udGVudCA9ICd3aGljaCBwcm9qZWN0JztcbiAgICBzZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsJ2xhYmVsU2VsZWN0Jyk7XG4gICAgc2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3NlbGVjdE9wdGlvbicpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5nZXRMZW5ndGgoKTsgaSsrKXtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGAke3Byb2plY3RBcnJheS5nZXROYW1lKGkpfWA7XG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH1cblxuXG4gICAgY29uc3Qgb2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuXG4gICAgXG4gICAgbmV3Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0YXNrRm9ybScpO1xuXG4gICAgb2tCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XG4gICAgb2tCdXR0b24udGV4dENvbnRlbnQgPSAnT2snO1xuXG5cblxuICAgIG5ld0lucHV0TmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywnTmV3VGFza05hbWUnKTtcbiAgICBuZXdMYWJlbE5hbWUudGV4dENvbnRlbnQgPSdcXG4nICsgJ05hbWUgPT4gJztcbiAgICBuZXdMYWJlbE5hbWUuc2V0QXR0cmlidXRlKCdmb3InLCdOZXdUYXNrTmFtZScpO1xuXG4gICAgbmV3SW5wdXREZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnTmV3VGFza0Rlc2NyaXB0aW9uJyk7XG4gICAgbmV3TGFiZWxEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbiA9PiAnO1xuICAgIG5ld0xhYmVsRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdmb3InLCdOZXdUYXNrRGVzY3JpcHRpb24nKTtcblxuICAgIG5ld0lucHV0RGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywnTmV3VGFza0RhdGUnKTtcbiAgICBuZXdMYWJlbERhdGUudGV4dENvbnRlbnQgPSAnRHVlRGF0ZSA9PiAnO1xuICAgIG5ld0xhYmVsRGF0ZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ05ld1Rhc2tEYXRlJyk7XG5cbiAgICBuZXdJbnB1dFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCdOZXdUYXNrUHJpbycpO1xuICAgIG5ld0xhYmVsUHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgPT4gJztcbiAgICBuZXdMYWJlbFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnZm9yJywnTmV3VGFza1ByaW8nKTtcblxuICAgIG5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdMYWJlbE5hbWUpO1xuICAgIG5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdJbnB1dE5hbWUpO1xuICAgIG5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdMYWJlbERlc2NyaXB0aW9uKTtcbiAgICBuZXdDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3SW5wdXREZXNjcmlwdGlvbik7XG4gICAgbmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0xhYmVsRGF0ZSk7XG4gICAgbmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0lucHV0RGF0ZSk7XG4gICAgbmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0xhYmVsUHJpb3JpdHkpO1xuICAgIG5ld0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdJbnB1dFByaW9yaXR5KTtcbiAgICBuZXdDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgbmV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdCk7XG5cbiAgICBcbiAgICBuZXdDb250YWluZXIuYXBwZW5kQ2hpbGQob2tCdXR0b24pO1xuXG4gICAgY29uc3QgYm9keVNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGJvZHlTZWxlY3Rvci5hcHBlbmRDaGlsZChuZXdDb250YWluZXIpO1xuXG59XG5cbmZ1bmN0aW9uIGJsdXJUaGVGb3JtVGFzaygpe1xuICAgIGNvbnN0IGFsbEV4Y2VwdE91ckZvcm1TZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdjpub3QoLnRhc2tGb3JtKScpO1xuICAgIFxuICAgIGZvcihsZXQgYWxsIG9mIGFsbEV4Y2VwdE91ckZvcm1TZWxlY3Rvcil7XG4gICAgYWxsLnN0eWxlLmZpbHRlciA9ICdibHVyKDFweCknO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBjbGVhckFsbCgpe1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tYm9hcmQgKicpO1xuXG4gICAgZm9yKGxldCBlbGVtIG9mIGJvYXJkKXtcbiAgICAgICAgZWxlbS5yZW1vdmUoKTtcbiAgICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5leHBvcnQge3N0YXJ0TmV3UHJvamVjdEJ1dHRvbixcbiAgICAgICAgY2xlYXJBbGwsXG4gICAgICAgIGFkZE5ld0V2ZW50QnV0dG9ufTsiXSwibmFtZXMiOlsicHJvamVjdEFycmF5IiwiYXJyYXlPZlByb2plY3RzIiwicHVzaFByb2plY3RJbnRvQXJyYXkiLCJwcm9qZWN0IiwicHVzaCIsImdldE5hbWUiLCJjb3VudCIsImdldExlbmd0aCIsImxlbmd0aCIsIlByb2plY3QiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ0aGlzIiwiY2hhbmdlTmFtZSIsIm5ld05hbWUiLCJuZXdQcm9qZWN0IiwiYXJyYXlPZlRhc2tzIiwiYWRkRWxlbWVudCIsInRhc2siLCJnZXREZXNjcmlwdGlvbiIsImdldER1ZURhdGUiLCJnZXREYXRlIiwiZ2V0UHJpb3JpdHkiLCJnZXRQcm9qZWN0TmFtZSIsImNyZWF0ZU5ld0RpdnNXaXRoRGVsQnV0dG9uIiwibmV3Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZGVsQnR0biIsInNlbGVjdERpc3BsYXkiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInBvcHVsYXRlQ29udGFpbmVyIiwiaSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5ld0xhYmVsIiwibmV3SW5wdXQiLCJva0J1dHRvbiIsImRyYXdGb3JtIiwiYWxsRXhjZXB0T3VyRm9ybVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImFsbCIsInN0eWxlIiwiZmlsdGVyIiwiYmx1clRoZUZvcm0iLCJwcm9qZWN0Rm9ybUJ1dHRvbiIsImlucHV0Rm9ybSIsInZhbHVlIiwidW5kZWZpbmVkIiwibmFtZU9mTmV3QnV0dG9uIiwicHJvamVjdHNDb250YWluZXIiLCJuZXdCdXR0b24iLCJjcmVhdGVCdXR0b25Gb3JOZXdQcm9qZWN0IiwicHJvamVjdEZvcm0iLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVUaGVGb3JtIiwidW5ibHVyVGhlRm9ybSIsInNlbGVjdEJ1dHRvbiIsImJvYXJkIiwiZWxlbSIsInJlbW92ZSIsImNsZWFyQWxsIiwiZGVsUHJvamVjdEJ0dG4iLCJqIiwiZGlzcGxheUF0U2NyZWVuIiwiZGlzcGxheUxvZ2ljQnV0dG9uIiwiZHJhd0Zvcm1Mb2dpYyIsIm5ld0xhYmVsTmFtZSIsIm5ld0lucHV0TmFtZSIsIm5ld0xhYmVsRGVzY3JpcHRpb24iLCJuZXdJbnB1dERlc2NyaXB0aW9uIiwibmV3TGFiZWxEYXRlIiwibmV3SW5wdXREYXRlIiwibmV3TGFiZWxQcmlvcml0eSIsIm5ld0lucHV0UHJpb3JpdHkiLCJmb3JtIiwic2VsZWN0Iiwib3B0aW9uIiwiZHJhd0Zvcm1UYXNrIiwiYmx1clRoZUZvcm1UYXNrIl0sInNvdXJjZVJvb3QiOiIifQ==