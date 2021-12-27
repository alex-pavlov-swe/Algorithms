class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  };

  var rightSideView = function(root) {
    if (!root) return [];
    var queue = [], result = [];

    queue.push(root);

    while (queue.length) {
        length = queue.length;
        for (var i = 0; i < length; i++) {
            node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(node.val);
    }
    return result;
};

  var root = new TreeNode(12)
  root.left = new TreeNode(7)
  root.right = new TreeNode(1)
  root.left.left = new TreeNode(9)
  root.right.left = new TreeNode(10)
  root.right.right = new TreeNode(5)
  console.log("Result: " + rightSideView(root));