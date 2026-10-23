function sortBy(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
}

// const arr = [5, 4, 1, 2, 3];
// const fn = (x) => x;

// const arr = [{ x: 1 }, { x: 0 }, { x: -1 }];
// const fn = (d) => d.x;

const arr = [
  [3, 4],
  [5, 2],
  [10, 1],
];
const fn = (x) => x[1];

console.log(sortBy(arr, fn));
