class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

    def printTree(self):
        def helper(node):
            if node:
                print(node.val)
                helper(node.left)
                helper(node.right)
            else:
                return None
        helper(self)


class Solution:
    # Iterative approach with stack - DFS - depth firsth search
    def maxDepth(self, root: TreeNode) -> int:
        depth = 0
        stack = [(root, 0)]
        while stack:
            node, level = stack.pop()
            if node:
                if depth < level + 1:
                    depth = level + 1
                stack.append((node.left, level + 1))
                stack.append((node.right, level + 1))
        return depth

    # Recursive approach
    def maxDepth2(self, node, depth=0):
        if not node:
            return 0
        return depth + 1 + max(self.maxDepth2(node.left), self.maxDepth2(node.right))


#       3
#      / \
#     9   20
#        /  \
#       15   7

root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20)
root.left.left = TreeNode(15)
root.left.right = TreeNode(7)
# root.printTree()

print(Solution().maxDepth2(root))
