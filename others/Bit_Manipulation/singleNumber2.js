function singleNumber(A) {
  let N = A.length;
  let ans = 0;

  for (let i = 0; i <= 30; i++) {
    let setCountBits = 0;
    let mask = 1 << i;
    for (let j = 0; j < N; j++) {
      if ((A[j] & mask) > 0) {
        setCountBits++;
      }
    }
    if (setCountBits % 3 != 0) {
      ans = ans | mask;
    }
  }
  return ans;
}

console.log(singleNumber([1, 2, 4, 3, 3, 2, 2, 3, 1, 1]));
