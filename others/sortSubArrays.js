function sort(A, s, m, e) {
  let N = A.length;
  let i = s;
  let j = m + 1;
  while (i < N && j < N) {
    if (A[i] > A[j]) {
      let k = j;
      let item = A[j];
      while (k > i) {
        A[k] = A[k - 1];
        k--;
      }
      A[k] = item;
      i++;
      j++;
    } else {
      i++;
    }
  }
}

//let arr = [4, 8, -1, 2, 6, 9, 11, 3]

let arr = [1, 3, 4, 8, 10, 2, 7, 9];
sort(arr, 0, 4, 7);
console.log(arr);
