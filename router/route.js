var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/',function(req,res){
	res.sendFile(path.resolve('view/index.html'));

})

router.get('/home',function(req,res){
	res.sendFile(path.resolve('view/home.html'));

})

module.exports = router;