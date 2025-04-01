console.log("APP Loaded babyy");

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let todos = [];

document.addEventListener("DOMContentLoaded", () => {
  const savedTodos = localStorage.getItem("ThingsToDo");
  if (savedTodos) {
    todos = JSON.parse(savedTodos);
    todos.forEach((task) => addTodosToDOM(task));
  }
});

function saveTodos() {
  localStorage.setItem("ThingsToDo", JSON.stringify(todos));
}

function generateId() {
  return Date.now();
}

function addTodosToDOM(task) {
  const li = document.createElement("li");
  li.setAttribute("data-id", task.id);

  const span = document.createElement("span");
  span.textContent = task.content;
  if (task.completed) {
    span.classList.add("completed");
  }

  //I know this should probably not be here but it work and I am scared to touch it haha
  span.addEventListener("dblclick", () => editTask(task, span));

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    span.classList.toggle("completed");
    saveTodos();
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "🗑️";
  deleteButton.addEventListener("click", () => {
    li.remove();
    todos = todos.filter((t) => t.id !== task.id);
    saveTodos();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);
  todoList.appendChild(li);
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const content = todoInput.value.trim();
  if (!content) return;
  const newTask = {
    id: generateId(),
    content,
    completed: false,
  };

  todos.push(newTask);
  addTodosToDOM(newTask);
  saveTodos();
  todoInput.value = "";
});

function editTask(task, span) {
    const input = document.createElement("input");
    input.type = "text";
    input.value = task.content;
const listItem = span.parentElement;
listItem.replaceChild(input, span);
input.focus();

function finishEditing() {
    const newContent = input.value.trim();
    if (newContent !== "") {
      task.content = newContent;
      span.textContent = newContent;
    }
    listItem.replaceChild(span, input);
    saveTodos();
  }
  
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      finishEditing();
    }
  });
  input.addEventListener("blur", finishEditing);
}



