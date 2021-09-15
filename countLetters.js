// assertArraysEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// CHALLENGE

const countLetters = function (inputText) {
  // define an empty array
  const results = {};
  // Create a for of loop to get all the letters AND get rid of white space
  for (const letter of inputText.replace(/ /g, '')) {
    // If statements 
    if (results[letter]){
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
}


// Test Code
console.log(countLetters("lighthouse in the house"));

// Test Cases
const result1 = countLetters("lighthouse in the house");
assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);