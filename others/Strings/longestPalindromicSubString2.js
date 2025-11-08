function longestPalindromicSubString2(str) {
  if (str.length == 0) return "";
  let ans = "";
  let max = [0, 0];

  for (let i = 1; i < str.length; i++) {
    let res1 = expand(str, i - 1, i + 1);
    let bigger = res1;
    if (i + 2 < str.length && str[i] === str[i + 1]) {
      let res2 = expand(str, i - 1, i + 2);
      if (res1[1] - res1[0] > res2[1] - res2[0]) {
        bigger = res1;
      } else {
        bigger = res2;
      }
    }
    max = max[1] - max[0] >= bigger[1] - bigger[0] ? max : bigger;
  }

  for (let i = max[0]; i <= max[1]; i++) {
    ans += str[i];
  }

  return ans;
}

function expand(str, i, j) {
  while (i >= 0 && j < str.length) {
    if (str[i] !== str[j]) {
      break;
    }
    i--;
    j++;
  }
  return [i + 1, j - 1];
}

console.log(longestPalindromicSubString2("abbacccccccccde"));
console.log(longestPalindromicSubString2("aaaabbccbbaaaaaaaaa"));
