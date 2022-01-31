var express = require("express");
var app = express();
var mysql = require("mysql");
var word = require("./word");
var path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dict.html"));
});

app.get("/dict.css", function (req, res) {
  res.sendFile(path.join(__dirname, "/dict.css"));
});

app.get("/dict.js", function (req, res) {
  res.sendFile(path.join(__dirname, "/dict.js"));
});

app.get("/w3c-html.png", function (req, res) {
    res.sendFile(path.join(__dirname, "/w3c-html.png"));
  });

  app.get("/w3c-css.png", function (req, res) {
    res.sendFile(path.join(__dirname, "/w3c-css.png"));
  });

  app.get("/jscheck-small.png", function (req, res) {
    res.sendFile(path.join(__dirname, "/jscheck-small.png"));
  });

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "entries",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(8080, () => {
  console.log("Server is running");
});

app.get("/search", function (req, res) {
  var termQuery = req.query.term;
  word.w(connection, termQuery, res);
});
