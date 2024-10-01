function interleave1(arr1, arr2) {
  let finalArray = [];

  for (let idx = 0; idx < arr1.length; idx++) {
    let currentElement1 = arr1[idx];
    let currentElement2 = arr2[idx];

    finalArray.push(currentElement1, currentElement2);
  }
  return finalArray;
}

//Use forEach

function interleave(arr1, arr2) {
  let finalArray = [];

  arr1.forEach((el, idx) => {
    finalArray.push(el, arr2[idx]);
  });
  return finalArray;
}

// console.log(interleave([1, 2, 3], ["a", "b", "c"])); // [1, "a", 2, "b", 3, "c"]

/*

Multiply Lists
Write a function that takes two array arguments, each containing a list of numbers, and returns a new array that contains the product of each pair of numbers from the arguments that have the same index. You may assume that the arguments contain the same number of elements.

*/

function multiplyList(arr1, arr2) {
  let finalArray = [];

  arr1.forEach((el, idx) => {
    finalArray.push(el * arr2[idx]);
  });
  return finalArray;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]
