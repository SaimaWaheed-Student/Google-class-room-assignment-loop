// 1. Creating a Lesson Plan(Using for loop )
// Objective: Create a list of lesson objects in TypeScript with alternating statuses to indicate
// whether each lesson is running this year.
// Steps to Follow:
// 1. Create a blank array: Start by setting up an empty array named myWork that will hold
// objects.
// 2. Use a loop to create lessons: Write a for loop that runs from 1 to 10. In each iteration:
// o Create an object representing a lesson.
// o Each lesson should have a name property, which is a string like "Lesson 1",
// "Lesson 2", etc.
// o Each lesson should also have a status property, which alternates between true
// and false. This means "Lesson 1" will have status: true, "Lesson 2" will have
// status: false, and so on.
var myWork = [];
for (var i = 1; i <= 10; i++) {
    var lesson = {
        name: "Lesson ".concat(i),
        // Use ternary operator to set status based on even/odd number
        status: i % 2 === 0 ? false : true,
    };
    myWork.push(lesson);
}
console.log(myWork);
// 2. Guessing Game (Using while loop )
// Objective: Create a simple number guessing game where the user tries to guess a randomly
// generated number between 1 and a specified maximum value using a predefined set of guesses.
// Steps to Follow:
// 1. Set a maximum value: Create a variable to store the maximum value for the number
// guessing game.
// 2. Generate a random number: Use Math.random() and Math.floor() to generate a
// random number between 1 and the maximum value. Log this value to the console for
// development purposes.
// 3. Track the guess status: Create a variable to track whether the user's guess is correct. Set
// it to false initially.
// 4. Simulate user guesses: Use an array to store a series of predefined guesses.
// 5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the
// correct guess is made.
// 6. Check the user's guess: Inside the loop, check if the current guess matches the random
// number. Provide feedback if the guess is too high or too low.
function guessingGame(max, guesses) {
    var randomNumber = Math.floor(Math.random() * max) + 1;
}
console.log("Random number (for development only):");
//   let isCorrect = false;
//   let attempt = 0;
//   while (!isCorrect && attempt < guesses.length) {
//     const currentGuess = guesses[attempt];
//     if (currentGuess === randomNumber) {
//       console.log("Congratulations! You guessed the number in", attempt + 1, "tries.");
//       isCorrect = true;
//     } else if (currentGuess < randomNumber) {
//       console.log("Too low! Try again.");
//     } else {
//       console.log("Too high! Try again.");
//     }
//     attempt++;
//   }
//   if (!isCorrect) {
//     console.log("Out of guesses! The number was:", randomNumber);
//   }
// }
// // Example usage:
// const max = 100;
// const predefinedGuesses = [50, 75, 20, 90];
// guessingGame(max, predefinedGuesses);
