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

module.exports = middle;