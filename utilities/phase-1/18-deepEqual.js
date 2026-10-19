function deepEqual(a, b) {
  // Same primitive value, or the exact same reference
  if (a === b) {
    return true;
  }

  // If either is a primitive or null, they can't be equal (=== already failed).
  // The null check matters because typeof null === 'object' in JavaScript.
  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  ) {
    return false;
  }

  // An array never equals a plain object
  if (Array.isArray(a) !== Array.isArray(b)) {
    return false;
  }

  // Arrays must have the same length (handles sparse arrays like [1, , ] vs [1])
  if (Array.isArray(a) && a.length !== b.length) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  // Different number of keys means different shape
  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    // b must have the same key
    if (!Object.hasOwn(b, key)) {
      return false;
    }

    // The values at that key must be deeply equal
    if (!deepEqual(a[key], b[key])) {
      return false;
    }
  }
  return true;
}

// console.log(deepEqual("foo", "foo")); // true
console.log(deepEqual({ id: 1 }, { id: 1 })); // true
// console.log(deepEqual([1, 2, 3], [1, 2, 3])); // true
// console.log(deepEqual([1, 2, 3], [1, 3, 2])); // false
// console.log(deepEqual([{ id: "1" }], [{ id: "2" }])); // false
