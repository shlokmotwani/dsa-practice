function closestMinMax(A){
    let min = A[0];
    let max = A[0];
    for(let i=0; i<A.length; i++){
        if(A[i] < min){
            min = A[i];
        }
        if(A[i] > max){
            max = A[i];
        }
    }
    let minIdx = -1;
    let maxIdx = -1;
    let sizeOfSubArray = A.length;

    for(let i=0; i<A.length; i++){
        if(A[i] === min){
            minIdx = i;
        }
        if(A[i] === max){
            maxIdx = i;
        }
        if(minIdx !== -1 && maxIdx !== -1){
            if(Math.abs(maxIdx - minIdx) + 1 < sizeOfSubArray){
                sizeOfSubArray = Math.abs(maxIdx - minIdx) + 1;
            }
        }
    }
    return sizeOfSubArray;
}

A = [1, 3, 2];
console.log(closestMinMax(A));
A = [2, 6, 1, 6, 9]
console.log(closestMinMax(A));


module.exports = {
    //param A : array of integers
    //return an integer
    solve: function (A) {
        let min = Infinity;
        let max = -Infinity;
        let minIdx = -1;
        let maxIdx = -1;
        let result = A.length;

        // find max and min elements of the array
        for (let i = 0; i < A.length; i++) {
            if (A[i] < min) {
                min = A[i];
            }
            if (A[i] > max) {
                max = A[i];
            }

        }
        // console.log(min + " " + max)

        let latestSubArrayLength = A.length;
        for (let i = 0; i < A.length; i++) {
            if (A[i] === min) {
                minIdx = i;
            }
            if (A[i] === max) {
                maxIdx = i;
            }
            if (minIdx != -1 && maxIdx != -1) {
                latestSubArrayLength = Math.abs(maxIdx - minIdx) + 1;
                if (latestSubArrayLength < result) {
                    result = latestSubArrayLength;
                }
            }
        }
        return result;
    }
};
