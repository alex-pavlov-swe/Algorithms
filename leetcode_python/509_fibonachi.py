# iterative
def fibIter(n):
    if n == 0:
        return n
    if n == 1 or n == 2:
        return 1
    num1, num2 = 1, 1
    newNum = 0
    for i in range(2, n):
        newNum = num1 + num2
        num1 = num2
        num2 = newNum
    return num2

# recursive


def fib(n):
    def helper(num1, num2, count):
        if count == n:
            return num1 + num2
        else:
            return helper(num2, num1 + num2, count + 1)
    if n == 0:
        return 0
    if n in [1, 2]:
        return 1
    return helper(1, 1, 3)


print(fib(10))
