#Reverse a linked list from position m to n. Do it in one-pass.
#Note: 1 ≤ m ≤ n ≤ length of list.
#Input: 1->2->3->4->5->NULL, m = 2, n = 4
#Output: 1->4->3->2->5->NULL

# Definition for singly-linked list.
class ListNode:
  def __init__(self, x):
    self.val = x
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

  def reverseBetween(self, head, m, n):
    # Part1 - traverse to the beginnin point of reversal
    firstPart = ListNode(-1)
    firstPart.next = head
    count = m
    while count > 1:
      firstPart = firstPart.next
      count -= 1
    # Part 2 - reverese
    if firstPart.next:
      curr = firstPart.next
    prev = None
    temp = None
    count = n
    while count - m >= 0:
      temp = curr.next
      curr.next = prev
      prev = curr
      curr = temp
      count -= 1
    firstPart.next = prev
    if m == 1:
      head = firstPart.next
    while firstPart.next:
      firstPart = firstPart.next
    firstPart.next = curr
    return head
    



app = Solution()
l1 = app.createList([1,2])
app.printList(app.reverseBetween(l1,1,2))