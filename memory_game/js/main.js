var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

cardsInPlay.length;

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} else {
  		console.log("Sorry, try again.");
	}
}

function flipCard(cardId) {
	flipCard(0);
	flipCard(2);
	console.log("User flipped " + cards[cardId])
	cardsInPlay.push(cards[cardsId]);
	console.log(cards[cardId]);
	console.log(cards[cardId]);
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[2])
		alert("You found a match!");
	checkForMatch();
	} else {
		alert("Sorry, try again.");
	}
	


	
	
};
