function maxSum(A, B) {
    let prefixSum = [A[0]];
    for (let i = 1; i < A.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + A[i];
    }
    let maxSum = -Infinity;
    let N = A.length;
    for (let i = 0; i <= B; i++) {
        let diff;
        if (i === 0) {
            diff = prefixSum[N - 1] - prefixSum[N - 1 - (B - i)];
        }
        else {
            diff = prefixSum[i - 1] + prefixSum[N - 1] - prefixSum[N - 1 - (B - i)];
        }
        if (diff > maxSum) {
            maxSum = diff;
        }
    }
    return maxSum;
}

console.log(maxSum([5, -2, 3, 1, 2], 3));
console.log(maxSum([2, 3, -1, 4, 2, 1], 4));