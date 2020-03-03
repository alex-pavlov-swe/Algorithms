// Integer to Roman

/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

1 to 3999

3999 = MMM CM XC IX
3400 = MMMCD

1000 = MMM
2000 = MMM
3000 = MMM

100 = C
200 = CC
300 = CCC
400 = CD
500 = D
600 = DC
700 = DCC
800 = DCC
900 = CM
*/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let result = [];
  let digits = [];
  for (let i = 0; i < num.toString().length; i++) {
    digits[i] = parseInt(num.toString()[i]);
  }
  let thousands = 0;
  let hundreds = 0;
  let tens = 0;
  let digit = 0;

  console.log(digits);

  if (digits.length === 1) {
    digit = digits[0];
  }
  if (digits.length === 2) {
    tens = digits[0];
    digit = digits[1];
  }
  if (digits.length === 3) {
    hundreds = digits[0];
    tens = digits[1];
    digit = digits[2];
  }
  if (digits.length === 4) {
    thousands = digits[0];
    hundreds = digits[1];
    tens = digits[2];
    digit = digits[3];
  }

  console.log(num, thousands, hundreds, tens, digit);

  let n1 = 0;
  let n2 = 0;
  let n3 = 0;
  let n4 = 0;

  // THOUSANDS
  for (n1; n1 < thousands; n1++) {
    result.push('M');
  }

  // HUNDREDS
  if (hundreds <= 3) {
    for (n2; n2 < hundreds; n2++) {
      result.push('C');
    }
  }
  if (hundreds === 4) {
    result.push('C');
    result.push('D');
  }
  if (hundreds >= 5 && hundreds < 9) {
    result.push('D');
    for (n2; n2 < hundreds - 5; n2++) {
      result.push('C');
    }
  }
  if (hundreds === 9) {
    result.push('C');
    result.push('M');
  }

  // TENS
  if (tens <= 3) {
    for (n3; n3 < tens; n3++) {
      result.push('X');
    }
  }
  if (tens === 4) {
    result.push('X');
    result.push('L');
  }
  if (tens >= 5 && tens < 9) {
    result.push('L');
    for (n3; n3 < tens - 5; n3++) {
      result.push('X');
    }
  }
  if (tens === 9) {
    result.push('X');
    result.push('C');
  }

  // DIGITS
  if (digit <= 3) {
    for (n4; n4 < digit; n4++) {
      result.push('I');
    }
  }
  if (digit === 4) {
    result.push('I');
    result.push('V');
  }
  if (digit >= 5 && digit < 9) {
    result.push('V');
    for (n4; n4 < digit - 5; n4++) {
      result.push('I');
    }
  }
  if (digit === 9) {
    result.push('I');
    result.push('X');
  }

  return result.join('');
};

console.log(intToRoman(1994));
