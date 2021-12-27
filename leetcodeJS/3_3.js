/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;
    if (s.length < 2) return s.length;
    var map = {},
        left = 0,
        longest = 0,
        curLength = 0;

    for (var right = 0; right < s.length; right++) {
        if (!(s[right] in map)) {
            curLength += 1;
        } else {
            longest = Math.max(longest, curLength);
            left = Math.max(map[s[right]] + 1, left);
            curLength = right - left + 1;
        }
        map[s[right]] = right;
    }
    return Math.max(longest, curLength);
};

console.log(lengthOfLongestSubstring("dvdf"));

a b b a
    L
      R

d v d f
L
    R