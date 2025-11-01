function insertionSort(arr) {
  let N = arr.length;
  for (let i = 1; i < N; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      } else {
        break;
      }
    }
  }
}

let arr = [10, 3, 6, 8, 2, 5];
console.log(arr);
insertionSort(arr);
console.log(arr);
