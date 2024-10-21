function searchWord(word, text) {
  const regex = new Regex(word, "gi");
  const matches = text.match(regex);

  return matches ? matches.length : 0;
}
