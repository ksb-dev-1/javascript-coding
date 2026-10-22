function compactObject(obj) {
  if (Array.isArray(obj)) {
    const cleanedObj = [];

    for (const value of obj) {
      if (value) {
        cleanedObj.push(
          typeof value === "object" && value !== null
            ? compactObject(value)
            : value,
        );
      }
    }
    return cleanedObj;
  }

  if (typeof obj === "object" && obj !== null) {
    const cleanedObj = {};

    for (const [key, value] of Object.entries(obj)) {
      if (value) {
        cleanedObj[key] =
          typeof value === "object" && value !== null
            ? compactObject(value)
            : value;
      }
    }
    return cleanedObj;
  }
  return obj;
}

// const obj = [null, 0, false, 1];
// const obj = { a: null, b: [false, 1] };
// const obj = [null, 0, 5, [0], [false, 16]];

const obj = [1, [2, 0], { a: 2, b: 0 }];

console.log(compactObject(obj));
