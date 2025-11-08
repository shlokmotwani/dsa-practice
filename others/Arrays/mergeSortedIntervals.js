function mergeSortedIntervals(A) {
  if (A.length == 0) {
    return [];
  }

  let result = [];
  let start = A[0][0];
  let end = A[0][1];
  for (let i = 1; i < A.length; i++) {
    if (A[i][0] <= end) {
      start = Math.min(start, A[i][0]);
      end = Math.max(end, A[i][1]);
    } else {
      result.push([start, end]);
      start = A[i][0];
      end = A[i][1];
    }
  }
  result.push([start, end]);
  return result;
}

let A = [
  [1, 4],
  [2, 6],
  [7, 10],
  [9, 20],
];

let B = [
  [1, 4],
  [2, 6],
  [7, 10],
  [9, 20],
  [30, 100],
];
console.log(mergeSortedIntervals(A));
console.log(mergeSortedIntervals(B));
