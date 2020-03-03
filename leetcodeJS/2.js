/*
# Definition for singly-linked list.
class ListNode(object):
  def __init__(self, x):
    self.val = x
    self.next = None

class Solution:
  def addTwoNumbers(self, l1, l2, c = 0):
    # Fill this in.

l1 = ListNode(2)
l1.next = ListNode(4)
l1.next.next = ListNode(3)

l2 = ListNode(5)
l2.next = ListNode(6)
l2.next.next = ListNode(4)

result = Solution().addTwoNumbers(l1, l2)
while result:
  print result.val,
  result = result.next

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807

*/

const printList = list => {
  let num = 0;
  let dec = 1;
  while (list) {
    num += list.val * dec;
    dec *= 10;
    list = list.next;
  }
  console.log(num);
};

class ListNode {
  constructor(x) {
    this.val = x;
    this.next = null;
  }
}

const addTwoNumbers = (l1, l2) => {
  let sum = 0;
  let carry = 0;
  let result = new ListNode(0);
  let dummy = result;

  while (l1 || l2) {
    sum = carry;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    carry = Math.floor(sum / 10);
    dummy.val = sum % 10;
    if (l1 || l2 || carry) {
      dummy.next = new ListNode(0);
      dummy = dummy.next;
    }
  }

  if (carry) {
    dummy.val = carry;
  }

  return result;
};

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
