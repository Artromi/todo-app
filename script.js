const radioAll = document.getElementById("all");
const radioOpen = document.getElementById("open");
const radioDone = document.getElementById("done");
const btmRemove = document.getElementById("btn-remove");
const btnAdd = document.getElementById("btn-add");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
// list state
let todos = [];
// create and append list element
const newTodo = document.createElement("li");
newTodo.textContent = "go for a walk";
todoList.appendChild(newTodo);
const checkbox = document.createElement("input");
checkbox.setAttribute("type", "checkbox");
newTodo.appendChild(checkbox);
