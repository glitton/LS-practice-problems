/*
P: Create a function that takes an array of numbers as an argument. For each number, determine how many numbers in the array are smaller than it, and place the answer in an array. Return the resulting array.

When counting numbers, only count unique values. That is, if a number occurs multiple times in the array, it should only be counted once.
input: array of numbers
output: array containing the count of numbers smaller than the numbers in the input array
rules:
- count unique values

E: 

D: array

A:
Initialize vars: count assign to 0, result assign to an empty array
Create a copy of the array with only the unique values (helper)
Iterate over the input array
  - count the number of elements from the uniquesArray that are smaller than the current element from the input array
  - assign the value to count
  - append count to the result array
Return result  

*/

function smallerNumbersThanCurrent(arr) {
  let result = [];
  let uniqueNumbers = uniques(arr);

  arr.forEach((num) => {
    let count = uniqueNumbers.filter((n) => n < num).length;
    result.push(count);
  });
  return result;
}

function uniques(arr) {
  let uniqueValues = [];
  arr.forEach((num) => {
    if (!uniqueValues.includes(num)) {
      uniqueValues.push(num);
    }
  });
  return uniqueValues;
}
const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);
// p(uniques([8, 1, 2, 2, 3]));
p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
// p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
// p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
// p(eq(smallerNumbersThanCurrent([1]), [0]));

// let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
// let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
// p(eq(smallerNumbersThanCurrent(myArray), result));
