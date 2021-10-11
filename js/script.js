//Javascript Document

const guessedLetters = document.querySelector(".guessed-letters"); //ul guessed letters
const guessButton = document.querySelector(".guess"); //guess button
const letterInput = document.querySelector(".letter"); //input letter box
const wordProgress = document.querySelector(".word-in-progress"); //p where the word in progress will appear
const remainingGuess = document.querySelector(".remaining"); //p remaining guess will appear
const numGuesses = document.querySelector("span"); //span in remaining guess shows number 
const message = document.querySelector(".message"); //display message when letter is guessed
const playAgain = document.querySelector(".play-again"); //Play again button

const word = "magnolia"; //test purposes

//Adds placeholder for each letter func.
const placeholder = function (word) {
	const letterHolder = []; //empty array which will be filled with same number of circles as letters once it's looped.
	for(const letter of word){
		console.log(letter);
		letterHolder.push = ("●");
	}
	wordProgress.innerText = letterHolder.join("");
};

placeholder(word);

//Captures letter input when clicked.
guessButton.addEventListener("click", function (e){
	e.preventDefault(); // prevents reloading default.
	const captureLetter = letterInput.value;
	console.log(captureLetter);
	letterInput.value = "";
});

//

