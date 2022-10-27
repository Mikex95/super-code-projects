function resultPoints(event){
    event.preventDefault();

    let ageJohn = Number(document.getElementById("age-input-john").value);
    let heightJohn = Number(document.getElementById("height-input-john").value);

    let ageMeike = Number(document.getElementById("age-input-meike").value);
    let heightMeike = Number(document.getElementById("height-input-meike").value);

    let resultJohn = ageJohn * 5 + heightJohn;
    let resultMeike = ageMeike * 5 + heightMeike;

    if (resultJohn < resultMeike){
        document.querySelector("h1").innerHTML = "Meike hat gewonnen!";
    } else if (resultJohn === resultMeike){
        document.querySelector("h1").innerHTML = "Unentschieden";
    } 

    document.querySelector(".john-answer").innerHTML = "John hat = " + resultJohn + " Punkte" ;
    document.querySelector(".meike-answer").innerHTML = "Meike hat = " + resultMeike + " Punkte" ;
}