var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var route    = require('./router/route');
var api 	 = require('./api/api');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/',route);
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/style', express.static(__dirname + '/view')); // redirect CSS bootstrap
app.use('/api',api);



app.listen(port, function () {
  	console.log('Meow coming at port 8080!') 
})