class HashTable {
  constructor(size = 5) {
    // Time: O(m)
    // Space: O(m)
    this.buckets = new Array(size);
    this.capacity = size;
    this.count = 0;
    this.maxLoadFactor = 0.75;

    for (let i = 0; i < size; i++) {
      this.buckets[i] = [];
    }
  }

  // Time: O(k)
  // Space: O(1)
  // k = number of characters in the string key
  #hash(key) {
    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.capacity;
  }

  // Time: O(n + m)
  // Auxiliary space: O(n + m)
  // n = number of entries, m = old/new capacity
  resize() {
    const oldBuckets = this.buckets;

    this.capacity = this.capacity * 2;
    this.buckets = Array.from({ length: this.capacity }, () => []);

    for (let i = 0; i < oldBuckets.length; i++) {
      const bucket = oldBuckets[i];

      for (let j = 0; j < bucket.length; j++) {
        const [key, value] = bucket[j];
        const newIndex = this.#hash(key);

        this.buckets[newIndex].push([key, value]);
      }
    }
  }

  // Time: O(1)
  // Space: O(1)
  size() {
    return this.count;
  }

  // Average amortized time: O(k + 1)
  // Worst-case time: O(k + n) for a normal insertion,
  // or O(k + n + m) when resizing is triggered.
  // Auxiliary space: O(1) normally; O(n + m) during resize.
  set(key, value) {
    const index = this.#hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    this.count++;

    const loadFactor = this.count / this.capacity;

    if (loadFactor > this.maxLoadFactor) {
      this.resize();
    }
  }

  // Average time: O(k + 1)
  // Worst-case time: O(k + n)
  // Auxiliary space: O(1)
  get(key) {
    const index = this.#hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }

    return undefined;
  }

  // Average time: O(k + 1)
  // Worst-case time: O(k + n)
  // Auxiliary space: O(1)
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

  // Average time: O(k + 1)
  // Worst-case time: O(k + n)
  // Auxiliary space: O(1)
  remove(key) {
    const index = this.#hash(key);
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

  // Time: O(m + n)
  // Auxiliary space: O(n) for the returned array
  keys() {
    const result = [];

    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];

      for (let j = 0; j < bucket.length; j++) {
        result.push(bucket[j][0]);
      }
    }

    return result;
  }

  // Time: O(m + n)
  // Auxiliary space: O(n) for the returned array
  values() {
    const result = [];

    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];

      for (let j = 0; j < bucket.length; j++) {
        result.push(bucket[j][1]);
      }
    }

    return result;
  }

  // Time: O(m + n)
  // Auxiliary space: O(n) for the returned array and entry pairs
  entries() {
    const result = [];

    for (let i = 0; i < this.buckets.length; i++) {
      const bucket = this.buckets[i];

      for (let j = 0; j < bucket.length; j++) {
        result.push([bucket[j][0], bucket[j][1]]);
      }
    }

    return result;
  }

  // Time: O(m)
  // Auxiliary space: O(1) beyond the table's existing storage
  clear() {
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = [];
    }

    this.count = 0;
  }

  // Time: O(m + n), excluding the cost of console rendering
  // Auxiliary space: O(1) for the method's own variables,
  // excluding console implementation and output buffering
  display() {
    for (let i = 0; i < this.buckets.length; i++) {
      console.log(`Bucket ${i}:`, this.buckets[i]);
    }
  }
}
