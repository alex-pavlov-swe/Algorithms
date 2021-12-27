var addTwoNumbers = function(l1, l2) {
    if (!l1 && !l2) return;
    var head = new ListNode(0);
    var result = head;
    var curr = 0;

    while (l1 || l2) {
        head.next = new ListNode(0);
        head = head.next;

        if (l1) {
            curr += l1.val || 0;
            l1 = l1.next;
        }
        if (l2) {
            curr += l2.val || 0;
            l2 = l2.next;
        }

        head.val = curr % 10;

        curr = parseInt(curr / 10);
    }

    if (curr !== 0)
        head.next = new ListNode(curr);

    return result.next;
};
