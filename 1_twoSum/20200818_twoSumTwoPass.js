/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Given an array of integers,
// Return the indices of the two numbers such that they add up to a specific target

// Example
// f([1, 2, 7], 9) => [1, 2]

// Option 1: Brute force solution. 
    // Time: O(n^2), Space: O(1)
// Option 2: Two pass hash table lookup. 
    // Time: O(2n), Space: O(n)
    // {8: 0, 7: 1, 2: 2}, 7 in obj => Return true

// Steps:
// 1. Loop through all the values in the array
    // For each value calculate the complement value and store that along with its index on an object
// 2. Loop through all the values in the array again
    // For each value, see if the complement value exists
    // If it does, return the indices of the 2 values

// f([1, 2, 7], 9) => [1, 2]
  // complementValues = {8: 0, 7: 1, 2: 2}
    //  i = 0, 1, 2
    // complementValue = 8, 7, 2

    // j = 0, 1
    // currentValue = 1, 2
    // 1 in complementValues => false, 2 in complementValues => true
      // return [1, 2]

// f([3, 2, 4], 6) => 1, 2
  // complementValues = {3: 0, 4: 1, 2: 2}
    // nums = [3, 2, 4]
    // target = 6
        // i = 0, 1, 2
        // complementValue = 3, 4, 2
    // j = 0, 1
    // currentValue = 3, 2
    // 3 in complementValues => true, 2 in complementValues => true
        // complementIndex = 0, 2
        // 0 !== 0 => false, 1 !== 2 => true
            // return [1, 2]
var twoSum = function(nums, target) {
  var complementValues = {};

  for (var i = 0; i < nums.length; i++) {
      var complementValue = target - nums[i];
      complementValues[complementValue] = i;
  }

  for (var j = 0; j < nums.length; j++) {
      var currentValue = nums[j];

      if (currentValue in complementValues) {
          var complementIndex = complementValues[currentValue];

          if (j !== complementIndex) {
              return [j, complementIndex];
          }
      }
  }
};

// ----------

/**
 * Notes:
 *
 * What I did better:
 *
 *  My process was better than before.
 *  My diagrams were better and I focused on how I can systematically get to the solution instead of memorizing the answer.
 *  This included diagramming how I would access the values that are stored in the object.
 *  This is something that I always struggled with.
 *
 * Where I can imporove:
 *
 *  1. Attempt to use multi-line comments instead of single line comments. This should help you avoid all of the indenting issues that you constantly run into.
 *  2. Read the questions more closely and list all of the specific requirements so that you do not forget them.
 *  3. Continue to practice taking notes in a way that does not require you to create a complex mental model of the problem in your head.
 *
 * Example:
 *
 *  Given an array of indices return 2 numbers so that they add up to a target.
 *  Each input has exactly 1 solution.
 *  Do not use the same element twice.
 *
 *  f([2, 7, 11, 15], 9) => [0, 1]
 *
 *  Simplified Example:
 *  f([1, 2, 7], 9) => [1, 2]
 *
 */