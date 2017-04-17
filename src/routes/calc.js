var express = require('express');
var router = express.Router();
var _food = require('./_food.js');

/* GET sam. */
router.post('/', function(req, res, next) {

	// calculate the result here, using _food above.
	console.log("BODY::::::", JSON.parse(req.body.data)[0]);

	var list = JSON.parse(req.body.data);
	var total = 0;

	list.map(o => total = total + +(o.quant || 0));

  res.send('yay, your total items count is ' + total + '.');
});

module.exports = router;
