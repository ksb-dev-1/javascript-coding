class Node {
  constructor(value) {
    // Time: O(1)
    // Space: O(1) for the node's value and next reference
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Time: O(1)
    // Auxiliary space: O(1)
    // Initialize an empty list with head, tail, and count.
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  // Time: O(1)
  // Auxiliary space: O(1)
  size() {
    return this.count;
  }

  // Time: O(1)
  // Auxiliary space: O(1)
  // Add a new node at the end of the list.
  append(value) {
    const newNode = new Node(value);

    // Handle an empty list.
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.count++;
      return;
    }

    // Connect the current tail to the new node.
    this.tail.next = newNode;
    this.tail = newNode;
    this.count++;
  }

  // Time: O(1)
  // Auxiliary space: O(1)
  // Add a new node at the beginning of the list.
  prepend(value) {
    const newNode = new Node(value);

    // Handle an empty list.
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.count++;
      return;
    }

    // Make the new node point to the old head.
    newNode.next = this.head;
    this.head = newNode;
    this.count++;
  }

  // Time: O(n) worst case
  // Auxiliary space: O(1)
  // Return false for an invalid index; otherwise update the value.
  set(index, value) {
    if (index < 0 || index >= this.count) {
      return false;
    }

    let current = this.head;
    let currentIndex = 0;

    // Traverse until the requested index is reached.
    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }

    current.value = value;
    return true;
  }

  // Time: O(n) worst case
  // Auxiliary space: O(1)
  // Return undefined if the index is invalid.
  get(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }

    let current = this.head;
    let currentIndex = 0;

    // Traverse until the requested index is reached.
    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }

    return current.value;
  }

  // Time: O(n) worst case; O(1) at the head or tail
  // Auxiliary space: O(1)
  // Insert at any valid index from 0 through count.
  insert(index, value) {
    if (index < 0 || index > this.count) {
      return false;
    }

    // Inserting at the beginning.
    if (index === 0) {
      this.prepend(value);
      return true;
    }

    // Inserting at the end.
    if (index === this.count) {
      this.append(value);
      return true;
    }

    let current = this.head;
    let currentIndex = 0;
    const newNode = new Node(value);

    // Stop at the node immediately before the insertion index.
    while (currentIndex < index - 1) {
      current = current.next;
      currentIndex++;
    }

    // Save the remaining list before changing the links.
    const temp = current.next;
    current.next = newNode;
    newNode.next = temp;

    this.count++;
    return true;
  }

  // Time: O(n) worst case
  // Auxiliary space: O(1)
  // Remove the node at the given index and return its value.
  // Return undefined if the index is invalid.
  remove(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }

    // Case 1: Remove the head.
    if (index === 0) {
      const removedHead = this.head;
      this.head = this.head.next;
      this.count--;

      // If the list is now empty, clear the tail too.
      if (this.count === 0) {
        this.tail = null;
      }

      return removedHead.value;
    }

    // Case 2: Remove the tail.
    if (index === this.count - 1) {
      let current = this.head;

      // Find the node immediately before the tail.
      while (current.next !== this.tail) {
        current = current.next;
      }

      const removedNode = this.tail;
      this.tail = current;
      this.tail.next = null;

      this.count--;
      return removedNode.value;
    }

    // Case 3: Remove a node from the middle.
    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      current = current.next;
      currentIndex++;
    }

    const removedNode = current.next;
    current.next = removedNode.next;

    this.count--;
    return removedNode.value;
  }

  // Time: O(1)
  // Auxiliary space: O(1)
  // Remove the head and return its value.
  // Return undefined if the list is empty.
  shift() {
    if (this.count === 0) {
      return undefined;
    }

    // Handle a single-node list.
    if (this.count === 1) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.count--;
      return removedNode.value;
    }

    const removedNode = this.head;
    this.head = this.head.next;

    this.count--;
    return removedNode.value;
  }

  // Time: O(n) worst case
  // Auxiliary space: O(1)
  // Remove the tail and return its value.
  // Return undefined if the list is empty.
  pop() {
    if (this.count === 0) {
      return undefined;
    }

    // Handle a single-node list.
    if (this.count === 1) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.count--;
      return removedNode.value;
    }

    let current = this.head;

    // A singly linked list has no previous pointer,
    // so traverse to find the node before the tail.
    while (current.next !== this.tail) {
      current = current.next;
    }

    const removedNode = this.tail;
    this.tail = current;
    this.tail.next = null;

    this.count--;
    return removedNode.value;
  }

  // Time: O(n) worst case
  // Auxiliary space: O(1)
  // Return true if a node contains the specified value.
  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  // Time: O(n) worst case
  // Auxiliary space: O(1)
  // Return the first matching index, or -1 if not found.
  find(value) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.value === value) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  // Time: O(n)
  // Auxiliary space: O(n) for the returned array.
  toArray() {
    const result = [];
    let current = this.head;

    // Copy each node's value into the array.
    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }

  // Time: O(1)
  // Auxiliary space: O(1)
  // Clear the list's references and reset its size.
  clear() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  // Time: O(n)
  // Auxiliary space: O(1)
  // Reverse the existing node links without creating new nodes.
  reverse() {
    let prev = null;
    let current = this.head;

    // The old head becomes the new tail.
    this.tail = this.head;

    while (current !== null) {
      // Save the next node before changing the current link.
      const next = current.next;

      // Reverse the current node's link.
      current.next = prev;

      // Advance both pointers.
      prev = current;
      current = next;
    }

    // prev points to the old tail, which is now the new head.
    this.head = prev;
  }

  // Time: O(n)
  // Auxiliary space: O(1)
  // Return the middle value; for even lengths, return the second middle.
  // Uses slow/fast pointers and does not depend on count.
  middle() {
    let slow = this.head;
    let fast = this.head;

    // Slow advances one node; fast advances two nodes.
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // Optional chaining returns undefined for an empty list.
    return slow?.value;
  }

  // Time: O(n), excluding the cost of console rendering
  // Auxiliary space: O(1) for the method's own variables,
  // excluding console implementation and output buffering.
  // Print every node's value.
  display() {
    let current = this.head;

    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}
