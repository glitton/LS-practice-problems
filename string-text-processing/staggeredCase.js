// function staggeredCase(string) {
//   let finalString = "";

//   for (let idx = 0; idx < string.length; idx += 1) {
//     if (idx % 2 === 0) {
//       finalString += string[idx].toUpperCase();
//     } else {
//       finalString += string[idx].toLowerCase();
//     }
//   }
//   return finalString;
// }

/*
even indexes are capped so 1, 3, 5, etc ...
*/

//refactor using split and map

function staggeredCase(words) {
  return words
    .split("")
    .map((word, idx) => {
      if (idx % 2 === 0) {
        return word.toUpperCase();
      } else {
        return word.toLowerCase();
      }
    })
    .join("");
}

console.log(staggeredCase("I Love Launch School!")); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase("ALL_CAPS")); // "AlL_CaPs"
console.log(staggeredCase("ignore 77 the 4444 numbers")); // "IgNoRe 77 ThE 4444 nUmBeRs"
