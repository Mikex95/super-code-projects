const express = require("express");

const app = express();

app.use((req, _, next)=> {
    console.log("neue Request", req.url, req.method);
    next();
})
app.use(express.static("views", {extensions: ['html']}));

const PORT = 9000;
app.listen(PORT, () => console.log("Server listening on Port", PORT));