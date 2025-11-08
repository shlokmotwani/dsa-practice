function merge(A, B) {
  let N = A.length;
  let M = B.length;
  let result = [];

  let i = 0;
  let j = 0;

  while (i < N && j < M) {
    if (A[i] < B[j]) {
      result.push(A[i]);
      i++;
    } else {
      result.push(B[j]);
      j++;
    }
  }

  while (i < N) {
    result.push(A[i]);
    i++;
  }

  while (j < M) {
    result.push(B[j]);
    j++;
  }

  return result;
}

let A = [1, 3, 5, 7, 9, 11, 13, 15, 17];
let B = [2, 4, 6, 8, 10, 12, 14];

console.log(merge(A, B));
