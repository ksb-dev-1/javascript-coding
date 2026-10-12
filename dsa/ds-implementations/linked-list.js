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
list.display();
