
//  Validate Binary Search Tree

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left
    this.right = right;
}

var validate = function(root, low = -Math.pow(2, 31)-1, high = Math.pow(2, 31)) {
    if (!root) return true;

    if (root.val <= low || root.val >= high) {
        return false;
    }

    return (validate(root.left, low, root.val) && validate(root.right, root.val, high))
}

var isValidBST = function(root) {
    return validate(root);
};

// #   2
// #  / \
// # 11   3
// var tree1 = new TreeNode(2, new TreeNode(11), new TreeNode(3));
// console.log(tree1);
// console.log(isValidBST(tree1));

// #   [2147483647]

var tree2 = new TreeNode(2147483647);
console.log(isValidBST(tree2));

// #   1
// #  /
// # 1

// var tree3 = new TreeNode(1, new TreeNode(1));
// console.log(tree3);
// console.log(isValidBST(tree3));

// #   5
// #  / \
// # 4   7
// #    /
// #   2
