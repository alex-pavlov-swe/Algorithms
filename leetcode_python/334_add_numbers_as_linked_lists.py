## 445 add two numbers as linked lists

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

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

  def reverseLinkedList(self, head):
    curr = head
    prev = None
    temp = None

    while curr != None:
      temp = curr.next #save next
      curr.next = prev  #reverse
      prev = curr # prev -> curr
      curr = temp #get saved next node
    
    return prev
    
  def addTwoNumbers(self, l1, l2):
      l1temp, l2temp = l1, l2
      
      l1temp, l2temp = self.reverseLinkedList(l1), self.reverseLinkedList(l2)
      result = ListNode()
      dummy = result
      carry = 0
      newVal = 0

      while l1temp or l2temp:
          if l1temp and l2temp:
            newVal = l1temp.val + l2temp.val + carry
            l1temp, l2temp = l1temp.next, l2temp.next
          elif l1temp and not l2temp:
            newVal = l1temp.val + carry
            l1temp = l1temp.next
          elif not l1temp and l2temp:
            newVal = l2temp.val + carry
            l2temp = l2temp.next
          result.next = ListNode(newVal % 10)
          if newVal > 9:
              carry = 1
          else: carry = 0
          result = result.next
      print(f'newVal = {newVal}, dummy = {dummy}, result = {result}')
      
      if carry:
          result.next = ListNode(1)
          result = result.next
          
      return self.reverseLinkedList(dummy.next)
              
  def action(self):
    l1 = self.createLinkedList([1,2,3])
    l2 = self.createLinkedList([1,2,3])
    self.printLinkedList(l1)
    self.printLinkedList(l2)
    self.printLinkedList(self.addTwoNumbers(l1, l2))

inst = Solution()
inst.action()