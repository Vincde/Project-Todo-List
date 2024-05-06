function createTaskForTodo(newTitle,newDescription,newDueDate,newPriority,newProjectLink){
    let title = newTitle;
    let description = newDescription;
    let dueDate = newDueDate;
    let priority = newPriority;
    let projectLink = newProjectLink;

    function getTitle(){
        return title;
    }
    function getDescription(){
        return description;
    }
    function getDate(){
        return dueDate;
    }
    function getPriority(){
        return priority;
    }
    function getProjectName(){
        return projectLink;
    }
    function getLink(){
        return projectLink;
    }

    return {getTitle,getDescription,getDate,getPriority,getProjectName,getLink};
}


export default createTaskForTodo;