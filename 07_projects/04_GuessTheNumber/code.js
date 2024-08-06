// Constants for the range of random numbers
const min = 1;
const max = 100;

// Generate a random number between min and max
let RandomNumber = Math.floor(Math.random() * (max - min + 1) + min);

// Cache DOM elements for easy access
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

// Create a new paragraph element for the 'Start new Game' button
const p = document.createElement('p');

// Initialize game state variables
let prevGuess = [];
let numGuess = 1;
let playGame = true;

// Event listener for the submit button click
if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent form submission
        const guess = parseInt(userInput.value); // Get user's guess and convert to integer
        validGuess(guess); // Validate and process the guess
    });
}

// Validate the user's guess
function validGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 to 100'); // Notify user of invalid input
        return;
    } else {
        prevGuess.push(guess); // Record the guess
        if (numGuess === 3) {
            displayGuess(guess); // Display the guess
            displayMessage(`Game Over. Random value was ${RandomNumber}`); // Notify game over
            endGame(); // End the game
        } else {
            displayGuess(guess); // Display the guess
            checkGuess(guess); // Check if the guess is correct
        }
    }
}

// Check if the guess is correct and provide feedback
function checkGuess(guess) {
    if (guess === RandomNumber) {
        displayMessage(`You guessed it right`); // Notify correct guess
        endGame(); // End the game
    } else if (guess < RandomNumber) {
        displayMessage(`Number is too low`); // Notify guess is too low
    } else if (guess > RandomNumber) {
        displayMessage(`Number is too high`); // Notify guess is too high
    }
}

// Update the display with the current guess and remaining attempts
function displayGuess(guess) {
    userInput.value = ''; // Clear the input field
    guessSlot.innerHTML = prevGuess.join(', '); // Display all guesses
    numGuess++; // Increment the number of guesses
    remaining.innerHTML = `${11 - numGuess}`; // Update remaining attempts
}

// Display a message to the user
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`; // Show the message
}

// End the game and set up for a new game
function endGame() {
    userInput.value = ''; // Clear the input field
    userInput.setAttribute('disabled', ''); // Disable the input field
    p.classList.add('button'); // Add a class for styling the button
    p.innerHTML = `<button id="newGame">Start new Game</button>`; // Create a new game button
    startOver.appendChild(p); // Add the button to the DOM
    playGame = false; // Set game state to false
    newGame(); // Set up new game button functionality
}

// Set up the functionality for starting a new game
function newGame() {
    const newGameButton = document.querySelector('#newGame'); // Get the new game button
    newGameButton.addEventListener('click', () => {
        // Reset game variables and UI for a new game
        RandomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled'); // Enable the input field
        startOver.removeChild(p); // Remove the new game button from the DOM
        playGame = true; // Set game state to true
    });
}
