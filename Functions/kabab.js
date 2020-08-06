function kababToSnake(str) {
	var newStr = str.replace(/-/g,'_');
	return newStr;
}


var str = prompt("Enter string :");
res = kababToSnake(str);
alert(res);

