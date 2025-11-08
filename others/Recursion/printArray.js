function printArray(A, idx) {
  if (idx >= A.length) {
    return;
  }
  console.log(A[idx]);
  printArray(A, idx + 1);
}

printArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0);
