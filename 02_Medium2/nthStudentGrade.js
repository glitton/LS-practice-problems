/*
You are given an array of student objects, where each student object contains:
* An integer id (representing the student’s ID).
* An array grades of integers (representing the student’s grades).

You need to write a function/method that finds the nth largest grade across
all students and returns the id of the student who received that grade.
If there are multiple students with the same grade, return the student with the lowest id.

In: an array of objects, students id
Out: number student's id with the largest grade

- Find the nth largest grade among the grades of all studnets
- If multiple students had the same grade, return the lowest id
- If not such id is found, return null

[95, 75, 85, 78, 70]
95 => 


D:
an array

A:
- Combine all grades arrays in the first input array
- find the maximum value, return the id, which has the maximum number in its grades array
---------------
1. Get the nth grade from the arrays of grades
2. Initialize studentId to null
3. Iterate over the input array
 - If the grades for the current student includes nth grade
   - If studentId is null OR curernt id is lower than studentId:
     - Update studentId to the current id

4. Return studentId
----------------------
Func: getMaxNum(arr)
0. Initialize an empty result array

1. Iterate over the input arr
  - Get the array of grades
  - Append it to result
2. Get the unique numbers
3. Find the nth number and return it

*/

// [95, 75, 88, 85, 78, 70]

const students = [
  { id: 2, grades: [95, 75, 88] },
  { id: 1, grades: [95, 85, 78] },
  { id: 3, grades: [95, 70, 85] },
];

console.log(nthLargestGrade(students, 1)); // Output: 1
console.log(nthLargestGrade(students, 2)); // Output: 2
console.log(nthLargestGrade(students, 3)); // Output: 2
console.log(nthLargestGrade(students, 4)); // Output: 1
console.log(nthLargestGrade(students, 5)); // Output: null
console.log(nthLargestGrade(students, 10)); // Output: null
