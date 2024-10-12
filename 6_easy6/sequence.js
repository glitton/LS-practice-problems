function sequence(num) {
  const finalArray = [];
  for (let idx = 1; idx <= num; idx++) {
    finalArray.push(idx);
  }
  return finalArray;
}

console.log(sequence(5)); // [1, 2, 3, 4, 5]
console.log(sequence(3)); // [1, 2, 3]
console.log(sequence(1)); // [1]
