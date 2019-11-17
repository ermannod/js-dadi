
//Player 1
var dice1 = Math.floor(Math.random() * 6 ) + 1 ;
console.log("player 1: " + dice1);


// player 2

var dice2 = Math.floor(Math.random() * 6 ) + 1 ;
console.log("player 2: " + dice2);


// Who won
if (dice1 === dice2) {
  console.log("Player 1 scores " + dice1 + " and Player 2 scores " + dice2 + " - It's a tie!");
}
else if (dice1 > dice2) {
  console.log("Player 1 wins!");
}
else{
  console.log("Player 2 wins!");
}
