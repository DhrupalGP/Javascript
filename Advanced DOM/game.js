var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var resetbtn = document.getElementById('reset');

var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");

var changeWinScore = document.querySelector('input');
var finalScore = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winingScore = 5;

p1.addEventListener("click", function(){
	if (!gameOver){
		p1Score += 1;
		if (p1Score === winingScore){ 
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2.addEventListener("click", function(){
	if (!gameOver){
		p2Score += 1;
		if (p2Score === winingScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});


resetbtn.addEventListener("click", function(){
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

changeWinScore.addEventListener("change", function(){
	updatedWinScore = Number(changeWinScore.value)
	finalScore.textContent = updatedWinScore;
	winingScore = updatedWinScore;
	reset();
});
