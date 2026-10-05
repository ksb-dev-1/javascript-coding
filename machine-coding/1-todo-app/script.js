const todoAddInputForm = document.querySelector("#todo-input-form");
const todoAddInput = document.querySelector("#todo-input");
const todoAddButton = document.querySelector("#todo-add-button");

const searchInputForm = document.querySelector("#search-input-form");
const searchInput = document.querySelector("#search-input");
const searchTodoButton = document.querySelector("#search-todo-button");

const allButton = document.querySelector("#all-button");
const todoButton = document.querySelector("#todo-button");
const completedButton = document.querySelector("#completed-button");

const todoList = document.querySelector("#todo-list");

const markAllDoneButton = document.querySelector("#mark-all-done-button");
const clearAllButton = document.querySelector("#clear-all-button");

function getTodos() {
  const savedTodos = localStorage.getItem("todos");

  return savedTodos ? JSON.parse(savedTodos) : [];
}

const todos = getTodos();

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

todoAddInputForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo(todoAddInput.value);

  todoAddInput.value = "";
  todoAddInput.focus();
});

searchInputForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

searchInput.addEventListener("input", (e) => {
  const searchText = e.target.value.trim().toLowerCase();

  const filteredTodos = todos.filter((todo) => {
    return todo.title.toLowerCase().includes(searchText);
  });

  renderTodos(filteredTodos);
});

allButton.addEventListener("click", () => {
  renderTodos();
});

todoButton.addEventListener("click", () => {
  const filteredTodos = todos.filter((todo) => todo.checked === false);
  renderTodos(filteredTodos);
});

completedButton.addEventListener("click", () => {
  const filteredTodos = todos.filter((todo) => todo.checked === true);
  renderTodos(filteredTodos);
});

markAllDoneButton.addEventListener("click", () => {
  const allChecked = todos.every((todo) => todo.checked);

  todos.forEach((todo) => (todo.checked = !allChecked));

  saveTodos();
  renderTodos();
});

clearAllButton.addEventListener("click", () => {
  todos.length = 0;
  saveTodos();
  renderTodos();
});

function createTodo(todo) {
  const li = document.createElement("li");
  const checkInput = document.createElement("input");
  const title = document.createElement("span");
  const deleteButton = document.createElement("button");

  checkInput.type = "checkbox";
  checkInput.checked = todo.checked;

  title.textContent = todo.title;
  title.style.textDecoration = todo.checked ? "line-through" : "none";

  deleteButton.textContent = "Delete";

  // Prevent direct checkbox click from bubbling up to the li click handler
  checkInput.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  checkInput.addEventListener("change", () => {
    toggleCheck(todo, checkInput.checked);
  });

  // Prevent delete button click from triggering the li toggle
  deleteButton.addEventListener("click", (e) => {
    e.stopPropagation();
    deleteTodo(todo.id);
  });

  // Toggle check/uncheck when clicking anywhere on the li
  li.addEventListener("click", () => {
    toggleCheck(todo, !todo.checked);
  });

  li.append(checkInput, title, deleteButton);
  todoList.append(li);
}

function addTodo(text) {
  const title = text.trim();

  if (!title) return;

  todos.push({ id: Date.now(), title, checked: false });
  saveTodos();
  renderTodos();
}

function deleteTodo(todoId) {
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex === -1) return;

  todos.splice(todoIndex, 1);
  saveTodos();
  renderTodos();
}

function toggleCheck(todo, isChecked) {
  todo.checked = isChecked;
  saveTodos();
  renderTodos();
}

function renderTodos(todosToRender = todos) {
  todoList.innerHTML = "";

  todosToRender.forEach((todo) => {
    createTodo(todo);
  });

  if (todosToRender.length > 0) {
    markAllDoneButton.style.display = "block";
    clearAllButton.style.display = "block"; // Show button
  } else {
    markAllDoneButton.style.display = "none";
    clearAllButton.style.display = "none"; // Hide button
  }
}

renderTodos();
