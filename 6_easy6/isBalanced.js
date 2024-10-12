function isBalanced(str) {
  let parens = 0;

  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] === "(") {
      parens += 1;
    } else if (str[idx] === ")") {
      parens -= 1;
    }

    if (parens < 0) return false;
  }
  return parens === 0;
}

console.log(isBalanced("What ((is))) up(") === false);
