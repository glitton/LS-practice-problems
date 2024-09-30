function swap(text) {
  let textArray = text.split(" ");
  let swappedText = textArray.map((el) => {
    return el.split("").reverse().join("");
  });
  return swappedText.join(" ");
}

console.log(swap("Oh what a wonderful day it is")); // "hO thaw a londerfuw yad ti si"
console.log(swap("Abcde")); // "ebcdA"
console.log(swap("a")); // "a"

/*
1.  Iterate over the text array
2.  For each string, split the string (creating a subarray), reverse and then join
3.  return array.join to convert back to string
*/

//Use with slice, LS version
