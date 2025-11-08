def subArrWithLeastAvg(A, B):
    sum = 0
    for i in range(B):
        sum += A[i]
    leastAvg = sum / B
    leastIdx = 0
    start = 1
    end = B
    while end < len(A):
        sum = sum - A[start - 1] + A[end]
        currentAvg = sum / B
        if currentAvg < leastAvg:
            leastAvg = currentAvg
            leastIdx = start
        start += 1
        end += 1
    return leastIdx
