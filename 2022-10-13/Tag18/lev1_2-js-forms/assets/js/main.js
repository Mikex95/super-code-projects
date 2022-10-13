
function getInputValue() {
    event.preventDefault();
    const outputData = document.querySelector("h1");
    const birthDate = document.querySelector(".age-input").value;

    let year = (2022)

    console.log(year - birthDate)

    outputData.innerHTML = year - birthDate;
}