function reverseWords(str) {
  const MIN_NUMBER_OF_WORDS = 5;
  let words = str.split(" ");
  let reversedWords = words.map((word) => {
    if (word.length >= MIN_NUMBER_OF_WORDS) {
      return reverse(word);
    } else {
      return word;
    }
  });

  return reversedWords.join(" ");
}

function reverse(words) {
  return words.split("").reverse().join("");
}

console.log(reverseWords("Professional")); // "lanoisseforP"
console.log(reverseWords("Walk around the block")); // "Walk dnuora the kcolb"
console.log(reverseWords("Launch School")); // "hcnuaL loohcS"

// console.log(reverse("Walk around the block"));
