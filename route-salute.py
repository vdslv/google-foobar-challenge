def solutionSalute(s):
    right = 0
    salutes = 0;

    for val in s:
        if val == '>':
            right = right + 1

        if val == '<':
            salutes = salutes + right

    return salutes*2
            

print(solutionSalute('>----<'));