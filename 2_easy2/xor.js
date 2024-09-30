function xor(num1, num2) {
  if ((num1 && !num2) || (num2 && !num1)) return true;
  return false;
}

//falsey values: false, undefined, zero, '', NaN

console.log(xor(5, 0) === true); // true
console.log(xor(false, true) === true); // true
console.log(xor(1, 1) === false); // true
console.log(xor(true, true) === false); // true
console.log(xor(0, false) === false); // true
console.log(xor(0, 0) === false); // true
