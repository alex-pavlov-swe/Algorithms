// Longest substring without repeating characters

/**
 * @param {string} s
 * @return {number}
 */

function hasLetter(str, letter) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      return true;
    }
  }
  return false;
}

var lengthOfLongestSubstring = function(s) {
  let substring;
  let longest = 0;

  for (let j = 0; j < s.length; j++) {
    substring = '';
    for (let i = j; i < s.length; i++) {
      if (!hasLetter(substring, s[i])) {
        substring += s[i];
      } else {
        break;
      }
    }
    if (substring.length > longest) {
      longest = substring.length;
    }
  }

  return longest;
};
