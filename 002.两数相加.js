/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // 进位数
  let addFull = 0
  // 创建listnode链 0
  let listnode = new ListNode('0')
  // 设置返回结果
  let head = listnode
  // 进位1 或者 l1l2 还有下一位进入
  while(addFull || l1 || l2){
    // 排null，不然加法报错
    let val1 = l1!==null ? l1.val : 0
    let val2 = l2!==null ? l2.val : 0
    // 两数 + 进位数
    let sum = val1 + val2 + addFull
    // 设置下一次的进位数
    addFull = sum >= 10 ? 1 : 0
    // 余10为当前数
    listnode.next = new ListNode(sum % 10)
    // 保存当前listnode
    listnode = listnode.next
    // 准备重新进入循环 
    if(l1){
      l1 = l1.next
    }
    if(l2){
      l2 = l2.next
    }
  }
  // 初始化listnode的时候第一位是0，所以next获取结果
  return head.next
};
// @lc code=end

