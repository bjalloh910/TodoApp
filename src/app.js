//Main file that initializes and ties everything together.
import "./styles.css"; // importing the css file into the js file
import { todoItem } from "./todo.js";
import { todoList } from "./todoList.js"

// create a class instance example
const item1 = new todoItem("Buy groceries", "Milk, eggs, and bread", "2025-01-10", "normal", "don't forget keys", false);
const item2 = new todoItem("Finish math homework", "Addition hw", "2025-01-15", "high", false);
const item3 = new todoItem("Work on javascript project", "Add a new feature to app","2025-01-12", "medium", false);

console.log(item1);
console.log(item2);
console.log(item3)

item1.edit("Buy groceries", "Milk, eggs, flour, water and bread", "2025-01-10", "normal", "don't forget keys", false);
item1.markAsCompleted(true);

item2.edit("Finish math homework", "Addition hw", "2025-01-12", "high", false);

item3.markAsCompleted(true);

// testing out todoList feature 
const todoList1 = new todoList();
todoList1.addItem(item1);
todoList1.addItem(item2);
todoList1.addItem(item3);
console.log("here is the list", todoList1);

todoList1.deleteItem("Finish math homework");
