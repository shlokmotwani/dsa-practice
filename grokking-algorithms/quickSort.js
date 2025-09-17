function quickSort(arr) {
  if (arr.length < 2) return arr;
  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      let temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;
    }
    return arr;
  }

  let pivot = arr[0];
  let smaller = [];
  let larger = [];
  let equals = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      smaller.push(arr[i]);
    } else if (arr[i] > pivot) {
      larger.push(arr[i]);
    } else {
      equals.push(arr[i]);
    }
  }
  return quickSort(smaller).concat(equals).concat(quickSort(larger));
}

console.log(quickSort([10, 40, 2, 9, 1, 8000, 7, 405, 101, 52]));
console.log(quickSort([]));
console.log(quickSort([10, 1]));