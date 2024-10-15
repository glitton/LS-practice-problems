function buyFruit(fruits) {
  let fruitsArray = [];
  let fruit = "";
  let quantity = 0;

  for (let idx = 0; idx < fruits.length; idx++) {
    fruit = fruits[idx][0];
    quantity = fruits[idx][1];
    for (let idx2 = 1; idx2 <= quantity; idx2++) {
      fruitsArray.push(fruit);
    }
  }
  console.log(fruitsArray);
  return fruitsArray;
}

buyFruit([
  ["apple", 3],
  ["orange", 1],
  ["banana", 2],
]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
