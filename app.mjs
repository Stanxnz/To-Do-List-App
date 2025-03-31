console.log("APP");

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let thingsYouNeedToDo = [];

document.addEventListener("StorageLoaded"), () => {
    const savedThingsYouNeedToDo = localStorage.getItem("Things to do");
    if (savedThingsYouNeedToDo){
        thingsYouNeedToDo = JSON.parse(savedThingsYouNeedToDo);
        thingsYouNeedToDo.forEach((thingsYouNeedToDo) => addThingsYouNeedToDoToStorage(thingsYouNeedToDo));
            
     }
    };

function saveThingsYouNeedToDo() {
    localStorage.setItem(JSON.stringify(thingsYouNeedToDo));
}

function addThingsYouNeedToDoToStorage(thingsYouNeedToDo){
    const listItem = document.createElement("List item");
    listItem.setAttribute("data-id", thingsYouNeedToDo.id);
}