function reverse(head) {
  if (!head) return;

  let slow = head;
  let fast = head;

  if (fast !== null && fast.next !== null) {
    slow = fast.next;
    fast = fast.next.next;
  }
  return slow;
}
