function rowToColumnZero(arr) {
  // make rows and cols negative
  for (let i = 0; i < arr.length; i++) {
    let row = i;
    let col = -1;
    let zeroFound = false;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 0) {
        col = j;
        zeroFound = true;
        break;
      }
    }
    if (zeroFound) {
      makeRowNegative(arr, row);
      makeColNegative(arr, col);
      zeroFound = false;
    }
  }
  convertNegativeToZero(arr);
  return arr;
}

function makeRowNegative(arr, i) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] > 0) {
      arr[i][j] *= -1;
    }
  }
}

function makeColNegative(arr, j) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][j] > 0) {
      arr[i][j] *= -1;
    }
  }
}

function convertNegativeToZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] < 0) {
        arr[i][j] = 0;
      }
    }
  }
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
  [1, 2, 3, 4],
  [5, 6, 7, 0],
  [9, 2, 0, 4],
];

printMatrix(rowToColumnZero(arr));
