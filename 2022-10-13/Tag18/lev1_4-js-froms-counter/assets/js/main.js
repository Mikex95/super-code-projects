const text = document.querySelector(".header-two");
let count = 0;

function plusOne() {
    count += 1;
    console.log(count);
    text.innerHTML = count;
}

function minusOne() {
    count -= 1;
    console.log(count);
    text.innerHTML = count;
}

function plusTen () {
    count += 10;
    console.log(count);
    text.innerHTML = count;
}

function minusTen () {
    count -= 10;
    console.log(count);
    text.innerHTML = count;
}

function plusHundred () {
    count += 100;
    console.log(count);
    text.innerHTML = count;
}

function minusHundred () {
    count -= 100;
    console.log(count);
    text.innerHTML = count;
}

function reset() {
    count = 0;
    text.innerHTML = count;
}

function multiTwo() {
    count *= 2;
    text.innerHTML = count;
}