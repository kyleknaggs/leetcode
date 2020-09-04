/*

Question:

  You are given an array of logs, where each log is a space delimited string of words.
  Each log has an alphanumeric identifier which is followed by one of the following:

    a. Letter-logs: 1 or more words that consist of lowercase letters.
    b. Digit-logs: 1 or more words that consist of digits.

  Reorder the logs so that:

    1. All of the letter-logs come before any of the digit logs.
    2. The letter-logs are lexographically sorted:
      i. Ignoring the identifier.
      ii. If two words are lexographically equal, then use the identifier.
    3. The digit-logs should be put in their original order.

Example:

  f([
    "dig1 8 1 5 1",
    "let1 art can",
    "dig2 3 6",
    "let2 own kit dig",
    "let3 art zero"
  ]) => [
    "let1 art can",
    "let3 art zero",
    "let2 own kit dig",
    "dig1 8 1 5 1",
    "dig2 3 6"
  ]

  Notes:

    There will always be at least one word after the identifier.
    The first 3 letters of the string do not have any significant meaning. Any random selection of characters can be used here.
    There can be any number of words after the identifier.

Clarifying Questions:

  1. Do the first the letters in the string have a special meaning?
   If the first 3 letters of the string are "let", does that mean that it is a letter log?
   If the first 3 letters of the string are "dig", does that mean that it is a digit log?
  2. The length of the identifier string here is always 4 characters, is this always going to be consistent?
  3. Is it possible that that the input can contain 0 logs?
  4. Do these logs have to be sorted in-place, or can they be sorted out of place?
  5. Will the identifier strings always be unique?

Simple Examples:

  f([]) => [] // Empty array
  f(["a a"]) =>  ["a a"] // 1 element in array
  f(["a 1", "b a"]) =>  ["b a", "a 1"] // Letter logs in front of digit logs
  f(["c 2", "a 1", "b a"]) => ["b a", "c 2", "a 1"] // Preserve the original order of digit-logs
  f(["c 2", "a 1", "d b", "b a"]) => ["b a", "d b", "c 2", "a 1"] // Lexographically sort letter-logs without the identifier
  f(["c 2", "a 1", "d b", "b b"]) => ["b b", "d b", "c 2", "a 1"] // Lexographically sort letter logs by the identifier

Approaches:

  Use JavaScript's built in Array.prototype.sort() function.

  0 elements, does not matter.
  1 element, return that.

  If an element is a letter log, sort it in front of the digit log.
  If an element is a letter log, sort it without the identifier.
  If two letter logs are equal, sort by the identifier.

*/

// log = "a 1"
// indexOfFirstCharacter = 2
// firstCharacter = "1"
// isNaN("1") => false
// Return false

// log = "b a"
// indexOfFirstCharacter = 2
// firstCharacter = "a"
// isNaN("a") => true
// Return true
function isLetter (log) {
  var indexOfFirstCharacter = log.indexOf(" ") + 1;
  var firstCharacter = log[indexOfFirstCharacter];

  if (isNaN(firstCharacter)) {
    return true;
  }

  return false;
}

// f(["a 1", "b a"]) =>  ["b a", "a 1"]
  // firstLog = "b a"
  // secondLog = "a 1"
  // firstLogIsLetter = true
  // secondLogIsLetter = false
// f(["c 2", "a 1", "b a"]) => ["b a", "c 2", "a 1"]
// f(["c 2", "a 1", "d b", "b a"]) => ["b a", "d b", "c 2", "a 1"]
  // firstLog = "b a"
  // secondLog = "d b"
  // firstLogWords = "a"
  // secondLogWords = "b"
// f(["c 2", "a 1", "d b", "b b"]) => ["b b", "d b", "c 2", "a 1"]
  // firstLog = "d b"
  // secondLog = "b b"
  // firstLogWords = "b"
  // secondLogWords = "b"
var reorderLogFiles = function (logs) {
  logs.sort(function (firstLog, secondLog) {
    var firstLogIsLetter = isLetter(firstLog);
    var secondLogIsLetter = isLetter(secondLog);

    if (firstLogIsLetter && !secondLogIsLetter) {
      return -1;
    }

    if (firstLogIsLetter && !secondLogIsLetter) {
      return 1;
    }

    if (firstLogIsLetter && secondLogIsLetter) {
      var firstLogWords = firstLog.substring(firstLog.indexOf(" ") + 1);
      var secondLogWords = secondLog.substring(secondLog.indexOf(" ") + 1);

      if (firstLogWords < secondLogWords) {
        return -1;
      }

      if (firstLogWords > secondLogWords) {
        return 1;
      }

      if (firstLog < secondLog) {
        return -1;
      }

      if (firstLog > secondLog) {
        return 1;
      }
    }

    return 0;
  });

  return logs;
}

/*

  Methods that I had to refresh my memory on when working on this problem:

    Array.prototype.sort()

      Function Signature of sort: Array.prototype.sort(optionalCallback)
      Function signature of optionalCallback(): optionalCallback(firstValue, secondValue)

      In the optionalCallback, the function must return -1 , 0 or 1.

        a. If the function returns -1 => Move the value earlier in the array.
        b. If the function returns 0  => Do not move the value in the array.
        c. If the function returns 1  => Move the value later in the array.

      ----------

      Example:

        var numbers = [4, 2, 5, 1, 3]

        firstNumber => The value that is ea

        numbers.sort(function (firstNumber, secondNumber) {
          if (firstNumber > secondNumber) {
              return 1;
          }

          if (firstNumber < secondNumber) {
              return -1;
          }

          return 0;
        }) => [1, 2, 3, 4, 5]

        Values passed to callback:

          1. 2, 4 => Return -1 => [2, 4]
          2. 5, 2 => Return  1 => [2, 4], 2 < 5
          3. 5, 4 => Return  1 => [2, 4], 2 < 5 && 4 < 5 => [2, 4, 5]
          4. 1, 4 => Return -1 => [2, 4, 5], 1 < 4
          5. 1, 2 => Return -1 => [2, 4, 5], 1 < 4 && 1 < 2 => [1, 2, 4, 5]
          6. 3, 4 => Return -1 => [1, 2, 4, 5], 3 < 4
          7. 3, 2 => Return  1 => [1, 2, 4, 5], 3 < 4 && 2 < 3 => [1, 2, 3, 4, 5]

        Starting at the begninning of the array, the callback function:

          1. Creates a sorted  array.
          2. Goes through each index in the array.
          3. Extracts the value at that index.
          4. Compares the value at that index with all of the values in the existing sorted array using binary search.
            If the comparison returns 1, place that value at an index after the current value in the array.
            If the comparison returns -1, place that value at an index before the current value in the array.
          5. Inserts the value at the appropriate location in the sorted array.
          6. Repeat this process for the next index in the array.

  ----------

  Mistakes that I made that caused the solution to fail:

    Lorem ipsum.

  ----------

  Notes from Solution on Leetcode:

    Lorem ipsum.

*/
