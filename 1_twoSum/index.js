/*

TWO SUM

------------------------------
------------------------------

Prompt:

Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

------------------------------
------------------------------

Solutions:

----------

Approach 1: Brute force

The solution for this approach employs nested for loops.

The outer loop goes through every index in the given array.
The inner loop checks all of the indexes other than the one currently associated with the outer loop.
Once you have checked all of the other values for index, you do not need to revisit that particular combination.
Because of that you can make a small optimization by only checking values after the current value with the inner loop.

Performance / Time complexity: O(N^2)
Space complexity: O(1)

*/

// Example Brute Force Solution
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

----------

Approach 2: Two-pass Hash Table

To improve the performance of our previous solution, we need a more efficient way to perform this check.
We can do this by trading space for speed.

We can do this by using an object to store all of the values in the array and their corresponding indices.
This object, which is a mapping of each element in an array to its index is what is known as a hash table.

Once we do this, we can stop the loop and use a second loop to:
  1. Calculate the complement value for each index in the array.
  2. Check if that complement value exists in the hash table.
  3. Check if that complement value isn't at the current index.

Once all of these conditions have been met, we can return the indicies of the current value and the complement value.

Performance / Time complexity: O(N)
Space complexity: O(N)

*/

// Example Two Pass Hash Table
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

----------

Approach 3: One-pass Hash Table

We can make this solution event more performant performing all of the actions noted above in a single loop.

With this solution:

  1. Values are added to the hash table.
  2. Complement values are calculated.
  3. Hash tables are then checked to see if they contain the complement value.
  4. If they do, the index of the complement value and the current index are returned.

However, it is important to note that with this solution complement indexes will always be less than the current index.
Because of this you need to return the complement index before the current index in your array.

You also need to check and see if the complement value is in storage before modifying the storage object.
If you do not do this there and first value is equal to complement value, you will overwrite the index associated the complement value before you have the chance to check and see if that value already exists.

Performance / Time Complexity: O(n)
Space Complexity: O(n)

*/

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
------------------------------

References:
https://leetcode.com/articles/two-sum/


*/