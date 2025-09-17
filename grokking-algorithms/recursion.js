function sumOfArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumOfArray(arr.slice(1));
}

function countItems(arr) {
  if (arr.length === 0) return 0;
  return 1 + countItems(arr.slice(1));
}

function findMax(arr) {
  if (arr.length === 0) return null;
  if (arr.length === 1) return arr[0];
  let max = arr[0];
  let result = findMax(arr.slice(1));
  if (result > max) {
    max = result;
  }
  return max;
}

// console.log(sumOfArray([1, 2, 3]));
// console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(sumOfArray([]));
// console.log(sumOfArray([50]));
// console.log(sumOfArray([1, 2, 3, 4, 5]));

// console.log(countItems([1, 2, 3]));
// console.log(countItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(countItems([]));
// console.log(countItems([50]));
// console.log(countItems([1, 2, 3, 4, 5]));

console.log(findMax([1, 2, 3]));
console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(findMax([]));
console.log(findMax([50]));
console.log(findMax([1, 2, 3, 4, 5]));
