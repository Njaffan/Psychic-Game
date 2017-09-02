var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var loses = 0;
var guessesLeft
var guessedLetters
var Guesses;

resetGame();
display();

document.onkeyup = function(event) {
  var guess = event.key;
  if (guess === Guesses) {
    win();
  } else if (guessesLeft - 1 === 0) {
    lost();
  } else {
    fail(guess);
  }

  display();
}

function display() {
  var winsP = document.getElementById("wins");
  var losesP = document.getElementById("loses");
  var guessLeft = document.getElementById("guessLeft");
  var letterGuessed = document.getElementById("guessed");
  winsP.innerHTML = wins;
  losesP.innerHTML = loses;
  guessLeft.innerHTML = guessesLeft;
  letterGuessed.innerHTML = guessedLetters.join(',');
}

function win() {
  alert ('You Know something Jon snow')
  wins++;

  resetGame();
}

function lost() {
  alert ('You know nothing Jon Snow')
  loses++;

  resetGame();
}

function fail(letter) {
  guessesLeft--;
  guessedLetters.push(letter);
}

function resetGame() {
  guessesLeft = 9;
  guessedLetters = [];
  Guesses = letters[Math.floor(Math.random() * letters.length)];
  console.log("Letter to guess: " + Guesses);
}