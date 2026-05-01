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
const db = require("./server").db();
const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://localhost:27017", { useUnifiedTopology: true });
const mongodb = require("mongodb");
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
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne(
        { _id: new mongodb.ObjectId(id) },
        function (err, data) {
            res.json({ state: "success" });
        },
    );
    // console.log(id);
    // res.end("done");
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate({ _id: new mongodb.ObjectId(data.id) }, { $set: { reja: data.new_input } }, function (err, data) {
        res.json({ state: "success" });
    })

});

app.post("/delete-all", (req, res) => {
    if (req.body.delete_all) {
        db.collection("plans").deleteMany(function () {
            res.json({ state: "hamma rejalar o'chirildi!" });
        });
    }
});


//app.get("/project", (req, res) => {
// console.log("user entered /")
// res.render("project", { user: user });
//})

app.get("/", (req, res) => {
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            res.send("something went wrong");
        } else {
            res.render("reja", { items: data }); // items nomi bilan uzatish
        }
    });
});



module.exports = app;