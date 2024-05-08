import { startNewProjectButton, clearAll, addNewEventButton, startDefaultButton, createTheProjectAndAddItToTheArray, createButtonForNewProject, displayLogicButton, deleteTaskLogic, addRenamingBttn } from "./dom/dom.js";
import { autoCreateTask } from "./projectManage/newProjectCall.js";

const init = function(){
    
    startDefaultButton();
    startNewProjectButton();
    addNewEventButton();

    if(localStorage.getItem("projects")){
        let arr = JSON.parse(localStorage.getItem("projects"));

        for(let j = 0; j < arr.length; j++){
        createTheProjectAndAddItToTheArray(arr[j]);
        createButtonForNewProject(arr[j]);
        displayLogicButton();
        }
    }

    if(localStorage.getItem("tasks")){
        let arrTasks = [];
        arrTasks = JSON.parse(localStorage.getItem("tasks"));
        let i = 0;
        let count = 0;

        while(i <= arrTasks.length){
            autoCreateTask(arrTasks[i],
                           arrTasks[i+1],
                           arrTasks[i+2],
                           arrTasks[i+3],
                           arrTasks[i+4]);
            i = i+5;               
        }
        
    }

    

}


export default init;

