let numArr = [5, 22, 15, 100, 55];
let output = document.getElementById("output");
console.log(numArr);

numArr.forEach((elt) => {
    for (let i = 2; i < elt; i++){
        if (elt % i == 0) {
            output.innerHTML += `${elt} lässt sich durch 2 teilen! Das Ergebnis ist ${elt / i} <br>`
        }
    }
});
