/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// Given: An array of integers
// Return indicies of 2 numbers that add up to a specific target
// Asssume each input has exactly 1 solution
// Cannot use same element twice

// Option 1: Check all possible pairs

// Input: nums = [1, 2, 7], target = 9
// Output: [1, 2]
var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var firstValue = nums[i];

        for (var j = i + 1; j < nums.length; j++) {
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

Time to solve problem:
6 minutes 46 seconds

Did the solution work:
Yes when compared to expected output for particular test case.
Yes when submitted.

Is this the ideal solution:
No

Other issues with inital submission
Should have label the example in the comment with an Example: comment
Did not think about mentioning the runtime of the solution
Fixed formatting of for loops before submitting solution. However, formatting was still not seamless.
Had to go back and add white space to lots of things after I wrote them as adding white space properly is not an igrained habit.

*/