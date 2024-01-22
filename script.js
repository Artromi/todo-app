const btnAdd = document.getElementById("btn-add");
const textInput = document.getElementById("todo-input");
const btnRemove = document.getElementById("btn-remove");
const optionsAll = document.getElementById("all");
const optionsDone = document.getElementById("done");
const optionsOpen = document.getElementById("open");
const todoList = document.getElementById("todo-list");
//
// state
const state = localStorage.getItem("state")
  ? JSON.parse(localStorage.getItem("state"))
  : {
      todos: [{ description: "learn something", id: "default", done: false }],
    };
//
// call render function
renderElements();
//
// FUNCTIONS //
// render function
function renderElements(currentState = state.todos) {
  todoList.innerHTML = "";
  localStorage.setItem("state", JSON.stringify(state));
  // create elements
  for (const todo of currentState) {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    const itemLabel = document.createElement("label");
    // attributes/value for elements
    checkbox.type = "checkbox";
    checkbox.id = todo.id;
    checkbox.checked = todo.done;
    checkbox.addEventListener("change", function (e) {
      const doneState = e.target.checked;
      todo.done = doneState;
      updateLocalStorage();
    });

    itemLabel.textContent = " " + todo.description;
    itemLabel.setAttribute("for", todo.id);
    // append elements
    listItem.appendChild(checkbox);
    listItem.appendChild(itemLabel);
    todoList.appendChild(listItem);
  }
}
// add todo function
function addTodo(e) {
  e.preventDefault();
  let todoValue = textInput.value;
  if (!todoValue.trim()) {
    window.alert("add todo pls!");
    return;
  }
  const todoObj = {};
  todoObj.description = todoValue;
  todoObj.id = createId();
  todoObj.done = false;
  if (
    state.todos.findIndex(
      (todo) =>
        todo.description.toLowerCase().trim() === todoValue.toLowerCase().trim()
    ) === -1
  ) {
    state.todos.push(todoObj);
  } else {
    window.alert("todo is already in list!");
  }
  textInput.value = "";
  renderElements();
}
// createID function
function createId() {
  let date = Date().split(" ").slice(1, 5).join("-");
  return date;
}
// filter function
function filterDone() {
  const doneTodos = state.todos.filter((todo) => todo.done === true);
  renderElements(doneTodos);
}

function filterOpen() {
  const openTodos = state.todos.filter((todo) => todo.done === false);
  renderElements(openTodos);
}

function filterAll() {
  renderElements();
}

// remove function
function removeTodos(e) {
  e.preventDefault();
  const currentState = JSON.parse(localStorage.getItem("state"));
  const newArr = [];
  currentState.todos.forEach((todo) => {
    if (!todo.done) {
      newArr.push(todo);
    }
  });
  state.todos = newArr;
  updateLocalStorage();
  renderElements();
}
// Function to update local storage with the current state
function updateLocalStorage() {
  localStorage.setItem("state", JSON.stringify(state));
}
// EVENT LISTENER //
btnAdd.addEventListener("click", addTodo);
btnRemove.addEventListener("click", removeTodos);
optionsDone.addEventListener("change", filterDone);
optionsOpen.addEventListener("change", filterOpen);
optionsAll.addEventListener("change", filterAll);
