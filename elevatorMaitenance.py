def solution(l):
    # Your code here
    result = sorted(l, key=lambda l:[int(i) for i in l.split('.')])
    return result