let userInput = document.getElementById('userinput');
let submit = document.getElementById('enter');
let list = document.getElementsByTagName('li');
let currentUl = document.getElementById('ul');
let warning = document.getElementById('warning-output');

console.log(list);

submit.addEventListener('click', function(){
    if (userInput.value == false) {
        warning.innerHTML = 'Bitte Wert eingeben!'
    } else {
        const newLi = document.createElement("li");
        newLi.innerText = userInput.value;
        currentUl.appendChild(newLi);
        console.log(newLi);
    }

    userInput.value = "";

})

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      submit.click();
    }
  });

  function removeElements(){
    currentUl.removeChild(currentUl.firstElementChild);
  }