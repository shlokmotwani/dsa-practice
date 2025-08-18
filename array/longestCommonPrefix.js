/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  let commonStr = strs.sort()[0];

  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (j < commonStr.length && j < strs[i].length) {
      if (commonStr[j] === strs[i][j]) {
        j++;
      } else {
        commonStr = strs[i].slice(0, j);
        break;
      }
    }
  }
  return commonStr;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefix(["ab", "a"])); // "a"

/*
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/
