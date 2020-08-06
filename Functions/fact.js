// function factorial(no) {
// 	var fact;
// 	if (no === 1 || no === 0){
// 		fact = 1
// 	}	
// 	else{
// 		fact = no * factorial(no-1)
// 	}
// 	return fact;
// }

function factorial(no){
	fact = 1;

	for (var i = 2; i <=no; i++){
		fact *= i
	}
	return fact
}

var no = Number(prompt("Enter no :"));
alert(factorial(no));