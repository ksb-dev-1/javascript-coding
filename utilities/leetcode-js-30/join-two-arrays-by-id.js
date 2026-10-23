function join(arr1, arr2) {
  const map = new Map();

  // Step 1: Add all objects from arr1 to the Map.
  for (const obj of arr1) {
    map.set(obj.id, obj);
  }

  for (const obj of arr2) {
    if (map.has(obj.id)) {
      // Merge existing object with the incoming object.
      // Properties from arr2 take priority.
      map.set(obj.id, Object.assign({}, map.get(obj.id), obj));
    } else {
      // If the ID doesn't exist, add the new object.
      map.set(obj.id, obj);
    }
  }
  // return Array.from(map.values()).sort((a, b) => a.id - b.id);
  return [...map.values()].sort((a, b) => a.id - b.id);
}

// const arr1 = [
//   { id: 1, x: 1 },
//   { id: 2, x: 9 },
// ];
// const arr2 = [{ id: 3, x: 5 }];

// const arr1 = [
//   { id: 1, x: 2, y: 3 },
//   { id: 2, x: 3, y: 6 },
// ];
// const arr2 = [
//   { id: 2, x: 10, y: 20 },
//   { id: 3, x: 0, y: 0 },
// ];

const arr1 = [
  {
    id: 1,
    b: { b: 94 },
    v: [4, 3],
    y: 48,
  },
];
const arr2 = [
  {
    id: 1,
    b: { c: 84 },
    v: [1, 3],
  },
];

console.log(join(arr1, arr2));

/*

Object.assign(target, source1, source2);

- target: The object that receives the properties.
- source1: The first object to copy properties from.
- source2: The second object to copy properties from.

Properties are copied from left to right. If two objects have the same property, the later object's value wins.

*/
