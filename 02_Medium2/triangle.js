/*
P: Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

Input: 3 numbers representing the three sides of a triangle
Output: string 
Rules: return these strings:
- equilateral when all three sides are equal length
- isosceles when two sides are the same while the third is different
- scalene when three sides are of different lengths
- invalid when either of these conditions are  met
  -- one side has a length less than 0 (valid triangle is when shortest > 0)
  -- sum of the length of the two shortest sides is less than the length of the longest side. Valid triangle is when the sum of the two shortest side is greater than the longest (shortest + middle > longest)

E: 
D: Array

A: 
- create isValidTriangle helper function
  - if any of the sides is equal to 0 then return 'invalid'
  - sum of shortest and middle is less than longest.  To do this, sort the array and check the condition.
- For valid triangles, iterate through the array of integers:
  - equilateral: check if side1 === side2 && side2 === side3
  - isosceles: if side1 === side2 || side1 === side3 || side2 === side3
  - scalene: side1 !== side2 && side1 !== side3 && side2 !== side3
- return string
*/

// function triangleMine(side1, side2, side3) {
//   let triangleArray = [side1, side2, side3].sort();

//   if (isValidTriangle(triangleArray)) return "invalid";

//   if (side1 === side2 && side2 === side3) {
//     return "equilateral";
//   } else if (side1 === side2 || side1 === side3 || side2 === side3) {
//     return "isosceles";
//   } else {
//     return "scalene";
//   }
// }

// function isValidTriangle(array) {
//   let [side1, side2, side3] = array;
//   return side1 === 0 || side2 === 0 || side3 === 0 || side1 + side2 < side3;
// }

// console.log(triangle(3, 3, 3)); // "equilateral"
// console.log(triangle(3, 3, 1.5)); // "isosceles"
// console.log(triangle(3, 4, 5)); // "scalene"
// console.log(triangle(0, 3, 3)); // "invalid"
// console.log(triangle(3, 1, 1)); // "invalid"

// console.log(isValidTriangle([0, 3, 3]));

//Launch School version

// function triangle1(side1, side2, side3) {
//   if (!isValid(side1, side2, side3)) {
//     return "invalid";
//   } else if (side1 === side2 && side2 === side3) {
//     return "equilateral";
//   } else if (side1 === side2 || side1 === side3 || side2 === side3) {
//     return "isosceles";
//   } else {
//     return "scalene";
//   }
// }

// function isValid(side1, side2, side3) {
//   let perimeter = side1 + side2 + side3;
//   let longest = Math.max(side1, side2, side3);
//   let shortest = Math.min(side1, side2, side3);
//   let middle = perimeter - longest - shortest;

//   return shortest > 0 && shortest + middle > longest;
// }
