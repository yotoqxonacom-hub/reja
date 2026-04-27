

const http = require("http");
const { MongoClient } = require("mongodb");

let db;
const connectionString = "mongodb+srv://yotoqxonacom_db_user:ONNN47cqVuWl2lbB@cluster0.ckepwqh.mongodb.net/Reja";

MongoClient.connect(connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) console.log("ERROR on connection MongoDB");
        else {
            console.log("MongoDB connection succeed");

            module.exports = client;
            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function () {
                console.log(`the server is running succesfully on port:${PORT}, http://localhost:${PORT}`);
            });
        }
    });




