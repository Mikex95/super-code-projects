
let type =parseInt(prompt("Bitte Nummer eingeben!"));



const randomNumber = function(){
    let random = Math.floor(Math.random() * 10) + 1;
    console.log(random);
    console.log(type);
    if (type < random || type > random) {
        console.log("you loose, the number was: " + random);
    } else if (type == random){
        console.log("you won!");
    }
       
    }

randomNumber()