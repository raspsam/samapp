var express = require('express');
var router = express.Router();
var _info = require('./_info.js');
var _food = require('./_food.js');

_info['food'] = _food.food;

_info.food = _info.food.map(o => {
	o.weight_lb = Math.round(o.weight * 2.2 * 100) / 100;
	return o;
});

/* GET sam. */
router.get('/', function(req, res, next) {
	console.log("info out:", _info);
  	res.render('pack', _info);
});

module.exports = router;
