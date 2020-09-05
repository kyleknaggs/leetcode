/*

Question:

  Given an array of integers, nums and an integer target, return indicies of the two numbers such that they add up to a target.

  Assume each input has exactly 1 solution.
  Return the answer in any order.

Example:

  f([2,7,11,15], 9) => [0, 1]

    => 2 + 7 => 9
    => Array indexes: 0, 1
    => Return [0, 1]

Clarifying Questions:

  1. Lorem ipsum.

Simple Examples:

  f([2, 7], 9) => [0, 1]
  f([1, 2, 7], 9) => [1, 2]

Strategies:

  1. Brute force approach. Time: O(n^2), Space: O(1)

  2. Two pass hash table lookup. O(2n), Space: O(n)
    [1, 2, 7] => values = {1: 0, 2: 1, 7: 2} => 7 in values => values[7] => Return index of complement

  3. One pass has table lookup. O(n), Space: O(n)

    Create an empty values object:
      {}
    For every value in the array:
      Calculate the complement.
        8, 7, 2
      Check to see if that value exists in the values object.
        False, False, True
      If it exists, return the current index and the index of the value in the complement object.
        Skip, Skip, Enter
        Return [1, 2]
      If it does not exist, add the current value and its index to the values object.
        {8: 0, 2: 1}

*/

// nums = [1, 2, 7]
// target = 9
// previousValues = {}

// i = 0
// currentValue = 1
// complementValue = 8
// complementValue in previousValues => false
// previousValues = {1: 0}

// i = 1
// currentValue = 2
// complementValue = 7
// complementValue in previousValues => false
// previousValues = {1: 0, 2: 1}

// i = 2
// currentValue = 7
// complementValue = 2
// complementValue in previousValues => true
// Return
var twoSum = function(nums, target) {
  var previousValues = {};

  for (var i = 0; i < nums.length; i++) {
    var currentValue = nums[i];
    var complementValue = target - currentValue;

    if (complementValue in previousValues) {
      return [previousValues[complementValue], i];
    } else {
      previousValues[currentValue] = i;
    }
  }
};
