/* 
1. Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.
*/

function isOdd(num) {
  return Math.abs(num) % 2 === 1;
}
// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

function logOddNumbers(endNumber) {
  for (let startNumber = 1; startNumber <= endNumber; startNumber++) {
    if (startNumber % 2 === 1) {
      console.log(startNumber);
    }
  }
}

// logOddNumbers(99);

/*
Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.
*/

function shortLongShort(str1, str2) {
  let str1Length = str1.length;
  let str2Length = str2.length;

  if (str1Length < str2Length) {
    return str1 + str2 + str1;
  } else {
    return str2 + str1 + str2;
  }
}

// console.log(shortLongShort("abc", "defgh")); // "abcdefghabc"
// console.log(shortLongShort("abcde", "fgh")); // "fghabcdefgh"
// console.log(shortLongShort("", "xyz")); // "xyz"

/*
Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.
*/

function multisum(endNumber) {
  let result = 0;

  for (let startNumber = 1; startNumber <= endNumber; startNumber++) {
    if (startNumber % 3 === 0 || startNumber % 5 === 0) {
      result += startNumber;
    }
  }
  return result;
}

// console.log(multisum(3)); // 3
// console.log(multisum(5)); // 8
// console.log(multisum(10)); // 33
// console.log(multisum(1000)); // 234168

function greetings(nameArray, titleJobObj) {
  return `Hello, ${nameArray.join(" ")}! Nice to have a ${titleJobObj.title} ${
    titleJobObj.occupation
  } around.`;
}

// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

/*
Write a function that returns the next to last word in the String passed to it as an argument. Words are any sequence of non-blank characters. You may assume that the input String will always contain at least two words.
*/

function penultimate(sentence) {
  let wordsArray = sentence.split(" ");
  return wordsArray[wordsArray.length - 2];
}

// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

function oddities(arr) {
  return arr.filter((_, idx) => idx % 2 === 0);
}

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

function getRandomAge(minAge, maxAge) {
  return Math.ceil(Math.random() * (maxAge - minAge) + minAge);
}

// console.log(getRandomAge(20, 120));

/*
Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.
*/

function centerOf(words) {
  let wordsLength = words.length;
  let index = Math.floor(wordsLength / 2);

  if (wordsLength === 1) return words;

  if (wordsLength % 2 === 1) {
    return words[index];
  } else {
    return words[index - 1] + words[index];
  }
}

// let p = console.log;
// p(centerOf("I Love JavaScript")); // "a"
// p(centerOf("Launch School")); //) " "
// p(centerOf("Launch")); // "un"
// p(centerOf("Launchschool")); // "hs"
// p(centerOf("x")); // "x"

function negative(number) {
  return number >= 0 ? -number : number;
}

// console.log(negative(5)); // -5
// console.log(negative(-3)); // -3
// console.log(negative(0)); // -0

/*
Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.
- if string length is 1 or zero, return the string

if next is not equal to previous, add prev to string
*/

function crunch(str) {
  let finalStr = "";

  for (let idx = 1; idx <= str.length; idx++) {
    let currCharacter = str[idx];
    let prevCharacter = str[idx - 1];

    if (currCharacter !== prevCharacter) {
      finalStr += prevCharacter;
    }
  }
  return finalStr;
}

let p = console.log;
// p(crunch("ddaaiillyy ddoouubbllee")); // "daily double"
// p(crunch("4444abcabccba")); // "4abcabcba"
// p(crunch("ggggggggggggggg")); // "g"
// p(crunch("a")); // "a"
// p(crunch("")); // ""

function stringy(number) {
  let result = "";

  for (let count = 0; count < number; count++) {
    let digit = count % 2 === 0 ? "1" : "0";
    result += digit;
  }
  return result;
}

// p(stringy(6)); // "101010"
// p(stringy(9)); // "101010101"
// p(stringy(4)); // "1010"
// p(stringy(7)); // "1010101"

/*
A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.
Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number, in which case, return the double number as-is.
*/

