/*

Question:

  Given (1) An array of integers nums, and (2) An integer target:
  Return the indices of the 2 numbers such that they add up to target.

  Each input has exactly 1 solution.
  You may not use the same element twice.

Example:

   f([2, 7, 11, 15], 9) => [0, 1]

Clarifying Questions:

  1. Lorem ipsum.

Simple Examples:

  f([1, 2, 7], 9) => [1, 2]

Strategies:

  1. Brute force approach. Time: O(n^2), Space: O(1)
  2. Hash table lookup. Time: O(2n), Space: O(n)

    Create an object called complementValues.
    For every value in the array.
      For each value, calculate the complement value.
      Store the complement value in an object:
        [1, 2, 7] => complementValues = {8: 0, 7: 1, 2: 2}
    For every value in the array.
      Calculate the complement value.
      If that complement value exists.
      And the complement value is not stored as the current index.
        Return an array with the current index and the index of the complement value.

*/

// Go through all of the indices in nums
  // For every value in nums, compute the sum of that value with every other value in nums
    // If the firstValue + secondValue === target
    // Return the indices of both values

// f([1, 2, 7], 9) => [1, 2]
  // nums = [1, 2, 7]
  // target = 9
    // i = 0, 1
    // firstValue = 1, 2
      // j = 1, 2
      // secondValue = 2, 7
      // sum = 3, 8

      // j = 2
      // secondValue = 7
      // sum = 9
var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    var firstValue = nums[i];

    for (var j = i + 1; j < nums.length; j++) {
      var secondValue = nums[j];
      var sum = firstValue + secondValue;

      if (target === sum) {
        return [i, j];
      }
    }
  }
};

// f([1, 2, 7], 9) => [1, 2]
// Create an object called complementValues.
// For every value in the array.
//   Store the value and its index so that the value is accessible in an object: {1: 0, 2: 1, 7: 2}
// For every value in the array.
//   Calculate the complement value.
//   If that complement value is in values.
//     Retrive the index of the complement value.
//       If the index of the complement value is not the same as the current index.
//         Return an array with the current index and the index of the complement value.

// f([1, 2, 7], 9) => [1, 2]
/*
var twoSum = function(nums, target) {
  //  {8: 0, 7: 1, 2: 2}
  var complementValues = {};

  for (var i = 0; i < nums.length; i++) {
    // i = 0, 1, 2
    // complementValue = 8, 7, 2
    var complementValue = target - nums[i];
    complementValues[complementValues] = i;
  }

  for (var j = 0; j < nums.length; j++) {
    // j = 0, 1
    // complementValue2 = 8, 7
    var complementValue2 = target - nums[j];

    // 8 in complementValues => false, 7 in complementValues => true
    if (complementValue2 in complementValues) {
      var complementValueIndex = complementValues[complementValue2];

      if (complementValueIndex !== j) {
        return [j, complementValueIndex];
      }
    }
  }
};
*/

// f([1, 2, 7], 9) => [1, 2]
  // values = {1: 0, 2: 1, 7: 2}
    // i = 0, 1, 2
    // currentValue = 1, 2, 7
    // values[1] = 0, values[2] = 1, values[7] = 2

    // j = 0, 1
    // complementValue = 8, 7
    // 7 in values => true
      // complementIndex = 2
      // 1 !== 2
        // Return [1, 2]
var twoSum = function(nums, target) {
  var values = {};

  for (var i = 0; i < nums.length; i++) {
    var currentValue = nums[i];
    values[currentValue] = i;
  }

  for (var j = 0; j < nums.length; j++) {
    var complementValue = target - nums[j];

    if (complementValue in values) {
      var complementIndex = values[complementValue];

      if (j !== complementIndex) {
        return [j, complementIndex];
      }
    }
  }
}
