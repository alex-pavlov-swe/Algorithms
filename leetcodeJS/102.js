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