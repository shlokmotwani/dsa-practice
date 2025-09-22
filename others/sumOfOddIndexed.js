function sumOfOddIndexed(A, B) {
    let prefixSumOdd = [];

    // assign prefix sum of odd indexed elements of array A
    prefixSumOdd.push(0);
    for (let i = 1; i < A.length; i++) {
        if (i & 1) {
            prefixSumOdd.push(prefixSumOdd[i - 1] + A[i]);
        }
        else {
            prefixSumOdd.push(prefixSumOdd[i - 1]);
        }
    }

    let result = [];
    for (let i = 0; i < B.length; i++) {
        let start = B[i][0];
        let end = B[i][1];
        if (start === 0) {
            result.push(prefixSumOdd[end]);
        }
        else {
            result.push(prefixSumOdd[end] - prefixSumOdd[start - 1]);
        }
    }
    return result;
}

A = [2, 8, 3, 9, 15]
B = [[1, 4],
[0, 2],
[2, 3]]
console.log(sumOfOddIndexed(A, B));

A = [5, 15, 25, 35, 45]
B = [[2, 2],
[2, 4]];
console.log(sumOfOddIndexed(A, B));