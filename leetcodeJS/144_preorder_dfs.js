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
// Root, Left, Right
// Recursive
var preorderTraversal = function(root) {
    var result = [];

    var preorder = function(root) {
        if (!root) return;

        result.push(root.val);

        preorder(root.left);
        preorder(root.right);
    }
    preorder(root);
    return result;
};

// Stack
var preorderTraversal = function(root) {
    if (!root) return [];

    var result = [], stack = [];

    stack.push(root);

    while (stack.length) {
        var node = stack.pop();

        result.push(node.val);

        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return result;
}