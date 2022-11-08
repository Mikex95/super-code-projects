const radio5 = document.querySelector(".radio5");
const radio10 = document.querySelector(".radio10");
const radio15 = document.querySelector(".radio15");
const radio20 = document.querySelector(".radio20");
    // ======= // Output innerHTML // ======= // 
const computerChoiceDisplay = document.querySelector("#computer-choice");
const userChoiceDisplay = document.querySelector("#user-choice");
const resultDisplay = document.querySelector("#result");
const userScore = document.querySelector("#user");
const computerScore = document.querySelector("#computer");
    // ======= // Buttons // ======= // 
const possibleChoices = document.querySelectorAll('.button1');
const restartButton = document.querySelector("#restart-btn");
    // ======= // Form input // ======= // 
const form = document.querySelector("form");

const roundsTotal = document.querySelector(".rounds-total-h2");
const activeRound = document.querySelector(".active-round-h2");

let result 
let computerChoice
let userChoice
let scoreComp = 0
let scoreUser = 0
let counter = 0
let totalRoundScore = 0;


function checkRounds(event) {
	event.preventDefault();

	if (radio5.checked) {
		totalRoundScore = 5;
		roundsTotal.innerHTML = 5;
		activeRound.innerHTML = 0;
		console.log("5 is checked");
	}
	if (radio10.checked) {
		totalRoundScore = 10;
		roundsTotal.innerHTML = 10;
		activeRound.innerHTML = 0;
		console.log("10 is checked");
	}
	if (radio15.checked) {
		totalRoundScore = 15;
		roundsTotal.innerHTML = 15;
		activeRound.innerHTML = 0;
		console.log("15 is checked");
	}
	if (radio20.checked) {
		totalRoundScore = 20;
		roundsTotal.innerHTML = 20;
		activeRound.innerHTML = 0;
		console.log("20 is checked");
	}
}


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (event) => {
    userChoice = event.target.id
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) +1 ;
    if (randomNumber === 1) {
        computerChoice = "schere";
    }
    if (randomNumber === 2) {
        computerChoice = "stein";
    }
    if (randomNumber === 3) {
        computerChoice = "papier";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (counter === totalRoundScore) {
        console.log("Penis");
    }  
    if (computerChoice === userChoice) {
        result = 'Its a draw';
        counter += 1;
        activeRound.innerHTML = counter
}   if (computerChoice === 'schere' && userChoice === 'papier') {
        result = 'you lost';
        scoreComp += 1;
        counter += 1;
        computerScore.innerHTML = scoreComp
        activeRound.innerHTML = counter
        }   
    if (computerChoice === 'papier' && userChoice === 'stein'){
        result = 'you lost';
        scoreComp += 1;
        counter += 1;
        computerScore.innerHTML = scoreComp;
        activeRound.innerHTML = counter
}   if (computerChoice === 'stein' && userChoice === 'schere') {
        result = 'you lost';
        scoreComp += 1;
        counter += 1;
        computerScore.innerHTML = scoreComp;
        activeRound.innerHTML = counter
}   if (computerChoice === 'schere' && userChoice === 'stein') {
        result = 'you won!!';
        scoreUser += 1;
        counter += 1;
        userScore.innerHTML = scoreUser;
        activeRound.innerHTML = counter
}   if (computerChoice === 'papier' && userChoice === 'schere') {
        result= 'you won!!';
        scoreUser += 1;
        counter += 1;
        userScore.innerHTML = scoreUser;
        activeRound.innerHTML = counter
}   if (computerChoice === 'stein' && userChoice === 'papier') {
        result = 'you won!!';
        counter += 1;
        activeRound.innerHTML += 1;
        userScore.innerHTML = scoreUser;
        activeRound.innerHTML = counter
}
    resultDisplay.innerHTML = result
}

restartButton.addEventListener('click', function(){
    window.location.reload();
    return false;
  });
