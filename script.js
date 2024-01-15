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
createTodo();
// todos aus dem state im HTML erstellen
function createTodo() {
  todoList.innerHTML = "";
  for (const item of state.todos) {
    // list item
    const listItem = document.createElement("li");
    // input
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = item.id;
    checkbox.checked = item.done;
    // eventlistener for checkbox (update done state)
    checkbox.addEventListener("change", (event) => {
      const doneState = event.target.checked;
      item.done = doneState;
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

  const newTodo = {};
  newTodo.description = todoValue;
  newTodo.done = false;
  newTodo.id = createId(todoValue);
  state.todos.push(newTodo);
  // save in local storage
  localStorage.setItem("state", JSON.stringify(state));

  createTodo();
}
btnAdd.addEventListener("click", addTodos);

// create Id function
function createId(input) {
  return input.replaceAll(" ", "").toLowerCase();
}
// get the input value

// remove button (just when todo is done!)
btnRemove.addEventListener("click", function (event) {
  event.preventDefault();
  todoList.innerHTML = "";
});
