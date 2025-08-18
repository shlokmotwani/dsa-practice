/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  let commonStr = strs.sort()[0];

  for (let i = 1; i < strs.length; i++) {
    splitItem = strs[i].split("");
    splitCommon = commonStr.split("");
    let j = 0;
    while (j < splitCommon.length && j < splitItem.length) {
      if (splitCommon[j] === splitItem[j]) {
        j++;
      } else {
        commonStr = splitItem.slice(0, j).join("");
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
