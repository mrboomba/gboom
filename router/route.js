var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/',function(req,res){
	res.sendFile(path.resolve('view/index.html'));

})

router.get('/home',function(req,res){
	res.sendFile(path.resolve('view/home.html'));

})
router.get('/highscore',function(req,res){
	res.sendFile(path.resolve('view/highscore.html'));

})
router.get('/howto',function(req,res){
	res.sendFile(path.resolve('view/howto.html'));

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
router.get('/img/dog9',function(req,res){
	res.sendFile(path.resolve('img/dog9.jpg'));

})
router.get('/img/dog10',function(req,res){
	res.sendFile(path.resolve('img/dog10.jpg'));

})
router.get('/img/dog11',function(req,res){
	res.sendFile(path.resolve('img/dog11.jpg'));

})
router.get('/img/dog12',function(req,res){
	res.sendFile(path.resolve('img/dog12.jpg'));

})
router.get('/img/dog13',function(req,res){
	res.sendFile(path.resolve('img/dog13.jpg'));

})
router.get('/img/dog14',function(req,res){
	res.sendFile(path.resolve('img/dog14.jpg'));

})
router.get('/img/dog15',function(req,res){
	res.sendFile(path.resolve('img/dog15.jpg'));

})
router.get('/img/dog16',function(req,res){
	res.sendFile(path.resolve('img/dog16.jpg'));

})
router.get('/img/dog17',function(req,res){
	res.sendFile(path.resolve('img/dog17.jpg'));

})
router.get('/img/dog18',function(req,res){
	res.sendFile(path.resolve('img/dog18.jpg'));

})
router.get('/img/dog19',function(req,res){
	res.sendFile(path.resolve('img/dog19.jpg'));

})
router.get('/img/dog20',function(req,res){
	res.sendFile(path.resolve('img/dog20.jpg'));

})
router.get('/img/dog21',function(req,res){
	res.sendFile(path.resolve('img/dog21.jpg'));

})
router.get('/img/dog22',function(req,res){
	res.sendFile(path.resolve('img/dog22.jpg'));

})
router.get('/img/dog23',function(req,res){
	res.sendFile(path.resolve('img/dog23.jpg'));

})


module.exports = router;