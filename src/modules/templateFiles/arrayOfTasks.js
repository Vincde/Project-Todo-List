function arrayOfTasks(){
    const arrayOfTasks = [];

    const getName = (count) => {
        return arrayOfTasks[count].getTitle();
    }

    const addElement = (task) =>{
        arrayOfTasks.push(task);
    }

    const getDescription = (count) => {
        return arrayOfTasks[count].getDescription();
    }

    const getDueDate = (count) => {
        return arrayOfTasks[count].getDate();
    }

    const getPriority = (count) => {
        return arrayOfTasks[count].getPriority();
    }

    const getProjectName = (count) => {
        return arrayOfTasks[count].getLink();
    }

    const getLength = () => {
        return arrayOfTasks.length;
    }

    const getLink = (count) => {
        return arrayOfTasks[count].getLink();
    }

    const deleteElement = (count) => {
        arrayOfTasks.splice(count,1);
    }

    const changeName = (count,newName) => {
        arrayOfTasks[count].changeName(newName);
    }
    const changeDescription = (count,newDescription) => {
        arrayOfTasks[count].changeDescription(newDescription);
    }
    const changeDueDate = (count,newDueDate) => {
        arrayOfTasks[count].changeDueDate(newDueDate);
    }
    const changePriority = (count,newPriority) => {
        arrayOfTasks[count].changePriority(newPriority);
    }
    const changeLink = (count,newLink) => {
        arrayOfTasks[count].changeLink(newLink);
    }



    return {addElement,getDescription,getDueDate,getPriority,getProjectName,getLength,getLink,getName,deleteElement,changeName,changeDescription,changeDueDate,changePriority,changeLink};
}

const projectTask = arrayOfTasks();

export default projectTask;