// eqArrays Function
const eqArrays = require('./eqArrays');

// CHALLENGE
// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log("✅ These arrays are matching!");
  } else {
    console.log("🛑 The arrays do not match.");
  }
};

module.exports = assertArraysEqual;


