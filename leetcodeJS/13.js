// Roman to integer

/*

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
  let result = 0;
  let count = 0;
  const alphabet = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
  };

  while (count < s.length) {
    if (Object.keys(alphabet).includes(s.slice(count, count + 2))) {
      result += alphabet[s.slice(count, count + 2)];
      count += 2;
    } else {
      result += alphabet[s.slice(count, count + 1)];
      count++;
    }
  }

  return result;
};

console.log(romanToInt('CMXXXIV'));
