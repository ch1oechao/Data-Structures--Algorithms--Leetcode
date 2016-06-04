// Invert a binary tree.

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 
// to
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    var tmp;
    if (root && (root.right || root.left)) {
        tmp = root.right || null;
        root.right = root.left || null;
        root.left = tmp;
        invertTree(root.right);
        invertTree(root.left);
    }
    return root;
};
