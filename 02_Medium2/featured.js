/*
P: Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number. NOTE: The largest possible featured number is 9876543201.

Input: Integer
Output: Integer that is a featured number

Rules:
- A featured number is an odd number that is a multiple of 7
- The digits of the featured number must occur only once.  133 is not since 3 appears twice
- Digits must be unique
- largest possible featured number is 9876543201.

E:
D: 
- Object to store key/values where key is the digit while value is the count of the appearance of the digit
- String representation of the digits

A: 
- Based on the input integer, find the next multiple of 7
*/

function featured(num) {
  
}

featured(12); // 21
featured(20); // 21
featured(21); // 35
featured(997); // 1029
featured(1029); // 1043
featured(999999); // 1023547
featured(999999987); // 1023456987
featured(9876543186); // 9876543201
featured(9876543200); // 9876543201
featured(9876543201); // "There is no possible number that fulfills those requirements."
