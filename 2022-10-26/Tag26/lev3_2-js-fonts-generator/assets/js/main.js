let output = document.querySelector("#output-text");
function getSize(){
    let getFontSize = document.querySelector(".get-size").value;
    output.style.fontSize = getFontSize + "px";
}

function getFonts(){
    let getFontFamily = document.querySelector(".get-fonts").value;
    output.style.fontFamily = getFontFamily;
}

function getText() {
    let getText = document.querySelector(".input").value;
    output.innerHTML = getText;
}