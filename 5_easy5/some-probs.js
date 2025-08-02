/*
Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, rounded down to the integer component of the average. The array will never be empty, and the numbers will always be positive integers.
*/

function average(arr) {
  return Math.floor(arr.reduce((sum, curr) => sum + curr, 0) / arr.length);
}

let p = console.log;
// p(average([1, 5, 87, 45, 8, 8])); // 25
// p(average([9, 47, 23, 95, 16, 52])); // 40

/*
Create a function that takes two integers as arguments. The first argument is a count, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the count argument. The value of each element should be a multiple of the starting number.

You may assume that the count argument will always be an integer greater than or equal to 0. The starting number can be any integer. If the count is 0, the function should return an empty array.
*/

function sequence(count, startingNumber) {
  if (count === 0) return [];

  let result = [];
  let newNumber = startingNumber;

  while (result.length < count) {
    result.push(newNumber);
    newNumber += startingNumber;
  }
  return result;
}

// p(sequence(5, 1)); // [1, 2, 3, 4, 5]
// p(sequence(4, -7)); // [-7, -14, -21, -28]
// p(sequence(3, 0)); // [0, 0, 0]
// p(sequence(0, 1000000)); // []

/*
Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.
*/

function reverseWords(sentence) {
  const MIN_WORD_LENGTH = 5;
  let words = sentence.split(" ");

  return words
    .map((word) => {
      if (word.length >= MIN_WORD_LENGTH) {
        return word.split("").reverse().join("");
      } else {
        return word;
      }
    })
    .join(" ");
}

// p(reverseWords("Professional")); // "lanoisseforP"
// p(reverseWords("Walk around the block")); // "Walk dnuora the kcolb"
// p(reverseWords("Launch School")); // "hcnuaL loohcS"

function isBalanced(str) {
  let parens = 0;

  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] === "(") {
      parens++;
    } else if (str[idx] === ")") {
      parens--;
    }
    if (parens < 0) return false;
  }
  return parens === 0;
}

// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);
