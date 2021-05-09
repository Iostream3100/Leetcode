/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = arguments[2];
  let node = null;

  if(l1 || l2){
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let val = carry ? val1 + val2 + 1 : val1 + val2;
    node = new ListNode(val % 10);

    next1 = l1 ? l1.next : null;
    next2 = l2 ? l2.next : null;
    node.next = addTwoNumbers(next1, next2, val >= 10);
  } else if(carry){
    node = new ListNode(1);
  }

  return node;
};

