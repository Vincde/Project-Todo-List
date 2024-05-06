import projectArray from "../templateFiles/arrayOfProjects.js";
import createNewProject from "../templateFiles/project.js";
import createTaskForTodo from "../templateFiles/task.js";
import projectTask from "../templateFiles/arrayOfTasks.js";


function createTheProjectAndAddItToTheArray(name){
    let newProject = createNewProject(name);
    projectArray.pushProjectIntoArray(newProject);
}

function autoCreateTask(name,descr,date,priority,projectLink){
    const newTask = createTaskForTodo(name,descr,date,priority,projectLink);
    projectTask.addElement(newTask);
}


export default createTheProjectAndAddItToTheArray;
export {autoCreateTask};




