/*
Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

Algorithm:
1.  Determine length of the string:
2.  If length is odd:
- Divide the length - 1 in half
- Use this number as the index of the letter you want to return
- Return the letter
4.  If the length is even:
- Divide the length in half
- Return the letters that correspond to the last index and the index before
- return the 2 letters

*/

// function centerOfMine(text) {
//   if (text.length % 2 === 1) {
//     let centerIndex = Math.floor(text.length / 2);
//     return text[centerIndex];
//   } else {
//     centerIndex = text.length / 2;
//     return text[centerIndex - 1] + text[centerIndex];
//   }
// }

//Launch School uses substring

function centerOf(text) {
  if (text.length % 2 === 1) {
    let centerIndex = (text.length - 1) / 2;
    return text[centerIndex];
  } else {
    let leftIndex = text.length / 2 - 1;
    return text.substring(leftIndex, leftIndex + 2);
  }
}

console.log(centerOf("I Love JavaScript")); // "a"
console.log(centerOf("Launch School")); // " "
console.log(centerOf("Launch")); // "un"
console.log(centerOf("Launchschool")); // "hs"
console.log(centerOf("x")); // "x"

// let text = "Launchschool";
// console.log(text.length);

// console.log(Math.floor(text.length / 2));
