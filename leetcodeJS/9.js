// Palindrome number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let num = x.toString();
  for (let i = 0; i < num.length / 2; i++) {
    if (num[i] !== num[num.length - i - 1]) {
      return false;
    }
  }
  return true;
};

let n1 = 1221;
let n2 = 1233;

console.log(n1, isPalindrome(n1));
console.log(n2, isPalindrome(n2));
