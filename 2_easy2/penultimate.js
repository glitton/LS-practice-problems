function penultimate(text) {
  let textArray = text.split(" ");
  return textArray[textArray.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
