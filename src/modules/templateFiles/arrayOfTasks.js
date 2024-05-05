function arrayOfTasks(){
    const arrayOfTasks = [];

    const addElement = (task) =>{
        arrayOfTasks.push(task);
    }

    const getName = (count) => {
        return arrayOfTasks[count].getName();
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
        return arrayOfTasks[count].getProjectName();
    }

    const getLength = () => {
        return arrayOfTasks.length;
    }



    return {addElement,getName,getDescription,getDueDate,getPriority,getProjectName,getLength};
}

const projectTask = arrayOfTasks();

export default projectTask;