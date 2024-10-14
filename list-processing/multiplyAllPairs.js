function multiplyAllPairs(arr1, arr2) {
  let finalArray = [];
  arr1.forEach((el1) => {
    arr2.forEach((el2) => {
      finalArray.push(el1 * el2);
    });
  });
  return sortNumbers(finalArray);
}

function sortNumbers(array) {
  return array.sort((a, b) => a - b);
}

const log = console.log;
log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]
