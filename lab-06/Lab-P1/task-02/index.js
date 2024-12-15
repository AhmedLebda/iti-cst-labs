var taskCounter = 1;

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  AddTask();
});

function AddTask() {
  var taskInput = document.querySelector("#taskInput");

  var taskText = taskInput.value;
  if (taskText === "") {
    alert("Please enter a task name.");
    return;
  }

  var taskElement = createTaskElement(taskText);
  var taskList = document.querySelector("#tasksList");
  taskList.appendChild(taskElement);
  taskInput.value = "";

  taskElement.querySelector("#deleteTask").addEventListener("click", () => {
    var confirmDelete = confirm("Delete This Task ?");
    confirmDelete && taskElement.remove();
  });

  var checkbox = taskElement.querySelector("#doneCheckbox");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      taskElement.classList.add("completed");
    } else {
      taskElement.classList.remove("completed");
    }
  });
}

function createTaskElement(text) {
  var taskWrapper = document.createElement("div");
  taskWrapper.className = "task";
  taskWrapper.id = "task-" + taskCounter;
  taskCounter++;

  var checkboxWrapper = document.createElement("div");
  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("done_checkbox");
  checkbox.id = "doneCheckbox";
  checkboxWrapper.appendChild(checkbox);

  var taskText = document.createElement("p");
  taskText.textContent = text;
  taskText.classList.add("task_area");

  var deleteWrapper = document.createElement("div");
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete_task");
  deleteButton.id = "deleteTask";
  deleteWrapper.appendChild(deleteButton);

  taskWrapper.appendChild(checkboxWrapper);
  taskWrapper.appendChild(taskText);
  taskWrapper.appendChild(deleteWrapper);

  return taskWrapper;
}
