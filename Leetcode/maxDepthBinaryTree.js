/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    var depth = arguments[1] || 0;

    if (root === null) {
        return depth;
    }
    
    return Math.max(maxDepth(root.left, depth + 1), maxDepth(root.right, depth + 1));
};
