class LRUCache {
  constructor(capacity) {
    // Time: O(1)
    // Space: O(1)
    this.capacity = capacity;

    // Map stores key-value pairs in insertion order.
    // First entry = Least Recently Used (LRU).
    // Last entry = Most Recently Used (MRU).
    // Time: O(1) average for get, set, delete, and has.
    // Space: O(capacity)
    this.cache = new Map();
  }

  get(key) {
    // If the key doesn't exist, return -1.
    // Time: O(1) average
    // Space: O(1)
    if (!this.cache.has(key)) {
      return -1;
    }

    // Retrieve the value associated with the key.
    // Time: O(1) average
    // Space: O(1)
    const value = this.cache.get(key);

    // Delete the key so it can be reinserted at the end.
    // This marks the key as Most Recently Used (MRU).
    // Time: O(1) average
    // Space: O(1)
    this.cache.delete(key);

    // Reinsert the key at the end of the Map.
    // Time: O(1) average
    // Space: O(1)
    this.cache.set(key, value);

    // Return the retrieved value.
    // Time: O(1)
    // Space: O(1)
    return value;
  }

  put(key, value) {
    // If the key already exists, remove it first.
    // Reinserting it later updates its value and makes it MRU.
    // Time: O(1) average
    // Space: O(1)
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // The cache is full and this is a new key.
      // The first key in the Map is the LRU entry.
      // Time: O(1) average
      // Space: O(1)
      const lruKey = this.cache.keys().next().value;

      // Evict the least recently used entry.
      // Time: O(1) average
      // Space: O(1)
      this.cache.delete(lruKey);
    }

    // Insert the new or updated key-value pair at the end.
    // This makes the key the Most Recently Used (MRU).
    // Time: O(1) average
    // Space: O(1)
    this.cache.set(key, value);
  }
}
