const fs = require("fs");
const express = require("express")
const { body , validationResult } = require("express-validator");
const app = express()
app.set("view engine", "ejs")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"));
app.use((req, _, next) => {
    console.log("Server Request:", req.url, req.method);
    next()
})


app.get("/" , (_, res,) => {
    const data = fs.readFileSync("messages.json")
    const messages = JSON.parse(data)
    res.render("home", { messages })
})


app.post("/add-guest-posts", 
body("firstname").isLength({min: 2}),
body("lastname").isLength({min: 2}),
body("email").isEmail(),
body("text").isLength({min: 4, max: 100}),
(req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    
    const message = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        text: req.body.text,
    }

    const data = fs.readFileSync("messages.json");
    let messagesArray = [];
    if (data) {
        messagesArray = JSON.parse(data);
    }
    messagesArray.push(message);
    fs.writeFileSync("messages.json", JSON.stringify(messagesArray));
    res.redirect("/");
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log("Server listening on PORT", PORT);
})