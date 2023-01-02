const http = require("http")
const fs = require("fs")


const readFileData = (fileName, response) => {
    fs.readFile(fileName, (err, dataBuffer)=> {
        if (err) {
            response.end("Läuft nicht")
        } else {
            response.write(dataBuffer)
            response.end()
        }
    })
}


const server = http.createServer((request, response) => {
    console.log("server request:", request.url, request.method);

    const resource = request.url === "/" ? "/home" : request.url
    const filePath = resource.includes(".") 
    ? `assets/pages${resource}`
    : `assets/pages${resource}.html`;
    readFileData(filePath, response)
})
const PORT = 5555;
server.listen(PORT, console.log("Server hört auf Port:" + PORT));