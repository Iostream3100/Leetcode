/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let node = head;
  while(node) {
    let curNode = node;
    let valList = [];
    for(let i = 0; i < k && curNode; i++) {
      valList.push(curNode.val);
      curNode = curNode.next;
    }
    if(valList.length == k) {//can be reversed
      for(let i = 0; i < k; i++) {
        node.val = valList[k - 1 -i];
        node = node.next;
      }
    } else {
      break;
    }
  }

  return head;
};