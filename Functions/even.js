function isEven(no) {
	if (no % 2 == 0){
		console.log(no + " is Even number.");
		alert(no + " is Even number.");
	}
	else{
		console.log(no + " is Odd number.");
		alert(no + " is Odds number.");
	}
}


var no = Number(prompt("Enter number :"));
isEven(no);
