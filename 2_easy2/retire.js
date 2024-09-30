const readline = require("readline-sync");

const age = Number(readline.question("What is your age? "));
const retirementAge = Number(
  readline.question("At what age would you like to retire? ")
);

const today = new Date();
const currentYear = today.getFullYear();

const yearsBeforeRetirement = retirementAge - age;
const retirementYear = currentYear + yearsBeforeRetirement;

console.log(`It's ${currentYear}.  You will retire in ${retirementYear}`);
console.log(`You have only ${yearsBeforeRetirement} years of work to go!`);
