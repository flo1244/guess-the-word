//Javascript Document

const guessedLettersElement = document.querySelector(".guessed-letters"); //ul guessed letters
const guessButton = document.querySelector(".guess"); //guess button
const letterInput = document.querySelector(".letter"); //input letter box
const wordInProgress = document.querySelector(".word-in-progress"); //p where the word in progress will appear
const remainingGuess = document.querySelector(".remaining"); //p remaining guess will appear
const numGuesses = document.querySelector("span"); //span in remaining guess shows number 
const message = document.querySelector(".message"); //display message when letter is guessed
const playAgain = document.querySelector(".play-again"); //Play again button

const word = "magnolia"; 
const guessedLetters = []; //contains the letters the player guesses.

//Adds placeholder for each letter func.
const placeholder = function (word) {
	const placeholderLetters = []; //empty array which will be filled with same number of circles as "word" once it's looped.
	for(const letter of word){
		console.log(letter);
		placeholderLetters.push("●");
	}
	wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

//Captures letter input when clicked.
guessButton.addEventListener("click", function (e){
	e.preventDefault(); // prevents reloading default.
	
	message.innerText = "";//empty message paragraph.
				
	const guess = letterInput.value; //grabs the input value from box.*
	
	const goodGuess = inputCheck(guess);// will check our player's input.
	//console.log(goodGuess);
	
	if(goodGuess){
		//mapped to the result of the function validates that the player’s input is returning a letter.
		makeGuess(guess);
	}
	letterInput.value = "";//clears letter input.
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

//Function that will check for same letter input. 
const makeGuess = function (guess) {
	guess = guess.toUpperCase();
	if(guessedLetters.includes(guess)){
		message.innerText = "You already guessed that letter, silly. Try again!";
	}else{
		guessedLetters.push(guess);
		console.log(guessedLetters);
		showLetter();
		updateGuess(guessedLetters);
	}
};

//Function to show the guessed letters.
const showLetter = function (){
	guessedLettersElement.innerHTML = "";//empty ul where the player's guessed letters will display.
	//loops through array of letters.
	for(const letter of guessedLetters){
		
	const listItem = document.createElement("li");//creates list item for each letter in array.
	listItem.innerText = letter;
	guessedLettersElement.append(listItem);
		
	}
};

//Function to update the word in progress.
const updateGuess = function (guessedLetters){
	wordUpper = word.toUpperCase();
	const wordArray = wordUpper.split(""); // splits the word string into an array so that the letter can appear in the guessedLetters array
	console.log(wordArray);
	const correctLetters = []; //contains the correct guessed letter.
	
	//checks to see if wordArray contains any letters from guessedLetters array.
	for(const letter of wordArray){
	
		if(guessedLetters.includes(letter)){
			correctLetters.push(letter.toUpperCase());
		}else {
			correctLetters.push("●");
		}
		
	}
	//console.log(correctLetters);
	wordInProgress.innerText = correctLetters.join("");
	checkWin();
};

//Function to check if the player won.
const checkWin = function () {
	if(word.toUpperCase()=== wordInProgress.innerText) {
		message.classList.add("win");
		message.innerHTML = `<p class="highlight">You guessed correct the word! Congrats!</p>`
	}
};
