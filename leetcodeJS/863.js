/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */

 var distanceK = function(root, target, K) {
    var result = [];

    var findTarget = function(root, target, parent) {
        if (!root) return null;

        root.parent = parent;

        if (root.val === target.val) {
            return root;
        } else {
            return findTarget(root.left, target, root) || findTarget(root.right, target, root);
        }
    }

    var findNodes = function(root, level) {
        if (!root || root.visited) return;

        root.visited = true;

        if (level === K && root) {
            result.push(root.val);
        } else if (level < K) {
            findNodes(root.left, level + 1);
            findNodes(root.right, level + 1);
            findNodes(root.parent, level + 1);
        }
    }

    var targetNode = findTarget(root, target, null);

    findNodes(targetNode, 0);

    return result;
};