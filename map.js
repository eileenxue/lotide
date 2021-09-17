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

// assertArraysEqual Function
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log("✅ These arrays are matching!");
  } else {
    console.log("🛑 The arrays do not match.");
  }
};

// Implment map function
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

// Test Code
assertArraysEqual(map(words, word => word[0]) , ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(['hello', 'my', 'name', 'is', 'eileen'], word => word[1]), ['e', 'y', 'a', 's', 'i']);