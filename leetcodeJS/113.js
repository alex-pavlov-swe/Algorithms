class TreeNode {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
}

var pathSum = function(root, targetSum) {
    var result = [], currentPath = [];

    var traverse = function(root, currentSum) {
        if (!root) return;
        currentPath.push(root.val);
        if (root.val == currentSum && !root.left && !root.right) {
            console.log(currentPath);
            result.push(currentPath.concat());
        } else {
            traverse(root.left, currentSum - root.val);
            traverse(root.right, currentSum - root.val);
        }
        currentPath.pop();
    }
    traverse(root, targetSum);
    return result;
};

//         12
//        /  \
//       7    1
//      /    / \
//     4    10  5

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(pathSum(root, 23));