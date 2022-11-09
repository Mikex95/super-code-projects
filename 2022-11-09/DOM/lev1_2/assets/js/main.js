let superDiv = document.getElementsByClassName('example');
let superDiv2 = document.getElementsByClassName('example2');
console.log(superDiv);

function myFunction(event){
    event.preventDefault();
    for (let i = 0; i <= superDiv.length; i++){
    superDiv[i].style.backgroundColor = 'black';
    superDiv[i].style.color = 'white';
    }
}