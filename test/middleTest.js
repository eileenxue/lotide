const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

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