/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if(remove(null, head, n) == n) return head.next;
  return head;
};

function remove(prev, node, n) {
  if(!node) {
    return 0;
  }
  let currentN = remove(node, node.next, n) + 1;
  if(currentN == n) {
    if(prev) {
      prev.next = node.next;
    }
  }

  return currentN;
}