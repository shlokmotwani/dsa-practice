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

function insertionSort2(arr) {
  let N = arr.length;
  for (let i = N - 2; i >= 0; i--) {
    // console.log(`i => ${i}`);
    for (j = N - 1; j > i; j--) {
      // console.log(`j => ${j}`);
      if (arr[i] > arr[j]) {
        // console.log("Array before swap : " + arr);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        // console.log("Array after swap : " + arr);
      }
    }
  }
}

let arr = [10, 3, 6, 8, 2, 5];
console.log("Original Array : " + arr);
insertionSort(arr);
console.log("Array using 1st sorting method : " + arr);

arr = [10, 3, 6, 8, 2, 5];
console.log("Original Array : " + arr);
insertionSort2(arr);
console.log("Array using 2nd sorting method : " + arr);
