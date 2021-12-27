/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
// O(m * k) time
// O(max(m) space) for the recursion

var equalTrees = function(s, t) {
    if (!s && !t) return true;

    if ((!s && t) || (s && !t)) return false;

    if (s.val !== t.val) return false;

    return equalTrees(s.left, t.left) && equalTrees(s.right, t.right);
}

var isSubtree = function(s, t) {
    if (!s) return false;

    if (equalTrees(s, t)) {
        return true;
    } else {
        return (isSubtree(s.left, t) || isSubtree(s.right, t))  ;
    }
};
