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
    function changeName(newName){
        title = newName;
    }
    function changeDescription(newDescription){
        description = newDescription
    }    
    function changeDueDate(newDueDate){
        dueDate = newDueDate;
    }
    function changePriority(newPriority){
        priority = newPriority;
    }
    function changeLink(newLink){
        projectLink = newLink;
    }   
    
    

    return {getTitle,getDescription,getDate,getPriority,getProjectName,getLink,changeName,changeDescription,changeDueDate,changePriority,changeLink};
}


export default createTaskForTodo;