let memberDirectory = {
  "Jane Doe": "323-8293",
  "Margaret Asbury": "989-1111",
  "Callum Beech": "533-9090",
  "Juanita Eastman": "424-1919",
};

// function isValidName(name) {
//   return /^\w+ \w+$/.test(name);
// }

function isValidName(name) {
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)$/;
  return nameRegex.test(name);
}
function isValidPhone(phone) {
  return /^\d{3}-\d{4}$/.test(phone);
}

function validMemberInfo(name, phone) {
  return isValidName(name) && isValidPhone(phone);
}

function addMember(name, phone) {
  if (validMemberInfo(name, phone)) {
    memberDirectory[name] = phone;
  } else {
    console.log("Invalid member information.");
  }
}

addMember("Laura Carlisle", "444-2223");
addMember("Rachel Garcia", "232-1191");
addMember("Earl 5mith", "331-9191");
addMember("G3ne 1itton", "596-4946");

console.log(memberDirectory);

// console.log(isValidName("G3ne 1itton"));
