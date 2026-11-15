// 206

function reverse(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const temp = current.next;

    current.next = prev;

    prev = current;
    current = temp;
  }
  return prev;
}
