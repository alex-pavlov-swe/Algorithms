/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var prehead = new ListNode(-1);
    var head = prehead;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            head.next = l1;
            l1 = l1.next;
        } else {
            head.next = l2;
            l2 = l2.next;
        }
        head = head.next;
    }

    head.next = l1 == null ? l2 : l1;

    return prehead.next;
};


var mergeKLists = function(lists) {
    if (lists.length === 0) return null;
    if (lists.length === 1) return lists[0];
    if (lists.length === 2) return mergeTwoLists(lists[0], lists[1]);

    var index = 1;
    var result = lists[0];

    while (index < lists.length) {
        result = mergeTwoLists(result, lists[index]);
        index += 1;
    }

    return result;

};