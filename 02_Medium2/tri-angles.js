/*
P: Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

Input: 3 integers representing angles
Output: string that specifies the type of triangle: 'right', 'acute', 'obtuse', or 'invalid'.
Rules: A triangle is classified as follows:
- Right: One angle is a right angle (exactly 90 degrees). 
- Acute: All three angles are less than 90 degrees.
- Obtuse: One angle is greater than 90 degrees.
- To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

E: 
D: Array to store the arguments

A:

- Create a helper function to check for the validity of the triangle
  - the sum of the angles must be exactly 180 degrees 
  - every angle must be greater than 0

- Check for a right angle: 
  - check if side1  === 90 || side2  === 90 || side3 === 90
    - if yes, return 'right'
- check for acute angle:
     check if side1  < 90 && side2  < 90 && side3 < 90
     if yes, return 'acute'
- else return 'obtuse'     

*/

function triangleMINE(angle1, angle2, angle3) {
  if (isValidTriangle(angle1, angle2, angle3)) {
    if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
      return "right";
    } else if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
      return "acute";
    } else {
      return "obtuse";
    }
  } else {
    return "invalid";
  }
}

function isValidTriangle(angle1, angle2, angle3) {
  return (
    angle1 + angle2 + angle3 === 180 && angle1 > 0 && angle2 > 0 && angle3 > 0
  );
}

console.log(triangle(60, 70, 50)); // "acute"
console.log(triangle(30, 90, 60)); // "right"
console.log(triangle(120, 50, 10)); // "obtuse"
console.log(triangle(0, 90, 90)); // "invalid"
console.log(triangle(50, 50, 50)); // "invalid"

// console.log(isValidTriangle(30, 90, 60));

//Launch School version

function triangle(angle1, angle2, angle3) {
  const angles = [angle1, angle2, angle3];

  if (isValid(angles)) {
    return getTriangleTypes(angles);
  } else {
    return "invalid";
  }
}

function isValid(angles) {
  const totalAngle = angles.reduce((total, angle) => total + angle);

  const allNonZero = angles.every((angle) => angle > 0);

  return totalAngle === 180 && allNonZero;
}

function getTriangleTypes(angles) {
  if (angles.some(testRightTriangle)) {
    return "right";
  } else if (angles.every(testAcuteTriangle)) {
    return "acute";
  } else {
    return "obtuse";
  }
}

function testRightTriangle(angle) {
  return angle === 90;
}

function testAcuteTriangle(angle) {
  return angle < 90;
}
