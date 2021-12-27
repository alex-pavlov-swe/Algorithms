/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if (!head) return null;
    var curr = head, prev = null, temp;

    while (curr) {
        temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
};

// null <- 1
//         prev curr

// 1 -> 2 -> 3 -> 4 -> null

// null <- 1 <- 2 <- 3 <- 4 -> null
//                         prev curr

// null <- 1 <- 2 <- 3 <- 4

// O(1) space
// 0(n) time