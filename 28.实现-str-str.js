/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle.length) return 0

  let m = haystack.length
  let n = needle.length

  if (m < n) return -1
  for (let i = 0; i <= m - n; i++) {
    let j = 0
    for (j = 0; j < n; j++) {
      if (haystack[i + j] !== needle[j]) break
    }
    if (j === n) return i
  }
  return -1

};
// @lc code=end

