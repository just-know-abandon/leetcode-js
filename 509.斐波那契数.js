/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
  if(n<=1) return n
  let temp1 = 0;
  let temp2 = 1;
  let result = 0;
  for(let i = 2; i <= n; i++){
    result = temp1 + temp2
    temp1 = temp2
    temp2 = result
  }
  return result
};
// @lc code=end

