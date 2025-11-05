function subArraysWithOR1(A) {
  let N = A.length;
  let total = (N * (N + 1)) / 2;
  let totalFromZeroes = 0;

  let consequtiveZeroes = 0;
  for (let i = 0; i < N; i++) {
    if (A[i] == 0) {
      consequtiveZeroes++;
    } else {
      totalFromZeroes += (consequtiveZeroes * (consequtiveZeroes + 1)) / 2;
      consequtiveZeroes = 0;
    }
  }
  totalFromZeroes += (consequtiveZeroes * (consequtiveZeroes + 1)) / 2;
  return total - totalFromZeroes;
}

console.log(subArraysWithOR1([0, 0, 1, 1, 0]));
console.log(subArraysWithOR1([0, 0, 0]));
