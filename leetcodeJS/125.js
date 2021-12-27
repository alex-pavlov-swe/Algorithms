/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var left = 0;
    var right = s.length;
    s = s.toLowerCase();
    while (left < right) {
        if (!isAlphanumeric(s[left])) {
            left += 1;
            continue;
        }
        if (!isAlphanumeric(s[right])) {
            right -= 1;
            continue;
        }
        if (s[left] === s[right]) {
            left += 1;
            right -= 1;
        } else {
            return false;
        }
    }
    if (right - left > 1) {
        return false;
    } else {
        return true;
    }

    function isAlphanumeric(char) {
        if ((char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')) {
            return true;
        } else {
            return false;
        }
    }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("0P"));