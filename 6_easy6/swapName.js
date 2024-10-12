function swapName(name) {
  let nameArray = name.split(" ");
  // let finalName = nameArray.reverse().join(", ");
  // return finalName;
  let lastName = nameArray.slice(nameArray.length - 1);
  let firstMiddleName = nameArray.slice(0, nameArray.length - 1);
  lastName = lastName.join(" ");
  firstMiddleName = firstMiddleName.join(" ");
  let finalSwappedName = `${lastName}, ${firstMiddleName}`;
  return finalSwappedName;
}

console.log(swapName("Joe Roberts")); // "Roberts, Joe"
console.log(swapName("Karl Oskar Henriksson Ragvals"));
