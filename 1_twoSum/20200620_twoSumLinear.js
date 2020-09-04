/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Input = [5, 2, 7], 9
// Output = [1, 2];

// ------------------------------
// 1. First run through the debugger
var twoSum = function (nums, target) {
    var storage = {};
    // Before: storage = {}
    // 1st iteration: storage = {5: 0}
    // 2nd iteration: storage = {5: 0, 2: 1, 7: 2}
    for (var i = 0; i < nums.length; i++) {
        storage[nums[i]] = i;
    }

    /*
      nums = [5, 2, 7]
      target = 9
      storage = {
        5: 0,
        2: 1,
        7: 2
      }
    */
    for (var j = 0; j < nums.length; j++) {
        // 1st iteration: j = 0,
        // 2nd iteration: j = 1
        // 1st iteration: complement = 9 - 5 => 4
        // 2nd iteration: complement = 9 - 2 => 7
        var complement = target - nums[j];

        // 1st iteration: 4 in storage => false
        // 2nd iteration: 7 in storage => true
        if (complement in storage) {
            // 2nd iteration: [1, storage[7]] => [1, 2]
            return [j, storage[complement]];
        }
    }
}

debugger;
twoSum([5, 2, 7], 9);

// ------------------------------
// Revised function:
var twoSum = function (nums, target) {
  var storage = {};
  for (var i = 0; i < nums.length; i++) {
      var firstValue = nums[i];
      storage[firstValue] = i;
  }

  for (var j = 0; j < nums.length; j++) {
      var secondValue = nums[j];
      var complement = target - secondValue;

      if (complement in storage) {
          return [j, storage[complement]];
      }
  }
}

// ------------------------------
// Revised function with problematic test case:
// Problem: If complement === number at current index, it will return that same index
var twoSum = function (nums, target) {
  /*
    nums = [3, 2, 4]
    target = 6
  */
  var storage = {};
  // Before: storage = {}
  // After: storage {3: 0, 2: 1, 4: 2}
  for (var i = 0; i < nums.length; i++) {
      var firstValue = nums[i];
      storage[firstValue] = i;
  }

  for (var j = 0; j < nums.length; j++) {
      // 1st iteration: j = 0, secondValue = 3, complement = 3
      var secondValue = nums[j];
      var complement = target - secondValue;

      // 1st iteration: 3 in storage => true
      if (complement in storage) {
          // return [0, 0]
          return [j, storage[complement]];
      }
  }
}

debugger;
twoSum([3, 2, 4], 6);
// Expected: [1, 2]
// Actual: [0, 0] (According to Leetcode)


// ------------------------------
// Revised function with problematic test case:
var twoSum = function (nums, target) {
  var storage = {};
  for (var i = 0; i < nums.length; i++) {
      var firstValue = nums[i];
      storage[firstValue] = i;
  }

  for (var j = 0; j < nums.length; j++) {
      var secondValue = nums[j];
      var complement = target - secondValue;
      var indexOfComplement = storage[complement];

      if (indexOfComplement!== j && complement in storage) {
          return [j, indexOfComplement];
      }
  }
}

twoSum([3, 2, 4], 6);
// Expected: [1, 2]
// Actual: [1, 2]