function decimalToBinary(n) {
  let ans = 0;
  let pow = 1;

  while (n > 0) {
    let r = n % 2;
    n = Math.floor(n / 2);
    ans += pow * r;
    pow *= 10;
  }
  return ans;
}

console.log(decimalToBinary(40));
