//Manages the Todo object (constructor/class or factory).
/*
Class features:
Properties: title, description, dueDate, priority, notes, checklist (optional).
Methods: Edit, delete, mark as complete, change priority.
*/
import { format } from "date-fns";

export class todoItem {
    
    constructor(title, description, dueDate, priority, notes, completed){
        this.title = title;
        this.description = description;
        this.dueDate = format(new Date(dueDate), 'yyyy-MM-dd'); // Format the date when creating a new todo
        this.priority = priority;
        this.notes = notes;
        this.completed = false;
    }

    // Create methods:
    edit(newTitle, newDescription, newDate, newPriority, newNotes, newCompleted){
        if(newTitle) this.title = newTitle;
        if(newDescription) this.description = newDescription;
        if(newDate) this.dueDate = format(new Date(newDate),'yyyy-MM-dd');
        if(newPriority) this.priority = newPriority;
        if(newNotes) this.notes = newNotes;
        if(newCompleted) this.completed = newCompleted;
        return `Todo Item updated: ${this.title}, ${this.description}, ${this.dueDate}, ${this.priority}, ${this.notes}, ${this.completed}`;
    }
    markAsCompleted(){ // keep the method focused on marking the todo as completed without changing unrelated properties. 
        this.completed = true;
        return `Todo Item mark as completed: ${this.title}`;
    }
}

