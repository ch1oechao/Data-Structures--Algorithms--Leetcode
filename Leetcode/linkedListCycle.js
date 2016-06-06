// Linked List Cycle
// https://leetcode.com/discuss/100406/java-fast-slow-pointers-solution
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null || head.next === null) {
        return false;
    }
    var slow = head, 
        fast = head.next.next;
    // if "fast" is null, there is no circle
    while (fast !== null && fast.next !== null) {
        if (slow === fast) {
            return true;
        }
        fast = fast.next.next;
        slow = slow.next;
    } 
    return false;
}
 