let button = document.getElementById("btn");
let counter = 0;
let divCounter = 0;

button.addEventListener('click', function(){
    if (counter == 0) {
    addingOrangeBox()
    counter++;
    divCounter = 0;
    divCounter++;
    }
    else if (divCounter <= 9 && counter >= 1) {
    addingBlueBox();
    divCounter++;
    counter++;
    console.log(divCounter);

}   else if (divCounter == 10 || counter <= 0){
    addingOrangeBox()
    counter++;
    divCounter = 0;
    divCounter++;
    
} else if (divCounter >= 10){
    counter++;
    divCounter = 0;
}})

function addingOrangeBox(){
    let div = document.createElement('div');
    div.classList.add('weiss');
    let text = document.createTextNode(counter);
    div.appendChild(text);
    document.body.firstElementChild.nextElementSibling.appendChild(div);
}

function addingBlueBox(){
    let div = document.createElement('div');
    div.classList.add('rechteck');
    let text = document.createTextNode(counter);
    div.appendChild(text);
    document.body.firstElementChild.nextElementSibling.appendChild(div);
}