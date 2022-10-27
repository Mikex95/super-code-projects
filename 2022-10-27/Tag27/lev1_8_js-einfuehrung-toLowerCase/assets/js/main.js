const text = "Sam is going to codingschool";

let resultOne = document.write(text.toUpperCase());
let resultTwo = document.write("<br>"+text.toLowerCase().replace("to", "at"));
let resultThree = document.write("<br>"+text.toUpperCase().slice(0,3)+ " " + text.toLowerCase().slice(4,16)+text.toUpperCase().slice(15,30));
let resultFour = document.write("<br>"+text.toLowerCase().slice(0,3)+ " " + text.toUpperCase().slice(4,16)+text.toLowerCase().slice(15,30));
let resultFive = document.write()