/*
P: Write a function that creates a sequence of numbers ending in the input number, adds these numbers and then squares the sum.
Then subtract from the squaredSum the sum of squaring each number.

Input: Integer
Output: sum = squaredSum - (num1**2 + num2**2 ... numN**2)
Rules:
- sum the sequence of numbers up to the input integer, squaredSum
- subtract from it the square of each individual integer numSquared

D: Array to store the sequence of numbers

A:
function squaredSum 
- Initialize a count variable equal to 1
- Initialize a number variable equal to zero
- Initialize numsArray = []
- Create a loop the number of times equal to the input integer, num
  - reassign count to number
  -  Add 1 to the number at every iteration, push this value to numsArray
  
  - increment the count
- Break out of the loop when count is equal to num
- Iterate over the array of nums, add the numbers and save it to sum
- Return sum squared

function numSquared
- initialize a sumNumsSquared var equal to zero
- Initialize a count variable equal to 1
- Iterate num times
  - for every iteration square count
  - Add square count to sumNumsSquared
  - increment count by 1
  - break out of the loop when count > num

Main function
return squaredSum = numSquared
*/

function squaredSum(num) {
  let count = 1;
  let finalNum = 0;
  let numsArray = [];

  while (count < num + 1) {
    finalNum = count;
    numsArray.push(finalNum);
    count += 1;
  }
  return numsArray.reduce((sum, num) => sum + num) ** 2;
}

function numSquared(num) {
  const numCount = [];
  for (let idx = 1; idx <= num; idx++) {
    numCount.push(idx);
  }
  return numCount.map((n) => n ** 2).reduce((sum, number) => sum + number);
}

function sumSquareDifferenceMINE(num) {
  return squaredSum(num) - numSquared(num);
}

console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(100)); // 25164150

// console.log(squaredSum(3));
// console.log(numSquared(3));

//LS version

function sumSquareDifference(count) {
  let sum = 0;
  let sumOfSquares = 0;
  for (let number = 1; number <= count; number++) {
    sum += number;
    sumOfSquares += Math.pow(number, 2);
  }
  return Math.pow(sum, 2) - sumOfSquares;
}
