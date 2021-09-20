const assertArraysEqual = require('../assertArraysEqual');

// Test Code
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should output true
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // Should output false
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Should output false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Should output true