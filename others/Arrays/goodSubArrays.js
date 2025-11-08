function goodSubArrays(A, B) {
  let pSum = [A[0]];
  let count = 0;
  for (let i = 1; i < A.length; i++) {
    pSum[i] = pSum[i - 1] + A[i];
  }
  console.log(pSum);
  for (let start = 0; start < A.length; start++) {
    for (let end = start; end < A.length; end++) {
      let sum;
      if (start === 0) {
        sum = pSum[end];
      } else {
        sum = pSum[end] - pSum[start - 1];
      }
      let size = end - start + 1;
      if (size & 1 && sum > B) {
        count++;
      }
      if (size & 0 && sum < B) {
        count++;
      }
    }
  }
  return count;
}

console.log(goodSubArrays([1, 2, 3, 4, 5], 4));
// console.log(goodSubArrays([13, 16, 16, 15, 9, 16, 2, 7, 6, 17, 3, 9], 65));
