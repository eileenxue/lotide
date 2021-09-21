# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @eileenxue/lotide`

**Require it:**

`const _ = require('@eileenxue/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Assert that two arrays are equal
* `assertEqual(actual, expected)`: Assert that two arguments are equal
* `assertObjectsEqual(object1, object2)`: Assert that two objects are equal
* `countLetters(inputText)`: Count the number of times a letter appears in a string without the white spaces 
* `countOnly(allItems, itemsToCount)`: Count if the element is part of an array based on a list of items in an object with boolean values 
* `eqArrays(array1, array2)`: Check if two arrays are the same
* `eqObjects(object1, object2)`: Check if two objects are the same
* `findKey(objects, callback)`: Return the first key that matches the value in the callback's object's key's value
* `findKeyByValue(object, value)`: Return the key that matches the object's value
* `head(array)`: Return the first element in an array
* `letterPositions(string)`: Return the index position of the letters in a string in an object format
* `map(array, callback)`: Return the result based on the index value of the callback function
* `middle(array)`: Return the middle elements of on array (one element for odd, two elements for even number array lengths)
* `tail(array)`: Return the remaining array elements omitting the first element
* `takeUntil(array, callback)`: Return the array elements up to a value set in the callback function
* `without(source, itemsToRemove)`: Return a subset of a given array, removing unwanted elements
