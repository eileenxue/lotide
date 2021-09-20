// Import functions
const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Word Array
const words = ["Hello", "Lighthouse", "Labs"];

// Test Case 1: Check the returned array elements
const result = tail(words);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check to see that original array is not modified
assertEqual(words.length, 3);


// One element array
const singleArray = ["Hello"];

// Test cases
const resultSingle = tail(singleArray);
assertEqual(resultSingle.length, 0); // we should get back 0 elements
assertEqual(resultSingle[0], undefined); // should be empty array or undefined?