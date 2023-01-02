const express = require("express"); // nodemon installiert und und in scripts ("start": nodemone index.js) eingetragen. npm start
const app = express()

app.set("view engine", "ejs");

// BODY-PARSER!!! ohne dem kein req.body ===> wird für POST routes benötigt
app.use(express.json()) // json body parser
app.use(express.urlencoded({extended: true})); // x-www-form-urlencoded format wird im browser by <forma> verwendet.

const messages = [
     { name: "Mike", 
        messageText: "hallo super coole freunde!", 
        postedAt: new Date()
     },
      {  name: "Sidahmed", 
      messageText: "hallo Mike! ",
    },
       { name: "Tayfun", 
       messageText: "hallo freunde, schön euch zu sehen!",
    },
       { name: "Laura", 
       messageText: "hello 😎!",
    }
]

app.use((req, _, next) => {
    console.log("new request", req.method, req.url);
    next()
})

app.get("/", (_ ,res) => {
    res.render("home", { messages });
})

// wir müssen hier .post als methode verwenden weil in home.ejs ist die method = post

app.post("/add-super-cool-message", (req, res) => {
    console.log("request body:", req.body);
    const message = {
        name: req.body.name,
        messageText: req.body.messageText,
        postedAt: new Date()
    }
    messages.push(message)
    res.redirect("/");
})

const PORT = 3000

app.listen(PORT, () => console.log("Server listen on Port:", PORT))