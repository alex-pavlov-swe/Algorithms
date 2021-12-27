/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    let result = [];
    
    function dfs(node) {
        if (!node) {
            result.push(null);
            return;
        }
        
        result.push(node.val);
        
        dfs(node.left);
        dfs(node.right);
    }
    
   if (root) {
        dfs(root);
    }
    
    return JSON.stringify(result);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    function rdeserialize(nodes) {        
        let val = nodes.shift();
        if (val === null) {
            return null;
        }
        
        let node = new TreeNode(val);
        
        node.left = rdeserialize(nodes);
        node.right = rdeserialize(nodes);   
        
        return node;
    }
    
    let nodes = JSON.parse(data);

    return nodes.length ? rdeserialize(nodes) : null;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */