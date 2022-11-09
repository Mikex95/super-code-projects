let selected = document.getElementById('farbeAuswahlen');
let button = document.getElementById('button');

button.addEventListener('click', function(event){
    event.preventDefault();
    document.body.style.backgroundColor = selected.value.replace(" ","")
    
})

console.log(selected.value);