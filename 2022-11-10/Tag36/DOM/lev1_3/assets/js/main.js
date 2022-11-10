let list = document.getElementsByTagName('li');
let buttons = document.querySelectorAll('button');
let output = document.getElementById("output");
console.log(buttons);
console.log(list);
console.log(document.body.firstElementChild);

buttons[0].addEventListener('click', function(){
    output.innerHTML = document.body.firstElementChild.children[0].innerText;
});

buttons[1].addEventListener('click', function(){
    output.innerHTML = document.body.firstElementChild.lastElementChild.innerText;
});

buttons[2].addEventListener('click', function(){
    output.innerHTML = document.body.firstElementChild.firstElementChild.nextElementSibling.innerText;
});

buttons[3].addEventListener('click', function(){
    output.innerHTML = document.body.firstElementChild.lastElementChild.previousElementSibling.innerText;
});