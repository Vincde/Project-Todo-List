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

    const deleteElement = () => {
        arrayOfProjects.splice(i,1);
    }

    return {pushProjectIntoArray,getName,getLength,deleteElement};
}

const projectArray = arrayOfProjects();

export default projectArray;