function clickItem(e){
	e.preventDefault();
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

function clickRow(e, clickType){
	var target = $(e.target),
		row = target.closest("tr");
	if (target.is("input"))
		return;
	var field = row.find(".quantField");
	
	if (clickType === 'left'){
		field.val(+field.val() + 1);
	}else{
		e.preventDefault();
		if (field.val() >= 1){
			field.val(+field.val() - 1);
		}
		
	}

	field.trigger("change");
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

function plusUpDown(updown){
	var table = $('#pack_table'),
		allRows = table.find('.pack_row'),
		titleRow = table.find('.pack_row:first-child'),
		count = titleRow.find('.quant_cell:not(.force_show)').length -1;

	allRows.each(function(){
		if (updown === 'up'){
			$(this).find(".quant_cell:eq(" + (10 - count) + ")").addClass("force_show");
		}else{
			$(this).find(".quant_cell:eq(" + (9 - count) + ")").removeClass("force_show");
		}	
	});
	
	console.log("Count is " + count);

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