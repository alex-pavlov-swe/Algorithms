// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// DFS
var levelOrder = function(root) {
    var result = [];

    var helper = function(root, level) {
        if (!root) return;

        if (!result[level]) {
            result[level] = [];
        }

        result[level].push(root.val);

        helper(root.left, level + 1);
        helper(root.right, level + 1);
    }

    helper(root, 0);

    return result;
};

// BFS
var levelOrderBfs = function(root) {
    var queue = [root],
        result = [];

    while (queue.length) {
        var length = queue.length,
            level = [];
        for (var i = 0; i < length; i++) {
            var node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(level);
    }
    return result;
}

//       5
//     /  \
//    3     7
//   / \
//  1   2

var tree = new TreeNode(5, new TreeNode(3, new TreeNode(1), new TreeNode(2)), new TreeNode(7));
// console.log(levelOrder(tree));
console.log(levelOrderBfs(tree));