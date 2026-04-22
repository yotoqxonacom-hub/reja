console.log('Web serverni boshlash');
const express = require("express");
const app = express();
const http = require("http");
const { start } = require("repl");
const fs = require("fs");


let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR:", err);
        return;
    } else {
        user = JSON.parse(data);
        console.log(user);
    }
});
//1 Kirish codlari

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 sessions code

//3 views ga bog'liq kodlar

app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing codelari
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({ test: "success" });
})

app.get("/project", (req, res) => {
    res.render("project", { user: user });
})

app.get("/", function (req, res) {
    res.render("harid");
})

const server = http.createServer(app);
let PORT = 3300;
server.listen(PORT, function () {
    console.log(`the server is running succesfully on port:${PORT}`);
});