/*
P: Write a function that takes a string and returns an object containing the following three properties:

- the percentage of characters in the string that are lowercase letters
- the percentage of characters that are uppercase letters
- the percentage of characters that are neither
You may assume that the string will always contain at least one character.

Input: string
Output: object
Rules: Object contains 3 properties
- lowercase: percentage of lowercase letters
- uppercase: percentage of uppercase letters
- neither: percentage of character that are neither uppercase or lowercase
- String always contains one character
- space is a character and is neither

E: 
D: Current are string and object, don't need anything else

A:
- Initialize an empty object to store key/value pairs of lowercase, uppercase and neither
- Get the length of the string and assign it to a strLength variable
- Iterate over the string and check each character using a for loop (forEach is for an Array)
  - if character is lowercase, add it to the value of the object[lowercase]
    if(char >= 'a' && char <= 'z') object[lowercase] += 1
  - if character is uppercase, add it to the value of the object[uppercase]
    else if(char >= 'A' && char <= 'Z') object[uppercase] += 1
  - if character is neither, add it to the value of the object[neither]
    else object[neither] += 1
- Return the object with key and value as a percentage string, create a helper function
  - iterate over the object, for each value, divide them by 100 and assign a decimal of 2 using the toFixed(2) method.
  - coerce the values to a string
  - Return the final object
*/

function letterPercentages(string) {
  let strLength = string.length;
  let letterPercentObj = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let idx = 0; idx < strLength; idx++) {
    if (string[idx] >= "a" && string[idx] <= "z") {
      letterPercentObj["lowercase"] += 1;
    } else if (string[idx] >= "A" && string[idx] <= "Z") {
      letterPercentObj["uppercase"] += 1;
    } else {
      letterPercentObj["neither"] += 1;
    }
  }

  convertToPercent(letterPercentObj, strLength);

  return letterPercentObj;
}

// Convert values to percent helper function
function convertToPercent(obj, length) {
  for (let key in obj) {
    obj[key] = ((obj[key] / length) * 100).toFixed(2);
  }
  return obj;
}

// console.log(letterPercentages("abCdef 123"));
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// console.log(letterPercentages("AbCd +Ef"));
// // // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// console.log(letterPercentages("123"));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

//regex version

function letterPercentages(string) {
  const strLength = string.length;
  return {
    lowercase: (
      ((string.match(/[a-z]/g) || []).length / strLength) *
      100
    ).toFixed(2),
    uppercase: (
      ((string.match(/[A-Z]/g) || []).length / strLength) *
      100
    ).toFixed(2),
    neither: (
      ((string.match(/[^a-z]/gi) || []).length / strLength) *
      100
    ).toFixed(2),
  };
}

console.log(letterPercentages("abCdef 123"));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages("AbCd +Ef"));
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages("123"));
