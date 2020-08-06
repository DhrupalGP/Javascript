var btn = document.querySelector("button");
var body = document.querySelector("body");

// var isPurple = false;

var p = document.querySelector("p");
// btn.addEventListener("click", function(){
// 	p.textContent = "Button clicked!";
// 	 if(isPurple){
//         body.style.background = "white";
//     }
//     else{
//         body.style.background = "purple";
//     }
//     isPurple = !isPurple;
// });

btn.addEventListener("click",function(){
	body.classList.toggle("purple");
});


var h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
	alert("h1 clicked!")
	var isCyan = false;
	h1.style.background = "cyan";
});

var ul = document.querySelector("ul");
ul.addEventListener("click", function(){
	console.log("Ul clicked.")
});

var lis = document.getElementsByTagName("li");

for (var i =0; i < lis.length; i++){
	lis[i].addEventListener("click", function(){
		console.log(this.textContent + " Clicked.")
	});
}