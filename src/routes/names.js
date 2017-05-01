var express = require('express');
var router = express.Router();
var fs = require('fs')
var _info = require('./_info.js');


/* GET home page. */
router.get('/', function(req, res, next) {
	fs.readFile('/vagrant_data/names.txt', 'utf8', function (err,data) {
	  if (err) {
	  	res.send('There was an error')
	    return console.log(err);
	  }
	  else {
	  	var names = data.split('%');
	  	_info.list = names;
	  	console.log(_info);
		res.render('names', _info);
	  }
	});
	
});

module.exports = router;