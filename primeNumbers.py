
def solution(b):
    bag = ""
    for num in range(0,20500):
        if num > 1:
            for j in range(2,num):
                if (num % j) == 0:
                    break
            else:
                if len(bag) >= 10006:
                    break
                else:
                    bag += str(num)
    return bag[b:b+5]

print(answer(5))