class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  size() {
    return this.count;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.count++;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.count++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.count++;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.count++;
  }

  set(index, value) {
    if (index < 0 || index >= this.count) {
      return false;
    }

    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }
    current.value = value;
    return true;
  }

  get(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }

    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      current = current.next;
      currentIndex++;
    }
    return current.value;
  }

  insert(index, value) {
    if (index < 0 || index > this.count) {
      return false;
    }

    if (index === 0) {
      this.prepend(value);
      return true;
    }

    if (index === this.count) {
      this.append(value);
      return true;
    }

    let current = this.head;
    let currentIndex = 0;
    const newNode = new Node(value);

    while (currentIndex < index - 1) {
      current = current.next;
      currentIndex++;
    }

    const temp = current.next;
    current.next = newNode;
    newNode.next = temp;

    this.count++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }

    if (index === 0) {
      const removedHead = this.head;
      this.head = this.head.next;
      this.count--;

      if (this.count === 0) this.tail = null;

      return removedHead.value;
    }

    if (index === this.count - 1) {
      let current = this.head;

      while (current.next !== this.tail) {
        current = current.next;
      }

      const removeNode = this.tail;
      this.tail = current;
      this.tail.next = null;

      this.count--;
      return removeNode.value;
    }

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

  shift() {
    if (this.count === 0) {
      return undefined;
    }

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

  pop() {
    if (this.count === 0) {
      return undefined;
    }

    if (this.count === 1) {
      const removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.count--;
      return removedNode.value;
    }

    let current = this.head;

    while (current.next !== this.tail) {
      current = current.next;
    }

    const removedNode = this.tail;
    this.tail = current;
    this.tail.next = null;

    this.count--;
    return removedNode.value;
  }

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

  toArray() {
    const result = [];
    let current = this.head;

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  reverse() {
    let prev = null;
    let current = this.head;

    this.tail = this.head;

    while (current !== null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  display() {
    let current = this.head;

    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.prepend(5);

// console.log(list.size()); // 3
// list.display(); // 5, 10, 20
// console.log(list.head.value); // 5
// console.log(list.tail.value); // 20

list.insert(1, 99);
// list.display();

// list.remove(2);
list.display();

list.reverse();
list.display();
