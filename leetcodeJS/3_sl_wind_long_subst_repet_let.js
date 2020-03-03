// Longest substring without repeating characters

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  let leftWindow = 0;
  let count = {};
  let longest = 0;

  for (let rightWindow = 0; rightWindow < s.length; rightWindow++) {
    if (!count[s[rightWindow]]) {
      count[s[rightWindow]] = 0;
    }

    count[s[rightWindow]] += 1;

    if (Object.values(count).some(element => element > 1)) {
      count[s[leftWindow]]--;
      leftWindow++;
    } else {
      if (rightWindow - leftWindow + 1 > longest) {
        longest = rightWindow - leftWindow + 1;
      }
    }

    console.log(
      s.slice(leftWindow, rightWindow + 1),
      `leftWindow = ${leftWindow}`,
      `rightWindow = ${rightWindow}`,
      `longest = ${longest}`
    );
  }
  return longest;
};

console.log(lengthOfLongestSubstring('pwwkew'));
