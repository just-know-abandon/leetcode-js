/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let result = 0;
  for(let i = 0; i < height.length; i++){
    for(let k = i+1; k < height.length; k++){
      if (height[i] > height[k]){
        result = result > (k-i) * height[k] ? result : (k-i) * height[k]
      } else {
        result = result > (k-i) * height[i] ? result : (k-i) * height[i]
      }
    }
  }
  return result
};
// @lc code=end

