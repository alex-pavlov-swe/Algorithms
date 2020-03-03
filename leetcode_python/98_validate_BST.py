# Definition for a binary tree node.
# class TreeNode:
def __init__(self, x):
  self.val = x
  self.left = None
  self.right = None

class Solution:
    #recursive
    def isValidBST(self, root):
      def helper(node, lower, upper):
        if not node:
          return True
        if node.val <= lower or node.val >= upper:
          return False
        if not helper(node.right, node.val, upper):
          return False
        if not helper(node.left, lower, node.val):
          return False
        return True
    
      return helper(root, float('-inf'), float('inf'))
    #iterative
    def isValidBST(self, root):
      if not root:
        return True
      stack = []
      stack.push(root)
      stack.push(float('-inf'))
      stack.push(float('inf'))
      while stack:
        root, lower, upper = stack.pop()
        if not root:
          return True
        val = root.val
        if val <= lower or val >= upper:
          return False
        stack.append((root.right, val, upper))
        stack.append((root.left, lower, val))
      return True