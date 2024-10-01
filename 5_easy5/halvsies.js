function halvsies(arr) {
  // Math.ceil: odd arrays add 1 to length
  let firstHalf = Math.ceil(arr.length / 2);
  let firstArray = arr.slice(0, firstHalf);
  let secondArray = arr.slice(firstHalf);
  return [firstArray, secondArray];
}

console.log(halvsies([1, 2, 3, 4])); // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(halvsies([5])); // [[5], []]
console.log(halvsies([])); // [[], []]
