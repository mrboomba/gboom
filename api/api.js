var express = require('express');
var _ = require('underscore');
var path = require('path');
var router = express.Router();
var fs = require('fs');


function getHighScore(req,res){
	var fs = require('fs');
	var obj;
     fs.readFile('db.txt', 'utf8', function (err, data) {
		if(err){
			res.status(500).json({
				message: err
			});
		}
		else{
			obj = JSON.parse(data);
			var highscore = _.sortBy(obj,'score');
			var result=[];
			if(_.size(highscore)>=10){
			for(var i=_.size(highscore)-1 , j=0;j<10;i--,j++){
				result.push(highscore[i]);
			  }
		    }
			else{
				for(var i=_.size(highscore)-1 ;i>=0;i--){
				result.push(highscore[i]);
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
	var name = req.body.name;
	var score = req.body.score;
	if(score>2500){
		res.status(500).json({
				message: "you cheat!"
			});
	}fs.readFile('db.txt', 'utf8', function (err, data) {
		if(err){
			res.status(500).json({
				message: err
			});
		}
		else{
			var obj = JSON.parse(data);
			obj.push({name:name,score:score});
			var json = JSON.stringify(obj);
			fs.writeFile("db.txt", json,'utf8' ,function(err) {
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
});	
}


	router.route('/highscore')
	.get(getHighScore)
	.post(putHighScore);

	module.exports = router;