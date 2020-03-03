// brute force
var removeDuplicates = function(S) {
  duplicates = true;
  while (duplicates) {
    duplicates = false;
    for (let i = 1; i < S.length; i++) {
      if (S[i - 1] == S[i]) {
        S = S.substring(0, i - 1) + S.substring(i + 1);
        duplicates = true;
        //console.log('iteration:', S);
      }
    }
  }
  return S;
};
// time O(N2)
// space O(N)

// using stack
var removeDuplicatesStack = function(S) {
  stack = [];
  stack.push(S[0]);
  for (let i = 1; i < S.length; i++) {
    if (stack[stack.length - 1] === S[i]) {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
  }
  return stack.join('');
};
// time O(N)
// space O(N)

console.log(removeDuplicates('abbaca'));
console.log(removeDuplicatesStack('abbaca'));
