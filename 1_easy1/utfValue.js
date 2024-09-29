function utf16Value(str) {
  let sumOfValues = 0;
  for (let idx = 0; idx < str.length; idx++) {
    sumOfValues += str.charCodeAt(idx);
  }
  return sumOfValues;
}

console.log(utf16Value("Four score")); // 984
console.log(utf16Value("Launch School")); // 1251
console.log(utf16Value("a")); // 97
console.log(utf16Value(""));
