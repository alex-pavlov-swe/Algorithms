/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 var longestUnivaluePath = function(root) {
    var longestPath = 0;

    var dfs = function(root, currLength) {
        if (!root) return currLength;
        var left = 0, right = 0;

        var leftEqual = root.left && root.left.val == root.val,
            rightEqual = root.right && root.right.val == root.val;

        var left = leftEqual ? dfs(root.left, currLength + 1) : 0;
        var right = rightEqual ? dfs(root.right, currLength + 1) : 0;

        if (!leftEqual) dfs(root.left, 0);
        if (!rightEqual) dfs(root.right, 0);

        longestPath = Math.max(longestPath, left + right);
        return Math.max(left, right) + 1;
    }
    dfs(root, 0);
    return longestPath;
};