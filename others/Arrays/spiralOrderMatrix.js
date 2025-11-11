function spiralOrderMatrix(A) {
  let N = A.length;
  let si = 0;
  let ei = 0;
  let M = N - si - ei;
  while (M > 1) {
    printBoundaryElements(A, si, ei, M);
    si++;
    ei++;
    M -= 2;
  }
  if (N & 1) {
    console.log(A[si][ei]);
  }
}

function printBoundaryElements(A, si, ei, M) {
  let temp = [];

  // print 0th row
  for (let k = 1; k < M; k++) {
    temp.push(A[si][ei]);
    ei++;
  }
  console.log(temp);
  temp = [];

  // print (N-1)th column
  for (let k = 1; k < M; k++) {
    temp.push(A[si][ei]);
    si++;
  }
  console.log(temp);
  temp = [];

  // print (N-1)th row
  for (let k = 1; k < M; k++) {
    temp.push(A[si][ei]);
    ei--;
  }
  console.log(temp);
  temp = [];

  // print 0th column
  for (let k = 1; k < M; k++) {
    temp.push(A[si][ei]);
    si--;
  }
  console.log(temp);
  temp = [];
}

let A = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

let B = [
  [1, 2, 3, 4, 5, 100],
  [6, 7, 8, 9, 10, 200],
  [11, 12, 13, 14, 15, 300],
  [16, 17, 18, 19, 20, 400],
  [21, 22, 23, 24, 25, 500],
  [26, 27, 28, 29, 30, 600],
];

spiralOrderMatrix(A);
spiralOrderMatrix(B);
