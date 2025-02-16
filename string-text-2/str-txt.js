let p = console.log;

/* 1. Uppercase Check
P: Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; false otherwise. Ignore characters that are not alphabetic.
*/

// function isUppercase(str) {
//   const alphaOnly = /^[a-zA-Z]+$/;

//   if (str.length === 0) return true;

//   for (let idx = 0; idx < str.length; idx++) {
//     if (str[idx].match(alphaOnly) && str[idx] !== str[idx].toUpperCase()) {
//       return false;
//     }
//   }
//   return true;
// }

function isUppercase(str) {
  return str === str.toUpperCase();
}

// p(isUppercase("t")); // false
// p(isUppercase("T")); // true
// p(isUppercase("Four Score")); // false
// p(isUppercase("FOUR SCORE")); // true
// p(isUppercase("4SCORE!")); // true
// p(isUppercase("")); // true

/* 2. Delete Vowels
P: Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.
*/

function removeVowels(arr) {
  return arr.map((letters) => {
    return letters.replace(/[aeiouAEIOU]/g, "");
  });
}

// p(removeVowels(["abcdefghijklmnopqrstuvwxyz"])); // ["bcdfghjklmnpqrstvwxyz"]
// p(removeVowels(["green", "YELLOW", "black", "white"])); // ["grn", "YLLW", "blck", "wht"]
// p(removeVowels(["ABC", "AEIOU", "XYZ"])); // ["BC", "", "XYZ"]

/* 3. Lettercase Counter
Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

*/

function letterCaseCount(str) {
  const alpha = /[a-zA-Z]/g;
  let result = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx].match(alpha)) {
      if (str[idx].toLowerCase() === str[idx]) {
        result["lowercase"] += 1;
      } else {
        result["uppercase"] += 1;
      }
    } else {
      result["neither"] += 1;
    }
  }
  return result;
}

// p(letterCaseCount("abCdef 123")); // { lowercase: 5, uppercase: 1, neither: 4 }
// p(letterCaseCount("AbCd +Ef")); // { lowercase: 3, uppercase: 3, neither: 2 }
// p(letterCaseCount("123")); // { lowercase: 0, uppercase: 0, neither: 3 }
// p(letterCaseCount("")); // { lowercase: 0, uppercase: 0, neither: 0 }

/* 4. Capitalize Words
Write a function that takes a string as an argument and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.

*/

function wordCap(sentence) {
  let words = sentence.split(" ");

  return words
    .map((letters) => {
      return letters[0].toUpperCase() + letters.toLowerCase().slice(1);
    })
    .join(" ");
}

// p(wordCap("four score and seven")); // "Four Score And Seven"
// p(wordCap("the javaScript language")); // "The Javascript Language"
// p(wordCap('this is a "quoted" word')); // 'This Is A "quoted" Word'

/* 5.
p:Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged
*/

function swapCase(str) {
  const alphaLower = /[a-z]/g;
  const alphaUpper = /[A-Z]/g;

  return str
    .split("")
    .map((ltr) => {
      if (ltr.match(alphaLower)) {
        return ltr.toUpperCase();
      } else if (ltr.match(alphaUpper)) {
        return ltr.toLowerCase();
      } else {
        return ltr;
      }
    })
    .join("");
}

// p(swapCase("CamelCase")); // "cAMELcASE"
// p(swapCase("Tonight on XYZ-TV")); // "tONIGHT ON xyz-tv"

/* 6. Staggered Caps (Part 1)
Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

*/

// function staggeredCase(str) {
//   let result = "";

//   for (let idx = 0; idx < str.length; idx++) {
//     if (idx % 2 === 0) {
//       result += str[idx].toUpperCase();
//     } else {
//       result += str[idx].toLowerCase();
//     }
//   }
//   return result;
// }

// p(staggeredCase("I Love Launch School!")); // "I LoVe lAuNcH ScHoOl!"
// p(staggeredCase("ALL_CAPS")); // "AlL_CaPs"
// p(staggeredCase("ignore 77 the 4444 numbers")); // "IgNoRe 77 ThE 4444 nUmBeRs"

/* 7. Staggered Caps (Part 2)
P: Modify the function from the previous exercise so it ignores non-alphabetic characters when determining whether it should uppercase or lowercase each letter. The non-alphabetic characters should still be included in the return value; they just don't count when toggling the desired case.
E:
D: input string, array of words

*/

// function staggeredCase(str) {
//   let needUpper = true;

//   return str
//     .split("")
//     .map((char) => {
//       char = char.toLowerCase();

//       if (char >= "a" && char <= "z") {
//         if (needUpper) {
//           needUpper = false;
//           return char.toUpperCase();
//         } else {
//           needUpper = true;
//           return char.toLowerCase();
//         }
//       } else {
//         return char;
//       }
//     })
//     .join("");
// }

// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );

/* 8. How long are you?
Write a function that takes a string as an argument and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array.

You may assume that every pair of words in the string will be separated by a single space.
*/

function wordLengths(str) {
  if (str === undefined || str.length === 0) return [];

  return str.split(" ").map((word) => {
    return `${word} ${word.length}`;
  });
}

p(wordLengths("cow sheep chicken"));
// ["cow 3", "sheep 5", "chicken 7"]

p(wordLengths("baseball hot dogs and apple pie"));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

p(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

p(wordLengths("Supercalifragilisticexpialidocious"));
// ["Supercalifragilisticexpialidocious 34"]

p(wordLengths("")); // []
p(wordLengths()); // []
