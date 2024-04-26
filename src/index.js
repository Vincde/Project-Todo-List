class Project{
    todo = [];

    constructor(name){
        this.name = name;
    }

    addElementToArray(element){
        this.todo.push(element);
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