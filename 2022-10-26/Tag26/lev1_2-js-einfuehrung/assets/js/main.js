
function changeMe(event) {
    event.preventDefault();

    const inputValue = document.getElementById('text-input').value;

    const backgroundCol = document.getElementById("wrapper");
    
    backgroundCol.style.backgroundColor = inputValue;
}