// Reverse a singly linked list.
// 
// 参考
// https://leetcode.com/discuss/100970/javascript-solution-both-iterative-and-recursive
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
var reverseList = function(head) {
    if (head === null || head.next === null) return head;

    var newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
};

var reverseList = function(head) {
    var prev = null;
    while (head) {
        var next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
};
 