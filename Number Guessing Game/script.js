var secretNumber = 8;
var guessNo = Number(prompt("Guess a number!"));

if (guessNo === secretNumber){
	alert("Guess correctly.");
}
else if (guessNo > secretNumber){
	alert("Guess number is high.");
}
else{
	alert("Guess number is low.");
}