const nettoBrutto = document.getElementById("netto-brutto");
const bruttoNetto = document.getElementById("brutto-netto");
const taxPercentHigh = document.getElementById("percent-19");
const taxPercentLow = document.getElementById("percent-7");
const inputField = document.getElementById("input-number");
const inputNumber = document.getElementById("input-number-label");


const taxResult = document.querySelector(".resultTaxOnly");
const bruttoResult = document.querySelector(".resultBrutto");
const nettoResult = document.querySelector(".changeTag");


const sevenPercent = 7 ;
const nineteenPercent = 19 ; 

const changeClickTwo = (event) => {
    event.preventDefault();
    if (nettoBrutto.checked == true) {
        inputNumber.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro";
        nettoResult.innerHTML = "Bruttobetrag (Endpreis)";
    } 
}

const changeClick = (event) => {
    event.preventDefault();
    if (bruttoNetto.checked == true){
        inputNumber.innerHTML = "Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro";
        nettoResult.innerHTML = "Nettobetrag";
    } 
}

const myFunction = (event) => {
    event.preventDefault();

    if (nettoBrutto.checked == true && taxPercentHigh.checked == true) {
        ergebnisSteuer = inputField.value / 100 * nineteenPercent;
        taxResult.innerHTML = ergebnisSteuer.toFixed(2) + "€";
        
        ergebnisBrutto = inputField.value * 1.19;
        bruttoResult.innerHTML = ergebnisBrutto.toFixed(2) + "€"; 

    } else if (nettoBrutto.checked == true && taxPercentLow.checked == true) {
        ergebnisSteuerLow = inputField.value / 100 * sevenPercent;
        taxResult.innerHTML = ergebnisSteuerLow.toFixed(2) + "€"

        ergebnisBruttoLow = inputField.value * 1.07;
        bruttoResult.innerHTML = ergebnisBruttoLow.toFixed(2) + "€"; 
    } else if (bruttoNetto.checked == true && taxPercentHigh.checked ==true){
        ergebnisSteuerBetrag = inputField.value / 119 * 19; 
        taxResult.innerHTML = ergebnisSteuerBetrag.toFixed(2);

        ergebnisSteuerNetto = inputField.value / 119 * 100;
        bruttoResult.innerHTML = ergebnisSteuerNetto.toFixed(2);
    } else if (bruttoNetto.checked == true && taxPercentLow.checked == true){
        ergebnisSteuerLow = inputField.value / 107 * 7;
        taxResult.innerHTML = ergebnisSteuerLow.toFixed(2);

        ergebnisSteuerHigh = inputField.value / 107 * 100;
        bruttoResult.innerHTML = ergebnisSteuerHigh.toFixed(2);
    }
}
