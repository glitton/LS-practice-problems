/*
1.  Initiate an empty object to store letter counter
2.  Initiate an initial count variable to count how many words have a specific letter count, set this to 1
3.  Transform string into an array separated by space
4.  Get the length of each element in the array
5.  Check if the length key is in the object, 
- if it is, this means that there was already one word with this size, add 1 to the value of the key/value pair
- if not, set the value of the key/value pair equal to initalCount of 1
6.  Return letter counter object
*/

function wordSizes(sentence) {
  let letterCounter = {};
  let countValue = 1;
  let cleanSentence = createCleanText(sentence);
  let cleanSentenceArray = cleanSentence.split(" ");

  if (sentence.length === 0) {
    console.log(letterCounter);
    return letterCounter;
  }

  cleanSentenceArray.forEach((element) => {
    let key = element.length;
    if (!letterCounter.hasOwnProperty(key)) {
      letterCounter[key] = countValue;
    } else {
      letterCounter[key] += 1;
    }
  });
  console.log(letterCounter);
  return letterCounter;
}

function createCleanText(sentence) {
  let cleanText = "";
  let sentenceArray = sentence.split("");
  sentenceArray.forEach((char) => {
    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      char === " "
    ) {
      cleanText += char;
    }
  });
  // console.log(cleanText);
  return cleanText;
}
// Part 1
// wordSizes("Four score and seven."); // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?"); // { "2": 1, "4": 1, "6": 1 }
// wordSizes(""); // {}

// createCleanText("What's up doc?");

// Part 2
wordSizes("Four score and seven."); // { "3": 1, "4": 1, "5": 2 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 3 }
wordSizes("What's up doc?"); // { "2": 1, "3": 1, "5": 1 }
wordSizes(""); // {}
