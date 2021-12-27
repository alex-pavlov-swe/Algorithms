/**
 * @param {string} s
 * @return {boolean}
 */
 var validPalindrome = function(s) {
    var left = 0, right = s.length - 1, charDeleted = false;
    while (left < right) {
        if (s[left] !== s[right]) {
            console.log(left, right, s[left], s[right]);
            if (charDeleted) return false;
            if (s[left + 1] === s[right]) {
                left += 1;
            } else if (s[left] === s[right - 1]) {
                right -= 1;
            } else return false;
            charDeleted = true;
        } else {
            left += 1;
            right -= 1;
        }
    }
    return true;
};

var str = "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga";
console.log(validPalindrome(str));