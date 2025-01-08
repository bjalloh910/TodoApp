//Manages the Project object.
// this class will create different project aka different lists to organize user's tasks
/*
default list
option to create a new list
*/

export class ProjectList {

    // a project should take in a name and a list as a prpoerty a default one
    constructor(){
        this.projectArray = []
        this.createNewProject("Default"); //this is the default project at initialization
    }

    // method to add a new complete list
    createNewProject(projectName){
        const newProject = { name: projectName, tasks: [] } // Each project could have a name and a list of tasks
        this.projectArray.push(newProject);
        return newProject;
    }

    // method to find a project by name 
    getProjectByName(projectName){
        return this.projectArray.find((project) => project.name === projectName);
    }

    // add a todolist to project 
    addTodoToProject(projectName, todoListOrItem){
        const project = this.getProjectByName(projectName);
        if (project) {
            // Check if it's a todoList object
            if (Array.isArray(todoListOrItem.todoarray)){
                // Add all items from the todoList using the spread operator
                project.tasks.push(...todoListOrItem.todoarray);
            } else {
                project.tasks.push(todoListOrItem); //add that single item
            }
            return `Todo(s) added to project "${projectName}".`;
        } else {
            return `Project "${projectName}" not found.`;
        }
    }

    // method to remove an entire list 
    deleteAProject(projectName){
        const index = this.projectArray.findIndex((project) => project.name === projectName);
        if (index !== -1){
            this.projectArray.splice(index, 1);
            return `Projectwith name ${projectName} deleted`;
        } else {
            return `Project with name ${projectName} not found`;
        }
    }
}