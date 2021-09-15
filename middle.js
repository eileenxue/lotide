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

// CHALLENGE
// Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function(array) {
  for (let i = 0; i < array.length; i++) {
    // If there is 2 or less arrays, return an empty array
    if (array.length < 3) {
      return [];
    // If there's an even number, take two of them
    } else if (array.length % 2 === 0) {
      return array.slice(array.length / 2 - 1, array.length / 2 + 1 );
    // If there's is an odd number, take one of the middle element
    } else {
      return array.slice([Math.floor(array.length/2)], Math.ceil(array.length/2));
    }
  }
};

// Test code
middle([1]) // => []
console.log(middle([1]));
middle([1, 2]) // => []
console.log(middle([1, 2]));

middle([1, 2, 3]) // => [2]
console.log(middle([1, 2, 3]));
middle([1, 2, 3, 4, 5]) // => [3]
console.log(middle([1, 2, 3, 4, 5]));

middle([1, 2, 3, 4]) // => [2, 3]
console.log(middle([1, 2, 3, 4]));
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
console.log(middle([1, 2, 3, 4, 5, 6]));

// Test case scenario to check that array is still the same
const middleArrayTest = [5, 4, 3, 2, 1];
middle(middleArrayTest);
assertArraysEqual(middleArrayTest, [5, 4, 3, 2, 1]); 