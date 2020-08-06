var arr = [3,4,5,6,7];

function printReverse(arr){
	for (var i = arr.length-1; i >= 0; i--){
		console.log(arr[i]);
	}
}
printReverse(arr);


isUniform([1,1,1,1]);

function isUniform(arr){
	var fst = arr[0];
	for (var i = 0; i < arr.length ; i++){
		if (arr[i] !== fst){
			return false;
		}
	}
	return true;
}

function sum(arr){
	var total = 0;
	for (var i = 0; i < arr.length; i++){
		total += arr[i];
	}
	return total;
}

function max(arr){
	var max = arr[0];
	for (var i = 1; i < arr.length; i++){
		if (arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}