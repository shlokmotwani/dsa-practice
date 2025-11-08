function maxANDPair(A) {
  let N = A.length;
  let ans = 0;
  for (let i = 30; i >= 0; i--) {
    let mask = 1 << i;
    let setBitsCount = 0;

    // find out the number with ith bit set
    for (let j = 0; j < N; j++) {
      if ((A[j] & mask) > 0) {
        setBitsCount++;
      }
    }

    if (setBitsCount >= 2) {
      for (let j = 0; j < N; j++) {
        if (A[j] & (mask == 0)) {
          A[j] = 0;
        }
      }
      ans = ans | mask;
    }
  }
  return ans;
}

console.log(maxANDPair([38, 44, 84, 12]));
