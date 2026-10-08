const todoAddInputForm = document.querySelector("#todo-input-form");
const todoAddInput = document.querySelector("#todo-add-input");
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

const todoEmptyState = document.querySelector("#todo-empty-state");

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
  setActiveFilter(allButton);
  renderTodos();
});

todoButton.addEventListener("click", () => {
  setActiveFilter(todoButton);

  const filteredTodos = todos.filter((todo) => todo.checked === false);

  renderTodos(filteredTodos);
});

completedButton.addEventListener("click", () => {
  setActiveFilter(completedButton);

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

function setActiveFilter(activeButton) {
  const filterButtons = [allButton, todoButton, completedButton];

  filterButtons.forEach((button) => {
    button.classList.remove("todo-filters__button--active");
  });

  activeButton.classList.add("todo-filters__button--active");
}

function createTodo(todo) {
  const li = document.createElement("li");
  const checkInput = document.createElement("input");
  const title = document.createElement("span");
  const deleteButton = document.createElement("button");

  li.classList.add("todo-list__item");

  checkInput.type = "checkbox";
  checkInput.checked = todo.checked;
  checkInput.classList.add("todo-list__checkbox");

  title.textContent = todo.title;
  title.classList.add("todo-list__title");

  if (todo.checked) {
    title.style.textDecoration = "line-through";
  }

  deleteButton.textContent = "Delete";
  deleteButton.type = "button";
  deleteButton.classList.add("todo-list__delete");

  checkInput.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  checkInput.addEventListener("change", () => {
    toggleCheck(todo, checkInput.checked);
  });

  deleteButton.addEventListener("click", (e) => {
    e.stopPropagation();
    deleteTodo(todo.id);
  });

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

  todoEmptyState.hidden = todosToRender.length > 0;

  todosToRender.forEach((todo) => {
    createTodo(todo);
  });

  const hasTodos = todos.length > 0;

  markAllDoneButton.hidden = !hasTodos;
  clearAllButton.hidden = !hasTodos;
}

renderTodos();
