// Palindrome number

/**
 * @param {number} x
 * @return {boolean}
 */
// 0(n) time, O(n) space through converting to a string
var isPalindrome = function(x) {
    if (x < 0) return false;
    var str = Math.abs(x).toString(), index = 0;
    while (index < parseInt(str.length / 2)) {
        if (str[index] !== str[str.length - index - 1]) return false;
        index += 1;
    }
    return true;
};

// 0(n) time, O(1) space through reverting an integer
var isPalindrome = function(x) {
    if (x < 0) return false;

    var number = x, revertedNumber = 0;
    while (number) {
        revertedNumber = revertedNumber * 10 + number % 10;
        number = parseInt(number / 10);
    }
    if (x === revertedNumber) return true;
    return false;
};


let n1 = 1221;
let n2 = 1233;

// console.log(n1, isPalindrome(n1));
// console.log(n2, isPalindrome(n2));
console.log(isPalindrome(1234));
