a = int(input())
b = int(input())

print((lambda a, b: a if a > b else b)(a, b))
