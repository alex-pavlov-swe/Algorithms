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
 * @return {number}
 */
 var maxPathSum = function(root) {
    var maxSum = - Infinity;

    var dfs = function(root, currSum) {
        if (!root) return 0;

        var left = Math.max(0, dfs(root.left));
        var right = Math.max(0, dfs(root.right));

        maxSum = Math.max(maxSum, left + right + root.val);
        return Math.max(left, right) + root.val;
    }
    dfs(root);
    return maxSum;
};

//      5
//    /   \
//   3     8
//  / \   / \
// 1  4   7  9

// start 20-05


// root -> left -> right > leaf
// root -> left || root -> rigth || left + right

// maxSum = 5