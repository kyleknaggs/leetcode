/**
 * @param {string[]} logs
 * @return {string[]}
 */

// Given an array of a space delimited string of words
// Each string consists of:
    // 1. Alphanumeric identifer
    // 2. Followed by (a) Lowercase letters (b) digits

// Reorder the string so that:
    // Letter-logs
        // Sort ignoring the identifier
        // If there is a tie then use the identifier
    // Digit-logs
        // Return in their original order

// Clarifying questions:
// 1. Does the identifier have a specific format? The examples strongly imply digx => numbers and letx => letters
// 2. Does the identifier have a specific length? The examples strongly imply that the length is always 4 characters.

// Example:
// f([
//     "dig1 8 1 5 1",
//     "let1 art can",
//     "dig2 3 6",
//     "let2 own kit dig",
//     "let3 art zero"]
// ) => [
//     "let1 art can",
//     "let3 art zero",
//     "let2 own kit dig",
//     "dig1 8 1 5 1",
//     "dig2 3 6"
// ]

// Simple examples:
// f(["a 1", "b a"]) => ["b a", "a 1"] // Letter-logs before digit-logs // Done
// f(["a 2", "b 1", "c a"]) => ["c a", "a 2", "b 1"] // Digit-logs in their original order // Should take care of itself
// f(["a 2", "b 1", "c b", "d a"]) => ["d a", "c b", "a 2", "b 1"] // Letter-logs sorted lexographically without identifier 
// f(["a 2", "b 1", "d a", "c a"]) => ["c a", "d a", "a 2", "b 1"] // Use identifier in case of ties

// f(["a 2, "b 1", "c b", "d a"]) => ["d a", "c b", "a 2", "b 1"] // Letter-logs sorted lexographically without identifier 
function isLetterLog(log, index) { 
  if (isNaN(log[index]) === true ) {
      return true;
  }
  
  return false;
}

// Time complexity: O(n + logn), Space complexity: O(1)
var reorderLogFiles = function(logs) {
 logs.sort(function (firstLog, secondLog) {
     var indexOfFirstCharacterFirstLog = firstLog.indexOf(" ") + 1;
     var indexOfFirstCharacterSecondLog = secondLog.indexOf(" ") + 1;
     var firstLogLetter = isLetterLog(firstLog, indexOfFirstCharacterFirstLog);
     var secondLogLetter = isLetterLog(secondLog, indexOfFirstCharacterSecondLog);
     
     // Both digit-logs
     if (!firstLogLetter && !secondLogLetter) {
         return 0;
     }
     
     // Letter-log and digit-log
     if (firstLogLetter && !secondLogLetter) {        
         return -1;
     }
     
     if (!firstLogLetter && secondLogLetter) {
         return 1;
     }
     
     // Both letter logs
     var restOfFirstLog = firstLog.substring(indexOfFirstCharacterFirstLog);  
     var restOfSecondLog = secondLog.substring(indexOfFirstCharacterSecondLog);
     
     // Sort after identifier
     if (restOfFirstLog < restOfSecondLog) {
         return -1;
     }
     
     if (restOfFirstLog > restOfSecondLog) {
         return 1;
     }      
     
     // Use identifier as a tie-breaker
     if (firstLog < secondLog) {
         return -1;
     }
     
     if (firstLog > secondLog) {
         return 1;
     }
     
     return 0;
 });

 return logs;
};