/*
How to Calculate the Century 

Firstly, it depends on the number of digits in a year. If it is a four digit year (such as 2023), we add 1 to the first two digits (20+1= 21st century) to find out the century it belongs to.

Similarly, if it is a three digit year such as 302, we add 1 to the first digit only (3+1= 4th century)

Note: Please note that if a year ends with "00," like 800, 900, and 1900, you do not add 1 to the first or first two digits. 800, 900 and 1900 simply belong to the 8th, 9th and 19th centuries respectively.

Algo:
- If year ends in 00 
  - year length is === 4, century is first two digits.  For ex 2000, 20th 
  - year length < 4, century is first digit.  Ex 800 is 8th and 900, 9th
  - year length > 4, century is first 3 digits.  30000, 300th
- Else If year length === 4, add 1 to the first 2 digits, 2024 is 21st
- Else if year length === 3, add 1 to the first digit, 305 is 4th
- else if year length < 3, 1st century
- else (length > 4), add 1 to first 3 digits ex 10103 is 102nd century, 11201, 113th century
*/

/* From Launch School
First, notice the pattern about a century. It is equal to the current year divided by 100 plus 1. The exception to this is when the year is a multiple of 100. In that case, the century is the current year divided by 100.

Next, notice the suffix to append to the century, the options being: 'th', 'nd', 'rd', 'st'.

*/
function century(year) {
  let yearString = String(year);
  let century = "";

  let yearEndDigits = yearString.substring(yearString.length - 2);
  let yearFirstTwoDigits = yearString.substring(0, 2);
  let yearFirstThreeDigits = yearString.substring(0, 3);

  if (yearEndDigits === "00") {
    // Ends in 00
    if (yearString.length === 4) {
      century = yearString.substring(0, 2);
      return century + centurySuffix(century);
    } else if (yearString.length < 4) {
      century = yearString.substring(0, 1);
      return century + centurySuffix(century);
    } else {
      century = yearString.substring(0, 3);
      return century + centurySuffix(century);
    }
  } else if (yearString.length === 4) {
    //year length === 4
    century = Number(yearFirstTwoDigits) + 1;
    //add suffix
    return century + centurySuffix(century);
  } else if (yearString.length === 3) {
    //year length === 4
    century = Number(yearString[0]) + 1;
    //add suffix
    return century + centurySuffix(century);
  } else if (yearString.length < 3) {
    century = 1;
    return century + centurySuffix(century);
  } else {
    //length > 4
    century = Number(yearFirstThreeDigits) + 1;
    return century + centurySuffix(century);
  }
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return "th";
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}

console.log(century(2000)); // "20th"
console.log(century(900)); // 9th
console.log(century(50000)); // 500th
console.log(century(2001)); // "21st"
console.log(century(1965)); // "20th"
console.log(century(256)); // "3rd"
console.log(century(556)); // "6rd"
console.log(century(5)); // "1st"
console.log(century(99)); // "1st"
console.log(century(100)); // "1st"
console.log(century(10103)); // "102nd"
console.log(century(1052)); // "11th"
console.log(century(1127)); // "12th"
console.log(century(11201)); // "113th"
