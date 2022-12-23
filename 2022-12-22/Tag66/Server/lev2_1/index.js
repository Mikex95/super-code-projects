const http = require("http");
const fs = require("fs");

// files auslesen

function readFileData(fileName, response) {
    fs.readFile(fileName, (err, dataBuffer) => {
        if (err) {
           return response.end("<h1> Ein Fehler ist beim lesen der Datei aufgetreten </h1>");
        } 
            const bufferToString = dataBuffer.toString()
            response.write(bufferToString);
            response.end()
    });
}

const server = http.createServer((request, response) => {
    if (request.url === "/" || request.url === "/home") {
        readFileData("pages/home.html", response)
    }   else if (request.url === "/about"){
        readFileData("pages/about.html", response)
    }   else if (request.url === "/contact"){
        readFileData("pages/contact.html", response)
    }   else if (request.url === "/faq"){
        readFileData("pages/faq.html", response)
        
    }  else if (request.url === "/style.css"){
        readFileData("pages/style.css", response)

    } else {
        response.end("not Found")
    }
})


const PORT = 9001

server.listen(PORT, () => console.log("Server Listening Port :" + PORT))