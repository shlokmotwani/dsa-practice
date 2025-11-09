function towerOfHanoi(n, A, B, C) {
  if (n == 1) {
    console.log(`Move disk ${n} from ${A} to ${C}`);
    return;
  }
  towerOfHanoi(n - 1, A, C, B);
  console.log(`Move disk ${n} from ${A} to ${C}`);
  towerOfHanoi(n - 1, B, A, C);
}

towerOfHanoi(3, "A", "B", "C");
