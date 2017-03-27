function saveNames(e){
	e.preventDefault();
	var obj = $(e.target);

	var name = obj.find('input').val();
	console.log('here');

	$.get( "result?name=" + name, function( data ) {
	  alert( "Load was performed: " + data );
	});
}