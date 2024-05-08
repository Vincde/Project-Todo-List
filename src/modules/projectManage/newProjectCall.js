import projectArray from "../templateFiles/arrayOfProjects.js";
import createNewProject from "../templateFiles/project.js";
import createTaskForTodo from "../templateFiles/task.js";
import projectTask from "../templateFiles/arrayOfTasks.js";
import { format } from "date-fns";

function createTheProjectAndAddItToTheArray(name){
    let newProject = createNewProject(name);
    projectArray.pushProjectIntoArray(newProject);
}

function autoCreateTask(name,descr,date,priority,projectLink){
    let newDate = date.split("-");
    
    newDate = format(new Date(`${newDate[2]}`,`${newDate[1]-1}`,`${newDate[0]}`),"dd-MM-yyyy");
    const newTask = createTaskForTodo(name,descr,newDate,priority,projectLink);
    projectTask.addElement(newTask);
}


export default createTheProjectAndAddItToTheArray;
export {autoCreateTask};




