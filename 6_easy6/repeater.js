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

console.log(repeater("Hello")); // "HHeelllloo"
console.log(repeater("Good job!")); // "GGoooodd  jjoobb!!"
console.log(repeater("")); // ""
