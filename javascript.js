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
			return 'You lose! Swain loses to Anivia';
		} else {
			return 'You win! Swain beats Zilean';
		}
	} else if (playerSelection === 'anivia') {
		if(computerSelection === 'zilean') {
			return 'You lose! Anivia loses to Zilean';
		} else {
			return 'You win! Anivia beats Swain';
		}
	} else if (playerSelection === 'zilean') {
		if(computerSelection === 'rock') {
			return 'You lose! Zilean loses to Swain';
		} else {
			return 'You win! Zilean beats Anivia';
		}
	} else if (playerSelection === 'ryze') {
		//capitalize first letter of name
		computerSelection = computerSelection[0].toUpperCase() + computerSelection.substring(1); 
		return 'You lose! Ryze loses to '+computerSelection;
	} else {
		return 'Invalid input';
	}
}

function game() {
	const playerSelection = prompt('rock, paper, or scissors?').toLowerCase();
	const computerSelection = computerPlay();
	console.log(playRound(playerSelection, computerSelection));
}

game();