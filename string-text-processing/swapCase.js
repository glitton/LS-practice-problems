// function swapCase(words) {
//   let finalWords = "";
//   let wordsArray = words.split("");
//   wordsArray.forEach((word) => {
//     if (word >= "a" && word <= "z") {
//       finalWords += word.toUpperCase();
//     } else if (word >= "A" && word <= "Z") {
//       finalWords += word.toLowerCase();
//     } else {
//       finalWords += word;
//     }
//   });
//   console.log(finalWords);
// }

// refactor with split and map

function swapCase(string) {
  return string
    .split("")
    .map((char) => {
      if (char >= "a" && char <= "z") {
        return char.toUpperCase();
      } else if (char >= "A" && char <= "Z") {
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join("");
}

console.log(swapCase("CamelCase")); // "cAMELcASE"
console.log(swapCase("Tonight on XYZ-TV")); // "tONIGHT ON xyz-tv"
