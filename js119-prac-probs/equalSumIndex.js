/*
P: Create a function that takes an array of integers as an argument. Determine and return the index N for which all numbers with an index less than N sum to the same value as the numbers with an index greater than N. If there is no index that would make this happen, return -1.

If you are given an array with multiple answers, return the index with the smallest value.

The sum of the numbers to the left of index 0 is 0. Likewise, the sum of the numbers to the right of the last element is 0.
input: array
output: integer representing the index for which the numbers to its left when summed are equal to the numbers to its right when summed
rules:
- if no index exists, return -1
- if there are same answers, return the answer with the smallest value
- sum of ints to the left of index 0 is 0, similarly, sum of nums to the right of arr.length - 1 is also 0

E: [7, 99, 51, -48, 0, 4]
index 0: sum to the left: 0    sum to the right: 106
index 1: sum to the left: 7    sum to the right: 7 
Answer is 1

D: array and integer
A:
Initialize a smallestIdx, assign to -1 
Get the leftSum assign to 0
Get the rightSum which is the sum of the input array

Iterate over the array
  - on each iteration: substract the current number from the right sum
    - if left sum is equal to right sum
      - return index
    - else: add the current number to left sum on each iteration
If no match, return smallestIdx which is -1     
*/

function equalSumIndex(numsArray) {
  let smallestIdx = -1;

  let leftSum = 0;
  let rightSum = numsArray.reduce((acc, curr) => acc + curr);

  for (let idx = 0; idx < numsArray.length; idx++) {
    rightSum -= numsArray[idx];

    if (leftSum === rightSum) {
      return idx;
    }
    leftSum += numsArray[idx];
  }
  return smallestIdx;
}

const p = console.log;
p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);
