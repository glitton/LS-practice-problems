/*
P:
Input: string
Output: string but numbers converted to its digit characters
Rules: convert number word to its digit characters
E: 
D: 
- Object - store number word as key and digit as value
- Array

A:
- Create object that stores key/value pairs of number word and its equivalent digit character
- convert string to array, separated by space
- Iterate over the array
  - If  number word has punctuation, remove the punc and save the punc to a variable, note its index
  - Replace number word with digit character
  - Add punctuation to the number word that was converted via the index
- Return final string  
*/

function wordToDigit(string) {
  const NUM_WORDS = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let stringArray = string.split(" ");
  let finalSentence = [];

  for (let word of stringArray) {
    //Check for punctuation
    let lastChar = word.charAt(word.length - 1);
    let punctuation = "";

    if (
      lastChar === "." ||
      lastChar === "," ||
      lastChar === "?" ||
      lastChar === ":" ||
      lastChar === ";"
    ) {
      punctuation = lastChar;
      word = word.slice(0, -1);
    }

    if (NUM_WORDS.hasOwnProperty(word)) {
      finalSentence.push(NUM_WORDS[word] + punctuation);
    } else {
      finalSentence.push(word);
    }
  }

  return finalSentence.join(" ");
}

console.log(
  wordToDigit("Please call me at five five five one two three four. Thanks.")
);
// "Please call me at 5 5 5 1 2 3 4. Thanks."
