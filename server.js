var express = require("express");
var app = express();
var path = require("path");

var logger = require("morgan");
app.use(logger("dev"));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

var port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log("App listening on PORT " + port);
});