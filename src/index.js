import {parse as dateFns,format} from 'date-fns'
/* function logic() {
    this will be the explanation of this webpage
    
    1) webpage starts
    1*)webpage has another button for deleting project(and iife gets the value of the current clicked button)
    when deleting button is pressed a function searches for the element and deletes the entire project and resets all elements at screen (and the button in dom obviously)
    2)only present button is input and newProject button
    3)if input is filled the button works and starts the creation of the project
    4)the button creates the project
    5)it creates a new button that resets the view of elements in the main part of webpage
    6)only when clicked the newly created button prints all dom elements into the page
    7)when another button is selected the dom elements gets deleted and new ones are printed
    8)another iife gets the value of the currently clicked button and uses a button that takes a new todo and push it into the array of todos. The print function will print everything without you thinking about it
   
} */

(function webPageStarts(){
    let listProjects = [];
    let whoIsClicked;

    if(localStorage.getItem("nameS")){
        retrieveStorage(listProjects,whoIsClicked);
    }

    const inputSelector = document.querySelector('.dashboard input');
    const newProject = document.querySelector('.dashboard button:first-of-type');
    const delProject = document.querySelector('.delete');
    const addTodo = document.querySelector('.add-todo');

    newProject.addEventListener('click', () => {
        
        let input = inputSelector.value;

        const newProject = Project(input);
        listProjects.push(newProject);
        
        populateWithProjectButton(input);

        let projectsButtons = document.querySelector('.projects button:last-of-type');

        
        projectsButtons.addEventListener('click', (e)=>{
            whoIsClicked = projectsButtons.textContent;
            deleteElementsDom();
            printTodoElements(whoIsClicked,listProjects);
        });

        setItem(listProjects);
         
    });

    
    delProject.addEventListener('click', () =>{
        deleteElementsDom();
        for(let i = 0; i < listProjects.length; i++){
            if(listProjects[i].getName() === whoIsClicked){
                listProjects.slice(i,1);
            }
        }
        projectDomDelete(whoIsClicked);
    });

    newTodoDivDomCreation();

    addTodo.addEventListener('click',() =>{
        let arrayOfData;
        let projectName;
        

        for(let j = 0; j < listProjects.length; j++){
            projectName = listProjects[j].getName();

            if(projectName === whoIsClicked){
                arrayOfData = returnInfoFromDOM();
                let newDate = dateFns(arrayOfData[2], 'dd/MM/yyyy', new Date());
                newDate = format(newDate, 'dd MM yyyy');
                const newTodo = Todo(arrayOfData[0],arrayOfData[1],newDate,arrayOfData[3]);
                listProjects[j].pushObj(newTodo);
            }
        }
    });


    //This function gets executed only at runtime, so i cannot put the function to get the button pressed.
})();


function Project(name){
    name = name;  //It is probable that some problems might be caused by the this.name ... If true just delete the this
    let todo = [];
    
    const getName = () =>{
        return name;
    }

    const pushObj = (newTodo) =>{
        todo[todo.length] = newTodo;
    }

    const getTodo = () => {
        return todo;
    }

    return {getName,pushObj,getTodo,todo};
}

function Todo(todoName,description,dueDate,priority){
    todoName = todoName;
    description = description;
    dueDate = dueDate;
    priority = priority;

    const printIt = () =>{  //had to change name of todo
        return `name:  ${todoName} priority: ${priority}`;
    }

    const printItExpanded = () =>{
        return `name: ${todoName} description: ${description} duedate: ${dueDate}priority: ${priority}`;
    }

    const getNameOfTodo = () =>{
        return todoName;
    }
    const getDescr = () =>{
        return description;
    }
    const getPriority = () =>{
        return priority;
    }
    const getDueDate = () =>{
        return dueDate;
    }

    const setName = (newName) =>{
        todoName = newName;
    }
    const setDescr = (newDescr) =>{
        description = newDescr;
    }
    const setDueDate = (newDueDate) =>{
        dueDate = newDueDate;
    }
    const setPriority = (newPriority) =>{
        priority = newPriority;
    }


    return{printIt,printItExpanded,getNameOfTodo,getDescr,getPriority,getDueDate,setName,setDescr,setDueDate,setPriority};
}


