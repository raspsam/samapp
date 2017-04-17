function clickItem(e){
	var thisObject = $(e.target);
	var thisQuant = thisObject.find('.pack_quant input').val();

	if(thisQuant > 0)
		thisObject.addClass('selected');
	else
		thisObject.removeClass('selected');

	var collected = collect();
	send(collected, function(res){
		alert(res);
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