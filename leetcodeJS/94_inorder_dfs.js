/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// Inorder - Left, Root, Right
// Recursion
var inorderTraversal = function(root) {
    var result = [];

    var inorder = function(root) {
        if (!root) return;

        inorder(root.left);

        result.push(root.val);

        inorder(root.right);
    }
    inorder(root);
    return result;
};

// Stack
var inorderTraversal = function(root) {
    var result = [], stack = [];

    while(root || stack.length) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            result.push(root.val);
            root = root.right;
        }
    }
    return result;
}