// 21

var mergeTwoLists = function (list1, list2) {
  // Create a dummy node to simplify building the result.
  let dummy = new ListNode(-1);
  let current = dummy;

  // Compare nodes and attach the smaller one.
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    // Move to the last node in the merged list.
    current = current.next;
  }

  // Attach whichever list still has remaining nodes.
  current.next = list1 !== null ? list1 : list2;

  // Skip the dummy node.
  return dummy.next;
};
