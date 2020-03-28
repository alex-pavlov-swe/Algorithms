def fib(n):
    if n == 1 or n == 2:
        return 1
    num1, num2 = 1, 1
    newNum = 0
    for i in range(2, n):
        newNum = num1 + num2
        num1 = num2
        num2 = newNum
    return num2


print(fib(2))
