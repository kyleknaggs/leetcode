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
// 1. Loop through every value in the initial array
    // a. Calculate a complement value
    // b. Store value in a hash map.
// 2. Loop through every value in the initial array
    // a. See if complement value exists in hash map
    // b. If it does return the current index and the index where the complement exists

// Examples:
  // f([1, 2, 3], 5) => [1, 2]
  // f([1, 2, 7], 9) => [1, 2]
    // complementValues = {8: 0, 7: 1, 2: 2}
        // i = 0, 1, 2
        // currentValue = 1, 2, 7
        // complementValue = 8, 7, 2
    // j = 0, 1
        // currentValue = 1, 2
        // 1 in complementValues => false, 2 in complementValues => true
        // [2, 1]

var twoSum = function(nums, target) {
  var complementValues = {};

  for (var i = 0; i < nums.length; i++) {
      var currentValue = nums[i];
      var complementValue = target - currentValue;
      complementValues[complementValue] = i;
  }
  
  for (var j = 0; j < nums.length; j++) {
      var currentValue = nums[j];
      
      if (currentValue in complementValues) {
          return [j, complementValues[currentValue]];          
      }
  }
};

/*

------------------------------
------------------------------

Time to a solution: Did not record

Did it run on your first attempt: Yes

Even though it did run on my first attempt this was only after making many corrections to my initial solution.
I also took too long to come up with an initial solution.

I could have improved this solution by sketching out how I would access these values before implementing my solution.
Once I sketched out how I would access them, it would have been able to implement a solution as I would be working to a specific example.
This specific example means that I would not be redoing all of the mental calculations in my head every time I wanted to work with my imaginary object.

*/