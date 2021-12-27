/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    var map = {},
        left = 0,
        maxLength = 0;

    for (var right = 0; right < s.length; right++) {
        if (!map[[s[right]]]) {
            map[s[right]] = 0;
        }
        map[s[right]] += 1;
        while (Object.keys(map).length > k) {
            map[s[left]] -= 1;
            if (map[s[left]] === 0) {
                delete map[s[left]];
            }
            left += 1;
        }
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};