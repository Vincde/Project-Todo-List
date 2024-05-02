import Project, {createNewProject} from './templateFiles/project.js';
import createTaskForTodo from './templateFiles/task.js';


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



function drawForm(){
    const newContainer = document.createElement('div');
    const newLabel = document.createElement('label');
    const newInput = document.createElement('input');
    const okButton = document.createElement('button');
    
    newContainer.setAttribute('class','projectForm');

    okButton.setAttribute('type','button');
    okButton.textContent = 'Ok';

    newInput.setAttribute('id','NewProjectName');
    newLabel.textContent = 'Name => ';
    newLabel.setAttribute('for','NewProjectName');

    newContainer.appendChild(newLabel);
    newContainer.appendChild(newInput);
    newContainer.appendChild(okButton);

    const bodySelector = document.querySelector('body');
    bodySelector.appendChild(newContainer);

}

function drawFormLogic(projectArray){
    const projectFormButton = document.querySelector('.projectForm button');
    const projectForm = document.querySelector('.projectForm');
    const inputForm = document.querySelector('.projectForm input');

    projectFormButton.addEventListener('click', () => {
        if(inputForm.value != '' ||
           inputForm.value != undefined ||
           inputForm.value != null){

            createTheProjectAndAddItToTheArray(inputForm.value,projectArray);
            createButtonForNewProject(inputForm.value);
            removeTheForm();
            unblurTheForm();
        }
        
        
    });
}


function createButtonForNewProject(nameOfNewButton){
    const projectsContainer = document.querySelector('.my-projects');
    const newButton = document.createElement('button');

    newButton.setAttribute('type','button');

    newButton.textContent = nameOfNewButton;

    projectsContainer.appendChild(newButton);
}


function blurTheForm(){
    const allExceptOurFormSelector = document.querySelectorAll('div:not(.projectForm)');
    
    for(let all of allExceptOurFormSelector){
    all.style.filter = 'blur(1px)';
    }
}
function unblurTheForm(){
const allExceptOurFormSelector = document.querySelectorAll('div:not(.projectForm)');

    for(let all of allExceptOurFormSelector){
        all.style.filter = 'blur(0)';
        }
}


function addLogicToBttn(taskArray){
    const selectBttn = document.querySelector('.my-projects button:last-of-type');

    selectBttn.addEventListener('click', () => {
        let nameOfProject = selectBttn.textContent;

        for(elem of taskArray){
            if(elem.getProject === nameOfProject){
                /* createTasksOnWebPage(elem); */   //a theorical task that gets created dinamically in another function
                //This needs an element of link inside every task
            }
        }
    });
}


function removeTheForm(){
    const projectFormButton = document.querySelector('.projectForm button');
    const projectForm = document.querySelector('.projectForm');
    projectFormButton.parentElement.parentElement.removeChild(projectForm);
}

function createTheProjectAndAddItToTheArray(name,projectArray){
    let newProject = createNewProject(name);
    projectArray.push(newProject);
}








execDOM();