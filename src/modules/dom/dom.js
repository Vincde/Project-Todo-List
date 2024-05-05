import createTheProjectAndAddItToTheArray from "../projectManage/newProjectCall.js";


function startNewProjectButton(){
    const newProject = document.querySelector('.buttons button:first-of-type');

    newProject.addEventListener('click', ()=>{
        drawForm();
        blurTheForm();
        drawFormLogic();
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


function blurTheForm(){
    const allExceptOurFormSelector = document.querySelectorAll('div:not(.projectForm)');
    
    for(let all of allExceptOurFormSelector){
    all.style.filter = 'blur(1px)';
    }
}


function drawFormLogic(){
    const projectFormButton = document.querySelector('.projectForm button');
    const projectForm = document.querySelector('.projectForm');
    const inputForm = document.querySelector('.projectForm input');

    projectFormButton.addEventListener('click', () => {
        if(inputForm.value != '' ||
           inputForm.value != undefined ||
           inputForm.value != null){

            createTheProjectAndAddItToTheArray(inputForm.value);
            createButtonForNewProject(inputForm.value);
            removeTheForm();
            unblurTheForm();
            displayLogicButton();
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


function removeTheForm(){
    const projectFormButton = document.querySelector('.projectForm button');
    const projectForm = document.querySelector('.projectForm');
    projectFormButton.parentElement.parentElement.removeChild(projectForm);
}



function unblurTheForm(){
    const allExceptOurFormSelector = document.querySelectorAll('div:not(.projectForm)');
    
        for(let all of allExceptOurFormSelector){
            all.style.filter = 'blur(0)';
            }
}


function displayLogicButton(){
    const selectButton = document.querySelector('.my-projects button:last-of-type');
    const selectDisplay = document.querySelector('.todo-board');
    

    selectButton.addEventListener('click',() => {
        clearAll();


        const delProjectBttn = document.createElement('button');
        delProjectBttn.setAttribute('type','button');
        delProjectBttn.textContent = 'delete this project';

        selectDisplay.appendChild(delProjectBttn);

        createNewDivsWithDelButton();
        /* populateContainer(); this function takes all tasks for project and prints them at screen*/  
    });
}


function createNewDivsWithDelButton(){
    const newContainer = document.createElement('div');
    const delBttn = document.createElement('button');
    const selectDisplay = document.querySelector('.todo-board');
    
    delBttn.setAttribute('type', 'button');
    delBttn.textContent = 'delete this task';

    newContainer.appendChild(delBttn);
    selectDisplay.appendChild(newContainer);
}




function clearAll(){
    const board = document.querySelectorAll('.todo-board *');

    for(let elem of board){
        elem.remove();
    }
}









export {startNewProjectButton,
        clearAll};