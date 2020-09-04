/*

Question:

  Given an array of integers:

    1. Find the contiguous subarray with the largest sum.
    2. Return the sum.

  All contiguous arrays must have 1 or more numbers.

Example:

  f([-2, 1, -3, 4, -1, 2, 1, -5, 4]) => 6
  Explanation: [4, -1, 2, 1] has the largest sum = 6

  All values are integers.
  The array is not sorted.
  Values can be < 0, === 0 or > 0.
  Need to sum each value with all of its surrounding values.

Clarifying Questions:

  1. Can I sort the array?

Simple Examples:

  f([1])                        => [1]                 => 1
  f([1, 2])                     => [1, 2]              => 3
  f([1, 2, 3])                  => [1, 2, 3]           => 6
  f([1, 2, -1])                 => [1, 2]              => 3
  f([1, 2, -3, 4])              => [4]                 => 4
  f([1, 2, -1, 4, 5])           => [1, 2, -1, 4, 5]    => 11
  f([-1, 1, 2, -1, 4, 5, -1])   => [1, 2, -1, 4, 5]    => 11

Approach:

  1. Brute force solution.

    Declare a variable called highestSum.
    Go through every index in the array, sum the value of that value combined with every combination of other values.
    Once you have computed every possibility, return highestSum.

      [1] =>        1                      => highestSum: 1     => 1
      [1, 2] =>     1, 1 + 2               => highestSum: 1 + 2 => 3
      [1, 2, 3] =>  1, 1 + 2, 1 + 3, 1 + 2 + 3, 2 + 3 => highestSum: 2 + 3 => 5
      [1, 2, -1] => 1, 1 + 2, 1 - 1, 2 - 1 => highestSum: 1 + 2 => 3

    Time: O(n^n) Space: O(1)

*/

// [1, 2, 3],
// For each value:
    // i = 0
      // Copy array starting at that index: copiedArray = [1, 2, 3]
      // Calculate sum: total = 6
      // If total > highestSum set highestSum to sum: highestSum = 6
      // Pop 1 value off the end of the array: copiedArray = [1, 2]
      // Calculate sum: total = 3
      // If total > highestSum set highestSum to total
      // Pop 1 value off the end of the array: copiedArray = [1]
      // Calculate sum: total = 1
      // If total > highestSum set highestSum to total
    // i = 1
      // Copy array starting at that index: copiedArray = [2, 3]
      // Calculate sum: total 5
      // If total > highestSum set highestSum to total
      // Pop 1 value off the end of the array: copiedArray = [2]
      // Calculate sum: total: 2
      // If total > highestSum set highestSum to total
    // i = 2
      // Copy array starting at that index: copiedArray = [3]
      // Calculate sum: total = 3
      // If total > highestSum set highestSum to total
      // Pop one value off the end of the array

// Brute force solution:
  // Declare a value called highestSum
  // For each value in the array
  // Copy all the values in the array starting at the current index
    // For each index in the array startin at that point
    // Calculate the sum of all of the remaining values
    // If the sum of all the remaining values is higher than highestSum, store the sum in highestSum
    // Pop the last value off the end of the array
    // And Repeat the process
var maxSubArray = function(nums) {
  var highestSum = -Infinity;

  for (var i = 0; i < nums.length; i++) {
    var copiedArray = nums.slice(i);

    for (var j = i; j < nums.length; j++) {
      var total = copiedArray.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      });

      if (total > highestSum) {
        highestSum = total;
      }

      copiedArray.pop();
    }
  }

  return highestSum;
};

/*

Methods that I need to get more familiar with:

  1. Array.prototype.slice()
  2. Array.prototype.reduce()
  3. Array.prototype.pop()
  4. Infinity

Mistakes that I made:

  1. I declared the initial value at 0.

    This was a mistake as I acknowledged that values in the array could be negative which means that the maximum sum could be negative.


*/