var Highscore = require('../model/highscore');
var express = require('express');
var _ = require('underscore');
var path = require('path');
var router = express.Router();

function getHighScore(req,res){
	Highscore.find({}, function(err ,highscore){
		if(err){
			res.status(500).json({
				message: err
			});
		}
		else{
			highscore = _.sortBy(highscore,'score');
			var result=[];
			if(_.size(highscore)>=10){
			for(var i=_.size(highscore)-1 , j=0;j<10;i--,j++){
				result.push(highscore[i]);
				console.log(highscore[i]);
			  }
		    }
			else{
				for(var i=_.size(highscore)-1 ;i>=0;i--){
				result.push(highscore[i]);
				console.log(highscore[i]);
			  }
			}

			res.status(200).json({
				message:'success',
				highscore:result
			});
		}
	});
}



function putHighScore(req,res){
	console.log("post")
	var name = req.body.name;
	var score = req.body.score;
	if(score>2500){
		res.status(500).json({
				message: err
			});
	}
	Highscore.create({"name":name,"score":score},function(err,highscore){
		if(err){
			res.status(500).json({
				message: err
			});
		}
		else{
			res.redirect("/highscore");
		}
	});
}

function test(req,res){
	console.log("test");
	res.status(200).json({
		message:'success'
	});
	
}

	router.route('/highscore')
	.get(getHighScore)
	.post(putHighScore);
	router.get('/test',test);

	module.exports = router;