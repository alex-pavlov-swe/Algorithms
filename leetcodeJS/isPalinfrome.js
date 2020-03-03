function isPalindrome(word) {
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    //console.log(i, word[i], word[word.length - i - 1]);
    if (i === word.length - i - 1) {
      return true;
    }
    if (word[i] !== word[word.length - i - 1]) {
      return false;
    }
  }
  return true;
}

let word1 = 'Deleveled';
let word2 = 'adam';

console.log(word1, isPalindrome(word1));
console.log(word2, isPalindrome(word2));
