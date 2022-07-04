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
		if(computerSelection === 'swain') {
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

//helper function that resets result text color
function resetText() {
	if(ryzeCount <= 15) {
		result.style.color = 'black';
		result.style.backgroundColor = 'white';
	} else {
		result.style.color = 'red';
		result.style.backgroundColor = DARKBLUE;
	}
}

function onClick(champ) {
	//if ryze
	if (champ === 'ryze') {
		ryzeCount++;
		console.log(ryzeCount+" ryze");

		//if ryze >= 10, increase image size
		if(ryzeCount >= 10) {
			ryzeSize += 4;
			ryzeimg.style.height = ryzeSize+'px';
		}
	} else {      //not ryze
		if(ryzeCount >= 20) {
			result.textContent = 'Follow the plan, imbecile. EQEQEQEQEQ'
			result.style.color = 'red';
			result.style.backgroundColor = DARKBLUE;
			playerScore = `${playerScore} Ryze`;
			score.textContent = playerScore+'-'+computerScore;
		}
		return;   //no bonus effects
	}

	//standard response
	resetText(); //reset text color
	result.textContent = playRound(champ);
	score.textContent = playerScore+'-'+computerScore;
	
	switch(ryzeCount) {
		case 2:   //ryze border color changes
			ryze.style.borderColor = 'darkblue';
			break;
		case 5:   //special result text
			result.textContent = 'Our blue brother ceases his slumber. Lend him your runes.'
			result.style.color = 'red';
			result.style.backgroundColor = 'darkblue';
			break;
		case 7:   //all borders and title text turn blue
			cards.forEach(card => card.style.borderColor = 'darkblue');
			title.style.color = 'darkblue';
			info.style.color = 'darkblue';
			break;
		case 12:  //change info text
			info.textContent = "A desperate ritual with our Great Blue Lord! Click on Ryze to play."
			break;
		case 15:  //background is blue
			document.body.style.backgroundColor = DARKBLUE;
			score.style.color = 'red';
			score.style.fontSize = '48px';
			break;
		case 18:  //player score is now 'Ryze'
			playerScore = 'Ryze';
			break;
		case 22:  //replace 'Score' indicator with 'Ryze'
			const scoreHeader = document.querySelector('.results h3');
			scoreHeader.textContent = 'RYZE';
			scoreHeader.setAttribute('style', 'color: red; background: #0a0a3c; font-size: 96px; font-family: ');  
			break; 
		case 30:  //put champs in rune prison
			const images = document.querySelectorAll('img');
			for(let i = 0; i < 3; i++) {
				images[i].src = './images/Rune_Prison.webp';
				images[i].style.width = '120px';
			}
			ryzeimg.src = './images/RyzePhase2.png';
			ryzeimg.style.height = ryzeSize+'px';
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
const title = document.querySelector('h1');
const info = document.querySelector('h3');

//add click event listener to every card
const cards = document.querySelectorAll('.card');
cards.forEach(card => card.addEventListener("click", () => {
    console.log(card.id+" clicked.");
	onClick(card.id);
}));