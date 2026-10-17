/*

class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
  }

  // Add an item to the rear.
  // Time: O(1) amortized
  // Space: O(1) extra per item
  enqueue(value) {
    this.items.push(value);
  }

  // Remove and return the front item.
  // Time: O(1)
  // Space: O(1)
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.items[this.front];
    this.front++;

    return value;
  }

  // Return the front item without removing it.
  // Time: O(1)
  // Space: O(1)
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[this.front];
  }

  // Check whether the queue is empty.
  // Time: O(1)
  // Space: O(1)
  isEmpty() {
    return this.front >= this.items.length;
  }

  // Return the number of items remaining.
  // Time: O(1)
  // Space: O(1)
  size() {
    return this.items.length - this.front;
  }

  display() {
    console.log(this.items);
  }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.display();

console.log(queue.peek()); // 10
console.log(queue.dequeue()); // 10
console.log(queue.dequeue()); // 20
console.log(queue.peek()); // 30
console.log(queue.size()); // 1
console.log(queue.isEmpty()); // false
console.log(queue.dequeue()); // 30
console.log(queue.isEmpty()); // true
console.log(queue.dequeue()); // null

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.count = 0;
  }
}
