class HashTable {
  constructor(size = 5) {
    // Array containing all buckets.
    this.buckets = new Array(size);

    // Current number of buckets.
    this.capacity = size;

    // Number of unique key-value pairs stored.
    this.count = 0;

    // Resize when the load factor exceeds 0.75.
    this.maxLoadFactor = 0.75;

    // Initialize every bucket as a separate empty array.
    // Each bucket can store multiple pairs when collisions occur.
    for (let i = 0; i < size; i++) {
      this.buckets[i] = [];
    }
  }

  // Convert a string key into a bucket index.
  #hash(key) {
    let total = 0;

    // Add the character codes of all characters in the key.
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    // Ensure the index is within the bucket array.
    return total % this.capacity;
  }

  // Double the capacity and redistribute existing entries.
  resize() {
    // Keep a reference to the old buckets.
    const oldBuckets = this.buckets;

    // Double the number of buckets.
    this.capacity = this.capacity * 2;

    // Create the new bucket array with independent empty arrays.
    this.buckets = Array.from({ length: this.capacity }, () => []);

    // Visit every bucket in the old array.
    for (let i = 0; i < oldBuckets.length; i++) {
      const bucket = oldBuckets[i];

      // Visit every key-value pair in that bucket.
      for (let j = 0; j < bucket.length; j++) {
        const [key, value] = bucket[j];

        // Recalculate the index using the new capacity.
        const newIndex = this.#hash(key);

        // Place the existing pair into its new bucket.
        this.buckets[newIndex].push([key, value]);
      }
    }
  }

  // Return the number of unique key-value pairs.
  // O(1) because we maintain this.count.
  size() {
    return this.count;
  }

  // Insert a new key-value pair or update an existing key.
  set(key, value) {
    const index = this.#hash(key);
    const bucket = this.buckets[index];

    // Search the bucket for an existing key.
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        // Update the existing value without changing count.
        bucket[i][1] = value;
        return;
      }
    }

    // The key does not exist, so add a new pair.
    bucket.push([key, value]);
    this.count++;

    // Calculate the ratio of entries to buckets.
    const loadFactor = this.count / this.capacity;

    // Grow the table if the load factor exceeds the threshold.
    if (loadFactor > this.maxLoadFactor) {
      this.resize();
    }
  }

  // Return the value associated with a key.
  // Return undefined if the key does not exist.
  get(key) {
    const index = this.#hash(key);
    const bucket = this.buckets[index];

    // Search only the bucket where the key should be stored.
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }

    return undefined;
  }

  // Check whether a key exists.
  // Unlike get(), this returns a boolean.
  has(key) {
    const index = this.#hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true;
      }
    }

    return false;
  }

  // Remove a key-value pair.
  // Return true if removed, otherwise false.
  remove(key) {
    const index = this.#hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        // Remove one pair from the bucket.
        bucket.splice(i, 1);

        // Decrease count only when a key is removed.
        this.count--;

        return true;
      }
    }

    // The key was not found.
    return false;
  }

  keys() {
    const result = [];

    // Visit every bucket.
    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];

      // Visit every entry inside this bucket.
      for (let j = 0; j < bucket.length; j++) {
        result.push(bucket[j][0]);
      }
    }
    return result;
  }

  values() {
    const result = [];

    // Visit every bucket.
    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];

      // Visit every entry inside this bucket.
      for (let j = 0; j < bucket.length; j++) {
        result.push(bucket[j][1]);
      }
    }
    return result;
  }

  entries() {
    const result = [];

    // Visit every bucket.
    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];

      // Visit every entry inside this bucket.
      for (let j = 0; j < bucket.length; j++) {
        result.push([bucket[j][0], bucket[j][1]]);
      }
    }
    return result;
  }

  // Remove all entries while keeping the current capacity.
  clear() {
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = [];
    }

    // The table now contains zero entries.
    this.count = 0;
  }

  // Print every bucket to help inspect collisions.
  display() {
    for (let i = 0; i < this.buckets.length; i++) {
      console.log(`Bucket ${i}:`, this.buckets[i]);
    }
  }
}

// -------------------------
// Example usage and testing
// -------------------------

const t = new HashTable(4);

console.log("Initial size:", t.size()); // 0

// Insert three entries.
t.set("apple", 10);
t.set("banana", 20);
t.set("grape", 30);

console.log("Size after inserts:", t.size()); // 3

// Update an existing key; count must not increase.
t.set("apple", 100);

console.log("Updated apple:", t.get("apple")); // 100
console.log("Size after update:", t.size()); // 3

// Check whether keys exist.
console.log(t.has("banana")); // true
console.log(t.has("mango")); // false

// Add another entry. The load factor becomes 4 / 4 = 1,
// exceeding 0.75, so the capacity doubles from 4 to 8.
t.set("orange", 40);

console.log("Capacity:", t.capacity); // 8
console.log("Size:", t.size()); // 4

// Existing entries must remain available after resizing.
console.log(t.get("apple")); // 100
console.log(t.get("banana")); // 20
console.log(t.get("grape")); // 30
console.log(t.get("orange")); // 40

// Remove a key.
console.log(t.remove("banana")); // true
console.log(t.size()); // 3

// Removing a missing key must not change the count.
console.log(t.remove("mango")); // false
console.log(t.size()); // 3

// Inspect all buckets.
t.display();

// Clear all entries.
t.clear();

console.log("Size after clear:", t.size()); // 0
console.log("Capacity after clear:", t.capacity); // 8

// Inserting after clear must still work.
t.set("cat", 1);
t.set("dog", 2);

console.log(t.get("cat")); // 1
console.log(t.get("dog")); // 2
console.log(t.size()); // 2
