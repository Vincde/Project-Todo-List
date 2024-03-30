function newProject(name){
    this.name = name;
    this.todo = [];

    const getName = () => {
        return this.name;
    }

    const addTodo = (newElement) => {
        this.todo.push(newElement);
    }

    return {getName,addTodo};
}


function start(){
    let listOfProjects = [];
    
    //button pressed
    let name = prompt('name:');

    let newProject = newProject(name);
    listOfProjects.push(newProject);


    


}