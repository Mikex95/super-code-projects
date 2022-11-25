let button = document.getElementById('btn');
let timer = document.querySelector('.zeit');

let counter = 99


button.addEventListener('click', function(){
    let countdown = setInterval(function(){
        console.log(counter);
        timer.innerHTML = counter-- +"%"
        if (counter === -1) {
            console.log("finished");
            clearInterval(countdown)
        }
    }, 100)
})