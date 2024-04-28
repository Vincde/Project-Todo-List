class Project{

    constructor(name){
        this.name = name;
    }

    changeName(newName){
        this.name = newName;
    }

    getName(){
        return this.name;
    }
}

function createTaskForTodo(newTitle,newDescription,newDueDate,newPriority){
    let title = newTitle;
    let description = newDescription;
    let dueDate = newDueDate;
    let priority = newPriority;

    return {title,description,dueDate,priority};
}

function createNewProject(name){
    const newProject = new Project(name);
    return newProject;
}





/* ------------------------------------------------------------------------------
                DOM EXECUTION
                
---------------------------------------------------------------------------------*/

function execDOM(){
    const newProject = document.querySelector('.buttons button:first-of-type');
    const projectArray = [];

    newProject.addEventListener('click', ()=>{
        drawForm();
        drawFormLogic(projectArray);
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

    projectFormButton.addEventListener('click', ()=>{
        if(inputForm.value != '' || inputForm.value != undefined || inputForm.value != null){
            let newProject = new Project(inputForm.value);
            projectArray.push(newProject);
            projectFormButton.parentElement.parentElement.removeChild(projectForm);
            createButtonForNewProject(projectArray[projectArray.length-1].getName());
            //maybe this doesn't need refreshing of page
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

execDOM();