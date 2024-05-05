function arrayOfProjects(){
    const arrayOfProjects = [];


    const pushProjectIntoArray = (project) =>{
        arrayOfProjects.push(project);
    }

    const getName = (count) => {
        return arrayOfProjects[count].getName();
    }

    const getLength = () => {
        return arrayOfProjects.length;
    }

    return {pushProjectIntoArray,getName,getLength};
}

const projectArray = arrayOfProjects();

export default projectArray;