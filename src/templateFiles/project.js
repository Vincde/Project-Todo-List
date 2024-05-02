class Project{

    constructor(name){
        this.name = name;
    }

    changeName(newName){
        this.name = newName;
    }

    getName(){
        return this.name;
    }
}

function createNewProject(name){
    const newProject = new Project(name);
    return newProject;
}

//Add this functionality here to not have another file to manage

export default Project;
export {createNewProject};