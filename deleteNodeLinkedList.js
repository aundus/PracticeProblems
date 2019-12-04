/**
 * Delete node linked list problem from leetcode.
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    if( node.next.next === null ){
        node.val = node.next.val;
        node.next = null;
        return;
    }
    node.val = node.next.val;
    deleteNode(node.next);
};
