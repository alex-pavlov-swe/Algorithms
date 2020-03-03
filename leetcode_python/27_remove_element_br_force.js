function removeElement(nums, val) {
  count = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      count += 1;
      for (j = i; j < nums.length - 1; j++) {
        nums[j] = nums[j + 1]
      }
      if (i >= (nums.length - count)) {
        break;
      }
      i -= 1;
    }
    console.log(`i=${i},count=${count},nums=${nums.slice(0, nums.length - count)}`);
  }
  return nums.length - count;
}

l1 = [0, 1, 2, 2, 3, 0, 4, 2]
res = removeElement(l1, 2);
console.log(`result = ${res}`);
console.log(l1.slice(0, res));