function twice(number) {
  let numberStr = String(number);

  if (numberStr.length % 2 === 0) {
    let firstHalf = numberStr.slice(0, numberStr.length / 2);
    let secondHalf = numberStr.slice(numberStr.length / 2);

    if (firstHalf === secondHalf) {
      return Number(numberStr);
    } else {
      return Number(numberStr) * 2;
    }
  } else {
    return Number(numberStr) * 2;
  }
}

// p(twice(37)); // 74
// p(twice(44)); // 44
// p(twice(334433)); // 668866
// p(twice(444)); // 888
// p(twice(107)); // 214
// p(twice(103103)); // 103103
// p(twice(3333)); // 3333
// p(twice(7676)); // 7676

/*
Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).
*/

// p(cleanUp("---what's my +*& line?")); // " what s my line "

// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }

// p(isPalindrome("madam")); // true
// p(isPalindrome("Madam")); // false (case matters)
// p(isPalindrome("madam i'm adam")); // false (all characters matter)
// p(isPalindrome("356653")); // true

function isRealPalindrome(str) {
  let cleanString = str.toLowerCase().replace(/[^A-Za-z0-9]/g, "");

  return isPalindrome(cleanString);
}

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

// p(isRealPalindrome("madam")); // true
// p(isRealPalindrome("Madam")); // true (case does not matter)
// p(isRealPalindrome("Madam, I'm Adam")); // true (only alphanumerics matter)
// p(isRealPalindrome("356653")); // true
// p(isRealPalindrome("356a653")); // true
// p(isRealPalindrome("123ab321")); // false

/*
Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.
A:
Initialize a result array with the first number
Iterate over the array starting from index 1
  - let sum be the current plus previous
  - append sum to result
Return result  
*/

function runningTotal(numbers) {
  let sum = 0;

  return numbers.map((num) => (sum += num));
}

// p(runningTotal([2, 5, 13])); // [2, 7, 20]
// p(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
// p(runningTotal([3])); // [3]
// p(runningTotal([])); // []

// function wordSizes(sentence) {
//   if (sentence.length === 0) return {};

//   let wordSizeCount = {};
//   let words = sentence.split(" ");

//   words.forEach((word) => {
//     if (word.length === 0) return;
//     wordSizeCount[word.length] = (wordSizeCount[word.length] || 0) + 1;
//   });
//   return wordSizeCount;
// }

// p(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 1, "6": 1 }
// p(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 1, "7": 2 }
// p(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
// p(wordSizes("")); // {}

function wordSizes(sentence) {
  let wordSizeCount = {};
  let cleanSentence = sentence.toLowerCase().replace(/[^a-z\s]/g, "");
  let cleanWords = cleanSentence.split(" ");

  cleanWords.forEach((cleanWord) => {
    if (cleanWord.length === 0) return;

    wordSizeCount[cleanWord.length] =
      (wordSizeCount[cleanWord.length] || 0) + 1;
  });
  return wordSizeCount;
}

// don't count punctuation
// p(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 2 }
// p(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 3 }
// p(wordSizes("What's up doc?")); // { "2": 1, "3": 1, "5": 1 }
// p(wordSizes("")); // {}

function swap(str) {
  return str
    .split(" ")
    .map((word) => {
      if (word.length === 1) {
        return word;
      } else {
        return word[word.length - 1] + word.slice(1, word.length - 1) + word[0];
      }
    })
    .join(" ");
}

// p(swap("Oh what a wonderful day it is")); // "hO thaw a londerfuw yad ti si"
// p(swap("Abcde")); // "ebcdA"
// p(swap("a")); // "a"

function union(arr1, arr2) {
  let result = [...arr1];

  arr2.forEach((el) => {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  // console.log(result === arr1);
  return result;
}

// p(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]

function interleave(arr1, arr2) {
  let result = [];

  arr1.forEach((el, idx) => result.push(el, arr2[idx]));
  return result;
}

function interleave(arr1, arr2) {
  return arr1
    .map((el, idx) => {
      return [el, arr2[idx]];
    })
    .flat();
}

// p(interleave([1, 2, 3], ["a", "b", "c"]));
