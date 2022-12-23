//module importiert

const http = require("http");
const fs = require("fs")


// dynamische funktion erstellt, um die Dateien auszulesen und die Response zu schreiben(write)

function respondWithFile(fileName, response) {
    fs.readFile(fileName, (err, dataBuffer) => {
        if (err) {
            return response.end("<h1>Fehler, versuche es nocheinmal<h1/>"
            );
        }
        const fileString = dataBuffer.toString();
        response.write(fileString)
        response.end()
    })
}

const server = http.createServer((request, response) => {
console.log("neue request", request.url, request.method);

if (request.url === "/"  || request.url === "/index") {
    respondWithFile("pages/index.html", response);
} else if (request.url === "/contact") {
    respondWithFile("pages/contact.html", response)
} else if (request.url === "/about") {
    respondWithFile("pages/about.html", response)
} else if (request.url === "/faq") {
    respondWithFile("pages/faq.html", response)
} else {
    response.end("404 Not Found")
}
});


const PORT = 9000;
server.listen(PORT, () => console.log("server Port:", PORT));