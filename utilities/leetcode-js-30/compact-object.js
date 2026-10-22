function compactObject(obj) {
  const res = {};

  if (Array.isArray(obj)) {
  }
}

// const obj = [null, 0, false, 1];
// const obj = { a: null, b: [false, 1] };
const obj = [null, 0, 5, [0], [false, 16]];

console.log(compactObject(obj));
