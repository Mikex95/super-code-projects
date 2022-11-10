let select = document.getElementById('farbeAuswahlen');
let button = document.getElementById('button');
let list = document.getElementsByTagName('option');
console.log(list);


button.addEventListener('click', function(event){
    event.preventDefault()
    select.remove(select.value);
})

