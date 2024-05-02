import { drawForm,blurTheForm,drawFormLogic,addLogicToBttn } from "./projectManage/newProjectRun.js";



function execDOM(){
    const newProject = document.querySelector('.buttons button:first-of-type');
    const taskArray = [];  //this array contains all tasks
    const projectArray = [];

    newProject.addEventListener('click', ()=>{
        drawForm();
        blurTheForm();
        drawFormLogic(projectArray);
        addLogicToBttn(taskArray);
    });
}






execDOM();