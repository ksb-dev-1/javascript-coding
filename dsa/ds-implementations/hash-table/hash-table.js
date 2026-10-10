class HashTable {
  constructor(size = 5) {
    this.buckets = new Array(size);
    this.capacity = size;
    this.count = 0;

    for (let i = 0; i < size; i++) {
      this.buckets[i] = [];
    }
  }

  hash(key) {
    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.capacity;
  }

  size() {
    return this.count;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
    this.count++;
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return undefined;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true;
      }
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.count--;
        return true;
      }
    }
    return false;
  }

  clear() {
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = [];
    }
    this.count = 0;
  }

  display() {
    for (let i = 0; i < this.buckets.length; i++) {
      console.log(i, this.buckets[i]);
    }
  }
}

const table = new HashTable(5);

// 1. Insert new keys
table.set("cat", 10);
table.set("dog", 20);
console.log(table.size()); // 2

// 2. Update an existing key
table.set("cat", 100);
console.log(table.get("cat")); // 100
console.log(table.size()); // 2

// 3. Search for a missing key
console.log(table.get("tiger")); // undefined
console.log(table.has("tiger")); // false

// 4. Remove an existing key
console.log(table.remove("dog")); // true
console.log(table.size()); // 1

// 5. Remove a missing key
console.log(table.remove("tiger")); // false
console.log(table.size()); // 1

// 6. Clear everything
table.clear();
console.log(table.size()); // 0
console.log(table.has("cat")); // false
