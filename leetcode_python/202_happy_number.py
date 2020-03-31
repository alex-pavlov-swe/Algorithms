class Solution:
    def isHappy(self, n):
        digits = str(n)
        results = []

        while True:
            sum = 0
            for i in range(len(digits)):
                sum += int(digits[i]) * int(digits[i])
            if sum == 1:
                return True
            if sum in results:
                break
            digits = str(sum)
            results.append(sum)

        return False


print(Solution().isHappy(19))
