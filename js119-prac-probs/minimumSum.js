/*
P: Create a function that takes an array of integers as an argument. The function should return the minimum sum of 5 consecutive numbers in the array. If the array contains fewer than 5 elements, the function should return null.
input: array
output: integer representing the smallest sum of 5 consecutive numbers in the array
rules: 
- if the array has fewer than 5 elements, return null

E: [1, 2, 3, 4, 5, 6]) === 15
1 - 5 => 15
2 - 6 => 20
15 is the min

D: arrays

A:
If the length of the input array is less than 5, return null
Initialize a minSum var assign to infinity
Initialize a currSum var
Iterate over the input array starting from index 0 until 5 elements
  - get the sum of the first five elements, assign to currSum
    - if currSum is less than minSum
      - reassign minSum to equal currSum
Return minSum      
*/

function minimumSum(arr) {
  if (arr.length < 5) return null;

  let minSum = Infinity;
  let currSum = 0;

  for (let idx = 0; idx < arr.length - 4; idx++) {
    let currSum = arr.slice(idx, idx + 5).reduce((acc, curr) => acc + curr, 0);
    if (currSum < minSum) {
      minSum = currSum;
    }
  }
  return minSum;
}

const p = console.log;
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);
