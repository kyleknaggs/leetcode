/*

Question:

  Merge 2 sorted lists and return it as a new sorted list.
  The new list shoud be made by splicing together the nodes of the first 2 sorted lists.

Example:

  Input: 1 -> 2 -> 4, 1 -> 3 -> 4
  Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4
  Structure of Node: {
    val: 0 || val,
    next: null | next
  }

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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
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

// Diagrams of how you can solve this problem:

// Simple example:
// Input: 1 -> 3, 2 -> 4
// Output: 1 -> 2 -> 3 -> 4

// Input:  {val: 1, next: * pointer *}, {val: 3: next: null}
// Output: {val: 2, next: * pointer *}, {val: 4, next: null}

// 1. At the start of the problem:
//     ^
// l1: 1 -> 3 -> null
//     ^
// l2: 2 -> 4 -> null

// Create a dummy node for the new linked list:
//     ^
// l1: 1 -> 3 -> null
//     ^
// l2: 2 -> 4 -> null
//     ^
// cu: null

// Compare the values at the current pointer locations.
// Take the lesser of the two values and set it to cu.
//          ^
// l1: 1 -> 3 -> null
//     ^
// l2: 2 -> 4 -> null
//     ^
// cu: 1

// Repeat:
// Take the lesser of the two values and set it to cu.
//          ^
// l1: 1 -> 3 -> null
//          ^
// l2: 2 -> 4 -> null
//          ^
// cu: 1 -> 2

// Repeat:
// Take the lesser of the two values and set it to cu.
//               ^
// l1: 1 -> 3 -> null
//          ^
// l2: 2 -> 4 -> null
//               ^
// cu: 1 -> 2 -> 3

// ------------------------------
// ------------------------------

// Diagrammatically how the Linked List is represented:
// l1 => 1 -> 3
// l2 => 2 -> 4

// How these Linked lists are actually represented in JavaScript:
var firstList = {
  val: 1,
  next: {
      val: 3,
      next: null
  }
};
var secondList = {
  val: 2,
  next: {
      val: 4,
      next: null
  }
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function(l1, l2) {
  let dummyHead = new ListNode(0);
  let currentNode = dummyHead; 

  while(l1 !== null && l2 !== null){

      if(l1.val < l2.val){
          currentNode.next = l1;
          l1 = l1.next
      } else {
          currentNode.next = l2
          l2 = l2.next
      }

      currentNode = currentNode.next
  }

  if(l1 !== null) {
      currentNode.next = l1;
  } else if (l2 !== null) {
      currentNode.next = l2
  }

  return dummyHead.next
}

mergeTwoLists(firstList, secondList);
// Returns:
// {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: null
//       }
//     }
//   }
// }

// ------------------------------
// ------------------------------

/*

Input: 1 -> 3, 2 -> 4
Output: 1 -> 2 -> 3 -> 4

  l1 => {
    val: 1,
    next: {
      val: 3,
      next: null
    }
  }

  l2 => {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }

Before loop:

  currentNode = undefined
  mergedLinkedList = undefined

First loop:

  mergedLinkedList = {
    val: 1,
    next: null
  }

Second Loop:

  mergedLinkedList = {
    val: 1,
    next: {
      val: 2,
      next: null
    }
  }

Third Loop:

  mergedLinkedList = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: null
      }
    }
  }

Fourth Loop:

  mergedLinkedList = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 3,
        next: {
          val: 4,
          next: null
        }
      }
    }
  }

Returns: {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}

*/

// l1 => 2, l2 => 1
// 1 -> 2
var mergeTwoLists = function(l1, l2) {
  var mergedList;

  // mergedList = undefined
  if (l1.val < l2.val) {
    mergedList = l1;
    l1.next = l2;
  } else {
    mergedList = l2;
    l2.next = l1;
  }

  return mergedList;
};


// ------------------------------
// ------------------------------

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Interview Cake question "Delete node from a singly linked list"
const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');
const d = new LinkedListNode('D');

a.next = b;
b.next = c;
c.next = d;

/*
a = {value: "A", next: {value: "B", next: {...}}
b = {value: "B", next: {value: "C", next: {...}}
c = {value: "C", next: {value: "D", next: null}}
d = {value: "D", next: null}

Before:
a = {
    value: "A", next: {
        value: "B", next: {
            value: "C", next: {
                value: "D", next: null
            }
        }
    }
}

After:
a = {
    value: "A", next: {
        value: "C", next: {
            value: "D", next: null
        }
    }
}

*/

function deleteNode(nodeToDelete) {
    var nextNode = nodeToDelete.next;
    
    // If the nextNode does exist, set 
    if (nextNode) {
        nodeToDelete.value = nextNode.value;
        nodeToDelete.next = nextNode.next;
    }
}

deleteNode(b);