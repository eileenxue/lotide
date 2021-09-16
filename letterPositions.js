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
// Get the indices in the string where the letter is found
const letterPositions = function(sentence) {
  const results = {};
  // Loop through the sentence
  for (let i = 0; i < sentence.length; i++) {
    // Get the index of each letter and push to array?
    if (sentence[i] !== " ") {
      if (results[sentence[i]]){
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};


// Test Code
console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"));

// Test Cases
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house").i, [1, 11]);