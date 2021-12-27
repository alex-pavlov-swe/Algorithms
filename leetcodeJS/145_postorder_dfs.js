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
// Postorder - Left, Right, Root
// Recursion
var postorderTraversal = function(root) {
    var result = [];

    var postorder = function(root) {
        if (!root) return;
        postorder(root.left);
        postorder(root.right);
        result.push(root.val);
    }
    postorder(root);
    return result;
};

// Stack
var postorderTraversal = function(root) {
    if (!root) return [];
    var result = [], stack = [root];

    while (stack.length) {
        var node = stack.pop();
        result.unshift(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    return result;
}




