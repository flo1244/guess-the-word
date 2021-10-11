//Javascript Document

const guessedLettersElement = document.querySelector(".guessed-letters"); //ul guessed letters
const guessButton = document.querySelector(".guess"); //guess button
const letterInput = document.querySelector(".letter"); //input letter box
const wordProgress = document.querySelector(".word-in-progress"); //p where the word in progress will appear
const remainingGuess = document.querySelector(".remaining"); //p remaining guess will appear
const numGuesses = document.querySelector("span"); //span in remaining guess shows number 
const message = document.querySelector(".message"); //display message when letter is guessed
const playAgain = document.querySelector(".play-again"); //Play again button

const word = "magnolia"; 
const guessedLetters = []; //contains the letters the player guesses.

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
		
	message.innerText = "";
	
	const guess = letterInput.value; //grabs the input value from box.*
	const goodGuess = inputCheck(guess);// will check our player's input.
	if(goodGuess){
		//mapped to the result of the function validates that the player’s input is returning a letter.
		makeGuess(guess);
	}
	letterInput.value = "";
});

//Function to check player's input.
const inputCheck = function (input){
	const acceptedLetter = /[a-zA-Z]/;
	if(input.length === 0) {
		//Is the input empty?
		message.innerText = "Please type a letter.";
	}else if (input.length > 1) {
		//Did you type more than one letter?
		message.innerText = "That's too many letters! Only 1 letter please.";
	}else if(!input.match(acceptedLetter)) {
		//Did you type anything besides a letter?
		message.innerText = "Please enter a letter from A-Z.";	
	}else {
		//Finally a single letter.
		return input;
	}
	
};

const makeGuess = function (guess) {
	guess = guess.toUpperCase();
	if(guess === guessedLetters){
		message.innerText = "You already guessed that letter, silly. Try again";
	}else{
		guessedLetters.push(guess);
		console.log(guessedLetters);
	}
};
