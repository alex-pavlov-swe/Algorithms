class Solution:
    def isBalanced(self, root):
        def isBalancedHelper(root):
            if root == None:
                return (True, 0)
            leftB, leftH = isBalancedHelper(root.left)
            rightB, rightH = isBalancedHelper(root.right)
            return (leftB and rightB and abs(leftH-rightH) <= 1)
        return isBalancedHelper(root)[0]
