function findingGoodDays(A) {
  let ans = 0;
  for (let i = 0; i <= 30; i++) {
    let mask = 1 << i;
    if ((A & mask) > 0) {
      ans++;
    }
  }
  return ans;
}

console.log(findingGoodDays(8));
console.log(findingGoodDays(5));
