class HashTable {
  constructor(size = 5) {
    this.buckets = new Array(size);
    this.capacity = size;

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

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
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

  display() {
    for (let i = 0; i < this.buckets.length; i++) {
      console.log(i, this.buckets[i]);
    }
  }
}

const ht = new HashTable(6);
ht.set("id-1", "User-1");
ht.set("id-2", "User-2");
ht.set("id-3", "User-3");
ht.set("id-4", "User-4");
ht.set("id-5", "User-5");
ht.set("id-6", "User-6");

ht.display();
console.log(ht.get("id-2"));
console.log(ht.has("id-4"));
console.log(ht.remove("id-4"));
ht.display();
console.log(ht.get("id-4"));
console.log(ht.has("id-4"));

// console.log(ht.buckets);
// console.log(ht.buckets.length);
