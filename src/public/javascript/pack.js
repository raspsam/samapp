function clickItem(e){
	e.preventDefault();
	var thisObject = $(e.target);
	var thisQuant = thisObject.find('.pack_quant input').val();

	if(thisQuant > 0)
		thisObject.addClass('selected');
	else
		thisObject.removeClass('selected');

	var collected = collect_person();
	send(collected, function(res){

			/*
			res = {
				persons: [{price, etc.}],
				grand_total: {price,etc}
			};
			*/


		var text = "<table style='width:100%' >" +
			"<tr style='text-align: left' >" + 
				"<th> </th>" +
				"<th>Item Total</th>" +
				"<th>Total Calories</th>" +
				"<th>Total Weight (kilograms)</th>" +
				"<th>Total Weight (Lbs)</th>" +
				"<th>Total Cost</th>" +
				"<th>Average Taste</th>" +
			"</tr>";

		res.persons.map((o,i)  => {
			text = text + printPerson(o);
		});

		var text = text + printPerson(res.grand_total);

		var text = text + "</table>";

		$("#pack_result").html(text);
	});
}

function printPerson(res){
	if(!res.visible)
		return '';
	else
		return "<tr>" + 
					"<td>" + res.name + "</td>" +
					"<td>" + Math.round(res.total) + "</td>" +
					"<td>" + Math.round(res.calorie) + " KCal</td>" +
					"<td>" + Math.round(res.weight * 100) / 100 + " kg</td>" +
					"<td>" + Math.round((res.weight * 2.2) * 100) / 100 + " Lbs</td>" +
					"<td>$" + Math.round(res.price * 100) / 100 + "</td>" +
					"<td>" + Math.round(res.taste * 10) / 10 + "</td>" +
				"</tr>";
}

function clickRow(e, clickType){
	var target = $(e.target),
		row = target.closest("tr");
	if (target.is("input"))
		return;
	var field = row.find(".pack_quant.force_show,.pack_quant:first").find(".quantField");
	
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

function collect_food(hikerid){
	var table = $('#pack_table');
	var rows = table.find('.item_row');

	var rtn = [];

	rows.each(function( index ) {
		var this_row = $( this );
		rtn.push({
	  		id: this_row.attr("id"),
			quant: this_row.find(".pack_quant[hikerid='" + hikerid + "']").find('input').val()
		});
	});

	return rtn;
}

function collect_list_person(){
	var row = $('#pack_table').find('.pack_row').first();
	var rtn = [];
	row.find('.quant_cell').each(function(i){
		var this_item = $(this);
		rtn.push({
			name: this_item.find('input').val(),
			visible: (this_item.is('.force_show') || (i === 0))
		});
	});
	return rtn;
}

function collect_person(){
	var table = $('#pack_table');
	var rows = table.find('.item_row');
	var rtn = [];
	var person_list = collect_list_person();

	person_list.map((o, i) => {
		rtn.push({
			name: o.name,
			visible: o.visible,
			foods: collect_food(i)
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
}

function reset(){
	$('.quantField').val(0);
	$("#pack_result").html("");
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

