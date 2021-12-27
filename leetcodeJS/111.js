// recursion
var minDepth = function(root) {
    var helper = function(root, level) {
        if (!root.left && !root.right) return level;

        if (root.left && root.right) return Math.min(helper(root.left, level+1), helper(root.right, level+1));

        if (root.left) return helper(root.left, level + 1);

        if (root.right) return helper(root.right, level + 1);
    }
    if (!root) return 0;
    return helper(root, 1);
}

//    3
//   / \
//  9    4
// / \   /\
//1   2  5 6

// BFS
var minDepth = function(root) {
    const queue = [];
    var level = 1;

    if (!root) return 0;

    queue.push(root);

    while (queue.length) {
        const length = queue.length;
        var noLeafs = true;

        for (var i = 0; i < length; i++) {
            const node = queue.shift();
            if (!node.left && !node.right) return level;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        level += 1;
    }
};

// DFS