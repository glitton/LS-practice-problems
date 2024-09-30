/*
1.  For each string, depending on the position, multiple each by 10 to the power of n
2.  n is the difference 
*/

function stringToInteger(str) {
  const BASE_NUMBER = 10;
  let power = str.length - 1;

  let finalValue = 0;

  for (let idx = 0; idx < str.length; idx++) {
    let multiplier = BASE_NUMBER ** power;
    let currentValue = str[idx];
    finalValue += currentValue * multiplier;
    power--;
  }
  return finalValue;
}

// console.log(stringToInteger("4321") === 4321); // logs true
// console.log(stringToInteger("570") === 570); // logs true

function stringToSignedInteger(signedString) {
  if (signedString[0] === "-") {
    return -stringToInteger(signedString.slice(1));
  } else if (signedString[0] === "+") {
    return stringToInteger(signedString.slice(1));
  } else {
    return stringToInteger(signedString);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
console.log(stringToSignedInteger("-1030") === 1030); // logs false
console.log(stringToSignedInteger("+867") === 867); // logs true
