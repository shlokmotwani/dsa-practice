function binarySearch(data, target) {
  let low = 0;
  let high = data.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (data[mid] < target) {
      low = mid + 1;
    } else if (data[mid] > target) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return null;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
console.log(binarySearch([1], 5));
console.log(binarySearch([], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 2));