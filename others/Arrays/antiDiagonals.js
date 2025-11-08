function antiDiagonals(arr) {
  let result = [];
  for (let j = 0; j < arr.length; j++) {
    let i = 0;
    result.push(getADFromIndices(arr, i, j));
  }

  for (let i = 1; i < arr[0].length; i++) {
    let j = arr.length - 1;
    result.push(getADFromIndices(arr, i, j));
  }
  for (let i = 0; i < result.length; i++) {
    let diff = arr.length - result[i].length;
    for (let j = 0; j < diff; j++) {
      result[i].push(0);
    }
  }
  return result;
}

function getADFromIndices(arr, i, j) {
  let row = [];
  while (i < arr.length && j >= 0) {
    row.push(arr[i][j]);
    i++;
    j--;
  }
  return row;
}

function printMatrix(arr) {
  for (let i = 0; i < arr.length; i++) {
    let str = "";
    for (let j = 0; j < arr[i].length; j++) {
      str += arr[i][j] + " ";
    }
    console.log(str);
  }
}

let arr = [
  [-1, 7, 1, 4],
  [2, -1, 2, 3],
  [4, 0, 9, 1],
  [1, 6, 0, 1],
];
printMatrix(antiDiagonals(arr));
