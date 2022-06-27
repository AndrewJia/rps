function computerPlay() {
	//random number from 0-2
	let random = Math.floor(Math.random() * 3);

	switch(random) {
		case 0:
			return 'rock';
		case 1:
			return 'paper';
		case 2:
			return 'scissors'
		default:
			return 'something went wrong in computerPlay'
	}
}

function playRound(playerSelection, computerSelection) {
	if(playerSelection === computerSelection) {
		return 'It\'s a tie! Both chose '+playerSelection;
	}
	if(playerSelection === 'rock') {
		if(computerSelection === 'paper') {
			return 'You lose! Paper beats Rock';
		} else {
			return 'You win! Rock beats Scissors';
		}
	} else if (playerSelection === 'paper') {
		if(computerSelection === 'scissors') {
			return 'You lose! Scissors beats Paper';
		} else {
			return 'You win! Paper beats Rock';
		}
	} else {
		if(computerSelection === 'rock') {
			return 'You lose! Rock beats Scissors';
		} else {
			return 'You win! Scissors beats Paper';
		}
	}
}

function game() {
	const playerSelection = prompt('rock, paper, or scissors?').toLowerCase();
	const computerSelection = computerPlay();
	console.log(playRound(playerSelection, computerSelection));
}

game();