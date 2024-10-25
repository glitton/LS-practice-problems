/*
P: Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)
Input: Integer that resembles the index
Output: Fibonacci series of integers up to the index

E: 

D: Strings, array

A: 
- Create an algorithm for fibonacci
    - let firstNumber = String(1)
    - let secondNumber = firstNumber
    - separate n from the string argument, save result to a variable called loop
  Iterate the length of the loop
  - output the first and second number in an array
  -       




*/

function findFibonacciIndexByLength(numOfDigits) {}

findFibonacciIndexByLength(2n) === 7n; // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n; // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.

console.log();
