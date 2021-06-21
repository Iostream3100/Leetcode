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
function mergeTwoList(h1, h2){ //merge h2 to h1
  if(h1 == null || h2 == null) {
    return h1 == null ? h2 : h1;
  }

  let node;
  if(h1.val <= h2.val){
    node = new ListNode(h1.val);
    h1 = h1.next;
  } else {
    node = new ListNode(h2.val);
    h2 = h2.next;
  }
  let head = node;

  while(h1 || h2){
    if(h1 == null) {
      node.next = h2;
      break;
    }
    if(h2 == null) {
      node.next = h1;
      break;
    }

    if(h1.val <= h2.val) {
      node.next = new ListNode(h1.val);
      node = node.next;
      h1 = h1.next;
    } else {
      node.next = new ListNode(h2.val);
      node = node.next;
      h2 = h2.next;
    }
  }
  return head;
}
var mergeKLists = function(lists) {
  if(lists.length == 0) {
    return null;
  }

  let node = lists[0];
  for(let i = 1; i < lists.length; ++i) {
    node = mergeTwoList(node, lists[i]);
  }

  return node;
};