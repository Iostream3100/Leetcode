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
var rotateRight = function(head, k) {
  let n = 0;
  let cur = head;
  let tail = head;
  while(cur) { //get the length and the tail node
    n++;
    tail = cur;
    cur = cur.next;
  }
  k = k % n;
  if(n <= 1 || k == 0) return head;

  let prev = null;
  cur = head;
  for(let i = 0; i < n - k; ++i) { //find the new head
    prev = cur;
    cur = cur.next;
  }

  prev.next = null;
  tail.next = head;
  return cur;
};