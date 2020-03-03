//26_Remove_Duplicates_from_Sorted_Array

function removeDuplicates(nums) {
  for (let i = 1; i < nums.length; i++) {
    //console.log(`nums[i] = ${nums[i]}, nums[i-1] = ${nums[i - 1]}`);
    if (nums[i] === nums[i - 1]) {
      //console.log('deleting');
      nums.splice(i, 1);
      //console.log(nums);
      i--;
    }
  }
  return nums;
}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(`nums = ${nums}`);
console.log(`result = ${removeDuplicates(nums)}`);
