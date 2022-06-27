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

console.log(computerPlay())
console.log(computerPlay())
console.log(computerPlay())