function func(no){
	console.log(no);
}
	
function myForEach(arr, func){
	for (var i = 0; i < arr.length;  i++){
		func(arr[i]);
	}
}

arr = [2,3,4,5];
