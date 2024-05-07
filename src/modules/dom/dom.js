import createTheProjectAndAddItToTheArray from "../projectManage/newProjectCall.js";
import projectTask from "../templateFiles/arrayOfTasks.js";
import projectArray from "../templateFiles/arrayOfProjects.js";
import { autoCreateTask } from "../projectManage/newProjectCall.js";


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
        deleteProjectLogic(selectButton.textContent);

        displayAtScreen(selectButton.textContent);
    });
}

function displayAtScreen(nameOfProject){

    for(let i = 0; i < projectTask.getLength(); i++){
        if(projectTask.getLink(i) === nameOfProject){
            createNewDivsWithDelButton();
            populateContainer(i);
        }
    }

    
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

function populateContainer(i){
    const selectContainer = document.querySelector('.todo-board > div:last-of-type');

    const newContainer = document.createElement('div');
    const name = document.createElement('p');
    const description = document.createElement('p');
    const dueDate = document.createElement('p');
    const priority = document.createElement('p');

    name.textContent = projectTask.getName(i);
    description.textContent = projectTask.getDescription(i);
    dueDate.textContent = projectTask.getDueDate(i);
    priority.textContent = projectTask.getPriority(i); 

    newContainer.appendChild(name);
    newContainer.appendChild(description);
    newContainer.appendChild(dueDate);
    newContainer.appendChild(priority);

    selectContainer.appendChild(newContainer);

}

function deleteProjectLogic(nameOfProject){
    const delButton = document.querySelector('.todo-board button:nth-child(1)');

    delButton.addEventListener('click', () => {
        for(let i = 0; i < projectTask.getLength(); i++){
            if(projectTask.getLink(i) === nameOfProject){
                projectTask.deleteElement(i);
            }
        }
        for(let j = 0; j < projectArray.getLength; j++){
            if(projectArray.getName(i) === nameOfProject){
                projectArray.deleteElement(i);
                break;
            }
        }

        const buttons = document.querySelectorAll('.my-projects button');

        for(let elem of buttons){
            if(elem.textContent === nameOfProject){
                elem.parentElement.removeChild(elem);
            }
        }

        clearAll();
    });
}

// ADD NEW EVENT TASK

function addNewEventButton(){
    const newEvent = document.querySelector('.buttons button:nth-child(2)');
    
    newEvent.addEventListener('click', () => {
        drawFormTask();
        blurTheFormTask();
        drawFormLogicTask();
    });

}

function drawFormTask(){
    const newContainer = document.createElement('div');

    const newLabelName = document.createElement('label');
    const newInputName = document.createElement('input');

    const newLabelDescription = document.createElement('label');
    const newInputDescription = document.createElement('input');

    const newLabelDate = document.createElement('label');
    const newInputDate = document.createElement('input');

    const newLabelPriority = document.createElement('label');
    const newInputPriority = document.createElement('input');

    const form = document.createElement('label');
    const select = document.createElement('select');
    form.setAttribute('for','labelSelect');
    form.textContent = 'which project';
    select.setAttribute('id','labelSelect');
    select.setAttribute('name','selectOption');

    const defOption = document.createElement('option');
    defOption.setAttribute('value','0');
    defOption.textContent = 'none';
    select.appendChild(defOption);

    for(let i = 0; i < projectArray.getLength(); i++){
        const option = document.createElement('option');
        option.textContent = `${projectArray.getName(i)}`;
        option.setAttribute('value',`${projectArray.getName(i)}`);
        select.appendChild(option);
    }


    const okButton = document.createElement('button');


    
    newContainer.setAttribute('class','taskForm');

    okButton.setAttribute('type','button');
    okButton.textContent = 'Ok';



    newInputName.setAttribute('id','NewTaskName');
    newLabelName.textContent ='Name => ';
    newLabelName.setAttribute('for','NewTaskName');

    newInputDescription.setAttribute('id','NewTaskDescription');
    newLabelDescription.textContent = 'Description => ';
    newLabelDescription.setAttribute('for','NewTaskDescription');

    newInputDate.setAttribute('id','NewTaskDate');
    newLabelDate.textContent = 'DueDate => ';
    newLabelDate.setAttribute('for','NewTaskDate');

    newInputPriority.setAttribute('id','NewTaskPrio');
    newLabelPriority.textContent = 'Priority => ';
    newLabelPriority.setAttribute('for','NewTaskPrio');

   


    newContainer.appendChild(newLabelName);
    newContainer.appendChild(newInputName);

    newInputName.insertAdjacentHTML('afterend',"<br>");

    newContainer.appendChild(newLabelDescription);
    newContainer.appendChild(newInputDescription);

    newInputDescription.insertAdjacentHTML('afterend',"<br>");

    newContainer.appendChild(newLabelDate);
    newContainer.appendChild(newInputDate);

    newInputDate.insertAdjacentHTML('afterend',"<br>");

    newContainer.appendChild(newLabelPriority);
    newContainer.appendChild(newInputPriority);

    newInputPriority.insertAdjacentHTML('afterend',"<br>");

    newContainer.appendChild(form);
    newContainer.appendChild(select);

    select.insertAdjacentHTML('afterend',"<br>");
    
    newContainer.appendChild(okButton);

    const bodySelector = document.querySelector('body');
    bodySelector.appendChild(newContainer);

}

function drawFormLogicTask(){
    const okButtonTask = document.querySelector('.taskForm button');
    const inputSelector = document.querySelectorAll('.taskForm input');
    const select = document.querySelector('.taskForm select');

    

    okButtonTask.addEventListener('click', ()=> {
        let name = inputSelector[0].value;
        let descr = inputSelector[1].value;
        let date = inputSelector[2].value;
        let priority = inputSelector[3].value;
        let projectLink = select.value;

        if(name  &&
           descr &&
           date  &&
           priority){
                autoCreateTask(name,descr,date,priority,projectLink);
                removeTheFormTask();
                unblurTheFormTask();
           }


    });
}


function blurTheFormTask(){
    const allExceptOurFormSelector = document.querySelectorAll('div:not(.taskForm)');
    
    for(let all of allExceptOurFormSelector){
    all.style.filter = 'blur(1px)';
    }
}

function removeTheFormTask(){
    const taskFormButton = document.querySelector('.taskForm button');
    const taskForm = document.querySelector('.taskForm');
    taskFormButton.parentElement.parentElement.removeChild(taskForm);
}

function unblurTheFormTask(){
    const allExceptOurFormSelector = document.querySelectorAll('div:not(.taskForm)');
    
        for(let all of allExceptOurFormSelector){
            all.style.filter = 'blur(0)';
            }
}






//DEFAULT BUTTON METHOD
function startDefaultButton(){
    const defaultButton = document.querySelector('.my-projects button');
    defaultButton.addEventListener('click', () => {
        clearAll();
        for(let i = 0; i < projectTask.getLength(); i++){
            console.log('aa');
            createNewDivsWithDelButton();
            populateContainer(i);
        }
    });
}

function clearAll(){
    const board = document.querySelectorAll('.todo-board *');

    for(let elem of board){
        elem.remove();
    }
}









export {startNewProjectButton,
        clearAll,
        addNewEventButton,
        startDefaultButton};