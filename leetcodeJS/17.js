/**
 * @param {string} digits
 * @return {string[]}
 */

const buttons = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
};

const mergeTwoButtons = (button1, button2) => {
  let result = [];
  for (let i = 0; i < button1.length; i++) {
    for (let j = 0; j < button2.length; j++) {
      result.push(button1[i] + button2[j]);
    }
  }
  return result;
};

const letterCombinations = function(digits) {
  if (digits === '') {
    return [];
  }
  let output = buttons[digits[0]];

  for (let i = 1; i < digits.length; i++) {
    output = mergeTwoButtons(output, buttons[digits[i]]);
  }

  return output;
};

console.log(letterCombinations('23456'));
//console.log(mergeTwoButtons(buttons[2], buttons[3]));
