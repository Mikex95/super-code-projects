function getInputValue() {
    event.preventDefault()
    const outputData = document.querySelector(".header-two");
    let age1 = document.querySelector(".age-input").value;
    let age2 = document.querySelector(".age-input2").value;

    console.log(age1 - age2);

    outputData.innerHTML = age1 - age2 * -1;
}