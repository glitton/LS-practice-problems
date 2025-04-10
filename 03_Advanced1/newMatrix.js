/*
P: Write a function that takes an array of arrays that represents a 3x3 matrix and 
returns the transpose of the matrix. You should implement the function on your own, 
without using any external libraries.
input: array with sub-arrays
output: array with sub-arrays where the sub-arrays are transposed (rows are now columns)
rules:
- do not use any external libraries
- do not mutate original matrix
- return a new matrix

E: 

D: arrays

A:
Initialize a result empty array
Get every n index of each sub-array and push it to a new sub array
  - Iterate over the main array until the length of the main array
    - while inner loop keeps the same index until the length of each sub-array
      - keep track of the innerIndex of the inner array
      - append the innerIndex element to innerArray
      - increment innerIndex
    - append innerArray to result
  - Return result    
*/

// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// function transpose(arrMatrix) {
//   let result = [];

//   for (let i = 0; i < arrMatrix.length; i++) {
//     let j = 0;
//     let innerArray = [];
//     while (j < arrMatrix.length) {
//       innerArray.push(arrMatrix[j][i]);
//       j++;
//     }
//     result.push(innerArray);
//   }
//   return result;
// }

// let newMatrix = transpose(matrix);

//For x number of rows and columns

function transpose(matrix) {
  let transposedMatrix = [];

  let numRows = matrix.length;
  let numCols = matrix[0].length;

  for (let i = 0; i < numCols; i++) {
    let innerArray = [];
    for (let j = 0; j < numRows; j++) {
      innerArray.push(matrix[j][i]);
    }
    transposedMatrix.push(innerArray);
  }
  return transposedMatrix;
}

// console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix); // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

console.log(transpose([[1, 2, 3, 4]])); // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]])); // [[1, 2, 3, 4]]
console.log(transpose([[1]])); // [[1]]
console.log(
  transpose([
    [1, 2, 3, 4, 5],
    [4, 3, 2, 1, 0],
    [3, 7, 8, 6, 2],
  ])
);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
