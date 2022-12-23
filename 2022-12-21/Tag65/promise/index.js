// Löse das LinesOfCodeTool mit Promises

const fs = require("fs");

//Oderner öffnen -> alle dateien -> alles js Dateien
//Jede einzelne Datei einlesen -> inhalt -> zeilen
//alle zeilen zusammenaddieren

function getJsFiles () {
    //read dir
    //filter js files
    return new Promise ((resolve, reject) => {
    fs.readdir(".", (error, files) => {
        if (error) {
            reject(error);
        } else {
        const jsFiles = files.filter((fileName) => fileName.endsWith(".js"));
        resolve(jsFiles);
    }}) 
});
}

// getJsFiles().then((jsFiles) => console.log(jsFiles));

function getLinesOfCode(fileName){
    //read file
    //calc lines of code
    return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, dataBuffer)=> {
        if (err) {
            reject(err)
        } else {
        const dataString = dataBuffer.toString();
        const lines = dataString.split("\n")
        resolve(lines)
    }
    })
})
}

function sum(linesArray) {
    // return sum
    return linesArray.reduce((sum, linesOfCode) => sum + linesOfCode, 0);
}

getJsFiles()
.then((jsFiles) => {
  const jsFilesPromises = jsFiles.map((jsFileName) => 
  getLinesOfCode(jsFileName)
  )
  return Promise.all(jsFilesPromises);
})
.then((linesOfCodeArray) => sum(linesOfCodeArray))
.then((totalLinesOfCode) => {
    console.log("Total Lines of Code", totalLinesOfCode);
})







// function readFileName(filename) {
//     return new Promise((resolve, reject) => {
//        fs.readFile(filename, (err, buffer)=> {
//         if (err) {
//             reject(err);
//         } else {
//             resolve(buffer)
//         }
//        })
//     })
// }

// readFileName("package.json")
// .then((buffer) => {
//     const bufferToString = buffer.toString()
//     const bufferToObject = JSON.parse(bufferToString)
//    return bufferToObject.main;
// })
// .then((fileName) => (readFileName(fileName)))
// .then((bufferFileName) => {
//     const bufferFileNameToString = bufferFileName.toString()
//     const lines =  bufferFileNameToString.split("\n")
//     const linesPackage = lines.length
//     return console.log(linesPackage);
// })
// .catch(err => {
//     console.log(err);
// });