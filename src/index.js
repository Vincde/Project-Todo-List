function logic() {
    /* this will be the explanation of this webpage
    
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
    */
}

(function webPageStarts(){
    const listProjects = [];
    let whoIsClicked;

    const inputSelector = document.querySelector('.dashboard input');
    const newProject = document.querySelector('.dashboard button:first-of-type');
    const delProject = document.querySelector('.delete');

    newProject.addEventListener('click', () => {
        if(inputSelector && inputSelector.textContent !== '' && inputSelector.textContent !== undefined && inputSelector.textContent !== null){
        let input = inputSelector.value;

        const newProject = Project(input);
        listProjects.push(newProject);
        
        populateWithProjectButton(input);

        const projectsButtons = document.querySelector('.projects button:last-of-type');

        if(projectsButtons){
            projectsButtons.addEventListener('click', (e)=>{
                whoIsClicked = e.currentTarget.textContent;
                printTodoElements(e.currentTarget.textContent,listProjects);
            });
        }
        
        }
    });

    
    delProject.addEventListener('click', () =>{
        //Add function to delete it
    });


    //This function gets executed only at runtime, so i cannot put the function to get the button pressed.
})();


function Project(name){
    this.name = name;
    this.todo = [];
    
    this.getName = () =>{
        return this.name;
    }

    this.push = (obj) =>{
        this.todo.push(obj);
    }

    this.printTodo = (div) =>{
        for(elem of this.todo){
            //IDK
        }
    }

    return {getName,push,printTodo};
}

function Todo(name,description,dueDate,priority){
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    this.print = () =>{
        return `name: ${name}, description: ${description}, dueDate: ${dueDate}, priority: ${priority}`;
    }
}


function populateWithProjectButton(input){
    const projectSelector = document.querySelector('.projects');

    const newB = document.createElement('button');
    newB.setAttribute('type','button');
    newB.textContent = input;

    projectSelector.appendChild(newB);
}

/* function printTodoElements(name,listProjects){
    for(elem of listProjects){
        if(name === elem.getName()){
            for(let i = 0; i < elem.todo.length; i++){
            const newDiv = document.createElement('div');
            
            }
        }
    }
} */