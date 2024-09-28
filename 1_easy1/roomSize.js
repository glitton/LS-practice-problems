const readline = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

let length = readline.question("Enter the length of the room in meters: ");
let width = readline.question("Enter the width of the room in meters: ");

length = parseInt(length, 10);
width = parseInt(width, 10);

let areaMeters = length * width;
let areaFeet = (areaMeters * SQMETERS_TO_SQFEET).toFixed(2);

console.log(
  `The area of the room is ${areaMeters} square meters (${areaFeet} square feet).`
);

//Launch School version uses parseInt
let readlineSync = require("readline-sync");

// const SQMETERS_TO_SQFEET = 10.7639;

// console.log("Enter the length of the room in meters:");
// let length = readlineSync.prompt();
// length = parseInt(length, 10);

// console.log("Enter the width of the room in meters:");
// let width = readlineSync.prompt();
// width = parseInt(width, 10);

// let areaInMeters = length * width;
// let areaInFeet = areaInMeters * SQMETERS_TO_SQFEET;

// console.log(
//   `The area of the room is ${areaInMeters.toFixed(
//     2
//   )} square meters (${areaInFeet.toFixed(2)} square feet).`
// );
