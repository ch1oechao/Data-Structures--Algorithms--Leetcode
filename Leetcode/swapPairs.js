// Given a linked list, swap every two adjacent nodes and return its head.
// For example,
// Given 1->2->3->4, you should return the list as 2->1->4->3.
// Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
// https://leetcode.com/discuss/106279/java-recursive-and-iterative-solutions-both-cost-0ms
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    
    var node1 = head,
        node2 = head.next,
        node3 = node2.next;

    node2.next = node1;
    node1.next = node3;

    if (node3 !== null) {
        node1.next = swapPairs(node3);
    }

    return node2;
};
