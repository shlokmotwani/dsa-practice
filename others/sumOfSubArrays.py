def sumOfSubArray(arr, start, end):
    sum = 0
    for i in range(start, end + 1):
        sum += arr[i]
    return sum


def sumOfAllSubArraysBF(arr):
    n = len(arr)
    sum = 0
    for i in range(n):
        for j in range(n):
            sum += sumOfSubArray(arr, i, j)
    return sum


def sumOfAllSubArraysUsingPSum(arr):
    sum = 0
    pfs = getPrefixSum(arr)
    for i in range(len(arr)):
        for j in range(i, len(arr)):
            if i == 0:
                sum += pfs[j]
            else:
                sum += pfs[j] - pfs[i - 1]
    return sum


def getPrefixSum(arr):
    prefixSum = [arr[0]]
    for i in range(1, len(arr)):
        prefixSum.append(prefixSum[i - 1] + arr[i])
    return prefixSum


def sumOfAllSubArraysUsingCF(arr):
    n = len(arr)
    total_sum = 0
    for i in range(n):
        sum = 0
        for j in range(i, n):
            sum += arr[j]
            total_sum += sum
    return total_sum


arr = [1, 2, 3, 4]
PFS = getPrefixSum(arr)
# print(PFS)
print(sumOfAllSubArraysUsingPSum(arr))
print(sumOfAllSubArraysBF(arr))
print(sumOfAllSubArraysUsingCF(arr))
