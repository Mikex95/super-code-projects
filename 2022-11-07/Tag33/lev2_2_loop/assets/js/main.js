let inputText = document.getElementById("input-field");
let button = document.getElementById("btn");
let output = document.getElementById("h2");

let array = [];
let leer = "";
let txt = "Lop"

function clickMe() {
    addLetters();
    output.innerHTML = txt.replaceAll("o", leer);
}

function addLetters() {
    leer = "";
    for (let i = 1 ; i <= 1 ; i++){
    for (let j = 1; j <= Number(inputText.value) ; j++){
        console.log(j);
        leer += "o";
    }
}}

console.log(array);
