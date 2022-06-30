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

function onClick(champ) {
	//standard response
	result.textContent = playRound(champ);
	score.textContent = playerScore+'-'+computerScore;
	if (champ === 'ryze') {
		ryzeCount++;
		console.log(ryzeCount+" ryze");

		//if ryze >= 10, increase image size
		if(ryzeCount >= 10) {
			ryzeSize += 4;
			ryzeimg.style.height = ryzeSize+'px';
		}
	}

	switch(ryzeCount) {
		case 2:   //ryze border color changes
			ryze.style.borderColor = 'darkblue';
			break;
		case 5:   //special result text
			result.textContent = 'Our blue brother ceases his slumber. Lend him your runes.'
			result.style.color = 'red';
			result.style.backgroundColor = 'darkblue';
			break;
		case 6:
			result.style.color = 'black'; //reset text color
			result.style.backgroundColor = 'white';
			break;
		case 7:   //all borders and title text turn blue
			cards.forEach(card => card.style.borderColor = 'darkblue');
			const title = document.querySelector('h1');
			title.style.color = 'darkblue';
			const info = document.querySelector('h3');
			info.style.color = 'darkblue';
			break;
	}


}

const DARKBLUE = '#0a0a3c';

let playerScore = 0;
let computerScore = 0;
let ryzeCount = 0;
let ryzeSize = 120;

const result = document.querySelector('.prevround');
const score = document.querySelector('.score');
const ryze = document.querySelector('#ryze');         //card containing ryze (the click target)
const ryzeimg = document.querySelector('#ryzeimg');   //ryze image

//add click event listener to every card
const cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener("click", () => {
    console.log(card.id+" clicked.");
	onClick(card.id);
}));