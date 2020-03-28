class Solution:
    # inserts every array element into its proper position by shifting numbers
    # 0(n2) time
    def InsertionSort(self, nums):
        i = 1
        while i < len(nums):
            # swap until find the right position
            j = i
            while j > 0 and nums[j-1] > nums[j]:
                nums[j-1], nums[j] = nums[j], nums[j-1]
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
                    nums[i-1], nums[i] = nums[i], nums[i-1]
                    swapped = True
        return nums

    def quickSort(self, nums, low, high):
        if low < high:
            pi = self.partition(nums, low, high)
            self.quickSort(nums, low, pi-1)
            self.quickSort(nums, pi+1, high)

    def partition(self, nums, low, high):
        i = low - 1
        pivot = nums[high]
        for j in range(low, high):
            if nums[j] <= pivot:
                i += 1
                nums[i], nums[j] = nums[j], nums[i]
        nums[i+1], nums[high] = nums[high], nums[i+1]
        return i+1


nums = [5, 4, 3, 2, 1]
Solution().quickSort(nums, 0, 4)
print(nums)
