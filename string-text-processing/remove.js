const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function removeVowels(strArray) {
  return strArray.map((str) =>
    str
      .split("")
      .filter((letter) => !vowels.includes(letter))
      .join("")
  );
}

/*
- Iterate over input array words up to its length
- For each word in the input array, split each character into individual letters 
  Add non-vowels to a new array
- Return new array
*/

console.log(removeVowels(["abcdefghijklmnopqrstuvwxyz"]));
console.log(removeVowels(["green", "YELLOW", "black", "white"]));
console.log(removeVowels(["ABC", "AEIOU", "XYZ"]));