function populateWithProjectButton(input){
    const projectSelector = document.querySelector('.projects');

    const newB = document.createElement('button');
    newB.setAttribute('type','button');
    newB.textContent = input;

    projectSelector.appendChild(newB);
}

function printTodoElements(whoIsClicked,listProjects){
    const selectBoard = document.querySelector('.todo-board');
    for(let i = 0; i < listProjects.length; i++){
        if(whoIsClicked === listProjects[i].getName()){
            let varTodo = listProjects[i].getTodo();
            for(let j = 0; j < varTodo.length; j++){
                let newDivFather = document.createElement('div');
                let newDivChild = document.createElement('div');
                newDivChild.textContent = (varTodo[j].printIt());
                selectBoard.appendChild(newDivFather);
                newDivFather.appendChild(newDivChild)
                

                const deleteTodoButton = document.createElement('button');
                deleteTodoButton.setAttribute('type','button');
                deleteTodoButton.textContent = 'Delete This Todo';
                deleteTodoButton.setAttribute('class','delButton');
                newDivFather.appendChild(deleteTodoButton);

                const editButton = document.createElement('button');
                editButton.setAttribute('type','button');
                editButton.textContent = 'Edit this Todo';
                newDivFather.appendChild(editButton);

                makeDivExpand(varTodo[j]);
                deleteTodoButtonLogic(varTodo,j);
                editBttn(varTodo,j);
            }
        }
    }
}


function deleteElementsDom(){
    const selectDiv = document.querySelectorAll('.todo-board *');

    for(let i = 0; i < selectDiv.length; i++){
        selectDiv[i].textContent = '';
        selectDiv[i].remove();
    }
}


function projectDomDelete(whoIsClicked){
    const buttonSelect = document.querySelectorAll('.projects button');

    for(let i = 0; i < buttonSelect.length; i++){
        if(buttonSelect[i].textContent === whoIsClicked){
            buttonSelect[i].remove();
        }
    }
}

function newTodoDivDomCreation(){
    const dashboard = document.querySelector('.dashboard');
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class','div-new-inputs');

    let inputNames = ['name','description','due date','priority'];
    for(let i = 0; i < 4; i++){
        const newInput = document.createElement('input');
        const newLabel = document.createElement('label');

        newInput.setAttribute('type','text');
        newInput.setAttribute('id',`${inputNames[i]}`);

        newLabel.setAttribute('for',`${inputNames[i]}`);
        newLabel.textContent = inputNames[i];
        newDiv.appendChild(newLabel);
        newDiv.appendChild(newInput);

        
        let attributeValue = newInput.getAttribute('id');
        if(attributeValue === inputNames[1]){
            newInput.style.width = '150px';
            newInput.style.height = '150px';
        }
    }

    dashboard.appendChild(newDiv);
}

function returnInfoFromDOM(){
    const inputButtons = document.querySelectorAll('.div-new-inputs input');
    let info = [0,0,0,0];
    
            info[0] = inputButtons[0].value;
            info[1] = inputButtons[1].value;
            info[2] = inputButtons[2].value;
            info[3] = inputButtons[3].value;

    return info;
    
}

function makeDivExpand(todoElement){
    const divToExpand = document.querySelector('.todo-board div:last-of-type > div:last-of-type');
    const deleteButtonDiv = document.querySelector('.todo-board div:last-of-type button');
    const editButton = document.querySelector('.todo-board div:last-of-type button:last-of-type');

    let divs = document.querySelector('.todo-board > div:last-of-type');
    divs.style.display = 'flex';
    
    deleteButtonDiv.style.visibility = 'hidden';
    editButton.style.visibility = 'hidden';
    
    divToExpand.addEventListener('click', (e)=>{
        
        if(divToExpand.textContent === todoElement.printIt()){
            divToExpand.textContent = todoElement.printItExpanded();
            deleteButtonDiv.style.visibility = 'visible';
            editButton.style.visibility = 'visible';
        }else{
            divToExpand.textContent = todoElement.printIt();
            deleteButtonDiv.style.visibility = 'hidden';
            editButton.style.visibility = 'hidden';
        }

    });
    
}

