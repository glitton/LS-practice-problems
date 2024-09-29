function multiply(num1, num2) {
  return num1 * num2;
}

// function square(num) {
//   return multiply(num, num);
// }

function power(num, exp) {
  let value = 1;
  for (let rounds = 1; rounds <= exp; rounds++) {
    value *= multiply(1, num);
  }
  return value;
}

// console.log(multiply(5, 3) === 15); // logs true

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

console.log(power(2, 4));
