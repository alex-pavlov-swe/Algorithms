/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// without queue
// var zigzagLevelOrder = function(root) {
//     var result = [];
    
//     var traverse = function(root, level) {
//         if (!root) return;
        
//         if (!result[level]) {
//             result[level] = [];
//         }
        
//         if (level % 2 == 0) {
//             result[level].push(root.val);
//         } else {
//             result[level].unshift(root.val);
//         }
        
//         traverse(root.left, level + 1);
//         traverse(root.right, level + 1);
//     }
    
//     traverse(root, 0);
//     return result;
// };

// wih queue
var zigzagLevelOrder = function(root) {
    const result = [], queue = [];
    var leftToRight = true;

    if (!root) return [];

    queue.push(root);

    while (queue.length) {
        const currentLevel = [], length = queue.length;

        for (var i = 0; i < length; i++) {
            const node = queue.shift();
            if (leftToRight) {
                currentLevel.push(node.val);
            } else {
                currentLevel.unshift(node.val);
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(currentLevel);
        leftToRight = !leftToRight;
    }
    return result;
}






