/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    var head = headA;

    while (head) {
        head.check = true;
        head = head.next;
    }

    head = headB;

    while (head) {
        if (head.check) {
            return head;
        }
        head = head.next;
    }

    return null;
};
