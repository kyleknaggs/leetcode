/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Input = [5, 2, 7], 9
// Output = [1, 2];

var twoSum = function (nums, target) {
    var storage = {};
    for (var i = 0; i<nums.length; i++) {
        storage[nums[i]] = i;
    }

    for (var j=0; j<nums.length; j++) {
        var complement = target - nums[j];

        if (complement in storage) {
            return [j, storage[complement]];
        }
    }
}

twoSum([5, 2, 7], 9);

/*

------------------------------

Time to solve problem:
8 minutes 9 seconds

Did the solution work:
Yes when compared to expected output for particular test case.
No when submitted. Input: [3, 2, 4] & 6 Output: [0, 0] Expected: [1, 2]
6

Is this the ideal solution:
No

Other issues with inital submission:
Did not use white space in for loop declarations correctly
Did not think about mentioning the runtime of the solution

*/