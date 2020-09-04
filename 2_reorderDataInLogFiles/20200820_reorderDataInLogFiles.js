/*

Question:

  Given an array of logs where each log is a space delimited string of words.
  The first word in each log is an alphanumeric identifier.
  There will always be at least one word after the identifier.

    If letter-log => Each word after the identifier will consist only of lowercase letters.
    If digit-log => Each word after the identifier will consist only of digits.

  Reorder the logs so that:

    1. The letter-logs come before the digit-logs.
    2. The letter-logs:
      a. Should be ordered lexicographically ignoring the identifier.
      b. Should use the identifier in case of ties.
    3. The digit-logs should be ordered in their original order.

  Notes:

    "let" => Identifies a letter-log.
    "dig" => Identifies a digit-log.

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

Clarifying Questions:

  1. What does lexicographically mean?

    Lexicographically is a term used in mathematics.
    It is used to describe the way words are alphabetically ordered based on the alphabetical order of their letter components.
    Lexicographic order is the usual way strings are ordered.
    It is otherwise known as dictionary order, except that all of the uppercase letters precede all of the lowercase letters.

  2. Do we have to return a different array or can we return a new array?

Simple Examples:

  1. No logs.
    f([]) => []

  2. Single letter-log, no digit-logs.
    f(["let1 aaa aaa"]) => ["let1 aaa aaa"]

  3. Single digit-log, no letter-logs.
    f(["dig1 1"]) => ["dig1 1"]

  4. Single digit-log, single-letter log.
    f(["dig1 1", "let1 aaa aaa"]) => ["let1 aaa aaa", "dig1 1"]

  5. Multiple continguous digit-logs, single-letter log.
    f(["dig1 1", "dig1 2", "let1 aaa aaa"]) => ["let1 aaa aaa", "dig1 1", "dig1 2"]

  6. Multiple uncontinguous digit-logs, single-letter log.
    f(["dig1 1", "let1 aaa aaa", "dig1 2"]) => ["let1 aaa aaa", "dig1 1", "dig1 2"]

  7. Multiple uncontinguous digit-logs, multiple-contiguous letter logs.
    f(["dig1 1", "let1 aaa aaa", "let1 aaa aab", "dig1 2"]) => ["let1 aaa aaa", "let1 aaa aab", "dig1 1", "dig1 2"]

  8. Multiple uncontiguous digit-logs, multiple uncontiguous letter logs sorted lexicographically.
    f(["dig1 1", "let1 aaa aab", "dig1 2", "let1 aaa aaa"]) => ["let1 aaa aaa", "let1 aaa aab", "dig1 1", "dig1 2"]

  9. Multiple uncontiguous digit-logs, multiple uncontiguous letter logs sorted by identifier.
    f(["dig1 1", "let2 aaa aaa", "dig1 2", "let1 aaa aaa"]) => ["let1 aaa aaa", "let2 aaa aaa", "dig1 1", "dig1 2"]

Strategies:

  1. Lorem ipsum. Time: O(n + logn), Space: O(n), n is the number of elements in the logs

    If logs.length === 0:
      Return []
    If logs.length > 0:
      Store empty arrays in variables titled digitLogs and letterLogs and combinedLogs.
      Loop through the entire array
        Copy all string beginning with "dig" to the digit-log array.
        Copy all strings beginning with "log" to the letter-log array.
      Fill in combined-log with all of the value in letter-log followed by digit-log.

    Sort the letter logs lexographically ignoring the identifier.

    * This should fulfill the first 7 cases *

*/

var reorderLogFiles = function (logs) {
  var letterLogs = [];
  var digitLogs = [];

  if (logs.length === 0) {
    return [];
  }

  // Split into letterLogs and digitLogs
  for (var i = 0; i < logs.length; i++) {
    var currentLog = logs[i];
    var indexOfFirstCharacter = currentLog.indexOf(" ") + 1;
    var firstCharacter = currentLog[indexOfFirstCharacter];

    if (isNaN(firstCharacter)) {
      letterLogs.push(currentLog);
    } else {
      digitLogs.push(currentLog);
    }
  }

  letterLogs.sort(function (firstString, secondString) {
    var firstStringLetters = firstString.substring(firstString.indexOf(" ") + 1);
    var secondStringLetters = secondString.substring(firstString.indexOf(" ") + 1);

    // Ignore the identifier
    if (firstStringLetters < secondStringLetters) {
        return -1;
    }

    if (firstStringLetters > secondStringLetters) {
        return 1;
    }

    // If still equal sort by the identifier
    if (firstStringLetters === secondStringLetters) {
      if (firstString < secondString) {
        return -1;
      }

      return 1;
    }
  });

  return [...letterLogs, ...digitLogs];
}

/*

  Methods that I had to refresh my memory on when working on this problem:

    1. String.prototype.indexOf()
    2. How characters in a string are accessed in JavaScript.
    3. isNaN()
    4. Array.prototype.sort()
    5. String.prototype.substring()
    6. How strings are compared in JavaScript.

  ----------

  Mistakes that I made that caused the solution to fail:

    1. I did not think about asking a clarifying question about whether or not the alphanumeric string always came in a particular form.
      => The pattern in the example suggested that this string was consistent, however I did not question it at all.
      => Having this thought would have improved my process of spotting this error.
    2. After I modified the loop that sorts the logs into letter and digit logs I did not follow my test case through to the sort function.
      => Following my test case carefully through to this point would have shown me that this function needs to be updated.
    3. Once I modified the sort function, I  did not double check the solution to ensure that I was using the right variables in the right spot.
      => If I had done this I would have caught the careless error that I made here.

  ----------

  Notes from Solution on Leetcode:

    This problem is a good way to practice a custom sort.
    The idea of a custom sort is that we don't have to rewrite a sorting algorithm everytime we have a different sorting criteria among the elements.

    The solutions presented here will present 2 ways to specify the sorting order.
      1. By comparator.
      2. By sorting key.

    This problem can be translated into the following rules:
      1. The letter logs should be sorted before all digit logs.
      2. Letter logs should be sorted:
        a. Based on their contents.
        b. If their contents is equal they should be sorted by their identifiers.
      3. The digit

*/
