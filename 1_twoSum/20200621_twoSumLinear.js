/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Example:
// Input: [11, 2, 7], 9
// Output: [1, 2]

// Option 1: Brute force solution
// Option 2: Key value lookup

var twoSum = function(nums, target) {
  var storage = {};

  for (var i = 0; i < nums.length; i++) {
      var firstValue = nums[i];
      storage[firstValue] = i;
  }

  for (var j = 0; j < nums.length; j++) {
      var secondValue = nums[j];
      var complementValue = target - secondValue;
      
      if (complementValue in storage) {
          var indexOfComplementValue = storage[complementValue];
          
          if (j !== indexOfComplementValue) {
              return [j, indexOfComplementValue];                
          }
      }
  }
};

/*

------------------------------

Time to solve problem:
Unknown

Did the solution work:
Yes when compared to expected output for particular test case.
Yes when submitted.

Is this the ideal solution:
Yes

Other issues with inital submission
Did not time how long I took to come up with my solution as I wanted to focus on getting the answer right.

*/

