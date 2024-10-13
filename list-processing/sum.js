function sumMINE(number) {
  let numberStringArray = String(number).split("");
  let sum = 0;

  numberStringArray.forEach((num) => {
    sum += Number(num);
  });
  return sum;
}

function sum(num) {
  let numberStringArray = String(num).split("");
  let sum = numberStringArray.reduce(
    (runningValue, currentValue) => Number(runningValue) + Number(currentValue),
    0
  );
  return sum;
}

console.log(sum(23)); // 5
console.log(sum(496)); // 19
console.log(sum(123456789)); // 45
