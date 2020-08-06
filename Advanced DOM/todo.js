var lis = document.getElementsByTagName("li");


for(var i=0; i < lis.length; i++){
	lis[i].addEventListener("mouseover", function(){
		this.classList.add("hover");
	})

	lis[i].addEventListener("mouseout", function(){
		this.classList.remove("hover");
		this.classList.toggle("")
	})

	lis[i].addEventListener("click", function(){
		this.classList.toggle("done");
	})
}