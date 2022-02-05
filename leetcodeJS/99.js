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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var recoverTree = function(root) {
    var prev, first, second;
    var inorder = function(root) {
        if (!root) return;
        inorder(root.left);
        if (prev && prev.val > root.val) {
            console.log(prev.val, root.val, first, second);
            if (!first) first = prev;
            second = root;
        }
        prev = root;
        inorder(root.right);
    }
    inorder(root);
    [first.val, second.val] = [second.val, first.val];
};
 //    3
 //   / \
 // 1    4
 //     /
 //    2
 //    2
 //   / \
 //  1   4
 //     /
 //    5
