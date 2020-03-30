function climbingStairs(n) {
  count = 0;
  function helper(i) {
    if (i > n) {
      return;
    }
    if (i == n) {
      count += 1;
    }
    helper(i + 1);
    helper(i + 2);
  }
  helper(0);
  return count;
}

console.log(climbingStairs(10));
