function boundaryElements(A) {
  let N = A.length;
  let i = 0;
  let j = 0;

  let temp = [];
  while (j < N - 1) {
    temp.push(A[i][j]);
    j++;
  }
  console.log(temp);
  temp = [];

  while (i < N - 1) {
    temp.push(A[i][j]);
    i++;
  }
  console.log(temp);
  temp = [];
  while (j > 0) {
    temp.push(A[i][j]);
    j--;
  }
  console.log(temp);
  temp = [];

  while (i > 0) {
    temp.push(A[i][j]);
    i--;
  }
  console.log(temp);
}

let A = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

console.log(boundaryElements(A));
