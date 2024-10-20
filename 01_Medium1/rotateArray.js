/*
P: Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.

Input: array
Output: new array, can't mutate original array
Rules: if the input is not an array, return undefined
if the input is an empty array, return []
for a non-empty array, slice off the first element and append it to the end of the array

E: 
D: Array, nested arrays, objects

A:
1.  Check for length of the input array, if it is empty return []
2.  Check if input is an Array using isArray method
3.  For a non empty array, use the slice method to separate the first element of the array
4.  Append this element to the end of the array
*/

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (array.length === 0) {
    return [];
  }

  let arrayCopy = array.slice(1);

  return arrayCopy.concat(array[0]);
}

// console.log(rotateArray([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
// // rotateArray(["a", "b", "c"]); // ["b", "c", "a"]
// // rotateArray(["a"]); // ["a"]
// // rotateArray([1, "a", 3, "c"]); // ["a", 3, "c", 1]
// // rotateArray([{ a: 2 }, [1, 2], 3]); // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([])); // []

// // return `undefined` if the argument is not an array
// console.log(rotateArray()); // undefined
// console.log(rotateArray(1)); // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array)); // [2, 3, 4, 1]
console.log(array); // [1, 2, 3, 4]
