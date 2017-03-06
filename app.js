var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var configDB = require('./config/database.js');
var route    = require('./router/route');

mongoose.connect(configDB.url); // connect to our database
app.use('/',route);

app.listen(port, function () {
  console.log('Meow coming at port 8080!')
})