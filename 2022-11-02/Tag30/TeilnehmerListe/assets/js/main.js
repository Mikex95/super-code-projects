const inputField = document.getElementById("text-input");
const ul = document.querySelector("ul");
const submitButton = document.querySelector(".submit-btn");
const reverseButton = document.querySelector(".reverse-btn");
const listArray = [];
let listString = "";

function onSubmit(event){
    event.preventDefault();
    let input = `<li>${inputField.value}</li>`;
    listArray.push(input);
    getList();
}

function onReverse(event){
    event.preventDefault();
    listArray.pop();
    getList();
}

function getList(){
    listString = listArray.toString();
    listString = listString.replaceAll(",","");
    ul.innerHTML = listString;
}