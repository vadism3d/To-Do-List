let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let todos = JSON.parse(localStorage.getItem("list_todos")) || [];
function readerTodos(){
    listElement.innerHTML = "";
    for(todo of todos){
        let todoElement = document.createElement("li");
        let todoText = document.createTextNode(todo);

        let linkElement = document.createElement("a");
        linkElement.setAttribute("href","#");
        let pos = todos.indexOf(todo);
        linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");

        let linkText = document.createTextNode("done");
        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

readerTodos();

function addTodo(){
    let todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = "";
    readerTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos,1);
    readerTodos();
    saveToStorage();
}

function saveToStorage(){
    localStorage.setItem("list_todos", JSON.stringify(todos));
}