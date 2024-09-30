/*
Approach 1:
1.  Iterate over string
2.  Compare first index with last index 
3.  Incremenet first index, decrement last index and keep comparing
4.  When char is not equal return false
5.  Return true

Approach 2
1.  Reverse the string.
2.  Compare original string with reversed string
3.  If not equal return false, else return true
*/

function isPalindrome1(text) {
  let idx2 = text.length - 1;
  for (let idx1 = 0; idx1 < text.length; idx1++) {
    if (text[idx1] !== text[idx2]) {
      return false;
    }
    idx2--;
  }
  return true;
}

function isPalindrome(text) {
  let reverseText = text.split("").reverse().join("");
  if (reverseText !== text) {
    return false;
  }
  return true;
}

// console.log(isPalindrome1("madam")); // true
// console.log(isPalindrome1("Madam")); // false (case matters)
// console.log(isPalindrome1("madam i'm adam")); // false (all characters matter)1(
// console.log(isPalindrome1("356653")); // true

// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("Madam")); // false (case matters)
// console.log(isPalindrome("madam i'm adam")); // false (all characters matter)1(
// console.log(isPalindrome("356653")); // true

/*
Case doesn't matter, only alpha chars matter
1.  Create clean text
2.  Convert string to lower case, reverse the string and compare
3.  If the same, return true, if not return false
*/
function isRealPalindrome(text) {
  let cleanText = createCleanText(text);
  let reverseText = cleanText.split("").reverse().join("");

  return cleanText === reverseText;
}

function createCleanText(text) {
  let cleanText = "";
  for (let idx = 0; idx < text.length; idx++) {
    let currentElement = text[idx].toLowerCase();

    if (currentElement >= "a" && currentElement <= "z") {
      cleanText += currentElement;
    } else if (currentElement >= "0" && currentElement <= "9") {
      cleanText += currentElement;
    }
  }
  return cleanText;
}

// console.log(isRealPalindrome("madam")); // true
// console.log(isRealPalindrome("Madam")); // true (case does not matter)
// console.log(isRealPalindrome("Madam, I'm Adam")); // true (only alphanumerics matter)
// console.log(isRealPalindrome("356653")); // true
// console.log(isRealPalindrome("356a653")); // true
// console.log(isRealPalindrome("123ab321")); // false

// createCleanText("Madam, I'm Adam");

const isPalindromicNumber = (num) => {
  let stringNum = String(num);
  let reverseStringNum = stringNum.split("").reverse().join("");

  // return Number(stringNum) === Number(reverseStringNum);
  return stringNum === reverseStringNum;
};

console.log(isPalindromicNumber(34543)); // true
console.log(isPalindromicNumber(123210)); // false
console.log(isPalindromicNumber(22)); // true
console.log(isPalindromicNumber(5)); // true
