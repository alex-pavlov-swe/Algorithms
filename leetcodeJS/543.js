class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var diameterOfBinaryTree = function(root) {
    var diameter = 0;

    var dfs = function(root) {
        if (!root) return 0;

        let left = dfs(root.left);
        let right = dfs(root.right);

        diameter = Math.max(diameter, left + right);
        console.log(root.val, left, right);
        return 1 + Math.max(left, right);
    }
    dfs(root);
    return diameter;
};

//          1
//         / \
//        2   3
//       / \
//      4   5
//

var tree1 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
console.log(diameterOfBinaryTree(tree1));