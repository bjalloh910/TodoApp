// This contains a class that keep track of all the todolist in an array

export class todoList{
    
    constructor(){
        this.todoarray = [];
    }  

    addItem(todo){
        this.todoarray.push(todo);
    }
    deleteItem(title){
        const index = this.todoarray.findIndex((todo) => todo.title === title);
        if ( index !== -1) {
            this.todoarray.splice(index, 1);
            return `todo with title ${title} deleted`;
        } else{
            return `todo with title ${title} wasn't found`;
        }
    }
}