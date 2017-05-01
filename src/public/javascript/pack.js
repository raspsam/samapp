function clickItem(e){
	var thisObject = $(e.target);
	var thisQuant = thisObject.find('.pack_quant input').val();

	if(thisQuant > 0)
		thisObject.addClass('selected');
	else
		thisObject.removeClass('selected');

	var collected = collect();
	send(collected, function(res){/////////////////////////////////////////////////////
		var text = "<table style='width:100%' >" +
			"<tr style='text-align: left' >" + 
				"<th>Total Number</th>" +
				"<th>Total Calories</th>" +
				"<th>Total Weight (kilograms)</th>" +
				"<th>Total Weight (Lbs)</th>" +
				"<th>Total Cost</th>" +
				"<th>Average Taste</th>" +
			"</tr>" +
			"<tr>" + 
				"<td>" + Math.round(res.total) + "</td>" +
				"<td>" + Math.round(res.calorie) + " KCal</td>" +
				"<td>" + Math.round(res.weight * 100) / 100 + " kg</td>" +
				"<td>" + Math.round((res.weight * 2.2) * 100) / 100 + " Lbs</td>" +
				"<td>$" + Math.round(res.price * 100) / 100 + "</td>" +
				"<td>" + Math.round(res.taste * 10) / 10 + "</td>" +
			"</tr>" +
		"</table>";
		$("#pack_result").html(text);
	})
}

function collect(){
	var table = $('#pack_table');
	var rows = table.find('.item_row');

	var rtn = [];

	rows.each(function( index ) {
		var this_row = $( this );
		rtn.push({
	  		id: this_row.attr("id"),
			quant: this_row.find('.pack_quant input').val()
		});
	});

	return rtn;
}

function send(collected, callback){
	$.ajax({
	  type: "POST",
	  url: "calc",
	  data: {data: JSON.stringify(collected)},
	  success: function(data){
  		callback(data);
	  },
	});
}