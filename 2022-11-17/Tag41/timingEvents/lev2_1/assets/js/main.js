

let count = document.getElementById('count');
let text = document.querySelector('.message')

let counter = 9;

window.onload = function(){
    let interval = setInterval(() => {
        console.log(counter);
        count.innerHTML = "0" + counter--
        if (counter === -1) {
            clearInterval(interval);
            text.classList.add("hidden");
        }
    }, 1000);
}