class Solution:
  def removeElement(self, nums, val):
    slow = 0
    for fast in range(len(nums)):
      if nums[fast] != val:
        nums[slow] = nums[fast]
        slow += 1
    return slow

app = Solution()
l1 = [1,2,2,3,4,2,2,5]
result = app.removeElement(l1, 2)
print(l1[0:result])

