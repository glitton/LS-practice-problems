/*
1.  Create a for loop starting with 1 and ending with value <= number
2.  Initialize a sum variable
3.  Check if the value is a multiple of 3 or a multiple of 5.  
4.  If they are, add it to the sum
5.  Return the sum
*/

function multisum(number) {
  let sum = 0;
  for (let value = 1; value <= number; value++) {
    if (value % 3 === 0 || value % 5 === 0) {
      sum += value;
    }
  }
  return sum;
}
console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(10)); // 33
console.log(multisum(1000)); // 234168
