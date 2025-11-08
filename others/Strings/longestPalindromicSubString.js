function longestPalindromicSubString(str) {
  if (str.length == 0) return 0;
  let max = 1;
  for (let i = 0; i < str.length; i++) {
    let res = expand(str, i - 1, i + 1);
    let len = res[1] - res[0] + 1;
    max = Math.max(max, len);
    if (str[i] === str[i + 1] && i + 2 < str.length) {
      let res2 = expand(str, i - 1, i + 2);
      let len2 = res2[1] - res2[0] + 1;
      max = Math.max(max, len2);
    }
  }
  return max;
}

// expands to left of ith element and right of jth element
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

console.log(longestPalindromicSubString("1234432990"));
console.log(longestPalindromicSubString("aaaabaaaaaaaaa"));
console.log(longestPalindromicSubString("aaaabbccaaaaaaaaa"));
console.log(longestPalindromicSubString("aaaabbccbbaaaaaaaaa"));

// 1 2 3 4 4 3 2 9 9 0
