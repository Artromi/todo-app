const optionAll = document.getElementById("all");
const optionOpen = document.getElementById("open");
const optionDone = document.getElementById("done");
const btnRemove = document.getElementById("btn-remove");
const btnAdd = document.getElementById("btn-add");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
// list state
const state = {
  todos: [
    { description: "Learn driving a car", done: false, id: 1 },
    { description: "Learn CSS", done: true, id: 2 },
  ],
};
createTodo();
// todos aus dem state im HTML erstellen
function createTodo() {
  for (const item of state.todos) {
    // list item
    const listItem = document.createElement("li");
    // input
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = item.id;
    checkbox.checked = item.done;
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

// get the input value
btnAdd.addEventListener("click", function (event) {
  event.preventDefault();
  const todoValue = document.getElementById("todo-input").value;
  console.log(todoValue.trim());
});

// remove button (just when todo is done!)
btnRemove.addEventListener("click", function (event) {
  event.preventDefault();
  todoList.innerHTML = "";
});
