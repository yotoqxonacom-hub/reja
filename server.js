

const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://yotoqxonacom_db_user:ONNN47cqVuWl2lbB&oq@cluster0.ckepwqh.mongodb.net/"

mongodb.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) console.log("ERROR on connection MongoDB", err);
    else {
        console.log("MongoDB connection succeed");
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3300;
        server.listen(PORT, function () {
            console.log(`the server is running succesfully on port:${PORT}, http://localhost:${PORT}`);
        });
    }
});



