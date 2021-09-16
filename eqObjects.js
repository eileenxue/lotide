// assertArraysEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// CHALLENGE 
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  // check if they have same number of keys
  if (key1.length !== key2.length){
    return false;
  };
  // check value of each key is same to other object
  for (const key of key1) {
    // console.log(object1[key], object2[key]);
    // check if value is an array 
    const arrayCheck = Array.isArray(object1[key]) && Array.isArray(object2[key]);
    if (arrayCheck && eqArrays(object1[key], object2[key])){
      return true;
    } 
    // compare primitives key
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


// Test Code for Primitives 
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);

// Test Code for Arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);