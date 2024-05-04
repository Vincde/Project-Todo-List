import projectArray from "../templateFiles/arrayOfProjects.js";
import createNewProject from "../templateFiles/project.js";


function createTheProjectAndAddItToTheArray(name){
    let newProject = createNewProject(name);
    projectArray.pushProjectIntoArray(newProject);
}


export default createTheProjectAndAddItToTheArray;




