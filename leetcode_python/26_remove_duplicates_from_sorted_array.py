class Solution:
  def removeDuplicates(self, nums):
    if len(nums) == 0:
      return 0
    slow = 0
    for fast in range(1,len(nums)):
      if nums[slow] != nums[fast]:
        slow +=1
        nums[slow] = nums[fast]
    return slow + 1
                
                

app = Solution()
l1 = [0,0,1,1,1,2,2,3,3,4]
res = app.removeDuplicates(l1)
print(l1[0:res])