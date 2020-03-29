class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def print_level_order(root):
    def helper(node):
        if not node:
            return None
        print(node.val)
        if node.left:
            helper(node.left)
        if node.right:
            helper(node.right)
    helper(root)


class Solution:
    # dfs + stack
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
        stack = [(root, 0)]
        res = []
        while stack:
            node, level = stack.pop()
            if node:
                if len(res) < level + 1:
                    res.insert(0, [])
                res[-(level + 1)].append(node.val)
                stack.append((node.right, level+1))
                stack.append((node.left, level+1))
        return res

    # bfs + queue
    def levelOrderBottom2(self, root):
        queue = collections.deque([root, 0])
        res = []
        while queue:
            node, level = queue.popleft()
            if node:
                if len(res) < level + 1:
                    res.insert(0, [])
                res[-(level+1).append(node.val)]
                queue.append((node.left, level+1))
                queue.append((node.right, level+1))


root = Node(1, Node(2), Node(3, Node(4), Node(5)))
print_level_order(root)
# 1 2 3 4 5
