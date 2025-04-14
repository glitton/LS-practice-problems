/* 17.
P: Create a function that takes an array of integers as an argument. The function should determine the minimum integer value that can be appended to the array so the sum of all the elements equal the closest prime number that is greater than the current sum of the numbers. For example, the numbers in [1, 2, 3] sum to 6. The nearest prime number greater than 6 is 7. Thus, we can add 1 to the array to sum to 7.

Notes:
The array will always contain at least 2 integers.
All values in the array must be positive (> 0).
There may be multiple occurrences of the various numbers in the array.

E: 

D: array and integer
A:
Get the sum of the array, assign to sum
Initialize a difference var, assign to 1
Initialize a newSum equal to sum plus diff 
While newSum is not prime
  - increment diff by 1
  - newSum is equal to sum plus diff
Return diff
*/

function nearestPrimeSum(numbers) {
  let diff = 1;
  let sum = numbers.reduce((acc, curr) => acc + curr, 0);
  let targetSum = sum + diff;

  while (!isPrime(targetSum)) {
    diff++;
    targetSum = sum + diff;
  }
  return diff;
}

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

const p = console.log;
p(nearestPrimeSum([1, 2, 3]) === 1); // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4); // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2); // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// // Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);
