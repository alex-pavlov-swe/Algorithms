var isMirror = function(left, right) {
    if (!left && !right) return true;

    if(!left || !right) return false;

    return (left.val === right.val &&
           isMirror(left.right, right.left) &&
           isMirror(left.left, right.right))
}

var isSymmetric = function(root) {
    return isMirror(root, root);
};