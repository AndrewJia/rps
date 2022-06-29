function computerPlay() {
	//random number from 0-2
	let random = Math.floor(Math.random() * 3);

	switch(random) {
		case 0:
			return 'swain';
		case 1:
			return 'anivia';
		case 2:
			return 'zilean'
		default:
			return 'something went wrong in computerPlay'
	}
}

//determine result of round given player chocie
function playRound(playerSelection) {
	let computerSelection = computerPlay();
	if (playerSelection === computerSelection) {
		return 'It\'s a tie! Both chose '+playerSelection;
	}

	if (playerSelection === 'swain') {
		if(computerSelection === 'anivia') {
			computerScore++;
			return 'You lose! Swain loses to Anivia';
		} else {
			playerScore++;
			return 'You win! Swain beats Zilean';
		}
	} else if (playerSelection === 'anivia') {
		if(computerSelection === 'zilean') {
			computerScore++;
			return 'You lose! Anivia loses to Zilean';
		} else {
			playerScore++;
			return 'You win! Anivia beats Swain';
		}
	} else if (playerSelection === 'zilean') {
		if(computerSelection === 'rock') {
			computerScore++;
			return 'You lose! Zilean loses to Swain';
		} else {
			playerScore++;
			return 'You win! Zilean beats Anivia';
		}
	} else if (playerSelection === 'ryze') {
		//capitalize first letter of name
		computerSelection = computerSelection[0].toUpperCase() + computerSelection.substring(1); 
		computerScore++;
		return 'You lose! Ryze loses to '+computerSelection;
	} else {
		return 'Invalid input';
	}
}

function game() {
	const playerSelection = prompt('Swain, Anivia, or Zilean?').toLowerCase();
	console.log(playRound(playerSelection));
}

let playerScore = 0;
let computerScore = 0;

game();
console.log(playerScore+'-'+computerScore);