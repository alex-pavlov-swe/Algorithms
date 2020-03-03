class ListNode:
  def __init__(self, val):
    self.val = val
    self.next = None

class Solution:
  def createList(self, l):
    if l:
      head = ListNode(l[0])
      curr = head
    else:
      return None

    for i in range(1,len(l)):
      curr.next = ListNode(l[i])
      curr = curr.next
    
    return head
  
  def printList(self, l):
    output = ''
    while l:
      output += str(l.val) + '->'
      l = l.next
    print(output)

  def removeElement(self, head, n):
    listLength = 0
    curr = head
    while curr:
      listLength += 1
      curr = curr.next
    if listLength == n:
      return head.next
    curr = ListNode(0)
    curr.next = head
    listLength -= n
    
    while listLength > 0:
        curr = curr.next
        listLength -= 1
        
    curr.next = curr.next.next
    return head


app = Solution()
l1 = app.createList([1])
app.printList(l1)
app.printList(app.removeElement(l1, 1))


      