function deleteTodoButtonLogic(varTodo,j){
    const selectButton = document.querySelector('.todo-board > div:last-of-type > button');


    selectButton.addEventListener('click', (event) =>{
        varTodo.splice(j,1);
        deleteElementsDom();
        event.stopPropagation();  //event NEEDS to be at the end or just deactivates all
    });
}


function editBttn(varTodo,j){
    const editButton = document.querySelector('.todo-board > div:last-of-type > button:last-of-type');
    const inputs = document.querySelectorAll('.div-new-inputs input');

    editButton.addEventListener('click', ()=>{
        
        if(editButton.textContent === 'Edit this Todo'){
        editButton.textContent = 'Apply Changes';
        inputs[0].value = varTodo[j].getNameOfTodo();
        inputs[1].value = varTodo[j].getDescr();
        inputs[2].value = varTodo[j].getDueDate();
        inputs[3].value = varTodo[j].getPriority();
        }else if(editButton.textContent === 'Apply Changes'){
            varTodo[j].setName(inputs[0].value);
            varTodo[j].setDescr(inputs[1].value);
            varTodo[j].setDueDate(inputs[2].value);
            varTodo[j].setPriority(inputs[3].value);
            deleteElementsDom();
            editButton.textContent = 'Edit this Todo';
        }

    });
}

function retrieveStorage(listProjects,whoIsClicked){
    let numberOfProjects = JSON.parse(localStorage.getItem("nameS"));
    let numberOfTodoS = JSON.parse(localStorage.getItem("todoS"));
    let counter = 0;

    for(let i = 0; i < numberOfProjects.length; i++){
        listProjects[i] = Project(numberOfProjects[i]);

        populateWithProjectButton(numberOfProjects[i]);

        let projectsButtons = document.querySelector('.projects button:last-of-type');

        
        projectsButtons.addEventListener('click', (e)=>{
            whoIsClicked = projectsButtons.textContent;
            deleteElementsDom();
            printTodoElements(whoIsClicked,listProjects);
        });
    

        let varTodo = listProjects[i].getTodo();

        /* for(let j = 0; j < numberOfTodoS.length; j++){
            varTodo[j] = Todo(numberOfTodoS.nameT,numberOfTodoS.descrT,numberOfTodoS.prioT,dueDaT);
        } */
        while(numberOfTodoS[counter].nameT !== ' '){
            varTodo[counter] = Todo(numberOfTodoS[counter].nameT,numberOfTodoS[counter].descrT,numberOfTodoS[counter].prioT,numberOfTodoS[counter].dueDaT);
            counter++;
        }
    }


}

function setItem(listProjects){
    let nameS = [];
    let todoS = [];
    let nameT,descrT,prioT,dueDaT;
    let varTodo;
    let h = 0;


    for(let i = 0; i < listProjects.length; i++){
        nameS[i] = listProjects[i].getName();
        varTodo = listProjects[i].getTodo();

        if(varTodo[0]){
        for(let j = 0; j < varTodo.length; j++){
                nameT = varTodo[j].getNameOfTodo();
                descrT = varTodo[j].getDescr();
                prioT = varTodo[j].getPriority();
                dueDaT = varTodo[j].getDueDate();
                todoS[h] = {nameT,descrT,prioT,dueDaT};
                h++;
            }
        }
        nameT = ' ';
        todoS[h] = {nameT};
        h++;
    }
    localStorage.setItem("nameS",JSON.stringify(nameS));
    localStorage.setItem("todoS",JSON.stringify(todoS));
    
}