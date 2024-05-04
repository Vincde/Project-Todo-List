function arrayOfProjects(){
    const arrayOfProjects = [];


    const pushProjectIntoArray = (project) =>{
        arrayOfProjects.push(project);
    }

    return {pushProjectIntoArray};
}

const projectArray = arrayOfProjects();

export default projectArray;