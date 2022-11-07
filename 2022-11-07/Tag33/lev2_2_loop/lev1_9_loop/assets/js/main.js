let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']

let textInput = document.getElementById("number-input");
let output = document.getElementById("output");
let button = document.getElementById("btn");

const myFunction = (event) => {
    event.preventDefault();
    console.log(Number(textInput.value));

    const result = words.filter(word => word.length == Number(textInput.value));
    output.innerHTML = result; 
}

