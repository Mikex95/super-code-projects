const text = "Sam is going to codingschool";
const text2 = "Susi"
const text3 = "programming bike"
const text4 = "and"

let resultOne = document.write(text.concat(" " +text4) + text2.replace("Susi"," to the movie theater"));
let resultTwo = document.write("<br>"+text.replace("codingschool", "movie theater"));
let resultThree = document.write("<br>" + text2.concat(" "+ text4 + " " + text).replace("is", "are"))
let resultFour = document.write("<br>" + text2.concat(" "+ text4 + " " + text).replace("is", "are").replace("codingschool", "gym and to the movie theater"))
let resultFive = document.write("<br>" + text.replace("Sam", "Susi") + " "+ text4 + text.replace("Sam is going to codingschool", " to the movie theater"))