let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

function transactionsFor(itemID, transactionsList) {
  return transactionsList.filter((transaction) => transaction.id === itemID);
}

// console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

function isItemAvailable(itemID, transactionsList) {
  let inventoryItems = transactionsFor(itemID, transactionsList);
  let sumQuantity = 0;
  inventoryItems.forEach((item) => {
    if (item.movement === "in") {
      sumQuantity += item.quantity;
    } else {
      sumQuantity -= item.quantity;
    }
  });
  return sumQuantity > 0;
}

//Use reduce

// function isItemAvailable(itemID, transactionsList) {
//   let quantity = transactionsFor(itemID, transactionsList);

//   let finalValue = quantity.reduce((sum, transaction) => {
//     if (transaction.movement === "in") {
//       return sum + transaction.quantity;
//     } else {
//       return sum - transaction.quantity;
//     }
//   }, 0);
//   return finalValue > 0;
// }

console.log(isItemAvailable(101, transactions)); // false
console.log(isItemAvailable(103, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true
