/* Leetcode 67. Add Binary.
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
*/

class Solution {
  const hello = () => {
    console.log('hello');
  }
}

app = new Solution();
app.hello();

const binaryToInt = function(num) {
  let result = 0;
  let carry = 1;
  for (let i = num.length - 1; i >= 0; i -= 1) {
    if (num[i] === '1') {
      result += carry;
    }
    carry *= 2;
  }
  return result;
};

const intToBinary = function(num) {
  result = [];
  if (num === 0) {
    return '0';
  }
  while (num > 0) {
    result.push(num % 2);
    num = Math.floor(num / 2);
  }

  return result.reverse().join('');
};

var addBinary = function(a, b) {
  return intToBinary(binaryToInt(a) + binaryToInt(b));
};

//console.log(addBinary('101', '110'));
//console.log(binaryToInt('1011'));

console.log(intToBinary(10));
