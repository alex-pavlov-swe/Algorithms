function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

 var isCousins = function(root, x, y) {
    var cousinLevel = -1, cousinParent, areCousins = false;

    var dfs = function(root, level, parent) {
        if (!root) return;
        if (root.val == x || root.val == y) {
            if (!parent) return false;
            if (cousinLevel == -1) {
                cousinLevel = level;
                cousinParent = parent.val;
            } else {
                areCousins = (cousinLevel == level && cousinParent != parent.val);
            }
        }
        dfs(root.left, level + 1, root);
        dfs(root.right, level + 1, root);
    }
    dfs(root, 0, null);
    return areCousins;
};

var tree = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3, new TreeNode(5)));
console.log(isCousins(tree, 4, 5));

// x = 4, y = 5
//     1
//    / \
//   2   3
//   |   |
//   4   5

// dfs(1, 0, null)
// dfs(2, 1, 1)
// dfs(4, 2, 2)
// cousinLevel = 2, cousinParent = 2
// dfs(1, 1, 1)
// dfs(5, 2, 2)
