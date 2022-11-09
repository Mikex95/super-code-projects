let button = document.getElementById('navChange');
let elements = document.getElementsByTagName('li');
let aTags = document.getElementsByTagName('a');

console.log(elements);

button.addEventListener('click', function(){
    elements[0].style.backgroundColor = "#f6c89f"
    elements[1].style.backgroundColor = "#ffe7d1"
    elements[2].style.backgroundColor = "#396362"
    for (let i = 0; i <= aTags.length; i++){
    aTags[i].style.color = 'black';
}   

})