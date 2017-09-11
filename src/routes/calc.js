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
	console.log("BODY::::::", JSON.parse(req.body.data));

	var list = JSON.parse(req.body.data);
	var rtnTemplate = () => JSON.parse(JSON.stringify({
		weight: 0,
		price: 0,
		calorie: 0,
		taste: 0,
		total: 0,
		name: "Grand Total",
		visible: true,
	}));
	var rtn = {
		persons: [],
		grand_total: rtnTemplate()
	};

	list.map((p, pCount) => {                         //loop on people

		rtn.persons[pCount] = rtnTemplate();

		p.foods.map(o => {						//loop on foods

			console.log('o is ', o);

		
			var info = findFood(_food.food, o.id);

			// person info
			rtn.persons[pCount].name = p.name;
			rtn.persons[pCount].visible = p.visible;

			// Person Total
			rtn.persons[pCount].total = rtn.persons[pCount].total + +(o.quant || 0);

			rtn.persons[pCount].calorie = rtn.persons[pCount].calorie + +(o.quant * info.calorie);
			rtn.persons[pCount].weight = rtn.persons[pCount].weight + +(o.quant * info.weight);
			rtn.persons[pCount].price = rtn.persons[pCount].price + +(o.quant * info.price);

			if(o.quant > 0)
				rtn.persons[pCount].taste = rtn.persons[pCount].taste + (+info.taste * o.quant);


			// Grand Total
			rtn.grand_total.total = rtn.grand_total.total + +(o.quant || 0);

			rtn.grand_total.calorie = rtn.grand_total.calorie + +(o.quant * info.calorie);
			rtn.grand_total.weight = rtn.grand_total.weight + +(o.quant * info.weight);
			rtn.grand_total.price = rtn.grand_total.price + +(o.quant * info.price);

			if(o.quant > 0)
				rtn.grand_total.taste = rtn.grand_total.taste + (+info.taste * o.quant);
		});
	})
	

	if(rtn.grand_total.total > 0)
		rtn.grand_total.taste = rtn.grand_total.taste / rtn.grand_total.total;

  	res.send(rtn);
});

module.exports = router;
