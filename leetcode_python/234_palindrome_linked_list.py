# 234. Palindrome Linked List

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

  def isPalindrome(self, head):
    dummy = head
    listArray = []

    while dummy:
      listArray.append(dummy.val)
      dummy = dummy.next

    for i in range(round(len(listArray)/2)):
      if listArray[i] != listArray[len(listArray) - 1]:
        return False

    return True

  def action(self):
    l1 = self.createLinkedList([1,2,1])
    self.printLinkedList(l1)
    print(self.isPalindrome(l1))

app = Solution()
app.action()