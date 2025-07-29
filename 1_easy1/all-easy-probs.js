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

let p = console.log;
p(centerOf("I Love JavaScript")); // "a"
p(centerOf("Launch School")); //) " "
p(centerOf("Launch")); // "un"
p(centerOf("Launchschool")); // "hs"
p(centerOf("x")); // "x"
