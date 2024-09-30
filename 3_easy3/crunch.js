function crunch(text) {
  let index = 0;
  let finalText = "";

  while (index < text.length) {
    if (text[index] !== text[index + 1]) {
      finalText += text[index];
    }
    index++;
  }
  return finalText;
}

console.log(crunch("ddaaiillyy ddoouubbllee")); // "daily double"
console.log(crunch("4444abcabccba")); // "4abcabcba"
console.log(crunch("ggggggggggggggg")); // "g"
console.log(crunch("a")); // "a"
console.log(crunch("")); // ""
