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
  // console.log(arrayCopy);

  return arrayCopy.concat(array[0]);
}

// console.log(rotateArray([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
// console.log(rotateArray(["a", "b", "c"])); // ["b", "c", "a"]
// console.log(rotateArray(["a"])); // ["a"]
// console.log(rotateArray([1, "a", 3, "c"])); // ["a", 3, "c", 1]
// console.log(rotateArray([{ a: 2 }, [1, 2], 3])); // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([])); // []

// // return `undefined` if the argument is not an array
// console.log(rotateArray()); // undefined
// console.log(rotateArray(1)); // undefined

// the input array is not mutated
// let array = [1, 2, 3, 4];
// console.log(rotateArray(array)); // [2, 3, 4, 1]
// console.log(array); // [1, 2, 3, 4]

/*
Rotate Rightmost Digits
Write a function that rotates the last count digits of a number. 
To perform the rotation, move the first of the digits that you want to rotate 
to the end and shift the remaining digits to the left.

P:
Input: two numbers, the original number, count digits to rotate
Output: The rotated number
Rules:
- 
- Rotate the last count digits of the original number
- Leave the first digits (not part of count) in the same order
- Apply the same rules as in rotateArray:
  -- slice of the first of the digits you want to rotate, append it to the end of number
  -- Join the first digits with the last count rotated digits

E:
D: Strings
A:
- Convert original number to a string
  - Use String() method
- Split the string into two parts: the first part to remain unchanged and the second part to be rotated
  - firstPart = string.slice(0, length-count)
  - secondPart = string.slice(length - count)
- Rotate the second part
  - Use algo from previous function
- Join the first part with the rotated second part
  - firstPart.concat(secondPart)
- Convert the string back to a number and return it
  - Return number using Number()

*/

function rotateRightmostDigits(number, count) {
  let numberString = String(number);

  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let rotatedRightstring = firstPart.concat(rotateString(secondPart));

  return Number(rotatedRightstring);
}

function rotateString(string) {
  return string.slice(1).concat(string[0]);
}

// console.log(rotateRightmostDigits(735291, 1)); // 735291
// console.log(rotateRightmostDigits(735291, 2)); // 735219
// console.log(rotateRightmostDigits(735291, 3)); // 735912
// console.log(rotateRightmostDigits(735291, 4)); // 732915
// console.log(rotateRightmostDigits(735291, 5)); // 752913
// console.log(rotateRightmostDigits(735291, 6)); // 352917

// console.log(rotateString("735291"));

function maxRotation(number) {
  let loop = String(number).length;
  let count = loop;
  for (let idx = 0; idx < loop; idx++) {
    number = rotateRightmostDigits(number, count);
    count--;
  }
  return number;
}

console.log(maxRotation(735291));
console.log(maxRotation(3));
console.log(maxRotation(35));
console.log(maxRotation(105));
console.log(maxRotation(8703529146));
