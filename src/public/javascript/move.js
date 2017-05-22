function reset1(){
clearTimeout(my_time);
document.getElementById('i1').style.left= "170px";
document.getElementById('i1').style.top= "467px";
document.getElementById("msg").innerHTML="";
}

function flip(obj, flipped){
	var k = flipped ? 180 : 0;
	obj.style.transform = "rotatey(" + k + "deg)";
}


function disp(){
	var step=1; // Change this step value
	var obj = document.getElementById('i1');
	//alert("Hello");
	var y=obj.offsetTop;
	var x=obj.offsetLeft;
	if(x < 800 && y === 467){
		x= x +step;
		obj.style.left= x + "px"; // horizontal movment
	}else if(y < 600 && x === 800){
		y= y +step;
		obj.style.top= y + "px"; // vertical movment
	}
	else if(x > 200 ){
		x= x -step;
		obj.style.left= x + "px"; // horizontal movment
	}
	else if(y > 467){
		y= y -step;
		obj.style.top= y + "px"; // vertical movment
	}
    
    if(x == 800){
		flip(obj, true);
	}
	else if(x == 200){
		flip(obj, false);
	}

}

function timer(){
	disp();
	var y=document.getElementById('i1').offsetTop;
	var x=document.getElementById('i1').offsetLeft;
	document.getElementById("msg").innerHTML="X: " + x + " Y : " + y
	my_time=setTimeout('timer()', 1);
}