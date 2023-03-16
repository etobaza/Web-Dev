def swap_case(s):
    result = ''
    for c in s:
        if c.isupper():
            result += c.lower()
        elif c.islower():
            result += c.upper()
        else:
            result += c
    return result


s = input()
result = swap_case(s)
print(result)
