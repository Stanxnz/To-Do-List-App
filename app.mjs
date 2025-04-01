console.log("APP");

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let thingsYouNeedToDo = [];

document.addEventListener("DOMContentLoaded"), () => {
    const savedThingsYouNeedToDo = localStorage.getItem("Things to do");
    if (savedThingsYouNeedToDo){
        thingsYouNeedToDo = JSON.parse(savedThingsYouNeedToDo);
        thingsYouNeedToDo.forEach((thingsYouNeedToDo) => addThingsYouNeedToDoToDOM(thingsYouNeedToDo));
            
     }
    };

function saveThingsYouNeedToDo() {
    localStorage.setItem("Things to do", JSON.stringify(thingsYouNeedToDo));
}

function generateId(){
    return Date.now();
}

function addThingsYouNeedToDoToDOM(thingsYouNeedToDo){
    const listItem = document.createElement("List item");
    listItem.setAttribute("data-id", thingsYouNeedToDo.id);
}