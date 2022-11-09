let button = document.getElementById('clickMe');
let counter = document.getElementById('counter');
let clicksCounter = 0

button.addEventListener('click', function(){
    clicksCounter += 1
    counter.innerHTML = clicksCounter;
})