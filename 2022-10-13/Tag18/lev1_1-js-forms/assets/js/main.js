function getInputValue() {
    event.preventDefault();
    const outputData = document.querySelector("h2");
    const num = document.querySelector(".number-input").value;

    let multiplicator = (2)

    console.log(num * multiplicator);

    outputData.innerHTML = num * multiplicator;
}