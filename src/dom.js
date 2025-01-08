import { todoItem } from './todo.js';
//Handles all DOM-related work.

// dom to create a task


export function initializeTaskFeature(addBtnSelector, taskBoxSelector) {
  const addBtn = document.querySelector(addBtnSelector);
  const taskBox = document.querySelector(taskBoxSelector);

  // Create modal dynamically
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h3 id="modalTitle">Add a New Task</h3>
      <input type="text" id="taskTitle" placeholder="Title">
      <input type="text" id="taskDescription" placeholder="Description">
      <input type="date" id="taskDueDate">
      <select id="taskPriority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <textarea id="taskNotes" placeholder="Notes"></textarea>
      <button id="submitTask">Submit</button>
    </div>
  `;
  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('.close');
  const submitTaskBtn = modal.querySelector('#submitTask');
  const modalTitle = modal.querySelector('#modalTitle');

  let currentEditingTask = null; //to keep track of task being edited

  function resetModal(){
    modal.querySelectorAll('input, textarea, select').forEach((field) => (field.value = ''));
    modalTitle.textContent = 'Add a new Task';
    currentEditingTask = null;
  }

  function updateTaskUI(taskItem, updatedTodo){
    taskItem.querySelector('h4').textContent = updatedTodo.title;
    const paragraphs = taskItem.querySelectorAll('p');
    paragraphs[0].textContent = updatedTodo.description;
    paragraphs[1].textContent = `Due: ${updatedTodo.dueDate}`;
    paragraphs[2].textContent = `Priority: ${updatedTodo.priority}`;
    paragraphs[3].textContent = `Notes: ${updatedTodo.notes}`;
  }

  // Show modal on button click
  addBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    modalTitle.textContent = 'Add a New Task';
  });

  // Hide modal on close button click
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    resetModal();
  });

  // Hide modal on outside click
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      taskInput.value = ''; // Clear input
      resetModal();
    }
  });

  // Submit task and add to taskBox
  submitTaskBtn.addEventListener('click', () => {
    // Get input values
    const title = modal.querySelector('#taskTitle').value.trim();
    const description = modal.querySelector('#taskDescription').value.trim();
    const dueDate = modal.querySelector('#taskDueDate').value.trim();
    const priority = modal.querySelector('#taskPriority').value;
    const notes = modal.querySelector('#taskNotes').value.trim();

    if (title && dueDate) {
      if (currentEditingTask) {
        // Update the todoItem instance
        currentEditingTask.todo.title = title;
        currentEditingTask.todo.description = description;
        currentEditingTask.todo.dueDate = dueDate;
        currentEditingTask.todo.priority = priority;
        currentEditingTask.todo.notes = notes;

        updateTaskUI(currentEditingTask.taskElement, currentEditingTask.todo);
      } else {
        // Create a new todoItem instance
        const newTodo = new todoItem(title, description, dueDate, priority, notes);

        // Add task to the taskBox (render it)
        const taskItem = document.createElement('div');
        taskItem.className = 'taskItem';
        taskItem.innerHTML = `
          <h4>${newTodo.title}</h4>
          <p>${newTodo.description}</p>
          <p>Due: ${newTodo.dueDate}</p>
          <p>Priority: ${newTodo.priority}</p>
          <p>Notes: ${newTodo.notes}</p>
          <button class="markComplete">Mark as Complete</button>
          <button class="edit">Edit Task</button>
        `;

          // Add complete functionality
          taskItem.querySelector('.markComplete').addEventListener('click', () => {
          if (!newTodo.completed){
            newTodo.completed = true;
            taskItem.style.textDecoration = 'line-through';
          } else { // undo the completion
            newTodo.completed = false;
            taskItem.style.textDecoration = 'none';
          }
        });
        
        taskItem.querySelector('.edit').addEventListener('click', () => {

          currentEditingTask = { taskElement: taskItem, todo: newTodo};

          // Populate modal fields with current task data
          modal.querySelector('#taskTitle').value = newTodo.title;
          modal.querySelector('#taskDescription').value = newTodo.description;
          modal.querySelector('#taskDueDate').value = newTodo.dueDate;
          modal.querySelector('#taskPriority').value = newTodo.priority;
          modal.querySelector('#taskNotes').value = newTodo.notes;

          modalTitle.textContent = 'Edit Task';

          modal.style.display = 'block';
        });
        taskBox.appendChild(taskItem);
      }

      // Clear modal fields and hide
      modal.querySelectorAll('input, textarea').forEach((field) => (field.value = ''));
      modal.style.display = 'none';
      resetModal();
    } else {
      alert('Title and Due Date are required!');
    }
  });
}
  


  