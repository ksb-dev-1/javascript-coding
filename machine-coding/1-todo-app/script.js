const addTodoForm = document.querySelector("#add-todo-form");
const input = document.querySelector("#input");
const todoList = document.querySelector("#todo-list");
const searchTodoForm = document.querySelector("#search-todo-form");

const todos = getTodos();

function getTodos() {
  const savedTodos = localStorage.getItem("todos");

  return savedTodos ? JSON.parse(savedTodos) : [];
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(text) {
  const title = text.trim();

  if (!title) return;

  const isTodoExists = todos.some(
    (todo) => todo.title.toLowerCase() === title.toLowerCase(),
  );

  if (isTodoExists) {
    alert("Todo already exists!");
    return;
  }

  const todo = {
    id: Date.now(),
    title,
    checked: false,
  };

  todos.push(todo);
  saveTodos();
  renderTodos();
}

function deleteTodo(todoId, li) {
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);

  if (todoIndex === -1) return;

  todos.splice(todoIndex, 1);
  saveTodos();
  renderTodos();
}

function toggleCheck(todo, isChecked) {
  todo.checked = isChecked;
  saveTodos();
}

function addToList(todo) {
  const li = document.createElement("li");
  const checkInput = document.createElement("input");
  const title = document.createElement("span");
  const deleteButton = document.createElement("button");

  checkInput.type = "checkbox";
  checkInput.checked = todo.checked;

  title.textContent = todo.title;
  deleteButton.textContent = "Delete";

  checkInput.addEventListener("change", () => {
    toggleCheck(todo, checkInput.checked);
  });

  deleteButton.addEventListener("click", () => {
    deleteTodo(todo.id, li);
  });

  li.append(checkInput, title, deleteButton);
  todoList.append(li);
}

function renderTodos(todosToRender = todos) {
  todoList.innerHTML = "";

  todosToRender.forEach((todo) => {
    addToList(todo);
  });
}

addTodoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  addTodo(input.value);

  input.value = "";
  input.focus();
});

searchTodoForm.addEventListener("keyup", (event) => {
  const searchText = event.target.value.trim().toLowerCase();

  const filteredTodos = todos.filter((todo) => {
    return todo.title.toLowerCase().includes(searchText);
  });

  renderTodos(filteredTodos);
});

renderTodos();
