const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const cors = require("cors")
const morgan = require("morgan")
const { getDB } = require("./getDB")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(morgan("dev"))


app.get("/" , (_, res) => {
    getDB()
    .then((db) => db.collection("todo").find().toArray())
    .then((foundToDo) => res.json(foundToDo))
})

app.post("/", (req, res)=> {
    const newTasks = {
        title: req.body.todotitle
    }
    getDB()
    .then((db) => db.collection("todo").insertOne(newTasks))
    .then((insertResult) => res.json(insertResult))
})




const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server is listening on PORT:" , PORT);
})

