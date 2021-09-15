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
// Implement without which will return a subset of a given array, removing unwanted elements.
const without = function(source, itemsToRemove) {
  // declare a new array
  const newArray = [];
  // loop through the source array
  /* for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      let removeItem = false;
      // if the items to remove is in the source array, skip it
      if (source[i] === itemsToRemove[j]) {
        removeItem = true;
        //break;
      // if the items to remove is not in the source array, push it to new array
      }
      if (!removeItem){
        newArray.push(source[i]);
      }
    }
  } */

  // Helpful solution
  for (let items in source) {
    if (!itemsToRemove.includes(source[items])) {
      newArray.push(source[items]);
    }
  }
  // return a new array
  return newArray;
};


// Test code
without([1, 2, 3], [1]); // => [2, 3]
console.log(without([1, 2, 3], [1]));
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
console.log(without(["1", "2", "3"], [1, 2, "3"]));

// Make sure that the original array is still the same
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
console.log(without(words, ["lighthouse"]));
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

