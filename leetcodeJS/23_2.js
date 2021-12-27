// first idea - not working

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
var mergeKLists = function(lists) {
    if (lists.length == 0) return null;
    var listToSort = [];
    var head = new ListNode();
    var result = head;

    while (true) {
        listToSort = [];
        for (var i = 0; i < lists.length; i++) {
            if (lists[i]) {
                listToSort.push([i, lists[i].val]);
            }
        }

        if (listToSort.length === 0) break;
        head.next = new ListNode(0);

        head = head.next;

        listToSort.sort((a,b) => a[1] - b[1]);

        head.val = listToSort[0][1];

        lists[listToSort[0][0]] = lists[listToSort[0][0]].next;
    }
    return result.next;
};