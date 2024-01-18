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
      todos: [{ description: "learn HTML", id: "default", done: false }],
    };
//
// call render function
renderElements();
//
// FUNCTIONS //
// renderElements function
function renderElements(currentStatus = state.todos) {
  todoList.innerHTML = "";
  for (const todo of currentStatus) {
    // create elements
    const listItem = document.createElement("li");
    const itemLabel = document.createElement("label");
    const checkbox = document.createElement("input");
    // attributes for elements
    checkbox.type = "checkbox";
    checkbox.id = todo.id;
    checkbox.checked = todo.done;
    // EventListener for changing done state
    checkbox.addEventListener("change", function (e) {
      const doneState = e.target.checked;
      todo.done = doneState;
      localStorage.setItem("state", JSON.stringify(state));
      if (todo.done === true) {
        itemLabel.classList.add("checked");
      }
      if (todo.done === false) {
        itemLabel.classList.remove("checked");
      }
    });
    itemLabel.textContent = " " + todo.description;
    itemLabel.setAttribute("for", todo.id);
    // append elements
    listItem.appendChild(checkbox);
    listItem.appendChild(itemLabel);
    todoList.appendChild(listItem);
  }
}
//
// addTodo function
function addTodo(e) {
  e.preventDefault();
  const todoValue = textInput.value;
  const todoObj = {};
  todoObj.description = todoValue;
  todoObj.id = createId();
  todoObj.done = false;
  state.todos.push(todoObj);
  localStorage.setItem("state", JSON.stringify(state));

  renderElements();
}
//
// createID function
function createId() {
  let date = Date().split(" ").slice(1, 5).join("-");
  return date;
}
//
// filter options
function filterDone() {
  const currentState = JSON.parse(localStorage.getItem("state"));
  const doneTodos = currentState.todos.filter((todo) => todo.done === true);
  renderElements(doneTodos);
}
function filterOpen() {
  const currentState = JSON.parse(localStorage.getItem("state"));
  const openTodos = currentState.todos.filter((todo) => todo.done === false);
  renderElements(openTodos);
}
function filterAll() {
  renderElements();
}
//
// remove function
function removeTodos(e) {
  e.preventDefault();
  const currentState = JSON.parse(localStorage.getItem("state"));
  const newArray = [];
  currentState.todos.forEach((todo) => {
    if (!todo.done) {
      newArray.push(todo);
    }
  });
  state.todos = newArray;
  localStorage.setItem("state", JSON.stringify(state));
  renderElements();
}
//
// EVENT LISTENER //
btnAdd.addEventListener("click", addTodo);
btnRemove.addEventListener("click", removeTodos);
optionsDone.addEventListener("change", filterDone);
optionsOpen.addEventListener("change", filterOpen);
optionsAll.addEventListener("change", filterAll);
