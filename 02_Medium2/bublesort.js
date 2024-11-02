/*
- Initialize a length variable equal to the length of the input array
- Iterate the number of times equal to length of the array until the list is sorted (while length > 1)
  - Initialize a swapPosition variable that tracks the index where the last swap occurred, initialize to zero
  - Compare adjacent elements
  - If the first item is greater than the second, swap their positions
  - Update swapPosition to record the index of the first item that was swapped
  - update length to equal to swapPosition
  - break out of the loop when length is less than or equal to one
- Return sorted array    

*/

function bubbleSort(array) {
  let loop = array.length;
  let swapPosition = 0;

  while (loop > 1) {
    for (let idx = 0; idx < array.length - 1; idx += 1) {
      let current = array[idx];
      let next = array[idx + 1];

      if (current > next) {
        [array[idx], array[idx + 1]] = [next, current];
        swapPosition = idx;
      }
    }

    loop = swapPosition;
  }
  return array;
}

let array1 = [5, 3];
// console.log(bubbleSort(array1));
// console.log(array1); // [3, 5]

let array2 = [6, 2, 7, 1, 4];
// console.log(bubbleSort(array2));
// console.log(array2); // [1, 2, 4, 6, 7]

let array3 = ["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"];
console.log(bubbleSort(array3));
console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
