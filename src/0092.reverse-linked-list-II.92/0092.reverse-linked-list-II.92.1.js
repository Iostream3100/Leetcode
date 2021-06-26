/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  if(left >= right) return head;
  
  let lCur = head;
  let lPrev = null;
  for(let i = 1; i < left; ++i) {//find the left start node
    lPrev = lCur;
    lCur = lCur.next;
  }

  let prev = lCur;
  let cur = lCur.next;
  for(let i = left; i < right; ++i) { //reverse subList
    let tmp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = tmp;
  }

  if(lPrev) lPrev.next = prev; //if left != 1
  lCur.next = cur; 

  return left == 1? prev : head;
};