// eqArrays Function
const eqArrays = function(array1, array2) {
  // Check to make sure the length is the same
  if (array1.length !== array2.length) return false;
  // Compare the values of both arrays
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// Import eqObjects Function
const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  // check if they have same number of keys
  if (key1.length !== key2.length) {
    return false;
  }
  // check value of each key is same to other object
  for (const key of key1) {
    // console.log(object1[key], object2[key]);
    // check if value is an array
    const arrayCheck = Array.isArray(object1[key]) && Array.isArray(object2[key]);
    if (arrayCheck && eqArrays(object1[key], object2[key])) {
      return true;
    }
    // compare primitives key
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// CHALLENGE
// Implement assertObjectsEqual to take 2 objects and console.log an appropriate message
const assertObjectsEqual = function(actual, expected) {
  // Add util library
  const inspect = require('util').inspect;
  // console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Test Code
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
assertObjectsEqual(cd, cd2);