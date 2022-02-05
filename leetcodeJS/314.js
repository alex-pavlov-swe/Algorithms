function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var verticalOrder = function(root) {
    var result = {}, minColumn = 0;

    var findIndex = function(root, column) {
        if (!root) return;
        minColumn = Math.min(column, minColumn);
        findIndex(root.left, column - 1);
        findIndex(root.right, column + 1);
    }
    var dfs = function(root, column, row) {
        if (!root) return;
        var index = column - minColumn;
        if (!result[index]) result[index] = [];
        result[index].push([root.val, row]);
        dfs(root.left, column - 1, row + 1);
        dfs(root.right, column + 1, row + 1);
    }

    findIndex(root, 0);
    dfs(root, 0, 0);
    // console.log(result);
    Object.values(result).forEach((item) => {
        item.sort((a,b) => a[1] - b[1]);
        console.log(item);
    });
    return Object.values(result).map(items => items.map(subitem => subitem[0]));
};

var tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(verticalOrder(tree));