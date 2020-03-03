# Definition for a binary tree node.
class TreeNode:
  def __init__(self, x):
    self.val = x
    self.left = None
    self.right = None

class Solution:
  def rangeSumBST(self, root: TreeNode, L: int, R: int) -> int:
    self.sumX = 0
    val = 0
    def helper(node):
      if node.left:
        val = helper(node.left)
        if val <= R and val >= L:
          self.sumX += val
      if node.right:
        val = helper(node.right)
        if val <= R and val >= L:
          self.sumX += val
      return node.val
    helper(root)
    if root.val <= R and root.val >= L:
      self.sumX += root.val
    return self.sumX
        