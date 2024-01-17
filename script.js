const btnAdd = document.getElementById("btn-add");
const textInput = document.getElementById("todo-input");
const btnRemove = document.getElementById("btn-remove");
const optionsAll = document.getElementById("all");
const optionsDone = document.getElementById("done");
const optionsOpen = document.getElementById("open");
const todoList = document.getElementById("todo-list");
//
// state
let state = {
  todos: [{ description: "learn HTML", id: "one", done: false }],
};
// localStorage.setItem("state", JSON.stringify(state));
//
// call render function
renderElements();
//
// FUNCTIONS //
// renderElements function
function renderElements() {
  todoList.innerHTML = "";
  for (const todo of state.todos) {
    // create elements
    const listItem = document.createElement("li");
    const itemLabel = document.createElement("label");
    const checkbox = document.createElement("input");
    // attributes for elements
    checkbox.type = "checkbox";
    checkbox.id = todo.id;
    checkbox.checked = todo.done;
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
// EVENT LISTENER //
btnAdd.addEventListener("click", addTodo);

////
