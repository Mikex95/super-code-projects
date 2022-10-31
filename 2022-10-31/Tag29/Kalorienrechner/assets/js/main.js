const heightInput = document.getElementById("height-input");
const ageInput = document.getElementById("age-input");
const weightInput = document.getElementById("weight-input");
const femaleInput = document.getElementById("radio-female");
const maleInput = document.getElementById("radio-male");
const activityInput = document.getElementById("activity");
const grundKcal = document.getElementById("grund-umsatz-kcal");
const grundKj = document.getElementById("grund-umsatz-kj");
const gesamtKcal = document.getElementById("gesamt-umsatz-kcal");
const gesamtKj = document.getElementById("gesamt-umsatz-kj");
const submitButton = document.getElementById("submit-button")
const infoText = document.getElementById("information");


submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    if (weightInput.value == "" || heightInput.value == "" ||         ageInput.value == "") {
        infoText.innerHTML = "Bitte Wert eingeben!";
        resultInputGrund.innerHTML = 0;
}
    if (maleInput.checked == true) {
   
    const resultInputGrund = 664.7 + (13.7 * weightInput.value) + (5 * heightInput.value) - (6.8 * ageInput.value);

    const resultInputGrundKj = resultInputGrund * 4.1868;
    grundKcal.innerHTML = resultInputGrund;
    grundKj.innerHTML = resultInputGrundKj.toFixed(2);


    const outPutGesamtKcal = resultInputGrund * activityInput.value;
    gesamtKcal.innerHTML = outPutGesamtKcal;
    const resultKjgesamt = outPutGesamtKcal * 4.1868;
    gesamtKj.innerHTML = resultKjgesamt.toFixed(2);
}   
    else if (femaleInput.checked == true) {
        const resultInputGrundFemale = 655.1 + (9.6 * weightInput.value) + (1.8 * heightInput.value) - (4.7 * ageInput.value);
        grundKcal.innerHTML = (resultInputGrundFemale.toFixed(2));

        const resultKjGrund = resultInputGrundFemale * 4.1868;
        grundKj.innerHTML = resultKjGrund.toFixed(2);

        const outPutGesamtKcal = resultInputGrundFemale * activityInput.value;
        gesamtKcal.innerHTML = outPutGesamtKcal;
        const resultKjgesamt = outPutGesamtKcal * 4.1868;
        gesamtKj.innerHTML = resultKjgesamt.toFixed(2);
}  
})