/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Given an array of integers, return the indices of the 2 numbers
// such that they add up to a specific target.

// Additional Requirements:
// Each input has exactly one solution.
// Cannot use the same element twice.

// Examples:
// f([2, 7, 11, 15], 9) => [0, 1]
// f([1, 2, 3], 5) => [1, 2]

// Possible solutions:
// 1. Brute force solution: Loop through every possible combination of integers. Time: O(n^2), Space: O(1)
// 2. Calculate complement and look up in hash map. Time O(2n), Space: O(n)

// Steps:
// 1. Loop through all the values in the array other than the last
// 2. Check sum of current value with all values other than the current value
// 3. If currentValue + otherValue === target, return indices of both values

// f([1, 2, 3], 5) => [1, 2]
// i = 0, 1
// firstValue = 1, 2
    // j = 2
    // secondValue = 3
    // total = 5

// f([2, 1, 2], 4) => [1, 3]
// i = 0
// firstValue = 2
    // j = 1, 2
    // secondValue = 1, 2
    // total = 3, 4

var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length - 1; i++) {
      var firstValue = nums[i];

      for(var j = i + 1; j < nums.length; j++) {
          var secondValue = nums[j];
          var total = firstValue + secondValue;

          if (total === target) {
              return [i, j];
          }
      }
  }
};

/*

------------------------------
------------------------------

Time to a solution: 20:22

Did it run on your first attempt: No

It did not run on my first attempt because I made a mistake when initializing the start value of the inner loop.
I used "var j = firstValue + 1" instead of "var j = i + 1", which lead to the second loop never starting to run with the example case that was provided.

I can fix this by:

  Being more careful with how I initialize my second loop.
  Double checking my variable names more carefully.


*/