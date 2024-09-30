/*
Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

1. Create helper functions for accepted text
- Uppercase letters
- Lowercase letters
- Check last character, make sure it is not punctuation
- Check first character, maker sure it is alpha
2.  Iterate over string, check 0 index, if it is non-alpha, add a space
3.  Iterate over rest of the string and add alpha characters to cleanText
4.  Check last char, if it is non-alpha, add space
*/

function cleanUp(text) {
  let cleanText = "";

  for (let idx = 0; idx < text.length; idx++) {
    if (lowerCase(text[idx]) || upperCase(text[idx])) {
      cleanText += text[idx];
    } else if (idx === 0 || lastChar(cleanText) !== " ") {
      cleanText += " ";
    }
  }
  return cleanText;
}

function lowerCase(letter) {
  return letter >= "a" && letter <= "z";
}

function upperCase(letter) {
  return letter >= "A" && letter <= "Z";
}

function lastChar(text) {
  return text[text.length - 1];
}

const log = console.log;
log(cleanUp("---what's my +*& line???")); // " what s my line "

// log(firstChar("---what's my +*& line?"));
