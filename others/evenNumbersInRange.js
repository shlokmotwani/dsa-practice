function evenNumbersInRange(A, B) {
    let prefixEvenCount = [];
    prefixEvenCount.push(A[0] & 1 ? 0 : 1);

    // initialise prefix count of even numbers in array A
    for (let i = 1; i < A.length; i++) {
        if (A[i] & 1) {
            prefixEvenCount.push(prefixEvenCount[i - 1]);
        }
        else {
            prefixEvenCount.push(prefixEvenCount[i - 1] + 1);
        }
    }

    let result = [];
    for (let i = 0; i < B.length; i++) {
        let start = B[i][0];
        let end = B[i][1];

        if (start === 0) {
            result.push(prefixEvenCount[end]);
        }
        else {
            result.push(prefixEvenCount[end] - prefixEvenCount[start - 1]);
        }
    }
    return result;
};


A = [1, 2, 3, 4, 5]
B = [[0, 2],
[2, 4],
[1, 4]]
console.log(evenNumbersInRange(A, B));



A = [2, 1, 8, 3, 9, 6]
B = [[0, 3],
[3, 5],
[1, 3],
[2, 4]];
console.log(evenNumbersInRange(A, B));