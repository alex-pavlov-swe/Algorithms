class Solution:
    # recursive - runs out of time
    def climbingStairs(self, n):
        if n == 0:
            return 1
        if n == 1:
            return 1
        return self.climbingStairs(n-1) + self.climbingStairs(n-2)

    # iterative - fibonacci sequence
    def climbingStairsFib(self, n):
        if n == 1:
            return 1
        first = 1
        second = 2
        for i in range(3, n + 1):
            third = first + second
            first = second
            second = third
        return second


# print(Solution().climbingStairs((10)))

print(Solution().climbingStairsFib(10))
