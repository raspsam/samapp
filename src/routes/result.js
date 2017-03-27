var fs = require('fs');

var express = require('express');
var router = express.Router();
var _info = require('./_info.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	
	console.log(req.query);		
  	if (req && req.query && req.query.name){
      var saveName = "%" + req.query.name;
      console.log("saving name " + saveName + ".");

  		fs.appendFile('names.txt', saveName, function (err) {
		  	if (err) throw err;
		  	console.log('Saved!');
		  });
  		res.send('success');
  	}
  	else {
  		res.send('fail');
  	}
});

module.exports = router;