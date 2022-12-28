const express = require("express")
const fs = require("fs")

const app = express()
const API = [{
    "name": "Mike",
    "age" : 27,
    "street" : "Willmen " + 4 ,
},
{
    "name": "Isabell",
    "age" : 29,
    "street" : "Bertoldsplatz " + 1 + " A",
}]

app.use((req, res, next) => {
    console.log("Request:", req.url, req.method);
    next();
})
app.use(express.static("views", {extensions: ['html']}))


app.get("/", (req, res) => {
    fs.readFile("./views/home.html", (err, dataBuffer) => {
        if (err) {
            throw err
        } 
        res.write(dataBuffer)
        res.end()
    })
}) 


app.get("/api/:id", (req, res) => {
    const apiId = Number(req.params.id)
    console.log(req.params.id);
    const testId = API[apiId] || {};
    res.status(testId ? 200 : 204).json(testId)
})
const PORT = 5000;
app.listen(PORT, console.log("Server hört auf port " + PORT))