function stringyMine(num) {
  let finalString = "";

  for (let idx = 0; idx < num; idx++) {
    if (idx % 2 === 0) {
      finalString += "1";
    } else {
      finalString += "0";
    }
  }
  return finalString;
}

//even index = 1, odd index = 0

//Launch school uses ternary operator

function stringy(num) {
  let finalString = "";

  for (let idx = 0; idx < num; idx++) {
    let number = idx % 2 === 0 ? 1 : 0;
    finalString += number;
  }
  return finalString;
}

console.log(stringy(6)); // "101010"
console.log(stringy(9)); // "101010101"
console.log(stringy(4)); // "1010"
console.log(stringy(7)); // "1010101"
