var todo = [];

var input = prompt("What whould you like to do ?");

while (input !== "quit"){

	if (input === "new"){
		addTodo()
	} else if (input === "list"){
		displayTodo()
	} else if (input === "delete"){
		deleteTodo()
	}

	input = prompt("What whould you like to do ?");
}
console.log("OK, You QUIT the App.")


function addTodo(){
	var item = prompt("Enter to do item:");
	todo.push(item);
	console.log(item + " added to list.");
}

function displayTodo(){
	console.log("---------------");
	todo.forEach(function(res,i){
		console.log(i + ": " + res);
	});
	console.log("---------------");
}

function deleteTodo(){
	var index = prompt("Enter index for to-do to delete");
	var deleted = todo.splice(index,1);	
	console.log("---------------")
	console.log(deleted + " - todo item deleted.");
}