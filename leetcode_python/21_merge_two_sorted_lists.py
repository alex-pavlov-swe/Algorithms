# 21 Merge Two Sorted Lists

class ListNode:
  def __init__(self, x=0):
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

  def mergeTwoLists(self, l1, l2):
    prehead = ListNode(-1)
    prev = prehead

    while l1 and l2:
      if l1.val <= l2.val:
        prev.next = l1
        l1 = l1.next
      else:
        prev.next = l2
        l2 = l2.next
      prev = prev.next
    
    if l1:
      prev.next = l1
    if l2:
      prev.next = l2
    
    return prehead.next

  def action(self):
    l1 = self.createLinkedList([10,30])
    l2 = self.createLinkedList([2,4,6])
    l3 = self.mergeTwoLists(l1, l2)
    self.printLinkedList(l3)


inst = Solution()
inst.action()