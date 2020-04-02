import math


class Solution:
    # if I am aloud to use math module and sqrt method
    def perfectSquare(self, x):
        return math.sqrt(x) == round(math.sqrt(x))


print(Solution().perfectSquare(16))
