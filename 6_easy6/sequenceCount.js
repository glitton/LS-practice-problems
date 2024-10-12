function sequence(count, startingNum) {
  let finalArray = [];
  let number = 0;

  if (count === 0) {
    return finalArray;
  }

  while (finalArray.length < count) {
    number += startingNum;
    finalArray.push(number);
  }
  return finalArray;
}

console.log(sequence(5, 1)); // [1, 2, 3, 4, 5]
console.log(sequence(4, -7)); // [-7, -14, -21, -28]
console.log(sequence(3, 0));
// console.log(sequence(0, 1000000));
