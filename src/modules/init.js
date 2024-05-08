import { startNewProjectButton, clearAll, addNewEventButton, startDefaultButton, createTheProjectAndAddItToTheArray, createButtonForNewProject, displayLogicButton } from "./dom/dom.js";


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

}


export default init;

