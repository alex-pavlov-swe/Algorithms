function insertionSort(nums) {
  function swap(i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  let i = 1;
  let j = 0;
  while (i < nums.length) {
    j = i;
    while (j > 0 && nums[j - 1] > nums[j]) {
      swap(j - 1, j);
      j -= 1;
    }
    i += 1;
  }
  return nums;
}

console.log(insertionSort([99, 5, 4, 3, 2, 1, 2, 2, 2, 1, 1, 1]));