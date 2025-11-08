function maximumSubArraySum(A) {
  if (A.length == 0) {
    return 0;
  }

  let maxSum = -Infinity;
  let currentSum = 0;
  for (let i = 0; i < A.length; i++) {
    currentSum += A[i];
    maxSum = Math.max(currentSum, maxSum);
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
}

function maxUsingPrefix(A) {
  if (A.length == 0) {
    return;
  }

  // find prefix sum array
  let pSum = [A[0]];
  for (let i = 1; i < A.length; i++) {
    pSum.push(pSum[i - 1] + A[i]);
  }

  let maxSum = 0;
  for (let i = 0; i < pSum.length; i++) {
    for (let j = i; j < pSum.length; j++) {
      let current = 0;
      if (i == 0) {
        current = pSum[j];
      } else {
        current = pSum[j] - pSum[i - 1];
      }
      maxSum = Math.max(maxSum, current);
    }
  }
  return maxSum;
}

function maxUsingCarryForward(A) {
  if (A.length == 0) {
    return 0;
  }

  let maxSum = -Infinity;
  for (let i = 0; i < A.length; i++) {
    let currentSum = 0;
    for (let j = i; j < A.length; j++) {
      currentSum += A[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }
  return maxSum;
}

let A = [10, 40, -90, -2, 4, 72, -100, 3, 49, -24, 49, 22];
let B = [-20, 30, 40, -10, 50, -100, 70];
console.log(maximumSubArraySum(A));
console.log(maximumSubArraySum(B));
console.log(maxUsingPrefix(A));
console.log(maxUsingPrefix(B));
console.log(maxUsingCarryForward(A));
console.log(maxUsingCarryForward(B));
