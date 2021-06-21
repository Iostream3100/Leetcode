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
  if(lists.length == 0) {
    return null;
  }

  let node = null;
  let head = null;
  while(true) {
    let minPos = -1;
    for(let i = 0; i < lists.length; ++i) {
      if(lists[i]) {
        if(minPos == -1 || lists[i].val < lists[minPos].val) {
          minPos = i;
        }
      }
    }
    if(minPos == -1) {//all nodes are empty
      break;
    }
    if(head) {
      node.next = new ListNode(lists[minPos].val);
      node = node.next;
      lists[minPos] = lists[minPos].next;
    }
    else {
      node = new ListNode(lists[minPos].val);
      head = node;
      lists[minPos] = lists[minPos].next;
    }
  }

  return head;
};