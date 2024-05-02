import createNewProject from '../templateFiles/project.js';



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



function removeTheForm(){
    const projectFormButton = document.querySelector('.projectForm button');
    const projectForm = document.querySelector('.projectForm');
    projectFormButton.parentElement.parentElement.removeChild(projectForm);
}

function createTheProjectAndAddItToTheArray(name,projectArray){
    let newProject = createNewProject(name);
    projectArray.push(newProject);
}



function addLogicToBttn(taskArray){
    const selectBttn = document.querySelector('.my-projects button:last-of-type');

    selectBttn.addEventListener('click', () => {

        clearAll();

        let nameOfProject = selectBttn.textContent;
        addDeleteButtonToWebpage();
        //the logic for deleting the button is not present yet

        for(elem of taskArray){
            if(elem.getProjectName() === nameOfProject){
                createTasksOnWebPage(elem);   //a theorical task that gets created dinamically in another function
                deleteTaskButton(elem);
            }
        }
    });
}


function createTasksOnWebPage(task){
    const todoContainer = document.querySelector('.todo-board div:last-of-type');
    const todo = document.createElement('div');

    todo.textContent = 'aaaa';//here goes description,date,name,etc

    todoContainer.appendChild(todo);
}

function addDeleteButtonToWebpage(){
    const selectBoard = document.querySelector('.todo-board');
    const anotherDiv = document.createElement('div');
    const newDiv = document.createElement('div');
    const deleteButton = document.createElement('button');
    
    deleteButton.setAttribute('type','button');
    deleteButton.textContent = 'Delete this Project';

    selectBoard.appendChild(newDiv);
    selectBoard.appendChild(anotherDiv);
    newDiv.appendChild(deleteButton);
}

function clearAll(){
    const board = document.querySelectorAll('.todo-board *');

    for(let elem of board){
        elem.remove();
    }
}

function deleteTaskButton(task){

    const selectDiv = document.querySelector('.todo-board > div:last-of-type > div:last-of-type');
    const deleteTaskButton = document.createElement('button');
    deleteTaskButton.setAttribute('type','button');
    deleteTaskButton.textContent = 'Delete task!';

    selectDiv.appendChild(deleteTaskButton);

}

export {drawForm,blurTheForm,drawFormLogic,addLogicToBttn};