// Random number between 1 and 10

const secretNumber = Math.floor(Math.random() * 10) + 1;

let attempts = 3;

console.log("===== Number Guessing Game =====");

while (attempts > 0) {

    let guess = Number(prompt("Guess a number between 1 and 10"));

    if (guess === secretNumber) {
        console.log("🎉 Congratulations! You guessed correctly.");
        alert("You Win!");
        break;
    }

    else if (guess > secretNumber) {
        console.log("Too High!");
        alert("Too High!");
    }

    else {
        console.log("Too Low!");
        alert("Too Low!");
    }

    attempts--;

    console.log("Remaining Attempts:", attempts);
}

if (attempts === 0) {
    console.log("Game Over!");
    console.log("Correct Number was:", secretNumber);
    alert("Game Over!");
}
