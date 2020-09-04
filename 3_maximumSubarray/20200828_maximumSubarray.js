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
  f([1, 2, 3, -1])              => [1, 2, 3]           => 6
  f([1, 2, 3, -1, 4])           => [1, 2, 3, -1, 4]    => 6
  f([1, 2, 3, -5, 4])           => [1, 2, 3]           => 6


Approach:

  1. Brute force solution.

    Declare a variable called highestSum.
    Go through every index in the array, sum the value of that value combined with every combination of other values.
    Once you have computed every possibility, return highestSum.

      [1] =>         1                                  => highestSum: 1         => 1
      [1, 2] =>      1, 1 + 2                           => highestSum: 1 + 2     => 3
      [1, 2, 3]  =>  1, 1 + 2, 1 + 3, 1 + 2 + 3, 2 + 3  => highestSum: 1 + 2 + 3 => 6
      [1, 2, -1] =>  1, 1 + 2, 1 - 1, 2 - 1             => highestSum: 1 + 2     => 3

    Time: O(n^n) Space: O(1)

  2. Compare sum of current contiguous array with largest sum.


    [-1, 2, 3, -5, 4]

    i      currentStreak        globalStreak

    0      [-1]       => -1     [-1]   => -1
    1      [2]        => 2      [2]    => 2
    2      [2, 3]     => 5      [2, 3] => 5
    3      [2, 3, -5] => 0      [2, 3] => 5
    4      [4]        => 4      [2, 3] => 5

    Declare a variable called highestSum and set it to negative infinity.
    Declare a variable called currentSum.

    For each value in the array
      Get the value at the current index.
      If the value at the current index is higher than the current contiguous sum:
        Set the value of current contiguous sum to the value stored at the current index.
      If the value at the current index is lower than the current contiguous sum:
        Set the value of the current contiguous sum to the value stored at the current index plus the value of the current contiguous sum.
      If the value of the current contiguous sum is higher than highestSum:
       Set the value of highestSum to the value of the current contiguous sum.

    Return highestSum

*/
// [-1, 2, 3, -5, 4]

// highestContiguousSum = - Infinity
// currentContiguousSum = -Infinity
  // i = 0
    // currentValue = -1
    // currentContiguousSum = -Infinity + -1, -1
    // highestContiguousSum = -1
  // i = 1
    // currentValue = 2
    // currentContiguousSum = 1, 2
    // highestContiguousSum = 2
  // i = 2
    // currentValue = 3
    // currentContiguousSum = 5
    // highestContiguousSum = 5
  // i = 3
    // currentValue = -5
    // currentContiguousSum = 0
    // highestContiguousSum = 5
  // i = 4
    // currentValue = 4
    // currentContiguousSum = 4
    // highestContiguousSum = 5
var maxSubArray = function(nums) {
  var highestContiguousSum = -Infinity;
  var currentContiguousSum = -Infinity;

  for (var i = 0; i < nums.length; i++) {
    var currentValue = nums[i];
    currentContiguousSum = currentContiguousSum + currentValue;

    if (currentValue > currentContiguousSum) {
      currentContiguousSum = currentValue;
    }

    if (currentContiguousSum > highestContiguousSum) {
      highestContiguousSum = currentContiguousSum;
    }
  }

  return highestContiguousSum;
};

/*




*/