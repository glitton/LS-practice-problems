// function leadingSubstrings(string) {
//   let result = [];
//   let substring = "";

//   for (let idx = 0; idx < string.length; idx++) {
//     let current = string[idx];
//     substring += current;
//     result.push(substring);
//   }
//   return result;
// }

function leadingSubstrings(string) {
  let result = [];

  for (let length = 1; length <= string.length; length++) {
    result.push(string.slice(0, length));
  }
  return result;
}
// Using map
// function leadingSubstrings(string) {
//   let stringArray = string.split("");

//   return stringArray.map((_, idx) => {
//     return string.slice(0, idx + 1);
//   });
// }

// console.log(leadingSubstrings("abc")); // ["a", "ab", "abc"]
// console.log(leadingSubstrings("a")); // ["a"]
// console.log(leadingSubstrings("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]

function substrings(string) {
  let substringsArray = [];
  for (let idx = 0; idx < string.length; idx++) {
    let substring = string.slice(idx);
    substringsArray = substringsArray.concat(leadingSubstrings(substring));
  }
  return substringsArray;
}

// console.log(substrings("abcde"));

function palindromes(string) {
  return substrings(string);
}

function isPalindrome(word) {
  return word === word.reverse();
}
const log = console.log;

log(palindromes("abcd")); // []
// palindromes("madam"); // [ "madam", "ada" ]

// palindromes("hello-madam-did-madam-goodbye");
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

// palindromes("knitting cassettes");
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
