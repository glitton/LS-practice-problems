/*
Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

Input: string
Output: new string
Rules: 
-Return a new string where every character in the string is doubled
-Spaces (??) as well as punctuation is also doubled

Examples/Test Cases
Data Structure: String, Array

Algorithm:
1.  Split string into individual characters
2.  Iterate and append characters into a new array twice
3.  Convert array back to string
4.  Return new string

*/

function repeater(str) {
  return str
    .split("")
    .map((char) => {
      return char + char;
    })
    .join("");
}

// console.log(repeater("Hello")); // "HHeelllloo"
// console.log(repeater("Good job!")); // "GGoooodd  jjoobb!!"
// console.log(repeater("")); // ""

function doubleConsonants(str) {
  const CONSONANTS = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let finalString = [];

  str.split("").map((char) => {
    if (CONSONANTS.includes(char.toLowerCase())) {
      finalString.push(char, char);
    } else {
      finalString.push(char);
    }
  });
  // console.log(finalString);
  return finalString.join("");
}

console.log(doubleConsonants("String")); // "SSttrrinngg"
console.log(doubleConsonants("Hello-World!")); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants("July 4th")); // "JJullyy 4tthh"
console.log(doubleConsonants("")); // ""
