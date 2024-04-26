class Project{

    constructor(name){
        this.name = name;
    }

    changeName(newName){
        this.name = newName;
    }
}

function createTaskForTodo(newTitle,newDescription,newDueDate,newPriority){
    let title = newTitle;
    let description = newDescription;
    let dueDate = newDueDate;
    let priority = newPriority;

    return {title,description,dueDate,priority};
}

function createNewProject(name){
    const newProject = new Project(name);
    return newProject;
}