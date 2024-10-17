function letterCaseCount(string) {
  let resultObject = { lowercase: 0, uppercase: 0, neither: 0 };
  let stringArray = string.split("");

  stringArray.forEach((char) => {
    if (char >= "a" && char <= "z") {
      resultObject["lowercase"] += 1;
    } else if (char >= "A" && char <= "Z") {
      resultObject["uppercase"] += 1;
    } else {
      resultObject["neither"] += 1;
    }
  });
  return resultObject;
}

console.log(letterCaseCount("abCdef 123")); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount("AbCd +Ef")); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount("123")); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount("")); // { lowercase: 0, uppercase: 0, neither: 0 }
