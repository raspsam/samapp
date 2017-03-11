function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var tar = $(ev.target);
    var tarCorrect = tar.attr('id') === 'div1' || tar.attr('id') === 'div2' 
        ? tar 
        : tar.closest('#div1,#div2');
    tarCorrect.append(document.getElementById(data));

    if (tarCorrect.attr('id') === 'div1'){
        $('#links').hide();
    }else{
        $('#links').show();
    }
	
}