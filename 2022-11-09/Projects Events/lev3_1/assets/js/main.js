let count = 0;
let output = document.getElementById('demo');
let rangeRed = document.getElementById('rot');
let rangeGreen = document.getElementById('grun');
let rangeBlue = document.getElementById('blau');


function changeBackground(e) {
    console.log(e);
    document.body.style.backgroundColor = e.replace(" ","");
}
function changeHandle(){
    document.body.style.backgroundColor = 'rgb(' + rangeRed.value + ',' + rangeGreen.value + ',' + rangeBlue.value + ')';
    console.log(rangeRed.value); 
    changeText();
}

function changeText(){
    let textRGB = 'rgb(' + rangeRed.value + ',' + rangeGreen.value + ',' + rangeBlue.value + ')';
    
    output.innerHTML = textRGB; 
}