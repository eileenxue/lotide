const assertEqual = require('../assertEqual');
const head = require('../head');

// Test Code
assertEqual(head([5,6,7]), 5); // pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // pass
assertEqual(head([]), 1); // should fail