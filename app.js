#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a numbe 1-6:",
    },
]);
if (answer.userGuessNumber === randomNumber) {
    console.log("Congtratulations! you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
