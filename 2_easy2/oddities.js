function odditiesMine(list) {
  let oddList = [];
  for (let idx = 0; idx < list.length; idx++) {
    let currentElement = list[idx];
    if (idx % 2 === 0) {
      oddList.push(currentElement);
    }
  }
  return oddList;
}

//Launch School version
function oddities(list) {
  let oddList = [];
  for (let idx = 0; idx < list.length; idx += 2) {
    let currentElement = list[idx];
    oddList.push(currentElement);
  }
  return oddList;
}

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let max = 120;
let min = 20;
let age = getRandomArbitrary(min, max);

console.log(`Teddy is ${age} years old`);
