# 206 reverse linked list
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
  def reverseList(self, head):
    curr = head
    prev = None
    temp = None

    while curr != None:
      temp = curr.next #save next
      curr.next = prev  #reverse
      prev = curr # prev -> curr
      curr = temp #get saved next node
    
    return prev
