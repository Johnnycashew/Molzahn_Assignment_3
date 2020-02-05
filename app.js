var bodyparser = require('body-parser');
var express = require('express');
var path = require('path');
var app = express();
var router = express.Router();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + "/Views/index.html"));
});

app.use(express.static(__dirname + '/Views'));

app.use('/', router);

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});