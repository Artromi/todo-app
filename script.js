const radioAll = document.getElementById("all");
const radioOpen = document.getElementById("open");
const radioDone = document.getElementById("done");
const btmRemove = document.getElementById("btn-remove");
const btnAdd = document.getElementById("btn-add");
const todoInput = document.getElementById("todo-input");

const todoList = document.getElementById("todo-list");
// list state
let todos = {};
// create and append list element with input(checkbox) & label
const listItem = document.createElement("li");
todoList.appendChild(listItem);

const checkbox = document.createElement("input");
checkbox.setAttribute("type", "checkbox"); // unique name and for label ?
listItem.appendChild(checkbox);

const todoLabel = document.createElement("label");
todoLabel.setAttribute("for", "checkbox"); // unique name and for label ?
listItem.appendChild(todoLabel);

todoLabel.textContent = "go for a walk";
listItem.setAttribute("id", "todo"); // should uniquely identify the todo

// get the input value
btnAdd.addEventListener("click", function (event) {
  event.preventDefault();
  const todoValue = document.getElementById("todo-input").value;
  console.log(todoValue);
});
