/*
The time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight. 

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). Your function should work with any integer input.

Understand the Problem:
Input: Integer representing minutes.  
Output: String in 24 hour format (hh:mm)

Explicit Rules:
- If number of minutes is negative, the time is before midnight
- If positive, the time is after midnight
- Input is an integer

Examples/Test Cases (see below)

Data Structures: Integer, String

Algorithm:
Ensure the time difference is in the range between 0 and MINUTES_PER_DAY by using the % operator. 
For negative numbers we need to add MINUTES_PER_DAY to the remainder.

We calculate the hours and minutes.

Format the results with our helpers formatTime() and leadingZero(). leadingZero ensures that we always have at least 2 digits when our numbers are represented as strings.

Return the formatted string.

*/

function leadingZeroes(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZeroes(hours)}:${leadingZeroes(minutes)}`;
}
function timeOfDay(deltaMinutes) {
  const MINUTES_PER_HOUR = 60;
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  // console.log("hours", hours);
  // console.log("minutes", minutes);

  return formatTime(hours, minutes);
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
// console.log(timeOfDay(-4231));
