const optionAll = document.getElementById("all");
const optionOpen = document.getElementById("open");
const optionDone = document.getElementById("done");
const btnRemove = document.getElementById("btn-remove");
const btnAdd = document.getElementById("btn-add");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
// state
let state;
if (localStorage.getItem("state")) {
  state = JSON.parse(localStorage.getItem("state"));
} else {
  state = {
    todos: [{ description: "Learn CSS", done: false, id: 1 }],
  };
}
//
createTodo();
//
// todos aus dem state im HTML erstellen
function createTodo() {
  todoList.innerHTML = "";
  for (const item of state.todos) {
    // create list item
    const listItem = document.createElement("li");
    // create input element (checkbox)
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = item.id;
    checkbox.checked = item.done;
    // update done state
    checkbox.addEventListener("change", (event) => {
      const doneState = event.target.checked;
      item.done = doneState;
      // new local storage state
      localStorage.setItem("state", JSON.stringify(state));
    });
    // label
    const listLabel = document.createElement("label");
    listLabel.textContent = " " + item.description;
    listLabel.setAttribute("for", item.id);
    // append
    listItem.appendChild(checkbox);
    listItem.appendChild(listLabel);
    todoList.appendChild(listItem);
  }
}

// add todos
function addTodos(e) {
  e.preventDefault();
  const todoValue = todoInput.value;
  // create object for state
  const newTodo = {};
  newTodo.description = todoValue;
  newTodo.done = false;
  newTodo.id = createDateId();
  state.todos.push(newTodo);
  // save in local storage
  localStorage.setItem("state", JSON.stringify(state));

  createTodo();
}
btnAdd.addEventListener("click", addTodos);
//
// create Id
function createDateId() {
  let date = Date().split(" ").slice(1, 5).join("-");
  return date;
}

// In Arbeit ->
// filter options
optionAll.addEventListener("change", function (e) {});
// remove todos when done: true
btnRemove.addEventListener("click", function (event) {
  event.preventDefault();
  for (let item of state.todos) {
    if (item.done === true) {
    }
  }
});
