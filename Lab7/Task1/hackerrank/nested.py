students = []
for _ in range(int(input())):
    name = input()
    score = float(input())
    students.append([name, score])

students.sort(key=lambda x: x[1])

second_lowest_score = None
for s in students:
    if second_lowest_score is None:
        if s[1] != students[0][1]:
            second_lowest_score = s[1]
    elif s[1] > second_lowest_score:
        break
else:
    exit()

result = []
for s in students:
    if s[1] == second_lowest_score:
        result.append(s[0])

result.sort()
for name in result:
    print(name)
