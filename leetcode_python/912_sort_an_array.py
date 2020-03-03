class Solution:
    def swap(self, nums, i, j):
        temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp

    def InsertionSort(self, nums):
      i = 1
      while i < len(nums):
        # swap until find the right position
        j = i
        while j > 0 and nums[j-1] > nums[j]:
          self.swap(nums, j-1, j)
          j -= 1
        i += 1
      return nums
    
    def bubbleSort(self, nums):
      n = len(nums)
      swapped = True
      while swapped:
        swapped = False
        for i in range(1, n):
          if nums[i-1] > nums[i]:
            self.swap(nums, i-1, i)
            swapped = True
      return nums



app = Solution()
print(app.bubbleSort([5,4,3,2,1]))

        