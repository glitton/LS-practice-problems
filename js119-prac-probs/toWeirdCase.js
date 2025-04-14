/*
P: Create a function that takes a string argument and returns a copy of the string with every second character in every third word converted to uppercase. Other characters should remain the same.
input: string
output: string where the second char in every third word is converted to uppercase, other chars remain the same
rules:
- second char in every third word is uppercase
- other words remain the same

E: 

D: input is a string, use array to store words

A:
Initialize a finalString variable
Convert the input string to an array of words
Iterate over the array of words
- Get the third word using index and modulo
   - get the second letter of the third word and convert it to upper case
   - leave other words as is
Return finalString    

*/

function toWeirdCase(sentence) {
  let words = sentence.split(" ");

  return words
    .map((word, wordIndex) => {
      if ((wordIndex + 1) % 3 === 0) {
        return word
          .split("")
          .map((char, charIndex) => {
            if ((charIndex + 1) % 2 === 0) {
              return char.toUpperCase();
            } else {
              return char;
            }
          })
          .join("");
      } else return word;
    })
    .join(" ");
}

let p = console.log;

let original = "Lorem Ipsum is simply dummy text of the printing world";
let expected = "Lorem Ipsum iS simply dummy tExT of the pRiNtInG world";
p(toWeirdCase(original) === expected);

// original = "It is a long established fact that a reader will be distracted";
// expected = "It is a long established fAcT that a rEaDeR will be dIsTrAcTeD";
// p(toWeirdCase(original) === expected);

// p(toWeirdCase("aaA bB c") === "aaA bB c");

// original =
//   "Mary Poppins' favorite word is " + "supercalifragilisticexpialidocious";
// expected =
//   "Mary Poppins' fAvOrItE word is " + "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS";
// p(toWeirdCase(original) === expected);
