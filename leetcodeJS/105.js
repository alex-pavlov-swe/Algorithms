/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    function helper(p1, p2, i1, i2) {
        if (p1 > p2 || i1 > i2) return null; // sanity check

        var index = inorder.indexOf(preorder[p1]), // get inorder position
            nLeft = index - i1,             // count nodes in left subtree
            root  = new TreeNode(preorder[p1]);    // build the root node

        // build the left and right subtrees recursively
        root.left  = helper(p1 + 1, p1 + nLeft, i1, index - 1);
        root.right = helper(p1 + nLeft + 1, p2, index + 1, i2);

        return root;
    }

    return helper(0, preorder.length - 1, 0, inorder.length - 1);
};

//         3
//        / \
//       9   20
//      /    /  \
//     1    15   7

// preorder = [3] - 9,1,20,15,7  val, left, right
// inorder = [1 9] - 3 - [15 20 7]   left, val, right

// preorder = [9,1,20,15,7]
// inorder = [1, 9]

// preorder = [9,1,20,15,7]
// inorder = [15, 20, 7]