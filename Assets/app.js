var arr = []; // Array to store tasks
var ind = null; // Index for updating a specific task

var addTodos = () => {
  var input = document.getElementById("new-task-input");
  var list_el = document.getElementById("tasks");
  var val = input.value.trim();

  if (!val) return; // Exit if input is empty

  // If editing a task
  if (ind !== null) {
    arr[ind] = val; // Update the task in the array
    ind = null; // Reset index
  } else {
    arr.unshift(val); // Add new task to the beginning of the array
  }

  input.value = ""; // Clear the input field
  renderTasks(); // Re-render the task list
};

var renderTasks = () => {
  var list_el = document.getElementById("tasks");
  list_el.innerHTML = ""; // Clear the existing tasks

  arr.forEach((task, i) => {
    var task_el = document.createElement("div");
    task_el.classList.add("task");

    var content_el = document.createElement("div");
    content_el.classList.add("content");

    var task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    content_el.appendChild(task_input_el);

    var actions_el = document.createElement("div");
    actions_el.classList.add("actions");

    var edit_btn = document.createElement("button");
    edit_btn.classList.add("edit");
    edit_btn.innerText = "Edit";
    edit_btn.addEventListener("click", () => Update(i)); // Update logic

    var delete_btn = document.createElement("button");
    delete_btn.classList.add("delete");
    delete_btn.innerText = "Delete";
    delete_btn.addEventListener("click", () => Remove(i)); // Delete logic

    actions_el.appendChild(edit_btn);
    actions_el.appendChild(delete_btn);

    task_el.appendChild(content_el);
    task_el.appendChild(actions_el);

    list_el.appendChild(task_el);
  });
};

var Remove = (index) => {
  arr.splice(index, 1); // Remove task from the array
  renderTasks(); // Re-render the list
};

var Update = (index) => {
  var input = document.getElementById("new-task-input");
  input.value = arr[index]; // Populate input field with the task
  ind = index; // Set the index for updating
};

// Event listener for form submission
document.getElementById("new-task-form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  addTodos(); // Add or update the task
});
