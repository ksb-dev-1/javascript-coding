/*

class Stack {
  constructor() {
    // Time: O(1)
    // Space: O(1) initially
    this.items = [];
  }

  push(value) {
    // Time: O(1) amortized
    // Space: O(1) amortized per insertion
    this.items.push(value);
  }

  pop() {
    // Time: O(1)
    // Space: O(1)
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    // Time: O(1)
    // Space: O(1)
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    // Time: O(1)
    // Space: O(1)
    return this.items.length === 0;
  }

  size() {
    // Time: O(1)
    // Space: O(1)
    return this.items.length;
  }
}

*/

class Node {
  constructor(value) {
    // Time: O(1)
    // Space: O(1)
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    // Time: O(1)
    // Space: O(1)
    this.top = null;
    this.count = 0;
  }

  push(value) {
    // Time: O(1)
    // Space: O(1) per new node
    const newNode = new Node(value);

    // Connect the new node to the current top.
    newNode.next = this.top;

    // Make the new node the top.
    this.top = newNode;
    this.count++;
  }

  pop() {
    // Time: O(1)
    // Space: O(1)
    if (this.isEmpty()) {
      return null;
    }

    const removedNode = this.top;

    // Move top to the next node.
    this.top = this.top.next;
    this.count--;

    return removedNode.value;
  }

  peek() {
    // Time: O(1)
    // Space: O(1)

    if (this.isEmpty()) {
      return null;
    }
    return this.top.value;
  }

  isEmpty() {
    // Time: O(1)
    // Space: O(1)
    return this.count === 0;
  }

  size() {
    // Time: O(1)
    // Space: O(1)
    return this.count;
  }
}
