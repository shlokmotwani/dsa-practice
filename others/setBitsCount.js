function setBitsCount(n) {
  let count = 0;
  for (let i = 0; i < 30; i++) {
    let mask = 1 << i;
    if ((n & mask) > 0) {
      count++;
    }
  }
  return count;
}

let n = 1500;
console.log(setBitsCount(n));
