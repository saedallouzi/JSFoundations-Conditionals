const prompt = require("prompt-sync")(); // Please don't touch me :slight_smile:

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const name = prompt("What's your name? ");
console.log(Hi, I'm ${name}.);

const num1 = parseInt(prompt("Please enter the first number  "));

const num2 = parseInt(prompt("Please enter the second number "));

const operation = prompt("Please choose the operation (+, -, /, ) ");

if (Number.isInteger(num1) && Number.isInteger(num2)) {
  if (operation === "+") {
    console.log(num1 + num2);
  } else if (operation === "-") {
    console.log(num1 - num2);
  } else if (operation === "/") {
    console.log(num1 / num2);
  } else if (operation === "") {
    console.log(num1 * num2);
  } else {
    console.log("operation is not valid. ");
  }
} else console.log("invalid number");