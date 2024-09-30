function isDoubleNumberMine(number) {
  let evenLength = number.toString().length % 2 === 0;
  let numberString = number.toString();

  if (evenLength) {
    let halfLength = numberString.length / 2;
    for (let idx = 0; idx < halfLength; idx++) {
      if (numberString[idx] !== numberString[halfLength + idx]) {
        return false;
      } else {
        return true;
      }
    }
  }
}

//Launch School isDoubleNumber

function isDoubleNumber(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftNumber = stringNumber.substring(0, center);
  let rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}

function twice(number) {
  if (!isDoubleNumber(number)) {
    return Number(number) * 2;
  } else {
    return Number(number);
  }
}

console.log(twice(37)); // 74
console.log(twice(44)); // 44
console.log(twice(334433)); // 668866
console.log(twice(444)); // 888
console.log(twice(107)); // 214
console.log(twice(103103)); // 103103
console.log(twice(3333)); // 3333
console.log(twice(7676)); // 7676

/*
1.  Convert number to String
2.  Check if length is even
- If yes, check if first half is equal to the second half
  - if yes, return the number
  - if not, multiply by 2
3.  If length is odd, return number * 2
4.  Convert string to number
5. return number  
*/

// console.log(isDoubleNumber(103103));
// console.log(isDoubleNumber(334433));
// console.log(isDoubleNumber(3333));
// console.log(isDoubleNumber(7676));
