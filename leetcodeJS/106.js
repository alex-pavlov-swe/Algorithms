function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var buildTree = function(inorder, postorder) {
    var count = 0;
    var helper = function(i1, i2, p1, p2) {
        if (i1 >= i2 || p1 >= p2) return null;
        count += 1;

        var rootVal = postorder[p2],
            index = inorder.indexOf(rootVal),
            leftLength = index - i1,
            root = new TreeNode(rootVal);
            console.log(i1, i2, p1, p2, index, leftLength);

            root.left = helper(i1, index - 1, p1, p1 + leftLength);
            root.right = helper(index + 1, i2, p1 + leftLength + 1, p2 - 1);

        return root;
    }
    return helper(0, inorder.length - 1, 0, postorder.length - 1);
};

var inorder = [1,9,3,15,20,7], postorder = [1,9,15,7,20,3];
console.log(buildTree(inorder, postorder));

//         3
//        / \
//       9   20
//      /    /  \
//     1    15   7

// inorder = [1,9] 3 [15,20,7] = left, val, right
// postorder = [1,9] [15,7,20] [3] = left, right, val

// inorder = [1,9]

// inorder = [15,20,7]
