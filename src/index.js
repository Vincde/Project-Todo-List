class Project{

    constructor(name){
        this.name = name;
    }

    changeName(newName){
        this.name = newName;
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

    newProject.addEventListener('click', ()=>{
        middleDraw();
        //1)function that asks name
        //2)create the new project
        //3)put project into array of projects
        //4)create button with the name of the new project
        //5)Put new button into webpage
    });
}


function middleDraw(){
    drawForm();
    drawFormDom();
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

function drawFormDom(){
    const projectForm = document.querySelector('.projectForm button');
    const inputForm = document.querySelector('.projectForm input');

    projectForm.addEventListener('click', ()=>{
        if(inputForm.value){
            
            projectForm.parentElement.remove();
        }
        
        
    });
}