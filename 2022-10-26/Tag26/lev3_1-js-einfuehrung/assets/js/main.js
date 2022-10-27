const boxOne = document.querySelector(".child1");
const boxTwo = document.querySelector(".child2");
const boxThree = document.querySelector(".child3");
const boxFour = document.querySelector(".child4");

const headerColor = document.querySelector(".header-color");

boxOne.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = "rgb(21,196,38)"
    document.body.style.color= "rgba(143,0,231,1)";
}); 

boxTwo.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = "rgb(52,30,62)";
    document.body.style.color= "rgba(226,231,0,1)";
}); 

boxThree.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = "rgb(0,0,0)";
    document.body.style.color= "rgba(231,128,0,1)";
}); 

boxFour.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = "rgb(8,0,93)";
    document.body.style.color= "rgba(0,218,231,1)";
}); 