// Longest substring without repeating characters
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let mentionedLetters = [];
  let longestSubstringLenth = 0;
  let currentLongest = 0;

  for (let j = 0; j < s.length; j++) {
    for (let i = j; i < s.length; i++) {
      if (!mentionedLetters.includes(s[i])) {
        currentLongest++;
        mentionedLetters.push(s[i]);
      } else {
        break;
      }
    }
    if (currentLongest > longestSubstringLenth) {
      longestSubstringLenth = currentLongest;
    }
    mentionedLetters.length = 0;
    currentLongest = 0;
  }
  return longestSubstringLenth;
};
