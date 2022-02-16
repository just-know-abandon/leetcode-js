/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let arrLength = nums.length
  for(let i = 0; i < arrLength - 1; i++){
    for(let k = i + 1; k < arrLength; k++){
      if(nums[i] + nums[k] === target) {
        return [i, k]
      }
    }
  }
};
// @lc code=end

