// Array to store tasks
var tasks = [];

// Add a task
function addTask() {
  // Get user input
  var task = document.getElementById("todoInput").value;

  // Check if input is not empty
  if (task !== "") {
    tasks.push(task); // Add task to the array
    document.getElementById("todoInput").value = ""; // Clear input field
    showTasks(); // Show updated tasks
  } else {
    alert("Please enter a task!");
  }
}

// Show tasks
function showTasks() {
  var todoList = document.getElementById("todoList");
  todoList.innerHTML = ""; // Clear existing tasks

  // Loop through tasks and display each one
  for (var i = 0; i < tasks.length; i++) {
    todoList.innerHTML += `
      <li>
        ${tasks[i]} 
        <button onclick="deleteTask(${i})" class="delete-btn">Delete</button>
      </li>`;
  }
}

// Delete a task
function deleteTask(index) {
  tasks.splice(index, 1); // Remove task from array
  showTasks(); // Show updated tasks
}
