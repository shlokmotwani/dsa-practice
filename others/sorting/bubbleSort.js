function bubbleSort(A) {
  let N = A.length;
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N - 1 - i; j++) {
      if (A[j] > A[j + 1]) {
        A[j] = A[j] ^ A[j + 1];
        A[j + 1] = A[j] ^ A[j + 1];
        A[j] = A[j] ^ A[j + 1];
      }
    }
  }
}

let A = [10, 2, 400, 69, -14, 46, 214, 930, 0, 6, 1, 100];
bubbleSort(A);
console.log(A);
