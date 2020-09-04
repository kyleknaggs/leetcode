/*

Question:

  Merge 2 sorted lists and return it as a new sorted list.
  The new list shoud be made by splicing together the nodes of the first 2 sorted lists.

Example:

  Input: 1 -> 2 -> 4, 1 -> 3 -> 4
  Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4

  f([1, 2, 4], [1, 3, 4]) => [1, 1, 2, 3, 4, 4]

Clarifying Questions:

  1. Can these sorted lists only contain integers?
  2. Does the "->" notation signify the link between 2 items in memory in a singly linked list?
  3. Does the phrase "splicing together" have any specific implications? JavaScript has a native Array.prototype.splice() method, do you want me to use that?
  4. Do you have to return the same array or can it be a different array?
  5. Can one of the inputs be an empty array?

Simple Examples:

  f([1], [1]) => [1, 1]
  f([1, 3], [1]) => [1, 1, 3]
  f([1, 3], [2]) => [1, 2, 3]
  f([1, 3], [2, 4]) => [1, 2, 3, 4]

Strategies:

  1. Add one array to the end of the other array, sort the values once you have combined them. Time: O(n), Space: O(n)
    => Declare a new, empty array: []
    => Go through every index in l1 and copy all of the values to the new array.
    => Go through every index in l2 and copy all of the values to the new array.
    => Sort the elements in the new array.
    => Return the sorted array.

*/

// Answer that works with the simple example above, but will not work in Leetcode
// It probably will not work in Leetcode because of the intricacies of Linked List questions
var mergeTwoLists = function(l1, l2) {
  var mergedList = [];

  for (var i = 0; i < l1.length; i++) {
    mergedList.push(l1[i]);
  }

  for (var j = 0; j < l2.length; j++) {
    mergedList.push(l2[j]);
  }

  mergedList.sort();

  return mergedList;
};
