let result = [
  [
    [1, 2],
    [3, 4],
  ],
  [5, 6],
].map((arr) => {
  return arr.map((elem) => {
    if (typeof elem === "number") {
      // it's a number
      return elem + 1;
    } else {
      // it's an array
      return elem.map((number) => number + 1);
    }
  });
});

/*first element of the array is 
[
  [1, 2],
  [3, 4],
]
Second element: [5, 6]

[[[2, 3], [4, 5]], [6,7]]

*/

console.log(result);
