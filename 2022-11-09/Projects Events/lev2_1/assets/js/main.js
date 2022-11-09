let gray = document.getElementById('grauTaste');
let weiss = document.getElementById('weissTaste');
let blau = document.getElementById('blauTaste');
let gelb = document.getElementById('gelbTaste');
let selected = document.getElementById('umschalter');

gray.addEventListener('click', function(){
    document.body.style.backgroundColor = 'gray'
})
weiss.addEventListener('click', function(){
    document.body.style.backgroundColor = 'white'
})

blau.addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue'
})

gelb.addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow'
})