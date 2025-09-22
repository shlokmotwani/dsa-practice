function specialIndex(A) {
    let prefixSumEven = [A[0]];
    let prefixSumOdd = [0];

    // assign prefix sum of even and odd indexed elements separately
    for (let i = 1; i < A.length; i++) {
        if (i & 1) {
            prefixSumEven.push(prefixSumEven[i - 1]);
            prefixSumOdd.push(prefixSumOdd[i - 1] + A[i]);
        }
        else {
            prefixSumEven.push(prefixSumEven[i - 1] + A[i]);
            prefixSumOdd.push(prefixSumOdd[i - 1]);
        }
    }

    let count = 0;
    for (let i = 0; i < A.length; i++) {
        let evenSum = 0;
        let oddSum = 0;
        if (i === 0) {
            evenSum = prefixSumOdd[A.length-1] - prefixSumOdd[i];
            oddSum = prefixSumEven[A.length-1] - prefixSumEven[i];
        }
        else {
            evenSum = prefixSumEven[i - 1] + prefixSumOdd[A.length-1] - prefixSumOdd[i];
            oddSum = prefixSumOdd[i - 1] + prefixSumEven[A.length-1] - prefixSumEven[i];
        }
        if (evenSum === oddSum) {
            count++;
        }
    }
    return count;
}

console.log(specialIndex(A = [2, 1, 6, 4]));
console.log(specialIndex(A = [1, 1, 1]));