var age = prompt('Enter your Age: ');

if (age < 0){
	alert("Age can't be negative");
	console.log(typeof(age))
}
if (age == 21){
	alert("Happy 21st birthday!!");
}
if (age % 2 != 0){
	alert("Your age is odd!");
}
if (age % Math.sqrt(age) === 0){
	alert("Your age is perfect square.")
}