// function buyFruit(fruits) {
//   let fruitsArray = [];
//   let fruit = "";
//   let quantity = 0;

//   for (let idx = 0; idx < fruits.length; idx++) {
//     fruit = fruits[idx][0];
//     quantity = fruits[idx][1];
//     for (let idx2 = 1; idx2 <= quantity; idx2++) {
//       fruitsArray.push(fruit);
//     }
//   }
//   console.log(fruitsArray);
//   return fruitsArray;
// }

function buyFruit(fruitsList) {
  return fruitsList
    .map((fruit) => repeat(fruit))
    .reduce((groceryList, fruit) => groceryList.concat(fruit));
}

function repeat(fruitAndQuantity) {
  let result = [];
  let fruit = fruitAndQuantity[0];
  let quantity = fruitAndQuantity[1];

  for (let num = 0; num < quantity; num++) {
    result.push(fruit);
  }
  return result;
}

console.log(
  buyFruit([
    ["apple", 3],
    ["orange", 1],
    ["banana", 2],
  ])
);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// console.log(repeat(["apple", 3]));
