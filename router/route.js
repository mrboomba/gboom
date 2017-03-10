var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/',function(req,res){
	res.sendFile(path.resolve('view/index.html'));

})

router.get('/home',function(req,res){
	res.sendFile(path.resolve('view/home.html'));

})


//path for images
router.get('/img/cat',function(req,res){
	res.sendFile(path.resolve('img/cat.jpg'));

})
router.get('/img/dog1',function(req,res){
	res.sendFile(path.resolve('img/dog1.jpg'));

})
router.get('/img/dog2',function(req,res){
	res.sendFile(path.resolve('img/dog2.jpg'));

})
router.get('/img/dog3',function(req,res){
	res.sendFile(path.resolve('img/dog3.jpg'));

})
router.get('/img/dog4',function(req,res){
	res.sendFile(path.resolve('img/dog4.jpg'));

})
router.get('/img/dog5',function(req,res){
	res.sendFile(path.resolve('img/dog5.jpg'));

})
router.get('/img/dog6',function(req,res){
	res.sendFile(path.resolve('img/dog6.jpg'));

})
router.get('/img/dog7',function(req,res){
	res.sendFile(path.resolve('img/dog7.jpg'));

})
router.get('/img/dog8',function(req,res){
	res.sendFile(path.resolve('img/dog8.jpg'));

})


module.exports = router;