var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var configDB = require('./config/database.js');
var route    = require('./router/route');

mongoose.connect(configDB.url); // connect to our database
app.use('/',route);
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/style', express.static(__dirname + '/view')); // redirect CSS bootstrap

app.listen(port, function () {
  console.log('Meow coming at port 8080!')
})