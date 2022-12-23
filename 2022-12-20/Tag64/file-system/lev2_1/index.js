const fs = require("fs");
const { data } = require("./data.json")

const file = fs.readFileSync("data.json")

const fileToString = file.toString()
const dataString = JSON.parse(fileToString)
const string = JSON.stringify(dataString, null, 2).replace(/\"\w+\":/g, "")
const removeCurly = string.slice(1, -1);
const removeBrackets = removeCurly.slice(2, -1);


fs.writeFileSync("newFiles.txt", removeBrackets)

console.log(typeof string);


