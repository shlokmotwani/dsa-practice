function maxSubArraySum2(A) {
  if (A.length == 0) {
    return [];
  }

  let si = 0;
  let ei = 0;
  let ci = 0;

  let maxSum = -Infinity;
  let currentSum = 0;
  for (let i = 0; i < A.length; i++) {
    currentSum += A[i];
    if (currentSum < 0) {
      currentSum = 0;
      ci = i + 1;
    }
    if (currentSum > maxSum) {
      si = ci;
      ei = i;
    }
  }

  let result = [];
  for (let i = si; i <= ei; i++) {
    result.push(A[i]);
  }
  return result;
}

let A = [10, 40, -90, -2, 4, 72, -100, 3, 49, -24, 49, 22];
let B = [-20, 30, 40, -10, 50, -100, 70];
console.log(maxSubArraySum2(A));
console.log(maxSubArraySum2(B));
