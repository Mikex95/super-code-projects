const http = require("http");
const fs = require("fs")

function readFileData(fileName, response){
    fs.readFile(fileName, (err, dataBuffer) => {
        if (err) {
          return response.end("Versuche es später nochmal")
        }
        const bufferToString = dataBuffer.toString()
        response.write(bufferToString)
        response.end();
    })
}

const server = http.createServer((request, response) => {
    console.log("neue Request:", request.url, request.method);
    if (request.url === "/" || request.url === "/home") {
        readFileData("assets/pages/home.html", response)
    }else if (request.url === "/about"){
        readFileData("assets/pages/about.html", response)
    }else if (request.url === "/how-it-works"){
        readFileData("assets/pages/how-it-works.html", response)
    }else if (request.url === "/categories"){
        readFileData("assets/pages/categories.html", response)
    }else if (request.url === "/testimony"){
        readFileData("assets/pages/testimony.html", response)
    }else if (request.url === "/style/style.css"){
        readFileData("assets/pages/style/style.css", response)
    }else {
        response.end("Fehler 404")
    }
})

const PORT = 9002;
server.listen(PORT, console.log("Der Port lautet:" + PORT));