/*
In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.

Leap Year Rules: The function follows the rules for determining leap years:

A year is a leap year if it is divisible by 400.
If a year is divisible by 100, it is not a leap year.
If a year is divisible by 4, it is a leap year.
Years that do not satisfy these conditions are not leap years.
*/

function isLeapYear1(year) {
  let isLeapYear = true;
  if (year % 400 === 0) {
    return isLeapYear;
  } else if (year % 100 === 0) {
    return !isLeapYear;
  } else {
    return year % 4 === 0;
  }
}

// console.log(isLeapYear(2015)); // false
// console.log(isLeapYear(2016)); // true
// console.log(isLeapYear(2100)); // false
// console.log(isLeapYear(2400)); // true
// console.log(isLeapYear(240000)); // true
// console.log(isLeapYear(240001)); // false
// console.log(isLeapYear(2000)); // true
// console.log(isLeapYear(1900)); // false
// console.log(isLeapYear(1752)); // true
// console.log(isLeapYear(1700)); // false
// console.log(isLeapYear(1)); // false
// console.log(isLeapYear(100)); // false
// console.log(isLeapYear(400)); // true

//Part 2

function isLeapYear(year) {
  if (year <= 1752 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}

console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2015)); // false
console.log(isLeapYear(2100)); // false
console.log(isLeapYear(2400)); // true
console.log(isLeapYear(240000)); // true
console.log(isLeapYear(240001)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(1752)); // true
console.log(isLeapYear(1700)); // true
console.log(isLeapYear(1)); // false
console.log(isLeapYear(100)); // true
console.log(isLeapYear(400)); // true
