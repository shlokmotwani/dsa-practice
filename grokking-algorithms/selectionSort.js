function selectionSort(arr) {
  if (arr.length === 0) return [];
  for (let head = 0; head < arr.length; head++) {
    let minIdx = head;
    for (let i = head + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIdx]) {
        minIdx = i;
      }
    }
    let temp = arr[head];
    arr[head] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
console.log(selectionSort([]));
console.log(selectionSort([5]));
console.log(selectionSort([5, 3, 0, 2, -10]));