var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname + '/client')));

var server = app.listen(8080, function(){
	console.log('You are now watching port 8080');
})