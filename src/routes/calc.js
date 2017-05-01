var express = require('express');
var router = express.Router();
var _food = require('./_food.js');


function findFood(haystack, needle){
	var rtn = {};
	for(var i=0; i < haystack.length; i++){
		if(haystack[i].id === needle){
		rtn = haystack[i];
	  	break;
	}
  }
  return rtn;
}

/* GET sam. */
router.post('/', function(req, res, next) {

	// calculate the result here, using _food above.
	console.log("BODY::::::", JSON.parse(req.body.data)[0]);

	var list = JSON.parse(req.body.data);
	var rtn = {
		weight: 0,
		price: 0,
		calorie: 0,
		taste: 0,
		total: 0,
	};

	list.map(o => {
		rtn.total = rtn.total + +(o.quant || 0);

	
		var info = findFood(_food.food, o.id);

		// Calories
		rtn.calorie = rtn.calorie + +(o.quant * info.calorie);
		rtn.weight = rtn.weight + +(o.quant * info.weight);
		rtn.price = rtn.price + +(o.quant * info.price);

		if(o.quant > 0)
			rtn.taste = rtn.taste + (+info.taste * o.quant);

	});

	if(rtn.total > 0)
		rtn.taste = rtn.taste / rtn.total;

  	res.send(rtn);
});

module.exports = router;
