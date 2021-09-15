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
// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log("✅ These arrays are matching!");
  } else {
    console.log("🛑 The arrays do not match.");
  }
};

// Test Code
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should output true
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // Should output false
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Should output false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Should output true
