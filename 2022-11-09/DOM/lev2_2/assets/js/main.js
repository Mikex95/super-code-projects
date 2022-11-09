let vorname = document.getElementById("vorname");
let nachname = document.getElementById("nachname");
let land = document.getElementById("land");
let submit = document.getElementById("btn");

submit.addEventListener('click', function(){
    console.log(`My name is: ${vorname.value} ${nachname.value} and im from ${land.value}`);
})
