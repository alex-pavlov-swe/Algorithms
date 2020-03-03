#206. Reverse Linked List
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class ListNode:
  def __init__(self, x):
    self.val = x
    self.next = None

class Solution:
  def createLinkedList(self, l):
    head = ListNode(l[0])
    dummy = head
    for i in range(1,len(l)):
      dummy.next = ListNode(l[i])
      dummy = dummy.next
    return head

  def printLinkedList(self, l):
    tempStr = ''
    while l != None:
      tempStr += str(l.val) + '->'
      l = l.next
    print(tempStr)
      

  def reverseListIterative(self, head):
    curr = head
    prev = None
    temp = None
    
    while curr:
      temp = curr.next
      curr.next = prev
      prev = curr
      curr = temp
    
    return prev

  def reverseListRecursive(self, head):
    if not head or not head.next:
      return head
    p = self.reverseListRecursive(head.next)
    
    head.next.next = head
    head.next = None
    return p 

      
  def action(self):
    l1 = self.createLinkedList([1,2,3,4,5])
    self.printLinkedList(l1)
    self.printLinkedList(self.reverseListIterative(l1))
    l2 = self.createLinkedList([1,2,3,4,5])
    self.printLinkedList(self.reverseListRecursive(l2))

inst = Solution()
inst.action()