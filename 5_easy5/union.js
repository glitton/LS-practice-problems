/*
1. Initialize an empty array variable
2.  Check if array variable includes elements from the first array, if not, push the element, if it is there, move to the next
3.  Repeat step 2 for the 2nd array
4.  Return the combined array
*/

function union(arr1, arr2) {
  let combinedArray = arr1.concat(arr2);
  let uniquesInArray = [];

  combinedArray.forEach((element) => {
    if (!uniquesInArray.includes(element)) {
      uniquesInArray.push(element);
    }
  });
  return uniquesInArray;
}

console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
