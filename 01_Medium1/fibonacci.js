/*
P: Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)
Input: Integer that resembles the index
Output: Fibonacci series of integers up to the index

E: 

D: Strings, array

A: 
- Create an algorithm for fibonacci
    - let firstNumber = String(num).length
    - let secondNumber = firstNumber

  Iterate the length of the loop
  - output the first and second number in an array
  -       




*/

function findFibonacciIndexByLength(length) {
  let firstNumber = 1n;
  let secondNumber = 1n;
  let count = 2n; // fibonacci starts with 1n and 1n always
  let fibonacci = firstNumber + secondNumber; //Initalize the first fibonacci

  while (String(fibonacci).length < length) {
    fibonacci = firstNumber + secondNumber;
    count += 1n;
    firstNumber = secondNumber;
    secondNumber = fibonacci;
  }

  return count;
}

// console.log(findFibonacciIndexByLength(3n) === 12n); // 1 1 2 3 5 8 13 21 34 55 89 144
// console.log(findFibonacciIndexByLength(2n) === 7n); // 1 1 2 3 5 8 13
// findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.

/*
P: Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.
Input: Number 
Output: Number
Rules: The first two Fibonacci numbers are 1 and 1. The third number is 1 + 1 = 2, 
the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and so on. 
E: 
D: Numbers, Array to store the sequence of numbers, return the nth number

A:
- create a counter variable that keeps track of how many times the recursion occurs.  The recursion should occur n times
- 
*/

// function fibonacci(nth) {
//   if (nth <= 2) {
//     return 1;
//   }
//   return fibonacci(nth - 1) + fibonacci(nth - 2);
// }

// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(4)); // 3
// console.log(fibonacci(5)); // 5
// console.log(fibonacci(12)); // 144
// console.log(fibonacci(20)); // 6765

//non-recursive version

function fibonacci(nth) {
  let count = 3;
  let first = 1;
  let second = 1;
  let fibonacciNum = first + second;

  if (nth <= 2) {
    return 1;
  }

  while (count <= nth) {
    fibonacciNum = first + second;
    first = second;
    second = fibonacciNum;
    count++;
  }
  return fibonacciNum;
}

console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(20)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(75)); // 2111485077978050

//LS version
// function fibonacci(nth) {
//   let previousTwo = [1, 1];

//   for (let counter = 3; counter <= nth; counter += 1) {
//     previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
//   }

//   return previousTwo[1];
// }
