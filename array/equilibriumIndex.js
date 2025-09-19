function equilibriumIndex(A) {
    let prefixLower = [];
    let prefixHigher = [];
    prefixLower[0] = 0;
    prefixHigher[A.length - 1] = 0;
    for (let i = 1; i < A.length; i++) {
        prefixLower[i] = prefixLower[i - 1] + A[i-1];
    }
    for (let j = A.length - 2; j >= 0; j--) {
        prefixHigher[j] = prefixHigher[j + 1] + A[j+1];
    }
    console.log(prefixLower)
    console.log(prefixHigher)
    for (let k = 0; k < A.length; k++) {
        if (prefixLower[k] === prefixHigher[k]) {
            return k;
        }
    }
    return -1;
}

console.log(equilibriumIndex([-7, 1, 5, 2, -4, 3, 0]));
console.log(equilibriumIndex([1, 2, 3]));
console.log(equilibriumIndex([1, 2, 3, 7, 1, 2, 3]));