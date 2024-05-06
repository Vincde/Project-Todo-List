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



    return {addElement,getDescription,getDueDate,getPriority,getProjectName,getLength,getLink,getName};
}

const projectTask = arrayOfTasks();

export default projectTask;