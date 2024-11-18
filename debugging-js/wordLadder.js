// let ladder = "" // old version, no semi-colon

// ["head", "heal", "teal", "tell", "tall", "tail"].forEach((word) => {
//     if (ladder !== "") {
//       ladder += "-";
//     }

//     ladder += word;
//   }
// );

let ladder = "";
["head", "heal", "teal", "tell", "tall", "tail"] // solution is to add a semi-colon here!!!
  .forEach((word) => {
    if (ladder !== "") {
      ladder += "-";
    }

    ladder += word;
  });
console.log(ladder); // expect: head-heal-teal-tell-tall-tail
