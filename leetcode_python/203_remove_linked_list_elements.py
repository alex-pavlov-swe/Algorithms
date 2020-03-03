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

  def removeElements(self, head: ListNode, val: int) -> ListNode:
    prev = ListNode(-1)
    result = prev
    curr = head

    while curr:
      if curr.val != val:
        prev.next = curr
        prev = prev.next
      else:
        prev.next = None
      curr = curr.next

    return result.next


  def action(self):
    l1 = self.createLinkedList([1,2,3,4,5,6])
    self.printLinkedList(l1)
    l2 = self.removeElements(l1, 6)
    self.printLinkedList(l2)

app = Solution()
app.action()