console.log('Web serverni boshlash');
const express = require("express");
const app = express();
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

// MongoDB call
//const db = require("./server").db();
//const mongodb = require("mongodb");


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
    console.log("user entered / create-item")
    console.log(req.body);
    db.collection("plan").insertOne({ reja: new_reja }, (err, data) => {
        if (err) {
            console.log(err);
            res.end("somthing went wrong");
        } else {
            console.log("succesfully added");
        }
    })
    res.json({ test: "success" });
})

app.get("/project", (req, res) => {
    console.log("user entered /")
    res.render("project", { user: user });
})

app.get("/", function (req, res) {
    console.log("user entered /")
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("somthing went wrong");
        } else {
            res.render("reja", { items: data });
        }
    })
})


module.exports = app;