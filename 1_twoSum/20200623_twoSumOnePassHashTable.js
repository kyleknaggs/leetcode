/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Example:
// Input: [11, 2, 7], 9
// Output: [1, 2]
// Option 1: Brute force method
// Option 2: Two-pass hash table
// Option 3: One-pass hash table
var twoSum = function(nums, target) {
  var storage = {};
  for (var i = 0; i < nums.length; i++) {
      var firstValue = nums[i];
      var complementValue = target - firstValue;

      if (complementValue in storage) {
          var complementIndex = storage[complementValue];
          return [complementIndex, i];
      }

      storage[firstValue] = i;
  }
};

/*

------------------------------

Time to solve problem:
Unknown

Did the solution work:
This solution works.
However my original solution which modifies storage before checking the hash table did not work with [3,3], 6.
Is this the ideal solution:
I've seen students use the two pass hash table instead of this.

Other issues with inital submission
Did not time how long I took to come up with my solution as I wanted to focus on getting the answer right.

*/