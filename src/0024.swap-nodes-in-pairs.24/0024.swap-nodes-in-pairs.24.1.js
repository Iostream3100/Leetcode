/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if(!head || !head.next) {
    return head;
  }
  let node1 = head;
  let node2 = head.next;
  let tmp;
  while(node1 && node2) {
    tmp = node1.val;
    node1.val = node2.val;
    node2.val = tmp;

    node1 = node2.next;
    node2 = node1 ? node1.next : null;
  }

  return head;
};