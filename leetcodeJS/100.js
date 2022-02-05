function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

 var isSameTree = function(p, q) {
    var isEqual = true;
    var dfs = function(p, q) {
        if (!p && !q) return;
        if ((!p || !q) || p.val !== q.val) {
            isEqual = false;
            return;
        }
        dfs(p.left, q.left);
        dfs(p.right, q.right);

    }
    dfs(p, q);
    return isEqual;
};

var tree1 = new TreeNode(1, new TreeNode(2));
var tree2 = new TreeNode(1, null, new TreeNode(2));
console.log(isSameTree(tree1, tree2));


//   1
//  /
// 2

//  1
//   \
//    2