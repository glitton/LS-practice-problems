function runningTotal(arrOfNums) {
  let sumArray = [];
  let sum = 0;

  arrOfNums.forEach((num, idx) => {
    sum += num;
    sumArray[idx] = sum;
  });
  return sumArray;
}

console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
console.log(runningTotal([3])); // [3]
console.log(runningTotal([])); // []
