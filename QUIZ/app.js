var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");

let i = 0;
let score = 0;

const questions = [
    "1, 1, 2, 3, 5", //fibonacci
    "1, 4, 9, 16, 25", //squares
    "2, 3, 5, 7, 11", //primes
    "1, 2, 4, 8, 16" //power of 2

];
const answers = [8, 36, 13, 32];

app.get('/', function(req, res) {

    res.render('i', {
        score: score,
        sequence: questions[i],
        i: i,
    });
});


app.post('/enter', (req, res) => {
    const body = req.body;
    let i = body.i;
    let score = body.score;

    score = body.answer == answers[i] ? ++score : score;

    if (i == questions.length - 1) {
        res.render('output', {
            score: score,
            total: questions.length
        });

    } else {
        res.render('i', {
            score: score,
            i: ++i,
            sequence: questions[i]
        });
    }
});


var server = app.listen(8080, function() {
    console.log('Node server is running..');
});