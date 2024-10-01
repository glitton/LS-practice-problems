/*
Write a function that counts the number of occurrences of each element in a given array. Once counted, log each element alongside the number of occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").
*/

let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "suv",
  "motorcycle",
  "car",
  "truck",
];

function countOccurrences(list) {
  let vehicleCount = {};

  list.forEach((item) => {
    vehicleCount[item] = vehicleCount[item] || 0;
    vehicleCount[item] += 1;
  });
  return displayVehicleCount(vehicleCount);
}

function displayVehicleCount(count) {
  for (let item in count) {
    console.log(`${item} => ${count[item]}`);
  }
}

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1
