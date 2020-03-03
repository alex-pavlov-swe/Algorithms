const fib = n => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
};

function fibIterative(n) {
  let fibSequence = [];
  let count = 0;

  while (count <= n) {
    if (fibSequence.length === 0) {
      fibSequence.push(0);
    } else if (fibSequence.length === 1) {
      fibSequence.push(1);
    } else {
      fibSequence.push(fibSequence[count - 1] + fibSequence[count - 2]);
    }
    count++;
  }
  return fibSequence[n];
}

console.log(fib(20));
console.log(fibIterative(20));

/*
class Solution:
  def fib(self, n):
    if n == 0:
      return 0
    elif n == 1:
      return 1
    return self.fib(n - 1) + self.fib(n - 2)
  */
