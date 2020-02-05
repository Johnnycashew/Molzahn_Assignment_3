var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var app = express();
var router = express.Router();

var scores = [];

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + "/Views/index.html"));
});

app.use(express.static(__dirname + '/Views'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});

app.post('/sendscore', function(req, res){
    console.log(req.body);
    scores.push(req.body);
    console.log(scores);
    res.redirect('/highscores.html');
});

app.get('/getscores', function(req, res){
    res.send({scores});
});