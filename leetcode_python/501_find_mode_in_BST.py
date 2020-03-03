# Definition for a binary tree node.
class TreeNode:
  def __init__(self, x):
    self.val = x
    self.left = None
    self.right = None

class Solution:
  def findMode(self, root):
    values = {}
    val = 0
    def helper(node):
      if node.left:
        val = helper(node.left)
        if val not in values:
          values[val] = 1
        else:
          values[val] += 1
        #print(f'{val} added')
      if node.right:
        val = helper(node.right)
        if val not in values:
          values[val] = 1
        else:
          values[val] += 1
        #print(f'{val} added')
      return node.val
    
    helper(root)
    if root.val not in values:
      values[val] = 1
    else:
      values[root.val] += 1
    return max(values, key=values.get)
          
      
root = TreeNode(5)
root.left = TreeNode(3)
root.left.left = TreeNode(5)
root.left.right = TreeNode(5)
root.right = TreeNode(8)
root.right.right = TreeNode(9)
root.right.left = TreeNode(6)

app = Solution()
res = app.findMode(root)

print(res)