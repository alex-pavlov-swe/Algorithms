// 14. Longest Common Prefix
/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length == 0) {
    return '';
  }

  let commomPrefix = '';

  for (let i = 0; i < strs[0].length; i++) {
    commomPrefix = strs[0].slice(0, i + 1);
    for (let j = 0; j < strs.length; j++) {
      if (strs[j].slice(0, i + 1) !== commomPrefix) {
        return commomPrefix.slice(0, i);
      }
    }
  }
  return commomPrefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
