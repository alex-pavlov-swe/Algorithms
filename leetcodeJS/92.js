/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 var reverseBetween = function(head, left, right) {
    var count = 1,
        leftPart = new ListNode(-1);
        leftPart.next = head,
        answer = leftPart;

    while (count < left) {
        leftPart = leftPart.next;
        count += 1;
    }

    var curr = leftPart.next, reversedHead = curr, prev = null, temp;

    while (curr && count <= right) {
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
        count += 1;
    }

    leftPart.next = prev;
    reversedHead.next = curr;
    return answer.next;
};

// count = 3
// -1 -> null <- 3 <- 5 -> null
// LP                 prev curr

// -1 -> 5 -> 3 -> null
// LP


//            L         R
// -1 -> 1 -> 2 -> 3 -> 4 -> 5 -> null
//       LP   
//    null <- 2 <- 3 <- 4    5 -> null
//                      prev curr
// count = 4


