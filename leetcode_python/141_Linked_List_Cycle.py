# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    ## brute force O(n) time and O(n) space solution
  def hasCycle(self, head):
    temp = head
    allNodes = []
    
    while temp:
      if temp in allNodes:
        return True
    allNodes.append(temp)
    temp = temp.next
    
    return False
        