/*
P: You have a bank of switches before you, numbered from 1 to count. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them, that is, you flip every switch. All the lights are now on. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. Now, every other light is on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have made count passes.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after count passes.
input: integer
output: array
rules: ex. count 5
- count 1: all lights are on
- count 2: 2, 4 are off, 1, 3, 5 are on
- count 3: 2, 3, 4 are off, 1, 5 are on
- count 4: 2, 3 are off, 1, 4, 5 are on
- count 5: 2, 3, 5 are off, 1, 4 are on

The value of count is what determines toggle status
Toggle numbers that are divisible by the count value

E:

D: int and arrays

A:


From LS
HELPER: Initialize lights from 0 to count, assign false

Loop through the rounds from 1 to count, and for each round:
If the current round is nth, toggle the lights whose indices are multiples of nth.
Use map to return a new array to represent the new states.
Filter/map the lights array to return a new array containing the indices of the lights that are on.

*/

function lightsOn(count) {
  let lights = initializeLights(count);

  for (let switchNum = 1; switchNum <= count; switchNum++) {
    lights = toggleLights(lights, switchNum);
  }

  let result = [];

  for (let idx = 0; idx < count; idx++) {
    if (lights[idx]) {
      result.push(idx + 1);
    }
  }
  return result;
}

function initializeLights(count) {
  let lights = [];

  for (let switchNum = 0; switchNum < count; switchNum++) {
    lights.push(false);
  }
  return lights;
}

function toggleLights(lights, round) {
  return lights.map((light, index) => {
    return (index + 1) % round === 0 ? !light : light;
  });
}

// console.log(initializeLights(5));

console.log(lightsOn(5)); // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
