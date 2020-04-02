class Solution:
    def sqrt(self, x):
        if x == 0:
            return 0
            res = 2
            while True:
                if res*res > x:
                    return res-1
                res += 1


print(Solution().sqrt(16))
