// Longest Palindromic Substring

/**
 * @param {string} s
 * @return {number}
 */

// Brute Force

const isPalindrome = str => {
  if (str.length === 1) {
    return true;
  }
  for (let i = 0; i < str.length / 2; i++) {
    //console.log(str[i], str[str.length - i - 1]);
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
};

var longestPalindromeBruteForce = function(s) {
  let result = '';
  let palindromes = {};
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      if (isPalindrome(s.slice(i, j))) {
        palindromes[s.slice(i, j)] = 1;

        if (s.slice(i, j).length > result.length) {
          result = s.slice(i, j);
        }
      }
      console.log(i, j, s.slice(i, j), result);
    }
  }
  return result;
};

var longestPalindrome = function(s) {
  let longest = '';
  let left, rigth;
  if (s.length === 1) {
    return s;
  }
  if (s.length === 0 || s.length === 2) {
    return '';
  }
  for (let i = s.length; i >= 0; i--) {
    if (isPalindrome(s.slice(0, i))) {
      longest = s.slice(0, i);
      left = 
      break;
    }
  }
}

cbbd

cbbd
cbb


//console.log(isPalindrome('abcba'));

console.log(longestPalindromeBruteForce('cbbd'));
