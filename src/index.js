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
    const newProject = document.querySelector('.dashboard button:first-of-type');
    const delProject = document.querySelector('.delete');

    newProject.addEventListener('click', () => {
        //Add new project function
    });

    //Essentially only delProject button and later the one to add todo need to know the button pressed at the moment. i could set an attribute on the element clicked for example(?)
    delProject.addEventListener('click', () =>{
        //Add function to delete it
    });



    //This function gets executed only at runtime, so i cannot put the function to get the button pressed.
})()