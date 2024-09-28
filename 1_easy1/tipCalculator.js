const readline = require("readline-sync");

console.log("Welcome to this Tip Calculator!");

let bill = parseFloat(readline.question("What is the bill amount? "));

let tipPercentage = parseFloat(
  readline.question(
    "What is the tip percentage?  Example 10 for 10 percent, 5 for 5 percent. "
  )
);

let tipAmount = (tipPercentage / 100) * bill;
let totalBill = bill + tipAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total bill is $${totalBill.toFixed(2)}`);
