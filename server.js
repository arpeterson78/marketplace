var express = require("express");
var app = express();
var path = require("path");

var logger = require("morgan");
app.use(logger("dev"));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require('dotenv').config();

app.use(express.static("public"));

var mysql = require("mysql");

if (app.settings.env == 'development') {
    var connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: process.env.DB_PASS,
        database: "marketplace_db"
    });
} else {
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
}

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
    next();
});

app.get('/items', function (req, res) {
    var query = "SELECT * FROM marketplace_items";
    connection.query(query, function (err, result) {
        res.send(result);
    })

})


var port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log("App listening on PORT " + port);
});

if (process.env.PORT) {
    port = process.env.PORT;
}