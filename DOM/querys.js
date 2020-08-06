var h1 = document.querySelector("h1");
h1.style.color = "red";
var isRed = true;

setInterval(function(){
	if (isRed){
		h1.style.color = "black";
	}
	else{
		h1.style.color = "red";
	}
	isRed = !isRed;
}, 1000);


var body = document.querySelector("body");

var isWhite = true;

setInterval(function(){
	if (isWhite){
		body.style.background = "gray";
	}
	else{
		body.style.background = "white";
	}
	isWhite = !isWhite;
},1000);