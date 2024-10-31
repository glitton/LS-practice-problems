/*
1.  Iterate over all the months of the given year.
Loop through the months: You can use a loop that iterates through all 12 months of the specified year (from January to December).


2. For each month, get the day that falls on the 13th. Create an array with the months as elements
Create a Date object: For each month in the loop, create a Date object representing the 13th day of that month. You can use the constructor new Date(year, monthIndex, day), where monthIndex is 0 for January, 1 for February, and so on up to 11 for December.

Check the day: Use the getDay() method of the Date object. This method returns the day of the week as a number (0 for Sunday, 1 for Monday, ..., 5 for Friday, and 6 for Saturday). Check if it returns 5.

3.  For each month, get the day that falls on the 13th.
Count the Fridays: Use a counter to keep track of how many times the 13th falls on a Friday as you loop through the months.

4. Return the count: After looping through all 12 months, return the total count of Friday the 13ths.
*/

function fridayThe13ths(year) {
  let thirteens = [];

  for (let month = 0; month < 12; month += 1) {
    thirteens.push(new Date(year, month, 13));
  }
  console.log(thirteens);
  return thirteens.reduce((count, day) => {
    return day.getDay() === 5 ? count + 1 : count;
  }, 0);
}

console.log(fridayThe13ths(1986)); // 1
console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(2017)); // 2
