/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if (s === null) return "";
    if (s.length < 1) return "";
    var start = 0, end = 0;

    var growPalindrome = function(left, right) {
        console.log("***", left, right);
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            console.log(s[left], s[right]);
            left -= 1;
            right += 1;
        }
        console.log(right - left - 1);
        return right - left - 1;
    }

    for (var i = 0; i < s.length; i++) {
        var length1 = growPalindrome(i, i);
        var length2 = growPalindrome(i, i + 1);
        var length = Math.max(length1, length2);
        if (length > end - start) {
            start = i - parseInt((length - 1) / 2);
            end = i + parseInt(length / 2);
        }
        // console.log(i, length1, length2, length, start, end);
    }
    return s.substring(start, end + 1);
};

// b a b a d
// |||||||

console.log(longestPalindrome("babad"));